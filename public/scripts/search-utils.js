/* global window */
/**
 * Search Utilities - Global script for SearchBar component
 * Loaded via script tag in Layout to make it available to inline scripts
 */

const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 1,
  MAX_SUGGESTIONS: 5,
  DEBOUNCE_MS: 150,
  SCORE_THRESHOLDS: {
    SINGLE_CHAR: 40,
    TWO_CHARS: 25,
    DEFAULT: 15,
  },
  SCORE_WEIGHTS: {
    EXACT_MATCH: 100,
    CONTAINS: 80,
    CHAR_MATCH: 2,
    WORD_START: 15,
    WORD_CONTAINS: 5,
    ACRONYM: 20,
    MAX_SCORE: 95,
    ACRONYM_MULTIPLIER: 3,
    NAME_MULTIPLIER: 2.5,
    DESCRIPTION_MULTIPLIER: 1.5,
    LEVEL_MULTIPLIER: 2,
  },
};

function calculateFuzzyScore(text, searchQuery) {
  const textLower = text.toLowerCase();
  const queryLower = searchQuery.toLowerCase();

  if (textLower === queryLower) return SEARCH_CONFIG.SCORE_WEIGHTS.EXACT_MATCH;
  if (textLower.includes(queryLower)) return SEARCH_CONFIG.SCORE_WEIGHTS.CONTAINS;

  let score = 0;
  let queryIndex = 0;

  for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
    if (textLower[i] === queryLower[queryIndex]) {
      score += (queryLower.length - queryIndex) * SEARCH_CONFIG.SCORE_WEIGHTS.CHAR_MATCH;
      queryIndex++;
    }
  }

  const words = textLower.split(/\s+/);
  words.forEach((word) => {
    if (word.startsWith(queryLower)) score += SEARCH_CONFIG.SCORE_WEIGHTS.WORD_START;
    if (word.includes(queryLower)) score += SEARCH_CONFIG.SCORE_WEIGHTS.WORD_CONTAINS;
  });

  const acronym = text
    .split(/\s+/)
    .map((word) => word[0] || '')
    .join('')
    .toLowerCase();
  if (acronym.includes(queryLower)) score += SEARCH_CONFIG.SCORE_WEIGHTS.ACRONYM;

  return Math.min(score, SEARCH_CONFIG.SCORE_WEIGHTS.MAX_SCORE);
}

function getScoreThreshold(queryLength) {
  if (queryLength === 1) return SEARCH_CONFIG.SCORE_THRESHOLDS.SINGLE_CHAR;
  if (queryLength === 2) return SEARCH_CONFIG.SCORE_THRESHOLDS.TWO_CHARS;
  return SEARCH_CONFIG.SCORE_THRESHOLDS.DEFAULT;
}

// Expose to global window object
window.__searchUtils = {
  calculateFuzzyScore,
  getScoreThreshold,
  SEARCH_CONFIG,
};
