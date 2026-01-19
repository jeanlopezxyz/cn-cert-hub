/**
 * URL Building Utilities
 * Functions for creating localized and structured URLs
 */

import { APP_CONFIG } from '@/app';
import type { Language } from '@/types';

/**
 * Build a localized URL path
 * Used for creating i18n-aware URLs throughout the application
 * @param path - The path to localize (e.g., '/news', '/certifications/cka')
 * @param lang - The language code ('en', 'es', 'pt')
 * @returns The full localized path with basePath prefix
 */
export function buildLocalizedPath(path: string, lang: Language): string {
  const basePath = APP_CONFIG.basePath;
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  return `${basePath}${langPrefix}${path}`;
}

/**
 * Build certification detail URL
 * Used in: CertificationCard
 */
export function buildCertificationUrl(certId: string, lang: Language): string {
  return buildLocalizedPath(`/certifications/${certId}`, lang);
}

/**
 * Get the localized base path (without trailing path)
 * Used for constructing URLs in pages like 404, achievements, news archives
 * @example getLocalizedBasePath('en') => '' or '/base'
 * @example getLocalizedBasePath('es') => '/es' or '/base/es'
 */
export function getLocalizedBasePath(lang: Language): string {
  const basePath = APP_CONFIG.basePath;
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  return `${basePath}${langPrefix}`;
}

/**
 * Get the static asset base path (not localized)
 * Used for images, icons, and other static assets
 * @example getAssetPath('/kubestronaut-icon.svg') => '/kubestronaut-icon.svg' or '/base/kubestronaut-icon.svg'
 */
export function getAssetPath(path: string): string {
  return `${APP_CONFIG.basePath}${path}`;
}
