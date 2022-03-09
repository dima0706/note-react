import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
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
  plugins: [react()]
});

function fetchProxy() {
  if (isProd) {
    return {};
  }
  return 'http://127.0.0.1:3000';
}
