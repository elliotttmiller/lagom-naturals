# Depletion / CRM Boundary

## Active architecture

The prior V2 boundary that kept depletion outside CRM has been superseded by the Lagom Company Operations Portal direction adopted on 2026-09-29.

See:

- `COMPANY_OPERATIONS_PORTAL.md`
- `../../operations/depletion-workbook/docs/ADR-002-COMPANY-OPERATIONS-PORTAL.md`

The operational distinction still matters:

- CRM owns relationships, contacts, pipeline, activities, tasks, notes, and follow-up.
- Commercial Operations owns invoices, product-level depletion, cases, booked revenue, approved depletion COGS/gross profit, payment/AR state, reporting, and commission eligibility.

These are separate workspaces inside one company application, not separate systems of record.

## Source of truth

Supabase/Postgres is the canonical transactional store for the Company Operations application.

The depletion workbook is retained as a historical business-rule, reconciliation, import/export, and ownership audit artifact. It must not become a second uncontrolled production writer.

Any future Google Sheets synchronization must define stable IDs, field ownership, conflict handling, and a server-side adapter before two-way edits are allowed.

## Historical note

`ADR-001-SEPARATE-DEPLETION-FROM-CRM.md` documents the previous architecture and remains useful context for why duplicate transaction ledgers are prohibited. ADR-002 supersedes its system-boundary decision while preserving the single-source-of-truth principle.
