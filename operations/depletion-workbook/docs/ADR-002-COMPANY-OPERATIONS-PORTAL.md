# ADR-002: Consolidate Depletion into the Company Operations Portal

Status: Accepted  
Date: 2026-09-29  
Supersedes: ADR-001 for the active production architecture

## Context

ADR-001 separated the depletion workbook from CRM to avoid dual entry, competing transaction ledgers, and premature coupling.

The operating direction has now changed. Lagom is consolidating the workbook's validated commercial model into the existing web application so ownership and sales reps can use one company operations interface rather than switching between CRM and a spreadsheet.

The implementation must preserve the useful domain separation identified in ADR-001:

- CRM remains relationship and workflow oriented;
- depletion remains invoice/product/case/economics oriented;
- the two domains share one application shell and one normalized commercial data foundation;
- there must still be only one authoritative transaction write path.

The existing CRM already has the normalized Supabase model for invoices, invoice lines, payments, collections, products, reps, and commission eligibility. Creating a second Google Sheets write path would recreate the source-of-truth problem ADR-001 was intended to prevent.

## Decision

Use `crm/lagom-crm` as the primary Lagom Company Operations application.

Supabase/Postgres is the canonical operational datastore for:

- accounts;
- products;
- sales reps;
- invoices;
- invoice product lines / depletion;
- payments and AR state;
- collection activity;
- reporting facts;
- commission eligibility.

The workbook's formulas, controls, reconciliation rules, and visual reporting are translated into testable application domain logic and web UI.

The depletion workflow remains a dedicated Commercial workspace rather than being modeled as a CRM activity object.

The Google Sheets/XLSX workbook remains:

- the historical implementation reference;
- a reconciliation baseline;
- a controlled import/export artifact;
- an ownership/admin audit aid where useful.

It is not a parallel production writer.

## Application boundary

```text
LAGOM COMPANY OPERATIONS
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
└── Admin
    ├── Settings
    └── Setup
```

## Workbook-to-application mapping

| Workbook responsibility | Application responsibility |
| --- | --- |
| Overview | Company Dashboard |
| Invoices | Invoices workspace |
| Depletion | Depletion workspace |
| AR | Accounts Receivable workspace |
| Reports | Reports workspace |
| Commissions | Commissions workspace |
| Setup products/accounts/reps | Existing CRM master data |
| Setup payment terms | `payment_terms` master + invoice Terms selector |
| Guide | Product documentation and contextual help |
| Run Check | Live Operations Check dialog |
| Import Depletion | Validated XLSX import workflow |
| Reset Filters | Per-workspace filter reset |
| Record Payment | Invoice payment workflow |

## Data integrity rules

The workbook contract remains authoritative for the migrated business semantics:

- Invoice # is unique.
- Depletion grain is one Invoice # + Product pair.
- Cases must be positive.
- Sale Price may be zero but not negative.
- Revenue = Cases × Sale Price.
- Total COGS = Cases × approved COGS/Case.
- Gross Profit = Revenue - Total COGS.
- AR derives from invoice/payment state.
- Paid invoices require a payment date.
- Commission eligibility is payment-based.
- Commission rates come only from approved rep configuration.
- Ambiguous bonus rules are not auto-paid.

## Synchronization rule

Application mutations write to Supabase first. Company Operations workspaces refresh after mutations and subscribe to relevant Postgres changes.

A future live Google Sheets mirror is allowed only if it has an explicit ownership model. The preferred pattern is one-way export/reporting. A two-way adapter would require stable IDs, field-level ownership, conflict resolution, and server-side synchronization.

## Consequences

Positive:

- one login and application for ownership and reps;
- one commercial source of truth;
- no duplicate invoice/depletion entry;
- modern responsive UI without spreadsheet rendering constraints;
- reusable calculations and validation outside cell formulas;
- company-wide reporting can join CRM and commercial context.

Tradeoffs:

- the workbook is no longer the primary operational UI;
- historical spreadsheet formulas must be regression-tested as they are translated;
- production rollout now depends on the CRM database migration and application deployment;
- owner/admin spreadsheet edits do not automatically mutate production data unless a future controlled adapter is added.

## Verification baseline

The approved seed remains the migration regression target:

- 2 invoices;
- 8 depletion lines;
- 8 cases;
- $583.92 revenue;
- $576.00 COGS;
- $7.92 gross profit;
- $0.00 open AR.

ADR-001 remains in the repository as historical decision context, but ADR-002 governs the active architecture.
