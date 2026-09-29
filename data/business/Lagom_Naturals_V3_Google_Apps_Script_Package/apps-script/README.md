# Lagom Naturals Depletion System V3 — Google Workspace UI + Automation Package

This package targets the exact uploaded V2.1 worksheet contract:
`Overview`, `Invoices`, `Depletion`, `AR`, `Reports`, `Commissions`, `Setup`, and `Guide`.
It also creates a live `QA Audit` sheet.

## Install
1. Upload/import `Lagom_Naturals_Depletion_System_Google_v2.1(1).xlsx` into Google Sheets.
2. Open **Extensions → Apps Script**.
3. Add the `.gs` files in this folder and replace the default manifest with `appsscript.json`.
4. Save, select `installLagomV3`, and run it once. Approve the spreadsheet-only permission.
5. Reload the spreadsheet. The **Lagom** menu will appear.

## What `installLagomV3()` applies
- Nunito across all operational surfaces.
- Warm Pearl `#F7F7F4` workbook canvas and layered Soft White / Mist / Stone surfaces.
- Official Lagom mark embedded directly in the Apps Script package; no external image host is required.
- Editorial mastheads without black fill bars.
- Soft table headers (`#EDEFEA`) and reduced grid-box styling.
- Cream editable cells (`#FFF9EE`) and calculated cells (`#F3F5F2`).
- Search/filter components on Invoices, Depletion and AR.
- Google-native data validation/dropdowns sourced from Setup.
- Filter criteria driven by the Search Key helper columns already in the workbook.
- Compact visible-record counts using `SUBTOTAL`.
- KPI card restyling and a muted monthly-revenue chart on Overview.
- AR aging/status chips and QA status coloring without full-row alarm fills.
- Setup section searches that jump directly to matching Product / Account / Rep records.
- Warning-only protections around derived/reporting regions.
- A generated QA Audit work queue with Critical / Review / Info severity states.

## Lagom menu actions
- **Install / Refresh V3 UI** — idempotently reapplies the V3 design and wiring.
- **New Invoice** — moves to the next invoice-entry row and pre-fills today’s invoice date.
- **Find Invoice** — jumps to a requested invoice number.
- **Mark Selected Invoice Paid** — writes Amount Paid = derived invoice revenue and records today’s payment date; status remains formula-derived.
- **Apply Current Filters** — applies the visible search/status/rep/aging controls.
- **Reset Workspace** — clears search/filter state and returns to Invoices.
- **Run QA Audit** — rebuilds the QA work queue from current invoice/depletion inputs.
- **Refresh Reports** — flushes calculations and opens Reports.

## Architecture rule
Apps Script is an interaction adapter, not the accounting engine. Revenue, COGS, gross profit, balance due, aging, commission eligibility and ledger reporting remain workbook-derived. If the script is unavailable, the underlying workbook remains usable.

## Data safety
The package does not contain bank account/routing credentials. The Apps Script manifest requests only `spreadsheets.currentonly` scope and does not call external services.
