/**
 * Quiz Share Utilities
 * Social sharing and result export functions
 */

import type { QuizScore } from '@/types/quiz';
import type { Language } from '@/types/common';
import { APP_CONFIG } from '@/app';
import { hasNavigator } from '../browser';

/**
 * Generate share text for quiz results
 */
export const generateShareText = (
  score: QuizScore,
  certificationId: string,
  lang: Language,
  baseUrl: string = APP_CONFIG.siteUrl
): string => {
  const status = score.passed ? 'PASSED' : 'FAILED';
  const certId = certificationId.toUpperCase();
  const langPath = lang === 'en' ? '' : `/${lang}`;

  return `${status} - I scored ${score.score}% (${score.correct}/${score.total}) on the ${certId} Practice Quiz!

Test your knowledge: ${baseUrl}${langPath}/certifications/${certificationId}`;
};

/**
 * Check if browser supports file sharing
 */
export const canShareFiles = (): boolean => {
  if (!hasNavigator()) return false;
  if (!navigator.share || !navigator.canShare) return false;
  try {
    const testFile = new File(['test'], 'test.png', { type: 'image/png' });
    return navigator.canShare({ files: [testFile] });
  } catch {
    return false;
  }
};

/**
 * Generate result image using html2canvas
 */
export const generateResultImage = async (element: HTMLElement): Promise<Blob | null> => {
  try {
    const html2canvas = (await import('html2canvas')).default;

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      useCORS: true,
    });

    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png', 1.0);
    });
  } catch {
    return null;
  }
};

/**
 * Download image blob as file
 */
export const downloadImage = (blob: Blob, filename: string): void => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Social share URLs
 */
export const SOCIAL_SHARE_URLS = {
  whatsapp: (text: string): string => `https://wa.me/?text=${encodeURIComponent(text)}`,

  twitter: (text: string): string =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,

  linkedin: (url: string): string =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
};

/**
 * Open social share in new window
 */
export const openSocialShare = (
  platform: 'whatsapp' | 'twitter' | 'linkedin',
  textOrUrl: string
): void => {
  const url = SOCIAL_SHARE_URLS[platform](textOrUrl);
  window.open(url, '_blank');
};
