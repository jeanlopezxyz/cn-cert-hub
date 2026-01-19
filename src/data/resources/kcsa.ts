/**
 * KCSA - Kubernetes and Cloud Security Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createKillercodaPlaygroundResource,
  createKodeKloudLabsResource,
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
  createMinikubeResource,
} from './common-resources';

export const KCSA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/kcsa/',
  github: [
    'https://github.com/cncf/curriculum',
    'https://github.com/cncf/tag-security',
    'https://github.com/ahmetb/kubernetes-network-policy-recipes',
  ],
  practice: [
    createKillercodaPlaygroundResource('beginner'),
    createKodeKloudLabsResource(
      'KCSA',
      'kubernetes-and-cloud-native-security-associate-kcsa',
      'beginner',
      'Interactive KCSA security labs with hands-on exercises'
    ),
  ],

  books: [
    {
      title: 'Kubernetes Security and Observability',
      url: 'https://www.oreilly.com/library/view/kubernetes-security-and/9781098107093/',
      author: 'Brendan Creane, Amit Gupta',
      description: 'Cloud native security - essential for KCSA exam',
      isPaid: true,
      format: 'paperback',
      year: 2021,
      difficulty: 'intermediate',
    },
    {
      title: 'Container Security, 2nd Edition',
      url: 'https://www.oreilly.com/library/view/container-security-2nd/9798341627697/',
      author: 'Liz Rice',
      description: 'Fundamental concepts for securing containers',
      isPaid: true,
      format: 'paperback',
      year: 2025,
      difficulty: 'intermediate',
    },
    {
      title: 'Hacking Kubernetes',
      url: 'https://www.oreilly.com/library/view/hacking-kubernetes/9781492081722/',
      author: 'Andrew Martin, Michael Hausenblas',
      description: 'Threat-driven analysis and defense for Kubernetes',
      isPaid: true,
      format: 'paperback',
      year: 2021,
      difficulty: 'advanced',
    },
    {
      title: 'Kubernetes: Up and Running, 3rd Edition',
      url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/',
      author: 'Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson',
      description: 'Kubernetes fundamentals with security chapters',
      isPaid: true,
      format: 'paperback',
      year: 2022,
      difficulty: 'beginner',
    },
  ],

  courses: [
    {
      title: 'Kubernetes and Cloud Security Associate (KCSA)',
      url: 'https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-security-associate-kcsa/',
      author: 'The Linux Foundation',
      description: 'Official KCSA certification page',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'beginner',
      rating: 4.8,
    },
    {
      title: 'KCSA Certification Course',
      url: 'https://kodekloud.com/courses/kubernetes-and-cloud-native-security-associate-kcsa',
      author: 'KodeKloud',
      description: 'Complete KCSA preparation with practice tests',
      isPaid: true,
      duration: '12 hours',
      difficulty: 'beginner',
      rating: 4.9,
    },
    {
      title: 'Kubernetes Security Essentials (LFS260)',
      url: 'https://training.linuxfoundation.org/training/kubernetes-security-essentials-lfs260/',
      author: 'The Linux Foundation',
      description:
        'Official course covering Kubernetes security topics - defense-in-depth, RBAC, supply chain, runtime security',
      isPaid: true,
      duration: '16-20 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Configuring and Managing Kubernetes Security',
      url: 'https://www.pluralsight.com/courses/configuring-managing-kubernetes-security',
      author: 'Pluralsight',
      description: 'Security fundamentals for Kubernetes',
      isPaid: true,
      duration: '2-3 hours',
      difficulty: 'intermediate',
      rating: 4.6,
    },
    {
      title: 'Cybersecurity Essentials (LFC108)',
      url: 'https://training.linuxfoundation.org/training/cybersecurity-essentials-lfc108/',
      author: 'The Linux Foundation',
      description: 'Review and reinforce must-know cybersecurity topics',
      isPaid: false,
      duration: '4-6 hours',
      difficulty: 'beginner',
      rating: 4.7,
    },
    {
      title: 'Introduction to Zero Trust (LFS183)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-zero-trust-lfs183/',
      author: 'The Linux Foundation',
      description: 'Learn Zero Trust fundamentals with SPIFFE and SPIRE',
      isPaid: false,
      duration: '10-12 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Developing Secure Software (LFD121)',
      url: 'https://training.linuxfoundation.org/training/developing-secure-software-lfd121/',
      author: 'The Linux Foundation',
      description: 'Learn to develop software that is hardened against attacks',
      isPaid: false,
      duration: '14-18 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Securing Your Software Supply Chain with Sigstore (LFS182)',
      url: 'https://training.linuxfoundation.org/training/securing-your-software-supply-chain-with-sigstore-lfs182/',
      author: 'The Linux Foundation',
      description: 'Secure the integrity of your software with Sigstore',
      isPaid: false,
      duration: '8-10 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Understanding the OWASP Top 10 Security Threats (SKF100)',
      url: 'https://training.linuxfoundation.org/training/owasp-top-ten-security-threats-skf100/',
      author: 'The Linux Foundation',
      description: 'Identify and address top security risks',
      isPaid: false,
      duration: '6-8 hours',
      difficulty: 'beginner',
      rating: 4.7,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - essential prerequisite for KCSA'),
    createKubernetesForBeginnersResource(
      'Kubernetes basics with hands-on labs - prerequisite for KCSA'
    ),
    {
      title: 'CKS Full Course - Theory + Practice',
      url: 'https://www.youtube.com/watch?v=d9xfB5qaOfg',
      author: 'Killer Shell',
      description: 'Comprehensive Kubernetes security course from killer.sh (2024)',
      isPaid: false,
      duration: '11 hours',
      difficulty: 'intermediate',
    },
  ],

  documentation: [
    {
      title: 'Kubernetes Security Overview',
      url: 'https://kubernetes.io/docs/concepts/security/overview/',
      description: 'Official Kubernetes security overview',
      isPaid: false,
    },
    {
      title: 'Pod Security Standards',
      url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
      description: 'Understanding pod security policies',
      isPaid: false,
    },
    {
      title: 'CNCF Cloud Native Security Whitepaper',
      url: 'https://tag-security.cncf.io/community/resources/security-whitepaper/',
      description: 'CNCF security whitepaper and best practices',
      isPaid: false,
    },
    {
      title: 'Kubernetes RBAC Authorization',
      url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
      description: 'Role-Based Access Control in Kubernetes',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'KCSA Exam Study Guide',
      url: 'https://kodekloud.com/blog/avoid-issues-i-faced-securing-kubernetes-workloads-learn-with-kcsa/',
      author: 'KodeKloud',
      description: 'Comprehensive KCSA study guide with security insights',
      isPaid: false,
    },
    {
      title: 'How to Ace the KCSA Exam',
      url: 'https://www.cncf.io/blog/2024/10/14/how-to-ace-the-kubernetes-and-cloud-native-security-associate-kcsa-exam/',
      author: 'CNCF',
      description: 'Official CNCF guide for KCSA exam preparation',
      isPaid: false,
    },
    {
      title: 'Kubernetes Security Best Practices',
      url: 'https://sysdig.com/learn-cloud-native/kubernetes-security/',
      author: 'Sysdig',
      description: 'Essential Kubernetes security practices',
      isPaid: false,
    },
    {
      title: 'CNCF Cloud Native Security Whitepaper',
      url: 'https://tag-security.cncf.io/community/resources/security-whitepaper/',
      author: 'CNCF TAG Security',
      description: 'Cloud native security best practices - essential reading',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'CNCF TAG Security',
      url: 'https://github.com/cncf/tag-security',
      description: 'CNCF Security Technical Advisory Group',
      isPaid: false,
    },
    {
      title: 'Kubernetes Slack - #sig-security',
      url: 'https://slack.k8s.io/',
      description: 'Kubernetes Security SIG channel',
      isPaid: false,
    },
    {
      title: 'CNCF Community Groups',
      url: 'https://community.cncf.io/',
      description: 'Local CNCF security meetups',
      isPaid: false,
    },
    {
      title: 'r/kubernetes Reddit',
      url: 'https://www.reddit.com/r/kubernetes/',
      description: 'Active community for security discussions',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Trivy',
      url: 'https://trivy.dev/',
      description: 'Container vulnerability scanner',
      isPaid: false,
    },
    {
      title: 'Falco',
      url: 'https://falco.org/',
      description: 'Cloud native runtime security',
      isPaid: false,
    },
    createMinikubeResource('Local Kubernetes for learning'),
    {
      title: 'kube-bench',
      url: 'https://github.com/aquasecurity/kube-bench',
      description: 'CIS Kubernetes Benchmark tool',
      isPaid: false,
    },
  ],
};
