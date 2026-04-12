import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/gscript': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/gscript/, ''),
        secure: false
      }
    },
  },
})
