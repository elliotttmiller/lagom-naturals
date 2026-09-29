-- ============================================================
-- Lagom Naturals Company Operations v1
-- Adds the remaining workbook-native commercial master needed by
-- the web application: payment terms and invoice term ownership.
-- Safe to re-run.
-- ============================================================

BEGIN;

CREATE TABLE IF NOT EXISTS public.payment_terms (
  term text PRIMARY KEY,
  days integer NOT NULL CHECK (days >= 0),
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

INSERT INTO public.payment_terms (term, days, active)
VALUES ('Due on receipt', 0, true)
ON CONFLICT (term) DO UPDATE
SET days = EXCLUDED.days,
    active = EXCLUDED.active,
    updated_at = now();

ALTER TABLE IF EXISTS public.invoices
  ADD COLUMN IF NOT EXISTS terms text;

-- The approved workbook seed establishes Due on receipt = 0 days.
-- Only backfill rows whose dates already prove a zero-day term.
UPDATE public.invoices
SET terms = 'Due on receipt'
WHERE terms IS NULL
  AND issued_at IS NOT NULL
  AND due_date = issued_at;

CREATE OR REPLACE FUNCTION public.apply_invoice_payment_terms()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  term_days integer;
BEGIN
  IF NEW.terms IS NULL OR NEW.issued_at IS NULL THEN
    RETURN NEW;
  END IF;

  SELECT days
  INTO term_days
  FROM public.payment_terms
  WHERE term = NEW.terms
    AND active = true;

  IF term_days IS NOT NULL THEN
    NEW.due_date := NEW.issued_at + term_days;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS invoices_apply_payment_terms ON public.invoices;
CREATE TRIGGER invoices_apply_payment_terms
BEFORE INSERT OR UPDATE OF issued_at, terms
ON public.invoices
FOR EACH ROW
EXECUTE FUNCTION public.apply_invoice_payment_terms();

-- Keep the established commercial/AR view contract and append Terms.
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
  COALESCE(p.channel,i.account_channel) AS channel,
  i.terms
FROM public.invoices i
LEFT JOIN public.prospects p ON p.id=i.prospect_id
LEFT JOIN public.orders o ON o.id=i.order_id;

COMMIT;
