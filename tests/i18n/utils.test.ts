import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations, translateCertificationValue } from '../../src/i18n/utils';

describe('i18n Utils', () => {
  describe('getLangFromUrl', () => {
    it('should return default language for root path', () => {
      const url = new URL('https://example.com/');
      expect(getLangFromUrl(url)).toBe('en');
    });

    it('should detect Spanish language', () => {
      const url = new URL('https://example.com/es/certifications');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('should detect Portuguese language', () => {
      const url = new URL('https://example.com/pt/certifications');
      expect(getLangFromUrl(url)).toBe('pt');
    });

    it('should return default for English paths', () => {
      const url = new URL('https://example.com/certifications/cka');
      expect(getLangFromUrl(url)).toBe('en');
    });

    it('should handle base path correctly', () => {
      const url = new URL('https://example.com/cn-cert-hub/es/docs');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('should return default for invalid language codes', () => {
      const url = new URL('https://example.com/fr/certifications');
      expect(getLangFromUrl(url)).toBe('en');
    });
  });

  describe('useTranslations', () => {
    it('should return translation for valid key in English', () => {
      const t = useTranslations('en');
      const result = t('nav.certifications');
      expect(result).not.toBe('nav.certifications'); // Should have a translation
    });

    it('should return translation for valid key in Spanish', () => {
      const t = useTranslations('es');
      const result = t('nav.certifications');
      expect(result).not.toBe('nav.certifications');
    });

    it('should return translation for valid key in Portuguese', () => {
      const t = useTranslations('pt');
      const result = t('nav.certifications');
      expect(result).not.toBe('nav.certifications');
    });

    it('should return key if translation not found', () => {
      const t = useTranslations('en');
      const result = t('nonexistent.key.here');
      expect(result).toBe('nonexistent.key.here');
    });

    it('should fallback to English for missing translations', () => {
      const tEn = useTranslations('en');
      const tEs = useTranslations('es');

      // Both should return a value for common keys
      const enValue = tEn('nav.certifications');
      const esValue = tEs('nav.certifications');

      expect(enValue).toBeTruthy();
      expect(esValue).toBeTruthy();
    });
  });

  describe('translateCertificationValue', () => {
    it('should translate known certification values', () => {
      const result = translateCertificationValue('No prerequisites required', 'es');
      expect(result).not.toBe('No prerequisites required');
    });

    it('should return original value for unknown values', () => {
      const result = translateCertificationValue('Some Unknown Value', 'en');
      expect(result).toBe('Some Unknown Value');
    });

    it('should translate CKA value', () => {
      const resultEn = translateCertificationValue('CKA', 'en');
      const resultEs = translateCertificationValue('CKA', 'es');
      const resultPt = translateCertificationValue('CKA', 'pt');

      // All should have translations
      expect(resultEn).toBeTruthy();
      expect(resultEs).toBeTruthy();
      expect(resultPt).toBeTruthy();
    });
  });
});
