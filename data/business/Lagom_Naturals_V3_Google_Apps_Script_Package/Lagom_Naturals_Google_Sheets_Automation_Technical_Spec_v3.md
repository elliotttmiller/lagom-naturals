# Lagom Naturals Google Sheets Automation Technical Specification v3
## Production Engineering Contract
### Google Sheets Primary · Apps Script · Nunito · Premium Light UI

**Document status:** Implementation specification  
**Primary platform:** Google Sheets  
**Automation runtime:** Google Apps Script  
**Document/export integrations:** Google Drive + Google Docs where appropriate  
**Secondary implementation:** Microsoft Office Scripts after Google v3 validation  
**Version target:** v3.0

---

# 1. Purpose

This document defines the exact technical contract for the Lagom Naturals Depletion System v3 automation layer.

It specifies:

- dataset schemas;
- sheet contracts;
- named UI controls;
- write permissions;
- script responsibilities;
- function signatures;
- validation rules;
- QA Rule IDs;
- side effects;
- result objects;
- logging;
- locking;
- idempotency;
- performance behavior;
- protection requirements;
- UI interaction contracts;
- color/design tokens that automation-created UI must follow.

The central implementation rule is:

> **Apps Script orchestrates workflows. Formulas own transparent business calculations.**

No script should duplicate core calculations merely because it can.

---

# 2. Platform architecture

```text
Google Sheets
├── Formula/data layer
├── Named UI controls
├── Protected ranges
├── Data validation
├── Filter/search state
└── Apps Script
    ├── Validation
    ├── Import
    ├── Payments
    ├── Documents
    ├── Period close
    ├── Commissions
    ├── Snapshots
    └── Logging
```

External Google services may be used only where they materially improve the workflow:

- Drive for snapshots/archive;
- Docs for professional invoice output;
- PropertiesService for non-secret configuration/state when appropriate;
- LockService for mutation safety.

Do not use external databases in v3.

---

# 3. Source workbook baseline

The v2.1 business model is preserved:

- `Overview`;
- `Invoices`;
- `Depletion`;
- `AR`;
- `Reports`;
- `Commissions`;
- `Setup`;
- `Guide`.

The v3 implementation adds:

- `QA Audit`;
- `Period History`;
- `Import Staging`;
- `_Automation Log`;
- `_System`.

The current v2.1 philosophy that automation is optional and financial logic remains formula-driven is retained.

---

# 4. Global visual contract for script-created UI

Any range, menu-adjacent control, temporary staging area, result message, status cell, or generated sheet created by Apps Script must follow the workbook's canonical design tokens.

## 4.1 Font

`Nunito`

Automation must not introduce another font family.

## 4.2 Core colors

```yaml
surface:
  canvas: "#F7F7F4"
  primary: "#FCFCFA"
  secondary: "#F1F2EE"
  tertiary: "#E7E9E4"
  input: "#FFF9EE"
  calculated: "#F3F5F2"

text:
  primary: "#171A18"
  secondary: "#656A66"
  muted: "#8A8F8B"
  disabled: "#A7ABA7"

border:
  default: "#D9DDD7"
  strong: "#C8CEC7"
  focus: "#9EBEAA"
  subtle: "#E6E8E3"

accent:
  soft: "#DDEBE3"
  mid: "#9EBEAA"
  text: "#365646"
  deep: "#294537"

success:
  bg: "#E4F0E8"
  text: "#326146"
  border: "#BFD8C7"

review:
  bg: "#F6ECD6"
  text: "#7B5B20"
  border: "#E4C98E"

critical:
  bg: "#F4E1DF"
  text: "#8A4039"
  border: "#DDB6B1"

info:
  bg: "#E7EDF2"
  text: "#425D70"
  border: "#C9D6DF"
```

## 4.3 Automation UI restrictions

Scripts must not create:

- black-filled headers;
- dark mastheads;
- neon fills;
- default bright Google blue as the primary brand color;
- excessive borders;
- whole-row red fills for ordinary reviews;
- inconsistent fonts.

---

# 5. Sheet registry

Canonical sheet names:

```javascript
const SHEETS = Object.freeze({
  OVERVIEW: 'Overview',
  INVOICES: 'Invoices',
  DEPLETION: 'Depletion',
  AR: 'AR',
  REPORTS: 'Reports',
  COMMISSIONS: 'Commissions',
  SETUP: 'Setup',
  GUIDE: 'Guide',
  QA: 'QA Audit',
  PERIOD_HISTORY: 'Period History',
  IMPORT_STAGING: 'Import Staging',
  AUTOMATION_LOG: '_Automation Log',
  SYSTEM: '_System'
});
```

Scripts must reference the registry rather than scattering raw sheet names.

---

# 6. Named-range registry

All automation-facing UI controls must be addressed by named ranges.

## 6.1 Overview

```text
ui_overview_period
ui_overview_health
ui_overview_last_check
ui_overview_action_status
```

## 6.2 Invoices

```text
ui_invoices_search
ui_invoices_status
ui_invoices_rep
ui_invoices_aging
ui_invoices_start
ui_invoices_end
ui_invoices_result_count
ui_invoices_action_status
```

## 6.3 Depletion

```text
ui_depletion_search
ui_depletion_rep
ui_depletion_product_line
ui_depletion_product
ui_depletion_start
ui_depletion_end
ui_depletion_qa
ui_depletion_result_count
ui_depletion_action_status
```

## 6.4 AR

```text
ui_ar_search
ui_ar_aging
ui_ar_rep
ui_ar_result_count
```

## 6.5 Reports

```text
ui_report_start
ui_report_end
ui_report_rep
ui_report_account
ui_report_product
ui_report_product_line
ui_report_search
ui_report_active_only
```

## 6.6 Commissions

```text
ui_commission_rep
ui_commission_start
ui_commission_end
ui_commission_status
```

Named ranges are mandatory for controls. Business logic must not depend on raw coordinates such as `B3` or `F7`.

---

# 7. Dataset registry

Logical datasets should use defined header rows and dynamically detected data extents.

Apps Script should not depend on fixed row counts.

Canonical logical datasets:

```javascript
const DATASETS = Object.freeze({
  INVOICES: 'INVOICES',
  DEPLETION: 'DEPLETION',
  PRODUCTS: 'PRODUCTS',
  ACCOUNTS: 'ACCOUNTS',
  REPS: 'REPS',
  TERMS: 'TERMS',
  ACCOUNT_TYPES: 'ACCOUNT_TYPES',
  QA: 'QA',
  PERIOD_HISTORY: 'PERIOD_HISTORY',
  IMPORT_STAGING: 'IMPORT_STAGING',
  AUTOMATION_LOG: 'AUTOMATION_LOG',
  COMMISSION_HISTORY: 'COMMISSION_HISTORY'
});
```

---

# 8. Invoices schema

Primary business key:

```text
Invoice #
```

Recommended hidden technical key:

```text
invoice_id
```

## 8.1 Columns

| Column | Type | Required | Owner | Script write |
|---|---|---:|---|---:|
| Invoice # | string | yes | user/script | yes |
| Invoice Date | date | yes | user/script | yes |
| Account | reference | yes | user | yes |
| Sales Rep | reference | yes | user | yes |
| Account Type | enum | yes | user/derived decision | yes |
| Terms | reference | yes | user | yes |
| Amount Paid | currency | yes | payment model | conditional |
| Payment Date | date | conditional | payment workflow | yes |
| Notes | text | no | user/script | yes |
| City | string | derived | formula | no |
| Channel | string | derived | formula | no |
| Invoice Revenue | currency | derived | formula | no |
| Cases | number | derived | formula | no |
| Total COGS | currency | derived | formula | no |
| Gross Profit | currency | derived | formula | no |
| Gross Margin | percent | derived | formula | no |
| Balance Due | currency | derived | formula | no |
| Due Date | date | derived | formula | no |
| Payment Status | enum | derived | formula | no |
| Days Past Due | integer | derived | formula | no |
| Aging | enum | derived | formula | no |
| Commission Eligible Date | date | derived | formula | no |
| QA Status | enum | derived/system | QA/formula | no |
| Search Key | string | derived | formula/system | no |

## 8.2 Accepted invoice automation writes

Allowed:
- Invoice #;
- Invoice Date;
- Account;
- Sales Rep;
- Account Type;
- Terms;
- Amount Paid only through payment workflow;
- Payment Date only through payment workflow;
- Notes.

Forbidden:
- any calculated financial field;
- Aging;
- Payment Status;
- Commission Eligible Date;
- QA Status;
- Search Key.

---

# 9. Depletion schema

Recommended hidden technical key:

```text
depletion_id
```

## 9.1 Columns

| Column | Type | Required | Owner | Script write |
|---|---|---:|---|---:|
| Invoice # | reference | yes | user/import | yes |
| Product | reference | yes | user/import | yes |
| Cases | number | yes | user/import | yes |
| Sale Price | currency | yes | user/import | yes |
| Revenue | currency | derived | formula | no |
| SKU | string | derived | formula | no |
| Product Line | string | derived | formula | no |
| COGS/Case | currency | derived | formula | no |
| Total COGS | currency | derived | formula | no |
| Gross Profit | currency | derived | formula | no |
| Invoice Date | date | derived | formula | no |
| Account | string | derived | formula | no |
| Sales Rep | string | derived | formula | no |
| Account Type | string | derived | formula | no |
| QA Status | enum | derived/system | QA/formula | no |
| Search Key | string | derived | formula/system | no |

## 9.2 Accepted depletion automation writes

Only:
- Invoice #;
- Product;
- Cases;
- Sale Price.

Everything else remains formula/system owned.

---

# 10. Product master schema

| Column | Type | Required |
|---|---|---:|
| Product | string | yes |
| SKU | string | yes |
| Description | string | no |
| Category | string | no |
| Product Line | string | yes |
| COGS/Case | currency | yes |
| Cost/Unit Ref | currency | no |
| Active | boolean | yes |

Unique constraints:
- SKU;
- Product where business rules require unique display names.

---

# 11. Account master schema

| Column | Type | Required |
|---|---|---:|
| Account | string | yes |
| City | string | no |
| Channel | string | no |
| Type | string | no |
| Active | boolean | yes |

Unique constraint:
- Account or future account_id if introduced.

---

# 12. Rep master schema

| Column | Type | Required |
|---|---|---:|
| Rep | string | yes |
| New Rate | percent | yes |
| Reorder Rate | percent | yes |
| Mileage Rate | currency | no/reference |
| Bonus Threshold | number/currency | no |
| Bonus Rule / Status | text | no |
| Active | boolean | yes |

Unconfirmed bonus rules remain non-automated.

---

# 13. Terms schema

| Column | Type | Required |
|---|---|---:|
| Term | string | yes |
| Days | integer | yes |

Unique constraint:
- Term.

---

# 14. Automation configuration schema

Recommended location: `_System` or controlled Setup block.

| Key | Type | Example |
|---|---|---|
| WorkbookVersion | string | `3.0.0` |
| Environment | enum | `Production` |
| RequireCleanQAForClose | boolean | `TRUE` |
| AllowOverpayment | boolean | `FALSE` |
| DuplicateDepletionPolicy | enum | `REVIEW` |
| InvoicePrefix | string | `INV` |
| SnapshotFolderId | string | configured Drive folder |
| InvoiceOutputFolderId | string | configured Drive folder |
| TimeZone | string | business timezone |
| SearchMode | enum | `Manual` |

Do not create dozens of speculative settings.

---

# 15. QA Audit schema

| Column | Type |
|---|---|
| Finding ID | string |
| Severity | enum |
| Area | string |
| Record | string |
| Rule ID | string |
| Issue | string |
| Recommended Action | string |
| Detected At | timestamp |
| Resolved | boolean/optional |

Severity values:

```text
Critical
Review
Info
```

---

# 16. QA rule registry

Canonical IDs:

## Invoice

```text
INV_DUPLICATE_ID
INV_MISSING_DATE
INV_UNKNOWN_ACCOUNT
INV_INACTIVE_ACCOUNT
INV_UNKNOWN_REP
INV_INACTIVE_REP
INV_MISSING_TERMS
INV_NO_DEPLETION
INV_ZERO_REVENUE
INV_INVALID_ACCOUNT_TYPE
```

## Payment

```text
PAY_NEGATIVE
PAY_OVER_TOTAL
PAY_DATE_MISSING
PAY_DATE_BEFORE_INVOICE
PAY_PAID_BALANCE_NONZERO
PAY_FUTURE_DATE
PAY_ALREADY_CLOSED
```

## Depletion

```text
DEP_ORPHAN_INVOICE
DEP_UNKNOWN_PRODUCT
DEP_INACTIVE_PRODUCT
DEP_INVALID_CASES
DEP_INVALID_PRICE
DEP_DUPLICATE_LINE
DEP_MISSING_COGS
DEP_NEGATIVE_MARGIN
```

## Master data

```text
MASTER_DUP_SKU
MASTER_DUP_PRODUCT
MASTER_DUP_ACCOUNT
MASTER_DUP_REP
MASTER_MISSING_REQUIRED
MASTER_INVALID_RATE
```

## Reconciliation

```text
RECON_REVENUE
RECON_CASES
RECON_COGS
RECON_BALANCE
```

## Commissions

```text
COMM_ELIGIBILITY
COMM_MISSING_RATE
COMM_DUP_FINALIZATION
COMM_INVALID_PERIOD
```

## Period close

```text
PERIOD_DUP_CLOSE
PERIOD_INVALID_RANGE
PERIOD_BLOCKING_QA
```

## Migration

```text
MIGRATION_UNCONFIRMED_DATE
```

The preserved historical seed date should remain a QA item until explicitly confirmed.

---

# 17. QA finding object

```javascript
/**
 * @typedef {Object} QAFinding
 * @property {'Critical'|'Review'|'Info'} severity
 * @property {string} area
 * @property {string} record
 * @property {string} ruleId
 * @property {string} issue
 * @property {string} recommendedAction
 */
```

QA should collect objects in memory and batch-write them at the end.

---

# 18. Standard script response envelope

All eight production scripts should return/log a normalized result shape.

```javascript
/**
 * @typedef {Object} ActionResult
 * @property {boolean} ok
 * @property {string} code
 * @property {string} message
 * @property {Object=} data
 */
```

Example:

```javascript
{
  ok: true,
  code: 'PAYMENT_POSTED',
  message: 'Payment recorded for invoice INV-1088.',
  data: {
    invoice: 'INV-1088',
    amount: 291.96,
    remainingBalance: 0
  }
}
```

Errors should be specific and actionable.

---

# 19. Shared internal services

Recommended Apps Script modules:

```text
Code.gs
Config.gs
Schema.gs
Sheets.gs
Datasets.gs
Normalize.gs
Validation.gs
Search.gs
QA.gs
Import.gs
Payments.gs
InvoiceDocs.gs
Periods.gs
Commissions.gs
Snapshots.gs
Logging.gs
UI.gs
Protection.gs
```

Responsibilities should remain separated.

---

# 20. Shared utility functions

Recommended private helpers:

```javascript
getSheet_(name)
getNamedRange_(name)
readDataset_(datasetName)
buildHeaderMap_(headers)
normalizeText_(value)
normalizeId_(value)
asNumber_(value)
asDate_(value)
buildIndex_(rows, key)
writeBatch_(range, values)
getConfig_(key)
setActionStatus_(namedRange, message, state)
logAction_(payload)
withDocumentLock_(callback)
```

Do not repeat normalization/indexing logic independently in each script.

---

# 21. Search key contract

Invoices Search Key should concatenate normalized:

- Invoice #;
- Account;
- Sales Rep;
- City;
- Payment Status;
- Aging;
- optional notes where practical.

Depletion Search Key should concatenate:

- Invoice #;
- Product;
- SKU;
- Account;
- Sales Rep;
- Product Line.

Search comparisons should be case-insensitive.

---

# 22. Script 1 — validateWorkbook()

## Signature

```javascript
function validateWorkbook()
```

## Purpose

Run the complete integrity/reconciliation engine.

## Reads

- Invoices;
- Depletion;
- Products;
- Accounts;
- Reps;
- Terms;
- Period History;
- commission configuration.

## Writes

Only:
- `QA Audit`;
- `ui_overview_health`;
- `ui_overview_last_check`;
- `ui_overview_action_status`;
- `_Automation Log`.

## Validation stages

1. load all datasets in batches;
2. construct master indexes;
3. validate master uniqueness;
4. validate invoice rows;
5. validate payment state;
6. validate depletion rows;
7. cross-reference invoices/depletion;
8. reconcile totals;
9. validate commission eligibility;
10. validate migration flags;
11. write findings in one batch;
12. update Overview health;
13. log.

## Health summary

```text
Healthy
1 Critical · 3 Review
```

## Success response

```javascript
{
  ok: true,
  code: 'QA_COMPLETE',
  message: 'Workbook check complete: 0 Critical, 3 Review.',
  data: { critical: 0, review: 3, info: 2 }
}
```

## Errors

```text
QA_ENGINE_ERROR
MISSING_REQUIRED_SHEET
MISSING_REQUIRED_HEADER
INVALID_SCHEMA
```

---

# 23. Script 2 — applyFilterView(view)

## Signature

```javascript
function applyFilterView(view)
```

`view` enum:

```text
Invoices
Depletion
AR
```

## Purpose

Apply the modern search/filter toolbar state.

## Reads

Named UI ranges for selected view.

## Writes

- sheet filter state;
- result-count named cell;
- action-status named cell if present.

No business data writes.

## Behavior

Invoices filters:
- search;
- status;
- rep;
- aging;
- start/end date.

Depletion:
- search;
- rep;
- product line;
- product;
- date range;
- QA.

AR:
- search;
- aging;
- rep.

## Reset

Empty search + `All` selectors = clear filters.

## Success

```javascript
{
  ok: true,
  code: 'FILTER_APPLIED',
  message: '37 of 428 invoices shown.',
  data: { visible: 37, total: 428, view: 'Invoices' }
}
```

## Errors

```text
UNKNOWN_VIEW
FILTER_CONTROL_MISSING
FILTER_APPLY_FAILED
```

---

# 24. Script 3 — importDepletion()

## Signature

```javascript
function importDepletion()
```

## Purpose

Validate and commit records from `Import Staging`.

## Staging schema

| Column |
|---|
| Source Row |
| Raw Invoice |
| Raw Product |
| Raw Cases |
| Raw Price |
| Normalized Invoice |
| Matched Product |
| Cases |
| Sale Price |
| Status |
| Rule / Reason |
| Commit ID |

States:

```text
Ready
Review
Duplicate
Rejected
Committed
```

## Reads

- Import Staging;
- Invoices;
- Products;
- current Depletion;
- config.

## Writes

Only:
- Depletion input columns;
- Import Staging status/result columns;
- QA Audit where needed;
- Automation Log.

## Validation

- invoice exists;
- product matches active master;
- Cases valid;
- Sale Price valid;
- duplicate policy;
- required fields present.

## Commit safety

1. acquire document lock;
2. re-read staging;
3. validate;
4. construct complete append batch;
5. append only Ready rows;
6. flush;
7. verify append count;
8. mark staging rows Committed;
9. run targeted reconciliation;
10. log.

No partial row-by-row commit.

## Success

```javascript
{
  ok: true,
  code: 'IMPORT_COMMITTED',
  message: '68 depletion rows committed. 6 rows remain in staging.',
  data: {
    detected: 74,
    committed: 68,
    review: 4,
    duplicates: 2
  }
}
```

## Errors

```text
IMPORT_EMPTY
IMPORT_SCHEMA_ERROR
IMPORT_NO_READY_ROWS
IMPORT_COMMIT_FAILED
IMPORT_LOCK_TIMEOUT
```

---

# 25. Script 4 — postPayment()

## Signature

```javascript
function postPayment(invoiceNumber, paymentAmount, paymentDate, note)
```

## Purpose

Post a controlled payment against one invoice.

## Validation

- invoice exists;
- payment amount numeric and > 0;
- payment date valid;
- payment date >= invoice date;
- invoice not already fully paid;
- resulting cumulative paid amount <= invoice revenue unless config explicitly permits;
- formula-owned cells remain untouched.

## Accepted writes

Current cumulative-payment architecture:
- Amount Paid;
- Payment Date;
- Notes.

If a future Payment Ledger is introduced, this function should append to that ledger and stop writing Amount Paid directly.

## Side effects

- formula recalculation;
- AR reflects new state;
- commission eligibility updates;
- targeted QA runs;
- action logged.

## Success

```javascript
{
  ok: true,
  code: 'PAYMENT_POSTED',
  message: 'Payment recorded for invoice INV-1088.',
  data: {
    invoice: 'INV-1088',
    payment: 291.96,
    remainingBalance: 0,
    status: 'Paid'
  }
}
```

## Errors

```text
INVOICE_NOT_FOUND
INVALID_PAYMENT_AMOUNT
INVALID_PAYMENT_DATE
PAYMENT_DATE_BEFORE_INVOICE
PAYMENT_OVER_TOTAL
INVOICE_ALREADY_PAID
PAYMENT_WRITE_FAILED
```

---

# 26. Partial-payment architecture decision

Before final implementation, confirm whether Lagom routinely receives partial payments.

## If partial payments are rare

Keep:
- cumulative `Amount Paid`;
- one Payment Date representing final/latest payment per defined rule.

## If partial payments are normal

Add canonical `Payments` sheet:

| Field |
|---|
| Payment ID |
| Invoice # |
| Payment Date |
| Amount |
| Method |
| Reference |
| Note |
| Posted At |

Then derive Invoice `Amount Paid` by SUMIF/SUMIFS.

This is the only recommended additional ledger because it materially improves auditability if partial payments are real.

---

# 27. Script 5 — generateInvoice()

## Signature

```javascript
function generateInvoice(invoiceNumber)
```

## Purpose

Generate a professional invoice document from canonical data.

## Reads

- invoice record;
- related depletion lines;
- safe account/product data;
- output folder configuration.

## Recommended implementation

Google Docs template with placeholders.

Workflow:

```text
Validate invoice
↓
Collect invoice + lines
↓
Reconcile invoice total
↓
Copy Docs template
↓
Populate header/account fields
↓
Insert line items
↓
Export PDF
↓
Store in configured Drive folder
↓
Log
```

## Security

Never inject:
- bank routing;
- bank account number;
- OAuth secrets;
- unrelated private information.

## Success

```javascript
{
  ok: true,
  code: 'INVOICE_GENERATED',
  message: 'Invoice PDF generated.',
  data: {
    invoice: 'INV-1088',
    fileName: 'Lagom_INV-1088_Account_2026-02-11.pdf'
  }
}
```

## Errors

```text
INVOICE_NOT_FOUND
INVOICE_INCOMPLETE
INVOICE_RECONCILIATION_FAILED
DOC_TEMPLATE_MISSING
OUTPUT_FOLDER_MISSING
PDF_EXPORT_FAILED
```

---

# 28. Script 6 — closePeriod()

## Signature

```javascript
function closePeriod(startDate, endDate)
```

## Purpose

Create an immutable reporting-period snapshot.

## Preconditions

- valid dates;
- start <= end;
- period not already closed;
- QA run completes;
- no configured blocking Critical findings.

## Metrics calculated directly from canonical source data

- Revenue;
- Cases;
- COGS;
- Gross Profit;
- Gross Margin;
- Invoice Count;
- Paid Revenue;
- Open AR at close;
- Commission-Eligible Revenue;
- QA counts.

Do not copy visible dashboard cells as authoritative inputs.

## Writes

- Period History;
- `_Automation Log`;
- period status metadata.

## Side effects

Optional pre-close snapshot.

## Success

```javascript
{
  ok: true,
  code: 'PERIOD_CLOSED',
  message: 'September 2026 closed successfully.',
  data: {
    start: '2026-09-01',
    end: '2026-09-30',
    revenue: 14250,
    critical: 0
  }
}
```

## Errors

```text
INVALID_PERIOD
PERIOD_ALREADY_CLOSED
PERIOD_BLOCKED_BY_QA
PERIOD_RECONCILIATION_FAILED
PERIOD_WRITE_FAILED
```

---

# 29. Period History schema

| Column |
|---|
| Period ID |
| Start Date |
| End Date |
| Revenue |
| Cases |
| COGS |
| Gross Profit |
| Gross Margin |
| Invoice Count |
| Paid Revenue |
| Open AR at Close |
| Commission-Eligible Revenue |
| Critical Count |
| Review Count |
| Closed By |
| Closed At |
| Workbook Version |

Period ID example:

```text
CLOSE-2026-09
```

Period ID must be unique.

---

# 30. Script 7 — finalizeCommissionPeriod()

## Signature

```javascript
function finalizeCommissionPeriod(rep, startDate, endDate)
```

## Eligible population

Invoices where:

```text
Sales Rep = rep
Commission Eligible Date >= startDate
Commission Eligible Date <= endDate
```

## Calculates

- eligible revenue;
- New revenue;
- Reorder revenue;
- applicable rates;
- final base commission;
- eligible invoice count;
- eligible cases.

Primary cases must correspond to the same commission-eligible invoice population, not a separate invoice-date population.

## Writes

- Commission History;
- Automation Log.

## Preconditions

- rep exists and active;
- valid period;
- rates defined;
- no duplicate finalization;
- no blocking QA findings affecting eligible invoices.

## Success

```javascript
{
  ok: true,
  code: 'COMMISSION_FINALIZED',
  message: 'Commission period finalized.',
  data: {
    rep: 'Tito',
    eligibleRevenue: 583.92,
    commission: 0
  }
}
```

## Errors

```text
REP_NOT_FOUND
REP_INACTIVE
INVALID_COMMISSION_PERIOD
COMMISSION_RATE_MISSING
COMMISSION_ALREADY_FINALIZED
COMMISSION_BLOCKED_BY_QA
```

---

# 31. Commission History schema

| Column |
|---|
| Finalization ID |
| Rep |
| Start Date |
| End Date |
| Eligible Revenue |
| New Revenue |
| Reorder Revenue |
| New Rate |
| Reorder Rate |
| Eligible Invoice Count |
| Eligible Cases |
| Commission |
| QA State |
| Finalized By |
| Finalized At |
| Workbook Version |

Finalization ID example:

```text
COMM-TITO-2026-09
```

---

# 32. Script 8 — createSnapshot()

## Signature

```javascript
function createSnapshot(reason)
```

## Purpose

Create a recoverable Drive copy before a high-impact operation.

## Reads

- current spreadsheet file;
- SnapshotFolderId;
- workbook version.

## Writes

Workbook:
- Automation Log only.

Drive:
- copied spreadsheet file.

## File naming

```text
Lagom_Depletion_v3_2026-09-29_1015_Pre-Import
```

## Success

```javascript
{
  ok: true,
  code: 'SNAPSHOT_CREATED',
  message: 'Recovery snapshot created.',
  data: {
    reason: 'Pre-Import'
  }
}
```

## Errors

```text
SNAPSHOT_FOLDER_MISSING
SNAPSHOT_PERMISSION_DENIED
SNAPSHOT_COPY_FAILED
```

---

# 33. Locking contract

Mutating workflows must use document locks.

Required:

- importDepletion;
- postPayment;
- closePeriod;
- finalizeCommissionPeriod;
- createSnapshot when paired with another mutation.

Pattern:

```javascript
function withDocumentLock_(fn) {
  const lock = LockService.getDocumentLock();
  if (!lock.tryLock(15000)) {
    throw new Error('Another Lagom workbook operation is currently running.');
  }

  try {
    return fn();
  } finally {
    lock.releaseLock();
  }
}
```

Avoid concurrent writes from two users.

---

# 34. Idempotency contract

High-impact actions require stable operation IDs.

Examples:

```text
IMP-20260929-001
PAY-INV1088-20260929-001
CLOSE-2026-09
COMM-TITO-2026-09
```

The Automation Log / destination history must be checked before committing.

Retries must not silently duplicate results.

---

# 35. Automation Log schema

| Column |
|---|
| Timestamp |
| Operation ID |
| User |
| Action |
| Target |
| Result |
| Rows Affected |
| Details |
| Workbook Version |

Valid Result values:

```text
Success
Blocked
Failed
```

Do not log every ordinary edit.

---

# 36. User identity

Apps Script may not always expose a usable user identity depending on Workspace deployment/authorization.

Rule:

- use available authenticated user identifier when reliable;
- otherwise leave User blank;
- never guess.

---

# 37. Error-message standard

Bad:

```text
Invalid input
```

Required:

```text
Invoice INV-1088 was not found in the Invoices ledger. Confirm the invoice number before recording payment.
```

Every user-visible error should state:

1. what failed;
2. which record/workflow was affected;
3. what the user should do next where practical.

---

# 38. Search/filter implementation

## 38.1 Principles

- no per-keystroke Apps Script trigger;
- no massive per-row SEARCH helper formulas solely for UI;
- manual Apply/Enter behavior or lightweight controlled trigger;
- Filter API/filter criteria where practical;
- Search Key for compound search;
- visible result count.

## 38.2 Result count

Examples:

```text
428 records
37 of 428 records
0 of 428 records
```

Named result-count cells should update after each filter operation.

---

# 39. AR implementation

AR should be a derived dynamic view.

Preferred Google approach:

- FILTER/QUERY from Invoice data;
- only Balance Due > 0;
- sorted by Days Past Due descending;
- selected columns only.

Do not maintain 150 mirrored formula rows.

Columns:

- Account;
- Invoice #;
- Invoice Date;
- Due Date;
- Balance Due;
- Days Past Due;
- Aging;
- Rep;
- Recommended Action.

---

# 40. Reports implementation

Use dynamic Google-native formulas where appropriate:

- QUERY;
- FILTER;
- SORT;
- UNIQUE;
- SUMIFS;
- ARRAYFORMULA.

Do not create artificial fixed report lengths.

Default to active/non-zero results.

Controls:
- report period;
- rep;
- account;
- product;
- product line;
- search;
- Active Only.

---

# 41. Overview calculation contract

Overview must use live canonical data or Period History, never seed expectations.

Core KPIs:

- Revenue;
- Cases;
- Gross Profit;
- Gross Margin;
- Current Open AR;
- Workbook Health.

Hardcoded expectations such as exact invoice counts/revenue from mock data are forbidden.

---

# 42. Protection contract

Protected:
- formula-derived columns;
- Search Key;
- QA/system columns;
- `_Automation Log`;
- `_System`;
- Period History rows after close;
- Commission History finalizations.

Editable:
- designated Input cells;
- search/filter control cells;
- approved Setup master-data fields;
- Import Staging raw input area.

Protection must still permit normal filtering and navigation.

---

# 43. Data-validation contract

Dropdown lists should derive from current master data wherever possible.

Do not hardcode rep names like:

```text
All,Roman,Jess,Timmy,Tito
```

Instead derive from active Reps.

Same principle for:
- Products;
- Product Lines;
- Accounts;
- Terms;
- Account Types.

---

# 44. Normalization rules

Safe normalization:

- trim leading/trailing whitespace;
- convert empty whitespace-only strings to blank;
- standardize invoice identifiers according to configured prefix policy;
- parse numeric Cases/Price safely;
- normalize dates;
- compare strings case-insensitively.

Do not:
- guess product mappings;
- guess accounts;
- silently correct materially ambiguous records.

Ambiguous data becomes `Review`.

---

# 45. Performance engineering

## 45.1 Apps Script

Use:
- `getValues()` once per dataset;
- header maps;
- `Map` indexes;
- batched `setValues()`;
- batch appends;
- minimal `SpreadsheetApp.flush()` calls;
- locks only around mutations.

Avoid:
- repeated `getRange().getValue()` inside loops;
- `appendRow()` hundreds of times;
- row-by-row formatting in large loops;
- onEdit triggers for routine calculation behavior.

## 45.2 Formula layer

Use bounded dynamic ranges and dynamic arrays.

Avoid:
- unnecessary whole-column volatility;
- repeated expensive formulas for decorative purposes;
- duplicate calculations across sheets when one canonical formula can feed downstream logic.

---

# 46. Apps Script menu

```javascript
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Lagom')
    .addItem('Run Check', 'validateWorkbook')
    .addItem('Import Depletion', 'importDepletion')
    .addItem('Record Payment', 'showRecordPaymentDialog_')
    .addItem('Generate Invoice', 'showGenerateInvoiceDialog_')
    .addSeparator()
    .addItem('Close Period', 'showClosePeriodDialog_')
    .addItem('Finalize Commission', 'showFinalizeCommissionDialog_')
    .addItem('Create Snapshot', 'showSnapshotDialog_')
    .addSeparator()
    .addItem('Reset Filters', 'resetAllFilters_')
    .addToUi();
}
```

Visible dialogs should remain minimal and only be used where multiple values must be entered safely.

---

# 47. Dialog/UI styling

If HTMLService dialogs are used:

- Nunito;
- warm light background;
- no black header bar;
- same token palette;
- 44px-ish touch targets where practical;
- clear primary/secondary actions;
- concise validation messaging.

Do not create a full custom web app inside Sheets.

---

# 48. Script-driven status messages

Named action-status cells should use standardized states.

### Success
- success palette;
- short message.

### Review
- review palette.

### Error
- critical palette.

### Idle
- neutral surface.

Example:

```text
Workbook check complete · 0 Critical · 3 Review
```

Automation should clear stale statuses when appropriate.

---

# 49. Invoice document template

If Google Docs is used:

Brand:
- official black Lagom logo;
- Nunito where Docs supports it;
- light background;
- restrained borders;
- no banking credentials.

Data:
- Invoice #;
- date;
- account;
- safe account context;
- product lines;
- cases;
- price;
- line revenue;
- total.

Generated documents should use canonical source data only.

---

# 50. Security

Never store in sheet cells:

- passwords;
- API keys;
- OAuth secrets;
- banking credentials.

Drive folder IDs may be stored if they are not treated as secrets, but sensitive tokens should use platform-secure mechanisms.

Automation must not email/export documents to external recipients without an explicit later requirement.

---

# 51. Migration safeguard

The currently preserved historical date identified as needing confirmation should remain flagged through:

```text
MIGRATION_UNCONFIRMED_DATE
```

until ownership approves/corrects it.

Do not silently normalize historical source data whose meaning has not been confirmed.

---

# 52. Test matrix

## validateWorkbook()

Test:
- clean workbook;
- duplicate invoice;
- missing account;
- orphan depletion;
- invalid payment;
- revenue mismatch;
- unknown product;
- inactive rep;
- missing COGS.

## applyFilterView()

Test:
- invoice search;
- account search;
- lowercase/uppercase;
- multiple filters;
- date range;
- clear;
- zero results.

## importDepletion()

Test:
- all valid;
- mixed valid/invalid;
- duplicates;
- unknown products;
- invalid invoice;
- empty staging;
- retry;
- 1,000+ rows.

## postPayment()

Test:
- full payment;
- partial payment;
- unknown invoice;
- negative amount;
- overpayment;
- invalid date;
- already paid.

## generateInvoice()

Test:
- valid invoice;
- missing account context;
- no depletion rows;
- reconciliation mismatch;
- missing template;
- missing Drive permission.

## closePeriod()

Test:
- clean close;
- duplicate close;
- blocking QA;
- zero-activity period;
- open AR;
- partial payments.

## finalizeCommissionPeriod()

Test:
- valid rep/period;
- missing rate;
- inactive rep;
- duplicate finalization;
- blocking invoice QA;
- no eligible invoices.

## createSnapshot()

Test:
- valid folder;
- missing folder;
- permission denied;
- repeated snapshots.

---

# 53. Acceptance criteria

Automation is production-ready only when:

- every core script has a stable result envelope;
- every write-capable script has an explicit write whitelist;
- no script overwrites formulas;
- high-impact scripts use locks;
- idempotency protects imports/closes/finalizations;
- all error messages are actionable;
- QA uses stable Rule IDs;
- audit logging works;
- filters use named controls;
- result counts are visible;
- master-driven dropdowns replace hardcoded rep/product lists;
- protected formula areas cannot be casually edited;
- scripts follow the canonical Nunito/light-theme design tokens;
- imports never bypass staging;
- period close reads source data directly;
- commission finalization uses payment/eligibility dates;
- no unresolved bonus rule is automated;
- no credentials are stored in cells;
- performance remains acceptable with thousands of depletion rows.

---

# 54. Final engineering principle

The system should be technically rigorous without looking technically complicated.

Visible to staff:

- search;
- filters;
- clear input cells;
- a few useful actions;
- readable status;
- reliable numbers.

Underneath:

> **typed schemas · named controls · validation · normalized data · batch operations · locks · idempotency · QA rules · reconciliation · audit history · controlled imports · historical snapshots**

That is the production standard for Lagom Naturals Google Sheets v3.
