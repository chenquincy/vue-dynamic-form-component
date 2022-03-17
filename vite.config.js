import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
import singleCssPlugin from './build/ViteSingleCssPlugin';
import { name as packageName } from './package.json'

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, './lib'),
    lib: {
      entry: path.resolve(__dirname, './packages/index.js'),
      name: packageName,
      formats: ['umd', 'es', 'cjs'],
      fileName: format => {
        return `${packageName}.${format}.js`;
      }
    },
    rollupOptions: {
      external: ['vue', 'element-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'element-ui': 'Element'
        },
        exports: 'named'
      }
    }
  },
  plugins: [createVuePlugin(), singleCssPlugin()]
})
