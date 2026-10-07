import { access, mkdir, open, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { basename, dirname, extname, join, relative, resolve } from 'node:path'
import sharp from 'sharp'

const root = resolve(import.meta.dirname, '..')
const outputRoot = join(root, 'src', 'assets', 'optimized')
const modulePath = join(root, 'src', 'generated', 'responsiveImages.js')
const manifestPath = join(outputRoot, '.image-manifest.json')
const lockPath = join(outputRoot, '.image-optimizer.lock')
const force = process.argv.includes('--force')
const check = process.argv.includes('--check')

const encoder = {
  avif: { quality: 58, effort: 2, chromaSubsampling: '4:4:4' },
  webp: { quality: 76, effort: 4, smartSubsample: true },
}

const packagingEncoder = {
  avif: { quality: 64, effort: 4, chromaSubsampling: '4:4:4' },
  webp: { quality: 82, effort: 5, smartSubsample: true },
}

const groups = [
  { name: 'homeGummies', directory: 'src/assets/products/home-gummies', widths: [320, 480, 640, 900], encoder: packagingEncoder },
  { name: 'homeAtmosphere', directory: 'src/assets/atmosphere', files: ['home-hero-sky.png'], widths: [960, 1600] },
  {
    name: 'gummyDesktopShowcase',
    directory: 'data/ui/gummy-showcase/desktop',
    files: [
      'push-pop-desktop.png',
      'strawberry-banana-desktop.png',
      'blueberry-yum-yum-desktop.png',
      'green-apple-desktop.png',
      'berry-melon-bliss-organic-desktop.png',
      'blue-razz-organic-desktop.png',
      'cherry-bliss-organic-desktop.png',
      'push-pop-organic-desktop.png',
      'strawberry-midnight-drift-desktop.png',
      'blueberry-yum-yum-midnight-drift-desktop.png',
      'peach-midnight-drift-desktop.png',
      'pink-lemonade-midnight-drift-desktop.png',
    ],
    sourceFiles: {
      'push-pop-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_25_49 PM-1.png',
      'strawberry-banana-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_25_50 PM-2.png',
      'blueberry-yum-yum-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_25_50 PM-3.png',
      'green-apple-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_25_53 PM-4.png',
      'berry-melon-bliss-organic-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_25_53 PM-5.png',
      'blue-razz-organic-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_25_54 PM-6.png',
      'push-pop-organic-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_25_55 PM-7.png',
      'strawberry-midnight-drift-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_25_56 PM-8.png',
      'blueberry-yum-yum-midnight-drift-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_30_37 PM-1.png',
      'peach-midnight-drift-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_30_38 PM-2.png',
      'pink-lemonade-midnight-drift-desktop.png': 'data/ui/gummy-showcase/desktop/ChatGPT Image Oct 5, 2026, 06_30_39 PM-3.png',
      'cherry-bliss-organic-desktop.png': 'data/ui/gummy-showcase/desktop/Cherry Bliss Alpine Sunset.png',
    },
    widths: [960, 1440, 1920, 2560],
    encoder: {
      avif: { quality: 61, effort: 4, chromaSubsampling: '4:4:4' },
      webp: { quality: 84, effort: 5, smartSubsample: true },
    },
  },
  { name: 'shopHeader', directory: 'data/ui', files: ['shop-header-image.png', 'shop-header-image-desktop.png'], widths: [480, 800, 1200, 2172] },
  { name: 'seltzerDesktopFlavors', directory: 'data/ui/seltzer-showcase', files: ['watermelon.png', 'Strawberry Lime Splash Seltzer Ad (1).png', 'blackberry.png', '24k.png'], widths: [960, 1440, 1723], encoder: { avif: { quality: 78, effort: 4, chromaSubsampling: '4:4:4' }, webp: { quality: 92, effort: 5, smartSubsample: true } } },
  {
    name: 'seltzerDesktopShowcaseArtwork',
    directory: 'data/ui/seltzer-showcase/desktop',
    files: ['24k-lemonade-desktop.png', 'blackberry-breeze-desktop.png', 'strawberry-lime-fusion-desktop.png', 'watermelon-refresher-desktop.png'],
    sourceFiles: {
      '24k-lemonade-desktop.png': 'data/ui/seltzer-showcase/desktop/24k-lemonade-production-water-desktop-2560x1120.png',
      'blackberry-breeze-desktop.png': 'data/ui/seltzer-showcase/desktop/blackberry-breeze-production-water-desktop-2560x1120.png',
      'strawberry-lime-fusion-desktop.png': 'data/ui/seltzer-showcase/desktop/strawberry-lime-fusion-production-water-desktop-2560x1120.png',
      'watermelon-refresher-desktop.png': 'data/ui/seltzer-showcase/desktop/watermelon-refresher-production-water-desktop-2560x1120.png',
    },
    widths: [960, 1440, 1920, 2560],
    encoder: { avif: { quality: 78, effort: 4, chromaSubsampling: '4:4:4' }, webp: { quality: 92, effort: 5, smartSubsample: true } },
  },
  { name: 'products', directory: 'src/assets/products/enhanced', widths: [480, 960] },
  {
    name: 'merch',
    directory: 'src/assets/merch',
    files: [
      'lagom-black-logo-tee-back.webp',
      'lagom-black-logo-tee-folded-front.webp',
      'lagom-black-logo-tee-front.webp',
      'lagom-black-logo-tee-front-three-quarter.webp',
      'lagom-mainstreet-hooded-sweatshirt-back.webp',
      'lagom-mainstreet-hooded-sweatshirt-folded-front.webp',
      'lagom-mainstreet-hooded-sweatshirt-front.webp',
      'lagom-throwback-loon-cap-back.webp',
      'lagom-throwback-loon-cap-front.webp',
      'lagom-throwback-loon-cap-front-three-quarter-left.webp',
      'lagom-throwback-loon-cap-front-three-quarter-right.webp',
    ],
    widths: [480, 960],
  },
  { name: 'heroMobile', directory: 'src/assets/mobile', files: ['hero.webp', 'gummies-hero.webp', 'midnight-gummies-hero.webp', 'organic-gummies-hero.webp'], widths: [480, 800] },
  { name: 'heroDesktop', directory: 'src/assets/desktop', files: ['hero.webp', 'gummies-hero.webp', 'midnight-gummies-hero.webp', 'organic-gummies-hero.webp'], sourceFiles: { 'hero.webp': 'data/ui/desktop-hero.png' }, widths: [960, 1600] },
  { name: 'findUs', directory: 'src/assets/mobile', files: ['find-us-hero.png'], widths: [480, 960] },
  {
    name: 'store',
    directory: 'src/assets/store',
    files: [
      'ChatGPT Image Sep 5, 2026, 06_12_52 AM.png',
      'extra-store.webp',
      'extra-store2.webp',
      'main-store2.webp',
      'storefront-day.webp',
      'storefront-night.webp',
    ],
    widths: [480, 960],
  },
  { name: 'storeDesktop', directory: 'src/assets/desktop', files: ['storefront.webp'], widths: [960, 1600] },
  { name: 'story', directory: 'src/assets/our-story', files: ['hero-desktop.webp', 'hero-mobile.webp', 'just-enough-desktop.webp', 'just-enough-mobile.webp', 'cheers-desktop.webp', 'cheers-mobile.webp'], widths: [480, 800, 1200, 1600, 1920] },
  {
    name: 'showcaseMobile',
    directory: 'data/ui/seltzer-showcase',
    files: [
      'flavor-24k-lemonade-mobile.png',
      'flavor-blackberry-breeze-mobile.png',
      'flavor-watermelon-refresher-mobile.png',
      'flavor-strawberry-lime-fusion-mobile.png',
    ],
    sourceFiles: {
      'flavor-24k-lemonade-mobile.png': 'data/ui/seltzer-showcase/24k-lemonade-mobile.png',
      'flavor-blackberry-breeze-mobile.png': 'data/ui/seltzer-showcase/blackberry-mobile.png',
      'flavor-watermelon-refresher-mobile.png': 'data/ui/seltzer-showcase/watermelon-mobile.png',
      'flavor-strawberry-lime-fusion-mobile.png': 'data/ui/seltzer-showcase/strawberry-lime-mobile.png',
    },
    widths: [480, 800, 941],
    encoder: {
      avif: { quality: 78, effort: 4, chromaSubsampling: '4:4:4' },
      webp: { quality: 92, effort: 5, smartSubsample: true },
    },
  },
  { name: 'categories', directory: 'src/assets', files: ['seltzers-thumbnail.webp', 'gummies-thumbnail.webp'], widths: [320, 640] },
]

const safeKey = file => basename(file, extname(file))
const importName = value => value.replace(/[^a-zA-Z0-9_$]/g, '_')
const normalizePath = path => path.replaceAll('\\', '/')
const sourcePathFor = (group, file) => join(root, group.sourceFiles?.[file] ?? group.directory, ...(group.sourceFiles?.[file] ? [] : [file]))
const digest = value => createHash('sha256').update(value).digest('hex')
const sourceHash = async source => digest(await readFile(source))
const exists = async path => access(path).then(() => true).catch(() => false)
const readTextOrEmpty = async path => readFile(path, 'utf8').catch(error => {
  if (error.code === 'ENOENT') return ''
  throw error
})

const replaceFile = async (temporary, target) => {
  const backup = `${target}.${process.pid}.${Date.now()}.bak`
  let hasBackup = false
  try {
    await rename(target, backup)
    hasBackup = true
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }

  try {
    await rename(temporary, target)
  } catch (error) {
    if (hasBackup) await rename(backup, target)
    throw error
  }

  if (hasBackup) await rm(backup, { force: true })
}

const readManifest = async () => {
  try {
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
    if (manifest.version !== 1 || !Array.isArray(manifest.entries)) throw new Error('unsupported manifest format')
    return manifest
  } catch (error) {
    if (error.code === 'ENOENT') return { version: 1, entries: [] }
    throw new Error(`Cannot read ${normalizePath(relative(root, manifestPath))}: ${error.message}`)
  }
}

const atomicWrite = async (target, content) => {
  const temporary = `${target}.${process.pid}.tmp`
  try {
    await writeFile(temporary, content, 'utf8')
    await replaceFile(temporary, target)
  } finally {
    await rm(temporary, { force: true })
  }
}

const outputPath = (group, key, width, format) => join(outputRoot, group.name, `${key}-${width}.${format}`)
const outputRelativePath = path => normalizePath(relative(outputRoot, path))
const safeOutputPath = output => {
  const resolved = resolve(outputRoot, output)
  if (!resolved.startsWith(`${outputRoot}\\`) && resolved !== outputRoot) throw new Error(`Refusing to remove output outside the optimizer root: ${output}`)
  return resolved
}

const cleanInterruptedWrites = async directory => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      await cleanInterruptedWrites(path)
      continue
    }
    if (entry.isFile() && (entry.name.includes('.tmp.') || /\.bak\.\d+\.\d+$/i.test(entry.name))) {
      await rm(path, { force: true })
    }
  }
}

const orientedWidth = metadata => [5, 6, 7, 8].includes(metadata.orientation) ? metadata.height : metadata.width
const orientedHeight = metadata => [5, 6, 7, 8].includes(metadata.orientation) ? metadata.width : metadata.height

const makeVariants = (group, key, sourceWidth) => [...new Set(group.widths.map(width => Math.min(width, sourceWidth)))].sort((a, b) => a - b).flatMap(width => ['avif', 'webp'].map(format => ({
  width,
  format,
  output: outputPath(group, key, width, format),
})))

const writeVariant = async (source, variant, variantEncoder) => {
  const temporary = `${variant.output}.${process.pid}.tmp.${variant.format}`
  try {
    const pipeline = sharp(source).rotate().resize({ width: variant.width, withoutEnlargement: true })
    if (variant.format === 'avif') await pipeline.avif(variantEncoder.avif).toFile(temporary)
    else await pipeline.webp(variantEncoder.webp).toFile(temporary)
    await replaceFile(temporary, variant.output)
  } finally {
    await rm(temporary, { force: true })
  }
}

const groupFiles = async group => {
  const sourceDirectory = join(root, group.directory)
  const files = group.files ?? (await readdir(sourceDirectory)).filter(file => /\.(png|jpe?g|webp)$/i.test(file))
  const sorted = [...files].sort((left, right) => left.localeCompare(right))
  const keys = new Set()
  for (const file of sorted) {
    const key = safeKey(file)
    if (keys.has(key)) throw new Error(`Duplicate responsive image key "${key}" in ${group.directory}`)
    keys.add(key)
    if (!await exists(sourcePathFor(group, file))) throw new Error(`Missing configured source image: ${normalizePath(group.sourceFiles?.[file] ?? join(group.directory, file))}`)
  }
  return sorted
}

const buildModule = resolvedGroups => {
  const imports = []
  const moduleGroups = []

  for (const group of resolvedGroups) {
    const entries = []
    for (const file of group.files) {
      const key = safeKey(file.name)
      const variants = file.variants
      const names = {}
      for (const variant of variants) {
        const name = importName(`${group.name}_${key}_${variant.width}_${variant.format}`)
        const importPath = `../assets/${normalizePath(relative(join(root, 'src', 'assets'), variant.output))}`
        imports.push(`import ${name} from ${JSON.stringify(importPath)};`)
        names[`${variant.format}${variant.width}`] = name
      }
      const widths = [...new Set(variants.map(variant => variant.width))].sort((a, b) => a - b)
      const largest = widths.at(-1)
      const srcSet = format => widths.map(width => `${'${'}${names[`${format}${width}`]}} ${width}w`).join(', ')
      entries.push(`${JSON.stringify(key)}:{src:${names[`webp${largest}`]},webpSrcSet:\`${srcSet('webp')}\`,avifSrcSet:\`${srcSet('avif')}\`,width:${file.width},height:${file.height},widths:[${widths.join(',')}]}`)
    }
    moduleGroups.push(`${group.name}:{${entries.join(',')}}`)
  }

  const responsiveImagesLookups = ['homeGummies', 'products', 'merch', 'store']
    .map(group => `...Object.values(responsiveImages.${group})`)
    .join(',')

  return `${imports.join('\n')}\n\nexport const responsiveImages={${moduleGroups.join(',')}};\nexport const responsiveImageBySrc=new Map([${responsiveImagesLookups}].map(media=>[media.src,media]));\n`
}

await mkdir(outputRoot, { recursive: true })
let lock
try {
  lock = await open(lockPath, 'wx')
} catch (error) {
  if (error.code === 'EEXIST') throw new Error('Image optimization is already running. Wait for it to finish before starting another run.')
  throw error
}

try {
  await cleanInterruptedWrites(outputRoot)
  const previous = await readManifest()
  const previousEntries = new Map(previous.entries.map(entry => [entry.source, entry]))
  const resolvedGroups = []
  const nextEntries = []
  const expectedOutputs = new Set()
  const stale = []
  let skipped = 0

  for (const group of groups) {
    const files = await groupFiles(group)
    const resolvedGroup = { ...group, files: [] }
    resolvedGroups.push(resolvedGroup)

    for (const file of files) {
      const sourcePath = sourcePathFor(group, file)
      const source = normalizePath(relative(root, sourcePath))
      const key = safeKey(file)
      const metadata = await sharp(sourcePath).metadata()
      const sourceWidth = orientedWidth(metadata)
      const sourceHeight = orientedHeight(metadata)
      if (!sourceWidth) throw new Error(`Cannot determine source image width: ${source}`)
      const variants = makeVariants(group, key, sourceWidth)
      resolvedGroup.files.push({ name: file, variants, width: sourceWidth, height: sourceHeight })
      const variantEncoder = group.encoder ?? encoder
      const fingerprint = digest(JSON.stringify({ group: group.name, widths: group.widths, encoder: variantEncoder, sharp: sharp.versions.sharp }))
      const hash = await sourceHash(sourcePath)
      const previousEntry = previousEntries.get(source)
      const outputsExist = await Promise.all(variants.map(async variant => {
        if (!await exists(variant.output)) return false
        const outputMetadata = await sharp(variant.output).metadata()
        const expectedFormat = variant.format === 'avif' ? 'heif' : variant.format
        return outputMetadata.width === variant.width && outputMetadata.format === expectedFormat
      })).then(results => results.every(Boolean))
      const needsOptimization = force || !previousEntry || previousEntry.hash !== hash || previousEntry.fingerprint !== fingerprint || !outputsExist

      if (needsOptimization) stale.push({ source, variants, encoder: variantEncoder })
      else skipped += 1

      const outputs = variants.map(variant => outputRelativePath(variant.output))
      outputs.forEach(output => expectedOutputs.add(output))
      nextEntries.push({ source, hash, fingerprint, outputs })
    }
  }

  const removedOutputs = previous.entries
    .flatMap(entry => entry.outputs ?? [])
    .filter(output => !expectedOutputs.has(output))
  const generatedModule = buildModule(resolvedGroups)
  const generatedManifest = `${JSON.stringify({ version: 1, entries: nextEntries }, null, 2)}\n`

  if (check) {
    const [existingModule, existingManifest] = await Promise.all([readTextOrEmpty(modulePath), readTextOrEmpty(manifestPath)])
    const staleModule = existingModule !== generatedModule
    const staleManifest = existingManifest !== generatedManifest
    if (stale.length || removedOutputs.length || staleModule || staleManifest) {
      console.error(`Image assets are out of sync: ${stale.length} source entr${stale.length === 1 ? 'y' : 'ies'} need regeneration, ${removedOutputs.length} obsolete derivative${removedOutputs.length === 1 ? '' : 's'} need pruning, generated module ${staleModule ? 'is stale' : 'is current'}, manifest ${staleManifest ? 'is stale' : 'is current'}.`)
      process.exitCode = 1
    } else {
      console.log(`Image assets are synchronized: ${skipped} source entries, generated module, manifest, and output dimensions verified.`)
    }
  } else {
    for (const entry of stale) {
      for (const variant of entry.variants) {
        await mkdir(dirname(variant.output), { recursive: true })
        await writeVariant(join(root, entry.source), variant, entry.encoder)
      }
    }

    for (const output of removedOutputs) await rm(safeOutputPath(output), { force: true })

    await mkdir(join(root, 'src', 'generated'), { recursive: true })
    await atomicWrite(modulePath, generatedModule)
    await atomicWrite(manifestPath, generatedManifest)
    console.log(`Responsive images are current: ${stale.length} optimized, ${skipped} unchanged, ${removedOutputs.length} pruned.`)
  }
} finally {
  await lock.close()
  await rm(lockPath, { force: true })
}
