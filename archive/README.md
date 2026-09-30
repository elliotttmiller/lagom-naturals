# Asset archive

This directory preserves source assets that have no active runtime consumer.

- `assets/products-originals/` contains the legacy product-source PNGs formerly located at `src/assets/products/originals/`.
- `assets/products-unclassified/` contains unreferenced product-root assets retained pending future curation; they have no active source or generated-output consumer.
- These files are retained for provenance and future art-direction work. They are not deployable storefront assets.
- Storefront delivery assets must be generated from `src/assets/products/enhanced/` by `npm run images:optimize`; do not import archived files into application code.

Before restoring an archived asset, add it to an owned source collection, run the optimizer, update its consumer, and verify the production build.
