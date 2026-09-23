export const DEPLETION_COLUMNS = ['Invoice Date','Type','Invoice #','Acct #','Account Name','City','Channel','Sales Rep','Product','SKU','Description','Category','Cases Sold','Sale Price','Revenue','Payment Status','Notes','Account Type','COGS/Case','Total COGS','Gross Profit','Dup Check','Inv Line#','Lookup Key','Adjustment Type','Cost/Bag Reference','Invoice Total','Amount Paid','Balance Due','Due Date','Days Past Due','Collection Status','Last Follow-Up Date','Next Follow-Up Date','Payment Date','Commission Eligible Date'];
export const REQUIRED_DEPLETION_COLUMNS = ['Invoice Date','Type','Invoice #','Account Name','Product','Cases Sold','Sale Price','Payment Status','Account Type'];
const n=value=>Number(value)||0;
const day=value=>value?String(value).slice(0,10):null;

export function buildDepletionModel({invoices=[],items=[],products=[]}){
  const invoiceById=new Map(invoices.map(invoice=>[invoice.id,invoice]));
  const productById=new Map(products.map(product=>[product.id,product]));
  const lines=items.map((item,index)=>{
    const invoice=invoiceById.get(item.invoice_id)||{};
    const product=productById.get(item.product_id)||{};
    const casesSold=n(item.cases_sold),salePrice=n(item.sale_price),revenue=n(item.revenue)||casesSold*salePrice;
    const cogsPerCase=item.cogs_per_case??product.cogs_per_case??0;
    const totalCogs=item.total_cogs??casesSold*n(cogsPerCase);
    const grossProfit=item.gross_profit??revenue-n(totalCogs);
    return {id:item.id||`line-${index}`,invoiceId:invoice.id||item.invoice_id,invoiceDate:day(invoice.issued_at),type:item.adjustment_type||'Invoice',invoiceNumber:String(invoice.invoice_number||''),accountId:invoice.prospect_id||null,account:invoice.account_name||'',city:invoice.city||'',channel:invoice.channel||'',rep:invoice.rep_name||'',productId:item.product_id||null,product:item.product_name||product.name||'',sku:item.sku||product.sku||'',description:item.description||product.description||'',category:item.category||product.category||'',casesSold,salePrice,revenue,cogsPerCase:n(cogsPerCase),totalCogs:n(totalCogs),grossProfit:n(grossProfit),paymentStatus:invoice.status||'Unpaid',accountType:invoice.sale_type||'',adjustmentType:item.adjustment_type||null,paymentDate:day(invoice.payment_date),commissionEligibleDate:day(invoice.commission_eligible_date||invoice.payment_date),dueDate:day(invoice.due_date),balanceDue:n(invoice.balance_due),lookupKey:`${invoice.invoice_number||'draft'}-${item.id||index+1}`};
  });
  const duplicateKeys=new Map();
  lines.forEach(line=>{const key=[line.type,line.invoiceNumber,line.account,line.product,line.salePrice,line.casesSold].join('|');duplicateKeys.set(key,(duplicateKeys.get(key)||0)+1)});
  lines.forEach(line=>{line.duplicate=(duplicateKeys.get([line.type,line.invoiceNumber,line.account,line.product,line.salePrice,line.casesSold].join('|'))||0)>1});
  const today=new Date().toISOString().slice(0,10);
  const invoiceRows=invoices.map(invoice=>{const related=lines.filter(line=>line.invoiceId===invoice.id);const total=related.reduce((sum,line)=>sum+line.revenue,0);const paid=n(invoice.amount_paid);const balance=invoice.balance_due??Math.max(0,total-paid);const overdue=n(balance)>0&&day(invoice.due_date)&&day(invoice.due_date)<today;return {...invoice,invoiceTotal:total,amountPaid:paid,balanceDue:n(balance),isOverdue:overdue,paymentDate:day(invoice.payment_date),commissionEligibleDate:day(invoice.commission_eligible_date||invoice.payment_date),lineCount:related.length};});
  return {lines,invoices:invoiceRows};
}

export function inspectImportRows(rows){
  const issues=[];const known=new Set();
  rows.forEach(row=>{const missing=['Invoice #','Account Name','Product','Cases Sold','Sale Price','Payment Status','Account Type'].filter(field=>!String(row[field]??'').trim());if(missing.length)issues.push({row:row.__row,type:'warning',message:`Missing ${missing.join(', ')}`});const key=String(row['Lookup Key']||'');if(key&&known.has(key))issues.push({row:row.__row,type:'duplicate',message:'Duplicate Lookup Key'});if(key)known.add(key)});
  return {received:rows.length,valid:rows.length-issues.length,warnings:issues.filter(x=>x.type==='warning').length,duplicates:issues.filter(x=>x.type==='duplicate').length,issues};
}
