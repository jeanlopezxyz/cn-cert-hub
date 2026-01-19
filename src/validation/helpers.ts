/**
 * Generic Validation Helpers
 * Reusable validation utilities to eliminate duplication across schema files
 */

import type { z } from 'zod';

// =============================================================================
// Types
// =============================================================================

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: z.ZodError;
}

export interface BatchValidationResult<T> {
  valid: T[];
  invalid: Array<{ index: number; errors: z.ZodError }>;
}

// =============================================================================
// Generic Validators
// =============================================================================

/**
 * Create a single-item validator for a Zod schema
 * @param schema - Zod schema to validate against
 * @returns Validation function
 */
export function createValidator<T>(schema: z.ZodSchema<T>) {
  return (data: unknown): ValidationResult<T> => {
    const result = schema.safeParse(data);
    if (result.success) {
      return { success: true, data: result.data };
    }
    return { success: false, errors: result.error };
  };
}

/**
 * Create a batch validator for validating arrays of items
 * @param schema - Zod schema to validate each item against
 * @returns Batch validation function
 */
export function createBatchValidator<T>(schema: z.ZodSchema<T>) {
  return (data: unknown[]): BatchValidationResult<T> => {
    const valid: T[] = [];
    const invalid: Array<{ index: number; errors: z.ZodError }> = [];

    data.forEach((item, index) => {
      const result = schema.safeParse(item);
      if (result.success) {
        valid.push(result.data);
      } else {
        invalid.push({ index, errors: result.error });
      }
    });

    return { valid, invalid };
  };
}

/**
 * Validate a single item against a schema
 * @param schema - Zod schema
 * @param data - Data to validate
 * @returns Validation result
 */
export function validateSingle<T>(schema: z.ZodSchema<T>, data: unknown): ValidationResult<T> {
  return createValidator(schema)(data);
}

/**
 * Validate an array of items against a schema
 * @param schema - Zod schema
 * @param data - Array of data to validate
 * @returns Batch validation result
 */
export function validateBatch<T>(
  schema: z.ZodSchema<T>,
  data: unknown[]
): BatchValidationResult<T> {
  return createBatchValidator(schema)(data);
}
