'use client';

import {useMemo,useState} from 'react';
import DepletionImportDialog from '../operations/DepletionImportDialog';
import {
  Button,FilterBar,ImportButton,MetricCard,PageTitle,Pagination,SearchBox,SelectField,StatusChip,money,number
} from '../ui/OperationsUI';

export default function DepletionPage({model,source,supabase,reload,onAddEntry}){
  const [query,setQuery]=useState('');
  const [rep,setRep]=useState('All');
  const [line,setLine]=useState('All');
  const [product,setProduct]=useState('All');
  const [qa,setQa]=useState('All');
  const [importOpen,setImportOpen]=useState(false);

  const reps=[...new Set(model.lines.map(x=>x.rep).filter(Boolean))].sort();
  const lines=[...new Set(model.lines.map(x=>x.productLine).filter(Boolean))].sort();
  const products=[...new Set(model.lines.map(x=>x.product).filter(Boolean))].sort();

  const rows=useMemo(()=>model.lines.filter(row=>{
    const text=[row.invoiceNumber,row.account,row.product,row.sku].join(' ').toLowerCase();
    const hasIssue=model.qualityIssues.some(issue=>issue.scope==='Depletion'&&String(issue.record||'').includes(row.invoiceNumber));
    return (!query||text.includes(query.toLowerCase())) &&
      (rep==='All'||row.rep===rep) &&
      (line==='All'||row.productLine===line) &&
      (product==='All'||row.product===product) &&
      (qa==='All'||(qa==='Review'?hasIssue:!hasIssue));
  }),[model,query,rep,line,product,qa]);

  const revenue=rows.reduce((s,x)=>s+x.revenue,0);
  const cases=rows.reduce((s,x)=>s+x.casesSold,0);
  const issues=model.qualityIssues.filter(x=>x.scope==='Depletion').length;

  return <div className="lo-page">
    <PageTitle title="Depletion" eyebrow="PRODUCT-LEVEL SALES" actions={<>
      <ImportButton onClick={()=>setImportOpen(true)}>Import</ImportButton>
      <Button variant="primary" onClick={onAddEntry}>Add entry</Button>
    </>}/>

    <FilterBar>
      <SearchBox value={query} onChange={setQuery} placeholder="Search invoices, accounts, products…"/>
      <SelectField label="Rep" value={rep} onChange={setRep}><option>All</option>{reps.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Product line" value={line} onChange={setLine}><option>All</option>{lines.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Product" value={product} onChange={setProduct}><option>All</option>{products.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Date" value="This month"><option>This month</option></SelectField>
      <SelectField label="QA status" value={qa} onChange={setQa}><option>All</option><option>Recorded</option><option>Review</option></SelectField>
      <Button>Save view⌄</Button>
    </FilterBar>

    <div className="lo-metric-grid lo-metric-grid--four">
      <MetricCard label="Records" value={rows.length} trend="—" trendDirection="flat" spark={rows.map((_,i)=>i+1)}/>
      <MetricCard label="Revenue" value={money(revenue)} trend="—" trendDirection="flat" spark={rows.map((x,i)=>revenue?revenue*(i+1)/Math.max(rows.length,1):0)}/>
      <MetricCard label="Cases" value={number(cases)} trend="—" trendDirection="flat" spark={rows.map((x,i)=>cases?cases*(i+1)/Math.max(rows.length,1):0)}/>
      <MetricCard label="QA Issues" value={issues} trend="—" trendDirection={issues?'bad':'flat'} tone={issues?'red':'green'} spark={rows.map(()=>issues)}/>
    </div>

    <section className="lo-data-card">
      <div className="lo-data-card-title"><h2>Depletion Ledger</h2><Button>Export⌄</Button></div>
      <div className="lo-table-scroll">
        <table className="lo-data-table">
          <thead><tr><th>Invoice #</th><th>Invoice Date⌄</th><th>Product</th><th>Cases</th><th>Sale Price</th><th>Revenue</th><th>SKU</th><th>Product Line</th><th>COGS</th><th>Gross Profit</th><th>Account</th><th>Sales Rep</th><th>QA Status</th></tr></thead>
          <tbody>{rows.map(row=>{
            const hasIssue=model.qualityIssues.some(issue=>issue.scope==='Depletion'&&String(issue.record||'').includes(row.invoiceNumber));
            return <tr key={row.id}>
              <td><strong>{row.invoiceNumber}</strong></td><td>{row.invoiceDate||'—'}</td><td>{row.product}</td><td>{number(row.casesSold)}</td><td>{money(row.salePrice)}</td><td>{money(row.revenue)}</td><td>{row.sku||'—'}</td><td>{row.productLine||'—'}</td><td>{money(row.totalCogs)}</td><td className={row.grossProfit<0?'lo-danger-text':''}>{money(row.grossProfit)}</td><td>{row.account}</td><td>{row.rep}</td><td><StatusChip>{hasIssue?'Review':'Recorded'}</StatusChip></td>
            </tr>;
          })}</tbody>
        </table>
      </div>
      <Pagination count={rows.length}/>
    </section>

    {importOpen&&<DepletionImportDialog
      supabase={supabase}
      invoices={source.invoices}
      products={source.products}
      existingLines={model.lines}
      onClose={()=>setImportOpen(false)}
      onImported={reload}
    />}
  </div>;
}
