/**
 * LFCS - Linux Foundation Certified System Administrator
 * Study Resources - Updated December 2024
 */

import type { CertificationResources } from '@/types';
import { createKillerShResource, createKodeKloudLabsResource } from './common-resources';

export const LFCS_RESOURCES: CertificationResources = {
  official:
    'https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/',
  github: [
    'https://github.com/giulianopz/lfcs',
    'https://github.com/Bes0n/LFCS',
    'https://github.com/kodekloudhub/linux-basics-course',
  ],
  practice: [
    createKillerShResource('LFCS', 'intermediate'),
    createKodeKloudLabsResource(
      'LFCS',
      'linux-foundation-certified-system-administrator-lfcs',
      'intermediate'
    ),
  ],

  books: [
    {
      title: 'How Linux Works, 3rd Edition',
      url: 'https://nostarch.com/howlinuxworks3',
      author: 'Brian Ward',
      description: 'Essential Linux internals - recommended for LFCS',
      isPaid: true,
      format: 'paperback',
      year: 2021,
      difficulty: 'intermediate',
    },
    {
      title: 'Linux Bible, 11th Edition',
      url: 'https://www.wiley.com/en-us/Linux+Bible,+11th+Edition-p-9781394317462',
      author: 'Christopher Negus',
      description:
        'Comprehensive Linux administration guide - covers Ubuntu 24 LTS, Fedora 41, RHEL 9',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'beginner',
    },
    {
      title: 'Efficient Linux at the Command Line',
      url: 'https://www.oreilly.com/library/view/efficient-linux-at/9781098113391/',
      author: 'Daniel J. Barrett',
      description: 'Boost your command-line skills with practical techniques',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'intermediate',
    },
    {
      title: 'Linux Pocket Guide, 4th Edition',
      url: 'https://www.oreilly.com/library/view/linux-pocket-guide/9781098157951/',
      author: 'Daniel J. Barrett',
      description: 'Quick reference for 200+ Linux commands - 20th anniversary edition',
      isPaid: true,
      format: 'paperback',
      year: 2024,
      difficulty: 'beginner',
    },
  ],

  courses: [
    {
      title: 'Linux System Administration Essentials (LFS207)',
      url: 'https://training.linuxfoundation.org/training/linux-system-administration-essentials-lfs207/',
      author: 'The Linux Foundation',
      description: 'Official LFCS preparation course',
      isPaid: true,
      duration: '40 hours',
      difficulty: 'intermediate',
      rating: 4.8,
    },
    {
      title: 'LFCS Certification Course',
      url: 'https://kodekloud.com/courses/linux-foundation-certified-system-administrator-lfcs/',
      author: 'KodeKloud',
      description: 'Complete LFCS preparation with hands-on labs',
      isPaid: true,
      duration: '25 hours',
      difficulty: 'intermediate',
      rating: 4.9,
    },
    {
      title: 'Introduction to Linux (LFS101)',
      url: 'https://training.linuxfoundation.org/training/introduction-to-linux/',
      author: 'The Linux Foundation',
      description: 'Develop a good working knowledge of Linux using both GUI and command line',
      isPaid: false,
      duration: '40-60 hours',
      difficulty: 'beginner',
      rating: 4.8,
    },
    {
      title: 'Linux System Administration Essentials (LFS207)',
      url: 'https://training.linuxfoundation.org/training/linux-system-administration-essentials-lfs207/',
      author: 'The Linux Foundation',
      description: 'Comprehensive Linux administration course (50-60 hours)',
      isPaid: true,
      duration: '50-60 hours',
      difficulty: 'intermediate',
      rating: 4.7,
    },
    {
      title: 'Linux Administration Bootcamp',
      url: 'https://www.udemy.com/course/linux-administration-bootcamp/',
      author: 'Jason Cannon',
      description: 'Linux administration fundamentals',
      isPaid: true,
      duration: '18 hours',
      difficulty: 'beginner',
      rating: 4.6,
    },
  ],

  videos: [
    {
      title: 'Linux Basics for Beginners',
      url: 'https://kodekloud.com/courses/the-linux-basics-course/',
      author: 'KodeKloud',
      description: 'Linux fundamentals with hands-on labs - essential for LFCS',
      isPaid: true,
      duration: '5 hours',
      difficulty: 'beginner',
    },
    {
      title: 'Shell Scripts for Beginners',
      url: 'https://kodekloud.com/courses/shell-scripts-for-beginners/',
      author: 'KodeKloud',
      description: 'Learn shell scripting - essential for LFCS',
      isPaid: true,
      duration: '3 hours',
      difficulty: 'beginner',
    },
    {
      title: 'Linux for Beginners 2025',
      url: 'https://www.youtube.com/watch?v=sWbUDq4S6Y8',
      author: 'freeCodeCamp',
      description: 'Complete Linux course for beginners',
      isPaid: false,
      duration: '5 hours',
      difficulty: 'beginner',
    },
    {
      title: 'Linux System Administration 2025',
      url: 'https://www.youtube.com/watch?v=wBp0Rb-ZJak',
      author: 'TechWorld with Nana',
      description: 'Linux sysadmin fundamentals',
      isPaid: false,
      duration: '2 hours',
      difficulty: 'intermediate',
    },
    {
      title: 'LFCS Exam Preparation 2025',
      url: 'https://www.youtube.com/watch?v=kQNXKhxJx0E',
      author: 'Learn Linux TV',
      description: 'LFCS exam tips and preparation',
      isPaid: false,
      duration: '1.5 hours',
      difficulty: 'intermediate',
    },
  ],

  documentation: [
    {
      title: 'Linux Man Pages',
      url: 'https://man7.org/linux/man-pages/',
      description: 'Linux manual pages - essential reference',
      isPaid: false,
    },
    {
      title: 'LFCS Exam Domains',
      url: 'https://training.linuxfoundation.org/certification/linux-foundation-certified-sysadmin-lfcs/',
      description: 'Official LFCS exam domains and objectives',
      isPaid: false,
    },
    {
      title: 'Red Hat Documentation',
      url: 'https://docs.redhat.com/documentation/en-us/red_hat_enterprise_linux/',
      description: 'RHEL documentation (applicable to CentOS/Rocky)',
      isPaid: false,
    },
    {
      title: 'Ubuntu Documentation',
      url: 'https://help.ubuntu.com/',
      description: 'Ubuntu server documentation',
      isPaid: false,
    },
  ],

  blogs: [
    {
      title: 'Linux Foundation LFCS Blog',
      url: 'https://training.linuxfoundation.org/blog/',
      author: 'Linux Foundation',
      description: 'Official Linux Foundation blog with LFCS exam tips',
      isPaid: false,
    },
    {
      title: 'Linux Foundation Training Blog',
      url: 'https://training.linuxfoundation.org/blog/',
      author: 'Linux Foundation',
      description: 'Official Linux Foundation certification news and tips',
      isPaid: false,
    },
    {
      title: 'Linux Upskill Challenge',
      url: 'https://linuxupskillchallenge.org/',
      author: 'Linux Upskill Challenge',
      description: 'Free 20-lesson course to become a Linux sysadmin',
      isPaid: false,
    },
    {
      title: 'Linux Handbook',
      url: 'https://linuxhandbook.com/',
      author: 'Linux Handbook',
      description: 'Linux tutorials and command references',
      isPaid: false,
    },
  ],

  communities: [
    {
      title: 'r/linuxadmin Reddit',
      url: 'https://www.reddit.com/r/linuxadmin/',
      description: 'Linux administration community - LFCS discussions',
      isPaid: false,
    },
    {
      title: 'Unix & Linux Stack Exchange',
      url: 'https://unix.stackexchange.com/',
      description: 'Q&A for Unix and Linux - great for troubleshooting',
      isPaid: false,
    },
    {
      title: 'Linux Questions',
      url: 'https://www.linuxquestions.org/',
      description: 'Linux community forum since 2000',
      isPaid: false,
    },
    {
      title: 'Server Fault',
      url: 'https://serverfault.com/',
      description: 'Q&A for system administrators',
      isPaid: false,
    },
  ],

  tools: [
    {
      title: 'VirtualBox',
      url: 'https://www.virtualbox.org/',
      description: 'Virtual machine for Linux practice',
      isPaid: false,
    },
    {
      title: 'Vagrant',
      url: 'https://developer.hashicorp.com/vagrant',
      description: 'Development environments',
      isPaid: false,
    },
    {
      title: 'WSL (Windows Subsystem for Linux)',
      url: 'https://learn.microsoft.com/en-us/windows/wsl/',
      description: 'Linux on Windows for practice',
      isPaid: false,
    },
  ],
};
