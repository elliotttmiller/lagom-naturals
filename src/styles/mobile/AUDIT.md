# Mobile stylesheet audit and migration record

This document records the September 2026 audit of the previous Lagom frontend CSS and the disposition of every stylesheet with mobile or shared behavior. The production source of truth below 900px is `src/styles/mobile/`.

## Production mobile modules

| Module | Owns |
| --- | --- |
| `00-foundation.css` | viewport sizing, scroll ownership, touch/overscroll behavior, safe-area variables, shared mobile typography/geometry |
| `10-motion.css` | transition primitives, Motion compatibility, reduced motion/transparency, ATC/menu keyframes |
| `20-chrome.css` | reference mobile header, bottom navigation, More menu, hamburger and legacy-drawer compatibility |
| `30-home.css` | homepage hero, hero controls, home lineup responsiveness |
| `40-catalog.css` | shop/listing layout, product cards, filters, listing-control icons, category/media surfaces |
| `50-pdp.css` | PDP media, product information hierarchy, quantity/purchase controls, accordions |
| `60-commerce.css` | cart, checkout, add-to-cart animation states, cart toast, quantity behavior |
| `70-editorial.css` | story, find-us, education, recipes, merch and merch-detail |
| `80-overlays.css` | search overlay, modal scrolling, sort popover/scrim |
| `90-accessibility.css` | focus, form/iOS behavior, safe areas, coarse-pointer and forced-colors hardening |

## Root stylesheet disposition

### Core / cross-cutting

| Previous stylesheet | Audit result | Production disposition |
| --- | --- | --- |
| `app.css` | Large historical base containing shared component structure, variables and legacy responsive rules. Some desktop/shared selectors remain required. | Retained through `legacy-core.css` for compatibility. Mobile geometry is overridden by structured modules; new mobile rules are prohibited here. |
| `motion.css` | Valuable Motion/CSS ownership contract, route announcer, geometry-neutral wrappers, touch handling, reduced-motion rules. | Mobile behavior extracted into `00-foundation.css` and `10-motion.css`. Legacy file remains temporarily for shared/desktop compatibility. |
| `production.css` | Valuable safe-area, transition, gesture, reduced-motion/transparency and production hardening mixed with old layout overrides. | Mobile hardening extracted into `00-foundation.css`, `10-motion.css`, `50-pdp.css`, and `90-accessibility.css`. Legacy file remains temporarily for shared/desktop compatibility. |
| `beverage-brand.css` | Historical beverage visual system containing both desktop and responsive declarations. | Mobile reference styling superseded by `30-home.css`, `40-catalog.css`, `50-pdp.css`, `70-editorial.css`; retained only because desktop/shared rules still depend on it. |
| `catalog-polish.css` | Catalog presentation corrections and card/media polish. | Mobile-relevant card/media behavior consolidated into `40-catalog.css`; legacy retained for shared/desktop compatibility. |
| `pdp-polish.css` | Product-detail typography/media/control polish with mixed breakpoint ownership. | Mobile behavior consolidated into `50-pdp.css`; legacy retained for shared/desktop compatibility. |
| `variant-polish.css` | Variant selector, menu and commerce-control polish. | Mobile purchase-control behavior consolidated into `50-pdp.css`/`60-commerce.css`; retained temporarily for shared/desktop compatibility. |
| `storefront-footer-template.css` | Global footer templates and responsive footer rules. | Mobile reference experience intentionally suppresses the site footer in favor of fixed mobile chrome. File remains for desktop/shared footer. |

### Mobile shell / navigation

| Previous stylesheet | Audit result | Production disposition |
| --- | --- | --- |
| `mobile-shell.css` | High-value production contract: single document scroll owner, safe-area header sizing, route transform neutralization, horizontal-rail gesture fixes, isolated drawer scrolling. | Fully migrated conceptually into `00-foundation.css`, `20-chrome.css`, and `90-accessibility.css`. Root file is retired as a mobile source. |
| `hamburger-toggle.css` | High-value SVG morph timing, dash states, focus behavior, touch hover suppression, reduced motion. | Migrated into `20-chrome.css` and `10-motion.css`. |
| `back-button.css` | Legacy mobile back-button presentation. | Current reference chrome owns back navigation in `20-chrome.css`; root source retired for mobile. |
| `mobile-navigation-drawer.css` | High-value drawer timing/easing, backdrop layering, overscroll containment and duplicate-close suppression. | Timing/easing and containment preserved in `20-chrome.css`; new reference More menu is authoritative. |
| `mobile-nav-shop.css` | Legacy expandable Shop submenu presentation. | Superseded by the reference More menu/navigation IA in `20-chrome.css`; retained only as historical source. |

### Homepage / discovery

| Previous stylesheet | Audit result | Production disposition |
| --- | --- | --- |
| `mobile-home.css` | Previous mobile hero hierarchy, CTA calibration and section spacing. | Useful responsive/interaction concepts migrated into `30-home.css`; reference mockup geometry is authoritative. |
| `mobile-home-category-polish.css` | Category image centering and compact card refinements. | Relevant image/card principles moved into `40-catalog.css`. |
| `home-category-rail.css` | Horizontal category rail behavior and touch scrolling. | Gesture/scroll behavior consolidated into `00-foundation.css`; catalog surfaces into `40-catalog.css`. |
| `mobile-category-surface-polish.css` | White category/search surfaces. | Consolidated into `40-catalog.css` and `80-overlays.css`. |

### Shop / catalog

| Previous stylesheet | Audit result | Production disposition |
| --- | --- | --- |
| `mobile-shop.css` | Major legacy category/listing layout, chips, filters, 2-column grid and product-card styling. | Consolidated into `40-catalog.css`. |
| `mobile-listing-control-icons.css` | Modern filter/sort icon dimensions, strokes and press feedback. | Consolidated into `40-catalog.css`; animation policy covered by `10-motion.css`. |
| `mobile-sort-menu.css` | High-value iOS-style sort popover, scrim, paint containment, selected state and reduced-motion handling. | Consolidated into `80-overlays.css` and `10-motion.css`. |

### Product detail

| Previous stylesheet | Audit result | Production disposition |
| --- | --- | --- |
| `mobile-product-pdp.css` | Major legacy mobile PDP layout and purchase hierarchy. | Consolidated into `50-pdp.css`. |
| `mobile-pdp-fixes.css` | Corrective PDP sizing/overflow fixes. | Valid media/overflow concepts folded into `50-pdp.css`. |
| `mobile-product-media-polish.css` | White media-stage blending, PDP cart/header polish, image containment. | Media-stage behavior consolidated into `40-catalog.css` and `50-pdp.css`; reference chrome owns cart header. |

### Commerce

| Previous stylesheet | Audit result | Production disposition |
| --- | --- | --- |
| `mobile-cart.css` | Mobile cart layout, row hierarchy, quantities, totals and CTA. | Consolidated into `60-commerce.css`. |
| `mobile-checkout-account.css` | Checkout/account form surfaces and touch-oriented control styling. | Current checkout rules consolidated into `60-commerce.css`; obsolete account styling is not carried forward because the current application no longer exposes the old account route. |
| `add-to-cart-button.css` | High-value pending spinner, sheen, success-check, cart pulse, fine-pointer hover and reduced-motion states. | Animation/state contract migrated into `10-motion.css` and `60-commerce.css`. |
| `cart-feedback-toast.css` | High-value success toast, screen-reader announcer, responsive placement and reduced-motion behavior. | Migrated into `00-foundation.css`, `10-motion.css`, and `60-commerce.css`. |

### Editorial / location / merch

| Previous stylesheet | Audit result | Production disposition |
| --- | --- | --- |
| `mobile-about.css` | Previous mobile About hero/story/value layouts and clipping fixes. | Current reference-led story presentation consolidated into `70-editorial.css`. |
| `mobile-visit.css` | Previous Visit information architecture, action controls and responsive store layout. | Useful mobile location patterns consolidated into `70-editorial.css`. |
| `mobile-visit-hero.css` | Target-specific store-image crop. | Superseded by current reference Find Us composition; image sizing now owned by `70-editorial.css`. |
| `mobile-merch.css` | Merch grid/detail sizing, horizontal controls and touch behavior. | Consolidated into `70-editorial.css`. |

### Overlays / utility UI

| Previous stylesheet | Audit result | Production disposition |
| --- | --- | --- |
| `global-search.css` | High-value body lock, blurred backdrop, surface entrance, horizontal discovery rails, result density and responsive overlay behavior. | Mobile system migrated into `80-overlays.css`; motion/reduced-motion into `10-motion.css`. |

## JSX-side mobile integrations audited

The CSS migration also accounted for the interaction contracts used by these components, even when the component is currently dormant or superseded:

- `MobileReferenceChrome.jsx` — current mobile chrome and More menu; authoritative.
- `HamburgerToggle.jsx` — morphing SVG primitive retained by `20-chrome.css`.
- `MobileSortMenuBridge.jsx` — sort overlay contract preserved by `80-overlays.css`.
- `MobileListingControlIcons.jsx` — icon presentation contract preserved by `40-catalog.css`.
- `GlobalSearchOverlay.jsx` — search overlay contract preserved by `80-overlays.css`.
- `CartInteractionFeedback.jsx` / `AddToCartButton.jsx` — visual feedback contracts preserved by `10-motion.css` and `60-commerce.css`.
- `MobileNavShopEnhancer.jsx`, `MobileAboutExperience.jsx`, `PdpHeaderCartBridge.jsx`, `HeaderUtilityToggleBridge.jsx` — previous bridge patterns audited; current reference architecture supersedes their visual ownership unless they are explicitly remounted later.

## Preserved production behaviors

The migration deliberately preserves the highest-value behavior from the previous frontend rather than merely copying visual declarations:

1. **One vertical scroll owner.** The document owns vertical scrolling; route wrappers cannot become competing scroll containers.
2. **No transformed route ancestor on mobile.** Route transforms/filters are neutralized so fixed chrome remains viewport-fixed.
3. **Native gesture chaining.** Horizontal rails do not use aggressive snap/contain rules that can capture diagonal vertical swipes.
4. **Safe-area correctness.** Header, bottom navigation, menus, pages and checkout/cart controls account for iOS safe areas.
5. **Motion ownership.** Motion components own entrance/exit/layout choreography; CSS is limited to state transitions and specialized feedback.
6. **Reduced motion/transparency.** Animation and blur are curtailed for OS accessibility preferences.
7. **Coarse-pointer behavior.** Desktop hover elevation is suppressed on touch devices.
8. **Overlay containment.** Search, sort and menus use explicit z-index tiers and isolated scrolling.
9. **Responsive calibration.** Small phones (`<=380px`) and larger mobile/tablet screens (`600–899px`) have explicit geometry adjustments.
10. **Commerce feedback.** Pending, success, cart-pulse and toast patterns remain available without reintroducing old layout ownership.

## Follow-up retirement rule

Root-level legacy files should only be deleted after their remaining desktop/shared selectors have been migrated or proven unused. Until then they may stay in the repository, but **they must never be imported as a second mobile style system**. `styles/mobile/index.css` is the sole mobile manifest.
