# Lagom Naturals — Project Structure

## Directory Layout

```
lagom-naturals/
├── src/                        # All application source
│   ├── App.jsx                 # Entire page library + routing (single file)
│   ├── main.jsx                # React entry point
│   ├── catalogData.js          # Product, merch, category data
│   ├── motionSystem.jsx        # Motion primitives (m, Presence, Reveal, Stagger, tokens)
│   ├── GlobalSearchOverlay.jsx # Full-screen search overlay
│   ├── HamburgerToggle.jsx     # Accessible hamburger button (forwardRef)
│   ├── AddToCartButton.jsx     # Standalone add-to-cart button
│   ├── CartInteractionFeedback.jsx  # Toast feedback on cart add
│   ├── SiteFooter.jsx          # Footer component
│   ├── HeaderUtilityToggleBridge.jsx  # Header/utility bridge
│   ├── MobileAboutExperience.jsx      # Mobile about enhancements
│   ├── MobileListingControlIcons.jsx  # Listing filter/sort icons
│   ├── MobileNavShopEnhancer.jsx      # Mobile nav shop tab enhancer
│   ├── MobileSortMenuBridge.jsx       # Sort menu bridge
│   ├── PdpHeaderCartBridge.jsx        # PDP header cart bridge
│   ├── assets/                 # Static images (products, store, merch, desktop, mobile)
│   └── *.css                   # Per-feature CSS modules (no CSS-in-JS)
├── public/                     # Static assets served as-is (SVG logos, robots.txt)
├── docs/                       # Production build output (GitHub Pages)
├── data/                       # Data tooling (audit.py, entities.yaml, sources.yaml)
├── scripts/
│   └── build-pages.mjs         # Custom multi-page build script
├── index.html                  # Vite HTML entry
├── vite.config.js              # Vite config with alias, chunking, docs output
└── package.json
```

## Core Components & Relationships

### App.jsx (monolithic page file)
All pages and shared UI live in a single file. Key exports/internals:

| Component | Role |
|---|---|
| `CartProvider` | Context provider; reads/writes `localStorage`; exposes `add`, `change`, `remove`, `count`, `subtotal` |
| `Cart` (context) | Consumed via `useCart()` hook |
| `Header` | Desktop + mobile nav, hamburger drawer, cart badge |
| `Shell` | Layout wrapper: `Header` + `<main>` |
| `ProductCard` | Catalog card with variant picker and add-to-cart |
| `CatalogVariantPicker` | Dropdown variant selector (click-outside aware) |
| `ProductDetailsAccordion` | Accordion for PDP detail rows |
| `EmptyState` | Reusable empty/error state |
| `SectionTitle` | Section heading + "View All" link |
| `CategoryCard` | Category image card linking to filtered shop |
| `Logo` | SVG logo link to `/` |

### Page Components (all rendered via React Router `<Routes>`)
| Route | Component |
|---|---|
| `/` | `HomePage` |
| `/shop` | `ShopPage` → `ListingPage` (when category param present) |
| `/product/:id` | `ProductPage` |
| `/merch` | `MerchPage` |
| `/merch/:id` | `MerchDetailPage` |
| `/cart` | `CartPage` |
| `/checkout` | `CheckoutPage` |
| `/account` | `AccountPage` |
| `/visit` | `VisitPage` |
| `/about` | `AboutPage` |
| `*` | `NotFoundPage` |

### catalogData.js
Exports: `products`, `merch`, `categoryCards`, `categoryImages`
- `products`: array of cannabis product objects `{ id, name, brand, category, type, strength, weight, price, image, rating, reviews, variants? }`
- `merch`: array of apparel objects `{ id, name, type, color, price, image }`
- `categoryCards`: `[name, label][]` pairs for category grid
- `categoryImages`: `{ [categoryName]: imageUrl }` map

### motionSystem.jsx
Exports: `m` (motion-wrapped elements), `Presence`, `Reveal`, `Stagger`, `StaggerItem`, `motionTokens`, `motionVariants`
- `motionTokens`: shared easing, duration, spring, hover, tap values
- `motionVariants`: `stagger`, `item`, `softScale` variant objects

## Architectural Patterns

- Single-file page library: all pages in `App.jsx` — fast iteration, no code-splitting per page
- CSS co-location: each feature has a paired `*.css` file imported globally or per component
- Context + localStorage for cart state (no external state library)
- `useMemo` + `useDeferredValue` for search and filter performance
- `layoutId` on product images for shared-element transitions between catalog and PDP
- Vite manual chunks: `react`, `motion`, `icons` vendor bundles
- Build output to `docs/` for GitHub Pages deployment
- `@` alias maps to `src/`
