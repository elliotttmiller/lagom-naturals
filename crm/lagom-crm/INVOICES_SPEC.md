# Invoices (Phase 3) — Spec

Goal: let reps/admins issue and track invoices against accounts, see what is owed and
overdue, and record payments. Tables already exist in `supabase-setup.sql` (verify it
has been run before starting).

## Data model (already defined — do not recreate, just use)
`public.invoices`
- `id` uuid PK
- `order_id` uuid -> `orders(id)`  (invoices are issued against an order)
- `invoice_number` text UNIQUE
- `status` text (default `Unpaid`)
- `amount_due` numeric(10,2)
- `amount_paid` numeric(10,2)
- `issued_at` date (default today)
- `due_date` date
- `created_at` timestamptz

Related: `orders` (has `prospect_id`, `account_name`, `total_amount`, `status`) and
`order_items` (line items: `product_name`, `quantity`, `unit_price`, `total_price`).
`OrdersTab` in `app/page.js` already loads invoices, so there is partial wiring to follow.

### Suggested status set
`Draft` -> `Sent` -> `Partial` -> `Paid`, plus a derived `Overdue` (status not Paid AND
`due_date` < today). Keep `status` as the stored value; compute `Overdue` in the UI so it
stays correct as dates pass. (Current default is `Unpaid`; pick one vocabulary and use it
consistently across the tab and the AR aging.)

## Add an `invoices` tab
Insert a tab in `ALL_TABS` (e.g. after `orders`) and a component `InvoicesTab`, rendered
through the existing `tp`/`renderTab` switch. Follow `OrdersTab` as the closest pattern
(loading, modals, badges, CSV export, detail panel).

### List view
Table columns: Invoice #, Account (`orders.account_name` / joined prospect), Issued,
Due, Amount Due, Amount Paid, Balance (`amount_due - amount_paid`), Status badge
(red when Overdue). Filters: status, account, overdue-only. CSV export via `CSVBtn`.
Top stat cards: Total Outstanding, Overdue $, Paid this month, count by status.

### Create invoice
From an existing order (preferred): pick an order with no invoice -> prefill
`amount_due = orders.total_amount`, `account_name`, generate `invoice_number`, set
`due_date` (default issued_at + 30 days, make the term configurable). Insert into
`invoices`. Optionally allow a standalone invoice that also creates the backing order +
order_items (reuse the order-creation form already in `OrdersTab`).

Invoice number generation: `INV-YYYY-####` (zero-padded sequence). Compute next number
from the max existing for the year, or add a Postgres sequence. Must respect the UNIQUE
constraint and handle the race (retry on conflict).

### Record a payment
On the invoice detail: "Record payment" -> add to `amount_paid`; if
`amount_paid >= amount_due` set `status = Paid`, else `Partial`. Show payment history if a
`payments` table is added later (out of scope for v1; single running total is fine).

### Status transitions
- Draft: editable, not counted in AR.
- Sent/Unpaid: counts toward outstanding.
- Partial: `0 < amount_paid < amount_due`.
- Paid: fully paid; lock editing.
- Overdue: derived (not Paid AND past `due_date`) — surface with the rose color used for
  overdue elsewhere.

## Integrations
- **AR aging:** there is already an "Accounts Receivable Aging" concept in the source
  data (Product Summary). Drive aging buckets (0-30 / 31-60 / 61-90 / 90+) from
  `invoices` where Balance > 0, by `due_date`. Surface on Overview and/or a dashboard card.
- **Overview KPIs:** add Total Outstanding and Overdue count.
- **Account detail panel:** show that account's open invoices and balance.
- **Inventory:** when an order ships/delivers, `inventory_movements` already exists;
  keep invoice status independent of fulfillment.

## Acceptance criteria
- Can create an invoice from an order; invoice number is unique and auto-generated.
- List shows correct Balance and an Overdue badge for past-due unpaid invoices.
- Recording a payment updates `amount_paid` and flips status to Partial/Paid correctly.
- Outstanding and Overdue totals match the sum of balances.
- AR aging buckets reconcile with the list.
- Works at 375 / 768 / 1440px and renders through `.content-inner` (see CLAUDE.md).

## Notes / gotchas
- Money: store `numeric(10,2)`; format with the existing `fmtFull$` / `fmt$` helpers.
- Dates: the app stores `date` as `YYYY-MM-DD` and parses with a noon offset (see `fmtD`)
  to avoid timezone drift — reuse those helpers.
- RLS: confirm policies on `invoices` allow the intended read/write for the anon client
  (see the security note in HANDOFF.md).
