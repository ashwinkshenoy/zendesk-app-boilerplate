import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: 'dist/assets',
    assetsDir: 'src',
  },
  plugins: [
    vue(),

    viteStaticCopy({
      targets: [
        // Copy translations
        {
          src: 'translations/',
          dest: '../',
        },
        // Copy assets like app icons
        {
          src: 'assets/*',
          dest: './',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 4000,
  },
});
