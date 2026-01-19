/**
 * Study Guide Label Utilities
 * Functions for displaying certification labels
 */

import type { Certification } from '@/types';

/**
 * Get exam type display string
 */
export const getExamTypeLabel = (
  type: Certification['type'],
  performanceLabel: string,
  multipleChoiceLabel: string
): string => {
  return type === 'performance' ? performanceLabel : multipleChoiceLabel;
};

/**
 * Get level display string
 */
export const getLevelLabel = (
  level: Certification['level'],
  beginnerLabel: string,
  intermediateLabel: string,
  advancedLabel: string,
  professionalLabel: string
): string => {
  switch (level) {
    case 'entry':
      return beginnerLabel;
    case 'intermediate':
      return intermediateLabel;
    case 'advanced':
      return advancedLabel;
    case 'professional':
      return professionalLabel;
    default:
      return level;
  }
};
