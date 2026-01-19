import { describe, it, expect, vi } from 'vitest';
import type { QuizState } from '../../../src/types/quiz';
import {
  createDefaultState,
  loadState,
  saveState,
  clearState,
  getStorageKey,
} from '../../../src/utils/quiz/state';
import { MOCK_QUESTIONS, createMockQuestionSet } from '../../helpers/quiz';

describe('Quiz State Utilities', () => {
  describe('createDefaultState', () => {
    it('should create default state with correct structure', () => {
      const state = createDefaultState(MOCK_QUESTIONS);
      expect(state.isActive).toBe(false);
      expect(state.mode).toBeNull();
      expect(state.currentQuestion).toBe(0);
      expect(state.answers).toEqual([]);
      expect(state.startTime).toBeNull();
      expect(state.showResults).toBe(false);
    });

    it('should limit question count to default', () => {
      const state = createDefaultState(MOCK_QUESTIONS, 2);
      expect(state.selectedQuestionCount).toBe(2);
      expect(state.activeQuestionIds).toHaveLength(2);
      expect(state.activeQuestionIds).toEqual(['q1', 'q2']);
    });

    it('should not exceed available questions', () => {
      const state = createDefaultState(MOCK_QUESTIONS, 100);
      expect(state.selectedQuestionCount).toBe(4);
      expect(state.activeQuestionIds).toHaveLength(4);
    });

    it('should use default count of 10', () => {
      const manyQuestions = createMockQuestionSet(20);
      const state = createDefaultState(manyQuestions);
      expect(state.selectedQuestionCount).toBe(10);
      expect(state.activeQuestionIds).toHaveLength(10);
    });
  });

  describe('loadState', () => {
    it('should return saved state from storage', () => {
      const savedState: QuizState = {
        isActive: true,
        mode: 'exam',
        currentQuestion: 2,
        answers: [0, 1],
        startTime: Date.now(),
        showResults: false,
        selectedQuestionCount: 3,
        activeQuestionIds: ['q1', 'q2', 'q3'],
      };

      const mockStorage = {
        getItem: vi.fn(() => JSON.stringify(savedState)),
      };

      const result = loadState('cka', MOCK_QUESTIONS, mockStorage);
      expect(mockStorage.getItem).toHaveBeenCalledWith('simple-quiz-cka');
      expect(result.isActive).toBe(true);
      expect(result.mode).toBe('exam');
      expect(result.currentQuestion).toBe(2);
    });

    it('should return default state when nothing saved', () => {
      const mockStorage = {
        getItem: vi.fn(() => null),
      };

      const result = loadState('cka', MOCK_QUESTIONS, mockStorage);
      expect(result.isActive).toBe(false);
      expect(result.mode).toBeNull();
    });

    it('should return default state for invalid JSON', () => {
      const mockStorage = {
        getItem: vi.fn(() => 'invalid json'),
      };

      const result = loadState('cka', MOCK_QUESTIONS, mockStorage);
      expect(result.isActive).toBe(false);
    });

    it('should handle backwards compatibility for missing fields', () => {
      const oldState = {
        isActive: true,
        mode: 'study',
        currentQuestion: 1,
        answers: [0],
        startTime: Date.now(),
        showResults: false,
        // Missing: selectedQuestionCount, activeQuestionIds
      };

      const mockStorage = {
        getItem: vi.fn(() => JSON.stringify(oldState)),
      };

      const result = loadState('cka', MOCK_QUESTIONS, mockStorage);
      expect(result.selectedQuestionCount).toBe(4); // min(10, questions.length)
      expect(result.activeQuestionIds).toHaveLength(4);
    });
  });

  describe('saveState', () => {
    it('should save state when quiz is active', () => {
      const state: QuizState = {
        isActive: true,
        mode: 'exam',
        currentQuestion: 2,
        answers: [0, 1],
        startTime: Date.now(),
        showResults: false,
        selectedQuestionCount: 3,
        activeQuestionIds: ['q1', 'q2', 'q3'],
      };

      const mockStorage = {
        setBatched: vi.fn(),
      };

      saveState('cka', state, mockStorage);
      expect(mockStorage.setBatched).toHaveBeenCalledWith('simple-quiz-cka', expect.any(String));
    });

    it('should save state when showing results', () => {
      const state: QuizState = {
        isActive: false,
        mode: 'exam',
        currentQuestion: 3,
        answers: [0, 1, 2],
        startTime: Date.now(),
        showResults: true,
        selectedQuestionCount: 3,
        activeQuestionIds: ['q1', 'q2', 'q3'],
      };

      const mockStorage = {
        setBatched: vi.fn(),
      };

      saveState('cka', state, mockStorage);
      expect(mockStorage.setBatched).toHaveBeenCalled();
    });

    it('should not save when inactive and not showing results', () => {
      const state: QuizState = {
        isActive: false,
        mode: null,
        currentQuestion: 0,
        answers: [],
        startTime: null,
        showResults: false,
        selectedQuestionCount: 10,
        activeQuestionIds: [],
      };

      const mockStorage = {
        setBatched: vi.fn(),
      };

      saveState('cka', state, mockStorage);
      expect(mockStorage.setBatched).not.toHaveBeenCalled();
    });
  });

  describe('clearState', () => {
    it('should remove state from storage', () => {
      const mockStorage = {
        removeItem: vi.fn(),
      };

      clearState('cka', mockStorage);
      expect(mockStorage.removeItem).toHaveBeenCalledWith('simple-quiz-cka');
    });
  });

  describe('getStorageKey', () => {
    it('should return correct storage key', () => {
      expect(getStorageKey('cka')).toBe('simple-quiz-cka');
      expect(getStorageKey('ckad')).toBe('simple-quiz-ckad');
    });
  });
});
