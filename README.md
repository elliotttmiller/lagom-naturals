# Lagom Naturals

## GitHub Pages production build

Run `npm run build` from the repository root. It updates the optimized storefront
images once, then builds the static site, route pages, sitemap, and fallback page
into `docs/`. `npm run build:pages` remains an alias for the same build.

On Windows, `./build.ps1` runs the same production command. GitHub Pages must
publish the repository's `docs/` folder for the generated site to be deployed.

Set `GITHUB_PAGES_BASE` to override the default `/lagom-naturals/` asset path.
Set `SITE_ORIGIN` to override the default `https://lagomnaturals.com` canonical
and sitemap origin.

## Image maintenance

- `npm run images:check` checks whether responsive derivatives are current.
- `npm run images:optimize` regenerates stale derivatives and the image manifest.
- `npm run images:rebuild` forces regeneration of every configured derivative.
- `npm run audit:assets` reports oversized source raster assets.
