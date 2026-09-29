# Lagom Naturals Company Operations Portal

## Direction

The CRM is now the primary company operations application. The Google Sheets depletion workbook remains a business-rule, reconciliation, export, and ownership audit artifact. It is no longer the primary staff UI and it is not a second transactional writer.

The application must preserve the useful separation between CRM relationship work and depletion/commercial operations while presenting both inside one Lagom shell.

```text
Lagom Company Operations
├── Workspace
│   ├── Today
│   └── Company Dashboard
├── CRM
│   ├── Accounts
│   ├── Pipeline
│   └── Activity
├── Field Sales
│   ├── Routes
│   ├── Territories
│   ├── Territory Map
│   └── Events
├── Commercial
│   ├── Invoices
│   ├── Depletion
│   ├── AR
│   ├── Reports
│   ├── Commissions
│   ├── Orders
│   └── Inventory
├── Tools
│   └── Lagom AI
└── Admin
    ├── Settings
    └── Setup
```

Depletion is therefore not modeled as a CRM activity object. It remains a specialized product and commercial ledger while sharing accounts, products, reps, invoices, reporting, authentication, and navigation with the rest of the company application.

## Canonical data ownership

The current production architecture already uses Supabase/Postgres. Preserve that system of record.

| Domain | Canonical source |
| --- | --- |
| Accounts / retail doors | `prospects` |
| Products / SKUs | `products` |
| Invoices | `invoices` + `crm_invoice_rollup` |
| Invoice product lines / depletion | `invoice_items` |
| Payments | `payments` |
| Collections | `collection_activities` |
| Reorder intelligence | `crm_reorder_opportunities` |
| Product performance | `crm_product_performance` |
| Commission eligibility | `crm_commission_eligible` |
| Rep settings | `crm_users` |
| Payment terms | `payment_terms` |

Do not add Google Sheets as a competing write path without an explicit synchronization contract, stable identifiers, conflict policy, and server-side Sheets adapter.

## Workbook migration map

The approved workbook is translated into application responsibilities rather than reproduced as spreadsheet-shaped screens.

| Workbook concept | Application destination |
| --- | --- |
| Overview | Company Dashboard |
| Invoices | Invoices workspace |
| Depletion | Depletion workspace |
| AR | Accounts Receivable workspace |
| Reports | Reports workspace |
| Commissions | Commissions workspace |
| Setup | CRM master data / admin settings |
| Guide | Application help and project documentation |
| Run Check | Operations Check dialog |
| Import Depletion | Validated XLSX import dialog |
| Reset Filters | Workspace-level reset actions |

The calculation layer in `lib/companyOperationsDomain.js` preserves the workbook's transparent business logic in testable JavaScript domain functions.

## Financial and operational contracts

### Depletion

A commercial depletion line is:

```text
Invoice
→ Account
→ Rep
→ Product / SKU
→ Cases
→ Sale Price
→ Revenue
→ Approved COGS
→ Gross Profit
```

Revenue defaults to `cases × sale price` when a stored line revenue value is absent. COGS derives only from approved depletion COGS fields. Do not infer depletion COGS from unrelated wholesale fields.

### Accounts receivable

AR is a derived view of invoices, not an independent ledger.

The application derives:

- balance due;
- days past due;
- Current / 1-30 / 31-60 / 61-90 / 90+ aging;
- collection priority;
- total open AR;
- overdue AR.

Source corrections belong in invoice/payment records.

### Commissions

Commission eligibility remains payment-based.

The application consumes `crm_commission_eligible`, which applies the stored rep New vs Reorder rate and requires a paid invoice with a commission-eligible date.

The application must not:

- invent commission rates;
- apply a generic percentage;
- finalize ambiguous bonuses;
- introduce period-close state machines.

### QA and reconciliation

QA remains embedded in the application rather than becoming a separate administrative subsystem.

Current domain checks include:

- missing invoice number/date/account/rep/terms;
- invoice without product lines;
- invalid or excessive payments;
- invoice revenue versus line-revenue reconciliation;
- missing/orphan invoice reference;
- unknown/unmapped product;
- invalid cases;
- invalid sale price;
- missing approved product COGS;
- possible duplicate depletion line.

## UI architecture

The new Company Operations surfaces use real web UI rather than spreadsheet simulations.

The design system is defined in `app/operations.css` and is intentionally:

- premium light theme;
- Nunito-led;
- warm neutral canvas;
- restrained sage / forest accents;
- typography-first metrics;
- minimal decorative icon use;
- responsive at phone, tablet, and desktop widths;
- keyboard-focus visible;
- reduced-motion aware;
- horizontally resilient for dense business tables.

The existing CRM shell remains the shared navigation and authentication surface while the company operations UI is progressively modularized out of the historical single-file `app/page.js`.

## Application modules introduced

### `components/operations/CompanyOperationsWorkspace.jsx`

Provides:

- Company Dashboard;
- Depletion;
- AR;
- Reports;
- Commissions.

It uses role-aware scope:

- owner/admin/investor roles can see company-wide commercial reporting;
- reps see their own assigned commercial activity;
- investor is read-only for invoice creation actions.

### `lib/companyOperationsData.js`

Owns commercial data loading and live Supabase subscriptions.

### `lib/companyOperationsDomain.js`

Owns workbook-derived deterministic calculations, reconciliation, QA, monthly analysis, product/account/rep reporting, AR aging, and commission enrichment.

### `components/operations/DepletionImportDialog.jsx`

Owns the lightweight workbook import path. It detects the Depletion table, validates Invoice # / Product / Cases / Sale Price, resolves existing invoices and products, rejects invalid or duplicate Invoice + Product rows, derives approved COGS economics, and writes only valid lines to `invoice_items`.

### `components/operations/QualityCheckDialog.jsx`

Replaces workbook Run Check with live revenue, cases, and COGS reconciliation plus the same embedded invoice/depletion QA rules.

### Existing `SalesWorkspace.jsx`

Remains the mutation path for:

- new invoice creation;
- invoice detail;
- payment recording;
- collection follow-up.

Its visible scope is now the Invoice ledger rather than a duplicate dashboard/reporting product.

## Database migration

`company_operations_v1.sql` adds the remaining workbook-native commercial master that was not represented in the Phase 2 schema:

- `payment_terms`;
- `invoices.terms`;
- Due Date derivation from Invoice Date + configured term days;
- verified seed `Due on receipt = 0 days`;
- `terms` appended to `crm_invoice_rollup`.

Run it only after the existing Phase 2 commercial migration is present. It is idempotent and does not fabricate unverified payment terms.

## Synchronization behavior

Supabase changes to invoices, invoice items, payments, products, or rep settings trigger a refresh of the company operations workspace through Postgres realtime subscriptions.

The web application therefore reads and writes one normalized commercial model rather than attempting to synchronize duplicated workbook formulas with application state.

## Explicitly out of scope

Do not revive:

- workbook period-close workflows;
- commission finalization state machines;
- permanent import staging databases solely to imitate the workbook;
- giant automation logs;
- duplicate report data stores;
- a second app for depletion;
- direct spreadsheet-shaped 30+ column UI as the default user experience.

## Reconciliation baseline

The approved workbook baseline remains the regression reference:

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

Any migration or production data reset must reconcile these source records before new operational data is added.

## Next engineering stages

1. Run `depletion_phase2.sql` if the normalized commercial schema is not already deployed.
2. Run `company_operations_v1.sql` to add payment terms and invoice term ownership.
3. Reconcile the approved 2-invoice / 8-line baseline in the real Supabase project.
4. Validate invoice creation, payment posting, depletion import, AR, reports, commissions, Run Check, and filter reset in a preview deployment.
5. Split additional legacy CRM sections out of `app/page.js` into domain modules.
6. Complete the existing authentication/RLS security review before broader production use.
7. If a live Google Sheets administrative mirror is later required, design it as a one-way export or a formally owned synchronization adapter instead of allowing uncontrolled dual writes.
