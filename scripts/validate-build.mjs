import { readdir, readFile, stat } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'

const root = process.argv[2] || 'docs'
const strict = process.env.CI === 'true' || process.env.BUILD_STRICT === '1'
const KB = 1024
const MB = KB * KB

const budgets = {
  '.js': 300 * KB,
  '.css': 375 * KB,
  '.html': 80 * KB,
  '.png': 2.5 * MB,
  '.jpg': 900 * KB,
  '.jpeg': 900 * KB,
  '.webp': 3.2 * MB,
  '.avif': 1.2 * MB,
}

const optimizationTargets = {
  '.png': 750 * KB,
  '.jpg': 500 * KB,
  '.jpeg': 500 * KB,
  '.webp': 800 * KB,
  '.avif': 600 * KB,
}

async function walk(dir, files = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) await walk(path, files)
    else files.push(path)
  }
  return files
}

const files = await walk(root)
const violations = []
const opportunities = []
let totalBytes = 0

for (const file of files) {
  const info = await stat(file)
  const ext = extname(file).toLowerCase()
  const name = relative(root, file).replaceAll('\\', '/')
  totalBytes += info.size
  if (budgets[ext] && info.size > budgets[ext]) violations.push(`${name}: ${(info.size / MB).toFixed(2)} MB exceeds hard ${Math.round(budgets[ext] / KB)} KB budget`)
  if (optimizationTargets[ext] && info.size > optimizationTargets[ext]) opportunities.push(`${name}: ${(info.size / KB).toFixed(0)} KB`)
}

for (const required of ['index.html', '404.html', '.nojekyll']) {
  if (!files.some(file => relative(root, file).replaceAll('\\', '/') === required)) violations.push(`Missing required GitHub Pages artifact: ${required}`)
}

const index = await readFile(join(root, 'index.html'), 'utf8')
for (const marker of ['property="og:image"', 'name="twitter:card"', '<meta name="description"', '<link rel="canonical"']) {
  if (!index.includes(marker)) violations.push(`index.html is missing required metadata: ${marker}`)
}
if (/src="\/lagom-|href="\/lagom-/.test(index)) violations.push('index.html contains a root-relative Lagom public asset that will break on repository-scoped Pages')

console.log(`\nProduction build audit: ${files.length} files, ${(totalBytes / MB).toFixed(2)} MB total`)
if (opportunities.length) {
  console.log(`\nMedia optimization backlog (${opportunities.length} files above preferred delivery targets):`)
  for (const item of opportunities.slice(0, 40)) console.log(`  - ${item}`)
  if (opportunities.length > 40) console.log(`  - …and ${opportunities.length - 40} more`)
}
if (violations.length) {
  console.error(`\nBuild quality violations (${violations.length}):`)
  for (const item of violations) console.error(`  - ${item}`)
  if (strict) process.exitCode = 1
  else console.warn('\nLocal build completed with quality warnings. CI/BUILD_STRICT=1 treats hard violations as failures.')
} else {
  console.log('\nBuild quality gates passed.')
}
