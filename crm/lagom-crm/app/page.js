'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';
import SalesWorkspace from '../components/crm/SalesWorkspace';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/* ── Palette ──────────────────────────────────────────────────────────────── */
const P = {
  bg:'#F6F8FB', white:'#FFFFFF', border:'#E7EBF1',
  text:'#0E1726', t2:'#5B6676', t3:'#98A2B2',
  teal:'#0F6E56', tealL:'#E6F4F0', tealM:'#1A8A6B',
  amber:'#9A6A12', amberL:'#FBF1E0',
  slate:'#0F172A', slateL:'#EEF2F7', nav:'#1E293B',
  plum:'#6B3A7D', plumL:'#F2ECF7',
  rose:'#B0413C', roseL:'#FBECEB',
};

/* ── Static credentials ───────────────────────────────────────────────────── */
const CREDS = {
  tito:     { name:'Tito',     role:'admin',    password:'lagom2026' },
  timmy:    { name:'Timmy',    role:'admin',    password:'northloop' },
  roman:    { name:'Roman',    role:'rep',      password:'west2026'  },
  jess:     { name:'Jessica',  role:'rep',      password:'mpls2026'  },
  investor: { name:'Investor', role:'investor', password:'view2026'  },
};

/* ── CRM constants ────────────────────────────────────────────────────────── */
const STATUSES = ['New','Contacted','Follow Up','Meeting Set','Proposal Sent','Won','Lost','Not Interested'];
const PRIORITIES = ['High','Medium','Low'];
const ACT_TYPES = ['Call','Email','In-Person Visit','Demo','Follow-Up','Meeting','Proposal','Check-In'];
const EVT_STATUSES = ['Upcoming','In Progress','Completed','Cancelled'];
const REPS = ['Roman','Jess'];
const ORD_STATUSES = ['Draft','Confirmed','Shipped','Delivered','Cancelled'];

const SC = {
  New:'#6366f1', Contacted:'#2563eb', 'Follow Up':'#d97706',
  'Meeting Set':'#16a34a', 'Proposal Sent':'#8b5cf6',
  Won:'#059669', Lost:'#dc2626', 'Not Interested':'#6b7280',
};
const PC = { High:'#dc2626', Medium:'#d97706', Low:'#6b7280' };
const OSC = { Draft:'#3A4A5C', Confirmed:'#0F6E56', Shipped:'#996B1D', Delivered:'#059669', Cancelled:'#9E3A3A' };

const HQ = { lat:44.9863, lng:-93.2727 };

// Territories are organized by county. Each county gets a stable color.
const TERRITORY_PALETTE = ['#0F6E56','#996B1D','#6B3A7D','#3A4A5C','#9E3A3A','#1A8A6B','#2563eb','#d97706','#059669','#8b5cf6','#0891b2','#be123c','#0F766E','#7C3AED','#B45309'];
function countyColor(name){
  if(!name||name==='Unknown')return '#9BA3AE';
  let h=0; for(let i=0;i<name.length;i++)h=(h*31+name.charCodeAt(i))>>>0;
  return TERRITORY_PALETTE[h%TERRITORY_PALETTE.length];
}
// Distinct counties present in the data, sorted by account count (desc).
function countiesByCount(prospects){
  const m={};
  prospects.forEach(p=>{const c=(p.county||'').trim();if(c)m[c]=(m[c]||0)+1;});
  return Object.entries(m).sort((a,b)=>b[1]-a[1]).map(([c])=>c);
}
const HAS_GMAPS_KEY = typeof process!=='undefined' && !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const ALL_TABS = [
  { id:'today',         label:'Today',         icon:'⌂' },
  { id:'overview',      label:'Overview',      icon:'◈' },
  { id:'accounts',      label:'Accounts',      icon:'◉', hasBadge:true },
  { id:'pipeline',      label:'Pipeline',      icon:'▲' },
  { id:'territories',   label:'Territories',   icon:'◎' },
  { id:'territory-map', label:'Territory Map', icon:'⊕' },
  { id:'routes',        label:'Routes',        icon:'→' },
  { id:'orders',        label:'Orders',        icon:'◧' },
  { id:'sales',         label:'Sales',         icon:'$' },
  { id:'events',        label:'Events',        icon:'◆' },
  { id:'activity',      label:'Activity',      icon:'⚡' },
  { id:'commissions',   label:'Commissions',   icon:'$' },
  { id:'inventory',     label:'Inventory',     icon:'▣' },
  { id:'lagom-ai',      label:'Lagom AI',      icon:'✦' },
  { id:'settings',      label:'Settings',      icon:'⚙', adminOnly:true },
  { id:'setup',         label:'Setup',         icon:'⊞', adminOnly:true },
];

/* ── Utilities ────────────────────────────────────────────────────────────── */
const fmt$ = n => (!n && n!==0)?'-': n>=1000?`$${(n/1000).toFixed(1)}k`:`$${Math.round(n).toLocaleString()}`;
const fmtFull$ = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n||0);
const fmtD = d => { if(!d)return'-'; try{return new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});}catch{return d;} };
const fmtDS = d => { if(!d)return'-'; try{return new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});}catch{return d;} };
const todayStr = () => new Date().toISOString().split('T')[0];
const addDays = (d,n) => { const dt=new Date(d+'T12:00:00'); dt.setDate(dt.getDate()+n); return dt.toISOString().split('T')[0]; };

function haversine(lat1,lng1,lat2,lng2){
  const R=3958.8,dLat=(lat2-lat1)*Math.PI/180,dLng=(lng2-lng1)*Math.PI/180;
  const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

// Territory of an account = its county (filled by geocoding / county_backfill).
function getZone(p){
  return (p && p.county ? String(p.county).trim() : '') || 'Unknown';
}

function downloadCSV(rows,filename='lagom-export.csv'){
  if(!rows||!rows.length)return alert('No data to export');
  const h=Object.keys(rows[0]);
  const csv=[h.join(','),...rows.map(r=>h.map(k=>{const v=String(r[k]??'').replace(/"/g,'""');return(v.includes(',')||v.includes('\n')||v.includes('"'))?`"${v}"`:v;}).join(','))].join('\n');
  const a=Object.assign(document.createElement('a'),{href:URL.createObjectURL(new Blob([csv],{type:'text/csv'})),download:filename});
  a.click();
}

/* ── Global Styles ────────────────────────────────────────────────────────── */
function GlobalStyles(){
  return(
    <style>{`
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      html,body{height:100%;background:${P.bg};font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:${P.text};font-size:14px;overflow-x:hidden;max-width:100vw}
      table{width:100%;border-collapse:collapse}
      th{background:${P.slateL};color:${P.slate};font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;padding:10px 14px;text-align:left;white-space:nowrap;position:sticky;top:0;z-index:1}
      td{padding:10px 14px;border-bottom:1px solid ${P.border};font-size:13px;vertical-align:middle}
      tr:hover>td{background:#F6F4F0}
      input,select,textarea{font-family:inherit;font-size:13px;padding:8px 12px;border:1.5px solid ${P.border};border-radius:8px;background:#fff;color:${P.text};outline:none;transition:border-color .15s;width:100%}
      input:focus,select:focus,textarea:focus{border-color:${P.teal};box-shadow:0 0 0 3px ${P.tealL}}
      button{cursor:pointer;font-family:inherit}
      ::-webkit-scrollbar{width:5px;height:5px}
      ::-webkit-scrollbar-track{background:transparent}
      ::-webkit-scrollbar-thumb{background:#D0CCC4;border-radius:4px}
      .layout{display:flex;height:100vh;overflow:hidden}
      .sidebar{width:216px;flex-shrink:0;background:${P.nav};display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;z-index:10;transition:width .2s ease}
      .main{flex:1;min-width:0;display:flex;flex-direction:column;overflow:hidden;background:${P.bg}}
      .topbar{height:54px;border-bottom:1px solid ${P.border};background:${P.white};display:flex;align-items:center;padding:0 24px;gap:12px;flex-shrink:0}
      .content{flex:1;overflow-y:auto;padding:24px}
      .content-inner{max-width:1480px;margin:0 auto;width:100%}
      .g4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
      .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
      .g2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
      .card{background:${P.white};border:1px solid ${P.border};border-radius:14px;padding:20px;box-shadow:0 1px 2px rgba(16,23,38,.04),0 4px 12px rgba(16,23,38,.03);transition:box-shadow .2s ease,transform .2s ease}
      .card-i{cursor:pointer}
      .card-i:hover{box-shadow:0 4px 16px rgba(16,23,38,.10),0 2px 6px rgba(16,23,38,.05);transform:translateY(-2px)}
      .tnum{font-variant-numeric:tabular-nums;font-feature-settings:'tnum'}
      @keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}
      .skeleton{background:linear-gradient(90deg,${P.slateL} 25%,#F4F6FA 50%,${P.slateL} 75%);background-size:800px 100%;animation:shimmer 1.3s linear infinite;border-radius:8px}
      .auth{display:flex;min-height:100dvh}
      .auth-hero{flex:1;background:linear-gradient(155deg,#0F172A 0%,#13233B 55%,#0E3A2E 100%);color:#fff;padding:52px 56px;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;overflow:hidden}
      .auth-glow{position:absolute;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(26,138,107,.35),transparent 70%);top:-120px;right:-120px;pointer-events:none}
      .auth-form{width:480px;flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:32px;background:${P.bg}}
      .auth-feat{display:flex;gap:13px;align-items:flex-start;margin-top:20px;max-width:460px}
      @media(max-width:880px){
        .auth{flex-direction:column}
        .auth-hero{padding:34px 22px 26px}
        .auth-form{width:100%;flex:1;padding:28px 18px 40px}
        .auth-feat{margin-top:14px}
        .auth-feat-extra{display:none}
      }
      .btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:8px;font-size:13px;font-weight:600;border:none;transition:opacity .15s;white-space:nowrap}
      .btn:hover{opacity:.88}
      .btn:active{transform:translateY(1px)}
      .btn-p{background:${P.teal};color:#fff}
      .btn-g{background:${P.white};border:1.5px solid ${P.border};color:${P.t2}}
      .btn-a{background:${P.amberL};border:1.5px solid #D4952860;color:${P.amber}}
      .btn-r{background:${P.roseL};border:1.5px solid #C0504060;color:${P.rose}}
      .btn-sm{padding:5px 12px;font-size:12px;border-radius:7px}
      .badge{display:inline-flex;align-items:center;padding:2px 9px;border-radius:20px;font-size:11px;font-weight:700;white-space:nowrap}
      .overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:300;display:flex;align-items:center;justify-content:center;padding:16px}
      .modal{background:${P.white};border-radius:16px;padding:28px;max-width:540px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.2)}
      .modal-wide{max-width:700px}
      label{display:block;font-size:12px;font-weight:600;color:${P.t2};margin-bottom:4px}
      .frow{display:grid;grid-template-columns:1fr 1fr;gap:12px}
      .ovfl{overflow-x:auto;border-radius:12px;border:1.5px solid ${P.border}}
      .sep{height:1px;background:${P.border};margin:16px 0}
      .tab-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;gap:12px;flex-wrap:wrap}
      .tab-h h2{font-size:21px;font-weight:900;letter-spacing:-.4px}
      .tab-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
      .detail-panel{position:fixed;right:0;top:0;bottom:0;width:400px;background:${P.white};border-left:1.5px solid ${P.border};box-shadow:-4px 0 24px rgba(0,0,0,.08);z-index:200;display:flex;flex-direction:column;overflow:hidden}
      .mob-nav{display:none;position:fixed;bottom:0;left:0;right:0;background:${P.nav};z-index:200;border-top:1px solid rgba(255,255,255,.08)}
      .hamburger{display:none;align-items:center;justify-content:center;width:36px;height:36px;border-radius:8px;border:1.5px solid ${P.border};background:#fff;color:${P.text};font-size:17px;flex-shrink:0}
      .drawer-ov{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:250}
      .drawer{position:fixed;top:0;bottom:0;left:0;width:248px;max-width:84vw;background:${P.nav};z-index:260;display:flex;flex-direction:column;overflow-y:auto;animation:slideIn .2s ease}
      @keyframes slideIn{from{transform:translateX(-100%)}to{transform:translateX(0)}}
      @keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      .fade{animation:fadeIn .18s ease}
      @keyframes spin{to{transform:rotate(360deg)}}
      .spin{animation:spin .9s linear infinite}
      @keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}
      @media(max-width:1024px){.g4{grid-template-columns:1fr 1fr}.g3{grid-template-columns:1fr 1fr}}
      @media(max-width:768px){
        .sidebar{display:none}
        .hamburger{display:inline-flex}
        .mob-nav{display:flex;justify-content:space-around;padding:8px 2px;padding-bottom:calc(8px + env(safe-area-inset-bottom))}
        .content{padding:16px;padding-bottom:calc(78px + env(safe-area-inset-bottom))}
        .g4,.g3{grid-template-columns:1fr 1fr}
        .g2{grid-template-columns:1fr}
        .topbar{padding-left:calc(14px + env(safe-area-inset-left));padding-right:calc(14px + env(safe-area-inset-right))}
        .detail-panel{width:100%;left:0}
        .hide-mob{display:none!important}
        .frow{grid-template-columns:1fr}
        td,th{padding:8px 10px}
      }
      @media(max-width:380px){.g4,.g3{grid-template-columns:1fr}}
      @media(max-width:480px){.g4,.g3{grid-template-columns:1fr}}
    `}</style>
  );
}

/* ── Chart Canvas ─────────────────────────────────────────────────────────── */
function ChartCanvas({type,data,options={},height=220}){
  const ref=useRef(null);
  const inst=useRef(null);
  const key=useMemo(()=>JSON.stringify({type,data}),[type,data]);
  useEffect(()=>{
    let live=true;
    import('chart.js/auto').then(({Chart})=>{
      if(!live||!ref.current)return;
      if(inst.current){inst.current.destroy();inst.current=null;}
      inst.current=new Chart(ref.current,{
        type,data,
        options:{
          responsive:true,maintainAspectRatio:false,
          plugins:{legend:{position:'bottom',labels:{font:{size:11,family:'Inter,system-ui,sans-serif'},padding:14,boxWidth:10}}},
          ...options,
        },
      });
    });
    return()=>{live=false;if(inst.current){inst.current.destroy();inst.current=null;}};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[key]);
  return <div style={{position:'relative',height}}><canvas ref={ref}/></div>;
}

/* ── Micro-components ─────────────────────────────────────────────────────── */
function Badge({label,color='#6b7280',bg}){
  if(!label)return null;
  return <span className="badge" style={{background:bg||`${color}18`,color,border:`1px solid ${color}28`}}>{label}</span>;
}

/* ── Icon system (dependency-free stroke icons) ───────────────────────────── */
const ICON_PATHS={
  overview:<><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></>,
  today:<><path d="M3 11l9-8 9 8"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/><path d="M9 21v-6h6v6"/></>,
  accounts:<><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></>,
  pipeline:<><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></>,
  territories:<><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></>,
  'territory-map':<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
  routes:<><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M18 7v6a4 4 0 0 1-4 4H8"/><path d="M6 17V9"/></>,
  orders:<><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
  sales:<><path d="M3 3h18v18H3z"/><path d="M7 15l3-3 3 2 4-5"/><path d="M7 7h4"/></>,
  events:<><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
  activity:<><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
  commissions:<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
  inventory:<><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></>,
  'lagom-ai':<><path d="M12 3l1.9 4.8L18.7 9.7l-4.8 1.9L12 16.4l-1.9-4.8L5.3 9.7l4.8-1.9L12 3z"/><path d="M19 15l.7 1.8L21.5 17.5l-1.8.7L19 20l-.7-1.8L16.5 17.5l1.8-.7L19 15z"/></>,
  settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
  setup:<><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></>,
  menu:<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
  lock:<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
  'chevron-left':<><polyline points="15 18 9 12 15 6"/></>,
  logout:<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
};
function Icon({name,size=18,style}){
  const p=ICON_PATHS[name];
  if(!p)return null;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,...style}}>{p}</svg>;
}
function Spinner({size=20}){
  return <div className="spin" style={{width:size,height:size,border:`2.5px solid ${P.border}`,borderTopColor:P.teal,borderRadius:'50%',display:'inline-block',flexShrink:0}}/>;
}
function Empty({msg='No data yet'}){
  return <div style={{textAlign:'center',padding:'48px 0',color:P.t3,fontSize:13}}>{msg}</div>;
}
function CSVBtn({rows,filename,label='↓ CSV'}){
  return <button className="btn btn-g btn-sm" onClick={()=>downloadCSV(rows,filename)}>{label}</button>;
}
function Modal({title,onClose,children,wide}){
  return(
    <div className="overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className={`modal fade${wide?' modal-wide':''}`}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
          <h3 style={{fontWeight:800,fontSize:18}}>{title}</h3>
          <button style={{background:'none',border:'none',fontSize:24,color:P.t3,lineHeight:1}} onClick={onClose}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}
function CardChart({title,badge,children}){
  return(
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
        <div style={{fontWeight:700,fontSize:14}}>{title}</div>
        {badge&&<span className="badge" style={{background:P.slateL,color:P.slate}}>{badge}</span>}
      </div>
      {children}
    </div>
  );
}

/* ── Login ────────────────────────────────────────────────────────────────── */
function Login({onLogin}){
  const [u,setU]=useState('');
  const [pw,setPw]=useState('');
  const [err,setErr]=useState('');
  const [loading,setLoading]=useState(false);

  const submit=async e=>{
    e.preventDefault();
    setLoading(true);setErr('');
    const username=u.trim().toLowerCase();
    try{
      const{data}=await supabase.from('crm_users').select('*').eq('username',username).single();
      if(data&&data.password_hash===pw){setLoading(false);return onLogin({id:data.id,name:data.display_name||data.username,role:data.role,username});}
    }catch{}
    const cred=CREDS[username];
    if(cred&&cred.password===pw){setLoading(false);return onLogin({name:cred.name,role:cred.role,username});}
    setLoading(false);setErr('Invalid username or password');
  };

  return(
    <div className="auth">
      <GlobalStyles/>
      <div className="auth-hero">
        <div className="auth-glow"/>
        <div style={{position:'relative',width:'100%',maxWidth:560}}>
          <div style={{display:'flex',alignItems:'center',gap:11,marginBottom:30}}>
            <img src="/logo.png" alt="Lagom" style={{height:34}}/>
            <span style={{fontWeight:900,fontSize:17,letterSpacing:'-.3px'}}>Lagom CRM</span>
          </div>
          <h1 style={{fontSize:32,fontWeight:900,letterSpacing:'-.8px',lineHeight:1.12,maxWidth:520}}>The field sales CRM built for beverage brands.</h1>
          <p style={{color:'rgba(255,255,255,.6)',marginTop:14,fontSize:14,lineHeight:1.6,maxWidth:460}}>Less time fighting software, more time closing accounts. Built for reps in the field.</p>
          {[
            ['inventory','Placement Tracking','Placements auto-mark as orders are fulfilled as depletion data loads. A clearer view into inventory levels with less manual tracking.'],
            ['activity','Zero Data-Entry Friction','Log visits, update placements, and move on. Built so reps spend time closing deals, not fighting software.'],
            ['routes','Optimize Routes, Save Hours','Map your day in seconds, cut windshield time, and hit your most valuable accounts when it matters.'],
            ['lagom-ai','AI Depletion Insights','Ask plain-English questions about your data and instantly uncover where you’re winning and where you’re at risk.'],
            ['overview','See What Your Team Is Doing','Real visibility into field activity and performance, so you always know what’s happening without chasing updates.'],
          ].map(([ic,title,blurb],i)=>(
            <div key={ic} className={`auth-feat${i>=3?' auth-feat-extra':''}`}>
              <div style={{width:34,height:34,borderRadius:9,background:'rgba(26,138,107,.18)',border:'1px solid rgba(78,207,168,.3)',color:'#4ECFA8',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <Icon name={ic} size={17}/>
              </div>
              <div>
                <div style={{fontWeight:700,fontSize:13.5}}>{title}</div>
                <div style={{color:'rgba(255,255,255,.55)',fontSize:12.5,lineHeight:1.5,marginTop:2}}>{blurb}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="auth-form">
        <div style={{width:'100%',maxWidth:360}}>
          <div style={{marginBottom:26}}>
            <h2 style={{fontSize:23,fontWeight:900,color:P.text,letterSpacing:'-.5px'}}>Welcome back</h2>
            <p style={{color:P.t2,marginTop:5,fontSize:13}}>Sign in to your sales workspace</p>
          </div>
          <form onSubmit={submit}>
            <div style={{display:'flex',flexDirection:'column',gap:14}}>
              <div><label>Username</label><input value={u} onChange={e=>setU(e.target.value)} placeholder="Enter your username" autoFocus autoCapitalize="none"/></div>
              <div><label>Password</label><input type="password" value={pw} onChange={e=>setPw(e.target.value)} placeholder="••••••••"/></div>
              {err&&<div style={{background:P.roseL,color:P.rose,padding:'8px 12px',borderRadius:8,fontSize:13,fontWeight:600}}>{err}</div>}
              <button type="submit" className="btn btn-p" style={{width:'100%',justifyContent:'center',padding:11,fontSize:14,marginTop:2}} disabled={loading}>
                {loading?<Spinner size={16}/>:'Sign In →'}
              </button>
            </div>
          </form>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:6,marginTop:16,color:P.t3,fontSize:11.5,fontWeight:600}}>
            <Icon name="lock" size={12}/> Encrypted connection · Secure sign-in
          </div>
          <p style={{textAlign:'center',color:P.t3,fontSize:12,marginTop:10}}>Lagom Naturals · Twin Cities, MN</p>
        </div>
      </div>
    </div>
  );
}

/* ── Investor Dashboard ───────────────────────────────────────────────────── */
function InvestorDashboard({user,onLogout}){
  const [prospects,setProspects]=useState([]);
  const [orders,setOrders]=useState([]);
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    async function load(){
      const[{data:ps},{data:ords},{data:catalog}]=await Promise.all([
        supabase.from('prospects').select('status,assigned_to,city'),
        supabase.from('orders').select('status,total_amount,created_at'),
        supabase.from('products').select('id,name,sku,product_line,status').eq('status','Active').order('product_line').order('name'),
      ]);
      setProspects(ps||[]);setOrders(ords||[]);setProducts(catalog||[]);setLoading(false);
    }
    load();
  },[]);

  const won=prospects.filter(p=>p.status==='Won');
  const active=prospects.filter(p=>!['Won','Lost','Not Interested'].includes(p.status));
  const totalRev=orders.filter(o=>o.status==='Delivered').reduce((s,o)=>s+(o.total_amount||0),0);
  const winRate=prospects.length?((won.length/prospects.length)*100).toFixed(1):0;

  const statusDist=STATUSES.map(s=>prospects.filter(p=>p.status===s).length);
  const zoneData=countiesByCount(prospects).slice(0,8).map(z=>({zone:z,count:prospects.filter(p=>getZone(p)===z).length}));
  const countyCount=countiesByCount(prospects).length;

  return(
    <div style={{minHeight:'100vh',background:P.bg}}>
      <GlobalStyles/>
      <div style={{background:P.slate,padding:'0 28px',height:56,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <img src="/logo.png" alt="Lagom" style={{height:32,flexShrink:0}}/>
          <div>
            <div style={{fontWeight:900,fontSize:14,color:'#fff'}}>Lagom Naturals</div>
            <div style={{fontSize:10,color:'rgba(255,255,255,.45)'}}>Investor View · Read Only</div>
          </div>
        </div>
        <button className="btn btn-sm" onClick={onLogout} style={{background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.15)',color:'rgba(255,255,255,.7)',fontSize:12}}>Sign Out</button>
      </div>
      <div style={{maxWidth:1100,margin:'0 auto',padding:28}}>
        <div style={{marginBottom:24}}>
          <h1 style={{fontSize:26,fontWeight:900,letterSpacing:'-.5px'}}>Business Overview</h1>
          <div style={{color:P.t2,fontSize:13,marginTop:4}}>{new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})}</div>
        </div>
        {loading?<div style={{textAlign:'center',padding:60}}><Spinner size={28}/></div>:(
          <>
            <div className="g4" style={{marginBottom:24}}>
              {[
                {label:'Total Accounts',value:prospects.length,sub:`${active.length} in active pipeline`,c:P.teal},
                {label:'Closed Won',value:won.length,sub:`${winRate}% win rate`,c:'#059669'},
                {label:'Revenue Delivered',value:fmt$(totalRev),sub:`${orders.filter(o=>o.status==='Delivered').length} orders`,c:P.plum},
                {label:'Counties Covered',value:countyCount,sub:'across Minnesota',c:P.amber},
              ].map((k,i)=>(
                <div key={i} className="card" style={{borderTop:`4px solid ${k.c}`}}>
                  <div style={{fontSize:10,fontWeight:800,color:P.t2,textTransform:'uppercase',letterSpacing:'1px',marginBottom:10}}>{k.label}</div>
                  <div style={{fontSize:32,fontWeight:900,color:k.c,lineHeight:1,marginBottom:6}}>{k.value}</div>
                  <div style={{fontSize:11,color:P.t3}}>{k.sub}</div>
                </div>
              ))}
            </div>
            <div className="g2" style={{marginBottom:24}}>
              <CardChart title="Pipeline by Stage">
                <ChartCanvas type="doughnut" height={220}
                  data={{labels:STATUSES,datasets:[{data:statusDist,backgroundColor:Object.values(SC),borderWidth:2,borderColor:'#fff',hoverOffset:6}]}}
                  options={{cutout:'60%',plugins:{legend:{position:'right',labels:{font:{size:10},padding:8,boxWidth:8}}}}}
                />
              </CardChart>
              <CardChart title="Products">
                <div style={{display:'flex',flexDirection:'column',gap:10,paddingTop:8}}>
                  {products.map(p=>(
                    <div key={p.id} style={{display:'flex',alignItems:'center',gap:10}}>
                      <div style={{width:8,height:8,borderRadius:'50%',background:P.teal,flexShrink:0}}/>
                      <div style={{fontSize:13,fontWeight:500,flex:1}}>{p.name}<div style={{fontSize:10,color:P.t3,marginTop:1}}>{p.sku||p.product_line||''}</div></div>
                    </div>
                  ))}
                </div>
              </CardChart>
            </div>
            <div className="card">
              <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>Top Counties by Accounts</div>
              <ChartCanvas type="bar" height={160}
                data={{labels:zoneData.map(z=>z.zone),datasets:[{label:'Total Accounts',data:zoneData.map(z=>z.count),backgroundColor:P.teal+'CC',borderRadius:6}]}}
                options={{plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{size:10}}},y:{grid:{color:'#f0ece4'},ticks:{stepSize:1}}}}}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Overview Tab ─────────────────────────────────────────────────────────── */
function OverviewTab({prospects,user}){
  const [orders,setOrders]=useState([]);
  const [skuData,setSkuData]=useState([]);
  const [weeklyRev,setWeeklyRev]=useState([]);
  const [activities,setActivities]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    async function load(){
      const[{data:ords},{data:items},{data:acts}]=await Promise.all([
        supabase.from('orders').select('id,status,total_amount,created_at'),
        supabase.from('order_items').select('total_price,products(name)'),
        supabase.from('sales_activities').select('*,prospects(business_name),crm_users(display_name)').order('activity_date',{ascending:false}).limit(8),
      ]);
      const os=ords||[];setOrders(os);
      const sm={};
      (items||[]).forEach(it=>{const n=it.products?.name||'Unknown';sm[n]=(sm[n]||0)+(it.total_price||0);});
      setSkuData(Object.entries(sm).map(([l,v])=>({label:l,value:v})).sort((a,b)=>b.value-a.value).slice(0,6));
      const now=new Date(),cuts=Array.from({length:9},(_,i)=>{const d=new Date(now);d.setDate(d.getDate()-(8-i)*7);return d.toISOString();});
      setWeeklyRev(cuts.slice(0,-1).map((_,i)=>os.filter(o=>o.created_at>=cuts[i]&&o.created_at<cuts[i+1]&&o.status!=='Cancelled').reduce((s,o)=>s+(o.total_amount||0),0)));
      setActivities(acts||[]);setLoading(false);
    }
    load();
  },[]);

  const won=prospects.filter(p=>p.status==='Won');
  const active=prospects.filter(p=>!['Won','Lost','Not Interested'].includes(p.status));
  const overdue=prospects.filter(p=>p.next_follow_up&&p.next_follow_up<todayStr());
  const dueToday=prospects.filter(p=>p.next_follow_up&&p.next_follow_up===todayStr());
  const totalRev=orders.filter(o=>o.status!=='Cancelled').reduce((s,o)=>s+(o.total_amount||0),0);
  const activeOrds=orders.filter(o=>!['Delivered','Cancelled'].includes(o.status)).length;

  const repLB=useMemo(()=>{
    const m={};
    prospects.forEach(p=>{if(!p.assigned_to)return;if(!m[p.assigned_to])m[p.assigned_to]={name:p.assigned_to,total:0,won:0};m[p.assigned_to].total++;if(p.status==='Won')m[p.assigned_to].won++;});
    return Object.values(m).sort((a,b)=>b.won-a.won);
  },[prospects]);

  const statusDist=STATUSES.map(s=>prospects.filter(p=>p.status===s).length);
  const kpis=[
    {label:'Total Accounts',value:prospects.length,sub:`${active.length} active pipeline`,accent:P.teal},
    {label:'Total Revenue',value:fmt$(totalRev),sub:`${orders.filter(o=>o.status==='Delivered').length} orders delivered`,accent:P.plum,big:true},
    {label:'Win Rate',value:`${prospects.length?((won.length/prospects.length)*100).toFixed(1):0}%`,sub:`${won.length} accounts closed`,accent:P.amber},
    {label:'Open Orders',value:activeOrds||active.length,sub:overdue.length?`${overdue.length} follow-ups overdue`:'All on track',accent:overdue.length?P.rose:P.teal},
  ];

  const csvRows=prospects.map(p=>({Business:p.business_name,Status:p.status,Rep:p.assigned_to,City:p.city,Zone:getZone(p),Priority:p.priority}));

  return(
    <div className="fade">
      <div className="tab-h">
        <div>
          <h2>Analytics Overview</h2>
          <div style={{fontSize:12,color:P.t3,marginTop:3}}>{new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})}</div>
        </div>
        <div className="tab-actions"><CSVBtn rows={csvRows} filename="lagom-overview.csv"/></div>
      </div>

      {dueToday.length>0&&(
        <div style={{background:P.amberL,border:`1.5px solid ${P.amber}40`,borderRadius:12,padding:'14px 18px',marginBottom:16,display:'flex',gap:12,alignItems:'flex-start'}}>
          <div style={{fontSize:18,flexShrink:0}}>📅</div>
          <div style={{flex:1}}>
            <div style={{fontWeight:700,color:P.amber,fontSize:13,marginBottom:6}}>Due Today: {dueToday.length} follow-up{dueToday.length>1?'s':''}</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {dueToday.map(p=>(
                <span key={p.id} style={{background:'#fff',border:`1px solid ${P.amber}40`,borderRadius:6,padding:'3px 10px',fontSize:12,fontWeight:600}}>{p.business_name} <span style={{color:P.t2,fontWeight:400}}>· {p.assigned_to||'unassigned'}</span></span>
              ))}
            </div>
          </div>
        </div>
      )}

      {overdue.length>0&&(
        <div style={{background:P.roseL,border:`1.5px solid ${P.rose}40`,borderRadius:12,padding:'14px 18px',marginBottom:16,display:'flex',gap:12,alignItems:'flex-start'}}>
          <div style={{fontSize:18,flexShrink:0}}>⚠️</div>
          <div style={{flex:1}}>
            <div style={{fontWeight:700,color:P.rose,fontSize:13,marginBottom:6}}>Overdue: {overdue.length} follow-up{overdue.length>1?'s':''} past due</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {overdue.slice(0,12).map(p=>(
                <span key={p.id} style={{background:'#fff',border:`1px solid ${P.rose}40`,borderRadius:6,padding:'3px 10px',fontSize:12,fontWeight:600}}>{p.business_name} <span style={{color:P.t2,fontWeight:400}}>· {fmtDS(p.next_follow_up)}</span></span>
              ))}
              {overdue.length>12&&<span style={{fontSize:12,color:P.rose,padding:'3px 10px'}}>+{overdue.length-12} more</span>}
            </div>
          </div>
        </div>
      )}

      <div className="g4" style={{marginBottom:20}}>
        {kpis.map((k,i)=>(
          <div key={i} className="card" style={{borderTop:`4px solid ${k.accent}`,position:'relative',overflow:'hidden'}}>
            <div style={{fontSize:10,fontWeight:800,color:P.t2,textTransform:'uppercase',letterSpacing:'1px',marginBottom:10}}>{k.label}</div>
            <div style={{fontSize:k.big?28:34,fontWeight:900,color:k.accent,lineHeight:1,letterSpacing:'-.5px',marginBottom:6}}>{k.value}</div>
            <div style={{fontSize:11,color:P.t3}}>{k.sub}</div>
          </div>
        ))}
      </div>

      <div className="g2" style={{marginBottom:20}}>
        <CardChart title="Revenue by SKU" badge={`${skuData.length} products`}>
          {loading?<div style={{height:210,display:'flex',alignItems:'center',justifyContent:'center'}}><Spinner/></div>
            :skuData.length?<ChartCanvas type="bar" height={210}
                data={{labels:skuData.map(d=>d.label),datasets:[{label:'Revenue',data:skuData.map(d=>d.value),backgroundColor:[P.teal,P.amber,P.plum,P.rose,P.slate,'#059669'].map(c=>c+'CC'),borderRadius:6,borderSkipped:false}]}}
                options={{indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{grid:{color:'#f0ece4'},ticks:{callback:v=>fmt$(v),font:{size:10}}},y:{grid:{display:false},ticks:{font:{size:10}}}}}}
              />:<Empty msg="No order data yet"/>}
        </CardChart>
        <CardChart title="Pipeline by Status">
          <ChartCanvas type="doughnut" height={210}
            data={{labels:STATUSES,datasets:[{data:statusDist,backgroundColor:Object.values(SC),borderWidth:2,borderColor:'#fff',hoverOffset:6}]}}
            options={{cutout:'60%',plugins:{legend:{position:'right',labels:{font:{size:10},padding:8,boxWidth:8}}}}}
          />
        </CardChart>
      </div>

      <div className="g2" style={{marginBottom:20}}>
        <CardChart title="Revenue Over Time" badge="8 weeks">
          {loading?<div style={{height:180,display:'flex',alignItems:'center',justifyContent:'center'}}><Spinner/></div>
            :<ChartCanvas type="line" height={180}
                data={{labels:['8w','7w','6w','5w','4w','3w','2w','Now'],datasets:[{label:'Revenue',data:weeklyRev,borderColor:P.teal,backgroundColor:P.teal+'18',tension:.4,fill:true,pointRadius:4,pointBackgroundColor:P.teal}]}}
                options={{plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>fmt$(v),font:{size:10}},grid:{color:'#f0ece4'}},x:{grid:{display:false},ticks:{font:{size:10}}}}}}
              />}
        </CardChart>
        <CardChart title="Rep Leaderboard" badge={`${repLB.length} reps`}>
          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            {repLB.map((r,i)=>{
              const rate=r.total>0?(r.won/r.total)*100:0;
              const clr=[P.teal,P.amber,P.plum][i]||P.slate;
              return(
                <div key={i}>
                  <div style={{display:'flex',justifyContent:'space-between',marginBottom:5,fontSize:13}}>
                    <span style={{fontWeight:700}}>{['🥇','🥈','🥉'][i]||`${i+1}.`} {r.name}</span>
                    <span style={{color:P.t2,fontSize:12}}>{r.won} won · {r.total} total · <strong style={{color:clr}}>{rate.toFixed(0)}%</strong></span>
                  </div>
                  <div style={{height:7,background:P.slateL,borderRadius:4,overflow:'hidden'}}>
                    <div style={{width:`${rate}%`,height:'100%',background:clr,borderRadius:4,transition:'width .7s'}}/>
                  </div>
                </div>
              );
            })}
            {!repLB.length&&<Empty msg="Assign reps to prospects to see leaderboard"/>}
          </div>
        </CardChart>
      </div>

      <CardChart title="Recent Activity" badge="Latest 8">
        {loading?<div style={{display:'flex',justifyContent:'center',padding:24}}><Spinner/></div>
          :activities.length?activities.map((a,i)=>(
            <div key={i} style={{display:'flex',gap:12,padding:'10px 0',borderBottom:i<activities.length-1?`1px solid ${P.border}`:'none'}}>
              <div style={{width:32,height:32,borderRadius:'50%',background:P.tealL,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:14}}>⚡</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:600,fontSize:13}}>{a.prospects?.business_name||'General'}</div>
                <div style={{color:P.t2,fontSize:12}}>{a.activity_type}{a.crm_users?.display_name?` · ${a.crm_users.display_name}`:''}</div>
              </div>
              <div style={{color:P.t3,fontSize:11,flexShrink:0}}>{fmtDS(a.activity_date)}</div>
            </div>
          )):<Empty msg="No activity recorded yet"/>}
      </CardChart>
    </div>
  );
}

/* ── Accounts Tab ─────────────────────────────────────────────────────────── */
function AccountsTab({prospects,reload,user,go}){
  const isAdmin=user.role==='admin';
  const [search,setSearch]=useState('');
  const [fStatus,setFStatus]=useState('All');
  const [fZone,setFZone]=useState('All');
  const [fRep,setFRep]=useState('All');
  const [sel,setSel]=useState(null);
  const [acts,setActs]=useState([]);
  const [sales,setSales]=useState(null);
  const [placements,setPlacements]=useState([]);
  const [accountInvoices,setAccountInvoices]=useState([]);
  const [catalog,setCatalog]=useState([]);
  const [showAdd,setShowAdd]=useState(false);
  const [saving,setSaving]=useState(false);
  const blank={business_name:'',contact_name:'',phone:'',email:'',address:'',city:'',state:'MN',status:'New',priority:'Medium',assigned_to:'',notes:''};
  const [newP,setNewP]=useState(blank);

  const reps=useMemo(()=>[...new Set(prospects.map(p=>p.assigned_to).filter(Boolean))].sort(),[prospects]);
  const counties=useMemo(()=>[...new Set(prospects.map(p=>(p.county||'').trim()).filter(Boolean))].sort(),[prospects]);

  const filtered=useMemo(()=>prospects.filter(p=>{
    if(search){const q=search.toLowerCase();if(!`${p.business_name||''} ${p.contact_name||''} ${p.city||''}`.toLowerCase().includes(q))return false;}
    if(fStatus!=='All'&&p.status!==fStatus)return false;
    if(fZone!=='All'&&getZone(p)!==fZone)return false;
    if(fRep!=='All'&&(p.assigned_to||'')!==fRep)return false;
    return true;
  }),[prospects,search,fStatus,fZone,fRep]);

  const openDetail=async p=>{
    setSel(p);setSales(null);setPlacements([]);setAccountInvoices([]);
    const[{data:activity},{data:metric},{data:placed},{data:invs},{data:products}]=await Promise.all([
      supabase.from('sales_activities').select('*').eq('prospect_id',p.id).order('activity_date',{ascending:false}),
      supabase.from('crm_account_sales_metrics').select('*').eq('prospect_id',p.id).maybeSingle(),
      supabase.from('crm_account_product_placements').select('*').eq('prospect_id',p.id).order('lifetime_revenue',{ascending:false}),
      supabase.from('crm_invoice_rollup').select('*').eq('prospect_id',p.id).order('issued_at',{ascending:false}).limit(8),
      supabase.from('products').select('id,name,sku,product_line,status').eq('status','Active').order('product_line').order('name'),
    ]);
    setActs(activity||[]);setSales(metric||null);setPlacements(placed||[]);setAccountInvoices(invs||[]);setCatalog(products||[]);
  };

  const updateField=async(id,field,val)=>{
    await supabase.from('prospects').update({[field]:val}).eq('id',id);
    reload();setSel(prev=>prev?{...prev,[field]:val}:prev);
  };

  const addProspect=async()=>{
    if(!newP.business_name.trim())return;
    setSaving(true);
    const{error}=await supabase.from('prospects').insert(newP);
    setSaving(false);
    if(!error){setShowAdd(false);setNewP(blank);reload();}
    else alert('Error: '+error.message);
  };

  const csvRows=filtered.map(p=>({Business:p.business_name,Contact:p.contact_name,Phone:p.phone,Email:p.email,Status:p.status,Priority:p.priority,Zone:getZone(p),Rep:p.assigned_to,City:p.city,'Next Follow-Up':p.next_follow_up,Notes:p.notes}));

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Accounts <span style={{fontWeight:400,color:P.t2,fontSize:16}}>({filtered.length}/{prospects.length})</span></h2>
        <div className="tab-actions">
          <CSVBtn rows={csvRows} filename="lagom-accounts.csv"/>
          {isAdmin&&<button className="btn btn-p btn-sm" onClick={()=>setShowAdd(true)}>+ New Account</button>}
        </div>
      </div>

      <div style={{display:'flex',gap:8,marginBottom:14,flexWrap:'wrap'}}>
        <div style={{position:'relative',flex:'0 0 220px'}}>
          <span style={{position:'absolute',left:10,top:'50%',transform:'translateY(-50%)',color:P.t3,fontSize:15,pointerEvents:'none'}}>⌕</span>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, city…" style={{paddingLeft:30}}/>
        </div>
        <select value={fStatus} onChange={e=>setFStatus(e.target.value)} style={{width:148}}>
          <option value="All">All Statuses</option>
          {STATUSES.map(s=><option key={s}>{s}</option>)}
        </select>
        <select value={fZone} onChange={e=>setFZone(e.target.value)} style={{width:174}}>
          <option value="All">All Counties</option>
          {counties.map(z=><option key={z}>{z}</option>)}
        </select>
        {isAdmin&&<select value={fRep} onChange={e=>setFRep(e.target.value)} style={{width:134}}>
          <option value="All">All Reps</option>
          <option value="">Unassigned</option>
          {reps.map(r=><option key={r}>{r}</option>)}
        </select>}
        {(search||fStatus!=='All'||fZone!=='All'||fRep!=='All')&&
          <button className="btn btn-g btn-sm" onClick={()=>{setSearch('');setFStatus('All');setFZone('All');setFRep('All');}}>Clear</button>}
      </div>

      <div className="ovfl">
        <table>
          <thead><tr>
            <th style={{width:'28%'}}>Business</th>
            <th>Status</th>
            <th className="hide-mob">Priority</th>
            <th className="hide-mob">County</th>
            <th className="hide-mob">Contact</th>
            {isAdmin&&<th>Rep</th>}
            <th>Follow-Up</th>
          </tr></thead>
          <tbody>
            {filtered.length?filtered.map(p=>{
              const od=p.next_follow_up&&p.next_follow_up<todayStr();
              return(
                <tr key={p.id} style={{cursor:'pointer'}} onClick={()=>openDetail(p)}>
                  <td>
                    <div style={{fontWeight:600,fontSize:13}}>{p.business_name}</div>
                    {p.city&&<div style={{fontSize:11,color:P.t3}}>{p.city}{p.state?`, ${p.state}`:''}</div>}
                  </td>
                  <td><Badge label={p.status} color={SC[p.status]}/></td>
                  <td className="hide-mob"><Badge label={p.priority} color={PC[p.priority]}/></td>
                  <td className="hide-mob" style={{fontSize:12,color:P.t2}}>{getZone(p)}</td>
                  <td className="hide-mob" style={{fontSize:12}}>{p.contact_name||'-'}</td>
                  {isAdmin&&<td style={{fontSize:12,color:P.t2}}>{p.assigned_to||<span style={{color:P.t3}}>-</span>}</td>}
                  <td style={{fontFamily:'monospace',fontSize:12,color:od?P.rose:P.text,fontWeight:od?700:400}}>{p.next_follow_up?fmtDS(p.next_follow_up):'-'}</td>
                </tr>
              );
            }):<tr><td colSpan={8} style={{textAlign:'center',padding:'40px 0',color:P.t3}}>No accounts match filters</td></tr>}
          </tbody>
        </table>
      </div>

      {sel&&(
        <div className="detail-panel fade">
          <div style={{padding:'16px 20px',borderBottom:`1px solid ${P.border}`,display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexShrink:0}}>
            <div>
              <div style={{fontWeight:800,fontSize:16}}>{sel.business_name}</div>
              <div style={{fontSize:12,color:P.t2,marginTop:2}}>{[sel.city,sel.state,sel.county&&`${sel.county} County`].filter(Boolean).join(', ')}</div>
            </div>
            <button style={{background:'none',border:'none',fontSize:24,color:P.t3,lineHeight:1}} onClick={()=>setSel(null)}>×</button>
          </div>
          <div style={{padding:20,flex:1,overflowY:'auto'}}>
            <div style={{marginBottom:14}}>
              <label>Status</label>
              <select value={sel.status||''} onChange={e=>updateField(sel.id,'status',e.target.value)}>
                {STATUSES.map(s=><option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="frow" style={{marginBottom:14}}>
              <div><label>Priority</label>
                <select value={sel.priority||''} onChange={e=>updateField(sel.id,'priority',e.target.value)}>
                  <option value="">Select</option>{PRIORITIES.map(p=><option key={p}>{p}</option>)}
                </select>
              </div>
              <div><label>Assigned To</label>
                <select value={sel.assigned_to||''} onChange={e=>updateField(sel.id,'assigned_to',e.target.value)}>
                  <option value="">Unassigned</option>{REPS.map(r=><option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
            <div style={{marginBottom:14}}>
              <label>Next Follow-Up</label>
              <input type="date" value={sel.next_follow_up||''} onChange={e=>updateField(sel.id,'next_follow_up',e.target.value)}/>
            </div>
            {[['Contact',sel.contact_name],['Phone',sel.phone],['Email',sel.email],['Address',sel.address],['City',sel.city],['County',sel.county&&`${sel.county} County`]].filter(([,v])=>v).map(([l,v])=>(
              <div key={l} style={{marginBottom:10}}>
                <div style={{fontSize:10,color:P.t3,fontWeight:700,textTransform:'uppercase',letterSpacing:'.5px',marginBottom:2}}>{l}</div>
                <div style={{fontSize:13}}>{v}</div>
              </div>
            ))}
            {sel.notes&&<div style={{marginTop:12,padding:12,background:P.amberL,borderRadius:8,fontSize:12,color:P.amber,lineHeight:1.5}}>{sel.notes}</div>}
            <div className="sep"/>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8,marginBottom:10}}><div style={{fontWeight:800,fontSize:14}}>Account 360 · Sales</div><button className="btn btn-g btn-sm" onClick={()=>go&&go('sales')}>Open Sales</button></div>
            <div className="g2" style={{marginBottom:14,gap:8}}>
              {[['Lifetime Revenue',fmtFull$(sales?.lifetime_revenue||0),P.teal],['Lifetime Cases',Number(sales?.lifetime_cases||0).toFixed(Number(sales?.lifetime_cases||0)%1?1:0),P.plum],['Last Order',sales?.last_order_date?fmtDS(sales.last_order_date):'-',P.amber],['Balance Due',fmtFull$(sales?.balance_due||0),Number(sales?.balance_due||0)>0?P.rose:P.teal]].map(([l,v,c])=><div key={l} style={{padding:10,background:P.slateL,borderRadius:9}}><div style={{fontSize:9.5,color:P.t3,fontWeight:800,textTransform:'uppercase'}}>{l}</div><div style={{fontSize:14,fontWeight:900,color:c,marginTop:3}}>{v}</div></div>)}
            </div>
            <div style={{fontWeight:750,fontSize:12.5,marginBottom:7}}>Product Placement</div>
            <div style={{border:'1px solid '+P.border,borderRadius:9,overflow:'hidden',marginBottom:14}}>
              {catalog.length?catalog.map((prod,i)=>{const placed=placements.find(x=>x.product_id===prod.id||x.sku===prod.sku);return <div key={prod.id} style={{display:'flex',alignItems:'center',gap:8,padding:'8px 10px',borderBottom:i<catalog.length-1?'1px solid '+P.border:'none'}}><div style={{width:7,height:7,borderRadius:'50%',background:placed?P.teal:P.border,flexShrink:0}}/><div style={{flex:1,minWidth:0}}><div style={{fontSize:11.5,fontWeight:650,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{prod.name}</div>{placed&&<div style={{fontSize:10,color:P.t3}}>{Number(placed.lifetime_cases||0)} cases · last {fmtDS(placed.last_order_date)}</div>}</div><Badge label={placed?'Placed':'Opportunity'} color={placed?P.teal:P.t3}/></div>}):<div style={{fontSize:12,color:P.t3,padding:10}}>No catalog data</div>}
            </div>
            <div style={{fontWeight:750,fontSize:12.5,marginBottom:7}}>Recent Invoices</div>
            {accountInvoices.length?accountInvoices.map(inv=><div key={inv.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8,padding:'8px 0',borderBottom:'1px solid '+P.border}}><div><div style={{fontFamily:'monospace',fontSize:11,fontWeight:800,color:P.teal}}>{inv.invoice_number}</div><div style={{fontSize:10.5,color:P.t3}}>{fmtDS(inv.issued_at)} · {inv.sale_type||'Sale'}</div></div><div style={{textAlign:'right'}}><div style={{fontSize:12,fontWeight:800}}>{fmtFull$(inv.invoice_total)}</div>{Number(inv.balance_due||0)>0&&<div style={{fontSize:10,color:P.rose}}>{fmtFull$(inv.balance_due)} due</div>}</div></div>):<div style={{fontSize:12,color:P.t3,marginBottom:12}}>No sales history yet</div>}
            <div className="sep"/>
            <div style={{fontWeight:700,marginBottom:10,fontSize:14}}>Activity History</div>
            {acts.length?acts.map((a,i)=>(
              <div key={i} style={{padding:'8px 0',borderBottom:i<acts.length-1?`1px solid ${P.border}`:'none',fontSize:12}}>
                <div style={{fontWeight:600,color:P.text}}>{a.activity_type}</div>
                <div style={{color:P.t2,marginTop:2}}>{fmtDS(a.activity_date)}{a.outcome?` · ${a.outcome}`:''}</div>
                {a.notes&&<div style={{color:P.t3,marginTop:2}}>{a.notes}</div>}
              </div>
            )):<div style={{color:P.t3,fontSize:12}}>No activity logged</div>}
          </div>
        </div>
      )}

      {showAdd&&(
        <Modal title="Add Account" onClose={()=>setShowAdd(false)}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div><label>Business Name *</label><input value={newP.business_name} onChange={e=>setNewP(p=>({...p,business_name:e.target.value}))}/></div>
            <div className="frow">
              <div><label>Contact</label><input value={newP.contact_name} onChange={e=>setNewP(p=>({...p,contact_name:e.target.value}))}/></div>
              <div><label>Phone</label><input value={newP.phone} onChange={e=>setNewP(p=>({...p,phone:e.target.value}))}/></div>
            </div>
            <div><label>Email</label><input value={newP.email} onChange={e=>setNewP(p=>({...p,email:e.target.value}))}/></div>
            <div className="frow">
              <div><label>City</label><input value={newP.city} onChange={e=>setNewP(p=>({...p,city:e.target.value}))}/></div>
              <div><label>State</label><input value={newP.state} onChange={e=>setNewP(p=>({...p,state:e.target.value}))}/></div>
            </div>
            <div className="frow">
              <div><label>Status</label><select value={newP.status} onChange={e=>setNewP(p=>({...p,status:e.target.value}))}>{STATUSES.map(s=><option key={s}>{s}</option>)}</select></div>
              <div><label>Priority</label><select value={newP.priority} onChange={e=>setNewP(p=>({...p,priority:e.target.value}))}>{PRIORITIES.map(s=><option key={s}>{s}</option>)}</select></div>
            </div>
            <div><label>Assign To</label><select value={newP.assigned_to} onChange={e=>setNewP(p=>({...p,assigned_to:e.target.value}))}><option value="">Unassigned</option>{REPS.map(r=><option key={r}>{r}</option>)}</select></div>
            <div><label>Notes</label><textarea rows={2} value={newP.notes} onChange={e=>setNewP(p=>({...p,notes:e.target.value}))}/></div>
            <div style={{display:'flex',gap:8,marginTop:4}}>
              <button className="btn btn-p" onClick={addProspect} disabled={saving||!newP.business_name.trim()}>{saving?<Spinner size={14}/>:'Add Account'}</button>
              <button className="btn btn-g" onClick={()=>setShowAdd(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ── Pipeline Tab ─────────────────────────────────────────────────────────── */
function PipelineTab({prospects,reload,user}){
  const isAdmin=user.role==='admin';
  const [fStatus,setFStatus]=useState('All');
  const [fRep,setFRep]=useState('All');

  const statusCounts=useMemo(()=>{const c={};STATUSES.forEach(s=>c[s]=prospects.filter(p=>p.status===s).length);return c;},[prospects]);
  const reps=useMemo(()=>[...new Set(prospects.map(p=>p.assigned_to).filter(Boolean))].sort(),[prospects]);

  const filtered=useMemo(()=>prospects.filter(p=>{
    if(fStatus!=='All'&&p.status!==fStatus)return false;
    if(fRep!=='All'&&(p.assigned_to||'')!==fRep)return false;
    return true;
  }),[prospects,fStatus,fRep]);

  const updateStatus=async(id,status)=>{await supabase.from('prospects').update({status}).eq('id',id);reload();};

  const csvRows=filtered.map(p=>({Business:p.business_name,Status:p.status,Priority:p.priority,Rep:p.assigned_to,City:p.city,'Next Follow-Up':p.next_follow_up}));

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Pipeline</h2>
        <div className="tab-actions">
          <select value={fRep} onChange={e=>setFRep(e.target.value)} style={{width:134}}>
            <option value="All">All Reps</option>{reps.map(r=><option key={r}>{r}</option>)}
          </select>
          <CSVBtn rows={csvRows} filename="lagom-pipeline.csv"/>
        </div>
      </div>

      <div style={{display:'flex',gap:6,marginBottom:18,flexWrap:'wrap'}}>
        <button onClick={()=>setFStatus('All')} className="btn btn-sm"
          style={{background:fStatus==='All'?P.slate:P.slateL,color:fStatus==='All'?'#fff':P.slate,border:'none'}}>
          All ({prospects.length})
        </button>
        {STATUSES.map(s=>(
          <button key={s} onClick={()=>setFStatus(fStatus===s?'All':s)} className="btn btn-sm"
            style={{background:fStatus===s?SC[s]:`${SC[s]}14`,color:fStatus===s?'#fff':SC[s],border:`1.5px solid ${SC[s]}40`}}>
            {s} ({statusCounts[s]})
          </button>
        ))}
      </div>

      <div className="card" style={{marginBottom:18}}>
        <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>Pipeline Funnel</div>
        <ChartCanvas type="bar" height={140}
          data={{labels:STATUSES,datasets:[{data:STATUSES.map(s=>statusCounts[s]),backgroundColor:Object.values(SC).map(c=>c+'CC'),borderRadius:6,borderSkipped:false}]}}
          options={{plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{size:10}}},y:{grid:{color:'#f0ece4'},ticks:{stepSize:1}}}}}
        />
      </div>

      <div className="ovfl">
        <table>
          <thead><tr>
            <th style={{width:'30%'}}>Business</th>
            <th>Status</th>
            <th className="hide-mob">Priority</th>
            {isAdmin&&<th>Rep</th>}
            <th className="hide-mob">City</th>
            <th>Follow-Up</th>
            <th style={{width:140}}>Move Stage</th>
          </tr></thead>
          <tbody>
            {filtered.length?filtered.map(p=>{
              const od=p.next_follow_up&&p.next_follow_up<todayStr();
              return(
                <tr key={p.id}>
                  <td style={{fontWeight:600}}>{p.business_name}</td>
                  <td><Badge label={p.status} color={SC[p.status]}/></td>
                  <td className="hide-mob"><Badge label={p.priority} color={PC[p.priority]}/></td>
                  {isAdmin&&<td style={{fontSize:12}}>{p.assigned_to||'-'}</td>}
                  <td className="hide-mob" style={{fontSize:12,color:P.t2}}>{p.city||'-'}</td>
                  <td style={{fontSize:12,color:od?P.rose:P.text,fontWeight:od?700:400}}>{p.next_follow_up?fmtDS(p.next_follow_up):'-'}</td>
                  <td><select value={p.status} style={{fontSize:12,padding:'4px 8px',width:'auto'}} onChange={e=>updateStatus(p.id,e.target.value)}>{STATUSES.map(s=><option key={s}>{s}</option>)}</select></td>
                </tr>
              );
            }):<tr><td colSpan={7}><Empty msg="No records"/></td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Territories Tab ──────────────────────────────────────────────────────── */
function TerritoriesTab({prospects,reload}){
  const [selZone,setSelZone]=useState('');
  const [assignRep,setAssignRep]=useState('');
  const [assigning,setAssigning]=useState(false);
  const [msg,setMsg]=useState('');
  const [viewZone,setViewZone]=useState(null);

  const zoneData=useMemo(()=>countiesByCount(prospects).map(z=>{
    const ps=prospects.filter(p=>getZone(p)===z);
    const reps=[...new Set(ps.map(p=>p.assigned_to).filter(Boolean))];
    return{zone:z,count:ps.length,won:ps.filter(p=>p.status==='Won').length,active:ps.filter(p=>!['Won','Lost','Not Interested'].includes(p.status)).length,reps,prospects:ps};
  }),[prospects]);

  const doAssign=async()=>{
    if(!selZone||!assignRep)return;
    setAssigning(true);
    const ids=zoneData.find(z=>z.zone===selZone)?.prospects.map(p=>p.id)||[];
    for(const id of ids)await supabase.from('prospects').update({assigned_to:assignRep}).eq('id',id);
    setAssigning(false);
    setMsg(`✓ Assigned ${ids.length} accounts in ${selZone} County to ${assignRep}`);
    reload();setTimeout(()=>setMsg(''),5000);
  };

  const csvRows=prospects.map(p=>({Business:p.business_name,County:getZone(p),Status:p.status,Rep:p.assigned_to,City:p.city}));
  const zd=viewZone?zoneData.find(z=>z.zone===viewZone):null;

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Territories</h2>
        <CSVBtn rows={csvRows} filename="lagom-territories.csv"/>
      </div>

      {msg&&<div style={{background:P.tealL,border:`1px solid ${P.teal}40`,color:P.teal,padding:'10px 14px',borderRadius:9,marginBottom:16,fontSize:13,fontWeight:600}}>{msg}</div>}

      <div className="card" style={{marginBottom:18}}>
        <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>Bulk Assign County to Rep</div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',alignItems:'flex-end'}}>
          <div style={{flex:'0 0 230px'}}>
            <label>County</label>
            <select value={selZone} onChange={e=>setSelZone(e.target.value)}>
              <option value="">Select county…</option>
              {zoneData.map(z=><option key={z.zone} value={z.zone}>{z.zone} ({z.count})</option>)}
            </select>
          </div>
          <div style={{flex:'0 0 160px'}}>
            <label>Rep</label>
            <select value={assignRep} onChange={e=>setAssignRep(e.target.value)}>
              <option value="">Select rep…</option>
              {REPS.map(r=><option key={r}>{r}</option>)}
            </select>
          </div>
          <button className="btn btn-p" onClick={doAssign} disabled={!selZone||!assignRep||assigning}>
            {assigning?<Spinner size={14}/>:`Assign ${selZone?zoneData.find(z=>z.zone===selZone)?.count||0:0} Accounts`}
          </button>
        </div>
      </div>

      <div className="g3" style={{marginBottom:18}}>
        {zoneData.map(z=>(
          <div key={z.zone} className="card" style={{borderLeft:`4px solid ${countyColor(z.zone)}`,cursor:'pointer'}} onClick={()=>setViewZone(viewZone===z.zone?null:z.zone)}>
            <div style={{fontWeight:700,fontSize:14,marginBottom:10}}>{z.zone} County</div>
            <div style={{display:'flex',gap:14,marginBottom:10}}>
              {[{v:z.count,l:'Accounts',c:P.teal},{v:z.won,l:'Won',c:'#059669'},{v:z.count?((z.won/z.count)*100).toFixed(0):0,l:'Rate %',c:P.amber}].map(({v,l,c})=>(
                <div key={l} style={{textAlign:'center'}}>
                  <div style={{fontSize:24,fontWeight:900,color:c}}>{v}</div>
                  <div style={{fontSize:10,color:P.t3,textTransform:'uppercase',letterSpacing:'.5px'}}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{fontSize:11,color:P.t2}}>
              {z.reps.length?z.reps.join(', '):<span style={{color:P.t3}}>No rep assigned</span>}
            </div>
            {viewZone===z.zone&&<div style={{marginTop:2,fontSize:11,color:P.teal,fontWeight:700}}>▲ showing accounts below</div>}
          </div>
        ))}
      </div>

      {zd&&(
        <div className="ovfl" style={{marginBottom:18}}>
          <div style={{padding:'12px 16px',background:P.tealL,borderBottom:`1px solid ${P.teal}30`,fontWeight:700,fontSize:13,color:P.teal}}>
            {zd.zone} County · {zd.count} accounts
          </div>
          <table>
            <thead><tr><th>Business</th><th>Status</th><th className="hide-mob">Priority</th><th>Rep</th><th className="hide-mob">City</th></tr></thead>
            <tbody>
              {zd.prospects.map(p=>(
                <tr key={p.id}>
                  <td style={{fontWeight:600}}>{p.business_name}</td>
                  <td><Badge label={p.status} color={SC[p.status]}/></td>
                  <td className="hide-mob"><Badge label={p.priority} color={PC[p.priority]}/></td>
                  <td style={{fontSize:12}}>{p.assigned_to||<span style={{color:P.t3}}>-</span>}</td>
                  <td className="hide-mob" style={{fontSize:12,color:P.t2}}>{p.city||'-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <CardChart title="Top Counties by Accounts">
        <ChartCanvas type="bar" height={180}
          data={{labels:zoneData.slice(0,12).map(z=>z.zone),datasets:[{label:'Total',data:zoneData.slice(0,12).map(z=>z.count),backgroundColor:P.teal+'CC',borderRadius:6},{label:'Won',data:zoneData.slice(0,12).map(z=>z.won),backgroundColor:P.amber+'CC',borderRadius:6}]}}
          options={{scales:{x:{grid:{display:false},ticks:{font:{size:10}}},y:{grid:{color:'#f0ece4'},ticks:{stepSize:1}}}}}
        />
      </CardChart>
    </div>
  );
}

/* ── Google Maps loader + interactive territory map ───────────────────────── */
let _gmapsPromise=null;
function loadGoogleMaps(){
  if(typeof window==='undefined')return Promise.reject(new Error('SSR'));
  if(window.google&&window.google.maps)return Promise.resolve(window.google);
  if(_gmapsPromise)return _gmapsPromise;
  const key=process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if(!key)return Promise.reject(new Error('NO_KEY'));
  _gmapsPromise=new Promise((resolve,reject)=>{
    const s=document.createElement('script');
    s.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}`;
    s.async=true;s.defer=true;
    s.onload=()=>resolve(window.google);
    s.onerror=()=>reject(new Error('LOAD_FAILED'));
    document.head.appendChild(s);
  });
  return _gmapsPromise;
}

function GoogleTerritoryMap({geoPs}){
  const ref=useRef(null);
  const [err,setErr]=useState('');
  useEffect(()=>{
    let cancelled=false;const markers=[];let map;
    loadGoogleMaps().then(google=>{
      if(cancelled||!ref.current)return;
      map=new google.maps.Map(ref.current,{center:HQ,zoom:8,mapTypeControl:false,streetViewControl:false});
      const bounds=new google.maps.LatLngBounds();
      const info=new google.maps.InfoWindow();
      markers.push(new google.maps.Marker({position:HQ,map,title:'HQ · 707 N 3rd St',label:{text:'HQ',color:'#fff',fontSize:'10px',fontWeight:'700'},icon:{path:google.maps.SymbolPath.CIRCLE,scale:12,fillColor:'#0F172A',fillOpacity:1,strokeColor:'#fff',strokeWeight:2}}));
      bounds.extend(HQ);
      geoPs.forEach(p=>{
        const pos={lat:Number(p.latitude),lng:Number(p.longitude)};
        const m=new google.maps.Marker({position:pos,map,title:p.business_name,icon:{path:google.maps.SymbolPath.CIRCLE,scale:6,fillColor:countyColor(getZone(p)),fillOpacity:.9,strokeColor:'#fff',strokeWeight:1.2}});
        m.addListener('click',()=>{
          const esc=s=>String(s||'').replace(/</g,'&lt;');
          info.setContent(`<div style="font-weight:700;font-size:13px">${esc(p.business_name)}</div><div style="font-size:12px;color:#555;margin-top:2px">${esc(p.city)}${p.county?' · '+esc(p.county)+' County':''}</div><div style="font-size:11px;color:#0F6E56;font-weight:600;margin-top:2px">${esc(p.status)}</div>`);
          info.open(map,m);
        });
        markers.push(m);bounds.extend(pos);
      });
      if(geoPs.length)map.fitBounds(bounds);
    }).catch(e=>{if(!cancelled)setErr(e.message);});
    return ()=>{cancelled=true;markers.forEach(m=>m.setMap&&m.setMap(null));};
  },[geoPs]);
  if(err)return <div style={{padding:'50px 20px',textAlign:'center',color:P.t3,fontSize:13}}>Could not load Google Maps ({err}). Check that <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> is set and the Maps JavaScript API is enabled.</div>;
  return <div ref={ref} style={{width:'100%',height:560}}/>;
}

/* ── Territory Map Tab ────────────────────────────────────────────────────── */
function TerritoryMapTab({prospects}){
  const [hovered,setHovered]=useState(null);
  const W=700,H=480,PAD=44;

  const geoPs=useMemo(()=>prospects.filter(p=>p.latitude&&p.longitude),[prospects]);
  const topCounties=useMemo(()=>countiesByCount(geoPs).slice(0,9),[geoPs]);

  const {minLat,maxLat,minLng,maxLng}=useMemo(()=>{
    const lats=[...geoPs.map(p=>p.latitude),HQ.lat];
    const lngs=[...geoPs.map(p=>p.longitude),HQ.lng];
    return{
      minLat:Math.min(...lats)-0.015,maxLat:Math.max(...lats)+0.015,
      minLng:Math.min(...lngs)-0.015,maxLng:Math.max(...lngs)+0.015,
    };
  },[geoPs]);

  const toX=lng=>PAD+((lng-minLng)/(maxLng-minLng))*(W-2*PAD);
  const toY=lat=>PAD+((maxLat-lat)/(maxLat-minLat))*(H-2*PAD);

  const statusGroups=STATUSES.reduce((m,s)=>{m[s]=geoPs.filter(p=>p.status===s).length;return m;},{});

  return(
    <div className="fade">
      <div className="tab-h">
        <div>
          <h2>Territory Map</h2>
          <div style={{fontSize:12,color:P.t3,marginTop:2}}>
            {geoPs.length} geocoded · {prospects.length-geoPs.length} missing coordinates
          </div>
        </div>
        <div className="tab-actions">
          {geoPs.length===0&&<span style={{fontSize:12,color:P.t3}}>Add lat/lng in Setup tab</span>}
        </div>
      </div>

      {geoPs.length===0?(
        <div className="card" style={{textAlign:'center',padding:'60px 20px'}}>
          <div style={{fontSize:40,marginBottom:14}}>⊕</div>
          <div style={{fontWeight:700,fontSize:16,marginBottom:8}}>No Geocoded Accounts</div>
          <div style={{color:P.t3,fontSize:13,maxWidth:360,margin:'0 auto'}}>
            Add <code style={{background:P.slateL,padding:'1px 6px',borderRadius:4}}>latitude</code> and <code style={{background:P.slateL,padding:'1px 6px',borderRadius:4}}>longitude</code> columns to your prospects in Supabase, or use the Setup tab to import coordinates.
          </div>
        </div>
      ):(
        <>
          <div className="card" style={{padding:0,overflow:'hidden',marginBottom:16}}>
            {HAS_GMAPS_KEY?(
              <GoogleTerritoryMap geoPs={geoPs}/>
            ):(
            <div style={{overflowX:'auto'}}>
              <svg width={W} height={H} style={{display:'block',background:'#EDE9E0',minWidth:W}}>
                {/* Grid */}
                {[0.25,0.5,0.75].map(t=>(
                  <g key={t}>
                    <line x1={PAD+(W-2*PAD)*t} y1={PAD} x2={PAD+(W-2*PAD)*t} y2={H-PAD} stroke="#D4CFC5" strokeWidth={1} strokeDasharray="4,4"/>
                    <line x1={PAD} y1={PAD+(H-2*PAD)*t} x2={W-PAD} y2={PAD+(H-2*PAD)*t} stroke="#D4CFC5" strokeWidth={1} strokeDasharray="4,4"/>
                  </g>
                ))}
                {/* Prospect dots */}
                {geoPs.map(p=>(
                  <g key={p.id} onMouseEnter={()=>setHovered(p)} onMouseLeave={()=>setHovered(null)} style={{cursor:'pointer'}}>
                    <circle cx={toX(p.longitude)} cy={toY(p.latitude)} r={hovered?.id===p.id?9:6}
                      fill={countyColor(getZone(p))}
                      stroke="#fff" strokeWidth={1.5} opacity={0.88}
                      style={{transition:'r .1s'}}/>
                  </g>
                ))}
                {/* HQ marker */}
                <circle cx={toX(HQ.lng)} cy={toY(HQ.lat)} r={10} fill={P.slate} stroke="#fff" strokeWidth={2.5}/>
                <text x={toX(HQ.lng)} y={toY(HQ.lat)+1} textAnchor="middle" dominantBaseline="middle" fontSize={7} fill="#fff" fontWeight={900}>HQ</text>
                {/* Tooltip */}
                {hovered&&(()=>{
                  const tx=toX(hovered.longitude);
                  const ty=toY(hovered.latitude);
                  const flip=tx>W-180;
                  const bx=flip?tx-168:tx+12;
                  return(
                    <g>
                      <rect x={bx} y={ty-28} width={156} height={46} rx={6} fill="#fff" stroke="#E5E2DC" strokeWidth={1} filter="drop-shadow(0 2px 6px rgba(0,0,0,.12))"/>
                      <text x={bx+10} y={ty-10} fontSize={11} fontWeight={700} fill={P.text}>{hovered.business_name.slice(0,20)}{hovered.business_name.length>20?'…':''}</text>
                      <text x={bx+10} y={ty+4} fontSize={9} fill={P.t2}>{hovered.city||''} · {(getZone(hovered)||'').split('/')[0]}</text>
                      <text x={bx+10} y={ty+16} fontSize={9} fill={SC[hovered.status]||P.t3} fontWeight={700}>{hovered.status}</text>
                    </g>
                  );
                })()}
              </svg>
            </div>
            )}
            {/* Legend (top counties) */}
            <div style={{padding:'14px 20px',borderTop:`1px solid ${P.border}`,display:'flex',gap:14,flexWrap:'wrap',alignItems:'center'}}>
              {topCounties.map(z=>(
                <div key={z} style={{display:'flex',alignItems:'center',gap:5}}>
                  <div style={{width:10,height:10,borderRadius:'50%',background:countyColor(z),flexShrink:0}}/>
                  <span style={{fontSize:11,color:P.t2}}>{z}</span>
                </div>
              ))}
              <div style={{display:'flex',alignItems:'center',gap:5,marginLeft:'auto'}}>
                <div style={{width:14,height:14,borderRadius:'50%',background:P.slate,border:'2px solid #fff',boxShadow:`0 0 0 1px ${P.slate}`,flexShrink:0}}/>
                <span style={{fontSize:11,color:P.t2}}>HQ · 707 N 3rd St</span>
              </div>
            </div>
          </div>
          <div className="g3">
            {topCounties.map(z=>{
              const cnt=geoPs.filter(p=>getZone(p)===z).length;
              return(
                <div key={z} className="card" style={{borderLeft:`4px solid ${countyColor(z)}`,padding:'14px 16px'}}>
                  <div style={{fontWeight:700,fontSize:13,marginBottom:4}}>{z} County</div>
                  <div style={{fontSize:24,fontWeight:900,color:countyColor(z)}}>{cnt}</div>
                  <div style={{fontSize:11,color:P.t3}}>geocoded accounts</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Routes Tab ───────────────────────────────────────────────────────────── */
function RoutesTab({prospects,user}){
  const [route,setRoute]=useState([]);
  const [filter,setFilter]=useState('');
  const [reorders,setReorders]=useState([]);
  useEffect(()=>{let live=true;supabase.from('crm_reorder_opportunities').select('*').then(({data})=>{if(live)setReorders(data||[])});return()=>{live=false}},[]);
  const me=(user?.display_name||user?.name||'').trim(),isAdmin=user?.role==='admin';
  const scopedReorders=reorders.filter(r=>isAdmin||(r.rep_name||'').toLowerCase()===me.toLowerCase());
  const dueIds=new Set(scopedReorders.filter(r=>['Due','Overdue','Due Soon'].includes(r.reorder_status)).map(r=>r.prospect_id));

  const geoProspects=useMemo(()=>
    prospects.filter(p=>p.latitude&&p.longitude)
      .map(p=>({...p,dist:haversine(HQ.lat,HQ.lng,p.latitude,p.longitude)}))
      .sort((a,b)=>a.dist-b.dist)
  ,[prospects]);

  const noGeo=useMemo(()=>prospects.filter(p=>!p.latitude||!p.longitude),[prospects]);
  const inRoute=id=>route.includes(id);
  const toggleStop=id=>setRoute(r=>inRoute(id)?r.filter(x=>x!==id):[...r,id]);

  const routeStops=geoProspects.filter(p=>route.includes(p.id));
  const dueGeo=geoProspects.filter(p=>dueIds.has(p.id));
  const addDueReorders=()=>setRoute(r=>[...new Set([...r,...dueGeo.map(p=>p.id)])]);
  const totalDist=routeStops.reduce((s,p)=>s+p.dist,0);
  const filtered=geoProspects.filter(p=>!filter||`${p.business_name} ${p.city}`.toLowerCase().includes(filter.toLowerCase()));

  const csvRows=routeStops.map((p,i)=>({Stop:i+1,Business:p.business_name,Address:p.address,City:p.city,'Miles from HQ':p.dist.toFixed(1),Zone:getZone(p),Rep:p.assigned_to}));

  return(
    <div className="fade">
      <div className="tab-h">
        <div>
          <h2>Route Builder</h2>
          <div style={{fontSize:12,color:P.t3,marginTop:2}}>Sorted by distance from 707 N 3rd St, Minneapolis</div>
        </div>
        <CSVBtn rows={csvRows} filename="lagom-route.csv"/>
      </div>

      <div className="g2">
        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:8,marginBottom:12}}><div style={{fontWeight:700,fontSize:14}}>All Stops · Nearest First</div>{dueGeo.length>0&&<button className="btn btn-a btn-sm" onClick={addDueReorders}>+ {dueGeo.length} Reorders Due</button>}</div>
          <input value={filter} onChange={e=>setFilter(e.target.value)} placeholder="Filter accounts…" style={{marginBottom:12}}/>
          <div style={{maxHeight:460,overflowY:'auto',display:'flex',flexDirection:'column',gap:2}}>
            {filtered.map(p=>(
              <div key={p.id} onClick={()=>toggleStop(p.id)}
                style={{display:'flex',alignItems:'center',gap:10,padding:'9px 10px',borderRadius:8,cursor:'pointer',background:inRoute(p.id)?P.tealL:'transparent',border:`1px solid ${inRoute(p.id)?P.teal+'60':'transparent'}`,transition:'all .12s'}}>
                <div style={{width:20,height:20,borderRadius:'50%',border:`2px solid ${inRoute(p.id)?P.teal:P.border}`,background:inRoute(p.id)?P.teal:'transparent',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  {inRoute(p.id)&&<div style={{width:8,height:8,borderRadius:'50%',background:'#fff'}}/>}
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:600,fontSize:13,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{p.business_name}</div>
                  <div style={{fontSize:11,color:P.t2}}>{p.city||'-'}{dueIds.has(p.id)?' · reorder signal':''}</div>
                </div>
                {dueIds.has(p.id)&&<Badge label="Reorder" color={P.amber}/>}<div style={{fontSize:12,fontWeight:700,color:P.teal,flexShrink:0}}>{p.dist.toFixed(1)} mi</div>
              </div>
            ))}
            {!filtered.length&&<Empty msg={geoProspects.length===0?'No geocoded accounts. Add latitude/longitude to prospects in Supabase.':'No matches'}/>}
          </div>
          {noGeo.length>0&&<div style={{marginTop:10,fontSize:11,color:P.t3,borderTop:`1px solid ${P.border}`,paddingTop:10}}>{noGeo.length} accounts missing coordinates</div>}
        </div>

        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
            <div style={{fontWeight:700,fontSize:14}}>Today's Route ({routeStops.length} stops)</div>
            {route.length>0&&<div style={{display:'flex',gap:8}}>
              <a className="btn btn-p btn-sm" href={`https://www.google.com/maps/dir/?api=1&origin=${HQ.lat},${HQ.lng}&destination=${routeStops[routeStops.length-1].latitude},${routeStops[routeStops.length-1].longitude}${routeStops.length>1?`&waypoints=${encodeURIComponent(routeStops.slice(0,-1).map(p=>`${p.latitude},${p.longitude}`).join('|'))}`:''}&travelmode=driving`} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Open in Google Maps</a>
              <button className="btn btn-g btn-sm" onClick={()=>setRoute([])}>Clear All</button>
            </div>}
          </div>
          {routeStops.length?(
            <>
              <div style={{display:'flex',gap:12,marginBottom:16}}>
                <div style={{flex:1,padding:'12px 16px',background:P.tealL,borderRadius:10,border:`1px solid ${P.teal}30`,textAlign:'center'}}>
                  <div style={{fontSize:24,fontWeight:900,color:P.teal}}>{totalDist.toFixed(1)}</div>
                  <div style={{fontSize:10,color:P.teal,fontWeight:700,textTransform:'uppercase',letterSpacing:'.5px'}}>Total Miles</div>
                </div>
                <div style={{flex:1,padding:'12px 16px',background:P.amberL,borderRadius:10,border:`1px solid ${P.amber}30`,textAlign:'center'}}>
                  <div style={{fontSize:24,fontWeight:900,color:P.amber}}>{Math.ceil(totalDist/25*60)}</div>
                  <div style={{fontSize:10,color:P.amber,fontWeight:700,textTransform:'uppercase',letterSpacing:'.5px'}}>Est. Minutes</div>
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>
                <div style={{display:'flex',gap:10,alignItems:'center',padding:'8px 12px',background:P.slateL,borderRadius:8}}>
                  <div style={{width:26,height:26,borderRadius:'50%',background:P.slate,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:900,flexShrink:0}}>HQ</div>
                  <div style={{fontSize:12,fontWeight:700}}>707 N 3rd St, Minneapolis</div>
                </div>
                {routeStops.map((p,i)=>(
                  <div key={p.id} style={{display:'flex',gap:10,alignItems:'center',padding:'8px 12px',borderRadius:8,border:`1px solid ${P.border}`}}>
                    <div style={{width:26,height:26,borderRadius:'50%',background:P.teal,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:900,flexShrink:0}}>{i+1}</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:12,fontWeight:700,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{p.business_name}</div>
                      <div style={{fontSize:11,color:P.t2}}>{p.city} · {p.dist.toFixed(1)} mi from HQ</div>
                    </div>
                    <button style={{background:'none',border:'none',color:P.t3,fontSize:20,lineHeight:1}} onClick={()=>toggleStop(p.id)}>×</button>
                  </div>
                ))}
              </div>
            </>
          ):<Empty msg="Select stops from the left to build your route"/>}
        </div>
      </div>
    </div>
  );
}

/* ── Orders Tab ───────────────────────────────────────────────────────────── */
function OrdersTab({prospects,user}){
  const [orders,setOrders]=useState([]);
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [showNew,setShowNew]=useState(false);
  const [saving,setSaving]=useState(false);
  const [selOrder,setSelOrder]=useState(null);
  const [orderItems,setOrderItems]=useState([]);
  const [invoices,setInvoices]=useState([]);
  const [actionMsg,setActionMsg]=useState('');

  const wonAccounts=useMemo(()=>prospects.filter(p=>p.status==='Won').sort((a,b)=>(a.business_name||'').localeCompare(b.business_name||'')),[prospects]);

  const blankForm={prospect_id:'',account_name:'',notes:''};
  const [form,setForm]=useState(blankForm);
  const [lines,setLines]=useState([{product_id:'',product_name:'',quantity:1,unit_price:''}]);

  const load=useCallback(async()=>{
    setLoading(true);
    const[{data:ords},{data:invs},{data:catalog}]=await Promise.all([
      supabase.from('orders').select('*').order('created_at',{ascending:false}),
      supabase.from('invoices').select('*').order('created_at',{ascending:false}),
      supabase.from('products').select('*').eq('status','Active').order('product_line').order('name'),
    ]);
    setOrders(ords||[]);setInvoices(invs||[]);setProducts(catalog||[]);setLoading(false);
  },[]);

  useEffect(()=>{load();},[load]);

  const openOrder=async o=>{
    setSelOrder(o);
    const{data}=await supabase.from('order_items').select('*').eq('order_id',o.id);
    setOrderItems(data||[]);
  };

  const addLine=()=>setLines(l=>[...l,{product_id:'',product_name:'',quantity:1,unit_price:''}]);
  const removeLine=i=>setLines(l=>l.filter((_,j)=>j!==i));
  const updateLine=(i,field,val)=>setLines(l=>l.map((x,j)=>j===i?{...x,[field]:val}:x));
  const lineTotal=lines.reduce((s,l)=>s+(Number(l.quantity||0)*Number(l.unit_price||0)),0);

  const createOrder=async()=>{
    if(!form.account_name.trim()||!lines.some(l=>l.product_name.trim()))return;
    setSaving(true);
    const{data:ord,error}=await supabase.from('orders').insert({
      prospect_id:form.prospect_id||null,
      account_name:form.account_name,
      status:'Draft',
      total_amount:lineTotal,
      notes:form.notes,
      created_by:user.name,
    }).select().single();
    if(error){setSaving(false);return alert('Error: '+error.message);}
    const validLines=lines.filter(l=>l.product_name.trim()).map(l=>({
      order_id:ord.id,
      product_id:l.product_id||null,
      product_name:l.product_name,
      quantity:Number(l.quantity)||1,
      unit_price:Number(l.unit_price)||0,
      total_price:(Number(l.quantity)||1)*(Number(l.unit_price)||0),
    }));
    await supabase.from('order_items').insert(validLines);
    setSaving(false);setShowNew(false);setForm(blankForm);setLines([{product_id:'',product_name:'',quantity:1,unit_price:''}]);load();
  };

  const updateOrderStatus=async(ordId,newStatus,oldStatus)=>{
    await supabase.from('orders').update({status:newStatus,updated_at:new Date().toISOString()}).eq('id',ordId);
    // Auto-depletion on Confirmed
    if(newStatus==='Confirmed'&&oldStatus==='Draft'){
      const{data:items}=await supabase.from('order_items').select('*').eq('order_id',ordId);
      for(const item of (items||[])){
        const{data:prod}=await supabase.from('products').select('quantity').eq('name',item.product_name).single();
        if(prod){
          await supabase.from('products').update({quantity:Math.max(0,(prod.quantity||0)-item.quantity)}).eq('name',item.product_name);
        }
        await supabase.from('inventory_movements').insert({
          product_name:item.product_name,
          order_id:ordId,
          quantity_change:-(item.quantity||0),
          reason:'Order Confirmed',
          created_by:user.name,
        });
      }
      // Generate normalized commercial invoice + line items
      const ord=orders.find(o=>o.id===ordId);
      const {data:invNum,error:numErr}=await supabase.rpc('next_invoice_number');
      if(numErr){
        setActionMsg('Inventory depleted, but invoice generation needs depletion_phase2.sql');
      }else{
        const {count:priorCount}=await supabase.from('invoices').select('id',{count:'exact',head:true}).eq('prospect_id',ord?.prospect_id);
        const saleType=(priorCount||0)>0?'Reorder':'New Placement';
        const {data:invoice,error:invErr}=await supabase.from('invoices').insert({
          order_id:ordId,
          prospect_id:ord?.prospect_id||null,
          account_name:ord?.account_name||null,
          rep_name:ord?.created_by||user.name,
          invoice_number:invNum,
          sale_type:saleType,
          status:'Unpaid',
          subtotal:ord?.total_amount||0,
          invoice_total:ord?.total_amount||0,
          amount_due:ord?.total_amount||0,
          amount_paid:0,
          balance_due:ord?.total_amount||0,
          collection_status:'Open',
          issued_at:todayStr(),
          due_date:addDays(todayStr(),30),
          source:'orders',
        }).select().single();
        if(!invErr&&invoice){
          const normalized=(items||[]).map(item=>{
            const prod=products.find(p=>p.id===item.product_id)||products.find(p=>p.name===item.product_name);
            const cogs=prod?.cogs_per_case===null||prod?.cogs_per_case===undefined?null:Number(prod.cogs_per_case);
            const revenue=Number(item.total_price||0);
            const cases=Number(item.quantity||0);
            return {
              invoice_id:invoice.id,
              product_id:prod?.id||item.product_id||null,
              sku:prod?.sku||null,
              product_name:prod?.name||item.product_name,
              description:prod?.description||null,
              category:prod?.category||null,
              cases_sold:cases,
              sale_price:Number(item.unit_price||0),
              revenue,
              cogs_per_case:cogs,
              total_cogs:cogs===null?null:cases*cogs,
              gross_profit:cogs===null?null:revenue-(cases*cogs),
            };
          });
          if(normalized.length)await supabase.from('invoice_items').insert(normalized);
          setActionMsg('✓ Inventory depleted · Invoice '+invNum+' generated');
        }else{
          setActionMsg('Inventory depleted, but invoice generation failed');
        }
      }
      setTimeout(()=>setActionMsg(''),6000);
    }
    load();if(selOrder?.id===ordId){setSelOrder(o=>o?{...o,status:newStatus}:o);}
  };

  const nextStatus={Draft:'Confirmed',Confirmed:'Shipped',Shipped:'Delivered'};

  const csvRows=orders.map(o=>({ID:o.id.slice(0,8),Account:o.account_name,Status:o.status,Total:o.total_amount,'Created':o.created_at?.split('T')[0]||'',Notes:o.notes||''}));

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Orders</h2>
        <div className="tab-actions">
          <CSVBtn rows={csvRows} filename="lagom-orders.csv"/>
          <button className="btn btn-p btn-sm" onClick={()=>setShowNew(true)}>+ New Order</button>
        </div>
      </div>

      {actionMsg&&<div style={{background:P.tealL,border:`1px solid ${P.teal}40`,color:P.teal,padding:'10px 14px',borderRadius:9,marginBottom:14,fontSize:13,fontWeight:600}}>{actionMsg}</div>}

      {loading?<div style={{textAlign:'center',padding:40}}><Spinner/></div>:(
        <div className="ovfl">
          <table>
            <thead><tr>
              <th>Account</th>
              <th>Status</th>
              <th className="hide-mob">Total</th>
              <th className="hide-mob">Invoice</th>
              <th className="hide-mob">Created</th>
              <th>Actions</th>
            </tr></thead>
            <tbody>
              {orders.length?orders.map(o=>{
                const inv=invoices.find(i=>i.order_id===o.id);
                const nxt=nextStatus[o.status];
                return(
                  <tr key={o.id}>
                    <td>
                      <div style={{fontWeight:600,cursor:'pointer',color:P.teal}} onClick={()=>openOrder(o)}>{o.account_name}</div>
                      <div style={{fontSize:11,color:P.t3}}>#{o.id.slice(0,8)}</div>
                    </td>
                    <td><Badge label={o.status} color={OSC[o.status]}/></td>
                    <td className="hide-mob" style={{fontWeight:700,color:P.teal}}>{fmtFull$(o.total_amount)}</td>
                    <td className="hide-mob" style={{fontSize:12}}>
                      {inv?(
                        <div>
                          <div style={{fontWeight:600,fontFamily:'monospace',fontSize:11}}>{inv.invoice_number}</div>
                          <Badge label={inv.status} color={inv.status==='Paid'?'#059669':inv.status==='Partial'?P.amber:P.rose}/>
                        </div>
                      ):<span style={{color:P.t3,fontSize:12}}>-</span>}
                    </td>
                    <td className="hide-mob" style={{fontSize:12,color:P.t2}}>{o.created_at?fmtDS(o.created_at.split('T')[0]):'-'}</td>
                    <td>
                      <div style={{display:'flex',gap:4,flexWrap:'wrap'}}>
                        {nxt&&<button className="btn btn-sm btn-p" style={{fontSize:11}} onClick={()=>updateOrderStatus(o.id,nxt,o.status)}>→ {nxt}</button>}
                        {o.status!=='Cancelled'&&o.status!=='Delivered'&&
                          <button className="btn btn-sm btn-r" style={{fontSize:11}} onClick={()=>updateOrderStatus(o.id,'Cancelled',o.status)}>Cancel</button>}
                      </div>
                    </td>
                  </tr>
                );
              }):<tr><td colSpan={6}><Empty msg="No orders yet. Create your first order"/></td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {/* Order Detail Panel */}
      {selOrder&&(
        <div className="detail-panel fade">
          <div style={{padding:'16px 20px',borderBottom:`1px solid ${P.border}`,display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexShrink:0}}>
            <div>
              <div style={{fontWeight:800,fontSize:16}}>{selOrder.account_name}</div>
              <div style={{fontSize:12,color:P.t2,marginTop:2}}>Order #{selOrder.id.slice(0,8)} · <Badge label={selOrder.status} color={OSC[selOrder.status]}/></div>
            </div>
            <button style={{background:'none',border:'none',fontSize:24,color:P.t3,lineHeight:1}} onClick={()=>setSelOrder(null)}>×</button>
          </div>
          <div style={{padding:20,flex:1,overflowY:'auto'}}>
            <div style={{fontWeight:700,marginBottom:10,fontSize:14}}>Line Items</div>
            {orderItems.length?(
              <div className="ovfl" style={{marginBottom:14}}>
                <table>
                  <thead><tr><th>Product</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
                  <tbody>
                    {orderItems.map(it=>(
                      <tr key={it.id}>
                        <td style={{fontSize:12}}>{it.product_name}</td>
                        <td style={{fontSize:12}}>{it.quantity}</td>
                        <td style={{fontSize:12}}>{fmtFull$(it.unit_price)}</td>
                        <td style={{fontWeight:700,fontSize:12}}>{fmtFull$(it.total_price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ):<div style={{color:P.t3,fontSize:12,marginBottom:14}}>No items</div>}
            <div style={{background:P.slateL,borderRadius:8,padding:'12px 16px',display:'flex',justifyContent:'space-between',marginBottom:14}}>
              <span style={{fontWeight:700}}>Order Total</span>
              <span style={{fontWeight:900,color:P.teal,fontSize:16}}>{fmtFull$(selOrder.total_amount)}</span>
            </div>
            {(() => {
              const inv = invoices.find(i => i.order_id === selOrder.id);
              if (!inv) return null;
              return (
                <div style={{background:P.amberL,border:`1px solid ${P.amber}30`,borderRadius:8,padding:'12px 16px'}}>
                  <div style={{fontWeight:700,marginBottom:6}}>Invoice</div>
                  <div style={{fontFamily:'monospace',fontWeight:700,fontSize:13,marginBottom:4}}>{inv.invoice_number}</div>
                  <div style={{display:'flex',gap:12,fontSize:12}}>
                    <span>Due: {fmtDS(inv.due_date)}</span>
                    <span style={{marginLeft:'auto'}}><Badge label={inv.status} color={inv.status==='Paid'?'#059669':inv.status==='Partial'?P.amber:P.rose}/></span>
                  </div>
                  <div style={{marginTop:8,display:'flex',gap:6}}>
                    {['Unpaid','Partial','Paid'].map(s=>(
                      <button key={s} className="btn btn-sm" style={{fontSize:11,background:inv.status===s?P.teal:P.white,color:inv.status===s?'#fff':P.t2,border:`1px solid ${P.border}`}}
                        onClick={async()=>{await supabase.from('invoices').update({status:s}).eq('id',inv.id);load();}}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}
            {selOrder.notes&&<div style={{marginTop:14,padding:12,background:P.tealL,borderRadius:8,fontSize:12,color:P.teal}}>{selOrder.notes}</div>}
          </div>
        </div>
      )}

      {/* New Order Modal */}
      {showNew&&(
        <Modal title="New Order" onClose={()=>setShowNew(false)} wide>
          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            <div>
              <label>Account (Won Prospects) *</label>
              <select value={form.prospect_id} onChange={e=>{
                const p=wonAccounts.find(x=>x.id===e.target.value);
                setForm(f=>({...f,prospect_id:e.target.value,account_name:p?.business_name||''}));
              }}>
                <option value="">Select account…</option>
                {wonAccounts.map(p=><option key={p.id} value={p.id}>{p.business_name}</option>)}
                <option value="__custom__">Other (type below)</option>
              </select>
            </div>
            {(form.prospect_id==='__custom__'||!wonAccounts.find(p=>p.id===form.prospect_id))&&
              <div><label>Account Name *</label><input value={form.account_name} onChange={e=>setForm(f=>({...f,account_name:e.target.value}))} placeholder="Enter account name…"/></div>
            }

            <div>
              <div style={{fontWeight:700,fontSize:13,marginBottom:8}}>Line Items</div>
              {lines.map((ln,i)=>(
                <div key={i} style={{display:'grid',gridTemplateColumns:'1fr 70px 90px 28px',gap:6,marginBottom:6,alignItems:'center'}}>
                  <select value={ln.product_id||''} onChange={e=>{const p=products.find(x=>x.id===e.target.value);setLines(ls=>ls.map((x,j)=>j===i?{...x,product_id:p?.id||'',product_name:p?.name||'',unit_price:p?.retail_price?Number(p.retail_price):''}:x));}} style={{fontSize:12}}>
                    <option value="">Select product…</option>
                    {products.map(p=><option key={p.id} value={p.id}>{p.name}{p.sku?` · ${p.sku}`:''}</option>)}
                  </select>
                  <input type="number" min={1} value={ln.quantity} onChange={e=>updateLine(i,'quantity',e.target.value)} placeholder="Qty" style={{fontSize:12,textAlign:'center'}}/>
                  <input type="number" min={0} step={0.01} value={ln.unit_price} onChange={e=>updateLine(i,'unit_price',e.target.value)} placeholder="$/unit" style={{fontSize:12}}/>
                  {lines.length>1&&<button style={{background:'none',border:'none',color:P.t3,fontSize:18,lineHeight:1,cursor:'pointer'}} onClick={()=>removeLine(i)}>×</button>}
                </div>
              ))}
              <button className="btn btn-g btn-sm" onClick={addLine}>+ Add Line</button>
            </div>

            <div style={{background:P.slateL,borderRadius:8,padding:'10px 14px',display:'flex',justifyContent:'space-between',fontWeight:700}}>
              <span>Order Total</span>
              <span style={{color:P.teal}}>{fmtFull$(lineTotal)}</span>
            </div>

            <div><label>Notes</label><textarea rows={2} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></div>
            <div style={{display:'flex',gap:8,marginTop:4}}>
              <button className="btn btn-p" onClick={createOrder} disabled={saving||!form.account_name.trim()}>{saving?<Spinner size={14}/>:'Create Order (Draft)'}</button>
              <button className="btn btn-g" onClick={()=>setShowNew(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ── Events Tab ───────────────────────────────────────────────────────────── */
function EventsTab(){
  const [events,setEvents]=useState([]);
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [showAdd,setShowAdd]=useState(false);
  const [saving,setSaving]=useState(false);
  const blank={name:'',date:'',time:'',venue:'',skus:[],rep:'',status:'Upcoming',notes:''};
  const [form,setForm]=useState(blank);

  const loadEvents=useCallback(async()=>{
    setLoading(true);
    const[{data},{data:catalog}]=await Promise.all([supabase.from('events').select('*').order('date',{ascending:true}),supabase.from('products').select('id,name,sku,flavor,status').eq('status','Active').order('name')]);
    setEvents(data||[]);setProducts(catalog||[]);setLoading(false);
  },[]);

  useEffect(()=>{loadEvents();},[loadEvents]);

  const save=async()=>{
    if(!form.name.trim()||!form.date)return;
    setSaving(true);
    const{error}=await supabase.from('events').insert({...form,skus:Array.isArray(form.skus)?form.skus.join(', '):form.skus});
    setSaving(false);
    if(error)return alert('Error: '+error.message+'\n\nEnsure the events table exists in Supabase.');
    setShowAdd(false);setForm(blank);loadEvents();
  };

  const evtColor=s=>s==='Upcoming'?P.teal:s==='Completed'?'#059669':s==='Cancelled'?P.rose:P.amber;
  const csvRows=events.map(e=>({Name:e.name,Date:e.date,Time:e.time||'',Venue:e.venue||'',Rep:e.rep||'',Status:e.status,SKUs:e.skus||'',Notes:e.notes||''}));

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Events</h2>
        <div className="tab-actions">
          <CSVBtn rows={csvRows} filename="lagom-events.csv"/>
          <button className="btn btn-p btn-sm" onClick={()=>setShowAdd(true)}>+ Add Event</button>
        </div>
      </div>

      {loading?<div style={{textAlign:'center',padding:40}}><Spinner/></div>:(
        <div className="ovfl">
          <table>
            <thead><tr>
              <th>Event</th><th>Date</th>
              <th className="hide-mob">Time</th>
              <th className="hide-mob">Venue</th>
              <th>Rep</th><th>Status</th>
              <th className="hide-mob">SKUs</th>
            </tr></thead>
            <tbody>
              {events.length?events.map(e=>(
                <tr key={e.id}>
                  <td style={{fontWeight:600}}>{e.name}</td>
                  <td style={{fontFamily:'monospace',fontSize:12}}>{fmtDS(e.date)}</td>
                  <td className="hide-mob" style={{fontSize:12}}>{e.time||'-'}</td>
                  <td className="hide-mob" style={{fontSize:12,color:P.t2}}>{e.venue||'-'}</td>
                  <td style={{fontSize:12}}>{e.rep||'-'}</td>
                  <td><Badge label={e.status} color={evtColor(e.status)}/></td>
                  <td className="hide-mob" style={{fontSize:11,color:P.t2}}>{e.skus||'-'}</td>
                </tr>
              )):<tr><td colSpan={7}><Empty msg="No events yet. Add your first event"/></td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {showAdd&&(
        <Modal title="Add Event" onClose={()=>setShowAdd(false)}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div><label>Event Name *</label><input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/></div>
            <div className="frow">
              <div><label>Date *</label><input type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))}/></div>
              <div><label>Time</label><input type="time" value={form.time} onChange={e=>setForm(f=>({...f,time:e.target.value}))}/></div>
            </div>
            <div><label>Venue</label><input value={form.venue} onChange={e=>setForm(f=>({...f,venue:e.target.value}))}/></div>
            <div className="frow">
              <div><label>Rep</label><select value={form.rep} onChange={e=>setForm(f=>({...f,rep:e.target.value}))}><option value="">Select</option>{REPS.map(r=><option key={r}>{r}</option>)}</select></div>
              <div><label>Status</label><select value={form.status} onChange={e=>setForm(f=>({...f,status:e.target.value}))}>{EVT_STATUSES.map(s=><option key={s}>{s}</option>)}</select></div>
            </div>
            <div>
              <label>SKUs (select all that apply)</label>
              <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:4}}>
                {products.map(prod=>{const key=prod.sku||prod.name;const sel=(form.skus||[]).includes(key);return <button key={prod.id} type="button" onClick={()=>setForm(f=>({...f,skus:sel?f.skus.filter(s=>s!==key):[...(f.skus||[]),key]}))} className="btn btn-sm" style={{background:sel?P.teal:P.slateL,color:sel?'#fff':P.slate,border:'none'}}>{prod.flavor||prod.name}</button>;})}
              </div>
            </div>
            <div><label>Notes</label><textarea rows={2} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></div>
            <div style={{display:'flex',gap:8,marginTop:4}}>
              <button className="btn btn-p" onClick={save} disabled={saving||!form.name.trim()||!form.date}>{saving?<Spinner size={14}/>:'Add Event'}</button>
              <button className="btn btn-g" onClick={()=>setShowAdd(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ── Activity Tab ─────────────────────────────────────────────────────────── */
function ActivityTab({prospects}){
  const [activities,setActivities]=useState([]);
  const [loading,setLoading]=useState(true);
  const [showAdd,setShowAdd]=useState(false);
  const [saving,setSaving]=useState(false);
  const blank={prospect_id:'',activity_type:'Call',rep:'',activity_date:todayStr(),outcome:'',next_action:'',notes:''};
  const [form,setForm]=useState(blank);

  const load=useCallback(async()=>{
    setLoading(true);
    const{data}=await supabase.from('sales_activities').select('*,prospects(business_name),crm_users(display_name)').order('activity_date',{ascending:false}).limit(150);
    setActivities(data||[]);setLoading(false);
  },[]);

  useEffect(()=>{load();},[load]);

  const save=async()=>{
    if(!form.activity_type||!form.activity_date)return;
    setSaving(true);
    const payload={...form};if(!payload.prospect_id)delete payload.prospect_id;
    const{error}=await supabase.from('sales_activities').insert(payload);
    setSaving(false);
    if(error)return alert('Error: '+error.message);
    setShowAdd(false);setForm(blank);load();
  };

  const csvRows=activities.map(a=>({Date:a.activity_date,Business:a.prospects?.business_name||'',Type:a.activity_type,Rep:a.rep||a.crm_users?.display_name||'',Outcome:a.outcome||'','Next Action':a.next_action||'',Notes:a.notes||''}));

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Activity Log</h2>
        <div className="tab-actions">
          <button className="btn btn-g btn-sm" title="Voice memo: tap to record field notes (coming soon)"
            style={{opacity:.65,cursor:'not-allowed'}}
            onClick={()=>alert('Voice memo recording is coming soon!\n\nThis feature will let you record field notes by voice and auto-transcribe them into activities.')}>
            🎤 Voice Memo
          </button>
          <CSVBtn rows={csvRows} filename="lagom-activity.csv"/>
          <button className="btn btn-p btn-sm" onClick={()=>setShowAdd(true)}>+ Log Activity</button>
        </div>
      </div>

      {loading?<div style={{textAlign:'center',padding:40}}><Spinner/></div>:(
        <div className="ovfl">
          <table>
            <thead><tr>
              <th>Date</th><th>Business</th><th>Type</th>
              <th className="hide-mob">Rep</th>
              <th className="hide-mob">Outcome</th>
              <th className="hide-mob">Next Action</th>
            </tr></thead>
            <tbody>
              {activities.length?activities.map(a=>(
                <tr key={a.id}>
                  <td style={{fontFamily:'monospace',fontSize:12}}>{fmtDS(a.activity_date)}</td>
                  <td style={{fontWeight:600}}>{a.prospects?.business_name||'-'}</td>
                  <td><Badge label={a.activity_type} color={P.teal}/></td>
                  <td className="hide-mob" style={{fontSize:12}}>{a.rep||a.crm_users?.display_name||'-'}</td>
                  <td className="hide-mob" style={{fontSize:12,color:P.t2,maxWidth:160,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{a.outcome||'-'}</td>
                  <td className="hide-mob" style={{fontSize:12,color:a.next_action?P.amber:P.t3}}>{a.next_action||'-'}</td>
                </tr>
              )):<tr><td colSpan={6}><Empty msg="No activities yet. Log your first"/></td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {showAdd&&(
        <Modal title="Log Activity" onClose={()=>setShowAdd(false)}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div>
              <label>Account</label>
              <select value={form.prospect_id} onChange={e=>setForm(f=>({...f,prospect_id:e.target.value}))}>
                <option value="">General (no account)</option>
                {prospects.slice().sort((a,b)=>(a.business_name||'').localeCompare(b.business_name||'')).map(p=><option key={p.id} value={p.id}>{p.business_name}</option>)}
              </select>
            </div>
            <div className="frow">
              <div><label>Type</label><select value={form.activity_type} onChange={e=>setForm(f=>({...f,activity_type:e.target.value}))}>{ACT_TYPES.map(t=><option key={t}>{t}</option>)}</select></div>
              <div><label>Rep</label><select value={form.rep} onChange={e=>setForm(f=>({...f,rep:e.target.value}))}><option value="">Select</option>{REPS.map(r=><option key={r}>{r}</option>)}</select></div>
            </div>
            <div><label>Date</label><input type="date" value={form.activity_date} onChange={e=>setForm(f=>({...f,activity_date:e.target.value}))}/></div>
            <div><label>Outcome</label><input value={form.outcome} onChange={e=>setForm(f=>({...f,outcome:e.target.value}))} placeholder="e.g. Positive, will follow up"/></div>
            <div><label>Next Action</label><input value={form.next_action} onChange={e=>setForm(f=>({...f,next_action:e.target.value}))} placeholder="e.g. Send proposal by Friday"/></div>
            <div><label>Notes</label><textarea rows={2} value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}/></div>
            <div style={{display:'flex',gap:8,marginTop:4}}>
              <button className="btn btn-p" onClick={save} disabled={saving}>{saving?<Spinner size={14}/>:'Log Activity'}</button>
              <button className="btn btn-g" onClick={()=>setShowAdd(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ── Commissions Tab ──────────────────────────────────────────────────────── */
function CommissionsTab({user}){
  const [rows,setRows]=useState([]);
  const [loading,setLoading]=useState(true);
  const me=(user?.display_name||user?.name||'').trim();
  const isAdmin=user?.role==='admin';

  useEffect(()=>{
    supabase.from('crm_commission_eligible').select('*').order('commission_eligible_date',{ascending:false})
      .then(({data})=>{setRows(data||[]);setLoading(false);});
  },[]);

  const scoped=isAdmin?rows:rows.filter(r=>(r.rep_name||'').toLowerCase()===me.toLowerCase());
  const repTotals=useMemo(()=>{
    const m={};
    scoped.forEach(r=>{
      const name=r.rep_name||'Unassigned';
      if(!m[name])m[name]={name,revenue:0,commission:0,count:0,configured:0};
      m[name].revenue+=Number(r.paid_revenue||0);
      m[name].commission+=Number(r.commission_amount||0);
      m[name].count++;
      if(r.commission_rate!==null&&r.commission_rate!==undefined)m[name].configured++;
    });
    return Object.values(m).sort((a,b)=>b.commission-a.commission);
  },[scoped]);

  const csvRows=scoped.map(r=>({Rep:r.rep_name,Invoice:r.invoice_number,Account:r.account_name,'Sale Type':r.sale_type,'Paid Revenue':r.paid_revenue,Rate:r.commission_rate??'',Commission:r.commission_amount,'Eligible Date':r.commission_eligible_date}));

  return(
    <div className="fade">
      <div className="tab-h">
        <div>
          <h2>Commissions</h2>
          <div style={{fontSize:12,color:P.t3,marginTop:3}}>Derived from fully paid invoices and each rep's configured new/reorder rate</div>
        </div>
        <CSVBtn rows={csvRows} filename="lagom-commissions.csv"/>
      </div>
      {loading?<div style={{textAlign:'center',padding:40}}><Spinner/></div>:(
        <>
          <div className="g3" style={{marginBottom:18}}>
            {repTotals.length?repTotals.map(r=>(
              <div key={r.name} className="card" style={{borderTop:'4px solid '+P.teal}}>
                <div style={{fontWeight:800,fontSize:17}}>{r.name}</div>
                <div style={{fontSize:28,fontWeight:900,color:P.teal,marginTop:9}}>{fmtFull$(r.commission)}</div>
                <div style={{fontSize:11.5,color:P.t2,marginTop:6}}>{fmtFull$(r.revenue)} paid revenue · {r.count} eligible invoice{r.count===1?'':'s'}</div>
                {r.configured<r.count&&<div style={{fontSize:11,color:P.amber,fontWeight:700,marginTop:7}}>Commission rate not configured on {r.count-r.configured} invoice{r.count-r.configured===1?'':'s'}</div>}
              </div>
            )):<div className="card" style={{gridColumn:'1/-1'}}><Empty msg="No fully paid commission-eligible invoices yet"/></div>}
          </div>
          <div className="ovfl">
            <table>
              <thead><tr><th>Rep</th><th>Invoice</th><th>Account</th><th>Type</th><th>Paid Revenue</th><th>Rate</th><th>Commission</th><th className="hide-mob">Eligible</th></tr></thead>
              <tbody>
                {scoped.length?scoped.map(r=>(
                  <tr key={r.invoice_id}>
                    <td style={{fontWeight:700}}>{r.rep_name||'-'}</td>
                    <td style={{fontFamily:'monospace',fontSize:11.5}}>{r.invoice_number}</td>
                    <td>{r.account_name}</td>
                    <td><Badge label={r.sale_type||'Sale'} color={r.sale_type==='New Placement'?P.plum:P.teal}/></td>
                    <td style={{fontWeight:700}}>{fmtFull$(r.paid_revenue)}</td>
                    <td>{r.commission_rate===null||r.commission_rate===undefined?<span style={{color:P.amber}}>Not set</span>:(Number(r.commission_rate)*100).toFixed(2)+'%'}</td>
                    <td style={{fontWeight:900,color:P.teal}}>{fmtFull$(r.commission_amount)}</td>
                    <td className="hide-mob">{fmtDS(r.commission_eligible_date)}</td>
                  </tr>
                )):<tr><td colSpan={8}><Empty msg="No commission-eligible invoices"/></td></tr>}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Inventory Tab ────────────────────────────────────────────────────────── */
function InventoryTab({user}){
  const [prods,setProds]=useState([]);
  const [movements,setMovements]=useState([]);
  const [loading,setLoading]=useState(true);
  const [editQty,setEditQty]=useState({});
  const [savingId,setSavingId]=useState(null);

  const load=useCallback(async()=>{
    setLoading(true);
    const[{data:ps},{data:mv}]=await Promise.all([
      supabase.from('products').select('*').order('name'),
      supabase.from('inventory_movements').select('*').order('created_at',{ascending:false}).limit(25),
    ]);
    setProds(ps||[]);setMovements(mv||[]);setLoading(false);
  },[]);

  useEffect(()=>{load();},[load]);

  const saveQty=async(p,newQty)=>{
    const qty=Math.max(0,Number(newQty)||0);
    setSavingId(p.id);
    const change=qty-(p.quantity||0);
    await supabase.from('products').update({quantity:qty}).eq('id',p.id);
    if(change!==0){
      await supabase.from('inventory_movements').insert({
        product_name:p.name,
        quantity_change:change,
        reason:'Manual Adjustment',
        created_by:user.name,
      });
    }
    setSavingId(null);load();setEditQty(q=>({...q,[p.id]:undefined}));
  };

  const isDefective=p=>p.name==='24K Lemonade'||p.status==='Defective';
  const isLow=p=>(p.quantity||0)<50&&!isDefective(p);

  const csvRows=prods.map(p=>({Category:p.category||'',Product:p.name,Qty:p.quantity||0,Status:isDefective(p)?'Defective':isLow(p)?'Low Stock':'OK',Wholesale:p.wholesale_cost||0,Retail:p.retail_price||0}));

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Inventory</h2>
        <div className="tab-actions">
          <CSVBtn rows={csvRows} filename="lagom-inventory.csv"/>
        </div>
      </div>

      {/* Alerts */}
      {!loading&&(()=>{
        const lowItems=prods.filter(isLow);
        const defItems=prods.filter(isDefective);
        return(
          <>
            {defItems.length>0&&<div style={{background:P.roseL,border:`1.5px solid ${P.rose}40`,borderRadius:12,padding:'12px 16px',marginBottom:12,display:'flex',gap:10,alignItems:'center'}}>
              <span style={{fontSize:16}}>⚠️</span>
              <div>
                <div style={{fontWeight:700,color:P.rose,fontSize:13}}>Defective Products</div>
                <div style={{fontSize:12,color:P.t2}}>{defItems.map(p=>p.name).join(', ')} · do not ship</div>
              </div>
            </div>}
            {lowItems.length>0&&<div style={{background:P.amberL,border:`1.5px solid ${P.amber}40`,borderRadius:12,padding:'12px 16px',marginBottom:12,display:'flex',gap:10,alignItems:'center'}}>
              <span style={{fontSize:16}}>📦</span>
              <div>
                <div style={{fontWeight:700,color:P.amber,fontSize:13}}>Reorder Alert: {lowItems.length} product{lowItems.length>1?'s':''} below 50 units</div>
                <div style={{fontSize:12,color:P.t2}}>{lowItems.map(p=>`${p.name} (${p.quantity||0})`).join(', ')}</div>
              </div>
            </div>}
          </>
        );
      })()}

      {loading?<div style={{textAlign:'center',padding:40}}><Spinner/></div>:(
        <>
          <div className="ovfl" style={{marginBottom:20}}>
            <table>
              <thead><tr>
                <th>Category</th>
                <th>Product</th>
                <th>Stock</th>
                <th>Status</th>
                <th className="hide-mob">Wholesale</th>
                <th className="hide-mob">Retail</th>
                <th>Adjust</th>
              </tr></thead>
              <tbody>
                {prods.length?prods.map(p=>{
                  const def=isDefective(p);
                  const low=isLow(p);
                  const curVal=editQty[p.id]??p.quantity??0;
                  return(
                    <tr key={p.id}>
                      <td>{p.category?<span className="badge" style={{background:P.slateL,color:P.t2}}>{p.category}</span>:'-'}</td>
                      <td style={{fontWeight:600}}>{p.name}</td>
                      <td>
                        <div style={{fontWeight:900,fontSize:18,color:def?P.rose:low?P.amber:P.teal}}>{p.quantity||0}</div>
                      </td>
                      <td>
                        {def?<Badge label="Defective" color={P.rose}/>
                          :low?<Badge label="Low Stock" color={P.amber}/>
                          :<Badge label="In Stock" color="#059669"/>}
                      </td>
                      <td className="hide-mob" style={{fontSize:12}}>{p.wholesale_cost?fmtFull$(p.wholesale_cost):'-'}</td>
                      <td className="hide-mob" style={{fontSize:12}}>{p.retail_price?fmtFull$(p.retail_price):'-'}</td>
                      <td>
                        <div style={{display:'flex',alignItems:'center',gap:4}}>
                          <button className="btn btn-sm btn-g" style={{padding:'3px 8px',fontSize:16,lineHeight:1}} onClick={()=>setEditQty(q=>({...q,[p.id]:(q[p.id]??p.quantity??0)-1}))}>−</button>
                          <input type="number" value={curVal} onChange={e=>setEditQty(q=>({...q,[p.id]:e.target.value}))}
                            style={{width:52,textAlign:'center',fontSize:12,padding:'4px 6px'}}/>
                          <button className="btn btn-sm btn-g" style={{padding:'3px 8px',fontSize:16,lineHeight:1}} onClick={()=>setEditQty(q=>({...q,[p.id]:(q[p.id]??p.quantity??0)+1}))}>+</button>
                          {(editQty[p.id]!==undefined&&Number(editQty[p.id])!==(p.quantity||0))&&
                            <button className="btn btn-sm btn-p" style={{fontSize:11}} onClick={()=>saveQty(p,curVal)} disabled={savingId===p.id}>
                              {savingId===p.id?<Spinner size={12}/>:'Save'}
                            </button>}
                        </div>
                      </td>
                    </tr>
                  );
                }):<tr><td colSpan={7}><Empty msg="No products found. Add products to the products table in Supabase."/></td></tr>}
              </tbody>
            </table>
          </div>

          <CardChart title="Recent Inventory Movements" badge={`Last ${movements.length}`}>
            {movements.length?(
              <div className="ovfl">
                <table>
                  <thead><tr><th>Product</th><th>Change</th><th className="hide-mob">Reason</th><th className="hide-mob">By</th><th>Date</th></tr></thead>
                  <tbody>
                    {movements.map(m=>(
                      <tr key={m.id}>
                        <td style={{fontWeight:600,fontSize:12}}>{m.product_name}</td>
                        <td style={{fontWeight:700,color:m.quantity_change<0?P.rose:'#059669',fontSize:13}}>{m.quantity_change>0?'+':''}{m.quantity_change}</td>
                        <td className="hide-mob" style={{fontSize:12,color:P.t2}}>{m.reason||'-'}</td>
                        <td className="hide-mob" style={{fontSize:12}}>{m.created_by||'-'}</td>
                        <td style={{fontSize:11,color:P.t3}}>{m.created_at?fmtDS(m.created_at.split('T')[0]):'-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ):<Empty msg="No inventory movements recorded"/>}
          </CardChart>
        </>
      )}
    </div>
  );
}

/* ── Lagom AI Tab ─────────────────────────────────────────────────────────── */
function LagomAITab({prospects,user}){
  const [msgs,setMsgs]=useState([{role:'assistant',content:`Hi ${user.name}! I'm Lagom AI, your CRM co-pilot grounded in real account data.\n\nI have live context on ${prospects.length} Lagom Naturals accounts across the Twin Cities. Ask me about pipeline status, overdue follow-ups, territory performance, rep rankings, or sales strategy.`}]);
  const [input,setInput]=useState('');
  const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  const inputRef=useRef(null);

  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:'smooth'});},[msgs]);

  const systemPrompt=useMemo(()=>{
    const won=prospects.filter(p=>p.status==='Won');
    const active=prospects.filter(p=>!['Won','Lost','Not Interested'].includes(p.status));
    const overdue=prospects.filter(p=>p.next_follow_up&&p.next_follow_up<todayStr());
    const zoneBreakdown=countiesByCount(prospects).slice(0,15).map(z=>`${z} County: ${prospects.filter(p=>getZone(p)===z).length} accounts`).join('\n');
    const repMap={};prospects.forEach(p=>{if(p.assigned_to){if(!repMap[p.assigned_to])repMap[p.assigned_to]={total:0,won:0};repMap[p.assigned_to].total++;if(p.status==='Won')repMap[p.assigned_to].won++;}});
    const repBreakdown=Object.entries(repMap).map(([r,v])=>`${r}: ${v.total} accounts, ${v.won} won (${v.total?((v.won/v.total)*100).toFixed(1):0}% win rate)`).join('\n');
    const overdueList=overdue.slice(0,15).map(p=>`- ${p.business_name} (${p.city||'?'}) overdue since ${p.next_follow_up}, rep: ${p.assigned_to||'unassigned'}`).join('\n');
    const statusBreakdown=STATUSES.map(s=>`- ${s}: ${prospects.filter(p=>p.status===s).length}`).join('\n');
    return `You are Lagom AI, the intelligent CRM assistant for Lagom Naturals, a premium natural beverage company in the Twin Cities, Minnesota.

COMPANY:
- Products: 24K Lemonade, Watermelon Refresher, Blackberry Breeze, Strawberry Lime Fusion, Mixed Sampler, Full Line
- HQ: 707 N 3rd St, Minneapolis, MN
- Sales territory: Twin Cities metro area
- Reps: Roman (West Suburbs/Hopkins), Jess (Minneapolis metro)

LIVE CRM DATA (${new Date().toLocaleDateString()}):
- Total accounts: ${prospects.length}
- Active pipeline: ${active.length}
- Won accounts: ${won.length} (${prospects.length?((won.length/prospects.length)*100).toFixed(1):0}% win rate)
- Overdue follow-ups: ${overdue.length}

REP PERFORMANCE:
${repBreakdown||'No reps assigned yet'}

COUNTY BREAKDOWN (top 15):
${zoneBreakdown}

PIPELINE STATUS:
${statusBreakdown}

${overdue.length>0?`OVERDUE FOLLOW-UPS (top ${Math.min(overdue.length,15)}):\n${overdueList}`:'All follow-ups are current.'}

RULES (CRITICAL):
1. Only state facts from the data above. Never invent account names, revenue figures, or contacts.
2. If asked for data not provided (e.g. specific phone numbers, exact revenue), say you don't have that detail.
3. Be concise and actionable. Use bullet points for lists.
4. Today: ${new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}.`;
  },[prospects]);

  const send=async()=>{
    const text=input.trim();if(!text||loading)return;
    setInput('');
    const newMsgs=[...msgs,{role:'user',content:text}];
    setMsgs(newMsgs);setLoading(true);
    try{
      const apiMsgs=newMsgs.filter(m=>m.role==='user'||m.role==='assistant').slice(-20);
      const startIdx=apiMsgs.findIndex(m=>m.role==='user');
      const payload=startIdx>=0?apiMsgs.slice(startIdx):apiMsgs;
      const res=await fetch('/api/ai',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({messages:payload,systemPrompt}),
      });
      if(!res.ok){const err=await res.text();throw new Error(err);}
      const{content,error}=await res.json();
      if(error)throw new Error(error);
      setMsgs(m=>[...m,{role:'assistant',content}]);
    }catch(err){
      setMsgs(m=>[...m,{role:'assistant',content:`⚠️ Could not reach the AI service. Ensure \`ANTHROPIC_API_KEY\` is set in your environment variables.\n\nError: ${err.message}`}]);
    }
    setLoading(false);inputRef.current?.focus();
  };

  const suggestions=['Which accounts are overdue for follow-up?','Who are my top performing reps?','What\'s the pipeline breakdown by status?','Which zones have the most opportunity?','Summarize the accounts in Hopkins/West Suburbs'];

  return(
    <div className="fade" style={{display:'flex',flexDirection:'column',height:'calc(100vh - 160px)',minHeight:400}}>
      <div className="tab-h" style={{flexShrink:0}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:40,height:40,borderRadius:12,background:`linear-gradient(135deg,${P.teal},${P.plum})`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,boxShadow:`0 4px 12px ${P.teal}40`}}>✦</div>
          <div>
            <h2 style={{marginBottom:0}}>Lagom AI</h2>
            <div style={{fontSize:11,color:P.t3,marginTop:1}}>Claude-powered · {prospects.length} accounts in context · data-grounded only</div>
          </div>
        </div>
        <button className="btn btn-g btn-sm" onClick={()=>setMsgs([{role:'assistant',content:`Context refreshed: ${prospects.length} accounts loaded. What would you like to know?`}])}>Reset Chat</button>
      </div>

      <div style={{flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:12,paddingBottom:8}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:'flex',justifyContent:m.role==='user'?'flex-end':'flex-start'}}>
            <div style={{
              maxWidth:'78%',padding:'12px 16px',
              borderRadius:m.role==='user'?'14px 14px 4px 14px':'14px 14px 14px 4px',
              background:m.role==='user'?P.teal:P.white,
              color:m.role==='user'?'#fff':P.text,
              border:m.role==='assistant'?`1.5px solid ${P.border}`:'none',
              fontSize:13,lineHeight:1.65,whiteSpace:'pre-wrap',
              boxShadow:'0 1px 4px rgba(0,0,0,.06)',
            }}>
              {m.role==='assistant'&&i===0&&<div style={{fontSize:10,fontWeight:800,color:P.teal,marginBottom:6,letterSpacing:'.5px'}}>✦ LAGOM AI</div>}
              {m.content}
            </div>
          </div>
        ))}
        {loading&&(
          <div style={{display:'flex',justifyContent:'flex-start'}}>
            <div style={{padding:'14px 18px',borderRadius:'14px 14px 14px 4px',background:P.white,border:`1.5px solid ${P.border}`,display:'flex',gap:5,alignItems:'center'}}>
              {[0,1,2].map(i=>(
                <div key={i} style={{width:7,height:7,borderRadius:'50%',background:P.teal,animation:`pulse ${1.2}s ease-in-out ${i*0.2}s infinite`}}/>
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef}/>
      </div>

      {msgs.length<=2&&(
        <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:10,flexShrink:0}}>
          {suggestions.map(s=>(
            <button key={s} onClick={()=>{setInput(s);setTimeout(()=>inputRef.current?.focus(),50);}} className="btn btn-g btn-sm" style={{fontSize:11}}>{s}</button>
          ))}
        </div>
      )}

      <div style={{display:'flex',gap:8,flexShrink:0}}>
        <input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>e.key==='Enter'&&!e.shiftKey&&send()}
          placeholder="Ask about accounts, pipeline, territories, commissions…"
          style={{flex:1}} disabled={loading}/>
        <button className="btn btn-p" onClick={send} disabled={loading||!input.trim()} style={{flexShrink:0}}>
          {loading?<Spinner size={14}/>:'Send →'}
        </button>
      </div>
    </div>
  );
}

/* ── Settings Tab (admin only) ────────────────────────────────────────────── */
function SettingsTab(){
  const [section,setSection]=useState('users');
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(true);
  const [showAddUser,setShowAddUser]=useState(false);
  const [editUser,setEditUser]=useState(null);
  const [saving,setSaving]=useState(false);
  const [deleting,setDeleting]=useState(null);

  const blankUser={username:'',password:'',display_name:'',email:'',role:'rep',territory:'',commission_rate:''};
  const [userForm,setUserForm]=useState(blankUser);

  const loadUsers=useCallback(async()=>{
    setLoading(true);
    const{data}=await supabase.from('crm_users').select('*').order('display_name');
    setUsers(data||[]);setLoading(false);
  },[]);

  useEffect(()=>{loadUsers();},[loadUsers]);

  const saveUser=async()=>{
    if(!userForm.username.trim()||!userForm.display_name.trim())return;
    setSaving(true);
    const payload={
      username:userForm.username.trim().toLowerCase(),
      display_name:userForm.display_name.trim(),
      email:userForm.email.trim()||null,
      role:userForm.role,
      territory:userForm.territory||null,
      commission_rate:userForm.commission_rate?Number(userForm.commission_rate)/100:null,
    };
    if(userForm.password.trim())payload.password_hash=userForm.password.trim();

    let error;
    if(editUser){
      ({error}=await supabase.from('crm_users').update(payload).eq('id',editUser.id));
    }else{
      if(!userForm.password.trim()){setSaving(false);return alert('Password is required for new users.');}
      ({error}=await supabase.from('crm_users').insert(payload));
    }
    setSaving(false);
    if(error)return alert('Error: '+error.message);
    setShowAddUser(false);setEditUser(null);setUserForm(blankUser);loadUsers();
  };

  const deleteUser=async id=>{
    if(!confirm('Delete this user? They will no longer be able to log in.'))return;
    setDeleting(id);
    await supabase.from('crm_users').delete().eq('id',id);
    setDeleting(null);loadUsers();
  };

  const openEdit=u=>{
    setEditUser(u);
    setUserForm({username:u.username||'',password:'',display_name:u.display_name||'',email:u.email||'',role:u.role||'rep',territory:u.territory||'',commission_rate:u.commission_rate?String(Number(u.commission_rate)*100):'',});
    setShowAddUser(true);
  };

  const SECTIONS=[{id:'users',label:'Users'},{id:'company',label:'Company Info'}];

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Settings</h2>
        <div style={{display:'flex',gap:4}}>
          {SECTIONS.map(s=>(
            <button key={s.id} className="btn btn-sm" onClick={()=>setSection(s.id)}
              style={{background:section===s.id?P.slate:P.slateL,color:section===s.id?'#fff':P.slate,border:'none'}}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {section==='users'&&(
        <>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
            <div style={{fontWeight:700,fontSize:15}}>CRM Users</div>
            <button className="btn btn-p btn-sm" onClick={()=>{setUserForm(blankUser);setEditUser(null);setShowAddUser(true);}}>+ Add User</button>
          </div>
          {loading?<div style={{textAlign:'center',padding:40}}><Spinner/></div>:(
            <div className="ovfl">
              <table>
                <thead><tr><th>Name</th><th>Username</th><th>Role</th><th className="hide-mob">Email</th><th className="hide-mob">Territory</th><th className="hide-mob">Commission</th><th>Actions</th></tr></thead>
                <tbody>
                  {users.length?users.map(u=>(
                    <tr key={u.id}>
                      <td style={{fontWeight:600}}>{u.display_name||'-'}</td>
                      <td style={{fontFamily:'monospace',fontSize:12,color:P.t2}}>{u.username}</td>
                      <td><Badge label={u.role} color={u.role==='admin'?P.plum:u.role==='investor'?P.amber:P.teal}/></td>
                      <td className="hide-mob" style={{fontSize:12,color:P.t2}}>{u.email||'-'}</td>
                      <td className="hide-mob" style={{fontSize:12}}>{u.territory||'-'}</td>
                      <td className="hide-mob" style={{fontSize:12}}>{u.commission_rate?(Number(u.commission_rate)*100).toFixed(1)+'%':'-'}</td>
                      <td>
                        <div style={{display:'flex',gap:4}}>
                          <button className="btn btn-sm btn-g" style={{fontSize:11}} onClick={()=>openEdit(u)}>Edit</button>
                          <button className="btn btn-sm btn-r" style={{fontSize:11}} onClick={()=>deleteUser(u.id)} disabled={deleting===u.id}>{deleting===u.id?<Spinner size={10}/>:'Del'}</button>
                        </div>
                      </td>
                    </tr>
                  )):<tr><td colSpan={7}><Empty msg="No users in database. Static credentials (tito, timmy, roman, jess) still work."/></td></tr>}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {section==='company'&&(
        <div className="card" style={{maxWidth:520}}>
          <div style={{fontWeight:700,fontSize:15,marginBottom:16}}>Company Information</div>
          {[
            ['Company Name','Lagom Naturals'],
            ['Headquarters','707 N 3rd St, Minneapolis, MN 55401'],
            ['Territory','Twin Cities Metro Area'],
            ['Products','24K Lemonade, Watermelon Refresher, Blackberry Breeze, Strawberry Lime Fusion'],
            ['Sales Reps','Roman (West Suburbs), Jessica (Minneapolis Metro)'],
          ].map(([k,v])=>(
            <div key={k} style={{marginBottom:14}}>
              <div style={{fontSize:11,fontWeight:700,color:P.t2,textTransform:'uppercase',letterSpacing:'.5px',marginBottom:4}}>{k}</div>
              <div style={{fontSize:13,color:P.text}}>{v}</div>
            </div>
          ))}
          <div style={{marginTop:16,padding:'12px 14px',background:P.slateL,borderRadius:8,fontSize:12,color:P.t2}}>
            To update company settings, edit the constants in your source code or add an <code style={{background:'#fff',padding:'1px 5px',borderRadius:3}}>app_settings</code> table in Supabase.
          </div>
        </div>
      )}

      {showAddUser&&(
        <Modal title={editUser?'Edit User':'Add User'} onClose={()=>{setShowAddUser(false);setEditUser(null);}}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div className="frow">
              <div><label>Display Name *</label><input value={userForm.display_name} onChange={e=>setUserForm(f=>({...f,display_name:e.target.value}))} placeholder="Full name"/></div>
              <div><label>Username *</label><input value={userForm.username} onChange={e=>setUserForm(f=>({...f,username:e.target.value}))} placeholder="login username" autoCapitalize="none"/></div>
            </div>
            <div className="frow">
              <div><label>{editUser?'New Password (blank = keep)':'Password *'}</label><input type="password" value={userForm.password} onChange={e=>setUserForm(f=>({...f,password:e.target.value}))} placeholder="••••••••"/></div>
              <div><label>Email</label><input type="email" value={userForm.email} onChange={e=>setUserForm(f=>({...f,email:e.target.value}))} placeholder="user@lagom.com"/></div>
            </div>
            <div>
              <label>Role</label>
              <select value={userForm.role} onChange={e=>setUserForm(f=>({...f,role:e.target.value}))}>
                <option value="admin">Admin</option>
                <option value="rep">Sales Rep</option>
                <option value="investor">Investor</option>
              </select>
            </div>
            {userForm.role==='rep'&&(
              <div className="frow">
                <div><label>Territory</label><input value={userForm.territory} onChange={e=>setUserForm(f=>({...f,territory:e.target.value}))} placeholder="e.g. West Suburbs"/></div>
                <div><label>Commission Rate (%)</label><input type="number" min={0} max={100} step={0.1} value={userForm.commission_rate} onChange={e=>setUserForm(f=>({...f,commission_rate:e.target.value}))} placeholder="e.g. 5"/></div>
              </div>
            )}
            <div style={{display:'flex',gap:8,marginTop:4}}>
              <button className="btn btn-p" onClick={saveUser} disabled={saving||!userForm.display_name.trim()||!userForm.username.trim()}>{saving?<Spinner size={14}/>:editUser?'Save Changes':'Add User'}</button>
              <button className="btn btn-g" onClick={()=>{setShowAddUser(false);setEditUser(null);}}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* ── Setup Tab (admin only) ───────────────────────────────────────────────── */
function SetupTab({prospects,reload}){
  const [section,setSection]=useState('geocode');
  const [selZone,setSelZone]=useState('');
  const [assignRep,setAssignRep]=useState('');
  const [assigning,setAssigning]=useState(false);
  const [msg,setMsg]=useState('');
  const [csvFile,setCsvFile]=useState(null);
  const [csvPreview,setCsvPreview]=useState([]);
  const [importing,setImporting]=useState(false);
  const [importMsg,setImportMsg]=useState('');
  const [geoRunning,setGeoRunning]=useState(false);
  const [geoProg,setGeoProg]=useState(null);
  const [geoErr,setGeoErr]=useState('');

  const runGeocode=async()=>{
    const todo=prospects.filter(p=>(!p.latitude||!p.longitude)&&p.address&&p.address!=='N/A');
    if(!todo.length){setGeoErr('All accounts with an address already have coordinates.');return;}
    setGeoErr('');setGeoRunning(true);
    let done=0,matched=0,failed=0;
    setGeoProg({done,total:todo.length,matched,failed});
    const B=50;
    for(let i=0;i<todo.length;i+=B){
      const batch=todo.slice(i,i+B).map(p=>({id:p.id,address:[p.address,p.city&&!p.address.includes(p.city)?p.city:'',p.state||'MN'].filter(Boolean).join(', ')}));
      let results=[];
      try{
        const r=await fetch('/api/geocode',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({addresses:batch})});
        const j=await r.json();
        if(j.error){setGeoErr(j.error);setGeoRunning(false);return;}
        results=j.results||[];
      }catch(e){setGeoErr('Network error: '+e.message);setGeoRunning(false);return;}
      for(const res of results){
        if(res.lat&&res.lng){
          const upd={latitude:res.lat,longitude:res.lng};
          if(res.county)upd.county=res.county;
          const{error}=await supabase.from('prospects').update(upd).eq('id',res.id);
          if(error)failed++;else matched++;
        }else failed++;
        done++;
      }
      setGeoProg({done,total:todo.length,matched,failed});
    }
    setGeoRunning(false);
    reload();
  };

  const zoneData=useMemo(()=>countiesByCount(prospects).map(z=>{
    const ps=prospects.filter(p=>getZone(p)===z);
    return{zone:z,count:ps.length,prospects:ps};
  }),[prospects]);

  const doAssign=async()=>{
    if(!selZone||!assignRep)return;
    setAssigning(true);
    const ids=zoneData.find(z=>z.zone===selZone)?.prospects.map(p=>p.id)||[];
    for(const id of ids)await supabase.from('prospects').update({assigned_to:assignRep}).eq('id',id);
    setAssigning(false);
    setMsg(`✓ Assigned ${ids.length} accounts in ${selZone} County to ${assignRep}`);
    reload();setTimeout(()=>setMsg(''),5000);
  };

  const parseCSV=text=>{
    const lines=text.trim().split('\n');
    if(lines.length<2)return[];
    const headers=lines[0].split(',').map(h=>h.trim().replace(/^"|"$/g,'').toLowerCase().replace(/ /g,'_'));
    return lines.slice(1).map(line=>{
      const vals=[];let cur='',inQ=false;
      for(const ch of line){if(ch==='"'){inQ=!inQ;}else if(ch===','&&!inQ){vals.push(cur);cur='';}else{cur+=ch;}}
      vals.push(cur);
      const row={};headers.forEach((h,i)=>{row[h]=(vals[i]||'').trim().replace(/^"|"$/g,'');});
      return row;
    }).filter(r=>r.business_name||r.name);
  };

  const handleFile=e=>{
    const file=e.target.files[0];if(!file)return;
    setCsvFile(file);
    const reader=new FileReader();
    reader.onload=ev=>{
      const rows=parseCSV(ev.target.result);
      setCsvPreview(rows.slice(0,5));
    };
    reader.readAsText(file);
  };

  const doImport=async()=>{
    if(!csvFile)return;
    setImporting(true);setImportMsg('');
    const reader=new FileReader();
    reader.onload=async ev=>{
      const rows=parseCSV(ev.target.result);
      let count=0,errors=0;
      for(const row of rows){
        const rec={
          business_name:row.business_name||row.name||'',
          contact_name:row.contact_name||row.contact||'',
          phone:row.phone||row.phone_number||'',
          email:row.email||'',
          address:row.address||'',
          city:row.city||'',
          state:row.state||'MN',
          status:row.status||'New',
          priority:row.priority||'Medium',
          assigned_to:row.assigned_to||row.rep||'',
          notes:row.notes||'',
          latitude:row.latitude?Number(row.latitude):null,
          longitude:row.longitude?Number(row.longitude):null,
        };
        if(!rec.business_name){errors++;continue;}
        const{error}=await supabase.from('prospects').insert(rec);
        if(error)errors++;else count++;
      }
      setImporting(false);
      setImportMsg(`✓ Imported ${count} accounts${errors?` · ${errors} failed`:''}. Refresh the page to see changes.`);
      reload();setCsvFile(null);setCsvPreview([]);
    };
    reader.readAsText(csvFile);
  };

  const SECTIONS=[{id:'geocode',label:'Geocoding'},{id:'bulk',label:'Bulk Assign'},{id:'import',label:'CSV Import'}];

  return(
    <div className="fade">
      <div className="tab-h">
        <h2>Setup & Admin</h2>
        <div style={{display:'flex',gap:4}}>
          {SECTIONS.map(s=>(
            <button key={s.id} className="btn btn-sm" onClick={()=>setSection(s.id)}
              style={{background:section===s.id?P.slate:P.slateL,color:section===s.id?'#fff':P.slate,border:'none'}}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {section==='geocode'&&(
        <div className="g2">
          <div className="card">
            <div style={{fontWeight:700,fontSize:15,marginBottom:10}}>Geocode Accounts</div>
            <p style={{color:P.t2,fontSize:13,lineHeight:1.6,marginBottom:14}}>
              One click converts every account's address into <strong>latitude</strong>, <strong>longitude</strong>, and <strong>county</strong> (via Google), powering the Territory Map and Routes.
            </p>
            <button className="btn btn-p" onClick={runGeocode} disabled={geoRunning}
              style={{width:'100%',justifyContent:'center',padding:11,fontSize:14}}>
              {geoRunning?<><Spinner size={15}/> Geocoding…</>:'Geocode all accounts'}
            </button>
            {geoErr&&<div style={{marginTop:12,background:P.roseL,color:P.rose,padding:'10px 12px',borderRadius:8,fontSize:12.5,fontWeight:600}}>{geoErr}</div>}
            {geoProg&&(
              <div style={{marginTop:14}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:P.t2,marginBottom:6}}>
                  <span>{geoProg.done} / {geoProg.total} processed</span>
                  <span><span style={{color:P.teal,fontWeight:700}}>{geoProg.matched} matched</span>{geoProg.failed?<span style={{color:P.rose,fontWeight:700}}> · {geoProg.failed} skipped</span>:null}</span>
                </div>
                <div style={{height:8,background:P.slateL,borderRadius:4,overflow:'hidden'}}>
                  <div style={{width:geoProg.total?`${(geoProg.done/geoProg.total)*100}%`:'0%',height:'100%',background:P.teal,borderRadius:4,transition:'width .2s'}}/>
                </div>
                {!geoRunning&&geoProg.done>0&&<div style={{marginTop:8,fontSize:12,color:P.teal,fontWeight:600}}>✓ Done. Territory Map and Routes are ready.</div>}
              </div>
            )}
            <div style={{marginTop:14,background:P.amberL,borderRadius:10,padding:'12px 14px'}}>
              <div style={{fontWeight:700,fontSize:12.5,color:P.amber,marginBottom:5}}>Requires a Google Maps API key</div>
              <p style={{fontSize:12,color:P.t2,lineHeight:1.5,margin:0}}>Set <code style={{background:'#fff',padding:'1px 5px',borderRadius:3}}>GOOGLE_MAPS_API_KEY</code> in Vercel (Settings → Environment Variables), then redeploy. Manual entry or CSV columns (latitude/longitude) also work.</p>
            </div>
            <div style={{marginTop:12,padding:'10px 14px',background:P.slateL,borderRadius:8,fontSize:12,color:P.t2}}>
              {prospects.filter(p=>p.latitude&&p.longitude).length} / {prospects.length} accounts currently have coordinates.
            </div>
          </div>
          <div className="card">
            <div style={{fontWeight:700,fontSize:15,marginBottom:10}}>Coordinate Status</div>
            <div style={{marginBottom:12}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
                <span style={{fontSize:13,color:P.t2}}>Geocoded</span>
                <span style={{fontWeight:700,color:P.teal}}>{prospects.filter(p=>p.latitude&&p.longitude).length}</span>
              </div>
              <div style={{height:8,background:P.tealL,borderRadius:4,overflow:'hidden'}}>
                <div style={{width:prospects.length?`${(prospects.filter(p=>p.latitude&&p.longitude).length/prospects.length)*100}%`:'0%',height:'100%',background:P.teal,borderRadius:4}}/>
              </div>
            </div>
            <div>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:6}}>
                <span style={{fontSize:13,color:P.t2}}>Missing coordinates</span>
                <span style={{fontWeight:700,color:P.rose}}>{prospects.filter(p=>!p.latitude||!p.longitude).length}</span>
              </div>
              <div style={{height:8,background:P.roseL,borderRadius:4,overflow:'hidden'}}>
                <div style={{width:prospects.length?`${(prospects.filter(p=>!p.latitude||!p.longitude).length/prospects.length)*100}%`:'0%',height:'100%',background:P.rose,borderRadius:4}}/>
              </div>
            </div>
            <div style={{marginTop:16,fontSize:12,color:P.t3}}>
              <div style={{fontWeight:700,marginBottom:6}}>Accounts without coordinates:</div>
              <div style={{maxHeight:200,overflowY:'auto',display:'flex',flexDirection:'column',gap:2}}>
                {prospects.filter(p=>!p.latitude||!p.longitude).slice(0,30).map(p=>(
                  <div key={p.id} style={{fontSize:11,color:P.t2}}>{p.business_name} · {p.city||'no city'}</div>
                ))}
                {prospects.filter(p=>!p.latitude||!p.longitude).length>30&&<div style={{color:P.t3,fontSize:11}}>+{prospects.filter(p=>!p.latitude||!p.longitude).length-30} more…</div>}
              </div>
            </div>
          </div>
        </div>
      )}

      {section==='bulk'&&(
        <div className="card" style={{maxWidth:560}}>
          <div style={{fontWeight:700,fontSize:15,marginBottom:14}}>Bulk Assign County to Rep</div>
          {msg&&<div style={{background:P.tealL,border:`1px solid ${P.teal}40`,color:P.teal,padding:'10px 14px',borderRadius:9,marginBottom:14,fontSize:13,fontWeight:600}}>{msg}</div>}
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div>
              <label>County</label>
              <select value={selZone} onChange={e=>setSelZone(e.target.value)}>
                <option value="">Select county…</option>
                {zoneData.map(z=><option key={z.zone} value={z.zone}>{z.zone} ({z.count})</option>)}
              </select>
              {selZone&&<div style={{fontSize:11,color:P.t2,marginTop:4}}>{zoneData.find(z=>z.zone===selZone)?.count||0} accounts in this county</div>}
            </div>
            <div>
              <label>Assign to Rep</label>
              <select value={assignRep} onChange={e=>setAssignRep(e.target.value)}>
                <option value="">Select rep…</option>
                {REPS.map(r=><option key={r}>{r}</option>)}
              </select>
            </div>
            <button className="btn btn-p" onClick={doAssign} disabled={!selZone||!assignRep||assigning} style={{alignSelf:'flex-start'}}>
              {assigning?<Spinner size={14}/>:`Assign ${selZone?zoneData.find(z=>z.zone===selZone)?.count||0:0} Accounts to ${assignRep||'Rep'}`}
            </button>
          </div>
          <div className="sep"/>
          <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>County Summary</div>
          <div style={{display:'flex',flexDirection:'column',gap:8,maxHeight:360,overflowY:'auto'}}>
            {zoneData.map(z=>(
              <div key={z.zone} style={{display:'flex',justifyContent:'space-between',padding:'8px 12px',background:P.slateL,borderRadius:8,fontSize:13}}>
                <span style={{fontWeight:600}}>{z.zone} County</span>
                <span style={{color:P.t2}}>{z.count} accounts</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {section==='import'&&(
        <div className="g2">
          <div className="card">
            <div style={{fontWeight:700,fontSize:15,marginBottom:10}}>CSV Import</div>
            <p style={{color:P.t2,fontSize:13,lineHeight:1.6,marginBottom:14}}>Import prospects from a CSV file. Required column: <code style={{background:P.slateL,padding:'1px 5px',borderRadius:3}}>business_name</code></p>
            <div style={{background:P.slateL,borderRadius:10,padding:14,marginBottom:14,fontSize:12}}>
              <div style={{fontWeight:700,marginBottom:6}}>Supported Columns</div>
              <div style={{color:P.t2,lineHeight:1.8}}>
                business_name, contact_name, phone, email, address, city, state, status, priority, assigned_to, notes, latitude, longitude
              </div>
            </div>
            <div style={{marginBottom:14}}>
              <label>Select CSV File</label>
              <input type="file" accept=".csv" onChange={handleFile} style={{padding:'6px 10px'}}/>
            </div>
            {csvPreview.length>0&&(
              <div style={{marginBottom:14}}>
                <div style={{fontWeight:700,fontSize:13,marginBottom:8}}>Preview (first 5 rows)</div>
                <div style={{overflowX:'auto',border:`1px solid ${P.border}`,borderRadius:8,fontSize:11}}>
                  <table>
                    <thead><tr>{Object.keys(csvPreview[0]).slice(0,6).map(k=><th key={k}>{k}</th>)}</tr></thead>
                    <tbody>{csvPreview.map((r,i)=><tr key={i}>{Object.values(r).slice(0,6).map((v,j)=><td key={j} style={{maxWidth:100,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{v}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              </div>
            )}
            {importMsg&&<div style={{background:P.tealL,border:`1px solid ${P.teal}40`,color:P.teal,padding:'10px 14px',borderRadius:9,marginBottom:12,fontSize:13,fontWeight:600}}>{importMsg}</div>}
            <button className="btn btn-p" onClick={doImport} disabled={!csvFile||importing}>
              {importing?<><Spinner size={14}/> Importing…</>:`Import ${csvPreview.length?`(${csvFile?.name})`:'CSV'}`}
            </button>
          </div>
          <div className="card">
            <div style={{fontWeight:700,fontSize:15,marginBottom:10}}>CSV Template</div>
            <p style={{fontSize:13,color:P.t2,lineHeight:1.6,marginBottom:14}}>Download a blank template to fill in and import.</p>
            <button className="btn btn-g" onClick={()=>downloadCSV([{business_name:'Example Cafe',contact_name:'Jane Smith',phone:'612-555-0100',email:'jane@cafe.com',address:'100 Main St',city:'Minneapolis',state:'MN',status:'New',priority:'Medium',assigned_to:'Roman',notes:'',latitude:'44.9778',longitude:'-93.2650'}],'lagom-import-template.csv')}>
              ↓ Download Template
            </button>
            <div className="sep"/>
            <div style={{fontWeight:700,fontSize:13,marginBottom:8}}>Status Values</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:4}}>
              {STATUSES.map(s=><span key={s} className="badge" style={{background:`${SC[s]}14`,color:SC[s],border:`1px solid ${SC[s]}28`}}>{s}</span>)}
            </div>
            <div style={{marginTop:12,fontWeight:700,fontSize:13,marginBottom:8}}>Priority Values</div>
            <div style={{display:'flex',gap:4}}>
              {PRIORITIES.map(p=><span key={p} className="badge" style={{background:`${PC[p]}14`,color:PC[p],border:`1px solid ${PC[p]}28`}}>{p}</span>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── App Shell ────────────────────────────────────────────────────────────── */
/* ── Today Tab (rep home · next best action) ──────────────────────────────── */
function TodayTab({prospects,user,go}){
  const isAdmin=user.role==='admin';
  const me=(user.display_name||user.name||'').trim();
  const firstName=me.split(' ')[0]||'there';
  const today=todayStr();
  const [reorderSignals,setReorderSignals]=useState([]);
  const [arSignals,setARSignals]=useState([]);
  useEffect(()=>{let live=true;(async()=>{const[{data:r},{data:a}]=await Promise.all([supabase.from('crm_reorder_opportunities').select('*'),supabase.from('crm_invoice_rollup').select('*').gt('balance_due',0)]);if(live){setReorderSignals(r||[]);setARSignals(a||[])}})();return()=>{live=false}},[]);

  const mine=useMemo(()=>{
    if(isAdmin)return prospects;
    const f=prospects.filter(p=>(p.assigned_to||'').toLowerCase()===me.toLowerCase());
    return f.length?f:prospects;
  },[prospects,me,isAdmin]);

  const overdue=useMemo(()=>mine.filter(p=>p.next_follow_up&&p.next_follow_up<today)
    .sort((a,b)=>a.next_follow_up<b.next_follow_up?-1:1),[mine,today]);
  const dueToday=useMemo(()=>mine.filter(p=>p.next_follow_up===today),[mine,today]);
  const hot=useMemo(()=>mine.filter(p=>p.priority==='High'&&!['Won','Lost','Not Interested'].includes(p.status)),[mine]);
  const active=useMemo(()=>mine.filter(p=>!['Won','Lost','Not Interested'].includes(p.status)),[mine]);
  const geo=useMemo(()=>mine.filter(p=>p.latitude&&p.longitude)
    .map(p=>({...p,dist:haversine(HQ.lat,HQ.lng,p.latitude,p.longitude)}))
    .sort((a,b)=>a.dist-b.dist),[mine]);

  const hour=new Date().getHours();
  const part=hour<12?'Good morning':hour<18?'Good afternoon':'Good evening';
  const dateStr=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});

  const myReorders=reorderSignals.filter(r=>isAdmin||(r.rep_name||'').toLowerCase()===me.toLowerCase());
  const myAR=arSignals.filter(r=>isAdmin||(r.rep_name||'').toLowerCase()===me.toLowerCase());
  const dueReorders=myReorders.filter(r=>['Due','Overdue'].includes(r.reorder_status)).sort((a,b)=>b.days_since_last_order-a.days_since_last_order);
  const actionableAR=myAR.filter(r=>r.is_overdue||(r.next_follow_up_date&&r.next_follow_up_date<=today)).sort((a,b)=>b.days_past_due-a.days_past_due);
  const nbas=[];
  actionableAR.slice(0,2).forEach(i=>nbas.push({kind:'risk',icon:'$',title:i.account_name+' has '+fmtFull$(i.balance_due)+' outstanding',desc:i.is_overdue?i.days_past_due+' days past due':'Collection follow-up due today',cta:'Open AR',dest:'sales'}));
  dueReorders.slice(0,3).forEach(r=>nbas.push({kind:r.reorder_status==='Overdue'?'risk':'warn',icon:'↻',title:r.account_name+' is ready for a reorder',desc:r.days_since_last_order+' days since last order'+(r.avg_reorder_days?' · '+r.avg_reorder_days+' day cadence':''),cta:'Open reorders',dest:'sales'}));
  overdue.slice(0,Math.max(0,4-nbas.length)).forEach(p=>nbas.push({kind:'risk',icon:'!',title:`${p.business_name} needs a follow-up`,
    desc:`Overdue since ${fmtDS(p.next_follow_up)}${p.county?` · ${p.county} County`:p.city?` · ${p.city}`:''}`,cta:'Open account',dest:'accounts'}));
  dueToday.slice(0,3).forEach(p=>nbas.push({kind:'warn',icon:'↻',title:`${p.business_name} · due today`,
    desc:`Scheduled follow-up${p.city?` · ${p.city}`:''}`,cta:'Log a visit',dest:'accounts'}));
  if(nbas.length<4)hot.slice(0,4-nbas.length).forEach(p=>nbas.push({kind:'go',icon:'◎',title:`${p.business_name} is high priority`,
    desc:`${p.status}${p.county?` · ${p.county} County`:''}`,cta:'View account',dest:'accounts'}));
  if(!nbas.length)nbas.push({kind:'go',icon:'✦',title:'You are all caught up',
    desc:'No overdue or due-today follow-ups. Plan your next route and hit your top accounts.',cta:'Build a route',dest:'routes'});

  const kindStyle={
    go:{bar:P.teal,bg:P.tealL,fg:P.teal},
    warn:{bar:P.amber,bg:P.amberL,fg:P.amber},
    risk:{bar:P.rose,bg:P.roseL,fg:P.rose},
  };
  const Stat=({n,l})=>(
    <div style={{flex:1,background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.12)',borderRadius:14,padding:'12px 14px'}}>
      <div className="tnum" style={{fontSize:24,fontWeight:900,color:'#fff',lineHeight:1}}>{n}</div>
      <div style={{fontSize:10,color:'rgba(255,255,255,.6)',fontWeight:700,textTransform:'uppercase',letterSpacing:'.4px',marginTop:4}}>{l}</div>
    </div>
  );

  return(
    <div className="fade">
      {/* Hero */}
      <div style={{background:'linear-gradient(150deg,#0F172A 0%,#13233B 55%,#0E3A2E 100%)',borderRadius:18,padding:'22px 24px',color:'#fff',marginBottom:18,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',width:280,height:280,borderRadius:'50%',background:'radial-gradient(circle,rgba(26,138,107,.35),transparent 70%)',top:-120,right:-80,pointerEvents:'none'}}/>
        <div style={{position:'relative'}}>
          <div style={{fontSize:12,color:'rgba(255,255,255,.6)',fontWeight:600}}>{dateStr} · {part}</div>
          <div style={{fontSize:23,fontWeight:900,letterSpacing:'-.4px',marginTop:2}}>Hey {firstName} 👋</div>
          <div style={{display:'flex',gap:10,marginTop:16,maxWidth:680,flexWrap:'wrap'}}>
            <Stat n={dueToday.length} l="Due today"/>
            <Stat n={overdue.length} l="Overdue"/>
            <Stat n={dueReorders.length} l="Reorders due"/>
            <Stat n={active.length} l={isAdmin?'Active accounts':'My active'}/>
          </div>
        </div>
      </div>

      {/* Next best actions */}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:10}}>
        <div style={{fontSize:13,fontWeight:800,textTransform:'uppercase',letterSpacing:'.6px',color:P.t3}}>Do these first</div>
        <button className="btn btn-g btn-sm" onClick={()=>go&&go('accounts')}>All accounts →</button>
      </div>
      <div className="g2" style={{marginBottom:20}}>
        {nbas.map((n,i)=>{
          const s=kindStyle[n.kind];
          return(
            <div key={i} className="card card-i" onClick={()=>go&&go(n.dest)}
              style={{display:'flex',gap:12,alignItems:'flex-start',borderLeft:`3px solid ${s.bar}`,cursor:'pointer'}}>
              <div style={{width:36,height:36,borderRadius:10,background:s.bg,color:s.fg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontWeight:900,fontSize:16}}>{n.icon}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontWeight:700,fontSize:14}}>{n.title}</div>
                <div style={{fontSize:12.5,color:P.t2,marginTop:2,lineHeight:1.45}}>{n.desc}</div>
                <div style={{fontSize:12,fontWeight:800,color:s.fg,marginTop:8}}>{n.cta} →</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Route preview + quick links */}
      <div className="g2">
        <div className="card">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
            <div style={{fontWeight:800,fontSize:14}}>Nearest accounts · from HQ</div>
            <button className="btn btn-p btn-sm" onClick={()=>go&&go('routes')}>Build route →</button>
          </div>
          {geo.length?(
            <div style={{display:'flex',flexDirection:'column'}}>
              <div style={{display:'flex',gap:11,alignItems:'center',padding:'8px 0'}}>
                <div style={{width:24,height:24,borderRadius:'50%',background:P.slate,color:'#fff',fontSize:9,fontWeight:900,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>HQ</div>
                <div style={{fontSize:12.5,fontWeight:700}}>707 N 3rd St, Minneapolis</div>
              </div>
              {geo.slice(0,5).map((p,i)=>(
                <div key={p.id} style={{display:'flex',gap:11,alignItems:'center',padding:'8px 0',borderTop:`1px dashed ${P.border}`}}>
                  <div style={{width:24,height:24,borderRadius:'50%',background:countyColor(getZone(p)),color:'#fff',fontSize:10,fontWeight:900,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{i+1}</div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontSize:12.5,fontWeight:600,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{p.business_name}</div>
                    <div style={{fontSize:10.5,color:P.t3}}>{p.county?`${p.county} County`:p.city||''}</div>
                  </div>
                  <div style={{fontSize:12,fontWeight:800,color:P.teal,flexShrink:0}}>{p.dist.toFixed(1)} mi</div>
                </div>
              ))}
            </div>
          ):(
            <Empty msg="No geocoded accounts yet. Run Geocode in the Setup tab to light up the map and routes."/>
          )}
        </div>

        <div className="card">
          <div style={{fontWeight:800,fontSize:14,marginBottom:12}}>Jump back in</div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {[
              ['territory-map','Territory Map','See your accounts across the state'],
              ['pipeline','Pipeline','Where deals stand by stage'],
              ['activity','Activity','Your recent visits and notes'],
              ['inventory','Inventory','Product stock and low-stock alerts'],
            ].map(([id,t,d])=>(
              <div key={id} onClick={()=>go&&go(id)} className="card-i"
                style={{display:'flex',gap:11,alignItems:'center',padding:'10px 12px',borderRadius:10,border:`1px solid ${P.border}`,cursor:'pointer'}}>
                <div style={{width:32,height:32,borderRadius:9,background:P.tealL,color:P.teal,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Icon name={id} size={16}/></div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:13,fontWeight:700}}>{t}</div>
                  <div style={{fontSize:11.5,color:P.t3}}>{d}</div>
                </div>
                <span style={{color:P.t3,fontSize:16}}>›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App({user,onLogout}){
  const isAdmin=user.role==='admin';
  const [tab,setTab]=useState('today');
  const [drawerOpen,setDrawerOpen]=useState(false);
  const [collapsed,setCollapsed]=useState(false);
  useEffect(()=>{try{if(localStorage.getItem('lagom_sidebar_collapsed')==='1')setCollapsed(true);}catch{}},[]);
  const toggleCollapsed=()=>setCollapsed(c=>{const n=!c;try{localStorage.setItem('lagom_sidebar_collapsed',n?'1':'0');}catch{}return n;});
  const [prospects,setProspects]=useState([]);
  const [pLoading,setPLoading]=useState(true);

  const loadProspects=useCallback(async()=>{
    const{data}=await supabase.from('prospects').select('*').order('business_name');
    setProspects(data||[]);setPLoading(false);
  },[]);

  useEffect(()=>{loadProspects();},[loadProspects]);

  const overdueCnt=useMemo(()=>prospects.filter(p=>p.next_follow_up&&p.next_follow_up<todayStr()).length,[prospects]);

  const visibleTabs=useMemo(()=>ALL_TABS.filter(t=>!t.adminOnly||isAdmin),[isAdmin]);

  const tp={prospects,reload:loadProspects,user,go:setTab};

  const renderTab=()=>{
    if(pLoading)return <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16,padding:60}}><Spinner size={28}/><div style={{color:P.t3,fontSize:13}}>Loading CRM data…</div></div>;
    const tabs={
      today:           <TodayTab {...tp}/>,
      overview:        <OverviewTab {...tp}/>,
      accounts:        <AccountsTab {...tp}/>,
      pipeline:        <PipelineTab {...tp}/>,
      territories:     <TerritoriesTab {...tp}/>,
      'territory-map': <TerritoryMapTab {...tp}/>,
      routes:          <RoutesTab {...tp}/>,
      orders:          <OrdersTab {...tp}/>,
      sales:           <SalesWorkspace supabase={supabase} {...tp}/>,
      events:          <EventsTab {...tp}/>,
      activity:        <ActivityTab {...tp}/>,
      commissions:     <CommissionsTab {...tp}/>,
      inventory:       <InventoryTab {...tp}/>,
      'lagom-ai':      <LagomAITab {...tp}/>,
      settings:        isAdmin?<SettingsTab {...tp}/>:<div/>,
      setup:           isAdmin?<SetupTab {...tp}/>:<div/>,
    };
    return tabs[tab]||<div/>;
  };

  const NavBtn=({t,vertical=false,collapsed=false})=>{
    const active=tab===t.id;
    const showBadge=t.hasBadge&&overdueCnt>0;
    if(vertical){
      return(
        <button onClick={()=>{setTab(t.id);setDrawerOpen(false);}} title={collapsed?t.label:undefined} style={{display:'flex',alignItems:'center',gap:collapsed?0:10,padding:collapsed?'11px 0':'10px 16px',width:'100%',background:active?'rgba(255,255,255,.13)':'transparent',border:'none',borderLeft:active?'3px solid #4ECFA8':'3px solid transparent',color:active?'#fff':'rgba(255,255,255,.6)',fontSize:13,fontWeight:active?700:500,cursor:'pointer',transition:'all .12s',textAlign:'left',letterSpacing:'-.1px',justifyContent:collapsed?'center':'flex-start',position:'relative',whiteSpace:'nowrap',overflow:'hidden'}}>
          <Icon name={t.id} size={collapsed?20:17} style={{opacity:active?1:.75}}/>
          {!collapsed&&t.label}
          {!collapsed&&showBadge&&<span style={{marginLeft:'auto',background:P.rose,color:'#fff',borderRadius:10,padding:'1px 6px',fontSize:10,fontWeight:900}}>{overdueCnt}</span>}
          {!collapsed&&!showBadge&&t.id==='lagom-ai'&&<span style={{marginLeft:'auto',fontSize:9,fontWeight:900,color:'#4ECFA8',background:'rgba(78,207,168,.18)',borderRadius:8,padding:'2px 6px',letterSpacing:'.3px'}}>AI</span>}
          {!collapsed&&t.adminOnly&&<span style={{marginLeft:showBadge?4:'auto',fontSize:9,color:'rgba(255,255,255,.25)',fontWeight:700}}>ADMIN</span>}
          {collapsed&&showBadge&&<span style={{position:'absolute',top:7,right:11,width:7,height:7,borderRadius:'50%',background:P.rose}}/>}
        </button>
      );
    }
    return(
      <button onClick={()=>{setTab(t.id);setDrawerOpen(false);}} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:2,padding:'6px 2px',background:'none',border:'none',color:active?'#4ECFA8':'rgba(255,255,255,.5)',fontSize:12,flex:1,minWidth:0,cursor:'pointer',position:'relative'}}>
        <Icon name={t.id} size={20}/>
        <span style={{fontSize:9,fontWeight:700,maxWidth:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{t.label.split(' ')[0]}</span>
        {showBadge&&<span style={{position:'absolute',top:2,right:2,background:P.rose,color:'#fff',borderRadius:'50%',width:14,height:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:8,fontWeight:900}}>{overdueCnt>9?'9+':overdueCnt}</span>}
      </button>
    );
  };

  const curTab=visibleTabs.find(t=>t.id===tab)||visibleTabs[0];

  return(
    <div className="layout">
      <GlobalStyles/>

      <div className="sidebar" style={{width:collapsed?66:216}}>
        <div style={{padding:collapsed?'18px 0 14px':'18px 16px 14px',borderBottom:'1px solid rgba(255,255,255,.08)'}}>
          <div style={{display:'flex',alignItems:'center',gap:10,justifyContent:collapsed?'center':'flex-start'}}>
            <img src="/logo.png" alt="Lagom" style={{height:34,flexShrink:0}}/>
            {!collapsed&&<div>
              <div style={{fontWeight:900,fontSize:14,color:'#fff',letterSpacing:'-.3px'}}>Lagom CRM</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,.45)',letterSpacing:'.2px'}}>Minnesota Sales Operations</div>
            </div>}
          </div>
        </div>
        <nav style={{flex:1,padding:'8px 0'}}>
          {visibleTabs.map(t=><NavBtn key={t.id} t={t} vertical collapsed={collapsed}/>)}
        </nav>
        <button onClick={toggleCollapsed} title={collapsed?'Expand sidebar':'Collapse sidebar'} style={{display:'flex',alignItems:'center',justifyContent:collapsed?'center':'flex-start',gap:10,padding:collapsed?'10px 0':'10px 16px',width:'100%',background:'none',border:'none',borderTop:'1px solid rgba(255,255,255,.06)',color:'rgba(255,255,255,.45)',fontSize:12,fontWeight:600,cursor:'pointer'}}>
          <Icon name="chevron-left" size={18} style={{transform:collapsed?'rotate(180deg)':'none',transition:'transform .2s'}}/>
          {!collapsed&&'Collapse'}
        </button>
        <div style={{padding:collapsed?'12px 8px':14,borderTop:'1px solid rgba(255,255,255,.08)'}}>
          {collapsed?(
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:10}}>
              <div style={{width:32,height:32,borderRadius:'50%',background:P.teal,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:'#fff',fontSize:13}} title={user.name}>{user.name[0]}</div>
              <button onClick={onLogout} title="Sign Out" style={{display:'flex',alignItems:'center',justifyContent:'center',width:34,height:34,borderRadius:8,background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.55)',cursor:'pointer'}}><Icon name="logout" size={16}/></button>
            </div>
          ):(
            <>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                <div style={{width:32,height:32,borderRadius:'50%',background:P.teal,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:'#fff',fontSize:13,flexShrink:0}}>{user.name[0]}</div>
                <div style={{minWidth:0}}>
                  <div style={{fontWeight:700,color:'#fff',fontSize:13,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{user.name}</div>
                  <div style={{fontSize:10,color:'rgba(255,255,255,.4)',textTransform:'capitalize'}}>{user.role}</div>
                </div>
              </div>
              <button className="btn btn-sm" onClick={onLogout} style={{width:'100%',justifyContent:'center',background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.55)',fontSize:12}}>Sign Out</button>
            </>
          )}
        </div>
      </div>

      <div className="main">
        <div className="topbar">
          <button className="hamburger" onClick={()=>setDrawerOpen(true)} aria-label="Menu">☰</button>
          <span style={{fontWeight:800,fontSize:15,color:P.text,display:'inline-flex',alignItems:'center',gap:8}}><Icon name={curTab?.id} size={18} style={{color:P.teal}}/> {curTab?.label}</span>
          {pLoading&&<Spinner size={16}/>}
          <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:10}}>
            {overdueCnt>0&&<div style={{background:P.roseL,color:P.rose,borderRadius:20,padding:'2px 10px',fontSize:11,fontWeight:700}}>{overdueCnt} overdue</div>}
            <div style={{fontSize:11,color:P.t3}}>{prospects.length} accounts</div>
            <div style={{width:8,height:8,borderRadius:'50%',background:P.teal,boxShadow:`0 0 6px ${P.teal}`}}/>
          </div>
        </div>
        <div className="content"><div className="content-inner">{renderTab()}</div></div>
      </div>

      <div className="mob-nav">
        {['today','accounts','routes','orders','sales'].map(id=>visibleTabs.find(t=>t.id===id)).filter(Boolean).map(t=><NavBtn key={t.id} t={t}/>)}
        <button onClick={()=>setDrawerOpen(true)} style={{display:'flex',flexDirection:'column',alignItems:'center',gap:2,padding:'6px 2px',background:'none',border:'none',color:'rgba(255,255,255,.5)',fontSize:12,flex:1,minWidth:0,cursor:'pointer'}}>
          <Icon name="menu" size={20}/>
          <span style={{fontSize:9,fontWeight:700}}>More</span>
        </button>
      </div>

      {drawerOpen&&(
        <>
          <div className="drawer-ov" onClick={()=>setDrawerOpen(false)}/>
          <div className="drawer">
            <div style={{padding:'18px 16px 14px',borderBottom:'1px solid rgba(255,255,255,.08)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <img src="/logo.png" alt="Lagom" style={{height:32,flexShrink:0}}/>
                <div style={{fontWeight:900,fontSize:14,color:'#fff',letterSpacing:'-.3px'}}>Lagom CRM</div>
              </div>
              <button onClick={()=>setDrawerOpen(false)} aria-label="Close" style={{background:'none',border:'none',color:'rgba(255,255,255,.6)',fontSize:20,cursor:'pointer',lineHeight:1}}>×</button>
            </div>
            <nav style={{flex:1,padding:'8px 0'}}>
              {visibleTabs.map(t=><NavBtn key={t.id} t={t} vertical/>)}
            </nav>
            <div style={{padding:14,borderTop:'1px solid rgba(255,255,255,.08)'}}>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                <div style={{width:32,height:32,borderRadius:'50%',background:P.teal,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900,color:'#fff',fontSize:13,flexShrink:0}}>{user.name[0]}</div>
                <div style={{minWidth:0}}>
                  <div style={{fontWeight:700,color:'#fff',fontSize:13,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{user.name}</div>
                  <div style={{fontSize:10,color:'rgba(255,255,255,.4)',textTransform:'capitalize'}}>{user.role}</div>
                </div>
              </div>
              <button className="btn btn-sm" onClick={onLogout} style={{width:'100%',justifyContent:'center',background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.12)',color:'rgba(255,255,255,.55)',fontSize:12}}>Sign Out</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Root ─────────────────────────────────────────────────────────────────── */
export default function Page(){
  const [user,setUser]=useState(null);
  if(!user)return <Login onLogin={setUser}/>;
  if(user.role==='investor')return <InvestorDashboard user={user} onLogout={()=>setUser(null)}/>;
  return <App user={user} onLogout={()=>setUser(null)}/>;
}
