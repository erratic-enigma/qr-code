/* configuration : vite - =================================================================== - */
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  base: '/qr-code/',
  resolve: {
    alias: [ { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) } ]
  }
})