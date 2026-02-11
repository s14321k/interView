// Spring Boot Annotations Complete Guide - Table of Contents Data
const springBootAnnotationsCompleteGuideTocData = `<a href="#spring-boot-annotations-complete-reference-guide" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="spring-boot-annotations-complete-reference-guide">Spring Boot Annotations - Complete Reference Guide</a>
<a href="#core-spring-boot-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="core-spring-boot-annotations">📦 Core Spring Boot Annotations</a>
<a href="#what-is-a-spring-bean" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="what-is-a-spring-bean">🌱 What is a Spring Bean?</a>
<a href="#dependency-injection-di" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="dependency-injection-di">🧩 Dependency Injection (DI)</a>
<a href="#without-di" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="without-di">Without DI:</a>
<a href="#with-di" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="with-di">With DI:</a>
<a href="#benefits-of-di" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="benefits-of-di">Benefits of DI:</a>
<a href="#stereotype-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="stereotype-annotations">🏷️ Stereotype Annotations</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example:</a>
<a href="#types-of-dependency-injection" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="types-of-dependency-injection">💉 Types of Dependency Injection</a>
<a href="#1-constructor-injection-recommended" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-constructor-injection-recommended">1. Constructor Injection (Recommended ✅)</a>
<a href="#2-setter-injection" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-setter-injection">2. Setter Injection</a>
<a href="#3-field-injection-generally-discouraged" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-field-injection-generally-discouraged">3. Field Injection (Generally Discouraged ❌)</a>
<a href="#bean-definition-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="bean-definition-annotations">🔧 Bean Definition Annotations</a>
<a href="#1-using-bean-methods" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-using-bean-methods">1. Using <code>@Bean</code> Methods</a>
<a href="#2-other-important-bean-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-other-important-bean-annotations">2. Other Important Bean Annotations</a>
<a href="#resolving-ambiguous-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="resolving-ambiguous-dependencies">🤔 Resolving Ambiguous Dependencies</a>
<a href="#1-qualifier" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-qualifier">1. <code>@Qualifier</code></a>
<a href="#2-primary" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-primary">2. <code>@Primary</code></a>
<a href="#summary-multiple-beans-resolution" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary-multiple-beans-resolution">Summary: Multiple Beans Resolution</a>
<a href="#bean-scopes" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="bean-scopes">🔄 Bean Scopes</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example:</a>
<a href="#bean-lifecycle" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="bean-lifecycle">🌱 Bean Lifecycle</a>
<a href="#lifecycle-phases" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="lifecycle-phases">Lifecycle Phases:</a>
<a href="#lifecycle-callback-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="lifecycle-callback-annotations">Lifecycle Callback Annotations</a>
<a href="#circular-dependency-cyclic-dependency" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="circular-dependency-cyclic-dependency">🚨 Circular Dependency (Cyclic Dependency)</a>
<a href="#example-of-the-problem" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-of-the-problem">Example of the Problem:</a>
<a href="#causes" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="causes">Causes:</a>
<a href="#solutions" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="solutions">Solutions:</a>
<a href="#web-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="web-annotations">🌐 Web Annotations</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example:</a>
<a href="#jpa-data-access-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="jpa-data-access-annotations">💾 JPA &amp; Data Access Annotations</a>
<a href="#entity-mapping" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="entity-mapping">Entity Mapping</a>
<a href="#relationships" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="relationships">Relationships</a>
<a href="#query-transaction" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="query-transaction">Query &amp; Transaction</a>
<a href="#advanced-jpa" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="advanced-jpa">Advanced JPA</a>
<a href="#repository-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="repository-configuration">Repository &amp; Configuration</a>
<a href="#lifecycle-callbacks" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="lifecycle-callbacks">Lifecycle Callbacks</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example:</a>
<a href="#jpa-auditing-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="jpa-auditing-annotations">📝 JPA Auditing Annotations</a>
<a href="#how-to-enable-auditing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-to-enable-auditing">How to Enable Auditing:</a>
<a href="#core-auditing-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="core-auditing-annotations">Core Auditing Annotations:</a>
<a href="#example-implementation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-implementation">Example Implementation:</a>
<a href="#implement-auditoraware" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="implement-auditoraware">Implement AuditorAware:</a>
<a href="#enable-in-main-application" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="enable-in-main-application">Enable in Main Application:</a>
<a href="#mongodb-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="mongodb-annotations">📊 MongoDB Annotations</a>
<a href="#lombok-entity-model-helpers" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="lombok-entity-model-helpers">🔨 Lombok &amp; Entity Model Helpers</a>
<a href="#caching-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="caching-annotations">⚡ Caching Annotations</a>
<a href="#enable-caching" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="enable-caching">Enable Caching:</a>
<a href="#cacheable-parameters" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="cacheable-parameters">@Cacheable Parameters:</a>
<a href="#examples" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="examples">Examples:</a>
<a href="#cacheevict-parameters" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="cacheevict-parameters">@CacheEvict Parameters:</a>
<a href="#cacheput-parameters" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="cacheput-parameters">@CachePut Parameters:</a>
<a href="#caching-grouping-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="caching-grouping-annotations">@Caching - Grouping Annotations:</a>
<a href="#custom-key-generator" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="custom-key-generator">Custom Key Generator:</a>
<a href="#cache-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="cache-configuration">Cache Configuration:</a>
<a href="#security-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="security-annotations">🔐 Security Annotations</a>
<a href="#examples" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="examples">Examples:</a>
<a href="#testing-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="testing-annotations">🧪 Testing Annotations</a>
<a href="#examples" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="examples">Examples:</a>
<a href="#configuration-property-binding" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="configuration-property-binding">⚙️ Configuration &amp; Property Binding</a>
<a href="#examples" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="examples">Examples:</a>
<a href="#conditional-bean-registration" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="conditional-bean-registration">🎯 Conditional Bean Registration</a>
<a href="#examples" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="examples">Examples:</a>
<a href="#profiles" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="profiles">🎭 Profiles</a>
<a href="#defining-profile-specific-beans" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="defining-profile-specific-beans">Defining Profile-Specific Beans:</a>
<a href="#profile-specific-properties-files" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="profile-specific-properties-files">Profile-Specific Properties Files:</a>
<a href="#activating-profiles" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="activating-profiles">Activating Profiles:</a>
<a href="#profile-groups-spring-boot-24" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="profile-groups-spring-boot-24">Profile Groups (Spring Boot 2.4+):</a>
<a href="#the-default-profile" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="the-default-profile">The <code>default</code> Profile:</a>
<a href="#scheduling-asynchronous-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="scheduling-asynchronous-annotations">⏰ Scheduling &amp; Asynchronous Annotations</a>
<a href="#examples" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="examples">Examples:</a>
<a href="#aop-aspect-oriented-programming-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="aop-aspect-oriented-programming-annotations">🎨 AOP (Aspect-Oriented Programming) Annotations</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example:</a>
<a href="#event-handling-annotations" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="event-handling-annotations">📡 Event Handling Annotations</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example:</a>
<a href="#common-errors" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="common-errors">🚫 Common Errors</a>
<a href="#complete-example-rest-api-with-all-concepts" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="complete-example-rest-api-with-all-concepts">📋 Complete Example: REST API with All Concepts</a>
<a href="#best-practices-summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="best-practices-summary">💡 Best Practices Summary</a>
<a href="#spring-vs-spring-boot" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="spring-vs-spring-boot">🌱 Spring vs Spring Boot</a>
<a href="#quick-reference-card" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="quick-reference-card">🎯 Quick Reference Card</a>
<a href="#bean-definition" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="bean-definition">Bean Definition</a>
<a href="#dependency-injection" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="dependency-injection">Dependency Injection</a>
<a href="#scopes" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="scopes">Scopes</a>
<a href="#lifecycle" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="lifecycle">Lifecycle</a>
<a href="#web" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="web">Web</a>
<a href="#jpa" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="jpa">JPA</a>
<a href="#caching" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="caching">Caching</a>
<a href="#testing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="testing">Testing</a>
<a href="#security" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="security">Security</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = springBootAnnotationsCompleteGuideTocData;
}
