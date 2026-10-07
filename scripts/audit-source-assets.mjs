import { readFile, readdir, stat } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'

const roots = ['src/assets', 'public']
const media = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif'])
const MB = 1024 * 1024

async function walk(dir, rows = [], excludeOptimized = false) {
  try {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (excludeOptimized && relative('src/assets', path).replaceAll('\\', '/') === 'optimized') continue
        await walk(path, rows, excludeOptimized)
      }
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
for (const root of roots) await walk(root, rows, root === 'src/assets')
rows.sort((a, b) => b.size - a.size)
const total = rows.reduce((sum, row) => sum + row.size, 0)
const oversized = rows.filter(row => row.size > MB)

console.log(`Source media inventory (generated derivatives excluded): ${rows.length} assets, ${(total / MB).toFixed(2)} MB total`)
console.log(`${oversized.length} source masters exceed 1 MB; keep masters intact and serve optimized derivatives when available.`)
for (const row of oversized) console.log(`  ${(row.size / MB).toFixed(2)} MB  ${relative('.', row.path).replaceAll('\\', '/')}`)

const manifestPath = join('src', 'assets', 'optimized', '.image-manifest.json')
try {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
  const outputs = [...new Set(manifest.entries.flatMap(entry => entry.outputs ?? []))]
  let deliveryBytes = 0
  const missing = []
  for (const output of outputs) {
    try { deliveryBytes += (await stat(join('src', 'assets', 'optimized', output))).size }
    catch (error) { if (error?.code === 'ENOENT') missing.push(output); else throw error }
  }
  console.log(`Generated delivery derivatives: ${outputs.length} files, ${(deliveryBytes / MB).toFixed(2)} MB${missing.length ? `, ${missing.length} missing` : ''}`)
  for (const output of missing) console.error(`  Missing derivative: ${output}`)
  if (missing.length) process.exitCode = 1
} catch (error) {
  if (error?.code !== 'ENOENT') throw error
  console.log('Generated delivery derivatives: manifest not found.')
}
