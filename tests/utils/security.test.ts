import { describe, it, expect } from 'vitest';
import { sanitizeInput } from '../../src/utils/security';

describe('Security Utils', () => {
  describe('sanitizeInput', () => {
    it('should remove script tags', () => {
      const result = sanitizeInput('<script>alert("xss")</script>Hello');
      expect(result).toBe('Hello');
    });

    it('should remove HTML tags', () => {
      const result = sanitizeInput('<div>Hello World</div>');
      expect(result).toBe('Hello World');
    });

    it('should handle safe input', () => {
      const result = sanitizeInput('kubernetes cka test');
      expect(result).toBe('kubernetes cka test');
    });

    it('should remove dangerous patterns', () => {
      const result = sanitizeInput('<iframe src="evil.com"></iframe>content');
      expect(result).toBe('content');
    });

    it('should truncate long input', () => {
      const longInput = 'a'.repeat(600);
      const result = sanitizeInput(longInput);
      expect(result.length).toBe(500); // Default max length
    });

    it('should handle empty input', () => {
      expect(sanitizeInput('')).toBe('');
    });

    it('should handle non-string input', () => {
      // @ts-expect-error Testing invalid input
      expect(sanitizeInput(null)).toBe('');
      // @ts-expect-error Testing invalid input
      expect(sanitizeInput(undefined)).toBe('');
    });
  });
});
