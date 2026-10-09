# Pre-Loading

Exported from Framer using Design to AI.

## Components

- `Pre`
- `ButtonMain`
- `Svgdrawonscroll1`
- `Svgdrawonscroll12`
- `ScrollText`
- `ButtonMain2`
- `Title`
- `KeyFeaturedCard`
- `KeyFeaturedCard2`
- `KeyFeaturedCard3`
- `KeyFeaturedCard4`
- `Bg`
- `Textrevealscroll`
- `ProductCard`
- `ProductCard2`
- `ProductCard3`
- `ButtonMain3`
- `Pre2`
- `ButtonMain4`
- `Svgdrawonscroll13`
- `Svgdrawonscroll14`
- `ScrollText2`
- `ButtonMain5`
- `Title2`
- `KeyFeaturedCard5`
- `KeyFeaturedCard6`
- `KeyFeaturedCard7`
- `KeyFeaturedCard8`
- `Bg2`
- `Textrevealscroll2`
- `ProductCard4`
- `ProductCard5`
- `ProductCard6`
- `ButtonMain6`
- `Pre3`
- `ButtonMain7`
- `Svgdrawonscroll15`
- `Svgdrawonscroll16`
- `ScrollText3`
- `ButtonMain8`
- `Title3`
- `KeyFeaturedCard9`
- `KeyFeaturedCard10`
- `KeyFeaturedCard11`
- `KeyFeaturedCard12`
- `Bg3`
- `Textrevealscroll3`
- `ProductCard7`
- `ProductCard8`
- `ProductCard9`
- `ButtonMain9`
- `Pre4`
- `ButtonMain10`
- `Svgdrawonscroll17`
- `Svgdrawonscroll18`
- `ScrollText4`
- `ButtonMain11`
- `Title4`
- `KeyFeaturedCard13`
- `KeyFeaturedCard14`
- `KeyFeaturedCard15`
- `KeyFeaturedCard16`
- `Bg4`
- `Textrevealscroll4`
- `ProductCard10`
- `ProductCard11`
- `ProductCard12`
- `ButtonMain12`
- `Pre5`
- `ButtonMain13`
- `Svgdrawonscroll19`
- `Svgdrawonscroll110`
- `ScrollText5`
- `ButtonMain14`
- `Title5`
- `KeyFeaturedCard17`
- `KeyFeaturedCard18`
- `KeyFeaturedCard19`
- `KeyFeaturedCard20`
- `Bg5`
- `Textrevealscroll5`
- `ProductCard13`
- `ProductCard14`
- `ProductCard15`
- `ButtonMain15`
- `Pre6`
- `ButtonMain16`
- `Svgdrawonscroll111`
- `Svgdrawonscroll112`
- `ScrollText6`
- `ButtonMain17`
- `Title6`
- `KeyFeaturedCard21`
- `KeyFeaturedCard22`
- `KeyFeaturedCard23`
- `KeyFeaturedCard24`
- `Bg6`
- `Textrevealscroll6`
- `ProductCard16`
- `ProductCard17`
- `ProductCard18`
- `ButtonMain18`

## Installation

```bash
# Copy this folder to your project, then install dependencies:
npm install react react-dom framer-motion gsap@3.11.3 split-type@0.3.4
```

## Usage

```tsx
import { Pre } from './Pre-Loading';

function App() {
  return <Pre />;
}
```

## Responsive Components

For components with responsive variants, use the responsive runtime:

```tsx
// Import the CSS for responsive breakpoints
import './Pre-Loading/_responsive-runtime.css';

// Option 1: Use the useBreakpoint hook
import { useBreakpoint } from './Pre-Loading/_responsive-runtime';

function App() {
  const breakpoint = useBreakpoint(); // 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  return <Pre variant={breakpoint === 'base' ? 'mobile' : 'desktop'} />;
}

// Option 2: Use the WithBreakpoints HOC
import { WithBreakpoints } from './Pre-Loading/_responsive-runtime';

function App() {
  return (
    <WithBreakpoints
      Component={Pre}
      variants={{
        base: 'mobile',    // 0px+
        md: 'tablet',      // 768px+
        lg: 'desktop'      // 1024px+
      }}
    />
  );
}
```

### Breakpoints

| Name | Min Width | Typical Use |
|------|-----------|-------------|
| base | 0px | Mobile |
| sm | 390px | Large mobile |
| md | 768px | Tablet |
| lg | 1024px | Laptop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Large desktop |

## Peer Dependencies

These components require the following packages in your project:

- `react` >= 18.0.0
- `react-dom` >= 18.0.0
- `framer-motion` >= 10.0.0

## Note

The Framer runtime is bundled as `_framer-runtime.js` - no external Framer dependency needed.
These exports are self-contained and work out of the box.

## Generated

Created with [Design to AI](https://designtoai.com)
