# Lagom Operations — Developer Handoff

Lagom Operations is the unified internal web application for Lagom Naturals. It combines CRM relationship work with sales operations, invoices, depletion, AR, commissions, reporting, product masters, and administration in one shared application shell.

## Canonical application path

`operations/lagom-operations/`

The former `crm/lagom-crm/` application path is retired. Do not recreate a second CRM build.

## Stack

- Next.js App Router
- React 18
- Supabase/Postgres
- Lucide React icons
- ExcelJS for controlled depletion workbook import
- Static GitHub Pages preview support
- Vercel production hosting

## Frontend architecture

```text
app/
  page.js                  application composition + auth + route state
  layout.js                root metadata/fonts
  operations.css           canonical design system / responsive shell
  api/
    ai/route.js
    geocode/route.js

components/
  layout/
    AppShell.jsx
  ui/
    OperationsUI.jsx
    OperationsCharts.jsx
  pages/
    OverviewPage.jsx
    InvoicesPage.jsx
    DepletionPage.jsx
    AccountsReceivablePage.jsx
    ReportsPage.jsx
    CommissionsPage.jsx
    CRMPage.jsx
    AdministrationPage.jsx
    UILibraryPage.jsx
  operations/
    InvoiceDialog.jsx
    DepletionImportDialog.jsx

lib/
  operationsData.js
  companyOperationsDomain.js
  previewClient.js
```

The old single-file CRM UI and the intermediate `CompanyOperationsWorkspace` implementation have been removed from the canonical build.

## Shared shell / visual contract

The approved September 29 mockups are the visual reference.

Required shell:
- fixed dark Lagom Operations sidebar;
- editorial serif page titles;
- compact Inter body/UI typography;
- warm off-white canvas;
- white surfaces with thin gray borders;
- restrained green operational accents;
- low-shadow cards;
- shared top-right date/search/notification/avatar controls.

All modules should use the primitives in `components/ui/OperationsUI.jsx` and `components/ui/OperationsCharts.jsx` instead of inventing page-specific styling.

## Primary modules

- Overview
- Invoices
- Accounts Receivable
- Commissions
- Depletion
- CRM: Accounts / Contacts / Opportunities / Activities
- CRM Account Detail
- Reports
- Administration
- UI Library

## Data ownership

Supabase is the canonical transactional source.

| Domain | Source |
| --- | --- |
| Accounts | `prospects` |
| Products | `products` |
| Invoices | `invoices` / `crm_invoice_rollup` |
| Depletion | `invoice_items` |
| Payments | `payments` |
| Collections | `collection_activities` |
| Reorder intelligence | `crm_reorder_opportunities` |
| Commission eligibility | `crm_commission_eligible` |
| Reps | `crm_users` |
| Payment terms | `payment_terms` |
| CRM activity | `sales_activities` |

The depletion workbook is a rule/reconciliation/import artifact, not a second production writer.

## Workbook migration contract

`lib/companyOperationsDomain.js` translates the validated workbook rules into application logic.

Regression baseline:
- 2 invoices
- 8 invoice lines
- 8 cases
- $583.92 revenue
- $576.00 COGS
- $7.92 gross profit
- $583.92 paid
- $0.00 balance due

Run:

```bash
npm ci
npm run validate:operations
npm run build
```

## Database deployment order

1. `supabase-setup.sql` if the base CRM schema is absent.
2. `depletion_phase2.sql` for normalized commercial records/views.
3. `company_operations_v1.sql` for payment terms and invoice term ownership.
4. Other optional geographic/product imports only when needed.

Do not fabricate payment terms, commission rates, product economics, or bonus rules.

## Preview / CI

- PR validation: `.github/workflows/validate-operations.yml`
- Main preview build: `.github/workflows/build-operations-preview.yml`
- Preview output: `docs/operations/`
- Preview base path: `/lagom-naturals/operations`

## Responsive acceptance

Before shipping UI changes, inspect:
- 375 px
- 768 px
- 1440 px
- 1600 px reference desktop

Dense ledgers may scroll horizontally on small screens. Do not compress columns until critical data becomes unreadable.

## Current constraints

- Commission period finalization is intentionally not implemented because no approved finalization state machine exists.
- Invoice import is intentionally disabled until its import contract is defined.
- Depletion XLSX import is implemented as validated line import into existing invoices.
- The existing custom auth model remains in place.
