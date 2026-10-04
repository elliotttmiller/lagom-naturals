# Development and build artifacts

## Image sources and derivatives

- Keep approved image masters in their owning source directories, including `data/ui/` and `src/assets/`.
- Run `npm run images:optimize` after changing an image master or the configured image groups in `scripts/optimize-storefront-images.mjs`.
- The optimizer writes responsive AVIF/WebP delivery files under `src/assets/optimized/`, plus the generated import map at `src/generated/responsiveImages.js` and its manifest. These outputs are consumed by the app and are part of the source checkout.
- Run `npm run images:check` for a read-only check. It reports stale or missing derivatives without rewriting files.
- Do not copy generated derivatives into source directories. The production bundler emits its own hashed delivery copies.

## Build outputs

- Run `npm run check` for a Vite compile check. It writes to ignored `tmp/vite-check/`, clearing that directory on each run. It never writes to or cleans `docs/`.
- Run `npm run build:pages` when refreshing the GitHub Pages site. This is the only routine command that writes deployable static output to `docs/`; it deliberately cleans and recreates that directory, including route pages, hashed assets, sitemap, and fallback document.
- `build.ps1` first checks that responsive image derivatives match their masters, then runs the production Pages build. If the image check fails, run `npm run images:optimize` and review the generated changes before building.
- After a production build, inspect `git status --short` and review changes under `docs/` as build output. Do not run the verification build as a substitute for the Pages build or commit verification output.

## Git workflow boundary

Build and image scripts do not stage, commit, fetch, pull, or push source changes. Review and stage intended source and generated files explicitly. Avoid `git add .` and force-push workflows; generated site output should be synchronized through the normal branch history.
