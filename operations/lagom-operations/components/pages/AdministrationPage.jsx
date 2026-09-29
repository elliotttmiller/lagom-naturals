'use client';

import {useState} from 'react';
import {Button,PageTitle,Panel,StatusChip,money} from '../ui/OperationsUI';

export default function AdministrationPage({source,onNavigate}){
  const [tab,setTab]=useState('masters');
  return <div className="lo-page">
    <PageTitle title="Administration" eyebrow="SYSTEM & MASTER DATA" actions={<Button onClick={()=>onNavigate('ui-library')}>Open UI Library</Button>}/>
    <div className="lo-segmented-tabs">
      <button className={tab==='masters'?'is-active':''} onClick={()=>setTab('masters')}>Master Data</button>
      <button className={tab==='users'?'is-active':''} onClick={()=>setTab('users')}>Users</button>
      <button className={tab==='system'?'is-active':''} onClick={()=>setTab('system')}>System</button>
    </div>
    {tab==='masters'&&<div className="lo-two-panel-grid">
      <Panel title="Products">
        <div className="lo-admin-list">{source.products.map(p=><div key={p.id}><span><strong>{p.name}</strong><small>{p.sku||'No SKU'} · {p.product_line||p.category||'—'}</small></span><span>{money(p.cogs_per_case||0)} COGS</span><StatusChip>{p.status||'Active'}</StatusChip></div>)}</div>
      </Panel>
      <Panel title="Payment Terms">
        <div className="lo-admin-list">{source.paymentTerms.map(term=><div key={term.term}><span><strong>{term.term}</strong><small>{term.days} day{term.days===1?'':'s'}</small></span><StatusChip>{term.active===false?'Inactive':'Active'}</StatusChip></div>)}</div>
      </Panel>
    </div>}
    {tab==='users'&&<Panel title="Operations Users"><div className="lo-admin-list">{source.users.map(user=><div key={user.id}><span><strong>{user.display_name||user.username}</strong><small>{user.username||'—'} · {user.role||'rep'}</small></span><span>{user.territory||'Minnesota'}</span><StatusChip>Active</StatusChip></div>)}</div></Panel>}
    {tab==='system'&&<Panel title="System Status"><div className="lo-system-status"><div><StatusChip>Active</StatusChip><strong>Supabase commercial data</strong><span>Invoices, payments, depletion, products and CRM records use one normalized source.</span></div><div><StatusChip>Recorded</StatusChip><strong>Workbook migration contract</strong><span>Workbook formulas and QA rules are represented in application domain logic.</span></div></div></Panel>}
  </div>;
}
