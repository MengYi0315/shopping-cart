import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/shopping-cart/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    // CORS 設置
    cors: {
      // 限制只允許特定的源訪問
      origin: ['http://localhost:3000', 'https://yourwebsite.com'],
      // 或完全禁用 CORS（僅開發時建議）
      // origin: false,
      // 其他 CORS 選項
      methods: ['GET', 'POST'],
      credentials: true
    },
    // 限制開發服務器只接受本地連接
    host: 'localhost',
  }
})
