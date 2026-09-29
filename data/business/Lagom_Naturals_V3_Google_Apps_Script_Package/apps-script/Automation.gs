function installValidations_() {
  const ss=SpreadsheetApp.getActive(), setup=ss.getSheetByName('Setup');
  const inv=ss.getSheetByName('Invoices'), dep=ss.getSheetByName('Depletion'), rep=ss.getSheetByName('Reports'), com=ss.getSheetByName('Commissions');
  const last=ss.getSheetByName('Setup').getLastRow();
  const ruleFrom = r => SpreadsheetApp.newDataValidation().requireValueInRange(r, true).setAllowInvalid(false).build();
  inv.getRange('C7:C').setDataValidation(ruleFrom(setup.getRange('J7:J'+last)));
  inv.getRange('D7:D').setDataValidation(ruleFrom(setup.getRange('O7:O'+last)));
  inv.getRange('E7:E').setDataValidation(ruleFrom(setup.getRange('W7:W'+last)));
  inv.getRange('F7:F').setDataValidation(ruleFrom(setup.getRange('Z7:Z'+last)));
  dep.getRange('A7:A').setDataValidation(ruleFrom(inv.getRange('A7:A')));
  dep.getRange('B7:B').setDataValidation(ruleFrom(setup.getRange('A7:A'+last)));
  rep.getRange('B7').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['All'].concat(setup.getRange('O7:O'+last).getDisplayValues().flat().filter(Boolean)),true).build());
  com.getRange('B5').setDataValidation(ruleFrom(setup.getRange('O7:O'+last)));
  ['Invoices','Depletion','AR'].forEach(name=>{
    const sh=ss.getSheetByName(name), cfg=LAGOM.sheets[name];
    cfg.filters.forEach(f=>{
      if (f.col===4 || f.col===13) sh.getRange(f.cell).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['All'].concat(setup.getRange('O7:O'+last).getDisplayValues().flat().filter(Boolean)),true).build());
    });
  });
  inv.getRange('F3').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['All','Draft','Unpaid','Partial','Paid'],true).build());
  dep.getRange('I3').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['All'].concat([...new Set(setup.getRange('E7:E'+last).getDisplayValues().flat().filter(Boolean))]),true).build());
  ss.getSheetByName('AR').getRange('F3').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['All','Open','Unpaid','Partial','Paid'],true).build());
  ss.getSheetByName('AR').getRange('I3').setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['All','Current','1-30','31-60','61-90','90+','Closed'],true).build());
}

function installNamedRanges_() {
  const ss=SpreadsheetApp.getActive();
  const defs={Products:'Setup!A7:A',Accounts:'Setup!J7:J',SalesReps:'Setup!O7:O',AccountTypes:'Setup!W7:W',PaymentTerms:'Setup!Z7:Z'};
  ss.getNamedRanges().forEach(n=>{ if(defs[n.getName()]) n.remove(); });
  Object.keys(defs).forEach(name=>ss.setNamedRange(name, ss.getRange(defs[name])));
}

function installProtections_() {
  const ss=SpreadsheetApp.getActive();
  // Warning-only protections preserve usability while making derived cells visibly deliberate.
  [['Invoices','J7:W'],['Depletion','E7:O'],['AR','A7:L'],['Reports','A10:N'],['Commissions','A10:J']].forEach(x=>{
    const sh=ss.getSheetByName(x[0]);
    sh.getProtections(SpreadsheetApp.ProtectionType.RANGE).filter(p=>String(p.getDescription()||'').startsWith('Lagom V3')).forEach(p=>p.remove());
    const p=sh.getRange(x[1]).protect().setDescription('Lagom V3 · derived range'); p.setWarningOnly(true);
  });
}

function newInvoice() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Invoices');
  const start=7, last=Math.max(sh.getLastRow(),start); let row=last+1;
  for (let r=start;r<=last;r++) if (!sh.getRange(r,1).getValue()) { row=r; break; }
  sh.activate(); sh.getRange(row,1,1,9).activate(); sh.getRange(row,2).setValue(new Date()).setNumberFormat('m/d/yyyy');
  SpreadsheetApp.getActive().toast('New invoice entry prepared on row '+row+'.','Lagom V3',4);
}

function openInvoicePrompt() {
  const ui=SpreadsheetApp.getUi(); const res=ui.prompt('Find invoice','Enter an invoice number.',ui.ButtonSet.OK_CANCEL); if(res.getSelectedButton()!==ui.Button.OK) return;
  const id=res.getResponseText().trim(); if(!id) return; const sh=SpreadsheetApp.getActive().getSheetByName('Invoices');
  const found=sh.getRange('A7:A').createTextFinder(id).matchEntireCell(true).findNext();
  if(found){ sh.activate(); found.activate(); } else ui.alert('Invoice '+id+' was not found.');
}

function markSelectedInvoicePaid() {
  const ss=SpreadsheetApp.getActive(), sh=ss.getSheetByName('Invoices');
  if (ss.getActiveSheet().getName()!=='Invoices') throw new Error('Open Invoices and select the invoice row first.');
  const row=ss.getActiveRange().getRow(); if(row<7) throw new Error('Select a data row first.');
  const id=sh.getRange(row,1).getDisplayValue(); const revenue=Number(sh.getRange(row,12).getValue()||0);
  if(!id || revenue<=0) throw new Error('The selected row is not a valid invoiced transaction.');
  sh.getRange(row,7).setValue(revenue).setNumberFormat('$#,##0.00'); sh.getRange(row,8).setValue(new Date()).setNumberFormat('m/d/yyyy');
  SpreadsheetApp.flush(); ss.toast('Invoice '+id+' marked paid. Derived status will recalculate from the ledger.','Lagom V3',5);
}

function refreshReports() { SpreadsheetApp.flush(); SpreadsheetApp.getActive().getSheetByName('Reports').activate(); SpreadsheetApp.getActive().toast('Reports recalculated from the live ledger.','Lagom V3',4); }
