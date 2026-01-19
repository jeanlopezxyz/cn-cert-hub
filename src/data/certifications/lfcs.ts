import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { LFCS_QUESTIONS } from '@/data/questions/lfcs';
import { LFCS_RESOURCES } from '@/data/resources/lfcs';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  KUBERNETES_VERSIONS,
  PREREQUISITES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const LFCS: Certification = {
  id: 'lfcs',
  acronym: 'LFCS',
  name: 'Linux Foundation Certified System Administrator',
  description: 'Essential Linux system administration skills',
  level: 'intermediate',
  type: 'performance',
  duration: 120,
  price: 395,
  requiredFor: ['Golden Kubestronaut'],
  color: CERTIFICATION_GRADIENTS.linux,
  kubernetesVersion: KUBERNETES_VERSIONS.NOT_APPLICABLE,
  examAttempts: CERTIFICATION_DEFAULTS.EXAM_ATTEMPTS,
  simulatorProvider: SIMULATOR_PROVIDERS.KILLER_SH,
  simulatorAccess: SIMULATOR_ACCESS.KILLER_SH_STANDARD,
  examFormat: EXAM_FORMATS.PERFORMANCE_BASED,
  retakePolicy:
    'LFCS exam fees cover two attempts. If additional attempts are needed, candidates must repurchase the exam.',
  prerequisites: PREREQUISITES.NONE,
  domains: [
    {
      name: 'Essential Commands',
      weight: 25,
      documentationUrl: 'https://www.gnu.org/software/coreutils/manual/coreutils.html',
      topics: [
        {
          name: 'Log into local & remote graphical and text mode consoles',
          url: 'https://man7.org/linux/man-pages/man1/ssh.1.html',
        },
        { name: 'Search for files', url: 'https://man7.org/linux/man-pages/man1/find.1.html' },
        {
          name: 'Evaluate and compare the basic file system features and options',
          url: 'https://man7.org/linux/man-pages/man5/fstab.5.html',
        },
        {
          name: 'Compare and manipulate file content',
          url: 'https://man7.org/linux/man-pages/man1/diff.1.html',
        },
        {
          name: 'Use input-output redirection',
          url: 'https://www.gnu.org/software/bash/manual/html_node/Redirections.html',
        },
      ],
    },
    {
      name: 'Operation of Running Systems',
      weight: 20,
      documentationUrl: 'https://www.freedesktop.org/software/systemd/man/latest/',
      topics: [
        {
          name: 'Boot, reboot, and shut down a system safely',
          url: 'https://www.freedesktop.org/software/systemd/man/latest/systemctl.html',
        },
        {
          name: 'Boot or change system into different operating modes',
          url: 'https://www.freedesktop.org/software/systemd/man/latest/systemd.target.html',
        },
        {
          name: 'Install, configure and troubleshoot bootloaders',
          url: 'https://www.gnu.org/software/grub/manual/grub/grub.html',
        },
        {
          name: 'Diagnose and manage processes',
          url: 'https://man7.org/linux/man-pages/man1/ps.1.html',
        },
        {
          name: 'Locate and analyze system log files',
          url: 'https://www.freedesktop.org/software/systemd/man/latest/journalctl.html',
        },
      ],
    },
    {
      name: 'User and Group Management',
      weight: 10,
      documentationUrl: 'https://man7.org/linux/man-pages/man5/passwd.5.html',
      topics: [
        {
          name: 'Create, delete, and modify local user accounts',
          url: 'https://man7.org/linux/man-pages/man8/useradd.8.html',
        },
        {
          name: 'Create, delete, and modify local groups and group memberships',
          url: 'https://man7.org/linux/man-pages/man8/groupadd.8.html',
        },
        {
          name: 'Manage system-wide environment profiles',
          url: 'https://man7.org/linux/man-pages/man5/profile.5.html',
        },
        {
          name: 'Manage template user environment',
          url: 'https://man7.org/linux/man-pages/man8/useradd.8.html',
        },
        {
          name: 'Configure user resource limits',
          url: 'https://man7.org/linux/man-pages/man5/limits.conf.5.html',
        },
      ],
    },
    {
      name: 'Networking',
      weight: 12,
      documentationUrl:
        'https://www.freedesktop.org/software/systemd/man/latest/systemd-networkd.html',
      topics: [
        {
          name: 'Configure networking and hostname resolution statically or dynamically',
          url: 'https://man7.org/linux/man-pages/man8/ip.8.html',
        },
        {
          name: 'Configure network services to start automatically at boot',
          url: 'https://www.freedesktop.org/software/systemd/man/latest/systemctl.html',
        },
        {
          name: 'Implement packet filtering',
          url: 'https://man7.org/linux/man-pages/man8/nft.8.html',
        },
        {
          name: 'Start, stop, and check the status of network services',
          url: 'https://www.freedesktop.org/software/systemd/man/latest/systemctl.html',
        },
        {
          name: 'Statically route IP traffic',
          url: 'https://man7.org/linux/man-pages/man8/ip-route.8.html',
        },
      ],
    },
    {
      name: 'Service Configuration',
      weight: 20,
      documentationUrl:
        'https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html',
      topics: [
        { name: 'Configure a caching DNS server', url: 'https://bind9.readthedocs.io/en/latest/' },
        {
          name: 'Maintain a DNS zone',
          url: 'https://bind9.readthedocs.io/en/latest/chapter3.html',
        },
        {
          name: 'Configure email aliases',
          url: 'https://man7.org/linux/man-pages/man5/aliases.5.html',
        },
        {
          name: 'Configure SSH servers and clients',
          url: 'https://man7.org/linux/man-pages/man5/sshd_config.5.html',
        },
        {
          name: 'Restrict access to the HTTP proxy server',
          url: 'https://www.squid-cache.org/Doc/',
        },
      ],
    },
    {
      name: 'Storage Management',
      weight: 13,
      documentationUrl: 'https://man7.org/linux/man-pages/man8/lvm.8.html',
      topics: [
        {
          name: 'List, create, delete, and modify physical storage partitions',
          url: 'https://man7.org/linux/man-pages/man8/fdisk.8.html',
        },
        {
          name: 'Manage and configure LVM storage',
          url: 'https://man7.org/linux/man-pages/man8/lvm.8.html',
        },
        {
          name: 'Create and configure encrypted storage',
          url: 'https://man7.org/linux/man-pages/man8/cryptsetup.8.html',
        },
        {
          name: 'Configure systems to mount file systems at or during boot',
          url: 'https://man7.org/linux/man-pages/man5/fstab.5.html',
        },
        {
          name: 'Configure and manage swap space',
          url: 'https://man7.org/linux/man-pages/man8/mkswap.8.html',
        },
      ],
    },
  ],
  resources: LFCS_RESOURCES,
  questions: LFCS_QUESTIONS,
  studyTimeWeeks: 8,
  passingScore: 66,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};
