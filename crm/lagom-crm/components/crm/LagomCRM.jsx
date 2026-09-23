'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Search, Plus, X, Phone, Mail, MapPin, TrendingUp, Users, BarChart3, Target, Clock, DollarSign, RefreshCw, ChevronDown, Activity, AlertCircle, CheckCircle, ArrowUpRight } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const STATUSES = ['New','Contacted','Follow Up','Meeting Set','Proposal Sent','Won','Lost','Not Interested'];
const PRIORITIES = ['High','Medium','Low'];
const ZONES = ['All Territories','North Loop/Downtown','Uptown/South Minneapolis','Northeast Minneapolis','St. Paul','Hopkins/West Suburbs'];
const statusColors = {New:'#6366f1',Contacted:'#2563eb','Follow Up':'#d97706','Meeting Set':'#16a34a','Proposal Sent':'#8b5cf6',Won:'#059669',Lost:'#dc2626','Not Interested':'#6b7280'};
const priorityColors = {High:'#dc2626',Medium:'#d97706',Low:'#6b7280'};
const zoneColors = {'North Loop/Downtown':'#15803d','Uptown/South Minneapolis':'#0d9488','Northeast Minneapolis':'#2563eb','St. Paul':'#7c3aed','Hopkins/West Suburbs':'#c2410c'};

function getZone(p){
  const city=p.city||'';const addr=p.address||'';const notes=p.notes||'';
  if(city==='Minneapolis'&&(addr.match(/Washington|Marquette|Glenwood|N 6th|9th St|3rd Ave|1st St|Hennepin Ave N|Plymouth Ave/i)||notes.includes('North Loop')))return'North Loop/Downtown';
  if(city==='Minneapolis'&&(addr.match(/Lake St|Lyndale|France Ave|Hiawatha|Minnehaha|Hennepin Ave S|W 26th|W Lake|Uptown/i)||notes.includes('Uptown')))return'Uptown/South Minneapolis';
  if(city==='Minneapolis'&&(addr.match(/Central Ave|NE|E Hennepin|University Ave NE/i)||notes.includes('Northeast')))return'Northeast Minneapolis';
  if(city==='Saint Paul'||city==='St. Paul'||city==='St Paul')return'St. Paul';
  if(['Hopkins','St. Louis Park','Plymouth','Wayzata','Minnetonka','Excelsior','Eden Prairie','Bloomington','Long Lake','Maple Grove','Shakopee'].some(c=>city.includes(c)))return'Hopkins/West Suburbs';
  if(city==='Minneapolis')return'North Loop/Downtown';
  return city||'Other';
}

function Badge({label,color,small}){
  const c=color||'#6b7280';
  return <span style={{display:'inline-block',padding:small?'1px 6px':'2px 10px',borderRadius:12,fontSize:small?10:11,fontWeight:600,background:`color-mix(in srgb, ${c} 14%, white)`,color:c,border:`1px solid ${c}25`,whiteSpace:'nowrap'}}>{label}</span>
}

const inputStyle={width:'100%',padding:'8px 12px',border:'1px solid #d1d5db',borderRadius:8,fontSize:13,fontFamily:'inherit',boxSizing:'border-box',outline:'none'};
const selectStyle={...inputStyle,background:'#fff'};

export default function LagomCRM(){
  const[prospects,setProspects]=useState([]);
  const[loading,setLoading]=useState(true);
  const[view,setView]=useState('dashboard');
  const[search,setSearch]=useState('');
  const[fStatus,setFStatus]=useState('All');
  const[fPriority,setFPriority]=useState('All');
  const[fZone,setFZone]=useState('All Territories');
  const[fRep,setFRep]=useState('All');
  const[sel,setSel]=useState(null);
  const[editing,setEditing]=useState(false);
  const[form,setForm]=useState({});
  const[acts,setActs]=useState([]);
  const[showAct,setShowAct]=useState(false);
  const[af,setAF]=useState({activity_type:'Visit',description:'',outcome:'',next_action:'',next_action_date:''});
  const[showNew,setShowNew]=useState(false);
  const[newP,setNewP]=useState({business_name:'',contact_name:'',phone:'',email:'',address:'',city:'',state:'MN',status:'New',priority:'Medium',assigned_to:''});

  const load=useCallback(async()=>{
    setLoading(true);
    const{data}=await supabase.from('prospects').select('*').order('priority',{ascending:true}).order('business_name');
    if(data)setProspects(data);
    setLoading(false);
  },[]);

  useEffect(()=>{load()},[load]);

  const selectProspect=async(p)=>{
    setSel(p);setEditing(false);setShowAct(false);
    const{data}=await supabase.from('sales_activities').select('*').eq('prospect_id',p.id).order('activity_date',{ascending:false});
    setActs(data||[]);
  };

  const updateProspect=async(id,updates)=>{
    await supabase.from('prospects').update(updates).eq('id',id);
    await load();
    if(sel?.id===id)setSel(prev=>({...prev,...updates}));
  };

  const logActivity=async()=>{
    await supabase.from('sales_activities').insert({...af,prospect_id:sel.id,performed_by:'Field Rep'});
    const updates={last_contact_date:new Date().toISOString().split('T')[0]};
    if(af.next_action_date){updates.next_follow_up=af.next_action_date;updates.status='Follow Up';}
    else updates.status='Contacted';
    await supabase.from('prospects').update(updates).eq('id',sel.id);
    await load();
    const{data}=await supabase.from('sales_activities').select('*').eq('prospect_id',sel.id).order('activity_date',{ascending:false});
    setActs(data||[]);
    setSel(prev=>({...prev,...updates}));
    setAF({activity_type:'Visit',description:'',outcome:'',next_action:'',next_action_date:''});
    setShowAct(false);
  };

  const addProspect=async()=>{
    const{error}=await supabase.from('prospects').insert(newP);
    if(!error){setShowNew(false);setNewP({business_name:'',contact_name:'',phone:'',email:'',address:'',city:'',state:'MN',status:'New',priority:'Medium',assigned_to:''});await load();}
  };

  const reps=useMemo(()=>[...new Set(prospects.map(p=>p.assigned_to).filter(Boolean))].sort(),[prospects]);
  const statusCounts=useMemo(()=>{const c={};STATUSES.forEach(s=>{c[s]=prospects.filter(p=>p.status===s).length});return c},[prospects]);
  const today=new Date().toISOString().split('T')[0];
  const overdue=prospects.filter(p=>p.next_follow_up&&p.next_follow_up<today);
  const won=prospects.filter(p=>p.status==='Won');
  const active=prospects.filter(p=>!['Won','Lost','Not Interested'].includes(p.status));

  const zoneCounts=useMemo(()=>{
    const c={};ZONES.slice(1).forEach(z=>{c[z]=prospects.filter(p=>getZone(p)===z).length});
    return c;
  },[prospects]);

  const filtered=prospects.filter(p=>{
    if(search&&!(p.business_name||'').toLowerCase().includes(search.toLowerCase())&&!(p.contact_name||'').toLowerCase().includes(search.toLowerCase())&&!(p.address||'').toLowerCase().includes(search.toLowerCase()))return false;
    if(fStatus!=='All'&&p.status!==fStatus)return false;
    if(fPriority!=='All'&&p.priority!==fPriority)return false;
    if(fRep!=='All'&&(p.assigned_to||'')!==fRep)return false;
    if(fZone!=='All Territories'&&getZone(p)!==fZone)return false;
    return true;
  });

  const filteredByView=useMemo(()=>{
    if(view==='follow-ups')return filtered.filter(p=>p.status==='Follow Up'||p.next_follow_up);
    if(view==='active')return filtered.filter(p=>p.status==='Won');
    if(view==='pipeline')return filtered.filter(p=>!['Won','Lost','Not Interested'].includes(p.status));
    return filtered;
  },[view,filtered]);

  if(loading)return<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',fontFamily:"'DM Sans',system-ui",color:'#6b7280',fontSize:15,gap:8}}><RefreshCw size={18} className="spin"/>Loading Lagom CRM...</div>;

  /* ── Detail Panel ── */
  const renderDetail=()=>{
    if(!sel)return null;
    return(
      <div style={{position:'fixed',top:0,right:0,width:480,height:'100vh',background:'#fff',borderLeft:'1px solid #e5e7eb',zIndex:100,overflowY:'auto',boxShadow:'-4px 0 20px rgba(0,0,0,0.08)'}}>
        <div style={{padding:'20px 24px',borderBottom:'1px solid #e5e7eb',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h3 style={{margin:0,fontSize:18,fontWeight:700}}>{sel.business_name}</h3>
          <button onClick={()=>setSel(null)} style={{background:'none',border:'none',cursor:'pointer',color:'#6b7280'}}><X size={20}/></button>
        </div>
        <div style={{padding:'20px 24px'}}>
          <div style={{display:'flex',gap:8,marginBottom:16,flexWrap:'wrap'}}>
            <Badge label={sel.status} color={statusColors[sel.status]}/>
            <Badge label={sel.priority} color={priorityColors[sel.priority]}/>
            <Badge label={getZone(sel)} color={zoneColors[getZone(sel)]||'#6b7280'} small/>
          </div>
          {!editing?(
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {[['Contact',sel.contact_name],['Phone',sel.phone],['Email',sel.email],['Address',`${sel.address||''}${sel.city?', '+sel.city:''}${sel.state?', '+sel.state:''}`],['Assigned To',sel.assigned_to||'Unassigned'],['Last Contact',sel.last_contact_date||'Never'],['Next Follow-Up',sel.next_follow_up||'Not set']].map(([lbl,val])=>(
                <div key={lbl}>
                  <span style={{fontSize:11,color:'#6b7280',textTransform:'uppercase',letterSpacing:'0.5px'}}>{lbl}</span>
                  <div style={{fontSize:14,color:lbl==='Next Follow-Up'&&sel.next_follow_up&&sel.next_follow_up<today?'#dc2626':'#111827',fontWeight:lbl==='Assigned To'&&!sel.assigned_to?400:500}}>{val||'\u2014'}</div>
                </div>
              ))}
              {sel.notes&&<div><span style={{fontSize:11,color:'#6b7280',textTransform:'uppercase',letterSpacing:'0.5px'}}>Notes</span><div style={{fontSize:13,color:'#374151',whiteSpace:'pre-wrap'}}>{sel.notes}</div></div>}
              <div style={{display:'flex',gap:8,marginTop:8}}>
                <button onClick={()=>{setEditing(true);setForm({...sel})}} style={{padding:'8px 20px',background:'#1a7731',color:'#fff',border:'none',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer'}}>Edit Prospect</button>
                <button onClick={()=>setShowAct(!showAct)} style={{padding:'8px 20px',background:'#f3f4f6',color:'#374151',border:'1px solid #d1d5db',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer'}}>{showAct?'Cancel':'+ Log Activity'}</button>
              </div>
            </div>
          ):(
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {[['Business Name','business_name'],['Contact','contact_name'],['Phone','phone'],['Email','email'],['Address','address'],['City','city']].map(([lbl,key])=>(
                <div key={key}><label style={{fontSize:11,color:'#6b7280'}}>{lbl}</label><input value={form[key]||''} onChange={e=>setForm({...form,[key]:e.target.value})} style={inputStyle}/></div>
              ))}
              <div style={{display:'flex',gap:8}}>
                <div style={{flex:1}}><label style={{fontSize:11,color:'#6b7280'}}>Status</label><select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} style={selectStyle}>{STATUSES.map(s=><option key={s}>{s}</option>)}</select></div>
                <div style={{flex:1}}><label style={{fontSize:11,color:'#6b7280'}}>Priority</label><select value={form.priority} onChange={e=>setForm({...form,priority:e.target.value})} style={selectStyle}>{PRIORITIES.map(p=><option key={p}>{p}</option>)}</select></div>
              </div>
              <div><label style={{fontSize:11,color:'#6b7280'}}>Assigned To</label><input value={form.assigned_to||''} onChange={e=>setForm({...form,assigned_to:e.target.value})} placeholder="e.g. Jess, Roman" style={inputStyle}/></div>
              <div><label style={{fontSize:11,color:'#6b7280'}}>Next Follow-Up</label><input type="date" value={form.next_follow_up||''} onChange={e=>setForm({...form,next_follow_up:e.target.value})} style={inputStyle}/></div>
              <div><label style={{fontSize:11,color:'#6b7280'}}>Notes</label><textarea value={form.notes||''} onChange={e=>setForm({...form,notes:e.target.value})} rows={3} style={{...inputStyle,resize:'vertical'}}/></div>
              <div style={{display:'flex',gap:8}}>
                <button onClick={async()=>{const{id,created_at,...rest}=form;await updateProspect(id,rest);setEditing(false)}} style={{padding:'8px 20px',background:'#1a7731',color:'#fff',border:'none',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer'}}>Save</button>
                <button onClick={()=>setEditing(false)} style={{padding:'8px 20px',background:'#f3f4f6',color:'#374151',border:'1px solid #d1d5db',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer'}}>Cancel</button>
              </div>
            </div>
          )}
          {showAct&&!editing&&(
            <div style={{marginTop:16,padding:16,background:'#f9fafb',borderRadius:10,border:'1px solid #e5e7eb'}}>
              <h4 style={{margin:'0 0 12px',fontSize:14,fontWeight:600}}>Log Activity</h4>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                <select value={af.activity_type} onChange={e=>setAF({...af,activity_type:e.target.value})} style={selectStyle}>{['Call','Email','Visit','Meeting','Follow Up','Note'].map(t=><option key={t}>{t}</option>)}</select>
                <textarea value={af.description} onChange={e=>setAF({...af,description:e.target.value})} placeholder="What happened?" rows={2} style={{...inputStyle,resize:'vertical'}}/>
                <input value={af.outcome} onChange={e=>setAF({...af,outcome:e.target.value})} placeholder="Outcome" style={inputStyle}/>
                <input value={af.next_action} onChange={e=>setAF({...af,next_action:e.target.value})} placeholder="Next action" style={inputStyle}/>
                <input type="date" value={af.next_action_date} onChange={e=>setAF({...af,next_action_date:e.target.value})} style={inputStyle}/>
                <button onClick={logActivity} style={{padding:'8px 20px',background:'#1a7731',color:'#fff',border:'none',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer'}}>Log Activity</button>
              </div>
            </div>
          )}
          <div style={{marginTop:20,borderTop:'1px solid #e5e7eb',paddingTop:16}}>
            <h4 style={{margin:'0 0 12px',fontSize:14,fontWeight:600}}>Activity History</h4>
            {acts.length===0?<div style={{color:'#9ca3af',fontSize:13,textAlign:'center',padding:20}}>No activities logged yet</div>:
            acts.map(a=>(
              <div key={a.id} style={{padding:'10px 0',borderBottom:'1px solid #f3f4f6'}}>
                <div style={{display:'flex',gap:6,alignItems:'center',marginBottom:4}}>
                  <Badge label={a.activity_type} color="#6366f1" small/>
                  <span style={{fontSize:11,color:'#9ca3af'}}>{new Date(a.activity_date).toLocaleDateString()}</span>
                </div>
                {a.description&&<div style={{fontSize:12,color:'#374151'}}>{a.description}</div>}
                {a.outcome&&<div style={{fontSize:11,color:'#6b7280',marginTop:2}}>Outcome: {a.outcome}</div>}
                {a.next_action&&<div style={{fontSize:11,color:'#2563eb',marginTop:2}}>Next: {a.next_action}{a.next_action_date?` (${a.next_action_date})`:''}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  /* ── New Prospect Modal ── */
  const renderNewModal=()=>{
    if(!showNew)return null;
    return(
      <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',zIndex:200,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{background:'#fff',borderRadius:16,padding:32,width:520,maxHeight:'80vh',overflowY:'auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
            <h3 style={{margin:0,fontSize:20,fontWeight:700}}>Add New Prospect</h3>
            <button onClick={()=>setShowNew(false)} style={{background:'none',border:'none',cursor:'pointer',color:'#6b7280'}}><X size={20}/></button>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <div><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>Business Name *</label><input value={newP.business_name} onChange={e=>setNewP({...newP,business_name:e.target.value})} style={inputStyle}/></div>
            <div style={{display:'flex',gap:12}}>
              <div style={{flex:1}}><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>Contact Name</label><input value={newP.contact_name} onChange={e=>setNewP({...newP,contact_name:e.target.value})} style={inputStyle}/></div>
              <div style={{flex:1}}><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>Phone</label><input value={newP.phone} onChange={e=>setNewP({...newP,phone:e.target.value})} style={inputStyle}/></div>
            </div>
            <div><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>Email</label><input value={newP.email} onChange={e=>setNewP({...newP,email:e.target.value})} style={inputStyle}/></div>
            <div style={{display:'flex',gap:12}}>
              <div style={{flex:2}}><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>Address</label><input value={newP.address} onChange={e=>setNewP({...newP,address:e.target.value})} style={inputStyle}/></div>
              <div style={{flex:1}}><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>City</label><input value={newP.city} onChange={e=>setNewP({...newP,city:e.target.value})} style={inputStyle}/></div>
            </div>
            <div style={{display:'flex',gap:12}}>
              <div style={{flex:1}}><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>Status</label><select value={newP.status} onChange={e=>setNewP({...newP,status:e.target.value})} style={selectStyle}>{STATUSES.map(s=><option key={s}>{s}</option>)}</select></div>
              <div style={{flex:1}}><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>Priority</label><select value={newP.priority} onChange={e=>setNewP({...newP,priority:e.target.value})} style={selectStyle}>{PRIORITIES.map(p=><option key={p}>{p}</option>)}</select></div>
            </div>
            <div><label style={{fontSize:12,color:'#6b7280',display:'block',marginBottom:4}}>Assign To</label><input value={newP.assigned_to} onChange={e=>setNewP({...newP,assigned_to:e.target.value})} placeholder="e.g. Jess, Roman" style={inputStyle}/></div>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <button onClick={addProspect} disabled={!newP.business_name} style={{padding:'8px 20px',background:'#1a7731',color:'#fff',border:'none',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer',opacity:newP.business_name?1:0.5}}>Add Prospect</button>
              <button onClick={()=>setShowNew(false)} style={{padding:'8px 20px',background:'#f3f4f6',color:'#374151',border:'1px solid #d1d5db',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer'}}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* ── Dashboard ── */
  const renderDashboard=()=>{
    const convRate=prospects.length>0?((won.length/prospects.length)*100).toFixed(1):0;
    const topZones=Object.entries(zoneCounts).sort((a,b)=>b[1]-a[1]);
    const repCounts={};
    reps.forEach(r=>{repCounts[r]=prospects.filter(p=>p.assigned_to===r).length});
    const unassigned=prospects.filter(p=>!p.assigned_to).length;

    return(
      <div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
          <div>
            <h2 style={{margin:0,fontSize:22,fontWeight:700,color:'#111827'}}>Sales Analytics & Pipeline</h2>
            <p style={{margin:'4px 0 0',fontSize:13,color:'#9ca3af'}}>{new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
          </div>
          <button onClick={load} style={{display:'flex',alignItems:'center',gap:6,padding:'8px 16px',background:'#fff',border:'1px solid #d1d5db',borderRadius:8,fontSize:13,cursor:'pointer',color:'#374151'}}><RefreshCw size={14}/> Refresh</button>
        </div>

        {/* Stat Cards */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:14,marginBottom:24}}>
          <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:'18px 22px'}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
              <div style={{width:36,height:36,borderRadius:10,background:'#f0fdf4',display:'flex',alignItems:'center',justifyContent:'center'}}><TrendingUp size={18} color="#1a7731"/></div>
              <span style={{fontSize:11,fontWeight:600,color:'#6b7280',textTransform:'uppercase',letterSpacing:'0.5px'}}>Pipeline Value</span>
            </div>
            <div style={{fontSize:26,fontWeight:700,color:'#111827'}}>{prospects.length}</div>
            <div style={{fontSize:12,color:'#6b7280',marginTop:2}}>{active.length} in active pipeline</div>
          </div>
          <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:'18px 22px'}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
              <div style={{width:36,height:36,borderRadius:10,background:'#eef2ff',display:'flex',alignItems:'center',justifyContent:'center'}}><Activity size={18} color="#6366f1"/></div>
              <span style={{fontSize:11,fontWeight:600,color:'#6b7280',textTransform:'uppercase',letterSpacing:'0.5px'}}>Conversion Rate</span>
            </div>
            <div style={{fontSize:26,fontWeight:700,color:'#111827'}}>{convRate}%</div>
            <div style={{fontSize:12,color:'#059669',marginTop:2}}>{won.length} won accounts</div>
          </div>
          <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:'18px 22px'}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
              <div style={{width:36,height:36,borderRadius:10,background:'#fff7ed',display:'flex',alignItems:'center',justifyContent:'center'}}><Users size={18} color="#c2410c"/></div>
              <span style={{fontSize:11,fontWeight:600,color:'#6b7280',textTransform:'uppercase',letterSpacing:'0.5px'}}>Active Prospects</span>
            </div>
            <div style={{fontSize:26,fontWeight:700,color:'#111827'}}>{active.length}</div>
            <div style={{fontSize:12,color:'#6b7280',marginTop:2}}>In current pipeline</div>
          </div>
          <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:'18px 22px'}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
              <div style={{width:36,height:36,borderRadius:10,background:'#fef2f2',display:'flex',alignItems:'center',justifyContent:'center'}}><AlertCircle size={18} color="#dc2626"/></div>
              <span style={{fontSize:11,fontWeight:600,color:'#6b7280',textTransform:'uppercase',letterSpacing:'0.5px'}}>High Priority</span>
            </div>
            <div style={{fontSize:26,fontWeight:700,color:'#111827'}}>{prospects.filter(p=>p.priority==='High').length}</div>
            <div style={{fontSize:12,color:'#dc2626',marginTop:2}}>{overdue.length} overdue follow-ups</div>
          </div>
        </div>

        {/* Charts Row */}
        <div style={{display:'flex',gap:20,marginBottom:24}}>
          <div style={{flex:1,background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:22}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}>
              <h3 style={{margin:0,fontSize:15,fontWeight:600}}>Status Distribution</h3>
              <span style={{fontSize:12,color:'#9ca3af'}}>{prospects.length} prospects</span>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {STATUSES.filter(s=>statusCounts[s]>0).map(s=>(
                <div key={s} style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{width:100,fontSize:12,color:'#374151',textAlign:'right'}}>{s}</div>
                  <div style={{flex:1,background:'#f3f4f6',borderRadius:4,height:22,overflow:'hidden'}}>
                    <div style={{width:`${(statusCounts[s]/prospects.length)*100}%`,height:'100%',background:statusColors[s],borderRadius:4,transition:'width 0.5s'}}/>
                  </div>
                  <div style={{width:30,fontSize:12,fontWeight:600,textAlign:'right'}}>{statusCounts[s]}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{flex:1,background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:22}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:16}}>
              <h3 style={{margin:0,fontSize:15,fontWeight:600}}>Territory Performance</h3>
              <span style={{fontSize:12,color:'#9ca3af'}}>By zone</span>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {topZones.map(([zone,count])=>(
                <div key={zone} style={{display:'flex',alignItems:'center',gap:10}}>
                  <div style={{width:100,fontSize:12,color:'#374151',textAlign:'right',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{zone.split('/')[0]}</div>
                  <div style={{flex:1,background:'#f3f4f6',borderRadius:4,height:22,overflow:'hidden'}}>
                    <div style={{width:`${(count/Math.max(...topZones.map(t=>t[1]),1))*100}%`,height:'100%',background:zoneColors[zone]||'#1a7731',borderRadius:4,transition:'width 0.5s'}}/>
                  </div>
                  <div style={{width:30,fontSize:12,fontWeight:600,textAlign:'right'}}>{count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Territory Filter + Rep Breakdown */}
        <div style={{display:'flex',gap:8,marginBottom:20,flexWrap:'wrap'}}>
          {ZONES.map(z=>(
            <button key={z} onClick={()=>{setFZone(z);setView('prospects')}} style={{padding:'6px 14px',borderRadius:20,fontSize:12,fontWeight:600,cursor:'pointer',border:'1px solid #e5e7eb',background:z==='All Territories'?'#1a7731':'#fff',color:z==='All Territories'?'#fff':'#6b7280',display:'flex',alignItems:'center',gap:4}}>
              <MapPin size={12}/>{z}
            </button>
          ))}
        </div>

        {/* Rep Breakdown */}
        <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,padding:22}}>
          <h3 style={{margin:'0 0 16px',fontSize:15,fontWeight:600}}>By Rep</h3>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {[...reps.map(r=>({label:r,value:repCounts[r]||0,color:'#1a7731'})),{label:'Unassigned',value:unassigned,color:'#9ca3af'}].map(d=>(
              <div key={d.label} style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:100,fontSize:12,color:'#374151',textAlign:'right'}}>{d.label}</div>
                <div style={{flex:1,background:'#f3f4f6',borderRadius:4,height:22,overflow:'hidden'}}>
                  <div style={{width:`${(d.value/Math.max(prospects.length,1))*100}%`,height:'100%',background:d.color,borderRadius:4}}/>
                </div>
                <div style={{width:30,fontSize:12,fontWeight:600,textAlign:'right'}}>{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  /* ── Table View ── */
  const renderTable=()=>{
    const viewLabels={prospects:'Prospect Pipeline','follow-ups':'Follow-Ups',active:'Active Accounts',pipeline:'Active Pipeline'};
    const data=filteredByView;
    return(
      <div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
          <div>
            <h2 style={{margin:0,fontSize:22,fontWeight:700}}>{viewLabels[view]}</h2>
            <span style={{fontSize:13,color:'#9ca3af'}}>{data.length} accounts</span>
          </div>
          <button onClick={()=>setShowNew(true)} style={{display:'flex',alignItems:'center',gap:6,padding:'10px 24px',background:'#1a7731',color:'#fff',border:'none',borderRadius:8,fontSize:14,fontWeight:600,cursor:'pointer'}}><Plus size={16}/> New Prospect</button>
        </div>

        <div style={{display:'flex',gap:10,marginBottom:16,flexWrap:'wrap',alignItems:'center'}}>
          <div style={{position:'relative',width:260}}>
            <Search size={16} style={{position:'absolute',left:10,top:10,color:'#9ca3af'}}/>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, contact, address..." style={{...inputStyle,paddingLeft:32}}/>
          </div>
          <select value={fZone} onChange={e=>setFZone(e.target.value)} style={{...selectStyle,width:180}}>{ZONES.map(z=><option key={z}>{z}</option>)}</select>
          <select value={fStatus} onChange={e=>setFStatus(e.target.value)} style={{...selectStyle,width:130}}><option value="All">All Statuses</option>{STATUSES.map(s=><option key={s}>{s}</option>)}</select>
          <select value={fPriority} onChange={e=>setFPriority(e.target.value)} style={{...selectStyle,width:130}}><option value="All">All Priorities</option>{PRIORITIES.map(p=><option key={p}>{p}</option>)}</select>
          <select value={fRep} onChange={e=>setFRep(e.target.value)} style={{...selectStyle,width:130}}><option value="All">All Reps</option>{reps.map(r=><option key={r}>{r}</option>)}</select>
          {(search||fZone!=='All Territories'||fStatus!=='All'||fPriority!=='All'||fRep!=='All')&&(
            <button onClick={()=>{setSearch('');setFZone('All Territories');setFStatus('All');setFPriority('All');setFRep('All')}} style={{padding:'6px 12px',background:'#f3f4f6',border:'1px solid #d1d5db',borderRadius:8,fontSize:12,cursor:'pointer'}}>Clear</button>
          )}
        </div>

        <div style={{display:'flex',gap:8,marginBottom:20,flexWrap:'wrap'}}>
          {STATUSES.filter(s=>statusCounts[s]>0).map(s=>(
            <button key={s} onClick={()=>setFStatus(fStatus===s?'All':s)} style={{padding:'4px 14px',borderRadius:20,fontSize:12,fontWeight:600,cursor:'pointer',border:fStatus===s?`2px solid ${statusColors[s]}`:'1px solid #e5e7eb',background:fStatus===s?`color-mix(in srgb, ${statusColors[s]} 12%, white)`:'#fff',color:fStatus===s?statusColors[s]:'#6b7280'}}>
              {s} ({statusCounts[s]})
            </button>
          ))}
        </div>

        <div style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:12,overflow:'hidden'}}>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
              <thead>
                <tr style={{background:'#f9fafb'}}>
                  {['Company','Contact','Territory','Phone','Status','Priority','Assigned To'].map(h=>(
                    <th key={h} style={{padding:'12px 14px',textAlign:'left',fontSize:11,fontWeight:600,color:'#6b7280',textTransform:'uppercase',letterSpacing:'0.5px'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(p=>(
                  <tr key={p.id} onClick={()=>selectProspect(p)} style={{cursor:'pointer',borderBottom:'1px solid #f3f4f6'}} onMouseEnter={e=>e.currentTarget.style.background='#f9fafb'} onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                    <td style={{padding:'12px 14px',fontWeight:600,color:'#111827'}}>{p.business_name}</td>
                    <td style={{padding:'12px 14px',color:'#374151'}}>{p.contact_name||'\u2014'}</td>
                    <td style={{padding:'12px 14px'}}><span style={{fontSize:11,color:zoneColors[getZone(p)]||'#6b7280',background:'#f3f4f6',padding:'2px 8px',borderRadius:6}}>{getZone(p)}</span></td>
                    <td style={{padding:'12px 14px',fontSize:12,color:'#6b7280'}}>{p.phone||'\u2014'}</td>
                    <td style={{padding:'12px 14px'}}><Badge label={p.status} color={statusColors[p.status]}/></td>
                    <td style={{padding:'12px 14px'}}><Badge label={p.priority} color={priorityColors[p.priority]} small/></td>
                    <td style={{padding:'12px 14px',fontSize:12,color:p.assigned_to?'#374151':'#d1d5db',fontWeight:p.assigned_to?600:400}}>{p.assigned_to||'\u2014'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {data.length===0&&<div style={{padding:40,textAlign:'center',color:'#9ca3af'}}>No accounts match your filters</div>}
        </div>
      </div>
    );
  };

  const navItems=[
    {id:'dashboard',label:'Dashboard',icon:<BarChart3 size={18}/>},
    {id:'prospects',label:'Prospects',icon:<Target size={18}/>},
    {id:'pipeline',label:'Pipeline',icon:<TrendingUp size={18}/>},
    {id:'follow-ups',label:'Follow-Ups',icon:<Clock size={18}/>},
    {id:'active',label:'Active Accounts',icon:<CheckCircle size={18}/>},
  ];

  return(
    <div style={{fontFamily:"'DM Sans',system-ui",display:'flex',height:'100vh',background:'#f9fafb',overflow:'hidden'}}>
      {/* Sidebar */}
      <div style={{width:220,background:'#fff',borderRight:'1px solid #e5e7eb',display:'flex',flexDirection:'column',flexShrink:0}}>
        <div style={{padding:'24px 20px',borderBottom:'1px solid #e5e7eb'}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:32,height:32,background:'#1a7731',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700,fontSize:14}}>L</div>
            <div>
              <div style={{fontSize:15,fontWeight:700,color:'#111827'}}>Lagom Naturals</div>
              <div style={{fontSize:11,color:'#9ca3af'}}>Sales CRM</div>
            </div>
          </div>
        </div>
        <div style={{padding:'12px 10px',flex:1}}>
          {navItems.map(item=>(
            <button key={item.id} onClick={()=>{setView(item.id);setSel(null)}} style={{width:'100%',display:'flex',alignItems:'center',gap:10,padding:'10px 12px',marginBottom:2,borderRadius:8,border:'none',cursor:'pointer',fontSize:13,fontWeight:view===item.id?600:400,color:view===item.id?'#1a7731':'#6b7280',background:view===item.id?'#f0fdf4':'transparent',textAlign:'left'}}>
              {item.icon}{item.label}
              {item.id==='follow-ups'&&overdue.length>0&&<span style={{marginLeft:'auto',background:'#dc2626',color:'#fff',borderRadius:10,padding:'1px 7px',fontSize:10,fontWeight:700}}>{overdue.length}</span>}
            </button>
          ))}
        </div>
        <div style={{padding:'16px 20px',borderTop:'1px solid #e5e7eb'}}>
          <div style={{fontSize:11,color:'#9ca3af',marginBottom:4}}>{prospects.length} prospects loaded</div>
          <div style={{fontSize:11,color:'#9ca3af'}}>{won.length} active accounts</div>
        </div>
      </div>

      {/* Main */}
      <div style={{flex:1,overflowY:'auto',padding:'28px 36px'}}>
        {view==='dashboard'&&renderDashboard()}
        {(view==='prospects'||view==='follow-ups'||view==='active'||view==='pipeline')&&renderTable()}
      </div>

      {renderDetail()}
      {renderNewModal()}
    </div>
  );
}
