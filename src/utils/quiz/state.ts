/**
 * Quiz State Utilities
 * State management functions for the quiz simulator
 */

import type { Question, QuizState } from '@/types/quiz';

const STORAGE_PREFIX = 'simple-quiz-';

/**
 * Create default quiz state
 */
export const createDefaultState = (questions: Question[], defaultCount: number = 10): QuizState => {
  const count = Math.min(defaultCount, questions.length);
  return {
    isActive: false,
    mode: null,
    currentQuestion: 0,
    answers: [],
    startTime: null,
    showResults: false,
    selectedQuestionCount: count,
    activeQuestionIds: questions.slice(0, count).map((q) => q.id),
  };
};

/**
 * Load quiz state from storage
 */
export const loadState = (
  certificationId: string,
  questions: Question[],
  storage: {
    getItem: (key: string) => string | null;
  }
): QuizState => {
  const saved = storage.getItem(`${STORAGE_PREFIX}${certificationId}`);

  if (saved) {
    try {
      const parsed = JSON.parse(saved) as QuizState;

      // Ensure backwards compatibility with new fields
      if (!parsed.selectedQuestionCount) {
        parsed.selectedQuestionCount = Math.min(10, questions.length);
      }
      if (!parsed.activeQuestionIds || parsed.activeQuestionIds.length === 0) {
        parsed.activeQuestionIds = questions
          .slice(0, parsed.selectedQuestionCount)
          .map((q) => q.id);
      }

      return parsed;
    } catch {
      // Invalid state, return default
    }
  }

  return createDefaultState(questions);
};

/**
 * Save quiz state to storage
 */
export const saveState = (
  certificationId: string,
  state: QuizState,
  storage: {
    setBatched: (key: string, value: string) => void;
  }
): void => {
  if (state.isActive || state.showResults) {
    storage.setBatched(`${STORAGE_PREFIX}${certificationId}`, JSON.stringify(state));
  }
};

/**
 * Clear quiz state from storage
 */
export const clearState = (
  certificationId: string,
  storage: {
    removeItem: (key: string) => void;
  }
): void => {
  storage.removeItem(`${STORAGE_PREFIX}${certificationId}`);
};

/**
 * Get storage key for certification
 */
export const getStorageKey = (certificationId: string): string => {
  return `${STORAGE_PREFIX}${certificationId}`;
};
