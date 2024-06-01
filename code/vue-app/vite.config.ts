import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: process.env.VITE_BASE_URL,
  plugins: [vue()],
  define: {
    'process.env': process.env
  }
});
