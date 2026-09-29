const num = value => Number(value) || 0;
const day = value => value ? String(value).slice(0, 10) : null;
const lower = value => String(value || '').trim().toLowerCase();
const round2 = value => Math.round((Number(value) + Number.EPSILON) * 100) / 100;

function dateValue(value) {
  if (!value) return null;
  const d = new Date(String(value).slice(0, 10) + 'T12:00:00');
  return Number.isNaN(d.getTime()) ? null : d;
}

function daysBetween(from, to) {
  const a = dateValue(from);
  const b = dateValue(to);
  if (!a || !b) return 0;
  return Math.floor((b - a) / 86400000);
}

function agingBucket(balanceDue, dueDate, today) {
  if (num(balanceDue) <= 0) return 'Paid';
  const days = dueDate ? daysBetween(dueDate, today) : 0;
  if (days <= 0) return 'Current';
  if (days <= 30) return '1-30';
  if (days <= 60) return '31-60';
  if (days <= 90) return '61-90';
  return '90+';
}

function actionForInvoice(invoice) {
  if (num(invoice.balanceDue) <= 0) return 'Clear';
  if (invoice.daysPastDue <= 0) return 'Monitor';
  if (invoice.daysPastDue <= 30) return 'Follow Up';
  if (invoice.daysPastDue <= 60) return 'Escalate';
  if (invoice.daysPastDue <= 90) return 'Urgent';
  return 'Immediate Action';
}

export function buildCompanyOperationsModel({
  invoices = [],
  items = [],
  products = [],
  commissions = [],
  reorders = [],
  today = new Date().toISOString().slice(0, 10),
}) {
  const invoiceById = new Map(invoices.map(invoice => [invoice.id, invoice]));
  const productById = new Map(products.map(product => [product.id, product]));

  const lines = items.map((item, index) => {
    const invoice = invoiceById.get(item.invoice_id) || {};
    const product = productById.get(item.product_id) || {};
    const casesSold = num(item.cases_sold);
    const salePrice = num(item.sale_price);
    const revenue = item.revenue == null ? casesSold * salePrice : num(item.revenue);
    const cogsPerCase = item.cogs_per_case == null ? num(product.cogs_per_case) : num(item.cogs_per_case);
    const totalCogs = item.total_cogs == null ? casesSold * cogsPerCase : num(item.total_cogs);
    const grossProfit = item.gross_profit == null ? revenue - totalCogs : num(item.gross_profit);

    return {
      id: item.id || 'line-' + index,
      invoiceId: invoice.id || item.invoice_id || null,
      invoiceNumber: String(invoice.invoice_number || ''),
      invoiceDate: day(invoice.issued_at),
      dueDate: day(invoice.due_date),
      paymentDate: day(invoice.payment_date),
      accountId: invoice.prospect_id || null,
      account: invoice.account_name || '',
      city: invoice.city || '',
      channel: invoice.channel || '',
      rep: invoice.rep_name || '',
      accountType: invoice.sale_type || '',
      paymentStatus: invoice.status || 'Unpaid',
      productId: item.product_id || null,
      product: item.product_name || product.name || '',
      sku: item.sku || product.sku || '',
      category: item.category || product.category || '',
      productLine: product.product_line || item.product_line || '',
      casesSold,
      salePrice,
      revenue: round2(revenue),
      cogsPerCase: round2(cogsPerCase),
      totalCogs: round2(totalCogs),
      grossProfit: round2(grossProfit),
      grossMargin: revenue ? grossProfit / revenue : 0,
      lookupKey: String(item.source_line_key || item.lookup_key || ''),
      raw: item,
    };
  });

  const duplicateKeys = new Map();
  lines.forEach(line => {
    const key = [
      line.invoiceNumber,
      lower(line.product),
      line.casesSold,
      line.salePrice,
    ].join('|');
    duplicateKeys.set(key, (duplicateKeys.get(key) || 0) + 1);
  });
  lines.forEach(line => {
    const key = [
      line.invoiceNumber,
      lower(line.product),
      line.casesSold,
      line.salePrice,
    ].join('|');
    line.duplicate = (duplicateKeys.get(key) || 0) > 1;
    line.orphanInvoice = !invoiceById.has(line.invoiceId);
    line.unmappedProduct = !line.productId || !productById.has(line.productId);
  });

  const linesByInvoice = new Map();
  lines.forEach(line => {
    if (!linesByInvoice.has(line.invoiceId)) linesByInvoice.set(line.invoiceId, []);
    linesByInvoice.get(line.invoiceId).push(line);
  });

  const invoiceRows = invoices.map(invoice => {
    const related = linesByInvoice.get(invoice.id) || [];
    const lineRevenue = round2(related.reduce((sum, line) => sum + line.revenue, 0));
    const lineCases = round2(related.reduce((sum, line) => sum + line.casesSold, 0));
    const totalCogs = round2(related.reduce((sum, line) => sum + line.totalCogs, 0));
    const grossProfit = round2(related.reduce((sum, line) => sum + line.grossProfit, 0));
    const invoiceTotal = invoice.invoice_total == null ? lineRevenue : num(invoice.invoice_total);
    const amountPaid = num(invoice.amount_paid);
    const balanceDue = invoice.balance_due == null ? Math.max(0, invoiceTotal - amountPaid) : num(invoice.balance_due);
    const dueDate = day(invoice.due_date);
    const daysPastDue = balanceDue > 0 && dueDate ? Math.max(0, daysBetween(dueDate, today)) : 0;
    const aging = agingBucket(balanceDue, dueDate, today);

    const row = {
      ...invoice,
      issuedAt: day(invoice.issued_at),
      dueDate,
      paymentDate: day(invoice.payment_date),
      commissionEligibleDate: day(invoice.commission_eligible_date || invoice.payment_date),
      invoiceNumber: String(invoice.invoice_number || ''),
      accountName: invoice.account_name || '',
      repName: invoice.rep_name || '',
      saleType: invoice.sale_type || '',
      invoiceTotal: round2(invoiceTotal),
      lineRevenue,
      cases: lineCases,
      totalCogs,
      grossProfit,
      grossMargin: lineRevenue ? grossProfit / lineRevenue : 0,
      amountPaid: round2(amountPaid),
      balanceDue: round2(balanceDue),
      daysPastDue,
      aging,
      isOverdue: balanceDue > 0 && daysPastDue > 0,
      lineCount: related.length,
      reconciliationDelta: round2(invoiceTotal - lineRevenue),
    };
    row.action = actionForInvoice(row);
    return row;
  });

  const qualityIssues = [];
  invoiceRows.forEach(invoice => {
    const ref = invoice.invoiceNumber || invoice.id;
    if (!invoice.invoiceNumber) qualityIssues.push({scope:'Invoice', record:ref, severity:'High', issue:'Missing invoice number'});
    if (!invoice.issuedAt) qualityIssues.push({scope:'Invoice', record:ref, severity:'High', issue:'Missing invoice date'});
    if (!invoice.accountName) qualityIssues.push({scope:'Invoice', record:ref, severity:'High', issue:'Missing account'});
    if (!invoice.repName) qualityIssues.push({scope:'Invoice', record:ref, severity:'Medium', issue:'Missing sales rep'});
    if (!invoice.terms) qualityIssues.push({scope:'Invoice', record:ref, severity:'Low', issue:'Missing payment terms'});
    if (!invoice.lineCount && invoice.status !== 'Draft') qualityIssues.push({scope:'Invoice', record:ref, severity:'High', issue:'Invoice has no depletion lines'});
    if (invoice.amountPaid < 0) qualityIssues.push({scope:'Invoice', record:ref, severity:'High', issue:'Invalid payment amount'});
    if (invoice.amountPaid - invoice.invoiceTotal > 0.005) qualityIssues.push({scope:'Invoice', record:ref, severity:'High', issue:'Payment exceeds invoice total'});
    if (Math.abs(invoice.reconciliationDelta) > 0.01) qualityIssues.push({scope:'Invoice', record:ref, severity:'High', issue:'Invoice revenue does not reconcile to line revenue'});
  });

  lines.forEach(line => {
    const ref = line.invoiceNumber ? line.invoiceNumber + ' / ' + (line.sku || line.product) : line.id;
    if (!line.invoiceNumber || line.orphanInvoice) qualityIssues.push({scope:'Depletion', record:ref, severity:'High', issue:'Orphan or missing invoice'});
    if (!line.product || line.unmappedProduct) qualityIssues.push({scope:'Depletion', record:ref, severity:'High', issue:'Unknown or unmapped product'});
    if (line.casesSold <= 0) qualityIssues.push({scope:'Depletion', record:ref, severity:'High', issue:'Cases must be greater than zero'});
    if (line.salePrice <= 0) qualityIssues.push({scope:'Depletion', record:ref, severity:'High', issue:'Sale price must be greater than zero'});
    if (line.cogsPerCase <= 0) qualityIssues.push({scope:'Depletion', record:ref, severity:'Medium', issue:'Missing approved product COGS'});
    if (line.duplicate) qualityIssues.push({scope:'Depletion', record:ref, severity:'Medium', issue:'Possible duplicate depletion line'});
  });

  const nonDraftInvoices = invoiceRows.filter(invoice => invoice.status !== 'Draft');
  const revenue = round2(nonDraftInvoices.reduce((sum, invoice) => sum + invoice.lineRevenue, 0));
  const cases = round2(nonDraftInvoices.reduce((sum, invoice) => sum + invoice.cases, 0));
  const totalCogs = round2(nonDraftInvoices.reduce((sum, invoice) => sum + invoice.totalCogs, 0));
  const grossProfit = round2(nonDraftInvoices.reduce((sum, invoice) => sum + invoice.grossProfit, 0));
  const openAR = round2(nonDraftInvoices.reduce((sum, invoice) => sum + invoice.balanceDue, 0));
  const overdueAR = round2(nonDraftInvoices.filter(invoice => invoice.isOverdue).reduce((sum, invoice) => sum + invoice.balanceDue, 0));
  const paidRevenue = round2(nonDraftInvoices.filter(invoice => invoice.status === 'Paid').reduce((sum, invoice) => sum + invoice.invoiceTotal, 0));

  const commissionRows = commissions.map(row => {
    const invoiceLines = linesByInvoice.get(row.invoice_id) || [];
    return {
      ...row,
      cases: round2(invoiceLines.reduce((sum, line) => sum + line.casesSold, 0)),
      paidRevenue: num(row.paid_revenue),
      commissionRate: num(row.commission_rate),
      commissionAmount: num(row.commission_amount),
      eligibleDate: day(row.commission_eligible_date),
    };
  });

  return {
    today,
    products,
    reorders,
    lines,
    invoices: invoiceRows,
    commissions: commissionRows,
    qualityIssues,
    kpis: {
      revenue,
      cases,
      totalCogs,
      grossProfit,
      grossMargin: revenue ? grossProfit / revenue : 0,
      openAR,
      overdueAR,
      paidRevenue,
      needsAttention: qualityIssues.length,
    },
  };
}

export function monthlyPerformance(model, year) {
  const y = Number(year);
  return Array.from({length:12}, (_, month) => {
    const invoices = model.invoices.filter(invoice => {
      if (invoice.status === 'Draft' || !invoice.issuedAt) return false;
      const d = dateValue(invoice.issuedAt);
      return d && d.getFullYear() === y && d.getMonth() === month;
    });
    const revenue = round2(invoices.reduce((sum, invoice) => sum + invoice.lineRevenue, 0));
    const cases = round2(invoices.reduce((sum, invoice) => sum + invoice.cases, 0));
    const grossProfit = round2(invoices.reduce((sum, invoice) => sum + invoice.grossProfit, 0));
    return {
      month,
      label: new Date(2000, month, 1).toLocaleDateString('en-US', {month:'short'}),
      revenue,
      cases,
      grossProfit,
      margin: revenue ? grossProfit / revenue : 0,
    };
  });
}

export function arAging(model) {
  const order = ['Current','1-30','31-60','61-90','90+'];
  return order.map(bucket => {
    const rows = model.invoices.filter(invoice => invoice.balanceDue > 0 && invoice.aging === bucket);
    return {
      bucket,
      invoices: rows.length,
      amount: round2(rows.reduce((sum, invoice) => sum + invoice.balanceDue, 0)),
    };
  });
}

export function productPerformance(lines) {
  const map = new Map();
  lines.forEach(line => {
    const key = line.productId || line.sku || line.product;
    if (!key) return;
    if (!map.has(key)) map.set(key, {
      key,
      product: line.product,
      sku: line.sku,
      category: line.category,
      productLine: line.productLine,
      cases:0,
      revenue:0,
      cogs:0,
      grossProfit:0,
      invoiceIds:new Set(),
      accounts:new Set(),
      lastSale:null,
    });
    const row = map.get(key);
    row.cases += line.casesSold;
    row.revenue += line.revenue;
    row.cogs += line.totalCogs;
    row.grossProfit += line.grossProfit;
    if (line.invoiceId) row.invoiceIds.add(line.invoiceId);
    if (line.account) row.accounts.add(line.account);
    if (line.invoiceDate && (!row.lastSale || line.invoiceDate > row.lastSale)) row.lastSale = line.invoiceDate;
  });
  return Array.from(map.values()).map(row => ({
    ...row,
    cases:round2(row.cases),
    revenue:round2(row.revenue),
    cogs:round2(row.cogs),
    grossProfit:round2(row.grossProfit),
    margin:row.revenue ? row.grossProfit / row.revenue : 0,
    invoiceCount:row.invoiceIds.size,
    activeAccounts:row.accounts.size,
  })).sort((a,b) => b.revenue - a.revenue);
}

export function accountPerformance(model) {
  const map = new Map();
  model.invoices.filter(invoice => invoice.status !== 'Draft').forEach(invoice => {
    const key = invoice.prospect_id || invoice.accountName;
    if (!key) return;
    if (!map.has(key)) map.set(key, {
      key,
      account:invoice.accountName,
      city:invoice.city || '',
      revenue:0,
      cases:0,
      invoiceCount:0,
      currentOpenAR:0,
      lastOrder:null,
    });
    const row = map.get(key);
    row.revenue += invoice.lineRevenue;
    row.cases += invoice.cases;
    row.invoiceCount += 1;
    row.currentOpenAR += invoice.balanceDue;
    if (invoice.issuedAt && (!row.lastOrder || invoice.issuedAt > row.lastOrder)) row.lastOrder = invoice.issuedAt;
  });
  return Array.from(map.values()).map(row => ({
    ...row,
    revenue:round2(row.revenue),
    cases:round2(row.cases),
    currentOpenAR:round2(row.currentOpenAR),
  })).sort((a,b) => b.revenue - a.revenue);
}

export function repPerformance(model) {
  const map = new Map();
  model.invoices.filter(invoice => invoice.status !== 'Draft').forEach(invoice => {
    const key = invoice.repName || 'Unassigned';
    if (!map.has(key)) map.set(key, {
      rep:key,
      revenue:0,
      cases:0,
      grossProfit:0,
      invoiceCount:0,
      paidRevenue:0,
      currentOpenAR:0,
    });
    const row = map.get(key);
    row.revenue += invoice.lineRevenue;
    row.cases += invoice.cases;
    row.grossProfit += invoice.grossProfit;
    row.invoiceCount += 1;
    row.currentOpenAR += invoice.balanceDue;
    if (invoice.status === 'Paid') row.paidRevenue += invoice.invoiceTotal;
  });
  return Array.from(map.values()).map(row => ({
    ...row,
    revenue:round2(row.revenue),
    cases:round2(row.cases),
    grossProfit:round2(row.grossProfit),
    paidRevenue:round2(row.paidRevenue),
    currentOpenAR:round2(row.currentOpenAR),
  })).sort((a,b) => b.revenue - a.revenue);
}

export function filterByPeriod(rows, dateKey, startDate, endDate) {
  return rows.filter(row => {
    const value = day(row[dateKey]);
    if (!value) return false;
    if (startDate && value < startDate) return false;
    if (endDate && value > endDate) return false;
    return true;
  });
}
