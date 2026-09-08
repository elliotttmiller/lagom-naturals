# Lagom storefront styles

`index.css` is the only global stylesheet entry imported by `src/main.jsx`.

- `tokens.css` — shared color, type, spacing, radius, elevation, and motion primitives.
- `desktop.css` — authoritative desktop system at `min-width: 900px`.
- `mobile.css` — mobile compatibility bundle below 900px.
- `legacy-core.css` — temporary compatibility imports for global/component rules that have not yet been migrated. New desktop rules must not be added here.

## Ownership rules

1. Do not add new global CSS imports to `main.jsx`; add them to this library.
2. Desktop layout/visual rules belong in `desktop.css` until split into stable page/component modules.
3. Mobile rules remain isolated from desktop rules.
4. Avoid `!important` except when neutralizing an unavoidable legacy contract.
5. Do not create new root-level `desktop-*.css` or ad-hoc polish files.
6. Prefer shared tokens over repeated literal values.
7. The homepage desktop hero uses `src/assets/desktop/hero.png` as a complete art-directed composition; do not layer catalog product thumbnails over that image.
