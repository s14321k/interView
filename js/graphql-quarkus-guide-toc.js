// Graphql Quarkus Guide - Table of Contents Data
const graphqlQuarkusGuideTocData = `<a href="#graphql-in-quarkus-complete-guide" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="graphql-in-quarkus-complete-guide">GraphQL in Quarkus: Complete Guide</a>
<a href="#table-of-contents" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="table-of-contents">Table of Contents</a>
<a href="#basic-part" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="basic-part">Basic Part</a>
<a href="#what-is-quarkus" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-is-quarkus">What is Quarkus?</a>
<a href="#graphql-in-quarkus" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="graphql-in-quarkus">GraphQL in Quarkus</a>
<a href="#setting-up-graphql-in-quarkus" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="setting-up-graphql-in-quarkus">Setting Up GraphQL in Quarkus</a>
<a href="#basic-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="basic-configuration">Basic Configuration</a>
<a href="#creating-your-first-graphql-api" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="creating-your-first-graphql-api">Creating Your First GraphQL API</a>
<a href="#generated-graphql-schema" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="generated-graphql-schema">Generated GraphQL Schema</a>
<a href="#testing-your-api" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="testing-your-api">Testing Your API</a>
<a href="#request-flow-in-quarkus" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="request-flow-in-quarkus">Request Flow in Quarkus</a>
<a href="#microprofile-graphql-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="microprofile-graphql-annotations">MicroProfile GraphQL Annotations</a>
<a href="#intermediate-part" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="intermediate-part">Intermediate Part</a>
<a href="#complex-type-relationships" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="complex-type-relationships">Complex Type Relationships</a>
<a href="#input-types" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="input-types">Input Types</a>
<a href="#interfaces-and-unions" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="interfaces-and-unions">Interfaces and Unions</a>
<a href="#error-handling" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="error-handling">Error Handling</a>
<a href="#data-fetching-with-panache" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="data-fetching-with-panache">Data Fetching with Panache</a>
<a href="#pagination" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="pagination">Pagination</a>
<a href="#authentication-and-security" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="authentication-and-security">Authentication and Security</a>
<a href="#sourcedatafetcher-pattern" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="sourcedatafetcher-pattern">Source/DataFetcher Pattern</a>
<a href="#reactive-graphql" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="reactive-graphql">Reactive GraphQL</a>
<a href="#advanced-part" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="advanced-part">Advanced Part</a>
<a href="#dataloader-pattern-batch-loading" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="dataloader-pattern-batch-loading">DataLoader Pattern (Batch Loading)</a>
<a href="#custom-scalars" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="custom-scalars">Custom Scalars</a>
<a href="#subscriptions-websocket" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="subscriptions-websocket">Subscriptions (WebSocket)</a>
<a href="#federation-support" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="federation-support">Federation Support</a>
<a href="#performance-optimization" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="performance-optimization">Performance Optimization</a>
<a href="#testing-graphql-apis" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="testing-graphql-apis">Testing GraphQL APIs</a>
<a href="#native-compilation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="native-compilation">Native Compilation</a>
<a href="#monitoring-and-metrics" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="monitoring-and-metrics">Monitoring and Metrics</a>
<a href="#openapi-integration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="openapi-integration">OpenAPI Integration</a>
<a href="#production-architecture" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="production-architecture">Production Architecture</a>
<a href="#best-practices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="best-practices">Best Practices</a>
<a href="#deployment" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="deployment">Deployment</a>
<a href="#conclusion" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="conclusion">Conclusion</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = graphqlQuarkusGuideTocData;
}
