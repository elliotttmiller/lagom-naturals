'use client';

import {useMemo,useState} from 'react';
import {BadgePercent,CircleCheck,FileCheck2,Gift,Info,Target} from 'lucide-react';
import {Button,MetricCard,PageTitle,Panel,SelectField,StatusChip,displayInvoiceNumber,downloadCsv,money,number,percent,shortDate} from '../ui/OperationsUI';

function CalculationMetric({icon:Icon,label,description,value,detail,tone='green',children}){
  return <article className={'lo-commission-calc-card is-'+tone}>
    <div className="lo-commission-calc-card__head"><span className="lo-commission-calc-card__icon"><Icon size={16} strokeWidth={2}/></span><span className="lo-commission-calc-card__label">{label}<Info size={13} aria-label={description}/></span></div>
    <strong>{children||value}</strong><small>{detail}</small>
  </article>;
}

export default function CommissionsPage({model,reps=[]}){
  const repNames=[...new Set([...reps.map(r=>r.display_name||r.name),...model.commissions.map(r=>r.rep_name)].filter(Boolean))].sort();
  const [rep,setRep]=useState(repNames[0]||'All');
  const rows=useMemo(()=>model.commissions.filter(row=>rep==='All'||row.rep_name===rep),[model.commissions,rep]);
  const repConfig=reps.find(r=>(r.display_name||r.name)===rep)||{};
  const eligibleRevenue=rows.reduce((s,x)=>s+Number(x.paidRevenue||0),0);
  const newRevenue=rows.filter(x=>String(x.sale_type||'').toLowerCase().startsWith('new')).reduce((s,x)=>s+Number(x.paidRevenue||0),0);
  const reorderRevenue=eligibleRevenue-newRevenue;
  const cases=rows.reduce((s,x)=>s+Number(x.cases||0),0);
  const commission=rows.reduce((s,x)=>s+Number(x.commissionAmount||0),0);
  const newRate=Number(repConfig.new_commission_rate||0);
  const reorderRate=Number(repConfig.reorder_commission_rate||0);
  const bonusThreshold=Number(repConfig.bonus_threshold||0);
  const bonusNeedsReview=Boolean(bonusThreshold&&eligibleRevenue>=bonusThreshold);

  return <div className="lo-page">
    <PageTitle title="Commissions" eyebrow="SALES COMPENSATION"/>
    <div className="lo-commission-controls">
      <SelectField label="Sales Rep" value={rep} onChange={setRep} wide><option>All</option>{repNames.map(x=><option key={x}>{x}</option>)}</SelectField>
      <SelectField label="Period" value="Current month" wide><option>Current month</option></SelectField>
      <Button variant="dark" disabled title="Commission period finalization is not configured in the current data contract.">Finalize Period</Button>
    </div>

    <div className="lo-metric-grid lo-metric-grid--five">
      <MetricCard label="Eligible Revenue" value={money(eligibleRevenue)} trend="—" trendDirection="flat" spark={rows.map((x,i)=>eligibleRevenue*(i+1)/Math.max(rows.length,1))}/>
      <MetricCard label="New Revenue" value={money(newRevenue)} trend="—" trendDirection="flat" spark={rows.map(x=>String(x.sale_type||'').toLowerCase().startsWith('new')?x.paidRevenue:0)}/>
      <MetricCard label="Reorder Revenue" value={money(reorderRevenue)} trend="—" trendDirection="flat" spark={rows.map((x,i)=>reorderRevenue*(i+1)/Math.max(rows.length,1))}/>
      <MetricCard label="Eligible Cases" value={number(cases)} trend="—" trendDirection="flat" spark={rows.map(x=>x.cases)}/>
      <MetricCard label="Final Commission" value={money(commission)} trend="0%" trendDirection="flat" spark={rows.map(x=>x.commissionAmount)}/>
    </div>

    <Panel title="Commission Calculation">
      <div className="lo-commission-calc">
        <CalculationMetric icon={BadgePercent} label="New rate" description="Commission rate applied to eligible new revenue." value={percent(newRate)} detail="of eligible new revenue"/>
        <CalculationMetric icon={BadgePercent} label="Reorder rate" description="Commission rate applied to eligible reorder revenue." value={percent(reorderRate)} detail="of eligible reorder revenue"/>
        <CalculationMetric icon={FileCheck2} label="Eligible invoices" description="Number of invoices eligible for commission in this period." value={rows.length} detail="in this period"/>
        <CalculationMetric icon={Target} label="Bonus threshold" description="Eligible revenue required before the bonus rule applies." value={bonusThreshold?money(bonusThreshold):'—'} detail={bonusThreshold?'eligible revenue':'not configured'} tone={bonusThreshold?'green':'muted'}/>
        <CalculationMetric icon={Gift} label="Bonus status" description="Current bonus-rule evaluation for this sales rep and period." value={bonusThreshold&&eligibleRevenue>=bonusThreshold?'Review':'No bonus'} detail={bonusThreshold?'Threshold '+(eligibleRevenue>=bonusThreshold?'reached':'not met'):'No approved rule'} tone={bonusNeedsReview?'review':'muted'}/>
        <CalculationMetric icon={CircleCheck} label="QA state" description="Commission-quality status for this period." detail={bonusNeedsReview?'Bonus semantics require review':'All clear'} tone={bonusNeedsReview?'review':'ready'}>
          <span className={bonusNeedsReview?'lo-review':'lo-ready'}><i>{bonusNeedsReview?'!':'✓'}</i> {bonusNeedsReview?'Review':'Ready'}</span>
        </CalculationMetric>
      </div>
    </Panel>

    <section className="lo-data-card lo-section-gap">
      <div className="lo-data-card-title"><h2>Eligible Invoices</h2><Button onClick={()=>downloadCsv('lagom-commissions.csv',rows.map(row=>({
        'Eligible Date':row.eligibleDate,Rep:row.rep_name,'Invoice #':row.invoice_number,Account:row.account_name,
        'Sale Type':row.sale_type,Cases:row.cases,'Paid Revenue':row.paidRevenue,Rate:row.commissionRate,
        Commission:row.commissionAmount
      })))}>Export</Button></div>
      <div className="lo-table-scroll"><table className="lo-data-table">
        <thead><tr><th>Invoice #</th><th>Date</th><th>Account</th><th>Revenue</th><th>Cases</th><th>Type</th><th>Eligible</th><th>Commission Amount</th></tr></thead>
        <tbody>{rows.map(row=><tr key={row.invoice_id}>
          <td><strong>{displayInvoiceNumber(row.invoice_number)}</strong></td><td>{shortDate(row.eligibleDate)}</td><td>{row.account_name}</td><td>{money(row.paidRevenue)}</td><td>{number(row.cases)}</td><td>{row.sale_type||'—'}</td><td><StatusChip>Yes</StatusChip></td><td className="lo-num">{money(row.commissionAmount)}</td>
        </tr>)}</tbody>
      </table></div>
    </section>
  </div>;
}
