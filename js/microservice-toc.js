// Microservice - Table of Contents Data
const microserviceTocData = `<a href="#microservice" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="microservice">Microservice</a>
<a href="#useful-resources" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="useful-resources">🔗 Useful Resources</a>
<a href="#key-benefits" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-benefits">🔑 Key Benefits:</a>
<a href="#communication-options" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="communication-options">🔌 Communication Options:</a>
<a href="#virtual-machines-vms" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="virtual-machines-vms">🖥️ Virtual Machines (VMs):</a>
<a href="#containers-eg-docker" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="containers-eg-docker">📦 Containers (e.g., Docker):</a>
<a href="#scalability" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="scalability">📈 Scalability:</a>
<a href="#common-caching-patterns" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="common-caching-patterns">🔂 Common Caching Patterns:</a>
<a href="#tools" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tools">🛠️ Tools:</a>
<a href="#how-it-works" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-it-works">🧭 How It Works:</a>
<a href="#popular-tools" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="popular-tools">🧰 Popular Tools:</a>
<a href="#types" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="types">🔧 Types:</a>
<a href="#topics-covered" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="topics-covered">📌 Topics Covered</a>
<a href="#1-client-side-load-balancing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-client-side-load-balancing">🧭 1. Client-Side Load Balancing</a>
<a href="#2-server-side-load-balancing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-server-side-load-balancing">🌐 2. Server-Side Load Balancing</a>
<a href="#3-kubernetes-based-load-balancing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-kubernetes-based-load-balancing">📦 3. Kubernetes-Based Load Balancing</a>
<a href="#4-dns-based-load-balancing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-dns-based-load-balancing">🔍 4. DNS-Based Load Balancing</a>
<a href="#5-globaldistributed-load-balancing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-globaldistributed-load-balancing">📡 5. Global/Distributed Load Balancing</a>
<a href="#load-balancing-algorithms" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="load-balancing-algorithms">⚙️ Load Balancing Algorithms</a>
<a href="#monitoring-auto-scaling" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="monitoring-auto-scaling">📊 Monitoring &amp; Auto-scaling</a>
<a href="#8-load-balancing-algorithms-you-must-know" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="8-load-balancing-algorithms-you-must-know">8 Load Balancing Algorithms You Must Know</a>
<a href="#1-round-robin" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-round-robin">1. Round Robin</a>
<a href="#2-least-connections" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-least-connections">2. Least Connections</a>
<a href="#3-weighted-round-robin" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-weighted-round-robin">3. Weighted Round Robin</a>
<a href="#4-weighted-least-connections" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-weighted-least-connections">4. Weighted Least Connections</a>
<a href="#5-ip-hash" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-ip-hash">5. IP Hash</a>
<a href="#6-least-response-time" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="6-least-response-time">6. Least Response Time</a>
<a href="#7-random" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="7-random">7. Random</a>
<a href="#8-least-bandwidth" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="8-least-bandwidth">8. Least Bandwidth</a>
<a href="#q1-how-do-you-handle-a-malfunctioning-microservice" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="q1-how-do-you-handle-a-malfunctioning-microservice">Q1: 🛑 How do you handle a malfunctioning microservice?</a>
<a href="#q2-why-do-we-use-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="q2-why-do-we-use-microservices">Q2: 🚀 Why do we use Microservices?</a>
<a href="#q3-how-will-you-maintain-load-balance-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="q3-how-will-you-maintain-load-balance-in-microservices">Q3: 🌐 How will you maintain load balance in microservices?</a>
<a href="#circuit-breaker-states" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="circuit-breaker-states">🔁 Circuit Breaker States</a>
<a href="#how-it-works" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-it-works">⚙️ How It Works</a>
<a href="#benefits" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="benefits">✅ Benefits</a>
<a href="#configuration-resilience4j-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="configuration-resilience4j-example">🔧 Configuration (Resilience4j Example)</a>
<a href="#common-libraries" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="common-libraries">🧰 Common Libraries</a>
<a href="#api-gateway-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="api-gateway-in-microservices">API Gateway in Microservices</a>
<a href="#key-responsibilities-of-an-api-gateway" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-responsibilities-of-an-api-gateway">🧭 Key Responsibilities of an API Gateway</a>
<a href="#built-in-load-balancing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="built-in-load-balancing">⚖️ Built-in Load Balancing</a>
<a href="#filters-pre-and-post" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="filters-pre-and-post">🔐 Filters: Pre and Post</a>
<a href="#popular-api-gateway-solutions" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="popular-api-gateway-solutions">🧰 Popular API Gateway Solutions</a>
<a href="#advantages-of-api-gateways" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="advantages-of-api-gateways">✅ Advantages of API Gateways</a>
<a href="#things-to-watch-out-for" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="things-to-watch-out-for">⚠️ Things to Watch Out For</a>
<a href="#feature-comparison-table" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="feature-comparison-table">📊 Feature Comparison Table</a>
<a href="#configuration-overview" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="configuration-overview">⚙️ Configuration Overview</a>
<a href="#when-to-use-what" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="when-to-use-what">✅ When to Use What?</a>
<a href="#example-istio-virtualservice-for-canary-deployment" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-istio-virtualservice-for-canary-deployment">💡 Example: Istio VirtualService for Canary Deployment</a>
<a href="#basic-configurationcode-samples-for-both-eureka-spring-bootnetflix-oss-and-apigee-google-cloud-api-gateway-to-help-you-get-started" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="basic-configurationcode-samples-for-both-eureka-spring-bootnetflix-oss-and-apigee-google-cloud-api-gateway-to-help-you-get-started"><strong>basic configuration/code samples</strong> for both <strong>Eureka</strong> (Spring Boot/Netflix OSS) and <strong>Apigee</strong> (Google Cloud API Gateway) to help you get started.</a>
<a href="#1-setup-eureka-server" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-setup-eureka-server">🖥️ 1. Setup Eureka Server</a>
<a href="#2-setup-eureka-client-microservice" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-setup-eureka-client-microservice">📦 2. Setup Eureka Client (Microservice)</a>
<a href="#1-create-a-proxy-in-the-apigee-console" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-create-a-proxy-in-the-apigee-console">🧾 1. Create a Proxy in the Apigee Console</a>
<a href="#2-example-proxy-via-openapi-spec" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-example-proxy-via-openapi-spec">💻 2. Example: Proxy via OpenAPI Spec</a>
<a href="#3-attach-auth-quota-and-caching-policies-xml" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-attach-auth-quota-and-caching-policies-xml">🔐 3. Attach Auth, Quota, and Caching Policies (XML)</a>
<a href="#4-example-sample-openapiyaml" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-example-sample-openapiyaml">📄 4. Example: Sample <code>openapi.yaml</code></a>
<a href="#5-monitoring-in-apigee" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-monitoring-in-apigee">📊 5. Monitoring in Apigee</a>
<a href="#microservice-strangler-fig-pattern-strategy" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="microservice-strangler-fig-pattern-strategy"><strong>Microservice Strangler Fig Pattern Strategy</strong></a>
<a href="#purpose" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="purpose">🔄 <strong>Purpose</strong></a>
<a href="#analogy-the-strangler-fig-tree" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="analogy-the-strangler-fig-tree">🌱 <strong>Analogy: The Strangler Fig Tree</strong></a>
<a href="#how-it-works" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-it-works">🧠 <strong>How It Works</strong></a>
<a href="#tools-often-used" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tools-often-used">🧰 Tools Often Used</a>
<a href="#advantages" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="advantages">✅ <strong>Advantages</strong></a>
<a href="#challenges" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="challenges">⚠️ <strong>Challenges</strong></a>
<a href="#example-use-case" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-use-case">💡 Example Use Case</a>
<a href="#summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary">📘 Summary</a>
<a href="#important-topics-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="important-topics-in-microservices">Important topics in Microservices</a>
<a href="#synchronous-communication" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="synchronous-communication">🔹 Synchronous Communication</a>
<a href="#asynchronous-communication" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="asynchronous-communication">🔹 Asynchronous Communication</a>
<a href="#common-patterns" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="common-patterns">🧠 Common Patterns</a>
<a href="#best-practices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="best-practices">🛡️ Best Practices</a>
<a href="#key-concepts" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-concepts">📘 Key Concepts</a>
<a href="#strategies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="strategies">🧾 Strategies</a>
<a href="#refresh-strategies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="refresh-strategies">🔁 Refresh strategies</a>
<a href="#tools" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tools">🧰 Tools</a>
<a href="#key-features" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-features">🏗️ Key Features</a>
<a href="#principles" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="principles">🗃️ Principles</a>
<a href="#tools" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tools">🛠️ Tools</a>
<a href="#api-versioning-strategies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="api-versioning-strategies">📌 API Versioning Strategies</a>
<a href="#documentation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="documentation">📘 Documentation</a>
<a href="#how-it-works-the-sidecar-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-it-works-the-sidecar-pattern">🧠 How It Works: The Sidecar Pattern</a>
<a href="#key-pillars-of-a-service-mesh" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-pillars-of-a-service-mesh">🏛️ Key Pillars of a Service Mesh</a>
<a href="#popular-tools" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="popular-tools">🧰 Popular Tools</a>
<a href="#when-to-use-what" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="when-to-use-what">✅ When to Use What?</a>
<a href="#example-istio-virtualservice-for-canary-deployment" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-istio-virtualservice-for-canary-deployment">💡 Example: Istio VirtualService for Canary Deployment</a>
<a href="#advantages" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="advantages">✅ Advantages</a>
<a href="#challenges" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="challenges">⚠️ Challenges</a>
<a href="#the-pillars-of-cloud-native-as-defined-by-the-cncf" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="the-pillars-of-cloud-native-as-defined-by-the-cncf">🏛️ The Pillars of Cloud Native (as defined by the CNCF)</a>
<a href="#how-microservices-enable-a-cloud-native-approach" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-microservices-enable-a-cloud-native-approach">✅ How Microservices Enable a Cloud-Native Approach</a>
<a href="#key-cloud-native-technologies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-cloud-native-technologies">🧰 Key Cloud-Native Technologies</a>
<a href="#when-to-go-cloud-native" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="when-to-go-cloud-native">✅ When to Go Cloud Native</a>
<a href="#how-it-works" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-it-works">🧠 How It Works</a>
<a href="#choreography-vs-orchestration-when-to-use-what" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="choreography-vs-orchestration-when-to-use-what">✅ Choreography vs. Orchestration: When to Use What?</a>
<a href="#example-e-commerce-order" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-e-commerce-order">💡 Example: E-commerce Order</a>
<a href="#when-to-use-the-saga-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="when-to-use-the-saga-pattern">✅ When to Use the Saga Pattern</a>
<a href="#how-it-works" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-it-works">🧠 How It Works</a>
<a href="#architecture" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="architecture">🏛️ Architecture</a>
<a href="#advantages" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="advantages">✅ Advantages</a>
<a href="#challenges" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="challenges">⚠️ Challenges</a>
<a href="#when-to-use-cqrs" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="when-to-use-cqrs">✅ When to Use CQRS</a>
<a href="#conceptual-code-example-java" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="conceptual-code-example-java">💡 Conceptual Code Example (Java)</a>
<a href="#cqrs-and-event-sourcing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="cqrs-and-event-sourcing">🤝 CQRS and Event Sourcing</a>
<a href="#cqrs-pattern-what-is-the-solution-scenario-used" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="cqrs-pattern-what-is-the-solution-scenario-used">Cqrs Pattern, what is the solution scenario used</a>
<a href="#1-separation-of-concerns" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-separation-of-concerns">1. <strong>Separation of Concerns:</strong></a>
<a href="#2-scalability" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-scalability">2. <strong>Scalability:</strong></a>
<a href="#3-flexibility-and-optimization" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-flexibility-and-optimization">3. <strong>Flexibility and Optimization:</strong></a>
<a href="#4-event-sourcing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-event-sourcing">4. <strong>Event Sourcing:</strong></a>
<a href="#5-complex-domain-logic" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-complex-domain-logic">5. <strong>Complex Domain Logic:</strong></a>
<a href="#1-circuit-breaker-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-circuit-breaker-pattern">🔌 1. Circuit Breaker Pattern</a>
<a href="#2-retry-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-retry-pattern">🔄 2. Retry Pattern</a>
<a href="#3-timeout-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-timeout-pattern">⏳ 3. Timeout Pattern</a>
<a href="#4-bulkhead-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-bulkhead-pattern">🧱 4. Bulkhead Pattern</a>
<a href="#5-rate-limiter-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-rate-limiter-pattern">🚦 5. Rate Limiter Pattern</a>
<a href="#when-to-use-which-resilience-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="when-to-use-which-resilience-pattern">✅ When to Use Which Resilience Pattern?</a>
<a href="#example-resilience4j-circuit-breaker-retry-javaspring-boot" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-resilience4j-circuit-breaker-retry-javaspring-boot">💡 Example: Resilience4j Circuit Breaker + Retry (Java/Spring Boot)</a>
<a href="#tools-for-resilience" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tools-for-resilience">🧰 Tools for Resilience</a>
<a href="#1-all-keys-ids-clear-purpose-and-usage" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="1-all-keys-ids-clear-purpose-and-usage">1. All Keys &amp; IDs — Clear Purpose and Usage</a>
<a href="#11-idempotency-key" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="11-idempotency-key">1.1 Idempotency Key</a>
<a href="#12-request-id" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="12-request-id">1.2 Request ID</a>
<a href="#13-correlation-id" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="13-correlation-id">1.3 Correlation ID</a>
<a href="#14-primary-key" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="14-primary-key">1.4 Primary Key</a>
<a href="#15-snowflake-id" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="15-snowflake-id">1.5 Snowflake ID</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example</a>
<a href="#16-etag" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="16-etag">1.6 ETag</a>
<a href="#2-framework-system-features" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-framework-system-features">2. Framework &amp; System Features</a>
<a href="#21-spring-integration-idempotentreceiver" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="21-spring-integration-idempotentreceiver">2.1 Spring Integration – IdempotentReceiver</a>
<a href="#22-shedlock" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="22-shedlock">2.2 ShedLock</a>
<a href="#23-etags-if-match" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="23-etags-if-match">2.3 ETags (<code>If-Match</code>)</a>
<a href="#24-custom-idempotency-implementation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="24-custom-idempotency-implementation">2.4 Custom Idempotency Implementation</a>
<a href="#3-full-ascii-diagram-all-concepts-included" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-full-ascii-diagram-all-concepts-included">3. Full ASCII Diagram (All Concepts Included)</a>
<a href="#4-where-each-one-is-used-one-glance-table" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-where-each-one-is-used-one-glance-table">4. Where Each One Is Used (One Glance Table)</a>
<a href="#5-mental-model-exam-gold" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-mental-model-exam-gold">5. Mental Model (Exam Gold 🧠)</a>
<a href="#6-interview-one-line-summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="6-interview-one-line-summary">6. Interview One-Line Summary</a>
<a href="#7-spring-boot-code-examples-minimal-correct" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="7-spring-boot-code-examples-minimal-correct">7. Spring Boot Code Examples (Minimal &amp; Correct)</a>
<a href="#71-idempotency-key-post-patch-api" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="71-idempotency-key-post-patch-api">7.1 Idempotency Key (POST / PATCH API)</a>
<a href="#72-request-id-correlation-id-filter" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="72-request-id-correlation-id-filter">7.2 Request ID &amp; Correlation ID (Filter)</a>
<a href="#73-snowflake-id-generator-simple" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="73-snowflake-id-generator-simple">7.3 Snowflake ID Generator (Simple)</a>
<a href="#74-etag-with-spring-boot-rest" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="74-etag-with-spring-boot-rest">7.4 ETag with Spring Boot (REST)</a>
<a href="#75-shedlock-distributed-cron" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="75-shedlock-distributed-cron">7.5 ShedLock (Distributed Cron)</a>
<a href="#76-spring-integration-idempotentreceiver" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="76-spring-integration-idempotentreceiver">7.6 Spring Integration – IdempotentReceiver</a>
<a href="#8-redis-schema-design-production" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="8-redis-schema-design-production">8. Redis Schema Design (Production)</a>
<a href="#9-etag-vs-version-very-important" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="9-etag-vs-version-very-important">9. ETag vs <code>@Version</code> (Very Important)</a>
<a href="#10-common-interview-trap-questions" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="10-common-interview-trap-questions">10. Common Interview Trap Questions ⚠️</a>
<a href="#is-idempotency-key-same-as-etag" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="is-idempotency-key-same-as-etag">❓ “Is Idempotency Key same as ETag?”</a>
<a href="#can-request-id-replace-correlation-id" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="can-request-id-replace-correlation-id">❓ “Can Request ID replace Correlation ID?”</a>
<a href="#can-snowflake-be-primary-key" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="can-snowflake-be-primary-key">❓ “Can Snowflake be Primary Key?”</a>
<a href="#is-etag-needed-if-using-version" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="is-etag-needed-if-using-version">❓ “Is ETag needed if using <code>@Version</code>?”</a>
<a href="#11-ultimate-mental-map" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="11-ultimate-mental-map">11. Ultimate Mental Map 🧠</a>
<a href="#12-final-interview-one-liner" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="12-final-interview-one-liner">12. Final Interview One-Liner</a>
<a href="#below-is-a-ready-to-copy-spring-boot-starter-template-that-already-includes" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="below-is-a-ready-to-copy-spring-boot-starter-template-that-already-includes">Below is a ready-to-copy Spring Boot starter template that already includes:</a>
<a href="#1-project-structure-recommended" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-project-structure-recommended">1. Project Structure (Recommended)</a>
<a href="#2-pomxml-minimal-complete" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-pomxml-minimal-complete">2. <code>pom.xml</code> (Minimal &amp; Complete)</a>
<a href="#3-request-id-correlation-id-filter" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-request-id-correlation-id-filter">3. Request ID &amp; Correlation ID Filter</a>
<a href="#4-redis-config-idempotency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-redis-config-idempotency">4. Redis Config (Idempotency)</a>
<a href="#5-idempotency-service" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-idempotency-service">5. Idempotency Service</a>
<a href="#6-snowflake-id-generator" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="6-snowflake-id-generator">6. Snowflake ID Generator</a>
<a href="#7-entity-with-version-etag-support" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="7-entity-with-version-etag-support">7. Entity with <code>@Version</code> (ETag support)</a>
<a href="#8-repository" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="8-repository">8. Repository</a>
<a href="#9-service-layer" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="9-service-layer">9. Service Layer</a>
<a href="#10-controller-idempotency-etag" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="10-controller-idempotency-etag">10. Controller (Idempotency + ETag)</a>
<a href="#11-shedlock-config-job" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="11-shedlock-config-job">11. ShedLock Config + Job</a>
<a href="#12-applicationyml" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="12-applicationyml">12. <code>application.yml</code></a>
<a href="#13-what-this-template-gives-you" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="13-what-this-template-gives-you">13. What This Template Gives You 🚀</a>
<a href="#key-components-of-microservices-architecture" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="key-components-of-microservices-architecture">🧩 Key Components of Microservices Architecture</a>
<a href="#real-world-microservice-example-graceful-shutdown-flag-in-spring-boot" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="real-world-microservice-example-graceful-shutdown-flag-in-spring-boot"><strong>Real-World Microservice Example: Graceful Shutdown Flag in Spring Boot</strong></a>
<a href="#example-background-job-with-volatile-flag" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-background-job-with-volatile-flag"><strong>Example: Background Job with <code>volatile</code> flag</strong></a>
<a href="#triggering-stop-on-shutdown" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="triggering-stop-on-shutdown"><strong>Triggering Stop on Shutdown</strong></a>
<a href="#main-application" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="main-application"><strong>Main Application</strong></a>
<a href="#how-it-works" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-it-works"><strong>How it works</strong></a>
<a href="#scenario-counter-increment" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="scenario-counter-increment"><strong>Scenario: Counter Increment</strong></a>
<a href="#real-world-microservice-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="real-world-microservice-example"><strong>Real-World Microservice Example</strong></a>
<a href="#microservice-questions" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="microservice-questions">Microservice questions</a>
<a href="#1-what-are-microservices-and-how-do-they-differ-from-monolithic-architecture" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-what-are-microservices-and-how-do-they-differ-from-monolithic-architecture"><strong>1. What are microservices, and how do they differ from monolithic architecture?</strong></a>
<a href="#2-what-are-the-main-advantages-of-using-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-what-are-the-main-advantages-of-using-microservices"><strong>2. What are the main advantages of using microservices?</strong></a>
<a href="#3-what-are-the-challenges-of-microservice-architectures" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-what-are-the-challenges-of-microservice-architectures"><strong>3. What are the challenges of microservice architectures?</strong></a>
<a href="#4-how-do-microservices-communicate-with-each-other" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-how-do-microservices-communicate-with-each-other"><strong>4. How do microservices communicate with each other?</strong></a>
<a href="#5-what-is-service-discovery-and-why-is-it-needed-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-what-is-service-discovery-and-why-is-it-needed-in-microservices"><strong>5. What is service discovery, and why is it needed in microservices?</strong></a>
<a href="#6-can-you-explain-api-gateway-and-its-role-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="6-can-you-explain-api-gateway-and-its-role-in-microservices"><strong>6. Can you explain API Gateway and its role in microservices?</strong></a>
<a href="#7-how-do-you-handle-data-consistency-across-multiple-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="7-how-do-you-handle-data-consistency-across-multiple-microservices"><strong>7. How do you handle data consistency across multiple microservices?</strong></a>
<a href="#8-what-is-the-difference-between-synchronous-and-asynchronous-communication-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="8-what-is-the-difference-between-synchronous-and-asynchronous-communication-in-microservices"><strong>8. What is the difference between synchronous and asynchronous communication in microservices?</strong></a>
<a href="#9-how-do-you-handle-transactions-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="9-how-do-you-handle-transactions-in-microservices"><strong>9. How do you handle transactions in microservices?</strong></a>
<a href="#10-what-patterns-are-used-to-ensure-reliability-in-microservices-eg-circuit-breaker" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="10-what-patterns-are-used-to-ensure-reliability-in-microservices-eg-circuit-breaker"><strong>10. What patterns are used to ensure reliability in microservices (e.g., Circuit Breaker)?</strong></a>
<a href="#11-how-do-you-monitor-and-log-across-distributed-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="11-how-do-you-monitor-and-log-across-distributed-microservices"><strong>11. How do you monitor and log across distributed microservices?</strong></a>
<a href="#12-what-is-the-role-of-containerization-eg-docker-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="12-what-is-the-role-of-containerization-eg-docker-in-microservices"><strong>12. What is the role of containerization (e.g., Docker) in microservices?</strong></a>
<a href="#13-how-do-orchestration-tools-like-kubernetes-help-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="13-how-do-orchestration-tools-like-kubernetes-help-in-microservices"><strong>13. How do orchestration tools like Kubernetes help in microservices?</strong></a>
<a href="#14-what-is-eventual-consistency-and-how-does-it-apply-to-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="14-what-is-eventual-consistency-and-how-does-it-apply-to-microservices"><strong>14. What is eventual consistency, and how does it apply to microservices?</strong></a>
<a href="#15-how-do-you-manage-database-per-service-vs-shared-database-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="15-how-do-you-manage-database-per-service-vs-shared-database-in-microservices"><strong>15. How do you manage database per service vs. shared database in microservices?</strong></a>
<a href="#16-what-are-some-best-practices-for-designing-restful-apis-for-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="16-what-are-some-best-practices-for-designing-restful-apis-for-microservices"><strong>16. What are some best practices for designing RESTful APIs for microservices?</strong></a>
<a href="#17-how-do-you-secure-microservices-communication" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="17-how-do-you-secure-microservices-communication"><strong>17. How do you secure microservices communication?</strong></a>
<a href="#18-what-is-distributed-tracing-and-why-is-it-important" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="18-what-is-distributed-tracing-and-why-is-it-important"><strong>18. What is distributed tracing, and why is it important?</strong></a>
<a href="#19-can-you-explain-the-concept-of-bounded-context-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="19-can-you-explain-the-concept-of-bounded-context-in-microservices"><strong>19. Can you explain the concept of “bounded context” in microservices?</strong></a>
<a href="#20-how-do-you-test-microservices-unit-integration-contract-testing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="20-how-do-you-test-microservices-unit-integration-contract-testing"><strong>20. How do you test microservices (unit, integration, contract testing)?</strong></a>
<a href="#21-what-is-the-saga-pattern-and-when-would-you-use-it" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="21-what-is-the-saga-pattern-and-when-would-you-use-it"><strong>21. What is the Saga pattern, and when would you use it?</strong></a>
<a href="#22-how-do-you-handle-versioning-of-microservices-apis" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="22-how-do-you-handle-versioning-of-microservices-apis"><strong>22. How do you handle versioning of microservices APIs?</strong></a>
<a href="#23-what-is-idempotency-and-why-is-it-important-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="23-what-is-idempotency-and-why-is-it-important-in-microservices"><strong>23. What is idempotency, and why is it important in microservices?</strong></a>
<a href="#idempotency-in-rest-api-simple-clear" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="idempotency-in-rest-api-simple-clear">🔁 Idempotency in REST API (Simple &amp; Clear)</a>
<a href="#1-why-idempotency-is-needed" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-why-idempotency-is-needed">1️⃣ Why Idempotency is needed</a>
<a href="#2-http-methods-idempotency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-http-methods-idempotency">2️⃣ HTTP Methods &amp; Idempotency</a>
<a href="#3-real-life-example-problem" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-real-life-example-problem">3️⃣ Real-Life Example (Problem)</a>
<a href="#4-solution-idempotency-key" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-solution-idempotency-key">4️⃣ Solution: Idempotency Key 🔑</a>
<a href="#server-logic" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="server-logic">Server Logic:</a>
<a href="#5-ascii-flow-diagram-complete" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-ascii-flow-diagram-complete">5️⃣ ASCII Flow Diagram (Complete)</a>
<a href="#6-where-to-store-idempotency-keys" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="6-where-to-store-idempotency-keys">6️⃣ Where to Store Idempotency Keys</a>
<a href="#7-idempotency-vs-request-id-vs-etag" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="7-idempotency-vs-request-id-vs-etag">7️⃣ Idempotency vs Request ID vs ETag</a>
<a href="#why-etag-is-not-in-flow" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="why-etag-is-not-in-flow">Why ETag is not in flow?</a>
<a href="#8-when-to-use-idempotency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="8-when-to-use-idempotency">8️⃣ When to Use Idempotency ✅</a>
<a href="#9-spring-boot-simple-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="9-spring-boot-simple-example">9️⃣ Spring Boot – Simple Example</a>
<a href="#key-takeaway" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="key-takeaway">🔑 Key Takeaway</a>
<a href="#24-how-do-you-deal-with-inter-service-failures" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="24-how-do-you-deal-with-inter-service-failures"><strong>24. How do you deal with inter-service failures?</strong></a>
<a href="#25-what-design-patterns-are-commonly-used-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="25-what-design-patterns-are-commonly-used-in-microservices"><strong>25. What design patterns are commonly used in microservices?</strong></a>
<a href="#26-how-do-you-handle-configuration-management-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="26-how-do-you-handle-configuration-management-in-microservices"><strong>26. How do you handle configuration management in microservices?</strong></a>
<a href="#27-what-is-the-difference-between-orchestration-and-choreography-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="27-what-is-the-difference-between-orchestration-and-choreography-in-microservices"><strong>27. What is the difference between orchestration and choreography in microservices?</strong></a>
<a href="#28-how-do-you-deploy-and-scale-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="28-how-do-you-deploy-and-scale-microservices"><strong>28. How do you deploy and scale microservices?</strong></a>
<a href="#29-what-role-does-cicd-play-in-microservices-development" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="29-what-role-does-cicd-play-in-microservices-development"><strong>29. What role does CI/CD play in microservices development?</strong></a>
<a href="#30-what-are-some-anti-patterns-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="30-what-are-some-anti-patterns-in-microservices"><strong>30. What are some anti-patterns in microservices?</strong></a>
<a href="#16-how-would-you-design-inter-service-communication-to-be-fault-tolerant" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="16-how-would-you-design-inter-service-communication-to-be-fault-tolerant"><strong>16️⃣ How would you design inter-service communication to be fault-tolerant?</strong></a>
<a href="#problem" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="problem">💡 Problem</a>
<a href="#fault-tolerance-techniques" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="fault-tolerance-techniques">🧩 Fault-tolerance Techniques</a>
<a href="#example-resilience4j" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-resilience4j">✅ Example (Resilience4j)</a>
<a href="#tip" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tip">🧠 Tip</a>
<a href="#17-whats-the-difference-between-api-gateway-vs-load-balancer" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="17-whats-the-difference-between-api-gateway-vs-load-balancer"><strong>17️⃣ What’s the difference between API Gateway vs Load Balancer?</strong></a>
<a href="#18-how-do-you-implement-distributed-tracing-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="18-how-do-you-implement-distributed-tracing-in-microservices"><strong>18️⃣ How do you implement distributed tracing in microservices?</strong></a>
<a href="#goal" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="goal">💡 Goal</a>
<a href="#how-it-works" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-it-works">⚙️ How It Works</a>
<a href="#implementation-steps" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="implementation-steps">🔧 Implementation Steps</a>
<a href="#benefits" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="benefits">🧠 Benefits</a>
<a href="#19-explain-the-saga-pattern-in-distributed-transactions" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="19-explain-the-saga-pattern-in-distributed-transactions"><strong>19️⃣ Explain the Saga pattern in distributed transactions</strong></a>
<a href="#problem" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="problem">💡 Problem</a>
<a href="#saga-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="saga-pattern">✅ <strong>Saga Pattern</strong></a>
<a href="#types" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="types">🔹 Types</a>
<a href="#example-order-payment-inventory" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-order-payment-inventory">🧩 Example (Order → Payment → Inventory)</a>
<a href="#key-points" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-points">🧠 Key Points</a>
<a href="#20-how-would-you-secure-internal-service-to-service-communication" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="20-how-would-you-secure-internal-service-to-service-communication"><strong>20️⃣ How would you secure internal service-to-service communication?</strong></a>
<a href="#layers-of-security" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="layers-of-security">🧩 Layers of Security</a>
<a href="#example-mtls" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-mtls">🔐 Example (mTLS)</a>
<a href="#example-jwt-propagation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-jwt-propagation">🔐 Example (JWT propagation)</a>
<a href="#advanced-service-mesh" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="advanced-service-mesh">🧠 Advanced: Service Mesh</a>
<a href="#summary-table" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary-table">✅ <strong>Summary Table</strong></a>
<a href="#11-data-consistency-without-distributed-transactions" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="11-data-consistency-without-distributed-transactions"><strong>11️⃣ Data Consistency Without Distributed Transactions</strong></a>
<a href="#12-saga-pattern-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="12-saga-pattern-example"><strong>12️⃣ Saga Pattern Example</strong></a>
<a href="#13-securing-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="13-securing-microservices"><strong>13️⃣ Securing Microservices</strong></a>
<a href="#14-kafka-consumer-slower-than-producer" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="14-kafka-consumer-slower-than-producer"><strong>14️⃣ Kafka Consumer Slower Than Producer</strong></a>
<a href="#15-preventing-cascade-failure" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="15-preventing-cascade-failure"><strong>15️⃣ Preventing Cascade Failure</strong></a>
<a href="#15-key-api-design-rules-best-practices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="15-key-api-design-rules-best-practices"><strong>15 Key API Design Rules / Best Practices</strong></a>
<a href="#quick-tip" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="quick-tip">✅ Quick Tip</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = microserviceTocData;
}
