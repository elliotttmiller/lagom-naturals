# Button

Exported from Framer using Design to AI.

## Components

- `Button`
- `ParallaximageProd`
- `IngriedentsList`
- `ParallaximageProd2`
- `Enjoy`
- `Form`
- `SingleFaq`
- `SingleFaq2`
- `SingleFaq3`
- `SingleFaq4`
- `SingleFaq5`
- `Button2`
- `ParallaximageProd3`
- `IngriedentsList2`
- `ParallaximageProd4`
- `Enjoy2`
- `Form2`
- `SingleFaq6`
- `SingleFaq7`
- `SingleFaq8`
- `SingleFaq9`
- `SingleFaq10`
- `Button3`
- `ParallaximageProd5`
- `IngriedentsList3`
- `ParallaximageProd6`
- `Enjoy3`
- `Form3`
- `SingleFaq11`
- `SingleFaq12`
- `SingleFaq13`
- `SingleFaq14`
- `SingleFaq15`
- `Button4`
- `ParallaximageProd7`
- `IngriedentsList4`
- `ParallaximageProd8`
- `Enjoy4`
- `Form4`
- `SingleFaq16`
- `SingleFaq17`
- `SingleFaq18`
- `SingleFaq19`
- `SingleFaq20`
- `Button5`
- `ParallaximageProd9`
- `IngriedentsList5`
- `ParallaximageProd10`
- `Enjoy5`
- `Form5`
- `SingleFaq21`
- `SingleFaq22`
- `SingleFaq23`
- `SingleFaq24`
- `SingleFaq25`
- `Button6`
- `ParallaximageProd11`
- `IngriedentsList6`
- `ParallaximageProd12`
- `Enjoy6`
- `Form6`
- `SingleFaq26`
- `SingleFaq27`
- `SingleFaq28`
- `SingleFaq29`
- `SingleFaq30`

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
