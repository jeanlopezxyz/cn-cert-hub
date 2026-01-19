/**
 * Linux Foundation Free Courses
 * Curated list of free courses from Linux Foundation Training
 *
 * Source: https://training.linuxfoundation.org/resources/?_sft_content_type=free-course
 * API: https://training.linuxfoundation.org/?sfid=6893&sf_action=get_data&sf_data=all&_sft_content_type=free-course
 *
 * Last updated: December 2024
 */

import type { CourseResource } from '@/types';

export interface LFFreeCourse extends CourseResource {
  code: string;
  topicAreas: LFTopicArea[];
  language?: 'en' | 'es' | 'ja';
}

export type LFTopicArea =
  | 'cloud-containers'
  | 'devops-site-reliability'
  | 'cybersecurity'
  | 'ai-machine-learning'
  | 'linux-kernel-development'
  | 'networking'
  | 'blockchain'
  | 'open-source-best-practice'
  | 'web-application-development'
  | 'embedded-development'
  | 'emerging-technologies';

/**
 * All Linux Foundation free courses
 */
export const LF_FREE_COURSES: LFFreeCourse[] = [
  // ============================================================================
  // Cloud & Containers
  // ============================================================================
  {
    title: 'Introduction to Kubernetes (LFS158)',
    code: 'LFS158',
    url: 'https://training.linuxfoundation.org/training/introduction-to-kubernetes/',
    author: 'The Linux Foundation',
    description:
      'Get an in-depth primer on this powerful system for managing containerized applications in a clustered environment.',
    isPaid: false,
    duration: '25-30 hours',
    difficulty: 'beginner',
    topicAreas: ['cloud-containers'],
  },
  {
    title: 'Introduction to Cloud Infrastructure Technologies (LFS151)',
    code: 'LFS151',
    url: 'https://training.linuxfoundation.org/training/introduction-to-cloud-infrastructure-technologies/',
    author: 'The Linux Foundation',
    description:
      "Get a fundamental understanding of today's top open source cloud technology options.",
    isPaid: false,
    duration: '30-40 hours',
    difficulty: 'beginner',
    topicAreas: ['cloud-containers'],
  },
  {
    title: 'Introduction to Serverless on Kubernetes (LFS157)',
    code: 'LFS157',
    url: 'https://training.linuxfoundation.org/training/introduction-to-serverless-on-kubernetes-lfs157/',
    author: 'The Linux Foundation',
    description:
      'Learn how to build serverless functions that can run on any cloud, without being restricted to a single provider.',
    isPaid: false,
    duration: '15-20 hours',
    difficulty: 'intermediate',
    topicAreas: ['cloud-containers'],
  },
  {
    title: 'Scaling Cloud Native Applications with KEDA (LFEL1014)',
    code: 'LFEL1014',
    url: 'https://training.linuxfoundation.org/express-learning/scaling-cloud-native-applications-with-keda-lfel1014/',
    author: 'The Linux Foundation',
    description:
      'Quickly understand how to design and deploy applications that can dynamically scale using KEDA.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'intermediate',
    topicAreas: ['cloud-containers'],
  },
  {
    title: 'Introduction to Cilium (LFS146)',
    code: 'LFS146',
    url: 'https://training.linuxfoundation.org/training/introduction-to-cilium-lfs146/',
    author: 'The Linux Foundation',
    description:
      'Get a practical introduction to using Cilium as the networking plug-in for Kubernetes.',
    isPaid: false,
    duration: '10-15 hours',
    difficulty: 'intermediate',
    topicAreas: ['cloud-containers', 'networking'],
  },
  {
    title: 'Introduction to AI/ML Toolkits with Kubeflow (LFS147)',
    code: 'LFS147',
    url: 'https://training.linuxfoundation.org/training/introduction-to-ai-ml-toolkits-with-kubeflow-lfs147/',
    author: 'The Linux Foundation',
    description:
      'Explore the origins, deployment options, individual components and common integrations of Kubeflow.',
    isPaid: false,
    duration: '15-20 hours',
    difficulty: 'intermediate',
    topicAreas: ['cloud-containers', 'ai-machine-learning'],
  },
  {
    title: 'Feature Flagging with OpenFeature (LFS140)',
    code: 'LFS140',
    url: 'https://training.linuxfoundation.org/training/feature-flagging-with-openfeature-lfs140/',
    author: 'The Linux Foundation',
    description:
      'Learn hands-on to evaluate flags, run experiments, and manage rollouts with OpenFeature for safer, faster deployments.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'intermediate',
    topicAreas: ['cloud-containers', 'devops-site-reliability'],
  },
  {
    title: 'Introduction to Backstage: Developer Portals Made Easy (LFS142)',
    code: 'LFS142',
    url: 'https://training.linuxfoundation.org/training/introduction-to-backstage-developer-portals-made-easy-lfs142/',
    author: 'The Linux Foundation',
    description: "Create a Backstage setup that fits your organization's needs.",
    isPaid: false,
    duration: '10-15 hours',
    difficulty: 'intermediate',
    topicAreas: ['cloud-containers'],
  },
  {
    title: 'Introduction to Protocol Buffers (LFS145)',
    code: 'LFS145',
    url: 'https://training.linuxfoundation.org/training/introduction-to-protocol-buffers-lfs145/',
    author: 'The Linux Foundation',
    description: 'Learn how to use Protocol Buffers for efficient data serialization.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'beginner',
    topicAreas: ['cloud-containers'],
  },

  // ============================================================================
  // Service Mesh
  // ============================================================================
  {
    title: 'Introduction to Istio (LFS144)',
    code: 'LFS144',
    url: 'https://training.linuxfoundation.org/training/introduction-to-istio-lfs144/',
    author: 'The Linux Foundation',
    description:
      'Learn how you can monitor, connect, and secure microservices using Istio service mesh.',
    isPaid: false,
    duration: '15-20 hours',
    difficulty: 'intermediate',
    topicAreas: ['cloud-containers', 'networking'],
  },

  // ============================================================================
  // Observability
  // ============================================================================
  {
    title: 'Getting Started with OpenTelemetry (LFS148)',
    code: 'LFS148',
    url: 'https://training.linuxfoundation.org/training/getting-started-with-opentelemetry-lfs148/',
    author: 'The Linux Foundation',
    description: 'Learn to use OpenTelemetry to build and manage unified observability.',
    isPaid: false,
    duration: '15-20 hours',
    difficulty: 'intermediate',
    topicAreas: ['cloud-containers', 'devops-site-reliability'],
  },

  // ============================================================================
  // GitOps & DevOps
  // ============================================================================
  {
    title: 'Introduction to GitOps (LFS169)',
    code: 'LFS169',
    url: 'https://training.linuxfoundation.org/training/introduction-to-gitops-lfs169/',
    author: 'The Linux Foundation',
    description:
      'Learn how GitOps could help you deploy to a Kubernetes environment with a simple pull request.',
    isPaid: false,
    duration: '10-15 hours',
    difficulty: 'intermediate',
    topicAreas: ['devops-site-reliability', 'cloud-containers'],
  },
  {
    title: 'Getting Started with OpenTofu (LFEL1009)',
    code: 'LFEL1009',
    url: 'https://training.linuxfoundation.org/express-learning/getting-started-with-opentofu-lfel1009/',
    author: 'The Linux Foundation',
    description:
      'Quickly start managing Infrastructure as Code (IaC) using OpenTofu to automate, scale and manage infrastructure.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'beginner',
    topicAreas: ['devops-site-reliability'],
  },
  {
    title: 'Introduction to DevOps and Site Reliability Engineering (LFS162)',
    code: 'LFS162',
    url: 'https://training.linuxfoundation.org/training/introduction-to-devops-and-site-reliability-engineering-lfs162/',
    author: 'The Linux Foundation',
    description:
      'Learn how to start transforming your organization using the principles and practices of DevOps.',
    isPaid: false,
    duration: '25-30 hours',
    difficulty: 'beginner',
    topicAreas: ['devops-site-reliability'],
  },
  {
    title: 'Introduction to Jenkins (LFS167)',
    code: 'LFS167',
    url: 'https://training.linuxfoundation.org/training/introduction-to-jenkins-lfs167/',
    author: 'The Linux Foundation',
    description:
      'Get the skills you need to use Jenkins for continuous integration and continuous delivery.',
    isPaid: false,
    duration: '20-25 hours',
    difficulty: 'beginner',
    topicAreas: ['devops-site-reliability'],
  },
  {
    title: 'Introduction to DevSecOps for Managers (LFS180)',
    code: 'LFS180',
    url: 'https://training.linuxfoundation.org/training/introduction-to-devsecops-for-managers-lfs180/',
    author: 'The Linux Foundation',
    description:
      'Get an overview of the history, terminology, processes, and tools used to adopt Continuous Delivery and Security.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'beginner',
    topicAreas: ['devops-site-reliability', 'cybersecurity'],
  },

  // ============================================================================
  // Security & Cybersecurity
  // ============================================================================
  {
    title: 'Introduction to Zero Trust (LFS183)',
    code: 'LFS183',
    url: 'https://training.linuxfoundation.org/training/introduction-to-zero-trust-lfs183/',
    author: 'The Linux Foundation',
    description:
      'Learn the fundamentals of Zero Trust and how open source tools such as SPIFFE and SPIRE can help.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Developing Secure Software (LFD121)',
    code: 'LFD121',
    url: 'https://training.linuxfoundation.org/training/developing-secure-software-lfd121/',
    author: 'The Linux Foundation',
    description: 'Learn the security basics to develop software that is hardened against attacks.',
    isPaid: false,
    duration: '14-18 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Securing Your Software Supply Chain with Sigstore (LFS182)',
    code: 'LFS182',
    url: 'https://training.linuxfoundation.org/training/securing-your-software-supply-chain-with-sigstore-lfs182/',
    author: 'The Linux Foundation',
    description:
      'Gain the knowledge and skills necessary to secure the integrity of your software by leveraging Sigstore.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Cybersecurity Essentials (LFC108)',
    code: 'LFC108',
    url: 'https://training.linuxfoundation.org/training/cybersecurity-essentials-lfc108/',
    author: 'The Linux Foundation',
    description: 'Review and reinforce the must-know cybersecurity topics, terms and practices.',
    isPaid: false,
    duration: '4-6 hours',
    difficulty: 'beginner',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'XSS Exploits and Defenses (LFEL1010)',
    code: 'LFEL1010',
    url: 'https://training.linuxfoundation.org/express-learning/xss-exploits-and-defenses-lfel1010/',
    author: 'The Linux Foundation',
    description: 'Learn to counter the top security vulnerability, cross-site scripting (XSS).',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity', 'web-application-development'],
  },
  {
    title: 'Authentication & Authorization for Web/API (LFEL1004)',
    code: 'LFEL1004',
    url: 'https://training.linuxfoundation.org/express-learning/web-api-authentication-and-authorization-lfel1004/',
    author: 'The Linux Foundation',
    description:
      'Build the security mindset employers want—the ability to design trusted systems and protect user data.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity', 'web-application-development'],
  },
  {
    title: 'Understanding the OWASP Top 10 Security Threats (SKF100)',
    code: 'SKF100',
    url: 'https://training.linuxfoundation.org/training/owasp-top-ten-security-threats-skf100/',
    author: 'The Linux Foundation',
    description:
      'Equip yourself to identify and address security risks, protect information & ensure online integrity.',
    isPaid: false,
    duration: '6-8 hours',
    difficulty: 'beginner',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Security for Software Development Managers (LFD125)',
    code: 'LFD125',
    url: 'https://training.linuxfoundation.org/training/security-for-software-development-managers-lfd125/',
    author: 'The Linux Foundation',
    description:
      'Ensure you have the knowledge and skills needed to help teams of developers create secure software.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Understanding the EU Cyber Resilience Act (CRA) (LFEL1001)',
    code: 'LFEL1001',
    url: 'https://training.linuxfoundation.org/express-learning/understanding-the-eu-cyber-resilience-act-cra-lfel1001/',
    author: 'The Linux Foundation',
    description: 'Learn to navigate CRA compliance, mitigate risks, and meet regulatory standards.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'beginner',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Secure AI/ML-Driven Software Development (LFEL1012)',
    code: 'LFEL1012',
    url: 'https://training.linuxfoundation.org/express-learning/secure-ai-ml-driven-software-development-lfel1012/',
    author: 'The Linux Foundation',
    description: 'Advance your career by mastering secure use of AI assistants.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity', 'ai-machine-learning'],
  },
  {
    title: 'Automating Supply Chain Security: SBOMs and Signatures (LFEL1007)',
    code: 'LFEL1007',
    url: 'https://training.linuxfoundation.org/express-learning/automating-supply-chain-security-sboms-and-signatures-lfel1007/',
    author: 'The Linux Foundation',
    description:
      'Quickly learn to automate key aspects of software supply chain security including SBOMs.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Securing Projects with OpenSSF Scorecard (LFEL1006)',
    code: 'LFEL1006',
    url: 'https://training.linuxfoundation.org/express-learning/securing-projects-with-openssf-scorecard-lfel1006/',
    author: 'The Linux Foundation',
    description:
      'Quickly learn how to apply the OpenSSF Scorecard to your unique software development lifecycle.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'beginner',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Security Self-Assessments for Open Source Projects (LFEL1005)',
    code: 'LFEL1005',
    url: 'https://training.linuxfoundation.org/express-learning/security-self-assessments-for-open-source-projects-lfel1005/',
    author: 'The Linux Foundation',
    description: 'Quickly learn to self-assess the security of your open source projects.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'beginner',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Secure Software Development: Requirements, Design, and Reuse (LFD104x)',
    code: 'LFD104x',
    url: 'https://training.linuxfoundation.org/training/secure-software-development-requirements-design-and-reuse-lfd104/',
    author: 'The Linux Foundation',
    description:
      'Learn to create and maintain systems that are much harder to successfully attack.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Secure Software Development: Implementation (LFD105x)',
    code: 'LFD105x',
    url: 'https://training.linuxfoundation.org/training/secure-software-development-implementation-lfd105/',
    author: 'The Linux Foundation',
    description: 'Learn to implement secure coding practices and avoid common vulnerabilities.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Secure Software Development: Verification and More (LFD106x)',
    code: 'LFD106x',
    url: 'https://training.linuxfoundation.org/training/secure-software-development-verification-and-more-specialized-topics-lfd106/',
    author: 'The Linux Foundation',
    description: 'Take a deeper dive into the basics of applying threat models and cryptography.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'advanced',
    topicAreas: ['cybersecurity'],
  },
  {
    title: 'Introduction to JavaScript Security (LFS184)',
    code: 'LFS184',
    url: 'https://training.linuxfoundation.org/training/introduction-to-javascript-security-lfs184/',
    author: 'The Linux Foundation',
    description: 'Understanding JavaScript security makes you a sharper, more valuable developer.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'intermediate',
    topicAreas: ['cybersecurity', 'web-application-development'],
  },

  // ============================================================================
  // AI & Machine Learning
  // ============================================================================
  {
    title: 'PyTorch and Deep Learning for Decision Makers (LFS116)',
    code: 'LFS116',
    url: 'https://training.linuxfoundation.org/training/pytorch-and-deep-learning-for-decision-makers-lfs116/',
    author: 'The Linux Foundation',
    description:
      'Learn how PyTorch, a deep learning framework, can be used to automate and optimize processes.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'beginner',
    topicAreas: ['ai-machine-learning'],
  },
  {
    title: 'Ethical Principles for Conversational AI (LFS118)',
    code: 'LFS118',
    url: 'https://training.linuxfoundation.org/training/ethical-principles-in-conversational-ai-lfs118/',
    author: 'The Linux Foundation',
    description: 'Learn about the impact and ethical challenges of conversational AI.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'beginner',
    topicAreas: ['ai-machine-learning'],
  },
  {
    title: 'Conversational AI: Ensuring Compliance and Mitigating Risks (LFS120)',
    code: 'LFS120',
    url: 'https://training.linuxfoundation.org/training/conversational-ai-ensuring-compliance-and-mitigating-risks-lfs120/',
    author: 'The Linux Foundation',
    description:
      'Learn to navigate the evolving landscape of conversational AI and gain expertise in risk mitigation.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'intermediate',
    topicAreas: ['ai-machine-learning'],
  },

  // ============================================================================
  // Linux & System Administration
  // ============================================================================
  {
    title: 'Introduction to Linux (LFS101)',
    code: 'LFS101',
    url: 'https://training.linuxfoundation.org/training/introduction-to-linux/',
    author: 'The Linux Foundation',
    description:
      'Develop a good working knowledge of Linux using both the graphical interface and command line.',
    isPaid: false,
    duration: '40-60 hours',
    difficulty: 'beginner',
    topicAreas: ['linux-kernel-development'],
  },
  {
    title: "A Beginner's Guide to Linux Kernel Development (LFD103)",
    code: 'LFD103',
    url: 'https://training.linuxfoundation.org/training/a-beginners-guide-to-linux-kernel-development-lfd103/',
    author: 'The Linux Foundation',
    description:
      'Learn how to become a Linux kernel developer and contribute to the largest open source project.',
    isPaid: false,
    duration: '12-16 hours',
    difficulty: 'intermediate',
    topicAreas: ['linux-kernel-development'],
  },
  {
    title: 'Linux Tools for Software Development (LFD108x)',
    code: 'LFD108x',
    url: 'https://training.linuxfoundation.org/training/linux-tools-for-software-development-lfd108x/',
    author: 'The Linux Foundation',
    description: 'Learn about essential Linux tools for software development.',
    isPaid: false,
    duration: '20-25 hours',
    difficulty: 'beginner',
    topicAreas: ['linux-kernel-development'],
  },
  {
    title: 'Open Source Software Development: Linux for Developers (LFD107x)',
    code: 'LFD107x',
    url: 'https://training.linuxfoundation.org/training/open-source-software-development-linux-for-developers-lfd107x/',
    author: 'The Linux Foundation',
    description: 'Learn how Linux is built and how to work effectively in the Linux ecosystem.',
    isPaid: false,
    duration: '20-25 hours',
    difficulty: 'beginner',
    topicAreas: ['linux-kernel-development', 'open-source-best-practice'],
  },

  // ============================================================================
  // Networking
  // ============================================================================
  {
    title: 'Open Source and the 5G Transition (LFS111)',
    code: 'LFS111',
    url: 'https://training.linuxfoundation.org/training/open-source-and-the-5g-transition-lfs111/',
    author: 'The Linux Foundation',
    description: 'Open source software and standards are driving the transition to 5G, AI and IoT.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'beginner',
    topicAreas: ['networking'],
  },
  {
    title: 'Introduction to Nephio (LFS179)',
    code: 'LFS179',
    url: 'https://training.linuxfoundation.org/training/introduction-to-nephio-lfs179/',
    author: 'The Linux Foundation',
    description: 'Learn about the Nephio project for cloud-native network automation.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'intermediate',
    topicAreas: ['networking', 'cloud-containers'],
  },
  {
    title: 'Introduction to free5GC (LFS114)',
    code: 'LFS114',
    url: 'https://training.linuxfoundation.org/training/introduction-to-free5gc-lfs114/',
    author: 'The Linux Foundation',
    description: 'Build in-demand 5G Core skills with free5GC.',
    isPaid: false,
    duration: '3-4 hours',
    difficulty: 'intermediate',
    topicAreas: ['networking'],
  },

  // ============================================================================
  // Open Source Best Practices
  // ============================================================================
  {
    title: "A Beginner's Guide to Open Source Software Development (LFD102)",
    code: 'LFD102',
    url: 'https://training.linuxfoundation.org/training/beginners-guide-open-source-software-development/',
    author: 'The Linux Foundation',
    description: 'Learn how to become an open source developer.',
    isPaid: false,
    duration: '12-15 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Open Source Licensing Basics for Software Developers (LFC191)',
    code: 'LFC191',
    url: 'https://training.linuxfoundation.org/training/open-source-licensing-basics-for-software-developers/',
    author: 'The Linux Foundation',
    description: 'Understand the essentials of open source licensing.',
    isPaid: false,
    duration: '4-6 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Ethics for Open Source Development (LFC104)',
    code: 'LFC104',
    url: 'https://training.linuxfoundation.org/training/ethics-for-open-source-development-lfc104/',
    author: 'The Linux Foundation',
    description: 'Learn about ethical considerations in open source development.',
    isPaid: false,
    duration: '4-6 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Inclusive Open Source Community Orientation (LFC102)',
    code: 'LFC102',
    url: 'https://training.linuxfoundation.org/training/inclusive-open-source-community-orientation-lfc102/',
    author: 'The Linux Foundation',
    description: 'Learn how to create and maintain inclusive open source communities.',
    isPaid: false,
    duration: '4-6 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Open Source Contribution in Finance (LFD137)',
    code: 'LFD137',
    url: 'https://training.linuxfoundation.org/training/open-source-contribution-in-finance-lfd137/',
    author: 'The Linux Foundation',
    description: 'Learn about open source in the financial services industry.',
    isPaid: false,
    duration: '6-8 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Introduction to Open Source License Compliance Management (LFC193)',
    code: 'LFC193',
    url: 'https://training.linuxfoundation.org/training/introduction-to-open-source-license-compliance-management-lfc193/',
    author: 'The Linux Foundation',
    description: 'Learn the fundamentals of open source license compliance.',
    isPaid: false,
    duration: '6-8 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Implementing Open Source License Compliance Management (LFC194)',
    code: 'LFC194',
    url: 'https://training.linuxfoundation.org/training/implementing-open-source-license-compliance-management-lfc194/',
    author: 'The Linux Foundation',
    description: 'Learn to implement license compliance programs.',
    isPaid: false,
    duration: '6-8 hours',
    difficulty: 'intermediate',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Creating Effective Documentation for Developers (LFC112)',
    code: 'LFC112',
    url: 'https://training.linuxfoundation.org/training/creating-effective-documentation-for-developers-lfc112/',
    author: 'The Linux Foundation',
    description: 'Learn to create clear and effective technical documentation.',
    isPaid: false,
    duration: '6-8 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Open Source Technical Documentation Essentials (LFC111)',
    code: 'LFC111',
    url: 'https://training.linuxfoundation.org/training/open-source-technical-documentation-essentials-lfc111/',
    author: 'The Linux Foundation',
    description: 'Master the fundamentals of technical documentation for open source projects.',
    isPaid: false,
    duration: '4-6 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'GitHub for Open Standards Development (LFD140)',
    code: 'LFD140',
    url: 'https://training.linuxfoundation.org/training/github-for-open-standards-development-lfd140/',
    author: 'The Linux Foundation',
    description: 'Learn how to use GitHub effectively for open standards development.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },
  {
    title: 'Git for Distributed Software Development (LFD109x)',
    code: 'LFD109x',
    url: 'https://training.linuxfoundation.org/training/git-for-distributed-software-development-lfd109x/',
    author: 'The Linux Foundation',
    description: 'Master Git for collaborative software development.',
    isPaid: false,
    duration: '20-25 hours',
    difficulty: 'beginner',
    topicAreas: ['open-source-best-practice'],
  },

  // ============================================================================
  // Web & Application Development
  // ============================================================================
  {
    title: 'Introduction to Node.js (LFW111)',
    code: 'LFW111',
    url: 'https://training.linuxfoundation.org/training/introduction-to-nodejs-lfw111/',
    author: 'The Linux Foundation',
    description: 'Learn the fundamentals of Node.js for server-side JavaScript development.',
    isPaid: false,
    duration: '20-25 hours',
    difficulty: 'beginner',
    topicAreas: ['web-application-development'],
  },
  {
    title: 'Introduction to WebAssembly (LFD133)',
    code: 'LFD133',
    url: 'https://training.linuxfoundation.org/training/introduction-to-webassembly-lfd133/',
    author: 'The Linux Foundation',
    description: 'Learn the fundamentals of WebAssembly.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'intermediate',
    topicAreas: ['web-application-development'],
  },
  {
    title: 'WebAssembly Components: From Cloud to Edge (LFD134)',
    code: 'LFD134',
    url: 'https://training.linuxfoundation.org/training/webassembly-components-from-cloud-to-edge-lfd134/',
    author: 'The Linux Foundation',
    description: 'Learn about WebAssembly components for cloud and edge computing.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'intermediate',
    topicAreas: ['web-application-development', 'cloud-containers'],
  },
  {
    title: 'Getting Started with Rust (LFEL1002)',
    code: 'LFEL1002',
    url: 'https://training.linuxfoundation.org/express-learning/getting-started-with-rust-lfel1002/',
    author: 'The Linux Foundation',
    description: 'Get started with the Rust programming language.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'beginner',
    topicAreas: ['web-application-development'],
  },
  {
    title: 'OpenAPI Fundamentals (LFEL1011)',
    code: 'LFEL1011',
    url: 'https://training.linuxfoundation.org/express-learning/openapi-fundamentals-lfel1011/',
    author: 'The Linux Foundation',
    description: 'Learn the fundamentals of OpenAPI specification.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'beginner',
    topicAreas: ['web-application-development'],
  },

  // ============================================================================
  // Embedded & IoT
  // ============================================================================
  {
    title: 'Introduction to RISC-V (LFD110)',
    code: 'LFD110',
    url: 'https://training.linuxfoundation.org/training/introduction-to-riscv-lfd110/',
    author: 'The Linux Foundation',
    description: 'Learn the fundamentals of the RISC-V instruction set architecture.',
    isPaid: false,
    duration: '10-12 hours',
    difficulty: 'intermediate',
    topicAreas: ['embedded-development'],
  },
  {
    title: 'Building a RISC-V CPU Core (LFD111x)',
    code: 'LFD111x',
    url: 'https://training.linuxfoundation.org/training/building-a-riscv-cpu-core-lfd111x/',
    author: 'The Linux Foundation',
    description: 'Learn to design and implement a RISC-V CPU core.',
    isPaid: false,
    duration: '15-20 hours',
    difficulty: 'advanced',
    topicAreas: ['embedded-development'],
  },
  {
    title: 'Foundations of RISC-V Assembly Programming (LFD117x)',
    code: 'LFD117x',
    url: 'https://training.linuxfoundation.org/training/foundations-of-risc-v-assembly-programming-lfd117x/',
    author: 'The Linux Foundation',
    description: 'Master RISC-V assembly programming fundamentals.',
    isPaid: false,
    duration: '15-20 hours',
    difficulty: 'intermediate',
    topicAreas: ['embedded-development'],
  },
  {
    title: 'Computer Architecture with an Industrial RISC-V Core (LFD119x)',
    code: 'LFD119x',
    url: 'https://training.linuxfoundation.org/training/computer-architecture-with-an-industrial-riscv-core-rvfpga-lfd119x/',
    author: 'The Linux Foundation',
    description: 'Learn computer architecture using an industrial RISC-V core.',
    isPaid: false,
    duration: '20-25 hours',
    difficulty: 'advanced',
    topicAreas: ['embedded-development'],
  },
  {
    title: 'Open Source RT-Thread RTOS on RISC-V (LFD123)',
    code: 'LFD123',
    url: 'https://training.linuxfoundation.org/training/open-source-rt-thread-rtos-on-risc-v-lfd123/',
    author: 'The Linux Foundation',
    description: 'Learn to use the RT-Thread RTOS on RISC-V platforms.',
    isPaid: false,
    duration: '8-10 hours',
    difficulty: 'intermediate',
    topicAreas: ['embedded-development'],
  },
  {
    title: 'Software Engineering Basics for Embedded Systems (LFD116)',
    code: 'LFD116',
    url: 'https://training.linuxfoundation.org/training/software-engineering-basics-for-embedded-systems-lfd116/',
    author: 'The Linux Foundation',
    description: 'Learn software engineering fundamentals for embedded systems.',
    isPaid: false,
    duration: '15-20 hours',
    difficulty: 'intermediate',
    topicAreas: ['embedded-development'],
  },
  {
    title: 'Creating Edge IoT Solutions with EdgeX Foundry (LFEL1003)',
    code: 'LFEL1003',
    url: 'https://training.linuxfoundation.org/express-learning/creating-edge-iot-solutions-with-edgex-foundry-lfel1003/',
    author: 'The Linux Foundation',
    description: 'Learn to create edge IoT solutions using EdgeX Foundry.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'intermediate',
    topicAreas: ['embedded-development'],
  },

  // ============================================================================
  // Blockchain
  // ============================================================================
  {
    title: 'Blockchain: Understanding Its Uses and Implications (LFS170)',
    code: 'LFS170',
    url: 'https://training.linuxfoundation.org/training/blockchain-understanding-its-uses-and-implications/',
    author: 'The Linux Foundation',
    description: 'Understand blockchain technology and its applications.',
    isPaid: false,
    duration: '15-20 hours',
    difficulty: 'beginner',
    topicAreas: ['blockchain'],
  },

  // ============================================================================
  // Emerging Technologies
  // ============================================================================
  {
    title: 'Fundamentals of Quantum Computing (LFQ101)',
    code: 'LFQ101',
    url: 'https://training.linuxfoundation.org/training/fundamentals-of-quantum-computing-lfq101/',
    author: 'The Linux Foundation',
    description: 'Learn the fundamentals of quantum computing.',
    isPaid: false,
    duration: '10-15 hours',
    difficulty: 'intermediate',
    topicAreas: ['emerging-technologies'],
  },
  {
    title: 'Quantum Computing Essentials for Senior Leaders (LFQ102)',
    code: 'LFQ102',
    url: 'https://training.linuxfoundation.org/training/quantum-computing-essentials-for-senior-leaders-lfq102/',
    author: 'The Linux Foundation',
    description: 'Quantum computing essentials for business leaders.',
    isPaid: false,
    duration: '6-8 hours',
    difficulty: 'beginner',
    topicAreas: ['emerging-technologies'],
  },
  {
    title: 'Introduction to FDC3 (LFEL1000)',
    code: 'LFEL1000',
    url: 'https://training.linuxfoundation.org/express-learning/introduction-to-fdc3-lfel1000/',
    author: 'The Linux Foundation',
    description: 'Learn about FDC3 for financial desktop interoperability.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'beginner',
    topicAreas: ['emerging-technologies'],
  },
  {
    title: 'Introduction to the Common Domain Model (CDM) (LFEL1016)',
    code: 'LFEL1016',
    url: 'https://training.linuxfoundation.org/express-learning/introduction-to-the-common-domain-model-cdm-lfel1016/',
    author: 'The Linux Foundation',
    description: 'Learn about the Common Domain Model for financial services.',
    isPaid: false,
    duration: '2-3 hours',
    difficulty: 'beginner',
    topicAreas: ['emerging-technologies'],
  },
];

/**
 * Get courses relevant to a specific certification
 * Maps specific course codes to each certification for accurate recommendations
 */
export function getCoursesForCertification(certId: string): LFFreeCourse[] {
  // Specific course codes for each certification
  const certCourseMappings: Record<string, string[]> = {
    // KCNA - Kubernetes and Cloud Native Associate (Entry level)
    kcna: [
      'LFS158', // Introduction to Kubernetes
      'LFS151', // Introduction to Cloud Infrastructure Technologies
      'LFS169', // Introduction to GitOps
    ],
    // CKA - Certified Kubernetes Administrator
    cka: [
      'LFS158', // Introduction to Kubernetes
      'LFS151', // Introduction to Cloud Infrastructure Technologies
      'LFS169', // Introduction to GitOps
    ],
    // CKAD - Certified Kubernetes Application Developer
    ckad: [
      'LFS158', // Introduction to Kubernetes
      'LFS157', // Introduction to Serverless on Kubernetes
      'LFS145', // Introduction to Protocol Buffers
    ],
    // CKS - Certified Kubernetes Security Specialist
    cks: [
      'LFS158', // Introduction to Kubernetes
      'LFS183', // Introduction to Zero Trust
      'LFD121', // Developing Secure Software
      'LFS182', // Securing Your Software Supply Chain with Sigstore
    ],
    // KCSA - Kubernetes and Cloud Security Associate
    kcsa: [
      'LFS158', // Introduction to Kubernetes
      'LFS183', // Introduction to Zero Trust
      'LFD121', // Developing Secure Software
      'LFC108', // Cybersecurity Essentials
    ],
    // CGOA - Certified GitOps Associate
    cgoa: [
      'LFS169', // Introduction to GitOps
      'LFS162', // Introduction to DevOps and SRE
      'LFS167', // Introduction to Jenkins
    ],
    // OTCA - OpenTelemetry Certified Associate
    otca: [
      'LFS148', // Getting Started with OpenTelemetry
      'LFS162', // Introduction to DevOps and SRE
    ],
    // ICA - Istio Certified Associate
    ica: [
      'LFS144', // Introduction to Istio
      'LFS158', // Introduction to Kubernetes
    ],
    // PCA - Prometheus Certified Associate
    pca: [
      'LFS148', // Getting Started with OpenTelemetry (observability)
      'LFS162', // Introduction to DevOps and SRE
      'LFS158', // Introduction to Kubernetes
    ],
    // CCA - Cilium Certified Associate
    cca: [
      'LFS146', // Introduction to Cilium
      'LFS158', // Introduction to Kubernetes
    ],
    // CAPA - Certified Argo Project Associate
    capa: [
      'LFS169', // Introduction to GitOps
      'LFS158', // Introduction to Kubernetes
    ],
    // CBA - Certified Backstage Associate
    cba: [
      'LFS142', // Introduction to Backstage
      'LFS158', // Introduction to Kubernetes
    ],
    // KCA - Kyverno Certified Associate
    kca: [
      'LFS158', // Introduction to Kubernetes
      'LFS183', // Introduction to Zero Trust
    ],
    // CNPA - Cloud Native Platform Architect (expected)
    cnpa: [
      'LFS158', // Introduction to Kubernetes
      'LFS151', // Introduction to Cloud Infrastructure Technologies
      'LFS146', // Introduction to Cilium
      'LFS144', // Introduction to Istio
    ],
    // CNPE - Cloud Native Platform Engineer (expected)
    cnpe: [
      'LFS158', // Introduction to Kubernetes
      'LFS151', // Introduction to Cloud Infrastructure Technologies
      'LFS169', // Introduction to GitOps
      'LFS162', // Introduction to DevOps and SRE
    ],
    // LFCS - Linux Foundation Certified System Administrator
    lfcs: [
      'LFS101', // Introduction to Linux
      'LFD103', // A Beginner's Guide to Linux Kernel Development
      'LFD108x', // Linux Tools for Software Development
      'LFD107x', // Open Source Software Development: Linux for Developers
    ],
  };

  const courseCodes = certCourseMappings[certId.toLowerCase()];
  if (!courseCodes) return [];

  // Return courses in the order specified in the mapping
  return courseCodes
    .map((code) => LF_FREE_COURSES.find((course) => course.code === code))
    .filter((course): course is LFFreeCourse => course !== undefined);
}
