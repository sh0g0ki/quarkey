import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons({})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/font.scss";
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/reset.scss";
        @import "@/assets/scss/global.scss";`
      }
    }
  }
})
