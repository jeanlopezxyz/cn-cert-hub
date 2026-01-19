/**
 * ICA - Istio Certified Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createKodeKloudLabsResource,
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
  createKindResource,
} from './common-resources';

export const ICA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/ica/',
  github: [
    'https://github.com/istio/istio',
    'https://github.com/cncf/curriculum',
    'https://github.com/istio/istio.io',
    'https://github.com/tetratelabs/istio-weekly',
  ],
  practice: [
    {
      title: 'Tetrate Academy Labs',
      url: 'https://academy.tetrate.io/courses/istio-fundamentals',
      description: 'Free interactive Istio labs from Tetrate',
      isPaid: false,
      type: 'lab',
      difficulty: 'beginner',
    },
    createKodeKloudLabsResource('ICA', 'istio-certified-associate', 'intermediate'),
  ],

  books: [
    // FREE BOOKS
    {
      title: 'Istio Succinctly',
      url: 'https://www.syncfusion.com/succinctly-free-ebooks/istio-succinctly',
      author: 'Rahul Rai, Tarun Pabbi',
      description:
        'FREE - Practical guide to getting started with Istio, traffic management, security, and observability',
      isPaid: false,
      format: 'ebook',
      year: 2023,
      difficulty: 'beginner',
    },
    {
      title: 'Istio Ambient Mesh Guide',
      url: 'https://istio.io/latest/docs/ambient/',
      author: 'Istio Project',
      description: 'FREE - Official guide to Istio Ambient Mesh (sidecar-less mode)',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Solo Academy Istio Course',
      url: 'https://www.solo.io/resources/lab/solo-academy-course-get-started-with-istio-service-mesh',
      author: 'Solo.io',
      description: 'FREE - Hands-on Istio course with practical exercises',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    // PAID BOOKS
    {
      title: 'Practical Istio: Service Mesh, Microservices, and Cloud-Native Architecture',
      url: 'https://link.springer.com/book/10.1007/979-8-8688-1573-7',
      author: 'Prashanth Josyula, Karanbir Singh, Anupam Mehta',
      description:
        'Comprehensive journey through service mesh architecture, traffic management, security, and observability',
      isPaid: true,
      format: 'paperback',
      year: 2025,
      difficulty: 'intermediate',
    },
    {
      title: 'Bootstrapping Service Mesh Implementations with Istio',
      url: 'https://www.packtpub.com/en-us/product/bootstrapping-service-mesh-implementations-with-istio-9781803246819',
      author: 'Arvind Soni',
      description:
        'Overcome challenges and gain insights into Istio features with practical examples',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Istio in Action',
      url: 'https://www.manning.com/books/istio-in-action',
      author: 'Christian Posta, Rinor Maloku',
      description: 'Comprehensive guide to Istio service mesh - essential for ICA',
      isPaid: true,
      format: 'paperback',
      year: 2023,
      difficulty: 'intermediate',
    },
  ],

  courses: [
    {
      title: 'Istio Certified Associate (ICA)',
      url: 'https://training.linuxfoundation.org/training/istio-certified-associate-ica/',
      author: 'The Linux Foundation',
      description: 'Official ICA preparation course',
      isPaid: true,
      duration: '20 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'ICA Certification Course',
      url: 'https://kodekloud.com/courses/istio-certified-associate',
      author: 'KodeKloud',
      description: 'Complete ICA preparation with hands-on labs',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'intermediate',
      rating: 4.9,
    },
    {
      title: 'Introduction to Istio (LFS144)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-istio-lfs144/',
      author: 'The Linux Foundation',
      description: 'Learn how to monitor, connect, and secure microservices using Istio',
      isPaid: false,
      duration: '15-20 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Istio Fundamentals 2025',
      url: 'https://academy.tetrate.io/courses/istio-fundamentals',
      author: 'Tetrate Academy',
      description: 'Free Istio fundamentals - fully updated with latest APIs and best practices',
      isPaid: false,
      duration: '4 hours',
      difficulty: 'beginner',
      rating: 4.7,
    },
    {
      title: 'Certified Istio Administrator',
      url: 'https://academy.tetrate.io/courses/certified-istio-administrator',
      author: 'Tetrate Academy',
      description: 'Advanced Istio administration course',
      isPaid: true,
      duration: '20 hours',
      difficulty: 'advanced',
      rating: 4.8,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - prerequisite for ICA'),
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite for ICA'),
    {
      title: 'Istio Crash Course 2025',
      url: 'https://www.youtube.com/watch?v=16fgzklcF7Y',
      author: 'KodeKloud',
      description: 'Complete guide to service mesh and ICA exam preparation (2025)',
      isPaid: false,
      duration: '1.2 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'Istio Mesh Week',
      url: 'https://learncloudnative.com/blog/2023-10-10-meshweek',
      author: 'Learn Cloud Native',
      description: 'Full ICA curriculum coverage - YouTube live streams',
      isPaid: false,
      duration: '10 hours',
      difficulty: 'intermediate',
    },
  ],

  documentation: [
    {
      title: 'Istio Official Documentation',
      url: 'https://istio.io/latest/docs/',
      description: 'Complete Istio documentation - primary exam reference',
      isPaid: false,
    },
    {
      title: 'Istio Setup Guide',
      url: 'https://istio.io/latest/docs/setup/',
      description: 'Istio installation and setup documentation',
      isPaid: false,
    },
    {
      title: 'Traffic Management',
      url: 'https://istio.io/latest/docs/concepts/traffic-management/',
      description: 'Istio traffic management concepts',
      isPaid: false,
    },
    {
      title: 'Istio Security',
      url: 'https://istio.io/latest/docs/concepts/security/',
      description: 'Istio security features and mTLS',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'ICA Study Guide 2025',
      url: 'https://kodekloud.com/blog/istio-certified-associate-ica-study-guide/',
      author: 'KodeKloud',
      description: 'Comprehensive ICA study guide - updated for 2025',
      isPaid: false,
    },
    {
      title: 'Introducing the ICA Certification',
      url: 'https://www.cncf.io/blog/2023/11/06/introducing-the-istio-certified-associate-ica-certification-for-microservices-management/',
      author: 'CNCF',
      description: 'Official CNCF announcement of the ICA certification',
      isPaid: false,
    },
    {
      title: 'Istio Official Blog',
      url: 'https://istio.io/latest/blog/',
      author: 'Istio',
      description: 'Latest Istio updates and tutorials',
      isPaid: false,
    },
    {
      title: 'Tetrate Blog - Service Mesh',
      url: 'https://tetrate.io/blog/',
      author: 'Tetrate',
      description: 'Service mesh insights from Istio experts',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'Istio Slack',
      url: 'https://slack.istio.io/',
      description: 'Official Istio Slack workspace',
      isPaid: false,
    },
    {
      title: 'Istio Community',
      url: 'https://istio.io/latest/about/community/',
      description: 'Official Istio community page with all discussion channels',
      isPaid: false,
    },
    {
      title: 'Istio GitHub Discussions',
      url: 'https://github.com/istio/istio/discussions',
      description: 'Istio GitHub community discussions',
      isPaid: false,
    },
    {
      title: 'Tetrate Academy Community',
      url: 'https://academy.tetrate.io/',
      description: 'Tetrate Academy community for Istio learners',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Istio',
      url: 'https://istio.io/latest/docs/setup/getting-started/',
      description: 'Install Istio for local practice',
      isPaid: false,
    },
    {
      title: 'istioctl',
      url: 'https://istio.io/latest/docs/reference/commands/istioctl/',
      description: 'Istio command-line tool for management',
      isPaid: false,
    },
    {
      title: 'Kiali',
      url: 'https://kiali.io/',
      description: 'Istio service mesh observability dashboard',
      isPaid: false,
    },
    createKindResource(),
  ],
};
