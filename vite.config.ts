import { defineConfig } from 'vite';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  server: {
    port: 5000,
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
