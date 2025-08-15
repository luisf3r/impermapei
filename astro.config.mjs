// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Asegúrate de que la salida sea estática
  site: 'https://www.impermapei.w365.uno/',
  integrations: [tailwind(), icon(), sitemap({
    filter: (page) =>
      page !== '/gracias/' &&
      page !== '/404/',
  })],
  vite: {
    resolve: {
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@js': fileURLToPath(new URL('./src/js', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      }
    }
  }
});