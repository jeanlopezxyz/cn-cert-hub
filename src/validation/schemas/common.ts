/**
 * Common validation schemas
 * Base schemas used across multiple data types
 */

import { z } from 'zod';

// =============================================================================
// Base Types
// =============================================================================

export const LanguageSchema = z.enum(['en', 'es', 'pt']);

export const CertificationLevelSchema = z.enum([
  'entry',
  'intermediate',
  'advanced',
  'professional',
]);

export const ExamTypeSchema = z.enum(['performance', 'multiple-choice', 'performance-based']);

export const CertificationCategorySchema = z.enum([
  'kubernetes',
  'observability',
  'serviceMesh',
  'gitops',
  'platform',
  'security',
  'linux',
]);

export const DifficultyLevelSchema = z.enum([
  'beginner',
  'entry',
  'intermediate',
  'advanced',
  'professional',
]);

// =============================================================================
// URL Validation (Zod 4 API)
// =============================================================================

export const UrlSchema = z.url({ message: 'Must be a valid URL' });

export const OptionalUrlSchema = z.url({ message: 'Must be a valid URL' }).optional();

// GitHub URL validation
export const GitHubUrlSchema = z
  .url({ message: 'Must be a valid GitHub URL' })
  .refine((url) => url.includes('github.com'), {
    message: 'Must be a valid GitHub URL',
  });

// =============================================================================
// Text Validation
// =============================================================================

export const NonEmptyStringSchema = z.string().min(1, 'Cannot be empty');

export const IdSchema = z
  .string()
  .min(1, 'ID cannot be empty')
  .regex(/^[a-z0-9-]+$/, 'ID must be lowercase alphanumeric with hyphens only');

export const AcronymSchema = z
  .string()
  .min(2, 'Acronym must be at least 2 characters')
  .max(10, 'Acronym must be at most 10 characters')
  .regex(/^[A-Z0-9]+$/, 'Acronym must be uppercase alphanumeric');

// =============================================================================
// Number Validation
// =============================================================================

export const PositiveNumberSchema = z.number().positive('Must be a positive number');

export const PercentageSchema = z
  .number()
  .min(0, 'Percentage must be at least 0')
  .max(100, 'Percentage must be at most 100');

export const PriceSchema = z.number().min(0, 'Price cannot be negative');

export const DurationMinutesSchema = z
  .number()
  .int('Duration must be a whole number')
  .min(1, 'Duration must be at least 1 minute')
  .max(480, 'Duration cannot exceed 8 hours');

// =============================================================================
// Color Validation
// =============================================================================

export const TailwindColorSchema = z.string().regex(/^(from-|to-|bg-|text-)/, {
  message: 'Must be a valid Tailwind color class',
});

export const HexColorSchema = z
  .string()
  .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Must be a valid hex color');

// =============================================================================
// SVG Path Validation
// =============================================================================

export const SvgPathSchema = z.string().regex(/^M/, {
  message: 'SVG path must start with M command',
});

// =============================================================================
// i18n Key Validation
// =============================================================================

export const I18nKeySchema = z
  .string()
  .min(1)
  .regex(/^[a-zA-Z0-9.]+$/, 'i18n key must only contain alphanumeric characters and dots');
