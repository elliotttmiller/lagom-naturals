# Lagom Naturals — Development Guidelines

## Code Quality Standards

### Formatting & Style
- No semicolons in JSX/JS files (App.jsx, catalogData.js, GlobalSearchOverlay.jsx)
- Single quotes for strings throughout JS/JSX
- Compact, dense JSX — entire page components written as single expressions with minimal line breaks
- Imports are tightly packed with no blank lines between import groups
- Arrow functions preferred for all component and utility definitions
- No explicit `return` in single-expression arrow function components

### Naming Conventions
- Components: PascalCase (`ProductCard`, `CatalogVariantPicker`, `GlobalSearchOverlay`)
- Hooks: camelCase with `use` prefix (`useCart`, `useReducedMotion`)
- Constants: SCREAMING_SNAKE_CASE for module-level config (`CART_KEY`, `MENU_DURATION`, `APPAREL_SIZES`)
- Data helpers: camelCase verbs (`withVariants`, `mockProduct`, `catalogProduct`, `roundPrice`)
- CSS classes: BEM-style with double underscores for elements (`global-search__head`, `global-search__input-wrap`)
- Event handler variables: descriptive verbs (`openDrawer`, `closeDrawer`, `goProduct`, `goCategory`)
- Route paths: kebab-case (`/product/:id`, `/merch/:id`)

### File Organization
- One CSS file per feature, named to match the feature (`mobile-cart.css`, `global-search.css`, `add-to-cart-button.css`)
- Bridge/enhancer components for cross-cutting concerns (`HeaderUtilityToggleBridge.jsx`, `MobileNavShopEnhancer.jsx`, `PdpHeaderCartBridge.jsx`)
- All page-level components in `App.jsx`; standalone utility components in their own files

---

## React Patterns

### State Management
- `createContext` + `useContext` for cart state — no external state library
- `useState` initializer function for expensive reads: `useState(readCart)` (not `useState(readCart())`)
- `useMemo` for all derived/filtered/sorted lists — always include correct dependency arrays
- `useDeferredValue` for search input to avoid blocking renders
- `useRef` for DOM references (focus management, click-outside detection, timers)
- `useEffect` cleanup always returns a cleanup function when adding event listeners or timers

### Component Patterns
- Shared layout wrapper: `<Shell detail={bool}>` wraps every page
- `EmptyState` component for all empty/error/not-found states — always provide `title`, `body`, `to`, `action`
- `SectionTitle` for all section headings with "View All" links
- Variant/size state always initialized from `variants[0]?.id`, reset via `useEffect` when `p.id` changes
- Cart key format: `${item.id}:${variantId}` — always use `cartKey` for identity, never `id` alone

### Data Helpers (catalogData.js)
- `withVariants(product)` — wraps any product to ensure `variants[]` array exists
- `mockProduct(product)` — adds `preview:true`, `mock:true`, `rating:4.8`, `reviews:42`, then calls `withVariants`
- `catalogProduct(product)` — calls `withVariants` directly (for real/live products)
- `roundPrice(value)` — `Math.round(value * 100) / 100` for price arithmetic
- `secondVariantByCategory` map drives auto-generated second variant for mock products

### Event Handling
- Custom window events for cross-component communication: `lagom:toggle-global-search`, `lagom:open-global-search`, `lagom:close-global-search`
- Dispatch pattern: `window.dispatchEvent(new CustomEvent('lagom:open-global-search'))`
- Click-outside: `document.addEventListener('pointerdown', handler)` (not `mousedown`)
- Keyboard: always handle `Escape` for overlays/drawers; handle `Tab` for focus trapping in modals

### Accessibility
- All interactive elements have `aria-label` when icon-only
- Drawers/overlays: `role="dialog"`, `aria-modal="true"`, `aria-label` or `aria-labelledby`
- Focus trap in navigation drawer: manually implemented with `querySelectorAll` focusable selector
- `document.body.style.overflow = 'hidden'` when any overlay/drawer is open; always restore on cleanup
- `aria-expanded` on trigger buttons for drawers and variant pickers
- `aria-live="polite"` on search result lists
- `useReducedMotion()` checked in all animation-heavy components; skip or reduce animations when true

---

## Animation System (motionSystem.jsx)

### Always use the abstraction layer — never import directly from `motion/react` in page components
```js
// Correct
import { m, Presence, Reveal, Stagger, StaggerItem, motionTokens, motionVariants } from './motionSystem'

// Wrong — do not use in App.jsx or page components
import { motion, AnimatePresence } from 'motion/react'
```

### Token usage
```js
// Spring transitions
transition={motionTokens.spring}        // default spring
transition={motionTokens.springSoft}    // gentle, for images/cards
transition={motionTokens.springSnappy}  // fast, for small UI elements

// Hover / tap
whileHover={motionTokens.hover}   // { y: -3, scale: 1.004 }
whileTap={motionTokens.tap}       // { scale: 0.985 }

// Duration (use with ease)
transition={{ duration: motionTokens.duration.base, ease: motionTokens.ease }}
```

### Variant usage
```js
// Staggered list
<Stagger className="product-grid">
  {items.map(item => <StaggerItem key={item.id}><ProductCard p={item}/></StaggerItem>)}
</Stagger>

// Scroll reveal
<Reveal className="mobile-section">
  <SectionTitle title="Featured Products"/>
</Reveal>

// Presence (exit animations)
<Presence mode="popLayout">
  {open && <m.div key="panel" initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-4}}>...</m.div>}
</Presence>
```

### Shared-element transitions (layoutId)
- Product images use `layoutId={`catalog-image-${p.id}`}` on both catalog card and PDP for smooth transitions
- Always pair with `transition={motionTokens.springSoft}`

---

## CSS Conventions

### Class naming
- BEM double-underscore for elements: `.global-search__head`, `.cart-summary__eyebrow`
- State modifiers with `is-` prefix: `.is-open`, `.is-variant-open`
- Modifier classes with `--` suffix: `.global-search--searching`

### Responsive approach
- Mobile-first: base styles target mobile, `desktop-responsive.css` adds breakpoints
- Separate CSS files per surface: `mobile-home.css`, `mobile-pdp.css`, `mobile-cart.css`, etc.
- `production.css` for global production overrides

---

## Python (data/audit.py)

### Patterns (separate from React build — not imported by Vite)
- `@dataclass` for structured output (`Evidence`)
- `from __future__ import annotations` at top of every file
- Type hints on all function signatures
- `Path` (pathlib) for all file operations — never `os.path`
- Retry loops with exponential backoff for HTTP requests (3 attempts, `1.5 * (attempt + 1)` delay)
- `robots.txt` compliance checked before every fetch
- Fuzzy matching via `rapidfuzz.fuzz.partial_ratio` with configurable `min_score` (default 78)
- Deduplication: dict keyed by `(source_id, location, raw_text, matched_term, classification)`
- Output: CSV (utf-8-sig for Excel compatibility) + JSON

---

## Build & Deployment

- Build output goes to `docs/` — never commit build artifacts to `src/`
- `npm run check` (alias: `vite build`) used for CI compile checks
- `npm run build` runs `scripts/build-pages.mjs` for full production output
- `@` path alias resolves to `src/` — always use `@/assets/...` for asset imports, never relative `../../`
- Manual chunks defined in `vite.config.js` — do not add new large dependencies without updating `manualChunks`
- GitHub Actions runs on every push to `main`; build failures are regressions

---

## Common Idioms

```js
// Price display — always toFixed(2)
${selected.price.toFixed(2)}

// Conditional className
className={`product-card${variantOpen ? ' is-variant-open' : ''}`}

// Cart key construction
const cartKey = `${item.id}:${item.variantId || item.weight || 'default'}`

// Normalize search query
const normalized = query.trim().toLowerCase()

// Filter products
products.filter(p =>
  `${p.brand} ${p.name} ${p.category} ${p.type} ${p.strength}`.toLowerCase().includes(query)
)

// Quantity guard
Math.max(1, Number(qty) || 1)

// Encode category for URL
`/shop?category=${encodeURIComponent(name)}`
```
