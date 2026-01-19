/**
 * Data Validation Script
 * Validates all data files for contributors
 *
 * Run with: npx tsx scripts/validate-data.ts
 * Or: npm run validate:data
 */

import { CERTIFICATIONS } from '../src/data/certifications';
import { TABS_CONFIG } from '../src/data/best-practices';
import {
  validateCertification,
  validateQuestions,
  validateBestPractices,
  validateCodeExamples,
  getQuestionStats,
  validateAllResources as validateResourcesSchema,
  getResourceStats,
} from '../src/validation/schemas';

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(message: string, color: keyof typeof colors = 'reset'): void {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title: string): void {
  console.log();
  log(`${'='.repeat(60)}`, 'cyan');
  log(`  ${title}`, 'bold');
  log(`${'='.repeat(60)}`, 'cyan');
}

function logSuccess(message: string): void {
  log(`✅ ${message}`, 'green');
}

function logWarning(message: string): void {
  log(`⚠️  ${message}`, 'yellow');
}

function logError(message: string): void {
  log(`❌ ${message}`, 'red');
}

interface ValidationResult {
  certifications: { passed: boolean; errors: string[] };
  questions: { passed: boolean; errors: string[]; warnings: string[] };
  resources: { passed: boolean; errors: string[]; warnings: string[] };
  bestPractices: { passed: boolean; errors: string[]; warnings: string[] };
}

async function validateCertifications(): Promise<{ passed: boolean; errors: string[] }> {
  logSection('Validating Certifications');
  const errors: string[] = [];

  for (const cert of CERTIFICATIONS) {
    const result = validateCertification(cert);
    if (!result.success && result.errors) {
      errors.push(
        `${cert.acronym}: ${result.errors.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join(', ')}`
      );
      logError(`${cert.acronym} (${cert.id}): Invalid`);
      result.errors.issues.forEach((issue) => {
        log(`    └─ ${issue.path.join('.')}: ${issue.message}`, 'red');
      });
    } else {
      logSuccess(`${cert.acronym} (${cert.id}): Valid`);
    }
  }

  return { passed: errors.length === 0, errors };
}

async function validateAllQuestions(): Promise<{
  passed: boolean;
  errors: string[];
  warnings: string[];
}> {
  logSection('Validating Questions');
  const errors: string[] = [];
  const warnings: string[] = [];

  // Dynamically import all question files
  const questionFiles = [
    'cka',
    'ckad',
    'cks',
    'kcna',
    'kcsa',
    'capa',
    'cba',
    'cca',
    'cgoa',
    'cnpa',
    'cnpe',
    'ica',
    'kca',
    'lfcs',
    'otca',
    'pca',
  ];

  for (const certId of questionFiles) {
    try {
      const module = await import(`../src/data/questions/${certId}.ts`);
      const questions = module[`${certId}Questions`] || module.default || [];

      if (questions.length === 0) {
        logWarning(`${certId.toUpperCase()}: No questions found`);
        continue;
      }

      const result = validateQuestions(questions);

      if (result.invalid.length > 0) {
        errors.push(`${certId.toUpperCase()}: ${result.invalid.length} invalid questions`);
        logError(`${certId.toUpperCase()}: ${result.invalid.length} invalid questions`);
        result.invalid.slice(0, 3).forEach((inv) => {
          log(`    └─ Question ${inv.id || inv.index}: ${inv.errors.issues[0]?.message}`, 'red');
        });
        if (result.invalid.length > 3) {
          log(`    └─ ... and ${result.invalid.length - 3} more errors`, 'red');
        }
      } else {
        const stats = getQuestionStats(result.valid);
        logSuccess(`${certId.toUpperCase()}: ${result.valid.length} questions valid`);
        log(
          `    └─ Domains: ${Object.keys(stats.byDomain).length}, Distribution: A=${stats.answerDistribution[0]} B=${stats.answerDistribution[1]} C=${stats.answerDistribution[2]} D=${stats.answerDistribution[3]}`,
          'cyan'
        );
      }

      if (result.warnings.length > 0) {
        result.warnings.forEach((w) => {
          warnings.push(`${certId.toUpperCase()}: ${w}`);
          logWarning(`${certId.toUpperCase()}: ${w}`);
        });
      }
    } catch (error) {
      // File might not exist or have different export format
      log(`${certId.toUpperCase()}: Skipped (no questions file or different format)`, 'yellow');
    }
  }

  return { passed: errors.length === 0, errors, warnings };
}

async function validateAllResources(): Promise<{
  passed: boolean;
  errors: string[];
  warnings: string[];
}> {
  logSection('Validating Resources');
  const errors: string[] = [];
  const warnings: string[] = [];

  // Dynamically import all resource files
  const resourceFiles = [
    'cka',
    'ckad',
    'cks',
    'kcna',
    'kcsa',
    'capa',
    'cba',
    'cca',
    'cgoa',
    'cnpa',
    'cnpe',
    'ica',
    'kca',
    'lfcs',
    'otca',
    'pca',
  ];

  const resourcesMap: Record<string, unknown> = {};

  for (const certId of resourceFiles) {
    try {
      const module = await import(`../src/data/resources/${certId}.ts`);
      const resources = module[`${certId}Resources`] || module.default;
      if (resources) {
        resourcesMap[certId] = resources;
      }
    } catch {
      // File might not exist
    }
  }

  const result = validateResourcesSchema(resourcesMap);

  for (const inv of result.invalid) {
    const errorMsg = `${inv.certId.toUpperCase()}: ${inv.errors.issues[0]?.message}`;
    errors.push(errorMsg);
    logError(errorMsg);
    inv.errors.issues.slice(0, 3).forEach((issue) => {
      log(`    └─ ${issue.path.join('.')}: ${issue.message}`, 'red');
    });
  }

  for (const v of result.valid) {
    const stats = getResourceStats(v.data);
    logSuccess(`${v.certId.toUpperCase()}: ${stats.total} resources valid`);
    log(
      `    └─ Practice: ${stats.practice}, Books: ${stats.books}, Videos: ${stats.videos}, GitHub: ${stats.github} (Free: ${stats.freeCount}, Paid: ${stats.paidCount})`,
      'cyan'
    );
  }

  result.warnings.forEach((w) => {
    warnings.push(w);
    logWarning(w);
  });

  return { passed: errors.length === 0, errors, warnings };
}

async function validateAllBestPractices(): Promise<{
  passed: boolean;
  errors: string[];
  warnings: string[];
}> {
  logSection('Validating Best Practices');
  const errors: string[] = [];
  const warnings: string[] = [];

  const result = validateBestPractices(TABS_CONFIG);

  if (result.invalid.length > 0) {
    result.invalid.forEach((inv) => {
      const errorMsg = `Tab ${inv.id || inv.index}: ${inv.errors.issues[0]?.message}`;
      errors.push(errorMsg);
      logError(errorMsg);
    });
  }

  // Validate code examples
  const allPractices = result.valid.flatMap((tab) => tab.practices);
  const codeValidation = validateCodeExamples(allPractices);

  if (!codeValidation.valid) {
    codeValidation.errors.forEach((err) => {
      const errorMsg = `Code example in ${err.practiceId}/${err.itemId}: ${err.error}`;
      warnings.push(errorMsg);
      logWarning(errorMsg);
    });
  }

  // Summary
  const totalPractices = allPractices.length;
  const totalItems = allPractices.reduce((sum, p) => sum + p.items.length, 0);
  logSuccess(
    `${result.valid.length} tabs, ${totalPractices} practices, ${totalItems} items validated`
  );

  return { passed: errors.length === 0, errors, warnings };
}

async function main(): Promise<void> {
  log('\n🔍 CN Cert Hub - Data Validation\n', 'bold');

  const results: ValidationResult = {
    certifications: await validateCertifications(),
    questions: await validateAllQuestions(),
    resources: await validateAllResources(),
    bestPractices: await validateAllBestPractices(),
  };

  // Summary
  logSection('Validation Summary');

  const allPassed =
    results.certifications.passed &&
    results.questions.passed &&
    results.resources.passed &&
    results.bestPractices.passed;

  if (results.certifications.passed) {
    logSuccess(`Certifications: All valid`);
  } else {
    logError(`Certifications: ${results.certifications.errors.length} errors`);
  }

  if (results.questions.passed) {
    logSuccess(`Questions: All valid`);
    if (results.questions.warnings.length > 0) {
      logWarning(`  (${results.questions.warnings.length} warnings)`);
    }
  } else {
    logError(`Questions: ${results.questions.errors.length} errors`);
  }

  if (results.resources.passed) {
    logSuccess(`Resources: All valid`);
    if (results.resources.warnings.length > 0) {
      logWarning(`  (${results.resources.warnings.length} warnings)`);
    }
  } else {
    logError(`Resources: ${results.resources.errors.length} errors`);
  }

  if (results.bestPractices.passed) {
    logSuccess(`Best Practices: All valid`);
    if (results.bestPractices.warnings.length > 0) {
      logWarning(`  (${results.bestPractices.warnings.length} warnings)`);
    }
  } else {
    logError(`Best Practices: ${results.bestPractices.errors.length} errors`);
  }

  console.log();
  if (allPassed) {
    log('✨ All validations passed!', 'green');
    process.exit(0);
  } else {
    log('💥 Validation failed. Please fix the errors above.', 'red');
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Validation script error:', error);
  process.exit(1);
});
