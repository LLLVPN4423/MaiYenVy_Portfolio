import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    watch: {
      ignored: ['**/components_corrupted_ignore', '**/components_corrupted']
    }
  }
})
