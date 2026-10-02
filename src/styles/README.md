# Lagom storefront styles

`src/styles/index.css` is the only global stylesheet entry imported by `src/main.jsx`.

## Runtime loading model

Global CSS is loaded through `styles/index.css`. Route-specific systems remain
code-split and are imported by the routes that own them. In particular:

- `mobile/50-pdp.css` is route-owned by the product detail route.
- `mobile/60-commerce.css` and `mobile/65-checkout.css` are route-owned by commerce routes.
- `mobile/70-editorial.css` is route-owned by editorial/merch routes.

Do not globalize these modules merely to make `mobile/index.css` list every mobile
file. Runtime ownership and bundle boundaries take precedence over directory symmetry.

## Architecture

- `tokens.css` — shared design tokens and compatibility aliases.
- `legacy-core.css` — temporary shared/desktop compatibility bridge only.
- `mobile.css` → `mobile/index.css` — globally required mobile foundation, motion, chrome, catalog, overlay and accessibility layers.
- `desktop.css` — shared desktop presentation.
- `age-gate.css` — sole Age Gate presentation owner. `src/AgeGate.jsx` owns gate state, accessibility, asset preloading and native WAAPI enter choreography. No legacy stylesheet may target `.age-gate*` or `body.age-gate-*`.
- `home/index.css` — single global homepage stylesheet boundary.
- `home-scroll-snap.css` — authoritative homepage native vertical scroll-snap geometry and scene-height contract.
- `desktop-snap-home.css` — desktop homepage scene presentation.
- `mobile-home-composition.css` — mobile homepage composition inside the geometry contract.
- `home-product-stage.css` — static product-stage geometry/presentation; Motion owns product-stage transform/opacity choreography.
- `lagom-motion-language.css` — shared presentation-level motion tokens/state feedback, not vertical document movement.
- `mobile-home-stability.css` — containment/hardening only; it must not redefine snap geometry.
- `styles/mobile/*` — structured mobile modules below 900px.
- route-scoped redesign sheets — loaded only by their owning routes/components.

## Canonical high-risk ownership

| System | Canonical authority |
| --- | --- |
| Homepage vertical scroll owner | Browser/native document scroll |
| Homepage snap type/alignment/scene height | `home-scroll-snap.css` |
| Desktop homepage composition | `desktop-snap-home.css` |
| Mobile homepage composition | `mobile-home-composition.css` |
| Homepage product-stage static layout | `home-product-stage.css` |
| Homepage product-stage animated transform/opacity | Motion in `HomeProductStage.jsx` |
| Mobile viewport/safe-area baseline | `mobile/00-foundation.css` |
| Site mobile chrome | `mobile/20-chrome.css` |
| Age-gate static layout | `age-gate.css` |
| Age-gate enter choreography | WAAPI in `main.jsx` |
| Reduced-motion mobile policy | `mobile/10-motion.css` + `mobile/90-accessibility.css` |
| Shared design tokens | `tokens.css` |

The rule is one canonical authority **per responsibility**, not one technology for
an entire feature. CSS, Motion, WAAPI and native scrolling may participate only
when their property/runtime-state boundaries do not compete.

## Mobile migration policy

The structured files under `src/styles/mobile/` are the production mobile system.
Historical root-level `mobile-*.css` files that were fully superseded and had no
runtime import path were removed on 2026-10-02. Do not recreate them.

Some root-level component styles remain because live components still import them
directly. A legacy-looking filename is not deletion evidence.

## Ownership rules

1. Do not add additional global CSS imports to `main.jsx`; use `styles/index.css` or a deliberate route/component boundary.
2. Do not create root-level `mobile-*.css`, `desktop-*.css`, or ad-hoc `*-fix.css`/`*-polish.css` layers.
3. New mobile rules belong in the narrowest canonical module under `styles/mobile/`.
4. Homepage modules must enter globally through `styles/home/index.css`.
5. `home-scroll-snap.css` alone owns homepage snap geometry. Presentation sheets may not compensate for bad snap geometry.
6. Motion/WAAPI own runtime choreography only where explicitly documented; CSS must not independently animate the same transform/opacity property in that state.
7. Prefer shared tokens over repeated literals when the value is genuinely systemic.
8. Avoid `!important` except for intentional compatibility neutralization with a documented upstream owner.
9. Preserve safe-area handling, keyboard focus, reduced motion, coarse-pointer behavior and native vertical scroll ownership.
10. Delete a stylesheet only after classifying it as MIGRATED, OBSOLETE, DEAD, DUPLICATED or SUPERSEDED and identifying the surviving authority.

See `mobile/AUDIT.md` for the migration/disposition record.
