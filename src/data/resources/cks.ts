/**
 * CKS - Certified Kubernetes Security Specialist
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createKillerShResource,
  createKillercodaResource,
  createKodeKloudLabsResource,
  createKubernetesUpAndRunningResource,
  createContainerSecurityResource,
  createKubernetesForBeginnersResource,
  createKubernetesSlackResource,
} from './common-resources';

export const CKS_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/cks/',
  github: [
    'https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist',
    'https://github.com/kodekloudhub/certified-kubernetes-security-specialist-cks-course',
    'https://github.com/moabukar/CKS-Exercises-Certified-Kubernetes-Security-Specialist',
    'https://github.com/ahmetb/kubernetes-network-policy-recipes',
  ],
  practice: [
    createKillerShResource('CKS', 'advanced'),
    createKillercodaResource('CKS', 'advanced'),
    createKodeKloudLabsResource(
      'CKS',
      'certified-kubernetes-security-specialist-cks',
      'advanced',
      'Interactive CKS security labs with hands-on exercises'
    ),
  ],

  books: [
    // FREE BOOKS
    {
      title: 'Kubernetes Security and Observability',
      url: 'https://www.tigera.io/lp/kubernetes-security-and-observability-ebook/',
      author: "Tigera / O'Reilly",
      description: 'FREE - Modern approaches to security and observability with Calico',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'advanced',
    },
    {
      title: 'Kubernetes Networking and Security',
      url: 'https://www.tigera.io/lp/kubernetes-networking-ebook/',
      author: 'Alex Pollitt (Tigera CTO)',
      description: 'FREE - Network security from basics to advanced eBPF with Calico',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Security Observability with eBPF',
      url: 'https://isovalent.com/books/security-observability-with-ebpf/',
      author: 'Isovalent',
      description: 'FREE - Runtime security and observability using eBPF and Tetragon',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'advanced',
    },
    // PAID BOOKS
    {
      title: 'Certified Kubernetes Security Specialist (CKS) Study Guide',
      url: 'https://www.oreilly.com/library/view/certified-kubernetes-security/9781098132965/',
      author: 'Benjamin Muschko',
      description: 'Complete CKS exam preparation with hands-on exercises',
      isPaid: true,
      format: 'paperback',
      year: 2023,
      difficulty: 'advanced',
    },
    {
      title: "Kubernetes Security and Observability (O'Reilly)",
      url: 'https://www.oreilly.com/library/view/kubernetes-security-and/9781098107093/',
      author: 'Brendan Creane, Amit Gupta',
      description: 'Comprehensive guide to securing Kubernetes clusters',
      isPaid: true,
      format: 'paperback',
      year: 2021,
      difficulty: 'advanced',
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
    createContainerSecurityResource('intermediate'),
    createKubernetesUpAndRunningResource(
      'intermediate',
      'Comprehensive Kubernetes guide with security chapters'
    ),
  ],

  courses: [
    {
      title: 'CKS with Practice Tests',
      url: 'https://www.udemy.com/course/certified-kubernetes-security-specialist/',
      author: 'Mumshad Mannambeth (KodeKloud)',
      description: 'Complete CKS preparation with hands-on security labs',
      isPaid: true,
      duration: '12 hours',
      difficulty: 'advanced',
      rating: 4.7,
    },
    {
      title: 'Kubernetes Security Essentials (LFS260)',
      url: 'https://training.linuxfoundation.org/training/kubernetes-security-essentials-lfs260/',
      author: 'The Linux Foundation',
      description: 'Official Linux Foundation CKS preparation course',
      isPaid: true,
      duration: '32 hours',
      difficulty: 'advanced',
      rating: 4.8,
    },
    {
      title: 'CKS Certification Course - KodeKloud',
      url: 'https://kodekloud.com/courses/certified-kubernetes-security-specialist-cks/',
      author: 'KodeKloud',
      description: 'Interactive CKS course with security labs',
      isPaid: true,
      duration: '20 hours',
      difficulty: 'advanced',
      rating: 4.9,
    },
    {
      title: 'Kubernetes CKS Complete Course',
      url: 'https://www.udemy.com/course/certified-kubernetes-security-specialist-cks/',
      author: 'Kim Wuestkamp',
      description: 'CKS preparation with hands-on security scenarios',
      isPaid: true,
      duration: '18 hours',
      difficulty: 'advanced',
      rating: 4.8,
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
      title: 'Introduction to Cilium (LFS146)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-cilium-lfs146/',
      author: 'The Linux Foundation',
      description: 'Learn Cilium for Kubernetes networking and security',
      isPaid: false,
      duration: '10-15 hours',
      difficulty: 'intermediate',
      rating: 4.7,
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
      title: 'Developing Secure Software (LFD121)',
      url: 'https://training.linuxfoundation.org/training/developing-secure-software-lfd121/',
      author: 'The Linux Foundation',
      description: 'Learn to develop software that is hardened against attacks',
      isPaid: false,
      duration: '14-18 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
  ],

  videos: [
    {
      title: 'Linux Basics for Beginners',
      url: 'https://kodekloud.com/courses/the-linux-basics-course/',
      author: 'KodeKloud',
      description: 'Linux fundamentals - prerequisite for CKS',
      isPaid: true,
      duration: '5 hours',
      difficulty: 'beginner',
    },
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite before CKS'),
    {
      title: 'CKA Course (Recommended before CKS)',
      url: 'https://kodekloud.com/courses/certified-kubernetes-administrator-cka/',
      author: 'KodeKloud',
      description: 'CKA certification is a prerequisite for CKS exam',
      isPaid: true,
      duration: '25 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'CKS Full Course - Theory + Practice',
      url: 'https://www.youtube.com/watch?v=d9xfB5qaOfg',
      author: 'Killer Shell',
      description: 'Complete 11-hour CKS preparation from killer.sh creators (2024)',
      isPaid: false,
      duration: '11 hours',
      difficulty: 'advanced',
    },
  ],

  documentation: [
    {
      title: 'Kubernetes Security Documentation',
      url: 'https://kubernetes.io/docs/concepts/security/',
      description: 'Official Kubernetes security documentation',
      isPaid: false,
    },
    {
      title: 'Pod Security Standards',
      url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
      description: 'Pod security standards and policies',
      isPaid: false,
    },
    {
      title: 'Network Policies',
      url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
      description: 'Kubernetes network policies documentation',
      isPaid: false,
    },
    {
      title: 'RBAC Authorization',
      url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
      description: 'Role-based access control in Kubernetes',
      isPaid: false,
    },
    {
      title: 'Secrets Management',
      url: 'https://kubernetes.io/docs/concepts/configuration/secret/',
      description: 'Managing secrets in Kubernetes',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'CKS Exam Study Guide 2025',
      url: 'https://devopscube.com/cks-exam-guide-tips/',
      author: 'DevOpsCube',
      description: 'Comprehensive CKS study guide - updated for 2025 curriculum',
      isPaid: false,
    },
    {
      title: 'Updated CKS Certification 2024',
      url: 'https://www.cncf.io/blog/2024/10/17/keep-up-with-cloud-native-and-kubernetes-security-with-the-updated-cks-certification/',
      author: 'CNCF',
      description: 'Official CNCF blog about the October 2024 CKS exam update',
      isPaid: false,
    },
    {
      title: 'Kubernetes Security Best Practices',
      url: 'https://sysdig.com/learn-cloud-native/kubernetes-security/',
      author: 'Sysdig',
      description: 'Comprehensive Kubernetes security guide with practical examples',
      isPaid: false,
    },
    {
      title: 'Falco Blog - Runtime Security',
      url: 'https://falco.org/blog/',
      author: 'Falco',
      description: 'Cloud native runtime security insights',
      isPaid: false,
    },
  ],

  communities: [
    createKubernetesSlackResource('cks'),
    {
      title: 'Kubernetes Security SIG',
      url: 'https://github.com/kubernetes/community/tree/master/sig-security',
      description: 'Kubernetes Security Special Interest Group',
      isPaid: false,
    },
    {
      title: 'CNCF TAG Security',
      url: 'https://github.com/cncf/tag-security',
      description: 'CNCF Security Technical Advisory Group',
      isPaid: false,
    },
    {
      title: 'Falco Community',
      url: 'https://kubernetes.slack.com/archives/CMWH3EH32',
      description: 'Falco community on Kubernetes Slack',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Falco',
      url: 'https://falco.org/',
      description: 'Cloud native runtime security',
      isPaid: false,
    },
    {
      title: 'Trivy',
      url: 'https://trivy.dev/',
      description: 'Container and Kubernetes vulnerability scanner',
      isPaid: false,
    },
    {
      title: 'kube-bench',
      url: 'https://github.com/aquasecurity/kube-bench',
      description: 'CIS Kubernetes Benchmark checks',
      isPaid: false,
    },
    {
      title: 'OPA Gatekeeper',
      url: 'https://open-policy-agent.github.io/gatekeeper/',
      description: 'Policy controller for Kubernetes',
      isPaid: false,
    },
  ],
};
