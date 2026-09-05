import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises'
import { build } from 'vite'

const outDir = 'docs'
const defaultBase = '/lagom-naturals/'
const configuredBase = process.env.GITHUB_PAGES_BASE || defaultBase
const base = configuredBase === '/'
  ? '/'
  : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`

await rm(outDir, { recursive: true, force: true })
await mkdir(outDir, { recursive: true })

await build({
  base,
  build: {
    outDir,
    emptyOutDir: true,
  },
})

// GitHub Pages does not provide SPA rewrites. Serving the generated app shell
// as 404.html lets BrowserRouter recover direct links such as /shop and /visit.
await copyFile(`${outDir}/index.html`, `${outDir}/404.html`)

// Prevent Jekyll processing from interfering with Vite's generated assets.
await writeFile(`${outDir}/.nojekyll`, '')

console.log(`GitHub Pages build written to ${outDir}/ with base ${base}`)
