# Lagom CRM — Product Vision & Context

Read this before the code. It explains **what we are building and why**, so feature
decisions match how the business actually runs. Pair it with `HANDOFF.md` (technical
state) and `INVOICES_SPEC.md` (next feature).

## The brand
**Lagom Naturals** is an emerging **hemp-derived THC beverage brand** based in the Twin
Cities, Minnesota. Two product families:
- **Seltzers** (low-dose THC sparkling beverages) — 24K Lemonade, Strawberry Lime Fusion,
  Blackberry Breeze, Watermelon Refresher, Variety Pack.
- **Gummies** — three lines: Organic Line, Midnight Drift Collection, The Drip By Lagom
  (12 flavors total).

Think of us as the field-sales operation of a brand like **Cann, BRĒZ, Cantrip, or
Crescent 9** — small, fast-moving, building retail distribution one account at a time.

## The market & how we sell
Minnesota legalized low-dose hemp-derived THC beverages, so they sell in **ordinary
retail** — liquor stores, convenience stores, smoke/vape shops, co-ops, and bars — not
just dispensaries. Our accounts span the **whole state** (not just the metro), which is
why territories are organized **by county**.

We run a **field-sales / DSD-style motion** (direct store delivery mindset):
1. **Reps work a territory** (a set of counties), driving a route of stops.
2. At each account they pitch, get the product **placed on shelf** (a "placement"),
   and build the relationship.
3. The retailer reorders as product **depletes** (sells through). We ingest **depletion
   reports** to see real sell-through and spot reorder opportunities and at-risk accounts.
4. We track **orders, invoices (AR), and rep commissions** off that activity.

This is the same playbook big beverage brands run on enterprise tools
(GreatVines / Salesforce Consumer Goods Cloud, VIP iDig, Encompass, Repsly, Lilypad).
**Lagom CRM is the lightweight, purpose-built version of that** for an early-stage hemp
beverage brand — fast for reps in the field, clear for the founders.

## What "great" looks like (north star)
A rep opens the app in their truck, sees today's **route** (nearest valuable accounts),
logs each visit in seconds, knows which accounts are **due for reorder** or **going
quiet**, and never fights the software. Founders see **coverage by county**, pipeline,
depletion trends, **outstanding AR**, and rep performance at a glance — and can ask the
**AI** plain-English questions about any of it.

## Why each feature exists (jobs-to-be-done)
- **Accounts** — the retail doors. Status (New -> Won), priority, contact, county.
- **Territories (by county)** — assign counties to reps; see coverage and balance load.
- **Territory Map / Routes** — geocoded accounts on a map; build an efficient day of
  stops from HQ. Field efficiency = more doors per day.
- **Inventory / Depletion** — product catalog + stock; depletion data drives reorder
  signals (the heart of a DSD brand).
- **Orders** — what an account bought; feeds inventory movements and invoices.
- **Invoices (AR)** — get paid; track outstanding and overdue (aging). See INVOICES_SPEC.
- **Commissions** — pay reps off won business; keeps the field motivated.
- **Events** — demos / samplings / activations that drive trial.
- **Activity** — the running log of every touch; the system of record for relationships.
- **Lagom AI** — ask questions across all of the above in plain English.

## Domain glossary (so the dev speaks the language)
- **Placement** — getting the product onto a retailer's shelf/cooler.
- **Depletion** — units sold through from the retailer to consumers (true demand).
- **DSD** — direct store delivery; brand/rep services the account directly.
- **SKU** — a specific sellable item (a flavor in a pack size).
- **Reorder** — repeat purchase by an account as stock depletes.
- **AR / aging** — accounts receivable; how overdue invoices are (0-30/31-60/61-90/90+).
- **Territory** — a rep's geography; here, a set of **counties**.
- **At-risk account** — was ordering, has gone quiet (no recent depletion/orders).

## Principles for building
- **Field-first:** reps use this one-handed, often on mobile, sometimes on bad signal.
  Speed and clarity beat feature count.
- **Show the next action:** due-for-reorder, overdue invoice, account going quiet — the
  app should surface what to do, not just store data.
- **Founder visibility:** every module should roll up into coverage, pipeline, AR, and
  rep performance.
- **Stay lightweight:** we are not rebuilding Salesforce. Purpose-built and fast.
