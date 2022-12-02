import { fileURLToPath, URL } from 'node:url';

import { type ConfigEnv, defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
  const CUSTOMIZED_CONFIG = require('./config/index.ts');
  const NODE_ENV = loadEnv(mode, __dirname).VITE_NODE_ENV;
  const API_HOST = CUSTOMIZED_CONFIG.default[NODE_ENV].apiHost;
  console.log('NODE_ENV ==> ', NODE_ENV);
  console.log('API_HOST ==> ', API_HOST);
  return {
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
      port: 8899,
      proxy: {
        // 选项写法
        '/api': {
          target: 'http://127.0.0.1:4523/m1/2005353-0-default',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 正则表达式写法
        '^/mock/.*': {
          target: API_HOST,
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
  };
});
