/**
 * OTCA - OpenTelemetry Certified Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
} from './common-resources';

export const OTCA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/otca/',
  github: [
    'https://github.com/open-telemetry/opentelemetry-specification',
    'https://github.com/open-telemetry/opentelemetry-collector',
    'https://github.com/open-telemetry/opentelemetry-demo',
    'https://github.com/cncf/curriculum',
  ],
  practice: [
    {
      title: 'OpenTelemetry Demo',
      url: 'https://opentelemetry.io/docs/demo/',
      description: 'Complete demo application with OpenTelemetry instrumentation',
      isPaid: false,
      type: 'playground',
      difficulty: 'intermediate',
    },
    {
      title: 'OpenTelemetry Bootcamp (GitHub)',
      url: 'https://github.com/aspecto-io/opentelemetry-bootcamp',
      description: 'Free interactive OpenTelemetry labs and exercises (archived repo)',
      isPaid: false,
      type: 'lab',
      difficulty: 'beginner',
    },
  ],

  books: [
    // FREE BOOKS
    {
      title: 'Monitoring Modern Infrastructure',
      url: 'https://www.datadoghq.com/ebook/monitoring-modern-infrastructure/',
      author: 'Datadog',
      description: 'FREE - Collecting metrics, alerting, and investigating performance issues',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'The Elastic Observability Guide',
      url: 'https://pages.awscloud.com/rs/112-TZM-766/images/AWS_Marketplace-the-elastic-observability-guide-for-aws.pdf',
      author: 'Elastic / AWS',
      description: 'FREE - Unified observability with logs, metrics, and traces',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Security Observability with eBPF',
      url: 'https://isovalent.com/books/ebpf-security/',
      author: 'Isovalent',
      description: 'FREE - Runtime security observability using eBPF and Tetragon',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'advanced',
    },
    // PAID BOOKS
    {
      title: 'Mastering OpenTelemetry and Observability',
      url: 'https://www.wiley.com/en-us/Mastering+OpenTelemetry+and+Observability-p-9781394253135',
      author: 'Steve Flanders',
      description: 'Enhancing application and infrastructure performance, avoiding outages',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Practical OpenTelemetry',
      url: 'https://link.springer.com/book/10.1007/978-1-4842-9075-0',
      author: 'Daniel Gomez Blanco',
      description: 'Adopting open observability standards across your organization',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Learning OpenTelemetry',
      url: 'https://www.oreilly.com/library/view/learning-opentelemetry/9781098147174/',
      author: 'Ted Young, Austin Parker',
      description: 'Setting up and operating OpenTelemetry for cloud native applications',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
  ],

  courses: [
    {
      title: 'OpenTelemetry Certified Associate (OTCA)',
      url: 'https://training.linuxfoundation.org/training/opentelemetry-certified-associate-otca/',
      author: 'The Linux Foundation',
      description: 'Official OTCA preparation course',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Getting Started with OpenTelemetry (LFS148)',
      url: 'https://training.linuxfoundation.org/training/getting-started-with-opentelemetry-lfs148/',
      author: 'The Linux Foundation',
      description: 'Learn to use OpenTelemetry to build and manage unified observability',
      isPaid: false,
      duration: '15-20 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Getting Started with OpenTelemetry',
      url: 'https://opentelemetry.io/docs/getting-started/',
      author: 'OpenTelemetry',
      description: 'Official getting started guide',
      isPaid: false,
      duration: 'Self-paced',
      difficulty: 'beginner',
      rating: 4.7,
    },
    {
      title: 'OpenTelemetry Bootcamp (GitHub)',
      url: 'https://github.com/aspecto-io/opentelemetry-bootcamp',
      author: 'Aspecto',
      description: 'Free OpenTelemetry fundamentals course (archived repo)',
      isPaid: false,
      duration: '8 hours',
      difficulty: 'beginner',
      rating: 4.6,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - prerequisite for OTCA'),
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite for OTCA'),
    {
      title: 'Learn Observability in 5 Hours',
      url: 'https://www.youtube.com/watch?v=cYAE0ZhT43c',
      author: 'Abhishek.Veeramalla',
      description: 'Prometheus, Grafana and OpenTelemetry - complete demo (2024)',
      isPaid: false,
      duration: '5 hours',
      difficulty: 'intermediate',
    },
  ],

  documentation: [
    {
      title: 'OpenTelemetry Official Documentation',
      url: 'https://opentelemetry.io/docs/',
      description: 'Complete OpenTelemetry documentation - primary exam reference',
      isPaid: false,
    },
    {
      title: 'OpenTelemetry Specification',
      url: 'https://opentelemetry.io/docs/specs/',
      description: 'OpenTelemetry specification documentation',
      isPaid: false,
    },
    {
      title: 'OpenTelemetry Collector',
      url: 'https://opentelemetry.io/docs/collector/',
      description: 'OpenTelemetry Collector documentation',
      isPaid: false,
    },
    {
      title: 'OpenTelemetry Instrumentation',
      url: 'https://opentelemetry.io/docs/instrumentation/',
      description: 'Language-specific instrumentation guides',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'Is the OTCA Exam Right for You?',
      url: 'https://opentelemetry.io/blog/2025/otca-for-newcomers-and-advanced-users/',
      author: 'OpenTelemetry',
      description: 'Official insights on OTCA exam scope and preparation',
      isPaid: false,
    },
    {
      title: 'OpenTelemetry Blog',
      url: 'https://opentelemetry.io/blog/',
      author: 'OpenTelemetry',
      description: 'Official OpenTelemetry blog with releases and tutorials',
      isPaid: false,
    },
    {
      title: 'Grafana Labs Observability Blog',
      url: 'https://grafana.com/blog/',
      author: 'Grafana Labs',
      description: 'OpenTelemetry integrations and observability patterns',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'CNCF Slack - #opentelemetry',
      url: 'https://slack.cncf.io/',
      description: 'CNCF Slack with active OpenTelemetry channels',
      isPaid: false,
    },
    {
      title: 'OpenTelemetry GitHub Discussions',
      url: 'https://github.com/open-telemetry/opentelemetry-specification/discussions',
      description: 'OpenTelemetry specification discussions',
      isPaid: false,
    },
    {
      title: 'Grafana Community',
      url: 'https://community.grafana.com/',
      description: 'Grafana community - OpenTelemetry visualization and analysis',
      isPaid: false,
    },
    {
      title: 'OpenTelemetry Community Meetings',
      url: 'https://opentelemetry.io/community/',
      description: 'OpenTelemetry SIG meetings and working groups',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'OpenTelemetry Collector',
      url: 'https://opentelemetry.io/docs/collector/getting-started/',
      description: 'OpenTelemetry Collector for practice',
      isPaid: false,
    },
    {
      title: 'Jaeger',
      url: 'https://www.jaegertracing.io/',
      description: 'Distributed tracing platform',
      isPaid: false,
    },
    {
      title: 'Grafana Tempo',
      url: 'https://grafana.com/oss/tempo/',
      description: 'High-scale distributed tracing backend',
      isPaid: false,
    },
    {
      title: 'OpenTelemetry Demo',
      url: 'https://github.com/open-telemetry/opentelemetry-demo',
      description: 'Astronomy shop demo for OTel practice',
      isPaid: false,
    },
  ],
};
