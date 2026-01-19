/**
 * Common/Core type definitions
 * Basic types used throughout the application
 */

export type Language = 'en' | 'es' | 'pt';

export type CertificationLevel = 'entry' | 'intermediate' | 'advanced' | 'professional';

export type ExamType = 'performance' | 'multiple-choice' | 'performance-based';

export type CertificationCategory =
  | 'kubernetes'
  | 'observability'
  | 'serviceMesh'
  | 'gitops'
  | 'platform'
  | 'security'
  | 'linux';
