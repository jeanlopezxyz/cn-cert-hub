/**
 * CBA - Certified Backstage Associate
 * Practice Questions
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: cba-XXX (e.g., cba-001, cba-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - Customizing Backstage (32%)
 * - Backstage Development Workflow (24%)
 * - Backstage Infrastructure (22%)
 * - Backstage Catalog (22%)
 */

import type { Question } from '@/types/quiz';

export const CBA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Customizing Backstage (32%)
  // ============================================
  {
    id: 'cba-001',
    question: 'What is the difference between frontend and backend plugins in Backstage?',
    options: [
      'Frontend plugins are faster',
      'Frontend plugins run in the browser; backend plugins run on the server',
      'Backend plugins cannot access databases',
      'They are identical but named differently',
    ],
    correctAnswer: 1,
    explanation:
      'Frontend plugins run in the browser as React components providing UI. Backend plugins run on the server handling data processing, external API calls, and database operations.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/plugins/)',
    domain: 'Customizing Backstage',
    tags: ['plugins', 'frontend', 'backend', 'architecture'],
    difficulty: 'medium',
  },
  {
    id: 'cba-002',
    question: 'What UI framework does Backstage use?',
    options: ['Bootstrap', 'Tailwind CSS', 'Ant Design', 'Material UI (MUI)'],
    correctAnswer: 3,
    explanation:
      'Backstage uses Material UI (MUI) as its UI component library. Customization follows MUI patterns including theming and component composition.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/app-custom-theme/)',
    domain: 'Customizing Backstage',
    tags: ['material-ui', 'frontend', 'components'],
    difficulty: 'medium',
  },
  {
    id: 'cba-003',
    question: 'How do you customize the Backstage theme?',
    options: [
      'Modify the Backstage source code',
      'Edit CSS files directly',
      'Themes cannot be customized',
      'Create a custom theme using createTheme() and pass it to the App',
    ],
    correctAnswer: 3,
    explanation:
      'Backstage themes are customized by creating a theme using createTheme() from @backstage/theme, then passing it to the ThemeProvider or app configuration.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/app-custom-theme/)',
    domain: 'Customizing Backstage',
    tags: ['theming', 'customization', 'material-ui'],
    difficulty: 'medium',
  },
  {
    id: 'cba-004',
    question: 'What is the purpose of the app-config.yaml file in Backstage?',
    options: [
      'Defining TypeScript types',
      'Writing tests',
      'Managing dependencies',
      'Storing application configuration like integrations, auth, and catalog locations',
    ],
    correctAnswer: 3,
    explanation:
      'app-config.yaml is the main configuration file for Backstage, containing settings for integrations (GitHub, GitLab), authentication, catalog locations, and plugin configurations.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/conf/)',
    domain: 'Customizing Backstage',
    tags: ['configuration', 'app-config', 'yaml'],
    difficulty: 'medium',
  },
  {
    id: 'cba-005',
    question: 'What is plugin composability in Backstage?',
    options: [
      'Running multiple Backstage instances',
      'Writing plugins in multiple languages',
      'Deploying plugins to different servers',
      'Combining plugins and their features using extension points',
    ],
    correctAnswer: 3,
    explanation:
      'Plugin composability allows plugins to expose extension points where other plugins can add functionality. This enables flexible customization without modifying plugin source code.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/plugins/composability/)',
    domain: 'Customizing Backstage',
    tags: ['composability', 'plugins', 'extensions'],
    difficulty: 'hard',
  },
  {
    id: 'cba-006',
    question: 'Where do you typically add new routes in a Backstage frontend plugin?',
    options: [
      'In the package.json',
      'In app-config.yaml',
      'Routes are automatically generated',
      'In the App.tsx file using Route components',
    ],
    correctAnswer: 3,
    explanation:
      'New routes are added in App.tsx using React Router components. Plugin pages are mounted at specific paths using Route components within the FlatRoutes component.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/plugins/integrating-plugin-into-software-catalog/)',
    domain: 'Customizing Backstage',
    tags: ['routing', 'frontend', 'react-router'],
    difficulty: 'medium',
  },
  {
    id: 'cba-007',
    question: 'What is the Backstage Design System?',
    options: [
      'A set of reusable UI components and guidelines for consistent look and feel',
      'A deployment pattern',
      'A database schema',
      'A testing framework',
    ],
    correctAnswer: 0,
    explanation:
      'The Backstage Design System provides reusable UI components, patterns, and guidelines ensuring consistent user experience across plugins and the core platform.\n\nLearn more: [Documentación oficial](https://backstage.io/storybook/)',
    domain: 'Customizing Backstage',
    tags: ['design-system', 'ui', 'components'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: Backstage Development Workflow (24%)
  // ============================================
  {
    id: 'cba-008',
    question: 'What command creates a new Backstage app?',
    options: [
      'npm init backstage',
      'backstage new app',
      'npx @backstage/create-app',
      'yarn create backstage',
    ],
    correctAnswer: 2,
    explanation:
      'npx @backstage/create-app is the official command to scaffold a new Backstage application with all necessary dependencies and configuration.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/)',
    domain: 'Backstage Development Workflow',
    tags: ['cli', 'scaffolding', 'setup'],
    difficulty: 'medium',
  },
  {
    id: 'cba-009',
    question: 'How do you start Backstage in development mode?',
    options: ['backstage serve', 'yarn dev', 'docker run backstage', 'npm start'],
    correctAnswer: 1,
    explanation:
      'yarn dev (or npm run dev) starts Backstage in development mode with hot reloading, running both frontend and backend concurrently.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/running-backstage-locally/)',
    domain: 'Backstage Development Workflow',
    tags: ['development', 'cli', 'local'],
    difficulty: 'medium',
  },
  {
    id: 'cba-010',
    question: 'What package manager does Backstage primarily use?',
    options: ['pnpm only', 'npm only', 'Yarn (with workspaces)', 'Bun'],
    correctAnswer: 2,
    explanation:
      'Backstage uses Yarn with workspaces for managing the monorepo structure. While npm can work, Yarn is the officially supported and recommended package manager.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/)',
    domain: 'Backstage Development Workflow',
    tags: ['yarn', 'package-manager', 'workspaces'],
    difficulty: 'medium',
  },
  {
    id: 'cba-011',
    question: 'How do you build a Docker image for Backstage?',
    options: [
      'yarn build:docker',
      'Use the provided Dockerfile in packages/backend',
      'docker compose up',
      'Backstage does not support Docker',
    ],
    correctAnswer: 1,
    explanation:
      'Backstage provides a Dockerfile in packages/backend. The build process typically involves yarn build followed by docker build using the provided Dockerfile.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/deployment/docker/)',
    domain: 'Backstage Development Workflow',
    tags: ['docker', 'containerization', 'build'],
    difficulty: 'hard',
  },
  {
    id: 'cba-012',
    question: 'What is the purpose of yarn tsc in Backstage?',
    options: [
      'Running tests',
      'Starting the server',
      'Type-checking TypeScript code without emitting output',
      'Installing dependencies',
    ],
    correctAnswer: 2,
    explanation:
      'yarn tsc runs the TypeScript compiler for type-checking across the entire monorepo without generating output files, useful for catching type errors.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/local-dev/cli-commands/)',
    domain: 'Backstage Development Workflow',
    tags: ['typescript', 'type-checking', 'build'],
    difficulty: 'medium',
  },
  {
    id: 'cba-013',
    question: 'How do you create a new plugin in Backstage?',
    options: [
      'Manually create all files',
      'yarn new (or yarn backstage-cli create)',
      'npm install plugin',
      'Copy an existing plugin folder',
    ],
    correctAnswer: 1,
    explanation:
      'yarn new or yarn backstage-cli create starts an interactive wizard that scaffolds new plugins, creating the necessary directory structure, files, and configurations.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/plugins/create-a-plugin/)',
    domain: 'Backstage Development Workflow',
    tags: ['plugins', 'scaffolding', 'cli'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: Backstage Infrastructure (22%)
  // ============================================
  {
    id: 'cba-014',
    question: 'What is Backstage?',
    options: [
      'A monitoring tool',
      'An open platform for building developer portals',
      'A CI/CD system',
      'A container runtime',
    ],
    correctAnswer: 1,
    explanation:
      'Backstage is an open-source platform for building developer portals. It was created by Spotify and donated to the CNCF, providing a unified frontend for infrastructure tooling.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/overview/what-is-backstage/)',
    domain: 'Backstage Infrastructure',
    tags: ['backstage', 'developer-portal', 'fundamentals'],
    difficulty: 'medium',
  },
  {
    id: 'cba-015',
    question: 'What database does Backstage use by default?',
    options: ['MongoDB', 'PostgreSQL (with SQLite for development)', 'MySQL', 'Redis'],
    correctAnswer: 1,
    explanation:
      'Backstage uses SQLite by default for local development and PostgreSQL for production. The catalog, permissions, and other features store data in these databases.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/config/database/)',
    domain: 'Backstage Infrastructure',
    tags: ['database', 'postgresql', 'sqlite'],
    difficulty: 'medium',
  },
  {
    id: 'cba-016',
    question: 'What is the architecture of a Backstage application?',
    options: [
      'Frontend React app + Backend Node.js service',
      'Single-page app only',
      'Microservices only',
      'Static HTML files',
    ],
    correctAnswer: 0,
    explanation:
      'Backstage consists of a frontend React app (packages/app) and a backend Node.js service (packages/backend). The frontend communicates with the backend via REST APIs.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/overview/architecture-overview/)',
    domain: 'Backstage Infrastructure',
    tags: ['architecture', 'frontend', 'backend'],
    difficulty: 'medium',
  },
  {
    id: 'cba-017',
    question: 'What is the recommended way to deploy Backstage to production?',
    options: [
      'Run yarn dev on a server',
      'Use the development SQLite database',
      'Build and deploy as containerized application with proper database',
      'Deploy only the frontend',
    ],
    correctAnswer: 2,
    explanation:
      'For production, Backstage should be built (yarn build), containerized using Docker, and deployed with a production database (PostgreSQL) and proper authentication.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/deployment/)',
    domain: 'Backstage Infrastructure',
    tags: ['deployment', 'production', 'docker'],
    difficulty: 'hard',
  },
  {
    id: 'cba-018',
    question: 'How do you configure authentication in Backstage?',
    options: [
      'It only supports username/password',
      'Through auth providers configured in app-config.yaml',
      'Authentication is not supported',
      'Only through third-party plugins',
    ],
    correctAnswer: 1,
    explanation:
      'Backstage supports multiple auth providers (GitHub, Google, Okta, etc.) configured in app-config.yaml under the auth section, with sign-in resolvers for identity mapping.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/auth/)',
    domain: 'Backstage Infrastructure',
    tags: ['authentication', 'auth-providers', 'configuration'],
    difficulty: 'medium',
  },
  {
    id: 'cba-019',
    question: 'What environment variables override app-config settings?',
    options: [
      'None, config cannot be overridden',
      'Only NODE_ENV',
      'Variables matching the config path (e.g., APP_CONFIG_backend_database_connection)',
      'Custom variables defined in package.json',
    ],
    correctAnswer: 2,
    explanation:
      'Backstage configuration can be overridden using environment variables with the APP_CONFIG_ prefix, following the path structure (e.g., APP_CONFIG_backend_database_connection).\n\nLearn more: [Documentación oficial](https://backstage.io/docs/conf/writing/)',
    domain: 'Backstage Infrastructure',
    tags: ['configuration', 'environment-variables', 'deployment'],
    difficulty: 'hard',
  },

  // ============================================
  // DOMAIN: Backstage Catalog (22%)
  // ============================================
  {
    id: 'cba-020',
    question: 'What is the Backstage Software Catalog?',
    options: [
      'A centralized registry of all software assets, teams, and their relationships',
      'A package registry',
      'A CI/CD pipeline',
      'A monitoring dashboard',
    ],
    correctAnswer: 0,
    explanation:
      "The Software Catalog is a centralized registry tracking all software components, APIs, resources, teams, and their relationships, providing a comprehensive view of the organization's software ecosystem.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/)",
    domain: 'Backstage Catalog',
    tags: ['catalog', 'software-assets', 'fundamentals'],
    difficulty: 'medium',
  },
  {
    id: 'cba-021',
    question: 'What file describes an entity in the Backstage Catalog?',
    options: ['package.json', 'catalog-info.yaml', 'backstage.json', 'entity.xml'],
    correctAnswer: 1,
    explanation:
      'catalog-info.yaml is the descriptor file that defines an entity (Component, API, Resource, etc.) in the Backstage Catalog, typically placed at the root of a repository.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/descriptor-format/)',
    domain: 'Backstage Catalog',
    tags: ['catalog-info', 'yaml', 'entities'],
    difficulty: 'medium',
  },
  {
    id: 'cba-022',
    question: 'What are the main entity kinds in the Backstage Catalog?',
    options: [
      'Files and Folders',
      'Pod, Service, Deployment',
      'Component, API, Resource, System, Domain, Group, User',
      'Frontend and Backend',
    ],
    correctAnswer: 2,
    explanation:
      'The main entity kinds are: Component (software), API (interfaces), Resource (infrastructure), System (collection), Domain (business area), Group (team), User (individual), and Location (reference).\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/system-model/)',
    domain: 'Backstage Catalog',
    tags: ['entities', 'kinds', 'data-model'],
    difficulty: 'hard',
  },
  {
    id: 'cba-023',
    question: 'What are annotations used for in catalog-info.yaml?',
    options: [
      'Writing comments',
      'Defining dependencies',
      'Specifying build commands',
      'Adding metadata that plugins and integrations can use',
    ],
    correctAnswer: 3,
    explanation:
      'Annotations are key-value pairs providing metadata for plugins and integrations (e.g., backstage.io/techdocs-ref for TechDocs, github.com/project-slug for GitHub integration).\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/well-known-annotations/)',
    domain: 'Backstage Catalog',
    tags: ['annotations', 'metadata', 'integrations'],
    difficulty: 'medium',
  },
  {
    id: 'cba-024',
    question: 'How do you register entities from a GitHub organization?',
    options: [
      'Manually create catalog-info.yaml for each repo',
      'Use a CLI command',
      'Configure catalog providers in app-config.yaml to auto-discover repositories',
      'Entities cannot be imported from GitHub',
    ],
    correctAnswer: 2,
    explanation:
      'Catalog providers can be configured to automatically discover and ingest catalog-info.yaml files from GitHub organizations, scanning repositories at configured intervals.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/integrations/github/discovery/)',
    domain: 'Backstage Catalog',
    tags: ['providers', 'github', 'auto-discovery'],
    difficulty: 'hard',
  },
  {
    id: 'cba-025',
    question: 'What is a Location entity in Backstage?',
    options: [
      'A reference to other catalog files that should be ingested',
      'A geographic marker',
      'A physical server location',
      'A deployment environment',
    ],
    correctAnswer: 0,
    explanation:
      'A Location entity points to other catalog descriptor files (URLs or paths) that the catalog should ingest. It enables organizing and referencing multiple entity sources.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/descriptor-format/#kind-location/)',
    domain: 'Backstage Catalog',
    tags: ['location', 'ingestion', 'references'],
    difficulty: 'medium',
  },
  {
    id: 'cba-026',
    question: 'How do you define relationships between entities?',
    options: [
      'Using foreign keys in a database',
      'Relationships cannot be defined',
      'Through separate configuration files',
      'Using spec fields like owner, dependsOn, consumesApi, providesApi',
    ],
    correctAnswer: 3,
    explanation:
      'Relationships are defined in the spec section using fields like owner (team), dependsOn (dependencies), consumesApi/providesApi (API relationships), and partOf (system membership).\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/well-known-relations/)',
    domain: 'Backstage Catalog',
    tags: ['relationships', 'dependencies', 'spec'],
    difficulty: 'medium',
  },
  {
    id: 'cba-027',
    question: 'What is the lifecycle field in a Component entity?',
    options: [
      'The development stage (experimental, production, deprecated)',
      'The deployment frequency',
      'The uptime of the component',
      'The maintenance schedule',
    ],
    correctAnswer: 0,
    explanation:
      "The lifecycle field indicates the component's development stage: experimental (early development), production (stable), or deprecated (being phased out).\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/descriptor-format/#speclifecycle-required/)",
    domain: 'Backstage Catalog',
    tags: ['lifecycle', 'component', 'metadata'],
    difficulty: 'medium',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Customizing Backstage
  // ============================================
  {
    id: 'cba-028',
    question: 'What is a Backstage entity page?',
    options: [
      'A documentation file',
      'A configuration file',
      'A database table',
      'The UI page that displays information about a catalog entity',
    ],
    correctAnswer: 3,
    explanation:
      'An entity page is the React component that renders the details view for a catalog entity. Different entity kinds (Component, API, etc.) can have different page layouts.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/plugins/integrating-plugin-into-software-catalog/)',
    domain: 'Customizing Backstage',
    tags: ['entity-page', 'ui', 'customization'],
    difficulty: 'medium',
  },
  {
    id: 'cba-029',
    question: 'How do you add a custom tab to an entity page?',
    options: [
      'Modify the database directly',
      'Edit the catalog-info.yaml',
      'Create a component and add it to EntityLayout.Route in the entity page',
      'Use environment variables',
    ],
    correctAnswer: 2,
    explanation:
      'Custom tabs are added by creating React components and adding them as EntityLayout.Route children in the entity page definition, specifying path and title.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/plugins/integrating-plugin-into-software-catalog/)',
    domain: 'Customizing Backstage',
    tags: ['entity-page', 'tabs', 'routing'],
    difficulty: 'hard',
  },
  {
    id: 'cba-030',
    question: 'What is the purpose of @backstage/core-components?',
    options: [
      'Database operations',
      'Provides reusable UI components like Header, Table, Card, etc.',
      'Authentication handling',
      'API routing',
    ],
    correctAnswer: 1,
    explanation:
      '@backstage/core-components provides a library of reusable UI components that follow the Backstage design system, ensuring consistent look and feel across plugins.\n\nLearn more: [Documentación oficial](https://backstage.io/storybook/)',
    domain: 'Customizing Backstage',
    tags: ['core-components', 'ui', 'library'],
    difficulty: 'medium',
  },
  {
    id: 'cba-031',
    question: 'What is an extension in the Backstage new frontend system?',
    options: [
      'A file extension type',
      'A browser extension',
      'A database extension',
      'A modular piece of UI or functionality that can be added to the app',
    ],
    correctAnswer: 3,
    explanation:
      'Extensions in the new frontend system are modular, composable pieces of functionality that plugins expose, allowing flexible app customization and composition.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/frontend-system/)',
    domain: 'Customizing Backstage',
    tags: ['extensions', 'frontend-system', 'modularity'],
    difficulty: 'hard',
  },
  {
    id: 'cba-032',
    question: 'How do you override the default Backstage sidebar?',
    options: [
      'Create a custom Root component with your own sidebar implementation',
      'Edit the source code in node_modules',
      'Use CSS only',
      'Modify package.json',
    ],
    correctAnswer: 0,
    explanation:
      'The sidebar is customized by creating a custom Root component in your app that wraps the Backstage Sidebar with your desired items and configuration.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/homepage/)',
    domain: 'Customizing Backstage',
    tags: ['sidebar', 'root', 'customization'],
    difficulty: 'hard',
  },
  {
    id: 'cba-033',
    question: 'What is the purpose of the SignInPage in Backstage?',
    options: [
      'Displaying documentation',
      'Managing database connections',
      'Customizing the authentication experience and provider selection',
      'Configuring CI/CD',
    ],
    correctAnswer: 2,
    explanation:
      'The SignInPage component handles the login experience, allowing users to select authentication providers and sign in. It can be customized or replaced.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/auth/)',
    domain: 'Customizing Backstage',
    tags: ['signin', 'authentication', 'customization'],
    difficulty: 'medium',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Backstage Development Workflow
  // ============================================
  {
    id: 'cba-034',
    question: 'What is the purpose of yarn lint in Backstage?',
    options: [
      'Running database migrations',
      'Deploying the application',
      'Installing dependencies',
      'Checking code for style issues and potential errors',
    ],
    correctAnswer: 3,
    explanation:
      'yarn lint runs ESLint to check the codebase for style issues, potential bugs, and adherence to coding standards defined in the configuration.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/local-dev/cli-commands/)',
    domain: 'Backstage Development Workflow',
    tags: ['lint', 'eslint', 'code-quality'],
    difficulty: 'medium',
  },
  {
    id: 'cba-035',
    question: 'How do you run tests in a Backstage project?',
    options: [
      'npm run check',
      'backstage test',
      'yarn test or yarn test --watchAll',
      'Tests are not supported',
    ],
    correctAnswer: 2,
    explanation:
      'Backstage uses Jest for testing. Run yarn test for a single run or yarn test --watchAll for watch mode during development.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/local-dev/cli-commands/)',
    domain: 'Backstage Development Workflow',
    tags: ['testing', 'jest', 'development'],
    difficulty: 'medium',
  },
  {
    id: 'cba-036',
    question: 'What is the purpose of the backstage-cli versions:check command?',
    options: [
      'Ensuring Backstage package versions are compatible',
      'Checking Node.js version',
      'Checking Git versions',
      'Verifying database version',
    ],
    correctAnswer: 0,
    explanation:
      'backstage-cli versions:check verifies that all Backstage packages in your project are compatible and suggests version updates if needed.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/keeping-backstage-updated/)',
    domain: 'Backstage Development Workflow',
    tags: ['cli', 'versions', 'compatibility'],
    difficulty: 'hard',
  },
  {
    id: 'cba-037',
    question: 'How do you upgrade Backstage packages?',
    options: [
      'Manual editing of package.json only',
      'Reinstalling from scratch',
      'Packages cannot be upgraded',
      'Using backstage-cli versions:bump to update all Backstage dependencies',
    ],
    correctAnswer: 3,
    explanation:
      'backstage-cli versions:bump automatically updates all Backstage packages to the latest compatible versions, simplifying the upgrade process.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/keeping-backstage-updated/)',
    domain: 'Backstage Development Workflow',
    tags: ['upgrade', 'cli', 'dependencies'],
    difficulty: 'medium',
  },
  {
    id: 'cba-038',
    question: 'What is the purpose of app-config.production.yaml?',
    options: [
      'Production-specific configuration that overrides app-config.yaml',
      'Development configuration',
      'Testing configuration',
      'Documentation',
    ],
    correctAnswer: 0,
    explanation:
      'app-config.production.yaml contains production-specific settings that override or extend the base app-config.yaml when running in production.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/conf/)',
    domain: 'Backstage Development Workflow',
    tags: ['configuration', 'production', 'yaml'],
    difficulty: 'medium',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Backstage Infrastructure
  // ============================================
  {
    id: 'cba-039',
    question: 'What is a Backstage search collator?',
    options: [
      'A database index',
      'A sorting algorithm',
      'A component that gathers and indexes documents for Backstage Search',
      'A file organizer',
    ],
    correctAnswer: 2,
    explanation:
      'Search collators gather documents from various sources (catalog, TechDocs, etc.) and prepare them for indexing by the search engine.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/search/)',
    domain: 'Backstage Infrastructure',
    tags: ['search', 'collator', 'indexing'],
    difficulty: 'hard',
  },
  {
    id: 'cba-040',
    question: 'What search engines does Backstage support?',
    options: [
      'Only PostgreSQL full-text search',
      'Search is not supported',
      'Only Elasticsearch',
      'Lunr (in-memory), PostgreSQL, and Elasticsearch',
    ],
    correctAnswer: 3,
    explanation:
      'Backstage Search supports multiple backends: Lunr (in-memory, good for development), PostgreSQL full-text search, and Elasticsearch for production.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/search/)',
    domain: 'Backstage Infrastructure',
    tags: ['search', 'backends', 'elasticsearch'],
    difficulty: 'hard',
  },
  {
    id: 'cba-041',
    question: 'What is the purpose of the Backstage backend-to-backend auth?',
    options: [
      'User authentication',
      'Frontend authentication',
      'Database authentication',
      'Secure communication between backend plugins and services',
    ],
    correctAnswer: 3,
    explanation:
      'Backend-to-backend auth uses tokens to authenticate requests between backend services and plugins, ensuring secure internal communication.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/auth/service-to-service-auth/)',
    domain: 'Backstage Infrastructure',
    tags: ['authentication', 'backend', 'security'],
    difficulty: 'hard',
  },
  {
    id: 'cba-042',
    question: 'What is TechDocs in Backstage?',
    options: [
      'A built-in documentation solution using docs-as-code approach',
      'A testing framework',
      'A code editor',
      'A deployment tool',
    ],
    correctAnswer: 0,
    explanation:
      "TechDocs is Backstage's docs-as-code solution. It generates documentation sites from Markdown files stored alongside code and integrates with the catalog.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/techdocs/)",
    domain: 'Backstage Infrastructure',
    tags: ['techdocs', 'documentation', 'markdown'],
    difficulty: 'medium',
  },
  {
    id: 'cba-043',
    question: 'What storage options does TechDocs support for generated docs?',
    options: [
      'Local filesystem only',
      'Local filesystem, Google Cloud Storage, AWS S3, Azure Blob Storage',
      'Only cloud storage',
      'Database storage only',
    ],
    correctAnswer: 1,
    explanation:
      'TechDocs supports multiple storage backends: local filesystem for development, and cloud storage (GCS, S3, Azure) for production environments.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/techdocs/using-cloud-storage/)',
    domain: 'Backstage Infrastructure',
    tags: ['techdocs', 'storage', 'cloud'],
    difficulty: 'hard',
  },
  {
    id: 'cba-044',
    question: 'What is the permission framework in Backstage?',
    options: [
      'A system for defining and enforcing fine-grained access control',
      'Only RBAC for users',
      'File permissions only',
      'Network permissions',
    ],
    correctAnswer: 0,
    explanation:
      'The permission framework allows defining policies that control access to resources and actions throughout Backstage, integrating with plugins and catalog.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/permissions/overview/)',
    domain: 'Backstage Infrastructure',
    tags: ['permissions', 'authorization', 'security'],
    difficulty: 'hard',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Backstage Catalog
  // ============================================
  {
    id: 'cba-045',
    question: 'What is a System entity in the Backstage Catalog?',
    options: [
      'An operating system',
      'A server instance',
      'A collection of related components and resources that form a product',
      'A configuration file',
    ],
    correctAnswer: 2,
    explanation:
      'A System entity groups related components, APIs, and resources that together provide a product or capability. Components can declare partOf a system.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/system-model/)',
    domain: 'Backstage Catalog',
    tags: ['system', 'entities', 'organization'],
    difficulty: 'medium',
  },
  {
    id: 'cba-046',
    question: 'What is a Domain entity in Backstage?',
    options: [
      'A DNS domain',
      'A business capability area that groups related systems',
      'A database domain',
      'A network domain',
    ],
    correctAnswer: 1,
    explanation:
      'A Domain represents a business capability area (e.g., Payments, Inventory). Systems can belong to domains, providing business context to the catalog.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/system-model/)',
    domain: 'Backstage Catalog',
    tags: ['domain', 'entities', 'business'],
    difficulty: 'medium',
  },
  {
    id: 'cba-047',
    question: 'What is the purpose of the spec.type field in a Component entity?',
    options: [
      'Categorizing the component (service, website, library, etc.)',
      'Data type of the component',
      'The programming language used',
      'The deployment type',
    ],
    correctAnswer: 0,
    explanation:
      'The spec.type field categorizes components: service, website, library, etc. This enables filtering and applying type-specific views in the catalog.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/descriptor-format/#spectype-required/)',
    domain: 'Backstage Catalog',
    tags: ['type', 'component', 'categorization'],
    difficulty: 'medium',
  },
  {
    id: 'cba-048',
    question: 'How does the catalog processor work?',
    options: [
      'It reads, validates, and transforms entities from various sources',
      'It only reads local files',
      'It only handles Git repositories',
      'It creates databases',
    ],
    correctAnswer: 0,
    explanation:
      'Catalog processors read entities from sources, validate them against schemas, apply transformations, and emit entities to be stored in the catalog.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/extending-the-model/)',
    domain: 'Backstage Catalog',
    tags: ['processor', 'ingestion', 'validation'],
    difficulty: 'hard',
  },
  {
    id: 'cba-049',
    question: 'What are entity relations used for in the catalog?',
    options: [
      'Database foreign keys',
      'Expressing connections between entities (ownership, dependencies, APIs)',
      'File linking',
      'Version control',
    ],
    correctAnswer: 1,
    explanation:
      'Relations express connections between entities: ownedBy/ownerOf, dependsOn/dependencyOf, providesApi/apiProvidedBy, consumesApi/apiConsumedBy, etc.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/well-known-relations/)',
    domain: 'Backstage Catalog',
    tags: ['relations', 'connections', 'graph'],
    difficulty: 'medium',
  },
  {
    id: 'cba-050',
    question: 'What is the purpose of the catalog refresh process?',
    options: [
      'Clearing the cache',
      'Restarting the server',
      'Updating the UI',
      'Periodically re-ingesting entities to keep the catalog up-to-date',
    ],
    correctAnswer: 3,
    explanation:
      'The refresh process periodically re-reads and updates entities from their sources, ensuring the catalog reflects the current state of repositories and configurations.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/life-of-an-entity/)',
    domain: 'Backstage Catalog',
    tags: ['refresh', 'ingestion', 'sync'],
    difficulty: 'hard',
  },
  {
    id: 'cba-051',
    question: 'What is an API entity in Backstage?',
    options: [
      'A REST endpoint only',
      'A configuration file',
      'A catalog entity representing an interface exposed by a component',
      'A database table',
    ],
    correctAnswer: 2,
    explanation:
      'An API entity represents an interface (REST, GraphQL, gRPC, etc.) that a component exposes. It includes the API specification and documentation.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/descriptor-format/#kind-api/)',
    domain: 'Backstage Catalog',
    tags: ['api', 'entities', 'interfaces'],
    difficulty: 'medium',
  },
  {
    id: 'cba-052',
    question: 'What is a Resource entity in the Backstage Catalog?',
    options: [
      'Infrastructure a component needs (database, S3 bucket, queue, etc.)',
      'A file resource',
      'A CPU resource',
      'A memory limit',
    ],
    correctAnswer: 0,
    explanation:
      'A Resource entity represents infrastructure that a component depends on or uses, such as databases, message queues, S3 buckets, or cloud services.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/descriptor-format/#kind-resource/)',
    domain: 'Backstage Catalog',
    tags: ['resource', 'entities', 'infrastructure'],
    difficulty: 'hard',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Customizing, Troubleshooting, Production
  // ============================================
  {
    id: 'cba-053',
    question:
      'When customizing Material UI components in Backstage, what is the recommended approach for overriding styles?',
    options: [
      'Using the sx prop or styled() API from @mui/material for component-level customization',
      'Editing the node_modules source files directly',
      'Using inline CSS styles only',
      'Modifying global CSS files without any MUI APIs',
    ],
    correctAnswer: 0,
    explanation:
      'Material UI provides the sx prop and styled() API for styling components. The sx prop allows inline-style-like syntax with theme access, while styled() creates reusable styled components.\n\nLearn more: [Documentación oficial](https://mui.com/system/getting-started/the-sx-prop/)',
    domain: 'Customizing Backstage',
    tags: ['material-ui', 'styling', 'customization', 'react'],
    difficulty: 'medium',
  },
  {
    id: 'cba-054',
    question:
      'What is the correct way to wrap your Backstage app with a custom ThemeProvider configuration?',
    options: [
      'Edit the theme directly in node_modules/@backstage/theme',
      'Create a theme using createUnifiedTheme() and pass it to the app via themes array in createApp()',
      'Themes can only be changed by Backstage core maintainers',
      'Use CSS variables exclusively without any ThemeProvider',
    ],
    correctAnswer: 1,
    explanation:
      'Backstage themes are configured by creating a theme with createUnifiedTheme() (or createTheme() for older versions) and providing it to the app configuration via the themes array in createApp().\n\nLearn more: [Documentación oficial](https://backstage.io/docs/getting-started/app-custom-theme/)',
    domain: 'Customizing Backstage',
    tags: ['theming', 'theme-provider', 'customization', 'react'],
    difficulty: 'hard',
  },
  {
    id: 'cba-055',
    question:
      'When an entity fails to appear in the Backstage catalog after registration, what is the first troubleshooting step?',
    options: [
      'Restart the entire Kubernetes cluster',
      'Delete and recreate the Backstage database',
      'Check the catalog processor logs for YAML parsing or validation errors',
      'Upgrade to the latest Backstage version immediately',
    ],
    correctAnswer: 2,
    explanation:
      'Entity ingestion issues are commonly caused by YAML syntax errors or validation failures. The catalog processor logs provide detailed error messages about parsing problems, missing required fields, or invalid entity references.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/life-of-an-entity/)',
    domain: 'Backstage Catalog',
    tags: ['troubleshooting', 'catalog', 'ingestion', 'debugging'],
    difficulty: 'medium',
  },
  {
    id: 'cba-056',
    question:
      'What common catalog error occurs when a catalog-info.yaml references an owner that does not exist?',
    options: [
      'The entity is created but shows an orphan relation warning',
      'The Backstage server crashes immediately',
      'All other entities are deleted',
      'The database becomes corrupted',
    ],
    correctAnswer: 0,
    explanation:
      'When an entity references a non-existent owner or other relation target, Backstage creates the entity but marks the relation as orphaned. This appears as a warning in the entity view, indicating the referenced entity needs to be registered.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/features/software-catalog/well-known-relations/)',
    domain: 'Backstage Catalog',
    tags: ['troubleshooting', 'relations', 'orphan', 'catalog-errors'],
    difficulty: 'medium',
  },
  {
    id: 'cba-057',
    question: 'How do you debug a frontend plugin that is not rendering correctly in Backstage?',
    options: [
      'Only check the PostgreSQL database logs',
      'Restart the backend server repeatedly',
      'Disable all security features',
      'Use browser DevTools to check console errors and React Developer Tools to inspect component state',
    ],
    correctAnswer: 3,
    explanation:
      'Frontend plugin issues are debugged using browser developer tools: the console shows JavaScript errors and warnings, the Network tab shows failed API calls, and React Developer Tools helps inspect component props, state, and hooks.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/plugins/create-a-plugin/)',
    domain: 'Customizing Backstage',
    tags: ['debugging', 'frontend', 'devtools', 'troubleshooting'],
    difficulty: 'medium',
  },
  {
    id: 'cba-058',
    question:
      'What is required for a production Backstage deployment beyond the development setup?',
    options: [
      'Only increasing memory limits is needed',
      'Production deployments work identically to development with no changes',
      'PostgreSQL database, proper authentication, HTTPS, and persistent storage for TechDocs',
      'Only Docker is required with no other configuration',
    ],
    correctAnswer: 2,
    explanation:
      'Production deployments require replacing SQLite with PostgreSQL, configuring proper authentication providers, enabling HTTPS/TLS, setting up persistent storage for TechDocs, and configuring appropriate secrets management.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/deployment/)',
    domain: 'Backstage Infrastructure',
    tags: ['production', 'deployment', 'postgresql', 'security'],
    difficulty: 'hard',
  },
  {
    id: 'cba-059',
    question:
      'When developing locally, how can you test backend plugin changes without rebuilding the entire app?',
    options: [
      'Backend changes always require a full Docker rebuild',
      'Use yarn start-backend to run only the backend with hot reloading',
      'Manually copy files to node_modules',
      'Local backend testing is not supported',
    ],
    correctAnswer: 1,
    explanation:
      'The yarn start-backend command runs only the backend service with watch mode, automatically reloading when TypeScript files change. This enables faster iteration during backend plugin development.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/local-dev/cli-commands/)',
    domain: 'Backstage Development Workflow',
    tags: ['local-development', 'backend', 'hot-reload', 'workflow'],
    difficulty: 'medium',
  },
  {
    id: 'cba-060',
    question:
      'In React code for Backstage plugins, what hook is used to access the authenticated user identity?',
    options: [
      'useCurrentUser() from @backstage/core-plugin-api',
      'useIdentityApi() from @backstage/core-plugin-api, then calling getBackstageIdentity()',
      'React.useContext(UserContext)',
      'User identity cannot be accessed in frontend plugins',
    ],
    correctAnswer: 1,
    explanation:
      'The identityApi is accessed via useApi(identityApiRef) from @backstage/core-plugin-api. Calling getBackstageIdentity() returns the current user identity including userEntityRef and ownershipEntityRefs.\n\nLearn more: [Documentación oficial](https://backstage.io/docs/auth/identity-resolver/)',
    domain: 'Customizing Backstage',
    tags: ['react', 'identity', 'hooks', 'authentication'],
    difficulty: 'hard',
  },
];
