# Button

Exported from Framer using Design to AI.

## Components

- `Button`
- `Separator`
- `Separator2`
- `ArrowRight`
- `Button2`
- `Googlemaps`
- `StickyFootNote`
- `Button3`
- `Separator3`
- `Separator4`
- `ArrowRight2`
- `Button4`
- `Googlemaps2`
- `Button5`
- `Separator5`
- `Separator6`
- `ArrowRight3`
- `Button6`
- `Button7`
- `Button8`
- `Separator7`
- `Separator8`
- `ArrowRight4`
- `Button9`
- `Separator9`
- `Separator10`
- `ArrowRight5`
- `Separator11`
- `Separator12`
- `ArrowRight6`
- `ArrowRight7`
- `Button10`
- `Googlemaps3`
- `StickyFootNote2`
- `Button11`
- `Separator13`
- `Separator14`
- `ArrowRight8`
- `Button12`
- `Googlemaps4`
- `StickyFootNote3`
- `Button13`
- `Separator15`
- `Separator16`
- `ArrowRight9`
- `Button14`
- `Googlemaps5`
- `StickyFootNote4`
- `Button15`
- `Separator17`
- `Separator18`
- `ArrowRight10`
- `Button16`
- `Googlemaps6`
- `Button17`
- `Separator19`
- `Separator20`
- `ArrowRight11`
- `Button18`
- `Button19`
- `Button20`
- `Separator21`
- `Separator22`
- `ArrowRight12`
- `Button21`
- `Separator23`
- `Separator24`
- `ArrowRight13`
- `Separator25`
- `Separator26`
- `ArrowRight14`
- `Button22`
- `Googlemaps7`

## Installation

```bash
# Copy this folder to your project, then install dependencies:
npm install react react-dom framer-motion
```

## Usage

```tsx
import { Button } from './Button';

function App() {
  return <Button />;
}
```

## Responsive Components

For components with responsive variants, use the responsive runtime:

```tsx
// Import the CSS for responsive breakpoints
import './Button/_responsive-runtime.css';

// Option 1: Use the useBreakpoint hook
import { useBreakpoint } from './Button/_responsive-runtime';

function App() {
  const breakpoint = useBreakpoint(); // 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  return <Button variant={breakpoint === 'base' ? 'mobile' : 'desktop'} />;
}

// Option 2: Use the WithBreakpoints HOC
import { WithBreakpoints } from './Button/_responsive-runtime';

function App() {
  return (
    <WithBreakpoints
      Component={Button}
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
