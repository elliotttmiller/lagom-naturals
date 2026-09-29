# Lagom Naturals Depletion Workbook v2

> **Architecture status (2026-09-29):** This workbook remains the validated business-rule and reconciliation baseline, but it is no longer the primary production UI or transaction writer. The active production direction is the Lagom Company Operations Portal in `operations/lagom-operations`, backed by canonical Supabase commercial records. See `docs/ADR-002-COMPANY-OPERATIONS-PORTAL.md`. The historical V2 workflow below is preserved because its field contracts, formulas, QA rules, and reconciliation totals are still migration requirements.

## Purpose

This directory is the source-controlled V2 baseline for Lagom Naturals' depletion workbook workflow. The workbook is intentionally independent of the CRM. It records completed invoice/depletion activity, receivables, product economics, and commission eligibility without turning the CRM into a second transaction ledger.

## System boundary

CRM owns prospects, account relationships, contacts, pipeline, activities, tasks, notes, and sales follow-up.

Depletion Workbook owns completed invoices, product-level depletion, cases, booked revenue, depletion COGS/gross profit, payment/AR state, and commission eligibility until an accounting system formally supersedes those responsibilities.

There is no required CRM API, database, Supabase, webhook, Power Automate, or bidirectional synchronization dependency in V2. Any future CRM connection should begin as optional/read-only summarized context, not duplicate data entry.

## Repository package

- docs/SCHEMA_AUDIT.md — legacy workbook audit and sheet disposition.
- docs/DATA_CONTRACT.md — canonical V2 entities, field ownership, calculations, and invariants.
- docs/VALIDATION_AND_RELEASE.md — reconciliation, acceptance tests, migration, and rollout gates.
- docs/ADR-001-SEPARATE-DEPLETION-FROM-CRM.md — historical separation decision.
- docs/ADR-002-COMPANY-OPERATIONS-PORTAL.md — active architecture decision superseding ADR-001.
- schema/v2-schema.json — machine-readable V2 contract.
- migration/legacy-field-map.csv — 36-column legacy-to-V2 mapping.
- source/*.csv — sanitized seed/master data used by the validated prototype.
- manifest.json — version, checksum, reconciliation targets, and security controls.
- dist/README.md — validated workbook artifact checksum and distribution policy.

## Workbook workflow

1. Maintain controlled master data on Setup.
2. Add one row per completed invoice on Invoices.
3. Add one row per invoice/product line on Depletion.
4. Record payment amount/date once on Invoices.
5. Review AR, Reports, and Commissions as derived surfaces.
6. Use Overview for management KPIs and reconciliation.

Cream-colored cells are operational inputs. Muted cells are formula-owned outputs.

## V2 worksheet architecture

| Sheet | Purpose | Manual input |
| --- | --- | --- |
| Overview | Management KPIs, monthly performance, AR aging, reconciliation | Reporting year only |
| Invoices | One row per invoice | Invoice/account/payment inputs |
| Depletion | One row per invoice/product | Invoice, product, cases, sale price |
| AR | Invoice-level receivables/aging view | None |
| Reports | Product and account performance | Date range + rep filter |
| Commissions | Consolidated rep/pay-period commission view | Rep + date range |
| Setup | Products, minimal account keys, reps, account types, terms | Master-data administration |
| Guide | Workflow, system boundary, safety controls | None |

## Security / scope controls

The legacy Invoice Generator export contains sensitive remittance/banking information. Those values are not copied into this directory, the validated workbook source package, the sanitized seed files, or the schema. Invoice printing is deferred until ownership confirms it is still required and an appropriate private remittance process is defined.

The legacy 1099 tax-estimate block is removed because individual tax estimation is outside the depletion/AR workflow. The Jess bonus threshold/note is preserved as configuration context but bonus math is not automatically paid because the CSV export does not expose an auditable formula contract.

## Verified seed reconciliation

- 2 unique invoices
- 8 depletion lines
- 8 cases
- $583.92 revenue
- $576.00 depletion COGS
- $7.92 gross profit
- $0 outstanding AR
- 17 product master records
- 4 rep configurations

The populated legacy rows store Excel serial 46064, which resolves to 2026-02-11 under the Excel 1900 date system. V2 preserves that interpretation and flags it for owner confirmation before any full historical migration.

## Release status

The working V2 prototype has passed seed reconciliation, formula-error scanning, and visual QA. Two business confirmations remain before historical migration can be declared complete:

1. confirm the historical date represented by serial 46064;
2. confirm the exact Jess bonus semantics if bonus automation is desired.
