# Lagom CRM — Project Notes

Single-file Next.js app. The entire UI lives in `app/page.js` (React, inline
styles + one `<GlobalStyles>` CSS block). Data is in Supabase; SQL setup
scripts live at the repo root (e.g. `products_import.sql`).

## Responsive / layout rules (IMPORTANT — read before any UI change)

The app was originally built mobile-first and drifted into looking great on a
phone but sparse/unbalanced on desktop. To prevent that going forward:

1. **Always check 3 widths before shipping any UI change:**
   - `375px` (phone), `768px` (tablet), `1440px` (desktop).
2. **Keep in-app content inside `.content-inner`** (max-width 1480px, centered).
   All tab content renders through it via `<div className="content"><div
   className="content-inner">…</div></div>`. Do not bypass it — it stops content
   from sprawling edge-to-edge on wide monitors.
3. **Use the grid utilities** (`.g2/.g3/.g4`) for card rows; they already
   collapse at the `1024 / 768 / 480` breakpoints. Prefer them over ad-hoc
   `grid-template-columns` so new sections inherit responsive behavior.
4. **Cap text/measure** with sensible `maxWidth` on long paragraphs so line
   length stays readable on desktop.
5. **Full-bleed split screens (e.g. login `.auth`)**: keep the background
   full-width, but bound the *content* with a `maxWidth` and center it so wide
   screens look intentional, not bottom-left-anchored.

## Breakpoints in use
- `1024px` — `.g4`/`.g3` drop to 2 columns
- `880px` — login (`.auth`) stacks to single column
- `768px` — sidebar hides, mobile bottom nav + drawer appear, grids stack
- `480 / 380px` — stat grids drop to 1 column

## Conventions
- No em-dashes in user-facing copy (use commas / parentheses / colons).
- Collapsible desktop sidebar state persists in `localStorage`
  (`lagom_sidebar_collapsed`).
- Nav surfaces use `P.nav` (#1E293B); the deep ink `P.slate` (#0F172A) is for
  the login hero gradient and table-header text only.
