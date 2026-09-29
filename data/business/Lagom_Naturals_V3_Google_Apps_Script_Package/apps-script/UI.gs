function applyLagomV3Styles_() {
  const ss = SpreadsheetApp.getActive();
  Object.keys(LAGOM.sheets).forEach(name => {
    const sh = ss.getSheetByName(name);
    if (!sh) return;
    baseSheet_(sh, LAGOM.sheets[name]);
  });
  styleOverview_();
  styleInvoices_();
  styleDepletion_();
  styleAR_();
  styleReports_();
  styleCommissions_();
  styleSetup_();
  styleGuide_();
  styleQaAudit_();
}

function baseSheet_(sh, cfg) {
  const t = LAGOM.tokens;
  sh.setHiddenGridlines(true);
  sh.setTabColor(t.accentMid);
  sh.getRange(1,1,sh.getMaxRows(), Math.min(cfg.lastCol, sh.getMaxColumns()))
    .setFontFamily(LAGOM.font).setFontColor(t.textPrimary).setFontSize(10).setBackground(t.canvas);
  sh.setFrozenRows(cfg.freezeRows || 3);
  sh.getRange(1,1,1,cfg.lastCol).setBackground(t.canvas);
  sh.getRange(2,1,1,cfg.lastCol).setBackground(t.canvas);
  sh.setRowHeight(1, 34); sh.setRowHeight(2, 22);
  const title = sh.getRange('A1');
  title.setFontFamily(LAGOM.font).setFontSize(20).setFontWeight('bold').setFontColor(t.textPrimary);
  sh.getRange('A2').setFontFamily(LAGOM.font).setFontSize(9).setFontColor(t.textSecondary).setWrap(true);
  try { insertBrandMark_(sh); } catch (err) {}
}

function insertBrandMark_(sh) {
  // Keep exactly one Lagom mark per sheet.
  sh.getImages().forEach(img => { try { if ((img.getAltTextTitle() || '') === 'Lagom mark') img.remove(); } catch(e){} });
  const bytes = Utilities.base64Decode(LAGOM.logoBase64);
  const blob = Utilities.newBlob(bytes, 'image/png', 'lagom-mark.png');
  const img = sh.insertImage(blob, 1, 1);
  img.setWidth(26).setHeight(26).setAltTextTitle('Lagom mark').setAltTextDescription('Lagom Naturals brand mark');
  // Shift masthead text right without changing operational data rows.
  const current = sh.getRange('A1').getDisplayValue();
  if (current && !sh.getRange('B1').getValue()) {
    sh.getRange('B1').setValue(current);
    sh.getRange('A1').clearContent();
  }
  const sub = sh.getRange('A2').getDisplayValue();
  if (sub && !sh.getRange('B2').getValue()) {
    sh.getRange('B2').setValue(sub);
    sh.getRange('A2').clearContent();
  }
  sh.getRange('B1').setFontFamily(LAGOM.font).setFontSize(20).setFontWeight('bold').setFontColor(LAGOM.tokens.textPrimary);
  sh.getRange('B2').setFontFamily(LAGOM.font).setFontSize(9).setFontColor(LAGOM.tokens.textSecondary).setWrap(true);
  sh.setColumnWidth(1, 38);
}

function styleControl_(sh, a1, label) {
  const t=LAGOM.tokens; const r=sh.getRange(a1);
  if (label) r.setNote(label);
  r.setBackground(t.surface).setFontColor(t.textPrimary).setFontWeight('normal')
   .setBorder(true,true,true,true,false,false,t.border,SpreadsheetApp.BorderStyle.SOLID)
   .setVerticalAlignment('middle');
}

function styleKpiCard_(sh, labelCell, valueCell, accent) {
  const t=LAGOM.tokens;
  sh.getRange(labelCell).setFontSize(9).setFontWeight('normal').setFontColor(t.textSecondary).setBackground(accent ? t.accentLight : t.surface);
  sh.getRange(valueCell).setFontSize(20).setFontWeight('bold').setFontColor(accent ? t.accentText : t.textPrimary).setBackground(accent ? t.accentLight : t.surface);
}

function tableHeader_(r) {
  const t=LAGOM.tokens;
  r.setBackground(t.tableHeader).setFontColor(t.tableHeaderText).setFontWeight('bold').setFontSize(9)
   .setVerticalAlignment('middle').setWrap(true)
   .setBorder(null,null,true,null,null,null,t.tableHeaderBorder,SpreadsheetApp.BorderStyle.SOLID);
}

function bodySurface_(r) {
  const t=LAGOM.tokens;
  r.setBackground(t.surface).setFontColor(t.textPrimary).setFontSize(9)
   .setBorder(null,null,true,null,null,null,t.border,SpreadsheetApp.BorderStyle.SOLID);
}

function inputSurface_(r) { r.setBackground(LAGOM.tokens.input); }
function calcSurface_(r) { r.setBackground(LAGOM.tokens.calculated); }

function sectionBand_(r) {
  const t=LAGOM.tokens;
  r.setBackground(t.secondary).setFontColor(t.textPrimary).setFontWeight('bold').setFontSize(11)
   .setBorder(null,null,true,null,null,null,t.borderStrong,SpreadsheetApp.BorderStyle.SOLID);
}

function styleOverview_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Overview'), t=LAGOM.tokens;
  if (!sh) return;
  sh.setColumnWidths(1,23,74); sh.setColumnWidth(2,105); sh.setColumnWidth(18,86); sh.setColumnWidth(19,105);
  sectionBand_(sh.getRange('A4:W4'));
  [['A5','A6',true],['E5','E6',false],['I5','I6',true],['M5','M6',false],['Q5','Q6',false],['U5','U6',false]].forEach(x=>styleKpiCard_(sh,x[0],x[1],x[2]));
  ['A5:C7','E5:G7','I5:K7','M5:O7','Q5:S7','U5:W7'].forEach(a=>sh.getRange(a).setBackground(t.surface).setBorder(true,true,true,true,false,false,t.border,SpreadsheetApp.BorderStyle.SOLID));
  sectionBand_(sh.getRange('A11:N11')); sectionBand_(sh.getRange('Q11:W11'));
  styleControl_(sh,'B12','Reporting year');
  tableHeader_(sh.getRange('A15:D15')); bodySurface_(sh.getRange('A16:D27'));
  tableHeader_(sh.getRange('Q15:S15')); bodySurface_(sh.getRange('Q16:S22'));
  sh.getRange('B16:B27').setNumberFormat('$#,##0.00'); sh.getRange('D16:D27').setNumberFormat('$#,##0.00');
  sh.getRange('S16:S22').setNumberFormat('$#,##0.00');
  sh.setRowHeight(6,32);
}

function styleInvoices_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Invoices'), t=LAGOM.tokens;
  sh.setColumnWidths(1,24,105); sh.setColumnWidth(3,205); sh.setColumnWidth(9,210); sh.setColumnWidth(24,40);
  sh.getRange('X:X').hideColumns(1);
  sh.setRowHeight(3,36); sh.setRowHeight(4,30); sh.setRowHeight(6,30);
  sh.getRange('A3').setFontWeight('bold').setFontColor(t.textSecondary); sh.getRange('B3:D3').merge(); styleControl_(sh,'B3:D3','Search invoice, account, city or rep');
  ['E3','H3'].forEach(a=>sh.getRange(a).setFontWeight('bold').setFontColor(t.textSecondary));
  styleControl_(sh,'F3','Payment status filter'); styleControl_(sh,'I3','Sales rep filter');
  sh.getRange('K3:N3').merge().setValue('Lagom menu  ·  New Invoice  ·  Run QA').setBackground(t.secondary).setFontColor(t.textSecondary).setFontSize(9).setHorizontalAlignment('center');
  [['A4','B4'],['D4','E4'],['G4','H4'],['J4','K4']].forEach((p,i)=>styleKpiCard_(sh,p[0],p[1],i===1));
  sh.getRange('M4').setValue('VISIBLE').setFontColor(t.textSecondary).setFontSize(9); sh.getRange('N4').setFormula('=SUBTOTAL(103,A7:A)').setFontWeight('bold').setFontSize(15);
  sh.getRange('A5:N5').setBackground(t.canvas).setFontColor(t.textMuted).setFontSize(8);
  tableHeader_(sh.getRange('A6:W6')); bodySurface_(sh.getRange('A7:W'+sh.getMaxRows()));
  inputSurface_(sh.getRange('A7:I'+sh.getMaxRows())); calcSurface_(sh.getRange('J7:W'+sh.getMaxRows()));
  sh.getRange('B7:B').setNumberFormat('m/d/yyyy'); sh.getRange('H7:H').setNumberFormat('m/d/yyyy'); sh.getRange('R7:R').setNumberFormat('m/d/yyyy'); sh.getRange('V7:V').setNumberFormat('m/d/yyyy');
  ['G','L','N','O','Q'].forEach(c=>sh.getRange(c+'7:'+c).setNumberFormat('$#,##0.00')); sh.getRange('P7:P').setNumberFormat('0.0%');
  addStatusFormatting_(sh,'S7:S','W7:W');
}

function styleDepletion_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Depletion'), t=LAGOM.tokens;
  sh.setColumnWidths(1,16,108); sh.setColumnWidth(2,220); sh.setColumnWidth(12,210); sh.setColumnWidth(16,40); sh.getRange('P:P').hideColumns(1);
  sh.setRowHeight(3,36); sh.setRowHeight(4,30); sh.setRowHeight(6,30);
  sh.getRange('A3').setFontWeight('bold').setFontColor(t.textSecondary); sh.getRange('B3:D3').merge(); styleControl_(sh,'B3:D3','Search invoice, product, account or rep');
  ['E3','H3'].forEach(a=>sh.getRange(a).setFontWeight('bold').setFontColor(t.textSecondary)); styleControl_(sh,'F3','Sales rep filter'); styleControl_(sh,'I3','Product line filter');
  sh.getRange('K3:N3').merge().setValue('Lagom menu  ·  Apply Filters  ·  Reset Workspace').setBackground(t.secondary).setFontColor(t.textSecondary).setFontSize(9).setHorizontalAlignment('center');
  [['A4','B4'],['D4','E4'],['G4','H4'],['J4','K4']].forEach((p,i)=>styleKpiCard_(sh,p[0],p[1],i===1));
  sh.getRange('M4').setValue('VISIBLE').setFontColor(t.textSecondary).setFontSize(9); sh.getRange('N4').setFormula('=SUBTOTAL(103,A7:A)').setFontWeight('bold').setFontSize(15);
  tableHeader_(sh.getRange('A6:O6')); bodySurface_(sh.getRange('A7:O'+sh.getMaxRows())); inputSurface_(sh.getRange('A7:D'+sh.getMaxRows())); calcSurface_(sh.getRange('E7:O'+sh.getMaxRows()));
  ['D','E','H','I','J'].forEach(c=>sh.getRange(c+'7:'+c).setNumberFormat('$#,##0.00')); sh.getRange('K7:K').setNumberFormat('m/d/yyyy'); addStatusFormatting_(sh,'O7:O','O7:O');
}

function styleAR_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('AR'), t=LAGOM.tokens;
  sh.setColumnWidths(1,13,115); sh.setColumnWidth(2,220); sh.setColumnWidth(13,40); sh.getRange('M:M').hideColumns(1);
  sh.setRowHeight(3,36); sh.setRowHeight(4,30); sh.setRowHeight(6,30);
  sh.getRange('A3').setFontWeight('bold').setFontColor(t.textSecondary); sh.getRange('B3:D3').merge(); styleControl_(sh,'B3:D3','Search invoice, account or rep');
  ['E3','H3'].forEach(a=>sh.getRange(a).setFontWeight('bold').setFontColor(t.textSecondary)); styleControl_(sh,'F3','Payment status filter'); styleControl_(sh,'I3','Aging filter');
  sh.getRange('K3:L3').merge().setValue('Lagom menu  ·  Apply Filters').setBackground(t.secondary).setFontColor(t.textSecondary).setFontSize(9).setHorizontalAlignment('center');
  [['A4','B4'],['D4','E4'],['G4','H4']].forEach((p,i)=>styleKpiCard_(sh,p[0],p[1],i===0));
  sh.getRange('J4').setValue('VISIBLE').setFontColor(t.textSecondary).setFontSize(9); sh.getRange('K4').setFormula('=SUBTOTAL(103,A7:A)').setFontWeight('bold').setFontSize(15);
  tableHeader_(sh.getRange('A6:L6')); bodySurface_(sh.getRange('A7:L'+sh.getMaxRows())); calcSurface_(sh.getRange('A7:L'+sh.getMaxRows()));
  ['D','E'].forEach(c=>sh.getRange(c+'7:'+c).setNumberFormat('m/d/yyyy')); ['F','G','H'].forEach(c=>sh.getRange(c+'7:'+c).setNumberFormat('$#,##0.00'));
  addAgingFormatting_(sh); addStatusFormatting_(sh,'I7:I','L7:L');
}

function styleReports_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Reports'), t=LAGOM.tokens;
  sh.setColumnWidths(1,14,110); sh.setColumnWidth(1,210); sh.setColumnWidth(9,220);
  sectionBand_(sh.getRange('A4:N4'));
  ['B5','B6','B7'].forEach(a=>styleControl_(sh,a,'Report filter')); sh.getRange('A5:A7').setFontWeight('bold').setFontColor(t.textSecondary);
  sectionBand_(sh.getRange('A10:G10')); sectionBand_(sh.getRange('I10:N10'));
  tableHeader_(sh.getRange('A11:G11')); bodySurface_(sh.getRange('A12:G'+sh.getMaxRows()));
  tableHeader_(sh.getRange('I11:N11')); bodySurface_(sh.getRange('I12:N'+sh.getMaxRows()));
  ['D','E','F','K','N'].forEach(c=>sh.getRange(c+'12:'+c).setNumberFormat('$#,##0.00')); sh.getRange('G12:G').setNumberFormat('0.0%');
}

function styleCommissions_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Commissions'), t=LAGOM.tokens;
  sh.setColumnWidths(1,10,115); sectionBand_(sh.getRange('A4:C4')); sectionBand_(sh.getRange('E4:J4'));
  ['B5','B6','B7'].forEach(a=>styleControl_(sh,a,'Commission filter')); ['F5','F6','F7','F8'].forEach(a=>sh.getRange(a).setBackground(t.calculated));
  sectionBand_(sh.getRange('A10:J10')); ['A11:C12','D11:F12','G11:I12','J11:J12'].forEach(a=>sh.getRange(a).setBackground(t.surface).setBorder(true,true,true,true,false,false,t.border,SpreadsheetApp.BorderStyle.SOLID));
  ['A12','D12','G12','J12'].forEach(a=>sh.getRange(a).setFontSize(18).setFontWeight('bold')); ['A12','D12','G12','J12'].forEach(a=>sh.getRange(a).setNumberFormat('$#,##0.00'));
}

function styleSetup_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Setup'), t=LAGOM.tokens;
  sh.setColumnWidths(1,33,96); sh.setColumnWidth(1,215); sh.setColumnWidth(3,210); sh.setColumnWidth(10,220); sh.setColumnWidth(20,250); sh.setColumnWidth(29,250); sh.setColumnWidth(31,250);
  sh.getRange('A3').setValue('PRODUCT SEARCH').setFontWeight('bold').setFontColor(t.textSecondary); sh.getRange('B3:D3').merge(); styleControl_(sh,'B3:D3','Type a product name or SKU');
  sh.getRange('J3').setValue('ACCOUNT SEARCH').setFontWeight('bold').setFontColor(t.textSecondary); sh.getRange('K3:M3').merge(); styleControl_(sh,'K3:M3','Type an account name');
  sh.getRange('O3').setValue('REP SEARCH').setFontWeight('bold').setFontColor(t.textSecondary); sh.getRange('P3:R3').merge(); styleControl_(sh,'P3:R3','Type a rep name');
  ['A4:H4','J4:M4','O4:U4','W4:W4','Z4:AA4','AC4:AG4'].forEach(a=>sectionBand_(sh.getRange(a)));
  ['A6:H6','J6:M6','O6:U6','W6:W6','Z6:AA6','AC6:AG6'].forEach(a=>tableHeader_(sh.getRange(a)));
  ['A7:H'+sh.getMaxRows(),'J7:M'+sh.getMaxRows(),'O7:U'+sh.getMaxRows(),'W7:W'+sh.getMaxRows(),'Z7:AA'+sh.getMaxRows(),'AC7:AG'+sh.getMaxRows()].forEach(a=>bodySurface_(sh.getRange(a)));
  ['A7:H'+sh.getMaxRows(),'J7:M'+sh.getMaxRows(),'O7:U'+sh.getMaxRows(),'W7:W'+sh.getMaxRows(),'Z7:AA'+sh.getMaxRows()].forEach(a=>inputSurface_(sh.getRange(a)));
  sh.getRange('AC7:AG'+sh.getMaxRows()).setBackground(t.secondary);
  ['P','Q','R'].forEach(c=>sh.getRange(c+'7:'+c).setNumberFormat('0.0%')); sh.getRange('S7:S').setNumberFormat('$#,##0.00');
}

function styleGuide_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Guide'), t=LAGOM.tokens;
  sh.setColumnWidth(1,70); sh.setColumnWidth(2,120); sh.setColumnWidth(3,320); sh.setColumnWidth(4,360);
  sectionBand_(sh.getRange('A4:D4')); tableHeader_(sh.getRange('A6:D6')); bodySurface_(sh.getRange('A7:D12'));
  const max=sh.getLastRow(); for (let r=13;r<=max;r++) {
    const v=String(sh.getRange(r,1).getDisplayValue()||'');
    if (v && v===v.toUpperCase() && v.length>3) sectionBand_(sh.getRange(r,1,1,4));
  }
  sh.getRange('A1:D'+Math.max(max,20)).setWrap(true); sh.getRange('A7:A12').setFontWeight('bold').setFontColor(t.accentText);
}

function styleQaAudit_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('QA Audit'); if(!sh) return; const t=LAGOM.tokens;
  sh.setColumnWidth(1,95); sh.setColumnWidth(2,110); sh.setColumnWidth(3,125); sh.setColumnWidth(4,360); sh.setColumnWidth(5,220); sh.setColumnWidth(6,130);
  sectionBand_(sh.getRange('A4:F4')); tableHeader_(sh.getRange('A6:F6')); bodySurface_(sh.getRange('A7:F'+sh.getMaxRows()));
  sh.getRange('A3:F3').setBackground(t.surface).setFontColor(t.textSecondary).setFontSize(9);
  addQaFormatting_(sh);
}

function addStatusFormatting_(sh, statusA1, qaA1) {
  const t=LAGOM.tokens; const r=sh.getRange(statusA1); r.clearFormat();
  r.setFontFamily(LAGOM.font).setFontSize(9).setBackground(t.calculated);
  const rules=sh.getConditionalFormatRules().filter(rule=>!rule.getRanges().some(x=>x.getA1Notation()===r.getA1Notation()));
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('Paid').setBackground(t.successBg).setFontColor(t.successText).setRanges([r]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('Open').setBackground(t.infoBg).setFontColor(t.infoText).setRanges([r]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('REVIEW').setBackground(t.reviewBg).setFontColor(t.reviewText).setRanges([sh.getRange(qaA1)]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('OK').setBackground(t.successBg).setFontColor(t.successText).setRanges([sh.getRange(qaA1)]).build());
  sh.setConditionalFormatRules(rules);
}

function addAgingFormatting_(sh) {
  const t=LAGOM.tokens, r=sh.getRange('K7:K');
  let rules=sh.getConditionalFormatRules();
  [['Current',t.tertiary,t.textSecondary],['1-30',t.infoBg,t.infoText],['31-60',t.reviewBg,t.reviewText],['61-90','#F1DFC1','#79531C'],['90+',t.criticalBg,t.criticalText],['Closed',t.successBg,t.successText]].forEach(x=>{
    rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo(x[0]).setBackground(x[1]).setFontColor(x[2]).setRanges([r]).build());
  }); sh.setConditionalFormatRules(rules);
}

function addQaFormatting_(sh) {
  const t=LAGOM.tokens, r=sh.getRange('A7:A'); let rules=sh.getConditionalFormatRules();
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('Critical').setBackground(t.criticalBg).setFontColor(t.criticalText).setRanges([r]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('Review').setBackground(t.reviewBg).setFontColor(t.reviewText).setRanges([r]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo('Info').setBackground(t.infoBg).setFontColor(t.infoText).setRanges([r]).build());
  sh.setConditionalFormatRules(rules);
}

function rebuildOverviewChart_() {
  const sh=SpreadsheetApp.getActive().getSheetByName('Overview'); if(!sh) return;
  sh.getCharts().forEach(c=>{ try { if ((c.getOptions().get('title')||'')==='Monthly Revenue') sh.removeChart(c); } catch(e){} });
  const chart=sh.newChart().setChartType(Charts.ChartType.COLUMN).addRange(sh.getRange('A15:B27'))
    .setPosition(12,6,0,0).setOption('title','Monthly Revenue').setOption('legend',{position:'none'})
    .setOption('backgroundColor',LAGOM.tokens.surface).setOption('colors',[LAGOM.tokens.accentMid])
    .setOption('titleTextStyle',{color:LAGOM.tokens.textPrimary,fontName:LAGOM.font,fontSize:12,bold:true})
    .setOption('hAxis',{textStyle:{color:LAGOM.tokens.textSecondary,fontName:LAGOM.font,fontSize:9}})
    .setOption('vAxis',{textStyle:{color:LAGOM.tokens.textSecondary,fontName:LAGOM.font,fontSize:9},format:'$#,##0'})
    .setOption('chartArea',{left:55,top:40,width:'80%',height:'65%'}).build();
  sh.insertChart(chart);
}
