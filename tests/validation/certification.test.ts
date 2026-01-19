import { describe, it, expect } from 'vitest';
import {
  CertificationSchema,
  ExamDomainSchema,
  ExamDomainsSchema,
  validateCertification,
  validateCertifications,
} from '../../src/validation/schemas/certification';
import {
  StudyResourceSchema,
  PracticeResourceSchema,
} from '../../src/validation/schemas/resources';
import { expectValidationToPass, expectValidationToFail } from '../helpers/validation';

describe('Certification Validation Schemas', () => {
  describe('ExamDomainSchema', () => {
    it('should validate valid domain', () => {
      const validDomain = {
        name: 'Cluster Architecture',
        weight: 25,
        topics: ['Topic 1', 'Topic 2'],
      };
      expectValidationToPass(ExamDomainSchema, validDomain);
    });

    it('should reject domain with invalid weight', () => {
      const invalidDomain = {
        name: 'Test Domain',
        weight: 150, // > 100
        topics: ['Topic 1'],
      };
      expectValidationToFail(ExamDomainSchema, invalidDomain);
    });

    it('should reject domain without topics', () => {
      const invalidDomain = {
        name: 'Test Domain',
        weight: 25,
        topics: [],
      };
      expectValidationToFail(ExamDomainSchema, invalidDomain);
    });

    it('should accept topics with URLs', () => {
      const domainWithUrls = {
        name: 'Test Domain',
        weight: 25,
        topics: [{ name: 'Topic 1', url: 'https://example.com/docs' }, 'Topic 2'],
      };
      expect(() => ExamDomainSchema.parse(domainWithUrls)).not.toThrow();
    });
  });

  describe('ExamDomainsSchema', () => {
    it('should validate domains that sum to 100%', () => {
      const validDomains = [
        { name: 'Domain 1', weight: 25, topics: ['Topic 1'] },
        { name: 'Domain 2', weight: 25, topics: ['Topic 2'] },
        { name: 'Domain 3', weight: 25, topics: ['Topic 3'] },
        { name: 'Domain 4', weight: 25, topics: ['Topic 4'] },
      ];
      expectValidationToPass(ExamDomainsSchema, validDomains);
    });

    it('should reject domains that do not sum to 100%', () => {
      const invalidDomains = [
        { name: 'Domain 1', weight: 25, topics: ['Topic 1'] },
        { name: 'Domain 2', weight: 25, topics: ['Topic 2'] },
      ];
      expect(() => ExamDomainsSchema.parse(invalidDomains)).toThrow();
    });

    it('should allow slight rounding (99-101%)', () => {
      const slightlyOff = [
        { name: 'Domain 1', weight: 33, topics: ['Topic 1'] },
        { name: 'Domain 2', weight: 33, topics: ['Topic 2'] },
        { name: 'Domain 3', weight: 34, topics: ['Topic 3'] },
      ];
      expect(() => ExamDomainsSchema.parse(slightlyOff)).not.toThrow();
    });
  });

  describe('StudyResourceSchema', () => {
    it('should validate valid resource', () => {
      const validResource = {
        title: 'Kubernetes Documentation',
        url: 'https://kubernetes.io/docs',
        description: 'Official documentation',
      };
      expectValidationToPass(StudyResourceSchema, validResource);
    });

    it('should reject resource with invalid URL', () => {
      const invalidResource = {
        title: 'Test Resource',
        url: 'not-a-valid-url',
      };
      expectValidationToFail(StudyResourceSchema, invalidResource);
    });

    it('should reject resource without title', () => {
      const invalidResource = {
        title: '',
        url: 'https://example.com',
      };
      expectValidationToFail(StudyResourceSchema, invalidResource);
    });
  });

  describe('PracticeResourceSchema', () => {
    it('should validate valid practice resource', () => {
      const validPractice = {
        title: 'killer.sh',
        url: 'https://killer.sh',
        isOfficial: true,
        type: 'simulator',
      };
      expectValidationToPass(PracticeResourceSchema, validPractice);
    });

    it('should reject invalid practice type', () => {
      const invalidPractice = {
        title: 'Test Practice',
        url: 'https://example.com',
        type: 'invalid-type',
      };
      expectValidationToFail(PracticeResourceSchema, invalidPractice);
    });
  });

  describe('CertificationSchema', () => {
    const validCertification = {
      id: 'cka',
      acronym: 'CKA',
      name: 'Certified Kubernetes Administrator',
      description: 'The Certified Kubernetes Administrator certification.',
      level: 'intermediate',
      type: 'performance',
      duration: 120,
      price: 395,
      domains: [
        { name: 'Storage', weight: 10, topics: ['Topic 1'] },
        { name: 'Troubleshooting', weight: 30, topics: ['Topic 2'] },
        { name: 'Workloads', weight: 15, topics: ['Topic 3'] },
        { name: 'Cluster', weight: 25, topics: ['Topic 4'] },
        { name: 'Services', weight: 20, topics: ['Topic 5'] },
      ],
      resources: {
        official: 'https://training.linuxfoundation.org/certification/cka',
        github: ['https://github.com/example/cka-prep'],
        practice: [
          {
            title: 'killer.sh',
            url: 'https://killer.sh',
            isOfficial: true,
          },
        ],
      },
      color: 'from-blue-500 to-blue-600',
    };

    it('should validate valid certification', () => {
      expectValidationToPass(CertificationSchema, validCertification);
    });

    it('should reject certification with invalid ID format', () => {
      const invalidCert = {
        ...validCertification,
        id: 'CKA', // Should be lowercase
      };
      expectValidationToFail(CertificationSchema, invalidCert);
    });

    it('should reject certification with invalid acronym', () => {
      const invalidCert = {
        ...validCertification,
        acronym: 'cka', // Should be uppercase
      };
      expectValidationToFail(CertificationSchema, invalidCert);
    });

    it('should reject certification with short description', () => {
      const invalidCert = {
        ...validCertification,
        description: 'Short', // Less than 10 chars
      };
      expectValidationToFail(CertificationSchema, invalidCert);
    });

    it('should reject certification with invalid level', () => {
      const invalidCert = {
        ...validCertification,
        level: 'expert', // Not a valid level
      };
      expectValidationToFail(CertificationSchema, invalidCert);
    });

    it('should reject certification with negative price', () => {
      const invalidCert = {
        ...validCertification,
        price: -100,
      };
      expectValidationToFail(CertificationSchema, invalidCert);
    });

    it('should reject certification with invalid duration', () => {
      const invalidCert = {
        ...validCertification,
        duration: 600, // > 480 (8 hours)
      };
      expectValidationToFail(CertificationSchema, invalidCert);
    });
  });

  describe('validateCertification', () => {
    it('should return success for valid certification', () => {
      const validCert = {
        id: 'test',
        acronym: 'TEST',
        name: 'Test Certification',
        description: 'A test certification for validation purposes.',
        level: 'entry',
        type: 'multiple-choice',
        duration: 90,
        price: 0,
        domains: [{ name: 'Domain', weight: 100, topics: ['Topic'] }],
        resources: {
          official: 'https://example.com',
          github: [],
          practice: [],
        },
        color: 'from-gray-500 to-gray-600',
      };
      const result = validateCertification(validCert);
      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });

    it('should return errors for invalid certification', () => {
      const invalidCert = { id: 'invalid' };
      const result = validateCertification(invalidCert);
      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
    });
  });

  describe('validateCertifications', () => {
    it('should validate multiple certifications', () => {
      const certs = [
        {
          id: 'cert-a',
          acronym: 'CERTA',
          name: 'Certification A',
          description: 'Description for certification A',
          level: 'entry',
          type: 'multiple-choice',
          duration: 60,
          price: 100,
          domains: [{ name: 'Domain', weight: 100, topics: ['Topic'] }],
          resources: {
            official: 'https://example.com/a',
            github: [],
            practice: [],
          },
          color: 'from-red-500 to-red-600',
        },
        { id: 'invalid' }, // Invalid
      ];
      const result = validateCertifications(certs);
      expect(result.valid).toHaveLength(1);
      expect(result.invalid).toHaveLength(1);
    });
  });
});
