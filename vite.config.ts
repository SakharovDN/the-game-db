import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/the-game-db/' : undefined,
  plugins: [react(), checker({ typescript: true }), tsconfigPaths()],
  server: { open: true },
});
