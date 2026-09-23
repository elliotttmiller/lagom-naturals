# Lagom CRM — Developer Handoff

A field-sales CRM for Lagom Naturals (hemp-derived THC beverage + gummy brand,
Minnesota). Tracks accounts, activities, orders, inventory, territories, routes, and AI
insights.

> **Start with `PRODUCT_VISION.md`** — it explains the brand, the field-sales/DSD model,
> and why each feature exists. This file is the technical state.

## Stack & hosting
- **Next.js (App Router).** The entire UI is one file: `app/page.js` (~2,500 lines,
  React with inline styles + a single `<GlobalStyles>` CSS block). Intentional, but
  the #1 piece of tech debt (see below).
- **Supabase** (Postgres) for all data; the browser client uses the anon key.
- **Two serverless API routes:** `app/api/ai/route.js` (Anthropic) and
  `app/api/geocode/route.js` (Google Geocoding).
- **Vercel** hosting, project `lagom-crm-2k87`. Custom domain **crm.lagomnaturals.com**
  (CNAME -> Vercel, automatic SSL). DNS managed at SiteGround.
- **Custom auth** (a `crm_users` table, username/password) — not Supabase Auth.

## Repo layout
- `app/page.js` — the whole app.
- `app/api/ai/route.js`, `app/api/geocode/route.js` — backend routes.
- Root SQL scripts (run manually in the Supabase SQL Editor):
  `supabase-setup.sql`, `products_import.sql`, `capitol_bev_import.sql`,
  `county_backfill.sql`, `maps_setup.sql`.
- `CLAUDE.md` — project conventions (responsive rules, palette, breakpoints). Read first.
- `INVOICES_SPEC.md` — spec for the next feature (Phase 3).
- `components/crm/LagomCRM.jsx` — legacy/unused; safe to ignore or delete.

## Environment variables (Vercel -> Settings -> Environment Variables)
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — already set.
- `GOOGLE_MAPS_API_KEY` (server, Geocoding API) — needed for geocoding. **Add.**
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (browser, Maps JavaScript API) — needed for the
  interactive map. **Add.**
- `ANTHROPIC_API_KEY` (server) — needed for the AI tab. **Add.**

After adding any env var, redeploy for it to take effect.

## Current state — DONE
- Accounts, Activity, Inventory (17 products), Users management.
- Collapsible desktop sidebar; desktop layout pass (content capped in `.content-inner`).
- Custom domain + SSL.
- **Phase 4 (maps):** Google geocoding route + one-click "Geocode all accounts" in the
  Setup tab; interactive Google Territory Map (falls back to the SVG plot when no
  browser key is set); "Open in Google Maps" link in Routes; **territories switched
  from 5 hardcoded zones to real MN counties** everywhere — `getZone(p)` now returns
  `p.county`, with stable per-county colors and dynamic county lists.

## PENDING (priority order)
1. **Activate Phase 4** (no code change): add the two Google env vars + redeploy; run
   `maps_setup.sql` (adds `latitude`/`longitude`/`county`); then Setup -> "Geocode all
   accounts" (~2,391 records). Verify match rate and that the map renders.
2. **Phase 3 — Invoices** (not built). See `INVOICES_SPEC.md`. Tables already defined
   in `supabase-setup.sql`.
3. **Verify `supabase-setup.sql` has been run** — tables `events`, `orders`,
   `order_items`, `invoices`, `inventory_movements`, `commissions`. Those tabs error or
   are empty if the script has not been run.
4. **AI tab:** add `ANTHROPIC_API_KEY`; update the model id in `app/api/ai/route.js` to
   a current Claude model.
5. **Voice memo** in the Activity tab is a "coming soon" stub.

## Risks / tech debt
- **Single-file architecture** (`app/page.js`): split into components/modules for
  maintainability. Do it carefully — it is the entire app. Verify after each chunk.
- **Security review (highest priority before real production use):** custom auth —
  confirm passwords are hashed, not plaintext. Review **Supabase Row Level Security**
  on every table; the browser uses the anon key, so RLS is what actually protects data.
- **Geocoding** writes ~2,391 individual Supabase `update`s from the client — works but
  slow; could be batched.
- **Restrict the Google key(s):** browser key -> HTTP referrers `crm.lagomnaturals.com/*`
  and `*.vercel.app/*`; server key -> Geocoding API only. Ideally two separate keys.
- No automated tests/CI. Verification today is a manual esbuild parse + Vercel preview.

## Conventions (see CLAUDE.md)
- Check **375 / 768 / 1440px** before shipping any UI change. Keep content inside
  `.content-inner`. Use the `.g2/.g3/.g4` grid utilities (they collapse at breakpoints).
- No em-dashes in user-facing copy.
- Develop on a feature branch, open a PR, squash-merge to `main`. Vercel auto-deploys
  `main` to production.

## Local dev
```
npm install
npm run dev      # http://localhost:3000
```
A quick syntax check without a full build:
```
npx esbuild app/page.js --loader:.js=jsx --jsx=automatic --bundle \
  --external:react --external:react-dom --external:@supabase/supabase-js \
  --external:chart.js --external:next/* --outfile=/dev/null
```
