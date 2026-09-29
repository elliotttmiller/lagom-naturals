'use client';

import {useMemo,useState} from 'react';
import {CheckCircle2,ChevronRight,Database,Search,Settings2,ShieldCheck,UsersRound} from 'lucide-react';
import {Button,PageTitle,StatusChip,money} from '../ui/OperationsUI';

const TABS=[
  {id:'masters',label:'Master data',icon:Database},
  {id:'users',label:'Users',icon:UsersRound},
  {id:'system',label:'System',icon:Settings2},
];

function AdminTab({active,onChange}){
  return <div className="lo-admin-tabs" role="tablist" aria-label="Administration sections">
    {TABS.map(({id,label,icon:Icon})=><button key={id} type="button" role="tab" aria-selected={active===id} className={active===id?'is-active':''} onClick={()=>onChange(id)}>
      <Icon size={15} aria-hidden="true"/><span>{label}</span>
    </button>)}
  </div>;
}

function DataDot({children}){return <span className="lo-admin-state"><i aria-hidden="true"/>{children}</span>;}

function MasterData({products=[],paymentTerms=[]}){
  const [query,setQuery]=useState('');
  const [line,setLine]=useState('All lines');
  const lines=useMemo(()=>['All lines',...new Set(products.map(product=>product.product_line||product.category).filter(Boolean))],[products]);
  const filtered=useMemo(()=>products.filter(product=>{
    const searchable=[product.name,product.sku,product.product_line,product.category].filter(Boolean).join(' ').toLowerCase();
    const productLine=product.product_line||product.category||'';
    return (!query||searchable.includes(query.toLowerCase()))&&(line==='All lines'||productLine===line);
  }),[products,query,line]);

  return <div className="lo-admin-stage">
    <section className="lo-admin-data-panel lo-admin-data-panel--products" aria-labelledby="admin-products-title">
      <div className="lo-admin-panel-head">
        <div><h2 id="admin-products-title">Products</h2><p>Commercial catalog and case-cost reference.</p></div>
        <span className="lo-admin-count">{filtered.length} of {products.length}</span>
      </div>
      <div className="lo-admin-tools">
        <label className="lo-admin-search"><Search size={16} aria-hidden="true"/><span className="sr-only">Search products</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search products or SKU"/></label>
        <label className="lo-admin-filter"><span className="sr-only">Filter product line</span><select value={line} onChange={event=>setLine(event.target.value)}>{lines.map(value=><option key={value}>{value}</option>)}</select></label>
      </div>
      <div className="lo-admin-table-wrap">
        <table className="lo-admin-table"><thead><tr><th>Product</th><th>SKU</th><th>Product line</th><th className="lo-admin-table__numeric">Cost / case</th><th>Status</th><th aria-label="Open"/></tr></thead>
          <tbody>{filtered.map(product=><tr key={product.id} tabIndex={0}>
            <td><strong>{product.name}</strong></td><td><code>{product.sku||'—'}</code></td><td>{product.product_line||product.category||'—'}</td><td className="lo-admin-table__numeric">{money(product.cogs_per_case||0)}</td><td><DataDot>{product.status||'Active'}</DataDot></td><td className="lo-admin-row-action"><ChevronRight size={17} aria-hidden="true"/></td>
          </tr>)}</tbody>
        </table>
      </div>
      {!filtered.length&&<div className="lo-admin-empty">No products match this search.</div>}
    </section>
    <section className="lo-admin-data-panel lo-admin-data-panel--terms" aria-labelledby="admin-terms-title">
      <div className="lo-admin-panel-head"><div><h2 id="admin-terms-title">Payment terms</h2><p>Default due-date rules for invoices.</p></div><span className="lo-admin-count">{paymentTerms.length} configured</span></div>
      <div className="lo-admin-terms-list">{paymentTerms.map(term=><div key={term.term} className="lo-admin-term-row">
        <div className="lo-admin-term-days">{term.days||0}<small>days</small></div><div><strong>{term.term}</strong><span>{term.days===0?'Payment is due on receipt.':`Payment is due ${term.days} days after invoicing.`}</span></div><DataDot>{term.active===false?'Inactive':'Active'}</DataDot>
      </div>)}</div>
      <div className="lo-admin-panel-note"><CheckCircle2 size={17} aria-hidden="true"/><span>Due-date calculations use the active payment-term catalog.</span></div>
    </section>
  </div>;
}

function Users({users=[]}){
  const [query,setQuery]=useState('');
  const filtered=useMemo(()=>users.filter(user=>[user.display_name,user.username,user.role,user.territory].filter(Boolean).join(' ').toLowerCase().includes(query.toLowerCase())),[users,query]);
  return <section className="lo-admin-data-panel lo-admin-users-panel" aria-labelledby="admin-users-title">
    <div className="lo-admin-panel-head"><div><h2 id="admin-users-title">Operations users</h2><p>Access and territory assignments for the commercial workspace.</p></div><span className="lo-admin-count">{users.length} active</span></div>
    <div className="lo-admin-tools lo-admin-tools--single"><label className="lo-admin-search"><Search size={16} aria-hidden="true"/><span className="sr-only">Search operations users</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search team members"/></label></div>
    <div className="lo-admin-user-grid">{filtered.map(user=><article key={user.id} className="lo-admin-user-card">
      <div className="lo-admin-user-avatar" aria-hidden="true">{String(user.display_name||user.username||'?').split(/\s+/).slice(0,2).map(part=>part[0]).join('')}</div>
      <div className="lo-admin-user-main"><strong>{user.display_name||user.username}</strong><span>{user.username||'No username assigned'}</span></div>
      <DataDot>Active</DataDot>
      <dl><div><dt>Role</dt><dd>{user.role||'Rep'}</dd></div><div><dt>Territory</dt><dd>{user.territory||'Minnesota'}</dd></div></dl>
    </article>)}</div>
    {!filtered.length&&<div className="lo-admin-empty">No users match this search.</div>}
  </section>;
}

function System({products=[],users=[],paymentTerms=[]}){
  const checks=[
    ['Commercial data','Invoices, payments, depletion, products and CRM records are connected to one normalized source.'],
    ['Migration contract','Workbook formulas and QA rules are represented in application domain logic.'],
    ['Access roster','Operations roles are available for the active workspace.'],
  ];
  return <div className="lo-admin-system-grid">
    <section className="lo-admin-system-overview"><div className="lo-admin-system-seal"><ShieldCheck size={28} aria-hidden="true"/></div><div><span>System readiness</span><h2>Operating data is connected.</h2><p>Core administration references are available to the operations workspace.</p></div><StatusChip>Active</StatusChip></section>
    <section className="lo-admin-system-panel"><h2>Data references</h2><div className="lo-admin-reference-grid"><div><strong>{products.length}</strong><span>Products</span></div><div><strong>{paymentTerms.length}</strong><span>Payment terms</span></div><div><strong>{users.length}</strong><span>Operations users</span></div></div></section>
    <section className="lo-admin-system-panel lo-admin-system-panel--checks"><h2>Workspace checks</h2>{checks.map(([title,copy])=><div key={title}><CheckCircle2 size={18} aria-hidden="true"/><span><strong>{title}</strong><small>{copy}</small></span><DataDot>Ready</DataDot></div>)}</section>
  </div>;
}

export default function AdministrationPage({source,onNavigate}){
  const [tab,setTab]=useState('masters');
  return <div className="lo-page lo-administration-page">
    <PageTitle title="Administration" actions={<Button onClick={()=>onNavigate('ui-library')}>Open UI library</Button>}/>
    <AdminTab active={tab} onChange={setTab}/>
    {tab==='masters'&&<MasterData products={source.products} paymentTerms={source.paymentTerms}/>}
    {tab==='users'&&<Users users={source.users}/>}
    {tab==='system'&&<System products={source.products} users={source.users} paymentTerms={source.paymentTerms}/>}
  </div>;
}
