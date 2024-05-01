import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [vue(), AutoImport({imports: ['vue', 'pinia', '@vueuse/core', 'vue-i18n']})],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '~': '..'
    }
  },
})