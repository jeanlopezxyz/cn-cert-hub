/**
 * Upcoming Certifications Data
 * Certifications that are announced but not yet available
 */

export interface UpcomingCertification {
  id: string;
  acronym: string;
  titleKey: string;
  descKey: string;
  status: 'announced' | 'development' | 'beta';
  expectedDate: string;
  officialUrl: string;
  announcementUrl?: string;
  highlights: string[];
}

export const UPCOMING_CERTIFICATIONS: UpcomingCertification[] = [
  {
    id: 'ckne',
    acronym: 'CKNE',
    titleKey: 'certifications.upcoming.ckne',
    descKey: 'certifications.upcoming.ckneDesc',
    status: 'development',
    expectedDate: '2026',
    officialUrl: 'https://www.cncf.io/training/certification/',
    announcementUrl:
      'https://www.cncf.io/announcements/2025/11/11/cncf-launches-cnpe-certification-to-define-enterprise-scale-platform-engineering-globally/',
    highlights: [
      'certifications.upcoming.ckneHighlight1',
      'certifications.upcoming.ckneHighlight2',
      'certifications.upcoming.ckneHighlight3',
    ],
  },
];
