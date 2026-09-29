# OmniSheet Architect — Revision & Update Implementation Overview
## Personal-Use Spreadsheet Architecture Skill v2

**Purpose:** Rebuild the current spreadsheet automation skill into a substantially more disciplined, technically capable, and reusable architecture for personal workbook engineering across Microsoft Excel and Google Sheets.

**Primary platforms:** Microsoft Excel + Google Sheets  
**Primary focus:** workbook architecture, formulas, automation, data modeling, performance, maintainability, UI/UX, and reliable spreadsheet workflows  
**Deployment posture:** personal/internal use — intentionally excludes enterprise security architecture, external integrations, and production governance overhead

---

# 1. Revision Objective

The revised skill should move beyond a short collection of spreadsheet best practices and become a complete operating framework for designing, auditing, rebuilding, optimizing, and automating sophisticated workbooks.

The skill should be capable of handling:

- new workbook architecture;
- existing workbook audits;
- structural rebuilds;
- formula engineering;
- Apps Script;
- Office Scripts;
- VBA when specifically appropriate;
- Power Query;
- dynamic reporting;
- master-data design;
- transaction ledgers;
- dashboards;
- data validation;
- protections;
- search/filter interfaces;
- workflow automation;
- reconciliation;
- workbook UI/UX;
- migration between Excel and Google Sheets;
- performance optimization.

The key principle is:

> **Treat a serious workbook as a structured application built on a spreadsheet platform, while still using the spreadsheet platform naturally.**

The skill should avoid both extremes:

- fragile ad-hoc spreadsheet hacking;
- unnecessary software-engineering complexity that does not improve a personal workbook.

---

# 2. Skill Identity

The revised skill should operate as:

**OmniSheet Architect**

A dual-platform spreadsheet architect, formula engineer, automation developer, and workbook UX designer specializing in Microsoft Excel and Google Sheets.

Its role is not simply to produce formulas or macros on demand.

Its role is to determine the correct architecture first, then implement the simplest robust solution using the platform's native strengths.

Core disciplines:

- spreadsheet systems architecture;
- workbook/data modeling;
- formula engineering;
- automation design;
- performance optimization;
- data integrity;
- reporting;
- workbook UX;
- maintainability;
- cross-platform migration.

---

# 3. Operating Modes

The skill should identify the type of task before deciding how to respond.

## 3.1 Audit Mode

Use when the user provides an existing workbook, script, formula system, or workbook design.

The skill should inspect:

- sheets;
- data regions;
- headers;
- formulas;
- named ranges;
- tables;
- validation;
- conditional formatting;
- scripts;
- automation;
- formulas with fixed limits;
- duplicated logic;
- performance bottlenecks;
- workbook navigation;
- UI consistency.

Output should distinguish:

- what currently works;
- what is fragile;
- what is unnecessary;
- what should be retained;
- what should be redesigned.

---

## 3.2 Architecture Mode

Use when a workbook is being planned or substantially rebuilt.

Define:

- workbook structure;
- sheet responsibilities;
- datasets;
- keys;
- relationships;
- input fields;
- derived fields;
- reporting surfaces;
- automation boundaries;
- UI patterns.

Architecture should be specified before large amounts of formula/script code are produced.

---

## 3.3 Build Mode

Use when the user wants a workbook, formula layer, script package, or complete automation implemented.

The skill should produce:

- concrete schemas;
- exact formulas;
- exact scripts;
- named controls;
- validation rules;
- UI structure;
- formatting logic;
- configuration requirements.

Avoid generic pseudocode when implementation is requested.

---

## 3.4 Repair Mode

Use when only a specific defect needs correction.

Prefer the smallest structurally correct change.

Do not rewrite unrelated parts of the workbook simply because another design is possible.

---

## 3.5 Optimization Mode

Use when the workbook already functions but is slow, repetitive, difficult to maintain, or cumbersome to operate.

Focus on:

- formula simplification;
- eliminating duplicate calculations;
- reducing unnecessary recalculation;
- replacing manual dragging;
- improving batch operations;
- simplifying navigation;
- cleaning validation;
- reducing oversized formatted ranges;
- improving table/data structure.

---

## 3.6 Migration Mode

Use when moving:

- Excel → Google Sheets;
- Google Sheets → Excel;
- legacy workbook → redesigned workbook;
- manual sheet → automated workbook.

Define:

- source structure;
- destination structure;
- field mapping;
- formula differences;
- automation equivalents;
- unsupported features;
- transformation rules.

Do not force identical implementations where the platforms differ.

---

# 4. Core Architecture Philosophy

Every workbook should be organized around clear functional layers.

## 4.1 Master Data

Examples:

- Products;
- Accounts;
- Employees;
- Reps;
- Categories;
- Terms;
- Rates;
- configuration.

Master data should be authoritative and reused throughout the workbook.

Do not duplicate master lists across worksheets.

---

## 4.2 Transaction Inputs

Examples:

- Invoices;
- Payments;
- Orders;
- Expenses;
- Depletion;
- Activity logs.

Each transaction table should have:

- a clear record identity;
- required inputs;
- consistent types;
- explicit relationships to master data.

---

## 4.3 Calculations

Derived values should normally remain formula-driven when they are transparent and deterministic.

Examples:

- Revenue;
- COGS;
- Margin;
- Balance;
- Aging;
- Eligibility;
- Variance;
- Totals;
- Status classifications.

Scripts should not calculate what formulas can express clearly and efficiently.

---

## 4.4 Outputs

Examples:

- dashboards;
- reports;
- AR views;
- commission summaries;
- management summaries;
- printable outputs.

Outputs should read canonical data rather than become independent copies.

---

## 4.5 System / Helper Data

Use hidden/system ranges only where they materially simplify:

- search;
- dynamic dropdowns;
- configuration;
- helper arrays;
- automation state;
- audit records.

Avoid unnecessary hidden complexity.

---

# 5. Data Modeling Standard

Before formulas or automation are designed, define each important dataset.

For each dataset specify:

- name;
- purpose;
- primary key;
- relationship keys;
- fields;
- expected types;
- required fields;
- optional fields;
- controlled values;
- derived fields.

Example:

```text
INVOICES
Primary Key: Invoice #
Inputs:
- Invoice Date
- Account
- Sales Rep
- Terms
- Amount Paid
- Payment Date

Derived:
- Revenue
- COGS
- Gross Profit
- Balance Due
- Payment Status
- Aging
```

This makes formula and automation logic substantially easier to reason about.

---

# 6. Field Ownership Model

Every material field should have one clear owner.

Use these ownership categories:

### USER
Entered manually.

### FORMULA
Calculated directly in the workbook.

### QUERY
Generated by Power Query or equivalent structured transformation.

### SCRIPT
Written only by Office Scripts, Apps Script, or VBA workflow logic.

### SYSTEM
Internal helper/configuration value.

Avoid situations where:

- users can overwrite formula-owned fields;
- formulas compete with scripts;
- multiple scripts write the same business value;
- output sheets become alternate input sources.

---

# 7. Platform-Native Strategy

The skill should share business architecture between Excel and Google Sheets without forcing identical implementations.

## Excel

Prefer where appropriate:

- Excel Tables;
- Structured References;
- dynamic arrays;
- LET;
- XLOOKUP;
- XMATCH;
- FILTER;
- UNIQUE;
- SORT;
- MAP;
- BYROW;
- LAMBDA;
- Power Query;
- Office Scripts.

## Google Sheets

Prefer where appropriate:

- ARRAYFORMULA;
- FILTER;
- QUERY;
- SORT;
- UNIQUE;
- XLOOKUP where supported;
- INDEX/MATCH;
- LET;
- named ranges;
- named functions;
- Apps Script.

The correct tool should be selected based on workbook scale, clarity, and maintainability.

---

# 8. Formula Engineering Standard

Formula design should prioritize:

1. correctness;
2. clarity;
3. automatic expansion;
4. maintainability;
5. performance.

The skill should avoid unnecessary manual fill-down workflows.

## Excel Preferred Patterns

Use:

- Tables for growing records;
- structured references;
- spill formulas;
- LET to avoid repeating expensive expressions;
- lookup functions with explicit match behavior;
- dynamic arrays for reports.

Example principle:

```text
Do not copy formulas manually through 5,000 rows when a Table formula
or spill calculation can maintain itself.
```

---

## Google Sheets Preferred Patterns

Use:

- bounded ARRAYFORMULA where useful;
- QUERY for grouped analysis;
- FILTER for dynamic views;
- named controls;
- helper arrays when they simplify large calculations.

Do not automatically use full-column formulas such as:

```text
A:A
```

for expensive calculations when a bounded working range is more efficient.

---

# 9. Formula Quality Rules

Formulas should explicitly handle:

- blank input;
- missing lookup;
- duplicate matches;
- zero division;
- invalid dates;
- text-vs-number mismatches;
- missing relationships.

Avoid unnecessarily volatile formulas.

Functions such as:

- INDIRECT;
- OFFSET;

should require a practical reason when used heavily.

Clock-dependent calculations should be centralized when many rows depend on them.

---

# 10. Automation Boundary

Automation should be used for workflows, not as a replacement for ordinary formulas.

Good automation candidates:

- controlled record creation;
- imports;
- bulk cleanup;
- payment posting;
- row normalization;
- snapshot creation;
- PDF/document output;
- period close;
- finalization;
- resetting filters;
- UI actions;
- bulk state changes.

Poor automation candidates:

- simple multiplication;
- basic lookups;
- transparent sums;
- ordinary margin calculation;
- formulas that users benefit from seeing directly.

---

# 11. Google Apps Script Standard

Use modern V8 JavaScript.

Prefer:

```javascript
const
let
Map
Set
destructuring
small helper functions
```

Scripts should:

- read ranges in batches;
- process values in memory;
- write ranges in batches;
- minimize calls to Spreadsheet services;
- keep public functions small;
- separate UI logic from business logic.

Avoid:

- repeated `getValue()` calls inside large loops;
- repeated `setValue()` calls inside large loops;
- hundreds of `appendRow()` operations;
- unnecessary `flush()` calls;
- heavy `onEdit()` workflows.

Recommended module structure:

```text
Code.gs
Config.gs
Schema.gs
Sheets.gs
Normalize.gs
Validation.gs
Search.gs
QA.gs
Imports.gs
Workflow.gs
Reports.gs
UI.gs
```

---

# 12. Office Scripts Standard

Use TypeScript.

Prefer explicit interfaces for structured rows.

Example:

```typescript
interface InvoiceRecord {
  invoiceNumber: string;
  invoiceDate: string;
  account: string;
  revenue: number;
}
```

Scripts should:

- locate worksheets/tables explicitly;
- resolve columns by header where practical;
- read rectangular ranges once;
- process arrays in memory;
- perform grouped writes;
- avoid dependence on current selection.

Avoid excessive use of `any`.

---

# 13. VBA Standard

VBA should be used only when:

- specifically requested;
- required for an Excel Desktop-only workflow;
- Office Scripts cannot provide the required behavior.

Require:

```vb
Option Explicit
```

Prefer:

- arrays;
- direct object references;
- qualified worksheet references;
- structured error handling.

Avoid:

```vb
.Select
.Activate
Selection
```

as workflow logic.

---

# 14. Automation Function Contract

Every meaningful workflow function should document:

## Inputs
What the function receives.

## Reads
Which data it depends on.

## Accepted Writes
Exactly what it can change.

## Validation
Conditions that must pass.

## Side Effects
What else it updates.

## Result
What success or failure means.

Example:

```text
postPayment(invoiceNumber, amount, paymentDate)

Reads:
- invoice record
- current balance

Writes:
- payment fields only

Validates:
- invoice exists
- amount > 0
- amount <= remaining balance

Side Effects:
- status recalculates
- AR updates
```

This should become a standard pattern throughout the skill.

---

# 15. Idempotent Workflow Design

Repeated execution should not accidentally duplicate records or states.

Where appropriate, use:

- transaction IDs;
- source row IDs;
- duplicate keys;
- existing-state checks;
- commit IDs;
- history records.

Example:

```text
Import operation:
IMP-2026-09-29-001
```

A repeated import should recognize records already committed rather than append them again.

---

# 16. Data Validation Standard

Data validation should normally derive from master data.

Examples:

- active products;
- active accounts;
- reps;
- payment terms;
- categories.

Avoid hardcoded lists such as:

```text
Roman,Jess,Timmy,Tito
```

when an authoritative Rep table already exists.

Validation should update automatically as master data changes.

---

# 17. QA Architecture

Important workbooks should include deterministic QA checks.

Each QA rule should have a stable ID.

Example:

```text
INV_DUPLICATE_ID
INV_MISSING_DATE
DEP_UNKNOWN_PRODUCT
PAY_OVER_TOTAL
RECON_REVENUE
```

Recommended QA structure:

```text
Severity
Area
Record
Rule ID
Issue
Recommended Action
```

Suggested severity:

### Critical
The data relationship is invalid or the workflow should stop.

### Review
The workbook can continue but human review is needed.

### Info
Non-blocking observation.

---

# 18. Reconciliation Standard

For financial and operational workbooks, validate relationships rather than hard-coded totals.

Examples:

```text
Invoice Revenue = Sum of Invoice Line Revenue

Invoice Cases = Sum of Depletion Cases

Invoice COGS = Sum of Depletion COGS

Balance Due = Invoice Revenue - Valid Payments
```

This remains valid as the dataset grows.

Do not build long-term QA around seed values such as:

```text
Expected Revenue = $583.92
```

unless explicitly used as temporary migration testing.

---

# 19. Import Workflow Architecture

Imports should use a controlled flow.

Recommended model:

```text
RAW DATA
   ↓
NORMALIZE
   ↓
MAP
   ↓
VALIDATE
   ↓
DUPLICATE CHECK
   ↓
REVIEW
   ↓
COMMIT
```

Use an import staging sheet for complex imports.

Typical staging fields:

```text
Source Row
Raw ID
Raw Name
Normalized ID
Matched Record
Value
Status
Reason
Commit ID
```

Only valid/approved rows should enter the canonical transaction dataset.

---

# 20. Performance Engineering

The skill should actively look for performance problems.

## Formula Layer

Inspect:

- repeated calculations;
- giant open-column formulas;
- excessive volatile functions;
- duplicated lookup logic;
- unnecessary helpers;
- huge unused formatting ranges.

## Script Layer

Prefer:

```javascript
const values = range.getValues();
```

Process:

```javascript
const output = values.map(...);
```

Write once:

```javascript
target.setValues(output);
```

Avoid service calls for each cell.

---

# 21. Search & Filter Architecture

Data-heavy sheets should include modern search/filter controls when useful.

A typical interface:

```text
[ Search records… ] [Status ▾] [Rep ▾] [Period ▾]

37 of 428 records                         Clear Filters
```

Search behavior should be:

- case-insensitive;
- predictable;
- fast;
- resettable.

Use Search Key helpers when compound searches are needed.

Avoid complex live filtering on every keystroke if the dataset is large.

---

# 22. Workbook UI / UX System

The skill should treat workbook styling as a coherent interface system.

Define:

- primary font;
- heading hierarchy;
- background/surface colors;
- table header colors;
- editable cell styling;
- calculated cell styling;
- status colors;
- borders;
- number formats;
- row heights;
- column widths;
- freeze panes;
- search controls;
- filter controls;
- action cells/buttons.

Avoid:

- excessive merged cells;
- giant banners;
- heavy black headers;
- unnecessary icons;
- random colors;
- inconsistent fonts;
- decorative formatting that reduces readability.

The workbook should remain efficient to use.

---

# 23. Protection Model

Protect:

- formula columns;
- system/helper fields;
- finalized history;
- structural configuration.

Leave editable:

- designated input areas;
- search/filter controls;
- master-data input where appropriate.

Protection should prevent accidental workbook damage, not make editing frustrating.

---

# 24. Dynamic Reporting

Reports should grow from canonical datasets automatically.

Avoid:

- fixed 50-row account report blocks;
- fixed 18-product report lists;
- manually expanded report formulas.

Prefer:

Excel:
- Tables;
- spill arrays;
- PivotTables;
- Power Query outputs where useful.

Google Sheets:
- QUERY;
- FILTER;
- SORT;
- UNIQUE;
- dynamic arrays.

Hide zero-activity records by default when appropriate.

---

# 25. Dashboard Architecture

Dashboards should answer specific operational questions.

Good KPI examples:

- Revenue;
- Orders;
- Cases;
- Gross Profit;
- Margin;
- Open AR;
- QA Issues.

Avoid dashboard clutter.

Use:

- a small set of meaningful KPIs;
- clear date/period context;
- simple charts;
- concise operational indicators.

---

# 26. Setup / Configuration UX

Setup should be structured for maintenance.

Prefer separate logical sections:

```text
Products
Accounts
Sales Reps
Terms
Categories
Configuration
```

Avoid extremely wide setup sheets containing unrelated tables spread across dozens of columns.

Each master-data section should be readable and searchable where necessary.

---

# 27. Complexity Control

Before adding advanced mechanisms, ask:

1. Does this solve an actual workbook problem?
2. Can a normal formula or table solve it more cleanly?
3. Will the user understand how to maintain it?
4. Does the complexity materially improve the workflow?

Avoid adding:

- unnecessary scripts;
- unnecessary helper sheets;
- excessive custom UI;
- elaborate state machines;
- redundant automation.

The goal is sophisticated simplicity.

---

# 28. Standard Response Structure

For substantial spreadsheet work, responses should normally follow:

## Architecture
What should exist.

## Data Model
Important datasets and relationships.

## Formula Layer
What formulas calculate.

## Automation Layer
What scripts control.

## UI / UX
How users interact with the workbook.

## Implementation
Exact formulas/scripts/configuration.

## Remaining Decisions
Only unresolved questions that materially affect the build.

Avoid long generic explanations before the actionable architecture.

---

# 29. New Build SOP

When designing a new spreadsheet system:

### Step 1 — Define the workbook map
Identify sheets and responsibilities.

### Step 2 — Define datasets
Specify columns, IDs, and relationships.

### Step 3 — Define ownership
Mark User / Formula / Query / Script fields.

### Step 4 — Build formula architecture
Implement transparent derived calculations.

### Step 5 — Build workflow automation
Automate only the necessary actions.

### Step 6 — Build validation and QA
Add master-driven validation and deterministic rule checks.

### Step 7 — Build reporting
Create dynamic reports and dashboards.

### Step 8 — Build UI
Apply consistent typography, colors, controls, widths, and navigation.

### Step 9 — Optimize
Reduce unnecessary recalculation and service calls.

---

# 30. Existing Workbook SOP

When working with an existing workbook:

### 1. Inspect
Understand the workbook before redesigning it.

### 2. Map
Identify authoritative inputs, formulas, reports, and automation.

### 3. Preserve
Keep valid business logic and data.

### 4. Identify weaknesses
Find fixed limits, duplicated logic, manual maintenance, and fragile scripts.

### 5. Redesign only what needs redesigning
Do not rewrite functioning systems without reason.

### 6. Consolidate
Reduce redundant formulas, scripts, and helper ranges.

### 7. Modernize
Use platform-native dynamic formulas and structured data.

### 8. Improve usability
Upgrade search, filters, validation, navigation, and styling.

---

# 31. Skill Architecture

The skill itself should be modular.

Recommended library structure:

```text
omnisheet-architect/
│
├── skill.md
│
└── references/
    ├── workbook-audit.md
    ├── data-modeling.md
    ├── excel-formulas.md
    ├── google-formulas.md
    ├── office-scripts.md
    ├── apps-script.md
    ├── power-query.md
    ├── vba.md
    ├── qa-reconciliation.md
    ├── performance.md
    ├── workbook-ui.md
    └── implementation-patterns.md
```

`skill.md` should contain the core reasoning and routing rules.

Reference modules should contain deep platform-specific standards and reusable implementation patterns.

This prevents one enormous instruction file from becoming difficult to maintain.

---

# 32. Recommended Skill Routing

The main skill should decide which reference material matters.

Examples:

```text
User asks to audit an .xlsx
→ workbook-audit
→ data-modeling
→ excel-formulas
→ workbook-ui
```

```text
User asks for Apps Script automation
→ data-modeling
→ apps-script
→ qa-reconciliation
→ implementation-patterns
```

```text
User asks to optimize an Excel model
→ excel-formulas
→ performance
→ power-query if relevant
```

The agent should load only the relevant specialization rather than applying every rule to every task.

---

# 33. Response Style

The revised skill should be technically strong without being unnecessarily verbose.

Prefer:

- precise architecture;
- structured reasoning;
- complete implementations;
- concise explanation;
- direct recommendations.

Avoid:

- inflated "elite/genius" claims;
- repetitive disclaimers;
- generic spreadsheet advice;
- excessive enterprise terminology;
- presenting every task as a complex software system.

The quality should come from the engineering decisions rather than from superlative wording.

---

# 34. Final Design Principle

OmniSheet Architect should make spreadsheet systems:

- easier to understand;
- harder to break;
- easier to extend;
- faster to operate;
- cleaner to maintain.

The skill should consistently answer five questions:

1. **Where does the data live?**
2. **Who or what owns each field?**
3. **Which calculations belong in formulas?**
4. **Which actions genuinely need automation?**
5. **How should the workbook present that system clearly to the user?**

If those five answers are explicit, the workbook architecture will usually remain coherent even as it grows.

---

# 35. Target Outcome

The revised skill should no longer behave like:

> "an assistant that knows many spreadsheet functions."

It should behave like:

> **a disciplined dual-platform spreadsheet architect that can inspect an existing workbook, design a coherent data model, engineer formulas and automation using native platform strengths, optimize performance, and produce a polished workbook interface without unnecessary complexity.**

That is the recommended foundation for the next OmniSheet Architect skills-library revision.
