# Lagom CRM — Sales & Depletion Operations

## Purpose

This implementation turns the approved 2026 MSP depletion workbook into normalized CRM operations rather than reproducing the spreadsheet as a 36-column screen.

The CRM now treats the workbook's Depletion Log as a commercial transaction ledger:

Account -> Order / Invoice -> Invoice Items -> Product / SKU

Payments, AR collections, product placement, reorder cadence, commissions, and dashboards all derive from those normalized records.

## Deployment order

1. Confirm the existing Lagom CRM baseline schema and 17-SKU product catalog are present.
2. Run `depletion_phase2.sql` against the **actual Lagom CRM Supabase project**.
3. Deploy the CRM application code from the associated feature/PR.
4. Manually verify the reconciliation checks below before entering new production transactions.

Do not run this migration against an unrelated Supabase project.

## Approved workbook reconciliation

Source workbook:

`Lagom_MSP_Market_Depletion_Report_2026_PHASE2_APPROVED`

Expected imported baseline:

| Metric | Expected |
| --- | ---: |
| Invoices | 2 |
| Invoice lines | 8 |
| Cases | 8 |
| Revenue | $583.92 |
| COGS | $576.00 |
| Gross profit | $7.92 |
| Amount paid | $583.92 |
| Balance due | $0.00 |

Approved invoices:

- 1088 — Wayzata Smoke Shop & Vape — 4 cases — $291.96 — Paid — Reorder
- 1089 — Long Lake Orono Smoke Shop — 4 cases — $291.96 — Paid — Reorder

Each invoice contains one case of:

- 24K Lemonade — SKU 860012530502
- Strawberry Lime Fusion — SKU 860012530540
- Blackberry Breeze — SKU 860012530564
- Watermelon Refresher — SKU 860012530526

## Product / SKU model

The CRM's `products` table remains the canonical catalog.

The approved workbook's Lookup sheet is mapped by SKU into separate depletion/accounting fields:

- `cogs_per_case`
- `cost_per_unit_reference`
- `depletion_category`
- `depletion_line`

These values are intentionally separate from the pre-existing `wholesale_cost` field. The application does not infer selling price or depletion COGS from `wholesale_cost`.

The 17 approved workbook SKUs are mapped in `depletion_phase2.sql`.

## Core data contracts

### invoices

Represents one commercial invoice, not one spreadsheet line.

Key fields include:

- account / prospect identity
- invoice number
- invoice and due dates
- rep
- sale type
- subtotal / total
- amount paid / balance
- collection state
- payment date
- commission eligible date
- source

### invoice_items

Represents each product line on an invoice.

Key fields:

- invoice
- product / SKU
- cases sold
- sale price
- revenue
- COGS
- gross profit
- approved cost reference
- source line key for idempotent workbook import

### payments

Stores individual payments rather than only an invoice running total.

A database trigger reconciles:

- invoice amount paid
- balance due
- Partial / Paid status
- payment date
- commission eligible date

### collection_activities

Stores collection calls, emails, visits, notes, and the next follow-up date.

### crm_tasks

Creates structured CRM actions such as AR follow-ups so Today can surface them without overloading a single account follow-up field.

## Derived CRM views

### crm_invoice_rollup

Canonical invoice + account + AR surface.

Used for:

- Sales Transactions
- AR
- Account 360
- Today collection signals

### crm_account_sales_metrics

One row per account with:

- invoice count
- lifetime revenue
- lifetime cases
- last order
- average order value
- balance due
- overdue invoice count

### crm_account_product_placements

Tracks which SKUs an account has purchased and exposes catalog gaps as placement opportunities in Account 360.

### crm_reorder_opportunities

Learns reorder cadence from completed invoice history.

States:

- Learning
- Healthy
- Due Soon
- Due
- Overdue

Accounts with only one historical order use a conservative learning state until more history is available.

### crm_product_performance

Product/SKU performance for:

- cases
- revenue
- COGS
- gross profit
- active accounts
- invoice count
- last sale

### crm_commission_eligible

Commission eligibility derives from fully paid invoices.

The approved workbook settings are imported for matching CRM users:

| Rep | New | Reorder | Mileage | Bonus threshold |
| --- | ---: | ---: | ---: | ---: |
| Roman | 20% | 10% | $0.55 | — |
| Jess | 12% | 5% | $0.00 | $10,000 |
| Tito | 0% | 0% | $0.00 | — |
| Timmy | 0% | 0% | $0.00 | — |

No commission rate is invented for users not covered by approved source data.

## CRM workflow

### Sales & Depletion

The new Sales area provides:

- Overview
- Transactions
- Reorders
- AR
- Products

Admin/owner sees company-wide data. Reps see their own commercial activity.

### New Invoice

The workflow:

1. Select account.
2. Infer New Placement vs Reorder from prior invoice history.
3. Select products from the real SKU catalog.
4. Enter cases and sale price.
5. Calculate revenue and approved depletion COGS.
6. Create backing order + order items.
7. Create invoice + normalized invoice items.
8. Optionally record an initial payment.
9. Synchronize inventory movements.

### Existing Orders

The legacy Orders flow is also normalized.

When a Draft order is confirmed it now:

- performs its existing inventory depletion
- creates a normalized invoice
- writes normalized invoice items
- links the actual product / SKU
- carries approved depletion COGS metadata when available

This prevents Sales/Depletion from becoming a parallel transaction silo.

### Account 360

Account detail now includes:

- lifetime revenue
- lifetime cases
- last order
- balance due
- recent invoices
- placed products
- product placement opportunities

### Today

Today now prioritizes:

- actionable overdue AR
- collection follow-ups
- reorder-due accounts
- legacy account follow-ups / high-priority accounts

AR and reorder cards deep-link directly to the relevant Sales workspace view.

### Routes

The route builder consumes reorder intelligence.

Reps/admin can add all geocoded Due Soon / Due / Overdue accounts to the route and see a reorder signal on those stops.

### Accounts Receivable

AR includes:

- outstanding balance
- overdue balance
- paid this month
- follow-ups due
- aging buckets
- payment recording
- collection follow-up logging

### Commissions

Commissions are derived from fully paid invoices rather than maintained as an isolated manual ledger.

## Approved workbook account linking

The migration links/imports the two approved workbook accounts using Lagom's existing store-location data:

- Wayzata Smoke Shop & Vape — 1310 Wayzata Blvd, Wayzata, MN 55391
- Long Lake Orono Smoke Shop — 1865 Wayzata Blvd Unit 112, Long Lake, MN 55356

Existing populated CRM values are preserved. Missing known address / coordinate fields are filled from Lagom's own repository data.

## Manual verification checklist

No application build/server validation is part of this implementation pass.

After applying the migration to the real Lagom CRM Supabase project, verify:

1. Sales opens with Overview / Transactions / Reorders / AR / Products.
2. Transactions contains invoices 1088 and 1089.
3. Workbook reconciliation matches exactly:
   - 2 invoices
   - 8 lines
   - 8 cases
   - $583.92 revenue
   - $576.00 COGS
   - $7.92 gross profit
   - $0 AR
4. Both approved accounts open in Account 360 with sales history.
5. Product placement shows the four purchased seltzers as Placed.
6. A newly created invoice uses the database product catalog and creates matching order/invoice line data.
7. Recording a partial payment updates balance/status to Partial.
8. Completing payment updates status to Paid and sets commission eligibility.
9. Logging an AR follow-up creates collection activity and a CRM task when a next date is supplied.
10. Reorder opportunities begin learning from account order history.
11. Reorder signals appear in Today and Routes where applicable.
12. Rep views only show their assigned commercial data; admin sees company totals.
13. Commissions reconcile to paid invoices and approved configured rates.
14. Mobile invoice entry is usable at 375px, tablet at 768px, and desktop at 1440px.

## Current deployment dependency

The ChatGPT-connected Supabase workspace available during implementation exposed only an unrelated project named `Order Manager`. The Lagom CRM database was not available through that connection.

For that reason, `depletion_phase2.sql` has been committed as the explicit deployment migration and has **not** been applied to any Supabase project from this session.
