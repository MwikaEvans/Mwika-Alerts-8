import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Fixed config for Vercel build
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    port: 5173
  }
})
