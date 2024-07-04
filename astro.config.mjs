import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
//import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [tailwind(), mdx(), react(), vue()],
  markdown: {
    rehypePlugins: [
      // ... other rehype plugins
      ['remark-smartypants', { locale: 'en-US' }], // Enable smart quotes
    ],
  },
});