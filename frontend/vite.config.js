import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://jhanice-birthday-1.onrender.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '') // Optionally rewrite the path
      }
    }
  }
});
