// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '*.config.*',
      'src/scripts/**',
      'scripts/**',
      '**/*.astro',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',

      // General
      'no-console': 'warn',
      'no-duplicate-imports': 'error',
      'prefer-const': 'warn',
    },
  }
);
