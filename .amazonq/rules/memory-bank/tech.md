# Lagom Naturals — Technology Stack

## Runtime Requirements
- Node.js >= 20.19.0
- npm (lockfile present)

## Languages
- JavaScript (ESM, `"type": "module"`)
- JSX (React)
- CSS (no preprocessor)

## Core Dependencies
| Package | Version | Role |
|---|---|---|
| react | 19.2.8 | UI framework |
| react-dom | 19.2.8 | DOM renderer |
| react-router-dom | 7.18.3 | Client-side routing |
| motion | 13.2.0 | Animation library |
| lucide-react | 1.41.0 | Icon set |

## Dev Dependencies
| Package | Version | Role |
|---|---|---|
| vite | 8.2.2 | Build tool / dev server |
| @vitejs/plugin-react | 6.1.1 | React JSX transform for Vite |
| esbuild | ^0.28.2 | JS minifier (used by Vite) |

## Vite Configuration (`vite.config.js`)
- `outDir: 'docs'` — builds to `docs/` for GitHub Pages
- `target: 'es2020'`
- `minify: 'esbuild'`
- `cssCodeSplit: true`
- `sourcemap: false`
- Manual chunks: `react` (react + react-dom + react-router), `motion`, `icons` (lucide-react)

## Development Commands
```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server (hot reload)
npm run build        # Production build → docs/
npm run build:pages  # Same as build (alias)
npm run check        # Run vite build (CI compile check)
npm run preview      # Preview production build locally
```

## PowerShell Helpers
```powershell
.\build.ps1          # Runs npm run build:pages
.\git-sync.ps1       # Git sync workflow
.\git-update.ps1     # Git update workflow
```

## Deployment
- Target: GitHub Pages (served from `docs/` on `main` branch)
- CI: GitHub Actions — runs `vite build` on every push to `main`
- SPA routing: `docs/404.html` handles client-side route fallback
- `docs/.nojekyll` disables Jekyll processing on GitHub Pages

## Browser Targets
- ES2020 (modern browsers)
- Mobile-first responsive design
- Web Share API + Clipboard API used for share functionality (graceful fallback)
