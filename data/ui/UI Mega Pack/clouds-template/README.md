# Hero Countdown

Exported from Framer using Design to AI.

## Components

- `Countdown`
- `Liveclouds`
- `Ud0etfbk`
- `Nz7hvacwu`
- `Qdc8M4bs`
- `Stickygridgallery`
- `Waitlist`
- `Countdown2`
- `Liveclouds2`
- `Ud0etfbk2`
- `Nz7hvacwu2`
- `Qdc8M4bs2`
- `Stickygridgallery2`
- `Waitlist2`
- `Countdown3`
- `Liveclouds3`
- `Ud0etfbk3`
- `Nz7hvacwu3`
- `Qdc8M4bs3`
- `Stickygridgallery3`
- `Waitlist3`
- `Countdown4`
- `Liveclouds4`
- `Ud0etfbk4`
- `Nz7hvacwu4`
- `Qdc8M4bs4`
- `Stickygridgallery4`
- `Waitlist4`
- `Countdown5`
- `Liveclouds5`
- `Ud0etfbk5`
- `Nz7hvacwu5`
- `Qdc8M4bs5`
- `Stickygridgallery5`
- `Waitlist5`
- `Countdown6`
- `Liveclouds6`
- `Ud0etfbk6`
- `Nz7hvacwu6`
- `Qdc8M4bs6`
- `Stickygridgallery6`
- `Waitlist6`

## Installation

```bash
# Copy this folder to your project, then install dependencies:
npm install react react-dom framer-motion
```

## Usage

```tsx
import { Countdown } from './Hero Countdown';

function App() {
  return <Countdown />;
}
```

## Responsive Components

For components with responsive variants, use the responsive runtime:

```tsx
// Import the CSS for responsive breakpoints
import './Hero Countdown/_responsive-runtime.css';

// Option 1: Use the useBreakpoint hook
import { useBreakpoint } from './Hero Countdown/_responsive-runtime';

function App() {
  const breakpoint = useBreakpoint(); // 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  return <Countdown variant={breakpoint === 'base' ? 'mobile' : 'desktop'} />;
}

// Option 2: Use the WithBreakpoints HOC
import { WithBreakpoints } from './Hero Countdown/_responsive-runtime';

function App() {
  return (
    <WithBreakpoints
      Component={Countdown}
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
