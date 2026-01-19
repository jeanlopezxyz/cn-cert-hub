/**
 * Best Practices - Multitenancy
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const MULTI_TENANCY_PRACTICES: TabConfig = {
  id: 'multitenancy',
  labelKey: 'bestPractices.tab.multitenancy',
  iconPath: COMMON_ICON_PATHS.USERS,
  practices: [
    {
      id: 'tenant-isolation',
      titleKey: 'bestPractices.tenant.isolation.title',
      descKey: 'bestPractices.tenant.isolation.desc',
      iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
      ...COLOR_SCHEMES.RELIABILITY,
      items: [
        {
          id: 'tenant-1',
          titleKey: 'bestPractices.tenant.isolation.item1',
          priority: 'critical',
          codeExample: `# Create isolated namespace per tenant
apiVersion: v1
kind: Namespace
metadata:
  name: tenant-alpha
  labels:
    tenant: alpha
    environment: production`,
        },
        {
          id: 'tenant-2',
          titleKey: 'bestPractices.tenant.isolation.item2',
          priority: 'critical',
          codeExample: `# ResourceQuota per tenant
apiVersion: v1
kind: ResourceQuota
metadata:
  name: tenant-quota
  namespace: tenant-alpha
spec:
  hard:
    requests.cpu: "10"
    requests.memory: 20Gi
    limits.cpu: "20"
    limits.memory: 40Gi
    persistentvolumeclaims: "10"
    pods: "50"`,
        },
        {
          id: 'tenant-3',
          titleKey: 'bestPractices.tenant.isolation.item3',
          priority: 'critical',
          codeExample: `# LimitRange for default limits
apiVersion: v1
kind: LimitRange
metadata:
  name: tenant-limits
  namespace: tenant-alpha
spec:
  limits:
    - default:
        cpu: "500m"
        memory: 512Mi
      defaultRequest:
        cpu: "100m"
        memory: 128Mi
      type: Container`,
        },
        {
          id: 'tenant-4',
          titleKey: 'bestPractices.tenant.isolation.item4',
          priority: 'important',
          codeExample: `# NetworkPolicy for tenant isolation
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-cross-tenant
  namespace: tenant-alpha
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              tenant: alpha
  egress:
    - to:
        - namespaceSelector:
            matchLabels:
              tenant: alpha
    - to:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: kube-system`,
        },
      ],
    },
  ],
};
