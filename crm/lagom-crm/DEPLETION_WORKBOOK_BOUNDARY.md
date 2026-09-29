# Depletion Workbook Boundary

The accepted V2 architecture keeps the depletion workflow outside the CRM.

Canonical documentation: ../../operations/depletion-workbook/

CRM responsibilities remain prospects, account relationships, contacts, pipeline, activities, tasks, notes, and follow-up.

Completed invoices, product depletion/cases, depletion revenue/COGS/profit, payment/AR state, and commission eligibility are owned by the independent depletion workbook until an accounting system explicitly supersedes a responsibility.

Existing CRM depletion code reflects the earlier prototype direction. Do not extend it as a second depletion source of truth. Removal or repurposing should be handled in a controlled CRM cleanup pass to avoid unrelated frontend regressions.
