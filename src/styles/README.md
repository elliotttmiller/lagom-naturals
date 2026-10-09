# Lagom storefront styles

`src/styles/index.css` is the only global stylesheet entry imported by `src/main.jsx`.

## Runtime loading model

Global CSS is loaded through `styles/index.css`. Route-specific systems remain
code-split and are imported by the routes that own them.

- `mobile/50-pdp.css` is route-owned by the product detail route.
- `mobile/60-commerce.css` and `mobile/65-checkout.css` are route-owned by commerce routes.
- `mobile/70-editorial.css` remains a compatibility layer for editorial/merch routes.
- `editorial-pdp.css` is the final presentation owner for the redesigned PDP.
- `editorial-routes.css` owns the shared About/Learn/Visit editorial primitives.

Do not globalize route-owned modules merely for directory symmetry. Runtime
ownership and bundle boundaries take precedence.

## Canonical global architecture

- `tokens.css` — semantic color, typography, spacing, content width, layer and flavor tokens.
- `legacy-core.css` — temporary shared/desktop compatibility bridge only.
- `production-hardening.css` — cross-cutting production safeguards only; no page layout.
- `mobile.css` → `mobile/index.css` — globally required mobile foundation, motion, chrome, catalog, overlays and accessibility.
- `desktop.css` — shared desktop compatibility presentation.
- `age-gate.css` — static Age Gate presentation.
- `age-gate-transition.css` — Age Gate → campaign transition presentation.
- `home/index.css` — homepage stylesheet boundary.
- `home-scroll-snap.css` — retained native scene/observer geometry contract for the campaign viewport.
- `home/editorial-system.css` — canonical homepage campaign + editorial layout.
- `editorial-commerce.css` — canonical product-card, product-rail and Shop presentation.
- `editorial-chrome.css` — canonical desktop/mobile chrome and footer presentation.
- `lagom-motion-language.css` — shared image/route/interaction lifecycle tokens and non-scroll choreography.

## Editorial migration ownership

The October 2026 lifestyle-template migration intentionally uses the imported
Framer template as a visual specification only. Generated Framer runtime,
responsive wrappers and numbered component variants are never production
dependencies.

| Responsibility | Canonical authority |
| --- | --- |
| App motion primitives | `src/motionSystem.jsx` |
| Campaign product carousel behavior | `src/home/ProductStage.jsx` |
| Seltzer can rendering | `src/products/SeltzerCan.jsx` |
| Flavor scene contract | `src/home/FlavorArtworkScene.jsx` + `src/products/flavorScenes.js` |
| Homepage campaign/editorial presentation | `home/editorial-system.css` |
| Product collection layout | `src/storefront/ProductRail.jsx` |
| Product tile behavior/presentation | `CatalogProductCard.jsx` + `editorial-commerce.css` |
| FAQ/education disclosure | `src/editorial/Accordion.jsx` |
| Site chrome/footer presentation | `editorial-chrome.css` |
| PDP presentation | `editorial-pdp.css` |
| About/Learn/Visit shared presentation | `editorial-routes.css` |
| Global production safeguards | `production-hardening.css` |
| Mobile viewport/safe-area baseline | `mobile/00-foundation.css` |
| Reduced-motion mobile policy | `mobile/10-motion.css` + `mobile/90-accessibility.css` |

## Retired owners

The following systems were removed after the new route/component owners were
wired:

- `HomeHeroPortal.jsx`
- `HomeProductStage.jsx`
- `AtmosphericScrollExperience.jsx`
- `LagomScrollIndicator.jsx`
- root `sky-home.css`
- `mobile-sky-home.css`
- `desktop-snap-home.css`
- `mobile-home-composition.css`
- `home-hero-fullbleed.css`
- `home-product-stage.css`
- `home-seltzer-showcase.css`
- `home-gummy-showcase.css`
- root `production.css`

Do not recreate `*-fix.css`, `*-polish.css`, or another generic production
override layer for the new system. Put new rules in the narrowest canonical
owner above.

## Ownership rules

1. Do not add additional global CSS imports to `main.jsx`.
2. New homepage rules enter through `styles/home/index.css`.
3. Motion owns runtime transform/opacity choreography; CSS owns static layout and lightweight state interpolation.
4. Browser-native document scrolling remains the vertical scroll authority.
5. Keep commerce/data contracts separate from campaign and editorial presentation.
6. Prefer semantic tokens over repeated literals when the value is genuinely systemic.
7. Preserve safe-area handling, keyboard focus, reduced motion, semantic landmarks and 44px+ interactive targets.
8. Delete a stylesheet only after its runtime owner has been replaced and its surviving responsibility identified.
