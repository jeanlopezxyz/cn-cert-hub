/**
 * Security utilities for input validation and sanitization
 *
 * Protects against XSS and injection attacks by:
 * - Removing dangerous HTML tags (script, iframe, object, embed)
 * - Stripping event handlers (onclick, onload, etc.)
 * - Sanitizing dangerous protocols (javascript:, vbscript:, data:text/html)
 * - Enforcing input length limits
 */

/**
 * Maximum input lengths for different contexts
 * Used to prevent DoS attacks and storage abuse
 */
const INPUT_LIMITS = {
  USER_INPUT: 500, // General user input (forms, search, etc.)
  STORAGE_VALUE: 5000, // localStorage values (quiz state, preferences)
} as const;

export { INPUT_LIMITS };

/**
 * Dangerous patterns that could enable XSS attacks
 * These are removed before any other processing
 */
const DANGEROUS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, // <script> tags
  /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, // <iframe> tags
  /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, // <object> tags
  /<embed\b[^>]*>/gi, // <embed> tags
  /<link\b[^>]*>/gi, // <link> tags (could load malicious CSS)
  /<meta\b[^>]*>/gi, // <meta> tags (could redirect)
  /javascript:/gi, // javascript: protocol
  /vbscript:/gi, // vbscript: protocol
  /data:text\/html/gi, // data:text/html (can execute scripts)
  /on\w+\s*=/gi, // Event handlers (onclick, onload, onerror, etc.)
] as const;

const SPECIAL_CHARS_REGEX = /[<>"'&]/g;

/**
 * Sanitizes user input by removing potentially dangerous content
 * Used by storage.ts for localStorage operations and anywhere user input is processed
 *
 * @param input - User-provided string to sanitize
 * @param maxLength - Maximum allowed length (defaults to USER_INPUT limit)
 * @returns Sanitized string safe for storage/display
 *
 * @example
 * sanitizeInput('<script>alert("xss")</script>Hello') // => 'Hello'
 * sanitizeInput('  Normal text  ') // => 'Normal text'
 * sanitizeInput('A'.repeat(1000)) // => 'A'.repeat(500) (truncated)
 */
export function sanitizeInput(input: string, maxLength: number = INPUT_LIMITS.USER_INPUT): string {
  if (typeof input !== 'string') {
    return '';
  }

  let sanitized = input;

  // 1. Remove dangerous patterns first
  DANGEROUS_PATTERNS.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, '');
  });

  // 2. Remove all HTML tags (keep text content)
  sanitized = sanitized.replace(/<[^>]*>/g, '');

  // 3. Remove special characters that could be used for XSS
  sanitized = sanitized.replace(SPECIAL_CHARS_REGEX, '');

  // 4. Trim whitespace and enforce length limit
  sanitized = sanitized.trim().slice(0, maxLength);

  return sanitized;
}
