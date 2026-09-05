# Lagom Naturals — Development Guidelines

## Code Style

### Formatting
- Minified/compact JSX: no blank lines between statements, no unnecessary whitespace inside JSX
- Single-line component definitions are common for small presentational components
- Arrow functions for all components and helpers
- No semicolons at end of statements inside JSX expressions (relies on ASI)
- Imports are grouped: React → router → icons → internal modules → assets

### Naming
- Components: PascalCase (`ProductCard`, `CartProvider`, `MobileNav`)
- Hooks/context: camelCase (`useCart`, `readCart`)
- CSS classes: kebab-case (`product-card`, `cart-row`, `primary-bar`)
- Constants: camelCase for objects/arrays (`motionTokens`, `motionVariants`, `categoryCards`)
- Asset imports: camelCase descriptive names (`lemonade24k`, `mainstreetHoodie`)
- localStorage keys: namespaced strings (`lagom-cart-v1`, `lagom-age-verified`)

### Component Patterns
- Functional components only — no class components (except `AppErrorBoundary`)
- Props destructured inline: `function Shell({children, detail=false, noNav=false})`
- Default prop values set in destructuring, not separately
- Short-circuit rendering: `{condition && <Component/>}`
- Ternary for two-branch renders: `{detail ? <BackButton/> : <MenuButton/>}`

---

## Motion System Usage

All animation uses the custom `motionSystem.jsx` abstraction. Never import directly from `motion/react` in `App.jsx`.

### Imports
```js
import { m, Presence, Reveal, Stagger, StaggerItem, motionTokens, motionVariants } from './motionSystem'
```

### Primitives
- `m.div`, `m.button`, `m.header`, `m.img`, etc. — motion-enabled elements
- `Presence` — wraps conditionally rendered elements for exit animations
- `Reveal` — scroll-triggered fade-up for sections
- `Stagger` / `StaggerItem` — staggered list entry animations

### Token Usage
```jsx
// Tap feedback on interactive elements
<m.button whileTap={motionTokens.tap}>...</m.button>

// Hover lift
<m.div whileHover={motionTokens.hover}>...</m.div>

// Spring transitions
<m.img transition={motionTokens.springSoft}/>
<m.div transition={motionTokens.springSnappy}/>

// Duration values
transition={{ duration: motionTokens.duration.fast }}   // 0.16s
transition={{ duration: motionTokens.duration.base }}   // 0.28s
transition={{ duration: motionTokens.duration.slow }}   // 0.46s
transition={{ duration: motionTokens.duration.cinematic }} // 0.68s
```

### Variant Usage
```jsx
// Stagger parent + item children
<m.div initial="hidden" animate="visible" variants={motionVariants.stagger}>
  <m.div variants={motionVariants.item}>...</m.div>
</m.div>

// Soft scale entrance
<m.div initial="hidden" animate="visible" variants={motionVariants.softScale}/>
```

### Reduced Motion
- `AppMotionProvider` sets `MotionConfig reducedMotion="user"` globally
- Components that need explicit control use `useReducedMotion()` hook
- Pattern: `initial={reduceMotion ? false : 'hidden'}`

### Shared Layout Animations
- Use `layoutId` for shared element transitions between routes: `layoutId={\`catalog-image-${p.id}\`}`
- Use `layout` or `layout="position"` on elements that shift position

---

## Cart Context

### API
```js
const { items, add, change, remove, count, subtotal } = useCart()
```

- `add(item, quantity?)` — adds item; ignores items with `price == null`
- `change(id, qty)` — updates qty; removes if qty <= 0
- `remove(id)` — removes item
- `count` — total item count (sum of qty)
- `subtotal` — total price (sum of price × qty)

### Persistence
- Serialized to `localStorage` key `lagom-cart-v1`
- Only `{id, qty, weight, brand, category}` are persisted; full item data is re-hydrated from the `products`/`merch` arrays on load
- Items with `price == null` are filtered out on read

---

## Routing

### Route Structure
```jsx
<CartProvider>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/shop" element={<ShopPage/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>
    <Route path="/merch" element={<MerchPage/>}/>
    <Route path="/merch/:id" element={<MerchDetailPage/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/account" element={<AccountPage/>}/>
    <Route path="/visit" element={<VisitPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Routes>
</CartProvider>
```

- Category filtering uses query params: `/shop?category=Edibles`
- `ShopPage` reads `?category` and delegates to `ListingPage` component
- Route transitions handled by `RouteMotion` in `main.jsx`

---

## Shell Layout

Every page wraps content in `Shell`:
```jsx
<Shell>           // standard page with mobile nav
<Shell detail>    // detail page: back button, share/save icons, no cart icon
<Shell noNav>     // no mobile bottom nav (used on HomePage)
```

---

## CSS Conventions

### Design Tokens (CSS custom properties)
```css
--green: #004c34    /* primary brand color */
--ink: #111510      /* body text */
--muted: #666c66    /* secondary text */
--line: #dedfd9     /* borders */
--soft: #f5f4ef     /* soft background */
--cream: #faf9f4    /* page background variant */
--radius: 10px      /* default border radius */
--serif: ...        /* display/heading font */
--sans: ...         /* body font */
```

### Layout Patterns
- Mobile-first: base styles target mobile, `@media(min-width:700px)` for tablet, `@media(min-width:1024px)` for desktop
- Page containers: `max-width: 1180px; margin: auto; padding: 10px 20px`
- Grids: CSS Grid throughout (`grid-template-columns`, `repeat()`)
- Sticky header: `position: sticky; top: 0; z-index: 50`
- Fixed mobile nav: `position: fixed; bottom: 0; z-index: 55`

### Class Naming
- Page wrapper: `.[page-name]-page` (e.g., `.cart-page`, `.merch-page`)
- Component: descriptive kebab-case (`.product-card`, `.cart-row`, `.primary-bar`)
- State modifier: `.active` class toggled via ternary in JSX
- Utility: `.primary-bar` (full-width green CTA button), `.linkbar` (link styled as primary-bar)

---

## Accessibility Patterns

- All icon buttons have `aria-label`
- Mobile nav drawer: `role="dialog"`, `aria-modal="true"`, `aria-label`, focus trap, Escape key handler, scroll lock
- Cart icon: dynamic `aria-label` with count (`Cart, 2 items`)
- Quantity buttons: `aria-label="Increase quantity"` / `aria-label="Decrease quantity"`
- Route announcer: `<div role="status" aria-live="polite">` updates on navigation
- Age gate: `role="dialog"`, `aria-modal="true"`, `autoFocus` on confirm button
- Images: meaningful `alt` text on product/store images; `alt=""` on decorative images

---

## Performance Patterns

- `useDeferredValue` for search input to avoid blocking renders
- `useMemo` for filtered/sorted product lists
- `loading="lazy" decoding="async"` on below-fold images
- `fetchPriority="high"` on hero/LCP images
- `LazyMotion` with `domAnimation` features only (no full motion bundle)
- Vendor chunk splitting: `react`, `motion`, `icons` chunks in Vite config

---

## Build & Deployment

- Output dir is `docs/` (not `dist/`) for GitHub Pages
- `scripts/build-pages.mjs` handles: clean → vite build → normalize public URLs → copy `404.html` → write `.nojekyll`
- Base URL is `/lagom-naturals/` by default; override with `GITHUB_PAGES_BASE` env var
- `npm run check` (alias: `vite build`) is used for CI compile verification
- SPA fallback: `docs/404.html` is a copy of `index.html`

---

## Data Patterns

- Static product/merch arrays defined at module level in `App.jsx`
- Product shape: `{id, brand, name, category, price, strength, type, rating, reviews, weight, image}`
- Merch shape: `{id, name, price, type, color, image}`
- `price: null` means "in-store only" — these items cannot be added to cart
- IDs are URL-safe slugs matching route params (e.g., `'24k-lemonade'` → `/product/24k-lemonade`)
