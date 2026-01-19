/**
 * Best Practices - Networkpolicies
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COLOR_SCHEMES } from '../constants';

export const NETWORK_POLICIES_PRACTICES: TabConfig = {
  id: 'networkpolicies',
  labelKey: 'bestPractices.tab.networkpolicies',
  iconPath:
    'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
  practices: [
    {
      id: 'net-policies',
      titleKey: 'bestPractices.networking.policies.title',
      descKey: 'bestPractices.networking.policies.desc',
      iconPath:
        'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4',
      ...COLOR_SCHEMES.NETWORKING,
      items: [
        {
          id: 'np-1',
          titleKey: 'bestPractices.networking.policies.item1',
          priority: 'critical',
          codeExample: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress`,
        },
        {
          id: 'np-2',
          titleKey: 'bestPractices.networking.policies.item2',
          priority: 'critical',
          codeExample: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
spec:
  podSelector:
    matchLabels:
      app: backend
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - port: 8080`,
        },
        {
          id: 'np-3',
          titleKey: 'bestPractices.networking.policies.item3',
          priority: 'important',
        },
        {
          id: 'np-4',
          titleKey: 'bestPractices.networking.policies.item4',
          priority: 'recommended',
        },
      ],
    },
    {
      id: 'net-ingress',
      titleKey: 'bestPractices.networking.ingress.title',
      descKey: 'bestPractices.networking.ingress.desc',
      iconPath:
        'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      ...COLOR_SCHEMES.OPERATIONS,
      items: [
        {
          id: 'ing-1',
          titleKey: 'bestPractices.networking.ingress.item1',
          priority: 'critical',
          codeExample: `# Gateway API - Modern approach (recommended)
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: main-gateway
spec:
  gatewayClassName: cilium  # or istio, nginx, etc.
  listeners:
    - name: https
      port: 443
      protocol: HTTPS
      tls:
        mode: Terminate
        certificateRefs:
          - name: myapp-tls
---
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: myapp-route
spec:
  parentRefs:
    - name: main-gateway
  hostnames:
    - myapp.example.com
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: myapp
          port: 80`,
        },
        {
          id: 'ing-2',
          titleKey: 'bestPractices.networking.ingress.item2',
          priority: 'important',
          codeExample: `# Legacy Ingress (still supported)
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - myapp.example.com
      secretName: myapp-tls
  rules:
    - host: myapp.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: myapp
                port:
                  number: 80`,
        },
        { id: 'ing-3', titleKey: 'bestPractices.networking.ingress.item3', priority: 'critical' },
        {
          id: 'ing-4',
          titleKey: 'bestPractices.networking.ingress.item4',
          priority: 'recommended',
          codeExample: `# Gateway API rate limiting with policy
apiVersion: gateway.networking.k8s.io/v1alpha2
kind: BackendTrafficPolicy
metadata:
  name: rate-limit-policy
spec:
  targetRef:
    group: gateway.networking.k8s.io
    kind: HTTPRoute
    name: myapp-route
  rateLimit:
    local:
      requests: 100
      unit: second`,
        },
        {
          id: 'ing-5',
          titleKey: 'bestPractices.networking.ingress.item5',
          priority: 'recommended',
        },
      ],
    },
  ],
};
