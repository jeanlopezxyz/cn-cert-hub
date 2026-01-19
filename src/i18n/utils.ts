import { UI, DEFAULT_LANG } from './ui';
import type { Language } from '@/types/common';

// Re-export Language type for convenience
export type { Language } from '@/types/common';

/**
 * Get translation with fallback to default language
 */
function getTranslation(key: string, lang: Language): string {
  const langTranslations = UI[lang] as Record<string, string>;
  const defaultTranslations = UI[DEFAULT_LANG] as Record<string, string>;
  return langTranslations[key] || defaultTranslations[key] || key;
}

export function getLangFromUrl(url: URL): Language {
  const segments = url.pathname.split('/').filter(Boolean);
  // Remove base path if exists
  if (segments[0] === 'cn-cert-hub') {
    segments.shift();
  }
  // Check if first segment is a language
  if (segments[0] && segments[0] in UI) {
    return segments[0] as keyof typeof UI;
  }
  return DEFAULT_LANG;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    return getTranslation(key, lang);
  };
}

// Value map for certification translation keys
const CERTIFICATION_VALUE_MAP: Record<string, string> = {
  CKA: 'certification.values.cka',
  Kubestronaut: 'certification.values.kubestronaut',
  'Golden Kubestronaut': 'certification.values.goldenKubestronaut',
  'No prerequisites required': 'certification.values.noPrerequisites',
  'No prerequisites': 'certification.values.noPrerequisites',
  'CKA certification required': 'certification.values.ckaRequired',
  'Not applicable for multiple-choice exam': 'certification.values.notApplicableMultiple',
  'Not applicable - No hands-on simulator provided': 'certification.values.notApplicableSimulator',
  'Not applicable': 'certification.values.notApplicable',
  'No simulator - Multiple choice exam': 'certification.values.noSimulatorMultiple',
  'Online proctored, multiple-choice test with 60 questions':
    'certification.values.onlineProctoredMultiple60',
  'Online proctored, performance-based test requiring solving multiple command-line tasks':
    'certification.values.onlineProctoredPerformanceTasks',
  'One free retake included with registration cost': 'certification.values.oneFreeRetakeIncluded',
  '2 attempts (36 hours each)': 'certification.values.twoAttempts36h',
};

// Helper to translate certification values (non-hook function)
export function translateCertificationValue(value: string, lang: Language): string {
  const key = CERTIFICATION_VALUE_MAP[value];
  if (!key) return value;
  return getTranslation(key, lang);
}
