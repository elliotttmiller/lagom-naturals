# Shoes Hero Slider

Exported from Framer using Design to AI.

## Components

- `Hk97gg2qr`

## Installation

```bash
# Copy this folder to your project, then install dependencies:
npm install react react-dom framer-motion
```

## Usage

```tsx
import { Hk97gg2qr } from './Shoes Hero Slider';

function App() {
  return <Hk97gg2qr />;
}
```

## Responsive Components

For components with responsive variants, use the responsive runtime:

```tsx
// Import the CSS for responsive breakpoints
import './Shoes Hero Slider/_responsive-runtime.css';

// Option 1: Use the useBreakpoint hook
import { useBreakpoint } from './Shoes Hero Slider/_responsive-runtime';

function App() {
  const breakpoint = useBreakpoint(); // 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  return <Hk97gg2qr variant={breakpoint === 'base' ? 'mobile' : 'desktop'} />;
}

// Option 2: Use the WithBreakpoints HOC
import { WithBreakpoints } from './Shoes Hero Slider/_responsive-runtime';

function App() {
  return (
    <WithBreakpoints
      Component={Hk97gg2qr}
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
