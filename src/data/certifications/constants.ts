/**
 * Certification Data Constants
 *
 * Centralized constants for certification data to avoid duplication
 * and ensure consistency across all certification definitions.
 */

// =============================================================================
// Common Certification Values
// =============================================================================

export const CERTIFICATION_DEFAULTS = {
  EXAM_ATTEMPTS: 2,
  VALIDITY_YEARS: 3,
  KUBERNETES_VERSION: '1.34',
} as const;

// =============================================================================
// Simulator Providers
// =============================================================================

export const SIMULATOR_PROVIDERS = {
  KILLER_SH: 'Killer.sh',
  NO_SIMULATOR: 'No simulator - Multiple choice exam',
} as const;

// =============================================================================
// Simulator Access Patterns
// =============================================================================

export const SIMULATOR_ACCESS = {
  KILLER_SH_STANDARD: '2 attempts (36 hours each)',
  NOT_APPLICABLE: 'Not applicable - No hands-on simulator provided',
} as const;

// =============================================================================
// Prerequisites
// =============================================================================

export const PREREQUISITES = {
  NONE: 'No prerequisites',
  CKA: 'CKA',
} as const;

// =============================================================================
// Exam Formats
// =============================================================================

export const EXAM_FORMATS = {
  PERFORMANCE_BASED:
    'Online proctored, performance-based test requiring solving multiple command-line tasks',
  MULTIPLE_CHOICE_60: 'Online proctored, multiple-choice test with 60 questions',
} as const;

// =============================================================================
// Retake Policies
// =============================================================================

export const RETAKE_POLICIES = {
  ONE_FREE_RETAKE: 'One free retake included with registration cost',
  TWO_ATTEMPTS_CKA:
    'CKA exam fees cover two attempts. If additional attempts are needed, candidates must repurchase the exam.',
  TWO_ATTEMPTS_CKAD:
    'CKAD exam fees cover two attempts. If additional attempts are needed, candidates must repurchase the exam.',
  TWO_ATTEMPTS_GENERIC:
    'Exam fees cover two attempts. If additional attempts are needed, candidates must repurchase the exam.',
} as const;

// =============================================================================
// Kubernetes Version Values
// =============================================================================

export const KUBERNETES_VERSIONS = {
  CURRENT: '1.34',
  NOT_APPLICABLE: 'Not applicable',
} as const;
