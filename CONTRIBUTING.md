# Contributing to CN Cert Hub

Thank you for your interest in contributing to CN Cert Hub! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Contribution Guidelines](#contribution-guidelines)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Community](#community)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read and understand the following principles:

- **Be Respectful**: Treat all contributors with respect and professionalism
- **Be Inclusive**: Welcome contributors of all backgrounds and experience levels
- **Be Constructive**: Provide helpful feedback and accept constructive criticism
- **Be Collaborative**: Work together to improve the project

## Getting Started

### Prerequisites

| Requirement | Version        |
| ----------- | -------------- |
| Node.js     | 18.x or higher |
| npm         | 9.x or higher  |
| Git         | 2.x or higher  |

### Initial Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/cn-cert-hub.git
cd cn-cert-hub

# 3. Add upstream remote
git remote add upstream https://github.com/jeanlopezxyz/cn-cert-hub.git

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev
```

The development server runs at `http://localhost:4321`

### Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream main into your local main
git checkout main
git merge upstream/main

# Push updates to your fork
git push origin main
```

## Development Workflow

### Branch Naming Convention

| Type          | Pattern                | Example                      |
| ------------- | ---------------------- | ---------------------------- |
| Feature       | `feat/description`     | `feat/add-cka-questions`     |
| Bug Fix       | `fix/description`      | `fix/quiz-timer-bug`         |
| Documentation | `docs/description`     | `docs/update-readme`         |
| Refactor      | `refactor/description` | `refactor/quiz-component`    |
| Content       | `content/description`  | `content/add-ckad-resources` |

### Development Commands

```bash
# Development
npm run dev              # Start dev server with hot reload
npm run preview          # Preview production build

# Code Quality
npm run validate         # TypeScript + ESLint + Prettier
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check formatting

# Testing
npm run test             # Run unit tests
npm run test:watch       # Watch mode
npm run coverage         # Generate coverage report

# Pre-PR Validation
npm run prepare-pr       # Run all checks before PR
```

### Pre-commit Hooks

The project uses Husky with lint-staged. On every commit:

- **TypeScript/JavaScript**: ESLint + Prettier
- **Astro files**: Prettier with Astro plugin
- **CSS/JSON/MD**: Prettier

## Contribution Guidelines

### Adding Practice Questions

**Location**: `src/data/questions/{certification}.ts`

```typescript
{
  id: 'cka-061',              // Format: {cert}-{number}
  domain: 'Storage',          // Must match certification domain
  question: 'What command creates a PersistentVolume?',
  options: [
    'kubectl create pv',
    'kubectl apply -f pv.yaml',
    'kubectl pv create',
    'kubectl volume create',
  ],
  correctAnswer: 1,           // Zero-indexed (0-3)
  explanation: 'PersistentVolumes are created declaratively...\n\nReference: [Kubernetes Docs](https://kubernetes.io/docs/...)',
  difficulty: 'medium',       // easy | medium | hard
  tags: ['storage', 'pv', 'persistent-volume'],
}
```

**Quality Guidelines**:

| Guideline  | Description                                   |
| ---------- | --------------------------------------------- |
| Accuracy   | Verify answers against official documentation |
| Balance    | Distribute `correctAnswer` evenly across 0-3  |
| References | Include official documentation links          |
| Difficulty | Match the actual exam difficulty              |
| Domains    | Align with certification curriculum           |

### Adding Study Resources

**Location**: `src/data/resources/{certification}.ts`

```typescript
{
  title: 'Official CKA Curriculum',
  url: 'https://github.com/cncf/curriculum',
  description: 'Official CNCF curriculum for CKA exam preparation',
  type: 'course',             // simulator | lab | course | video | documentation
  isPaid: false,
  isOfficial: true,
}
```

### Adding Translations

**Location**: `src/i18n/locales/{lang}/`

1. Identify the file containing the key (common.ts, quiz.ts, etc.)
2. Add the translation in all three languages (en, es, pt)
3. Run `npm run sync-i18n` to verify completeness

```typescript
// src/i18n/locales/en/common.ts
export const common = {
  newKey: 'English text',
};

// src/i18n/locales/es/common.ts
export const common = {
  newKey: 'Texto en espanol',
};

// src/i18n/locales/pt/common.ts
export const common = {
  newKey: 'Texto em portugues',
};
```

## Pull Request Process

### Before Submitting

```bash
# 1. Ensure your branch is up to date
git fetch upstream
git rebase upstream/main

# 2. Run all validations
npm run prepare-pr
```

### PR Requirements

| Requirement          | Description                     |
| -------------------- | ------------------------------- |
| Passing CI           | All automated checks must pass  |
| Conventional Commits | Use conventional commit format  |
| Description          | Complete the PR template        |
| Scope                | Keep PRs focused and atomic     |
| Tests                | Add tests for new functionality |

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types**:

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `feat`     | New feature                              |
| `fix`      | Bug fix                                  |
| `docs`     | Documentation changes                    |
| `style`    | Code style changes (formatting)          |
| `refactor` | Code refactoring                         |
| `test`     | Adding or updating tests                 |
| `chore`    | Maintenance tasks                        |
| `content`  | Content additions (questions, resources) |

**Examples**:

```bash
feat(quiz): add timer pause functionality
fix(i18n): correct Spanish translation for quiz page
docs: update contribution guidelines
content(cka): add 10 new storage questions
```

### CI Pipeline

PRs trigger the following automated checks:

```
Validate Job
├── TypeScript type checking
├── ESLint linting
├── Prettier formatting
├── Unit tests (130+)
└── Data validation

Build Job
└── Production build verification

Lighthouse Job (Advisory)
└── Performance audit
```

### Review Process

1. **Automated Review**: CI checks run automatically
2. **Code Review**: Maintainer reviews code quality and correctness
3. **Feedback**: Address any requested changes
4. **Approval**: PR approved when all requirements met
5. **Merge**: Maintainer merges to main
6. **Deploy**: Automatic deployment to production

## Style Guide

### TypeScript

- Use strict mode (`strict: true` in tsconfig)
- Avoid `any` type - use proper types or `unknown`
- Use path aliases for imports

```typescript
// Correct
import { APP_CONFIG } from '@/app';
import type { Certification } from '@/types';

// Avoid
import { APP_CONFIG } from '../../../app';
```

### Component Structure

```
src/components/
├── achievements/        # Achievement tracking (Kubestronaut, Golden)
├── certifications/      # Certification cards, grids, study guides
├── docs/                # Documentation and best practices
├── layout/              # Header, Footer, Sidebar, Hero
├── news/                # News feed and articles
├── quiz/                # Quiz simulator components
└── ui/                  # Reusable UI (buttons, cards, modals)
```

Each feature folder follows this pattern:

```
feature-name/
├── FeatureComponent.astro
├── FeatureSubComponent.astro
└── index.ts              # Re-exports
```

> **Note**: See the [Project Structure](README.md#project-structure) in README.md for the full directory layout.

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use CSS custom properties for theming

```html
<!-- Correct -->
<div class="p-4 md:p-6 lg:p-8 dark:bg-gray-800">
  <!-- Avoid inline styles -->
  <div style="padding: 16px;"></div>
</div>
```

### File Naming

| Type       | Convention | Example            |
| ---------- | ---------- | ------------------ |
| Components | PascalCase | `QuizTimer.astro`  |
| Utilities  | camelCase  | `formatDate.ts`    |
| Types      | PascalCase | `Certification.ts` |
| Data files | kebab-case | `cka-questions.ts` |

## Community

### Getting Help

- **Discussions**: [GitHub Discussions](https://github.com/jeanlopezxyz/cn-cert-hub/discussions)
- **Issues**: [GitHub Issues](https://github.com/jeanlopezxyz/cn-cert-hub/issues)
- **Quick Start**: [Onboarding Guide](ONBOARDING.md)

### Issue Templates

| Template        | Use Case                       |
| --------------- | ------------------------------ |
| Bug Report      | Report unexpected behavior     |
| Feature Request | Suggest new functionality      |
| Content Request | Request questions or resources |

### Recognition

All contributors are recognized in:

- [Contributors page](https://github.com/jeanlopezxyz/cn-cert-hub/graphs/contributors)
- Release notes for significant contributions

---

Thank you for contributing to CN Cert Hub! Your contributions help the cloud native community prepare for certifications and advance their careers.
