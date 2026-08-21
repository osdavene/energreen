import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Permite que funcione perfectamente en GitHub Pages, Vercel, Netlify o cualquier servidor
  server: {
    port: 3000,
    open: true
  }
})
