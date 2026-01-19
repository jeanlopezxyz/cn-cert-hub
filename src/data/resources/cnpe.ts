/**
 * CNPE - Certified Cloud Native Platform Engineer
 * Study Resources - Updated December 2024
 *
 * NOTE: This certification will be required for Golden Kubestronaut
 * after March 1, 2026. It is currently optional.
 */

import type { CertificationResources } from '@/types';
import {
  createKillerShResource,
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
  createKindResource,
} from './common-resources';

export const CNPE_RESOURCES: CertificationResources = {
  official:
    'https://training.linuxfoundation.org/certification/certified-cloud-native-platform-engineer-cnpe/',
  github: [
    'https://github.com/cncf/curriculum',
    'https://github.com/cncf/tag-app-delivery',
    'https://github.com/argoproj/argo-cd',
    'https://github.com/crossplane/crossplane',
  ],
  practice: [
    createKillerShResource('CNPE', 'advanced'),
    {
      title: 'Killercoda Platform Engineering Scenarios',
      url: 'https://killercoda.com/',
      description: 'Free interactive platform engineering scenarios',
      isPaid: false,
      type: 'scenario',
      difficulty: 'intermediate',
    },
    {
      title: 'Argo CD Playground',
      url: 'https://killercoda.com/argoproj/course/argo-cd-basics',
      description: 'Interactive Argo CD scenarios for GitOps practice',
      isPaid: false,
      type: 'scenario',
      difficulty: 'intermediate',
    },
  ],

  books: [
    // FREE BOOKS
    {
      title: 'Argo CD: Up and Running',
      url: 'https://www.oreilly.com/library/view/argo-cd-up/9781098141998/',
      author: 'Andrew Block, Christian Hernandez',
      description:
        'FREE - Declarative GitOps CD for Kubernetes - essential for platform engineering',
      isPaid: false,
      format: 'ebook',
      year: 2025,
      difficulty: 'intermediate',
    },
    // PAID BOOKS
    {
      title: 'Platform Engineering on Kubernetes',
      url: 'https://www.manning.com/books/platform-engineering-on-kubernetes',
      author: 'Mauricio Salatino',
      description: 'Advanced platform engineering - essential for CNPE exam',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'advanced',
    },
    {
      title: 'Crossplane: The Cloud Native Control Plane',
      url: 'https://leanpub.com/crossplane',
      author: 'Viktor Farcic',
      description: 'Infrastructure provisioning with Crossplane',
      isPaid: true,
      format: 'pdf',
      year: 2024,
      difficulty: 'advanced',
    },
    {
      title: 'Learning Argo CD',
      url: 'https://www.oreilly.com/library/view/learning-argo-cd/9781803233321/',
      author: 'Liviu Costea',
      description: 'GitOps with Argo CD for platform engineering',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Team Topologies, 2nd Edition',
      url: 'https://teamtopologies.com/book',
      author: 'Matthew Skelton, Manuel Pais',
      description: 'Organizing teams for fast flow - platform team patterns',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'beginner',
    },
    {
      title: 'Kubernetes: Up and Running, 3rd Edition',
      url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/',
      author: 'Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson',
      description: 'Advanced Kubernetes for platform engineers',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
  ],

  courses: [
    {
      title: 'Platform Engineering on Kubernetes (LFS256)',
      url: 'https://training.linuxfoundation.org/training/platform-engineering-on-kubernetes-lfs256/',
      author: 'The Linux Foundation',
      description: 'Official advanced course for CNPE preparation',
      isPaid: true,
      duration: '30 hours',
      difficulty: 'advanced',
      rating: 4.8,
    },
    {
      title: 'GitOps with Argo CD (LFS269)',
      url: 'https://training.linuxfoundation.org/training/gitops-with-argo-cd-lfs269/',
      author: 'The Linux Foundation',
      description: 'GitOps fundamentals with Argo CD',
      isPaid: true,
      duration: '20 hours',
      difficulty: 'intermediate',
      rating: 4.9,
    },
    {
      title: 'Crossplane Fundamentals',
      url: 'https://docs.crossplane.io/latest/',
      author: 'Upbound',
      description: 'Free Crossplane training from the creators',
      isPaid: false,
      duration: '10 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Argo CD Course',
      url: 'https://codefresh.io/learn/argo-cd/',
      author: 'Codefresh',
      description: 'Free comprehensive Argo CD course',
      isPaid: false,
      duration: '8 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Introduction to Cloud Infrastructure Technologies (LFS151)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-cloud-infrastructure-technologies/',
      author: 'The Linux Foundation',
      description: 'Cloud technologies fundamentals for platform engineers',
      isPaid: false,
      duration: '30-40 hours',
      difficulty: 'beginner',
      rating: 4.7,
    },
    {
      title: 'Introduction to GitOps (LFS169)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-gitops-lfs169/',
      author: 'The Linux Foundation',
      description: 'GitOps principles - essential for CNPE platform automation',
      isPaid: false,
      duration: '10-15 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Introduction to Backstage: Developer Portals Made Easy (LFS142)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-backstage-developer-portals-made-easy-lfs142/',
      author: 'The Linux Foundation',
      description: 'Developer portals for internal developer platforms',
      isPaid: false,
      duration: '10-15 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - prerequisite for CNPE'),
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite for CNPE'),
    {
      title: 'CKA Course (Recommended before CNPE)',
      url: 'https://kodekloud.com/courses/certified-kubernetes-administrator-cka/',
      author: 'KodeKloud',
      description: 'CKA certification is highly recommended before CNPE',
      isPaid: true,
      duration: '25 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'Platform Engineering Deep Dive 2025',
      url: 'https://www.youtube.com/watch?v=ghzsBm8vOms',
      author: 'TechWorld with Nana',
      description: 'Complete platform engineering overview',
      isPaid: false,
      duration: '2 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'Crossplane Tutorial 2025',
      url: 'https://www.youtube.com/watch?v=n8KjVmuHm7A',
      author: 'DevOps Toolkit',
      description: 'Comprehensive Crossplane deep dive - infrastructure as code',
      isPaid: false,
      duration: '1.5 hours',
      difficulty: 'advanced',
    },
    {
      title: 'Argo CD Full Course 2025',
      url: 'https://www.youtube.com/watch?v=MeU5_k9ssrs',
      author: 'TechWorld with Nana',
      description: 'Complete Argo CD tutorial - GitOps for platforms',
      isPaid: false,
      duration: '1.5 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'Building Internal Developer Platforms 2025',
      url: 'https://www.youtube.com/watch?v=ZDxzJGlg7Fs',
      author: 'DevOps Toolkit',
      description: 'IDP architecture and implementation',
      isPaid: false,
      duration: '1 hour',
      difficulty: 'advanced',
    },
  ],

  documentation: [
    {
      title: 'CNCF TAG App Delivery',
      url: 'https://tag-app-delivery.cncf.io/',
      description: 'Platform engineering resources from CNCF',
      isPaid: false,
    },
    {
      title: 'Platform Engineering Maturity Model',
      url: 'https://tag-app-delivery.cncf.io/wgs/platforms/maturity-model/',
      description: 'Official CNCF platform maturity model',
      isPaid: false,
    },
    {
      title: 'Argo CD Documentation',
      url: 'https://argo-cd.readthedocs.io/',
      description: 'Complete Argo CD documentation',
      isPaid: false,
    },
    {
      title: 'Crossplane Documentation',
      url: 'https://crossplane.io/docs/',
      description: 'Crossplane official documentation',
      isPaid: false,
    },
    {
      title: 'Backstage Documentation',
      url: 'https://backstage.io/docs/',
      description: 'Developer portal documentation',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'How I Passed the CNPE Exam',
      url: 'https://training.linuxfoundation.org/blog/how-i-passed-the-cloud-native-platform-engineer-cnpe-exam/',
      author: 'Linux Foundation',
      description: 'Official CNPE exam experience and study tips',
      isPaid: false,
    },
    {
      title: 'Platform Engineering Blog',
      url: 'https://platformengineering.org/blog',
      author: 'Platform Engineering Community',
      description: 'Platform engineering best practices and patterns',
      isPaid: false,
    },
    {
      title: 'Upbound Blog - Crossplane',
      url: 'https://blog.upbound.io/',
      author: 'Upbound',
      description: 'Crossplane and infrastructure as code insights',
      isPaid: false,
    },
    {
      title: 'Codefresh Blog - GitOps',
      url: 'https://codefresh.io/blog/',
      author: 'Codefresh',
      description: 'GitOps and Argo CD best practices',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'Platform Engineering Slack',
      url: 'https://platformengineering.org/slack',
      description: 'Platform engineering community - most active for CNPE',
      isPaid: false,
    },
    {
      title: 'Crossplane Slack',
      url: 'https://slack.crossplane.io/',
      description: 'Crossplane community - infrastructure as code support',
      isPaid: false,
    },
    {
      title: 'Argo Project Slack',
      url: 'https://argoproj.github.io/community/join-slack/',
      description: 'Argo CD and GitOps community support',
      isPaid: false,
    },
    {
      title: 'CNCF TAG App Delivery',
      url: 'https://tag-app-delivery.cncf.io/',
      description: 'CNCF application delivery working group',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Argo CD',
      url: 'https://argo-cd.readthedocs.io/en/stable/getting_started/',
      description: 'GitOps continuous delivery for Kubernetes',
      isPaid: false,
    },
    {
      title: 'Crossplane',
      url: 'https://crossplane.io/docs/getting-started/',
      description: 'Cloud native infrastructure management',
      isPaid: false,
    },
    {
      title: 'Backstage',
      url: 'https://backstage.io/docs/getting-started/',
      description: 'Developer portal framework',
      isPaid: false,
    },
    createKindResource(),
  ],
};
