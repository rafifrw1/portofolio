import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: ganti 'nama-repo-kamu' dengan nama repository GitHub kamu,
// contoh jika repo-nya "budi.github.io/portfolio" -> base: '/portfolio/'
// Jika repo-nya "budi.github.io" (user/organization page) -> base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/portofolio/',
})
