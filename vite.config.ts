import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8088,
    proxy: fetchProxy()
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/styles/_mixins.less')}";`
        },
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        // 前缀追加
        require('autoprefixer')({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%'],
          grid: true
        })
      ]
    }
  }
});

function fetchProxy() {
  if (isProd) {
    return {};
  }
  return {
    '/api': {
      target: 'http://127.0.0.1:3000',
      changeOrigin: true
    }
  };
}
