'use client';

const money=value=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(Number(value)||0);
const number=value=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(Number(value)||0);

export default function QualityCheckDialog({model,onClose}){
  if(!model)return null;
  const invoiceRevenue=model.invoices.filter(invoice=>invoice.status!=='Draft').reduce((sum,invoice)=>sum+Number(invoice.invoiceTotal||0),0);
  const lineRevenue=model.lines.reduce((sum,line)=>sum+Number(line.revenue||0),0);
  const invoiceCases=model.invoices.filter(invoice=>invoice.status!=='Draft').reduce((sum,invoice)=>sum+Number(invoice.cases||0),0);
  const lineCases=model.lines.reduce((sum,line)=>sum+Number(line.casesSold||0),0);
  const invoiceCogs=model.invoices.filter(invoice=>invoice.status!=='Draft').reduce((sum,invoice)=>sum+Number(invoice.totalCogs||0),0);
  const lineCogs=model.lines.reduce((sum,line)=>sum+Number(line.totalCogs||0),0);
  const checks=[
    {label:'Revenue',left:invoiceRevenue,right:lineRevenue,format:money},
    {label:'Cases',left:invoiceCases,right:lineCases,format:number},
    {label:'COGS',left:invoiceCogs,right:lineCogs,format:money},
  ].map(check=>({...check,ok:Math.abs(check.left-check.right)<.01}));

  return <div className="ops-modal-backdrop" role="presentation" onMouseDown={event=>event.target===event.currentTarget&&onClose?.()}>
    <section className="ops-modal ops-check-modal" role="dialog" aria-modal="true" aria-labelledby="ops-check-title">
      <header className="ops-modal-head">
        <div>
          <div className="ops-eyebrow">Data quality</div>
          <h2 id="ops-check-title">Operations check</h2>
          <p>Reconciliation and row-level validation against the current commercial records.</p>
        </div>
        <button type="button" className="ops-modal-close" onClick={onClose} aria-label="Close operations check">×</button>
      </header>

      <div className="ops-check-grid">
        {checks.map(check=><div key={check.label} className={check.ok?'is-good':'is-bad'}>
          <span>{check.label}</span>
          <strong>{check.ok?'Reconciles':'Review'}</strong>
          <small>{check.format(check.left)} invoice rollup · {check.format(check.right)} line detail</small>
        </div>)}
      </div>

      <div className="ops-check-heading">
        <div><strong>{model.qualityIssues.length}</strong><span>items need review</span></div>
      </div>

      {model.qualityIssues.length?<div className="ops-check-list">
        {model.qualityIssues.map((issue,index)=><div key={issue.scope+issue.record+issue.issue+index}>
          <span className={'ops-status ops-status--'+(issue.severity==='High'?'bad':issue.severity==='Medium'?'warn':'neutral')}>{issue.severity}</span>
          <span><strong>{issue.scope} · {issue.record}</strong><small>{issue.issue}</small></span>
        </div>)}
      </div>:<div className="ops-empty"><strong>All clear</strong><span>No invoice or depletion QA issues were detected.</span></div>}

      <footer className="ops-modal-actions">
        <button type="button" className="ops-btn ops-btn--primary" onClick={onClose}>Done</button>
      </footer>
    </section>
  </div>;
}
