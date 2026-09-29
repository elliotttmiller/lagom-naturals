# Lagom Naturals Depletion System v3
## Unified End-to-End Project Plan
### Google Sheets Primary · Premium Light UI · Nunito · Application-Grade Controls

**Document status:** Proposed production specification  
**Primary platform:** Google Sheets + Google Apps Script + Google Drive / Google Docs  
**Secondary platform:** Microsoft Excel + Office Scripts after Google production validation  
**Primary business scope:** completed sales, invoice state, depletion, payments, accounts receivable, commissions, reporting, QA, period history, controlled imports  
**Explicitly out of scope:** CRM, Clover, employee scheduling/time clock, custom authentication, external database synchronization, AI chat interfaces, live distributor API synchronization unless separately approved

---

# 1. Executive objective

Lagom Naturals should have one production-grade depletion workbook that remains simple for day-to-day staff while using disciplined internal architecture, automation, validation, reconciliation, auditability, search/filter controls, and historical snapshotting.

The guiding principle is:

> **People enter only information that requires business judgment. Everything deterministic should be derived, validated, reconciled, prioritized, logged, searched, filtered, or automated.**

The workbook must remain recognizable as a high-quality spreadsheet rather than becoming a pseudo-application built awkwardly inside Google Sheets.

The target experience is:

- visually premium but restrained;
- fast to navigate;
- immediately understandable;
- difficult to corrupt accidentally;
- scalable beyond current seed data;
- auditable;
- easy to maintain;
- optimized first for Google Workspace;
- portable later to Microsoft Excel without weakening the Google implementation.

---

# 2. Current v2.1 baseline to preserve

The current Lagom v2.1 workbook already establishes several correct architectural decisions that should remain intact:

- eight primary worksheets: `Overview`, `Invoices`, `Depletion`, `AR`, `Reports`, `Commissions`, `Setup`, and `Guide`;
- one row per invoice in `Invoices`;
- one row per invoice/product line in `Depletion`;
- `AR` derived from `Invoices`;
- `Reports` and `Commissions` reading the same normalized transactional data;
- `Setup` owning controlled master data;
- revenue, COGS, gross profit, balance due, aging, QA indicators, and commission eligibility remaining formula-driven;
- no banking credentials inside the workbook;
- unresolved/unconfirmed bonus rules not being automated prematurely.

The v3 rebuild is therefore a hardening, scaling, modernization, automation, and UX redesign—not a conceptual reset.

---

# 3. v3 system boundaries

## 3.1 The workbook owns

- completed invoice records;
- product-level depletion line items;
- product/account/rep master data;
- payment state;
- current accounts receivable;
- aging;
- commission eligibility;
- commission period calculation/finalization;
- management reporting;
- QA findings;
- period snapshots;
- controlled external-data imports;
- automation audit history.

## 3.2 The future Sales CRM owns

- prospects;
- contacts;
- relationship history;
- sales activities;
- notes;
- opportunities;
- tasks/follow-ups;
- pipeline stages;
- manager pipeline views.

## 3.3 Intentionally excluded from v3

- Clover;
- scheduling/time clock;
- custom login/authentication;
- Supabase or other database synchronization;
- external distributor API sync;
- email-marketing workflows;
- AI assistants/chatbots;
- complex approval-state engines;
- automatic accounting-system replacement;
- dozens of macro buttons or modal dialogs.

---

# 4. Final workbook architecture

The production workbook should contain twelve intentional surfaces.

| Sheet | Purpose | Visibility | Primary interaction |
|---|---|---|---|
| `Overview` | Executive operations command center | Visible | dashboard + primary actions |
| `Invoices` | Canonical invoice/payment ledger | Visible | controlled input + search/filter |
| `Depletion` | Canonical product-level transaction ledger | Visible | minimal input + search/filter |
| `AR` | Prioritized collections work queue | Visible | search/filter + review |
| `Reports` | Dynamic analytical workspace | Visible | filters + analysis |
| `Commissions` | Payment-based commission workspace | Visible | filters + finalization |
| `Setup` | Master data and system configuration | Visible/Admin | controlled administration |
| `Guide` | Operating instructions and governance | Visible | read-only |
| `QA Audit` | Centralized exceptions and integrity findings | Visible/Admin | review |
| `Period History` | Closed-period historical snapshots | Visible/Admin | read-only |
| `Import Staging` | Controlled import intake and review | Visible during import | temporary workflow |
| `_Automation Log` | Script audit trail | Hidden/Admin | system-written |
| `_System` | Technical configuration/helper state | Hidden | system-owned |

---

# 5. Data flow

```text
SETUP / MASTER DATA
Products · Accounts · Reps · Terms · Rules
              │
              ▼
TRANSACTION SOURCES
Invoices  ←────────→  Depletion
              │
              ▼
VALIDATION + AUTOMATION
Normalize · Validate · Reconcile · Import
Payment · Finalize · Snapshot · Audit
              │
       ┌──────┴─────────┐
       ▼                ▼
OPERATIONS          ANALYTICS
AR                  Overview
Commissions         Reports
QA Audit            Period History
```

This dependency direction must remain one-way wherever possible. Derived surfaces do not become alternative data-entry paths.

---

# 6. v3 design system — approved visual direction

## 6.1 Core design principles

The entire workbook should use a **premium light theme** with:

- official black Lagom Naturals logo/icon;
- Nunito throughout;
- no black-filled mastheads;
- no black-filled table headers;
- warm neutral canvas;
- layered soft surfaces;
- charcoal rather than pure black typography;
- restrained botanical/mint accents;
- subtle cream input areas;
- quiet gray-green calculated areas;
- soft status colors;
- minimal borders;
- strong whitespace;
- modern search/filter controls;
- application-like clarity without app-like visual excess.

The desired visual character is:

> **premium CPG operations + modern finance dashboard + refined SaaS administration**

not:

> **generic spreadsheet + heavy dark headers**

---

# 7. Typography specification

## 7.1 Font family

**Nunito is the canonical workbook font.**

Use Nunito consistently across:

- titles;
- subtitles;
- KPIs;
- table headers;
- table body;
- search/filter controls;
- buttons/actions;
- notes;
- Guide content;
- status labels;
- print/export templates where supported.

Fallback behavior should be documented for environments where Nunito is unavailable, but the Google Sheets production workbook should use Nunito.

## 7.2 Weight hierarchy

| Component | Weight |
|---|---|
| Workbook / sheet title | ExtraBold or Bold |
| KPI value | ExtraBold |
| Section heading | Bold |
| Table header | SemiBold |
| Search/filter label | SemiBold |
| Button/action label | SemiBold |
| Body values | Regular / Medium |
| Secondary metadata | Regular |

## 7.3 Size hierarchy

| Component | Suggested size |
|---|---:|
| Sheet title | 18–20 pt |
| Sheet subtitle | 9–10 pt |
| KPI number | 18–22 pt |
| KPI label | 9–10 pt |
| Section heading | 11–12 pt |
| Table header | 9–10 pt |
| Table body | 9–10 pt |
| Helper/status text | 8–9 pt |

Avoid oversized title blocks that consume operational space.

---

# 8. Complete color token system

The following tokens replace all previous white/black-header specifications.

## 8.1 Core surfaces

| Token | Hex | Use |
|---|---|---|
| `surface.canvas` | `#F7F7F4` | sheet canvas / non-table background |
| `surface.primary` | `#FCFCFA` | primary cards, table surface, search bars |
| `surface.secondary` | `#F1F2EE` | grouped controls, section strips |
| `surface.tertiary` | `#E7E9E4` | secondary headers, disabled/inactive areas |
| `surface.input` | `#FFF9EE` | editable input cells |
| `surface.calculated` | `#F3F5F2` | formula/system controlled cells |

## 8.2 Typography

| Token | Hex | Use |
|---|---|---|
| `text.primary` | `#171A18` | headings, KPI numbers, primary body |
| `text.secondary` | `#656A66` | labels, secondary copy |
| `text.muted` | `#8A8F8B` | helper text, timestamps |
| `text.disabled` | `#A7ABA7` | inactive controls |

## 8.3 Borders and separators

| Token | Hex | Use |
|---|---|---|
| `border.default` | `#D9DDD7` | ordinary controls/table separation |
| `border.strong` | `#C8CEC7` | section boundary |
| `border.focus` | `#9EBEAA` | active search/filter input |
| `border.subtle` | `#E6E8E3` | row separators |

## 8.4 Brand/accent

| Token | Hex | Use |
|---|---|---|
| `accent.soft` | `#DDEBE3` | selected filters, positive secondary cards |
| `accent.mid` | `#9EBEAA` | active borders, tiny indicators |
| `accent.text` | `#365646` | text on accent surfaces |
| `accent.deep` | `#294537` | rare stronger accent text |

## 8.5 Status colors

### Success
- background: `#E4F0E8`
- text: `#326146`
- border: `#BFD8C7`

### Review
- background: `#F6ECD6`
- text: `#7B5B20`
- border: `#E4C98E`

### Critical
- background: `#F4E1DF`
- text: `#8A4039`
- border: `#DDB6B1`

### Information
- background: `#E7EDF2`
- text: `#425D70`
- border: `#C9D6DF`

## 8.6 Do not use

- pure-black table headers;
- full-width dark mastheads;
- neon green;
- highly saturated red/yellow/green;
- default Google blue as the main brand color;
- heavy gradients;
- dark-mode styling;
- excessive zebra-striping.

---

# 9. Light-theme surface hierarchy

The workbook should establish depth through adjacent light surfaces rather than dark contrast.

```text
Canvas             #F7F7F4
└── Primary card   #FCFCFA
    ├── Header     #F1F2EE
    ├── Input      #FFF9EE
    ├── Calculated #F3F5F2
    └── Accent     #DDEBE3
```

This provides enough hierarchy while preserving a soft premium appearance.

---

# 10. Header / masthead component

Every major visible sheet uses one consistent masthead structure:

```text
[ official black Lagom logo ]

INVOICES
Canonical invoice and payment ledger

[ Search invoices, accounts, reps… ] [Status ▾] [Rep ▾] [Filters ▾]
37 of 428 records                                      Clear filters
────────────────────────────────────────────────────────────────────
```

Design rules:

- no dark filled banner;
- logo scaled proportionally;
- title in `text.primary`;
- subtitle in `text.secondary`;
- controls on `surface.primary`;
- thin `border.default`;
- subtle spacing between brand/title/control layers.

---

# 11. Search/filter component system

Search and filter bars are a core v3 component, not decorative styling.

## 11.1 Search input

- fill: `surface.primary`;
- border: `border.default`;
- active border: `border.focus`;
- primary text: `text.primary`;
- placeholder text: `text.muted`;
- height target: visually ~34–38 px;
- Nunito Medium;
- no thick outline;
- no black fill.

## 11.2 Filter controls

Default:
- fill `surface.secondary`;
- border `border.default`;
- text `text.primary`.

Selected:
- fill `accent.soft`;
- border `accent.mid`;
- text `accent.text`.

## 11.3 Filter feedback

Always show:

- result count;
- active filters;
- clear/reset action.

Example:

```text
Search: north
Status: Open
Aging: 31+
18 of 426 records                              Clear all
```

---

# 12. Table component specification

## 12.1 Table headers

Replace black-filled headers with:

- fill `#EDEFEA`;
- text `#222623`;
- Nunito SemiBold;
- bottom border `#CDD2CC`;
- row height ~28–32 px equivalent;
- left alignment for text columns;
- right alignment for numeric headings when useful.

## 12.2 Table body

Primary row:
- `surface.primary`.

Subtle alternate row when useful:
- `#F8F9F6`.

Do not zebra-stripe every table by default. Use alternating fill only where it improves long-ledger scanning.

## 12.3 Input cells

- `surface.input`;
- unlocked;
- `text.primary`;
- subtle border;
- data validation where applicable.

## 12.4 Calculated cells

- `surface.calculated`;
- protected;
- `text.primary`;
- no stronger fill than needed.

## 12.5 Attention cells

Use status-specific fill only on:

- QA Status;
- Aging;
- Action;
- explicit exception field.

Avoid coloring the entire row unless a critical workflow genuinely requires it.

---

# 13. Button/action styling

## 13.1 Primary action

Example: `Run Check`

- fill: `#E4ECE6`;
- text: `#233C2E`;
- border: `#BFD1C3`;
- Nunito SemiBold;
- compact size.

## 13.2 Secondary action

- fill: `surface.primary`;
- text: `text.primary`;
- border: `border.default`.

## 13.3 Destructive/blocking action

Use critical palette only if the action itself is destructive.

Most v3 actions are not destructive and should not use red.

---

# 14. Sheet-by-sheet UX specification

## 14.1 Overview

Purpose:
- executive operations;
- selected-period performance;
- workbook health;
- AR exposure;
- primary automation actions.

Top controls:
- Reporting Period;
- Run Check;
- Import Depletion;
- Close Period.

KPI cards:
- Revenue;
- Cases;
- Gross Profit;
- Gross Margin;
- Current Open AR;
- Workbook Health.

Cards:
- `surface.primary`;
- thin border;
- no black headers;
- muted label;
- bold dark KPI number;
- optional accent on Workbook Health only.

Sections:
- Monthly Performance;
- Revenue Trend;
- AR Aging;
- Operational Attention.

No general search bar on Overview.

## 14.2 Invoices

Purpose:
- canonical invoice/payment ledger.

Search across:
- Invoice #;
- Account;
- Rep;
- City;
- Payment Status;
- Notes where practical.

Primary filters:
- Date;
- Rep;
- Payment Status;
- Aging.

Quick presets:
- All;
- Open;
- Paid;
- Overdue;
- Review.

Column groups:
- Invoice Input;
- Account Context;
- Financials;
- AR;
- Controls.

Visible actions:
- Record Payment;
- Generate Invoice.

Freeze:
- header;
- core contextual columns.

## 14.3 Depletion

Primary editable fields:
- Invoice #;
- Product;
- Cases;
- Sale Price.

Search:
- Invoice #;
- Product;
- SKU;
- Account;
- Rep.

Filters:
- Period;
- Product Line;
- Product;
- Rep;
- QA.

Quick presets:
- All;
- This Month;
- Review.

No excessive action buttons.

## 14.4 AR

Purpose:
- collections work queue.

Default:
- open balances only;
- oldest/highest-severity first.

Search:
- Account;
- Invoice #.

Quick aging filters:
- All Open;
- Current;
- 1–30;
- 31–60;
- 61–90;
- 90+.

State colors should be limited to Aging / Action cells.

## 14.5 Reports

Global controls:
- Start Date;
- End Date;
- Rep;
- Account;
- Product/Product Line;
- Search;
- Active Only.

Views:
- Product Performance;
- Account Performance;
- Rep Performance.

Default:
- zero-activity rows hidden.

Current AR should be labeled **Current Open AR** so users do not confuse it with period-filtered revenue.

## 14.6 Commissions

Controls:
- Rep;
- Start Date;
- End Date.

Outputs:
- Commission-Eligible Revenue;
- New Revenue;
- Reorder Revenue;
- Rate(s);
- Eligible invoice count;
- Eligible cases;
- Final commission;
- QA State.

Visible action:
- Finalize Period.

Mileage:
- remove from active calculation unless operational mileage tracking exists;
- otherwise label as reference-only.

## 14.7 Setup

Rebuild from wide horizontal layout to vertically organized modules:

1. Products
2. Accounts
3. Sales Reps
4. Account Types
5. Payment Terms
6. Automation Configuration
7. Safety/System Notes

Each master table gets its own compact search field if needed.

## 14.8 Guide

Editorial layout using Nunito.

Sections:
- workbook ownership;
- daily workflow;
- invoices;
- depletion;
- payments;
- imports;
- AR;
- reports;
- commissions;
- QA;
- period close;
- workbook vs CRM;
- security;
- version/support information.

## 14.9 QA Audit

Columns:
- Severity;
- Area;
- Record;
- Rule ID;
- Issue;
- Recommended Action;
- Detected At.

Only Severity should carry strong status fill.

## 14.10 Period History

Read-only management history.

Columns:
- Period Start;
- Period End;
- Revenue;
- Cases;
- COGS;
- Gross Profit;
- Margin;
- Invoice Count;
- Paid Revenue;
- Open AR at Close;
- Commission-Eligible Revenue;
- QA Status;
- Closed By;
- Closed At.

## 14.11 Import Staging

Clear visual distinction from canonical ledgers.

Status palette:
- Ready = success;
- Review = review;
- Duplicate = information/review;
- Rejected = critical;
- Committed = muted success.

## 14.12 Hidden sheets

`_Automation Log` and `_System` are system-owned and should use the same font/palette but do not require decorative UI.

---

# 15. Data architecture

## 15.1 Setup/master data owns

- Products;
- Accounts;
- Reps;
- Terms;
- Account Types;
- Automation Config.

## 15.2 Invoices owns

User/script inputs:
- Invoice #;
- Invoice Date;
- Account;
- Sales Rep;
- Account Type;
- Terms;
- payment inputs;
- Notes.

Derived:
- City;
- Channel;
- Invoice Revenue;
- Cases;
- COGS;
- GP;
- Margin;
- Balance;
- Due Date;
- Status;
- Days Past Due;
- Aging;
- Commission Eligible Date;
- QA;
- Search Key.

## 15.3 Depletion owns

Inputs:
- Invoice #;
- Product;
- Cases;
- Sale Price.

Derived:
- Revenue;
- SKU;
- Product Line;
- COGS/Case;
- Total COGS;
- Gross Profit;
- invoice context;
- QA;
- Search Key.

---

# 16. Scalability requirements

The fixed row limits from v2.1 must be removed.

Design targets:

| Dataset | Minimum practical target |
|---|---:|
| Invoices | 2,000+ |
| Depletion | 10,000+ |
| Accounts | 500+ |
| Products | 250+ |
| Reps | 50+ |
| QA findings | dynamic |
| Period history | multi-year |

Google Sheets formulas and Apps Script should use bounded dynamic ranges, master-driven arrays, and batched operations.

Avoid whole-column volatile formulas when a bounded dynamic strategy is more efficient.

---

# 17. Formula vs automation ownership

## 17.1 Formulas own

- revenue;
- COGS;
- gross profit;
- margin;
- balance;
- due date;
- payment status;
- aging;
- commission eligibility;
- ordinary lookups;
- live KPI calculations;
- normal reporting aggregations.

## 17.2 Apps Script owns

- search/filter workflow;
- full QA orchestration;
- controlled imports;
- payment posting;
- invoice document generation;
- commission finalization;
- period close;
- snapshots;
- audit logging;
- master-data normalization where appropriate.

This boundary is mandatory for maintainability.

---

# 18. Automation surface

The visible automation surface should remain minimal.

### Overview
- Run Check
- Import Depletion
- Close Period

### Invoices
- Record Payment
- Generate Invoice

### Commissions
- Finalize Period

### Admin/secondary
- Create Snapshot
- Reset Filters

All scripts can also be accessible through one `Lagom` custom menu.

---

# 19. Google-first platform strategy

## 19.1 Production target

Google Sheets + Apps Script + Drive + Docs.

Google should not be constrained to an Excel-first lowest common denominator.

## 19.2 Microsoft compatibility target

After Google v3 is stable:
- recreate the same data contract in Excel;
- use structured Tables;
- port automation semantics to Office Scripts;
- preserve the same visible workflow vocabulary.

The implementation can differ while the business contract stays consistent.

---

# 20. Performance requirements

Apps Script should:

- batch reads;
- batch writes;
- use in-memory maps;
- avoid repeated per-cell service calls;
- use document locks for high-impact writes;
- avoid triggers on every ordinary edit;
- run targeted QA after targeted workflows;
- run full QA only on explicit request or high-impact operations.

Formulas should:

- avoid unnecessary volatility;
- avoid giant repeated helper formulas;
- use dynamic arrays / QUERY / FILTER where useful;
- avoid entire-column calculations when not necessary.

---

# 21. Protection model

Google Sheets should protect:

- calculated columns;
- system ranges;
- helper data;
- closed-period history;
- finalized commission records where appropriate.

Users should still be able to:

- edit unlocked input cells;
- search;
- filter;
- sort approved views;
- use dropdowns;
- run automation.

Protection exists to prevent corruption, not obstruct work.

---

# 22. Security and privacy

The production workbook is confidential internal business data.

Permitted:
- account/business names;
- invoice data;
- revenue;
- AR;
- COGS;
- commission data.

Not permitted:
- banking credentials;
- passwords;
- API tokens;
- OAuth secrets;
- unnecessary personal information.

Platform credentials required by future scripts must use Google-native secure mechanisms, not cells.

Maintain a separate sanitized development/demo copy.

---

# 23. QA and integrity requirements

Replace hardcoded seed-total checks with invariant relationships:

- invoice revenue equals depletion revenue;
- invoice cases equal depletion cases;
- invoice COGS equals depletion COGS;
- balance equals revenue less payments;
- no duplicate invoice IDs;
- no orphan depletion lines;
- no unknown products/accounts/reps;
- commission eligibility agrees with payment state;
- critical QA count is zero before configured period-close/finalization operations.

---

# 24. Import workflow

```text
RAW INPUT
   ↓
Normalize
   ↓
Map
   ↓
Validate
   ↓
Detect duplicates
   ↓
Classify
   ↓
Preview
   ↓
Commit valid rows
   ↓
Reconcile
   ↓
Audit
```

No raw imported data should write directly to the canonical `Depletion` ledger.

---

# 25. Period close

Close Period should:

1. validate requested period;
2. run full QA;
3. block on configured critical issues;
4. reconcile ledgers;
5. calculate period metrics from source data;
6. capture commission state;
7. write Period History;
8. create recovery snapshot when configured;
9. mark close state;
10. write audit log.

No duplicate close should occur silently.

---

# 26. Commission finalization

Finalize Period should:

1. validate rep and dates;
2. calculate from Commission Eligible Date/payment eligibility;
3. ensure rates exist;
4. run commission-affecting QA;
5. snapshot final values;
6. prevent accidental duplicate finalization;
7. log the operation.

Do not automate unresolved bonus rules.

---

# 27. Definition of done

v3 is complete only when:

- all canonical business relationships are preserved;
- Google Sheets is the primary optimized edition;
- Nunito is applied throughout;
- old white + black-filled header styling is eliminated;
- new premium light color tokens are consistently applied;
- official black Lagom logo/icon is used correctly;
- search/filter toolbars are wired and functional;
- fixed row ceilings are removed;
- formulas remain inspectable;
- calculated areas are protected;
- Setup is reorganized and searchable;
- AR is a real work queue;
- Reports are dynamic and suppress zero-activity noise;
- QA is centralized;
- hardcoded seed reconciliation is removed;
- imports use staging;
- payment posting is controlled;
- commission periods can be finalized;
- reporting periods can be closed;
- snapshots and material actions are auditable;
- no sensitive credentials are embedded;
- the visible interface remains simpler than the technical architecture underneath.

---

# 28. Final product principle

The v3 workbook should feel calm, modern, and obvious.

A Lagom user should see:

- a soft premium light interface;
- black Lagom branding;
- Nunito typography;
- clear search;
- intelligent filters;
- obvious input fields;
- reliable numbers;
- prioritized exceptions;
- only a few meaningful actions.

Underneath, the system can be sophisticated:

> **Normalize · Validate · Enrich · Reconcile · Search · Filter · Prioritize · Audit · Import · Pay · Finalize · Snapshot**

That is the approved v3 product direction.
