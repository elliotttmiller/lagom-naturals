import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { build, createServer } from 'vite'

const outDir = 'docs'
const defaultBase = '/lagom-naturals/'
const configuredBase = process.env.GITHUB_PAGES_BASE || defaultBase
const base = configuredBase === '/' ? '/' : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`
const siteOrigin = (process.env.SITE_ORIGIN || 'https://lagomnaturals.com').replace(/\/$/, '')

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

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))
const canonicalFor = pathname => `${siteOrigin}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
const jsonLdMarkup = data => {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${json}</script>`
}
const breadcrumbSchema = items => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: canonicalFor(item.pathname),
  })),
})

function injectHead(html, { title, description, pathname, noindex = false, headExtra = '' }) {
  const canonical = canonicalFor(pathname)
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta name="robots" content="[^"]*"\s*\/>/, `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `${headExtra}</head>`)
}

function fallbackNav() {
  return `<nav aria-label="Primary"><a href="${base}">Home</a> <a href="${base}shop/">Shop</a> <a href="${base}merch/">Merch</a> <a href="${base}visit/">Find Us</a> <a href="${base}about/">Our Story</a> <a href="${base}learn/">Learn</a></nav>`
}

function fallbackMarkup(route) {
  const extra = route.extra || ''
  return `<main class="seo-fallback" data-seo-fallback="true"><div class="seo-fallback__content">${fallbackNav()}<h1>${escapeHtml(route.h1)}</h1><p>${escapeHtml(route.description)}</p>${extra}</div></main>`
}

async function writeRoute(template, route) {
  const page = injectHead(template, route).replace('<div id="root"></div>', `<div id="root">${fallbackMarkup(route)}</div>`)
  if (route.pathname === '/') {
    await writeFile(join(outDir, 'index.html'), page)
    return
  }
  const directory = join(outDir, route.pathname.replace(/^\/+|\/+$/g, ''))
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), page)
}

await cleanOutputDirectory(outDir)
await mkdir(outDir, { recursive: true })
await build({ base, build: { outDir, emptyOutDir: false } })

let heroPreloads = ''
try {
  const manifest = JSON.parse(await readFile(join(outDir, '.vite', 'manifest.json'), 'utf8'))
  const findAsset = suffix => Object.entries(manifest).find(([key]) => key.endsWith(suffix))?.[1]?.file
  const mobileHero = findAsset('src/assets/mobile/hero.webp') || findAsset('assets/mobile/hero.webp')
  const desktopHero = findAsset('src/assets/desktop/hero.webp') || findAsset('assets/desktop/hero.webp')
  const tags = []
  if (mobileHero) tags.push(`<link rel="preload" as="image" href="${base}${mobileHero}" media="(max-width: 699px)" fetchpriority="high" />`)
  if (desktopHero) tags.push(`<link rel="preload" as="image" href="${base}${desktopHero}" media="(min-width: 700px)" fetchpriority="high" />`)
  heroPreloads = tags.join('')
} catch {
  console.warn('Unable to resolve hero preload assets from Vite manifest.')
}

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', base, logLevel: 'error' })
let products = []
let merch = []
let shops = []
try {
  const catalog = await vite.ssrLoadModule('/src/catalogData.js')
  products = Array.isArray(catalog.products) ? catalog.products : []
  merch = Array.isArray(catalog.merch) ? catalog.merch : []
  const findUs = await vite.ssrLoadModule('/src/FindUsExperience.jsx')
  shops = Array.isArray(findUs.SHOPS) ? findUs.SHOPS : []
} finally {
  await vite.close()
}

const homeSchema = jsonLdMarkup([
  {'@context':'https://schema.org','@type':'Organization',name:'Lagom Naturals',url:canonicalFor('/')},
  {'@context':'https://schema.org','@type':'WebSite',name:'Lagom Naturals',url:canonicalFor('/')},
])

const categoryProductLinks = category => {
  const items = products.filter(product => product.category === category)
  if (!items.length) return ''
  return `<ul>${items.map(product => `<li><a href="${base}product/${encodeURIComponent(product.id)}/">${escapeHtml(product.name)}</a></li>`).join('')}</ul>`
}
const merchProductLinks = () => merch.length
  ? `<ul>${merch.map(item => `<li><a href="${base}merch/${encodeURIComponent(item.id)}/">${escapeHtml(item.name)}</a></li>`).join('')}</ul>`
  : ''

const staticRoutes = [
  { pathname: '/', title: 'Lagom Naturals | Premium THC Seltzer', h1: 'Find your just right.', description: 'Premium hemp-derived THC seltzers made for considered adult occasions.', headExtra: `${heroPreloads}${homeSchema}` },
  { pathname: '/shop', title: 'Shop THC Seltzers & Gummies | Lagom Naturals', h1: 'Shop Lagom Naturals', description: 'Explore Lagom Naturals THC seltzers and gummy collections by flavor and format.', extra: `${categoryProductLinks('Seltzers')}${categoryProductLinks('Gummies')}` },
  { pathname: '/shop/seltzers', title: 'THC Seltzers | Lagom Naturals', h1: 'THC Seltzers', description: 'Explore Lagom Naturals hemp-derived THC seltzers by flavor and pack format.', extra: categoryProductLinks('Seltzers'), headExtra: jsonLdMarkup(breadcrumbSchema([{name:'Home',pathname:'/'},{name:'Shop',pathname:'/shop'},{name:'THC Seltzers',pathname:'/shop/seltzers'}])) },
  { pathname: '/shop/gummies', title: 'THC Gummies | Lagom Naturals', h1: 'THC Gummies', description: 'Explore Lagom Naturals THC gummy collections by flavor and collection.', extra: categoryProductLinks('Gummies'), headExtra: jsonLdMarkup(breadcrumbSchema([{name:'Home',pathname:'/'},{name:'Shop',pathname:'/shop'},{name:'THC Gummies',pathname:'/shop/gummies'}])) },
  { pathname: '/merch', title: 'Apparel & Merch | Lagom Naturals', h1: 'Apparel & Merch', description: 'Shop Lagom Naturals apparel and merchandise.', extra: merchProductLinks() },
  { pathname: '/visit', title: 'Find Us | Lagom Naturals', h1: 'Find Lagom Near You', description: 'Find retailers and venues carrying Lagom Naturals.', extra: shops.length ? `<ul>${shops.map(shop => `<li><strong>${escapeHtml(shop.name)}</strong> — ${escapeHtml(shop.address)}</li>`).join('')}</ul>` : '' },
  { pathname: '/about', title: 'Our Story | Lagom Naturals', h1: 'A More Balanced You', description: 'The idea of balance behind Lagom Naturals.' },
  { pathname: '/learn', title: 'THC, Explained | Lagom Naturals', h1: 'THC, Explained', description: 'Clear guidance for enjoying Lagom THC seltzer responsibly.' },
  { pathname: '/recipes', title: 'Recipes & Rituals | Lagom Naturals', h1: 'Recipes & Rituals', description: 'Lagom Naturals drink recipes, pairings, and balanced occasion ideas.' },
  { pathname: '/cart', title: 'Your Cart | Lagom Naturals', h1: 'Your Cart', description: 'Review your Lagom Naturals drinks and apparel.', noindex: true },
  { pathname: '/checkout', title: 'Checkout | Lagom Naturals', h1: 'Checkout', description: 'Enter fulfillment details and review your Lagom Naturals order.', noindex: true },
  { pathname: '/account', title: 'My Account | Lagom Naturals', h1: 'My Account', description: 'Manage your Lagom Naturals account preferences.', noindex: true },
]

const productRoutes = products.map(product => {
  const isSeltzer = product.category === 'Seltzers'
  const facts = [
    product.flavor,
    isSeltzer && product.thcMgPerCan ? `${product.thcMgPerCan} mg THC per can` : null,
    isSeltzer ? product.canVolume : null,
    isSeltzer ? product.sugar : null,
    isSeltzer ? product.carbs : null,
  ].filter(Boolean)
  const description = facts.length ? `${product.name} — ${facts.join(' · ')}.` : `${product.name} from Lagom Naturals.`
  const pathname = `/product/${encodeURIComponent(product.id)}`
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description,
    category: product.category,
    brand: {'@type':'Brand',name:product.brand || 'Lagom Naturals'},
  }
  if (!product.mock && Number.isFinite(Number(product.price))) {
    productSchema.offers = {
      '@type': 'Offer',
      url: canonicalFor(pathname),
      priceCurrency: 'USD',
      price: Number(product.price).toFixed(2),
    }
  }
  return {
    pathname,
    title: `${product.name} | Lagom Naturals`,
    h1: product.name,
    description,
    headExtra: `${jsonLdMarkup(productSchema)}${jsonLdMarkup(breadcrumbSchema([
      {name:'Home',pathname:'/'},
      {name:'Shop',pathname:'/shop'},
      {name:product.name,pathname},
    ]))}`,
  }
})

const merchRoutes = merch.map(item => {
  const pathname = `/merch/${encodeURIComponent(item.id)}`
  const description = item.description || `Review ${item.name} details and availability from Lagom Naturals.`
  const schema = {
    '@context':'https://schema.org',
    '@type':'Product',
    name:item.name,
    description,
    brand:{'@type':'Brand',name:'Lagom Naturals'},
    category:'Apparel',
  }
  if (Number.isFinite(Number(item.price))) {
    schema.offers = {'@type':'Offer',url:canonicalFor(pathname),priceCurrency:'USD',price:Number(item.price).toFixed(2)}
  }
  return {
    pathname,
    title: `${item.name} | Lagom Naturals`,
    h1:item.name,
    description,
    headExtra:`${jsonLdMarkup(schema)}${jsonLdMarkup(breadcrumbSchema([
      {name:'Home',pathname:'/'},
      {name:'Merch',pathname:'/merch'},
      {name:item.name,pathname},
    ]))}`,
  }
})

const template = await readFile(join(outDir, 'index.html'), 'utf8')
const routes = [...staticRoutes, ...productRoutes, ...merchRoutes]
for (const route of routes) await writeRoute(template, route)

const indexable = routes.filter(route => !route.noindex)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable.map(route => `  <url><loc>${escapeHtml(canonicalFor(route.pathname))}</loc></url>`).join('\n')}\n</urlset>\n`
await writeFile(join(outDir, 'sitemap.xml'), sitemap)
await writeFile(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`)

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
      .replace(/(?<![A-Za-z0-9/_-])\/lagom-logo-icon-white\.svg/g, `${base}lagom-logo-icon-white.svg`)
    if (normalized !== source) await writeFile(filePath, normalized)
  }
}
await normalizeLegacyPublicUrls(outDir)

await copyFile(`${outDir}/index.html`, `${outDir}/404.html`)
await writeFile(`${outDir}/.nojekyll`, '')
console.log(`\nGitHub Pages production build written to ${outDir}/ with base ${base}`)
