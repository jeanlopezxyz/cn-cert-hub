/**
 * PCA - Prometheus Certified Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createKodeKloudLabsResource,
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
} from './common-resources';

export const PCA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/pca/',
  github: [
    'https://github.com/cncf/curriculum',
    'https://github.com/prometheus/prometheus',
    'https://github.com/prometheus/alertmanager',
  ],
  practice: [
    {
      title: 'Prometheus Playground',
      url: 'https://killercoda.com/playgrounds/scenario/prometheus',
      description: 'Browser-based Prometheus environment for hands-on practice',
      isPaid: false,
      type: 'playground',
      difficulty: 'beginner',
    },
    createKodeKloudLabsResource('PCA', 'prometheus-certified-associate-pca', 'intermediate'),
  ],

  books: [
    // FREE BOOKS
    {
      title: 'Monitoring Modern Infrastructure',
      url: 'https://www.datadoghq.com/ebook/monitoring-modern-infrastructure/',
      author: 'Datadog',
      description: 'FREE - Techniques for collecting metrics, alerting, and investigating issues',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Monitoring in the Cloud',
      url: 'https://www.datadoghq.com/pdf/monitoring-in-the-cloud-ebook.pdf',
      author: 'Datadog',
      description: 'FREE - PDF guide to cloud-scale monitoring and analytics',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'The Elastic Observability Guide for AWS',
      url: 'https://pages.awscloud.com/rs/112-TZM-766/images/AWS_Marketplace-the-elastic-observability-guide-for-aws.pdf',
      author: 'Elastic / AWS',
      description: 'FREE - Unified observability with Elasticsearch on AWS',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Security Observability with eBPF',
      url: 'https://isovalent.com/books/ebpf-security/',
      author: 'Isovalent',
      description: 'FREE - Runtime security and observability using eBPF',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'advanced',
    },
    // PAID BOOKS
    {
      title: 'Prometheus: Up & Running, 2nd Edition',
      url: 'https://www.oreilly.com/library/view/prometheus-up/9781098131135/',
      author: 'Julien Pivotto, Brian Brazil',
      description: 'Complete guide to Prometheus - essential for PCA exam',
      isPaid: true,
      format: 'paperback',
      year: 2023,
      difficulty: 'intermediate',
    },
    {
      title: 'Hands-On Infrastructure Monitoring with Prometheus',
      url: 'https://www.packtpub.com/en-us/product/hands-on-infrastructure-monitoring-with-prometheus-9781789612349',
      author: 'Joel Bastos, Pedro Araújo',
      description: 'Implement and scale queries, dashboards, and alerting',
      isPaid: true,
      format: 'paperback',
      year: 2019,
      difficulty: 'intermediate',
    },
    {
      title: 'PromQL Cheat Sheet and Tutorial',
      url: 'https://promlabs.com/promql-cheat-sheet/',
      author: 'PromLabs (Julius Volz)',
      description: 'FREE - Interactive PromQL reference by Prometheus co-founder',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Mastering Prometheus',
      url: 'https://www.packtpub.com/en-us/product/mastering-prometheus-9781805125662',
      author: 'William Hegedus',
      description: 'Advanced Prometheus deployment, PromQL, and integration with Thanos',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'advanced',
    },
  ],

  courses: [
    {
      title: 'Prometheus Certified Associate (PCA)',
      url: 'https://training.linuxfoundation.org/certification/prometheus-certified-associate/',
      author: 'The Linux Foundation',
      description: 'Official PCA certification page',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'PCA Certification Course',
      url: 'https://kodekloud.com/courses/prometheus-certified-associate-pca/',
      author: 'KodeKloud',
      description: 'Complete PCA preparation with hands-on labs',
      isPaid: true,
      duration: '12 hours',
      difficulty: 'intermediate',
      rating: 4.9,
    },
    {
      title: 'Monitoring Systems and Services with Prometheus (LFS241)',
      url: 'https://training.linuxfoundation.org/training/monitoring-systems-and-services-with-prometheus-lfs241/',
      author: 'The Linux Foundation',
      description: 'Comprehensive Prometheus monitoring course',
      isPaid: true,
      duration: '20 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Getting Started with OpenTelemetry (LFS148)',
      url: 'https://training.linuxfoundation.org/training/getting-started-with-opentelemetry-lfs148/',
      author: 'The Linux Foundation',
      description:
        'Learn unified observability with OpenTelemetry - complements Prometheus knowledge',
      isPaid: false,
      duration: '15-20 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Introduction to DevOps and Site Reliability Engineering (LFS162)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-devops-and-site-reliability-engineering-lfs162/',
      author: 'The Linux Foundation',
      description: 'DevOps and SRE fundamentals including monitoring practices',
      isPaid: false,
      duration: '25-30 hours',
      difficulty: 'beginner',
      rating: 4.7,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - prerequisite for PCA'),
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite for PCA'),
    {
      title: 'Prometheus Fundamentals',
      url: 'https://www.youtube.com/playlist?list=PLyBW7UHmEXgylLwxdVbrBQJ-fJ_jMvh8h',
      author: 'PromLabs (Julius Volz)',
      description: 'Official course from Prometheus co-founder - 13 lessons',
      isPaid: false,
      duration: '3 hours',
      difficulty: 'beginner',
    },
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
      title: 'Prometheus Official Documentation',
      url: 'https://prometheus.io/docs/',
      description: 'Complete Prometheus documentation - primary exam reference',
      isPaid: false,
    },
    {
      title: 'PromQL Documentation',
      url: 'https://prometheus.io/docs/prometheus/latest/querying/basics/',
      description: 'PromQL query language documentation',
      isPaid: false,
    },
    {
      title: 'Alertmanager Documentation',
      url: 'https://prometheus.io/docs/alerting/latest/alertmanager/',
      description: 'Prometheus Alertmanager documentation',
      isPaid: false,
    },
    {
      title: 'Prometheus Best Practices',
      url: 'https://prometheus.io/docs/practices/',
      description: 'Instrumentation and naming best practices',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'PCA Complete Study Guide 2025',
      url: 'https://devopscube.com/prometheus-certified-associate/',
      author: 'DevOpsCube',
      description: 'Comprehensive PCA study guide - updated for 2025',
      isPaid: false,
    },
    {
      title: 'How to Ace the PCA Exam',
      url: 'https://www.cncf.io/blog/2024/11/07/how-to-ace-the-prometheus-certified-associate-pca-exam/',
      author: 'CNCF',
      description: 'Official CNCF guide for PCA exam preparation',
      isPaid: false,
    },
    {
      title: 'Prometheus Best Practices',
      url: 'https://prometheus.io/docs/practices/',
      author: 'Prometheus',
      description: 'Official Prometheus best practices - essential reading',
      isPaid: false,
    },
    {
      title: 'PromLabs Blog',
      url: 'https://promlabs.com/blog/',
      author: 'PromLabs (Julius Volz)',
      description: 'Advanced Prometheus tips from co-founder',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'CNCF Slack - #prometheus',
      url: 'https://slack.cncf.io/',
      description: 'CNCF Slack with dedicated Prometheus channels',
      isPaid: false,
    },
    {
      title: 'Prometheus Mailing List',
      url: 'https://groups.google.com/g/prometheus-users',
      description: 'Official Prometheus users mailing list',
      isPaid: false,
    },
    {
      title: 'r/PrometheusMonitoring Reddit',
      url: 'https://www.reddit.com/r/PrometheusMonitoring/',
      description: 'Prometheus community on Reddit',
      isPaid: false,
    },
    {
      title: 'Grafana Community',
      url: 'https://community.grafana.com/',
      description: 'Grafana community - complements Prometheus knowledge',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Prometheus',
      url: 'https://prometheus.io/download/',
      description: 'Install Prometheus locally for practice',
      isPaid: false,
    },
    {
      title: 'Grafana',
      url: 'https://grafana.com/grafana/download',
      description: 'Visualization platform for Prometheus metrics',
      isPaid: false,
    },
    {
      title: 'PromLens',
      url: 'https://promlens.com/',
      description: 'PromQL query builder and analyzer',
      isPaid: false,
    },
    {
      title: 'Node Exporter',
      url: 'https://github.com/prometheus/node_exporter',
      description: 'Prometheus exporter for hardware and OS metrics',
      isPaid: false,
    },
  ],
};
