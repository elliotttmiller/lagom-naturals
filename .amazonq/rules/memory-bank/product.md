# Lagom Naturals — Product Overview

## Purpose
Mobile-first retail storefront for Lagom Naturals, a multi-brand cannabis dispensary in Minneapolis (North Loop). The site is a customer-facing UI/state demonstration intended to be connected to a regulated cannabis menu, inventory, age-verification, payment, and pickup platform before production use.

## Value Proposition
- Dispensary-first experience (not a single-product brand)
- "Lagom" (Swedish: just right) — balance, clarity, thoughtful curation
- Warm, editorial retail aesthetic with compact mobile density
- Guided product discovery for both new and experienced cannabis customers

## Key Features

### Shopping
- Homepage with hero, category discovery rail, featured products, trust signals, store CTA
- Product catalog with search (deferred value), category filtering, and sort (Featured / Price low / Price high)
- Product detail page (PDP) with variant/size picker, quantity control, accordion details
- Apparel & merchandise catalog with size picker (S–XXL) and color variants
- Merch detail page

### Cart & Checkout
- Persistent local cart (localStorage key: `lagom-cart-v2`)
- Cart page with quantity controls, order note, pickup summary, tax estimate (8%)
- Three-step pickup checkout (contact info → review → done)

### Account & Store
- Account page: orders, favorites, addresses, payment, rewards, settings, help
- Visit page: store address, hours, directions, phone, amenities
- About page: brand story, philosophy, principles, store gallery, CTA

### Navigation
- Mobile: hamburger drawer with focus trap and keyboard navigation
- Desktop: centered logo with split nav links (Shop, Merch | Visit, About)
- Bottom-nav pattern implied by mobile CSS modules
- Global search overlay (GlobalSearchOverlay.jsx)

## Target Users
- Adults 21+ in Minneapolis / North Loop area
- New-to-cannabis customers seeking guidance
- Returning customers browsing current inventory
- Internal: developers connecting live menu/inventory/payment APIs

## Responsible-Use Note
Commerce flows are UI demonstrations. Age/identity verification, regulated inventory, and payment must be integrated before production transactions.
