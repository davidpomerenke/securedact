import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

function copyMupdfFiles() {
  return {
    name: 'copy-mupdf-files',
    writeBundle() {
      const srcDir = resolve(__dirname, 'node_modules/mupdf/dist')
      const destDir = resolve(__dirname, 'dist/assets')
      const filesToCopy = [
        'mupdf-wasm.js',
        'mupdf-wasm.wasm',
        'mupdf.js',
        'tasks.js'
      ]

      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true })
      }

      filesToCopy.forEach(file => {
        const src = path.join(srcDir, file)
        const dest = path.join(destDir, file)
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest)
          console.log(`Copied ${file} to ${destDir}`)
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyMupdfFiles()],
  worker: {
    format: 'es'
  },
  server: {
    port: 3000,
    proxy: {
        '/api': {
            target: 'http://localhost:8000',
            changeOrigin: true,
        }
    }
},
})
