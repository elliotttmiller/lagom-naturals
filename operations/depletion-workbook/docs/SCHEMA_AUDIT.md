# Legacy Workbook Schema Audit

## Executive finding

The legacy workbook contains useful operating logic but combines transaction entry, invoice accounting, product-line depletion, AR, commissions, invoice presentation, helper calculations, QA, and system-health checks in one spreadsheet system. The primary Depletion Log exposes 36 columns even though only a subset are true user inputs.

V2 normalizes the workflow around two grains:

- Invoice grain: one row per unique invoice.
- Depletion grain: one row per invoice/product line.

Everything else is controlled master data or a derived view.

## Verified legacy defects

### Formula-filled blank rows are treated as business records

The Depletion Log contains 1,001 exported rows, but only 8 rows contain an Invoice #. Formula/template columns continue far below the real data, causing System Health to report hundreds of false missing-value conditions. V2 gates calculations and QA on the record key.

### Dashboard counts line items as invoices

The Executive Dashboard reports 8 invoices even though the populated ledger contains 2 unique invoice numbers and 8 product lines. V2 counts invoices only from the invoice-grain table.

### Conflicting case/profit totals

The Executive Dashboard reports 0 cases and $0 gross profit while Product Summary reports 8 cases and $7.92 gross profit for the same populated records. V2 derives all management metrics from one normalized ledger and adds explicit reconciliation controls.

### AR export has a fragile field contract

The exported Invoice Summary - AR Ledger contains rows whose values do not consistently align with the visible header contract. V2 replaces the secondary AR ledger with a derived invoice-level AR view.

### Rep sheets are duplicated

Tito, Jess, Timmy, and Roman each have separate salesperson sheets. V2 replaces all four with one parameterized Commissions view driven by the rep master.

### Sensitive invoice-template data is mixed into the workbook

The legacy Invoice Generator contains banking/remittance data. V2 does not source-control or propagate those credentials. Invoice printing is outside the core V2 scope until a private remittance process is defined.

## Legacy sheet disposition

| Legacy sheet | V2 disposition |
| --- | --- |
| Depletion Log | Split into Invoices + Depletion |
| Executive Dashboard | Rebuilt as Overview |
| Product Summary | Consolidated into Reports |
| Invoice Summary - AR Ledger | Rebuilt as derived AR |
| Invoice Generator | Deferred; sensitive remittance data excluded |
| Tito - Sales | Consolidated into Commissions |
| Jess - Sales | Consolidated into Commissions |
| Timmy - Sales | Consolidated into Commissions |
| Roman - Sales | Consolidated into Commissions |
| Lookup | Rebuilt as Setup |
| Analytics Helper | Removed from user workflow |
| QA Audit | Embedded record QA + reconciliation |
| System Health | Removed; QA evaluates keyed records only |

## Legacy field strategy

The complete 36-field mapping is in migration/legacy-field-map.csv.

Invoice-level fields move to Invoices. Product-line fields move to Depletion. SKU, product-line metadata, and COGS come from Setup. Revenue, COGS, profit, balances, payment status, due/aging state, and commission eligibility are formulas. Helper keys and duplicate-check columns are replaced by deterministic QA.

Collection follow-up dates are not part of V2 core because the populated source does not demonstrate a reliable finance follow-up dataset and relationship follow-up belongs in the CRM. Adjustment Type is documented as a future extension point rather than inventing behavior from empty source values.

## Rows not migrated

V2 seeds only rows with an actual Invoice #. Formula/template rows and orphan notes without invoice identity are quarantined for historical review rather than silently turned into transactions.
