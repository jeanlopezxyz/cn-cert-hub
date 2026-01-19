#!/usr/bin/env node

/**
 * Enterprise i18n Page Synchronization Script
 *
 * This script ensures all pages exist for all configured locales
 * by creating language-specific pages that import from the base page.
 * This approach provides:
 * - Static generation for optimal performance
 * - SEO-friendly URLs
 * - Easy maintenance through automation
 * - Clear file structure for teams
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PAGES_DIR = path.join(__dirname, '../src/pages');
const LOCALES = ['es', 'pt']; // Non-default locales (English is default, no prefix)

// Pages to synchronize (add new pages here)
const PAGES_TO_SYNC = [
  'index.astro',
  'docs.astro',
  'best-practices.astro',
  'news.astro',
  'upcoming.astro',
  '404.astro',
  'achievements/kubestronaut.astro',
  'achievements/golden-kubestronaut.astro',
  'certifications/[id].astro',
  'news/archives.astro',
];

/**
 * Generate the content for a localized page that imports from the base
 */
function generateLocalizedPageContent(originalPath, locale) {
  const depth = originalPath.split('/').length - 1;
  const importPath = '../'.repeat(depth + 1) + originalPath.replace('.astro', '');
  const isDynamicRoute = originalPath.includes('[');

  if (isDynamicRoute) {
    // For dynamic routes, we need to export getStaticPaths
    return `---
/**
 * Auto-generated localized page for ${locale}
 * This file imports and re-exports the base page component
 * DO NOT EDIT MANUALLY - Use 'npm run sync-i18n' to regenerate
 */
import Page from '${importPath}.astro';
export { getStaticPaths } from '${importPath}.astro';
---

<Page {...Astro.props} />`;
  } else {
    // For static routes, simple import is enough
    return `---
/**
 * Auto-generated localized page for ${locale}
 * This file imports and re-exports the base page component
 * DO NOT EDIT MANUALLY - Use 'npm run sync-i18n' to regenerate
 */
import Page from '${importPath}.astro';
---

<Page {...Astro.props} />`;
  }
}

/**
 * Ensure a directory exists
 */
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

/**
 * Sync a single page to all locales
 */
function syncPage(pagePath) {
  const fullPath = path.join(PAGES_DIR, pagePath);

  // Check if source page exists
  if (!fs.existsSync(fullPath)) {
    console.warn(`Warning: Source page not found: ${pagePath}`);
    return;
  }

  // Create localized versions
  for (const locale of LOCALES) {
    const localizedPath = path.join(PAGES_DIR, locale, pagePath);
    const localizedDir = path.dirname(localizedPath);

    // Ensure directory exists
    ensureDirectoryExists(localizedDir);

    // Generate and write the localized page
    const content = generateLocalizedPageContent(pagePath, locale);
    fs.writeFileSync(localizedPath, content);
    console.log(`✓ Created/Updated: ${locale}/${pagePath}`);
  }
}

/**
 * Main synchronization function
 */
function syncAllPages() {
  console.log('Starting i18n page synchronization...\n');

  for (const page of PAGES_TO_SYNC) {
    console.log(`Syncing: ${page}`);
    syncPage(page);
    console.log('');
  }

  console.log('✅ i18n synchronization complete!');
  console.log('\nNote: Run this script whenever you add new pages or change page structure.');
}

// Run the sync
syncAllPages();
