// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind"

// https://astro.build/config
export default defineConfig({
  site: 'https://akatukisora.github.io',
  base: process.env.NODE_ENV === 'production' ? '/my-odekake-logs' : '/',
  integrations: [
    pagefind()
  ]
});
