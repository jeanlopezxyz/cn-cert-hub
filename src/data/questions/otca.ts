/**
 * OTCA - OpenTelemetry Certified Associate
 * Practice Questions
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: otca-XXX (e.g., otca-001, otca-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - The OpenTelemetry API and SDK (46%)
 * - The OpenTelemetry Collector (26%)
 * - Fundamentals of Observability (18%)
 * - Maintaining and Debugging Observability Pipelines (10%)
 */

import type { Question } from '@/types/quiz';

export const OTCA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: The OpenTelemetry API and SDK (46%)
  // ============================================
  {
    id: 'otca-001',
    question: 'What are the three main signal types in OpenTelemetry?',
    options: [
      'Traces, Metrics, Logs',
      'Errors, Warnings, Info',
      'CPU, Memory, Disk',
      'HTTP, gRPC, TCP',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'OpenTelemetry defines three telemetry signal types: Traces (distributed transaction tracking), Metrics (numerical measurements), and Logs (timestamped records).\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['signals', 'traces', 'metrics', 'logs'],
  },
  {
    id: 'otca-002',
    question: 'What is a Span in OpenTelemetry?',
    options: [
      'A time period for metrics collection',
      'A unit of work in a trace with start time, duration, and context',
      'A log message',
      'A metric measurement',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'A Span represents a single unit of work in a distributed trace. It has a name, start time, duration, status, attributes, events, and links to other spans.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/#spans)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['spans', 'traces', 'distributed-tracing'],
  },
  {
    id: 'otca-003',
    question: 'What is the difference between the OpenTelemetry API and SDK?',
    options: [
      'They are the same thing',
      'API is for Python; SDK is for Java',
      'API is deprecated; use SDK only',
      'API is the interface for instrumentation; SDK is the implementation',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'The API provides interfaces for instrumentation (no-op by default). The SDK provides the actual implementation for processing and exporting telemetry data.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/instrumentation/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['api', 'sdk', 'architecture'],
  },
  {
    id: 'otca-004',
    question: 'What is context propagation in OpenTelemetry?',
    options: [
      'Copying configuration between services',
      'Passing trace context between services to connect distributed traces',
      'Sharing database connections',
      'Propagating errors to logs',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'Context propagation passes trace context (trace ID, span ID, flags) between services via HTTP headers or messaging metadata, enabling distributed trace correlation.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/context-propagation/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['context-propagation', 'distributed-tracing', 'correlation'],
  },
  {
    id: 'otca-005',
    question: 'What propagation format does OpenTelemetry use by default?',
    options: ['W3C Trace Context', 'Zipkin B3', 'Jaeger format', 'Custom OpenTelemetry format'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'W3C Trace Context is the default and recommended propagation format, using traceparent and tracestate headers. Other formats like B3 and Jaeger are also supported.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/context-propagation/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['w3c', 'trace-context', 'propagation'],
  },
  {
    id: 'otca-006',
    question: 'What is an Exporter in OpenTelemetry?',
    options: [
      'A shipping company API',
      'A component that sends telemetry data to a backend',
      'A code generator',
      'A documentation tool',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'An Exporter sends telemetry data to observability backends (Jaeger, Prometheus, OTLP endpoints, etc.). Multiple exporters can be configured for different destinations.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/components/#exporters)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['exporters', 'backends', 'data-export'],
  },
  {
    id: 'otca-007',
    question: 'What is OTLP (OpenTelemetry Protocol)?',
    options: [
      'A programming language',
      'The native protocol for transmitting OpenTelemetry data',
      'A logging format',
      'A networking protocol like TCP',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      "OTLP is OpenTelemetry's native protocol for transmitting traces, metrics, and logs. It supports gRPC and HTTP transports with protobuf encoding.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/specs/otlp/)",
    domain: 'The OpenTelemetry API and SDK',
    tags: ['otlp', 'protocol', 'data-transfer'],
  },
  {
    id: 'otca-008',
    question: 'What is a Resource in OpenTelemetry?',
    options: [
      'CPU and memory allocation',
      'A Kubernetes resource',
      'A file on disk',
      'Immutable attributes describing the entity producing telemetry',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'A Resource is a set of immutable attributes (service name, version, host, etc.) that identify the entity producing telemetry data. It is attached to all signals.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/resources/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['resources', 'attributes', 'identity'],
  },
  {
    id: 'otca-009',
    question: 'What is auto-instrumentation in OpenTelemetry?',
    options: [
      'Automatic code generation',
      'Automatically adding telemetry to applications without code changes',
      'Auto-scaling instrumentation',
      'Automated testing',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Auto-instrumentation (zero-code instrumentation) uses agents or language-specific mechanisms to automatically instrument applications without modifying source code.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/instrumentation/zero-code/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['auto-instrumentation', 'agents', 'zero-code'],
  },
  {
    id: 'otca-010',
    question: 'What is a Sampler in OpenTelemetry?',
    options: [
      'A code example',
      'A monitoring dashboard',
      'A testing tool',
      'A component that decides which traces to record and export',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'A Sampler determines which traces are recorded and exported based on rules (always, never, probability, rate limiting). It helps control telemetry volume and cost.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/sampling/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['sampling', 'traces', 'performance'],
  },
  {
    id: 'otca-011',
    question: 'What are Span Events in OpenTelemetry?',
    options: [
      'Errors that occur during tracing',
      'Network events',
      'User interface events',
      'Timestamped annotations within a span',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      "Span Events are timestamped annotations that mark significant moments within a span's lifetime, like exceptions, state changes, or interesting occurrences.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/#span-events)",
    domain: 'The OpenTelemetry API and SDK',
    tags: ['events', 'spans', 'annotations'],
  },
  {
    id: 'otca-012',
    question: 'What is a SpanProcessor in OpenTelemetry?',
    options: [
      'A component that processes spans before export (batching, filtering)',
      'A CPU processor',
      'A text processor',
      'A payment processor',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'SpanProcessors intercept spans for processing before export. BatchSpanProcessor batches spans for efficiency; SimpleSpanProcessor exports immediately.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['processors', 'batching', 'pipeline'],
  },
  {
    id: 'otca-013',
    question: 'What metric types does OpenTelemetry support?',
    options: [
      'Counter, UpDownCounter, Gauge, Histogram',
      'Only counters',
      'Integer and Float only',
      'Sum and Average only',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'OpenTelemetry supports Counter (cumulative), UpDownCounter (can decrease), Gauge (point-in-time), and Histogram (distribution) metric types.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/metrics/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['metrics', 'metric-types', 'instruments'],
  },
  {
    id: 'otca-014',
    question: 'What is the TracerProvider in OpenTelemetry?',
    options: [
      'A cloud service provider',
      'The entry point for creating Tracers configured with processors and exporters',
      'A tracing UI',
      'A trace storage database',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'TracerProvider is the entry point for tracing. It creates Tracers and is configured with SpanProcessors, Exporters, Samplers, and Resource attributes.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/#tracer-provider)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['tracer-provider', 'configuration', 'api'],
  },

  // ============================================
  // DOMAIN: The OpenTelemetry Collector (26%)
  // ============================================
  {
    id: 'otca-015',
    question: 'What is the OpenTelemetry Collector?',
    options: [
      'A garbage collector',
      'A vendor-agnostic agent for receiving, processing, and exporting telemetry',
      'A data collection library',
      'A metrics aggregator only',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'The OpenTelemetry Collector is a vendor-agnostic service that receives, processes, and exports telemetry data. It acts as a central telemetry pipeline.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['collector', 'pipeline', 'agent'],
  },
  {
    id: 'otca-016',
    question: 'What are the main components of a Collector pipeline?',
    options: [
      'Receivers, Processors, Exporters',
      'Input and Output',
      'Source and Destination',
      'Producer and Consumer',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Collector pipelines consist of Receivers (data intake), Processors (data transformation), and Exporters (data output). Connectors can link pipelines.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/configuration/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['receivers', 'processors', 'exporters', 'pipeline'],
  },
  {
    id: 'otca-017',
    question: 'What is a Receiver in the OpenTelemetry Collector?',
    options: [
      'An email receiver',
      'A signal receiver',
      'A phone receiver',
      'A component that receives telemetry data from various sources',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Receivers ingest telemetry data into the Collector. Examples include OTLP receiver, Prometheus receiver, Jaeger receiver, and many protocol-specific receivers.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/configuration/#receivers)',
    domain: 'The OpenTelemetry Collector',
    tags: ['receivers', 'ingestion', 'protocols'],
  },
  {
    id: 'otca-018',
    question: 'How do you configure the OpenTelemetry Collector?',
    options: [
      'Through environment variables only',
      'Through a web UI',
      'Through a YAML configuration file defining receivers, processors, exporters, and pipelines',
      'Configuration is not supported',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'The Collector is configured via YAML file (config.yaml) with sections for receivers, processors, exporters, extensions, and service (pipeline definitions).\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/configuration/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['configuration', 'yaml', 'setup'],
  },
  {
    id: 'otca-019',
    question: 'What deployment modes does the Collector support?',
    options: [
      'Only standalone',
      'Only Kubernetes',
      'Docker only',
      'Agent (sidecar), Gateway (standalone), or both',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Collectors can run as agents (sidecars on each node collecting local data) or gateways (central collectors aggregating data from multiple sources).\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/deployment/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['deployment', 'agent', 'gateway'],
  },
  {
    id: 'otca-020',
    question: 'What is the batch processor in the Collector?',
    options: [
      'A data batching service',
      'A batch job scheduler',
      'A database batch insert',
      'A processor that batches telemetry for efficient export',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'The batch processor groups telemetry data into batches before export, improving efficiency, reducing network overhead, and enabling better compression.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/configuration/#processors)',
    domain: 'The OpenTelemetry Collector',
    tags: ['batch-processor', 'efficiency', 'export'],
  },
  {
    id: 'otca-021',
    question: 'What is the memory_limiter processor?',
    options: [
      'A memory upgrade tool',
      'A processor that prevents the Collector from running out of memory',
      'A RAM cleaner',
      'A cache manager',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'The memory_limiter processor monitors memory usage and prevents the Collector from exceeding limits by dropping data when approaching thresholds.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/configuration/#processors)',
    domain: 'The OpenTelemetry Collector',
    tags: ['memory-limiter', 'resource-management', 'stability'],
  },
  {
    id: 'otca-022',
    question: 'What transformations can the Collector perform?',
    options: [
      'Only pass-through',
      'Only compression',
      'Filtering, sampling, enriching, transforming attributes, and format conversion',
      'Only encryption',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Collectors can filter (include/exclude), sample, enrich with attributes, transform (rename, modify), convert formats, and perform many other data transformations.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/transforming-telemetry/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['transformations', 'processing', 'enrichment'],
  },

  // ============================================
  // DOMAIN: Fundamentals of Observability (18%)
  // ============================================
  {
    id: 'otca-023',
    question: 'What is observability?',
    options: [
      'Watching servers manually',
      "The ability to understand a system's internal state from its external outputs",
      'Installing monitoring tools',
      'Reading log files',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      "Observability is the ability to understand a system's internal state by examining its external outputs (telemetry). It enables asking new questions without deploying new code.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/observability-primer/)",
    domain: 'Fundamentals of Observability',
    tags: ['observability', 'fundamentals', 'definition'],
  },
  {
    id: 'otca-024',
    question: 'What are semantic conventions in OpenTelemetry?',
    options: [
      'Standardized attribute names and values for consistent telemetry',
      'Coding style guidelines',
      'Communication protocols',
      'Database schemas',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Semantic conventions define standard names and values for attributes (http.method, service.name, etc.), ensuring consistency across languages and tools.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/semantic-conventions/)',
    domain: 'Fundamentals of Observability',
    tags: ['semantic-conventions', 'standards', 'attributes'],
  },
  {
    id: 'otca-025',
    question: 'What is the difference between monitoring and observability?',
    options: [
      'They are identical',
      'Monitoring is newer than observability',
      'Observability is only for logs',
      'Monitoring checks known metrics; observability enables exploring unknown issues',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'Monitoring tracks predefined metrics for known issues. Observability provides rich telemetry enabling exploration and debugging of unknown problems.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/observability-primer/)',
    domain: 'Fundamentals of Observability',
    tags: ['monitoring', 'observability', 'comparison'],
  },
  {
    id: 'otca-026',
    question: 'What is instrumentation in OpenTelemetry?',
    options: [
      'Installing musical instruments',
      'Adding code to generate telemetry data',
      'Configuring dashboards',
      'Setting up alerts',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Instrumentation is the process of adding code (manual or automatic) to applications to generate telemetry data (traces, metrics, logs).\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/instrumentation/)',
    domain: 'Fundamentals of Observability',
    tags: ['instrumentation', 'telemetry', 'implementation'],
  },
  {
    id: 'otca-027',
    question: 'What is distributed tracing?',
    options: [
      'Tracking requests across multiple services in a distributed system',
      'Tracing network packets',
      'Debugging local applications',
      'Log file searching',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Distributed tracing tracks requests as they flow through multiple services, showing the full path, timing, and errors across the entire distributed system.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/)',
    domain: 'Fundamentals of Observability',
    tags: ['distributed-tracing', 'microservices', 'request-tracking'],
  },
  {
    id: 'otca-028',
    question: 'What is a trace context?',
    options: [
      'Documentation about traces',
      'A debugging tool',
      'A trace configuration file',
      'Metadata (trace ID, span ID) that links spans across service boundaries',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'Trace context contains identifying information (trace ID, span ID, flags) that connects spans across services into a single distributed trace.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/#trace-context)',
    domain: 'Fundamentals of Observability',
    tags: ['trace-context', 'correlation', 'distributed-tracing'],
  },

  // ============================================
  // DOMAIN: Maintaining and Debugging Observability Pipelines (10%)
  // ============================================
  {
    id: 'otca-029',
    question: 'How do you debug missing traces in an observability pipeline?',
    options: [
      'Restart all services',
      'Reinstall OpenTelemetry',
      'Check context propagation, sampling decisions, and exporter connectivity',
      'Clear all caches',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Debugging missing traces involves checking: context propagation headers, sampling decisions (traces may be sampled out), exporter configuration, and backend connectivity.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/troubleshooting/)',
    domain: 'Maintaining and Debugging Observability Pipelines',
    tags: ['debugging', 'troubleshooting', 'missing-data'],
  },
  {
    id: 'otca-030',
    question: 'What is schema management in OpenTelemetry?',
    options: [
      'Database schema design',
      'Code formatting',
      'API versioning',
      'Managing telemetry schema versions and transformations',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'Schema management handles telemetry schema evolution, allowing transformation of telemetry data between schema versions as semantic conventions change.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/specs/otel/schemas/)',
    domain: 'Maintaining and Debugging Observability Pipelines',
    tags: ['schemas', 'versioning', 'evolution'],
  },
  {
    id: 'otca-031',
    question: 'How can you identify bottlenecks in the Collector?',
    options: [
      'Using Collector metrics, logs, and resource monitoring',
      'By looking at log colors',
      'By counting files',
      'By measuring temperature',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Collector bottlenecks are identified through internal metrics (queue lengths, dropped data), logs, and resource monitoring (CPU, memory, network).\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/troubleshooting/)',
    domain: 'Maintaining and Debugging Observability Pipelines',
    tags: ['performance', 'monitoring', 'bottlenecks'],
  },
  {
    id: 'otca-032',
    question: "What happens when the Collector's export queue is full?",
    options: [
      'The Collector crashes',
      'Data is automatically saved to disk',
      'New data may be dropped or back-pressure applied',
      'The queue expands infinitely',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'When export queues fill up, the Collector may drop data or apply back-pressure. Proper queue sizing and monitoring prevents data loss in production.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/scaling/)',
    domain: 'Maintaining and Debugging Observability Pipelines',
    tags: ['queues', 'data-loss', 'back-pressure'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - The OpenTelemetry API and SDK
  // ============================================
  {
    id: 'otca-033',
    question: 'What is the MeterProvider in OpenTelemetry?',
    options: [
      'A utility company API',
      'The entry point for creating Meters that produce metrics',
      'A dashboard provider',
      'A metric storage service',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'MeterProvider is the entry point for metrics. It creates Meters that produce metric instruments (counters, gauges, histograms) and manages export configuration.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/metrics/#meter-provider)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['meter-provider', 'metrics', 'api'],
  },
  {
    id: 'otca-034',
    question: 'What is a baggage in OpenTelemetry?',
    options: [
      'Key-value pairs propagated across service boundaries alongside context',
      'Luggage tracking',
      'Log attachments',
      'Trace storage',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Baggage is key-value data that propagates across service boundaries with trace context, useful for passing cross-cutting data (user ID, tenant ID) without modifying APIs.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/baggage/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['baggage', 'propagation', 'context'],
  },
  {
    id: 'otca-035',
    question: 'What is the LoggerProvider in OpenTelemetry?',
    options: [
      'A logging library',
      'A log viewer',
      'A log storage service',
      'The entry point for log signal integration in OpenTelemetry',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'LoggerProvider is the entry point for logs. It bridges existing logging frameworks with OpenTelemetry, enabling log correlation with traces.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/logs/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['logger-provider', 'logs', 'api'],
  },
  {
    id: 'otca-036',
    question: 'What is head-based sampling in OpenTelemetry?',
    options: [
      'Sampling at the start of a request',
      'Sampling based on trace headers',
      'Sampling at the collector',
      'Sampling based on priority',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Head-based sampling makes the sampling decision at the start (head) of a trace. All subsequent spans follow this decision for trace consistency.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/sampling/#head-sampling)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['sampling', 'head-based', 'traces'],
  },
  {
    id: 'otca-037',
    question: 'What is tail-based sampling?',
    options: [
      'Sampling at the end of a request',
      'Sampling based on file size',
      'Sampling after collecting all spans to make informed decisions',
      'Random sampling at exit',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Tail-based sampling makes decisions after all spans are collected, allowing intelligent choices based on errors, latency, or other span characteristics.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/sampling/#tail-sampling)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['sampling', 'tail-based', 'collector'],
  },
  {
    id: 'otca-038',
    question: 'What are Span Links in OpenTelemetry?',
    options: [
      'URLs in spans',
      'Relationships between spans that are not parent-child',
      'Links to documentation',
      'Network connections',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Span Links connect spans that are related but not in a parent-child relationship, like batch processing jobs linking back to the requests that triggered them.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/#span-links)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['links', 'spans', 'relationships'],
  },
  {
    id: 'otca-039',
    question: 'What is the difference between synchronous and asynchronous metrics instruments?',
    options: [
      'Sync is faster',
      'Async is deprecated',
      'They are identical',
      'Sync records at call time; async uses callbacks to observe current values',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'Synchronous instruments (Counter, Histogram) record values when called. Asynchronous instruments (ObservableGauge) use callbacks invoked during export to observe current values.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/metrics/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['metrics', 'sync', 'async'],
  },
  {
    id: 'otca-040',
    question: 'What is instrumentation scope in OpenTelemetry?',
    options: [
      'The range of code to instrument',
      'The programming language',
      'Identifies the instrumentation library (name, version, schema URL)',
      'The project scope',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Instrumentation scope identifies the source of telemetry data, including the instrumentation library name, version, and optional schema URL.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/instrumentation/libraries/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['scope', 'instrumentation', 'identity'],
  },
  {
    id: 'otca-041',
    question: 'What is the purpose of SpanKind?',
    options: [
      'Categorizing span types',
      'Span priority level',
      'Span color in UI',
      'Indicating the role of a span (client, server, producer, consumer, internal)',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      "SpanKind indicates the span's role in the distributed system: CLIENT (outgoing request), SERVER (incoming request), PRODUCER, CONSUMER, or INTERNAL.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/#span-kind)",
    domain: 'The OpenTelemetry API and SDK',
    tags: ['span-kind', 'roles', 'classification'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - The OpenTelemetry Collector
  // ============================================
  {
    id: 'otca-042',
    question: 'What is the attributes processor in the Collector?',
    options: [
      'An HTML attribute processor',
      'A database attribute handler',
      'A processor that modifies, adds, or removes attributes from telemetry',
      'A file attribute reader',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'The attributes processor modifies telemetry attributes: inserting new ones, updating existing ones, deleting sensitive data, or hashing values.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/transforming-telemetry/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['attributes-processor', 'modification', 'processing'],
  },
  {
    id: 'otca-043',
    question: 'What is the filter processor used for?',
    options: [
      'Including or excluding telemetry based on conditions',
      'Filtering network traffic',
      'Filtering log files',
      'Email filtering',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'The filter processor includes or excludes telemetry data based on matching conditions like span name, attributes, or resource attributes.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/transforming-telemetry/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['filter-processor', 'selection', 'processing'],
  },
  {
    id: 'otca-044',
    question: 'What are Collector extensions?',
    options: [
      'Browser extensions',
      'File extensions',
      'Components providing additional capabilities like health checks and pprof',
      'Phone extensions',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Extensions provide capabilities not involved in data processing: health_check (liveness), pprof (profiling), zpages (debugging), basicauth, and more.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/configuration/#extensions)',
    domain: 'The OpenTelemetry Collector',
    tags: ['extensions', 'health-check', 'debugging'],
  },
  {
    id: 'otca-045',
    question: 'What is the resource processor?',
    options: [
      'A CPU resource manager',
      'A memory allocator',
      'A file resource handler',
      'A processor that modifies resource attributes on telemetry',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'The resource processor modifies resource attributes, adding environment, deployment, or custom attributes to all telemetry passing through.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/transforming-telemetry/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['resource-processor', 'attributes', 'enrichment'],
  },
  {
    id: 'otca-046',
    question: 'What is a Connector in the OpenTelemetry Collector?',
    options: [
      'A network connector',
      'A database connector',
      'A component that links pipelines and can convert signal types',
      'A cable connector',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Connectors link pipelines, acting as both exporter and receiver. They can convert between signal types (traces to metrics) or route data between pipelines.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/configuration/#connectors)',
    domain: 'The OpenTelemetry Collector',
    tags: ['connectors', 'pipelines', 'conversion'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Fundamentals of Observability
  // ============================================
  {
    id: 'otca-047',
    question: 'What is cardinality in the context of metrics?',
    options: [
      'The number of metrics',
      'The number of unique metric series created by attribute combinations',
      'Metric priority',
      'Metric accuracy',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'Cardinality refers to the number of unique time series created by attribute combinations. High cardinality (many unique values) can cause performance issues.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/metrics/)',
    domain: 'Fundamentals of Observability',
    tags: ['cardinality', 'metrics', 'performance'],
  },
  {
    id: 'otca-048',
    question: 'What is the difference between push and pull model for metrics?',
    options: [
      'Push sends data to backends; pull has backends scrape endpoints',
      'Push is newer',
      'Pull is deprecated',
      'They are identical',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Push model (OTLP) sends metrics to backends. Pull model (Prometheus) has backends scrape /metrics endpoints. OpenTelemetry supports both.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/metrics/)',
    domain: 'Fundamentals of Observability',
    tags: ['push', 'pull', 'metrics-collection'],
  },
  {
    id: 'otca-049',
    question: 'What is exemplar in OpenTelemetry metrics?',
    options: [
      'An example metric',
      'A metric template',
      'A sample trace linked to a metric measurement for correlation',
      'A documentation example',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Exemplars are samples that link metric measurements to trace data, enabling drill-down from aggregated metrics to specific traces for debugging.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/metrics/#exemplars)',
    domain: 'Fundamentals of Observability',
    tags: ['exemplars', 'correlation', 'metrics-traces'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Maintaining and Debugging
  // ============================================
  {
    id: 'otca-050',
    question: 'How do you troubleshoot high memory usage in the Collector?',
    options: [
      'Add more RAM only',
      'Reduce number of services',
      'Check queue sizes, batch settings, and configure memory_limiter processor',
      'Disable all processing',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'High memory usage is addressed by tuning queue sizes, batch settings, enabling memory_limiter processor, and monitoring internal metrics for bottlenecks.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/troubleshooting/)',
    domain: 'Maintaining and Debugging Observability Pipelines',
    tags: ['memory', 'troubleshooting', 'tuning'],
  },
  {
    id: 'otca-051',
    question: 'What telemetry does the Collector generate about itself?',
    options: [
      'Internal metrics, logs, and optionally traces about its own operations',
      'No self-telemetry',
      'Only error logs',
      'Only CPU metrics',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'The Collector generates internal metrics (processed/dropped data, queue sizes), structured logs, and can optionally produce traces about its own processing.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/internal-telemetry/)',
    domain: 'Maintaining and Debugging Observability Pipelines',
    tags: ['self-telemetry', 'internal-metrics', 'monitoring'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Collector Scaling & Security
  // ============================================
  {
    id: 'otca-052',
    question: 'What is the recommended approach for horizontally scaling OpenTelemetry Collectors?',
    options: [
      'Run only one Collector per cluster',
      'Use a load balancer in front of multiple Collector instances',
      'Increase CPU cores on a single Collector',
      'Disable all processors to improve throughput',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'Horizontal scaling is achieved by deploying multiple Collector instances behind a load balancer. This distributes telemetry traffic across instances for high availability and throughput.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/scaling/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['scaling', 'load-balancing', 'high-availability'],
  },
  {
    id: 'otca-053',
    question: 'How do you configure TLS encryption for the OTLP receiver in the Collector?',
    options: [
      'TLS is always enabled by default',
      'Use the tls section with cert_file and key_file in the receiver configuration',
      'TLS is not supported for receivers',
      'Configure TLS only in environment variables',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'TLS is configured in the receiver section using tls settings with cert_file and key_file paths. Optional ca_file enables client certificate verification for mTLS.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/configuration/#setting-up-certificates)',
    domain: 'The OpenTelemetry Collector',
    tags: ['tls', 'security', 'encryption', 'mtls'],
  },
  {
    id: 'otca-054',
    question: 'What processor is used to redact sensitive data in the Collector?',
    options: [
      'The redaction processor for removing or masking sensitive attribute values',
      'The batch processor',
      'The memory_limiter processor',
      'The resource processor',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'The redaction processor removes or masks sensitive data by blocking specific attribute keys or values matching patterns. It helps comply with privacy requirements.\n\nLearn more: [Documentación oficial](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/redactionprocessor)',
    domain: 'The OpenTelemetry Collector',
    tags: ['redaction', 'security', 'privacy', 'sensitive-data'],
  },
  {
    id: 'otca-055',
    question:
      'What is the difference between the OpenTelemetry Collector Core and Contrib distributions?',
    options: [
      'Core is deprecated; use Contrib only',
      'Contrib is for testing; Core is for production',
      'Core contains essential components; Contrib includes additional community receivers, processors, and exporters',
      'They are identical distributions',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Core distribution contains stable, essential components. Contrib distribution includes Core plus additional community-contributed receivers, processors, exporters, and extensions.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/distributions/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['distributions', 'core', 'contrib', 'components'],
  },
  {
    id: 'otca-056',
    question: 'What is the OpenTelemetry Collector Builder (ocb)?',
    options: [
      'A UI builder for dashboards',
      'A configuration validator',
      'A code generator for instrumentation',
      'A tool to create custom Collector distributions with selected components',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'OCB (OpenTelemetry Collector Builder) creates custom Collector distributions by selecting specific receivers, processors, exporters, and extensions needed for your use case.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/custom-collector/)',
    domain: 'The OpenTelemetry Collector',
    tags: ['ocb', 'custom-collector', 'builder', 'distributions'],
  },
  {
    id: 'otca-057',
    question: 'What is the zpages extension in the Collector used for?',
    options: [
      'Compressing telemetry data',
      'Managing zones in multi-region deployments',
      'Providing live debugging pages for pipeline inspection',
      'Z-order sorting of spans',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'The zpages extension provides HTTP endpoints with live debugging information about the Collector, including pipeline status, recent samples, and component health.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/collector/troubleshooting/#zpages)',
    domain: 'Maintaining and Debugging Observability Pipelines',
    tags: ['zpages', 'debugging', 'extension', 'troubleshooting'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - SDK Advanced Topics
  // ============================================
  {
    id: 'otca-058',
    question: 'What are Views in the OpenTelemetry Metrics SDK?',
    options: [
      'Dashboard visualizations',
      'Database views for metrics storage',
      'Configurations that customize how metrics are aggregated and reported',
      'User interface components',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Views configure how metrics are processed: changing aggregation type, filtering attributes, renaming instruments, or dropping unwanted metrics. They customize SDK output.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/metrics/#views)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['views', 'metrics', 'aggregation', 'sdk'],
  },
  {
    id: 'otca-059',
    question: 'What is the purpose of attribute limits in OpenTelemetry SDK configuration?',
    options: [
      'To limit the number of attributes, key length, and value length to prevent unbounded growth',
      'To set minimum attribute values',
      'To enable attribute encryption',
      'To disable all attributes',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Attribute limits control maximum number of attributes per span/event/link, key length, and value length. This prevents memory issues from unbounded attribute growth.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/sdk-configuration/general-sdk-configuration/)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['attribute-limits', 'truncation', 'sdk', 'configuration'],
  },
  {
    id: 'otca-060',
    question: 'What are the valid Span status codes in OpenTelemetry?',
    options: [
      'SUCCESS, FAILURE, TIMEOUT',
      'OK, ERROR, WARNING',
      'Unset, Ok, Error',
      'STARTED, RUNNING, COMPLETED',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Span status has three codes: Unset (default, no explicit status), Ok (operation successful), and Error (operation failed). Status includes an optional description for errors.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/traces/#span-status)',
    domain: 'The OpenTelemetry API and SDK',
    tags: ['span-status', 'status-codes', 'traces', 'errors'],
  },
];
