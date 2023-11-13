import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
      ]
    }
  })],
  server: {
    port: 9000,
    host: true,
    proxy: {
      '/api': {
        target: "http://127.0.0.1:8880",
        changeOrigin: true,
        rewrite: (path) => {
          console.log("path", path);
          return path.replace(/^\/api/, '/api')
        },
        ws: true,
      }
    }
  }
})
