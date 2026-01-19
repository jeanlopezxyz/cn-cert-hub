import { describe, it, expect } from 'vitest';
import {
  shuffleArray,
  getActiveQuestions,
  calculateScore,
  calculateProgress,
  countAnswered,
  isAnswerCorrect,
  generateQuestionCountOptions,
  getOptionLetter,
} from '../../../src/utils/quiz/calculations';
import { MOCK_QUESTIONS, createMockQuizState } from '../../helpers/quiz';

describe('Quiz Calculations', () => {
  describe('shuffleArray', () => {
    it('should return array with same length', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(original);
      expect(shuffled).toHaveLength(original.length);
    });

    it('should contain all original elements', () => {
      const original = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(original);
      original.forEach((item) => {
        expect(shuffled).toContain(item);
      });
    });

    it('should not modify original array', () => {
      const original = [1, 2, 3, 4, 5];
      const originalCopy = [...original];
      shuffleArray(original);
      expect(original).toEqual(originalCopy);
    });
  });

  describe('getActiveQuestions', () => {
    it('should return questions matching active IDs', () => {
      const state = createMockQuizState({ activeQuestionIds: ['q1', 'q3'] });
      const result = getActiveQuestions(state, MOCK_QUESTIONS);
      expect(result).toHaveLength(2);
      expect(result[0]?.id).toBe('q1');
      expect(result[1]?.id).toBe('q3');
    });

    it('should filter out non-existent question IDs', () => {
      const state = createMockQuizState({ activeQuestionIds: ['q1', 'nonexistent', 'q2'] });
      const result = getActiveQuestions(state, MOCK_QUESTIONS);
      expect(result).toHaveLength(2);
    });

    it('should return empty array for empty active IDs', () => {
      const state = createMockQuizState({ activeQuestionIds: [] });
      const result = getActiveQuestions(state, MOCK_QUESTIONS);
      expect(result).toHaveLength(0);
    });
  });

  describe('calculateScore', () => {
    it('should calculate 100% for all correct answers', () => {
      const state = createMockQuizState({
        answers: [0, 1, 2, 3], // All correct
      });
      const result = calculateScore(state, MOCK_QUESTIONS);
      expect(result.score).toBe(100);
      expect(result.correct).toBe(4);
      expect(result.total).toBe(4);
      expect(result.passed).toBe(true);
    });

    it('should calculate 0% for all incorrect answers', () => {
      const state = createMockQuizState({
        answers: [3, 3, 3, 0], // All wrong
      });
      const result = calculateScore(state, MOCK_QUESTIONS);
      expect(result.score).toBe(0);
      expect(result.correct).toBe(0);
      expect(result.passed).toBe(false);
    });

    it('should calculate 50% for half correct', () => {
      const state = createMockQuizState({
        answers: [0, 1, 0, 0], // 2 correct (q1, q2), 2 wrong
      });
      const result = calculateScore(state, MOCK_QUESTIONS);
      expect(result.score).toBe(50);
      expect(result.correct).toBe(2);
      expect(result.passed).toBe(false);
    });

    it('should respect custom passing threshold', () => {
      const state = createMockQuizState({
        answers: [0, 1, 0, 0], // 50%
      });
      const result = calculateScore(state, MOCK_QUESTIONS, 50);
      expect(result.passed).toBe(true);
    });

    it('should calculate time used in minutes', () => {
      const fiveMinutesAgo = Date.now() - 5 * 60000;
      const state = createMockQuizState({
        startTime: fiveMinutesAgo,
        answers: [0, 1, 2, 3],
      });
      const result = calculateScore(state, MOCK_QUESTIONS);
      expect(result.timeUsedMinutes).toBeGreaterThanOrEqual(5);
    });

    it('should handle empty questions', () => {
      const state = createMockQuizState({
        activeQuestionIds: [],
        answers: [],
      });
      const result = calculateScore(state, MOCK_QUESTIONS);
      expect(result.score).toBe(0);
      expect(result.total).toBe(0);
    });
  });

  describe('calculateProgress', () => {
    it('should return correct percentage', () => {
      expect(calculateProgress(0, 10)).toBe(10);
      expect(calculateProgress(4, 10)).toBe(50);
      expect(calculateProgress(9, 10)).toBe(100);
    });

    it('should handle edge cases', () => {
      expect(calculateProgress(0, 1)).toBe(100);
    });
  });

  describe('countAnswered', () => {
    it('should count non-null answers', () => {
      expect(countAnswered([0, 1, null, 2])).toBe(3);
      expect(countAnswered([null, null, null])).toBe(0);
      expect(countAnswered([0, 1, 2, 3])).toBe(4);
    });

    it('should handle empty array', () => {
      expect(countAnswered([])).toBe(0);
    });
  });

  describe('isAnswerCorrect', () => {
    it('should return true for correct answer', () => {
      expect(isAnswerCorrect(0, 0)).toBe(true);
      expect(isAnswerCorrect(2, 2)).toBe(true);
    });

    it('should return false for incorrect answer', () => {
      expect(isAnswerCorrect(1, 0)).toBe(false);
      expect(isAnswerCorrect(null, 0)).toBe(false);
    });
  });

  describe('generateQuestionCountOptions', () => {
    it('should generate options in steps of 10', () => {
      const options = generateQuestionCountOptions(35);
      expect(options).toHaveLength(4); // 10, 20, 30, 35
      expect(options[0]?.value).toBe(10);
      expect(options[1]?.value).toBe(20);
      expect(options[2]?.value).toBe(30);
      expect(options[3]?.value).toBe(35);
      expect(options[3]?.isAll).toBe(true);
    });

    it('should use custom step', () => {
      const options = generateQuestionCountOptions(25, 5);
      expect(options[0]?.value).toBe(5);
      expect(options[1]?.value).toBe(10);
    });

    it('should use custom labels', () => {
      const options = generateQuestionCountOptions(20, 10, 'preguntas', 'Todas');
      expect(options[0]?.label).toBe('10 preguntas');
      expect(options[1]?.label).toContain('Todas');
    });
  });

  describe('getOptionLetter', () => {
    it('should return correct letters', () => {
      expect(getOptionLetter(0)).toBe('A');
      expect(getOptionLetter(1)).toBe('B');
      expect(getOptionLetter(2)).toBe('C');
      expect(getOptionLetter(3)).toBe('D');
    });

    it('should handle extended options', () => {
      expect(getOptionLetter(25)).toBe('Z');
    });
  });
});
