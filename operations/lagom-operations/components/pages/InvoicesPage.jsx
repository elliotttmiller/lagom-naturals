'use client';

import {useMemo,useState} from 'react';
import {
  Button,
  FilterBar,
  ImportButton,
  MetricCard,
  PageTitle,
  Pagination,
  SearchBox,
  SelectField,
  StatusChip,
  displayInvoiceNumber,
  money,
  shortDate,
} from '../ui/OperationsUI';

export default function InvoicesPage({model,reps=[],onNewInvoice,onOpenInvoice}){
  const [scope,setScope]=useState('All');
  const [query,setQuery]=useState('');
  const [status,setStatus]=useState('All');
  const [rep,setRep]=useState('All');
  const [account,setAccount]=useState('All');
  const statuses=['Open','Paid','Overdue','Draft'];
  const accounts=[...new Set(model.invoices.map(x=>x.accountName).filter(Boolean))].sort();
  const repNames=[...new Set([...reps.map(x=>x.display_name||x.name),...model.invoices.map(x=>x.repName)].filter(Boolean))].sort();

  const rows=useMemo(()=>model.invoices.filter(row=>{
    const text=[row.invoiceNumber,row.accountName,row.repName].join(' ').toLowerCase();
    const state=row.status==='Paid'?'Paid':row.status==='Draft'?'Draft':row.isOverdue?'Overdue':'Open';
    return (!query||text.includes(query.toLowerCase())) &&
      (scope==='All'||state===scope) &&
      (status==='All'||state===status) &&
      (rep==='All'||row.repName===rep) &&
      (account==='All'||row.accountName===account);
  }).sort((a,b)=>String(b.issuedAt||'').localeCompare(String(a.issuedAt||''))),[model.invoices,query,scope,status,rep,account]);

  const revenue=rows.reduce((s,x)=>s+Number(x.invoiceTotal||0),0);
  const openAR=rows.reduce((s,x)=>s+Number(x.balanceDue||0),0);
  const issues=model.qualityIssues.filter(issue=>issue.scope==='Invoice').length;
  const spark=Array.from({length:8},(_,i)=>Math.max(0,revenue*(i+1)/8));

  return <div className="lo-page">
    <PageTitle title="Invoices" eyebrow="SALES OPERATIONS" actions={<>
      <ImportButton disabled title="Invoice import is not configured yet.">Import</ImportButton>
      <Button variant="primary" onClick={onNewInvoice}>New invoice</Button>
    </>}/>

    <div className="lo-segmented-tabs">
      {['All',...statuses].map(tab=><button key={tab} className={scope===tab?'is-active':''} onClick={()=>setScope(tab)}>{tab}</button>)}
    </div>

    <FilterBar>
      <SearchBox value={query} onChange={setQuery} placeholder="Search invoices, accounts, or invoice #…"/>
      <SelectField label="Status" value={status} onChange={setStatus}><option>All</option>{statuses.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Rep" value={rep} onChange={setRep}><option>All</option>{repNames.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Account" value={account} onChange={setAccount}><option>All</option>{accounts.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Date" value="This month"><option>This month</option><option>This quarter</option><option>This year</option></SelectField>
      <Button>Save view⌄</Button>
    </FilterBar>

    <div className="lo-metric-grid lo-metric-grid--four">
      <MetricCard label="Records" value={rows.length} trend="—" trendDirection="flat" spark={rows.map((_,i)=>i+1)}/>
      <MetricCard label="Revenue" value={money(revenue)} trend="—" trendDirection="flat" spark={spark}/>
      <MetricCard label="Open AR" value={money(openAR)} trend="—" trendDirection="flat" spark={rows.map(x=>x.balanceDue)}/>
      <MetricCard label="QA Issues" value={issues} trend="—" trendDirection={issues?'bad':'flat'} tone={issues?'red':'green'} spark={rows.map((_,i)=>issues?i:0)}/>
    </div>

    <section className="lo-data-card">
      <div className="lo-table-scroll">
        <table className="lo-data-table">
          <thead><tr>
            <th>Invoice #⌄</th><th>Date⌄</th><th>Account⌄</th><th>Rep⌄</th><th>Type⌄</th><th>Terms⌄</th><th>Amount⌄</th><th>Paid⌄</th><th>Balance⌄</th><th>Status⌄</th><th/>
          </tr></thead>
          <tbody>{rows.map(row=>{
            const state=row.status==='Paid'?'Paid':row.status==='Draft'?'Draft':row.isOverdue?'Overdue':'Open';
            return <tr key={row.id} onDoubleClick={()=>onOpenInvoice?.(row)}>
              <td><strong>{displayInvoiceNumber(row.invoiceNumber)}</strong></td>
              <td>{shortDate(row.issuedAt)}</td>
              <td>{row.accountName||'—'}</td>
              <td>{row.repName||'—'}</td>
              <td>{row.saleType||'Invoice'}</td>
              <td>{row.terms||'Due on receipt'}</td>
              <td className="lo-num">{money(row.invoiceTotal)}</td>
              <td className="lo-num">{money(row.amountPaid)}</td>
              <td className="lo-num">{money(row.balanceDue)}</td>
              <td><StatusChip>{state}</StatusChip></td>
              <td><button className="lo-kebab" aria-label={'Actions for invoice '+displayInvoiceNumber(row.invoiceNumber)}>•••</button></td>
            </tr>;
          })}</tbody>
        </table>
      </div>
      <Pagination count={rows.length}/>
    </section>
  </div>;
}
