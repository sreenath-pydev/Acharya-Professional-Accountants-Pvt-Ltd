import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    pure: ['console.log', 'console.info', 'console.debug', 'console.trace'],
  },
  resolve: {
    alias: [
      { find: /^aos$/, replacement: path.resolve(__dirname, './src/utils/aosObserver.js') }
    ]
  },
  plugins: [
    react(),
    // Custom prerender implementation handles static generation
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
  },
})
