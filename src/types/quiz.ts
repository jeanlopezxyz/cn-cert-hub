/**
 * Quiz Types
 * Type definitions for the quiz simulator data layer
 */

import type { Language } from './common';

// ============================================================================
// Core Types
// ============================================================================

export type QuizDifficulty = 'easy' | 'medium' | 'hard';
export type QuizMode = 'exam' | 'study';

/**
 * Question interface for practice quizzes
 */
export interface Question {
  id: string;
  domain: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty?: QuizDifficulty;
  tags?: string[];
}

// ============================================================================
// State Types
// ============================================================================

/**
 * Quiz state for tracking progress
 */
export interface QuizState {
  isActive: boolean;
  mode: QuizMode | null;
  currentQuestion: number;
  answers: (number | null)[];
  startTime: number | null;
  showResults: boolean;
  selectedQuestionCount: number;
  activeQuestionIds: string[];
}

// ============================================================================
// Data Types
// ============================================================================

/**
 * Quiz data passed to the simulator
 */
export interface QuizData {
  questions: Question[];
  examDuration: number;
  certificationId: string;
  lang: Language;
  translations: QuizTranslations;
  iconPaths: Record<string, string>;
  iconBoxPresets: Record<
    string,
    {
      bgColor?: string;
      iconColor?: string;
      containerClass?: string;
      contentClass?: string;
    }
  >;
}

/**
 * Translation keys for quiz UI
 */
export interface QuizTranslations {
  title: string;
  subtitle: string;
  comingSoon: string;
  questions: string;
  duration: string;
  passing: string;
  studyMode: string;
  studyModeDesc: string;
  recommended: string;
  examMode: string;
  examModeDesc: string;
  quizComplete: string;
  passed: string;
  failed: string;
  threshold: string;
  correctCount: string;
  incorrectCount: string;
  timeUsed: string;
  takeAnother: string;
  shareResult: string;
  generating: string;
  downloadImage: string;
  copyResult: string;
  copied: string;
  imageDownloaded: string;
  question: string;
  of: string;
  finish: string;
  reset: string;
  progress: string;
  answered: string;
  correct: string;
  incorrect: string;
  explanation: string;
  correctAnswer: string;
  previous: string;
  next: string;
  finishQuiz: string;
  selectQuestions?: string;
  allQuestions?: string;
  disclaimer?: string;
  disclaimerShort?: string;
}

// ============================================================================
// Result Types
// ============================================================================

/**
 * Quiz score calculation result
 */
export interface QuizScore {
  score: number;
  correct: number;
  total: number;
  passed: boolean;
  timeUsedMinutes: number;
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Props for the quiz simulator component
 */
export interface QuizSimulatorProps {
  questions: Question[];
  examDuration: number;
  certificationId: string;
  lang: Language;
}

/**
 * Question count option for selector
 */
export interface QuestionCountOption {
  value: number;
  label: string;
  isAll: boolean;
}
