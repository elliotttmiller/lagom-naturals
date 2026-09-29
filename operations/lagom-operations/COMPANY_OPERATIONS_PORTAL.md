# Lagom Naturals Operations Architecture

## Direction

Lagom Operations is the single internal application for CRM and commercial operations.

Canonical path:

`operations/lagom-operations/`

The former CRM-only build has been normalized into this multi-module application.

## Shared application shell

The application uses one global shell for all modules:

```text
Lagom Operations
├── Overview
├── Sales
│   ├── Invoices
│   └── Accounts Receivable
├── Commissions
├── Depletion
├── CRM
│   ├── Accounts
│   ├── Contacts
│   ├── Opportunities
│   └── Activities
├── Reports
└── Administration
    └── UI Library
```

CRM and Depletion remain separate business domains inside the same application. Depletion is not modeled as a CRM activity.

## Canonical sources

| Domain | Canonical source |
| --- | --- |
| Accounts | `prospects` |
| Products | `products` |
| Invoices | `invoices` + `crm_invoice_rollup` |
| Product-level depletion | `invoice_items` |
| Payments | `payments` |
| Collections | `collection_activities` |
| Reorders | `crm_reorder_opportunities` |
| Commission eligibility | `crm_commission_eligible` |
| Reps / rates | `crm_users` |
| Terms | `payment_terms` |
| CRM activity | `sales_activities` |

## Workbook-to-application translation

| Workbook surface | Lagom Operations module |
| --- | --- |
| Overview | Overview |
| Invoices | Invoices |
| Depletion | Depletion |
| AR | Accounts Receivable |
| Reports | Reports |
| Commissions | Commissions |
| Setup products/accounts/reps | Administration + CRM masters |
| Setup terms | Payment Terms master |
| Import Depletion | Depletion Import dialog |
| Guide | Repository documentation |
| Run Check | Domain QA / reconciliation logic |

The workbook is retained as a validated business-rule and reconciliation baseline. It is not a parallel production writer.

## Business calculations

`lib/companyOperationsDomain.js` owns:

- revenue;
- cases;
- approved depletion COGS;
- gross profit;
- margin;
- invoice reconciliation;
- AR balance and aging;
- product/account/rep performance;
- monthly performance;
- payment-based commission eligibility enrichment;
- invoice/depletion QA.

Depletion line contract:

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

## UI system

The approved mockups define the visual contract.

Core implementation:
- `app/operations.css`
- `components/layout/AppShell.jsx`
- `components/ui/OperationsUI.jsx`
- `components/ui/OperationsCharts.jsx`

Pages are module-specific implementations under `components/pages/`.

## Synchronization

`lib/operationsData.js` loads the cross-module dataset and subscribes to Supabase changes for invoices, invoice items, payments, products, prospects, activity, and rep settings.

Writes occur through purpose-specific dialogs/workflows and refresh the shared data model after success.

## Database migrations

`depletion_phase2.sql` normalizes the workbook's commercial model.

`company_operations_v1.sql` adds:
- `payment_terms`;
- `invoices.terms`;
- due-date derivation from approved term-day configuration;
- the verified `Due on receipt = 0 days` seed;
- `terms` in `crm_invoice_rollup`.

## Reconciliation baseline

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

The baseline is enforced by `scripts/validate-operations-domain.mjs`.

## Explicitly unsupported until approved

- commission period finalization;
- automatic ambiguous bonus payouts;
- uncontrolled two-way Google Sheets writes;
- fabricated payment terms;
- fabricated commercial values;
- a second independent depletion application.
