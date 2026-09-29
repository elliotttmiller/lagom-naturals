'use client';

import {useEffect,useId,useState} from 'react';
import {money,number} from './OperationsUI';

function useChartReveal(){
  const [isReady,setIsReady]=useState(false);
  useEffect(()=>{
    const frame=requestAnimationFrame(()=>setIsReady(true));
    return()=>cancelAnimationFrame(frame);
  },[]);
  return isReady;
}

export function RevenueCasesChart({rows=[],height=280,title='Revenue & Cases'}){
  const isReady=useChartReveal();
  const chartId=useId().replaceAll(':','');
  const data=rows.length?rows:Array.from({length:12},(_,i)=>({label:new Date(2000,i,1).toLocaleDateString('en-US',{month:'short'}),revenue:0,cases:0}));
  // The SVG has a deliberately generous coordinate system.  It prevents axis
  // labels and vertical titles from competing with the first/last data point
  // while allowing the graphic to scale as one unit with its panel.
  const chartHeight=Math.max(190,height);
  const width=960,padL=112,padR=84,padT=30,padB=58,plotW=width-padL-padR,plotH=chartHeight-padT-padB,baseline=padT+plotH;
  const maxRevenue=Math.max(...data.map(row=>Number(row.revenue)||0),1);
  const maxCases=Math.max(...data.map(row=>Number(row.cases)||0),1);
  const slot=plotW/data.length;
  const barW=Math.max(9,Math.min(26,slot*.34));
  const points=data.map((row,index)=>({x:padL+slot*index+slot/2,y:padT+plotH-(Number(row.cases||0)/maxCases*plotH)}));
  const linePoints=points.map(point=>point.x+','+point.y).join(' ');
  const areaPath=points.length?'M '+points[0].x+' '+baseline+' L '+points.map(point=>point.x+' '+point.y).join(' L ')+' L '+points.at(-1).x+' '+baseline+' Z':'';

  return <div className={'lo-chart-wrap '+(isReady?'is-ready':'')}>
    <div className="lo-chart-legend-row">
      <h2>{title}</h2>
      <div className="lo-chart-legend" aria-label="Chart legend"><span><i className="is-revenue"/>Revenue</span><span><i className="is-cases"/>Cases</span><span className="lo-chart-period">Monthly</span></div>
    </div>
    <svg className="lo-chart" width={width} height={chartHeight} viewBox={'0 0 '+width+' '+chartHeight} preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby={chartId+'-title '+chartId+'-description'}>
      <title id={chartId+'-title'}>{title}</title>
      <desc id={chartId+'-description'}>Monthly revenue is displayed as vertical bars and cases as a line with focusable data points.</desc>
      <defs><linearGradient id={chartId+'-area'} x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#3c9660" stopOpacity=".22"/><stop offset="100%" stopColor="#3c9660" stopOpacity="0"/></linearGradient></defs>
      {[0,.25,.5,.75,1].map((value,index)=>{
        const y=padT+plotH-(value*plotH);
        return <g key={index} className="lo-chart-grid-row" style={{'--lo-delay':(index*45)+'ms'}}><line x1={padL} y1={y} x2={width-padR} y2={y} className="lo-chart-grid"/><text x={padL-17} y={y+4} textAnchor="end" className="lo-chart-axis-label">{money(maxRevenue*value).replace('.00','')}</text><text x={width-padR+17} y={y+4} textAnchor="start" className="lo-chart-axis-label">{number(maxCases*value)}</text></g>;
      })}
      <path d={areaPath} fill={'url(#'+chartId+'-area)'} className="lo-chart-area"/>
      {data.map((row,index)=>{
        const x=padL+slot*index+slot/2;
        const barHeight=Number(row.revenue||0)/maxRevenue*plotH;
        return <g key={row.label+index} className="lo-chart-column" style={{'--lo-delay':(150+index*42)+'ms'}}><rect x={x-barW/2} y={baseline-barHeight} width={barW} height={barHeight} rx="5" className="lo-chart-bar"/><text x={x} y={chartHeight-16} textAnchor="middle" className="lo-chart-axis-label">{row.label}</text></g>;
      })}
      <polyline points={linePoints} className="lo-chart-cases-line"/>
      {data.map((row,index)=>{
        const point=points[index];
        return <g key={'point'+index} className="lo-chart-point" tabIndex="0" role="img" aria-label={row.label+': '+money(row.revenue)+' revenue, '+number(row.cases)+' cases'} style={{'--lo-delay':(340+index*42)+'ms'}}><circle cx={point.x} cy={point.y} r="4" className="lo-chart-cases-dot"/><title>{row.label+': '+money(row.revenue)+' revenue, '+number(row.cases)+' cases'}</title></g>;
      })}
      <text x="29" y={padT+plotH/2} transform={'rotate(-90 29 '+(padT+plotH/2)+')'} className="lo-chart-axis-title">Revenue</text><text x={width-29} y={padT+plotH/2} transform={'rotate(90 '+(width-29)+' '+(padT+plotH/2)+')'} className="lo-chart-axis-title">Cases</text>
    </svg>
  </div>;
}

export function DonutChart({items=[],centerTop='0',centerBottom='Cases'}){
  const isReady=useChartReveal();
  const total=items.reduce((sum,item)=>sum+Number(item.value||0),0)||1;
  let angle=-90;
  const colors=['#176c38','#4f9d68','#8ac59b','#bfdcc6','#d8e8dc'];
  const cx=62,cy=62,r=46,strokeWidth=16,circumference=2*Math.PI*r;
  return <div className={'lo-donut-wrap '+(isReady?'is-ready':'')}>
    <svg viewBox="0 0 124 124" className="lo-donut" role="img" aria-label={centerTop+' '+centerBottom+' composition'}><circle cx={cx} cy={cy} r={r} fill="none" stroke="#edf2ee" strokeWidth={strokeWidth}/>{items.map((item,index)=>{
      const ratio=Number(item.value||0)/total;
      const dash=ratio*circumference;
      const rotate=angle;
      angle+=ratio*360;
      return <circle key={item.label+index} className="lo-donut-segment" cx={cx} cy={cy} r={r} fill="none" stroke={colors[index%colors.length]} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={dash+' '+(circumference-dash)} strokeDashoffset={isReady?0:circumference} transform={'rotate('+rotate+' '+cx+' '+cy+')'} style={{'--lo-delay':(index*100)+'ms'}}><title>{item.label+': '+Math.round(ratio*100)+'%'}</title></circle>;
    })}<text x="62" y="58" textAnchor="middle" className="lo-donut-value">{centerTop}</text><text x="62" y="74" textAnchor="middle" className="lo-donut-label">{centerBottom}</text></svg>
    <div className="lo-donut-legend">{items.map((item,index)=><div key={item.label+index}><i style={{background:colors[index%colors.length]}}/><span>{item.label}</span><strong>{Math.round((Number(item.value||0)/total)*100)}%</strong></div>)}</div>
  </div>;
}
