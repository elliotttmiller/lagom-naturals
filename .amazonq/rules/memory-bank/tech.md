# Lagom Naturals — Tech Stack

## Runtime & Language
- Node.js >= 20.19.0 (required)
- JavaScript (ESM, `"type": "module"`)
- JSX (React 19)
- No TypeScript

## Core Dependencies

| Package | Version | Role |
|---|---|---|
| `react` | 19.2.8 | UI library |
| `react-dom` | 19.2.8 | DOM renderer |
| `react-router-dom` | 7.18.3 | Client-side routing |
| `motion` | 13.2.0 | Animation (Framer Motion v11+ API) |
| `lucide-react` | 1.41.0 | Icon set |

## Dev Dependencies

| Package | Version | Role |
|---|---|---|
| `vite` | 8.2.2 | Build tool & dev server |
| `@vitejs/plugin-react` | 6.1.1 | React/JSX transform |
| `esbuild` | ^0.28.2 | Minifier |

## Build Configuration (vite.config.js)
- Output directory: `docs/` (GitHub Pages)
- Build target: `es2020`
- Sourcemaps: disabled
- CSS code splitting: enabled
- Minifier: esbuild
- Chunk size warning limit: 600 KB
- Path alias: `@` → `./src`
- Manual chunks:
  - `motion` — motion/framer-motion/motion-dom/motion-utils
  - `react` — react/react-dom/react-router
  - `icons` — lucide-react

## Scripts

```bash
npm run dev          # Vite dev server (HMR)
npm run build        # node scripts/build-pages.mjs (production)
npm run build:pages  # same as build
npm run check        # vite build (compile check only)
npm run preview      # vite preview (serve docs/)
```

## Deployment
- Static site hosted on GitHub Pages from `docs/` directory
- GitHub Actions runs `vite build` on every push to `main` for regression detection
- `public/robots.txt` and SVG logos copied to `docs/` at build time

## CSS Architecture
- Plain CSS files, no CSS-in-JS or preprocessor
- Per-feature files: `mobile-home.css`, `mobile-pdp.css`, `mobile-cart.css`, etc.
- Global design system in `app.css`, `production.css`, `desktop-responsive.css`
- Motion utilities in `motion.css`
- All CSS imported in component or entry files

## Data Layer
- `src/catalogData.js` — static JS data (no API, no CMS)
- `data/` directory — Python audit tooling (`audit.py`), YAML entity/source files, MN OCM license CSV
  - `data/requirements.txt` — Python deps for audit script
  - Not part of the React build

## Animation System
- `motionSystem.jsx` wraps `motion` library primitives
- `m.*` components (e.g., `m.div`, `m.button`) used throughout instead of raw `motion.*`
- `Presence` = `AnimatePresence`, `Reveal` = scroll-triggered reveal, `Stagger`/`StaggerItem` = staggered list animation
- Shared tokens: `motionTokens.spring`, `motionTokens.springSoft`, `motionTokens.springSnappy`, `motionTokens.tap`, `motionTokens.hover`, `motionTokens.ease`, `motionTokens.duration`
- Shared variants: `motionVariants.stagger`, `motionVariants.item`, `motionVariants.softScale`
