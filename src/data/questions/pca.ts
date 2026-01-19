/**
 * PCA - Prometheus Certified Associate
 * Practice Questions (60 questions - matches exam format)
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: pca-XXX (e.g., pca-001, pca-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - Observability Concepts (18%) - 10 questions
 * - Prometheus Fundamentals (20%) - 13 questions
 * - PromQL (28%) - 17 questions
 * - Instrumentation and Exporters (16%) - 9 questions
 * - Alerting & Dashboarding (18%) - 11 questions
 */

import type { Question } from '@/types/quiz';

export const PCA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Observability Concepts (18%)
  // ============================================
  {
    id: 'pca-001',
    question: 'What are the three pillars of observability?',
    options: [
      'Metrics, Logs, and Traces',
      'CPU, Memory, and Disk',
      'Alerts, Dashboards, and Reports',
      'Prometheus, Grafana, and Alertmanager',
    ],
    correctAnswer: 0,
    explanation:
      'The three pillars of observability are Metrics (numerical data over time), Logs (timestamped event records), and Traces (request flow through distributed systems).\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/introduction/overview/)',
    domain: 'Observability Concepts',
    difficulty: 'medium',
    tags: ['observability', 'pillars', 'fundamentals'],
  },
  {
    id: 'pca-002',
    question: 'Why does Prometheus use a pull-based model instead of push?',
    options: [
      'Push is slower',
      'Easier to detect if targets are down, and centralized control',
      'Pull uses less CPU',
      'Push requires more network bandwidth',
    ],
    correctAnswer: 1,
    explanation:
      'Pull-based monitoring allows Prometheus to know when a target is down (no response), provides centralized control over scrape intervals, and avoids flooding during high-load situations.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/introduction/overview/)',
    domain: 'Observability Concepts',
    difficulty: 'medium',
    tags: ['pull-model', 'architecture', 'design'],
  },
  {
    id: 'pca-003',
    question: 'What is a Service Level Indicator (SLI)?',
    options: [
      'A quantitative measure of service behavior',
      'A contract with customers about uptime',
      'An alert threshold value',
      'A dashboard visualization',
    ],
    correctAnswer: 0,
    explanation:
      'An SLI is a quantitative measurement of service behavior (e.g., request latency, error rate). SLOs are targets for SLIs, and SLAs are contracts based on SLOs.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/practices/alerting/)',
    domain: 'Observability Concepts',
    difficulty: 'medium',
    tags: ['sli', 'slo', 'sla', 'reliability'],
  },
  {
    id: 'pca-004',
    question: 'What is the relationship between SLI, SLO, and SLA?',
    options: [
      'SLA → SLO → SLI (from specific to general)',
      'SLI → SLO → SLA (from measurement to contract)',
      'SLO contains both SLI and SLA',
      'They are interchangeable terms',
    ],
    correctAnswer: 1,
    explanation:
      'SLI (indicator) is the measurement, SLO (objective) is the target value for the SLI, and SLA (agreement) is the contract with consequences if SLO is not met.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/practices/alerting/)',
    domain: 'Observability Concepts',
    difficulty: 'hard',
    tags: ['sli', 'slo', 'sla', 'reliability'],
  },
  {
    id: 'pca-005',
    question: 'What is a trace in distributed systems observability?',
    options: [
      'The path of a request through multiple services',
      'CPU usage over time',
      'A log file with debug information',
      'Memory allocation patterns',
    ],
    correctAnswer: 0,
    explanation:
      'A trace represents the journey of a request as it travels through various services in a distributed system. It consists of spans, where each span represents a unit of work.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/introduction/overview/)',
    domain: 'Observability Concepts',
    difficulty: 'medium',
    tags: ['tracing', 'distributed-systems', 'spans'],
  },
  {
    id: 'pca-006',
    question: 'How does Prometheus discover targets to scrape?',
    options: [
      'Through service discovery mechanisms configured in prometheus.yml',
      'Targets must register themselves with Prometheus',
      'By scanning network ports',
      'Through a central registry database',
    ],
    correctAnswer: 0,
    explanation:
      'Prometheus supports multiple service discovery mechanisms (Kubernetes, Consul, DNS, file-based, etc.) configured in the scrape_config section of prometheus.yml.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config)',
    domain: 'Observability Concepts',
    difficulty: 'medium',
    tags: ['service-discovery', 'configuration', 'targets'],
  },

  // ============================================
  // DOMAIN: Prometheus Fundamentals (20%)
  // ============================================
  {
    id: 'pca-007',
    question: 'What are the four metric types in Prometheus?',
    options: [
      'Integer, Float, String, Boolean',
      'Counter, Gauge, Histogram, Summary',
      'CPU, Memory, Disk, Network',
      'Rate, Sum, Average, Max',
    ],
    correctAnswer: 1,
    explanation:
      'Prometheus has four metric types: Counter (cumulative, only increases), Gauge (can go up/down), Histogram (samples in buckets), and Summary (quantiles).\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/concepts/metric_types/)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'medium',
    tags: ['metric-types', 'data-model', 'fundamentals'],
  },
  {
    id: 'pca-008',
    question: 'Which metric type should be used for CPU temperature?',
    options: ['Counter', 'Gauge', 'Summary', 'Histogram'],
    correctAnswer: 1,
    explanation:
      'Gauge is appropriate for values that can increase or decrease, like temperature, memory usage, or concurrent connections.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/concepts/metric_types/#gauge)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'medium',
    tags: ['gauge', 'metric-types', 'use-cases'],
  },
  {
    id: 'pca-009',
    question: 'Which metric type should be used for total HTTP requests received?',
    options: ['Counter', 'Histogram', 'Gauge', 'Summary'],
    correctAnswer: 0,
    explanation:
      'Counter is used for cumulative values that only increase (or reset to zero on restart), such as total requests, errors, or bytes transferred.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/concepts/metric_types/#counter)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'medium',
    tags: ['counter', 'metric-types', 'use-cases'],
  },
  {
    id: 'pca-010',
    question: 'What is a label in Prometheus?',
    options: [
      'A tag used for documentation',
      'A key-value pair that adds dimensions to a metric',
      'An alert severity level',
      'A comment in prometheus.yml',
    ],
    correctAnswer: 1,
    explanation:
      'Labels are key-value pairs that add dimensions to metrics, allowing you to filter and aggregate data (e.g., http_requests_total{method="GET", status="200"}).\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'medium',
    tags: ['labels', 'data-model', 'dimensions'],
  },
  {
    id: 'pca-011',
    question: 'What is the default scrape interval in Prometheus?',
    options: ['1 minute', '30 seconds', '15 seconds', '5 minutes'],
    correctAnswer: 0,
    explanation:
      'The default global scrape interval in Prometheus is 1 minute (60 seconds), though this can be configured per-job or globally.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'hard',
    tags: ['configuration', 'scrape-interval', 'defaults'],
  },
  {
    id: 'pca-012',
    question: 'What is a time series in Prometheus?',
    options: [
      'A unique combination of metric name and label set',
      'A visualization type',
      'A backup of historical data',
      'A log entry format',
    ],
    correctAnswer: 0,
    explanation:
      'A time series is uniquely identified by its metric name plus its label set. Each unique combination creates a new time series that Prometheus stores independently.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/concepts/data_model/)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'medium',
    tags: ['time-series', 'data-model', 'fundamentals'],
  },
  {
    id: 'pca-013',
    question: 'What is cardinality in Prometheus context?',
    options: [
      'The number of unique time series',
      'The amount of disk space used',
      'The number of Prometheus servers',
      'The number of alert rules',
    ],
    correctAnswer: 0,
    explanation:
      'Cardinality refers to the number of unique time series. High cardinality (many unique label combinations) can cause performance issues and should be carefully managed.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/practices/naming/#labels)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'hard',
    tags: ['cardinality', 'performance', 'best-practices'],
  },

  // ============================================
  // DOMAIN: PromQL (28%)
  // ============================================
  {
    id: 'pca-014',
    question: 'What does the rate() function do in PromQL?',
    options: [
      'Returns the current value of a counter',
      'Sums all values together',
      'Returns the maximum value',
      'Calculates per-second average rate of increase over a time range',
    ],
    correctAnswer: 3,
    explanation:
      'rate() calculates the per-second average rate of increase of a counter over a specified time range. It handles counter resets and should only be used with counters.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#rate)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['rate', 'functions', 'counters'],
  },
  {
    id: 'pca-015',
    question: 'What is the difference between rate() and irate()?',
    options: [
      'rate() is faster',
      'They are identical',
      'irate() is deprecated',
      'irate() calculates instant rate using last two data points; rate() averages over the range',
    ],
    correctAnswer: 3,
    explanation:
      'rate() calculates average rate over the entire range window. irate() calculates instant rate using only the last two data points, making it more responsive but noisier.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#irate)',
    domain: 'PromQL',
    difficulty: 'hard',
    tags: ['rate', 'irate', 'functions', 'comparison'],
  },
  {
    id: 'pca-016',
    question: 'Which PromQL query returns the top 5 pods by CPU usage?',
    options: [
      'topk(5, cpu_usage)',
      'sort(cpu_usage)[0:5]',
      'max(cpu_usage) by (pod)',
      'top(5, cpu_usage)',
    ],
    correctAnswer: 0,
    explanation:
      'topk(k, expression) returns the k largest elements. bottomk() returns the smallest. These are useful for finding top resource consumers.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/operators/#aggregation-operators)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['topk', 'aggregation', 'queries'],
  },
  {
    id: 'pca-017',
    question: 'What does the by clause do in PromQL aggregations?',
    options: [
      'Filters out specified labels',
      'Groups results by specified labels, dropping others',
      'Sorts results by label values',
      'Multiplies values by a factor',
    ],
    correctAnswer: 1,
    explanation:
      'The "by" clause groups aggregation by specified labels, keeping only those labels in the result. "without" does the opposite, removing specified labels.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/operators/#aggregation-operators)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['aggregation', 'by', 'labels'],
  },
  {
    id: 'pca-018',
    question: 'How do you select all HTTP request metrics with status code 5xx?',
    options: [
      'http_requests{status="5xx"}',
      'http_requests{status>=500}',
      'http_requests{status LIKE "5%"}',
      'http_requests{status=~"5.."}',
    ],
    correctAnswer: 3,
    explanation:
      'The =~ operator performs regex matching. "5.." matches any status code starting with 5 (500, 501, 502, etc.).\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/basics/#instant-vector-selectors)',
    domain: 'PromQL',
    difficulty: 'hard',
    tags: ['regex', 'label-matching', 'selectors'],
  },
  {
    id: 'pca-019',
    question: 'What is an instant vector in PromQL?',
    options: [
      'A set of time series with one sample each at the same timestamp',
      'A single scalar value',
      'A range of values over time',
      'A string value',
    ],
    correctAnswer: 0,
    explanation:
      'An instant vector contains a set of time series, each with exactly one sample, all sharing the same timestamp. Range vectors have multiple samples over time.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/basics/#expression-language-data-types)',
    domain: 'PromQL',
    difficulty: 'hard',
    tags: ['instant-vector', 'range-vector', 'data-types'],
  },
  {
    id: 'pca-020',
    question: 'What does histogram_quantile(0.95, ...) calculate?',
    options: [
      '95% of the total sum',
      'Values greater than 95',
      'The top 95% of samples',
      'The 95th percentile value',
    ],
    correctAnswer: 3,
    explanation:
      'histogram_quantile calculates the φ-quantile (95th percentile when φ=0.95) from a histogram. This shows the value below which 95% of observations fall.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#histogram_quantile)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['histogram', 'quantile', 'percentile'],
  },
  {
    id: 'pca-021',
    question: 'Which function calculates the average value over a time range?',
    options: ['avg()', 'avg_over_time()', 'mean()', 'average()'],
    correctAnswer: 1,
    explanation:
      'avg_over_time() calculates the average of values within a time range for a single series. avg() aggregates across multiple series at a single point.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#aggregation_over_time)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['avg_over_time', 'functions', 'aggregation'],
  },
  {
    id: 'pca-022',
    question: 'What is the correct syntax for a range vector selector?',
    options: ['metric_name(5m)', 'metric_name{range=5m}', 'metric_name@5m', 'metric_name[5m]'],
    correctAnswer: 3,
    explanation:
      'Range vectors use square brackets: metric_name[5m] selects all samples from the last 5 minutes. The duration can be s, m, h, d, w, y.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/basics/#range-vector-selectors)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['range-vector', 'selectors', 'syntax'],
  },
  {
    id: 'pca-023',
    question: 'What does the increase() function return?',
    options: [
      'Total increase in counter value over the time range',
      'Current value minus previous value',
      'Percentage increase',
      'Rate of increase per second',
    ],
    correctAnswer: 0,
    explanation:
      'increase() returns the total increase of a counter over the specified time range. It is equivalent to rate() multiplied by the number of seconds in the range.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#increase)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['increase', 'functions', 'counters'],
  },

  // ============================================
  // DOMAIN: Instrumentation and Exporters (16%)
  // ============================================
  {
    id: 'pca-024',
    question: 'What is the Node Exporter used for?',
    options: [
      'Exporting hardware and OS metrics from Linux hosts',
      'Exporting application logs',
      'Exporting Kubernetes metrics',
      'Exporting database metrics',
    ],
    correctAnswer: 0,
    explanation:
      'Node Exporter exposes hardware and OS-level metrics from Linux hosts (CPU, memory, disk, network). It is one of the most common Prometheus exporters.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/guides/node-exporter/)',
    domain: 'Instrumentation and Exporters',
    difficulty: 'medium',
    tags: ['node-exporter', 'exporters', 'linux'],
  },
  {
    id: 'pca-025',
    question: 'Which port does Node Exporter expose metrics on by default?',
    options: ['9090', '9091', '8080', '9100'],
    correctAnswer: 3,
    explanation:
      'Node Exporter serves metrics on port 9100 by default. Prometheus server uses 9090, and Pushgateway uses 9091.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/guides/node-exporter/)',
    domain: 'Instrumentation and Exporters',
    difficulty: 'hard',
    tags: ['node-exporter', 'ports', 'configuration'],
  },
  {
    id: 'pca-026',
    question: 'What is the recommended metric naming convention in Prometheus?',
    options: [
      'camelCase (httpRequestsTotal)',
      'snake_case with unit suffix (http_requests_total)',
      'PascalCase (HttpRequestsTotal)',
      'kebab-case (http-requests-total)',
    ],
    correctAnswer: 1,
    explanation:
      'Prometheus naming convention uses snake_case with a unit suffix. Format: library_name_unit_suffix (e.g., http_request_duration_seconds, process_cpu_seconds_total).\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/practices/naming/)',
    domain: 'Instrumentation and Exporters',
    difficulty: 'medium',
    tags: ['naming', 'conventions', 'best-practices'],
  },
  {
    id: 'pca-027',
    question: 'When should you use the Pushgateway?',
    options: [
      'For all metrics collection',
      'As a replacement for Prometheus server',
      'For short-lived batch jobs that cannot be scraped',
      'For real-time streaming metrics',
    ],
    correctAnswer: 2,
    explanation:
      'Pushgateway is designed for short-lived batch jobs that may finish before Prometheus can scrape them. It should not be used for long-running services.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/practices/pushing/)',
    domain: 'Instrumentation and Exporters',
    difficulty: 'medium',
    tags: ['pushgateway', 'batch-jobs', 'use-cases'],
  },
  {
    id: 'pca-028',
    question: 'Which Prometheus client library feature tracks request duration automatically?',
    options: ['Counter', 'Gauge', 'Timer or Histogram with context manager', 'Summary only'],
    correctAnswer: 2,
    explanation:
      'Client libraries provide timer utilities (decorators, context managers) that automatically measure duration and record it in a Histogram or Summary metric.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/instrumenting/clientlibs/)',
    domain: 'Instrumentation and Exporters',
    difficulty: 'hard',
    tags: ['client-libraries', 'instrumentation', 'duration'],
  },
  {
    id: 'pca-029',
    question: 'What is the default metrics endpoint path in Prometheus exporters?',
    options: ['/prometheus', '/stats', '/metrics', '/data'],
    correctAnswer: 2,
    explanation:
      'By convention, Prometheus exporters expose metrics at the /metrics endpoint. This is the default path Prometheus expects when scraping targets.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/instrumenting/exposition_formats/)',
    domain: 'Instrumentation and Exporters',
    difficulty: 'medium',
    tags: ['exporters', 'endpoints', 'conventions'],
  },

  // ============================================
  // DOMAIN: Alerting & Dashboarding (18%)
  // ============================================
  {
    id: 'pca-030',
    question: 'What is the role of Alertmanager in the Prometheus ecosystem?',
    options: [
      'Generating metrics',
      'Handling alert deduplication, grouping, and routing',
      'Storing time series data',
      'Visualizing dashboards',
    ],
    correctAnswer: 1,
    explanation:
      'Alertmanager receives alerts from Prometheus, handles deduplication, grouping, silencing, inhibition, and routes notifications to receivers (email, Slack, PagerDuty, etc.).\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/alerting/latest/overview/)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'medium',
    tags: ['alertmanager', 'alerts', 'notifications'],
  },
  {
    id: 'pca-031',
    question: 'What does the "for" clause in an alert rule specify?',
    options: [
      'How long condition must be true before firing',
      'The alert destination',
      'Which labels to include',
      'The alert severity',
    ],
    correctAnswer: 0,
    explanation:
      'The "for" clause specifies the duration the alerting condition must be continuously true before the alert fires. This prevents alerting on brief spikes.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'medium',
    tags: ['alert-rules', 'for-clause', 'configuration'],
  },
  {
    id: 'pca-032',
    question: 'What is alert grouping in Alertmanager?',
    options: [
      'Sending multiple alerts in a single notification',
      'Sorting alerts by severity',
      'Creating alert categories',
      'Grouping related alerts to reduce notification noise',
    ],
    correctAnswer: 3,
    explanation:
      'Alert grouping combines related alerts (e.g., all alerts from same cluster) into a single notification, reducing alert fatigue during widespread issues.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/alerting/latest/alertmanager/#grouping)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'hard',
    tags: ['alertmanager', 'grouping', 'noise-reduction'],
  },
  {
    id: 'pca-033',
    question: 'What is alert inhibition?',
    options: [
      'Disabling all alerts',
      'Delaying alert notifications',
      'Suppressing certain alerts when other alerts are firing',
      'Reducing alert frequency',
    ],
    correctAnswer: 2,
    explanation:
      'Inhibition rules suppress notifications for certain alerts when other, higher-priority alerts are firing (e.g., suppress service alerts when the entire node is down).\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/alerting/latest/alertmanager/#inhibition)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'hard',
    tags: ['alertmanager', 'inhibition', 'configuration'],
  },
  {
    id: 'pca-034',
    question: 'Which visualization tool is most commonly used with Prometheus?',
    options: ['Kibana', 'Tableau', 'Grafana', 'Power BI'],
    correctAnswer: 2,
    explanation:
      'Grafana is the most popular visualization tool for Prometheus. It has native Prometheus data source support and extensive dashboard capabilities.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/visualization/grafana/)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'medium',
    tags: ['grafana', 'visualization', 'dashboards'],
  },
  {
    id: 'pca-035',
    question: 'What is a recording rule in Prometheus?',
    options: [
      'A rule for logging queries',
      'A rule for recording audio alerts',
      'A backup mechanism',
      'A precomputed query stored as a new time series',
    ],
    correctAnswer: 3,
    explanation:
      'Recording rules precompute frequently used or expensive PromQL expressions and save results as new time series. This improves dashboard performance.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'hard',
    tags: ['recording-rules', 'performance', 'optimization'],
  },
  {
    id: 'pca-036',
    question: 'What alert state indicates the condition is true but "for" duration has not passed?',
    options: ['Firing', 'Inactive', 'Pending', 'Resolved'],
    correctAnswer: 2,
    explanation:
      'Pending state means the alert condition is true but the "for" duration has not elapsed yet. Once the duration passes, it transitions to Firing.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'medium',
    tags: ['alert-states', 'pending', 'firing'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Observability Concepts
  // ============================================
  {
    id: 'pca-037',
    question: 'What is the difference between black-box and white-box monitoring?',
    options: [
      'Black-box monitors internal metrics; white-box monitors external behavior',
      'They are the same approach with different names',
      'Black-box monitors external behavior; white-box monitors internal metrics',
      'Black-box uses Prometheus; white-box uses other tools',
    ],
    correctAnswer: 2,
    explanation:
      'Black-box monitoring observes system behavior externally (like a user would). White-box monitoring uses internal metrics, logs, and instrumentation for detailed insights.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/introduction/overview/)',
    domain: 'Observability Concepts',
    difficulty: 'hard',
    tags: ['monitoring', 'black-box', 'white-box'],
  },
  {
    id: 'pca-038',
    question: 'What is the RED method for monitoring?',
    options: [
      'Requests, Events, Data for batch processing',
      'Resources, Efficiency, Dependencies for infrastructure',
      'Replication, Encryption, Durability for databases',
      'Rate, Errors, Duration for request-driven services',
    ],
    correctAnswer: 3,
    explanation:
      'The RED method focuses on Rate (requests/second), Errors (failed requests), and Duration (latency) - key metrics for monitoring request-driven microservices.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/practices/instrumentation/#the-four-golden-signals)',
    domain: 'Observability Concepts',
    difficulty: 'medium',
    tags: ['red-method', 'metrics', 'microservices'],
  },
  {
    id: 'pca-039',
    question: 'What is the USE method for monitoring?',
    options: [
      'Utilization, Saturation, Errors for resources',
      'Users, Sessions, Errors for web applications',
      'Updates, Security, Events for systems',
      'Uptime, Speed, Efficiency for services',
    ],
    correctAnswer: 0,
    explanation:
      'The USE method monitors Utilization (% resource busy), Saturation (work queued), and Errors for each resource (CPU, memory, disk, network).\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/practices/instrumentation/)',
    domain: 'Observability Concepts',
    difficulty: 'medium',
    tags: ['use-method', 'metrics', 'resources'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Prometheus Fundamentals
  // ============================================
  {
    id: 'pca-040',
    question: 'What is the difference between Histogram and Summary metric types?',
    options: [
      'Histograms are more accurate; Summaries are faster',
      'Histograms are client-side; Summaries are server-side',
      'They are identical with different names',
      'Histograms use configurable buckets; Summaries calculate streaming quantiles',
    ],
    correctAnswer: 3,
    explanation:
      'Histograms bucket observations and allow server-side quantile calculation. Summaries calculate quantiles client-side. Histograms are more flexible and aggregatable.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/concepts/metric_types/#histogram)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'hard',
    tags: ['histogram', 'summary', 'metric-types'],
  },
  {
    id: 'pca-041',
    question: 'What is the TSDB (Time Series Database) in Prometheus?',
    options: [
      'An external database Prometheus connects to',
      'A cloud storage service',
      'The built-in storage engine for time series data',
      'A visualization component',
    ],
    correctAnswer: 2,
    explanation:
      'Prometheus has a built-in time series database (TSDB) that stores samples on local disk. It uses a custom format optimized for time series data with efficient compression.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/storage/)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'medium',
    tags: ['tsdb', 'storage', 'architecture'],
  },
  {
    id: 'pca-042',
    question: 'What happens when a Prometheus counter resets?',
    options: [
      'All historical data is lost',
      'Prometheus stops scraping that target',
      'An alert is automatically generated',
      'rate() and increase() functions handle resets automatically',
    ],
    correctAnswer: 3,
    explanation:
      'Counter resets (e.g., on service restart) are automatically handled by rate() and increase() functions. They detect the reset and calculate correctly.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/concepts/metric_types/#counter)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'hard',
    tags: ['counter', 'resets', 'functions'],
  },
  {
    id: 'pca-043',
    question: 'What is staleness in Prometheus?',
    options: [
      'When a target stops being scraped',
      'When metrics become outdated after 5 minutes by default',
      'When configuration is not reloaded',
      'When alerts expire',
    ],
    correctAnswer: 1,
    explanation:
      'Staleness marks samples as stale after 5 minutes of no updates. This helps distinguish between "no data" and "zero value" states in queries.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/basics/#staleness)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'hard',
    tags: ['staleness', 'data-model', 'fundamentals'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - PromQL
  // ============================================
  {
    id: 'pca-044',
    question: 'What does the offset modifier do in PromQL?',
    options: [
      'Adds a constant value to all samples',
      'Shifts the time range of the query into the past',
      'Shifts labels to different positions',
      'Offsets the query start time',
    ],
    correctAnswer: 1,
    explanation:
      'The offset modifier shifts the evaluation time of a vector back in time. http_requests_total offset 5m returns values from 5 minutes ago.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/basics/#offset-modifier)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['offset', 'time-shifting', 'modifiers'],
  },
  {
    id: 'pca-045',
    question: 'What is vector matching in PromQL binary operations?',
    options: [
      'Matching vectors by their names',
      'Creating new vectors from scalars',
      'Converting vectors to matrices',
      'Matching elements between vectors based on labels for operations',
    ],
    correctAnswer: 3,
    explanation:
      'Vector matching determines how elements from two vectors are paired for binary operations (like +, -, *, /). By default, matching is done on all labels.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/operators/#vector-matching)',
    domain: 'PromQL',
    difficulty: 'hard',
    tags: ['vector-matching', 'binary-operations', 'labels'],
  },
  {
    id: 'pca-046',
    question: 'What does the "ignoring" keyword do in PromQL?',
    options: [
      'Ignores errors in the query',
      'Ignores null values',
      'Excludes specified labels from vector matching',
      'Skips certain time ranges',
    ],
    correctAnswer: 2,
    explanation:
      'The "ignoring" keyword excludes specified labels when matching vectors in binary operations. "on" does the opposite, matching only on specified labels.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/operators/#vector-matching)',
    domain: 'PromQL',
    difficulty: 'hard',
    tags: ['ignoring', 'on', 'vector-matching'],
  },
  {
    id: 'pca-047',
    question: 'What is the purpose of the absent() function?',
    options: [
      'Removes absent values from a vector',
      'Returns 1 if the vector has no elements, empty otherwise',
      'Counts missing data points',
      'Filters out null values',
    ],
    correctAnswer: 1,
    explanation:
      'absent() returns an empty vector if the input has elements, or a 1-element vector if empty. Useful for alerting when a metric disappears.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#absent)',
    domain: 'PromQL',
    difficulty: 'hard',
    tags: ['absent', 'functions', 'alerting'],
  },
  {
    id: 'pca-048',
    question: 'How do you calculate the percentage of errors from total requests?',
    options: [
      'errors / total',
      'sum(errors) / sum(total)',
      'rate(errors[5m]) / rate(total[5m]) * 100',
      'errors_percent(errors, total)',
    ],
    correctAnswer: 2,
    explanation:
      'To calculate error rate percentage, divide the rate of errors by the rate of total requests and multiply by 100. Using rate() properly handles counter increases.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#rate)',
    domain: 'PromQL',
    difficulty: 'medium',
    tags: ['rate', 'percentage', 'calculations'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Instrumentation and Exporters
  // ============================================
  {
    id: 'pca-049',
    question: 'What is the Blackbox Exporter used for?',
    options: [
      'Probing endpoints over HTTP, HTTPS, DNS, TCP, ICMP',
      'Exporting system metrics from Linux',
      'Exporting application logs',
      'Monitoring container metrics',
    ],
    correctAnswer: 0,
    explanation:
      'Blackbox Exporter probes endpoints over various protocols to monitor availability and response times - useful for external black-box monitoring.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/guides/multi-target-exporter/)',
    domain: 'Instrumentation and Exporters',
    difficulty: 'medium',
    tags: ['blackbox-exporter', 'probing', 'availability'],
  },
  {
    id: 'pca-050',
    question: 'What should you avoid when creating custom metrics?',
    options: [
      'Using descriptive names',
      'Adding unit suffixes',
      'Including relevant labels',
      'High-cardinality labels (like user IDs or timestamps)',
    ],
    correctAnswer: 3,
    explanation:
      'High-cardinality labels create too many unique time series, causing memory and performance issues. Avoid labels with many unique values like user IDs, IPs, or timestamps.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/practices/naming/#labels)',
    domain: 'Instrumentation and Exporters',
    difficulty: 'hard',
    tags: ['cardinality', 'best-practices', 'labels'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Alerting & Dashboarding
  // ============================================
  {
    id: 'pca-051',
    question: 'What is a silence in Alertmanager?',
    options: [
      'An alert that has been resolved',
      'An alert with no labels',
      'A disabled alert rule',
      'A temporary mute for matching alerts',
    ],
    correctAnswer: 3,
    explanation:
      'Silences temporarily mute notifications for alerts matching specific criteria. Useful during maintenance windows or known issues being worked on.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/alerting/latest/alertmanager/#silences)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'medium',
    tags: ['alertmanager', 'silences', 'maintenance'],
  },
  {
    id: 'pca-052',
    question: 'What is the purpose of alert annotations?',
    options: [
      'Defining alert routing rules',
      'Setting alert severity',
      'Adding descriptive information like summary and description',
      'Configuring notification channels',
    ],
    correctAnswer: 2,
    explanation:
      'Annotations add descriptive metadata to alerts (summary, description, runbook_url). They can use templates to include dynamic values from the alerting expression.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/#templating)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'medium',
    tags: ['alert-rules', 'annotations', 'templates'],
  },
  {
    id: 'pca-053',
    question: 'What is the recommended approach for dashboard variable templating?',
    options: [
      'Hardcode all values',
      'Create separate dashboards for each variation',
      'Use external configuration files',
      'Use label_values() and query_result() for dynamic variables',
    ],
    correctAnswer: 3,
    explanation:
      'Grafana templates use label_values() to populate dropdowns from Prometheus labels dynamically. This creates reusable dashboards that adapt to your environment.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/visualization/grafana/)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'hard',
    tags: ['grafana', 'templates', 'variables'],
  },

  // ============================================
  // NEW QUESTIONS - Aligned with Official Curriculum
  // ============================================
  {
    id: 'pca-054',
    question: 'What is Prometheus NOT suitable for?',
    options: [
      'Collecting numeric time series data',
      'Alerting based on metric thresholds',
      'Storing event logs or raw request data requiring 100% accuracy',
      'Monitoring container and microservice metrics',
    ],
    correctAnswer: 2,
    explanation:
      'Prometheus is designed for reliability over completeness. It is not suitable for storing event logs, billing data, or scenarios requiring 100% accuracy. Use logging systems for detailed event data.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/introduction/overview/#when-does-it-not-fit)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'medium',
    tags: ['limitations', 'use-cases', 'fundamentals'],
  },
  {
    id: 'pca-055',
    question: 'What is the Prometheus exposition format?',
    options: [
      'A binary protocol for efficient data transfer',
      'A JSON-based format for API responses',
      'A simple text-based format where each line represents a metric sample',
      'An XML schema for configuration',
    ],
    correctAnswer: 2,
    explanation:
      'Prometheus uses a simple text-based exposition format where each line contains a metric name, optional labels, and a value. Comments start with #.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/instrumenting/exposition_formats/)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'medium',
    tags: ['exposition-format', 'text-format', 'scraping'],
  },
  {
    id: 'pca-056',
    question: 'What does the timestamp() function return in PromQL?',
    options: [
      'The current server time',
      'The timestamp of when the metric was created',
      'The timestamp of each sample as a new time series',
      'The time since Prometheus started',
    ],
    correctAnswer: 2,
    explanation:
      'timestamp() returns the timestamp of each sample in the input vector as a new time series. Useful for detecting stale data or calculating metric age.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#timestamp)',
    domain: 'PromQL',
    difficulty: 'hard',
    tags: ['timestamp', 'functions', 'staleness'],
  },
  {
    id: 'pca-057',
    question: 'What is Prometheus federation used for?',
    options: [
      'Connecting Prometheus to external databases',
      'Allowing one Prometheus server to scrape selected metrics from another',
      'Load balancing between multiple Prometheus instances',
      'Automatic failover between Prometheus servers',
    ],
    correctAnswer: 1,
    explanation:
      'Federation allows a Prometheus server to scrape selected time series from another Prometheus server. Used for hierarchical setups or aggregating metrics from multiple clusters.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/federation/)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'hard',
    tags: ['federation', 'scaling', 'architecture'],
  },
  {
    id: 'pca-058',
    question: 'What is the purpose of remote_write in Prometheus?',
    options: [
      'Writing alerts to external systems',
      'Sending samples to remote storage systems for long-term retention',
      'Writing configuration to remote servers',
      'Backup and restore functionality',
    ],
    correctAnswer: 1,
    explanation:
      'remote_write sends samples to remote storage systems (like Thanos, Cortex, or InfluxDB) for long-term retention beyond local TSDB limits.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write)',
    domain: 'Prometheus Fundamentals',
    difficulty: 'hard',
    tags: ['remote-write', 'storage', 'long-term-retention'],
  },
  {
    id: 'pca-059',
    question: 'What does the label_replace() function do in PromQL?',
    options: [
      'Deletes specified labels from metrics',
      'Renames all labels in a time series',
      'Creates or modifies labels using regex replacement on existing label values',
      'Sorts labels alphabetically',
    ],
    correctAnswer: 2,
    explanation:
      'label_replace() creates or modifies a label by applying regex replacement on an existing label value. Useful for transforming label formats or extracting parts of labels.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/prometheus/latest/querying/functions/#label_replace)',
    domain: 'PromQL',
    difficulty: 'hard',
    tags: ['label_replace', 'functions', 'labels'],
  },
  {
    id: 'pca-060',
    question: 'How does Alertmanager route alerts to different receivers?',
    options: [
      'Based on the alert name only',
      'Using a routing tree that matches alert labels against configured matchers',
      'Randomly distributing alerts across receivers',
      'Based on the time of day',
    ],
    correctAnswer: 1,
    explanation:
      'Alertmanager uses a routing tree where each route can match alerts based on label matchers. Routes are evaluated top-down, and the first match determines the receiver.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/alerting/latest/configuration/#route)',
    domain: 'Alerting & Dashboarding',
    difficulty: 'hard',
    tags: ['alertmanager', 'routing', 'configuration'],
  },
];
