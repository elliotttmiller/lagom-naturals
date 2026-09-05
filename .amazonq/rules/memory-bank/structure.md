# Lagom Naturals — Project Structure

## Directory Layout
```
lagom-naturals/
├── src/
│   ├── App.jsx              # Entire app: all pages, components, data, routing
│   ├── main.jsx             # React entry point, BrowserRouter
│   ├── motionSystem.jsx     # Motion/animation primitives and tokens
│   ├── styles.css           # Core design system (variables, base, layout)
│   ├── ui-system.css        # Component-level styles (cards, buttons, forms)
│   ├── responsive.css       # Breakpoint overrides
│   ├── desktop-polish.css   # Desktop-specific refinements
│   ├── mobile-polish.css    # Mobile-specific refinements
│   ├── motion.css           # CSS animation helpers
│   ├── production.css       # Production overrides / print
│   └── assets/              # Static images (webp store photos, png products)
├── public/
│   ├── lagom-logo.svg       # SVG logo (served at /lagom-logo.svg)
│   └── robots.txt
├── docs/                    # Vite build output (GitHub Pages deployment target)
├── scripts/
│   └── build-pages.mjs      # Custom build script (wraps vite build)
├── .amazonq/rules/memory-bank/  # Memory Bank documentation
├── index.html               # Vite HTML entry
├── vite.config.js           # Vite config (chunks, outDir: docs)
├── package.json
├── build.ps1                # PowerShell build shortcut
├── git-sync.ps1             # Git sync helper
└── git-update.ps1           # Git update helper
```

## Architecture Patterns

### Single-file App
All pages, components, data, and context live in `src/App.jsx`. No separate page files or component folders. This is intentional for a small storefront demo.

### Component Hierarchy
```
App (CartProvider)
└── Routes
    ├── Shell (Header + main + MobileNav)
    │   ├── Header (desktop nav, drawer, cart icon)
    │   └── MobileNav (bottom tab bar)
    └── [Page components] → use Shell as layout wrapper
```

### State Management
- Cart: React Context (`Cart`) + `useState` + `localStorage` persistence
- UI state (filters, qty, open/close): local `useState` per component
- No external state library (Redux, Zustand, etc.)

### Motion System (`motionSystem.jsx`)
Exports a thin wrapper around the `motion` library:
- `m` — motion-enabled HTML/SVG elements
- `Presence` — AnimatePresence wrapper
- `Reveal` — scroll-triggered fade-in
- `Stagger` / `StaggerItem` — staggered list animations
- `motionTokens` — shared duration, easing, spring configs
- `motionVariants` — reusable variant objects (stagger, item, softScale)

### CSS Architecture
Multiple CSS files imported in `main.jsx`, layered by concern:
1. `styles.css` — CSS custom properties, reset, typography, layout primitives
2. `ui-system.css` — component classes
3. `responsive.css` — media queries
4. `desktop-polish.css` / `mobile-polish.css` — platform polish
5. `motion.css` — animation utilities
6. `production.css` — final overrides

### Build & Deployment
- `vite build` outputs to `docs/` for GitHub Pages
- Manual chunks: `react`, `motion`, `icons` vendor splits
- `scripts/build-pages.mjs` wraps the Vite build
- `build.ps1` runs `npm run build:pages`
- CI: GitHub Actions runs `vite build` on every push to `main`
