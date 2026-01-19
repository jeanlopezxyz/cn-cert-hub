/**
 * KCA - Kyverno Certified Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
  createKindResource,
} from './common-resources';

export const KCA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/kca/',
  github: [
    'https://github.com/kyverno/kyverno',
    'https://github.com/kyverno/policies',
    'https://github.com/cncf/curriculum',
  ],
  practice: [
    {
      title: 'Kyverno Playground',
      url: 'https://playground.kyverno.io/',
      description: 'Online Kyverno policy testing environment',
      isPaid: false,
      type: 'playground',
      difficulty: 'beginner',
    },
    {
      title: 'Nirmata Kyverno Labs',
      url: 'https://nirmata.com/kyverno/',
      description: 'Comprehensive Kyverno learning path with hands-on exercises',
      isPaid: false,
      type: 'lab',
      difficulty: 'intermediate',
    },
  ],

  books: [
    {
      title: 'Policy as Code',
      url: 'https://www.oreilly.com/library/view/policy-as-code/9781098139179/',
      author: 'Jimmy Ray',
      description: 'Implement policy as code with OPA, Kyverno, and other tools',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Kubernetes Security and Observability',
      url: 'https://www.oreilly.com/library/view/kubernetes-security-and/9781098107093/',
      author: 'Brendan Creane, Amit Gupta',
      description: 'Kubernetes security including policy engines',
      isPaid: true,
      format: 'paperback',
      year: 2023,
      difficulty: 'intermediate',
    },
  ],

  courses: [
    {
      title: 'Kyverno Certified Associate (KCA)',
      url: 'https://training.linuxfoundation.org/training/kyverno-certified-associate-kca/',
      author: 'The Linux Foundation',
      description: 'Official KCA preparation course',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Introduction to Kyverno',
      url: 'https://kyverno.io/docs/introduction/',
      author: 'Kyverno',
      description: 'Official Kyverno getting started guide',
      isPaid: false,
      duration: 'Self-paced',
      difficulty: 'beginner',
      rating: 4.7,
    },
    {
      title: 'Kubernetes Policy Management with Kyverno',
      url: 'https://nirmata.com/kyverno/',
      author: 'Nirmata',
      description: 'Comprehensive Kyverno learning path',
      isPaid: false,
      duration: '10 hours',
      difficulty: 'intermediate',
      rating: 4.6,
    },
    {
      title: 'Introduction to Zero Trust (LFS183)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-zero-trust-lfs183/',
      author: 'The Linux Foundation',
      description:
        'Zero Trust fundamentals with SPIFFE and SPIRE - essential for policy understanding',
      isPaid: false,
      duration: '10-12 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Developing Secure Software (LFD121)',
      url: 'https://training.linuxfoundation.org/training/developing-secure-software-lfd121/',
      author: 'The Linux Foundation',
      description: 'Security fundamentals - complements Kyverno policy knowledge',
      isPaid: false,
      duration: '14-18 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - prerequisite for KCA'),
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite for KCA'),
    {
      title: 'Kyverno Tutorial',
      url: 'https://www.youtube.com/watch?v=DREjzfTzNpA',
      author: 'TechWorld with Nana',
      description: 'Complete Kyverno tutorial - policy management (2022)',
      isPaid: false,
      duration: '1 hour',
      difficulty: 'beginner',
    },
    {
      title: 'Kyverno Deep Dive',
      url: 'https://www.youtube.com/watch?v=YBTqmlcxXWE',
      author: 'CNCF',
      description: 'In-depth look at Kyverno policies (2022)',
      isPaid: false,
      duration: '45 minutes',
      difficulty: 'intermediate',
    },
  ],

  documentation: [
    {
      title: 'Kyverno Official Documentation',
      url: 'https://kyverno.io/docs/',
      description: 'Complete Kyverno documentation - primary exam reference',
      isPaid: false,
    },
    {
      title: 'Kyverno Policies Library',
      url: 'https://kyverno.io/policies/',
      description: 'Sample Kyverno policies library',
      isPaid: false,
    },
    {
      title: 'Kyverno Writing Policies',
      url: 'https://kyverno.io/docs/writing-policies/',
      description: 'Guide to writing Kyverno policies',
      isPaid: false,
    },
    {
      title: 'Kyverno CLI Documentation',
      url: 'https://kyverno.io/docs/kyverno-cli/',
      description: 'Kyverno CLI usage and commands',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'KCA Study Guide 2025',
      url: 'https://ravikirans.com/kca-kyverno-certified-associate-study-guide/',
      author: 'Ravikiran Srinivasulu',
      description: 'Comprehensive KCA study guide with exam objectives',
      isPaid: false,
    },
    {
      title: 'Kyverno Blog',
      url: 'https://kyverno.io/blog/',
      author: 'Kyverno',
      description: 'Official Kyverno blog with policy updates and tutorials',
      isPaid: false,
    },
    {
      title: 'Nirmata Blog - Kyverno',
      url: 'https://nirmata.com/blog/',
      author: 'Nirmata',
      description: 'Kyverno insights from the maintainers',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'Kyverno Slack',
      url: 'https://kubernetes.slack.com/channels/kyverno',
      description: 'Kyverno channel on Kubernetes Slack - most active',
      isPaid: false,
    },
    {
      title: 'Kyverno GitHub Discussions',
      url: 'https://github.com/kyverno/kyverno/discussions',
      description: 'Kyverno community discussions and Q&A',
      isPaid: false,
    },
    {
      title: 'CNCF TAG Security',
      url: 'https://tag-security.cncf.io/',
      description: 'CNCF security community - policy engines and best practices',
      isPaid: false,
    },
    {
      title: 'Nirmata Community',
      url: 'https://nirmata.com/community/',
      description: 'Nirmata community for Kyverno enterprise users',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Kyverno CLI',
      url: 'https://kyverno.io/docs/kyverno-cli/',
      description: 'Kyverno command-line interface',
      isPaid: false,
    },
    {
      title: 'Kyverno Playground',
      url: 'https://playground.kyverno.io/',
      description: 'Online Kyverno policy testing environment',
      isPaid: false,
    },
    {
      title: 'Kyverno Policy Library',
      url: 'https://github.com/kyverno/policies',
      description: 'Sample policies repository',
      isPaid: false,
    },
    createKindResource(),
  ],
};
