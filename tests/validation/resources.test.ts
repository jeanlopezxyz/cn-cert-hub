import { describe, it, expect } from 'vitest';
import {
  PracticeTypeSchema,
  BookFormatSchema,
  PracticeResourceSchema,
  BookResourceSchema,
  VideoResourceSchema,
  CertificationResourcesSchema,
  validateResources,
  validateAllResources,
  getResourceStats,
} from '../../src/validation/schemas/resources';
import { DifficultyLevelSchema } from '../../src/validation/schemas/common';

describe('Resources Validation Schemas', () => {
  describe('PracticeTypeSchema', () => {
    it('should accept valid practice types', () => {
      expect(() => PracticeTypeSchema.parse('simulator')).not.toThrow();
      expect(() => PracticeTypeSchema.parse('scenario')).not.toThrow();
      expect(() => PracticeTypeSchema.parse('lab')).not.toThrow();
      expect(() => PracticeTypeSchema.parse('course')).not.toThrow();
      expect(() => PracticeTypeSchema.parse('video')).not.toThrow();
      expect(() => PracticeTypeSchema.parse('playground')).not.toThrow();
    });

    it('should reject invalid practice types', () => {
      expect(() => PracticeTypeSchema.parse('invalid')).toThrow();
      expect(() => PracticeTypeSchema.parse('workshop')).toThrow();
    });
  });

  describe('BookFormatSchema', () => {
    it('should accept valid book formats', () => {
      expect(() => BookFormatSchema.parse('ebook')).not.toThrow();
      expect(() => BookFormatSchema.parse('paperback')).not.toThrow();
      expect(() => BookFormatSchema.parse('hardcover')).not.toThrow();
      expect(() => BookFormatSchema.parse('pdf')).not.toThrow();
    });

    it('should reject invalid book formats', () => {
      expect(() => BookFormatSchema.parse('audiobook')).toThrow();
    });
  });

  describe('DifficultyLevelSchema', () => {
    it('should accept valid difficulty levels', () => {
      expect(() => DifficultyLevelSchema.parse('beginner')).not.toThrow();
      expect(() => DifficultyLevelSchema.parse('entry')).not.toThrow();
      expect(() => DifficultyLevelSchema.parse('intermediate')).not.toThrow();
      expect(() => DifficultyLevelSchema.parse('advanced')).not.toThrow();
      expect(() => DifficultyLevelSchema.parse('professional')).not.toThrow();
    });

    it('should reject invalid difficulty levels', () => {
      expect(() => DifficultyLevelSchema.parse('expert')).toThrow();
      expect(() => DifficultyLevelSchema.parse('easy')).toThrow();
    });
  });

  describe('PracticeResourceSchema', () => {
    it('should validate valid practice resource', () => {
      const validResource = {
        title: 'Killer.sh Simulator',
        url: 'https://killer.sh/',
        description: 'Official exam simulator',
        isPaid: true,
        isOfficial: true,
        type: 'simulator',
        difficulty: 'intermediate',
      };
      expect(() => PracticeResourceSchema.parse(validResource)).not.toThrow();
    });

    it('should accept minimal practice resource', () => {
      const minimal = {
        title: 'Practice Lab',
        url: 'https://example.com/lab',
      };
      expect(() => PracticeResourceSchema.parse(minimal)).not.toThrow();
    });

    it('should reject resource without title', () => {
      const invalid = {
        title: '',
        url: 'https://example.com',
      };
      expect(() => PracticeResourceSchema.parse(invalid)).toThrow();
    });

    it('should reject resource with invalid URL', () => {
      const invalid = {
        title: 'Test Resource',
        url: 'not-a-url',
      };
      expect(() => PracticeResourceSchema.parse(invalid)).toThrow();
    });
  });

  describe('BookResourceSchema', () => {
    it('should validate valid book resource', () => {
      const validBook = {
        title: 'Kubernetes: Up and Running',
        url: 'https://www.oreilly.com/library/view/kubernetes/',
        author: 'Brendan Burns',
        description: 'Comprehensive Kubernetes guide',
        isPaid: true,
        format: 'ebook',
        year: 2024,
        difficulty: 'intermediate',
      };
      expect(() => BookResourceSchema.parse(validBook)).not.toThrow();
    });

    it('should reject book with invalid year', () => {
      const invalid = {
        title: 'Old Book',
        url: 'https://example.com/book',
        year: 1990,
      };
      expect(() => BookResourceSchema.parse(invalid)).toThrow();
    });
  });

  describe('VideoResourceSchema', () => {
    it('should validate valid video resource', () => {
      const validVideo = {
        title: 'CKA Course',
        url: 'https://youtube.com/watch?v=abc',
        author: 'TechWorld',
        description: 'Complete CKA preparation',
        isPaid: false,
        platform: 'YouTube',
        duration: '10 hours',
        year: 2024,
        difficulty: 'intermediate',
      };
      expect(() => VideoResourceSchema.parse(validVideo)).not.toThrow();
    });
  });

  describe('CertificationResourcesSchema', () => {
    const validResources = {
      official: 'https://www.cncf.io/certification/cka/',
      github: ['https://github.com/example/cka-prep', 'https://github.com/example/k8s-exercises'],
      practice: [
        {
          title: 'Killer.sh',
          url: 'https://killer.sh/',
          isOfficial: true,
        },
      ],
      books: [
        {
          title: 'K8s Guide',
          url: 'https://example.com/book',
          isPaid: false,
        },
      ],
      videos: [
        {
          title: 'CKA Tutorial',
          url: 'https://youtube.com/watch?v=123',
        },
      ],
    };

    it('should validate valid certification resources', () => {
      expect(() => CertificationResourcesSchema.parse(validResources)).not.toThrow();
    });

    it('should require official URL', () => {
      const invalid = { ...validResources, official: '' };
      expect(() => CertificationResourcesSchema.parse(invalid)).toThrow();
    });

    it('should validate resources with only official URL', () => {
      const minimal = {
        official: 'https://www.cncf.io/certification/test/',
      };
      expect(() => CertificationResourcesSchema.parse(minimal)).not.toThrow();
    });

    it('should reject invalid GitHub URLs', () => {
      const invalidUrl = {
        official: 'https://example.com',
        github: ['not-a-url'],
        practice: [],
      };
      expect(() => CertificationResourcesSchema.parse(invalidUrl)).toThrow();
    });

    it('should reject non-GitHub URLs in github field', () => {
      const nonGitHub = {
        official: 'https://example.com',
        github: ['https://gitlab.com/example/repo'],
        practice: [],
      };
      expect(() => CertificationResourcesSchema.parse(nonGitHub)).toThrow();
    });
  });

  describe('validateResources', () => {
    it('should return success for valid resources', () => {
      const valid = {
        official: 'https://example.com/cert',
        practice: [{ title: 'Lab', url: 'https://example.com/lab' }],
      };
      const result = validateResources(valid);
      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });

    it('should return errors for invalid resources', () => {
      const invalid = { official: 'not-a-url' };
      const result = validateResources(invalid);
      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
    });
  });

  describe('validateAllResources', () => {
    it('should validate multiple certification resources', () => {
      const resourcesMap = {
        cka: {
          official: 'https://example.com/cka',
          practice: [{ title: 'Lab', url: 'https://example.com/lab' }],
          books: [{ title: 'Book', url: 'https://example.com/book' }],
        },
        ckad: {
          official: 'https://example.com/ckad',
        },
      };
      const result = validateAllResources(resourcesMap);
      expect(result.valid).toHaveLength(2);
      expect(result.invalid).toHaveLength(0);
    });

    it('should detect invalid resources', () => {
      const resourcesMap = {
        valid: { official: 'https://example.com' },
        invalid: { official: 'not-a-url' },
      };
      const result = validateAllResources(resourcesMap);
      expect(result.valid).toHaveLength(1);
      expect(result.invalid).toHaveLength(1);
    });

    it('should warn about missing practice resources', () => {
      const resourcesMap = {
        test: { official: 'https://example.com' },
      };
      const result = validateAllResources(resourcesMap);
      expect(result.warnings.some((w) => w.includes('No practice'))).toBe(true);
    });

    it('should detect duplicate URLs', () => {
      const resourcesMap = {
        test: {
          official: 'https://example.com',
          github: ['https://github.com/test', 'https://github.com/test'],
        },
      };
      const result = validateAllResources(resourcesMap);
      expect(result.warnings.some((w) => w.includes('Duplicate'))).toBe(true);
    });
  });

  describe('getResourceStats', () => {
    it('should calculate statistics correctly', () => {
      const resources = {
        official: 'https://example.com',
        github: ['https://github.com/a', 'https://github.com/b'],
        practice: [
          { title: 'Free Lab', url: 'https://example.com/1', isPaid: false },
          { title: 'Paid Sim', url: 'https://example.com/2', isPaid: true },
        ],
        books: [
          { title: 'Free Book', url: 'https://example.com/3', isPaid: false },
          { title: 'Paid Book', url: 'https://example.com/4', isPaid: true },
        ],
        videos: [{ title: 'Video', url: 'https://example.com/5', isPaid: false }],
      };

      const stats = getResourceStats(resources);

      expect(stats.total).toBe(7); // 2 github + 2 practice + 2 books + 1 video
      expect(stats.practice).toBe(2);
      expect(stats.books).toBe(2);
      expect(stats.videos).toBe(1);
      expect(stats.github).toBe(2);
      expect(stats.freeCount).toBe(3);
      expect(stats.paidCount).toBe(2);
    });

    it('should handle empty resources', () => {
      const resources = { official: 'https://example.com' };
      const stats = getResourceStats(resources);

      expect(stats.total).toBe(0);
      expect(stats.freeCount).toBe(0);
      expect(stats.paidCount).toBe(0);
    });
  });
});
