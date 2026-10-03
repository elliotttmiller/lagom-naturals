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

const groups = [
  { name: 'homeGummies', directory: 'src/assets/products/home-gummies', widths: [480, 900] },
  { name: 'products', directory: 'src/assets/products/enhanced', widths: [480, 960] },
  { name: 'merch', directory: 'src/assets/merch', widths: [480, 960] },
  { name: 'heroMobile', directory: 'src/assets/mobile', files: ['hero.webp', 'gummies-hero.webp', 'midnight-gummies-hero.webp', 'organic-gummies-hero.webp'], widths: [480, 800] },
  { name: 'heroDesktop', directory: 'src/assets/desktop', files: ['hero.webp', 'gummies-hero.webp', 'midnight-gummies-hero.webp', 'organic-gummies-hero.webp'], widths: [960, 1600] },
  { name: 'findUs', directory: 'src/assets/mobile', files: ['find-us-hero.png'], widths: [480, 960] },
  { name: 'store', directory: 'src/assets/store', widths: [480, 960] },
  { name: 'storeDesktop', directory: 'src/assets/desktop', files: ['storefront.webp'], widths: [960, 1600] },
  { name: 'showcaseDesktop', directory: 'src/assets/showcase', files: ['seltzer-background.png', 'seltzer-splash.png', 'flavor-24k-lemonade.png', 'flavor-blackberry-breeze.png', 'flavor-watermelon-refresher.png', 'flavor-strawberry-lime-fusion.png'], widths: [960, 1600] },
  { name: 'showcaseMobile', directory: 'src/assets/showcase', files: ['seltzer-background-mobile.png', 'blackberry-breeze-mobile.png', 'flavor-24k-lemonade-mobile.png', 'flavor-blackberry-breeze-mobile.png', 'flavor-watermelon-refresher-mobile.png', 'flavor-strawberry-lime-fusion-mobile.png'], widths: [480, 800] },
  { name: 'categories', directory: 'src/assets', files: ['seltzers-thumbnail.webp', 'gummies-thumbnail.webp'], widths: [320, 640] },
]

const safeKey = file => basename(file, extname(file))
const importName = value => value.replace(/[^a-zA-Z0-9_$]/g, '_')
const normalizePath = path => path.replaceAll('\\', '/')
const digest = value => createHash('sha256').update(value).digest('hex')
const sourceHash = async source => digest(await readFile(source))
const exists = async path => access(path).then(() => true).catch(() => false)

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
  await writeFile(temporary, content, 'utf8')
  await rename(temporary, target)
}

const outputPath = (group, key, width, format) => join(outputRoot, group.name, `${key}-${width}.${format}`)
const outputRelativePath = path => normalizePath(relative(outputRoot, path))
const safeOutputPath = output => {
  const resolved = resolve(outputRoot, output)
  if (!resolved.startsWith(`${outputRoot}\\`) && resolved !== outputRoot) throw new Error(`Refusing to remove output outside the optimizer root: ${output}`)
  return resolved
}

const makeVariants = (group, key) => group.widths.flatMap(width => ['avif', 'webp'].map(format => ({
  width,
  format,
  output: outputPath(group, key, width, format),
})))

const writeVariant = async (source, variant) => {
  const temporary = `${variant.output}.${process.pid}.tmp.${variant.format}`
  const pipeline = sharp(source).rotate().resize({ width: variant.width, withoutEnlargement: true })
  if (variant.format === 'avif') await pipeline.avif(encoder.avif).toFile(temporary)
  else await pipeline.webp(encoder.webp).toFile(temporary)
  await rename(temporary, variant.output)
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
    if (!await exists(join(sourceDirectory, file))) throw new Error(`Missing configured source image: ${normalizePath(join(group.directory, file))}`)
  }
  return sorted
}

const buildModule = resolvedGroups => {
  const imports = []
  const moduleGroups = []

  for (const group of resolvedGroups) {
    const entries = []
    for (const file of group.files) {
      const key = safeKey(file)
      const variants = makeVariants(group, key)
      const names = {}
      for (const variant of variants) {
        const name = importName(`${group.name}_${key}_${variant.width}_${variant.format}`)
        const importPath = `../assets/${normalizePath(relative(join(root, 'src', 'assets'), variant.output))}`
        imports.push(`import ${name} from ${JSON.stringify(importPath)};`)
        names[`${variant.format}${variant.width}`] = name
      }
      const [small, large] = group.widths
      entries.push(`${JSON.stringify(key)}:{src:${names[`webp${large}`]},webpSrcSet:\`${'${'}${names[`webp${small}`]}} ${small}w, ${'${'}${names[`webp${large}`]}} ${large}w\`,avifSrcSet:\`${'${'}${names[`avif${small}`]}} ${small}w, ${'${'}${names[`avif${large}`]}} ${large}w\`,widths:[${small},${large}]}`)
    }
    moduleGroups.push(`${group.name}:{${entries.join(',')}}`)
  }

  return `${imports.join('\n')}\n\nexport const responsiveImages={${moduleGroups.join(',')}};\nexport const responsiveImageBySrc=new Map(Object.values(responsiveImages).flatMap(group=>Object.values(group)).map(media=>[media.src,media]));\n`
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
  const previous = await readManifest()
  const previousEntries = new Map(previous.entries.map(entry => [entry.source, entry]))
  const resolvedGroups = []
  const nextEntries = []
  const expectedOutputs = new Set()
  const stale = []
  let skipped = 0

  for (const group of groups) {
    const files = await groupFiles(group)
    const resolvedGroup = { ...group, files }
    resolvedGroups.push(resolvedGroup)

    for (const file of files) {
      const sourcePath = join(root, group.directory, file)
      const source = normalizePath(relative(root, sourcePath))
      const key = safeKey(file)
      const variants = makeVariants(group, key)
      const fingerprint = digest(JSON.stringify({ group: group.name, widths: group.widths, encoder, sharp: sharp.versions.sharp }))
      const hash = await sourceHash(sourcePath)
      const previousEntry = previousEntries.get(source)
      const outputsExist = await Promise.all(variants.map(variant => exists(variant.output))).then(results => results.every(Boolean))
      const needsOptimization = force || !previousEntry || previousEntry.hash !== hash || previousEntry.fingerprint !== fingerprint || !outputsExist

      if (needsOptimization) stale.push({ source, variants })
      else skipped += 1

      const outputs = variants.map(variant => outputRelativePath(variant.output))
      outputs.forEach(output => expectedOutputs.add(output))
      nextEntries.push({ source, hash, fingerprint, outputs })
    }
  }

  const removedOutputs = previous.entries
    .flatMap(entry => entry.outputs ?? [])
    .filter(output => !expectedOutputs.has(output))

  if (check) {
    if (stale.length || removedOutputs.length) {
      console.error(`Image optimization is stale: ${stale.length} source entr${stale.length === 1 ? 'y' : 'ies'} need regeneration and ${removedOutputs.length} obsolete derivative${removedOutputs.length === 1 ? '' : 's'} need pruning.`)
      process.exitCode = 1
    } else {
      console.log(`Image optimization is current: ${skipped} source entries verified.`)
    }
  } else {
    for (const entry of stale) {
      for (const variant of entry.variants) {
        await mkdir(dirname(variant.output), { recursive: true })
        await writeVariant(join(root, entry.source), variant)
      }
    }

    for (const output of removedOutputs) await rm(safeOutputPath(output), { force: true })

    await mkdir(join(root, 'src', 'generated'), { recursive: true })
    await atomicWrite(modulePath, buildModule(resolvedGroups))
    await atomicWrite(manifestPath, `${JSON.stringify({ version: 1, entries: nextEntries }, null, 2)}\n`)
    console.log(`Responsive images are current: ${stale.length} optimized, ${skipped} unchanged, ${removedOutputs.length} pruned.`)
  }
} finally {
  await lock.close()
  await rm(lockPath, { force: true })
}
