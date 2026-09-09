# Lagom storefront styles

`src/styles/index.css` is the only global stylesheet entry imported by `src/main.jsx`.

## Architecture

- `tokens.css` — shared color, typography, spacing, radius, elevation, breakpoint compatibility aliases, and motion primitives.
- `desktop.css` — authoritative desktop system at `min-width: 900px`.
- `mobile.css` — compatibility entry that imports `mobile/index.css`.
- `mobile/index.css` — ordered mobile manifest for the production mobile system.
- `mobile/00-foundation.css` — viewport, safe-area, scroll ownership, touch behavior, shared mobile geometry and typography.
- `mobile/10-motion.css` — CSS motion contract, transitions, reduced-motion and reduced-transparency behavior.
- `mobile/20-chrome.css` — mobile header, bottom navigation, More menu, hamburger and legacy drawer compatibility.
- `mobile/30-home.css` — mobile homepage hero and home-specific responsive behavior.
- `mobile/40-catalog.css` — shop, category/listing surfaces, product cards, filters and listing-control icons.
- `mobile/50-pdp.css` — product-detail media, purchase controls, accordions and product-media hardening.
- `mobile/60-commerce.css` — cart, checkout, add-to-cart feedback, quantity controls and success toast.
- `mobile/70-editorial.css` — Our Story, Find Us, education, recipes, merch and merch-detail surfaces.
- `mobile/80-overlays.css` — global search and sort overlay systems.
- `mobile/90-accessibility.css` — focus, safe-area, coarse-pointer, iOS-form, high-contrast and device hardening.
- `legacy-core.css` — temporary compatibility imports required by shared/desktop code that has not yet been fully decomposed. It is not the source of truth for mobile styling.

## Mobile migration policy

The files under `src/styles/mobile/` are authoritative below `900px`. Root-level `mobile-*.css` and historical polish sheets are retained only as migration/reference sources unless another non-mobile subsystem still imports them. New mobile styles must not be added to root-level CSS files.

Key integrations migrated from the previous frontend include:

- route-stage transform neutralization and single-document vertical scroll ownership;
- diagonal-touch/scroll-chain fixes for horizontal rails;
- safe-area-aware fixed chrome and isolated modal/drawer scroll surfaces;
- Motion-compatible geometry and compositor/backface hardening;
- reduced-motion and reduced-transparency support;
- morphing hamburger timing/easing and drawer transition contracts;
- search backdrop/surface transitions and body scroll locking;
- iOS-style sort popover containment and reduced-motion behavior;
- add-to-cart spinner, sheen, success-check and cart-pulse feedback;
- cart success toast enter/exit behavior and screen-reader announcer treatment;
- PDP media isolation, white media-surface blending and accordion behavior;
- coarse-pointer hover suppression, visible focus and mobile input hardening;
- 320/380px small-phone and 600–899px large-phone/tablet calibration.

See `mobile/AUDIT.md` for the file-by-file migration/disposition record.

## Ownership rules

1. Do not add new global CSS imports to `main.jsx`; add them through this library.
2. Do not create new root-level `mobile-*.css`, `desktop-*.css`, or ad-hoc `*-polish.css` files.
3. Add new mobile rules to the narrowest appropriate module under `styles/mobile/`.
4. Keep desktop behavior in `desktop.css`; never solve a mobile problem with a desktop override or vice versa.
5. Prefer shared tokens over repeated literal values.
6. CSS transitions are for lightweight state feedback; Motion owns component entrance/exit/layout choreography where a Motion component already exists.
7. Avoid `!important` except where the structured layer must neutralize a still-loaded legacy contract.
8. Preserve safe-area handling, keyboard focus, reduced motion, coarse-pointer behavior and vertical scroll ownership when modifying mobile geometry.
9. The desktop homepage hero uses `src/assets/desktop/hero.webp`; the mobile homepage uses `src/assets/mobile/hero.webp`. Do not layer catalog thumbnails over either art-directed hero.
