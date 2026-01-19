/**
 * Study Guide Tab Utilities
 * Functions for organizing sections by tabs
 */

import { RESOURCE_TABS, type StudyGuideSection, type SectionsByTab } from '@/types/study-guide';

// Re-export from canonical source
export { RESOURCE_TABS };

/**
 * Group sections by tab
 */
export const groupSectionsByTab = (sections: StudyGuideSection[]): SectionsByTab => {
  const result = {} as SectionsByTab;

  for (const tab of RESOURCE_TABS) {
    result[tab] = sections.filter((s) => s.tab === tab);
  }

  return result;
};
