/**
 * Best Practices - Containerization
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COMMON_CODE_SNIPPETS, COLOR_SCHEMES } from '../constants';

export const CONTAINERIZATION_PRACTICES: TabConfig = {
  id: 'containerization',
  labelKey: 'bestPractices.tab.containerization',
  iconPath: COMMON_ICON_PATHS.CUBE_STACK,
  practices: [
    {
      id: 'containers-images',
      titleKey: 'bestPractices.containers.images.title',
      descKey: 'bestPractices.containers.images.desc',
      iconPath: COMMON_ICON_PATHS.DOCUMENT,
      ...COLOR_SCHEMES.OPERATIONS,
      items: [
        {
          id: 'img-1',
          titleKey: 'bestPractices.containers.images.item1',
          priority: 'important',
          codeExample: `# Multi-stage build example
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]`,
        },
        {
          id: 'img-2',
          titleKey: 'bestPractices.containers.images.item2',
          priority: 'critical',
          codeExample: `# Good - specific tag
image: nginx:1.25.3

# Bad - avoid latest
image: nginx:latest`,
        },
        {
          id: 'img-3',
          titleKey: 'bestPractices.containers.images.item3',
          priority: 'critical',
          codeExample: `# Scan with Trivy
trivy image myapp:1.0.0

# Scan in CI/CD pipeline
trivy image --exit-code 1 --severity HIGH,CRITICAL myapp:1.0.0`,
        },
        {
          id: 'img-4',
          titleKey: 'bestPractices.containers.images.item4',
          priority: 'recommended',
          codeExample: `# Use distroless base image
FROM gcr.io/distroless/nodejs:18

# Or minimal Alpine
FROM alpine:3.18`,
        },
        {
          id: 'img-5',
          titleKey: 'bestPractices.containers.images.item5',
          priority: 'recommended',
          codeExample: `# Sign image with Cosign
cosign sign --key cosign.key myregistry/myapp:1.0.0

# Verify signature
cosign verify --key cosign.pub myregistry/myapp:1.0.0`,
        },
      ],
    },
    {
      id: 'containers-runtime',
      titleKey: 'bestPractices.containers.runtime.title',
      descKey: 'bestPractices.containers.runtime.desc',
      iconPath: COMMON_ICON_PATHS.SERVER,
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'rt-1',
          titleKey: 'bestPractices.containers.runtime.item1',
          priority: 'critical',
          codeExample: COMMON_CODE_SNIPPETS.SECURITY_CONTEXT_NON_ROOT,
        },
        {
          id: 'rt-2',
          titleKey: 'bestPractices.containers.runtime.item2',
          priority: 'important',
          codeExample: `${COMMON_CODE_SNIPPETS.SECURITY_CONTEXT_READONLY_FS}
# Mount writable volumes for temp files
volumes:
  - name: tmp
    emptyDir: {}`,
        },
        {
          id: 'rt-3',
          titleKey: 'bestPractices.containers.runtime.item3',
          priority: 'critical',
          codeExample: `${COMMON_CODE_SNIPPETS.SECURITY_CONTEXT_DROP_ALL_CAPS}
    add:
      - NET_BIND_SERVICE  # Only if needed`,
        },
        {
          id: 'rt-4',
          titleKey: 'bestPractices.containers.runtime.item4',
          priority: 'recommended',
          codeExample: `securityContext:
  seccompProfile:
    type: RuntimeDefault
# Or use AppArmor
metadata:
  annotations:
    container.apparmor.security.beta.kubernetes.io/myapp: runtime/default`,
        },
      ],
    },
  ],
};
