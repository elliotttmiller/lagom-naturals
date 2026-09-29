# Lagom Operations — Invoices Module Contract

## Purpose

Invoices is the canonical sales ledger and invoice mutation workflow inside Lagom Operations.

It is implemented as a module in the shared Operations shell rather than as a future CRM tab.

## Canonical data

| Concern | Source |
| --- | --- |
| Invoice header / AR | `invoices` + `crm_invoice_rollup` |
| Product lines | `invoice_items` |
| Order link | `orders` + `order_items` |
| Payments | `payments` |
| Collection activity | `collection_activities` |
| Payment terms | `payment_terms` |
| Products / COGS | `products` |
| Accounts | `prospects` |

## User experience

The module follows the approved Lagom Operations invoice mockup:

- page title + sales-operations label;
- All / Open / Paid / Overdue / Draft segmented views;
- invoice/account search;
- Status / Rep / Account / Date filters;
- Records / Revenue / Open AR / QA metric cards;
- dense invoice ledger;
- status chips;
- New Invoice primary action.

Invoice import remains disabled until a formal import contract is approved.

## New invoice workflow

`components/operations/InvoiceDialog.jsx`:

1. selects an existing account;
2. resolves sales rep and New Placement vs Reorder;
3. applies an approved payment term;
4. derives Due Date from Invoice Date + term days;
5. adds one or more product lines;
6. uses approved product price/COGS fields when present;
7. creates the backing order and order items;
8. records inventory movements when product quantity is tracked;
9. creates the invoice;
10. writes normalized invoice items;
11. optionally records an initial payment.

Invoice number generation uses the database `next_invoice_number` function. The client does not invent sequence numbers.

## AR semantics

Balance and aging are derived from invoice/payment records.

Stored invoice status is normalized in the domain layer:

- Draft when invoice revenue is zero;
- Unpaid when no payment exists;
- Partial when payment is greater than zero but below total;
- Paid when amount paid reaches invoice total;
- Overdue is a derived UI state based on unpaid balance and due date.

## QA

Invoice QA includes:

- missing / duplicate invoice number;
- missing invoice date;
- missing account;
- missing rep;
- missing terms;
- missing product lines;
- invalid or excessive payment;
- paid invoice without payment date;
- invoice total versus line-revenue reconciliation.

## Workbook compatibility

The invoice module preserves the workbook contract while using normalized web application records.

Approved baseline:

- 2 invoices;
- 8 product lines;
- 8 cases;
- $583.92 revenue;
- $576.00 COGS;
- $7.92 gross profit;
- $0.00 open AR.

Validate with `npm run validate:operations`.
