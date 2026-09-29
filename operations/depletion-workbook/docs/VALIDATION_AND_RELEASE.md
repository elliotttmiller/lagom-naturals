# Validation and Release Plan

## Verified prototype reconciliation

| Control | Expected |
| --- | ---: |
| Unique invoices | 2 |
| Depletion lines | 8 |
| Cases | 8.00 |
| Revenue | $583.92 |
| COGS | $576.00 |
| Gross profit | $7.92 |
| Open AR | $0.00 |
| Product master rows | 17 |
| Rep configurations | 4 |

The workbook Overview contains formula-driven reconciliation checks for invoice count, depletion-line count, revenue, cases, and gross profit.

## Technical validation performed

- Valid XLSX export generated.
- Overview, Invoices, and Depletion key ranges inspected after re-import.
- Each seed invoice calculates 4 cases, $291.96 revenue, $288.00 COGS, and $3.96 gross profit.
- Workbook totals calculate 8 cases, $583.92 revenue, $576.00 COGS, and $7.92 gross profit.
- Both seed invoices calculate Paid / Closed / $0 balance.
- All 8 seed depletion rows calculate QA = OK.
- Both seed invoice rows calculate QA = OK.
- Formula-error scan found zero REF, DIV/0, VALUE, NAME, or N/A errors.
- Overview, Invoices, Depletion, Commissions, and Setup were visually reviewed after final formatting corrections.

## Acceptance tests before cutover

1. Add an account on Setup and confirm it is available on Invoices.
2. Add a product on Setup and confirm Depletion resolves SKU and COGS.
3. Create a new invoice and verify it remains Draft/zero until depletion lines exist.
4. Add one depletion line and confirm revenue/cases/COGS/profit update.
5. Add another product to the same invoice and confirm invoice count remains one.
6. Duplicate an invoice/product pair and confirm Depletion QA = REVIEW.
7. Record a partial payment and confirm Partial status and correct AR.
8. Complete payment with a date and confirm Paid, $0 balance, Closed aging, and commission eligibility.
9. Remove a payment date from a fully paid invoice and confirm Invoice QA = REVIEW.
10. Reconcile Reports filters to the operating ledger.
11. Select each rep in Commissions and confirm rate lookup.
12. Confirm Jess bonus threshold results in REVIEW instead of an automatic bonus payment.

## Migration strategy

Phase 1: validate the prototype and acceptance tests without replacing the legacy workbook.

Phase 2: migrate a representative sample containing paid/unpaid, new/reorder, multiple reps/products, and any verified nonstandard terms. Reconcile invoice counts, cases, revenue, COGS, gross profit, AR, and commissions.

Phase 3: migrate full history only after source-date interpretation and commission rules are confirmed. Exclude template/formula rows without invoice identity. Quarantine orphan notes rather than fabricating transactions.

Phase 4: run a short parallel validation period, then freeze legacy entry and designate V2 as the operational workbook.

## Known business confirmations

Historical date: source serial 46064 resolves to 2026-02-11 and must be owner-confirmed before bulk migration.

Jess bonus: the legacy sheet indicates a $10,000 threshold and references 3%, but the export does not expose an auditable formula contract. V2 preserves the threshold and requires review when reached; it does not invent payout semantics.

## Security gate

Do not copy banking/remittance credentials from the legacy Invoice Generator into GitHub, workbook source files, screenshots, or documentation.
