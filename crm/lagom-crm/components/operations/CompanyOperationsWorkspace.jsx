'use client';

import {useCallback,useEffect,useMemo,useState} from 'react';
import {
  accountPerformance,
  arAging,
  buildCompanyOperationsModel,
  monthlyPerformance,
  productPerformance,
  repPerformance,
} from '../../lib/companyOperationsDomain';
import {
  loadCompanyOperationsData,
  subscribeCompanyOperations,
} from '../../lib/companyOperationsData';
import DepletionImportDialog from './DepletionImportDialog';
import QualityCheckDialog from './QualityCheckDialog';

const money = value => new Intl.NumberFormat('en-US',{
  style:'currency',
  currency:'USD',
  maximumFractionDigits:2,
}).format(Number(value)||0);
const number = value => new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(Number(value)||0);
const percent = value => new Intl.NumberFormat('en-US',{style:'percent',maximumFractionDigits:1}).format(Number(value)||0);
const date = value => {
  if(!value)return '—';
  try{
    return new Date(String(value).slice(0,10)+'T12:00:00').toLocaleDateString('en-US',{
      month:'short',day:'numeric',year:'numeric'
    });
  }catch{return value}
};
const lower = value => String(value||'').toLowerCase();
const sum = (rows,key) => rows.reduce((total,row)=>total+(Number(row[key])||0),0);

function Metric({label,value,detail,tone='default'}){
  return <article className={'ops-metric ops-metric--'+tone}>
    <span>{label}</span>
    <strong>{value}</strong>
    {detail&&<small>{detail}</small>}
  </article>;
}

function SectionHeader({eyebrow,title,description,actions}){
  return <header className="ops-page-head">
    <div>
      <div className="ops-eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    {actions&&<div className="ops-page-actions">{actions}</div>}
  </header>;
}

function TableShell({children,footer,compact=false}){
  return <section className={'ops-table-shell'+(compact?' ops-table-shell--compact':'')}>
    <div className="ops-table-scroll">
      <table>{children}</table>
    </div>
    {footer&&<footer>{footer}</footer>}
  </section>;
}

function EmptyState({title,body}){
  return <div className="ops-empty">
    <strong>{title}</strong>
    {body&&<span>{body}</span>}
  </div>;
}

function Status({children,tone}){
  const text=String(children||'');
  const inferred=tone||(
    ['Paid','Clear','OK','Healthy'].includes(text)?'good':
    ['Overdue','Urgent','Immediate Action','High'].includes(text)?'bad':
    ['Partial','Due','Due Soon','Follow Up','Escalate','Medium'].includes(text)?'warn':'neutral'
  );
  return <span className={'ops-status ops-status--'+inferred}>{text}</span>;
}

function RevenueTrend({rows}){
  const max=Math.max(...rows.map(row=>row.revenue),1);
  const points=rows.map((row,index)=>{
    const x=24+(index*(672/Math.max(rows.length-1,1)));
    const y=174-(row.revenue/max*132);
    return x+','+y;
  }).join(' ');
  return <section className="ops-panel ops-trend">
    <div className="ops-panel-head">
      <div><span>Performance</span><h2>Revenue trend</h2></div>
      <strong>{money(rows.reduce((total,row)=>total+row.revenue,0))}</strong>
    </div>
    <svg viewBox="0 0 720 210" role="img" aria-label="Monthly revenue trend">
      <line x1="24" y1="174" x2="696" y2="174" className="ops-chart-axis"/>
      <line x1="24" y1="130" x2="696" y2="130" className="ops-chart-grid"/>
      <line x1="24" y1="86" x2="696" y2="86" className="ops-chart-grid"/>
      <line x1="24" y1="42" x2="696" y2="42" className="ops-chart-grid"/>
      <polyline points={points} className="ops-chart-line"/>
      {rows.map((row,index)=>{
        const x=24+(index*(672/Math.max(rows.length-1,1)));
        const y=174-(row.revenue/max*132);
        return <circle key={row.label} cx={x} cy={y} r="4" className="ops-chart-dot"><title>{row.label+': '+money(row.revenue)}</title></circle>;
      })}
    </svg>
    <div className="ops-month-labels">{rows.map(row=><span key={row.label}>{row.label}</span>)}</div>
  </section>;
}

function AgingPanel({rows}){
  const max=Math.max(...rows.map(row=>row.amount),1);
  return <section className="ops-panel">
    <div className="ops-panel-head"><div><span>Receivables</span><h2>AR aging</h2></div></div>
    <div className="ops-aging-list">
      {rows.map(row=><div className="ops-aging-row" key={row.bucket}>
        <div><strong>{row.bucket}</strong><span>{row.invoices} invoice{row.invoices===1?'':'s'}</span></div>
        <div className="ops-aging-track"><i style={{width:(row.amount/max*100)+'%'}}/></div>
        <b>{money(row.amount)}</b>
      </div>)}
    </div>
  </section>;
}

function AttentionPanel({issues,openAR,onOpenAR}){
  const high=issues.filter(issue=>issue.severity==='High').length;
  const medium=issues.filter(issue=>issue.severity==='Medium').length;
  return <section className="ops-panel">
    <div className="ops-panel-head">
      <div><span>Quality & collections</span><h2>Needs attention</h2></div>
      <strong>{issues.length+openAR.length}</strong>
    </div>
    <div className="ops-attention-summary">
      <div><span>High priority QA</span><b>{high}</b></div>
      <div><span>Review items</span><b>{medium}</b></div>
      <button type="button" onClick={onOpenAR}><span>Open receivables</span><b>{openAR.length}</b></button>
    </div>
    {issues.length?<div className="ops-issue-list">
      {issues.slice(0,5).map((issue,index)=><div key={issue.scope+issue.record+issue.issue+index}>
        <Status tone={issue.severity==='High'?'bad':issue.severity==='Medium'?'warn':'neutral'}>{issue.severity}</Status>
        <span><strong>{issue.record}</strong>{issue.issue}</span>
      </div>)}
    </div>:<EmptyState title="All clear" body="No workbook-derived validation issues are currently open."/>}
  </section>;
}

function FilterField({label,children,wide=false}){
  return <label className={'ops-filter'+(wide?' ops-filter--wide':'')}>
    <span>{label}</span>
    {children}
  </label>;
}

function summarizeAccounts(lines,invoices){
  const arByAccount=new Map();
  invoices.forEach(invoice=>{
    const key=invoice.accountName||'Unknown';
    arByAccount.set(key,(arByAccount.get(key)||0)+invoice.balanceDue);
  });
  const map=new Map();
  lines.forEach(line=>{
    const key=line.account||'Unknown';
    if(!map.has(key))map.set(key,{account:key,city:line.city||'',revenue:0,cases:0,invoices:new Set(),lastOrder:null});
    const row=map.get(key);
    row.revenue+=line.revenue;
    row.cases+=line.casesSold;
    if(line.invoiceId)row.invoices.add(line.invoiceId);
    if(line.invoiceDate&&(!row.lastOrder||line.invoiceDate>row.lastOrder))row.lastOrder=line.invoiceDate;
  });
  return [...map.values()].map(row=>({...row,invoiceCount:row.invoices.size,currentOpenAR:arByAccount.get(row.account)||0})).sort((a,b)=>b.revenue-a.revenue);
}

function summarizeReps(lines,invoices){
  const arByRep=new Map();
  invoices.forEach(invoice=>{
    const key=invoice.repName||'Unassigned';
    arByRep.set(key,(arByRep.get(key)||0)+invoice.balanceDue);
  });
  const map=new Map();
  lines.forEach(line=>{
    const key=line.rep||'Unassigned';
    if(!map.has(key))map.set(key,{rep:key,revenue:0,cases:0,grossProfit:0,paidRevenue:0,invoices:new Set()});
    const row=map.get(key);
    row.revenue+=line.revenue;
    row.cases+=line.casesSold;
    row.grossProfit+=line.grossProfit;
    if(line.paymentStatus==='Paid')row.paidRevenue+=line.revenue;
    if(line.invoiceId)row.invoices.add(line.invoiceId);
  });
  return [...map.values()].map(row=>({...row,invoiceCount:row.invoices.size,currentOpenAR:arByRep.get(row.rep)||0})).sort((a,b)=>b.revenue-a.revenue);
}

export default function CompanyOperationsWorkspace({section='overview',supabase,prospects=[],user,go}){
  const [source,setSource]=useState({products:[],invoices:[],items:[],commissions:[],reorders:[],errors:[]});
  const [loading,setLoading]=useState(true);
  const [year,setYear]=useState(String(new Date().getFullYear()));
  const [query,setQuery]=useState('');
  const [rep,setRep]=useState('All');
  const [aging,setAging]=useState('All');
  const [productLine,setProductLine]=useState('All');
  const [product,setProduct]=useState('All');
  const [status,setStatus]=useState('All');
  const [reportStart,setReportStart]=useState(year+'-01-01');
  const [reportEnd,setReportEnd]=useState(year+'-12-31');
  const [reportAccount,setReportAccount]=useState('All');
  const [commissionRep,setCommissionRep]=useState('All');
  const [importOpen,setImportOpen]=useState(false);
  const [checkOpen,setCheckOpen]=useState(false);

  const isAdmin=user?.role==='admin'||user?.role==='investor';
  const canWrite=user?.role!=='investor';
  const me=String(user?.display_name||user?.name||'').trim();

  const load=useCallback(async()=>{
    setLoading(true);
    const next=await loadCompanyOperationsData(supabase);
    setSource(next);
    setLoading(false);
  },[supabase]);

  useEffect(()=>{load()},[load]);
  useEffect(()=>subscribeCompanyOperations(supabase,load),[supabase,load]);

  const scopedInvoices=useMemo(()=>isAdmin?source.invoices:source.invoices.filter(invoice=>lower(invoice.rep_name)===lower(me)),[source.invoices,isAdmin,me]);
  const scopedIds=useMemo(()=>new Set(scopedInvoices.map(invoice=>invoice.id)),[scopedInvoices]);
  const scopedItems=useMemo(()=>source.items.filter(item=>scopedIds.has(item.invoice_id)),[source.items,scopedIds]);
  const scopedCommissions=useMemo(()=>isAdmin?source.commissions:source.commissions.filter(row=>lower(row.rep_name)===lower(me)),[source.commissions,isAdmin,me]);
  const scopedReorders=useMemo(()=>isAdmin?source.reorders:source.reorders.filter(row=>lower(row.rep_name)===lower(me)),[source.reorders,isAdmin,me]);

  const years=useMemo(()=>{
    const found=[...new Set(scopedInvoices.map(invoice=>String(invoice.issued_at||'').slice(0,4)).filter(Boolean))].sort().reverse();
    return found.length?found:[String(new Date().getFullYear())];
  },[scopedInvoices]);

  useEffect(()=>{
    if(years.length&&!years.includes(year))setYear(years[0]);
  },[years,year]);

  useEffect(()=>{
    setReportStart(year+'-01-01');
    setReportEnd(year+'-12-31');
  },[year]);

  const baseModel=useMemo(()=>buildCompanyOperationsModel({
    invoices:scopedInvoices,
    items:scopedItems,
    products:source.products,
    commissions:scopedCommissions,
    reorders:scopedReorders,
  }),[scopedInvoices,scopedItems,source.products,scopedCommissions,scopedReorders]);

  const yearInvoiceRaw=useMemo(()=>scopedInvoices.filter(invoice=>String(invoice.issued_at||'').startsWith(year)),[scopedInvoices,year]);
  const yearIds=useMemo(()=>new Set(yearInvoiceRaw.map(invoice=>invoice.id)),[yearInvoiceRaw]);
  const yearModel=useMemo(()=>buildCompanyOperationsModel({
    invoices:yearInvoiceRaw,
    items:scopedItems.filter(item=>yearIds.has(item.invoice_id)),
    products:source.products,
    commissions:scopedCommissions.filter(row=>String(row.commission_eligible_date||'').startsWith(year)),
    reorders:scopedReorders,
  }),[yearInvoiceRaw,scopedItems,yearIds,source.products,scopedCommissions,scopedReorders,year]);

  const monthly=useMemo(()=>monthlyPerformance(yearModel,year),[yearModel,year]);
  const agingRows=useMemo(()=>arAging(yearModel),[yearModel]);
  const reps=useMemo(()=>[...new Set(baseModel.invoices.map(invoice=>invoice.repName).filter(Boolean))].sort(),[baseModel.invoices]);
  const accounts=useMemo(()=>[...new Set(baseModel.invoices.map(invoice=>invoice.accountName).filter(Boolean))].sort(),[baseModel.invoices]);
  const productLines=useMemo(()=>[...new Set(baseModel.lines.map(line=>line.productLine).filter(Boolean))].sort(),[baseModel.lines]);
  const products=useMemo(()=>[...new Set(baseModel.lines.map(line=>line.product).filter(Boolean))].sort(),[baseModel.lines]);

  const resetFilters=()=>{
    setQuery('');
    setRep('All');
    setAging('All');
    setProductLine('All');
    setProduct('All');
    setStatus('All');
    setReportAccount('All');
    setCommissionRep('All');
    setReportStart(year+'-01-01');
    setReportEnd(year+'-12-31');
  };

  const startNewInvoice=()=>{
    try{sessionStorage.setItem('lagom_sales_new_invoice','1')}catch{}
    go?.('sales','transactions');
  };

  const headerAction=canWrite?<button className="ops-btn ops-btn--primary" type="button" onClick={startNewInvoice}>New invoice</button>:null;
  const qualityDialog=checkOpen?<QualityCheckDialog model={yearModel} onClose={()=>setCheckOpen(false)}/>:null;
  const importDialog=importOpen?<DepletionImportDialog supabase={supabase} invoices={source.invoices} products={source.products} existingLines={baseModel.lines} onClose={()=>setImportOpen(false)} onImported={load}/>:null;

  if(loading)return <div className="ops-loading"><span/>Loading company operations…</div>;

  const errors=source.errors||[];
  const common=<>
    {errors.length>0&&<div className="ops-source-warning"><strong>Commercial data connection needs attention.</strong><span>{errors.map(error=>error.source+': '+error.message).join(' · ')}</span></div>}
  </>;

  if(section==='depletion'){
    let rows=yearModel.lines.filter(line=>{
      const text=[line.invoiceNumber,line.account,line.product,line.sku,line.rep,line.city].join(' ').toLowerCase();
      return (!query||text.includes(query.toLowerCase())) &&
        (rep==='All'||line.rep===rep) &&
        (productLine==='All'||line.productLine===productLine) &&
        (product==='All'||line.product===product) &&
        (status==='All'||line.paymentStatus===status);
    });
    const revenue=sum(rows,'revenue'),cases=sum(rows,'casesSold'),gp=sum(rows,'grossProfit');
    return <div className="ops">
      {common}
      <SectionHeader eyebrow="Commercial operations" title="Depletion" description="Invoice-linked product movement, SKU economics and account context translated directly from the depletion workbook model." actions={<>
        <button className="ops-btn" type="button" onClick={()=>setCheckOpen(true)}>Run check</button>
        {canWrite&&<button className="ops-btn" type="button" onClick={()=>setImportOpen(true)}>Import depletion</button>}
        {headerAction}
      </>}/>
      <div className="ops-control-row">
        <FilterField label="Reporting year"><select value={year} onChange={e=>setYear(e.target.value)}>{years.map(value=><option key={value}>{value}</option>)}</select></FilterField>
        <FilterField label="Search" wide><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Invoice, account, product, SKU or rep"/></FilterField>
        <FilterField label="Rep"><select value={rep} onChange={e=>setRep(e.target.value)}><option>All</option>{reps.map(value=><option key={value}>{value}</option>)}</select></FilterField>
        <FilterField label="Product line"><select value={productLine} onChange={e=>setProductLine(e.target.value)}><option>All</option>{productLines.map(value=><option key={value}>{value}</option>)}</select></FilterField>
        <FilterField label="Product"><select value={product} onChange={e=>setProduct(e.target.value)}><option>All</option>{products.map(value=><option key={value}>{value}</option>)}</select></FilterField>
        <FilterField label="Payment"><select value={status} onChange={e=>setStatus(e.target.value)}><option>All</option>{['Paid','Partial','Unpaid'].map(value=><option key={value}>{value}</option>)}</select></FilterField>
        <button className="ops-btn ops-filter-reset" type="button" onClick={resetFilters}>Reset filters</button>
      </div>
      <div className="ops-metrics ops-metrics--four">
        <Metric label="Records" value={number(rows.length)} detail="Filtered depletion lines"/>
        <Metric label="Revenue" value={money(revenue)} detail="Cases × sale price"/>
        <Metric label="Cases" value={number(cases)} detail="Filtered sell-through"/>
        <Metric label="Gross profit" value={money(gp)} detail={revenue?percent(gp/revenue)+' margin':'No filtered revenue'}/>
      </div>
      <TableShell footer={'Showing '+rows.length+' depletion lines'}>
        <thead><tr><th>Invoice</th><th>Date</th><th>Account</th><th>Rep</th><th>Product</th><th>SKU</th><th>Cases</th><th>Sale Price</th><th>Revenue</th><th>COGS</th><th>Gross Profit</th><th>Payment</th></tr></thead>
        <tbody>{rows.length?rows.map(row=><tr key={row.id}>
          <td><b>{row.invoiceNumber||'—'}</b></td><td>{date(row.invoiceDate)}</td><td>{row.account||'—'}</td><td>{row.rep||'—'}</td><td><strong>{row.product||'—'}</strong></td><td>{row.sku||'—'}</td><td>{number(row.casesSold)}</td><td>{money(row.salePrice)}</td><td>{money(row.revenue)}</td><td>{money(row.totalCogs)}</td><td className={row.grossProfit<0?'ops-negative':'ops-positive'}>{money(row.grossProfit)}</td><td><Status>{row.paymentStatus}</Status></td>
        </tr>):<tr><td colSpan="12"><EmptyState title="No depletion records" body="No lines match the current filters."/></td></tr>}</tbody>
      </TableShell>
      {qualityDialog}
      {importDialog}
    </div>;
  }

  if(section==='ar'){
    let rows=yearModel.invoices.filter(invoice=>invoice.balanceDue>0);
    rows=rows.filter(invoice=>{
      const text=[invoice.invoiceNumber,invoice.accountName,invoice.repName,invoice.city].join(' ').toLowerCase();
      return (!query||text.includes(query.toLowerCase()))&&(rep==='All'||invoice.repName===rep)&&(aging==='All'||invoice.aging===aging);
    }).sort((a,b)=>b.daysPastDue-a.daysPastDue||b.balanceDue-a.balanceDue);
    const overdue=rows.filter(row=>row.isOverdue);
    return <div className="ops">
      {common}
      <SectionHeader eyebrow="Sales & operations" title="Accounts receivable" description="Who owes Lagom money, how much is outstanding and which balances need action now." actions={<button className="ops-btn" type="button" onClick={()=>go?.('sales','ar')}>Open invoice workspace</button>}/>
      <div className="ops-control-row">
        <FilterField label="Reporting year"><select value={year} onChange={e=>setYear(e.target.value)}>{years.map(value=><option key={value}>{value}</option>)}</select></FilterField>
        <FilterField label="Search" wide><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Customer or invoice"/></FilterField>
        <FilterField label="Aging"><select value={aging} onChange={e=>setAging(e.target.value)}><option>All</option>{['Current','1-30','31-60','61-90','90+'].map(value=><option key={value}>{value}</option>)}</select></FilterField>
        {isAdmin&&<FilterField label="Rep"><select value={rep} onChange={e=>setRep(e.target.value)}><option>All</option>{reps.map(value=><option key={value}>{value}</option>)}</select></FilterField>}
        <button className="ops-btn ops-filter-reset" type="button" onClick={resetFilters}>Reset filters</button>
      </div>
      <div className="ops-metrics ops-metrics--four">
        <Metric label="Open AR" value={money(sum(rows,'balanceDue'))} detail={rows.length+' open invoices'} tone={rows.length?'warn':'default'}/>
        <Metric label="Overdue AR" value={money(sum(overdue,'balanceDue'))} detail={overdue.length+' overdue'} tone={overdue.length?'bad':'default'}/>
        <Metric label="Current due" value={money(sum(rows.filter(row=>row.aging==='Current'),'balanceDue'))} detail="Not yet overdue"/>
        <Metric label="90+ exposure" value={money(sum(rows.filter(row=>row.aging==='90+'),'balanceDue'))} detail="Highest collection priority" tone={rows.some(row=>row.aging==='90+')?'bad':'default'}/>
      </div>
      <div className="ops-grid ops-grid--ar">
        <AgingPanel rows={arAging({...yearModel,invoices:rows})}/>
        <section className="ops-panel">
          <div className="ops-panel-head"><div><span>Collections</span><h2>Priority queue</h2></div></div>
          {rows.length?<div className="ops-priority-list">{rows.slice(0,6).map(row=><button type="button" key={row.id} onClick={()=>go?.('sales','ar')}>
            <span><strong>{row.accountName}</strong><small>{row.invoiceNumber} · {row.daysPastDue?row.daysPastDue+' days past due':'Current'}</small></span>
            <span><b>{money(row.balanceDue)}</b><Status>{row.action}</Status></span>
          </button>)}</div>:<EmptyState title="No open receivables" body="All invoices are paid for the selected period."/>}
        </section>
      </div>
      <TableShell footer={'Showing '+rows.length+' open invoices'}>
        <thead><tr><th>Invoice</th><th>Account</th><th>Rep</th><th>Invoice Date</th><th>Due Date</th><th>Invoice Total</th><th>Amount Paid</th><th>Balance Due</th><th>Days Past Due</th><th>Aging</th><th>Action</th></tr></thead>
        <tbody>{rows.length?rows.map(row=><tr key={row.id}><td><b>{row.invoiceNumber}</b></td><td>{row.accountName}</td><td>{row.repName||'—'}</td><td>{date(row.issuedAt)}</td><td>{date(row.dueDate)}</td><td>{money(row.invoiceTotal)}</td><td>{money(row.amountPaid)}</td><td className="ops-negative"><b>{money(row.balanceDue)}</b></td><td>{row.daysPastDue}</td><td><Status>{row.aging}</Status></td><td><Status>{row.action}</Status></td></tr>):<tr><td colSpan="11"><EmptyState title="No open receivables"/></td></tr>}</tbody>
      </TableShell>
    </div>;
  }

  if(section==='reports'){
    let reportInvoices=baseModel.invoices.filter(invoice=>{
      const d=invoice.issuedAt;
      return invoice.status!=='Draft'&&d&&(!reportStart||d>=reportStart)&&(!reportEnd||d<=reportEnd)&&
        (rep==='All'||invoice.repName===rep)&&(reportAccount==='All'||invoice.accountName===reportAccount);
    });
    const ids=new Set(reportInvoices.map(invoice=>invoice.id));
    let reportLines=baseModel.lines.filter(line=>ids.has(line.invoiceId)&&(productLine==='All'||line.productLine===productLine));
    if(productLine!=='All'){
      const matchedIds=new Set(reportLines.map(line=>line.invoiceId));
      reportInvoices=reportInvoices.filter(invoice=>matchedIds.has(invoice.id));
    }
    const productsReport=productPerformance(reportLines).filter(row=>row.revenue||row.cases);
    const accountsReport=summarizeAccounts(reportLines,baseModel.invoices).filter(row=>row.revenue||row.cases);
    const repsReport=summarizeReps(reportLines,baseModel.invoices).filter(row=>row.revenue||row.cases);
    const revenue=sum(reportLines,'revenue'),cases=sum(reportLines,'casesSold'),gp=sum(reportLines,'grossProfit');
    return <div className="ops">
      {common}
      <SectionHeader eyebrow="Business intelligence" title="Reports" description="Product, account and rep performance from the same canonical invoice and depletion records."/>
      <div className="ops-control-row">
        <FilterField label="Start date"><input type="date" value={reportStart} onChange={e=>setReportStart(e.target.value)}/></FilterField>
        <FilterField label="End date"><input type="date" value={reportEnd} onChange={e=>setReportEnd(e.target.value)}/></FilterField>
        {isAdmin&&<FilterField label="Sales rep"><select value={rep} onChange={e=>setRep(e.target.value)}><option>All</option>{reps.map(value=><option key={value}>{value}</option>)}</select></FilterField>}
        <FilterField label="Account"><select value={reportAccount} onChange={e=>setReportAccount(e.target.value)}><option>All</option>{accounts.map(value=><option key={value}>{value}</option>)}</select></FilterField>
        <FilterField label="Product line"><select value={productLine} onChange={e=>setProductLine(e.target.value)}><option>All</option>{productLines.map(value=><option key={value}>{value}</option>)}</select></FilterField>
        <button className="ops-btn ops-filter-reset" type="button" onClick={resetFilters}>Reset filters</button>
      </div>
      <div className="ops-metrics ops-metrics--five">
        <Metric label="Revenue" value={money(revenue)} detail={reportInvoices.length+' invoices'}/>
        <Metric label="Cases" value={number(cases)} detail="Selected period"/>
        <Metric label="Gross profit" value={money(gp)} detail={revenue?percent(gp/revenue)+' margin':'No revenue'}/>
        <Metric label="Accounts" value={number(accountsReport.length)} detail="Active in period"/>
        <Metric label="Current open AR" value={money(sum(accountsReport,'currentOpenAR'))} detail="Current exposure, not period revenue"/>
      </div>
      <div className="ops-report-grid">
        <section>
          <div className="ops-section-title"><span>Product performance</span><small>{productsReport.length} active products</small></div>
          <TableShell compact footer={'Showing '+productsReport.length+' products'}>
            <thead><tr><th>Product</th><th>Line</th><th>Cases</th><th>Revenue</th><th>COGS</th><th>Gross Profit</th><th>Margin</th></tr></thead>
            <tbody>{productsReport.length?productsReport.map(row=><tr key={row.key}><td><b>{row.product}</b><small className="ops-cell-sub">{row.sku||''}</small></td><td>{row.productLine||'—'}</td><td>{number(row.cases)}</td><td>{money(row.revenue)}</td><td>{money(row.cogs)}</td><td>{money(row.grossProfit)}</td><td>{percent(row.margin)}</td></tr>):<tr><td colSpan="7"><EmptyState title="No product activity"/></td></tr>}</tbody>
          </TableShell>
        </section>
        <section>
          <div className="ops-section-title"><span>Account performance</span><small>{accountsReport.length} active accounts</small></div>
          <TableShell compact footer={'Showing '+accountsReport.length+' accounts'}>
            <thead><tr><th>Account</th><th>City</th><th>Revenue</th><th>Cases</th><th>Invoices</th><th>Current Open AR</th></tr></thead>
            <tbody>{accountsReport.length?accountsReport.map(row=><tr key={row.account}><td><b>{row.account}</b></td><td>{row.city||'—'}</td><td>{money(row.revenue)}</td><td>{number(row.cases)}</td><td>{row.invoiceCount}</td><td>{money(row.currentOpenAR)}</td></tr>):<tr><td colSpan="6"><EmptyState title="No account activity"/></td></tr>}</tbody>
          </TableShell>
        </section>
      </div>
      <div className="ops-section-title ops-section-title--spaced"><span>Rep performance</span><small>{repsReport.length} active reps</small></div>
      <TableShell compact footer={'Showing '+repsReport.length+' reps'}>
        <thead><tr><th>Rep</th><th>Revenue</th><th>Cases</th><th>Gross Profit</th><th>Invoices</th><th>Paid Revenue</th><th>Current Open AR</th></tr></thead>
        <tbody>{repsReport.length?repsReport.map(row=><tr key={row.rep}><td><b>{row.rep}</b></td><td>{money(row.revenue)}</td><td>{number(row.cases)}</td><td>{money(row.grossProfit)}</td><td>{row.invoiceCount}</td><td>{money(row.paidRevenue)}</td><td>{money(row.currentOpenAR)}</td></tr>):<tr><td colSpan="7"><EmptyState title="No rep activity"/></td></tr>}</tbody>
      </TableShell>
    </div>;
  }

  if(section==='commissions'){
    let rows=baseModel.commissions.filter(row=>(!reportStart||row.eligibleDate>=reportStart)&&(!reportEnd||row.eligibleDate<=reportEnd));
    if(!isAdmin)rows=rows.filter(row=>lower(row.rep_name)===lower(me));
    if(isAdmin&&commissionRep!=='All')rows=rows.filter(row=>row.rep_name===commissionRep);
    const eligibleRevenue=sum(rows,'paidRevenue');
    const eligibleCases=sum(rows,'cases');
    const newRevenue=rows.filter(row=>lower(row.sale_type).startsWith('new')).reduce((total,row)=>total+row.paidRevenue,0);
    const reorderRevenue=rows.filter(row=>!lower(row.sale_type).startsWith('new')).reduce((total,row)=>total+row.paidRevenue,0);
    const commission=sum(rows,'commissionAmount');
    const rates=[...new Set(rows.map(row=>row.commissionRate).filter(value=>value!=null))];
    const repBreakdown=[...rows.reduce((map,row)=>{
      const key=row.rep_name||'Unassigned';
      if(!map.has(key))map.set(key,{rep:key,revenue:0,cases:0,commission:0,invoices:new Set()});
      const item=map.get(key);item.revenue+=row.paidRevenue;item.cases+=row.cases;item.commission+=row.commissionAmount;item.invoices.add(row.invoice_id);
      return map;
    },new Map()).values()].sort((a,b)=>b.commission-a.commission);
    return <div className="ops">
      {common}
      <SectionHeader eyebrow="Sales compensation" title="Commissions" description="Payment-based commission eligibility using the approved rep rates stored in CRM. No payout rate is inferred or invented."/>
      <div className="ops-info-strip"><strong>Eligibility follows payment date.</strong><span>Only fully paid invoices with a commission eligible date inside the selected period are included. Ambiguous bonus rules remain excluded.</span></div>
      <div className="ops-control-row">
        {isAdmin&&<FilterField label="Sales rep"><select value={commissionRep} onChange={e=>setCommissionRep(e.target.value)}><option>All</option>{reps.map(value=><option key={value}>{value}</option>)}</select></FilterField>}
        <FilterField label="Period start"><input type="date" value={reportStart} onChange={e=>setReportStart(e.target.value)}/></FilterField>
        <FilterField label="Period end"><input type="date" value={reportEnd} onChange={e=>setReportEnd(e.target.value)}/></FilterField>
        <button className="ops-btn ops-filter-reset" type="button" onClick={resetFilters}>Reset filters</button>
      </div>
      <div className="ops-metrics ops-metrics--five">
        <Metric label="Eligible revenue" value={money(eligibleRevenue)} detail={rows.length+' paid invoices'}/>
        <Metric label="New revenue" value={money(newRevenue)} detail="Paid new-placement revenue"/>
        <Metric label="Reorder revenue" value={money(reorderRevenue)} detail="Paid reorder revenue"/>
        <Metric label="Eligible cases" value={number(eligibleCases)} detail="Same eligible invoice population"/>
        <Metric label="Commission" value={money(commission)} detail={rates.length===1?percent(rates[0])+' applied rate':'Rates follow rep settings'}/>
      </div>
      {isAdmin&&<section className="ops-panel ops-panel--flush">
        <div className="ops-panel-head"><div><span>Rep summary</span><h2>Eligible commission by rep</h2></div></div>
        {repBreakdown.length?<div className="ops-rep-list">{repBreakdown.map(row=><div key={row.rep}><strong>{row.rep}</strong><span>{row.invoices.size} invoices · {number(row.cases)} cases</span><b>{money(row.commission)}</b></div>)}</div>:<EmptyState title="No eligible commissions" body="No paid invoices fall inside the selected period."/>}
      </section>}
      <div className="ops-section-title ops-section-title--spaced"><span>Eligible invoices</span><small>{rows.length} records</small></div>
      <TableShell footer={'Showing '+rows.length+' commission eligible invoices'}>
        <thead><tr><th>Eligible Date</th><th>Rep</th><th>Invoice</th><th>Account</th><th>Sale Type</th><th>Cases</th><th>Paid Revenue</th><th>Rate</th><th>Commission</th></tr></thead>
        <tbody>{rows.length?rows.map(row=><tr key={row.invoice_id}><td>{date(row.eligibleDate)}</td><td><b>{row.rep_name||'—'}</b></td><td>{row.invoice_number}</td><td>{row.account_name}</td><td>{row.sale_type||'—'}</td><td>{number(row.cases)}</td><td>{money(row.paidRevenue)}</td><td>{percent(row.commissionRate)}</td><td className="ops-positive"><b>{money(row.commissionAmount)}</b></td></tr>):<tr><td colSpan="9"><EmptyState title="No eligible commissions"/></td></tr>}</tbody>
      </TableShell>
    </div>;
  }

  const openAR=yearModel.invoices.filter(invoice=>invoice.balanceDue>0);
  const productsRanked=productPerformance(yearModel.lines).filter(row=>row.revenue||row.cases);
  const accountsRanked=accountPerformance(yearModel).filter(row=>row.revenue||row.cases);
  const repsRanked=repPerformance(yearModel).filter(row=>row.revenue||row.cases);
  const latest=yearModel.invoices.filter(invoice=>invoice.status!=='Draft').slice().sort((a,b)=>String(b.issuedAt||'').localeCompare(String(a.issuedAt||''))).slice(0,6);

  return <div className="ops">
    {common}
    <SectionHeader eyebrow="Lagom Naturals company operations" title="Company dashboard" description="Revenue, cases, profitability, receivables, depletion quality and rep performance from one commercial system of record." actions={<>{headerAction}<button className="ops-btn" type="button" onClick={()=>setCheckOpen(true)}>Run check</button><FilterField label="Reporting year"><select value={year} onChange={e=>setYear(e.target.value)}>{years.map(value=><option key={value}>{value}</option>)}</select></FilterField></>}/>
    <div className="ops-metrics ops-metrics--eight">
      <Metric label="Revenue" value={money(yearModel.kpis.revenue)} detail={year+' invoiced sell-through'}/>
      <Metric label="Cases" value={number(yearModel.kpis.cases)} detail="Recorded cases sold"/>
      <Metric label="Gross profit" value={money(yearModel.kpis.grossProfit)} detail={percent(yearModel.kpis.grossMargin)+' margin'}/>
      <Metric label="Gross margin" value={percent(yearModel.kpis.grossMargin)} detail="Revenue less approved COGS"/>
      <Metric label="Open AR" value={money(yearModel.kpis.openAR)} detail={openAR.length+' open invoices'} tone={yearModel.kpis.openAR?'warn':'default'}/>
      <Metric label="Overdue AR" value={money(yearModel.kpis.overdueAR)} detail={openAR.filter(invoice=>invoice.isOverdue).length+' overdue'} tone={yearModel.kpis.overdueAR?'bad':'default'}/>
      <Metric label="Paid revenue" value={money(yearModel.kpis.paidRevenue)} detail="Fully paid invoices"/>
      <Metric label="Needs attention" value={number(yearModel.kpis.needsAttention+openAR.filter(invoice=>invoice.daysPastDue>30).length)} detail="QA + 31 day AR signals" tone={yearModel.kpis.needsAttention?'warn':'default'}/>
    </div>
    <div className="ops-dashboard-grid">
      <RevenueTrend rows={monthly}/>
      <AgingPanel rows={agingRows}/>
    </div>
    <div className="ops-dashboard-grid ops-dashboard-grid--lower">
      <section className="ops-panel">
        <div className="ops-panel-head"><div><span>Monthly performance</span><h2>{year} operating view</h2></div></div>
        <div className="ops-monthly-table">
          <div className="ops-monthly-head"><span>Month</span><span>Revenue</span><span>Cases</span><span>Gross Profit</span><span>Margin</span></div>
          {monthly.map(row=><div key={row.label}><span>{row.label}</span><span>{money(row.revenue)}</span><span>{number(row.cases)}</span><span>{money(row.grossProfit)}</span><span>{percent(row.margin)}</span></div>)}
        </div>
      </section>
      <AttentionPanel issues={yearModel.qualityIssues} openAR={openAR.filter(invoice=>invoice.daysPastDue>30)} onOpenAR={()=>go?.('ar')}/>
    </div>
    <div className="ops-dashboard-grid ops-dashboard-grid--lower">
      <section className="ops-panel">
        <div className="ops-panel-head"><div><span>Recent activity</span><h2>Latest invoices</h2></div><button type="button" onClick={()=>go?.('sales','transactions')}>View invoices</button></div>
        {latest.length?<div className="ops-mini-list">{latest.map(row=><div key={row.id}><span><b>{row.invoiceNumber}</b><small>{row.accountName}</small></span><span><strong>{money(row.invoiceTotal)}</strong><Status>{row.status}</Status></span></div>)}</div>:<EmptyState title="No invoices in this period"/>}
      </section>
      <section className="ops-panel">
        <div className="ops-panel-head"><div><span>Product performance</span><h2>Top products</h2></div><button type="button" onClick={()=>go?.('reports')}>Open reports</button></div>
        {productsRanked.length?<div className="ops-mini-list">{productsRanked.slice(0,6).map(row=><div key={row.key}><span><b>{row.product}</b><small>{number(row.cases)} cases · {row.activeAccounts} accounts</small></span><span><strong>{money(row.revenue)}</strong><small>{percent(row.margin)} margin</small></span></div>)}</div>:<EmptyState title="No product activity"/>}
      </section>
    </div>
    <div className="ops-owner-strip">
      <div><span>Active accounts</span><strong>{accountsRanked.length}</strong></div>
      <div><span>Active reps</span><strong>{repsRanked.length}</strong></div>
      <div><span>Products moving</span><strong>{productsRanked.length}</strong></div>
      <div><span>Invoices</span><strong>{yearModel.invoices.filter(invoice=>invoice.status!=='Draft').length}</strong></div>
    </div>
    {qualityDialog}
  </div>;
}
