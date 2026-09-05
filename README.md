# Lagom Naturals

Mobile-first responsive storefront experience for Lagom Naturals, a multi-brand cannabis dispensary in Minneapolis.

## Experience

The site implements a complete customer-facing page library inspired by the supplied Lagom mobile mockups:

- Homepage with image-led dispensary hero, category discovery, featured products, trust signals, and store CTA
- Product discovery with search, category filtering, and sorting
- Product detail with size and quantity states
- Apparel and merchandise catalog
- Functional local cart interactions
- Three-step pickup checkout experience
- Account, orders, favorites, rewards, and settings UI
- North Loop store / visit page
- About page and brand story
- Mobile navigation and desktop navigation systems

Lagom is positioned throughout as a **dispensary / retailer first**, not as a single-product cannabis brand.

## Stack

- React
- React Router
- Vite
- Lucide icons
- Responsive CSS design system

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Design direction

The interface uses the supplied mobile page library as the primary UX reference: compact retail density, warm neutral surfaces, restrained Lagom green, editorial serif display typography, highly scannable product grids, image-led store storytelling, and a three-destination mobile bottom navigation.

The project includes a vectorized Lagom Naturals logo treatment and uses Lagom storefront imagery hosted by the existing Lagom web properties for the live experience.

## Quality assurance

Every push to `main` runs the production Vite build in GitHub Actions so dependency or compile regressions are visible immediately.

## Responsible-use note

The customer-facing experience is intended for adults 21+ and includes responsible-use language. Commerce flows in this repository are UI/state demonstrations and should be connected to the chosen regulated cannabis menu, inventory, identity/age verification, payment, and pickup platform before production transactions are enabled.
