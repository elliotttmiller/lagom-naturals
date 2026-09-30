import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import sharp from 'sharp'

const root = resolve(import.meta.dirname, '..')
const output = resolve(root, 'src/assets/atmosphere/clouds')
const layers = [
  { source: 'data/ui/clouds-pack/09.png', name: 'cloud-09.webp', outputWidth: 1120, quality: 82 },
  { source: 'data/ui/clouds-pack/10.png', name: 'cloud-10.webp', outputWidth: 1280, quality: 82 },
  { source: 'data/ui/clouds-pack/14.png', name: 'cloud-14.webp', outputWidth: 1440, quality: 82 },
  { source: 'data/ui/clouds-pack/16.png', name: 'cloud-16.webp', outputWidth: 1280, quality: 82 },
  { source: 'data/ui/clouds-pack/17.png', name: 'cloud-17.webp', outputWidth: 1440, quality: 82 },
  { source: 'data/ui/clouds-pack/19.png', name: 'cloud-19.webp', outputWidth: 1120, quality: 82 },
  { source: 'data/ui/clouds-pack/21.png', name: 'cloud-21.webp', outputWidth: 1280, quality: 82 },
]

await mkdir(output, { recursive: true })
await Promise.all(layers.map(({ source, name, outputWidth, quality }) => sharp(resolve(root, source)).rotate().resize({ width: outputWidth, withoutEnlargement: true }).webp({ quality, alphaQuality: 100, smartSubsample: true }).toFile(resolve(output, name))))
console.log(`Cloud atmosphere assets written to ${output}.`)
