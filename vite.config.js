import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'favicon-16x16.png', 'favicon-32x32.png'],
      manifest: {
        name: 'Forever Financial Services',
        short_name: 'ForeverFS',
        description: 'Get instant approval on Personal Loans, Home Loans, Business Loans, Car Loans & more.',
        theme_color: '#00C853',
        background_color: '#031412',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { src: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
          { src: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
      },
    }),
  ],
  build: {
    // manualChunks removed to fix Rolldown compatibility error
  },
})
