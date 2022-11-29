import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/styles/theme.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://127.0.0.1:4523/m1/2005353-0-default',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正则表达式写法
      '^/mock/.*': {
        target: 'http://127.0.0.1:4523/m1/2005353-0-default',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock/, '')
      }
    }
  }

  // proxy: {
  //   '/mock': {
  //     target: 'http://127.0.0.1:4523/m1/2005353-0-default', // 实际请求地址
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/mock/, '')
  //   }
  // }
});
