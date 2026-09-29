-- ============================================================
-- Lagom CRM - Product catalog (canonical 17 SKUs). Run in Supabase SQL Editor.
-- Upserts the 17 by SKU (preserves on-hand qty for matches) AND removes any
-- leftover/incorrect product rows so the catalog is exactly these 17.
-- Categories: Beverages (Lagom Seltzer) / Gummies (Organic Line,
--   Midnight Drift Collection, The Drip By Lagom)
-- ============================================================
BEGIN;

ALTER TABLE public.products ADD COLUMN IF NOT EXISTS sku text;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS description text;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS category text;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS product_line text;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS flavor text;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS wholesale_cost numeric(10,2) DEFAULT 0;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS quantity integer DEFAULT 0;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS status text DEFAULT 'Active';

-- Drop stale value-restricting CHECK constraints from earlier schema versions
-- (e.g. an old category check that only allowed 'Seltzer'/'Gummy'), so the
-- current category/status values below are accepted.
ALTER TABLE public.products DROP CONSTRAINT IF EXISTS products_category_check;
ALTER TABLE public.products DROP CONSTRAINT IF EXISTS products_status_check;

CREATE UNIQUE INDEX IF NOT EXISTS products_sku_key ON public.products (sku);

INSERT INTO public.products (name, sku, description, category, product_line, flavor, wholesale_cost, status, quantity) VALUES
('Lagom Seltzer - 24K Lemonade', '860012530502', '24 can case - 12 oz cans', 'Beverages', 'Lagom Seltzer', '24K Lemonade', 37.68, 'Active', 0),
('Lagom Seltzer - Strawberry Lime Fusion', '860012530540', '24 can case - 12 oz cans', 'Beverages', 'Lagom Seltzer', 'Strawberry Lime Fusion', 37.68, 'Active', 0),
('Lagom Seltzer - Blackberry Breeze', '860012530564', '24 can case - 12 oz cans', 'Beverages', 'Lagom Seltzer', 'Blackberry Breeze', 37.68, 'Active', 0),
('Lagom Seltzer - Watermelon Refresher', '860012530526', '24 can case - 12 oz cans', 'Beverages', 'Lagom Seltzer', 'Watermelon Refresher', 37.68, 'Active', 0),
('Lagom Seltzer - Variety Pack', '860012530588', '24 can case - 12 oz cans', 'Beverages', 'Lagom Seltzer', 'Variety Pack', 37.68, 'Active', 0),
('Midnight Drift Collection - Blueberry Yum Yum', '792671159896', 'Case of 10', 'Gummies', 'Midnight Drift Collection', 'Blueberry Yum Yum', 20.20, 'Active', 0),
('Midnight Drift Collection - Strawberry', '792671159872', 'Case of 10', 'Gummies', 'Midnight Drift Collection', 'Strawberry', 20.20, 'Active', 0),
('Midnight Drift Collection - Pink Lemonade', '792671159902', 'Case of 10', 'Gummies', 'Midnight Drift Collection', 'Pink Lemonade', 20.20, 'Active', 0),
('Midnight Drift Collection - Peach', '792671159889', 'Case of 10', 'Gummies', 'Midnight Drift Collection', 'Peach', 20.20, 'Active', 0),
('Organic Line - Blue Razz', '860012530533', 'Case of 10', 'Gummies', 'Organic Line', 'Blue Razz', 21.20, 'Active', 0),
('Organic Line - Berry Melon Bliss', '860012530557', 'Case of 10', 'Gummies', 'Organic Line', 'Berry Melon Bliss', 21.20, 'Active', 0),
('Organic Line - Cherry Bliss', '860012530571', 'Case of 10', 'Gummies', 'Organic Line', 'Cherry Bliss', 21.20, 'Active', 0),
('Organic Line - Push Pop', '860012530595', 'Case of 10', 'Gummies', 'Organic Line', 'Push Pop', 21.20, 'Active', 0),
('The Drip By Lagom - Blueberry Yum Yum', '792671159919', 'Case of 10', 'Gummies', 'The Drip By Lagom', 'Blueberry Yum Yum', 17.40, 'Active', 0),
('The Drip By Lagom - Push Pop', '792671159926', 'Case of 10', 'Gummies', 'The Drip By Lagom', 'Push Pop', 17.40, 'Active', 0),
('The Drip By Lagom - Green Apple', '792671159933', 'Case of 10', 'Gummies', 'The Drip By Lagom', 'Green Apple', 17.40, 'Active', 0),
('The Drip By Lagom - Strawberry Banana', '792671159940', 'Case of 10', 'Gummies', 'The Drip By Lagom', 'Strawberry Banana', 17.40, 'Active', 0)
ON CONFLICT (sku) DO UPDATE SET
  name=excluded.name, description=excluded.description, category=excluded.category,
  product_line=excluded.product_line, flavor=excluded.flavor,
  wholesale_cost=excluded.wholesale_cost, status=excluded.status;

-- Remove any product that is not one of the 17 canonical SKUs (old line-level rows, etc.).
-- First clear child rows in ANY table that has a foreign key to those products
-- (e.g. price_tiers), then delete the stale products themselves.
DO $$
DECLARE
  r record;
  stale_ids uuid[];
BEGIN
  SELECT array_agg(id) INTO stale_ids FROM public.products
  WHERE sku IS NULL OR sku NOT IN ('860012530502', '860012530540', '860012530564', '860012530526', '860012530588', '792671159896', '792671159872', '792671159902', '792671159889', '860012530533', '860012530557', '860012530571', '860012530595', '792671159919', '792671159926', '792671159933', '792671159940');

  IF stale_ids IS NULL THEN
    RETURN; -- nothing to clean up
  END IF;

  FOR r IN
    SELECT tc.table_schema, tc.table_name, kcu.column_name
    FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu
      ON tc.constraint_name = kcu.constraint_name AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage ccu
      ON tc.constraint_name = ccu.constraint_name AND tc.table_schema = ccu.table_schema
    WHERE tc.constraint_type = 'FOREIGN KEY'
      AND ccu.table_schema = 'public' AND ccu.table_name = 'products' AND ccu.column_name = 'id'
  LOOP
    EXECUTE format('DELETE FROM %I.%I WHERE %I = ANY($1)', r.table_schema, r.table_name, r.column_name)
    USING stale_ids;
  END LOOP;

  DELETE FROM public.products WHERE id = ANY(stale_ids);
END $$;

COMMIT;
