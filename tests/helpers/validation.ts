/**
 * Shared test helpers for validation tests
 */

import { expect } from 'vitest';
import type { z } from 'zod';

/**
 * Asserts that a Zod schema validates successfully
 */
export function expectValidationToPass<T extends z.ZodTypeAny>(schema: T, data: unknown): void {
  expect(() => schema.parse(data)).not.toThrow();
}

/**
 * Asserts that a Zod schema validation fails
 */
export function expectValidationToFail<T extends z.ZodTypeAny>(schema: T, data: unknown): void {
  expect(() => schema.parse(data)).toThrow();
}

/**
 * Validates and returns parsed data for further assertions
 */
export function parseValidData<T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T> {
  const result = schema.safeParse(data);
  expect(result.success).toBe(true);
  return result.data as z.infer<T>;
}

/**
 * Gets validation errors for assertions
 */
export function getValidationErrors<T extends z.ZodTypeAny>(schema: T, data: unknown): string[] {
  const result = schema.safeParse(data);
  if (result.success) {
    throw new Error('Expected validation to fail but it succeeded');
  }
  return result.error.issues.map((issue) => issue.message);
}
