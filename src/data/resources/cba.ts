/**
 * CBA - Certified Backstage Associate
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import {
  createDockerForBeginnersResource,
  createKubernetesForBeginnersResource,
} from './common-resources';

export const CBA_RESOURCES: CertificationResources = {
  official: 'https://www.cncf.io/training/certification/cba/',
  github: [
    'https://github.com/backstage/backstage',
    'https://github.com/cncf/curriculum',
    'https://github.com/backstage/community',
  ],
  practice: [
    {
      title: 'Backstage Demo',
      url: 'https://demo.backstage.io/',
      description: 'Live Backstage demo instance for hands-on exploration',
      isPaid: false,
      type: 'playground',
      difficulty: 'beginner',
    },
    {
      title: 'Create Backstage App',
      url: 'https://backstage.io/docs/getting-started/create-an-app',
      description: 'Quick start to create and explore a Backstage app locally',
      isPaid: false,
      type: 'lab',
      difficulty: 'beginner',
    },
  ],

  books: [
    {
      title: 'The Platform Engineering Playbook',
      url: 'https://www.oreilly.com/library/view/the-platform-engineering/9781837638055/',
      author: 'Camille Fournier, Ian Nowland',
      description: 'Practical guide to implementing IDPs with Backstage',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Platform Engineering on Kubernetes',
      url: 'https://www.manning.com/books/platform-engineering-on-kubernetes',
      author: 'Mauricio Salatino',
      description: 'Building platforms including developer portals like Backstage',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Team Topologies, 2nd Edition',
      url: 'https://teamtopologies.com/book',
      author: 'Matthew Skelton, Manuel Pais',
      description: 'Organizing teams for fast flow - context for platform teams',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'beginner',
    },
  ],

  courses: [
    {
      title: 'Certified Backstage Associate (CBA)',
      url: 'https://training.linuxfoundation.org/training/certified-backstage-associate-cba/',
      author: 'The Linux Foundation',
      description: 'Official CBA preparation course',
      isPaid: true,
      duration: '15 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'Introduction to Backstage',
      url: 'https://roadie.io/backstage-weekly/',
      author: 'Roadie',
      description: 'Backstage tutorials and best practices',
      isPaid: false,
      duration: 'Self-paced',
      difficulty: 'beginner',
      rating: 4.6,
    },
    {
      title: 'Backstage for Beginners',
      url: 'https://www.youtube.com/playlist?list=PLj6h78yzYM2Oq3ZOAZCqhnFT1zqq3j6xP',
      author: 'Spotify Engineering',
      description: 'Getting started with Backstage',
      isPaid: false,
      duration: '5 hours',
      difficulty: 'beginner',
      rating: 4.7,
    },
    {
      title: 'Introduction to Backstage: Developer Portals Made Easy (LFS142)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-backstage-developer-portals-made-easy-lfs142/',
      author: 'The Linux Foundation',
      description: 'Create a Backstage setup that fits your organization - official LF course',
      isPaid: false,
      duration: '10-15 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
  ],

  videos: [
    createDockerForBeginnersResource('Container fundamentals - prerequisite for CBA'),
    createKubernetesForBeginnersResource('Kubernetes basics - prerequisite for CBA'),
    {
      title: 'Build Your Own IDP with Backstage',
      url: 'https://www.youtube.com/watch?v=QsHbH8fLHMs',
      author: 'PlatformCon 2025',
      description: 'Building an Internal Developer Platform with Backstage (2025)',
      isPaid: false,
      duration: '45 minutes',
      difficulty: 'intermediate',
    },
    {
      title: 'Backstage Tutorial',
      url: 'https://www.youtube.com/watch?v=85TQEpNCaU0',
      author: 'TechWorld with Nana',
      description: 'Complete Backstage tutorial - developer portal (2023)',
      isPaid: false,
      duration: '1.5 hours',
      difficulty: 'beginner',
    },
    {
      title: 'Backstage Platform Engineering',
      url: 'https://www.youtube.com/watch?v=BO0xdmD8Pwc',
      author: 'CNCF',
      description: 'Introduction to Backstage and platform engineering (2022)',
      isPaid: false,
      duration: '45 minutes',
      difficulty: 'beginner',
    },
  ],

  documentation: [
    {
      title: 'Backstage Official Documentation',
      url: 'https://backstage.io/docs/',
      description: 'Complete Backstage documentation - primary exam reference',
      isPaid: false,
    },
    {
      title: 'Backstage Software Catalog',
      url: 'https://backstage.io/docs/features/software-catalog/',
      description: 'Understanding the software catalog',
      isPaid: false,
    },
    {
      title: 'Backstage Plugins',
      url: 'https://backstage.io/docs/plugins/',
      description: 'Backstage plugin documentation',
      isPaid: false,
    },
    {
      title: 'Backstage Software Templates',
      url: 'https://backstage.io/docs/features/software-templates/',
      description: 'Creating and using software templates',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'Tips for Taking the Certified Backstage Associate (CBA) Exam',
      url: 'https://engineering.atspotify.com/2025/3/certified-backstage-associate-exam-tips',
      author: 'Spotify Engineering',
      description: 'Official CBA exam tips from Backstage creators',
      isPaid: false,
    },
    {
      title: 'Backstage Blog',
      url: 'https://backstage.io/blog/',
      author: 'Backstage',
      description: 'Official Backstage blog with release notes and tutorials',
      isPaid: false,
    },
    {
      title: 'Roadie Backstage Weekly',
      url: 'https://roadie.io/backstage-weekly/',
      author: 'Roadie',
      description: 'Weekly Backstage updates and best practices',
      isPaid: false,
    },
    {
      title: 'Platform Engineering Blog',
      url: 'https://platformengineering.org/blog',
      author: 'Platform Engineering Community',
      description: 'IDP and Backstage integration patterns',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'Backstage Discord',
      url: 'https://discord.gg/backstage-687207715902193673',
      description: 'Official Backstage Discord - most active community',
      isPaid: false,
    },
    {
      title: 'CNCF Slack - #backstage',
      url: 'https://slack.cncf.io/',
      description: 'CNCF Slack with Backstage channel',
      isPaid: false,
    },
    {
      title: 'Backstage GitHub Discussions',
      url: 'https://github.com/backstage/backstage/discussions',
      description: 'Backstage community discussions and Q&A',
      isPaid: false,
    },
    {
      title: 'PlatformCon Community',
      url: 'https://platformcon.com/',
      description: 'Platform engineering conference - IDP and Backstage content',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'Backstage CLI',
      url: 'https://backstage.io/docs/local-dev/cli-overview/',
      description: 'Backstage command-line interface',
      isPaid: false,
    },
    {
      title: 'Backstage Plugin Marketplace',
      url: 'https://backstage.io/plugins/',
      description: 'Browse and discover Backstage plugins',
      isPaid: false,
    },
    {
      title: 'Node.js',
      url: 'https://nodejs.org/',
      description: 'Required runtime for Backstage development',
      isPaid: false,
    },
  ],
};
