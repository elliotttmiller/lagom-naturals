import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { build } from 'vite'
import { spawn } from 'node:child_process'

const outDir = 'docs'
const strict = process.argv.includes('--strict')
if (strict) process.env.BUILD_STRICT = '1'
const defaultBase = '/lagom-naturals/'
const configuredBase = process.env.GITHUB_PAGES_BASE || defaultBase
const base = configuredBase === '/' ? '/' : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`

async function cleanOutputDirectory(directory) {
  try {
    await rm(directory, { recursive: true, force: true, maxRetries: 12, retryDelay: 250 })
  } catch (error) {
    if (error?.code === 'EPERM' || error?.code === 'EBUSY') {
      throw new Error(`Unable to clean ${directory}/ because Windows is holding a generated file open. Close any File Explorer preview, image viewer, dev server, or process using docs/, then run the build again.`, { cause: error })
    }
    throw error
  }
}

function runNode(script, args = []) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...args], { stdio: 'inherit', env: process.env })
    child.on('error', reject)
    child.on('exit', code => code === 0 ? resolve() : reject(new Error(`${script} exited with code ${code}`)))
  })
}

await cleanOutputDirectory(outDir)
await mkdir(outDir, { recursive: true })
await build({ base, build: { outDir, emptyOutDir: false } })

// Temporary compatibility bridge for legacy root-relative public logo references.
// New application code must use import.meta.env.BASE_URL for public assets. This
// bridge can be removed after the remaining legacy JSX references are retired.
const textExtensions = new Set(['.html', '.js', '.css', '.map'])
async function normalizeLegacyPublicUrls(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = join(directory, entry.name)
    if (entry.isDirectory()) { await normalizeLegacyPublicUrls(filePath); continue }
    if (!textExtensions.has(extname(entry.name))) continue
    const source = await readFile(filePath, 'utf8')
    const normalized = source
      .replace(/(?<![A-Za-z0-9/_-])\/lagom-logo\.svg/g, `${base}lagom-logo.svg`)
      .replace(/(?<![A-Za-z0-9/_-])\/lagom-logo-icon\.svg/g, `${base}lagom-logo-icon.svg`)
    if (normalized !== source) await writeFile(filePath, normalized)
  }
}
await normalizeLegacyPublicUrls(outDir)

await copyFile(`${outDir}/index.html`, `${outDir}/404.html`)
await writeFile(`${outDir}/.nojekyll`, '')
await runNode('scripts/validate-build.mjs', [outDir])
console.log(`\nGitHub Pages production build written to ${outDir}/ with base ${base}${strict ? ' (strict)' : ''}`)
