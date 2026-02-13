// Api - Table of Contents Data
const apiTocData = `<a href="#mastering-apis" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="mastering-apis">🧠 Mastering APIs</a>
<a href="#rest-api-rules-principles-guidelines" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="rest-api-rules-principles-guidelines">🌐 REST API – Rules, Principles &amp; Guidelines</a>
<a href="#1-core-rest-principles-architectural-constraints" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-core-rest-principles-architectural-constraints">1️⃣ Core REST Principles (Architectural Constraints)</a>
<a href="#1-clientserver-separation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-clientserver-separation">1. Client–Server Separation</a>
<a href="#2-statelessness-most-important" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-statelessness-most-important">2. Statelessness (MOST IMPORTANT)</a>
<a href="#3-cacheability" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-cacheability">3. Cacheability</a>
<a href="#4-uniform-interface" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-uniform-interface">4. Uniform Interface</a>
<a href="#5-layered-system" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-layered-system">5. Layered System</a>
<a href="#6-code-on-demand-optional" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="6-code-on-demand-optional">6. Code on Demand (Optional)</a>
<a href="#2-resource-design-rules" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-resource-design-rules">2️⃣ Resource Design Rules</a>
<a href="#1-use-nouns-not-verbs" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-use-nouns-not-verbs">1. Use <strong>Nouns</strong>, Not Verbs</a>
<a href="#2-use-plural-resource-names" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-use-plural-resource-names">2. Use Plural Resource Names</a>
<a href="#3-hierarchical-resources" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-hierarchical-resources">3. Hierarchical Resources</a>
<a href="#3-http-method-rules-idempotency-included" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-http-method-rules-idempotency-included">3️⃣ HTTP Method Rules (Idempotency Included)</a>
<a href="#http-methods-safety-idempotency-purpose" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="http-methods-safety-idempotency-purpose">🧭 HTTP Methods – Safety, Idempotency &amp; Purpose</a>
<a href="#http-methods-comparison-table" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="http-methods-comparison-table">📋 HTTP Methods Comparison Table</a>
<a href="#key-exam-interview-notes" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-exam-interview-notes">🧠 Key Exam &amp; Interview Notes</a>
<a href="#one-line-memory-trick" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="one-line-memory-trick">🎯 One-Line Memory Trick</a>
<a href="#real-world-usage-tip" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="real-world-usage-tip">📌 Real-World Usage Tip</a>
<a href="#one-line-memory-trick" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="one-line-memory-trick">🧠 One-Line Memory Trick</a>
<a href="#visual-ascii-summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="visual-ascii-summary">🔁 Visual ASCII Summary</a>
<a href="#idempotency-in-microservices-why-it-matters-more-than-you-think" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="idempotency-in-microservices-why-it-matters-more-than-you-think">🔁 Idempotency in Microservices — Why It Matters More Than You Think</a>
<a href="#what-is-idempotency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="what-is-idempotency">🧠 What Is Idempotency?</a>
<a href="#why-idempotency-matters-in-real-systems" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="why-idempotency-matters-in-real-systems">❓ Why Idempotency Matters in Real Systems</a>
<a href="#real-time-example-payment-service" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="real-time-example-payment-service">💳 Real-Time Example: Payment Service</a>
<a href="#scenario" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="scenario">Scenario:</a>
<a href="#how-idempotency-solves-this-problem" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="how-idempotency-solves-this-problem">✅ How Idempotency Solves This Problem</a>
<a href="#step-by-step-solution" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-by-step-solution">Step-by-step solution:</a>
<a href="#result" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="result">🎯 Result</a>
<a href="#apis-that-must-be-idempotent" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="apis-that-must-be-idempotent">📌 APIs That MUST Be Idempotent</a>
<a href="#key-takeaway" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="key-takeaway">🧩 Key Takeaway</a>
<a href="#idempotency-in-microservices-why-it-matters-more-than-you-think" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="idempotency-in-microservices-why-it-matters-more-than-you-think">🔁 Idempotency in Microservices — Why It Matters More Than You Think</a>
<a href="#what-is-idempotency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="what-is-idempotency">🧠 What Is Idempotency?</a>
<a href="#why-idempotency-is-critical" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="why-idempotency-is-critical">🔄 Why Idempotency Is Critical</a>
<a href="#payment-service-example-problem" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="payment-service-example-problem">💳 Payment Service Example (Problem)</a>
<a href="#sequence-diagram-without-idempotency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="sequence-diagram-without-idempotency">🧭 Sequence Diagram — Without Idempotency</a>
<a href="#how-idempotency-fixes-this" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="how-idempotency-fixes-this">✅ How Idempotency Fixes This</a>
<a href="#sequence-diagram-with-idempotency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="sequence-diagram-with-idempotency">🧭 Sequence Diagram — With Idempotency</a>
<a href="#rest-api-idempotent-payment-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="rest-api-idempotent-payment-example">🧩 REST API — Idempotent Payment Example</a>
<a href="#request" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="request">Request</a>
<a href="#backend-logic-pseudo-code" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="backend-logic-pseudo-code">Backend Logic (Pseudo-Code)</a>
<a href="#database-table-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="database-table-example">Database Table (Example)</a>
<a href="#kafka-message-queue-idempotent-consumer" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="kafka-message-queue-idempotent-consumer">📦 Kafka / Message Queue — Idempotent Consumer</a>
<a href="#problem" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="problem">Problem</a>
<a href="#solution-idempotent-consumer" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="solution-idempotent-consumer">Solution: Idempotent Consumer</a>
<a href="#storage-for-deduplication" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="storage-for-deduplication">Storage for Deduplication</a>
<a href="#apis-that-must-be-idempotent" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="apis-that-must-be-idempotent">📌 APIs That MUST Be Idempotent</a>
<a href="#final-takeaway" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="final-takeaway">🏁 Final Takeaway</a>
<a href="#ttl-strategies-for-idempotency-keys-production-grade" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="ttl-strategies-for-idempotency-keys-production-grade">⏳ TTL Strategies for Idempotency Keys (Production-Grade)</a>
<a href="#why-ttl-is-important" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="why-ttl-is-important">🎯 Why TTL Is Important</a>
<a href="#core-ttl-design-principles" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="core-ttl-design-principles">🧠 Core TTL Design Principles</a>
<a href="#common-ttl-strategies" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="common-ttl-strategies">⏱️ Common TTL Strategies</a>
<a href="#1-fixed-ttl-most-common" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-fixed-ttl-most-common">1️⃣ Fixed TTL (Most Common)</a>
<a href="#2-retry-window-based-ttl-best-practice" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-retry-window-based-ttl-best-practice">2️⃣ Retry-Window-Based TTL (Best Practice)</a>
<a href="#3-state-based-ttl-advanced" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-state-based-ttl-advanced">3️⃣ State-Based TTL (Advanced)</a>
<a href="#4-sliding-ttl-rare-but-useful" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-sliding-ttl-rare-but-useful">4️⃣ Sliding TTL (Rare but Useful)</a>
<a href="#5-permanent-archival-high-risk-systems" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-permanent-archival-high-risk-systems">5️⃣ Permanent + Archival (High-Risk Systems)</a>
<a href="#ttl-by-storage-type" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="ttl-by-storage-type">🗄️ TTL by Storage Type</a>
<a href="#redis" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="redis">Redis</a>
<a href="#dynamodb" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="dynamodb">DynamoDB</a>
<a href="#sql-databases" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="sql-databases">SQL Databases</a>
<a href="#recommended-ttls-real-world-defaults" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="recommended-ttls-real-world-defaults">🧭 Recommended TTLs (Real-World Defaults)</a>
<a href="#common-ttl-mistakes" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="common-ttl-mistakes">⚠️ Common TTL Mistakes</a>
<a href="#final-rule-of-thumb" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="final-rule-of-thumb">🏁 Final Rule of Thumb</a>
<a href="#4-http-status-code-guidelines" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-http-status-code-guidelines">4️⃣ HTTP Status Code Guidelines</a>
<a href="#1xx-informational" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1xx-informational">🔵 1xx — Informational</a>
<a href="#2xx-success" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2xx-success">🟢 2xx — Success</a>
<a href="#3xx-redirection" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3xx-redirection">🟡 3xx — Redirection</a>
<a href="#4xx-client-errors" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4xx-client-errors">🟠 4xx — Client Errors</a>
<a href="#5xx-server-errors" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5xx-server-errors">🔴 5xx — Server Errors</a>
<a href="#5-request-response-design" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-request-response-design">5️⃣ Request &amp; Response Design</a>
<a href="#use-json-standard" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="use-json-standard">Use JSON (Standard)</a>
<a href="#consistent-response-structure" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="consistent-response-structure">Consistent Response Structure</a>
<a href="#use-meaningful-error-responses" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="use-meaningful-error-responses">Use Meaningful Error Responses</a>
<a href="#6-versioning-rules" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="6-versioning-rules">6️⃣ Versioning Rules</a>
<a href="#preferred-url-versioning" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="preferred-url-versioning">Preferred (URL Versioning)</a>
<a href="#7-pagination-sorting-filtering" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="7-pagination-sorting-filtering">7️⃣ Pagination, Sorting &amp; Filtering</a>
<a href="#pagination" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="pagination">Pagination</a>
<a href="#sorting" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="sorting">Sorting</a>
<a href="#filtering" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="filtering">Filtering</a>
<a href="#8-security-guidelines" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="8-security-guidelines">8️⃣ Security Guidelines</a>
<a href="#authentication" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="authentication">Authentication</a>
<a href="#authorization" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="authorization">Authorization</a>
<a href="#https-mandatory" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="https-mandatory">HTTPS Mandatory</a>
<a href="#9-idempotency-reliability" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="9-idempotency-reliability">9️⃣ Idempotency &amp; Reliability</a>
<a href="#use-idempotency-keys-for-post" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="use-idempotency-keys-for-post">Use Idempotency Keys for POST</a>
<a href="#use-timeouts-retries" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="use-timeouts-retries">Use Timeouts &amp; Retries</a>
<a href="#concurrency-consistency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="concurrency-consistency">🔟 Concurrency &amp; Consistency</a>
<a href="#optimistic-locking-with-etag" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="optimistic-locking-with-etag">Optimistic Locking with ETag</a>
<a href="#11-naming-formatting-rules" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="11-naming-formatting-rules">1️⃣1️⃣ Naming &amp; Formatting Rules</a>
<a href="#12-logging-tracing-monitoring" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="12-logging-tracing-monitoring">1️⃣2️⃣ Logging, Tracing &amp; Monitoring</a>
<a href="#request-id" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="request-id">Request ID</a>
<a href="#13-documentation-rules" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="13-documentation-rules">1️⃣3️⃣ Documentation Rules</a>
<a href="#14-common-rest-anti-patterns" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="14-common-rest-anti-patterns">1️⃣4️⃣ Common REST Anti-Patterns ❌</a>
<a href="#rest-api-golden-rules-interview-favorite" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="rest-api-golden-rules-interview-favorite">✅ REST API GOLDEN RULES (Interview Favorite)</a>
<a href="#one-line-summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="one-line-summary">🧠 One-Line Summary</a>
<a href="#top-6-api-styles-choosing-the-best-fit-for-your-project" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="top-6-api-styles-choosing-the-best-fit-for-your-project">Top 6 API Styles: Choosing the Best Fit for Your Project</a>
<a href="#1-soap-simple-object-access-protocol" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-soap-simple-object-access-protocol">1. <strong>SOAP (Simple Object Access Protocol)</strong></a>
<a href="#2-restful-representational-state-transfer" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-restful-representational-state-transfer">2. <strong>RESTful (Representational State Transfer)</strong></a>
<a href="#3-graphql" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-graphql">3. <strong>GraphQL</strong></a>
<a href="#4-grpc" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-grpc">4. <strong>gRPC</strong></a>
<a href="#5-websockets" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-websockets">5. <strong>WebSockets</strong></a>
<a href="#6-webhooks" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="6-webhooks">6. <strong>Webhooks</strong></a>
<a href="#conclusion" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="conclusion">🧭 <strong>Conclusion</strong></a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = apiTocData;
}
