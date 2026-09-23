-- ============================================================
-- Lagom Naturals CRM — Supabase schema setup
-- Run this in the Supabase SQL editor (Dashboard > SQL Editor)
-- ============================================================

-- Events table
create table if not exists public.events (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  date date,
  time text,
  venue text,
  skus text,
  rep text,
  status text default 'Upcoming',
  notes text,
  created_at timestamptz default now()
);

-- Orders table
create table if not exists public.orders (
  id uuid default gen_random_uuid() primary key,
  prospect_id uuid references public.prospects(id),
  account_name text,
  status text default 'Draft',
  total_amount numeric(10,2) default 0,
  notes text,
  created_by text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Order items table
create table if not exists public.order_items (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references public.orders(id) on delete cascade,
  product_id uuid,
  product_name text,
  quantity integer default 0,
  unit_price numeric(10,2) default 0,
  total_price numeric(10,2) default 0
);

-- Invoices table
create table if not exists public.invoices (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references public.orders(id),
  invoice_number text unique,
  status text default 'Unpaid',
  amount_due numeric(10,2) default 0,
  amount_paid numeric(10,2) default 0,
  issued_at date default current_date,
  due_date date,
  created_at timestamptz default now()
);

-- Inventory movements table
create table if not exists public.inventory_movements (
  id uuid default gen_random_uuid() primary key,
  product_id uuid,
  product_name text,
  order_id uuid references public.orders(id),
  quantity_change integer,
  reason text,
  created_by text,
  created_at timestamptz default now()
);

-- Ensure products table has needed columns (add if missing)
alter table if exists public.products
  add column if not exists category text,
  add column if not exists quantity integer default 0,
  add column if not exists wholesale_cost numeric(10,2) default 0,
  add column if not exists retail_price numeric(10,2) default 0,
  add column if not exists status text default 'Active';

-- Ensure crm_users has needed columns
alter table if exists public.crm_users
  add column if not exists email text,
  add column if not exists territory text,
  add column if not exists commission_rate numeric(5,4) default 0,
  add column if not exists username text,
  add column if not exists password_hash text;

-- Ensure prospects has lat/lng columns
alter table if exists public.prospects
  add column if not exists latitude float8,
  add column if not exists longitude float8,
  add column if not exists next_follow_up date,
  add column if not exists zone text;

-- Enable Row Level Security (optional — remove if causing issues)
-- alter table public.orders enable row level security;
-- alter table public.order_items enable row level security;
-- alter table public.invoices enable row level security;
-- alter table public.inventory_movements enable row level security;
