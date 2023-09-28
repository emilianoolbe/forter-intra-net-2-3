import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './',
    build: {
      outDir: '../WebSite/Intranet/build',
      emptyOutDir: true,
      assetsDir: 'assets',
      assetsInlineLimit: 0,
    },
    rollupOptions: {    
      manualChunks: {
        'exclude-me-news': ['./src/helpers/getNews.js'],
        'exclude-me-user': ['./src/helpers/getUser.js'], 
        'exclude-me-sorteos': ['./src/helpers/getSorteos.js'],         
      },
    }
});

