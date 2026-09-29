'use client';

import {useMemo,useState} from 'react';
import {
  Button,FilterBar,MetricCard,PageTitle,Pagination,SearchBox,SelectField,StatusChip,money
} from '../ui/OperationsUI';

export default function AccountsReceivablePage({model}){
  const [query,setQuery]=useState('');
  const [rep,setRep]=useState('All');
  const [aging,setAging]=useState('All');
  const [type,setType]=useState('All');
  const [status,setStatus]=useState('All');

  const reps=[...new Set(model.invoices.map(x=>x.repName).filter(Boolean))].sort();
  const types=[...new Set(model.invoices.map(x=>x.saleType).filter(Boolean))].sort();

  const rows=useMemo(()=>model.invoices.filter(row=>{
    const text=[row.accountName,row.invoiceNumber,row.repName].join(' ').toLowerCase();
    const state=row.balanceDue<=0?'Current':row.isOverdue?'Overdue':'Follow-up';
    return (!query||text.includes(query.toLowerCase())) &&
      (rep==='All'||row.repName===rep) &&
      (aging==='All'||row.aging===aging) &&
      (type==='All'||row.saleType===type) &&
      (status==='All'||state===status);
  }).sort((a,b)=>b.daysPastDue-a.daysPastDue||b.balanceDue-a.balanceDue),[model,query,rep,aging,type,status]);

  const bucketAmount=bucket=>model.invoices.filter(x=>x.aging===bucket).reduce((s,x)=>s+x.balanceDue,0);
  const open=model.invoices.reduce((s,x)=>s+x.balanceDue,0);
  const current=bucketAmount('Current');
  const spark=model.invoices.map((x,i)=>Math.max(0,x.balanceDue+i));

  return <div className="lo-page">
    <PageTitle title="Accounts Receivable" eyebrow="COLLECTIONS"/>

    <div className="lo-metric-grid lo-metric-grid--six">
      <MetricCard label="Open AR" value={money(open)} trend="—" trendDirection="flat" spark={spark}/>
      <MetricCard label="Current" value={money(current)} trend="—" trendDirection="flat" spark={spark}/>
      <MetricCard label="1 – 30 Days" value={money(bucketAmount('1-30'))} trend="—" trendDirection="flat" spark={spark}/>
      <MetricCard label="31 – 60 Days" value={money(bucketAmount('31-60'))} trend="—" trendDirection="bad" tone="red" spark={spark}/>
      <MetricCard label="61 – 90 Days" value={money(bucketAmount('61-90'))} trend="—" trendDirection="bad" tone="red" spark={spark}/>
      <MetricCard label="90+ Days" value={money(bucketAmount('90+'))} trend="—" trendDirection="bad" tone="red" spark={spark}/>
    </div>

    <FilterBar>
      <SearchBox value={query} onChange={setQuery} placeholder="Search accounts, invoices, or reps…"/>
      <SelectField label="Rep" value={rep} onChange={setRep}><option>All</option>{reps.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Aging" value={aging} onChange={setAging}><option>All</option>{['Current','1-30','31-60','61-90','90+'].map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Account Type" value={type} onChange={setType}><option>All</option>{types.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Status" value={status} onChange={setStatus}><option>All</option><option>Current</option><option>Follow-up</option><option>Overdue</option></SelectField>
      <button className="lo-clear-link" onClick={()=>{setQuery('');setRep('All');setAging('All');setType('All');setStatus('All')}}>Clear</button>
      <Button>Export</Button>
    </FilterBar>

    <section className="lo-data-card">
      <div className="lo-table-scroll">
        <table className="lo-data-table">
          <thead><tr><th>Account⌃</th><th>Invoice #⌄</th><th>Invoice Date⌃</th><th>Due Date⌄</th><th>Invoice Total⌃</th><th>Amount Paid⌄</th><th>Balance Due⌄</th><th>Days Late⌄</th><th>Rep⌄</th><th>Next Action⌄</th><th>Status⌃</th></tr></thead>
          <tbody>{rows.map(row=>{
            const state=row.balanceDue<=0?'Current':row.isOverdue?'Overdue':'Follow-up';
            return <tr key={row.id}>
              <td><strong>{row.accountName}</strong></td><td>{row.invoiceNumber}</td><td>{row.issuedAt}</td><td>{row.dueDate||'—'}</td>
              <td>{money(row.invoiceTotal)}</td><td>{money(row.amountPaid)}</td><td>{money(row.balanceDue)}</td>
              <td className={row.daysPastDue?'lo-danger-text':''}>{row.daysPastDue||0}</td><td>{row.repName||'—'}</td>
              <td>{row.balanceDue<=0?'—':row.daysPastDue>20?'Send final notice':row.daysPastDue>0?'Call for payment':'Follow up'}</td><td><StatusChip>{state}</StatusChip></td>
            </tr>;
          })}</tbody>
        </table>
      </div>
      <Pagination count={rows.length} pageSize={15}/>
    </section>
  </div>;
}
