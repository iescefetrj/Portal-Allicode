import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Escuta em todas as interfaces (necessário dentro do container)
    host: true,
    port: 5173,
    // Polling deixa o hot reload confiável em bind mounts no Windows/macOS
    watch: { usePolling: process.env.CHOKIDAR_USEPOLLING === 'true' },
  },
});
