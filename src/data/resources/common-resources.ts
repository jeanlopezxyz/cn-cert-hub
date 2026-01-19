/**
 * Common Resource Factories
 *
 * Factory functions for creating standardized study resources
 * that are shared across multiple certifications.
 *
 * This eliminates code duplication and ensures consistency
 * across resource definitions.
 */

import type {
  PracticeResource,
  StudyResource,
  BookResource,
  VideoResource,
  CourseResource,
} from '@/types';

// ============================================================================
// Practice Resource Factories
// ============================================================================

/**
 * Creates a Killer.sh simulator resource
 * Included with exam registration for CKA, CKAD, and CKS
 *
 * @param certAcronym - Certification acronym (e.g., 'CKA', 'CKAD')
 * @param difficulty - Resource difficulty level
 */
export const createKillerShResource = (
  certAcronym: string,
  difficulty: 'beginner' | 'entry' | 'intermediate' | 'advanced' | 'professional' = 'intermediate'
): PracticeResource => ({
  title: `Killer.sh ${certAcronym} Simulator`,
  url: 'https://killer.sh/',
  description: `Official ${certAcronym} exam simulator included with exam registration`,
  isPaid: true,
  isOfficial: true,
  type: 'simulator',
  difficulty,
});

/**
 * Creates a Killercoda practice scenario resource
 * Free browser-based practice environments
 *
 * @param certAcronym - Certification acronym (e.g., 'CKA', 'CKAD')
 * @param difficulty - Resource difficulty level
 */
export const createKillercodaResource = (
  certAcronym: string,
  difficulty: 'beginner' | 'entry' | 'intermediate' | 'advanced' | 'professional' = 'intermediate'
): PracticeResource => ({
  title: `Killercoda ${certAcronym} Scenarios`,
  url: `https://killercoda.com/killer-shell-${certAcronym.toLowerCase()}`,
  description: `Free browser-based ${certAcronym} practice scenarios`,
  isPaid: false,
  type: 'scenario',
  difficulty,
});

/**
 * Creates a Killercoda playground resource
 * Generic playground without certification-specific scenarios
 *
 * @param difficulty - Resource difficulty level
 */
export const createKillercodaPlaygroundResource = (
  difficulty: 'beginner' | 'entry' | 'intermediate' | 'advanced' | 'professional' = 'beginner'
): PracticeResource => ({
  title: 'Killercoda - Kubernetes Playground',
  url: 'https://killercoda.com/playgrounds/scenario/kubernetes',
  description: 'Free browser-based Kubernetes environment for practice',
  isPaid: false,
  type: 'playground',
  difficulty,
});

/**
 * Creates a KodeKloud labs resource
 * Interactive practice labs with hands-on exercises
 *
 * @param certAcronym - Certification acronym (e.g., 'CKA', 'CKAD')
 * @param courseSlug - KodeKloud course URL slug
 * @param difficulty - Resource difficulty level
 * @param customDescription - Optional custom description
 */
export const createKodeKloudLabsResource = (
  certAcronym: string,
  courseSlug: string,
  difficulty: 'beginner' | 'entry' | 'intermediate' | 'advanced' | 'professional' = 'intermediate',
  customDescription?: string
): PracticeResource => ({
  title: `KodeKloud ${certAcronym} Labs`,
  url: `https://kodekloud.com/courses/${courseSlug}/`,
  description:
    customDescription || `Interactive ${certAcronym} practice labs with hands-on exercises`,
  isPaid: true,
  type: 'lab',
  difficulty,
});

// ============================================================================
// Book Resource Factories
// ============================================================================

/**
 * Creates "Kubernetes: Up and Running, 3rd Edition" book resource
 * Common resource across multiple certifications
 *
 * @param difficulty - Resource difficulty level
 * @param customDescription - Optional custom description
 */
export const createKubernetesUpAndRunningResource = (
  difficulty: 'beginner' | 'entry' | 'intermediate' | 'advanced' | 'professional' = 'intermediate',
  customDescription?: string
): BookResource => ({
  title: 'Kubernetes: Up and Running, 3rd Edition',
  url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/',
  author: 'Brendan Burns, Joe Beda, Kelsey Hightower, Lachlan Evenson',
  description:
    customDescription || 'Comprehensive guide to deploying and managing Kubernetes clusters',
  isPaid: true,
  difficulty,
  format: 'paperback',
  year: 2022,
});

/**
 * Creates "The Kubernetes Book - 2025 Edition" resource
 *
 * @param difficulty - Resource difficulty level
 */
export const createTheKubernetesBookResource = (
  difficulty: 'beginner' | 'entry' | 'intermediate' | 'advanced' | 'professional' = 'beginner'
): BookResource => ({
  title: 'The Kubernetes Book - 2025 Edition',
  url: 'https://leanpub.com/thekubernetesbook',
  author: 'Nigel Poulton',
  description: 'Clear and simple explanation of Kubernetes concepts with hands-on examples',
  isPaid: true,
  difficulty,
  format: 'pdf',
  year: 2025,
});

/**
 * Creates "Container Security, 2nd Edition" resource
 *
 * @param difficulty - Resource difficulty level
 */
export const createContainerSecurityResource = (
  difficulty: 'beginner' | 'entry' | 'intermediate' | 'advanced' | 'professional' = 'intermediate'
): BookResource => ({
  title: 'Container Security, 2nd Edition',
  url: 'https://www.oreilly.com/library/view/container-security-2nd/9798341627697/',
  author: 'Liz Rice',
  description: 'Fundamental technology concepts for securing containers',
  isPaid: true,
  difficulty,
  format: 'paperback',
  year: 2025,
});

// ============================================================================
// Video/Course Resource Factories
// ============================================================================

/**
 * Creates "Docker for Beginners" video resource from KodeKloud
 *
 * @param customDescription - Optional custom description
 */
export const createDockerForBeginnersResource = (customDescription?: string): VideoResource => ({
  title: 'Docker for Beginners',
  url: 'https://kodekloud.com/courses/docker-for-the-absolute-beginner/',
  author: 'KodeKloud',
  description: customDescription || 'Container fundamentals before diving into Kubernetes',
  isPaid: true,
  duration: '4 hours',
  difficulty: 'beginner',
});

/**
 * Creates "Kubernetes for Beginners" video resource from KodeKloud
 *
 * @param customDescription - Optional custom description
 */
export const createKubernetesForBeginnersResource = (
  customDescription?: string
): VideoResource => ({
  title: 'Kubernetes for Beginners',
  url: 'https://kodekloud.com/courses/kubernetes-for-the-absolute-beginners-hands-on/',
  author: 'KodeKloud',
  description: customDescription || 'Kubernetes basics before CKA - hands-on labs included',
  isPaid: true,
  duration: '6 hours',
  difficulty: 'beginner',
});

/**
 * Creates "Introduction to Kubernetes (LFS158)" course resource
 *
 * @param customDescription - Optional custom description
 */
export const createIntroToKubernetesLFS158Resource = (
  customDescription?: string
): CourseResource => ({
  title: 'Introduction to Kubernetes (LFS158)',
  url: 'https://training.linuxfoundation.org/training/introduction-to-kubernetes/',
  author: 'The Linux Foundation',
  description:
    customDescription ||
    'Free introduction to Kubernetes - in-depth primer on containerized applications',
  isPaid: false,
  duration: '15-20 hours',
  difficulty: 'beginner',
});

// ============================================================================
// Documentation Resource Factories
// ============================================================================

/**
 * Creates Kubernetes Official Documentation resource
 *
 * @param customDescription - Optional custom description
 */
export const createKubernetesDocsResource = (customDescription?: string): StudyResource => ({
  title: 'Kubernetes Official Documentation',
  url: 'https://kubernetes.io/docs/',
  description:
    customDescription || 'Official Kubernetes documentation - your primary exam reference',
  isPaid: false,
});

/**
 * Creates kubectl Cheat Sheet resource
 *
 * @param customDescription - Optional custom description
 */
export const createKubectlCheatSheetResource = (customDescription?: string): StudyResource => ({
  title: 'kubectl Cheat Sheet',
  url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/',
  description: customDescription || 'Essential kubectl commands - bookmarkable during exam',
  isPaid: false,
});

/**
 * Creates Kubernetes Tasks documentation resource
 *
 * @param customDescription - Optional custom description
 */
export const createKubernetesTasksResource = (customDescription?: string): StudyResource => ({
  title: 'Kubernetes Tasks',
  url: 'https://kubernetes.io/docs/tasks/',
  description: customDescription || 'Step-by-step guides for common Kubernetes operations',
  isPaid: false,
});

/**
 * Creates Kubernetes Concepts documentation resource
 */
export const createKubernetesConceptsResource = (): StudyResource => ({
  title: 'Kubernetes Concepts',
  url: 'https://kubernetes.io/docs/concepts/',
  description: 'Core Kubernetes concepts and architecture',
  isPaid: false,
});

// ============================================================================
// Community Resource Factories
// ============================================================================

/**
 * Creates Kubernetes Slack resource with exam prep channel
 *
 * @param certAcronym - Certification acronym in lowercase (e.g., 'cka', 'ckad')
 */
export const createKubernetesSlackResource = (certAcronym: string): StudyResource => ({
  title: `Kubernetes Slack - #${certAcronym}-exam-prep`,
  url: 'https://slack.k8s.io/',
  description: `Official Kubernetes Slack with dedicated ${certAcronym.toUpperCase()} exam channel`,
  isPaid: false,
});

/**
 * Creates Kubernetes Forum resource
 *
 * @param customDescription - Optional custom description
 */
export const createKubernetesForumResource = (customDescription?: string): StudyResource => ({
  title: 'Kubernetes Forum',
  url: 'https://discuss.kubernetes.io/',
  description: customDescription || 'Official Kubernetes discussion forum',
  isPaid: false,
});

/**
 * Creates r/kubernetes Reddit resource
 *
 * @param certAcronym - Certification acronym (e.g., 'CKA', 'CKAD')
 */
export const createKubernetesRedditResource = (certAcronym: string): StudyResource => ({
  title: 'r/kubernetes Reddit',
  url: 'https://www.reddit.com/r/kubernetes/',
  description: `Active Reddit community with ${certAcronym} exam discussions`,
  isPaid: false,
});

/**
 * Creates KodeKloud Community resource
 *
 * @param certAcronym - Certification acronym (e.g., 'CKA', 'CKAD')
 */
export const createKodeKloudCommunityResource = (certAcronym: string): StudyResource => ({
  title: 'KodeKloud Community',
  url: 'https://kodekloud.com/community/',
  description: `Student community for ${certAcronym} preparation and peer support`,
  isPaid: false,
});

// ============================================================================
// Tool Resource Factories
// ============================================================================

/**
 * Creates Minikube tool resource
 *
 * @param customDescription - Optional custom description
 */
export const createMinikubeResource = (customDescription?: string): StudyResource => ({
  title: 'Minikube',
  url: 'https://minikube.sigs.k8s.io/',
  description: customDescription || 'Local Kubernetes cluster for practice',
  isPaid: false,
});

/**
 * Creates Kind tool resource
 */
export const createKindResource = (): StudyResource => ({
  title: 'Kind (Kubernetes in Docker)',
  url: 'https://kind.sigs.k8s.io/',
  description: 'Run multi-node Kubernetes clusters locally',
  isPaid: false,
});

/**
 * Creates K9s tool resource
 */
export const createK9sResource = (): StudyResource => ({
  title: 'K9s',
  url: 'https://k9scli.io/',
  description: 'Terminal UI for Kubernetes cluster management',
  isPaid: false,
});
