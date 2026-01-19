/**
 * Study Guide Types
 * Type definitions for the certification study guide component
 */

import type { Language } from './common';
import type { StudyResource } from './certification';

// ============================================================================
// Tab Types
// ============================================================================

export type StudyGuideTab = 'overview' | 'domains' | 'resources' | 'path';
export type ResourceTab = 'official' | 'courses' | 'books' | 'labs' | 'community';

// ============================================================================
// Resource Types
// ============================================================================

/**
 * Study section grouping resources by tab
 */
export interface StudyGuideSection {
  id: string;
  title: string;
  type: string;
  tab: ResourceTab;
  resources: StudyResource[];
}

/**
 * Sections grouped by tab
 */
export type SectionsByTab = Record<ResourceTab, StudyGuideSection[]>;

// ============================================================================
// Translation Types
// ============================================================================

/**
 * Study guide translation keys
 */
export interface StudyGuideTranslations {
  overview: string;
  domains: string;
  studyResources: string;
  practiceQuestions: string;
  tapToChange: string;
  selectSection: string;
  examOverview: string;
  examType: string;
  performance: string;
  multipleChoice: string;
  duration: string;
  minutes: string;
  level: string;
  beginner: string;
  intermediate: string;
  advanced: string;
  professional: string;
  kubernetesVersion: string;
  prerequisites: string;
  examAttempts: string;
  attemptsIncluded: string;
  requiredFor: string;
  practiceSimulatorIncluded: string;
  practiceEnvironmentIncluded: string;
  access: string;
  registerForExam: string;
  officialRegistration: string;
  topics: string;
  official: string;
  courses: string;
  books: string;
  labs: string;
  community: string;
  by: string;
  paid: string;
  free: string;
  showMore: string;
  showLess: string;
}

// ============================================================================
// Guide Data Types
// ============================================================================

/**
 * Data passed to the client-side script
 */
export interface StudyGuideData {
  translations: StudyGuideTranslations;
  sectionsByTab: SectionsByTab;
}

// ============================================================================
// Props Types
// ============================================================================

export interface StudyGuideProps {
  certificationId: string;
  lang: Language;
}

export const RESOURCE_TABS: ResourceTab[] = ['official', 'courses', 'books', 'labs', 'community'];
