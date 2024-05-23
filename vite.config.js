import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-router-dom': require.resolve('react-router-dom'),
      'react-router-hash-link': require.resolve('react-router-hash-link')
    }
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-router-hash-link']
    }
  }
});
