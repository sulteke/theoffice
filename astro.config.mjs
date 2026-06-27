import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/business.ts';

// https://astro.build/config
export default defineConfig({
  // Public URL of the site (used for SEO canonical links, sitemap & social previews).
  // Change this in src/data/business.ts (SITE_URL), not here.
  site: SITE_URL,

  // Fully static website -> outputs a plain `dist/` folder. No server needed.
  output: 'static',

  // ----------------------------------------------------------------------
  // Bilingual routing. Russian is the default; both languages are prefixed,
  // so pages live at /ru/... and /kk/.... The root "/" redirects to /ru/
  // (handled by src/pages/index.astro).
  // ----------------------------------------------------------------------
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'kk'],
    routing: {
      prefixDefaultLocale: true,
      // We do our own root redirect (src/pages/index.astro) so we keep this off
      // to avoid a build conflict with that page.
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    // Tailwind CSS. We disable the auto-injected base styles because we import
    // our own global stylesheet (src/styles/global.css) that includes them.
    tailwind({ applyBaseStyles: false }),
    // Auto-generates sitemap.xml with hreflang links for ru/kk.
    sitemap({
      i18n: {
        defaultLocale: 'ru',
        locales: { ru: 'ru-KZ', kk: 'kk-KZ' },
      },
    }),
  ],
});
