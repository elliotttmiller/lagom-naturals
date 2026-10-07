# Storefront image assets

## Ownership

- Keep authored source images in their current semantic folders under `src/assets/` or in the campaign/source library under `data/ui/`. These are masters; do not replace them with delivery derivatives.
- `src/assets/optimized/` is generated output. Do not edit files there by hand. `scripts/optimize-storefront-images.mjs` owns its allowlisted source map, widths, encoding settings, generated manifest, and `src/generated/responsiveImages.js` registry.
- Use `ResponsiveImage` for registered content images and provide a truthful `sizes` value for the rendered layout. For art-directed compositions, use `<picture>` with the registered AVIF/WebP `srcSet` values and the appropriate mobile/desktop media conditions.
- CSS background artwork should use a CSS `image-set()` with optimized sources and an explicit format fallback. Keep layout sizing/cropping in CSS so image delivery and presentation remain separate.

## Synchronization

- `npm run images:optimize` creates missing or changed variants and updates the generated registry and manifest.
- `npm run images:check` verifies source fingerprints, output formats and pixel widths, obsolete derivative pruning, and registry/manifest synchronization.
- Source width descriptors are clamped and deduplicated to the real oriented source width. Do not list an upscaled derivative as a wider `w` candidate.
- Cloud atmosphere cutouts currently use `npm run images:clouds` because their hand-selected transparent layers have distinct target widths and CSS placements. Their PNG masters remain in `data/ui/clouds-pack/`.

## Responsive rendering

Use width-descriptor `srcset` values with a `sizes` expression that reflects the CSS slot at each breakpoint. Preserve intrinsic aspect ratio or specify dimensions/aspect ratio at the layout owner to avoid layout shift. Use `object-fit` only to express intentional crop behavior; keep text baked into campaign artwork fully visible when the composition requires it. Lazy-load below-the-fold media; prioritize only the actual above-the-fold lead image.
