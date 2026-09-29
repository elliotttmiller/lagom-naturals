export async function loadCompanyOperationsData(supabase) {
  const queries = await Promise.all([
    supabase.from('products').select('*').eq('status','Active').order('product_line').order('name'),
    supabase.from('crm_invoice_rollup').select('*').order('issued_at',{ascending:false}),
    supabase.from('invoice_items').select('*').order('created_at'),
    supabase.from('crm_commission_eligible').select('*').order('commission_eligible_date',{ascending:false}),
    supabase.from('crm_reorder_opportunities').select('*').order('days_since_last_order',{ascending:false}),
  ]);

  const names = ['products','invoices','items','commissions','reorders'];
  const payload = {};
  const errors = [];

  queries.forEach((result, index) => {
    const name = names[index];
    payload[name] = result?.data || [];
    if (result?.error) {
      errors.push({
        source:name,
        message:result.error.message || String(result.error),
      });
    }
  });

  return {...payload, errors};
}

export function subscribeCompanyOperations(supabase, onChange) {
  if (!supabase || typeof supabase.channel !== 'function') return () => {};
  const channel = supabase
    .channel('company-operations-live')
    .on('postgres_changes',{event:'*',schema:'public',table:'invoices'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'invoice_items'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'payments'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'products'},onChange)
    .on('postgres_changes',{event:'*',schema:'public',table:'crm_users'},onChange)
    .subscribe();

  return () => {
    if (typeof supabase.removeChannel === 'function') supabase.removeChannel(channel);
  };
}
