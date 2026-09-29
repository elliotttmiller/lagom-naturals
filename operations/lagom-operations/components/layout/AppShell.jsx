'use client';

import React from 'react';
import TableSortController from '../ui/TableSortController';
import {
  ChevronDown,
  CircleDollarSign,
  Database,
  FileBarChart,
  Home,
  ReceiptText,
  Settings,
  TrendingUp,
  UserRound,
  UsersRound,
} from 'lucide-react';

const assetUrl=(path)=>{
  const base=process.env.NEXT_PUBLIC_APP_BASE_PATH||'';
  return base+path;
};

const NAV=[
  {id:'overview',label:'Overview',icon:Home},
  {id:'sales',label:'Sales',icon:CircleDollarSign,children:[
    {id:'invoices',label:'Invoices',icon:ReceiptText},
    {id:'ar',label:'Accounts Receivable',icon:UserRound},
  ]},
  {id:'commissions',label:'Commissions',icon:TrendingUp},
  {id:'depletion',label:'Depletion',icon:Database},
  {id:'crm',label:'CRM',icon:UsersRound,children:[
    {id:'crm-accounts',label:'Accounts'},
    {id:'crm-contacts',label:'Contacts'},
    {id:'crm-opportunities',label:'Opportunities'},
    {id:'crm-activities',label:'Activities'},
  ]},
  {id:'reports',label:'Reports',icon:FileBarChart},
  {id:'administration',label:'Administration',icon:Settings},
];

function NavButton({item,active,onNavigate,expanded,onToggle,child=false}){
  const Icon=item.icon;
  const isActive=active===item.id;
  return <button
    type="button"
    className={'lo-nav-item'+(isActive?' is-active':'')+(child?' is-child':'')}
    onClick={()=>item.children?onToggle(item.id):onNavigate(item.id)}
    aria-current={isActive?'page':undefined}
    aria-expanded={item.children?expanded:undefined}
  >
    <span className="lo-nav-icon">{Icon?<Icon size={17} strokeWidth={1.8}/>:<span className="lo-child-dot"/>}</span>
    <span className="lo-nav-label">{item.label}</span>
    {item.children&&<ChevronDown size={14} className={'lo-nav-chevron'+(expanded?' is-open':'')}/>}
  </button>;
}

export default function AppShell({
  active,
  onNavigate,
  user,
  children,
}){
  const openSales=['invoices','ar'].includes(active);
  const openCrm=active.startsWith('crm-');
  const [salesOpen,setSalesOpen]=React.useState(openSales);
  const [crmOpen,setCrmOpen]=React.useState(openCrm);

  React.useEffect(()=>{if(openSales)setSalesOpen(true)},[openSales]);
  React.useEffect(()=>{if(openCrm)setCrmOpen(true)},[openCrm]);

  const display=user?.display_name||user?.name||'Jordan Daniels';
  const initials=display.split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase()||'JD';

  return <div className="lo-app-shell">
    <TableSortController/>
    <aside className="lo-sidebar">
      <div className="lo-brand">
        <img
          className="lo-brand-icon"
          src={assetUrl('/enhanced-lagom-naturals-icon-white.webp')}
          alt="Lagom Naturals"
        />
      </div>

      <nav className="lo-nav" aria-label="Primary">
        {NAV.map(item=>{
          const expanded=item.id==='sales'?salesOpen:item.id==='crm'?crmOpen:false;
          return <div className="lo-nav-group" key={item.id}>
            <NavButton
              item={item}
              active={active}
              onNavigate={onNavigate}
              expanded={expanded}
              onToggle={()=>{
                if(item.id==='sales')setSalesOpen(v=>!v);
                if(item.id==='crm')setCrmOpen(v=>!v);
                if(!item.children)onNavigate(item.id);
              }}
            />
            {item.children&&expanded&&<div className="lo-nav-children">
              {item.children.map(child=><NavButton
                key={child.id}
                item={child}
                active={active}
                onNavigate={onNavigate}
                child
              />)}
            </div>}
          </div>;
        })}
      </nav>

      <div className="lo-sidebar-user">
        <div className="lo-avatar lo-avatar--dark">{initials}</div>
        <div><strong>{display}</strong><span>{user?.role==='rep'?'Sales':'Operations'}</span></div>
      </div>
    </aside>

    <div className="lo-main"><main className="lo-content">{children}</main></div>
  </div>;
}

