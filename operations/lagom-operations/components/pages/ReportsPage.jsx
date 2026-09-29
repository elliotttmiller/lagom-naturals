'use client';

import {useMemo,useState} from 'react';
import {RevenueCasesChart} from '../ui/OperationsCharts';
import {Panel,PageTitle,SelectField,Button,ProgressBar,downloadCsv,money,number,percent} from '../ui/OperationsUI';
import {productPerformance,accountPerformance,repPerformance,monthlyPerformance} from '../../lib/companyOperationsDomain';

function PerformanceTable({type,rows=[]}){
  const max=Math.max(...rows.map(x=>x.revenue),1);
  const isProduct=type==='product',isAccount=type==='account';
  return <div className="lo-performance-table">
    <div className="lo-performance-head">
      <span>{isProduct?'Product':isAccount?'Account':'Rep'}</span>
      {!isProduct&&!isAccount&&<span>Accounts</span>}
      <span>Cases⌄</span><span>Revenue⌄</span><span>Gross Profit⌃</span><span>Margin⌄</span>
    </div>
    {rows.slice(0,7).map((row,index)=>{
      const label=isProduct?row.product:isAccount?row.account:row.rep;
      const revenue=row.revenue||0;
      const gp=row.grossProfit||0;
      const margin=revenue?gp/revenue:0;
      return <div className="lo-performance-row" key={(row.key||label)+index}>
        <span className="lo-performance-name"><ProgressBar value={revenue} max={max}/><strong>{label||'Unassigned'}</strong></span>
        {!isProduct&&!isAccount&&<span>{row.invoiceCount||0}</span>}
        <span>{number(row.cases)}</span><span>{money(revenue)}</span><span>{money(gp)}</span><span>{percent(margin)}</span>
      </div>;
    })}
  </div>;
}

export default function ReportsPage({model}){
  const [rep,setRep]=useState('All');
  const [account,setAccount]=useState('All');
  const [line,setLine]=useState('All');
  const reps=[...new Set(model.invoices.map(x=>x.repName).filter(Boolean))].sort();
  const accounts=[...new Set(model.invoices.map(x=>x.accountName).filter(Boolean))].sort();
  const productLines=[...new Set(model.lines.map(x=>x.productLine).filter(Boolean))].sort();

  const filtered=useMemo(()=>{
    const ids=new Set(model.invoices.filter(inv=>(rep==='All'||inv.repName===rep)&&(account==='All'||inv.accountName===account)).map(inv=>inv.id));
    const lines=model.lines.filter(row=>ids.has(row.invoiceId)&&(line==='All'||row.productLine===line));
    return {...model,lines,invoices:model.invoices.filter(inv=>ids.has(inv.id))};
  },[model,rep,account,line]);

  const products=productPerformance(filtered.lines);
  const accountsPerf=accountPerformance(filtered);
  const repsPerf=repPerformance(filtered);
  const monthly=monthlyPerformance(filtered,new Date().getFullYear());

  return <div className="lo-page">
    <PageTitle title="Reports" eyebrow="ANALYTICS"/>
    <div className="lo-report-controls">
      <SelectField label="Rep" value={rep} onChange={setRep} wide><option>All</option>{reps.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Account" value={account} onChange={setAccount} wide><option>All</option>{accounts.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Product Line" value={line} onChange={setLine} wide><option>All</option>{productLines.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="View" value="Monthly"><option>Monthly</option></SelectField>
      <Button onClick={()=>downloadCsv('lagom-report-product-performance.csv',products.map(row=>({
        Product:row.product,SKU:row.sku,Cases:row.cases,Revenue:row.revenue,COGS:row.cogs,
        'Gross Profit':row.grossProfit,Margin:row.margin,'Active Accounts':row.activeAccounts
      })))}>Export⌄</Button>
    </div>
    <Panel className="lo-chart-panel"><RevenueCasesChart rows={monthly}/></Panel>
    <div className="lo-two-panel-grid lo-reports-grid">
      <Panel title="Product Performance" action={<button className="lo-text-button">View All</button>}><PerformanceTable type="product" rows={products}/></Panel>
      <Panel title="Account Performance" action={<button className="lo-text-button">View All</button>}><PerformanceTable type="account" rows={accountsPerf}/></Panel>
    </div>
    <Panel title="Rep Performance" action={<button className="lo-text-button">View All</button>}><PerformanceTable type="rep" rows={repsPerf}/></Panel>
  </div>;
}
