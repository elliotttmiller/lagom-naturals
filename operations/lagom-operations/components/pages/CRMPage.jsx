'use client';

import {useMemo,useState} from 'react';
import {DonutChart} from '../ui/OperationsCharts';
import {
  Button,FilterBar,MetricCard,PageTitle,Panel,SearchBox,StatusChip,displayInvoiceNumber,money,number,shortDate
} from '../ui/OperationsUI';

function AccountList({prospects=[],model,onOpenAccount}){
  const [query,setQuery]=useState('');
  const rows=useMemo(()=>prospects.filter(p=>{
    const text=[p.business_name,p.city,p.contact_name,p.assigned_to,p.channel].join(' ').toLowerCase();
    return !query||text.includes(query.toLowerCase());
  }),[prospects,query]);
  return <div className="lo-page">
    <PageTitle title="Accounts" eyebrow="CRM"/>
    <FilterBar><SearchBox value={query} onChange={setQuery} placeholder="Search accounts, cities, contacts, reps…"/><Button variant="primary">Add account</Button></FilterBar>
    <section className="lo-data-card">
      <div className="lo-table-scroll"><table className="lo-data-table">
        <thead><tr><th>Account</th><th>City</th><th>Channel</th><th>Rep</th><th>Status</th><th>Lifetime Revenue</th><th>Open AR</th><th>Last Order</th></tr></thead>
        <tbody>{rows.map(p=>{
          const invoices=model.invoices.filter(inv=>inv.prospect_id===p.id);
          const revenue=invoices.reduce((s,x)=>s+x.invoiceTotal,0);
          const ar=invoices.reduce((s,x)=>s+x.balanceDue,0);
          const last=invoices.map(x=>x.issuedAt).filter(Boolean).sort().at(-1);
          return <tr key={p.id} className="lo-clickable-row" onClick={()=>onOpenAccount?.(p.id)}>
            <td><strong>{p.business_name}</strong></td><td>{p.city||'—'}</td><td>{p.channel||'—'}</td><td>{p.assigned_to||'—'}</td><td><StatusChip>{p.status||'Active'}</StatusChip></td><td>{money(revenue)}</td><td>{money(ar)}</td><td>{shortDate(last)}</td>
          </tr>;
        })}</tbody>
      </table></div>
    </section>
  </div>;
}

function Contacts({prospects=[]}){
  const rows=prospects.filter(p=>p.contact_name||p.email||p.phone);
  return <div className="lo-page"><PageTitle title="Contacts" eyebrow="CRM"/>
    <section className="lo-data-card"><div className="lo-table-scroll"><table className="lo-data-table">
      <thead><tr><th>Name</th><th>Account</th><th>Phone</th><th>Email</th><th>Sales Rep</th></tr></thead>
      <tbody>{rows.map(p=><tr key={p.id}><td><strong>{p.contact_name||'Primary contact'}</strong></td><td>{p.business_name}</td><td>{p.phone||'—'}</td><td>{p.email||'—'}</td><td>{p.assigned_to||'—'}</td></tr>)}</tbody>
    </table></div></section>
  </div>;
}

function Opportunities({prospects=[]}){
  const rows=prospects.filter(p=>!['Won','Lost','Not Interested'].includes(p.status));
  return <div className="lo-page"><PageTitle title="Opportunities" eyebrow="CRM"/>
    <div className="lo-kanban">
      {['New','Contacted','Follow Up','Meeting Set','Proposal Sent'].map(status=><section key={status}><header><strong>{status}</strong><span>{rows.filter(x=>x.status===status).length}</span></header>{rows.filter(x=>x.status===status).map(p=><article key={p.id}><strong>{p.business_name}</strong><span>{p.city||'Minnesota'}</span><small>{p.assigned_to||'Unassigned'}</small></article>)}</section>)}
    </div>
  </div>;
}

function Activities({activities=[]}){
  return <div className="lo-page"><PageTitle title="Activities" eyebrow="CRM"/>
    <section className="lo-data-card"><div className="lo-table-scroll"><table className="lo-data-table">
      <thead><tr><th>Date</th><th>Type</th><th>Account</th><th>Details</th><th>User</th></tr></thead>
      <tbody>{activities.map(a=><tr key={a.id}><td>{shortDate(a.activity_date||a.created_at)}</td><td>{a.activity_type||'Activity'}</td><td>{a.prospects?.business_name||'—'}</td><td>{a.notes||'—'}</td><td>{a.crm_users?.display_name||a.rep||'—'}</td></tr>)}</tbody>
    </table></div></section>
  </div>;
}

function AccountDetail({account,model,activities=[],tasks=[],onBack}){
  const [activeTab,setActiveTab]=useState('overview');
  const tabs=[['overview','Overview'],['contacts','Contacts'],['invoices','Invoices'],['depletion','Depletion'],['activities','Activities'],['notes','Notes']];
  const moveTab=(event,index)=>{const direction=event.key==='ArrowRight'?1:event.key==='ArrowLeft'?-1:event.key==='Home'?-index:event.key==='End'?tabs.length-1-index:0;if(!direction)return;event.preventDefault();const next=(index+direction+tabs.length)%tabs.length;setActiveTab(tabs[next][0]);requestAnimationFrame(()=>document.getElementById('account-tab-'+tabs[next][0])?.focus())};
  const invoices=model.invoices.filter(inv=>inv.prospect_id===account.id);
  const ids=new Set(invoices.map(x=>x.id));
  const lines=model.lines.filter(line=>ids.has(line.invoiceId));
  const lifetime=invoices.reduce((s,x)=>s+x.invoiceTotal,0);
  const ar=invoices.reduce((s,x)=>s+x.balanceDue,0);
  const last=invoices.map(x=>x.issuedAt).filter(Boolean).sort().at(-1);
  const productMap=new Map();
  lines.forEach(line=>{
    const key=line.product||line.sku;
    if(!productMap.has(key))productMap.set(key,{label:line.product||line.sku,value:0});
    productMap.get(key).value+=line.casesSold;
  });
  const mix=[...productMap.values()].sort((a,b)=>b.value-a.value).slice(0,4);
  const accountActivities=activities.filter(a=>a.prospect_id===account.id).slice(0,5);
  const accountTasks=tasks.filter(task=>task.prospect_id===account.id&&String(task.status||'Open').toLowerCase()!=='completed').slice(0,5);
  const invoiceRows=invoices.slice().sort((a,b)=>String(b.issuedAt).localeCompare(String(a.issuedAt))).slice(0,5);

  return <div className="lo-page">
    <div className="lo-account-title-row">
      <div>
        <button className="lo-back-link" onClick={onBack}>← Accounts</button>
        <div className="lo-page-eyebrow">ACCOUNT DETAIL</div>
        <div className="lo-account-title"><h1>{account.business_name}</h1><StatusChip>{account.status||'Active'}</StatusChip></div>
        <div className="lo-account-meta">{account.id} <i/> {[account.address,account.city,account.state,account.zip].filter(Boolean).join(', ')}</div>
      </div>
      <div className="lo-page-actions"><Button>Edit</Button><Button>More⌄</Button></div>
    </div>
    <div className="lo-account-tabs" role="tablist" aria-label="Account detail sections">{tabs.map(([id,label],index)=><button type="button" key={id} id={'account-tab-'+id} role="tab" aria-selected={activeTab===id} aria-controls={'account-panel-'+id} tabIndex={activeTab===id?0:-1} className={activeTab===id?'is-active':''} onClick={()=>setActiveTab(id)} onKeyDown={event=>moveTab(event,index)}>{label}</button>)}</div>

    {activeTab==='overview'&&<section id="account-panel-overview" role="tabpanel" aria-labelledby="account-tab-overview"><div className="lo-metric-grid lo-metric-grid--four">
      <MetricCard label="Lifetime Revenue" value={money(lifetime)} trend="—" trendDirection="flat" spark={invoices.map(x=>x.invoiceTotal)}/>
      <MetricCard label="Open AR" value={money(ar)} trend="0%" trendDirection="flat" spark={invoices.map(x=>x.balanceDue)}/>
      <MetricCard label="Last Order" value={shortDate(last)} trend={last?'Recent':'—'} trendDirection="flat" spark={[]}/>
      <MetricCard label="Orders" value={invoices.length} trend="—" trendDirection="flat" spark={invoices.map((_,i)=>i+1)}/>
    </div>

    <div className="lo-two-panel-grid">
      <Panel title="Account Information" action={<button className="lo-text-button">Edit</button>}>
        <div className="lo-account-info">
          <div><span>Record ID</span><strong>{account.id}</strong></div><div><span>Account Type</span><strong>{account.account_type||'—'}</strong></div>
          <div><span>Account Name</span><strong>{account.business_name}</strong></div><div><span>Channel</span><strong>{account.channel||'—'}</strong></div>
          <div><span>Doing Business As</span><strong>{account.business_name}</strong></div><div><span>Sales Rep</span><strong>{account.assigned_to||'—'}</strong></div>
          <div><span>Address</span><strong>{[account.address,account.city,account.state,account.zip].filter(Boolean).join(', ')}</strong></div><div><span>Territory</span><strong>{account.county||'Minnesota'}</strong></div>
          <div><span>Phone</span><strong>{account.phone||'—'}</strong></div><div><span>Terms</span><strong>{invoices[0]?.terms||'Due on receipt'}</strong></div>
          <div><span>Email</span><strong className="lo-linkish">{account.email||'—'}</strong></div><div><span>Customer Since</span><strong>{shortDate(account.created_at)}</strong></div>
          <div><span>Status</span><StatusChip>{account.status||'Active'}</StatusChip></div><div><span>Tax Exempt</span><strong>{account.tax_exempt==null?'—':account.tax_exempt?'Yes':'No'}</strong></div>
        </div>
      </Panel>
      <Panel title="Key Contacts" action={<div className="lo-inline-actions"><button type="button" className="lo-text-button" onClick={()=>setActiveTab('contacts')}>View All</button></div>}>
        <div className="lo-contact-list">
          <div className="lo-contact-head"><span>Name</span><span>Role</span><span>Phone</span><span>Email</span><span/></div>
          <div><strong>{account.contact_name||'Primary Contact'}</strong><span>Primary</span><span>{account.phone||'—'}</span><span className="lo-linkish">{account.email||'—'}</span><span>⋮</span></div>
        </div>
      </Panel>
    </div>

    <div className="lo-account-lower-grid">
      <Panel title="Recent Invoices" action={<button type="button" className="lo-text-button" onClick={()=>setActiveTab('invoices')}>View All</button>}>
        <div className="lo-mini-table lo-mini-table--account"><div className="lo-mini-table-head"><span>Invoice #</span><span>Date</span><span>Cases</span><span>Revenue</span><span>Status</span></div>{invoiceRows.map(row=><div key={row.id}><strong>{displayInvoiceNumber(row.invoiceNumber)}</strong><span>{shortDate(row.issuedAt)}</span><span>{number(row.cases)}</span><span>{money(row.invoiceTotal)}</span><StatusChip>{row.status}</StatusChip></div>)}</div>
      </Panel>
      <Panel title="Depletion Mix" action={<button type="button" className="lo-text-button" onClick={()=>setActiveTab('depletion')}>View Details</button>}><DonutChart items={mix} centerTop={number(lines.reduce((s,x)=>s+x.casesSold,0))} centerBottom="Cases"/></Panel>
      <Panel title="Open Opportunities / Follow-ups" action={<button type="button" className="lo-text-button" onClick={()=>setActiveTab('activities')}>View All</button>}>
        {accountTasks.length?<div className="lo-followup-list">{accountTasks.map(task=>{
          const overdue=task.due_date&&task.due_date<new Date().toISOString().slice(0,10);
          return <div key={task.id}><i className={overdue?'is-alert':''}>{overdue?'!':''}</i><span><strong>{task.title||task.task_type||'Follow-up'}</strong>{task.notes&&<small>{task.notes}</small>}<small>{task.due_date?'Due '+shortDate(task.due_date):'No due date'}</small></span><StatusChip>{overdue?'Overdue':task.status||'Open'}</StatusChip></div>;
        })}</div>:<div className="lo-muted-block">No open follow-ups for this account.</div>}
      </Panel>
    </div>

    <Panel title="Recent Activity" action={<button type="button" className="lo-text-button" onClick={()=>setActiveTab('activities')}>View All</button>}>
      <div className="lo-activity-list"><div className="lo-activity-head"><span>Date</span><span>Type</span><span>Activity</span><span>Details</span><span>User</span></div>
      {accountActivities.map(a=><div key={a.id}><span>{shortDate(a.activity_date||a.created_at)}</span><span>{a.activity_type}</span><strong>{a.notes?.split('.')[0]||'Account activity'}</strong><span>{a.notes||'—'}</span><span>{a.crm_users?.display_name||a.rep||'—'}</span></div>)}</div>
    </Panel></section>}

    {activeTab==='contacts'&&<section id="account-panel-contacts" role="tabpanel" aria-labelledby="account-tab-contacts" className="lo-account-tab-panel"><Panel title="Key Contacts"><div className="lo-contact-list"><div className="lo-contact-head"><span>Name</span><span>Role</span><span>Phone</span><span>Email</span><span/></div><div><strong>{account.contact_name||'Primary Contact'}</strong><span>Primary</span><span>{account.phone||'—'}</span><span className="lo-linkish">{account.email||'—'}</span><span>⋮</span></div></div></Panel></section>}

    {activeTab==='invoices'&&<section id="account-panel-invoices" role="tabpanel" aria-labelledby="account-tab-invoices" className="lo-account-tab-panel"><Panel title="Invoices" action={<span className="lo-tab-count">{number(invoices.length)} total</span>}><div className="lo-table-scroll"><table className="lo-data-table"><thead><tr><th>Invoice #</th><th>Issued</th><th>Due</th><th>Type</th><th>Status</th><th>Total</th><th>Open balance</th></tr></thead><tbody>{invoiceRows.length?invoiceRows.map(row=><tr key={row.id}><td><strong>{displayInvoiceNumber(row.invoiceNumber)}</strong></td><td>{shortDate(row.issuedAt)}</td><td>{shortDate(row.dueDate)}</td><td>{row.saleType||'—'}</td><td><StatusChip>{row.status||'—'}</StatusChip></td><td>{money(row.invoiceTotal)}</td><td>{money(row.balanceDue)}</td></tr>):<tr><td colSpan="7"><div className="lo-muted-block">No invoices are connected to this account.</div></td></tr>}</tbody></table></div></Panel></section>}

    {activeTab==='depletion'&&<section id="account-panel-depletion" role="tabpanel" aria-labelledby="account-tab-depletion" className="lo-account-tab-panel"><Panel title="Depletion history" action={<span className="lo-tab-count">{number(lines.reduce((sum,line)=>sum+(Number(line.casesSold)||0),0))} cases</span>}><div className="lo-table-scroll"><table className="lo-data-table"><thead><tr><th>Date</th><th>Invoice #</th><th>Product</th><th>Cases</th><th>Revenue</th><th>COGS</th><th>Gross profit</th></tr></thead><tbody>{lines.length?lines.slice().sort((a,b)=>String(b.invoiceDate||'').localeCompare(String(a.invoiceDate||''))).map(line=><tr key={line.id}><td>{shortDate(line.invoiceDate)}</td><td><strong>{displayInvoiceNumber(line.invoiceNumber)}</strong></td><td>{line.product||'—'}</td><td>{number(line.casesSold)}</td><td>{money(line.revenue)}</td><td>{money(line.totalCogs)}</td><td>{money(line.grossProfit)}</td></tr>):<tr><td colSpan="7"><div className="lo-muted-block">No depletion records are connected to this account.</div></td></tr>}</tbody></table></div></Panel></section>}

    {activeTab==='activities'&&<section id="account-panel-activities" role="tabpanel" aria-labelledby="account-tab-activities" className="lo-account-tab-panel"><div className="lo-two-panel-grid"><Panel title="Recent Activity"><div className="lo-activity-list"><div className="lo-activity-head"><span>Date</span><span>Type</span><span>Activity</span><span>Details</span><span>User</span></div>{accountActivities.length?accountActivities.map(a=><div key={a.id}><span>{shortDate(a.activity_date||a.created_at)}</span><span>{a.activity_type||'Activity'}</span><strong>{a.notes?.split('.')[0]||'Account activity'}</strong><span>{a.notes||'—'}</span><span>{a.crm_users?.display_name||a.rep||'—'}</span></div>):<div className="lo-muted-block">No recorded activity for this account.</div>}</div></Panel><Panel title="Open Follow-ups">{accountTasks.length?<div className="lo-followup-list">{accountTasks.map(task=><div key={task.id}><i>{'•'}</i><span><strong>{task.title||task.task_type||'Follow-up'}</strong><small>{task.notes||'No additional notes'}</small><small>{task.due_date?'Due '+shortDate(task.due_date):'No due date'}</small></span><StatusChip>{task.status||'Open'}</StatusChip></div>)}</div>:<div className="lo-muted-block">No open follow-ups for this account.</div>}</Panel></div></section>}

    {activeTab==='notes'&&<section id="account-panel-notes" role="tabpanel" aria-labelledby="account-tab-notes" className="lo-account-tab-panel"><Panel title="Account notes"><div className={account.notes?'lo-account-note':'lo-muted-block'}>{account.notes||'No notes are recorded for this account.'}</div></Panel></section>}
  </div>;
}

export default function CRMPage({mode='accounts',prospects=[],activities=[],tasks=[],model,accountId,onOpenAccount,onNavigate}){
  if(mode==='contacts')return <Contacts prospects={prospects}/>;
  if(mode==='opportunities')return <Opportunities prospects={prospects}/>;
  if(mode==='activities')return <Activities activities={activities}/>;
  if(mode==='detail'){
    const account=prospects.find(p=>p.id===accountId);
    return account?<AccountDetail account={account} model={model} activities={activities} tasks={tasks} onBack={()=>onNavigate('crm-accounts')}/>:<AccountList prospects={prospects} model={model} onOpenAccount={onOpenAccount}/>;
  }
  return <AccountList prospects={prospects} model={model} onOpenAccount={onOpenAccount}/>;
}
