import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { basename, extname, join, relative, resolve } from 'node:path'
import sharp from 'sharp'

const root = resolve(import.meta.dirname, '..')
const outputRoot = join(root, 'src', 'assets', 'optimized')
const modulePath = join(root, 'src', 'generated', 'responsiveImages.js')

const groups = [
  { name: 'products', directory: 'src/assets/products/enhanced', widths: [480, 960] },
  { name: 'merch', directory: 'src/assets/merch', widths: [480, 960] },
  { name: 'heroMobile', directory: 'src/assets/mobile', files: ['hero.webp', 'gummies-hero.webp', 'midnight-gummies-hero.webp', 'organic-gummies-hero.webp'], widths: [480, 800] },
  { name: 'heroDesktop', directory: 'src/assets/desktop', files: ['hero.webp', 'gummies-hero.webp', 'midnight-gummies-hero.webp', 'organic-gummies-hero.webp'], widths: [960, 1600] },
  { name: 'findUs', directory: 'src/assets/mobile', files: ['find-us-hero.png'], widths: [480, 960] },
  { name: 'categories', directory: 'src/assets', files: ['seltzers-thumbnail.webp', 'gummies-thumbnail.webp'], widths: [320, 640] },
]

const safeKey = file => basename(file, extname(file))
const importName = value => value.replace(/[^a-zA-Z0-9_$]/g, '_')
const moduleImports = []
const moduleGroups = []

for (const group of groups) {
  const sourceDirectory = join(root, group.directory)
  const files = group.files ?? (await readdir(sourceDirectory)).filter(file => /\.(png|jpe?g|webp)$/i.test(file))
  const entries = []

  for (const file of files) {
    const source = join(sourceDirectory, file)
    const key = safeKey(file)
    const outputDirectory = join(outputRoot, group.name)
    await mkdir(outputDirectory, { recursive: true })
    const variants = []

    for (const width of group.widths) {
      for (const format of ['avif', 'webp']) {
        const output = join(outputDirectory, `${key}-${width}.${format}`)
        const pipeline = sharp(source).rotate().resize({ width, withoutEnlargement: true })
        if (format === 'avif') await pipeline.avif({ quality: 58, effort: 2, chromaSubsampling: '4:4:4' }).toFile(output)
        else await pipeline.webp({ quality: 76, effort: 4, smartSubsample: true }).toFile(output)
        variants.push({ width, format, output })
      }
    }

    const names = {}
    for (const variant of variants) {
      const name = importName(`${group.name}_${key}_${variant.width}_${variant.format}`)
      const importPath = `../assets/${relative(join(root, 'src', 'assets'), variant.output).replaceAll('\\', '/')}`
      moduleImports.push(`import ${name} from ${JSON.stringify(importPath)};`)
      names[`${variant.format}${variant.width}`] = name
    }
    const [small, large] = group.widths
    entries.push(`${JSON.stringify(key)}:{src:${names[`webp${large}`]},webpSrcSet:\`${'${'}${names[`webp${small}`]}} ${small}w, ${'${'}${names[`webp${large}`]}} ${large}w\`,avifSrcSet:\`${'${'}${names[`avif${small}`]}} ${small}w, ${'${'}${names[`avif${large}`]}} ${large}w\`,widths:[${small},${large}]}`)
  }
  moduleGroups.push(`${group.name}:{${entries.join(',')}}`)
}

await mkdir(join(root, 'src', 'generated'), { recursive: true })
await writeFile(modulePath, `${moduleImports.join('\n')}\n\nexport const responsiveImages={${moduleGroups.join(',')}};\n`, 'utf8')
console.log(`Optimized storefront imagery written to ${relative(root, outputRoot)}.`)
