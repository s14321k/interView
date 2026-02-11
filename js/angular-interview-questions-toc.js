// Angular Interview Questions - Table of Contents Data
const angularInterviewQuestionsTocData = `<a href="#angular-questions-please-provide-examples-for-all-the-questions-if-possible" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="angular-questions-please-provide-examples-for-all-the-questions-if-possible">Angular Questions. Please provide examples for all the questions if possible</a>
<a href="#1-frontend-to-backend-connectivity-use-of-httpclient-module" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-frontend-to-backend-connectivity-use-of-httpclient-module">1. Frontend to Backend connectivity. Use of httpclient module</a>
<a href="#1-create-post" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-create-post">1. <strong>Create (POST)</strong></a>
<a href="#2-read-get" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-read-get">2. <strong>Read (GET)</strong></a>
<a href="#3-update-put-or-patch" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-update-put-or-patch">3. <strong>Update (PUT or PATCH)</strong></a>
<a href="#4-delete-delete" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-delete-delete">4. <strong>Delete (DELETE)</strong></a>
<a href="#2-explain-event-binding-with-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-explain-event-binding-with-example">2. Explain Event binding with example.</a>
<a href="#3-parent-child-communication" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-parent-child-communication">3. Parent &amp; child communication</a>
<a href="#4-what-is-appmodulets-ngmodule" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-what-is-appmodulets-ngmodule">4. What is app.module.ts / @NgModule</a>
<a href="#1-basic-feature-module" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-basic-feature-module">1. <strong>Basic Feature Module:</strong></a>
<a href="#2-feature-module-with-routing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-feature-module-with-routing">2. <strong>Feature Module with Routing:</strong></a>
<a href="#3-lazy-loaded-feature-module" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-lazy-loaded-feature-module">3. <strong>Lazy-Loaded Feature Module:</strong></a>
<a href="#4-shared-feature-module" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-shared-feature-module">4. <strong>Shared Feature Module:</strong></a>
<a href="#5-feature-module-with-services" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-feature-module-with-services">5. <strong>Feature Module with Services:</strong></a>
<a href="#5-what-is-observable-and-explain-with-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-what-is-observable-and-explain-with-example">5. What is observable and explain with example.</a>
<a href="#what-is-an-observable" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-is-an-observable">What is an Observable?</a>
<a href="#key-concepts" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-concepts">Key Concepts:</a>
<a href="#how-to-use-observables" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="how-to-use-observables">How to Use Observables:</a>
<a href="#use-cases-for-observables" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="use-cases-for-observables">Use Cases for Observables:</a>
<a href="#best-practices" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="best-practices">Best Practices:</a>
<a href="#6-subscribe-in-angular" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="6-subscribe-in-angular">6. Subscribe in angular.</a>
<a href="#7-how-to-handle-different-profiles-in-angular" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="7-how-to-handle-different-profiles-in-angular">7. how to handle different profiles in angular?</a>
<a href="#1-default-environment-file" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-default-environment-file">1. <strong>Default Environment File:</strong></a>
<a href="#2-environment-specific-files" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-environment-specific-files">2. <strong>Environment-specific Files:</strong></a>
<a href="#3-angular-cli-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-angular-cli-configuration">3. <strong>Angular CLI Configuration:</strong></a>
<a href="#when-to-use-different-environment-files" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="when-to-use-different-environment-files">When to Use Different Environment Files:</a>
<a href="#benefits" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="benefits">Benefits:</a>
<a href="#8-brief-about-one-way-binding-and-two-way-binding-with-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="8-brief-about-one-way-binding-and-two-way-binding-with-example">8. Brief about one way binding and two way binding with example.</a>
<a href="#9-what-is-authguard-explain-in-detail-with-examples" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="9-what-is-authguard-explain-in-detail-with-examples">9. what is authguard? explain in detail with examples.</a>
<a href="#10-internal-working-of-canactivate-method" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="10-internal-working-of-canactivate-method">10. Internal working of CanActivate method</a>
<a href="#11-lifecycle-hooks" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="11-lifecycle-hooks">11. lifecycle hooks</a>
<a href="#1-ngoninit" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-ngoninit">1. ngOnInit:</a>
<a href="#2-ngonchanges" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-ngonchanges">2. ngOnChanges:</a>
<a href="#3-ngafterviewinit" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-ngafterviewinit">3. ngAfterViewInit:</a>
<a href="#4-ngondestroy" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-ngondestroy">4. ngOnDestroy:</a>
<a href="#12-angular-lifecycle-angular-project-structure-and-application-flow" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="12-angular-lifecycle-angular-project-structure-and-application-flow">12. Angular LifeCycle, Angular Project Structure and Application Flow</a>
<a href="#angular-lifecycle" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="angular-lifecycle">Angular LifeCycle</a>
<a href="#angular-project-structure" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="angular-project-structure">Angular Project Structure</a>
<a href="#application-flow" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="application-flow">Application Flow:</a>
<a href="#13-what-is-decorator-and-its-types-with-example-and-explain-the-structures" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="13-what-is-decorator-and-its-types-with-example-and-explain-the-structures">13. What is decorator and its types with example and explain the structures.</a>
<a href="#example-of-decorator-in-single-class" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-of-decorator-in-single-class">Example of decorator in single class.</a>
<a href="#example-of-decorator-individually" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-of-decorator-individually">Example of decorator individually.</a>
<a href="#14-list-of-integers-using-ngfor-in-angular" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="14-list-of-integers-using-ngfor-in-angular">14. List of integers using ngfor in angular</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = angularInterviewQuestionsTocData;
}
