/**
 * CCA - Cilium Certified Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createKodeKloudLabsResource,
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
  createContainerSecurityResource,
} from './common-resources';

export const CCA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/cca/',
  github: [
    'https://github.com/isovalent/CCA-Study-Guide',
    'https://github.com/cilium/cilium',
    'https://github.com/cilium/cilium-cli',
    'https://github.com/cilium/hubble',
  ],
  practice: [
    {
      title: 'Isovalent Labs',
      url: 'https://isovalent.com/labs/',
      description: 'Free browser-based Cilium labs from the creators',
      isPaid: false,
      type: 'lab',
      difficulty: 'intermediate',
    },
    createKodeKloudLabsResource(
      'CCA',
      'cilium-certified-associate-cca',
      'intermediate',
      'Interactive CCA practice labs with hands-on exercises'
    ),
  ],

  books: [
    // FREE BOOKS
    {
      title: 'Kubernetes Networking and Cilium for Network Engineers',
      url: 'https://isovalent.com/books/kubernetes-networking-and-cilium/',
      author: 'Isovalent',
      description: 'FREE - 56-page guide covering Kubernetes networking fundamentals and Cilium',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Security Observability with eBPF',
      url: 'https://isovalent.com/books/ebpf-security/',
      author: 'Isovalent',
      description: 'FREE - Guide to runtime security and observability using eBPF',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    // PAID BOOKS
    {
      title: 'Cilium: Up and Running',
      url: 'https://www.oreilly.com/library/view/cilium-up-and/9798341622982/',
      author: 'Nico Vibert, Filip Nikolic, James Laverack',
      description: 'Cloud Native Networking, Security, and Observability - from Isovalent team',
      isPaid: true,
      format: 'paperback',
      year: 2026,
      difficulty: 'intermediate',
    },
    {
      title: 'Learning eBPF',
      url: 'https://www.oreilly.com/library/view/learning-ebpf/9781098135119/',
      author: 'Liz Rice',
      description: 'Programming the Linux kernel - foundation for understanding Cilium',
      isPaid: true,
      format: 'paperback',
      year: 2023,
      difficulty: 'intermediate',
    },
    {
      title: 'Ultimate Cilium for Cloud Native Security and Networking',
      url: 'https://www.amazon.com/Ultimate-Cilium-Cloud-Native-Development/dp/B0DY88M12X',
      author: 'Gaurav Shekhar',
      description: 'Master eBPF and Cilium for security, performance and observability',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    createContainerSecurityResource('intermediate'),
    {
      title: 'Observability Engineering with Cilium',
      url: 'https://link.springer.com/book/10.1007/979-8-8688-1258-3',
      author: 'Raymond de Jong, Filip Nikolic',
      description: 'Observability with Hubble and Tetragon for cloud-native applications',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'advanced',
    },
  ],

  courses: [
    {
      title: 'Cilium Certified Associate (CCA)',
      url: 'https://training.linuxfoundation.org/training/cilium-certified-associate-cca/',
      author: 'The Linux Foundation',
      description: 'Official CCA preparation course',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'CCA Certification Course',
      url: 'https://kodekloud.com/courses/cilium-certified-associate-cca/',
      author: 'KodeKloud',
      description: 'Complete CCA preparation with hands-on labs',
      isPaid: true,
      duration: '12 hours',
      difficulty: 'intermediate',
      rating: 4.9,
    },
    {
      title: 'Getting Started with Cilium',
      url: 'https://isovalent.com/labs/getting-started-with-cilium/',
      author: 'Isovalent',
      description: 'Free introductory Cilium labs',
      isPaid: false,
      duration: '4 hours',
      difficulty: 'beginner',
      rating: 4.8,
    },
    {
      title: 'Cilium CNI Deep Dive',
      url: 'https://isovalent.com/labs/',
      author: 'Isovalent',
      description: 'Advanced Cilium labs and tutorials',
      isPaid: false,
      duration: '10 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Introduction to Cilium (LFS146)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-cilium-lfs146/',
      author: 'The Linux Foundation',
      description: 'Learn Cilium as networking plug-in for Kubernetes - official LF course',
      isPaid: false,
      duration: '10-15 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - prerequisite for CCA'),
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite for CCA'),
    {
      title: 'Cilium Certifications Playlist',
      url: 'https://www.youtube.com/playlist?list=PLngi_1qThAPB4yfZ-yaJO9WF7PUBcrfga',
      author: 'Isovalent',
      description: 'Official 35-video playlist from Cilium creators',
      isPaid: false,
      duration: '10+ hours',
      difficulty: 'intermediate',
    },
    {
      title: 'A Cilium Introduction: Back to Bee-Sics',
      url: 'https://www.youtube.com/watch?v=KZzNm5ntRbo',
      author: 'CNCF',
      description: 'KubeCon presentation by Isovalent engineers (2024)',
      isPaid: false,
      duration: '41 minutes',
      difficulty: 'beginner',
    },
    {
      title: 'Cilium in 120 Seconds',
      url: 'https://www.youtube.com/watch?v=sIYucIx3C8I',
      author: 'Software With Shawn',
      description: 'Quick introduction to Cilium and eBPF (2024)',
      isPaid: false,
      duration: '2 minutes',
      difficulty: 'beginner',
    },
  ],

  documentation: [
    {
      title: 'Cilium Official Documentation',
      url: 'https://docs.cilium.io/',
      description: 'Complete Cilium documentation - primary exam reference',
      isPaid: false,
    },
    {
      title: 'Cilium Network Policies',
      url: 'https://docs.cilium.io/en/stable/security/',
      description: 'Cilium network policy documentation',
      isPaid: false,
    },
    {
      title: 'Hubble Documentation',
      url: 'https://docs.cilium.io/en/stable/gettingstarted/hubble/',
      description: 'Cilium observability with Hubble',
      isPaid: false,
    },
    {
      title: 'Cilium Getting Started',
      url: 'https://docs.cilium.io/en/stable/gettingstarted/',
      description: 'Getting started with Cilium installation and configuration',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'Interview with CCA Certification Creator',
      url: 'https://www.cncf.io/blog/2024/10/15/interview-with-cilium-certified-associate-certification-cca-creator/',
      author: 'CNCF',
      description: 'CNCF interview with Nico Vibert about CCA exam preparation',
      isPaid: false,
    },
    {
      title: 'CCA Certification Guide',
      url: 'https://isovalent.com/blog/post/cilium-certified-associate-cca/',
      author: 'Isovalent',
      description: 'Official CCA certification guide from Cilium creators',
      isPaid: false,
    },
    {
      title: 'Cilium Official Blog',
      url: 'https://cilium.io/blog/',
      author: 'Cilium',
      description: 'Official Cilium blog with tutorials and updates',
      isPaid: false,
    },
    {
      title: 'Isovalent Blog',
      url: 'https://isovalent.com/blog/',
      author: 'Isovalent',
      description: 'eBPF and Cilium insights from the creators',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'Cilium Slack',
      url: 'https://cilium.io/slack',
      description: 'Official Cilium Slack workspace',
      isPaid: false,
    },
    {
      title: 'eBPF Community',
      url: 'https://ebpf.io/slack',
      description: 'eBPF community Slack - foundational for Cilium',
      isPaid: false,
    },
    {
      title: 'Isovalent Labs Community',
      url: 'https://isovalent.com/labs/',
      description: 'Isovalent Labs community for hands-on learning',
      isPaid: false,
    },
    {
      title: 'Cilium GitHub Discussions',
      url: 'https://github.com/cilium/cilium/discussions',
      description: 'Cilium GitHub community discussions',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Cilium CLI',
      url: 'https://github.com/cilium/cilium-cli',
      description: 'Cilium command-line tool',
      isPaid: false,
    },
    {
      title: 'Hubble',
      url: 'https://github.com/cilium/hubble',
      description: 'Network observability for Cilium',
      isPaid: false,
    },
    {
      title: 'Kind with Cilium',
      url: 'https://docs.cilium.io/en/stable/installation/kind/',
      description: 'Local Kubernetes with Cilium',
      isPaid: false,
    },
  ],
};
