import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import sharp from 'sharp'

const root = resolve(import.meta.dirname, '..')
const output = resolve(root, 'src/assets/atmosphere')
const layers = [
  { source: 'data/ui/horizontal-dream-fluffy-clouds-landscaped-cut-transparent-backgrounds-3d-illustration-png.webp', name: 'cloud-distant-horizon.webp', outputWidth: 1440, quality: 78 },
  { source: 'data/ui/white-clear-clouds-cutout-backgrounds-3d-illustration-png.webp', name: 'cloud-mid-field.webp', outputWidth: 1280, quality: 80 },
  { source: 'data/ui/isolated-white-clouds-smooth-realistic-shapes-on-transparent-backgrounds-3d-render-png.webp', name: 'cloud-near-mass.webp', outputWidth: 1120, quality: 82 },
  { source: 'data/ui/cutout-clean-white-cloud-transparent-backgrounds-special-effect-3d-illustration-png.png', name: 'cloud-left-fragment.webp', outputWidth: 960, quality: 80 },
  { source: 'data/ui/heaven-oxygen-smooth-cloudscape-transparent-backgrounds-special-effect-3d-rendering-file-png.webp', name: 'cloud-right-fragment.webp', outputWidth: 960, quality: 80 },
]

await mkdir(output, { recursive: true })
await Promise.all(layers.map(({ source, name, outputWidth, quality }) => sharp(resolve(root, source)).rotate().resize({ width: outputWidth, withoutEnlargement: true }).webp({ quality, alphaQuality: 100, smartSubsample: true }).toFile(resolve(output, name))))
console.log(`Cloud atmosphere assets written to ${output}.`)
