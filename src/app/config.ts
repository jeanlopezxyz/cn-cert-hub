/**
 * Application Configuration
 * Core identity and external URLs
 */

// Supported languages
export const SUPPORTED_LANGUAGES = ['en', 'es', 'pt'] as const;

// App identity
export const APP_CONFIG = {
  name: 'Cloud Native Certification Resources Hub',
  shortName: 'CNCertHub',
  description: 'Study guides & exam prep',
  basePath: '',
  defaultLanguage: 'en',
  siteUrl: 'https://cncerthub.xyz',
} as const;

// External URLs
export const EXTERNAL_URLS = {
  github: 'https://github.com/jeanlopezxyz/cn-cert-hub',
  githubCNCF: 'https://github.com/cncf/curriculum',
  githubRepo: 'jeanlopezxyz/cn-cert-hub',
  kubernetes: {
    docs: 'https://kubernetes.io/docs/',
    slack: 'https://slack.k8s.io/',
    discussion: 'https://discuss.kubernetes.io/',
    reddit: 'https://www.reddit.com/r/kubernetes/',
  },
  learning: {
    killerSh: 'https://killer.sh',
    kodekloud: 'https://kodekloud.com',
    killercoda: 'https://killercoda.com',
    acloudGuru: 'https://learn.acloud.guru',
  },
  discounts: {
    linuxFoundationCoupons: 'https://github.com/techiescamp/linux-foundation-coupon',
  },
  cncf: {
    certifications: 'https://www.cncf.io/training/certification/',
    main: 'https://www.cncf.io/',
  },
  fonts: {
    googleapis: 'https://fonts.googleapis.com',
    gstatic: 'https://fonts.gstatic.com',
    googleFontsCss:
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Space+Grotesk:wght@300..700&display=swap',
  },
} as const;
