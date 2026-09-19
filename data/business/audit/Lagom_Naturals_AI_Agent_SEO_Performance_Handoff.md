# Lagom Naturals — AI Agent SEO, Performance & Speed Handoff

**Purpose:** Engineering handoff for optimizing the new Lagom Naturals React frontend so it materially outperforms the current public website in search-engine readiness, rendering performance, loading speed, frontend efficiency, and crawlability.

**Scope boundary:** This handoff is intentionally limited to **SEO, performance, and speed optimization integrated into the React frontend and WordPress content architecture**. It does not include security hardening, generalized compliance engineering, full-service SEO campaigns, backlink programs, or ongoing professional SEO management.

---

## 1. Primary Mission

Build the new frontend so it does not inherit the current WordPress theme/plugin performance debt.

WordPress remains the CMS/content control plane. React owns the public presentation layer.

The new implementation must:
- reduce critical rendering work;
- reduce JavaScript and CSS payloads;
- reduce initial network weight and request count;
- optimize image and font delivery;
- improve LCP, FCP, Speed Index, and TBT;
- preserve near-zero CLS;
- expose search-critical content in initial/pre-rendered HTML;
- implement strong technical/on-page SEO foundations;
- prevent duplicate, low-value, and UI-state URLs from polluting the crawl surface;
- preserve valid structured data already present on the existing site.

Do not chase a synthetic score by removing important customer-facing content or product information. Improve the architecture and delivery model.

---

## 2. Current Website Audit Baseline

### Lighthouse mobile — Sep. 19, 2026

Test conditions: Lighthouse 13.4.1, emulated Moto G Power, Slow 4G.

| Metric | Current result |
|---|---:|
| Performance | **31 / 100** |
| SEO | **85 / 100** |
| FCP | **3.4 s** |
| LCP | **10.8 s** |
| TBT | **4,420 ms** |
| Speed Index | **8.1 s** |
| CLS | **0** |
| Main-thread work | **19.6 s** |
| JavaScript execution | **6.2 s** |
| Long main-thread tasks | **20** |
| Total network payload | **5,972 KiB** |
| Estimated image-delivery savings | **2,363 KiB** |
| Estimated render-blocking savings | **1,200 ms** |
| Estimated unused JavaScript savings | **122 KiB** |
| Maximum critical-path latency | **4,950 ms** |
| Observed document response | **~444–450 ms** |

The dependency tree shows a broad WordPress/theme/plugin runtime including jQuery, WooCommerce, Elementor/Elementor Pro, ElementsKit, Porto assets, Swiper, YITH components, rewards/points scripts, age-gate code, Google tooling, Trustindex, and multiple font/icon systems.

### PageSpeed Insights mobile — Sep. 18, 2026

| Metric | Current result |
|---|---:|
| Performance | **61 / 100** |
| SEO | **85 / 100** |
| FCP | **4.4 s** |
| LCP | **16.6 s** |
| TBT | **20 ms** |
| Speed Index | **6.6 s** |
| CLS | **0** |
| Unused JavaScript opportunity | **221 KiB** |
| Unused CSS opportunity | **165 KiB** |

**Interpretation:** Do not average the two test runs. They were captured under different conditions. The shared signal is consistently poor LCP/rendering performance and substantial unused/duplicative frontend work. The Lighthouse run additionally proves that the current build can become heavily main-thread-bound under constrained mobile conditions.

### Semrush crawl

Key technical/search findings:
- **34 / 36** evaluated pages missing an H1.
- **10 / 36** missing meta descriptions.
- **36 / 36** flagged for too many JavaScript/CSS files.
- **188** unminified JavaScript/CSS findings.
- Successful HTML pages contain roughly **117–133 JS/CSS files**, median **131**.
- Median reported JS/CSS size is roughly **696 KB**; maximum about **775 KB**.
- Duplicate title/content findings affect duplicated product URL pairs.
- **6** duplicate meta-description findings.
- **80 / 134** sitemap entries classified as orphaned.
- **130** links with no anchor text plus additional non-descriptive-link findings.
- A shared broken storefront/filter destination propagates broken-link findings across much of the crawl.
- Parameterized UI states such as list/filter combinations increase crawl noise.

### Structured-data baseline

Existing search markup is a strength that must be preserved:
- JSON-LD detected on **51 / 51** successful HTML pages represented in the structured-data export.
- Breadcrumb markup detected on **51 / 51**.
- Open Graph and Twitter Cards detected on **50 / 51**.
- Product snippet markup detected on **15 / 15** product URLs.
- No Merchant Listing items detected.
- No Local Business items detected.
- No FAQ items detected in the Semrush structured-data export.
- Semrush did not flag structured-data markup errors.

---

## 3. Root Causes the New Frontend Must Eliminate

### Excessive global frontend dependencies
The current public site loads a large theme/plugin dependency surface on nearly every route. The React frontend must not recreate this by replacing WordPress plugins with an equally large npm dependency graph.

### Oversized image delivery
Lighthouse identifies approximately **2.36 MB** of potential image savings. Large JPG/PNG assets are transferred when smaller responsive modern-format assets would suffice.

### Expensive critical rendering path
Render-blocking requests, font/icon chains, plugin styles, and late resource discovery delay FCP and LCP.

### Fragile mobile main-thread performance
One Lighthouse run measured **19.6 s** of main-thread work, **6.2 s** of JavaScript execution, and **4.42 s** TBT.

### Search architecture debt
Missing H1s, metadata gaps, duplicate products, weak anchor text, uncrawlable interactions, orphaned sitemap content, and UI-state URL proliferation weaken the site's search foundation.

### Existing strengths to preserve
Do not regress:
- CLS near 0;
- canonical correctness;
- valid robots behavior;
- valid Product/Breadcrumb schema;
- Open Graph/Twitter metadata;
- successful HTTP responses on core routes.

---

## 4. Frontend Architecture Rules

1. **React owns the public frontend.**
   - Do not load WordPress theme, Elementor, Porto, or plugin frontend CSS/JS into the React experience.
   - WordPress provides structured content/data only.

2. **Search-critical content must be server/static rendered.**
   - Product names, descriptions, H1s, metadata, canonical tags, structured data, category copy, and location content must not depend on client-only rendering.
   - If remaining on Vite/static hosting, pre-render or statically generate indexable routes where feasible.
   - If moving to Next.js, prefer server-first rendering and restrict client components to genuine interactivity.

3. **Minimal client JavaScript.**
   - Hydrate only interactive features.
   - Static product/editorial content must be visible before hydration.

4. **Route-level dependency isolation.**
   - Map code only on Find Us.
   - Search code loaded on intent or search routes.
   - Account/checkout SDKs only where required.
   - Carousel/gallery code only on pages that use it.

5. **Avoid dependency duplication.**
   - One motion system.
   - One carousel/gallery implementation.
   - One icon strategy.
   - No overlapping UI libraries without a measured reason.

---

## 5. Performance & Speed Targets

These are engineering objectives, not guaranteed CrUX outcomes.

| Metric | Target |
|---|---:|
| Mobile Lighthouse Performance | **90+ preferred; 85 minimum release gate unless documented exception** |
| LCP | **≤ 2.5 s; ≤ 2.0 s preferred** |
| FCP | **≤ 1.8 s** |
| TBT | **< 200 ms mobile lab target** |
| CLS | **≤ 0.10; preserve near-zero where possible** |
| SEO | **90+ minimum; 95+ target** |
| Initial homepage transfer | **≤ 2 MB target; ≤ 1.5 MB preferred** |
| Initial route requests | **Target < 60 where practical** |

The new build must be tested under constrained mobile conditions, not only desktop broadband.

---

## 6. LCP / Critical Rendering Strategy

For every major route:
- identify the actual LCP element;
- ensure LCP media is discoverable in initial HTML;
- never lazy-load the LCP image;
- apply `fetchpriority="high"` to the actual priority image where appropriate;
- use explicit width/height or stable `aspect-ratio`;
- use responsive `srcset`/`sizes`;
- avoid CSS background images for primary LCP media unless testing proves an advantage;
- preload only genuinely critical media/fonts;
- avoid long critical dependency chains;
- prevent CMS/API calls from blocking the first meaningful render.

The current audit recorded an LCP resource-load delay of approximately **1.28 s** in the Lighthouse breakdown, so priority/discovery must be deliberate.

---

## 7. Image Optimization Requirements

Image delivery is one of the highest-value optimization areas.

Required:
- AVIF/WebP derivatives for photographic content;
- responsive mobile/tablet/desktop variants;
- card-sized product thumbnails instead of full PDP images;
- lazy loading for below-the-fold media;
- eager/high-priority loading only for critical above-the-fold media;
- explicit dimensions to preserve CLS;
- content-aware compression;
- no oversized transparent PNG where a more efficient format can preserve the visual result;
- cacheable fingerprinted image assets;
- product-label legibility must be checked after compression.

Do not reuse one giant image source everywhere for implementation convenience.

---

## 8. JavaScript / Main-Thread Strategy

The public React layer should remove legacy runtime dependencies such as jQuery, Backbone, WordPress theme scripts, and page-builder scripts.

Required:
- tree-shake aggressively;
- code-split by route and feature;
- dynamically import maps, galleries, advanced search, reviews, and other heavy optional features;
- avoid large global state when local/server state is sufficient;
- avoid forced synchronous layout/reflow;
- batch DOM reads/writes;
- reduce unnecessary effects and re-renders;
- use CSS for simple animation rather than JavaScript;
- defer nonessential third-party scripts until after critical content;
- do not globally load sign-in/account functionality;
- profile representative mobile routes using the Performance panel.

A successful rewrite is not one that replaces 130 WordPress resources with a 1.5 MB monolithic React bundle.

---

## 9. CSS Strategy

- Maintain a consolidated token-driven design system.
- Remove page-builder-generated CSS.
- Avoid per-widget/per-plugin stylesheet fragmentation.
- Keep above-the-fold CSS small and deterministic.
- Split route/feature styles where beneficial without creating dozens of tiny blocking files.
- Purge unused CSS from production output.
- Avoid broad selectors and excessive DOM-dependent styling.
- Animate `transform` and `opacity` rather than layout-affecting properties where possible.

---

## 10. Fonts & Icons

Current audit data shows multiple font/icon systems and an oversized icon-font dependency.

New frontend requirements:
- self-host only approved fonts actually used;
- prefer WOFF2;
- subset fonts where possible;
- use `font-display: swap` or another intentionally nonblocking strategy;
- preload only critical above-the-fold font files;
- remove redundant Google Fonts if the same typography can be served locally;
- avoid Font Awesome/ElementsKit/Porto icon fonts in the public React layer;
- use optimized SVG icons/components.

---

## 11. Network, Caching & Delivery

- Fingerprint static assets.
- Serve immutable static files with long cache lifetimes.
- Use Brotli or equivalent modern text compression.
- Avoid redirect chains.
- Keep CMS/API calls out of the critical path when content can be pre-rendered/cached.
- Use revalidation/caching for CMS content appropriate to freshness.
- Do not use WordPress-style `admin-ajax.php` requests for initial public rendering.
- Minimize third-party origins.
- Load analytics only as early as necessary for measurement requirements.

---

## 12. Homepage Requirements

The homepage is the primary performance benchmark.

- Hero/LCP must be optimized first.
- Above-the-fold content must not wait for review widgets, account SDKs, maps, large sliders, or noncritical scripts.
- Product discovery content should exist in rendered HTML.
- Use responsive hero media.
- Keep initial animation light.
- Delay below-the-fold carousels/visual effects until after critical rendering.
- Do not preload all homepage imagery.

---

## 13. Shop / Collection Requirements

- Render product lists semantically in initial HTML.
- Use correctly sized thumbnails.
- Do not load full PDP gallery media for cards.
- Pagination/filtering should not generate uncontrolled crawlable URL combinations.
- Define canonical/noindex behavior for purely presentational states such as list/grid toggles.
- Remove legacy patterns such as `gridcookie` from the indexable crawl surface.
- Ensure category pages have unique H1, title, meta description, and useful category copy.
- Shared filters/navigation must never point to 404 destinations.

---

## 14. Product Detail Page Requirements

Initial/pre-rendered HTML should contain authoritative:
- product name;
- H1;
- price;
- THC amount;
- serving/pack information;
- can/package volume;
- description;
- ingredients/nutrition where supplied;
- COA/lab link;
- availability messaging where authoritative.

Performance:
- prioritize only the primary product media;
- lazy/on-demand load secondary gallery assets;
- avoid shipping carousel/gallery JS when not necessary;
- use responsive media dimensions.

SEO:
- unique title/meta description;
- self-canonical or deliberate canonical strategy;
- Product/Breadcrumb structured data;
- Offer/Merchant Listing fields only when authoritative data supports them;
- intentional variant/ProductGroup model if variants genuinely exist;
- no duplicate product URLs representing the same item.

---

## 15. Find Us Requirements

- Use the verified supplier latitude/longitude dataset rather than runtime geocoding.
- Render retailer/location information as crawlable HTML before the map.
- Lazy-load map library and map tiles.
- Map initialization must not affect homepage or unrelated route bundles.
- Location detail text should include truthful retailer name/address/location data.
- Avoid duplicate/thin location states.
- Use structured geographic content without falsely representing independent retailers as Lagom-owned businesses.

---

## 16. Search Requirements

- The mobile expanding search interaction should have a lightweight initial shell.
- Load search-specific data/code on user intent where possible.
- Debounce query execution.
- Do not load a large search engine/index globally if unnecessary.
- Search-result URLs must be deliberate and should not create uncontrolled indexable thin pages.
- Results should use semantic links and descriptive product/page names.

---

## 17. Technical & On-Page SEO Requirements

This build includes SEO improvements that are part of the frontend/CMS architecture. It is **not** a full-service SEO campaign.

Required:
- one logical H1 on normal indexable pages;
- unique page titles;
- useful meta descriptions;
- canonical URLs;
- crawlable `<a href>` navigation;
- descriptive anchor text;
- semantic page/heading structure;
- search-critical content in initial HTML;
- valid robots/sitemap integration;
- correct HTTP statuses/redirects;
- Open Graph/Twitter metadata;
- optimized image alt-text fields/support;
- structured data from authoritative WordPress fields;
- intentional internal linking between homepage, collections, PDPs, editorial content, COAs, and Find Us;
- elimination of duplicate products/duplicate URL representations;
- prevention of indexable filter/list UI states unless intentionally designed as landing pages;
- prevent internal builder/template objects from appearing as public SEO destinations.

Not included:
- backlink acquisition;
- professional keyword campaigns;
- ongoing rank management;
- recurring content-marketing programs;
- guaranteed rankings;
- guaranteed traffic increases.

---

## 18. Structured Data Strategy

Preserve and improve existing valid markup.

Keep:
- Product schema;
- Breadcrumb schema;
- site/brand metadata;
- Open Graph/Twitter metadata.

Improve only from authoritative data:
- Product + Offer;
- ProductGroup/variants where structurally correct;
- Merchant Listing eligibility fields where complete truthful commerce data exists;
- article/editorial metadata;
- relevant retailer/location relationships without implying ownership.

Structured data should be emitted in initial HTML and should not depend on late client rendering.

---

## 19. Crawl / Index Architecture

The Semrush crawl shows significant sitemap/orphan/filter noise.

New architecture should:
- include only intentional public content types in sitemaps;
- exclude builder/templates/internal CMS objects;
- prevent UI query states from becoming duplicate indexable pages;
- avoid separate URLs for identical product content;
- use redirects for retired URLs;
- preserve high-value existing URLs where practical;
- create a migration redirect map when slugs/routes change;
- ensure important editorial/category/PDP routes are internally linked;
- ensure crawl depth remains shallow for primary commercial content.

---

## 20. Measurement Plan

Test representative templates rather than only the homepage:
- homepage;
- shop/category;
- primary THC seltzer PDP;
- merch PDP;
- Find Us;
- editorial/About;
- cart/checkout shell where applicable.

For each:
- minimum three mobile Lighthouse runs; track median;
- desktop Lighthouse sanity run;
- request count;
- transfer size;
- JS execution/main-thread time;
- largest assets;
- FCP/LCP/TBT/CLS/Speed Index;
- rendered HTML inspection for title/H1/meta/canonical/content/schema;
- structured-data testing;
- broken-link crawl.

Post-deployment:
- rerun the same Lighthouse mobile profile for apples-to-apples comparison;
- rerun PageSpeed Insights;
- rerun Semrush Site Audit;
- if Search Console/GA4 access becomes available, use those as the authoritative traffic/search baseline rather than Semrush estimates.

---

## 21. CI / Performance Budgets

Where supported by the stack, add:
- build/lint/typecheck/tests;
- bundle-size budget;
- route bundle reports;
- Lighthouse CI or equivalent on representative routes;
- generated-site broken-link crawl;
- duplicate title/H1/meta checks;
- sitemap checks;
- structured-data checks.

The purpose of these checks is to prevent the new frontend from gradually returning to the same performance and SEO debt identified in the legacy site.

---

## 22. Implementation Priority

### P0 — Must be correct before release
- eliminate legacy WordPress theme/plugin frontend runtime;
- correct routing/status/redirect behavior;
- LCP/hero optimization;
- responsive image pipeline;
- route-level code splitting;
- H1/title/meta/canonical per indexable route;
- crawlable navigation;
- valid Product/Breadcrumb structured data;
- no duplicate product URLs;
- no broken primary internal links.

### P1 — Major performance/search improvement
- third-party deferral;
- font/icon consolidation;
- map lazy-loading;
- search-on-intent;
- filter/query canonical rules;
- internal-link architecture;
- category/editorial metadata cleanup;
- sitemap cleanup;
- image/media compression.

### P2 — Continuous optimization
- tighter bundle budgets;
- finer caching/revalidation;
- richer truthful structured data;
- ongoing internal-link/content architecture refinement;
- performance regression monitoring.

---

## 23. Anti-Patterns — Do Not Recreate the Current Site

Do not:
- ship 100+ JS/CSS files per route;
- globally load map/search/account/review/commerce code;
- replace many WordPress plugins with many overlapping npm packages;
- use multiple carousel or icon systems;
- lazy-load the LCP image;
- send desktop-sized imagery to mobile;
- block first render on analytics or third-party widgets;
- client-render SEO-critical content only;
- generate crawlable URLs for every filter/list state;
- use generic repeated link text where descriptive text is possible;
- duplicate product URLs/content;
- expose internal CMS builder objects in sitemaps;
- sacrifice the current near-zero CLS for visual effects.

---

## 24. Definition of Done

The new frontend is ready when:
1. The homepage materially outperforms the current Lighthouse baseline under the same mobile profile.
2. Representative commercial routes meet agreed performance budgets or have documented exceptions.
3. No legacy WordPress theme/page-builder/plugin frontend assets are required by the React public experience.
4. Critical content exists in initial/pre-rendered HTML.
5. LCP assets are correctly prioritized and responsive.
6. Initial payload/request count are substantially lower than the current build.
7. Main-thread work and TBT are materially reduced on mobile.
8. CLS remains within the target and preferably near the current 0 baseline.
9. Every indexable route has correct H1/title/meta/canonical behavior.
10. Structured data remains valid and product schema is preserved.
11. Crawlable navigation and internal linking are correct.
12. Filter/query/UI states do not create duplicate indexable surfaces.
13. Broken primary links and routing failures are eliminated.
14. PageSpeed, Lighthouse, and Semrush are rerun after deployment to document the improvement.

---

## 25. Source Reports

- `lighthouse-report(1).pdf`
- `psi-report-lagomnaturals-com-1789793384581(2).pdf`
- `lagomnaturals.com_issues_20260919.csv`
- `lagomnaturals.com_mega_export_20260919.csv`
- `lagomnaturals.com_pages_20260919.csv`
- `lagomnaturals.com_pages_structured_data_20260919.csv`
- `Summary_lagomnaturals.com_Aug 2025 – Aug 2026_Worldwide_All devices.csv`
- `Summary_lagomnaturals.com_Sep 2025 – Aug 2026_Worldwide_All devices.csv`
- `Top Pages_lagomnaturals.com_Aug 2025 – Aug 2026_Worldwide_All devices.csv`
- `Top Pages_lagomnaturals.com_Sep 2025 – Aug 2026_Worldwide_All devices.csv`

**Data note:** Lighthouse/PageSpeed are point-in-time measurements and can vary by environment. Semrush traffic data is modeled rather than first-party analytics. The handoff uses those sources to define optimization priorities, not to promise specific future traffic or ranking outcomes.
