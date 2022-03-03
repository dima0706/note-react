import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8088,
    proxy: fetchProxy()
  },
  plugins: [react()]
})

function fetchProxy() {
  if (isProd) {
    return {};
  }
  return {};
}