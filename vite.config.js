import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/energreen/', // Ruta base para GitHub Pages (https://osdavene.github.io/energreen/)
  server: {
    port: 3000,
    open: true
  }
})
