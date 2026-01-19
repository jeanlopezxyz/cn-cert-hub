/**
 * Shared test helpers and fixtures for quiz-related tests
 */

import type { Question, QuizState } from '../../src/types/quiz';

/**
 * Creates a mock question with customizable properties
 */
export function createMockQuestion(overrides: Partial<Question> = {}): Question {
  return {
    id: 'q1',
    domain: 'Domain 1',
    question: 'Question 1?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 0,
    explanation: 'Explanation 1',
    ...overrides,
  };
}

/**
 * Standard set of mock questions for testing
 */
export const MOCK_QUESTIONS: Question[] = [
  {
    id: 'q1',
    domain: 'Domain 1',
    question: 'Question 1?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 0,
    explanation: 'Explanation 1',
  },
  {
    id: 'q2',
    domain: 'Domain 1',
    question: 'Question 2?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 1,
    explanation: 'Explanation 2',
  },
  {
    id: 'q3',
    domain: 'Domain 2',
    question: 'Question 3?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 2,
    explanation: 'Explanation 3',
  },
  {
    id: 'q4',
    domain: 'Domain 2',
    question: 'Question 4?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 3,
    explanation: 'Explanation 4',
  },
];

/**
 * Creates a mock quiz state with customizable properties
 */
export function createMockQuizState(overrides: Partial<QuizState> = {}): QuizState {
  return {
    isActive: true,
    mode: 'exam',
    currentQuestion: 0,
    answers: [],
    startTime: Date.now() - 60000, // 1 minute ago
    showResults: false,
    selectedQuestionCount: 4,
    activeQuestionIds: ['q1', 'q2', 'q3', 'q4'],
    ...overrides,
  };
}

/**
 * Creates a large set of questions for testing pagination/limits
 */
export function createMockQuestionSet(count: number): Question[] {
  const baseQuestion = createMockQuestion();
  return Array.from({ length: count }, (_, i) => ({
    ...baseQuestion,
    id: `q${i + 1}`,
    question: `Question ${i + 1}?`,
    correctAnswer: i % 4,
  }));
}
