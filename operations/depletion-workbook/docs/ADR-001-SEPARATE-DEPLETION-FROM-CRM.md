# ADR-001: Keep Depletion Workbook Separate from CRM

Status: Accepted
Date: 2026-09-28

## Context

The prior CRM prototype normalized depletion/invoice data into CRM transaction entities. Ownership clarification established a different operating model: the CRM should be the intelligent sales/relationship system, while the depletion workbook remains a separate operational/financial ledger.

Duplicating invoice/depletion entry in both systems would create reconciliation risk, conflicting sources of truth, user confusion, and unnecessary application complexity.

## Decision

Implement the V2 depletion workflow independently under operations/depletion-workbook/.

The workbook is authoritative for completed invoices, product depletion/cases, depletion revenue/COGS/profit, payment/AR state, and commission eligibility until a formal accounting system supersedes a responsibility.

The CRM remains authoritative for prospects, account relationships, contacts, pipeline, activities, tasks, notes, and follow-up.

V2 contains no required CRM API, database, Supabase, webhook, Power Automate, or bidirectional synchronization dependency.

## Consequences

Positive consequences:
- one operational source of truth for depletion;
- lower implementation and maintenance complexity;
- no duplicate transaction entry;
- easier reconciliation;
- workbook and CRM can evolve independently.

Tradeoffs:
- CRM does not automatically receive live depletion metrics in V2;
- account-level commercial context may require workbook review until a future summary integration is justified.

## Future integration rule

If ownership later requires depletion context in CRM, begin with a read-only summarized feed such as last completed order, YTD revenue/cases, and outstanding balance. Do not create a second CRM write workflow for the same depletion transactions without an explicit architecture revision.

## Existing CRM prototype code

Repository code created under the earlier Sales & Depletion inside CRM direction is legacy/prototype implementation, not the V2 system-of-record architecture. Removal or repurposing of those CRM surfaces should be handled as a controlled CRM cleanup so this workbook implementation does not introduce unrelated UI regressions.
