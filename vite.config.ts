import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // 🛠️ LE TRUC LE PLUS IMPORTANT :
  // Pour dire à Vercel ou Netlify : redirige toutes les routes vers index.html
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
