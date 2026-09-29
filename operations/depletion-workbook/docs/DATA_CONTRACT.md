# V2 Data Contract

## Design rules

1. One business concept has one authoritative field.
2. Invoice-level values are not repeated across depletion lines.
3. Inputs and calculations are visually and structurally distinct.
4. Products, accounts, reps, account types, and terms are controlled master data.
5. AR, Reports, Commissions, and Overview are derived surfaces, not writable ledgers.
6. Blank reserved rows are not records.
7. The workbook has no required CRM write dependency.

## Invoices

Grain: one row per unique invoice number.

| Field | Ownership | Contract |
| --- | --- | --- |
| Invoice # | Input | Required; unique business key |
| Invoice Date | Input | Required date |
| Account | Input/validated | Required; Setup account selection |
| Sales Rep | Input/validated | Required; rep selection |
| Account Type | Input/validated | Required; currently New/Reorder |
| Terms | Input/validated | Required; verified seed is Due on receipt |
| Amount Paid | Input | Non-negative; QA rejects values above invoice revenue |
| Payment Date | Input | Required when payment status is Paid |
| Notes | Input | Optional invoice-level note |
| City | Derived | Account lookup |
| Channel | Derived | Account lookup |
| Invoice Revenue | Derived | Sum of Depletion revenue by invoice |
| Cases | Derived | Sum of Depletion cases by invoice |
| Total COGS | Derived | Sum of Depletion COGS by invoice |
| Gross Profit | Derived | Revenue - COGS |
| Gross Margin | Derived | Gross Profit / Revenue |
| Balance Due | Derived | max(Revenue - Amount Paid, 0) |
| Due Date | Derived | Invoice Date + configured term days |
| Payment Status | Derived | Draft / Unpaid / Partial / Paid |
| Days Past Due | Derived | Closed=0; otherwise max(today-due date, 0) |
| Aging | Derived | Closed / Current / 1-30 / 31-60 / 61-90 / 90+ / Review |
| Commission Eligible Date | Derived | Payment Date only when Paid |
| QA Status | Derived | OK or REVIEW |

## Depletion

Grain: one row per invoice/product line.

| Field | Ownership | Contract |
| --- | --- | --- |
| Invoice # | Input/validated | Must resolve to Invoices |
| Product | Input/validated | Must resolve to Product master |
| Cases | Input | Positive numeric |
| Sale Price | Input | Non-negative case price |
| Revenue | Derived | Cases x Sale Price |
| SKU | Derived | Product lookup |
| Product Line | Derived | Product lookup |
| COGS/Case | Derived | Product lookup |
| Total COGS | Derived | Cases x COGS/Case |
| Gross Profit | Derived | Revenue - COGS |
| Invoice Date | Derived | Invoice lookup |
| Account | Derived | Invoice lookup |
| Sales Rep | Derived | Invoice lookup |
| Account Type | Derived | Invoice lookup |
| QA Status | Derived | Required/lookup/duplicate controls |

## Setup masters

Product master fields: Product, SKU, Description, Category, Product Line, COGS/Case, Cost/Unit Ref, Active.

Account master fields: Account, City, Channel, Active. V2 intentionally stores only depletion-relevant keys; full relationship profiles remain CRM-owned.

Rep fields: Rep, New Rate, Reorder Rate, Mileage Rate, Bonus Threshold, Bonus Rule / Status, Active. V2 does not fabricate commission rules.

Payment terms fields: Term, Days. The only source-proven seed is Due on receipt = 0 days.

## Derived surfaces

AR derives one receivables row per invoice.

Reports accepts Start Date, End Date, and Sales Rep filters and returns product/account performance from the same ledger.

Commissions accepts Sales Rep, Period Start, and Period End. Base commission uses paid invoices whose commission-eligible date falls inside the selected period. No separate rep ledger exists.

Overview exposes revenue, cases, gross profit, gross margin, open AR, QA issue count, monthly performance, AR aging, and reconciliation.

## Invariants

- Invoice # is unique on Invoices.
- Depletion Invoice # resolves to an invoice.
- Product resolves to a product-master record.
- Duplicate Invoice # + Product pairs are REVIEW.
- Cases are positive.
- Sale Price is not negative.
- Amount Paid is not negative or greater than invoice revenue.
- Paid invoices require Payment Date.
- Empty reserved rows do not contribute to QA or KPIs.
