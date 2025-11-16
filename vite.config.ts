import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages with repo name as subdirectory, uncomment:
  // base: '/lovemax-the-future/',
})

