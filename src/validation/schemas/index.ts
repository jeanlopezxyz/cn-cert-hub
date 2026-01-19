/**
 * Validation Schemas Index
 * Central export point for all validation schemas
 */

// Common schemas
export {
  LanguageSchema,
  CertificationLevelSchema,
  ExamTypeSchema,
  CertificationCategorySchema,
  UrlSchema,
  OptionalUrlSchema,
  GitHubUrlSchema,
  NonEmptyStringSchema,
  IdSchema,
  AcronymSchema,
  PositiveNumberSchema,
  PercentageSchema,
  PriceSchema,
  DurationMinutesSchema,
  TailwindColorSchema,
  HexColorSchema,
  SvgPathSchema,
  I18nKeySchema,
} from './common';

// Certification schemas
export {
  ExamTopicSchema,
  ExamDomainSchema,
  ExamDomainsSchema,
  CertificationSchema,
  validateCertification,
  validateCertifications,
} from './certification';
export type { CertificationInput } from './certification';

// Question schemas
export {
  QuizDifficultySchema,
  QuestionSchema,
  QuestionSetSchema,
  ValidatedQuestionSetSchema,
  validateQuestion,
  validateQuestions,
  getQuestionStats,
} from './question';
export type { QuestionInput } from './question';

// Best practices schemas
export {
  MainCategoryTypeSchema,
  SubCategoryTypeSchema,
  PrioritySchema,
  BestPracticeItemSchema,
  BestPracticeSchema,
  TabConfigSchema,
  MainCategoryConfigSchema,
  validateBestPractice,
  validateTabConfig,
  validateBestPractices,
  validateYamlSyntax,
  validateCodeExamples,
} from './best-practices';
export type { BestPracticeInput, BestPracticeItemInput, TabConfigInput } from './best-practices';

// Resources schemas
export {
  PracticeTypeSchema,
  BookFormatSchema,
  PracticeResourceSchema,
  BookResourceSchema,
  VideoResourceSchema,
  StudyResourceSchema,
  CourseResourceSchema,
  CertificationResourcesSchema,
  validateResources,
  validateAllResources,
  getResourceStats,
} from './resources';
export type {
  CertificationResourcesInput,
  PracticeResourceInput,
  BookResourceInput,
} from './resources';
