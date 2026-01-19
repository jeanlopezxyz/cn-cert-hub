/**
 * CKAD - Certified Kubernetes Application Developer
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createKillerShResource,
  createKillercodaResource,
  createKodeKloudLabsResource,
  createKubernetesUpAndRunningResource,
  createTheKubernetesBookResource,
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
  createKubernetesDocsResource,
  createKubectlCheatSheetResource,
  createKubernetesTasksResource,
  createKubernetesSlackResource,
  createKubernetesForumResource,
  createKubernetesRedditResource,
  createKodeKloudCommunityResource,
  createK9sResource,
  createMinikubeResource,
} from './common-resources';

export const CKAD_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/ckad/',
  github: [
    'https://github.com/dgkanatsios/CKAD-exercises',
    'https://github.com/kodekloudhub/certified-kubernetes-application-developer-course',
    'https://github.com/bmuschko/ckad-prep',
    'https://github.com/ahmetb/kubernetes-network-policy-recipes',
    'https://github.com/lucassha/CKAD-resources',
  ],
  practice: [
    createKillerShResource('CKAD', 'intermediate'),
    createKillercodaResource('CKAD', 'intermediate'),
    createKodeKloudLabsResource(
      'CKAD',
      'certified-kubernetes-application-developer-ckad',
      'intermediate'
    ),
  ],

  books: [
    // FREE BOOKS
    {
      title: 'Kubernetes for Developers',
      url: 'https://www.vmware.com/docs/ebook-kubernetes-for-developers',
      author: 'VMware',
      description: 'FREE - Learn how containers and Kubernetes help deliver software faster',
      isPaid: false,
      format: 'ebook',
      year: 2024,
      difficulty: 'beginner',
    },
    {
      title: 'CI/CD with Kubernetes',
      url: 'https://www.cncf.io/free-ebook-ci-cd-with-kubernetes/',
      author: 'CNCF / The New Stack',
      description: 'FREE - Best practices for building and deploying applications on K8s',
      isPaid: false,
      format: 'ebook',
      year: 2023,
      difficulty: 'intermediate',
    },
    {
      title: 'DevOps with OpenShift',
      url: 'https://developers.redhat.com/e-books/devops-openshift-cloud-deployments-made-easy',
      author: 'Red Hat',
      description: 'FREE - Container-centric approach with OpenShift',
      isPaid: false,
      format: 'ebook',
      year: 2023,
      difficulty: 'intermediate',
    },
    {
      title: 'Kubernetes Patterns, 2nd Edition',
      url: 'https://www.oreilly.com/library/view/kubernetes-patterns-2nd/9781098131678/',
      author: 'Bilgin Ibryam, Roland Huß',
      description: 'Reusable elements for designing cloud-native applications',
      isPaid: true,
      format: 'paperback',
      year: 2023,
      difficulty: 'intermediate',
    },
    // PAID BOOKS
    createKubernetesUpAndRunningResource(
      'intermediate',
      'Comprehensive guide to Kubernetes for developers'
    ),
    {
      title: 'Certified Kubernetes Application Developer (CKAD) Study Guide, 2nd Edition',
      url: 'https://www.oreilly.com/library/view/certified-kubernetes-application/9781098152857/',
      author: 'Benjamin Muschko',
      description: 'Updated exam prep with interactive labs for CKAD certification',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Cloud Native DevOps with Kubernetes, 2nd Edition',
      url: 'https://www.oreilly.com/library/view/cloud-native-devops/9781098116811/',
      author: 'John Arundel, Justin Domingus',
      description: 'Building, deploying, and scaling modern applications',
      isPaid: true,
      format: 'paperback',
      year: 2022,
      difficulty: 'intermediate',
    },
    createTheKubernetesBookResource('beginner'),
  ],

  courses: [
    {
      title: 'CKAD with Practice Tests',
      url: 'https://www.udemy.com/course/certified-kubernetes-application-developer/',
      author: 'Mumshad Mannambeth (KodeKloud)',
      description: 'Complete CKAD preparation with hands-on labs and practice tests',
      isPaid: true,
      duration: '10 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Kubernetes for Developers (LFD259)',
      url: 'https://training.linuxfoundation.org/training/kubernetes-for-developers/',
      author: 'The Linux Foundation',
      description: 'Official Linux Foundation course for CKAD preparation',
      isPaid: true,
      duration: '40 hours',
      difficulty: 'intermediate',
      rating: 4.9,
    },
    {
      title: 'CKAD Certification Course - KodeKloud',
      url: 'https://kodekloud.com/courses/certified-kubernetes-application-developer-ckad/',
      author: 'KodeKloud',
      description: 'Interactive CKAD course with built-in labs',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'intermediate',
      rating: 4.9,
    },
    {
      title: 'Introduction to Serverless on Kubernetes (LFS157)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-serverless-on-kubernetes-lfs157/',
      author: 'The Linux Foundation',
      description: 'Build serverless functions on any cloud - relevant for CKAD app deployment',
      isPaid: false,
      duration: '15-20 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Introduction to Protocol Buffers (LFS145)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-protocol-buffers-lfs145/',
      author: 'The Linux Foundation',
      description: 'Efficient data serialization for cloud-native applications',
      isPaid: false,
      duration: '8-10 hours',
      difficulty: 'beginner',
      rating: 4.7,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - essential prerequisite for CKAD'),
    createKubernetesForBeginnersResource(
      'Kubernetes basics with hands-on labs - prerequisite for CKAD'
    ),
    {
      title: 'Pass CKAD Exam in ONE TRY',
      url: 'https://www.youtube.com/watch?v=SFXdXwTvruc',
      author: 'Mischa van den Burg',
      description: 'Kubestronaut expert tips for CKAD exam (2024)',
      isPaid: false,
      duration: '15 minutes',
      difficulty: 'intermediate',
    },
    {
      title: 'Kubernetes Tutorial for Beginners',
      url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
      author: 'TechWorld with Nana',
      description: 'Full Kubernetes course (2020)',
      isPaid: false,
      duration: '4 hours',
      difficulty: 'beginner',
    },
    {
      title: 'Kubernetes and EKS for Deployment 2025',
      url: 'https://www.youtube.com/watch?v=s_o8dwzRlu4',
      author: 'freeCodeCamp',
      description: 'Kubernetes deployment with AWS EKS - February 2025',
      isPaid: false,
      duration: '2 hours',
      difficulty: 'intermediate',
    },
  ],

  documentation: [
    createKubernetesDocsResource('Official Kubernetes docs - your primary exam reference'),
    createKubectlCheatSheetResource('Essential kubectl commands for the exam'),
    {
      title: 'Kubernetes API Reference',
      url: 'https://kubernetes.io/docs/reference/kubernetes-api/',
      description: 'Complete Kubernetes API reference',
      isPaid: false,
    },
    createKubernetesTasksResource('Step-by-step guides for common operations'),
  ],

  blogs: [
    {
      title: 'CKAD Exam Study Guide 2025',
      url: 'https://devopscube.com/ckad-exam-study-guide/',
      author: 'DevOpsCube',
      description: 'Comprehensive CKAD study guide - updated for 2025 curriculum',
      isPaid: false,
    },
    {
      title: 'CKAD Certification Period Changes 2024',
      url: 'https://www.cncf.io/blog/2024/03/01/aligning-certifications-to-kubernetes-support-windows/',
      author: 'CNCF',
      description: 'Official CNCF blog on certification period changes effective April 2024',
      isPaid: false,
    },
    {
      title: 'CKAD Exam Preparation Tips',
      url: 'https://kodekloud.com/blog/tips-and-tricks-to-pass-the-cka-and-ckad-exam/',
      author: 'KodeKloud',
      description: 'Tips and strategies for passing the CKAD exam',
      isPaid: false,
    },
    {
      title: 'Kubernetes Official Blog',
      url: 'https://kubernetes.io/blog/',
      author: 'Kubernetes',
      description: 'Stay updated with latest Kubernetes application patterns',
      isPaid: false,
    },
  ],

  communities: [
    createKubernetesSlackResource('ckad'),
    createKubernetesForumResource('Official Kubernetes discussion forum for developers'),
    createKubernetesRedditResource('CKAD'),
    createKodeKloudCommunityResource('CKAD'),
  ],

  tools: [
    createK9sResource(),
    {
      title: 'kubectl Aliases',
      url: 'https://github.com/ahmetb/kubectl-aliases',
      description: 'Speed up your kubectl workflow with aliases',
      isPaid: false,
    },
    createMinikubeResource('Local Kubernetes for development and practice'),
  ],
};
