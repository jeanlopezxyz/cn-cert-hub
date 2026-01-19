/**
 * Quiz Calculation Utilities
 * Pure functions for quiz logic calculations
 */

import type { Question, QuizState, QuizScore } from '@/types/quiz';
import {
  DEFAULT_PASSING_SCORE,
  DEFAULT_QUESTION_STEP,
  MILLISECONDS_PER_MINUTE,
} from '@/constants/quiz';

/**
 * Fisher-Yates shuffle algorithm
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j] as T;
    shuffled[j] = temp as T;
  }
  return shuffled;
};

/**
 * Get active questions from state
 */
export const getActiveQuestions = (state: QuizState, questions: Question[]): Question[] => {
  return state.activeQuestionIds
    .map((id) => questions.find((q) => q.id === id))
    .filter((q): q is Question => q !== undefined);
};

/**
 * Calculate quiz score
 */
export const calculateScore = (
  state: QuizState,
  questions: Question[],
  passingThreshold: number = DEFAULT_PASSING_SCORE
): QuizScore => {
  const activeQuestions = getActiveQuestions(state, questions);

  const correct = state.answers.filter(
    (ans, idx) => ans === activeQuestions[idx]?.correctAnswer
  ).length;

  const total = activeQuestions.length;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;
  const timeUsedMinutes = state.startTime
    ? Math.floor((Date.now() - state.startTime) / MILLISECONDS_PER_MINUTE)
    : 0;

  return {
    score,
    correct,
    total,
    passed: score >= passingThreshold,
    timeUsedMinutes,
  };
};

/**
 * Calculate progress percentage
 */
export const calculateProgress = (currentQuestion: number, totalQuestions: number): number => {
  return Math.round(((currentQuestion + 1) / totalQuestions) * 100);
};

/**
 * Count answered questions
 */
export const countAnswered = (answers: (number | null)[]): number => {
  return answers.filter((a) => a !== null).length;
};

/**
 * Check if answer is correct
 */
export const isAnswerCorrect = (userAnswer: number | null, correctAnswer: number): boolean => {
  return userAnswer === correctAnswer;
};

/**
 * Generate question count options
 */
export const generateQuestionCountOptions = (
  totalQuestions: number,
  step: number = DEFAULT_QUESTION_STEP,
  questionsLabel: string = 'questions',
  allQuestionsLabel: string = 'All questions'
): Array<{ value: number; label: string; isAll: boolean }> => {
  const options: Array<{ value: number; label: string; isAll: boolean }> = [];

  for (let i = step; i < totalQuestions; i += step) {
    options.push({
      value: i,
      label: `${i} ${questionsLabel}`,
      isAll: false,
    });
  }

  // Always add total as last option
  if (!options.some((o) => o.value === totalQuestions)) {
    options.push({
      value: totalQuestions,
      label: `${totalQuestions} (${allQuestionsLabel})`,
      isAll: true,
    });
  }

  return options;
};

/**
 * Get letter for option index (A, B, C, D...)
 */
export const getOptionLetter = (index: number): string => {
  return String.fromCharCode(65 + index);
};
