/**
 * Page I18n Helper
 *
 * Provides a single function to extract all i18n utilities from a URL.
 * Eliminates duplicated code across Astro pages.
 */

import { getLangFromUrl, useTranslations } from './utils';
import { getLocalizedBasePath } from '@/utils';
import type { Language } from '@/types/common';

/**
 * Extract all i18n utilities from URL
 *
 * @param url - Astro.url or URL object
 * @returns Object with lang, t (translation function), and basePath
 *
 * @example
 * ```astro
 * const { lang, t, basePath } = getPageI18n(Astro.url);
 * ```
 */
export function getPageI18n(url: URL) {
  const lang: Language = getLangFromUrl(url);
  const t = useTranslations(lang);
  const basePath = getLocalizedBasePath(lang);

  return { lang, t, basePath };
}
