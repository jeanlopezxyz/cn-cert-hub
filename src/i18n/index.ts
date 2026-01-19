/**
 * I18n Barrel Export
 *
 * Re-exports all i18n utilities and types for convenient importing.
 */

export { getLangFromUrl, useTranslations, translateCertificationValue } from './utils';
export { getPageI18n } from './page-helpers';
export { UI, DEFAULT_LANG, LANGUAGES } from './ui';

export type { Language } from '@/types/common';
