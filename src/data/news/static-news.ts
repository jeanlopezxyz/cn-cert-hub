/**
 * ============================================================================
 * STATIC NEWS - Manual News Entries
 * ============================================================================
 *
 * This file contains news items that are added manually.
 * These news items are ALWAYS displayed alongside RSS feeds.
 *
 * SIMPLE FORMAT TO ADD:
 *
 *   ['category', 'date', 'source', 'title', 'description', 'url'],
 *
 * AVAILABLE CATEGORIES:
 *   - scholarships   (Grants and funding)
 *   - certifications (Certifications and exams)
 *   - events         (Conferences and events)
 *   - announcements  (General announcements)
 *
 * EXAMPLE:
 *   ['scholarships', '2025-01-15', 'CNCF', 'Title here', 'Description...', 'https://...'],
 *
 * ============================================================================
 */

import type { NewsItem, NewsCategory } from './types';
import { generateHashId } from '@/utils/hash';

// ============================================================================
// ADD NEWS HERE (one per line)
// ============================================================================
const NEWS_DATA: Array<[NewsCategory, string, string, string, string, string]> = [
  // [category, date (with time to avoid timezone issues), source, title, description, url]

  // --- ANNOUNCEMENTS - Real blog news ---
  [
    'announcements',
    '2026-01-07T12:00:00',
    'CNCF',
    'Viettel Joins CNCF as Gold Member',
    "Viettel, Vietnam's largest telecommunications company, joins the Cloud Native Computing Foundation as a Gold Member to accelerate cloud native adoption.",
    'https://www.cncf.io/announcements/2026/01/07/viettel-joins-the-cloud-native-computing-foundation-as-a-gold-member/',
  ],

  [
    'announcements',
    '2026-01-07T10:00:00',
    'CNCF',
    'HolmesGPT: Agentic Troubleshooting for Cloud Native',
    'Introducing HolmesGPT, an AI-powered troubleshooting tool built specifically for the cloud native era, enabling faster incident resolution.',
    'https://www.cncf.io/blog/2026/01/07/holmesgpt-agentic-troubleshooting-built-for-the-cloud-native-era/',
  ],

  [
    'announcements',
    '2026-01-05T12:00:00',
    'CNCF',
    'Deploying Harbor on Kubernetes using Helm',
    'Learn how to deploy Harbor, the open source container registry, on Kubernetes using Helm charts for enterprise-grade container image management.',
    'https://www.cncf.io/blog/2026/01/05/deploying-harbor-on-kubernetes-using-helm/',
  ],

  [
    'announcements',
    '2025-12-29T12:00:00',
    'CNCF',
    'How to Integrate Kairos into an Edge AI Platform',
    'A deep dive into integrating Kairos architecturally into edge AI platforms for immutable, secure, and declarative edge computing.',
    'https://www.cncf.io/blog/2025/12/29/how-to-integrate-kairos-architecturally-into-an-edge-ai-platform/',
  ],

  [
    'announcements',
    '2026-01-06T12:00:00',
    'CNCF',
    'Using Istio to Manage High-Traffic Services',
    'Best practices for using Istio service mesh to manage high-traffic services, covering traffic management, load balancing, and resilience patterns.',
    'https://www.cncf.io/blog/2026/01/06/using-istio-to-manage-high-traffic-services/',
  ],

  // --- CERTIFICATIONS - Certification technology news ---
  [
    'certifications',
    '2026-01-02T12:00:00',
    'Kubernetes',
    'Kubernetes v1.35: In-Place Pod Restart',
    'New level of efficiency with in-place Pod restart feature in Kubernetes 1.35, allowing containers to restart without recreating the entire Pod.',
    'https://kubernetes.io/blog/2026/01/02/kubernetes-v1-35-restart-all-containers/',
  ],

  [
    'certifications',
    '2025-12-29T12:00:00',
    'Kubernetes',
    'Kubernetes v1.35: Workload Aware Scheduling',
    'Introducing Workload Aware Scheduling in Kubernetes 1.35, enabling smarter pod placement based on workload characteristics.',
    'https://kubernetes.io/blog/2025/12/29/kubernetes-v1-35-introducing-workload-aware-scheduling/',
  ],

  [
    'certifications',
    '2025-12-23T12:00:00',
    'Kubernetes',
    'Fine-grained Supplemental Groups Control Graduates to GA',
    'Kubernetes v1.35 graduates fine-grained supplemental groups control to GA, providing better security for containerized workloads.',
    'https://kubernetes.io/blog/2025/12/23/kubernetes-v1-35-fine-grained-supplementalgroups-control-ga/',
  ],

  [
    'certifications',
    '2025-12-22T12:00:00',
    'Kubernetes',
    'Kubelet Configuration Drop-in Directory Graduates to GA',
    'The Kubelet configuration drop-in directory feature graduates to GA in Kubernetes 1.35, simplifying node configuration management.',
    'https://kubernetes.io/blog/2025/12/22/kubernetes-v1-35-kubelet-config-drop-in-directory-ga/',
  ],

  // --- EVENTS ---
  [
    'events',
    '2025-12-15T12:00:00',
    'CNCF',
    'KubeCon + CloudNativeCon Europe 2025 - London',
    'Join the cloud native community in London for KubeCon + CloudNativeCon Europe 2025, April 1-4. Registration now open.',
    'https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/',
  ],

  [
    'events',
    '2025-12-20T12:00:00',
    'CNCF',
    'KubeCon + CloudNativeCon North America 2025 - Atlanta',
    'Save the date for KubeCon + CloudNativeCon North America 2025 in Atlanta. The premier cloud native conference returns.',
    'https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/',
  ],

  [
    'events',
    '2025-12-28T12:00:00',
    'CNCF',
    'Cloud Native Community Groups - Join Your Local Meetup',
    'Connect with cloud native enthusiasts worldwide through CNCF Community Groups hosting regular meetups and workshops.',
    'https://community.cncf.io/',
  ],

  // --- SCHOLARSHIPS ---
  [
    'scholarships',
    '2025-12-10T12:00:00',
    'CNCF',
    'Dan Kohn Scholarship Fund - KubeCon Europe 2025',
    'Apply for the Dan Kohn Scholarship Fund for complimentary registration and travel funding to KubeCon + CloudNativeCon Europe 2025.',
    'https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/attend/scholarships/',
  ],

  [
    'scholarships',
    '2025-12-12T12:00:00',
    'Linux Foundation',
    'Linux Foundation Training Scholarships 2026',
    'Need-based scholarships available for CKA, CKAD, CKS, and other cloud native certification exams. Applications now open.',
    'https://training.linuxfoundation.org/about/scholarship-program/',
  ],

  // === Weekly Update: 2026-01-12 to 2026-01-19 ===
  // FEATURED
  [
    'announcements',
    '2026-01-12T12:00:00',
    'CNCF',
    'A Decade of Open Source in CNCF with 300,000+ Contributors and Counting',
    'CNCF announces a milestone of over 300,000 contributors across its hosted projects, marking a decade of open source community growth.',
    'https://www.cncf.io/blog/2026/01/12/a-decade-of-open-source-in-cncf-with-300000-contributors-and-counting/',
  ],
  [
    'announcements',
    '2026-01-14T12:00:00',
    'CNCF',
    "Cloud Native Computing Foundation Announces Dragonfly's Graduation",
    'Dragonfly graduates as a CNCF project, demonstrating production readiness for powering container and AI workloads at scale.',
    'https://www.cncf.io/announcements/2026/01/14/cloud-native-computing-foundation-announces-dragonflys-graduation/',
  ],
  [
    'announcements',
    '2026-01-16T12:00:00',
    'CNCF',
    'CRI-O Completes Second OSTIF Audit',
    'CRI-O, a Kubernetes Container Runtime Interface implementation, completes its second security audit by the Open Source Technology Improvement Fund.',
    'https://www.cncf.io/blog/2026/01/16/cri-o-completes-second-ostif-audit/',
  ],
  [
    'events',
    '2026-01-15T12:00:00',
    'CNCF',
    'KubeCon + CloudNativeCon NA: Top Sessions from the CNCF End User TAB',
    'Highlights of key sessions from the CNCF End User Technical Advisory Board at KubeCon, focusing on AI and end user reports.',
    'https://www.cncf.io/blog/2026/01/15/kubecon-cloudnativecon-na-top-sessions-from-the-cncf-end-user-tab/',
  ],
  [
    'announcements',
    '2026-01-13T12:00:00',
    'CNCF',
    'The Symbiotic Revolution: AI and Cloud Native Technologies Transforming the Digital Landscape',
    'Analysis of the transformative convergence between AI and cloud native technologies, a strategic topic for the industry.',
    'https://www.cncf.io/blog/2026/01/13/the-symbiotic-revolution-ai-and-cloud-native-technologies-transforming-the-digital-landscape/',
  ],
  [
    'announcements',
    '2026-01-12T10:00:00',
    'CNCF',
    'OpenCost: Reflecting on 2025 and Looking Ahead to 2026',
    'Annual review of the OpenCost project, highlighting advancements in Kubernetes cost management and the roadmap for 2026.',
    'https://www.cncf.io/blog/2026/01/12/opencost-reflecting-on-2025-and-looking-ahead-to-2026/',
  ],
  // __NEWS_MARKER__ - Do not remove this line, automation inserts here
];

// ============================================================================
// DO NOT MODIFY BELOW THIS LINE
// ============================================================================

const SOURCE_URLS: Record<string, string> = {
  CNCF: 'https://www.cncf.io',
  'Linux Foundation': 'https://www.linuxfoundation.org',
  Kubernetes: 'https://kubernetes.io',
  KubeCon: 'https://events.linuxfoundation.org',
};

export function getStaticNews(): { items: NewsItem[]; sources: string[] } {
  const items: NewsItem[] = NEWS_DATA.map(([category, date, source, title, description, url]) => ({
    id: generateHashId(url, 'static'),
    title,
    description,
    url,
    publishedAt: new Date(date),
    source,
    sourceUrl: SOURCE_URLS[source] || 'https://www.cncf.io',
    category,
  }));

  const sources = [...new Set(NEWS_DATA.map(([, , source]) => source))];

  return { items, sources };
}
