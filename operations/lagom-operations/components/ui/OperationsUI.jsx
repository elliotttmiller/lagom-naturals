'use client';

import {
  AlertTriangle,
  Check,
  ChevronDown,
  Circle,
  Info,
  Search,
  Upload,
} from 'lucide-react';

export const money=value=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(Number(value)||0);
export const number=value=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(Number(value)||0);
export const percent=value=>new Intl.NumberFormat('en-US',{style:'percent',maximumFractionDigits:1}).format(Number(value)||0);
export const shortDate=value=>{
  if(!value)return '—';
  const d=new Date(String(value).slice(0,10)+'T12:00:00');
  return Number.isNaN(d.getTime())?'—':d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
};

export function PageTitle({title,eyebrow,children,actions}){
  return <div className={'lo-page-title-row'+(actions?' has-actions':'')}>
    <div className="lo-page-title-copy">
      <h1>{title}</h1>
      {eyebrow&&<div className="lo-page-eyebrow">{eyebrow}</div>}
      {children&&<div className="lo-page-subcopy">{children}</div>}
    </div>
    {actions&&<div className="lo-page-actions">{actions}</div>}
  </div>;
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

export function MetricCard({label,value,trend,trendDirection='up',spark=[],tone='green',hint}){
  const positive=trendDirection!=='bad'&&trendDirection!=='down-bad';
  return <section className="lo-metric-card">
    <div className="lo-metric-label">{label}<Info size={13}/></div>
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
  return <label className={'lo-select-field'+(wide?' is-wide':'')}>
    {label&&<span>{label}</span>}
    <div><select value={value} onChange={e=>onChange?.(e.target.value)}>{children}</select><ChevronDown size={14}/></div>
  </label>;
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
