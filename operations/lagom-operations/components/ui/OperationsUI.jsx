'use client';

import {Children,useEffect,useId,useRef,useState} from 'react';

import {
  AlertTriangle,
  BarChart3,
  Check,
  ChevronDown,
  Circle,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  DollarSign,
  Info,
  Percent,
  Search,
  ShoppingCart,
  Upload,
  UsersRound,
} from 'lucide-react';

export const money=value=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(Number(value)||0);
export const number=value=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(Number(value)||0);
export const percent=value=>new Intl.NumberFormat('en-US',{style:'percent',maximumFractionDigits:1}).format(Number(value)||0);
export const shortDate=value=>{
  if(!value)return '—';
  const d=new Date(String(value).slice(0,10)+'T12:00:00');
  return Number.isNaN(d.getTime())?'—':d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
};
// Keep the canonical invoice key intact for data operations while presenting a
// concise, human-readable number everywhere in the interface.
export const displayInvoiceNumber=value=>{
  const invoice=String(value??'').trim();
  if(!invoice)return '—';
  return '#'+invoice.replace(/^INV-/i,'').replace(/^#/,'');
};

export function downloadCsv(filename,rows=[]){
  if(typeof window==='undefined'||!rows.length)return;
  const headers=[...new Set(rows.flatMap(row=>Object.keys(row)))];
  const escape=value=>{
    const text=String(value??'');
    return /[",\n]/.test(text)?'"'+text.replaceAll('"','""')+'"':text;
  };
  const csv=[headers.join(','),...rows.map(row=>headers.map(key=>escape(row[key])).join(','))].join('\n');
  const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'}));
  const link=document.createElement('a');
  link.href=url;
  link.download=filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export function PageTitle({title,eyebrow,children,actions}){
  return <header className={'lo-workspace-header'+(actions?' has-actions':'')}>
    <div className="lo-workspace-header__content">
      {eyebrow&&<p className="lo-workspace-header__context">{eyebrow}</p>}
      <h1 className="lo-workspace-header__title">{title}</h1>
      {children&&<div className="lo-workspace-header__subcopy">{children}</div>}
    </div>
    {actions&&<div className="lo-workspace-header__actions">{actions}</div>}
  </header>;
}

export function Button({children,variant='secondary',icon:Icon,onClick,disabled,title,type='button'}){
  return <button type={type} className={'lo-button lo-button--'+variant} onClick={onClick} disabled={disabled} title={title}>
    {Icon&&<Icon size={16}/>}
    <span>{children}</span>
  </button>;
}

export function ImportButton(props){
  return <Button icon={Upload} {...props}/>;
}

export function Sparkline({values=[],tone='green'}){
  const clean=values.length?values:[0,0,0,0,0,0];
  const max=Math.max(...clean,1),min=Math.min(...clean,0),range=Math.max(max-min,1);
  const pts=clean.map((v,i)=>{
    const x=4+(i*(96/Math.max(clean.length-1,1)));
    const y=36-((v-min)/range*28);
    return x+','+y;
  }).join(' ');
  return <svg className={'lo-sparkline is-'+tone} viewBox="0 0 104 40" aria-hidden="true">
    <defs><linearGradient id={'spark-'+tone} x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopOpacity=".22"/><stop offset="100%" stopOpacity="0"/></linearGradient></defs>
    <polygon points={'4,40 '+pts+' 100,40'} fill={'url(#spark-'+tone+')'}/>
    <polyline points={pts} fill="none"/>
  </svg>;
}

const METRIC_ICONS={
  revenue:DollarSign,
  'gross profit':BarChart3,
  margin:Percent,
  cases:ShoppingCart,
  'open ar':CreditCard,
  records:ClipboardList,
  orders:ShoppingCart,
  'qa issues':CircleDollarSign,
  'lifetime revenue':DollarSign,
  'last order':ClipboardList,
  current:CreditCard,
  'eligible revenue':DollarSign,
  'new revenue':BarChart3,
  'reorder revenue':BarChart3,
  'eligible cases':UsersRound,
  'final commission':CircleDollarSign,
};

export function MetricCard({label,value,trend,trendDirection='up',spark=[],tone='green',hint}){
  const positive=trendDirection!=='bad'&&trendDirection!=='down-bad';
  const Icon=METRIC_ICONS[String(label).toLowerCase()]||CircleDollarSign;
  return <section className="lo-metric-card">
    <div className="lo-metric-heading"><span className={'lo-metric-icon '+(tone==='red'?'is-danger':'')}><Icon size={17} strokeWidth={2}/></span><div className="lo-metric-label">{label}<Info size={13}/></div></div>
    <div className="lo-metric-value">{value}</div>
    <div className="lo-metric-foot">
      <span className={'lo-metric-trend '+(positive?'is-positive':'is-danger')}>
        {trendDirection==='flat'?<Circle size={8}/>:trendDirection.startsWith('down')?'↓':'↑'}
        {trend??'0%'}
      </span>
      {hint&&<small>{hint}</small>}
      <Sparkline values={spark} tone={tone}/>
    </div>
  </section>;
}

export function Panel({title,action,children,className=''}) {
  return <section className={'lo-panel '+className}>
    {(title||action)&&<div className="lo-panel-head"><h2>{title}</h2>{action}</div>}
    {children}
  </section>;
}

export function StatusChip({children,tone}){
  const text=String(children||'');
  const normalized=text.toLowerCase();
  const inferred=tone||
    (['paid','recorded','current','active','ready','yes'].includes(normalized)?'green':
    ['open','draft','learning'].includes(normalized)?'blue':
    ['follow-up','follow up','due','due soon','partial'].includes(normalized)?'amber':
    ['overdue','review','urgent','no'].includes(normalized)?'red':'gray');
  return <span className={'lo-chip is-'+inferred}>{text}</span>;
}

export function SearchBox({value,onChange,placeholder='Search…'}){
  return <label className="lo-search-box"><Search size={18}/><input value={value} onChange={e=>onChange?.(e.target.value)} placeholder={placeholder}/></label>;
}

export function SelectField({label,value,onChange,children,wide=false}){
  const [isOpen,setIsOpen]=useState(false);
  const containerRef=useRef(null);
  const listId=useId();
  const labelId=useId();
  const options=Children.toArray(children).filter(Boolean).map(option=>({
    value:String(option.props.value??option.props.children),
    label:option.props.children,
    disabled:Boolean(option.props.disabled),
  }));
  const selected=options.find(option=>option.value===String(value))||options[0];
  const choose=next=>{
    if(next?.disabled)return;
    onChange?.(next.value);
    setIsOpen(false);
  };
  useEffect(()=>{
    const close=event=>{if(!containerRef.current?.contains(event.target))setIsOpen(false)};
    const escape=event=>{if(event.key==='Escape')setIsOpen(false)};
    document.addEventListener('pointerdown',close);
    document.addEventListener('keydown',escape);
    return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',escape)};
  },[]);
  const onTriggerKeyDown=event=>{
    if(['ArrowDown','ArrowUp','Enter',' '].includes(event.key)){event.preventDefault();setIsOpen(true)};
  };
  return <div ref={containerRef} className={'lo-select-field'+(wide?' is-wide':'')+(isOpen?' is-open':'')}>
    {label&&<span id={labelId}>{label}</span>}
    <div className="lo-select-control">
      <button type="button" className="lo-select-trigger" aria-haspopup="listbox" aria-expanded={isOpen} aria-controls={listId} aria-labelledby={label?labelId:undefined} onClick={()=>setIsOpen(open=>!open)} onKeyDown={onTriggerKeyDown}>
        <span>{selected?.label||'Select an option'}</span><ChevronDown size={16} aria-hidden="true"/>
      </button>
      {isOpen&&<div id={listId} className="lo-select-menu" role="listbox" aria-label={label||'Select an option'}>{options.map(option=><button type="button" key={option.value} role="option" aria-selected={option.value===selected?.value} disabled={option.disabled} className={option.value===selected?.value?'is-selected':''} onClick={()=>choose(option)}>{option.label}{option.value===selected?.value&&<Check size={15} aria-hidden="true"/>}</button>)}</div>}
    </div>
  </div>;
}

export function FilterBar({children}){
  return <div className="lo-filter-bar">{children}</div>;
}

export function EmptyState({title='No records found',body='Try adjusting your filters or date range.',onClear}){
  return <div className="lo-empty-state">
    <div className="lo-empty-icon">□</div>
    <div><strong>{title}</strong><span>{body}</span>{onClear&&<Button onClick={onClear}>Clear filters</Button>}</div>
  </div>;
}

export function QualitySummary({items=[]}){
  return <div className="lo-quality-row">
    {items.map((item,index)=><div className="lo-quality-card" key={item.label+index}>
      <span className={'lo-quality-icon '+(item.danger?'is-danger':'is-good')}>
        {item.danger?<AlertTriangle size={17}/>:<Check size={17}/>}
      </span>
      <strong>{item.value}</strong>
      <span>{item.label}<small>{item.detail}</small></span>
      {item.action}
    </div>)}
  </div>;
}

export function Pagination({count,page=1,pageSize=50}){
  const pages=Math.max(1,Math.ceil(count/pageSize));
  return <div className="lo-table-footer">
    <span>Showing 1 – {Math.min(count,pageSize)} of {count} records</span>
    <div className="lo-pagination">
      <button disabled>‹</button>
      <button className="is-current">{page}</button>
      {pages>1&&<button>{Math.min(2,pages)}</button>}
      {pages>2&&<button>{Math.min(3,pages)}</button>}
      <button disabled={pages<=1}>›</button>
      <SelectField value={String(pageSize)}><option value="50">50 per page</option><option value="100">100 per page</option></SelectField>
    </div>
  </div>;
}

export function ProgressBar({value,max=1}){
  const pct=max>0?Math.max(0,Math.min(100,Number(value||0)/max*100)):0;
  return <span className="lo-progress"><i style={{width:pct+'%'}}/></span>;
}
