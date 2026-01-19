import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    // Test files location
    include: ['tests/**/*.test.ts'],

    // Exclude node_modules
    exclude: ['node_modules/**'],

    // Environment (use jsdom for client-side code tests)
    environment: 'jsdom',

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts', 'src/**/*.d.ts', 'src/env.d.ts'],
    },

    // Global test timeout
    testTimeout: 10000,

    // Reporter
    reporters: ['verbose'],
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/app': resolve(__dirname, './src/app'),
      '@/components': resolve(__dirname, './src/components'),
      '@/types': resolve(__dirname, './src/types'),
      '@/i18n': resolve(__dirname, './src/i18n'),
      '@/data': resolve(__dirname, './src/data'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/validation': resolve(__dirname, './src/validation'),
      '@/layouts': resolve(__dirname, './src/layouts'),
      '@/scripts': resolve(__dirname, './src/scripts'),
    },
  },
});
