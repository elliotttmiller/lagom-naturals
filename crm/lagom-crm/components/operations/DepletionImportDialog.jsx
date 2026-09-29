'use client';

import {useMemo,useRef,useState} from 'react';

const lower=value=>String(value||'').trim().toLowerCase();
const num=value=>{
  if(typeof value==='number')return value;
  const cleaned=String(value??'').replace(/[$,%\s,]/g,'');
  return cleaned===''?0:Number(cleaned)||0;
};
const text=value=>{
  if(value==null)return '';
  if(typeof value==='object'){
    if(value.text!=null)return String(value.text);
    if(value.result!=null)return String(value.result);
    if(Array.isArray(value.richText))return value.richText.map(part=>part.text||'').join('');
  }
  return String(value).trim();
};
const round2=value=>Math.round((Number(value)+Number.EPSILON)*100)/100;

const ALIASES={
  invoice:['invoice #','invoice','invoice number','invoice no','invoice no.'],
  product:['product','product name','item','sku name'],
  sku:['sku','product sku'],
  cases:['cases','cases sold','case qty','case quantity'],
  salePrice:['sale price','price','price / case','price per case','unit price'],
};

function findHeader(headers,aliases){
  const normalized=headers.map(value=>lower(value));
  for(const alias of aliases){
    const index=normalized.indexOf(alias);
    if(index>=0)return index;
  }
  return -1;
}

function buildLookup(values,keys){
  const map=new Map();
  values.forEach(value=>{
    keys(value).filter(Boolean).forEach(key=>map.set(lower(key),value));
  });
  return map;
}

export default function DepletionImportDialog({
  supabase,
  invoices=[],
  products=[],
  existingLines=[],
  onClose,
  onImported,
}){
  const fileRef=useRef(null);
  const [fileName,setFileName]=useState('');
  const [rows,setRows]=useState([]);
  const [reading,setReading]=useState(false);
  const [saving,setSaving]=useState(false);
  const [error,setError]=useState('');
  const [result,setResult]=useState('');

  const invoiceLookup=useMemo(()=>buildLookup(invoices,invoice=>[
    invoice.invoice_number,
    invoice.invoiceNumber,
  ]),[invoices]);
  const productLookup=useMemo(()=>buildLookup(products,product=>[
    product.name,
    product.sku,
  ]),[products]);

  const existingKeys=useMemo(()=>{
    const keys=new Set();
    existingLines.forEach(line=>{
      keys.add([
        String(line.invoiceNumber||'').trim(),
        lower(line.productId||line.sku||line.product),
      ].join('|'));
      if(line.sku){
        keys.add([
          String(line.invoiceNumber||'').trim(),
          lower(line.sku),
        ].join('|'));
      }
    });
    return keys;
  },[existingLines]);

  const ready=rows.filter(row=>row.issues.length===0);
  const review=rows.filter(row=>row.issues.length>0);

  const parseFile=async file=>{
    if(!file)return;
    setReading(true);setError('');setResult('');setRows([]);setFileName(file.name);
    try{
      const ExcelJS=(await import('exceljs')).default;
      const workbook=new ExcelJS.Workbook();
      await workbook.xlsx.load(await file.arrayBuffer());
      let selected=null,headerRow=0,headers=[];

      const preferred=['Depletion','Depletion Log'];
      const candidates=[
        ...preferred.map(name=>workbook.getWorksheet(name)).filter(Boolean),
        ...workbook.worksheets.filter(sheet=>!preferred.includes(sheet.name)),
      ];
      for(const sheet of candidates){
        const max=Math.min(sheet.rowCount||0,30);
        for(let rowNumber=1;rowNumber<=max;rowNumber++){
          const candidate=sheet.getRow(rowNumber).values.slice(1).map(text);
          if(findHeader(candidate,ALIASES.invoice)>=0&&findHeader(candidate,ALIASES.product)>=0&&findHeader(candidate,ALIASES.cases)>=0&&findHeader(candidate,ALIASES.salePrice)>=0){
            selected=sheet;headerRow=rowNumber;headers=candidate;break;
          }
        }
        if(selected)break;
      }
      if(!selected)throw new Error('Could not find a depletion table with Invoice #, Product, Cases, and Sale Price columns.');

      const index={
        invoice:findHeader(headers,ALIASES.invoice),
        product:findHeader(headers,ALIASES.product),
        sku:findHeader(headers,ALIASES.sku),
        cases:findHeader(headers,ALIASES.cases),
        salePrice:findHeader(headers,ALIASES.salePrice),
      };

      const parsed=[];
      const seen=new Set();
      for(let rowNumber=headerRow+1;rowNumber<=selected.rowCount;rowNumber++){
        const row=selected.getRow(rowNumber);
        const invoiceNumber=text(row.getCell(index.invoice+1).value);
        const productName=text(row.getCell(index.product+1).value);
        const sku=index.sku>=0?text(row.getCell(index.sku+1).value):'';
        const cases=num(row.getCell(index.cases+1).value);
        const salePrice=num(row.getCell(index.salePrice+1).value);
        if(!invoiceNumber&&!productName&&!sku&&!cases&&!salePrice)continue;

        const invoice=invoiceLookup.get(lower(invoiceNumber));
        const product=productLookup.get(lower(sku))||productLookup.get(lower(productName));
        const issues=[];
        if(!invoiceNumber)issues.push('Missing invoice number');
        else if(!invoice)issues.push('Invoice not found');
        if(!productName&&!sku)issues.push('Missing product');
        else if(!product)issues.push('Product not found');
        if(!(cases>0))issues.push('Cases must be greater than zero');
        if(salePrice<0)issues.push('Sale price cannot be negative');
        const cogs=product?.cogs_per_case;
        if(product&&(cogs==null||Number(cogs)<=0))issues.push('Approved COGS is missing');

        const productKey=lower(product?.sku||sku||product?.name||productName);
        const duplicateKey=[
          invoiceNumber.trim(),
          productKey,
        ].join('|');
        if(existingKeys.has(duplicateKey)||seen.has(duplicateKey))issues.push('Possible duplicate line');
        seen.add(duplicateKey);

        parsed.push({
          rowNumber,
          invoiceNumber,
          productName:product?.name||productName,
          sku:product?.sku||sku,
          cases,
          salePrice:round2(salePrice),
          invoice,
          product,
          issues,
        });
      }
      if(!parsed.length)throw new Error('No depletion rows were found beneath the detected header.');
      setRows(parsed);
    }catch(e){
      setError(e?.message||String(e));
    }finally{
      setReading(false);
      if(fileRef.current)fileRef.current.value='';
    }
  };

  const commit=async()=>{
    if(!ready.length||saving)return;
    setSaving(true);setError('');setResult('');
    try{
      const payload=ready.map(row=>{
        const revenue=round2(row.cases*row.salePrice);
        const cogsPerCase=round2(row.product.cogs_per_case);
        const totalCogs=round2(row.cases*cogsPerCase);
        return {
          invoice_id:row.invoice.id,
          product_id:row.product.id,
          sku:row.product.sku||null,
          product_name:row.product.name,
          description:row.product.description||null,
          category:row.product.depletion_category||row.product.category||null,
          cases_sold:row.cases,
          sale_price:row.salePrice,
          revenue,
          cogs_per_case:cogsPerCase,
          total_cogs:totalCogs,
          gross_profit:round2(revenue-totalCogs),
          cost_reference:row.product.cost_per_unit_reference??null,
          source_line_key:[
            'depletion-import',
            row.invoiceNumber,
            row.product.sku||row.product.id,
          ].join(':'),
        };
      });
      const response=await supabase.from('invoice_items').insert(payload);
      if(response?.error)throw response.error;
      setResult('Imported '+payload.length+' depletion line'+(payload.length===1?'':'s')+'.');
      setRows(current=>current.filter(row=>row.issues.length>0));
      await onImported?.();
    }catch(e){
      setError('Import failed: '+(e?.message||String(e)));
    }finally{
      setSaving(false);
    }
  };

  return <div className="ops-modal-backdrop" role="presentation" onMouseDown={event=>event.target===event.currentTarget&&onClose?.()}>
    <section className="ops-modal ops-import-modal" role="dialog" aria-modal="true" aria-labelledby="depletion-import-title">
      <header className="ops-modal-head">
        <div>
          <div className="ops-eyebrow">Commercial data</div>
          <h2 id="depletion-import-title">Import depletion</h2>
          <p>Import line-level product movement into existing invoices. Rows are validated before anything is written.</p>
        </div>
        <button type="button" className="ops-modal-close" onClick={onClose} aria-label="Close import dialog">×</button>
      </header>

      <div className="ops-import-drop">
        <input ref={fileRef} type="file" accept=".xlsx" hidden onChange={event=>parseFile(event.target.files?.[0])}/>
        <button className="ops-btn" type="button" disabled={reading||saving} onClick={()=>fileRef.current?.click()}>
          {reading?'Reading workbook…':fileName?'Choose another workbook':'Choose XLSX workbook'}
        </button>
        <span>{fileName||'Expected columns: Invoice #, Product, Cases, Sale Price'}</span>
      </div>

      {error&&<div className="ops-import-message ops-import-message--error">{error}</div>}
      {result&&<div className="ops-import-message ops-import-message--success">{result}</div>}

      {!!rows.length&&<>
        <div className="ops-import-summary">
          <div><span>Rows detected</span><strong>{rows.length}</strong></div>
          <div><span>Ready</span><strong>{ready.length}</strong></div>
          <div><span>Needs review</span><strong>{review.length}</strong></div>
        </div>
        <div className="ops-import-table">
          <table>
            <thead><tr><th>Row</th><th>Invoice</th><th>Product</th><th>Cases</th><th>Sale Price</th><th>Validation</th></tr></thead>
            <tbody>{rows.slice(0,100).map(row=><tr key={row.rowNumber}>
              <td>{row.rowNumber}</td>
              <td>{row.invoiceNumber||'—'}</td>
              <td>{row.productName||row.sku||'—'}</td>
              <td>{row.cases||'—'}</td>
              <td>{row.salePrice?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(row.salePrice):'—'}</td>
              <td>{row.issues.length?<span className="ops-import-issues">{row.issues.join(' · ')}</span>:<span className="ops-import-ready">Ready</span>}</td>
            </tr>)}</tbody>
          </table>
        </div>
        {rows.length>100&&<p className="ops-import-note">Preview limited to the first 100 rows. All validated rows remain eligible for import.</p>}
      </>}

      <footer className="ops-modal-actions">
        <button type="button" className="ops-btn" onClick={onClose} disabled={saving}>Cancel</button>
        <button type="button" className="ops-btn ops-btn--primary" onClick={commit} disabled={!ready.length||saving}>
          {saving?'Importing…':'Import '+ready.length+' valid row'+(ready.length===1?'':'s')}
        </button>
      </footer>
    </section>
  </div>;
}
