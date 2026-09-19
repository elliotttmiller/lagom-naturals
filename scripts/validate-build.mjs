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

const routeBudgets = {
  initialJs: 600 * KB,
  initialCss: 400 * KB,
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

for (const required of ['index.html', '404.html', '.nojekyll', 'robots.txt', 'sitemap.xml', 'shop/index.html', 'visit/index.html', 'about/index.html', 'learn/index.html', 'merch/index.html']) {
  if (!files.some(file => relative(root, file).replaceAll('\\', '/') === required)) violations.push(`Missing required GitHub Pages artifact: ${required}`)
}

const index = await readFile(join(root, 'index.html'), 'utf8')
for (const marker of ['property="og:image"', 'name="twitter:card"', '<meta name="description"', '<link rel="canonical"']) {
  if (!index.includes(marker)) violations.push(`index.html is missing required metadata: ${marker}`)
}
if (/(?:src|href)="\/(?!lagom-naturals\/)(?:lagom-)/.test(index)) violations.push('index.html contains a root-relative Lagom public asset that will break on repository-scoped Pages')
if (!index.includes('data-seo-fallback="true"') || !/<h1[>\s]/.test(index)) violations.push('index.html is missing crawlable initial HTML with an H1')
if (!index.includes('https://lagomnaturals.com/')) violations.push('index.html canonical origin is not the production Lagom domain')
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8')
if (!sitemap.includes('<urlset') || !sitemap.includes('https://lagomnaturals.com/shop')) violations.push('sitemap.xml is missing expected indexable routes')
const manifest = JSON.parse(await readFile(join(root, '.vite', 'manifest.json'), 'utf8'))
const entry = Object.values(manifest).find(item => item.isEntry && item.src === 'src/main.jsx')
if (!entry) {
  violations.push('Vite manifest is missing the src/main.jsx entry')
} else {
  const seen = new Set()
  const css = new Set()
  const visit = item => {
    if (!item || seen.has(item.file)) return
    seen.add(item.file)
    for (const stylesheet of item.css || []) css.add(stylesheet)
    for (const imported of item.imports || []) visit(manifest[imported])
  }
  visit(entry)
  const initialJsBytes = [...seen].reduce((sum, name) => {
    const file = files.find(candidate => relative(root, candidate).replaceAll('\\', '/') === name)
    return sum + (file ? (await stat(file)).size : 0)
  }, 0)
  const initialCssBytes = [...css].reduce((sum, name) => {
    const file = files.find(candidate => relative(root, candidate).replaceAll('\\', '/') === name)
    return sum + (file ? (await stat(file)).size : 0)
  }, 0)
  console.log(`Initial route budget: JS ${(initialJsBytes / KB).toFixed(0)} KB / ${routeBudgets.initialJs / KB} KB; CSS ${(initialCssBytes / KB).toFixed(0)} KB / ${routeBudgets.initialCss / KB} KB`)
  if (initialJsBytes > routeBudgets.initialJs) violations.push(`Initial static JS graph ${(initialJsBytes / KB).toFixed(0)} KB exceeds ${routeBudgets.initialJs / KB} KB budget`)
  if (initialCssBytes > routeBudgets.initialCss) violations.push(`Initial CSS graph ${(initialCssBytes / KB).toFixed(0)} KB exceeds ${routeBudgets.initialCss / KB} KB budget`)
}

if (!index.includes('rel="preload" as="image"') || !index.includes('fetchpriority="high"')) violations.push('Homepage initial HTML is missing a high-priority responsive image preload')
if (!index.includes('application/ld+json') || !index.includes('"Organization"')) violations.push('Homepage initial HTML is missing Organization/WebSite JSON-LD')

const productHtmlPath = files.find(file => relative(root, file).replaceAll('\\', '/').startsWith('product/') && relative(root, file).replaceAll('\\', '/').endsWith('/index.html'))
if (productHtmlPath) {
  const productHtml = await readFile(productHtmlPath, 'utf8')
  if (!productHtml.includes('"@type":"Product"')) violations.push('Generated product page is missing Product JSON-LD')
  if (!productHtml.includes('"@type":"BreadcrumbList"')) violations.push('Generated product page is missing BreadcrumbList JSON-LD')
}

const robots = await readFile(join(root, 'robots.txt'), 'utf8')
if (!robots.includes('Sitemap: https://lagomnaturals.com/sitemap.xml')) violations.push('robots.txt does not advertise the production sitemap')
for (const route of ['shop','visit','about','learn','merch']) {
  const routeHtml = await readFile(join(root, route, 'index.html'), 'utf8')
  if (!/<h1[>\s]/.test(routeHtml)) violations.push(`${route}/index.html is missing an H1 in initial HTML`)
  if (!routeHtml.includes(`https://lagomnaturals.com/${route}`)) violations.push(`${route}/index.html is missing its production canonical`)
}

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
