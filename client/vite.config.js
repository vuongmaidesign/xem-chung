import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Tương thích 100% với GitHub Pages sub-path (/xem-chung/)
  server: {
    port: 5173,
    host: true,
  },
});
