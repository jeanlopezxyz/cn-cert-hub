/**
 * Study Guide Section Builder
 * Functions for building study sections from certification resources
 */

import type { Certification, StudyResource } from '@/types';
import type { StudyGuideSection } from '@/types/study-guide';
import type { LFCourse, TranslationFn } from './types';

const LINUX_FOUNDATION_AUTHOR = 'The Linux Foundation';
const LINUX_FOUNDATION_TRAINING_DOMAIN = 'training.linuxfoundation.org';

/**
 * Sort resources by paid status (free first)
 */
const sortByPaidStatus = <T extends { isPaid?: boolean }>(resources: T[]): T[] => {
  return [...resources].sort((a, b) => {
    const aIsPaid = a.isPaid ?? false;
    const bIsPaid = b.isPaid ?? false;
    return aIsPaid === bIsPaid ? 0 : aIsPaid ? 1 : -1;
  });
};

/**
 * Filter non-Linux Foundation courses
 */
const getNonLFCourses = (courses: StudyResource[]) => {
  return courses.filter(
    (course) =>
      course.author !== LINUX_FOUNDATION_AUTHOR &&
      !course.url.includes(LINUX_FOUNDATION_TRAINING_DOMAIN)
  );
};

/**
 * Extract repository name from GitHub URL
 */
const getRepoNameFromUrl = (url: string): string => {
  return url.split('/').slice(-2).join('/');
};

/**
 * Build Linux Foundation courses section
 */
const buildLFCoursesSection = (lfCourses: LFCourse[], t: TranslationFn): StudyGuideSection => ({
  id: 'lf-courses',
  title: t('certification.sections.linuxFoundation'),
  type: 'courses',
  tab: 'official',
  resources: lfCourses.map((course) => ({
    title: course.title,
    url: course.url,
    description: course.description,
    author: 'Linux Foundation',
    isPaid: false,
    difficulty: course.difficulty as StudyResource['difficulty'],
    duration: course.duration,
  })),
});

/**
 * Build documentation section
 */
const buildDocumentationSection = (
  certification: Certification,
  t: TranslationFn
): StudyGuideSection => ({
  id: 'documentation',
  title: t('certification.sections.documentation'),
  type: 'documentation',
  tab: 'official',
  resources: (certification.resources.documentation || []).map((doc) => ({
    title: doc.title || t('certification.resource.projectDocs'),
    url: doc.url,
    description: doc.description || t('certification.resource.projectDocsDesc'),
  })),
});

/**
 * Build third-party courses section
 */
const buildCoursesSection = (certification: Certification, t: TranslationFn): StudyGuideSection => {
  const otherCourses = getNonLFCourses(certification.resources.courses || []);

  return {
    id: 'courses',
    title: t('certification.sections.courses'),
    type: 'courses',
    tab: 'courses',
    resources: otherCourses.map((course) => ({
      title: course.title,
      url: course.url,
      description: course.description,
      author: course.author,
      isPaid: course.isPaid,
      difficulty: course.difficulty as StudyResource['difficulty'],
      duration: course.duration,
    })),
  };
};

/**
 * Build videos section
 */
const buildVideosSection = (certification: Certification, t: TranslationFn): StudyGuideSection => ({
  id: 'videos',
  title: t('certification.sections.videos'),
  type: 'videos',
  tab: 'courses',
  resources: (certification.resources.videos || []).map((video) => ({
    title: video.title,
    url: video.url,
    description: video.description,
    author: video.author,
    isPaid: video.isPaid,
  })),
});

/**
 * Build books section (sorted by year descending)
 */
const buildBooksSection = (certification: Certification, t: TranslationFn): StudyGuideSection => {
  const booksSortedByYear = [...(certification.resources.books || [])].sort(
    (a, b) => (b.year || 0) - (a.year || 0)
  );

  return {
    id: 'books',
    title: t('certification.sections.books'),
    type: 'books',
    tab: 'books',
    resources: booksSortedByYear.map((book) => ({
      title: book.year ? `${book.title} (${book.year})` : book.title,
      url: book.url,
      description: book.description,
      author: book.author,
      isPaid: book.isPaid,
    })),
  };
};

/**
 * Build practice/simulators section
 */
const buildPracticeSection = (
  certification: Certification,
  t: TranslationFn
): StudyGuideSection => ({
  id: 'simulators',
  title: t('certification.sections.practice'),
  type: 'practice',
  tab: 'labs',
  resources: (certification.resources.practice || []).map((practice) => ({
    title: practice.title as string,
    url: practice.url as string,
    description: practice.description as string | undefined,
    isPaid: practice.isPaid as boolean | undefined,
  })),
});

/**
 * Build GitHub repositories section
 */
const buildGitHubSection = (certification: Certification, t: TranslationFn): StudyGuideSection => ({
  id: 'github',
  title: t('certification.sections.github'),
  type: 'github',
  tab: 'labs',
  resources: certification.resources.github.map((url) => ({
    title: getRepoNameFromUrl(url),
    url,
    description: t('certification.resource.githubDesc'),
  })),
});

/**
 * Build tools section
 */
const buildToolsSection = (certification: Certification, t: TranslationFn): StudyGuideSection => ({
  id: 'tools',
  title: t('certification.sections.tools'),
  type: 'tools',
  tab: 'labs',
  resources: (certification.resources.tools || []).map((tool) => ({
    title: tool.title,
    url: tool.url,
    description: tool.description,
    isPaid: tool.isPaid,
  })),
});

/**
 * Build blogs section
 */
const buildBlogsSection = (certification: Certification, t: TranslationFn): StudyGuideSection => ({
  id: 'blogs',
  title: t('certification.sections.blogs'),
  type: 'blogs',
  tab: 'community',
  resources: (certification.resources.blogs || []).map((blog) => ({
    title: blog.title,
    url: blog.url,
    description: blog.description,
    author: blog.author,
    isPaid: blog.isPaid,
  })),
});

/**
 * Build communities section
 */
const buildCommunitiesSection = (
  certification: Certification,
  t: TranslationFn
): StudyGuideSection => ({
  id: 'communities',
  title: t('certification.sections.communities'),
  type: 'communities',
  tab: 'community',
  resources: (certification.resources.communities || []).map((community) => ({
    title: community.title,
    url: community.url,
    description: community.description,
  })),
});

/**
 * Build all study sections from certification resources
 */
export const buildStudySections = (
  certification: Certification,
  lfCourses: LFCourse[],
  t: TranslationFn
): StudyGuideSection[] => {
  const sections: StudyGuideSection[] = [
    buildLFCoursesSection(lfCourses, t),
    buildDocumentationSection(certification, t),
    buildCoursesSection(certification, t),
    buildVideosSection(certification, t),
    buildBooksSection(certification, t),
    buildPracticeSection(certification, t),
    buildGitHubSection(certification, t),
    buildToolsSection(certification, t),
    buildBlogsSection(certification, t),
    buildCommunitiesSection(certification, t),
  ];

  return sections
    .filter((section) => section.resources.length > 0)
    .map((section) => ({
      ...section,
      resources: sortByPaidStatus(section.resources),
    }));
};
