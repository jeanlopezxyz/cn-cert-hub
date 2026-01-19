import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { OTCA_QUESTIONS } from '@/data/questions/otca';
import { OTCA_RESOURCES } from '@/data/resources/otca';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  KUBERNETES_VERSIONS,
  PREREQUISITES,
  RETAKE_POLICIES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const OTCA: Certification = {
  id: 'otca',
  acronym: 'OTCA',
  name: 'OpenTelemetry Certified Associate',
  description: 'cert.otca.description',
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
      name: 'The OpenTelemetry API and SDK',
      weight: 46,
      documentationUrl: 'https://opentelemetry.io/docs/concepts/',
      topics: [
        { name: 'Data Model', url: 'https://opentelemetry.io/docs/concepts/signals/' },
        {
          name: 'Composability and Extension',
          url: 'https://opentelemetry.io/docs/collector/custom-collector/',
        },
        {
          name: 'Configuration',
          url: 'https://opentelemetry.io/docs/languages/sdk-configuration/',
        },
        {
          name: 'Signals (Tracing, Metric, Log)',
          url: 'https://opentelemetry.io/docs/concepts/signals/',
        },
        { name: 'SDK Pipelines', url: 'https://opentelemetry.io/docs/collector/configuration/' },
        {
          name: 'Context Propagation',
          url: 'https://opentelemetry.io/docs/concepts/context-propagation/',
        },
        { name: 'Agents', url: 'https://opentelemetry.io/docs/zero-code/' },
      ],
    },
    {
      name: 'The OpenTelemetry Collector',
      weight: 26,
      documentationUrl: 'https://opentelemetry.io/docs/collector/',
      topics: [
        { name: 'Configuration', url: 'https://opentelemetry.io/docs/collector/configuration/' },
        { name: 'Deployment', url: 'https://opentelemetry.io/docs/collector/deployment/' },
        { name: 'Scaling', url: 'https://opentelemetry.io/docs/collector/scaling/' },
        {
          name: 'Pipelines',
          url: 'https://opentelemetry.io/docs/collector/configuration/#pipelines',
        },
        {
          name: 'Transforming Data',
          url: 'https://opentelemetry.io/docs/collector/transforming-telemetry/',
        },
      ],
    },
    {
      name: 'Fundamentals of Observability',
      weight: 18,
      documentationUrl: 'https://opentelemetry.io/docs/concepts/observability-primer/',
      topics: [
        { name: 'Telemetry Data', url: 'https://opentelemetry.io/docs/concepts/signals/' },
        {
          name: 'Semantic Conventions',
          url: 'https://opentelemetry.io/docs/concepts/semantic-conventions/',
        },
        { name: 'Instrumentation', url: 'https://opentelemetry.io/docs/concepts/instrumentation/' },
        {
          name: 'Analysis and Outcomes',
          url: 'https://opentelemetry.io/docs/concepts/observability-primer/',
        },
      ],
    },
    {
      name: 'Maintaining and Debugging Observability Pipelines',
      weight: 10,
      documentationUrl: 'https://opentelemetry.io/docs/collector/troubleshooting/',
      topics: [
        {
          name: 'Context Propagation',
          url: 'https://opentelemetry.io/docs/concepts/context-propagation/',
        },
        {
          name: 'Debugging Pipelines',
          url: 'https://opentelemetry.io/docs/collector/troubleshooting/',
        },
        { name: 'Error Handling', url: 'https://opentelemetry.io/docs/collector/troubleshooting/' },
        { name: 'Schema Management', url: 'https://opentelemetry.io/docs/specs/otel/schemas/' },
      ],
    },
  ],
  resources: OTCA_RESOURCES,
  questions: OTCA_QUESTIONS,
  studyTimeWeeks: 6,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};
