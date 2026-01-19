/**
 * Best Practices Types
 * Type definitions for the best practices data layer
 */

export type MainCategoryType =
  | 'infrastructure'
  | 'applications'
  | 'networking'
  | 'security'
  | 'observability'
  | 'cicd';

export type SubCategoryType =
  | 'containerization'
  | 'development'
  | 'accesscontrol'
  | 'networkpolicies'
  | 'observability'
  | 'storage'
  | 'gitops'
  | 'highavailability'
  | 'costoptimization'
  | 'servicemesh'
  | 'operations'
  | 'multitenancy'
  | 'stateful'
  | 'compliance'
  | 'devsecops';

export type Priority = 'critical' | 'important' | 'recommended';

export interface BestPracticeItem {
  id: string;
  titleKey: string;
  priority: Priority;
  whyItMattersKey?: string;
  commonMistakeKey?: string;
  codeExample?: string;
}

export interface BestPractice {
  id: string;
  titleKey: string;
  descKey: string;
  iconPath: string;
  color: string;
  bgColor: string;
  iconBg: string;
  items: BestPracticeItem[];
}

export interface MainCategoryConfig {
  id: MainCategoryType;
  labelKey: string;
  iconPath: string;
  color: string;
  subcategories: SubCategoryType[];
}

export interface TabConfig {
  id: SubCategoryType;
  labelKey: string;
  iconPath: string;
  practices: BestPractice[];
}

export interface PriorityConfig {
  labelKey: string;
  color: string;
  dot: string;
}
