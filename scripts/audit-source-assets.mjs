import { readdir, stat } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'

const roots = ['src/assets', 'public']
const media = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif'])
const KB = 1024
const MB = KB * KB
const preferred = { '.png': 900 * KB, '.jpg': 650 * KB, '.jpeg': 650 * KB, '.webp': 850 * KB, '.avif': 650 * KB }

async function walk(dir, rows = []) {
  try {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name)
      if (entry.isDirectory()) await walk(path, rows)
      else if (media.has(extname(entry.name).toLowerCase())) {
        const info = await stat(path)
        rows.push({ path: path.replaceAll('\\', '/'), size: info.size, ext: extname(entry.name).toLowerCase() })
      }
    }
  } catch (error) {
    if (error?.code !== 'ENOENT') throw error
  }
  return rows
}

const rows = []
for (const root of roots) await walk(root, rows)
rows.sort((a, b) => b.size - a.size)
const total = rows.reduce((sum, row) => sum + row.size, 0)
const oversized = rows.filter(row => row.size > (preferred[row.ext] || Infinity))

console.log(`Source media audit: ${rows.length} raster assets, ${(total / MB).toFixed(2)} MB total`)
console.log(`Preferred-delivery target exceeded by ${oversized.length} assets.`)
for (const row of oversized) console.log(`  ${(row.size / MB).toFixed(2)} MB  ${relative('.', row.path).replaceAll('\\', '/')}`)
console.log('\nMasters are intentionally preserved. Optimize delivery derivatives before replacing approved source photography.')
