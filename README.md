<div align="center">
  <img src="public/favicon.svg" alt="CN Cert Hub Logo" width="120" height="120">

# Cloud Native Certification Hub

**Your free, open-source platform for CNCF & Linux Foundation certification preparation**

[![Live Site](https://img.shields.io/badge/Live-cncerthub.xyz-0066CC?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cncerthub.xyz)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/jeanlopezxyz/cn-cert-hub?style=for-the-badge&logo=github&color=FFD700)](https://github.com/jeanlopezxyz/cn-cert-hub/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-FF6B6B?style=for-the-badge)](CONTRIBUTING.md)

[Features](#features) | [Certifications](#certifications) | [Quick Start](#quick-start) | [Contributing](#contributing) | [Tech Stack](#tech-stack)

</div>

---

## Overview

CN Cert Hub provides comprehensive study guides, practice exams, and curated resources to help professionals prepare for and pass cloud native certifications. Built with modern web technologies and designed for accessibility, the platform supports multiple languages and offers both study and exam simulation modes.

## Features

| Feature                     | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| **Practice Exam Simulator** | 60+ questions per certification with realistic exam experience       |
| **Study & Exam Modes**      | Learn at your own pace or simulate real exam conditions with timers  |
| **Multi-language Support**  | Full support for English, Spanish, and Portuguese                    |
| **Achievement Tracking**    | Progress tracking toward Kubestronaut and Golden Kubestronaut status |
| **Best Practices Guides**   | Comprehensive guides for cloud native technologies                   |
| **News Feed**               | Latest updates from CNCF, Kubernetes, and Linux Foundation           |
| **Dark/Light Mode**         | Automatic theme detection with manual toggle                         |
| **Offline Ready**           | Static site works offline after initial load                         |

## Certifications

### Kubernetes & Cloud Native

| Certification | Level        | Type              | Description                                    |
| ------------- | ------------ | ----------------- | ---------------------------------------------- |
| **KCNA**      | Entry        | Multiple Choice   | Kubernetes and Cloud Native Associate          |
| **KCSA**      | Entry        | Multiple Choice   | Kubernetes and Cloud Native Security Associate |
| **CKA**       | Intermediate | Performance-based | Certified Kubernetes Administrator             |
| **CKAD**      | Intermediate | Performance-based | Certified Kubernetes Application Developer     |
| **CKS**       | Advanced     | Performance-based | Certified Kubernetes Security Specialist       |

### Specialized Certifications

| Certification | Focus Area           | Provider  |
| ------------- | -------------------- | --------- |
| **CAPA**      | Argo (GitOps)        | Codefresh |
| **CGOA**      | GitOps               | CNCF      |
| **PCA**       | Prometheus           | CNCF      |
| **OTCA**      | OpenTelemetry        | CNCF      |
| **CCA**       | Cilium (Networking)  | Isovalent |
| **ICA**       | Istio (Service Mesh) | Solo.io   |
| **KCA**       | Kyverno (Policy)     | CNCF      |

### Platform Engineering

| Certification | Level        | Description                                     |
| ------------- | ------------ | ----------------------------------------------- |
| **CBA**       | Entry        | Certified Backstage Associate                   |
| **CNPA**      | Intermediate | Cloud Native Platform Associate                 |
| **CNPE**      | Professional | Cloud Native Platform Engineer                  |
| **LFCS**      | Intermediate | Linux Foundation Certified System Administrator |

## Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/jeanlopezxyz/cn-cert-hub.git
cd cn-cert-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Commands

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Start development server with hot reload    |
| `npm run build`      | Build optimized production bundle           |
| `npm run preview`    | Preview production build locally            |
| `npm run validate`   | Run TypeScript, ESLint, and Prettier checks |
| `npm run test`       | Execute unit test suite                     |
| `npm run test:watch` | Run tests in watch mode                     |
| `npm run coverage`   | Generate code coverage report               |
| `npm run prepare-pr` | Full validation pipeline for PRs            |

## Project Structure

```
cn-cert-hub/
├── src/
│   ├── app/                     # Centralized app configuration
│   │   ├── config.ts            # App identity, external URLs
│   │   ├── constants.ts         # Global constants
│   │   ├── theme.ts             # Colors, typography, shadows
│   │   ├── navigation.ts        # Sidebar structure, categories
│   │   └── index.ts             # Re-exports all config
│   ├── components/              # Astro components by feature
│   │   ├── achievements/        # Achievement tracking components
│   │   ├── certifications/      # Certification cards, grids
│   │   ├── docs/                # Documentation components
│   │   ├── layout/              # Header, footer, sidebar
│   │   ├── news/                # News feed components
│   │   ├── quiz/                # Quiz simulator components
│   │   └── ui/                  # Reusable UI components
│   ├── data/
│   │   ├── certifications/      # 16 certification definitions
│   │   ├── questions/           # Practice exam questions
│   │   ├── resources/           # Study materials per cert
│   │   ├── best-practices/      # Cloud native guides
│   │   └── news/                # News data and entries
│   ├── i18n/
│   │   ├── locales/             # en/, es/, pt/ translations
│   │   ├── utils.ts             # getLangFromUrl(), useTranslations()
│   │   ├── ui.ts                # UI translation helpers
│   │   └── page-helpers.ts      # Page-level i18n utilities
│   ├── layouts/                 # Page layouts with SEO
│   ├── pages/                   # File-based routing
│   │   ├── es/                  # Spanish pages
│   │   └── pt/                  # Portuguese pages
│   ├── constants/               # Application constants
│   ├── types/                   # TypeScript definitions
│   ├── utils/                   # Utility functions
│   │   ├── icons/               # Icon utilities
│   │   ├── quiz/                # Quiz logic utilities
│   │   └── study-guide/         # Study guide utilities
│   ├── styles/                  # Global CSS and design tokens
│   ├── scripts/                 # Build and utility scripts
│   └── validation/              # Zod validation schemas
├── tests/
│   ├── e2e/                     # Playwright E2E tests
│   ├── utils/                   # Unit tests for utilities
│   ├── validation/              # Validation schema tests
│   └── i18n/                    # i18n tests
├── public/                      # Static assets (images, fonts)
├── scripts/                     # Build scripts
├── .github/
│   └── workflows/               # CI/CD pipelines
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind CSS configuration
├── playwright.config.ts         # E2E test configuration
└── vitest.config.ts             # Unit test configuration
```

## Tech Stack

| Technology                               | Purpose                                          |
| ---------------------------------------- | ------------------------------------------------ |
| [Astro 5.x](https://astro.build)         | Static site generation with islands architecture |
| [TypeScript](https://typescriptlang.org) | Type safety with strict mode                     |
| [Tailwind CSS](https://tailwindcss.com)  | Utility-first styling with dark mode             |
| [Zod](https://zod.dev)                   | Runtime validation and type inference            |
| [Vitest](https://vitest.dev)             | Fast unit testing framework                      |
| [Playwright](https://playwright.dev)     | End-to-end testing                               |

### Infrastructure

| Service                                               | Purpose                            |
| ----------------------------------------------------- | ---------------------------------- |
| [Cloudflare Pages](https://pages.cloudflare.com)      | Global edge deployment             |
| [Cloudflare CDN](https://cloudflare.com)              | Caching, security, and performance |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline                     |

## Contributing

We welcome contributions from the community! Whether you want to add practice questions, improve translations, fix bugs, or add new features, your help is appreciated.

### Quick Contribution Guide

```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/cn-cert-hub.git
cd cn-cert-hub && npm install

# 2. Create a feature branch
git checkout -b feat/your-feature-name

# 3. Make changes and validate
npm run prepare-pr

# 4. Push and create PR
git push origin feat/your-feature-name
```

### Contribution Types

| Type               | Location              | Description                          |
| ------------------ | --------------------- | ------------------------------------ |
| Practice Questions | `src/data/questions/` | Add exam questions with explanations |
| Study Resources    | `src/data/resources/` | Add learning materials and links     |
| Translations       | `src/i18n/locales/`   | Improve or add language support      |
| Bug Fixes          | Various               | Fix issues and improve stability     |
| Features           | Various               | Add new functionality                |

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines and [ONBOARDING.md](ONBOARDING.md) for a quick start guide.

## CI/CD Pipeline

All pull requests run through automated checks:

```
PR Opened
    │
    ├── Validate ──────────────────────────────┐
    │   ├── TypeScript type checking           │
    │   ├── ESLint linting                     │
    │   ├── Prettier formatting                │
    │   ├── Unit tests (130+ tests)            │
    │   └── Data validation                    │
    │                                          │
    ├── Build ─────────────────────────────────┤
    │   └── Production build verification      │
    │                                          │
    └── Lighthouse ────────────────────────────┘
        └── Performance audit

All Checks Pass → Review → Merge → Auto Deploy
```

## Performance

The site is optimized for performance with:

- **Static Site Generation** - Pre-rendered HTML for instant loading
- **Edge Caching** - Cloudflare CDN with Smart Tiered Cache
- **Optimized Assets** - Compressed images and minified code
- **HTTP/2 & HTTP/3** - Modern protocols for faster delivery
- **Early Hints** - Preload critical resources

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/) for the cloud native ecosystem
- [Linux Foundation](https://www.linuxfoundation.org/) for certification programs
- All [contributors](https://github.com/jeanlopezxyz/cn-cert-hub/graphs/contributors) who help improve this project

---

<div align="center">
  <sub>Built with passion for the Cloud Native community</sub>
  <br><br>
  <a href="https://cncerthub.xyz">Visit CN Cert Hub</a> |
  <a href="https://github.com/jeanlopezxyz/cn-cert-hub/issues">Report Issue</a> |
  <a href="https://github.com/jeanlopezxyz/cn-cert-hub/discussions">Discussions</a>
</div>
