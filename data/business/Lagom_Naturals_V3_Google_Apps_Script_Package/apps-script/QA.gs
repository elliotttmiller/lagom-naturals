function ensureQaSheet_() {
  const ss=SpreadsheetApp.getActive(); let sh=ss.getSheetByName('QA Audit'); if(!sh) sh=ss.insertSheet('QA Audit');
  sh.getRange('A1').setValue('LAGOM NATURALS — QA AUDIT'); sh.getRange('A2').setValue('Exception-first quality control. Run from the Lagom menu after meaningful ledger edits.');
  sh.getRange('A4').setValue('ACTIONABLE EXCEPTIONS'); sh.getRange('A6:F6').setValues([['Severity','Area','Record','Issue','Recommended Action','Row']]);
}

function runQaAudit() {
  ensureQaSheet_(); const ss=SpreadsheetApp.getActive(), out=[];
  auditInvoices_(ss.getSheetByName('Invoices'),out); auditDepletion_(ss.getSheetByName('Depletion'),out);
  const sh=ss.getSheetByName('QA Audit'); sh.getRange(7,1,Math.max(sh.getMaxRows()-6,1),6).clearContent();
  if(out.length) sh.getRange(7,1,out.length,6).setValues(out);
  else sh.getRange('A7:F7').setValues([['Info','System','—','No operational issues require attention.','Continue normal workflow.','—']]);
  sh.getRange('A3').setValue(out.length ? out.length+' issue'+(out.length===1?'':'s')+' require attention' : 'No issues require attention');
  styleQaAudit_(); ss.getSheetByName('Overview').getRange('U6').setValue(out.length); SpreadsheetApp.flush();
  ss.toast(out.length ? out.length+' QA issue(s) found.' : 'QA complete — no issues found.','Lagom V3',5);
}

function auditInvoices_(sh,out) {
  const rows=sh.getRange(7,1,Math.max(sh.getLastRow()-6,1),23).getValues(); const seen={};
  rows.forEach((r,i)=>{ const row=i+7,id=String(r[0]||'').trim(); if(!id) return;
    if(seen[id]) out.push(['Critical','Invoice',id,'Duplicate invoice number.','Resolve duplicate before reporting or payment updates.',row]); else seen[id]=true;
    const req=[[1,'invoice date'],[2,'account'],[3,'sales rep'],[4,'account type'],[5,'terms']]; req.forEach(x=>{if(!r[x[0]]) out.push(['Review','Invoice',id,'Missing '+x[1]+'.','Complete required invoice input.',row]);});
    const revenue=Number(r[11]||0), paid=Number(r[6]||0), status=String(r[18]||'');
    if(revenue<=0) out.push(['Review','Invoice',id,'Invoice revenue is zero or unresolved.','Add/resolve depletion lines.',row]);
    if(paid<0) out.push(['Critical','Payment',id,'Amount paid is negative.','Correct payment amount.',row]);
    if(paid>revenue+0.005) out.push(['Critical','Payment',id,'Payment exceeds invoice total.','Verify payment or invoice amount.',row]);
    if(status==='Paid' && !r[7]) out.push(['Review','Payment',id,'Paid invoice is missing payment date.','Enter payment date.',row]);
  });
}

function auditDepletion_(sh,out) {
  const rows=sh.getRange(7,1,Math.max(sh.getLastRow()-6,1),15).getValues(); const seen={};
  rows.forEach((r,i)=>{ const row=i+7, invoice=String(r[0]||'').trim(), product=String(r[1]||'').trim(); if(!invoice&&!product) return; const record=invoice||('row '+row);
    if(!invoice) out.push(['Review','Depletion',record,'Missing invoice number.','Choose a valid invoice.',row]);
    if(!product) out.push(['Review','Depletion',record,'Missing product.','Choose a product from Setup.',row]);
    if(Number(r[2]||0)<=0) out.push(['Review','Depletion',record,'Cases must be greater than zero.','Correct cases sold.',row]);
    if(Number(r[3]||0)<0) out.push(['Critical','Depletion',record,'Sale price cannot be negative.','Correct sale price.',row]);
    const key=invoice+'|'+product; if(invoice&&product){ if(seen[key]) out.push(['Review','Depletion',record,'Duplicate invoice/product combination.','Confirm whether the duplicate line is intentional.',row]); else seen[key]=true; }
    if(product && !r[5]) out.push(['Review','Product',record,'Product SKU is unresolved.','Verify product exists in Setup.',row]);
    if(invoice && !r[10]) out.push(['Review','Invoice',record,'Invoice context is unresolved.','Verify invoice exists in Invoices.',row]);
  });
}
