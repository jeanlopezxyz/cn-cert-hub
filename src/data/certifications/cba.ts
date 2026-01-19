import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { CBA_QUESTIONS } from '@/data/questions/cba';
import { CBA_RESOURCES } from '@/data/resources/cba';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  KUBERNETES_VERSIONS,
  PREREQUISITES,
  RETAKE_POLICIES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const CBA: Certification = {
  id: 'cba',
  acronym: 'CBA',
  name: 'Certified Backstage Associate',
  description: 'cert.cba.description',
  level: 'entry',
  type: 'multiple-choice',
  duration: 90,
  price: 250,
  requiredFor: ['Golden Kubestronaut'],
  color: CERTIFICATION_GRADIENTS.cloudNative,
  kubernetesVersion: KUBERNETES_VERSIONS.NOT_APPLICABLE,
  examAttempts: CERTIFICATION_DEFAULTS.EXAM_ATTEMPTS,
  simulatorProvider: SIMULATOR_PROVIDERS.NO_SIMULATOR,
  simulatorAccess: SIMULATOR_ACCESS.NOT_APPLICABLE,
  examFormat: EXAM_FORMATS.MULTIPLE_CHOICE_60,
  retakePolicy: RETAKE_POLICIES.ONE_FREE_RETAKE,
  prerequisites: PREREQUISITES.NONE,
  domains: [
    {
      name: 'Customizing Backstage',
      weight: 32,
      documentationUrl: 'https://backstage.io/docs/plugins/',
      topics: [
        {
          name: 'Understand frontend versus backend plugins',
          url: 'https://backstage.io/docs/plugins/backend-plugin/',
        },
        {
          name: 'Customizing Backstage plugins',
          url: 'https://backstage.io/docs/plugins/composability/',
        },
        {
          name: 'Make changes to React code in Backstage App',
          url: 'https://backstage.io/docs/getting-started/app-custom-theme/',
        },
        { name: 'Using Material UI components', url: 'https://backstage.io/docs/dls/design/' },
      ],
    },
    {
      name: 'Backstage Development Workflow',
      weight: 24,
      documentationUrl: 'https://backstage.io/docs/tooling/cli/overview',
      topics: [
        {
          name: 'Build and run Backstage projects locally',
          url: 'https://backstage.io/docs/getting-started/',
        },
        {
          name: 'Understand local development workflows',
          url: 'https://backstage.io/docs/tooling/cli/commands',
        },
        {
          name: 'Compile a Backstage project with TypeScript',
          url: 'https://backstage.io/docs/tooling/cli/build-system/',
        },
        {
          name: 'Download and install dependencies for a Backstage project with NPM/Yarn',
          url: 'https://backstage.io/docs/getting-started/create-an-app/',
        },
        {
          name: 'Use Docker to build a container image of a Backstage project',
          url: 'https://backstage.io/docs/deployment/docker/',
        },
      ],
    },
    {
      name: 'Backstage Infrastructure',
      weight: 22,
      documentationUrl: 'https://backstage.io/docs/overview/architecture-overview/',
      topics: [
        {
          name: 'Understand the Backstage framework',
          url: 'https://backstage.io/docs/overview/what-is-backstage/',
        },
        { name: 'Configure Backstage', url: 'https://backstage.io/docs/conf/' },
        { name: 'Deploy Backstage to production', url: 'https://backstage.io/docs/deployment/' },
        {
          name: 'Understand Backstage client-server architecture',
          url: 'https://backstage.io/docs/overview/architecture-overview/',
        },
      ],
    },
    {
      name: 'Backstage Catalog',
      weight: 22,
      documentationUrl: 'https://backstage.io/docs/features/software-catalog/',
      topics: [
        {
          name: 'Understand how/why to use Backstage Catalog',
          url: 'https://backstage.io/docs/features/software-catalog/',
        },
        {
          name: 'Populate Backstage Catalog',
          url: 'https://backstage.io/docs/features/software-catalog/descriptor-format/',
        },
        {
          name: 'Using annotations',
          url: 'https://backstage.io/docs/features/software-catalog/well-known-annotations/',
        },
        {
          name: 'Working with manually registered entity locations',
          url: 'https://backstage.io/docs/features/software-catalog/configuration/',
        },
        {
          name: 'Troubleshooting entity ingestion',
          url: 'https://backstage.io/docs/features/software-catalog/life-of-an-entity/',
        },
        {
          name: 'Working with automated ingestion',
          url: 'https://backstage.io/docs/features/software-catalog/external-integrations/',
        },
      ],
    },
  ],
  resources: CBA_RESOURCES,
  questions: CBA_QUESTIONS,
  studyTimeWeeks: 6,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};
