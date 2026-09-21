import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://odspolice2026.cz',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  image: {
    domains: ['images.unsplash.com'],
  },
});
