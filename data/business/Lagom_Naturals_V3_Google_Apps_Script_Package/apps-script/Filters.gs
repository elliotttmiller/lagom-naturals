function applyAllFilters() {
  ['Invoices','Depletion','AR'].forEach(applySheetFilter_);
}

function applySheetFilter_(name) {
  const sh=SpreadsheetApp.getActive().getSheetByName(name); if(!sh) return;
  const cfg=LAGOM.sheets[name]; const lastRow=Math.max(sh.getLastRow(), cfg.dataStart);
  const range=sh.getRange(cfg.headerRow,1,lastRow-cfg.headerRow+1,cfg.lastCol);
  let filter=sh.getFilter();
  if (filter && filter.getRange().getA1Notation() !== range.getA1Notation()) { filter.remove(); filter=null; }
  if (!filter) filter=range.createFilter();
  for (let c=1;c<=cfg.lastCol;c++) filter.removeColumnFilterCriteria(c);
  const search=String(sh.getRange(cfg.searchCell).getDisplayValue()||'').trim();
  if (search) filter.setColumnFilterCriteria(cfg.searchCol, SpreadsheetApp.newFilterCriteria().whenTextContains(search).build());
  cfg.filters.forEach(f=>{
    const v=String(sh.getRange(f.cell).getDisplayValue()||'').trim();
    if (v && v!=='All') filter.setColumnFilterCriteria(f.col, SpreadsheetApp.newFilterCriteria().whenTextEqualTo(v).build());
  });
}

function resetWorkspace() {
  const ss=SpreadsheetApp.getActive();
  ['Invoices','Depletion','AR'].forEach(name=>{
    const sh=ss.getSheetByName(name), cfg=LAGOM.sheets[name]; if(!sh) return;
    sh.getRange(cfg.searchCell).clearContent(); cfg.filters.forEach(f=>sh.getRange(f.cell).setValue(f.cell==='F3' && name==='AR' ? 'Open' : 'All'));
    const filter=sh.getFilter(); if(filter) filter.remove();
  });
  ss.getSheetByName('Invoices').activate();
  ss.toast('Search and filter controls were reset.', 'Lagom V3', 4);
}

function jumpToSetupMatch_(cell, term) {
  if (!term) return; const sh=SpreadsheetApp.getActive().getSheetByName('Setup');
  let range;
  if (cell==='B3') range=sh.getRange('A7:B'+sh.getLastRow());
  if (cell==='K3') range=sh.getRange('J7:J'+sh.getLastRow());
  if (cell==='P3') range=sh.getRange('O7:O'+sh.getLastRow());
  if (!range) return;
  const found=range.createTextFinder(term).matchCase(false).useRegularExpression(false).findNext();
  if (found) { sh.activate(); found.activate(); }
}
