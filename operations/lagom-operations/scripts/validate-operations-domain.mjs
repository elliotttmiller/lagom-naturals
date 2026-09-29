import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';

const domainPath=resolve(process.cwd(),'lib/companyOperationsDomain.js');
const source=await readFile(domainPath,'utf8');
const moduleUrl='data:text/javascript;base64,'+Buffer.from(source).toString('base64');
const {
  buildCompanyOperationsModel,
  monthlyPerformance,
}=await import(moduleUrl);

const products=[
  {id:'p1',name:'24K Lemonade',sku:'1',product_line:'Seltzer',cogs_per_case:72},
  {id:'p2',name:'Strawberry Lime Fusion',sku:'2',product_line:'Seltzer',cogs_per_case:72},
  {id:'p3',name:'Blackberry Breeze',sku:'3',product_line:'Seltzer',cogs_per_case:72},
  {id:'p4',name:'Watermelon Refresher',sku:'4',product_line:'Seltzer',cogs_per_case:72},
];

const invoices=[
  {id:'i1088',invoice_number:'1088',issued_at:'2026-02-11',due_date:'2026-02-11',payment_date:'2026-02-11',commission_eligible_date:'2026-02-11',account_name:'Wayzata Smoke Shop & Vape',rep_name:'Tito',sale_type:'Reorder',status:'Paid',invoice_total:291.96,amount_paid:291.96,balance_due:0,terms:'Due on receipt'},
  {id:'i1089',invoice_number:'1089',issued_at:'2026-02-11',due_date:'2026-02-11',payment_date:'2026-02-11',commission_eligible_date:'2026-02-11',account_name:'Long Lake Orono Smoke Shop',rep_name:'Tito',sale_type:'Reorder',status:'Paid',invoice_total:291.96,amount_paid:291.96,balance_due:0,terms:'Due on receipt'},
];

const items=[];
for(const invoice of invoices){
  products.forEach((product,index)=>{
    items.push({
      id:invoice.id+'-'+index,
      invoice_id:invoice.id,
      product_id:product.id,
      product_name:product.name,
      sku:product.sku,
      cases_sold:1,
      sale_price:72.99,
      revenue:72.99,
      cogs_per_case:72,
      total_cogs:72,
      gross_profit:.99,
    });
  });
}

const commissions=invoices.map(invoice=>({
  invoice_id:invoice.id,
  invoice_number:invoice.invoice_number,
  account_name:invoice.account_name,
  rep_name:'Tito',
  sale_type:'Reorder',
  paid_revenue:invoice.invoice_total,
  commission_eligible_date:'2026-02-11',
  commission_rate:.04,
  commission_amount:11.6784,
}));

const model=buildCompanyOperationsModel({
  invoices,
  items,
  products,
  commissions,
  today:'2026-09-29',
});
const monthly=monthlyPerformance(model,2026);

assert.equal(model.invoices.length,2,'invoice count');
assert.equal(model.lines.length,8,'invoice line count');
assert.equal(model.kpis.cases,8,'cases');
assert.equal(model.kpis.revenue,583.92,'revenue');
assert.equal(model.kpis.totalCogs,576,'COGS');
assert.equal(model.kpis.grossProfit,7.92,'gross profit');
assert.equal(model.kpis.openAR,0,'open AR');
assert.equal(model.kpis.paidRevenue,583.92,'paid revenue');
assert.equal(model.qualityIssues.length,0,'baseline QA');
assert.equal(monthly[1].revenue,583.92,'February revenue');
assert.equal(model.commissions.reduce((total,row)=>total+row.cases,0),8,'commission eligible cases');

console.log('Company operations domain baseline reconciles: 2 invoices, 8 lines, 8 cases, $583.92 revenue, $576.00 COGS, $7.92 gross profit, $0.00 AR.');
