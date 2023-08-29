/* configuration : vite - =================================================================== - */
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import fs from 'fs'

export default defineConfig({
  css: { devSourcemap: true },
  preview: { port: 1024 },
  resolve: {
    alias: [ { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) } ]
  },
  server: {
    host: '127.0.0.8',
    https: { key: fs.readFileSync('.key'), cert: fs.readFileSync('.crt') },
    port: 2048
  }
})