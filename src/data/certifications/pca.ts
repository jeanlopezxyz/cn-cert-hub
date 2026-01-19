import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { PCA_QUESTIONS } from '@/data/questions/pca';
import { PCA_RESOURCES } from '@/data/resources/pca';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  KUBERNETES_VERSIONS,
  PREREQUISITES,
  RETAKE_POLICIES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const PCA: Certification = {
  id: 'pca',
  acronym: 'PCA',
  name: 'Prometheus Certified Associate',
  description: 'cert.pca.description',
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
      name: 'Observability Concepts',
      weight: 18,
      documentationUrl: 'https://prometheus.io/docs/introduction/overview/',
      topics: [
        { name: 'Metrics', url: 'https://prometheus.io/docs/concepts/metric_types/' },
        {
          name: 'Understand logs and events',
          url: 'https://prometheus.io/docs/practices/instrumentation/',
        },
        {
          name: 'Tracing and Spans',
          url: 'https://opentelemetry.io/docs/concepts/signals/traces/',
        },
        {
          name: 'Push vs Pull',
          url: 'https://prometheus.io/docs/introduction/faq/#why-do-you-pull-rather-than-push',
        },
        {
          name: 'Service Discovery',
          url: 'https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config',
        },
        {
          name: 'Basics of SLOs, SLAs, and SLIs',
          url: 'https://prometheus.io/docs/practices/histograms/',
        },
      ],
    },
    {
      name: 'Prometheus Fundamentals',
      weight: 20,
      documentationUrl: 'https://prometheus.io/docs/prometheus/latest/getting_started/',
      topics: [
        {
          name: 'System Architecture',
          url: 'https://prometheus.io/docs/introduction/overview/#architecture',
        },
        {
          name: 'Configuration and Scraping',
          url: 'https://prometheus.io/docs/prometheus/latest/configuration/configuration/',
        },
        {
          name: 'Understanding Prometheus Limitations',
          url: 'https://prometheus.io/docs/introduction/faq/',
        },
        { name: 'Data Model and Labels', url: 'https://prometheus.io/docs/concepts/data_model/' },
        {
          name: 'Exposition Format',
          url: 'https://prometheus.io/docs/instrumenting/exposition_formats/',
        },
      ],
    },
    {
      name: 'PromQL',
      weight: 28,
      documentationUrl: 'https://prometheus.io/docs/prometheus/latest/querying/basics/',
      topics: [
        {
          name: 'Selecting Data',
          url: 'https://prometheus.io/docs/prometheus/latest/querying/basics/#instant-vector-selectors',
        },
        {
          name: 'Rates and Derivatives',
          url: 'https://prometheus.io/docs/prometheus/latest/querying/functions/#rate',
        },
        {
          name: 'Aggregating over time',
          url: 'https://prometheus.io/docs/prometheus/latest/querying/functions/#aggregation_over_time',
        },
        {
          name: 'Aggregating over dimensions',
          url: 'https://prometheus.io/docs/prometheus/latest/querying/operators/#aggregation-operators',
        },
        {
          name: 'Binary operators',
          url: 'https://prometheus.io/docs/prometheus/latest/querying/operators/#binary-operators',
        },
        { name: 'Histograms', url: 'https://prometheus.io/docs/practices/histograms/' },
        {
          name: 'Timestamp Metrics',
          url: 'https://prometheus.io/docs/prometheus/latest/querying/functions/#timestamp',
        },
      ],
    },
    {
      name: 'Instrumentation and Exporters',
      weight: 16,
      documentationUrl: 'https://prometheus.io/docs/instrumenting/clientlibs/',
      topics: [
        { name: 'Client Libraries', url: 'https://prometheus.io/docs/instrumenting/clientlibs/' },
        { name: 'Instrumentation', url: 'https://prometheus.io/docs/practices/instrumentation/' },
        { name: 'Exporters', url: 'https://prometheus.io/docs/instrumenting/exporters/' },
        {
          name: 'Structuring and naming metrics',
          url: 'https://prometheus.io/docs/practices/naming/',
        },
      ],
    },
    {
      name: 'Alerting & Dashboarding',
      weight: 18,
      documentationUrl: 'https://prometheus.io/docs/alerting/latest/overview/',
      topics: [
        { name: 'Dashboarding basics', url: 'https://prometheus.io/docs/visualization/grafana/' },
        {
          name: 'Configuring Alerting rules',
          url: 'https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/',
        },
        {
          name: 'Understand and Use Alertmanager',
          url: 'https://prometheus.io/docs/alerting/latest/alertmanager/',
        },
        {
          name: 'Alerting basics (when, what, and why)',
          url: 'https://prometheus.io/docs/practices/alerting/',
        },
      ],
    },
  ],
  resources: PCA_RESOURCES,
  questions: PCA_QUESTIONS,
  studyTimeWeeks: 4,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};
