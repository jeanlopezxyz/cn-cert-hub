import { describe, it, expect } from 'vitest';
import {
  QuestionSchema,
  ValidatedQuestionSetSchema,
  validateQuestion,
  validateQuestions,
  getQuestionStats,
} from '../../src/validation/schemas/question';

describe('Question Validation Schemas', () => {
  describe('QuestionSchema', () => {
    const validQuestion = {
      id: 'q-001',
      domain: 'Storage',
      question: 'What is a PersistentVolume in Kubernetes?',
      options: [
        'A storage resource in the cluster',
        'A container image',
        'A network policy',
        'A service account',
      ],
      correctAnswer: 0,
      explanation: 'A PersistentVolume is a storage resource provisioned in the cluster.',
    };

    it('should validate valid question', () => {
      expect(() => QuestionSchema.parse(validQuestion)).not.toThrow();
    });

    it('should reject question with short text', () => {
      const invalid = { ...validQuestion, question: 'Short?' };
      expect(() => QuestionSchema.parse(invalid)).toThrow();
    });

    it('should reject question with less than 2 options', () => {
      const invalid = { ...validQuestion, options: ['Only one option'] };
      expect(() => QuestionSchema.parse(invalid)).toThrow();
    });

    it('should reject question with more than 6 options', () => {
      const invalid = {
        ...validQuestion,
        options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      };
      expect(() => QuestionSchema.parse(invalid)).toThrow();
    });

    it('should reject question with correctAnswer out of range', () => {
      const invalid = { ...validQuestion, correctAnswer: 5 };
      expect(() => QuestionSchema.parse(invalid)).toThrow();
    });

    it('should reject question with negative correctAnswer', () => {
      const invalid = { ...validQuestion, correctAnswer: -1 };
      expect(() => QuestionSchema.parse(invalid)).toThrow();
    });

    it('should reject question with empty ID', () => {
      const invalid = { ...validQuestion, id: '' };
      expect(() => QuestionSchema.parse(invalid)).toThrow();
    });

    it('should accept optional difficulty', () => {
      const withDifficulty = { ...validQuestion, difficulty: 'medium' };
      expect(() => QuestionSchema.parse(withDifficulty)).not.toThrow();
    });

    it('should reject invalid difficulty', () => {
      const invalid = { ...validQuestion, difficulty: 'super-hard' };
      expect(() => QuestionSchema.parse(invalid)).toThrow();
    });

    it('should accept optional tags', () => {
      const withTags = { ...validQuestion, tags: ['storage', 'pv', 'pvc'] };
      expect(() => QuestionSchema.parse(withTags)).not.toThrow();
    });
  });

  describe('ValidatedQuestionSetSchema', () => {
    it('should reject duplicate IDs', () => {
      const questionsWithDupes = [
        {
          id: 'q-001',
          domain: 'Domain',
          question: 'Question 1 text here?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 0,
          explanation: 'Explanation 1 here.',
        },
        {
          id: 'q-001', // Duplicate!
          domain: 'Domain',
          question: 'Question 2 text here?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 1,
          explanation: 'Explanation 2 here.',
        },
      ];
      expect(() => ValidatedQuestionSetSchema.parse(questionsWithDupes)).toThrow();
    });

    it('should accept unique IDs with balanced answers', () => {
      // Create balanced set with 4 questions, one for each answer
      const uniqueQuestions = [
        {
          id: 'q-001',
          domain: 'Domain',
          question: 'Question 1 text here?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 0,
          explanation: 'Explanation 1 here.',
        },
        {
          id: 'q-002',
          domain: 'Domain',
          question: 'Question 2 text here?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 1,
          explanation: 'Explanation 2 here.',
        },
        {
          id: 'q-003',
          domain: 'Domain',
          question: 'Question 3 text here?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 2,
          explanation: 'Explanation 3 here.',
        },
        {
          id: 'q-004',
          domain: 'Domain',
          question: 'Question 4 text here?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 3,
          explanation: 'Explanation 4 here.',
        },
      ];
      expect(() => ValidatedQuestionSetSchema.parse(uniqueQuestions)).not.toThrow();
    });
  });

  describe('validateQuestion', () => {
    it('should return success for valid question', () => {
      const valid = {
        id: 'test-q',
        domain: 'Test Domain',
        question: 'Is this a valid question?',
        options: ['Yes', 'No', 'Maybe', 'Unknown'],
        correctAnswer: 0,
        explanation: 'This is a valid test question explanation.',
      };
      const result = validateQuestion(valid);
      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
    });

    it('should return errors for invalid question', () => {
      const invalid = { id: 'bad', question: 'Short' };
      const result = validateQuestion(invalid);
      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
    });
  });

  describe('validateQuestions', () => {
    it('should validate array of questions', () => {
      const questions = [
        {
          id: 'valid-q',
          domain: 'Test',
          question: 'Valid question text here?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 0,
          explanation: 'Valid explanation text.',
        },
        { id: 'invalid' }, // Invalid
      ];
      const result = validateQuestions(questions);
      expect(result.valid).toHaveLength(1);
      expect(result.invalid).toHaveLength(1);
    });

    it('should detect unbalanced answer distribution', () => {
      // Create 12 questions all with correctAnswer: 0
      const unbalanced = Array.from({ length: 12 }, (_, i) => ({
        id: `q-${i.toString().padStart(3, '0')}`,
        domain: 'Domain',
        question: `Question number ${i} text?`,
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 0, // All A!
        explanation: `Explanation for question ${i}.`,
      }));
      const result = validateQuestions(unbalanced);
      expect(result.warnings.length).toBeGreaterThan(0);
      expect(result.warnings.some((w) => w.includes('unbalanced'))).toBe(true);
    });

    it('should warn about missing difficulty', () => {
      const mixedDifficulty = [
        {
          id: 'q-001',
          domain: 'Domain',
          question: 'Question with difficulty?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 0,
          explanation: 'Has difficulty.',
          difficulty: 'easy',
        },
        {
          id: 'q-002',
          domain: 'Domain',
          question: 'Question without difficulty?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 1,
          explanation: 'Missing difficulty.',
          // No difficulty!
        },
      ];
      const result = validateQuestions(mixedDifficulty);
      expect(result.warnings.some((w) => w.includes('difficulty'))).toBe(true);
    });
  });

  describe('getQuestionStats', () => {
    it('should calculate statistics correctly', () => {
      const questions = [
        {
          id: 'q1',
          domain: 'Storage',
          question: 'Question 1?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 0,
          explanation: 'Explanation 1',
          difficulty: 'easy' as const,
        },
        {
          id: 'q2',
          domain: 'Storage',
          question: 'Question 2?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 1,
          explanation: 'Explanation 2',
          difficulty: 'medium' as const,
        },
        {
          id: 'q3',
          domain: 'Networking',
          question: 'Question 3?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 2,
          explanation: 'Explanation 3',
          difficulty: 'hard' as const,
        },
        {
          id: 'q4',
          domain: 'Networking',
          question: 'Question 4?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 3,
          explanation: 'Explanation 4',
          // No difficulty
        },
      ];

      const stats = getQuestionStats(questions);

      expect(stats.total).toBe(4);
      expect(stats.byDifficulty.easy).toBe(1);
      expect(stats.byDifficulty.medium).toBe(1);
      expect(stats.byDifficulty.hard).toBe(1);
      expect(stats.byDifficulty.unset).toBe(1);
      expect(stats.byDomain['Storage']).toBe(2);
      expect(stats.byDomain['Networking']).toBe(2);
      expect(stats.answerDistribution).toEqual([1, 1, 1, 1]);
    });

    it('should handle empty array', () => {
      const stats = getQuestionStats([]);
      expect(stats.total).toBe(0);
      expect(stats.answerDistribution).toEqual([0, 0, 0, 0]);
    });
  });
});
