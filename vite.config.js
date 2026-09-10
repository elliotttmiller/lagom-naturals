import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const configuredBase = process.env.GITHUB_PAGES_BASE || (process.env.NODE_ENV === 'production' ? '/lagom-naturals/' : '/')
const base = configuredBase === '/' ? '/' : `/${configuredBase.replace(/^\/+|\/+$/g, '')}/`

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'docs',
    target: 'es2020',
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 300,
    assetsInlineLimit: 4096,
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('/motion/') || id.includes('/framer-motion/') || id.includes('/motion-dom/') || id.includes('/motion-utils/')) return 'motion'
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/react-router')) return 'react'
          if (id.includes('/lucide-react/')) return 'icons'
        },
      },
    },
  },
})
