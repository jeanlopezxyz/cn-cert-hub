# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cloud Native Certification Hub (CNCertHub) - A static site built with Astro.js providing study guides and exam preparation resources for cloud native certifications (CKA, CKAD, CKS, KCNA, etc.). Supports English, Spanish, and Portuguese.

## Commands

```bash
# Development
npm run dev              # Start dev server (localhost:4321)
npm run preview          # Preview production build

# Building
npm run build            # Full build: sync-i18n → astro build → optimize
npm run clean            # Remove dist/ and .astro/

# Code Quality
npm run validate         # Run typecheck + lint + format:check
npm run lint:fix         # Fix ESLint issues
npm run format           # Format with Prettier

# Testing
npm run test             # Run Vitest unit tests
npm run test:watch       # Vitest watch mode
npm run coverage         # Code coverage report

# Pre-PR
npm run prepare-pr       # Full validation + tests + build
npm run sync-i18n        # Sync i18n pages (run if you modified routes)
```

## Architecture

### Tech Stack

- **Astro 5.x** - Static site generator (SSG output)
- **TypeScript** - Strict mode with path aliases (@/components, @/utils, etc.)
- **Tailwind CSS** - Dark mode (`class` strategy), fluid typography with clamp()
- **Vitest** - Unit testing
- **Playwright** - E2E testing

### Directory Structure

```
src/
├── app/                # Centralized app configuration
│   ├── config.ts       # App identity, external URLs
│   ├── constants.ts    # Global constants
│   ├── theme.ts        # Colors, typography, shadows
│   ├── navigation.ts   # Sidebar structure, categories
│   └── index.ts        # Re-exports all config
├── components/         # Astro components organized by feature
│   ├── achievements/   # Achievement tracking components
│   ├── certifications/ # Certification cards, grids
│   ├── docs/           # Documentation components
│   ├── layout/         # Header, footer, sidebar
│   ├── news/           # News feed components
│   ├── quiz/           # Quiz simulator components
│   └── ui/             # Reusable UI components
├── pages/              # File-based routing (/, /docs, /certifications/*)
│   ├── es/             # Spanish pages
│   └── pt/             # Portuguese pages
├── layouts/            # Layout.astro (handles SEO, i18n, theming)
├── data/
│   ├── certifications/ # 16 certification data files
│   ├── questions/      # Quiz questions per certification
│   ├── resources/      # Study resources per certification
│   ├── best-practices/ # Best practices by category
│   └── news/           # News data and static entries
├── i18n/
│   ├── locales/        # en/, es/, pt/ translation files
│   ├── utils.ts        # getLangFromUrl(), useTranslations()
│   ├── ui.ts           # UI translation helpers
│   └── page-helpers.ts # Page-level i18n utilities
├── constants/          # Application constants
├── types/              # TypeScript types
├── utils/              # Utilities (security, storage, colors)
│   ├── icons/          # Icon utilities
│   ├── quiz/           # Quiz logic utilities
│   └── study-guide/    # Study guide utilities
├── scripts/            # Build and utility scripts
├── validation/         # Zod validation schemas
└── styles/             # Global CSS and design tokens

tests/
├── e2e/                # Playwright E2E tests
├── utils/              # Utils tests
├── validation/         # Validation schema tests
├── i18n/               # i18n tests
├── scripts/            # Script tests
└── helpers/            # Test helpers
```

### Key Patterns

**Certification Data Structure** (`src/data/certifications/*.ts`):

```typescript
{
  id, acronym, name, description,     // identity
  level: 'entry' | 'intermediate' | 'advanced' | 'professional',
  type: 'performance' | 'multiple-choice' | 'performance-based',
  duration, price, passingScore,      // exam details
  domains: ExamDomain[],              // topics with weights
  resources: CertificationResources   // study materials
}
```

**Internationalization**:

- Default locale is English (no URL prefix)
- Spanish/Portuguese use `/es/` and `/pt/` prefixes
- Translations in `src/i18n/locales/`
- Use `getLangFromUrl()` and `useTranslations()` from `src/i18n/utils.ts`

**Configuration** (use `@/app`):

- `@/app/config` - App identity, external URLs
- `@/app/theme` - Colors, typography, shadows
- `@/app/layout` - Dimensions, spacing, animations
- `@/app/navigation` - Sidebar structure, categories
- Import from `@/app` for consolidated access: `import { APP_CONFIG, COLORS } from '@/app'`

### Path Aliases

Configured in `tsconfig.json`:

- `@/*` → `./src/*`
- `@/app` → `./src/app/index.ts` (configuration)
- `@/components/*`, `@/types`, `@/i18n/*`, `@/data/*`, `@/utils/*`, `@/layouts/*`

## CI Pipeline

Runs on PRs to main (skips docs-only changes):

1. **Validate**: TypeScript, ESLint, Prettier, Unit Tests, Data Validation
2. **Build**: Production build
3. **E2E**: Playwright end-to-end tests
4. **Lighthouse**: Performance tests (advisory)

## Deployment

Hosted on Cloudflare Pages. Automatic deployment after CI passes on main branch.
