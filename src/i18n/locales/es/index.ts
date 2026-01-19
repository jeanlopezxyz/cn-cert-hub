/**
 * ES translations - Combined export
 *
 * Each domain has its own file for easier contribution.
 * See individual files for translation guidelines.
 */

import { common } from './common';
import { certifications } from './certifications';
import { achievements } from './achievements';
import { quiz } from './quiz';
import { bestPractices } from './best-practices';
import { news } from './news';
import { docs } from './docs';
import { sidebar } from './sidebar';

export const es = {
  ...common,
  ...certifications,
  ...achievements,
  ...quiz,
  ...bestPractices,
  ...news,
  ...docs,
  ...sidebar,
} as const;
