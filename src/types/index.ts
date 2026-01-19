/**
 * Central type definitions for the CNCF Certification Resources Hub
 * Re-exports all types from domain-specific files for easier imports
 */

// Common/Core types
export type { Language, CertificationLevel, ExamType, CertificationCategory } from './common';

// Certification domain types
export type {
  ExamTopic,
  ExamDomain,
  StudyResource,
  BookResource,
  CourseResource,
  VideoResource,
  BlogResource,
  DocumentationResource,
  CommunityResource,
  ToolResource,
  PracticeResource,
  CertificationResources,
  Certification,
  Achievement,
  StudySection,
} from './certification';

// Quiz types
export type {
  Question,
  QuizState,
  QuizData,
  QuizTranslations,
  QuizSimulatorProps,
  QuizScore,
  QuizDifficulty,
  QuestionCountOption,
} from './quiz';

// Study guide types
export type {
  StudyGuideSection,
  StudyGuideTab,
  ResourceTab,
  StudyGuideTranslations,
  StudyGuideData,
  StudyGuideProps,
  SectionsByTab,
} from './study-guide';
export { RESOURCE_TABS } from './study-guide';
