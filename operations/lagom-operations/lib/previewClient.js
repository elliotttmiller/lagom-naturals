const now = new Date();
const iso = d => d.toISOString().slice(0,10);
const daysAgo = n => { const d=new Date(now); d.setDate(d.getDate()-n); return iso(d); };
const daysFrom = n => { const d=new Date(now); d.setDate(d.getDate()+n); return iso(d); };
const id = prefix => prefix+'_'+Math.random().toString(36).slice(2,10);

const products = [
  ['prod_24k','Lagom - 24K Lemonade','860012530502','Seltzer','Seltzer',72,72.99,48],
  ['prod_strawberry_lime','Lagom - Strawberry Lime Fusion','860012530540','Seltzer','Seltzer',72,72.99,42],
  ['prod_blackberry','Lagom - Blackberry Breeze','860012530564','Seltzer','Seltzer',72,72.99,36],
  ['prod_watermelon','Lagom - Watermelon Refresher','860012530526','Seltzer','Seltzer',72,72.99,31],
  ['prod_variety','Lagom - Variety Pack','860012530588','Seltzer','Seltzer',72,72.99,24],
  ['prod_md_blueberry','Midnight Drift - Blueberry Yum Yum','792671159896','Gummy','Midnight Drift',80,96,18],
  ['prod_md_strawberry','Midnight Drift - Strawberry','792671159872','Gummy','Midnight Drift',80,96,16],
  ['prod_md_pink','Midnight Drift - Pink Lemonade','792671159902','Gummy','Midnight Drift',80,96,14],
  ['prod_md_peach','Midnight Drift - Peach','792671159889','Gummy','Midnight Drift',80,96,12],
  ['prod_org_blue','Organic Line - Blue Razz','860012530533','Gummy','Organic Line',81,98,15],
  ['prod_org_berry','Organic Line - Berry Melon Bliss','860012530557','Gummy','Organic Line',81,98,13],
  ['prod_org_cherry','Organic Line - Cherry Bliss','860012530571','Gummy','Organic Line',81,98,11],
  ['prod_org_push','Organic Line - Push Pop','860012530595','Gummy','Organic Line',81,98,10],
  ['prod_drip_blue','The Drip - Blueberry Yum Yum','792671159919','Gummy','The Drip',70,90,17],
  ['prod_drip_push','The Drip - Push Pop','792671159926','Gummy','The Drip',70,90,14],
  ['prod_drip_apple','The Drip - Green Apple','792671159933','Gummy','The Drip',70,90,12],
  ['prod_drip_strawberry','The Drip - Strawberry Banana','792671159940','Gummy','The Drip',70,90,9],
].map(([id,name,sku,category,product_line,cogs_per_case,retail_price,quantity])=>({
  id,name,sku,category,product_line,cogs_per_case,retail_price,quantity,status:'Active',
  description:category==='Seltzer'?'24 can case - 12 oz cans':'10 bag case',
  updated_at:new Date().toISOString()
}));

const prospects = [
  ['acct_wayzata','Wayzata Smoke Shop & Vape','Wayzata','Hennepin','Won','High','Tito',44.970666,-93.481092,'Liquor Store',daysAgo(9)],
  ['acct_longlake','Long Lake Orono Smoke Shop','Long Lake','Hennepin','Won','Medium','Tito',44.985523,-93.572352,'Liquor Store',daysFrom(3)],
  ['acct_northloop','North Loop Bottle Shop · Demo','Minneapolis','Hennepin','Won','High','Roman',44.9868,-93.2766,'Liquor Store',daysAgo(2)],
  ['acct_linden','Linden Hills Market · Demo','Minneapolis','Hennepin','Proposal Sent','High','Jess',44.9298,-93.3197,'Retail',daysFrom(1)],
  ['acct_stpaul','Cathedral Hill Beverage · Demo','Saint Paul','Ramsey','Meeting Set','Medium','Jess',44.9469,-93.1174,'Liquor Store',daysAgo(4)],
  ['acct_edina','France Avenue Market · Demo','Edina','Hennepin','Contacted','Medium','Roman',44.9097,-93.3287,'Retail',daysFrom(5)],
  ['acct_maplegrove','Arbor Lakes Bottle Shop · Demo','Maple Grove','Hennepin','Follow Up','High','Roman',45.0941,-93.4419,'Liquor Store',daysAgo(1)],
  ['acct_stillwater','River Town Market · Demo','Stillwater','Washington','New','Low','Jess',45.0560,-92.8088,'Retail',daysFrom(7)],
  ['acct_bloomington','South Metro Social · Demo','Bloomington','Hennepin','Won','Medium','Roman',44.8408,-93.2983,'Bar / Restaurant',daysFrom(6)],
  ['acct_woodbury','East Metro Bottle Co. · Demo','Woodbury','Washington','Follow Up','Medium','Jess',44.9239,-92.9594,'Liquor Store',daysAgo(6)],
].map(([id,business_name,city,county,status,priority,assigned_to,latitude,longitude,channel,next_follow_up],i)=>({
  id,business_name,city,county,status,priority,assigned_to,latitude,longitude,channel,next_follow_up,
  state:'MN',zip:'55'+String(390+i).padStart(3,'0'),address:(120+i*37)+' Market St',
  contact_name:['Alex Johnson','Morgan Lee','Taylor Smith','Jordan Kim'][i%4],
  phone:'(612) 555-'+String(1100+i).padStart(4,'0'),
  email:'buyer'+(i+1)+'@example.com',
  notes:i%3===0?'Interested in expanding the seltzer set for upcoming resets.':'',
  created_at:new Date(now.getTime()-(55-i*3)*86400000).toISOString(),
}));

const invoiceSeed = [
  ['inv_1088','1088','acct_wayzata','Wayzata Smoke Shop & Vape','Tito',daysAgo(32),daysAgo(2),'Reorder','Paid',291.96,291.96,0],
  ['inv_1089','1089','acct_longlake','Long Lake Orono Smoke Shop','Tito',daysAgo(28),daysFrom(2),'Reorder','Paid',291.96,291.96,0],
  ['inv_demo_01','INV-2026-0042','acct_northloop','North Loop Bottle Shop · Demo','Roman',daysAgo(18),daysAgo(3),'Reorder','Partial',875.88,500,375.88],
  ['inv_demo_02','INV-2026-0048','acct_bloomington','South Metro Social · Demo','Roman',daysAgo(9),daysFrom(21),'New Placement','Unpaid',583.92,0,583.92],
  ['inv_demo_03','INV-2026-0051','acct_maplegrove','Arbor Lakes Bottle Shop · Demo','Roman',daysAgo(5),daysFrom(25),'Reorder','Paid',437.94,437.94,0],
  ['inv_demo_04','INV-2026-0054','acct_stpaul','Cathedral Hill Beverage · Demo','Jess',daysAgo(3),daysFrom(27),'New Placement','Paid',384,384,0],
].map(([id,invoice_number,prospect_id,account_name,rep_name,issued_at,due_date,sale_type,status,invoice_total,amount_paid,balance_due])=>({
  id,invoice_number,prospect_id,account_name,rep_name,issued_at,due_date,sale_type,status,
  subtotal:invoice_total,invoice_total,amount_due:invoice_total,amount_paid,balance_due,
  payment_date:status==='Paid'?issued_at:null,commission_eligible_date:status==='Paid'?issued_at:null,
  collection_status:balance_due>0?'Open':'Closed',next_follow_up_date:balance_due>0?daysFrom(3):null,
  created_at:issued_at+'T15:00:00.000Z'
}));

const productById = Object.fromEntries(products.map(p=>[p.id,p]));
const invoiceItems = [];
function addItems(invoiceId, pairs){
  pairs.forEach(([pid,cases,price],i)=>{
    const p=productById[pid], revenue=cases*price, cogs=cases*(p?.cogs_per_case||0);
    invoiceItems.push({
      id:invoiceId+'_line_'+(i+1),invoice_id:invoiceId,product_id:pid,sku:p?.sku,product_name:p?.name,
      category:p?.category,cases_sold:cases,sale_price:price,revenue,total_cogs:cogs,gross_profit:revenue-cogs,
      created_at:new Date().toISOString(), products:{name:p?.name}
    });
  });
}
addItems('inv_1088',[['prod_24k',1,72.99],['prod_strawberry_lime',1,72.99],['prod_blackberry',1,72.99],['prod_watermelon',1,72.99]]);
addItems('inv_1089',[['prod_24k',1,72.99],['prod_strawberry_lime',1,72.99],['prod_blackberry',1,72.99],['prod_watermelon',1,72.99]]);
addItems('inv_demo_01',[['prod_24k',4,72.99],['prod_blackberry',4,72.99],['prod_variety',4,72.99]]);
addItems('inv_demo_02',[['prod_24k',2,72.99],['prod_strawberry_lime',2,72.99],['prod_watermelon',2,72.99],['prod_variety',2,72.99]]);
addItems('inv_demo_03',[['prod_blackberry',3,72.99],['prod_watermelon',3,72.99]]);
addItems('inv_demo_04',[['prod_md_blueberry',2,96],['prod_md_peach',2,96]]);

const orders = invoiceSeed.map((x,i)=>({
  id:'order_'+(i+1),prospect_id:x.prospect_id,account_name:x.account_name,
  status:i===3?'Confirmed':'Delivered',total_amount:x.invoice_total,created_by:x.rep_name,
  created_at:x.issued_at+'T15:00:00.000Z',notes:''
}));
const orderItems=invoiceItems.map((x,i)=>({
  id:'oi_'+i,order_id:'order_'+(invoiceSeed.findIndex(v=>v.id===x.invoice_id)+1),product_id:x.product_id,
  product_name:x.product_name,quantity:x.cases_sold,unit_price:x.sale_price,total_price:x.revenue,products:{name:x.product_name}
}));

const activities = [
  ['act1','acct_maplegrove','In-Person Visit','Roman',daysAgo(1),'Buyer wants a reorder recommendation before Friday.','Positive'],
  ['act2','acct_linden','Proposal','Jess',daysAgo(1),'Sent launch assortment and pricing.','Pending'],
  ['act3','acct_northloop','Check-In','Roman',daysAgo(2),'Reviewed partial payment and next replenishment.','Follow-up'],
  ['act4','acct_stpaul','Demo','Jess',daysAgo(3),'Sampling completed with beverage manager.','Positive'],
  ['act5','acct_wayzata','Follow-Up','Tito',daysAgo(4),'Confirmed current shelf placement.','Positive'],
].map(([id,prospect_id,activity_type,rep,activity_date,notes,outcome])=>{
  const p=prospects.find(x=>x.id===prospect_id);
  return {id,prospect_id,activity_type,activity_date,notes,outcome,created_at:activity_date+'T15:00:00Z',prospects:{business_name:p?.business_name},crm_users:{display_name:rep}};
});

const payments=[
  {id:'pay1',invoice_id:'inv_1088',prospect_id:'acct_wayzata',amount:291.96,payment_date:daysAgo(32),payment_method:'ACH',reference:'Demo payment',created_at:new Date().toISOString()},
  {id:'pay2',invoice_id:'inv_1089',prospect_id:'acct_longlake',amount:291.96,payment_date:daysAgo(28),payment_method:'Check',reference:'Demo payment',created_at:new Date().toISOString()},
  {id:'pay3',invoice_id:'inv_demo_01',prospect_id:'acct_northloop',amount:500,payment_date:daysAgo(7),payment_method:'ACH',reference:'Partial payment',created_at:new Date().toISOString()},
];

const collectionActivities=[
  {id:'col1',invoice_id:'inv_demo_01',prospect_id:'acct_northloop',rep_name:'Roman',activity_date:daysAgo(2),activity_type:'Call',notes:'Buyer confirmed remaining balance is scheduled.',next_follow_up_date:daysFrom(3)}
];

const events=[
  {id:'evt1',name:'North Loop Sampling · Demo',date:daysFrom(4),time:'17:00',venue:'North Loop Bottle Shop · Demo',skus:'860012530502, 860012530564',rep:'Roman',status:'Upcoming',notes:'Seltzer tasting'},
  {id:'evt2',name:'Retail Reset Meeting · Demo',date:daysFrom(9),time:'11:00',venue:'Linden Hills Market · Demo',skus:'860012530588',rep:'Jess',status:'Upcoming',notes:'Spring reset planning'}
];

const users=[
  {id:'usr_tito',username:'tito',display_name:'Tito',role:'admin',password_hash:'lagom2026',new_commission_rate:0,reorder_commission_rate:0,territory:'Minnesota'},
  {id:'usr_timmy',username:'timmy',display_name:'Timmy',role:'admin',password_hash:'northloop',new_commission_rate:0,reorder_commission_rate:0,territory:'Minnesota'},
  {id:'usr_roman',username:'roman',display_name:'Roman',role:'rep',password_hash:'west2026',new_commission_rate:.2,reorder_commission_rate:.1,territory:'West Metro'},
  {id:'usr_jess',username:'jess',display_name:'Jessica',role:'rep',password_hash:'mpls2026',new_commission_rate:.12,reorder_commission_rate:.05,territory:'East Metro'},
];

const db={
  products,prospects,orders,order_items:orderItems,invoices:invoiceSeed,invoice_items:invoiceItems,
  sales_activities:activities,payments,collection_activities:collectionActivities,events,crm_users:users,
  inventory_movements:[],crm_tasks:[],commissions:[]
};

function invoiceRollup(){
  return db.invoices.map(i=>{
    const p=db.prospects.find(x=>x.id===i.prospect_id);
    const daysPast=i.balance_due>0&&i.due_date<iso(now)?Math.max(0,Math.round((new Date(iso(now))-new Date(i.due_date))/86400000)):0;
    const aging=i.balance_due<=0?'Paid':daysPast===0?'Current':daysPast<=30?'1-30':daysPast<=60?'31-60':daysPast<=90?'61-90':'90+';
    return {...i,city:p?.city,county:p?.county,channel:p?.channel,is_overdue:daysPast>0,days_past_due:daysPast,aging_bucket:aging};
  });
}
function placements(){
  const m={};
  db.invoice_items.forEach(it=>{
    const inv=db.invoices.find(i=>i.id===it.invoice_id); if(!inv)return;
    const k=inv.prospect_id+'|'+it.product_id;
    if(!m[k])m[k]={prospect_id:inv.prospect_id,product_id:it.product_id,sku:it.sku,product_name:it.product_name,order_count:0,lifetime_cases:0,last_order_date:null,lifetime_revenue:0};
    const r=m[k];r.order_count++;r.lifetime_cases+=Number(it.cases_sold||0);r.lifetime_revenue+=Number(it.revenue||0);if(!r.last_order_date||inv.issued_at>r.last_order_date)r.last_order_date=inv.issued_at;
  });
  return Object.values(m);
}
function accountMetrics(){
  return db.prospects.map(p=>{
    const inv=db.invoices.filter(i=>i.prospect_id===p.id&&i.status!=='Draft');
    const ids=new Set(inv.map(i=>i.id));
    const lines=db.invoice_items.filter(x=>ids.has(x.invoice_id));
    return {prospect_id:p.id,account_name:p.business_name,invoice_count:inv.length,lifetime_revenue:inv.reduce((s,x)=>s+Number(x.invoice_total||0),0),lifetime_cases:lines.reduce((s,x)=>s+Number(x.cases_sold||0),0),last_order_date:inv.map(i=>i.issued_at).sort().at(-1)||null,avg_order_value:inv.length?inv.reduce((s,x)=>s+Number(x.invoice_total||0),0)/inv.length:0,balance_due:inv.reduce((s,x)=>s+Number(x.balance_due||0),0),overdue_invoice_count:inv.filter(i=>i.balance_due>0&&i.due_date<iso(now)).length};
  });
}
function reorderRows(){
  return db.prospects.map(p=>{
    const inv=db.invoices.filter(i=>i.prospect_id===p.id&&i.status!=='Draft').sort((a,b)=>a.issued_at.localeCompare(b.issued_at));
    if(!inv.length)return null;
    const gaps=[];for(let i=1;i<inv.length;i++)gaps.push((new Date(inv[i].issued_at)-new Date(inv[i-1].issued_at))/86400000);
    const avg=gaps.length?gaps.reduce((a,b)=>a+b,0)/gaps.length:null;
    const last=inv.at(-1).issued_at,days=Math.max(0,Math.round((new Date(iso(now))-new Date(last))/86400000));
    let state='Learning';if(avg){state=days>=avg*1.35?'Overdue':days>=avg?'Due':days>=avg*.8?'Due Soon':'Healthy';}else if(days>=30)state='Due';
    return {prospect_id:p.id,account_name:p.business_name,rep_name:p.assigned_to,order_count:inv.length,last_order_date:last,days_since_last_order:days,avg_reorder_days:avg?Math.round(avg*10)/10:null,avg_order_value:inv.reduce((s,x)=>s+Number(x.invoice_total||0),0)/inv.length,city:p.city,county:p.county,latitude:p.latitude,longitude:p.longitude,reorder_status:state};
  }).filter(Boolean);
}
function productPerformance(){
  return db.products.map(p=>{
    const lines=db.invoice_items.filter(x=>x.product_id===p.id);
    const invIds=new Set(lines.map(x=>x.invoice_id));
    const accounts=new Set(db.invoices.filter(i=>invIds.has(i.id)).map(i=>i.prospect_id));
    const dates=db.invoices.filter(i=>invIds.has(i.id)).map(i=>i.issued_at).sort();
    return {product_id:p.id,sku:p.sku,product_name:p.name,category:p.category,product_line:p.product_line,cases_sold:lines.reduce((s,x)=>s+Number(x.cases_sold||0),0),revenue:lines.reduce((s,x)=>s+Number(x.revenue||0),0),total_cogs:lines.reduce((s,x)=>s+Number(x.total_cogs||0),0),gross_profit:lines.reduce((s,x)=>s+Number(x.gross_profit||0),0),active_accounts:accounts.size,invoice_count:invIds.size,last_sale_date:dates.at(-1)||null};
  }).filter(x=>x.invoice_count>0);
}
function commissionRows(){
  return db.invoices.filter(i=>i.status==='Paid').map(i=>{
    const u=db.crm_users.find(x=>(x.display_name||'').toLowerCase()===(i.rep_name||'').toLowerCase());
    const rate=(i.sale_type||'').toLowerCase().startsWith('new')?u?.new_commission_rate:u?.reorder_commission_rate;
    return {invoice_id:i.id,invoice_number:i.invoice_number,prospect_id:i.prospect_id,account_name:i.account_name,rep_name:i.rep_name,sale_type:i.sale_type,paid_revenue:i.invoice_total,commission_eligible_date:i.commission_eligible_date,commission_rate:rate??0,commission_amount:Number(i.invoice_total||0)*Number(rate||0)};
  });
}
function view(name){
  if(name==='crm_invoice_rollup')return invoiceRollup();
  if(name==='crm_account_sales_metrics')return accountMetrics();
  if(name==='crm_account_product_placements')return placements();
  if(name==='crm_reorder_opportunities')return reorderRows();
  if(name==='crm_product_performance')return productPerformance();
  if(name==='crm_commission_eligible')return commissionRows();
  return db[name]||[];
}

class Query {
  constructor(table){this.table=table;this.filters=[];this.sorts=[];this.max=null;this.mode='select';this.payload=null;this.singleMode=false;this.maybe=false;this.countMode=false;this.head=false;}
  select(_columns='*',options={}){this.countMode=Boolean(options?.count);this.head=Boolean(options?.head);return this;}
  eq(k,v){this.filters.push(r=>String(r?.[k]??'')===String(v??''));return this;}
  gt(k,v){this.filters.push(r=>Number(r?.[k]??0)>Number(v));return this;}
  order(k,opt={}){this.sorts.push([k,opt.ascending!==false]);return this;}
  limit(n){this.max=n;return this;}
  single(){this.singleMode=true;return this;}
  maybeSingle(){this.singleMode=true;this.maybe=true;return this;}
  insert(v){this.mode='insert';this.payload=Array.isArray(v)?v:[v];return this;}
  update(v){this.mode='update';this.payload=v;return this;}
  delete(){this.mode='delete';return this;}
  async exec(){
    const base=db[this.table]||[];
    if(this.mode==='insert'){
      const rows=this.payload.map(x=>{
        const row={...x,id:x.id||id(this.table.slice(0,3)),created_at:x.created_at||new Date().toISOString()};
        if(this.table==='sales_activities'){
          const account=db.prospects.find(p=>p.id===row.prospect_id);
          const rep=db.crm_users.find(u=>(u.display_name||'').toLowerCase()===(row.rep||'').toLowerCase());
          row.prospects={business_name:account?.business_name};
          row.crm_users={display_name:rep?.display_name||row.rep};
        }
        return row;
      });
      base.push(...rows);this.payload=rows;
      if(this.table==='payments'){
        rows.forEach(payment=>{
          const inv=db.invoices.find(i=>i.id===payment.invoice_id);if(!inv)return;
          const totalPaid=db.payments.filter(p=>p.invoice_id===inv.id).reduce((sum,p)=>sum+Number(p.amount||0),0);
          inv.amount_paid=totalPaid;inv.balance_due=Math.max(0,Number(inv.invoice_total||inv.amount_due||0)-totalPaid);
          inv.status=inv.balance_due<=0?'Paid':totalPaid>0?'Partial':'Unpaid';
          if(inv.status==='Paid'){inv.payment_date=payment.payment_date;inv.commission_eligible_date=payment.payment_date;inv.collection_status='Closed';}
        });
      }
      const data=this.singleMode?rows[0]:rows;return {data,error:null,count:rows.length};
    }
    let rows=[...view(this.table)];
    for(const fn of this.filters)rows=rows.filter(fn);
    if(this.mode==='update'){
      const targets=base.filter(r=>this.filters.every(fn=>fn(r)));targets.forEach(r=>Object.assign(r,this.payload));
      rows=targets.map(x=>({...x}));return {data:this.singleMode?rows[0]||null:rows,error:null};
    }
    if(this.mode==='delete'){
      const remove=new Set(base.filter(r=>this.filters.every(fn=>fn(r))));
      db[this.table]=base.filter(r=>!remove.has(r));return {data:[...remove],error:null};
    }
    for(const [k,asc] of this.sorts)rows.sort((a,b)=>{const av=a?.[k]??'',bv=b?.[k]??'';return av===bv?0:(av>bv?1:-1)*(asc?1:-1)});
    if(this.max!==null)rows=rows.slice(0,this.max);
    const count=rows.length;
    if(this.head)return {data:null,error:null,count};
    if(this.singleMode){
      if(!rows.length&&!this.maybe)return {data:null,error:{message:'No rows found'},count};
      return {data:rows[0]||null,error:null,count};
    }
    return {data:rows,error:null,count};
  }
  then(resolve,reject){return this.exec().then(resolve,reject);}
}

export function createPreviewClient(){
  return {
    from(table){return new Query(table);},
    async rpc(name){
      if(name==='next_invoice_number'){
        const n=String(db.invoices.length+55).padStart(4,'0');
        return {data:'INV-'+now.getFullYear()+'-'+n,error:null};
      }
      return {data:null,error:{message:'Preview RPC not implemented'}};
    },
  };
}
