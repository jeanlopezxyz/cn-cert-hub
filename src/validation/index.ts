/**
 * Validation Module - Barrel Export
 *
 * Re-exports all validation schemas, helpers, and utilities.
 * Import from '@/validation' for convenience.
 *
 * Structure:
 * - schemas/    → Zod schemas for all data types
 * - helpers.ts  → Generic validation utilities
 */

// =============================================================================
// Schemas
// =============================================================================

export * from './schemas';

// =============================================================================
// Helpers
// =============================================================================

export {
  createValidator,
  createBatchValidator,
  validateSingle,
  validateBatch,
  type ValidationResult,
  type BatchValidationResult,
} from './helpers';
