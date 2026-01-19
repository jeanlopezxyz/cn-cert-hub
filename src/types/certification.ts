/**
 * Certification domain types
 * Types related to certifications, exams, and resources
 */

import type { CertificationLevel, ExamType } from './common';
import type { Question } from './quiz';

/**
 * Individual exam topic with optional documentation link
 */
export interface ExamTopic {
  name: string;
  url?: string;
}

/**
 * Represents an exam domain with topics and weight
 */
export interface ExamDomain {
  name: string;
  weight: number;
  topics: (string | ExamTopic)[];
  documentationUrl?: string;
}

/**
 * Base study resource
 */
export interface StudyResource {
  title: string;
  url: string;
  description?: string;
  type?: 'official' | 'community' | 'practice' | 'documentation';
  isPaid?: boolean;
  author?: string;
  difficulty?: 'beginner' | 'entry' | 'intermediate' | 'advanced' | 'professional';
  duration?: string;
  [key: string]: unknown;
}

/**
 * Book resource
 */
export interface BookResource extends StudyResource {
  author: string;
  format?: 'pdf' | 'paperback' | 'ebook';
  year?: number;
}

/**
 * Course resource
 */
export interface CourseResource extends StudyResource {
  author: string;
  rating?: number;
}

/**
 * Video resource
 */
export interface VideoResource extends StudyResource {
  author: string;
}

/**
 * Blog resource
 */
export interface BlogResource extends StudyResource {
  author: string;
}

/**
 * Documentation resource
 */
export type DocumentationResource = StudyResource;

/**
 * Community resource
 */
export type CommunityResource = StudyResource;

/**
 * Tool resource
 */
export type ToolResource = StudyResource;

/**
 * Practice/Simulator resource
 */
export interface PracticeResource extends Omit<StudyResource, 'type'> {
  isOfficial?: boolean;
  type?: 'simulator' | 'scenario' | 'lab' | 'playground';
}

/**
 * Study resources for a certification
 */
export interface CertificationResources {
  official: string;
  github: string[];
  practice: PracticeResource[];
  books?: BookResource[];
  courses?: CourseResource[];
  videos?: VideoResource[];
  blogs?: BlogResource[];
  documentation?: DocumentationResource[];
  communities?: CommunityResource[];
  tools?: ToolResource[];
}

/**
 * Complete certification model
 */
export interface Certification {
  id: string;
  acronym: string;
  name: string;
  description: string;
  level: CertificationLevel;
  type: ExamType;
  duration: number;
  price: number;
  requiredFor?: string[];
  prerequisite?: string;
  prerequisites?: string;
  domains: ExamDomain[];
  resources: CertificationResources;
  questions?: Question[];
  icon?: string;
  color: string;
  kubernetesVersion?: string;
  examAttempts?: number;
  simulatorProvider?: string;
  simulatorAccess?: string;
  examFormat?: string;
  retakePolicy?: string;
  studyTimeWeeks?: number;
  passingScore?: number;
  validity?: number;
  isNew?: boolean;
}

/**
 * Achievement types in the certification journey
 */
export interface Achievement {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  icon?: string;
  level: 'bronze' | 'silver' | 'gold';
}

/**
 * Study section with resources
 */
export interface StudySection {
  id: string;
  title: string;
  type:
    | 'github'
    | 'official'
    | 'books'
    | 'courses'
    | 'videos'
    | 'practice'
    | 'blogs'
    | 'documentation'
    | 'tools'
    | 'communities';
  resources: StudyResource[];
}
