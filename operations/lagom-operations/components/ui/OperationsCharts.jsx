'use client';

import {money,number} from './OperationsUI';

export function RevenueCasesChart({rows=[],height=250,title='Revenue & Cases'}){
  const data=rows.length?rows:Array.from({length:12},(_,i)=>({label:new Date(2000,i,1).toLocaleDateString('en-US',{month:'short'}),revenue:0,cases:0}));
  const width=760,padL=48,padR=42,padT=18,padB=36,plotW=width-padL-padR,plotH=height-padT-padB;
  const maxRevenue=Math.max(...data.map(r=>Number(r.revenue)||0),1);
  const maxCases=Math.max(...data.map(r=>Number(r.cases)||0),1);
  const slot=plotW/data.length;
  const barW=Math.max(8,Math.min(28,slot*.36));
  const linePts=data.map((r,i)=>{
    const x=padL+slot*i+slot/2;
    const y=padT+plotH-(Number(r.cases||0)/maxCases*plotH);
    return x+','+y;
  }).join(' ');
  return <div className="lo-chart-wrap">
    <div className="lo-chart-legend-row">
      <h2>{title}</h2>
      <div className="lo-chart-legend"><span><i className="is-revenue"/>Revenue</span><span><i className="is-cases"/>Cases</span><button>Monthly⌄</button></div>
    </div>
    <svg className="lo-chart" viewBox={'0 0 '+width+' '+height} role="img" aria-label={title}>
      {[0,.25,.5,.75,1].map((p,i)=>{
        const y=padT+plotH-(p*plotH);
        return <g key={i}>
          <line x1={padL} y1={y} x2={width-padR} y2={y} className="lo-chart-grid"/>
          <text x={padL-10} y={y+4} textAnchor="end" className="lo-chart-axis-label">{money(maxRevenue*p).replace('.00','')}</text>
          <text x={width-padR+10} y={y+4} textAnchor="start" className="lo-chart-axis-label">{number(maxCases*p)}</text>
        </g>;
      })}
      {data.map((r,i)=>{
        const x=padL+slot*i+slot/2;
        const h=Number(r.revenue||0)/maxRevenue*plotH;
        return <g key={r.label+i}>
          <rect x={x-barW/2} y={padT+plotH-h} width={barW} height={h} rx="1" className="lo-chart-bar"/>
          <text x={x} y={height-10} textAnchor="middle" className="lo-chart-axis-label">{r.label}</text>
        </g>;
      })}
      <polyline points={linePts} className="lo-chart-cases-line"/>
      {data.map((r,i)=>{
        const x=padL+slot*i+slot/2;
        const y=padT+plotH-(Number(r.cases||0)/maxCases*plotH);
        return <circle key={'pt'+i} cx={x} cy={y} r="3" className="lo-chart-cases-dot"><title>{r.label+': '+number(r.cases)+' cases'}</title></circle>;
      })}
      <text x="12" y={padT+plotH/2} transform={'rotate(-90 12 '+(padT+plotH/2)+')'} className="lo-chart-axis-title">Revenue</text>
      <text x={width-8} y={padT+plotH/2} transform={'rotate(90 '+(width-8)+' '+(padT+plotH/2)+')'} className="lo-chart-axis-title">Cases</text>
    </svg>
  </div>;
}

export function DonutChart({items=[],centerTop='0',centerBottom='Cases'}){
  const total=items.reduce((s,x)=>s+Number(x.value||0),0)||1;
  let angle=-90;
  const colors=['#2d7a3d','#64a974','#8bc79a','#b8d9bf','#c8ceca'];
  const cx=62,cy=62,r=46,sw=18;
  const circumference=2*Math.PI*r;
  return <div className="lo-donut-wrap">
    <svg viewBox="0 0 124 124" className="lo-donut" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#edf0ed" strokeWidth={sw}/>
      {items.map((item,index)=>{
        const ratio=Number(item.value||0)/total;
        const dash=ratio*circumference;
        const gap=circumference-dash;
        const rotate=angle;
        angle+=ratio*360;
        return <circle key={item.label+index} cx={cx} cy={cy} r={r} fill="none" stroke={colors[index%colors.length]} strokeWidth={sw} strokeDasharray={dash+' '+gap} strokeDashoffset="0" transform={'rotate('+rotate+' '+cx+' '+cy+')'}/>;
      })}
      <text x="62" y="58" textAnchor="middle" className="lo-donut-value">{centerTop}</text>
      <text x="62" y="74" textAnchor="middle" className="lo-donut-label">{centerBottom}</text>
    </svg>
    <div className="lo-donut-legend">
      {items.map((item,index)=><div key={item.label+index}><i style={{background:colors[index%colors.length]}}/><span>{item.label}</span><strong>{Math.round((Number(item.value||0)/total)*100)}%</strong></div>)}
    </div>
  </div>;
}
