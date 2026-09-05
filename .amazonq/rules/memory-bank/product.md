# Lagom Naturals — Product Overview

## Purpose
Mobile-first retail storefront for Lagom Naturals, a multi-brand cannabis dispensary in Minneapolis (North Loop). Provides a complete customer-facing shopping experience: browse, cart, pickup checkout, account, and store info.

## Value Proposition
- Dispensary/retailer-first positioning (not a single-product brand)
- "Lagom" (Swedish: just right) — curated, balanced cannabis retail
- Adults 21+ responsible-use experience
- UI/state demonstration ready to connect to a regulated menu, inventory, age-verification, payment, and pickup platform

## Key Features
- Homepage: hero image, category discovery, featured products, trust signals, store CTA
- Product discovery: search (deferred), category filtering, sort (Featured / Price low / Price high)
- Product detail: size selection, quantity stepper, add-to-cart
- Apparel/merch catalog with filter by type and size selection
- Functional cart: localStorage persistence, qty change, remove, subtotal + tax estimate
- Three-step pickup checkout (contact info → review → done)
- Account UI: orders, favorites, addresses, payment, rewards, settings
- Visit/store page: address, hours, directions, call CTA, amenities
- About page: brand story with editorial imagery
- Mobile bottom nav (Home / Shop / Account) + desktop top nav + slide-in drawer

## Target Users
- Cannabis consumers 21+ in Minneapolis
- Developers integrating a regulated cannabis menu/POS/payment backend

## Routes
| Path | Page |
|---|---|
| `/` | HomePage |
| `/shop` | ShopPage (search + categories) |
| `/shop?category=X` | ListingPage (filtered) |
| `/product/:id` | ProductPage |
| `/merch` | MerchPage |
| `/merch/:id` | MerchDetailPage |
| `/cart` | CartPage |
| `/checkout` | CheckoutPage |
| `/account` | AccountPage |
| `/visit` | VisitPage |
| `/about` | AboutPage |

## Data
- Products and merch are static arrays in `src/App.jsx`
- Cart state lives in React Context + `localStorage` (key: `lagom-cart-v1`)
- Images are local assets in `src/assets/` (webp + png)
