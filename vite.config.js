import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  root: './',
  build: {
    rollupOptions: {
      external: ['react-router-hash-link']
    }
  }
}
