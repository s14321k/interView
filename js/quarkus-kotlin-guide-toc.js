// Quarkus Kotlin Guide - Table of Contents Data
const quarkusKotlinGuideTocData = `<a href="#quarkus-with-kotlin-complete-guide" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="quarkus-with-kotlin-complete-guide">Quarkus with Kotlin: Complete Guide</a>
<a href="#table-of-contents" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="table-of-contents">Table of Contents</a>
<a href="#beginner-level" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="beginner-level">Beginner Level</a>
<a href="#1-project-setup" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-project-setup">1. Project Setup</a>
<a href="#creating-a-new-quarkus-kotlin-project" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="creating-a-new-quarkus-kotlin-project">Creating a New Quarkus + Kotlin Project</a>
<a href="#basic-gradle-configuration-buildgradlekts" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="basic-gradle-configuration-buildgradlekts">Basic Gradle Configuration (build.gradle.kts)</a>
<a href="#2-first-rest-endpoint" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-first-rest-endpoint">2. First REST Endpoint</a>
<a href="#3-dependency-injection-with-cdi" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-dependency-injection-with-cdi">3. Dependency Injection with CDI</a>
<a href="#4-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-configuration">4. Configuration</a>
<a href="#applicationproperties" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="applicationproperties">application.properties</a>
<a href="#reading-configuration-in-kotlin" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="reading-configuration-in-kotlin">Reading Configuration in Kotlin</a>
<a href="#5-data-classes-and-json" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-data-classes-and-json">5. Data Classes and JSON</a>
<a href="#6-basic-testing" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="6-basic-testing">6. Basic Testing</a>
<a href="#intermediate-level" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="intermediate-level">Intermediate Level</a>
<a href="#7-database-integration-with-panache" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="7-database-integration-with-panache">7. Database Integration with Panache</a>
<a href="#adding-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependencies">Adding Dependencies</a>
<a href="#database-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="database-configuration">Database Configuration</a>
<a href="#entity-with-panache-kotlin" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="entity-with-panache-kotlin">Entity with Panache Kotlin</a>
<a href="#repository-pattern-alternative" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="repository-pattern-alternative">Repository Pattern (Alternative)</a>
<a href="#8-transactional-services" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="8-transactional-services">8. Transactional Services</a>
<a href="#9-exception-handling" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="9-exception-handling">9. Exception Handling</a>
<a href="#10-validation" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="10-validation">10. Validation</a>
<a href="#adding-dependency" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependency">Adding Dependency</a>
<a href="#dto-with-validation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="dto-with-validation">DTO with Validation</a>
<a href="#validated-resource" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="validated-resource">Validated Resource</a>
<a href="#11-reactive-programming" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="11-reactive-programming">11. Reactive Programming</a>
<a href="#adding-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependencies">Adding Dependencies</a>
<a href="#reactive-repository" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="reactive-repository">Reactive Repository</a>
<a href="#reactive-resource" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="reactive-resource">Reactive Resource</a>
<a href="#12-scheduled-jobs" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="12-scheduled-jobs">12. Scheduled Jobs</a>
<a href="#13-websockets" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="13-websockets">13. WebSockets</a>
<a href="#adding-dependency" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependency">Adding Dependency</a>
<a href="#websocket-endpoint" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="websocket-endpoint">WebSocket Endpoint</a>
<a href="#advanced-level" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="advanced-level">Advanced Level</a>
<a href="#14-security-with-jwt" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="14-security-with-jwt">14. Security with JWT</a>
<a href="#adding-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependencies">Adding Dependencies</a>
<a href="#configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="configuration">Configuration</a>
<a href="#token-generation-service" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="token-generation-service">Token Generation Service</a>
<a href="#authentication-resource" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="authentication-resource">Authentication Resource</a>
<a href="#secured-resource" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="secured-resource">Secured Resource</a>
<a href="#15-messaging-with-kafka" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="15-messaging-with-kafka">15. Messaging with Kafka</a>
<a href="#adding-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependencies">Adding Dependencies</a>
<a href="#configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="configuration">Configuration</a>
<a href="#message-models" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="message-models">Message Models</a>
<a href="#message-producer" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="message-producer">Message Producer</a>
<a href="#message-consumer" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="message-consumer">Message Consumer</a>
<a href="#16-caching" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="16-caching">16. Caching</a>
<a href="#adding-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependencies">Adding Dependencies</a>
<a href="#cached-service" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="cached-service">Cached Service</a>
<a href="#17-graphql-api" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="17-graphql-api">17. GraphQL API</a>
<a href="#adding-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependencies">Adding Dependencies</a>
<a href="#graphql-models" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="graphql-models">GraphQL Models</a>
<a href="#graphql-resource" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="graphql-resource">GraphQL Resource</a>
<a href="#18-health-checks-and-metrics" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="18-health-checks-and-metrics">18. Health Checks and Metrics</a>
<a href="#adding-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependencies">Adding Dependencies</a>
<a href="#custom-health-checks" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="custom-health-checks">Custom Health Checks</a>
<a href="#custom-metrics" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="custom-metrics">Custom Metrics</a>
<a href="#19-multitenancy" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="19-multitenancy">19. Multitenancy</a>
<a href="#configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="configuration">Configuration</a>
<a href="#tenant-aware-service" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tenant-aware-service">Tenant-Aware Service</a>
<a href="#20-custom-extensions" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="20-custom-extensions">20. Custom Extensions</a>
<a href="#extension-processor" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="extension-processor">Extension Processor</a>
<a href="#21-native-compilation" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="21-native-compilation">21. Native Compilation</a>
<a href="#configuration-for-native" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="configuration-for-native">Configuration for Native</a>
<a href="#reflection-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="reflection-configuration">Reflection Configuration</a>
<a href="#22-coroutines-integration" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="22-coroutines-integration">22. Coroutines Integration</a>
<a href="#adding-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adding-dependencies">Adding Dependencies</a>
<a href="#coroutine-based-service" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="coroutine-based-service">Coroutine-Based Service</a>
<a href="#coroutine-resource" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="coroutine-resource">Coroutine Resource</a>
<a href="#23-advanced-testing" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="23-advanced-testing">23. Advanced Testing</a>
<a href="#test-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="test-configuration">Test Configuration</a>
<a href="#integration-tests" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="integration-tests">Integration Tests</a>
<a href="#mocking" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="mocking">Mocking</a>
<a href="#24-microservice-patterns" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="24-microservice-patterns">24. Microservice Patterns</a>
<a href="#circuit-breaker" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="circuit-breaker">Circuit Breaker</a>
<a href="#25-openapi-and-swagger" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="25-openapi-and-swagger">25. OpenAPI and Swagger</a>
<a href="#configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="configuration">Configuration</a>
<a href="#documented-api" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="documented-api">Documented API</a>
<a href="#summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="summary">Summary</a>
<a href="#beginner" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="beginner">Beginner</a>
<a href="#intermediate" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="intermediate">Intermediate</a>
<a href="#advanced" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="advanced">Advanced</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = quarkusKotlinGuideTocData;
}
