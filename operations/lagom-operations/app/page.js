'use client';

import {useCallback,useEffect,useMemo,useState} from 'react';
import {createClient} from '@supabase/supabase-js';

import AppShell from '../components/layout/AppShell';
import OverviewPage from '../components/pages/OverviewPage';
import InvoicesPage from '../components/pages/InvoicesPage';
import DepletionPage from '../components/pages/DepletionPage';
import AccountsReceivablePage from '../components/pages/AccountsReceivablePage';
import ReportsPage from '../components/pages/ReportsPage';
import CommissionsPage from '../components/pages/CommissionsPage';
import CRMPage from '../components/pages/CRMPage';
import AdministrationPage from '../components/pages/AdministrationPage';
import UILibraryPage from '../components/pages/UILibraryPage';
import InvoiceDialog from '../components/operations/InvoiceDialog';

import {buildCompanyOperationsModel,monthlyPerformance} from '../lib/companyOperationsDomain';
import {loadOperationsData,subscribeOperations} from '../lib/operationsData';
import {createPreviewClient} from '../lib/previewClient';

const HAS_SUPABASE_CONFIG=Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
const IS_STATIC_PREVIEW=
  process.env.NEXT_PUBLIC_STATIC_PREVIEW==='true' ||
  !HAS_SUPABASE_CONFIG;

const supabase=IS_STATIC_PREVIEW
  ? createPreviewClient()
  : createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const DEFAULT_USER={name:'Jordan Daniels',display_name:'Jordan Daniels',role:'admin',username:'preview'};

function normalizeRoute(value){
  const route=String(value||'').replace(/^#\/?/,'').split('?')[0];
  const known=['overview','invoices','ar','commissions','depletion','reports','crm-accounts','crm-contacts','crm-opportunities','crm-activities','administration','ui-library'];
  return known.includes(route)?route:'overview';
}

function Login({onLogin}){
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(false);

  const submit=async event=>{
    event.preventDefault();
    setLoading(true);setError('');
    try{
      const result=await supabase.from('crm_users').select('*').eq('username',username.trim()).maybeSingle();
      if(result?.error)throw result.error;
      const user=result?.data;
      if(!user||String(user.password_hash||'')!==password)throw new Error('Invalid username or password.');
      localStorage.setItem('lagom_operations_user',JSON.stringify(user));
      onLogin(user);
    }catch(e){setError(e?.message||'Unable to sign in.')}finally{setLoading(false)}
  };

  return <div className="lo-login">
    <section className="lo-login-brand">
      <img src={(process.env.NEXT_PUBLIC_APP_BASE_PATH||'')+'/lagom-logo-white.svg'} alt="Lagom Naturals"/>
      <span>OPERATIONS</span>
      <h1>One operating system for Lagom.</h1>
      <p>CRM, commercial operations, depletion, receivables, reporting, commissions and account intelligence in one workspace.</p>
    </section>
    <form className="lo-login-card" onSubmit={submit}>
      <div className="lo-page-eyebrow">LAGOM NATURALS</div>
      <h2>Sign in</h2>
      <p>Access the internal operations workspace.</p>
      <label><span>Username</span><input value={username} onChange={e=>setUsername(e.target.value)} autoComplete="username"/></label>
      <label><span>Password</span><input type="password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password"/></label>
      {error&&<div className="lo-inline-error">{error}</div>}
      <button className="lo-button lo-button--primary" disabled={loading}>{loading?'Signing in…':'Sign in'}</button>
    </form>
  </div>;
}

export default function OperationsApp(){
  const [user,setUser]=useState(IS_STATIC_PREVIEW?DEFAULT_USER:null);
  const [active,setActive]=useState('overview');
  const [selectedAccountId,setSelectedAccountId]=useState(null);
  const [invoiceOpen,setInvoiceOpen]=useState(false);
  const [loading,setLoading]=useState(true);
  const [source,setSource]=useState({
    products:[],invoices:[],items:[],commissions:[],reorders:[],
    prospects:[],activities:[],users:[],tasks:[],paymentTerms:[],errors:[]
  });

  useEffect(()=>{
    if(IS_STATIC_PREVIEW)return;
    try{
      const saved=JSON.parse(localStorage.getItem('lagom_operations_user')||'null');
      if(saved)setUser(saved);
    }catch{}
  },[]);

  useEffect(()=>{
    const sync=()=>setActive(normalizeRoute(window.location.hash));
    sync();
    window.addEventListener('hashchange',sync);
    return()=>window.removeEventListener('hashchange',sync);
  },[]);

  const load=useCallback(async()=>{
    setLoading(true);
    const next=await loadOperationsData(supabase);
    setSource(next);
    setLoading(false);
  },[]);

  useEffect(()=>{if(user)load()},[user,load]);
  useEffect(()=>user?subscribeOperations(supabase,load):undefined,[user,load]);

  const isCompanyWide=['admin','investor','owner'].includes(user?.role);
  const scoped=useMemo(()=>{
    if(isCompanyWide)return source;
    const me=String(user?.display_name||user?.name||'').toLowerCase();
    const invoices=source.invoices.filter(x=>String(x.rep_name||'').toLowerCase()===me);
    const ids=new Set(invoices.map(x=>x.id));
    return {
      ...source,
      invoices,
      items:source.items.filter(x=>ids.has(x.invoice_id)),
      commissions:source.commissions.filter(x=>String(x.rep_name||'').toLowerCase()===me),
      reorders:source.reorders.filter(x=>String(x.rep_name||'').toLowerCase()===me),
      prospects:source.prospects.filter(x=>String(x.assigned_to||'').toLowerCase()===me),
      activities:source.activities.filter(x=>String(x.crm_users?.display_name||x.rep||'').toLowerCase()===me),
      tasks:source.tasks.filter(x=>String(x.assigned_to||'').toLowerCase()===me),
    };
  },[source,isCompanyWide,user]);

  const model=useMemo(()=>buildCompanyOperationsModel({
    invoices:scoped.invoices,
    items:scoped.items,
    products:source.products,
    commissions:scoped.commissions,
    reorders:scoped.reorders,
  }),[scoped.invoices,scoped.items,source.products,scoped.commissions,scoped.reorders]);

  const navigate=route=>{
    if(route==='sales')route='invoices';
    window.location.hash='#/'+route;
    setActive(route);
    if(route!=='crm-account-detail')setSelectedAccountId(null);
  };
  const openAccount=id=>{
    setSelectedAccountId(id);
    setActive('crm-account-detail');
  };

  if(!user)return <Login onLogin={setUser}/>;

  const shellActive=active==='crm-account-detail'?'crm-accounts':active;
  const monthly=monthlyPerformance(model,new Date().getFullYear());

  let page;
  if(loading){
    page=<div className="lo-loading-page"><div className="lo-loading-mark"/><strong>Loading Lagom Operations</strong><span>Synchronizing commercial and CRM data…</span></div>;
  }else if(active==='invoices'){
    page=<InvoicesPage model={model} reps={source.users} onNewInvoice={()=>setInvoiceOpen(true)}/>;
  }else if(active==='depletion'){
    page=<DepletionPage model={model} source={scoped} supabase={supabase} reload={load} onAddEntry={()=>setInvoiceOpen(true)}/>;
  }else if(active==='ar'){
    page=<AccountsReceivablePage model={model}/>;
  }else if(active==='reports'){
    page=<ReportsPage model={model}/>;
  }else if(active==='commissions'){
    page=<CommissionsPage model={model} reps={source.users}/>;
  }else if(active==='crm-account-detail'){
    page=<CRMPage mode="detail" prospects={scoped.prospects} activities={scoped.activities} tasks={scoped.tasks} model={model} accountId={selectedAccountId} onNavigate={navigate}/>;
  }else if(active.startsWith('crm-')){
    page=<CRMPage mode={active.replace('crm-','')} prospects={scoped.prospects} activities={scoped.activities} tasks={scoped.tasks} model={model} onOpenAccount={openAccount} onNavigate={navigate}/>;
  }else if(active==='administration'){
    page=<AdministrationPage source={source} onNavigate={navigate}/>;
  }else if(active==='ui-library'){
    page=<UILibraryPage monthly={monthly}/>;
  }else{
    page=<OverviewPage model={model} onNavigate={navigate}/>;
  }

  return <AppShell active={shellActive} onNavigate={navigate} user={user}>
    {source.errors?.length>0&&<div className="lo-source-banner">
      <strong>Some data sources need attention.</strong>
      <span>{source.errors.map(x=>x.source).join(', ')}</span>
    </div>}
    {page}
    {invoiceOpen&&<InvoiceDialog supabase={supabase} source={source} user={user} onClose={()=>setInvoiceOpen(false)} onSaved={load}/>}
  </AppShell>;
}
