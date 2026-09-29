'use client';

import {RevenueCasesChart} from '../ui/OperationsCharts';
import {
  MetricCard,
  PageTitle,
  Panel,
  ProgressBar,
  QualitySummary,
  StatusChip,
  displayInvoiceNumber,
  money,
  number,
  shortDate,
} from '../ui/OperationsUI';
import {monthlyPerformance,productPerformance} from '../../lib/companyOperationsDomain';

export default function OverviewPage({model,onNavigate}){
  const year=new Date().getFullYear();
  const monthly=monthlyPerformance(model,year);
  const products=productPerformance(model.lines).slice(0,4);
  const maxProduct=Math.max(...products.map(p=>p.revenue),1);
  const recentInvoices=model.invoices.filter(x=>x.status!=='Draft').slice().sort((a,b)=>String(b.issuedAt||'').localeCompare(String(a.issuedAt||''))).slice(0,6);
  const recentLines=model.lines.slice().sort((a,b)=>String(b.invoiceDate||'').localeCompare(String(a.invoiceDate||''))).slice(0,6);
  const overdue=model.invoices.filter(x=>x.isOverdue);
  const followups=model.invoices.filter(x=>x.balanceDue>0||x.daysPastDue>0);
  const monthlyRevenue=monthly.map(x=>x.revenue);
  const monthlyCases=monthly.map(x=>x.cases);
  const monthlyProfit=monthly.map(x=>x.grossProfit);

  return <div className="lo-page">
    <PageTitle title="Overview" eyebrow="LAGOM NATURALS OPERATIONS"/>

    <div className="lo-metric-grid lo-metric-grid--five">
      <MetricCard label="Revenue" value={money(model.kpis.revenue)} trend="—" trendDirection="flat" spark={monthlyRevenue}/>
      <MetricCard label="Cases" value={number(model.kpis.cases)} trend="—" trendDirection="flat" spark={monthlyCases}/>
      <MetricCard label="Gross Profit" value={money(model.kpis.grossProfit)} trend="—" trendDirection="flat" spark={monthlyProfit}/>
      <MetricCard label="Margin" value={(model.kpis.grossMargin*100).toFixed(1)+'%'} trend="—" trendDirection="flat" spark={monthly.map(x=>x.margin*100)}/>
      <MetricCard label="Open AR" value={money(model.kpis.openAR)} trend="0%" trendDirection="flat" spark={monthly.map((x,i)=>i<monthly.length-3?0:model.kpis.openAR)}/>
    </div>

    <div className="lo-overview-grid">
      <Panel className="lo-chart-panel">
        <RevenueCasesChart rows={monthly}/>
      </Panel>
      <Panel title="Top Products by Revenue" action={<button className="lo-text-button" onClick={()=>onNavigate('reports')}>View All</button>}>
        <div className="lo-product-rank">
          {products.length?products.map(product=><div key={product.key}>
            <div className="lo-product-rank-row">
              <span><strong>{product.product}</strong></span>
              <span>{number(product.cases)}</span>
              <span>{money(product.revenue)}</span>
              <span>{model.kpis.revenue?Math.round(product.revenue/model.kpis.revenue*100):0}%</span>
            </div>
            <ProgressBar value={product.revenue} max={maxProduct}/>
          </div>):<div className="lo-muted-block">No product activity in this period.</div>}
        </div>
      </Panel>
    </div>

    <Panel title="Operational Attention" action={<button className="lo-text-button" onClick={()=>onNavigate('administration')}>View All</button>}>
      <QualitySummary items={[
        {label:'Overdue Invoices',value:overdue.length,detail:overdue.length?'Review collections':'All clear',danger:overdue.length>0},
        {label:'Depletion QA Issues',value:model.qualityIssues.filter(x=>x.scope==='Depletion').length,detail:'All clear',danger:model.qualityIssues.some(x=>x.scope==='Depletion')},
        {label:'Reconciliation Issues',value:model.qualityIssues.filter(x=>x.issue.includes('reconcile')).length,detail:'All clear',danger:model.qualityIssues.some(x=>x.issue.includes('reconcile'))},
        {label:'Accounts Need Follow-up',value:followups.length,detail:'View accounts →',danger:followups.length>0,action:null},
      ]}/>
    </Panel>

    <div className="lo-two-panel-grid">
      <Panel title="Recent Invoices" action={<button className="lo-text-button" onClick={()=>onNavigate('invoices')}>View All</button>}>
        <div className="lo-recent-table lo-recent-table--invoices" role="table" aria-label="Recent invoices">
          <div className="lo-recent-table__head" role="row"><span>Invoice</span><span>Issued</span><span>Account</span><span>Cases</span><span>Revenue</span><span>Status</span></div>
          {recentInvoices.map(row=><div className="lo-recent-table__row" role="row" key={row.id}>
            <strong title={displayInvoiceNumber(row.invoiceNumber)}>{displayInvoiceNumber(row.invoiceNumber)}</strong><time dateTime={row.issuedAt}>{shortDate(row.issuedAt)}</time><span title={row.accountName}>{row.accountName}</span><span className="lo-recent-table__number">{number(row.cases)}</span><strong className="lo-recent-table__amount">{money(row.invoiceTotal)}</strong><StatusChip>{row.status}</StatusChip>
          </div>)}
        </div>
      </Panel>
      <Panel title="Recent Depletion" action={<button className="lo-text-button" onClick={()=>onNavigate('depletion')}>View All</button>}>
        <div className="lo-recent-table lo-recent-table--depletion" role="table" aria-label="Recent depletion">
          <div className="lo-recent-table__head" role="row"><span>Recorded</span><span>Account</span><span>Product</span><span>Cases</span><span>Sales rep</span><span>Status</span></div>
          {recentLines.map(row=><div className="lo-recent-table__row" role="row" key={row.id}>
            <time dateTime={row.invoiceDate}>{shortDate(row.invoiceDate)}</time><span title={row.account||'—'}>{row.account||'—'}</span><strong title={row.product||'—'}>{row.product||'—'}</strong><span className="lo-recent-table__number">{number(row.casesSold)}</span><span>{row.rep||'—'}</span><StatusChip>Recorded</StatusChip>
          </div>)}
        </div>
      </Panel>
    </div>
  </div>;
}
