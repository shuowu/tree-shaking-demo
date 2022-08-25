import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  server: {
    port: 8080,
  },
  build: {
    minify: false,
    polyfillModulePreload: false,
    sourcemap: true,
    rollupOptions: {
      plugins: [visualizer({
        filename: 'dist/stats.html',
        gzipSize: true
      })]
    }
  }
});
