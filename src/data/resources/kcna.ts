/**
 * KCNA - Kubernetes and Cloud Native Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createKillercodaPlaygroundResource,
  createKubernetesDocsResource,
  createKubernetesConceptsResource,
  createKubernetesTasksResource,
  createMinikubeResource,
  createKindResource,
  createK9sResource,
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
  createIntroToKubernetesLFS158Resource,
} from './common-resources';

export const KCNA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/kcna/',
  github: [
    'https://github.com/cncf/curriculum',
    'https://github.com/moabukar/KCNA-Kubernetes-and-Cloud-Native-Associate',
    'https://github.com/walidshaari/Kubernetes-and-Cloud-Native-Associate',
  ],
  practice: [
    createKillercodaPlaygroundResource('beginner'),
    {
      title: 'KodeKloud KCNA Course Labs',
      url: 'https://kodekloud.com/courses/kubernetes-and-cloud-native-associate-kcna/',
      description: 'Interactive KCNA practice labs with hands-on exercises',
      isPaid: true,
      type: 'lab',
      difficulty: 'beginner',
    },
  ],

  books: [
    // FREE BOOKS
    {
      title: 'CI/CD with Kubernetes',
      url: 'https://www.cncf.io/free-ebook-ci-cd-with-kubernetes/',
      author: 'CNCF / The New Stack',
      description:
        'FREE - 118-page ebook on CI/CD best practices, Spinnaker, and cloud-native monitoring',
      isPaid: false,
      format: 'ebook',
      year: 2023,
      difficulty: 'beginner',
    },
    {
      title: 'Kubernetes Deployment and Security Patterns',
      url: 'https://www.cncf.io/free-ebook-kubernetes-deployment-security-patterns/',
      author: 'CNCF / The New Stack',
      description: 'FREE - 90-page guide on deployment patterns, security, and operator surveys',
      isPaid: false,
      format: 'ebook',
      year: 2023,
      difficulty: 'beginner',
    },
    {
      title: 'Kubernetes for Developers',
      url: 'https://www.vmware.com/docs/ebook-kubernetes-for-developers',
      author: 'VMware',
      description: 'FREE - Why developers should care about containers and Kubernetes',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'beginner',
    },
    {
      title: 'DevOps with OpenShift',
      url: 'https://developers.redhat.com/e-books/devops-openshift-cloud-deployments-made-easy',
      author: 'Red Hat',
      description: 'FREE - Cloud deployments made easy with OpenShift and Kubernetes',
      isPaid: false,
      format: 'ebook',
      year: 2023,
      difficulty: 'beginner',
    },
    {
      title: 'Kubernetes Networking and Security',
      url: 'https://www.tigera.io/lp/kubernetes-networking-ebook/',
      author: 'Tigera (Calico)',
      description: 'FREE - From basic networking concepts to advanced eBPF',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    // PAID BOOKS
    {
      title: 'Kubernetes: Up and Running, 3rd Edition',
      url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/',
      author: 'Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson',
      description: 'Dive into Kubernetes - the industry standard for container orchestration',
      isPaid: true,
      format: 'paperback',
      year: 2022,
      difficulty: 'beginner',
    },
    {
      title: 'The KCNA Book',
      url: 'https://leanpub.com/thekcnabook',
      author: 'Nigel Poulton',
      description: 'Focused preparation for the KCNA exam with practical examples',
      isPaid: true,
      format: 'pdf',
      year: 2025,
      difficulty: 'beginner',
    },
    {
      title: 'Cloud Native DevOps with Kubernetes, 2nd Edition',
      url: 'https://www.oreilly.com/library/view/cloud-native-devops/9781098116811/',
      author: 'John Arundel, Justin Domingus',
      description: 'Build, deploy, and scale modern applications in the cloud',
      isPaid: true,
      format: 'paperback',
      year: 2022,
      difficulty: 'beginner',
    },
  ],

  courses: [
    {
      title: 'Kubernetes and Cloud Native Associate (KCNA) - Official',
      url: 'https://training.linuxfoundation.org/training/kubernetes-and-cloud-native-associate-kcna/',
      author: 'The Linux Foundation',
      description: 'Official KCNA preparation course from Linux Foundation',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'beginner',
      rating: 4.8,
    },
    createIntroToKubernetesLFS158Resource(),
    {
      title: 'KCNA Certification Course',
      url: 'https://kodekloud.com/courses/kubernetes-and-cloud-native-associate-kcna/',
      author: 'KodeKloud',
      description: 'Complete KCNA preparation with hands-on labs',
      isPaid: true,
      duration: '10 hours',
      difficulty: 'beginner',
      rating: 4.9,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - essential prerequisite for KCNA'),
    createKubernetesForBeginnersResource(
      'Kubernetes basics with hands-on labs - prerequisite for KCNA'
    ),
    {
      title: 'Kubernetes Zero to Hero (2025 Edition)',
      url: 'https://www.youtube.com/watch?v=MTHGoGUFpvE',
      author: 'Alta3 Research',
      description: 'Complete beginner guide - comprehensive Kubernetes fundamentals (2025)',
      isPaid: false,
      duration: '3 hours',
      difficulty: 'beginner',
    },
    {
      title: 'The Kubernetes Course 2025',
      url: 'https://www.youtube.com/watch?v=EV47Oxwet6Y',
      author: 'Kubesimplify',
      description: 'Complete Kubernetes course covering architecture, networking, storage (2025)',
      isPaid: false,
      duration: '6 hours',
      difficulty: 'beginner',
    },
  ],

  documentation: [
    createKubernetesDocsResource('Complete Kubernetes documentation - your primary reference'),
    createKubernetesConceptsResource(),
    createKubernetesTasksResource(),
  ],

  blogs: [
    {
      title: 'KCNA Exam Study Guide',
      url: 'https://kodekloud.com/blog/kcna-course/',
      author: 'KodeKloud',
      description: 'Detailed KCNA study guide with tips and resources',
      isPaid: false,
    },
    {
      title: 'How to Ace the KCNA Exam',
      url: 'https://www.cncf.io/blog/2024/10/23/how-to-ace-kcna-kubernetes-and-cloud-native-associate-exam/',
      author: 'CNCF',
      description: 'Official CNCF guide for KCNA exam preparation',
      isPaid: false,
    },
    {
      title: 'CNCF Official Blog',
      url: 'https://www.cncf.io/blog/',
      author: 'CNCF',
      description: 'Latest news from the Cloud Native ecosystem',
      isPaid: false,
    },
    {
      title: 'Cloud Native Glossary',
      url: 'https://glossary.cncf.io/',
      author: 'CNCF',
      description: 'Essential terminology for KCNA exam',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'CNCF Slack',
      url: 'https://slack.cncf.io/',
      description: 'Official CNCF community with #kcna channel',
      isPaid: false,
    },
    {
      title: 'Kubernetes Forum',
      url: 'https://discuss.kubernetes.io/',
      description: 'Official Kubernetes discussion forum',
      isPaid: false,
    },
    {
      title: 'CNCF Community Groups',
      url: 'https://community.cncf.io/',
      description: 'Local CNCF meetups and study groups',
      isPaid: false,
    },
    {
      title: 'r/kubernetes Reddit',
      url: 'https://www.reddit.com/r/kubernetes/',
      description: 'Active Kubernetes community with KCNA discussions',
      isPaid: false,
    },
  ],

  tools: [
    createMinikubeResource('Local Kubernetes cluster for learning and development'),
    createKindResource(),
    createK9sResource(),
  ],
};
