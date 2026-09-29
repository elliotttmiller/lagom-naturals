export async function loadOperationsData(supabase){
  const queries=await Promise.all([
    supabase.from('products').select('*').eq('status','Active').order('product_line').order('name'),
    supabase.from('crm_invoice_rollup').select('*').order('issued_at',{ascending:false}),
    supabase.from('invoice_items').select('*').order('created_at'),
    supabase.from('crm_commission_eligible').select('*').order('commission_eligible_date',{ascending:false}),
    supabase.from('crm_reorder_opportunities').select('*').order('days_since_last_order',{ascending:false}),
    supabase.from('prospects').select('*').order('business_name'),
    supabase.from('sales_activities').select('*,prospects(business_name),crm_users(display_name)').order('activity_date',{ascending:false}).limit(250),
    supabase.from('crm_users').select('*').order('display_name'),
    supabase.from('payment_terms').select('*').eq('active',true).order('days'),
  ]);
  const names=['products','invoices','items','commissions','reorders','prospects','activities','users','paymentTerms'];
  const out={errors:[]};
  queries.forEach((result,index)=>{
    out[names[index]]=result?.data||[];
    if(result?.error)out.errors.push({source:names[index],message:result.error.message||String(result.error)});
  });
  if(!out.paymentTerms.length)out.paymentTerms=[{term:'Due on receipt',days:0,active:true}];
  return out;
}

export function subscribeOperations(supabase,onChange){
  if(!supabase||typeof supabase.channel!=='function')return()=>{};
  const channel=supabase.channel('lagom-operations-live')
    .on('postgres_changes',{event:'*',schema:'public',table:'invoices'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'invoice_items'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'payments'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'products'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'prospects'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'sales_activities'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'crm_users'},onChange)
    .subscribe();
  return()=>{if(typeof supabase.removeChannel==='function')supabase.removeChannel(channel)};
}
