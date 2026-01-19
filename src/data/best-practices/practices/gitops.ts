/**
 * Best Practices - Gitops
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const GITOPS_PRACTICES: TabConfig = {
  id: 'gitops',
  labelKey: 'bestPractices.tab.gitops',
  iconPath: COMMON_ICON_PATHS.CYCLE,
  practices: [
    {
      id: 'git-workflow',
      titleKey: 'bestPractices.gitops.workflow.title',
      descKey: 'bestPractices.gitops.workflow.desc',
      iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      ...COLOR_SCHEMES.OBSERVABILITY,
      items: [
        { id: 'gw-1', titleKey: 'bestPractices.gitops.workflow.item1', priority: 'critical' },
        {
          id: 'gw-2',
          titleKey: 'bestPractices.gitops.workflow.item2',
          priority: 'important',
          codeExample: `# ArgoCD Application
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/org/myapp-manifests
    targetRevision: HEAD
    path: overlays/production
  destination:
    server: https://kubernetes.default.svc
    namespace: myapp
  syncPolicy:
    automated:
      prune: true
      selfHeal: true`,
        },
        { id: 'gw-3', titleKey: 'bestPractices.gitops.workflow.item3', priority: 'important' },
        { id: 'gw-4', titleKey: 'bestPractices.gitops.workflow.item4', priority: 'recommended' },
      ],
    },
    {
      id: 'git-delivery',
      titleKey: 'bestPractices.gitops.delivery.title',
      descKey: 'bestPractices.gitops.delivery.desc',
      iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
      ...COLOR_SCHEMES.SECURITY,
      items: [
        { id: 'cd-1', titleKey: 'bestPractices.gitops.delivery.item1', priority: 'important' },
        {
          id: 'cd-2',
          titleKey: 'bestPractices.gitops.delivery.item2',
          priority: 'recommended',
          codeExample: `# Argo Rollouts Canary
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: myapp
spec:
  replicas: 5
  strategy:
    canary:
      steps:
        - setWeight: 20
        - pause: {duration: 5m}
        - setWeight: 50
        - pause: {duration: 5m}
        - setWeight: 80
        - pause: {duration: 5m}`,
        },
        { id: 'cd-3', titleKey: 'bestPractices.gitops.delivery.item3', priority: 'important' },
        { id: 'cd-4', titleKey: 'bestPractices.gitops.delivery.item4', priority: 'recommended' },
      ],
    },
  ],
};
