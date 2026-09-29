'use client';

import {useMemo,useState} from 'react';
import {Button,money} from '../ui/OperationsUI';

const today=()=>new Date().toISOString().slice(0,10);
const addDays=(value,days)=>{
  const d=new Date(String(value)+'T12:00:00');
  d.setDate(d.getDate()+Number(days||0));
  return d.toISOString().slice(0,10);
};
const num=value=>Number(value)||0;

export default function InvoiceDialog({supabase,source,user,onClose,onSaved}){
  const defaultTerm=source.paymentTerms?.[0]?.term||'Due on receipt';
  const [form,setForm]=useState({prospect_id:'',issued_at:today(),terms:defaultTerm,sale_type:'',rep_name:user?.display_name||user?.name||'',notes:'',amount_paid:'',payment_method:''});
  const [lines,setLines]=useState([{product_id:'',cases:1,price:''}]);
  const [saving,setSaving]=useState(false);
  const [error,setError]=useState('');

  const account=source.prospects.find(p=>p.id===form.prospect_id);
  const prior=source.invoices.some(inv=>inv.prospect_id===form.prospect_id&&inv.status!=='Draft');
  const term=source.paymentTerms.find(x=>x.term===form.terms)||{days:0};
  const dueDate=addDays(form.issued_at,term.days);

  const hydrated=useMemo(()=>lines.map(line=>{
    const product=source.products.find(p=>p.id===line.product_id);
    const cases=Math.max(0,num(line.cases));
    const price=line.price===''?num(product?.retail_price):num(line.price);
    const cogs=product?.cogs_per_case==null?null:num(product.cogs_per_case);
    return {...line,product,cases,price,revenue:cases*price,cogs,totalCogs:cogs==null?null:cases*cogs,grossProfit:cogs==null?null:cases*price-cases*cogs};
  }),[lines,source.products]);
  const total=hydrated.reduce((s,x)=>s+x.revenue,0);

  const save=async()=>{
    if(!account||!hydrated.some(x=>x.product&&x.cases>0)||saving)return;
    setSaving(true);setError('');
    try{
      const nr=await supabase.rpc('next_invoice_number');
      if(nr?.error)throw nr.error;
      const invoiceNumber=nr.data;
      const repName=form.rep_name||account.assigned_to||user?.display_name||user?.name||null;
      const saleType=form.sale_type||(prior?'Reorder':'New Placement');
      const valid=hydrated.filter(x=>x.product&&x.cases>0);
      const order=await supabase.from('orders').insert({
        prospect_id:account.id,account_name:account.business_name,status:'Confirmed',
        total_amount:total,notes:form.notes||null,created_by:repName
      }).select().single();
      if(order?.error)throw order.error;

      const orderItems=await supabase.from('order_items').insert(valid.map(x=>({
        order_id:order.data.id,product_id:x.product.id,product_name:x.product.name,
        quantity:x.cases,unit_price:x.price,total_price:x.revenue
      })));
      if(orderItems?.error)throw orderItems.error;

      const invoice=await supabase.from('invoices').insert({
        order_id:order.data.id,prospect_id:account.id,account_name:account.business_name,
        rep_name:repName,invoice_number:invoiceNumber,sale_type:saleType,status:'Unpaid',
        issued_at:form.issued_at,terms:form.terms||null,due_date:dueDate,
        subtotal:total,invoice_total:total,amount_due:total,amount_paid:0,balance_due:total,
        collection_status:'Open',notes:form.notes||null,source:'operations'
      }).select().single();
      if(invoice?.error)throw invoice.error;

      const lineWrite=await supabase.from('invoice_items').insert(valid.map(x=>({
        invoice_id:invoice.data.id,product_id:x.product.id,sku:x.product.sku||null,
        product_name:x.product.name,description:x.product.description||null,
        category:x.product.depletion_category||x.product.category||null,
        cases_sold:x.cases,sale_price:x.price,revenue:x.revenue,
        cogs_per_case:x.cogs,total_cogs:x.totalCogs,gross_profit:x.grossProfit,
        cost_reference:x.product.cost_per_unit_reference??null
      })));
      if(lineWrite?.error)throw lineWrite.error;

      const paid=Math.min(num(form.amount_paid),total);
      if(paid>0){
        const payment=await supabase.from('payments').insert({
          invoice_id:invoice.data.id,prospect_id:account.id,amount:paid,payment_date:form.issued_at,
          payment_method:form.payment_method||null,reference:'Initial payment',
          created_by:repName,source:'operations'
        });
        if(payment?.error)throw payment.error;
      }
      await onSaved?.();
      onClose?.();
    }catch(e){
      setError(e?.message||String(e));
    }finally{setSaving(false)}
  };

  return <div className="lo-modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose?.()}>
    <section className="lo-modal lo-invoice-modal" role="dialog" aria-modal="true" aria-labelledby="new-invoice-title">
      <header className="lo-modal-head"><div><span className="lo-page-eyebrow">SALES OPERATIONS</span><h2 id="new-invoice-title">New invoice</h2><p>Create the invoice, linked product lines, and optional initial payment.</p></div><button onClick={onClose}>×</button></header>
      {error&&<div className="lo-inline-error">{error}</div>}
      <div className="lo-form-grid">
        <label><span>Account *</span><select value={form.prospect_id} onChange={e=>setForm(x=>({...x,prospect_id:e.target.value,sale_type:''}))}><option value="">Select account…</option>{source.prospects.map(p=><option value={p.id} key={p.id}>{p.business_name}</option>)}</select></label>
        <label><span>Sales Rep</span><input value={form.rep_name} onChange={e=>setForm(x=>({...x,rep_name:e.target.value}))}/></label>
        <label><span>Invoice Date</span><input type="date" value={form.issued_at} onChange={e=>setForm(x=>({...x,issued_at:e.target.value}))}/></label>
        <label><span>Terms</span><select value={form.terms} onChange={e=>setForm(x=>({...x,terms:e.target.value}))}>{source.paymentTerms.map(t=><option key={t.term}>{t.term}</option>)}</select><small>Due {dueDate}</small></label>
        <label><span>Sale Type</span><select value={form.sale_type} onChange={e=>setForm(x=>({...x,sale_type:e.target.value}))}><option value="">Auto: {prior?'Reorder':'New Placement'}</option><option>New Placement</option><option>Reorder</option></select></label>
      </div>
      <div className="lo-invoice-lines">
        <div className="lo-line-head"><span>Product</span><span>Cases</span><span>Price / case</span><span>Total</span><span/></div>
        {lines.map((line,index)=>{
          const item=hydrated[index];
          return <div className="lo-invoice-line" key={index}>
            <select value={line.product_id} onChange={e=>setLines(rows=>rows.map((x,i)=>i===index?{...x,product_id:e.target.value,price:''}:x))}><option value="">Select product…</option>{source.products.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            <input type="number" min="0" value={line.cases} onChange={e=>setLines(rows=>rows.map((x,i)=>i===index?{...x,cases:e.target.value}:x))}/>
            <input type="number" min="0" step=".01" value={line.price===''?(item?.price||''):line.price} onChange={e=>setLines(rows=>rows.map((x,i)=>i===index?{...x,price:e.target.value}:x))}/>
            <strong>{money(item?.revenue)}</strong>
            <button onClick={()=>setLines(rows=>rows.length===1?rows:rows.filter((_,i)=>i!==index))}>×</button>
          </div>;
        })}
        <Button onClick={()=>setLines(rows=>[...rows,{product_id:'',cases:1,price:''}])}>+ Add Product</Button>
      </div>
      <div className="lo-form-grid lo-form-grid--payment">
        <label><span>Amount Paid Now</span><input type="number" min="0" step=".01" value={form.amount_paid} onChange={e=>setForm(x=>({...x,amount_paid:e.target.value}))}/></label>
        <label><span>Payment Method</span><select value={form.payment_method} onChange={e=>setForm(x=>({...x,payment_method:e.target.value}))}><option value="">Not specified</option><option>ACH</option><option>Check</option><option>Cash</option><option>Card</option><option>Other</option></select></label>
        <label className="is-full"><span>Notes</span><textarea rows="2" value={form.notes} onChange={e=>setForm(x=>({...x,notes:e.target.value}))}/></label>
      </div>
      <footer className="lo-modal-total"><div><span>TOTAL</span><strong>{money(total)}</strong></div><div><Button onClick={onClose}>Cancel</Button><Button variant="primary" disabled={saving||!account||total<=0} onClick={save}>{saving?'Saving…':'Create Invoice'}</Button></div></footer>
    </section>
  </div>;
}
