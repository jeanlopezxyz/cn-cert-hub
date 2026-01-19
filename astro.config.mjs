// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import path from 'path';

// Centralized i18n configuration
const I18N_CONFIG = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'pt'],
};

// https://astro.build/config
export default defineConfig({
  site: 'https://cncerthub.xyz',
  base: '/',
  output: 'static',
  prefetch: {
    // Prefetch links on hover/focus for faster navigation
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  i18n: {
    ...I18N_CONFIG,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    icon({
      include: {
        heroicons: ['*'],
        'simple-icons': ['github', 'whatsapp', 'x', 'linkedin'],
      },
    }),
    sitemap({
      i18n: {
        defaultLocale: I18N_CONFIG.defaultLocale,
        locales: Object.fromEntries(I18N_CONFIG.locales.map((locale) => [locale, locale])),
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@/app': path.resolve('./src/app'),
        '@/components': path.resolve('./src/components'),
        '@/types': path.resolve('./src/types'),
        '@/i18n': path.resolve('./src/i18n'),
        '@/data': path.resolve('./src/data'),
        '@/utils': path.resolve('./src/utils'),
        '@/validation': path.resolve('./src/validation'),
        '@/layouts': path.resolve('./src/layouts'),
        '@/scripts': path.resolve('./src/scripts'),
      },
    },
    build: {
      sourcemap: false,
      minify: 'esbuild',
      target: 'es2020',
      reportCompressedSize: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            return undefined;
          },
          chunkFileNames: '_assets/[name]-[hash].js',
          entryFileNames: '_assets/[name]-[hash].js',
          assetFileNames: '_assets/[name]-[hash].[ext]',
        },
      },
      chunkSizeWarningLimit: 200,
      cssCodeSplit: true,
    },
    optimizeDeps: {},
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
});