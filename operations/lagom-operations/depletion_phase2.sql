-- ============================================================
-- Lagom CRM - Depletion / Sales Operations Phase 2
-- Normalizes the approved depletion workbook into operational CRM entities.
-- Idempotent migration: safe to re-run.
-- ============================================================

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Account enrichment
ALTER TABLE IF EXISTS public.prospects
  ADD COLUMN IF NOT EXISTS account_number text,
  ADD COLUMN IF NOT EXISTS channel text;

-- Ensure the approved workbook accounts have CRM identities. Coordinates/address
-- come from Lagom's existing store-location dataset in this repository.
INSERT INTO public.prospects (business_name,address,city,state,zip,status,priority,assigned_to,latitude,longitude,channel)
SELECT 'Wayzata Smoke Shop & Vape','1310 Wayzata Blvd','Wayzata','MN','55391','Won','Medium','Tito',44.970666,-93.481092,'Liquor Store'
WHERE NOT EXISTS (SELECT 1 FROM public.prospects WHERE lower(business_name)=lower('Wayzata Smoke Shop & Vape'));

INSERT INTO public.prospects (business_name,address,city,state,zip,status,priority,assigned_to,latitude,longitude,channel)
SELECT 'Long Lake Orono Smoke Shop','1865 Wayzata Blvd Unit 112','Long Lake','MN','55356','Won','Medium','Tito',44.985523,-93.572352,'Liquor Store'
WHERE NOT EXISTS (SELECT 1 FROM public.prospects WHERE lower(business_name)=lower('Long Lake Orono Smoke Shop'));

UPDATE public.prospects
SET address=CASE WHEN COALESCE(address,'')='' THEN '1310 Wayzata Blvd' ELSE address END,
    city=CASE WHEN COALESCE(city,'')='' THEN 'Wayzata' ELSE city END,
    state=CASE WHEN COALESCE(state,'')='' THEN 'MN' ELSE state END,
    zip=CASE WHEN COALESCE(zip,'')='' THEN '55391' ELSE zip END,
    latitude=COALESCE(latitude,44.970666),
    longitude=COALESCE(longitude,-93.481092),
    channel=CASE WHEN COALESCE(channel,'')='' THEN 'Liquor Store' ELSE channel END
WHERE lower(business_name)=lower('Wayzata Smoke Shop & Vape');

UPDATE public.prospects
SET address=CASE WHEN COALESCE(address,'')='' THEN '1865 Wayzata Blvd Unit 112' ELSE address END,
    city=CASE WHEN COALESCE(city,'')='' THEN 'Long Lake' ELSE city END,
    state=CASE WHEN COALESCE(state,'')='' THEN 'MN' ELSE state END,
    zip=CASE WHEN COALESCE(zip,'')='' THEN '55356' ELSE zip END,
    latitude=COALESCE(latitude,44.985523),
    longitude=COALESCE(longitude,-93.572352),
    channel=CASE WHEN COALESCE(channel,'')='' THEN 'Liquor Store' ELSE channel END
WHERE lower(business_name)=lower('Long Lake Orono Smoke Shop');

-- Product catalog enrichment. Do not overwrite the existing wholesale_cost field:
-- workbook COGS/Case is a separate accounting concept.
ALTER TABLE IF EXISTS public.products
  ADD COLUMN IF NOT EXISTS sku text,
  ADD COLUMN IF NOT EXISTS description text,
  ADD COLUMN IF NOT EXISTS product_line text,
  ADD COLUMN IF NOT EXISTS flavor text,
  ADD COLUMN IF NOT EXISTS cogs_per_case numeric(12,2),
  ADD COLUMN IF NOT EXISTS cost_per_unit_reference numeric(12,2),
  ADD COLUMN IF NOT EXISTS depletion_category text,
  ADD COLUMN IF NOT EXISTS depletion_line text,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

CREATE UNIQUE INDEX IF NOT EXISTS products_sku_key ON public.products (sku) WHERE sku IS NOT NULL;

-- Approved workbook Lookup sheet. These are depletion/accounting values and are
-- intentionally separate from the existing wholesale_cost catalog field.
WITH lookup(sku,cogs_per_case,cost_ref,depletion_category,depletion_line) AS (
  VALUES
    ('860012530502',72.00::numeric,3.00::numeric,'Seltzer','Seltzer'),
    ('860012530540',72.00,3.00,'Seltzer','Seltzer'),
    ('860012530564',72.00,3.00,'Seltzer','Seltzer'),
    ('860012530526',72.00,3.00,'Seltzer','Seltzer'),
    ('860012530588',72.00,3.00,'Seltzer','Seltzer'),
    ('792671159896',80.00,8.00,'Gummy','Midnight Drift'),
    ('792671159872',80.00,8.00,'Gummy','Midnight Drift'),
    ('792671159902',80.00,8.00,'Gummy','Midnight Drift'),
    ('792671159889',80.00,8.00,'Gummy','Midnight Drift'),
    ('860012530533',81.00,8.10,'Gummy','Organic Line'),
    ('860012530557',81.00,8.10,'Gummy','Organic Line'),
    ('860012530571',81.00,8.10,'Gummy','Organic Line'),
    ('860012530595',81.00,8.00,'Gummy','Organic Line'),
    ('792671159919',70.00,7.00,'Gummy','The Drip'),
    ('792671159926',70.00,7.00,'Gummy','The Drip'),
    ('792671159933',70.00,7.00,'Gummy','The Drip'),
    ('792671159940',70.00,7.00,'Gummy','The Drip')
)
UPDATE public.products p
SET cogs_per_case=l.cogs_per_case,
    cost_per_unit_reference=l.cost_ref,
    depletion_category=l.depletion_category,
    depletion_line=l.depletion_line
FROM lookup l
WHERE p.sku=l.sku;

-- Existing invoices table is retained and expanded so Orders and Sales share one source.
ALTER TABLE IF EXISTS public.invoices
  ADD COLUMN IF NOT EXISTS prospect_id uuid REFERENCES public.prospects(id),
  ADD COLUMN IF NOT EXISTS account_name text,
  ADD COLUMN IF NOT EXISTS account_city text,
  ADD COLUMN IF NOT EXISTS account_channel text,
  ADD COLUMN IF NOT EXISTS rep_name text,
  ADD COLUMN IF NOT EXISTS sale_type text,
  ADD COLUMN IF NOT EXISTS subtotal numeric(12,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS adjustment_total numeric(12,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS invoice_total numeric(12,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS balance_due numeric(12,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS collection_status text,
  ADD COLUMN IF NOT EXISTS last_follow_up_date date,
  ADD COLUMN IF NOT EXISTS next_follow_up_date date,
  ADD COLUMN IF NOT EXISTS payment_date date,
  ADD COLUMN IF NOT EXISTS commission_eligible_date date,
  ADD COLUMN IF NOT EXISTS notes text,
  ADD COLUMN IF NOT EXISTS source text DEFAULT 'crm',
  ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

UPDATE public.invoices
SET
  invoice_total = CASE WHEN COALESCE(invoice_total,0)=0 THEN COALESCE(amount_due,0) ELSE invoice_total END,
  subtotal = CASE WHEN COALESCE(subtotal,0)=0 THEN COALESCE(amount_due,0) ELSE subtotal END,
  balance_due = GREATEST(COALESCE(amount_due,0)-COALESCE(amount_paid,0),0),
  account_name = COALESCE(account_name, (SELECT o.account_name FROM public.orders o WHERE o.id=invoices.order_id)),
  prospect_id = COALESCE(prospect_id, (SELECT o.prospect_id FROM public.orders o WHERE o.id=invoices.order_id));

-- Normalized invoice line items. This is intentionally separate from order_items:
-- order_items represent fulfillment intent, invoice_items represent booked commercial lines.
CREATE TABLE IF NOT EXISTS public.invoice_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id uuid NOT NULL REFERENCES public.invoices(id) ON DELETE CASCADE,
  product_id uuid REFERENCES public.products(id),
  sku text,
  product_name text NOT NULL,
  description text,
  category text,
  cases_sold numeric(12,2) NOT NULL DEFAULT 0,
  sale_price numeric(12,2) NOT NULL DEFAULT 0,
  revenue numeric(12,2) NOT NULL DEFAULT 0,
  cogs_per_case numeric(12,2) DEFAULT 0,
  total_cogs numeric(12,2) DEFAULT 0,
  gross_profit numeric(12,2) DEFAULT 0,
  cost_reference numeric(12,2),
  source_line_key text UNIQUE,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS invoice_items_invoice_id_idx ON public.invoice_items(invoice_id);
CREATE INDEX IF NOT EXISTS invoice_items_product_id_idx ON public.invoice_items(product_id);
CREATE INDEX IF NOT EXISTS invoice_items_sku_idx ON public.invoice_items(sku);

CREATE TABLE IF NOT EXISTS public.invoice_adjustments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id uuid NOT NULL REFERENCES public.invoices(id) ON DELETE CASCADE,
  adjustment_type text NOT NULL,
  amount numeric(12,2) NOT NULL DEFAULT 0,
  notes text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.payments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id uuid NOT NULL REFERENCES public.invoices(id) ON DELETE CASCADE,
  prospect_id uuid REFERENCES public.prospects(id),
  amount numeric(12,2) NOT NULL CHECK (amount > 0),
  payment_date date NOT NULL DEFAULT current_date,
  payment_method text,
  reference text,
  notes text,
  created_by text,
  source text DEFAULT 'crm',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS payments_invoice_id_idx ON public.payments(invoice_id);
CREATE INDEX IF NOT EXISTS payments_prospect_id_idx ON public.payments(prospect_id);

-- Enrich the existing inventory movement ledger used by the CRM. Existing columns
-- remain compatible with the legacy Orders flow.
ALTER TABLE IF EXISTS public.inventory_movements
  ADD COLUMN IF NOT EXISTS movement_type text,
  ADD COLUMN IF NOT EXISTS quantity_before numeric(12,2),
  ADD COLUMN IF NOT EXISTS quantity_after numeric(12,2),
  ADD COLUMN IF NOT EXISTS notes text;

CREATE TABLE IF NOT EXISTS public.collection_activities (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id uuid NOT NULL REFERENCES public.invoices(id) ON DELETE CASCADE,
  prospect_id uuid REFERENCES public.prospects(id),
  rep_name text,
  activity_date date NOT NULL DEFAULT current_date,
  activity_type text DEFAULT 'Follow-Up',
  notes text,
  next_follow_up_date date,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS collection_activities_invoice_id_idx ON public.collection_activities(invoice_id);

-- Structured CRM tasks. This powers Today without overloading prospects.next_follow_up.
CREATE TABLE IF NOT EXISTS public.crm_tasks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  prospect_id uuid REFERENCES public.prospects(id) ON DELETE CASCADE,
  invoice_id uuid REFERENCES public.invoices(id) ON DELETE CASCADE,
  task_type text NOT NULL,
  title text NOT NULL,
  assigned_to text,
  due_date date,
  priority text DEFAULT 'Medium',
  status text DEFAULT 'Open',
  notes text,
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

CREATE INDEX IF NOT EXISTS crm_tasks_due_idx ON public.crm_tasks(status,due_date);

-- Commission configuration stays data-driven. No rates are fabricated.
ALTER TABLE IF EXISTS public.crm_users
  ADD COLUMN IF NOT EXISTS new_commission_rate numeric(8,5),
  ADD COLUMN IF NOT EXISTS reorder_commission_rate numeric(8,5),
  ADD COLUMN IF NOT EXISTS mileage_rate numeric(12,4),
  ADD COLUMN IF NOT EXISTS bonus_threshold numeric(12,2);

-- Approved rep-sheet settings from the Phase 2 workbook.
UPDATE public.crm_users SET new_commission_rate=0.20,reorder_commission_rate=0.10,mileage_rate=0.55
WHERE lower(display_name)=lower('Roman');
UPDATE public.crm_users SET new_commission_rate=0.12,reorder_commission_rate=0.05,mileage_rate=0.00,bonus_threshold=10000
WHERE lower(display_name)=lower('Jess');
UPDATE public.crm_users SET new_commission_rate=0.00,reorder_commission_rate=0.00,mileage_rate=0.00
WHERE lower(display_name)=lower('Tito');
UPDATE public.crm_users SET new_commission_rate=0.00,reorder_commission_rate=0.00,mileage_rate=0.00
WHERE lower(display_name)=lower('Timmy');

-- Collision-safe, year-aware invoice number generator.
CREATE TABLE IF NOT EXISTS public.invoice_sequences (
  invoice_year integer PRIMARY KEY,
  last_number integer NOT NULL DEFAULT 0
);

CREATE OR REPLACE FUNCTION public.next_invoice_number()
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
  y integer := EXTRACT(YEAR FROM current_date)::integer;
  n integer;
BEGIN
  INSERT INTO public.invoice_sequences(invoice_year,last_number)
  VALUES (y,1)
  ON CONFLICT (invoice_year)
  DO UPDATE SET last_number = public.invoice_sequences.last_number + 1
  RETURNING last_number INTO n;

  RETURN 'INV-' || y::text || '-' || lpad(n::text,4,'0');
END;
$$;

-- Keep invoice payment totals reconciled from the payments ledger.
CREATE OR REPLACE FUNCTION public.refresh_invoice_payment_totals(target_invoice uuid)
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
  paid numeric(12,2);
  total numeric(12,2);
BEGIN
  SELECT COALESCE(SUM(amount),0) INTO paid FROM public.payments WHERE invoice_id=target_invoice;
  SELECT COALESCE(NULLIF(invoice_total,0),amount_due,0) INTO total FROM public.invoices WHERE id=target_invoice;

  UPDATE public.invoices
  SET
    amount_paid = paid,
    amount_due = total,
    balance_due = GREATEST(total-paid,0),
    status = CASE WHEN paid >= total AND total > 0 THEN 'Paid'
                  WHEN paid > 0 THEN 'Partial'
                  WHEN status='Draft' THEN 'Draft'
                  ELSE 'Unpaid' END,
    payment_date = CASE WHEN paid >= total AND total > 0 THEN
      COALESCE((SELECT MAX(payment_date) FROM public.payments WHERE invoice_id=target_invoice), payment_date)
      ELSE payment_date END,
    commission_eligible_date = CASE WHEN paid >= total AND total > 0 THEN
      COALESCE((SELECT MAX(payment_date) FROM public.payments WHERE invoice_id=target_invoice), commission_eligible_date)
      ELSE NULL END,
    collection_status = CASE WHEN paid >= total AND total > 0 THEN 'Closed' ELSE collection_status END,
    updated_at = now()
  WHERE id=target_invoice;
END;
$$;

CREATE OR REPLACE FUNCTION public.sync_invoice_payment_totals()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM public.refresh_invoice_payment_totals(COALESCE(NEW.invoice_id,OLD.invoice_id));
  RETURN COALESCE(NEW,OLD);
END;
$$;

DROP TRIGGER IF EXISTS payments_sync_invoice_totals ON public.payments;
CREATE TRIGGER payments_sync_invoice_totals
AFTER INSERT OR UPDATE OR DELETE ON public.payments
FOR EACH ROW EXECUTE FUNCTION public.sync_invoice_payment_totals();

-- Invoice-level commercial/AR view.
CREATE OR REPLACE VIEW public.crm_invoice_rollup AS
SELECT
  i.id,
  i.order_id,
  i.prospect_id,
  COALESCE(i.account_name,p.business_name,o.account_name,'Unknown Account') AS account_name,
  COALESCE(i.rep_name,p.assigned_to,o.created_by) AS rep_name,
  i.invoice_number,
  COALESCE(i.sale_type,'Reorder') AS sale_type,
  i.status,
  i.issued_at,
  i.due_date,
  COALESCE(NULLIF(i.invoice_total,0),i.amount_due,0) AS invoice_total,
  COALESCE(i.amount_paid,0) AS amount_paid,
  GREATEST(COALESCE(NULLIF(i.invoice_total,0),i.amount_due,0)-COALESCE(i.amount_paid,0),0) AS balance_due,
  CASE
    WHEN i.status='Paid' THEN 0
    WHEN i.due_date IS NULL THEN 0
    ELSE GREATEST(current_date-i.due_date,0)
  END AS days_past_due,
  CASE
    WHEN i.status='Paid' THEN 'Paid'
    WHEN i.due_date IS NULL OR current_date<=i.due_date THEN 'Current'
    WHEN current_date-i.due_date<=30 THEN '1-30'
    WHEN current_date-i.due_date<=60 THEN '31-60'
    WHEN current_date-i.due_date<=90 THEN '61-90'
    ELSE '90+'
  END AS aging_bucket,
  CASE WHEN i.status<>'Paid' AND i.due_date IS NOT NULL AND i.due_date<current_date THEN true ELSE false END AS is_overdue,
  i.collection_status,
  i.last_follow_up_date,
  i.next_follow_up_date,
  i.payment_date,
  i.commission_eligible_date,
  COALESCE(p.city,i.account_city) AS city,
  p.county,
  COALESCE(p.channel,i.account_channel) AS channel
FROM public.invoices i
LEFT JOIN public.prospects p ON p.id=i.prospect_id
LEFT JOIN public.orders o ON o.id=i.order_id;

-- Account sales metrics, used by Account 360.
CREATE OR REPLACE VIEW public.crm_account_sales_metrics AS
WITH invoice_totals AS (
  SELECT
    r.prospect_id,
    MAX(r.account_name) AS account_name,
    COUNT(*) FILTER (WHERE r.status<>'Draft') AS invoice_count,
    COALESCE(SUM(r.invoice_total) FILTER (WHERE r.status<>'Draft'),0) AS lifetime_revenue,
    MAX(r.issued_at) FILTER (WHERE r.status<>'Draft') AS last_order_date,
    COALESCE(AVG(r.invoice_total) FILTER (WHERE r.status<>'Draft'),0) AS avg_order_value,
    COALESCE(SUM(r.balance_due),0) AS balance_due,
    COUNT(*) FILTER (WHERE r.is_overdue) AS overdue_invoice_count
  FROM public.crm_invoice_rollup r
  GROUP BY r.prospect_id
),
case_totals AS (
  SELECT i.prospect_id, COALESCE(SUM(ii.cases_sold),0) AS lifetime_cases
  FROM public.invoices i
  JOIN public.invoice_items ii ON ii.invoice_id=i.id
  WHERE i.status<>'Draft'
  GROUP BY i.prospect_id
)
SELECT
  t.prospect_id,
  t.account_name,
  t.invoice_count,
  t.lifetime_revenue,
  COALESCE(c.lifetime_cases,0) AS lifetime_cases,
  t.last_order_date,
  t.avg_order_value,
  t.balance_due,
  t.overdue_invoice_count
FROM invoice_totals t
LEFT JOIN case_totals c ON c.prospect_id=t.prospect_id;

-- Product placement/history at each account.
CREATE OR REPLACE VIEW public.crm_account_product_placements AS
SELECT
  i.prospect_id,
  ii.product_id,
  COALESCE(ii.sku,p.sku) AS sku,
  COALESCE(ii.product_name,p.name) AS product_name,
  COUNT(DISTINCT i.id) AS order_count,
  COALESCE(SUM(ii.cases_sold),0) AS lifetime_cases,
  MAX(i.issued_at) AS last_order_date,
  COALESCE(SUM(ii.revenue),0) AS lifetime_revenue
FROM public.invoice_items ii
JOIN public.invoices i ON i.id=ii.invoice_id
LEFT JOIN public.products p ON p.id=ii.product_id
WHERE i.status<>'Draft'
GROUP BY i.prospect_id,ii.product_id,COALESCE(ii.sku,p.sku),COALESCE(ii.product_name,p.name);

-- Reorder cadence. Two or more completed invoice dates produce a learned cadence.
CREATE OR REPLACE VIEW public.crm_reorder_opportunities AS
WITH sales AS (
  SELECT
    i.id,
    i.prospect_id,
    COALESCE(i.account_name,p.business_name) AS account_name,
    COALESCE(i.rep_name,p.assigned_to) AS rep_name,
    i.issued_at,
    COALESCE(NULLIF(i.invoice_total,0),i.amount_due,0) AS invoice_total,
    LAG(i.issued_at) OVER (PARTITION BY i.prospect_id ORDER BY i.issued_at) AS prev_date
  FROM public.invoices i
  LEFT JOIN public.prospects p ON p.id=i.prospect_id
  WHERE i.prospect_id IS NOT NULL AND i.status NOT IN ('Draft','Cancelled')
),
agg AS (
  SELECT
    prospect_id,
    MAX(account_name) AS account_name,
    MAX(rep_name) AS rep_name,
    COUNT(*) AS order_count,
    MAX(issued_at) AS last_order_date,
    AVG((issued_at-prev_date)) FILTER (WHERE prev_date IS NOT NULL) AS avg_reorder_days,
    AVG(invoice_total) AS avg_order_value
  FROM sales
  GROUP BY prospect_id
)
SELECT
  a.prospect_id,
  a.account_name,
  a.rep_name,
  a.order_count,
  a.last_order_date,
  (current_date-a.last_order_date) AS days_since_last_order,
  ROUND(a.avg_reorder_days::numeric,1) AS avg_reorder_days,
  ROUND(a.avg_order_value::numeric,2) AS avg_order_value,
  p.city,
  p.county,
  p.latitude,
  p.longitude,
  CASE
    WHEN a.avg_reorder_days IS NULL THEN
      CASE WHEN current_date-a.last_order_date>=30 THEN 'Due' ELSE 'Learning' END
    WHEN current_date-a.last_order_date >= a.avg_reorder_days*1.35 THEN 'Overdue'
    WHEN current_date-a.last_order_date >= a.avg_reorder_days THEN 'Due'
    WHEN current_date-a.last_order_date >= a.avg_reorder_days*0.80 THEN 'Due Soon'
    ELSE 'Healthy'
  END AS reorder_status
FROM agg a
JOIN public.prospects p ON p.id=a.prospect_id;

CREATE OR REPLACE VIEW public.crm_product_performance AS
SELECT
  COALESCE(ii.product_id,p.id) AS product_id,
  COALESCE(ii.sku,p.sku) AS sku,
  COALESCE(ii.product_name,p.name) AS product_name,
  COALESCE(ii.category,p.category) AS category,
  p.product_line,
  COALESCE(SUM(ii.cases_sold),0) AS cases_sold,
  COALESCE(SUM(ii.revenue),0) AS revenue,
  COALESCE(SUM(ii.total_cogs),0) AS total_cogs,
  COALESCE(SUM(ii.gross_profit),0) AS gross_profit,
  COUNT(DISTINCT i.prospect_id) AS active_accounts,
  COUNT(DISTINCT i.id) AS invoice_count,
  MAX(i.issued_at) AS last_sale_date
FROM public.invoice_items ii
JOIN public.invoices i ON i.id=ii.invoice_id
LEFT JOIN public.products p ON p.id=ii.product_id OR (p.sku IS NOT NULL AND p.sku=ii.sku)
WHERE i.status<>'Draft'
GROUP BY COALESCE(ii.product_id,p.id),COALESCE(ii.sku,p.sku),COALESCE(ii.product_name,p.name),COALESCE(ii.category,p.category),p.product_line;

CREATE OR REPLACE VIEW public.crm_commission_eligible AS
SELECT
  i.id AS invoice_id,
  i.invoice_number,
  i.prospect_id,
  COALESCE(i.account_name,p.business_name) AS account_name,
  COALESCE(i.rep_name,p.assigned_to) AS rep_name,
  i.sale_type,
  COALESCE(NULLIF(i.invoice_total,0),i.amount_due,0) AS paid_revenue,
  i.commission_eligible_date,
  CASE WHEN lower(COALESCE(i.sale_type,'')) LIKE 'new%' THEN u.new_commission_rate ELSE u.reorder_commission_rate END AS commission_rate,
  ROUND(COALESCE(NULLIF(i.invoice_total,0),i.amount_due,0) *
    COALESCE(CASE WHEN lower(COALESCE(i.sale_type,'')) LIKE 'new%' THEN u.new_commission_rate ELSE u.reorder_commission_rate END,0),2) AS commission_amount
FROM public.invoices i
LEFT JOIN public.prospects p ON p.id=i.prospect_id
LEFT JOIN public.crm_users u ON lower(u.display_name)=lower(COALESCE(i.rep_name,p.assigned_to))
WHERE i.status='Paid' AND i.commission_eligible_date IS NOT NULL;

-- ============================================================
-- Approved Phase 2 workbook seed
-- Source: Lagom_MSP_Market_Depletion_Report_2026_PHASE2_APPROVED
-- 2026-02-11, invoices 1088 and 1089, eight lines total.
-- Exact workbook values are preserved.
-- ============================================================

INSERT INTO public.invoices (
  prospect_id, account_name, account_city, account_channel, rep_name, invoice_number, sale_type, status,
  issued_at, due_date, subtotal, invoice_total, amount_due, amount_paid,
  balance_due, collection_status, payment_date, commission_eligible_date,
  source
)
VALUES
(
  (SELECT id FROM public.prospects WHERE lower(business_name)=lower('Wayzata Smoke Shop & Vape') ORDER BY created_at NULLS LAST LIMIT 1),
  'Wayzata Smoke Shop & Vape','Wayzata','Liquor Store','Tito','1088','Reorder','Paid',
  DATE '2026-02-11',DATE '2026-02-11',291.96,291.96,291.96,291.96,0,'Closed',
  DATE '2026-02-11',DATE '2026-02-11','approved_depletion_workbook'
),
(
  (SELECT id FROM public.prospects WHERE lower(business_name)=lower('Long Lake Orono Smoke Shop') ORDER BY created_at NULLS LAST LIMIT 1),
  'Long Lake Orono Smoke Shop','Long Lake','Liquor Store','Tito','1089','Reorder','Paid',
  DATE '2026-02-11',DATE '2026-02-11',291.96,291.96,291.96,291.96,0,'Closed',
  DATE '2026-02-11',DATE '2026-02-11','approved_depletion_workbook'
)
ON CONFLICT (invoice_number) DO UPDATE SET
  account_name=EXCLUDED.account_name,
  account_city=EXCLUDED.account_city,
  account_channel=EXCLUDED.account_channel,
  rep_name=EXCLUDED.rep_name,
  sale_type=EXCLUDED.sale_type,
  status=EXCLUDED.status,
  issued_at=EXCLUDED.issued_at,
  due_date=EXCLUDED.due_date,
  subtotal=EXCLUDED.subtotal,
  invoice_total=EXCLUDED.invoice_total,
  amount_due=EXCLUDED.amount_due,
  amount_paid=EXCLUDED.amount_paid,
  balance_due=EXCLUDED.balance_due,
  collection_status=EXCLUDED.collection_status,
  payment_date=EXCLUDED.payment_date,
  commission_eligible_date=EXCLUDED.commission_eligible_date,
  source=EXCLUDED.source;

WITH seed(line_key,invoice_number,sku,product_name,description,category,cases_sold,sale_price,revenue,cogs,total_cogs,gross_profit) AS (
  VALUES
    ('1088-1','1088','860012530502','Lagom - 24K Lemonade','24 can case - 12 oz cans','Seltzer',1::numeric,72.99::numeric,72.99::numeric,72::numeric,72::numeric,0.99::numeric),
    ('1088-2','1088','860012530540','Lagom - Strawberry Lime Fusion','24 can case - 12 oz cans','Seltzer',1,72.99,72.99,72,72,0.99),
    ('1088-3','1088','860012530564','Lagom - Blackberry Breeze','24 can case - 12 oz cans','Seltzer',1,72.99,72.99,72,72,0.99),
    ('1088-4','1088','860012530526','Lagom - Watermelon Refresher','24 can case - 12 oz cans','Seltzer',1,72.99,72.99,72,72,0.99),
    ('1089-1','1089','860012530502','Lagom - 24K Lemonade','24 can case - 12 oz cans','Seltzer',1,72.99,72.99,72,72,0.99),
    ('1089-2','1089','860012530540','Lagom - Strawberry Lime Fusion','24 can case - 12 oz cans','Seltzer',1,72.99,72.99,72,72,0.99),
    ('1089-3','1089','860012530564','Lagom - Blackberry Breeze','24 can case - 12 oz cans','Seltzer',1,72.99,72.99,72,72,0.99),
    ('1089-4','1089','860012530526','Lagom - Watermelon Refresher','24 can case - 12 oz cans','Seltzer',1,72.99,72.99,72,72,0.99)
)
INSERT INTO public.invoice_items (
  invoice_id,product_id,sku,product_name,description,category,cases_sold,sale_price,revenue,
  cogs_per_case,total_cogs,gross_profit,cost_reference,source_line_key
)
SELECT
  i.id,p.id,s.sku,s.product_name,s.description,s.category,s.cases_sold,s.sale_price,s.revenue,
  s.cogs,s.total_cogs,s.gross_profit,3.00,s.line_key
FROM seed s
JOIN public.invoices i ON i.invoice_number=s.invoice_number
LEFT JOIN public.products p ON p.sku=s.sku
ON CONFLICT (source_line_key) DO UPDATE SET
  product_id=EXCLUDED.product_id,
  sku=EXCLUDED.sku,
  product_name=EXCLUDED.product_name,
  description=EXCLUDED.description,
  category=EXCLUDED.category,
  cases_sold=EXCLUDED.cases_sold,
  sale_price=EXCLUDED.sale_price,
  revenue=EXCLUDED.revenue,
  cogs_per_case=EXCLUDED.cogs_per_case,
  total_cogs=EXCLUDED.total_cogs,
  gross_profit=EXCLUDED.gross_profit,
  cost_reference=EXCLUDED.cost_reference;

-- Enrich matched CRM accounts without overwriting existing populated values.
UPDATE public.prospects
SET city=CASE WHEN COALESCE(city,'')='' THEN 'Wayzata' ELSE city END,
    channel=CASE WHEN COALESCE(channel,'')='' THEN 'Liquor Store' ELSE channel END
WHERE lower(business_name)=lower('Wayzata Smoke Shop & Vape');

UPDATE public.prospects
SET city=CASE WHEN COALESCE(city,'')='' THEN 'Long Lake' ELSE city END,
    channel=CASE WHEN COALESCE(channel,'')='' THEN 'Liquor Store' ELSE channel END
WHERE lower(business_name)=lower('Long Lake Orono Smoke Shop');

-- Add payment rows only if they do not already exist for the workbook invoices.
INSERT INTO public.payments (invoice_id,prospect_id,amount,payment_date,reference,created_by,source)
SELECT i.id,i.prospect_id,291.96,DATE '2026-02-11','Workbook invoice '||i.invoice_number,'Tito','approved_depletion_workbook'
FROM public.invoices i
WHERE i.invoice_number IN ('1088','1089')
  AND NOT EXISTS (
    SELECT 1 FROM public.payments p
    WHERE p.invoice_id=i.id AND p.source='approved_depletion_workbook'
  );

COMMIT;
