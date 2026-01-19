/**
 * Quiz Utilities
 * Centralized exports for quiz utility functions
 */

// State utilities
export { createDefaultState, loadState, saveState, clearState, getStorageKey } from './state';

// Calculation utilities
export {
  shuffleArray,
  getActiveQuestions,
  calculateScore,
  calculateProgress,
  countAnswered,
  isAnswerCorrect,
  generateQuestionCountOptions,
  getOptionLetter,
} from './calculations';

// Share utilities
export {
  generateShareText,
  canShareFiles,
  generateResultImage,
  downloadImage,
  SOCIAL_SHARE_URLS,
  openSocialShare,
} from './share';
