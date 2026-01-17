import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'vite-plugin-inline-css',
      apply: 'build',
      enforce: 'post',
      generateBundle(opts, bundle) {
        let cssFileName = '';
        let cssContent = '';

        // Find CSS file
        for (const fileName in bundle) {
          if (fileName.endsWith('.css')) {
            cssFileName = fileName;
            cssContent = bundle[fileName].source;
            delete bundle[fileName]; // Prevent emitting the CSS file
            break;
          }
        }

        // Find index.html and inject CSS
        if (cssContent) {
          for (const fileName in bundle) {
            if (fileName.endsWith('index.html')) {
              const htmlChunk = bundle[fileName];
              const re = new RegExp(`<link[^>]*?href="[^"]*${cssFileName}"[^>]*?>`, 'i');
              htmlChunk.source = htmlChunk.source.replace(re, `<style>${cssContent}</style>`);
              break;
            }
          }
        }
      }
    }
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['aos', 'swiper', 'react-icons']
        }
      }
    }
  },
})
