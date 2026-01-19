/**
 * CAPA - Certified Argo Project Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createKodeKloudLabsResource,
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
  createMinikubeResource,
} from './common-resources';

export const CAPA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/capa/',
  github: [
    'https://github.com/argoproj/argo-cd',
    'https://github.com/argoproj/argo-workflows',
    'https://github.com/argoproj/argo-rollouts',
    'https://github.com/argoproj/argo-events',
    'https://github.com/cncf/curriculum',
  ],
  practice: [
    {
      title: 'Killercoda Argo Scenarios',
      url: 'https://killercoda.com/argoproj/courses',
      description: 'Interactive Argo project scenarios for hands-on practice',
      isPaid: false,
      type: 'scenario',
      difficulty: 'intermediate',
    },
    createKodeKloudLabsResource(
      'CAPA',
      'certified-argo-project-associate-capa',
      'intermediate',
      'Interactive CAPA practice labs with hands-on exercises'
    ),
  ],

  books: [
    // FREE BOOKS
    {
      title: 'Argo CD: Up and Running',
      url: 'https://www.oreilly.com/library/view/argo-cd-up/9781098141998/',
      author: 'Andrew Block, Christian Hernandez',
      description: 'FREE - Declarative GitOps CD for Kubernetes from Red Hat and Akuity experts',
      isPaid: false,
      format: 'ebook',
      year: 2025,
      difficulty: 'intermediate',
    },
    // PAID BOOKS
    {
      title: 'Learning Argo CD',
      url: 'https://www.oreilly.com/library/view/learning-argo-cd/9781803233321/',
      author: 'Liviu Costea',
      description: 'Complete guide to Argo CD - essential for CAPA exam',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Argo CD and Argo Workflows on Kubernetes',
      url: 'https://www.amazon.com/Argo-Workflows-Kubernetes-automation-progressive/dp/9365899613',
      author: 'Md Nahidul Kibria',
      description: 'GitOps, workflow automation, and progressive delivery with Argo',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Argo CD in Practice',
      url: 'https://www.packtpub.com/en-us/product/argo-cd-in-practice-9781803233321',
      author: 'Liviu Costea, Spiros Economakis',
      description:
        'The GitOps way of managing cloud-native applications - production deployment, security, disaster recovery',
      isPaid: true,
      format: 'paperback',
      year: 2022,
      difficulty: 'intermediate',
    },
    {
      title: 'Kubernetes: Up and Running, 3rd Edition',
      url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/',
      author: 'Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson',
      description: 'Kubernetes fundamentals including deployment strategies',
      isPaid: true,
      format: 'paperback',
      year: 2022,
      difficulty: 'intermediate',
    },
  ],

  courses: [
    {
      title: 'Certified Argo Project Associate (CAPA)',
      url: 'https://training.linuxfoundation.org/training/certified-argo-project-associate-capa/',
      author: 'The Linux Foundation',
      description: 'Official CAPA preparation course',
      isPaid: true,
      duration: '20 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'CAPA Certification Course',
      url: 'https://kodekloud.com/courses/certified-argo-project-associate-capa/',
      author: 'KodeKloud',
      description: 'Complete CAPA preparation with hands-on labs',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'intermediate',
      rating: 4.9,
    },
    {
      title: 'Argo CD Course',
      url: 'https://codefresh.io/learn/argo-cd/',
      author: 'Codefresh',
      description: 'Free Argo CD fundamentals',
      isPaid: false,
      duration: '8 hours',
      difficulty: 'beginner',
      rating: 4.7,
    },
    {
      title: 'Argo Workflows Course',
      url: 'https://codefresh.io/learn/argo-workflows/',
      author: 'Codefresh',
      description: 'Free Argo Workflows fundamentals',
      isPaid: false,
      duration: '6 hours',
      difficulty: 'beginner',
      rating: 4.6,
    },
    {
      title: 'Introduction to GitOps (LFS169)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-gitops-lfs169/',
      author: 'The Linux Foundation',
      description: 'Learn GitOps fundamentals - deploy to Kubernetes with pull requests',
      isPaid: false,
      duration: '10-15 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - prerequisite for CAPA'),
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite for CAPA'),
    {
      title: 'GitOps Masterclass: Argo CD Project Champion',
      url: 'https://www.youtube.com/watch?v=LSejrYaYcBI',
      author: 'Akuity',
      description: 'Hands-on workshop on Argo CD AppProjects by Argo maintainer (2025)',
      isPaid: false,
      duration: '1.7 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'ArgoCD Tutorial - DevOps Project 2025',
      url: 'https://www.youtube.com/watch?v=XTxH3xrb9Js',
      author: 'Inderjeet Singh',
      description: 'Complete GitOps pipeline with GitHub Actions and ArgoCD (2025)',
      isPaid: false,
      duration: '1.3 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'GitOps DevOps Project with Azure DevOps and ArgoCD',
      url: 'https://www.youtube.com/watch?v=dmGW22W3VOs',
      author: 'Abhishek.Veeramalla',
      description: 'Real-time DevOps project using GitOps - beginner to advanced (2024)',
      isPaid: false,
      duration: '3 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'Argo CD Course',
      url: 'https://codefresh.io/learn/argo-cd/',
      author: 'Codefresh',
      description: 'Free comprehensive Argo CD course - continuously updated',
      isPaid: false,
      duration: '8 hours',
      difficulty: 'beginner',
    },
    {
      title: 'Argo Workflows Course',
      url: 'https://codefresh.io/learn/argo-workflows/',
      author: 'Codefresh',
      description: 'Free Argo Workflows fundamentals - continuously updated',
      isPaid: false,
      duration: '6 hours',
      difficulty: 'intermediate',
    },
  ],

  documentation: [
    {
      title: 'Argo CD Documentation',
      url: 'https://argo-cd.readthedocs.io/',
      description: 'Official Argo CD documentation',
      isPaid: false,
    },
    {
      title: 'Argo Workflows Documentation',
      url: 'https://argo-workflows.readthedocs.io/',
      description: 'Official Argo Workflows documentation',
      isPaid: false,
    },
    {
      title: 'Argo Rollouts Documentation',
      url: 'https://argo-rollouts.readthedocs.io/',
      description: 'Official Argo Rollouts documentation',
      isPaid: false,
    },
    {
      title: 'Argo Events Documentation',
      url: 'https://argoproj.github.io/argo-events/',
      description: 'Official Argo Events documentation',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'How to Ace the CAPA Exam',
      url: 'https://www.cncf.io/blog/2024/10/18/how-to-ace-the-certified-argo-project-associate-capa-exam/',
      author: 'CNCF',
      description: 'Official CNCF guide for CAPA exam preparation',
      isPaid: false,
    },
    {
      title: 'CAPA Study Guide 2025',
      url: 'https://devopscube.com/certified-argo-project-associate/',
      author: 'DevOpsCube',
      description: 'Comprehensive CAPA study guide with exam roadmap',
      isPaid: false,
    },
    {
      title: 'Argo Project Blog',
      url: 'https://argoproj.github.io/blog/',
      author: 'Argo Project',
      description: 'Official Argo project blog with updates and tutorials',
      isPaid: false,
    },
    {
      title: 'Akuity Blog',
      url: 'https://akuity.io/blog/',
      author: 'Akuity',
      description: 'GitOps and Argo insights from Argo creators',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'Argo Project Slack',
      url: 'https://argoproj.github.io/community/join-slack/',
      description: 'Official Argo Slack community',
      isPaid: false,
    },
    {
      title: 'Argo GitHub Discussions',
      url: 'https://github.com/argoproj/argo-cd/discussions',
      description: 'Argo CD community discussions',
      isPaid: false,
    },
    {
      title: 'CNCF TAG App Delivery',
      url: 'https://tag-app-delivery.cncf.io/',
      description: 'CNCF App Delivery - GitOps and continuous delivery',
      isPaid: false,
    },
    {
      title: 'GitOps Community',
      url: 'https://opengitops.dev/',
      description: 'OpenGitOps community and resources',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Argo CD CLI',
      url: 'https://argo-cd.readthedocs.io/en/stable/cli_installation/',
      description: 'Argo CD command-line interface',
      isPaid: false,
    },
    {
      title: 'Argo CLI',
      url: 'https://github.com/argoproj/argo-workflows/releases',
      description: 'Argo Workflows CLI',
      isPaid: false,
    },
    createMinikubeResource('Local Kubernetes for Argo practice'),
  ],
};
