function onOpen() {
  SpreadsheetApp.getUi().createMenu('Lagom')
    .addItem('Install / Refresh V3 UI', 'installLagomV3')
    .addSeparator()
    .addItem('New Invoice', 'newInvoice')
    .addItem('Find Invoice', 'openInvoicePrompt')
    .addItem('Mark Selected Invoice Paid', 'markSelectedInvoicePaid')
    .addSeparator()
    .addItem('Apply Current Filters', 'applyAllFilters')
    .addItem('Reset Workspace', 'resetWorkspace')
    .addSeparator()
    .addItem('Run QA Audit', 'runQaAudit')
    .addItem('Refresh Reports', 'refreshReports')
    .addToUi();
}

function installLagomV3() {
  const ss = SpreadsheetApp.getActive();
  const required = ['Overview','Invoices','Depletion','AR','Reports','Commissions','Setup','Guide'];
  const missing = required.filter(n => !ss.getSheetByName(n));
  if (missing.length) throw new Error('Missing required sheets: ' + missing.join(', '));
  ensureQaSheet_();
  applyLagomV3Styles_();
  installValidations_();
  installNamedRanges_();
  installProtections_();
  rebuildOverviewChart_();
  applyAllFilters();
  runQaAudit();
  SpreadsheetApp.flush();
  ss.toast('Lagom Naturals V3 is installed and synchronized.', 'Lagom V3', 5);
}

function onEdit(e) {
  if (!e || !e.range) return;
  const sh = e.range.getSheet();
  const name = sh.getName();
  if (['Invoices','Depletion','AR'].includes(name)) {
    const a1 = e.range.getA1Notation();
    const cfg = LAGOM.sheets[name];
    const controls = [cfg.searchCell].concat(cfg.filters.map(f => f.cell));
    if (controls.includes(a1)) applySheetFilter_(name);
  }
  if (name === 'Setup' && ['B3','K3','P3'].includes(e.range.getA1Notation())) {
    jumpToSetupMatch_(e.range.getA1Notation(), String(e.value || '').trim());
  }
}
