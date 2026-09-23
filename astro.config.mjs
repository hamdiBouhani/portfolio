// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hamdiBouhani.github.io',
  base: '/portfolio', // Your repo name, with a leading slash
  vite: {
    plugins: [tailwindcss()],
  },
});