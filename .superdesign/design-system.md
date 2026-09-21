# Lagom Naturals product-card footer direction

Use the existing Lagom Naturals visual system only: a premium, adult, THC-beverage lifestyle brand with packaging-led photography and restrained charcoal glass. No cannabis motifs, neon green, new fonts, or generic SaaS controls.

## Existing product-card contract

- Portrait card, 3:4 desktop aspect, 24px rounded corners, clipped image.
- Full-bleed beverage photography is primary.
- The footer is one dark charcoal lower information shelf with a diagonal top edge, created with `clip-path: polygon(0 20%,100% 0,100% 100%,0 100%)`.
- Shelf copy is white: brand/context, product name, price, then commerce controls.
- Product facts, price, variant picker, and add-to-cart remain legible and keyboard-operable.

## Requested restyle

Render only the darker charcoal diagonal footer sheet. It may retain its subtle blur for the photographed content behind it, but must have no lighter translucent horizontal band, no white screen-blend sheen, no top inset highlight, and no added extra footer container. Preserve content hierarchy, card dimensions, contrast, button touch targets, and the existing image.

## PDP product-information architecture

Replace the generic `Product Details` identity grid (brand, category, format, package size, flavor) with utility-led, beverage-native disclosure groups. Do not repeat the H1, package selection, can volume, flavor, brand, category, or format in an accordion.

- Keep one short PDP fact line: THC dosage only, using its factual scope (`10 mg THC per can`).
- The product description is an editorial flavor statement only; do not repeat dosage, can volume, sugar, carbs, or calories.
- The details area should be ordered: `What's inside` (ingredients only when data exists), `Nutrition` (calories, sugar, carbs, dietary facts), `THC information` (dose only when not already required in an expanded legal disclosure), and `Enjoy responsibly` (plain responsible-use copy).
- Do not render empty groups, repeated headings, identity facts, or a generic/placeholder label.
- Potency should remain immediately understandable and unambiguous, not buried, but should render from one authoritative data field rather than duplicated in the heading, description, identity grid, and accordion.
