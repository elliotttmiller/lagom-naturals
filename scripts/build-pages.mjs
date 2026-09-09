import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { build } from 'vite'

const outDir = 'docs'
const defaultBase = '/lagom-naturals/'
const configuredBase = process.env.GITHUB_PAGES_BASE || defaultBase
const base = configuredBase === '/'
  ? '/'
  : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`

async function cleanOutputDirectory(directory) {
  try {
    await rm(directory, {
      recursive: true,
      force: true,
      maxRetries: 12,
      retryDelay: 250,
    })
  } catch (error) {
    if (error?.code === 'EPERM' || error?.code === 'EBUSY') {
      throw new Error(
        `Unable to clean ${directory}/ because Windows is holding a generated file open. ` +
        'Close any File Explorer preview, image viewer, dev server, or process using docs/, then run the build again.',
        { cause: error },
      )
    }
    throw error
  }
}

await cleanOutputDirectory(outDir)
await mkdir(outDir, { recursive: true })

await build({
  base,
  build: {
    outDir,
    // The output directory was already cleaned with Windows-aware retries.
    emptyOutDir: false,
  },
})

// Public-directory URLs written as root-relative strings inside application JS
// are not rewritten by Vite. Normalize those paths for repository-scoped Pages.
const textExtensions = new Set(['.html', '.js', '.css', '.map'])
async function normalizePublicUrls(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = join(directory, entry.name)
    if (entry.isDirectory()) {
      await normalizePublicUrls(filePath)
      continue
    }
    if (!textExtensions.has(extname(entry.name))) continue

    const source = await readFile(filePath, 'utf8')
    const normalized = source.replace(/(?<![A-Za-z0-9/_-])\/lagom-logo\.svg/g, `${base}lagom-logo.svg`)
    if (normalized !== source) await writeFile(filePath, normalized)
  }
}

await normalizePublicUrls(outDir)

// GitHub Pages has no SPA rewrite configuration. Returning the same application
// shell for unknown paths allows BrowserRouter + basename to resolve direct URLs.
await copyFile(`${outDir}/index.html`, `${outDir}/404.html`)

// Prevent Jekyll processing from interfering with Vite's generated assets.
await writeFile(`${outDir}/.nojekyll`, '')

console.log(`GitHub Pages build written to ${outDir}/ with base ${base}`)
