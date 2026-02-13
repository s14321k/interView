// Angular Interview Questions - Content Data
const angularInterviewQuestionsContentData = `<h1 id="angular-questions-please-provide-examples-for-all-the-questions-if-possible">Angular Questions. Please provide examples for all the questions if possible</h1>
<h2 id="1-frontend-to-backend-connectivity-use-of-httpclient-module">1. Frontend to Backend connectivity. Use of httpclient module</h2>
<ul>
<li>Angular uses services and the HttpClient module to connect to the backend. </li>
<li>Services encapsulate the logic for making HTTP requests.</li>
<li>HttpClient is used to make HTTP requests.</li>
<li>Use services for communication between components.</li>
<li>Components can subscribe to service events or share data through the service.</li>
<li>Example:</li>
<pre><code class="language-angular2svg">
import { HttpClient } from &#x27;@angular/common/http&#x27;;

constructor(private http: HttpClient) {
this.http.get(&#x27;https://api.example.com/data&#x27;).subscribe(data =&gt; console.log(data));
}
</code></pre>
</ul>
<ul>
<li>To pass id from front to back end in angular?</li>
<pre><code class="language-angular2svg">
this.http.get(&#96;https://api.example.com/data/${id}&#96;)
</code></pre>
</ul>
<p>Performing CRUD (Create, Read, Update, Delete) operations with the <code>HttpClient</code> module in Angular involves using the HTTP methods provided by the module. Below is an example demonstrating each CRUD operation using Angular&#x27;s <code>HttpClient</code> to interact with a hypothetical RESTful API.</p>
<h3 id="1-create-post">1. <strong>Create (POST)</strong></h3>
<p>To create a new resource, you send an HTTP POST request to the server.</p>
<pre><code class="language-typescript">
import { HttpClient, HttpHeaders } from &#x27;@angular/common/http&#x27;;
import { Observable } from &#x27;rxjs&#x27;;

@Injectable({
  providedIn: &#x27;root&#x27;,
})
export class DataService {
  private apiUrl = &#x27;https://api.example.com/data&#x27;;

  constructor(private http: HttpClient) {}

  createData(newData: any): Observable&lt;any&gt; {
    const headers = new HttpHeaders({ &#x27;Content-Type&#x27;: &#x27;application/json&#x27; });

    return this.http.post&lt;any&gt;(this.apiUrl, newData, { headers });
  }
}
</code></pre>
<h3 id="2-read-get">2. <strong>Read (GET)</strong></h3>
<p>To retrieve data, you send an HTTP GET request to the server.</p>
<pre><code class="language-typescript">
import { HttpClient } from &#x27;@angular/common/http&#x27;;
import { Observable } from &#x27;rxjs&#x27;;

@Injectable({
  providedIn: &#x27;root&#x27;,
})
export class DataService {
  private apiUrl = &#x27;https://api.example.com/data&#x27;;

  constructor(private http: HttpClient) {}

  getData(): Observable&lt;any[]&gt; {
    return this.http.get&lt;any[]&gt;(this.apiUrl);
  }
}
</code></pre>
<h3 id="3-update-put-or-patch">3. <strong>Update (PUT or PATCH)</strong></h3>
<p>To update an existing resource, you send an HTTP PUT or PATCH request to the server.</p>
<pre><code class="language-typescript">
import { HttpClient, HttpHeaders } from &#x27;@angular/common/http&#x27;;
import { Observable } from &#x27;rxjs&#x27;;

@Injectable({
  providedIn: &#x27;root&#x27;,
})
export class DataService {
  private apiUrl = &#x27;https://api.example.com/data&#x27;;

  constructor(private http: HttpClient) {}

  updateData(updatedData: any): Observable&lt;any&gt; {
    const headers = new HttpHeaders({ &#x27;Content-Type&#x27;: &#x27;application/json&#x27; });

    // Assuming updatedData contains the updated information
    return this.http.put&lt;any&gt;(&#96;${this.apiUrl}/${updatedData.id}&#96;, updatedData, { headers });
  }
}
</code></pre>
<h3 id="4-delete-delete">4. <strong>Delete (DELETE)</strong></h3>
<p>To delete a resource, you send an HTTP DELETE request to the server.</p>
<pre><code class="language-typescript">
import { HttpClient } from &#x27;@angular/common/http&#x27;;
import { Observable } from &#x27;rxjs&#x27;;

@Injectable({
  providedIn: &#x27;root&#x27;,
})
export class DataService {
  private apiUrl = &#x27;https://api.example.com/data&#x27;;

  constructor(private http: HttpClient) {}

  deleteData(dataId: number): Observable&lt;any&gt; {
    return this.http.delete&lt;any&gt;(&#96;${this.apiUrl}/${dataId}&#96;);
  }
}
</code></pre>
<p>In these examples:</p>
<ul>
<li><code>HttpClient</code> is injected into the service to handle HTTP requests.</li>
<li>The <code>http.post</code>, <code>http.get</code>, <code>http.put</code>, and <code>http.delete</code> methods are used for POST, GET, PUT, and DELETE requests, respectively.</li>
<li>The API URL (<code>https://api.example.com/data</code>) is assumed to be the endpoint for the CRUD operations.</li>
<li>Headers with the <code>&#x27;Content-Type&#x27;: &#x27;application/json&#x27;</code> are set for POST and PUT requests to specify the data format.</li>
</ul>
<h2 id="2-explain-event-binding-with-example">2. Explain Event binding with example.</h2>
<ul>
<li>Event binding in Angular allows you to respond to user events. Example:</li>
<pre><code class="language-html">
&lt;button (click) = &quot;onClick()&quot;&gt;Click Me&lt;/button&gt;
</code></pre>
<pre><code class="language-typescript">
onclick(){
    console.log(&quot;Button Clicked&quot;);
}
</code></pre>
</ul>
<h2 id="3-parent-child-communication">3. Parent &amp; child communication</h2>
<ul>
<li>Parent child communication  is achieved through @Input and @Output decorators. </li>
<li>The parent passes data to the child using: @Input  </li>
<li>Child to Parrent, Listens to the events using: @Output decorator with EventEmitter</li>
</ul>
<h2 id="4-what-is-appmodulets-ngmodule">4. What is app.module.ts / @NgModule</h2>
<ul>
<li>What is the use of ngmodule.</li>
<li>NgModule  is a decorator that defines a module in Angular.</li>
<li>What is Feature module and where we mention feature module in angular</li>
<li>A feature module is a way to organize related components, directives and services. It is mentioned in the imports array of @NgModule decorator.</li>
<li>In Angular, feature modules are used to organize related components, directives, and services into cohesive units. Feature modules are different from the root module (<code>AppModule</code>) and can be created to encapsulate specific features or functionalities of an application. Below are different types of feature modules along with examples:</li>
</ul>
<h3 id="1-basic-feature-module">1. <strong>Basic Feature Module:</strong></h3>
<p>A basic feature module includes components, directives, pipes and services related to a specific feature.</p>
<pre><code class="language-typescript">
// basic-feature.module.ts
import { NgModule } from &#x27;@angular/core&#x27;;
import { CommonModule } from &#x27;@angular/common&#x27;;
import { BasicFeatureComponent } from &#x27;./basic-feature.component&#x27;;

@NgModule({
  declarations: [
      BasicFeatureComponent
  ],
  imports: [
      CommonModule
  ], 
  providers: [], //Dependency injection
  bootstrap: [BasicFeatureComponent]
})
export class BasicFeatureModule {}
</code></pre>
<h3 id="2-feature-module-with-routing">2. <strong>Feature Module with Routing:</strong></h3>
<p>A feature module with routing includes components and routes for a specific feature.</p>
<pre><code class="language-typescript">
// feature-with-routing.module.ts
import { NgModule } from &#x27;@angular/core&#x27;;
import { CommonModule } from &#x27;@angular/common&#x27;;
import { RouterModule, Routes } from &#x27;@angular/router&#x27;;
import { FeatureComponent } from &#x27;./feature.component&#x27;;

const routes: Routes = [
  { path: &#x27;feature&#x27;, component: FeatureComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureWithRoutingModule {}
</code></pre>
<h3 id="3-lazy-loaded-feature-module">3. <strong>Lazy-Loaded Feature Module:</strong></h3>
<p>A lazy-loaded feature module is loaded on demand, improving the application&#x27;s performance by loading the module only when it is required.</p>
<pre><code class="language-typescript">
// lazy-feature.module.ts
import { NgModule } from &#x27;@angular/core&#x27;;
import { CommonModule } from &#x27;@angular/common&#x27;;
import { LazyFeatureComponent } from &#x27;./lazy-feature.component&#x27;;
import { RouterModule } from &#x27;@angular/router&#x27;;

@NgModule({
  declarations: [LazyFeatureComponent],
  imports: [CommonModule, RouterModule],
})
export class LazyFeatureModule {}
</code></pre>
<pre><code class="language-typescript">
// app-routing.module.ts
const routes: Routes = [
  // Other routes
  { path: &#x27;lazy&#x27;, loadChildren: () =&gt; import(&#x27;./lazy-feature/lazy-feature.module&#x27;).then(m =&gt; m.LazyFeatureModule) },
];
</code></pre>
<h3 id="4-shared-feature-module">4. <strong>Shared Feature Module:</strong></h3>
<p>A shared feature module contains components, directives, and services that are shared across multiple other modules.</p>
<pre><code class="language-typescript">
// shared-feature.module.ts
import { NgModule } from &#x27;@angular/core&#x27;;
import { CommonModule } from &#x27;@angular/common&#x27;;
import { SharedComponent } from &#x27;./shared.component&#x27;;

@NgModule({
  declarations: [SharedComponent],
  exports: [SharedComponent],
  imports: [CommonModule],
})
export class SharedFeatureModule {}
</code></pre>
<h3 id="5-feature-module-with-services">5. <strong>Feature Module with Services:</strong></h3>
<p>A feature module can encapsulate services along with components and directives.</p>
<pre><code class="language-typescript">
// feature-with-services.module.ts
import { NgModule } from &#x27;@angular/core&#x27;;
import { CommonModule } from &#x27;@angular/common&#x27;;
import { FeatureWithServicesComponent } from &#x27;./feature-with-services.component&#x27;;
import { FeatureService } from &#x27;./feature.service&#x27;;

@NgModule({
  declarations: [FeatureWithServicesComponent],
  providers: [FeatureService],
  imports: [CommonModule],
})
export class FeatureWithServicesModule {}
</code></pre>
<p>These are common types of feature modules in Angular. Depending on the application&#x27;s structure and requirements, you may create additional types of feature modules to encapsulate specific features or functionalities.</p>
<h2 id="5-what-is-observable-and-explain-with-example">5. What is observable and explain with example.</h2>
<ul>
<li>Observable is a data stream.</li>
</ul>
<p>   Certainly! Let&#x27;s delve into more details about Observables in Angular, their use cases, and how to make use of them.</p>
<h3 id="what-is-an-observable">What is an Observable?</h3>
<ul>
<li>An Observable is a powerful data-handling mechanism in Angular that represents a stream of data that can be processed over time. </li>
<li>It is part of the RxJS library (Reactive Extensions for JavaScript) and is widely used for handling asynchronous operations, such as HTTP requests, event handling, and more.</li>
</ul>
<h3 id="key-concepts">Key Concepts:</h3>
<ul>
<li><strong>Observer:</strong></li>
<li>An observer is an object that listens to the data emitted by an Observable.</li>
<li>It consists of three methods: <code>next()</code>, <code>error()</code>, and <code>complete()</code>.</li>
<li><code>next()</code> is called when a new value is emitted, <code>error()</code> is called when an error occurs, and <code>complete()</code> is called when the Observable is done emitting values.</li>
</ul>
<ul>
<li><strong>Subscription:</strong></li>
<li>A subscription is created when an observer subscribes to an Observable.</li>
<li>It represents the execution of the Observable and allows the observer to unsubscribe, releasing resources when they are no longer needed.</li>
</ul>
<h3 id="how-to-use-observables">How to Use Observables:</h3>
<h4 id="1-creating-an-observable">1. <strong>Creating an Observable:</strong></h4>
<pre><code class="language-typescript">
import { Observable } from &#x27;rxjs&#x27;;

const observable = new Observable(observer =&gt; {
  observer.next(&#x27;Hello&#x27;);
  observer.next(&#x27;World&#x27;);
  observer.complete();
});

observable.subscribe(
  value =&gt; console.log(value),
  error =&gt; console.error(error),
  () =&gt; console.log(&#x27;Observable completed&#x27;)
);
</code></pre>
<p>In this example, an Observable is created with the <code>Observable</code> constructor. </p>
<p>The <code>next()</code> method is used to emit values, and </p>
<p>The <code>complete()</code> is called when the Observable is done.</p>
<p>The <code>subscribe</code> method is used to listen to these values.</p>
<h4 id="2-using-observables-for-http-requests">2. <strong>Using Observables for HTTP Requests:</strong></h4>
<pre><code class="language-typescript">
import { HttpClient } from &#x27;@angular/common/http&#x27;;

constructor(private http: HttpClient) {
  this.http.get(&#x27;https://api.example.com/data&#x27;)
    .subscribe(
      data =&gt; console.log(data),
      error =&gt; console.error(error),
      () =&gt; console.log(&#x27;HTTP request completed&#x27;)
    );
}
</code></pre>
<p>Observables are commonly used for handling HTTP requests in Angular. </p>
<p>The <code>HttpClient</code> module returns an Observable when making HTTP requests, and you subscribe to it to get the response data.</p>
<h4 id="3-using-observables-in-components">3. <strong>Using Observables in Components:</strong></h4>
<pre><code class="language-typescript">
import { Component, OnInit } from &#x27;@angular/core&#x27;;
import { DataService } from &#x27;./data.service&#x27;;

@Component({
  selector: &#x27;app-example&#x27;,
  template: &#x27;&lt;p&gt;{{ data }}&lt;/p&gt;&#x27;,
})
export class ExampleComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData()
      .subscribe(
        result =&gt; this.data = result,
        error =&gt; console.error(error),
        () =&gt; console.log(&#x27;Data retrieval completed&#x27;)
      );
  }
}
</code></pre>
<p>In this example, the component subscribes to an Observable provided by a service (<code>DataService</code>).</p>
<p>When the data is received, it updates the component&#x27;s <code>data</code> property.</p>
<h3 id="use-cases-for-observables">Use Cases for Observables:</h3>
<ul>
<li><strong>HTTP Requests:</strong></li>
<li>Observables are extensively used for handling asynchronous HTTP requests in Angular.</li>
</ul>
<ul>
<li><strong>Event Handling:</strong></li>
<li>They are suitable for handling events like button clicks, form submissions, etc.</li>
</ul>
<ul>
<li><strong>Real-time Data:</strong></li>
<li>Observables are valuable for real-time data scenarios, such as WebSocket communications.</li>
</ul>
<ul>
<li><strong>Animation Sequences:</strong></li>
<li>Angular animations leverage Observables for sequencing and timing.</li>
</ul>
<ul>
<li><strong>Multicasting:</strong></li>
<li>Observables support multicasting, allowing multiple observers to subscribe to the same data source.</li>
</ul>
<h3 id="best-practices">Best Practices:</h3>
<h4 id="1-unsubscribe">1. <strong>Unsubscribe:</strong></h4>
<ul>
<li>Always unsubscribe from Observables to prevent memory leaks. This is crucial, especially when dealing with Observables in components.</li>
</ul>
<pre><code class="language-typescript">
import { Subscription } from &#x27;rxjs&#x27;;

// ...

private subscription: Subscription;

ngOnInit() {
  this.subscription = this.dataService.getData().subscribe(/* ... */);
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
</code></pre>
<h4 id="2-error-handling">2. <strong>Error Handling:</strong></h4>
<ul>
<li>Handle errors appropriately using the <code>error</code> callback in the <code>subscribe</code> method.</li>
</ul>
<pre><code class="language-typescript">
this.dataService.getData().subscribe(
  data =&gt; console.log(data),
  error =&gt; console.error(error)
);
</code></pre>
<h4 id="3-operators">3. <strong>Operators:</strong></h4>
<ul>
<li>Explore RxJS operators for transforming, filtering, and combining Observables to suit your specific needs.</li>
</ul>
<pre><code class="language-typescript">
import { map, filter } from &#x27;rxjs/operators&#x27;;

this.dataService.getData()
  .pipe(
    map(data =&gt; data.filter(item =&gt; item.isActive)),
    filter(filteredData =&gt; filteredData.length &gt; 0)
  )
  .subscribe(result =&gt; console.log(result));
</code></pre>
<p>Observables provide a powerful way to handle asynchronous operations and are a fundamental part of Angular&#x27;s reactive programming paradigm. </p>
<p>They are versatile and can be employed in various scenarios to manage the flow of data in your application.</p>
<h2 id="6-subscribe-in-angular">6. Subscribe in angular.</h2>
<ul>
<li>The subscribe method is used to listen to the values emitted by the observable.</li>
</ul>
<h2 id="7-how-to-handle-different-profiles-in-angular">7. how to handle different profiles in angular?</h2>
<ul>
<li>Use environment files (e.g., environment.prod.ts) to store configuration settings for different profiles.</li>
<li>In Angular, you typically manage different environments using environment files. Creating separate TypeScript files for different environments is a common practice and is recommended for maintaining clean and organized code. Angular CLI simplifies this process for you.</li>
</ul>
<p>Here&#x27;s how you can structure environment files in Angular:</p>
<h3 id="1-default-environment-file">1. <strong>Default Environment File:</strong></h3>
<ul>
<li>The default environment file is <code>environment.ts</code>. This file contains default configurations for development.</li>
</ul>
<pre><code class="language-typescript">
// environment.ts
export const environment = {
  production: false,
  apiUrl: &#x27;http://localhost:3000/api&#x27;,
};
</code></pre>
<h3 id="2-environment-specific-files">2. <strong>Environment-specific Files:</strong></h3>
<ul>
<li>Create environment-specific files for other environments, such as production and staging.</li>
</ul>
<pre><code class="language-typescript">
// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: &#x27;https://api.example.com&#x27;,
};
</code></pre>
<pre><code class="language-typescript">
// environment.staging.ts
export const environment = {
  production: false,
  apiUrl: &#x27;https://staging-api.example.com&#x27;,
};
</code></pre>
<h3 id="3-angular-cli-configuration">3. <strong>Angular CLI Configuration:</strong></h3>
<ul>
<li>Configure the Angular CLI to use the appropriate environment file during builds. This is typically done in the <code>angular.json</code> file.</li>
</ul>
<pre><code class="language-json">
// angular.json
&quot;configurations&quot;: {
  &quot;production&quot;: {
    &quot;fileReplacements&quot;: [
      {
        &quot;replace&quot;: &quot;src/environments/environment.ts&quot;,
        &quot;with&quot;: &quot;src/environments/environment.prod.ts&quot;
      }
    ],
    // other production configurations...
  },
  &quot;staging&quot;: {
    &quot;fileReplacements&quot;: [
      {
        &quot;replace&quot;: &quot;src/environments/environment.ts&quot;,
        &quot;with&quot;: &quot;src/environments/environment.staging.ts&quot;
      }
    ],
    // other staging configurations...
  }
}
</code></pre>
<p>By following this approach, you can easily switch between environments during development, and Angular CLI will handle the file replacements for you during builds.</p>
<h3 id="when-to-use-different-environment-files">When to Use Different Environment Files:</h3>
<ul>
<li><strong>Development:</strong></li>
<li>Use the default <code>environment.ts</code> file for development with local server configurations.</li>
</ul>
<ul>
<li><strong>Production:</strong></li>
<li>Create a separate <code>environment.prod.ts</code> file for production with production-specific settings.</li>
</ul>
<ul>
<li><strong>Staging or Other Environments:</strong></li>
<li>If you have additional environments (e.g., staging), create separate environment files for them.</li>
</ul>
<h3 id="benefits">Benefits:</h3>
<h4 id="1-maintainability">1. <strong>Maintainability:</strong></h4>
<ul>
<li>Separate environment files keep configurations organized and easy to manage.</li>
</ul>
<h4 id="2-consistency">2. <strong>Consistency:</strong></h4>
<ul>
<li>Using environment files ensures consistent configuration across different environments.</li>
</ul>
<h4 id="3-build-automation">3. <strong>Build Automation:</strong></h4>
<ul>
<li>Angular CLI&#x27;s build process automatically replaces the default environment file with the specified one for the target environment.</li>
</ul>
<p>By adhering to this practice, you can seamlessly manage and deploy your Angular application across different environments while maintaining clarity and simplicity in your codebase.</p>
<h2 id="8-brief-about-one-way-binding-and-two-way-binding-with-example">8. Brief about one way binding and two way binding with example.</h2>
<ul>
<li><strong>One way binding</strong> : Data flows from the component to the view.</li>
<li><code>eg</code></li>
<pre><code class="language-html">
&lt;p&gt; {{ message }} &lt;/p&gt;
</code></pre>
<li><strong>Two way binding</strong> : Data flows from component to view and vise versa.</li>
<li><code>eg</code></li>
<pre><code class="language-html">
&lt;input [(ngModel)]=&quot;name&quot; /&gt;
</code></pre>
</ul>
<h2 id="9-what-is-authguard-explain-in-detail-with-examples">9. what is authguard? explain in detail with examples.</h2>
<ul>
<li>Authguard is used to control access to a route.</li>
</ul>
<pre><code class="language-typescript">
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  if (this.authService.isAuthenticated()) {
    return true;
  } else {
    this.router.navigate([&#x27;/login&#x27;]);
    return false;
  }
}
</code></pre>
<h2 id="10-internal-working-of-canactivate-method">10. Internal working of CanActivate method</h2>
<ul>
<li>canActivate is an interface used for route guarding. it checks if a user can access a route.</li>
<li>The canActivate method returns a boolean or an Observable/Promise that resolves the boolean.</li>
</ul>
<h2 id="11-lifecycle-hooks">11. lifecycle hooks</h2>
<ul>
<li>The terms &quot;lifecycle hooks&quot; and &quot;Angular lifecycle&quot; are often used interchangeably when discussing the lifecycle of Angular components.</li>
</ul>
<ul>
<li>In Angular, the term &quot;lifecycle hooks&quot; refers to a set of methods that you can implement in your component classes to tap into key moments in the lifecycle of a component. These hooks allow you to execute custom logic at specific points in the component&#x27;s creation, update, and destruction phases.</li>
</ul>
<ul>
<li>The Angular component lifecycle is the sequence of events that occur from the creation of a component to its destruction. The lifecycle hooks are the methods you can implement to respond to these events. Some common lifecycle hooks include <code>ngOnInit</code>, <code>ngOnChanges</code>, <code>ngDoCheck</code>, <code>ngAfterViewInit</code>, and <code>ngOnDestroy</code>, among others.</li>
</ul>
<p>So, in summary:</p>
<ul>
<li><strong>Angular Lifecycle:</strong> The entire sequence of events that occur from the creation of a component to its destruction.</li>
</ul>
<ul>
<li><strong>Lifecycle Hooks:</strong> The specific methods provided by Angular that you can implement in your components to hook into different points of the component lifecycle.</li>
</ul>
<p>In other words, the lifecycle hooks are the means by which you interact with and respond to the Angular component lifecycle. They are integral to understanding and managing the behavior of your components at different stages of their existence.</p>
<ul>
<li>Let&#x27;s delve deeper into the concept of Angular lifecycle hooks with more specific details and examples. We&#x27;ll cover some of the key lifecycle hooks and provide examples for each:</li>
</ul>
<h3 id="1-ngoninit">1. ngOnInit:</h3>
<p>The <code>ngOnInit</code> hook is called after Angular has initialized all data-bound properties of a component.</p>
<pre><code class="language-typescript">
import { Component, OnInit } from &#x27;@angular/core&#x27;;

@Component({
  selector: &#x27;app-example&#x27;,
  template: &#x27;&lt;p&gt;{{ message }}&lt;/p&gt;&#x27;,
})
export class ExampleComponent implements OnInit {
  message: string;

  ngOnInit() {
    this.message = &#x27;Hello, OnInit!&#x27;;
  }
}
</code></pre>
<h3 id="2-ngonchanges">2. ngOnChanges:</h3>
<p>The <code>ngOnChanges</code> hook is called when any data-bound property of a component changes.</p>
<pre><code class="language-typescript">
import { Component, Input, OnChanges, SimpleChanges } from &#x27;@angular/core&#x27;;

@Component({
  selector: &#x27;app-example&#x27;,
  template: &#x27;&lt;p&gt;{{ message }}&lt;/p&gt;&#x27;,
})
export class ExampleComponent implements OnChanges {
  @Input() inputMessage: string;
  message: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.inputMessage) {
      this.message = &#96;Message changed to: ${changes.inputMessage.currentValue}&#96;;
    }
  }
}
</code></pre>
<h3 id="3-ngafterviewinit">3. ngAfterViewInit:</h3>
<p>The <code>ngAfterViewInit</code> hook is called after the component&#x27;s view and child views are initialized.</p>
<pre><code class="language-typescript">
import { Component, AfterViewInit, ElementRef } from &#x27;@angular/core&#x27;;

@Component({
  selector: &#x27;app-example&#x27;,
  template: &#x27;&lt;p #paragraphElement&gt;{{ message }}&lt;/p&gt;&#x27;,
})
export class ExampleComponent implements AfterViewInit {
  message: string;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Access the DOM element after the view is initialized
    const paragraphElement = this.elementRef.nativeElement.querySelector(&#x27;p&#x27;);
    this.message = &#96;Paragraph content: ${paragraphElement.textContent}&#96;;
  }
}
</code></pre>
<h3 id="4-ngondestroy">4. ngOnDestroy:</h3>
<p>The <code>ngOnDestroy</code> hook is called just before the component is destroyed. It is a good place to perform cleanup tasks.</p>
<pre><code class="language-typescript">
import { Component, OnDestroy } from &#x27;@angular/core&#x27;;
import { Subscription } from &#x27;rxjs&#x27;;

@Component({
  selector: &#x27;app-example&#x27;,
  template: &#x27;&lt;p&gt;{{ message }}&lt;/p&gt;&#x27;,
})
export class ExampleComponent implements OnDestroy {
  message: string;
  private subscription: Subscription;

  constructor() {
    this.subscription = /* Some observable subscription */;
  }

  ngOnDestroy() {
    // Clean up resources, unsubscribe from observables, etc.
    this.subscription.unsubscribe();
  }
}
</code></pre>
<p>These examples showcase how you can use specific lifecycle hooks to perform actions at different stages of a component&#x27;s lifecycle. </p>
<p>It&#x27;s important to choose the appropriate hook based on your specific needs, whether it&#x27;s initializing data, responding to changes, or cleaning up resources. </p>
<p>Understanding and utilizing lifecycle hooks effectively is essential for building robust and efficient Angular applications.</p>
<h2 id="12-angular-lifecycle-angular-project-structure-and-application-flow">12. Angular LifeCycle, Angular Project Structure and Application Flow</h2>
<h3 id="angular-lifecycle">Angular LifeCycle</h3>
<p>The Angular component lifecycle consists of a series of events or phases that a component goes through from its creation to its destruction. Understanding this lifecycle is crucial for building Angular applications and managing component behavior at different stages. Here&#x27;s an overview of the Angular component lifecycle:</p>
<h4 id="1-creation">1. <strong>Creation:</strong></h4>
<ul>
<li><strong>constructor:</strong> The component&#x27;s constructor is called when an instance of the component is created. This is where you set up initial values and dependencies.</li>
</ul>
<h4 id="2-initialization">2. <strong>Initialization:</strong></h4>
<ul>
<li><strong>ngOnChanges:</strong> If the component has input properties, this hook is called whenever any of them change.</li>
<li><strong>ngOnInit:</strong> This hook is called once after the component has been initialized. It&#x27;s a good place for initial setup and fetching initial data.</li>
</ul>
<h4 id="3-content-projection">3. <strong>Content Projection:</strong></h4>
<ul>
<li><strong>ngAfterContentInit:</strong> Called after content (projected content within <code>&lt;ng-content&gt;</code>) has been initialized.</li>
<li><strong>ngAfterContentChecked:</strong> Called after every check of the projected content.</li>
</ul>
<h4 id="4-view-initialization">4. <strong>View Initialization:</strong></h4>
<ul>
<li><strong>ngAfterViewInit:</strong> Called after the component&#x27;s view (and child views) has been initialized.</li>
<li><strong>ngAfterViewChecked:</strong> Called after every check of the component&#x27;s view.</li>
</ul>
<h4 id="5-change-detection">5. <strong>Change Detection:</strong></h4>
<ul>
<li><strong>ngDoCheck:</strong> Called during every change detection cycle. It allows you to implement custom change detection logic.</li>
</ul>
<h4 id="6-destruction">6. <strong>Destruction:</strong></h4>
<ul>
<li><strong>ngOnDestroy:</strong> Called just before the component is destroyed and removed from the DOM. It&#x27;s a good place for cleanup tasks like unsubscribing from observables.</li>
</ul>
<p>Here&#x27;s a visual representation of the Angular component lifecycle:</p>
<pre><code class="language-">
+-------------------+
|                   |
|   constructor     |
|       ↓           |
| ngOnChanges       |
|       ↓           |
| ngOnInit          |
|       ↓           |
| ngAfterContentInit|
|       ↓           |
| ngAfterContentChecked|
|       ↓           |
| ngAfterViewInit   |
|       ↓           |
| ngAfterViewChecked|
|       ↓           |
| ngDoCheck         |
|                   |
|                   |
|   ...             |
|                   |
|                   |
| ngOnDestroy      |
|                   |
+-------------------+
</code></pre>
<p>Understanding these lifecycle events and hooks allows you to execute custom logic at specific points, ensuring your components are properly initialized, updated, and cleaned up as needed. </p>
<p>It&#x27;s important to note that not all hooks need to be implemented in every component. You choose the ones that suit your component&#x27;s requirements.</p>
<h3 id="angular-project-structure">Angular Project Structure</h3>
<p>It follows the Model-View-Controller (MVC) architecture and is designed to make both the development and testing of such applications easier.</p>
<p>Here&#x27;s a brief overview of the typical project structure and application flow in Angular:</p>
<pre><code class="language-">
/angular-app
|-- /src
|   |-- /app
|   |   |-- /components
|   |   |   |-- component1.component.ts
|   |   |   |-- component2.component.ts
|   |   |
|   |   |-- /services
|   |   |   |-- service1.service.ts
|   |   |   |-- service2.service.ts
|   |   |
|   |   |-- /modules
|   |   |   |-- app.module.ts
|   |   |   |-- feature.module.ts
|   |   |
|   |   |-- /assets
|   |   |   |-- /images
|   |   |   |-- /fonts
|   |   |
|   |   |-- /styles
|   |   |   |-- style1.css
|   |   |   |-- style2.css
|   |   |
|   |   |-- app.component.ts
|   |   |-- app.component.html
|   |   |-- app.component.css
|
|-- angular.json
|-- tsconfig.json
|-- index.html
</code></pre>
<ul>
<li><strong>src folder:</strong></li>
<li><strong>app folder:</strong> This is where the main application code resides.</li>
<li><strong>components:</strong> Angular components are organized here. Components are the building blocks of an Angular application, representing parts of the UI.</li>
<li><strong>services:</strong> Angular services provide functionality that can be shared across components.</li>
<li><strong>modules:</strong> Angular modules help organize the application into cohesive blocks. They can contain components, services, and other features.</li>
<li><strong>assets:</strong> This folder can include static files like images, fonts, etc.</li>
<li><strong>styles:</strong> Global styles for the application.</li>
</ul>
<ul>
<li><strong>angular.json:</strong> Primary configuration file. This file contains configuration settings for the Angular project, including build and development server options.</li>
</ul>
<ul>
<li><strong>tsconfig.json:</strong> TypeScript configuration file. It specifies compiler options and other settings for TypeScript.</li>
</ul>
<ul>
<li><strong>index.html:</strong> The main HTML file that is loaded in the browser. It usually includes the <code>&lt;app-root&gt;</code> tag where the Angular application is bootstrapped.</li>
</ul>
<h3 id="application-flow">Application Flow:</h3>
<h4 id="1-bootstrap-process">1. <strong>Bootstrap Process:</strong></h4>
<ul>
<li>Angular applications are bootstrapped by the Angular compiler using the <code>main.ts</code> file.</li>
<li>The <code>main.ts</code> file typically imports the <code>AppModule</code> and uses the <code>platformBrowserDynamic().bootstrapModule()</code> method to start the application.</li>
</ul>
<h4 id="2-module-and-component-interaction">2. <strong>Module and Component Interaction:</strong></h4>
<ul>
<li>Angular applications are organized into modules. A module is a logical grouping of components, directives, services, and pipes.</li>
<li>Components are the primary building blocks and are responsible for views.</li>
<li>Modules and components interact with each other through decorators and metadata.</li>
</ul>
<h4 id="3-data-binding">3. <strong>Data Binding:</strong></h4>
<ul>
<li>Angular supports two-way data binding, where changes in the model (component) automatically update the view and vice versa.</li>
<li>This ensures synchronization between the model and the view without explicit DOM manipulation.</li>
</ul>
<h4 id="4-dependency-injection">4. <strong>Dependency Injection:</strong></h4>
<ul>
<li>Angular uses dependency injection to provide components with the services they need.</li>
<li>Services are singleton objects that can be injected into components, providing a way to share data and functionality.</li>
<pre><code class="language-shell">
   npm install package-name
</code></pre>
<li>Certainly! Let&#x27;s enhance the example by incorporating <code>ngIf</code>, <code>ngFor</code>, and <code>ngSwitch</code> in the HTML file, and also demonstrate dependency injection.</li>
</ul>
<ul>
<li>Firstly, let&#x27;s update the component code to include dependency injection and create a more complex form with additional controls. We&#x27;ll also add logic to handle dynamic form controls using <code>ngFor</code> and conditionally display sections of the form using <code>ngIf</code> and <code>ngSwitch</code>.</li>
</ul>
<pre><code class="language-typescript">
import { Component, OnInit } from &#x27;@angular/core&#x27;;
import { FormBuilder, FormGroup, Validators, FormControl } from &#x27;@angular/forms&#x27;;

@Component({
  selector: &#x27;app-your-form&#x27;,
  templateUrl: &#x27;./your-form.component.html&#x27;,
  styleUrls: [&#x27;./your-form.component.css&#x27;]
})
export class YourFormComponent implements OnInit {

  // Define a FormGroup to represent the form
  myForm: FormGroup;

  // Inject FormBuilder in the constructor
  constructor(private fb: FormBuilder) { }

  // Initialize the form in the ngOnInit lifecycle hook
  ngOnInit() {
    this.createForm();
  }

  // Function to create the form with controls and validation
  createForm() {
    // Using FormBuilder to create a FormGroup with form controls and validation
    this.myForm = this.fb.group({
      personalInfo: this.fb.group({
        name: [&#x27;&#x27;, Validators.required],
        email: [&#x27;&#x27;, [Validators.required, Validators.email]],
        phone: [&#x27;&#x27;, Validators.pattern(&#x27;^\\+?[0-9]{0,13}$&#x27;)],
      }),
      address: this.fb.group({
        street: [&#x27;&#x27;, Validators.required],
        city: [&#x27;&#x27;, Validators.required],
        zip: [&#x27;&#x27;, Validators.pattern(&#x27;^[0-9]{5}$&#x27;)],
      }),
      subscribe: [false],
      newsletterType: [&#x27;daily&#x27;],
    });

    // Subscribe to changes in the &#x27;subscribe&#x27; control to dynamically add or remove the &#x27;newsletterType&#x27; control
    this.myForm.get(&#x27;subscribe&#x27;).valueChanges.subscribe((value) =&gt; {
      const newsletterTypeControl = this.myForm.get(&#x27;newsletterType&#x27;);

      if (value) {
        newsletterTypeControl.setValidators(Validators.required);
      } else {
        newsletterTypeControl.clearValidators();
      }

      newsletterTypeControl.updateValueAndValidity();
    });
  }

  // Function to handle form submission
  onSubmit() {
    // Check if the form is valid before submitting
    if (this.myForm.valid) {
      // Perform actions with the form data, e.g., send it to a server
      console.log(&#x27;Form submitted:&#x27;, this.myForm.value);
    } else {
      // Handle the case when the form is not valid
      console.log(&#x27;Form is not valid. Please fill in all required fields.&#x27;);
    }
  }
}
</code></pre>
<p>Now, let&#x27;s update the HTML file (<code>your-form.component.html</code>) to include <code>ngIf</code>, <code>ngFor</code>, and <code>ngSwitch</code> for dynamic control rendering and conditional sections:</p>
<pre><code class="language-html">
&lt;form [formGroup]=&quot;myForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;
  &lt;!-- Personal Information Section --&gt;
  &lt;div formGroupName=&quot;personalInfo&quot;&gt;
    &lt;label&gt;Name: &lt;input formControlName=&quot;name&quot; /&gt;&lt;/label&gt;
    &lt;label&gt;Email: &lt;input formControlName=&quot;email&quot; /&gt;&lt;/label&gt;
    &lt;label&gt;Phone: &lt;input formControlName=&quot;phone&quot; /&gt;&lt;/label&gt;
  &lt;/div&gt;

  &lt;!-- Address Section --&gt;
  &lt;div formGroupName=&quot;address&quot;&gt;
    &lt;label&gt;Street: &lt;input formControlName=&quot;street&quot; /&gt;&lt;/label&gt;
    &lt;label&gt;City: &lt;input formControlName=&quot;city&quot; /&gt;&lt;/label&gt;
    &lt;label&gt;ZIP: &lt;input formControlName=&quot;zip&quot; /&gt;&lt;/label&gt;
  &lt;/div&gt;

  &lt;!-- Subscription Section --&gt;
  &lt;label&gt;
    &lt;input type=&quot;checkbox&quot; formControlName=&quot;subscribe&quot; /&gt; Subscribe to newsletter
  &lt;/label&gt;

  &lt;!-- Newsletter Type Section - Dynamic control using ngIf --&gt;
  &lt;div *ngIf=&quot;myForm.get(&#x27;subscribe&#x27;).value&quot;&gt;
    &lt;label&gt;Newsletter Type:
      &lt;select formControlName=&quot;newsletterType&quot;&gt;
        &lt;option value=&quot;daily&quot;&gt;Daily&lt;/option&gt;
        &lt;option value=&quot;weekly&quot;&gt;Weekly&lt;/option&gt;
        &lt;option value=&quot;monthly&quot;&gt;Monthly&lt;/option&gt;
      &lt;/select&gt;
    &lt;/label&gt;
  &lt;/div&gt;

  &lt;!-- Submit Button --&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
<p>In this HTML file:</p>
<ul>
<li><code>ngIf</code> is used to conditionally render the &quot;Newsletter Type&quot; section based on the value of the &quot;subscribe&quot; checkbox.</li>
<li><code>ngFor</code> is not explicitly used in this example, but you can imagine scenarios where it could be used for dynamic rendering of form controls.</li>
<li><code>ngSwitch</code> is not needed in this specific example, but it can be useful for rendering different sections based on a condition.</li>
</ul>
<p>Remember to include this component in your Angular module and ensure that the necessary FormsModule is imported.</p>
<pre><code class="language-typescript">
import { FormsModule, ReactiveFormsModule } from &#x27;@angular/forms&#x27;;

@NgModule({
  declarations: [
    YourFormComponent,
    // ... other components
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // ... other modules
  ],
})
export class YourModule { }
</code></pre>
<p>This example demonstrates a more complex form with dynamic control rendering and conditional sections, allowing you to adapt it to various form scenarios in your application.</p>
<h4 id="5-routing">5. <strong>Routing:</strong></h4>
<ul>
<li>Angular applications often use a router to manage navigation between different views or components.</li>
<li>The <code>RouterModule</code> is used to configure routes, and the <code>&lt;router-outlet&gt;</code> directive is used to display the appropriate component based on the current route.</li>
</ul>
<h4 id="6-lifecycle-hooks">6. <strong>Lifecycle Hooks:</strong></h4>
<ul>
<li>Angular components have lifecycle hooks (e.g., <code>ngOnInit</code>, <code>ngOnChanges</code>) that allow developers to tap into key moments in the component&#x27;s life cycle, such as initialization and destruction.</li>
</ul>
<h4 id="7-http-requests">7. <strong>HTTP Requests:</strong></h4>
<ul>
<li>Angular provides <code>HttpClient</code> for making HTTP requests to a server. This is often used to fetch or send data to a backend API.</li>
</ul>
<h4 id="8-forms">8. <strong>Forms:</strong></h4>
<ul>
<li>Angular supports both template-driven forms and reactive forms for handling user input.</li>
<li>Forms allow for easy validation, handling user input, and interacting with the application&#x27;s state.</li>
</ul>
<p>Understanding these fundamental concepts will help you navigate and build Angular applications effectively. Keep in mind that Angular evolves, and it&#x27;s essential to refer to the official documentation for the latest practices and features.</p>
<h2 id="13-what-is-decorator-and-its-types-with-example-and-explain-the-structures">13. What is decorator and its types with example and explain the structures.</h2>
<ul>
<li>In Angular, decorators are a set of design patterns that are used to enhance or modify the behavior of classes. </li>
<li>Decorators are typically used to annotate classes, methods, properties, or parameters in TypeScript code. </li>
<li>Angular uses decorators extensively to provide metadata and configuration for various features such as components, services, modules, and more.</li>
</ul>
<h3 id="example-of-decorator-in-single-class">Example of decorator in single class.</h3>
<p>In Angular, the lifecycle of a component refers to the series of events that occur from the creation of the component to its destruction. Understanding the component lifecycle is crucial for managing resources, performing initialization and cleanup tasks, and responding to changes in the component state. Here&#x27;s a brief overview of the Angular component lifecycle:</p>
<h4 id="1-ngonchanges">1. <strong>ngOnChanges:</strong></h4>
<ul>
<li>Triggered whenever the input properties of a component change.</li>
<li>It receives a <code>SimpleChanges</code> object containing the previous and current values of the input properties.</li>
</ul>
<h4 id="2-ngoninit">2. <strong>ngOnInit:</strong></h4>
<ul>
<li>Invoked once after the component is initialized.</li>
<li>It is a good place to perform component initialization logic.</li>
<li>This is where you can fetch initial data from a server.</li>
</ul>
<h4 id="3-ngdocheck">3. <strong>ngDoCheck:</strong></h4>
<ul>
<li>Invoked during every change detection cycle.</li>
<li>It allows you to implement custom change detection logic.</li>
<li>Be cautious with heavy computations in this hook, as it can impact performance.</li>
</ul>
<h4 id="4-ngaftercontentinit">4. <strong>ngAfterContentInit:</strong></h4>
<ul>
<li>Called after content (projected content within <code>&lt;ng-content&gt;</code>) has been initialized.</li>
<li>It is a good place to perform initialization that relies on content initialization.</li>
</ul>
<h4 id="5-ngaftercontentchecked">5. <strong>ngAfterContentChecked:</strong></h4>
<ul>
<li>Called after every check of the projected content.</li>
<li>Similar to <code>ngDoCheck</code>, but specific to content initialization.</li>
</ul>
<h4 id="6-ngafterviewinit">6. <strong>ngAfterViewInit:</strong></h4>
<ul>
<li>Invoked after the component&#x27;s view (and child views) has been initialized.</li>
<li>It is a good place to perform initialization that relies on the view.</li>
</ul>
<h4 id="7-ngafterviewchecked">7. <strong>ngAfterViewChecked:</strong></h4>
<ul>
<li>Called after every check of the component&#x27;s view (and child views).</li>
<li>Similar to <code>ngDoCheck</code>, but specific to view initialization.</li>
</ul>
<h4 id="8-ngondestroy">8. <strong>ngOnDestroy:</strong></h4>
<ul>
<li>Called just before the component is destroyed and removed from the DOM.</li>
<li>It is a good place to perform cleanup tasks (e.g., unsubscribing from observables, clearing timers).</li>
</ul>
<p>Here&#x27;s a simple example illustrating these lifecycle hooks:</p>
<pre><code class="language-typescript">
import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit } from &#x27;@angular/core&#x27;;

@Component({
  selector: &#x27;app-lifecycle-example&#x27;,
  template: &#x27;&lt;p&gt;{{ message }}&lt;/p&gt;&#x27;,
})
export class LifecycleExampleComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  message: string;

  // Called whenever input properties change
  ngOnChanges() {
    console.log(&#x27;ngOnChanges&#x27;);
  }

  // Called once after the component is initialized
  ngOnInit() {
    console.log(&#x27;ngOnInit&#x27;);
    this.message = &#x27;Initialized!&#x27;;
  }

  // Called after the component&#x27;s view has been initialized
  ngAfterViewInit() {
    console.log(&#x27;ngAfterViewInit&#x27;);
  }

  // Called just before the component is destroyed
  ngOnDestroy() {
    console.log(&#x27;ngOnDestroy&#x27;);
  }
}
</code></pre>
<p>Understanding the Angular component lifecycle helps you manage component state, perform initialization and cleanup tasks, and optimize performance.</p>
<h3 id="example-of-decorator-individually">Example of decorator individually.</h3>
<ul>
<li>Here are some commonly used decorators in Angular:</li>
</ul>
<h4 id="1-component">1. <strong>@Component:</strong></h4>
<ul>
<li>This decorator is used to define a component in Angular. It is applied to a class and provides metadata about the component, such as its selector, template, styles, and more.</li>
</ul>
<pre><code class="language-typescript">
import { Component } from &#x27;@angular/core&#x27;;

@Component({
   selector: &#x27;app-example&#x27;,
   template: &#x27;&lt;p&gt;This is an example component&lt;/p&gt;&#x27;,
   styles: [&#x27;p { color: blue; }&#x27;]
})
export class ExampleComponent { }
</code></pre>
<h4 id="2-what-is-directives">2. <strong>What is directives</strong></h4>
<ul>
<li><strong>@Directive:</strong> This decorator is used to define a directive, which is a behavior or appearance modification for a DOM element. Directives are typically used to create reusable components.</li>
</ul>
<pre><code class="language-typescript">
import { Directive, ElementRef, Input } from &#x27;@angular/core&#x27;;

@Directive({
  selector: &#x27;[appHighlight]&#x27;
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = &#x27;yellow&#x27;;
  }
}
</code></pre>
<p>   <strong>explain its types with example. How will you create custom directives?</strong></p>
<h4 id="3-injectable">3. <strong>@Injectable:</strong></h4>
<ul>
<li>This decorator is used to define a class as a service in Angular, allowing  it to be injected in to other components or services.</li>
<li>Services are used to encapsulate and share functionality across components.</li>
</ul>
<p>   ##### Different ways to inject a service in Angular.</p>
<ul>
<li>Three ways  to inject services. Constructor injection, property injection and method  injection.</li>
</ul>
<pre><code class="language-typescript">
    import { Injectable } from &#x27;@angular/core&#x27;;
    
    @Injectable({
     providedIn: &#x27;root&#x27;
    })
    export class DataService {
     // Service logic goes here
    }
</code></pre>
<h4 id="4-input-and-output">4. <strong>@Input and @Output:</strong></h4>
<ul>
<li>These decorators are used to define input and output properties in components, allowing data to be passed into a component and events to be emitted out of a component.</li>
</ul>
<pre><code class="language-typescript">
import { Component, Input, Output, EventEmitter } from &#x27;@angular/core&#x27;;

@Component({
  selector: &#x27;app-child&#x27;,
  template: &#x27;&lt;p&gt;{{ childMessage }}&lt;/p&gt;&#x27;
})
export class ChildComponent {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter&lt;string&gt;();
}
</code></pre>
<p>These are just a few examples of decorators in Angular. Decorators play a crucial role in configuring and extending the behavior of various Angular constructs.</p>
<h2 id="14-list-of-integers-using-ngfor-in-angular">14. List of integers using ngfor in angular</h2>
<pre><code class="language-html">
&lt;ul&gt;
 &lt;li *ngFor=&quot;let number of numbers&quot;&gt;{{ number }}&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<h2 id="15">15.</h2>
<h2 id="16-how-to-build-angular-application">16. how to build angular application</h2>
<ul>
<li><code>ng build --prod</code></li>
</ul>
<h2 id="17-what-is-component-how-to-generate-a-new-component-in-angular-write-a-syntax-for-a-component">17. What is component. How to generate a new component in angular. Write a syntax for a component.</h2>
<ul>
<li>Components are building blocks of Angular applications. </li>
<li>Generate a new component using the Angular CLI:</li>
<li><code>ng generate component componentName</code></li>
<li>eg. by default below components gets created by angular.</li>
<li><code>app.component.css</code></li>
<li><code>app.component.html</code></li>
<li><code>app.component.spec.ts</code> used to write unit test for component.</li>
<li><code>app.component.ts</code> links all other component files.</li>
</ul>
<h2 id="18-what-is-selector-and-template">18. what is selector and template</h2>
<ul>
<li>A <strong><em>selector</em></strong> is used to identify each component uniquely into the component tree.</li>
<li>A <strong><em>template</em></strong> is a HTML view of an Angular component</li>
</ul>
<p>eg. given below.</p>
<pre><code class="language-angular17html">
@Component({
  selector: &#x27;app-your-form&#x27;,
  templateUrl: &#x27;./your-form.component.html&#x27;,
  styleUrls: [&#x27;./your-form.component.css&#x27;]
})
</code></pre>
<h2 id="19-features-of-angular">19. Features of Angular.</h2>
<ul>
<li>Features include two-way data binding, dependency injection, modular development with components and a powerful CLI</li>
</ul>
<h2 id="20-explain-services">20. Explain Services.</h2>
<ul>
<li>Services are singleton objects used to encapsulate and share functionality, such as data manipulation or API calls across components.</li>
</ul>
<h2 id="21-pipes">21. Pipes</h2>
<ul>
<li><strong>What is pipes and explain the types with example?</strong></li>
<li>Pipes transforms data data in the template.</li>
<li>Types inclued LowerCasePipe, UpperCasePipe, DataPipe and CustomPipe</li>
</ul>
<ul>
<li><strong>Async pipes &amp; custom Pipes. How will you create a custom pipe?</strong></li>
<li>Async pipe subscribes to an observable or promise and returns the latest value. </li>
<li>To create a custom pipe, implement the pipe transform interface and use the @Pipe decorator </li>
</ul>
<h2 id="22-what-is-routing-and-explain-the-types-with-example">22. what is routing and explain the types with example?</h2>
<ul>
<li>Routing in angular manages navigation between views.</li>
<li>Types include Basic routing and Lazy-routing</li>
<li>Angular supports both basic routing and lazy loading to enhance the performance and scalability of applications. </li>
<li>Let&#x27;s explore the basic differences between basic routing and lazy loading in Angular, along with examples:</li>
</ul>
<h3 id="basic-routing">Basic Routing:</h3>
<ul>
<li><strong>Configuration:</strong></li>
<li>Basic routing involves configuring routes in the main <code>app.module.ts</code> file.</li>
<li>Routes are defined using the <code>RouterModule.forRoot()</code> method.</li>
</ul>
<ul>
<li><strong>Loading Components:</strong></li>
<li>All components associated with routes are loaded at the initial app startup.</li>
<li>This may lead to longer initial loading times, especially as the application grows.</li>
</ul>
<ul>
<li><strong>Example:</strong></li>
</ul>
<pre><code class="language-typescript">
// app.module.ts

import { RouterModule, Routes } from &#x27;@angular/router&#x27;;
import { HomeComponent } from &#x27;./components/home/home.component&#x27;;
import { AboutComponent } from &#x27;./components/about/about.component&#x27;;

const routes: Routes = [
  { path: &#x27;home&#x27;, component: HomeComponent },
  { path: &#x27;about&#x27;, component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
</code></pre>
<pre><code class="language-html">

&lt;router-outlet&gt;&lt;/router-outlet&gt;
</code></pre>
<h3 id="lazy-loading">Lazy Loading:</h3>
<ul>
<li><strong>Configuration:</strong></li>
<li>Lazy loading involves creating feature modules that are loaded only when a user navigates to a specific route.</li>
<li>Each feature module has its own routing configuration.</li>
</ul>
<ul>
<li><strong>Loading Components:</strong></li>
<li>Components associated with a lazy-loaded module are loaded on-demand, improving the initial loading time.</li>
</ul>
<ul>
<li><strong>Example:</strong></li>
</ul>
<pre><code class="language-typescript">
// app.module.ts

import { NgModule } from &#x27;@angular/core&#x27;;
import { RouterModule, Routes } from &#x27;@angular/router&#x27;;

const routes: Routes = [
  { path: &#x27;home&#x27;, loadChildren: () =&gt; import(&#x27;./modules/home/home.module&#x27;).then(m =&gt; m.HomeModule) },
  { path: &#x27;about&#x27;, loadChildren: () =&gt; import(&#x27;./modules/about/about.module&#x27;).then(m =&gt; m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
</code></pre>
<pre><code class="language-typescript">
// home.module.ts

import { NgModule } from &#x27;@angular/core&#x27;;
import { CommonModule } from &#x27;@angular/common&#x27;;
import { RouterModule, Routes } from &#x27;@angular/router&#x27;;
import { HomeComponent } from &#x27;./home.component&#x27;;

const routes: Routes = [
  { path: &#x27;&#x27;, component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
</code></pre>
<pre><code class="language-html">

&lt;router-outlet&gt;&lt;/router-outlet&gt;
</code></pre>
<p>In the lazy loading example, the <code>loadChildren</code> property in the route configuration specifies a function that returns a dynamic import of the feature module. This allows Angular to load the module and associated components only when the user navigates to the corresponding route, leading to better performance in large applications.</p>
<p>Lazy loading is particularly beneficial in scenarios where there are many feature modules, and loading all modules upfront would significantly impact the initial page load time.</p>
<h2 id="23-can-we-use-external-css-file-in-angular">23. Can we use external CSS file in angular?</h2>
<ul>
<li>Yes, we can use external CSS files in Angular by including them in the &quot;styles&quot; array of the angular.json file.</li>
</ul>
<h2 id="24-explain-the-types-of-forms-and-explain-the-usage-with-example">24. Explain the types of forms and explain the usage with example</h2>
<ul>
<li>Template-driven forms </li>
<li>Reactive-forms </li>
</ul>
<h3 id="exmaple-for-template-driven-form">Exmaple for template-driven form</h3>
<pre><code class="language-html">
&lt;form #myForm=&quot;ngForm&quot;&gt;
  &lt;input name=&quot;name&quot; ngModel required&gt;
  &lt;button [disabled]=&quot;!myForm.form.valid&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
<p>In Angular, you typically need to create a corresponding component to handle the form logic. Here&#x27;s a basic example of how your component might look:</p>
<pre><code class="language-typescript">
// Import necessary modules from Angular
import { Component } from &#x27;@angular/core&#x27;;
import { NgForm } from &#x27;@angular/forms&#x27;;

// Component decorator
@Component({
  selector: &#x27;app-your-form&#x27;,
  templateUrl: &#x27;./your-form.component.html&#x27;,
  styleUrls: [&#x27;./your-form.component.css&#x27;]
})

// Component class
export class YourFormComponent {

  // Define a model object to store form data
  model: any = {};

  // Function to handle form submission
  onSubmit(myForm: NgForm) {
    // Check if the form is valid before submitting
    if (myForm.valid) {
      // Perform actions with the form data, e.g., send it to a server
      console.log(&#x27;Form submitted:&#x27;, this.model);
    } else {
      // Handle the case when the form is not valid
      console.log(&#x27;Form is not valid. Please fill in all required fields.&#x27;);
    }
  }
}
</code></pre>
<p>In this example, the <code>YourFormComponent</code> class defines a <code>model</code> object to store the form data. The <code>onSubmit</code> method is called when the form is submitted. It checks if the form is valid using <code>myForm.valid</code> and performs actions accordingly.</p>
<p>Here&#x27;s how your HTML template (<code>your-form.component.html</code>) might look like:</p>
<pre><code class="language-html">
&lt;form #myForm=&quot;ngForm&quot; (ngSubmit)=&quot;onSubmit(myForm)&quot;&gt;
  &lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;
  &lt;input name=&quot;name&quot; [(ngModel)]=&quot;model.name&quot; required&gt;
  
  &lt;button type=&quot;submit&quot; [disabled]=&quot;!myForm.form.valid&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
<p>In this template, the <code>ngForm</code> directive is used to create a form instance, and <code>ngSubmit</code> is used to bind the form submission to the <code>onSubmit</code> method in the component. The <code>ngModel</code> directive is used for two-way data binding to the <code>model.name</code> property.</p>
<p>Make sure to import and include the necessary Angular forms module in your application module:</p>
<pre><code class="language-typescript">
import { FormsModule } from &#x27;@angular/forms&#x27;;

@NgModule({
  imports: [
    // other modules...
    FormsModule
  ],
  declarations: [
    // your components...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
</code></pre>
<ul>
<li>This is a basic example, and you may need to adjust it based on your specific requirements and the structure of your application.</li>
<li>The example provided is using Template-Driven Forms in Angular. Template-Driven Forms are a way of handling forms in Angular using directives in the template. In your example, you&#x27;re using directives like <code>ngForm</code>, <code>ngSubmit</code>, and <code>ngModel</code> to build the form logic directly in the template.</li>
<li>In contrast, Reactive Forms involve creating form controls and groups programmatically in the component class. Reactive Forms provide more flexibility and control, especially for complex forms and dynamic form scenarios. Reactive Forms are typically preferred when you need to perform dynamic form validation, create form controls dynamically, or implement more complex form interactions.</li>
<li>Your example is simpler and uses Template-Driven Forms, which might be sufficient for less complex forms. However, depending on your application&#x27;s requirements, you might choose Template-Driven Forms or Reactive Forms accordingly.</li>
</ul>
<h3 id="example-for-reactive-driven-forms">Example for Reactive-driven forms</h3>
<ul>
<li>If you were using Reactive Forms, you would import classes like <code>FormControl</code>, <code>FormGroup</code>, and <code>FormBuilder</code> in your component and create form controls and groups in the component class rather than the template. The template would then bind to these controls using the <code>formControlName</code> directive.</li>
<li>Implement the same form using Reactive Forms in Angular:</li>
</ul>
<pre><code class="language-typescript">
// Import necessary modules from Angular
import { Component, OnInit } from &#x27;@angular/core&#x27;;
import { FormBuilder, FormGroup, Validators } from &#x27;@angular/forms&#x27;;

// Component decorator
@Component({
  selector: &#x27;app-your-form&#x27;,
  templateUrl: &#x27;./your-form.component.html&#x27;,
  styleUrls: [&#x27;./your-form.component.css&#x27;]
})

// Component class
export class YourFormComponent implements OnInit {

  // Define a FormGroup to represent the form
  myForm: FormGroup;

  // Inject FormBuilder in the constructor
  constructor(private fb: FormBuilder) { }

  // Initialize the form in the ngOnInit lifecycle hook
  ngOnInit() {
    this.createForm();
  }

  // Function to create the form with controls and validation
  createForm() {
    this.myForm = this.fb.group({
      name: [&#x27;&#x27;, Validators.required]
    });
  }

  // Function to handle form submission
  onSubmit() {
    // Check if the form is valid before submitting
    if (this.myForm.valid) {
      // Perform actions with the form data, e.g., send it to a server
      console.log(&#x27;Form submitted:&#x27;, this.myForm.value);
    } else {
      // Handle the case when the form is not valid
      console.log(&#x27;Form is not valid. Please fill in all required fields.&#x27;);
    }
  }
}
</code></pre>
<p>And your HTML template (<code>your-form.component.html</code>) would now look like this:</p>
<pre><code class="language-html">
&lt;form [formGroup]=&quot;myForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;
  &lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;
  &lt;input formControlName=&quot;name&quot;&gt;
  
  &lt;button type=&quot;submit&quot; [disabled]=&quot;!myForm.valid&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
<ul>
<li>In this example, we use the <code>FormBuilder</code> service to create a <code>FormGroup</code> in the component class. The form controls are defined within this group. The <code>[formGroup]</code> directive is used in the form element to bind the form group to the template. The <code>formControlName</code> directive is used to bind the input field to the corresponding control in the form group.</li>
<li>Reactive Forms provide more control and flexibility, especially when dealing with dynamic forms or complex validation scenarios.</li>
</ul>
<h2 id="25-what-is-form-builder-form-group-and-form-control-and-expalain-with-example">25. What is Form Builder, form Group and form control and expalain with example</h2>
<ul>
<li>Certainly! Let me explain the concepts of <code>FormBuilder</code>, <code>FormGroup</code>, and <code>FormControl</code> in Angular Forms and provide an example of how you can use them together.</li>
</ul>
<h3 id="1-formcontrol">1. <strong><code>FormControl</code></strong>:</h3>
<ul>
<li>A <code>FormControl</code> represents a single input field in a form. It can track the value and validation status of an individual form control.</li>
</ul>
<p>Example:</p>
<pre><code class="language-typescript">
import { FormControl, Validators } from &#x27;@angular/forms&#x27;;

const nameControl = new FormControl(&#x27;&#x27;, Validators.required);
</code></pre>
<h3 id="2-formgroup">2. <strong><code>FormGroup</code></strong>:</h3>
<ul>
<li>A <code>FormGroup</code> is a collection of <code>FormControl</code> instances. It represents a group of form controls and is used to organize and manage the values and validation status of a set of controls.</li>
</ul>
<p>Example:</p>
<pre><code class="language-typescript">
import { FormGroup, FormBuilder, Validators } from &#x27;@angular/forms&#x27;;

const myForm = new FormGroup({
  name: new FormControl(&#x27;&#x27;, Validators.required),
  email: new FormControl(&#x27;&#x27;, [Validators.required, Validators.email]),
});
</code></pre>
<h3 id="3-formbuilder">3. <strong><code>FormBuilder</code></strong>:</h3>
<ul>
<li><code>FormBuilder</code> is a service provided by Angular that simplifies the creation of <code>FormGroup</code> and <code>FormControl</code> instances. It provides convenient methods for building complex forms.</li>
</ul>
<p>Example:</p>
<pre><code class="language-typescript">
import { FormBuilder, Validators } from &#x27;@angular/forms&#x27;;

const fb = new FormBuilder();

const myForm = fb.group({
   name: [&#x27;&#x27;, Validators.required],
   email: [&#x27;&#x27;, [Validators.required, Validators.email]],
});
</code></pre>
<p>Now, let&#x27;s put it all together in an Angular component:</p>
<pre><code class="language-typescript">
import { Component, OnInit } from &#x27;@angular/core&#x27;;
import { FormBuilder, FormGroup, Validators } from &#x27;@angular/forms&#x27;;

@Component({
  selector: &#x27;app-your-form&#x27;,
  templateUrl: &#x27;./your-form.component.html&#x27;,
  styleUrls: [&#x27;./your-form.component.css&#x27;]
})
export class YourFormComponent implements OnInit {

  // Define a FormGroup to represent the form
  myForm: FormGroup;

  // Inject FormBuilder in the constructor
  constructor(private fb: FormBuilder) { }

  // Initialize the form in the ngOnInit lifecycle hook
  ngOnInit() {
    this.createForm();
  }

  // Function to create the form with controls and validation
  createForm() {
    // Using FormBuilder to create a FormGroup with form controls and validation
    this.myForm = this.fb.group({
      name: [&#x27;&#x27;, Validators.required],
      email: [&#x27;&#x27;, [Validators.required, Validators.email]],
    });
  }

  // Function to handle form submission
  onSubmit() {
    // Check if the form is valid before submitting
    if (this.myForm.valid) {
      // Perform actions with the form data, e.g., send it to a server
      console.log(&#x27;Form submitted:&#x27;, this.myForm.value);
    } else {
      // Handle the case when the form is not valid
      console.log(&#x27;Form is not valid. Please fill in all required fields.&#x27;);
    }
  }
}
</code></pre>
<p>In this example, the <code>FormBuilder</code> service is used to create a <code>FormGroup</code> with two <code>FormControl</code> instances for &#x27;name&#x27; and &#x27;email&#x27;. The form controls include validation rules, such as <code>Validators.required</code> and <code>Validators.email</code>. This approach makes it concise and readable, especially when dealing with more complex forms.</p>
<p>Here&#x27;s how the corresponding HTML file (<code>your-form.component.html</code>) would look like for the given Angular component using Reactive Forms:</p>
<pre><code class="language-html">
&lt;form [formGroup]=&quot;myForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;
  &lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;
  &lt;input type=&quot;text&quot; id=&quot;name&quot; formControlName=&quot;name&quot;&gt;
  &lt;!-- Display validation error message for the &#x27;name&#x27; field if it&#x27;s invalid --&gt;
  &lt;div *ngIf=&quot;myForm.get(&#x27;name&#x27;).hasError(&#x27;required&#x27;) &amp;&amp; myForm.get(&#x27;name&#x27;).touched&quot;&gt;
    Name is required.
  &lt;/div&gt;

  &lt;label for=&quot;email&quot;&gt;Email:&lt;/label&gt;
  &lt;input type=&quot;email&quot; id=&quot;email&quot; formControlName=&quot;email&quot;&gt;
  &lt;!-- Display validation error message for the &#x27;email&#x27; field if it&#x27;s invalid --&gt;
  &lt;div *ngIf=&quot;myForm.get(&#x27;email&#x27;).hasError(&#x27;required&#x27;) &amp;&amp; myForm.get(&#x27;email&#x27;).touched&quot;&gt;
    Email is required.
  &lt;/div&gt;
  &lt;div *ngIf=&quot;myForm.get(&#x27;email&#x27;).hasError(&#x27;email&#x27;) &amp;&amp; myForm.get(&#x27;email&#x27;).touched&quot;&gt;
    Please enter a valid email address.
  &lt;/div&gt;

  &lt;button type=&quot;submit&quot; [disabled]=&quot;!myForm.valid&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code></pre>
<p>In this HTML template:</p>
<ul>
<li>The form is bound to the <code>myForm</code> FormGroup using <code>[formGroup]=&quot;myForm&quot;</code>.</li>
<li>Each input field is associated with a specific FormControl using <code>formControlName</code>.</li>
<li>Validation error messages are displayed conditionally based on the state of the form controls. The <code>*ngIf</code> directive is used to show error messages only when the corresponding control is touched and in an invalid state.</li>
</ul>
<ul>
<li>This template includes basic validation error messages for the &#x27;name&#x27; and &#x27;email&#x27; fields. You can customize the error messages and styling based on your application&#x27;s requirements.</li>
<li>In Reactive Forms, you create form controls and groups programmatically in the component class and then bind them to the template. The <code>formGroup</code> directive is used to bind the FormGroup, and the <code>formControlName</code> directive is used to bind individual form controls.</li>
</ul>
<p><strong>In the provided HTML file:</strong></p>
<ul>
<li>The <code>formGroup</code> directive is used to bind the form group (<code>myForm</code>) to the <code>&lt;form&gt;</code> element.</li>
<li>The <code>formControlName</code> directive is used to bind each input field to its corresponding FormControl within the FormGroup.</li>
</ul>
<p>These are key indicators that the form is using Reactive Forms in Angular. Additionally, the TypeScript code in the corresponding component class is creating the FormGroup and FormControls using the <code>FormBuilder</code> service, which is another characteristic of Reactive Forms.</p>
<h2 id="26-explain-ngif-ngfor-and-ngswitch">26. Explain ngIf, ngFor and ngSwitch.</h2>
<ul>
<li>Certainly! <code>ngIf</code>, <code>ngFor</code>, and <code>ngSwitch</code> are structural directives in Angular, and they are used to conditionally manipulate the structure of the DOM.</li>
</ul>
<h3 id="1-ngif">1. <strong>ngIf</strong>:</h3>
<ul>
<li>The <code>ngIf</code> directive is used to conditionally render or remove an element from the DOM based on the truthiness or falsiness of an expression.</li>
</ul>
<p>Example:</p>
<pre><code class="language-html">
&lt;div *ngIf=&quot;showElement&quot;&gt;This element is shown conditionally.&lt;/div&gt;
</code></pre>
<h3 id="2-ngfor">2. <strong>ngFor</strong>:</h3>
<ul>
<li>The <code>ngFor</code> directive is used for iterating over a collection (such as an array or an object) and creating a template for each item in the collection. </li>
</ul>
<p>Example with an array:</p>
<pre><code class="language-html">
&lt;ul&gt;
  &lt;li *ngFor=&quot;let item of items&quot;&gt;{{ item }}&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<p>Example with an object:</p>
<pre><code class="language-html">
&lt;div *ngFor=&quot;let keyValuePair of object | keyvalue&quot;&gt;
 Key: {{ keyValuePair.key }}, Value: {{ keyValuePair.value }}
&lt;/div&gt;
</code></pre>
<h3 id="3-ngswitch">3. <strong>ngSwitch</strong>:</h3>
<ul>
<li>The <code>ngSwitch</code> directive is used for conditionally rendering content based on the value of an expression. It&#x27;s similar to a switch statement in programming.</li>
</ul>
<p>Example:</p>
<pre><code class="language-html">
&lt;div [ngSwitch]=&quot;condition&quot;&gt;
   &lt;div *ngSwitchCase=&quot;&#x27;case1&#x27;&quot;&gt;Content for case 1&lt;/div&gt;
   &lt;div *ngSwitchCase=&quot;&#x27;case2&#x27;&quot;&gt;Content for case 2&lt;/div&gt;
   &lt;div *ngSwitchDefault&gt;Default content&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>In these examples:</p>
<ul>
<li>The <code>*</code> in front of the directives indicates that they are structural directives, meaning they can change the structure of the DOM.</li>
<li><code>ngIf</code> is used to conditionally include or exclude an element.</li>
<li><code>ngFor</code> is used to iterate over a collection and repeat a portion of the DOM for each item.</li>
<li><code>ngSwitch</code> is used to conditionally render content based on the value of an expression.</li>
</ul>
<p>These directives are powerful tools for creating dynamic and interactive templates in Angular applications.</p>
<h2 id="27-crossorigin-and-is-it-another-way-to-connect-the-backend-without-using-crossorigin">27. CrossOrigin and is it another way to connect the backend without using crossorigin.</h2>
<p><code>CrossOrigin</code> is an HTTP header that is used in web development to control how web pages in one domain can request and interact with resources on another domain. In the context of web development, the &quot;Same-Origin Policy&quot; is a security measure implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web page. The <code>CrossOrigin</code> header allows servers to specify which origins are permitted to access their resources.</p>
<p>If you&#x27;re encountering the need to use <code>@CrossOrigin</code> in a Java-based backend, it&#x27;s likely because you&#x27;re dealing with Cross-Origin Resource Sharing (CORS) issues. CORS is a security feature implemented by web browsers to prevent unauthorized cross-origin requests.</p>
<p>If you want to connect to the backend without using <code>@CrossOrigin</code>, there are a few alternatives:</p>
<ul>
<li><strong>Proxy Server:</strong> You can set up a proxy server to forward requests from your frontend to your backend. This way, the requests appear to be coming from the same origin, and you won&#x27;t run into CORS issues. Tools like Apache HTTP Server or Nginx can be used for this purpose.</li>
</ul>
<ul>
<li><strong>CORS Configuration:</strong> Instead of using <code>@CrossOrigin</code> in your Java code, you can configure CORS on your server. This involves setting up the appropriate headers in your server&#x27;s configuration. This is often done in a filter or interceptor.</li>
</ul>
<ul>
<li><strong>Backend Routing:</strong> If your frontend and backend are served from the same domain but different paths (e.g., frontend at <code>/</code> and backend at <code>/api</code>), you might not run into CORS issues. Ensure that your frontend code is configured to make requests to the correct paths on the same domain.</li>
</ul>
<p>Remember that CORS is a security feature, and bypassing it without understanding the implications could expose your application to potential security risks. If you&#x27;re having CORS issues, it&#x27;s often a good idea to understand why the browser is blocking the request and address the root cause rather than circumventing it.</p>
<h2 id="28-explain-static-typing-in-angular">28. Explain static typing in angular</h2>
<ul>
<li>Angular is built with  TypeScript, which provides static typing. </li>
<li>It helps catch errors during development by checking types at compile-time.</li>
<li>Store static files inside the <code>assets</code> folder.</li>
</ul>
<h2 id="29-explain-subject-in-angular">29. Explain subject in angular</h2>
<ul>
<li>Subject is a type of observable that allows values to be multicasted to many observers. It is both an observable and an observer.</li>
</ul>
<h2 id="30-javascript-vs-typescript">30. Javascript vs Typescript</h2>
<ul>
<li>JavaScript is a scripting language and typescript is a superset of javaScript that adds static typing, detect error at compile time and other features.</li>
</ul>
<h2 id="31-what-is-node-module">31. what is node_module</h2>
<ul>
<li><code>node_module</code> is a directory where npm installs packages (dependencies) for a project.</li>
<li><code>NPM</code> keeps library for both <code>node js</code> and <code>angular</code></li>
</ul>
<ul>
<li>How to add dependencies in angular</li>
<li>To add dependency, use npm or yarn to install.</li>
<pre><code class="language-shell">
npm install package-name
</code></pre>
<li>How will you iterate the array in TypeScript?</li>
<pre><code class="language-typescript">
let numbers = [1,2,3,4,5,6]
for(let num of numbers)
{
    console.log(num);
}
</code></pre>
</ul>
<ul>
<li>Explain @crossorigin &amp; proxy.server.config?</li>
</ul>
<p>41. </p>
<ul>
<li>Different ways to inject a service in angular.</li>
<li>Css vs Scss</li>
<li>maximum size of constructor injection</li>
<li>Lint in angular?</li>
<li>Sonarqube</li>
<li>Explain Angular Basics.</li>
<li>How will display the value in html which is got as response from backend.</li>
<li>How to communicate data between multiple components?</li>
</ul>
<h2 id="1-what-is-angular-why-do-we-need-angular">1. <strong>What is Angular? Why do we need Angular?</strong></h2>
<ul>
<li>Angular component based framework for building structured, scalable(upgradable and flexible for upgrade) and dynamic single-page applications(eg. utube. Page won&#x27;t reload) for client side. </li>
<li>We need Angular because it offers a range of benefits, </li>
</ul>
<p>such as  </p>
<ul>
<li>two-way data binding, </li>
<li>dependency injection, </li>
<li>a powerful template system, and </li>
<li>a component-based architecture, making it easier to build, test, and maintain web applications.</li>
</ul>
<ul>
<li>Advantages of angular.</li>
<li>Single page applications(Components)</li>
<li>Flexible and structured(OOPS Friendly)</li>
<li>Cross-platform(O.S, Browsers) and open source.</li>
<li>Reusable code(Services)</li>
<li>Testability(Specs.ts)</li>
</ul>
<ul>
<li>Angular supports both JS(java script) and TS(type script)</li>
<li>Framework has component based architecture, which is faster than MVC architecture.</li>
<li>Has CLI tool.</li>
<li>Dependency injection</li>
<li>Mobile browser support</li>
<li>Very fast because of data binding technique and component based.</li>
</ul>
<h2 id="2-what-is-a-component">2. <strong>What is a Component?</strong></h2>
<p>A component is a fundamental building block in Angular. It represents a part of the user interface (UI) and consists of a TypeScript class, an HTML template, and CSS styles. Components encapsulate specific functionality and data, and they are reusable and modular, allowing developers to break down the UI into smaller, manageable parts.</p>
<h2 id="3-what-is-a-directive-how-many-types-of-directives">3. <strong>What is a Directive? How many types of Directives?</strong></h2>
<p>Directives are markers on HTML elements that instruct Angular to do something with the elements. There are three types of directives in Angular:</p>
<ul>
<li><strong>Component Directives:</strong> These are custom components created by developers.</li>
<li><strong>Structural Directives:</strong> These alter the structure of the DOM by adding, removing, or replacing elements. Examples include <strong>\<em>ngIf</strong>, <strong>\</em>ngFor</strong>, and <strong>\*ngSwitch</strong>.</li>
<li><strong>Attribute Directives:</strong> These change the appearance or behavior of an element, often by adding or removing attributes. Examples include <strong>ngClass</strong> and <strong>ngStyle</strong>.</li>
</ul>
<h2 id="4-what-is-data-binding-how-many-types">4. <strong>What is Data Binding? How many types?</strong></h2>
<p>Data binding is a fundamental concept in Angular that connects the UI with the application data. There are four types of data binding in Angular:</p>
<ul>
<li><strong>Interpolation (One-Way Binding):</strong> It allows you to embed expressions within double curly braces <code>{{ }}</code> in the template, and the expressions are evaluated and displayed in the view.</li>
<li><strong>Property Binding (One-Way Binding):</strong> It allows you to set the value of an HTML element&#x27;s property or attribute using data from the component.</li>
<li><strong>Event Binding (One-Way Binding):</strong> It lets you respond to events (e.g., clicks) raised in the UI and trigger functions in the component.</li>
<li><strong>Two-Way Binding:</strong> It combines property binding and event binding, allowing changes in the UI to automatically update the component and vice versa using the <strong>ngModel</strong> directive or <strong>[()]</strong> syntax.</li>
</ul>
<h2 id="5-decorators-in-angular">5. <strong>Decorators in Angular</strong></h2>
<p>Decorators(annotations) are used in Angular to mark a class as an Angular construct and provide configuration. Some commonly used decorators include:</p>
<ul>
<li><strong>@Component</strong>: Defines a component.</li>
<li><strong>@Directive</strong>: Defines a custom directive.</li>
<li><strong>@Pipe</strong>: Defines a custom pipe for transforming data.</li>
<li><strong>@NgModule</strong>: Configures and organizes application modules.</li>
<li><strong>@Injectable</strong>: Marks a class as a service for dependency injection.</li>
<li><strong>@Input</strong>: Specifies that a property can receive input from a parent component.</li>
<li><strong>@Output</strong>: Emits events to a parent component.</li>
<li><strong>@EventEmitter</strong>: Creates custom events.</li>
<li><strong>@HostListener</strong>: Listens for events on the host element.</li>
<li><strong>@ViewChild</strong> and <strong>@ContentChild</strong>: Access child elements in templates.</li>
</ul>
<h2 id="6-what-are-pipes-how-to-create-a-custom-pipe">6. <strong>What are Pipes? How to create a custom pipe?</strong></h2>
<p>Pipes are used to transform data for display in the view. Angular provides built-in pipes for common transformations like date formatting and capitalization. You can create a custom pipe by implementing the <strong>PipeTransform</strong> interface and using the <strong>@Pipe</strong> decorator to define the pipe&#x27;s name and its transformation function.</p>
<h2 id="7-angular-lifecycle-hooks">7. <strong>Angular Lifecycle Hooks</strong></h2>
<p>Angular components go through a series of lifecycle events. Some important hooks include:</p>
<ul>
<li><strong>ngOnInit</strong>: Called after the component has been initialized.</li>
<li><strong>ngOnChanges</strong>: Called when the component&#x27;s input properties change.</li>
<li><strong>ngOnDestroy</strong>: Called just before the component is destroyed.</li>
<li><strong>ngAfterViewInit</strong>: Called after the component&#x27;s view has been initialized.</li>
</ul>
<h2 id="8-compiler-in-angular-jit-aot">8. <strong>Compiler in Angular (JIT, AOT)</strong></h2>
<ul>
<li>Angular can be compiled either Just-In-Time (JIT) or Ahead-Of-Time (AOT). </li>
<li>JIT compilation occurs in the browser at runtime, while AOT compilation happens during the build time. </li>
<li>AOT offers better performance and smaller bundle sizes. AOT is default compilation.</li>
<li>We can change the compilation of build from AOT to JIT. </li>
<li>For that we need to set <code>&quot;aot&quot;: false</code> in <code>angular.json</code> file under <code>development</code>. </li>
<li>But JIT won&#x27;t detect errors at build time, where AOT does.</li>
</ul>
<h2 id="9-observable">9. <strong>Observable</strong></h2>
<p>Observables are a core concept in Angular used for handling asynchronous operations, such as making HTTP requests or listening for events. They provide a way to work with asynchronous data streams and allow you to subscribe to these streams to react to changes.</p>
<h2 id="10-subject-and-behaviorsubject">10. <strong>Subject and BehaviorSubject</strong></h2>
<p>Subjects are a type of observable that can multicast data to multiple subscribers. BehaviorSubject is a variant of Subject that stores the latest emitted value and emits it to new subscribers immediately upon subscription.</p>
<h2 id="11-hot-and-cold-observables">11. <strong>Hot and Cold Observables</strong></h2>
<p>Hot observables produce data regardless of whether there are subscribers, and multiple subscribers share the same data stream. Cold observables only produce data when a subscriber actively listens, and each subscriber gets its own data stream.</p>
<h2 id="12-interceptor">12. <strong>Interceptor</strong></h2>
<p>Interceptors are used in Angular to intercept HTTP requests and responses. They are often used for tasks like adding authentication headers, logging, or error handling to HTTP requests.</p>
<h2 id="13-connecting-frontend-to-backend">13. <strong>Connecting Frontend to Backend</strong></h2>
<p>To connect the frontend to a backend server, Angular uses the <strong>HttpClientModule</strong> to make HTTP requests to APIs. Configuration for the backend connection can be specified in files like <strong>proxy.config.json</strong> or <strong>environment.ts</strong>.</p>
<h2 id="14-webpack">14. <strong>Webpack</strong></h2>
<p>Webpack is a powerful module bundler used in Angular applications to bundle, optimize, and manage assets like JavaScript and CSS files. It&#x27;s commonly used for building and bundling Angular applications.</p>
<h2 id="15-communication-between-components">15. <strong>Communication Between Components</strong></h2>
<p>Components can communicate with each other using various techniques, including:</p>
<ul>
<li>Input and Output properties to pass data from parent to child and emit events.</li>
<li>Services to share data and functionality between components.</li>
<li>State management libraries like NgRx or BehaviorSubject to manage and share state across components.</li>
</ul>
<h2 id="16-what-is-service-and-dependency-injection">16. <strong>What is Service and Dependency Injection?</strong></h2>
<ul>
<li>A service in Angular is a class that encapsulates a specific functionality or feature. It is designed to be reusable and provide a way to separate concerns in an application. Services are often used for tasks like data retrieval, authentication, and other business logic.</li>
<li>Dependency Injection (DI) is a core concept in Angular that allows you to provide instances of services to components when they are needed. This helps in achieving loose coupling and making components more testable. Angular&#x27;s DI system is used to manage the creation and sharing of service instances.</li>
</ul>
<h2 id="17-how-will-you-build-your-application-ng-build">17. <strong>How Will You Build Your Application (ng build)?</strong></h2>
<ul>
<li>To build an Angular application, you can use the Angular CLI (<strong>ng</strong> command) as follows:</li>
<li>Open a terminal or command prompt.</li>
<li>Navigate to your project&#x27;s root directory.</li>
<li>Use the <strong>ng build</strong> command to build the application.</li>
<li>You can specify options like <strong>--prod</strong> for a production build.</li>
</ul>
<p>This command compiles the application and generates optimized bundles in the <strong>dist</strong> directory by default.</p>
<h2 id="18-how-will-you-deploy-your-application">18. <strong>How Will You Deploy Your Application?</strong></h2>
<ul>
<li>Deploying an Angular application typically involves the following steps:</li>
</ul>
<ul>
<li>Build the application using <strong>ng build</strong>.</li>
<li>Copy the contents of the <strong>dist</strong> folder generated by the build process to a web server or a hosting platform.</li>
<li>Configure the server or hosting environment to serve the Angular application. This may involve setting up routes, security, and any server-specific configurations.</li>
<li>Ensure that the necessary back-end services, APIs, and databases are also set up and accessible.</li>
</ul>
<h2 id="19-what-is-angular-testing">19. <strong>What is Angular Testing?</strong></h2>
<ul>
<li>Angular testing refers to the process of verifying that Angular applications work as expected. It involves writing and running tests to check the functionality, reliability, and performance of an Angular application. Angular provides built-in testing utilities and integration with testing frameworks like Jasmine and Karma.</li>
</ul>
<h2 id="20-what-is-jasmine-and-karma">20. <strong>What is Jasmine and Karma?</strong></h2>
<ul>
<li><strong>Jasmine:</strong> Jasmine is a popular and widely used testing framework for JavaScript applications, including Angular. It provides functions for defining test suites, expectations, and spies for mocking functions. Jasmine is known for its clean and readable syntax.</li>
<li><strong>Karma:</strong> Karma is a test runner that allows you to run tests in various browsers simultaneously. It works well with Jasmine and other testing frameworks. Karma makes it easy to automate the testing process, run tests in real browsers, and collect test results.</li>
</ul>
<h2 id="21-what-is-authguard-and-how-will-you-secure-your-application">21. <strong>What is AuthGuard, and How Will You Secure Your Application?</strong></h2>
<ul>
<li>An AuthGuard in Angular is a class that implements the <strong>CanActivate</strong> interface. It is used to control access to specific routes based on user authentication and authorization. AuthGuards are often used to protect routes that require authentication.</li>
<li>To secure an Angular application, you can use AuthGuards to restrict access to certain routes, implement proper authentication mechanisms like JWT (JSON Web Tokens), and apply authorization checks to control what users can and cannot do within the application. Additionally, you should follow best practices for securing the back-end services that the application relies on.</li>
</ul>
<h2 id="22-what-is-the-server-used-in-angular-angular-doesnt-have-a-default-server">22. <strong>What is the Server Used in Angular? (Angular Doesn&#x27;t Have a Default Server)</strong></h2>
<ul>
<li>Angular itself does not include a default server. It is a client-side framework for building web applications. You can use various web servers (e.g., Apache, Nginx) or server-side technologies (e.g., Node.js, Java, .NET) to serve your Angular application&#x27;s static files and provide back-end services.</li>
</ul>
<h2 id="23-what-is-ngclass-ngstyle-ngif-ngif-ngswitch-ngswitchdefault">23. **What is ngClass, ngStyle, ngIf, ngIf, ngSwitch, ngSwitchDefault?*</h2>
<ul>
<li><strong>ngClass:</strong> <strong>ngClass</strong> is an Angular directive that allows you to dynamically set CSS classes on HTML elements based on certain conditions in your component. It takes an object or an array to define the classes to apply.</li>
<li><strong>ngStyle:</strong> <strong>ngStyle</strong> is an Angular directive that lets you dynamically set inline styles for HTML elements based on component data. It takes an object to define the styles to apply.</li>
<li><strong>ngIf:</strong> <strong>ngIf</strong> is a structural directive that conditionally includes or removes an element from the DOM based on a truthy or falsy condition.</li>
<li><strong>\<em>ngIf:</strong> The asterisk (\</em>) is a syntactic sugar that simplifies the use of <strong>ngIf</strong> in templates, making it easier to read and understand.</li>
<li><strong>ngSwitch and ngSwitchDefault:</strong> These are directives used for conditionally rendering content based on the value of a switch expression. <strong>ngSwitch</strong> defines the switch expression, and <strong>ngSwitchCase</strong> and <strong>ngSwitchDefault</strong> are used to define the different cases and the default case, respectively.</li>
</ul>
<h2 id="24-workflow-or-architecture-of-angular-application">24. <strong>Workflow or Architecture of Angular Application</strong></h2>
<ul>
<li>Angular applications follow a component-based architecture. The typical workflow involves:</li>
<li>Designing the application structure with components, services, and modules.</li>
<li>Creating components with templates, styles, and logic.</li>
<li>Defining routes and configuring navigation.</li>
<li>Handling data and making HTTP requests.</li>
<li>Managing application state (if needed) using libraries like NgRx.</li>
<li>Writing tests for components and services.</li>
<li>Building and deploying the application.</li>
</ul>
<h2 id="25-how-will-you-do-inline-styling-stylescss">25. <strong>How Will You Do Inline Styling (styles.css)?</strong></h2>
<ul>
<li>To apply inline styling to Angular components, you can use the <strong>styles</strong> property within the component&#x27;s <strong>@Component</strong> decorator. For example:</li>
</ul>
<p>typescriptCopy code</p>
<p>@Component({ selector: &#x27;app-example&#x27;, template: <code>&lt;div [ngStyle]=&quot;customStyles&quot;&gt;Inline Styling Example&lt;/div&gt;</code>, styles: [<code> div { color: blue; background-color: yellow; } </code>] }) export class ExampleComponent { customStyles = { &#x27;font-size.px&#x27;: 16, &#x27;text-align&#x27;: &#x27;center&#x27; }; }</p>
<p>In this example, the <strong>styles</strong> property defines the component&#x27;s inline styles, and the <strong>[ngStyle]</strong> directive applies dynamic styles based on the <strong>customStyles</strong> object.</p>
<h2 id="26-what-are-the-commands-used-in-angular-cli">26. <strong>What Are the Commands Used in Angular CLI?</strong></h2>
<ul>
<li>Angular CLI provides a set of commands to facilitate the development of Angular applications. Some common commands include:</li>
</ul>
<ul>
<li><strong>ng new</strong>: Used to create a new Angular project.</li>
<li><strong>ng generate</strong> (or <strong>ng g</strong>): Generates components, modules, services, and more.</li>
<li><strong>ng serve</strong>: Starts a development server for the project.</li>
<li><strong>ng build</strong>: Compiles and builds the application for production.</li>
<li><strong>ng test</strong>: Runs unit tests using Karma and Jasmine.</li>
<li><strong>ng e2e</strong>: Runs end-to-end tests using Protractor.</li>
<li><strong>ng lint</strong>: Checks code for linting errors.</li>
<li><strong>ng update</strong>: Updates Angular and its dependencies to the latest versions.</li>
<li><strong>ng add</strong>: Adds new features or libraries to the project.</li>
</ul>
<h2 id="27-difference-between-typescript-and-javascript">27. <strong>Difference Between TypeScript and JavaScript:</strong></h2>
<ul>
<li><strong>TypeScript:</strong> TypeScript is a superset of JavaScript that adds static typing to the language. It allows developers to specify variable types, interfaces, and provides features like classes and modules. TypeScript code must be transpiled to JavaScript before it can run in a browser.</li>
<li><strong>JavaScript:</strong> JavaScript is a dynamically typed scripting language widely used for web development. It doesn&#x27;t require type annotations, and it can run directly in web browsers. JavaScript is versatile and can be used for both client and server-side development.</li>
</ul>
<h2 id="28-what-is-a-promise-and-what-is-the-difference-between-a-promise-and-an-observable">28. <strong>What Is a Promise, and What Is the Difference Between a Promise and an Observable?</strong></h2>
<ul>
<li><strong>Promise:</strong> A promise is an object representing the eventual completion or failure of an asynchronous operation. It provides a clean way to handle asynchronous operations and allows you to attach callbacks for success and error.</li>
<li><strong>Difference:</strong> Observables are more powerful than promises. While a promise represents a single value that will be available in the future, observables can represent multiple values over time. Observables also have operators for handling data streams and complex transformations. Observables offer better support for canceling requests and handling events.</li>
</ul>
<h2 id="29-how-can-you-handle-errors-in-angular">29. <strong>How Can You Handle Errors in Angular?</strong></h2>
<ul>
<li>Errors in Angular can be handled in various ways:</li>
<li>Using error handling operators like <strong>catch</strong> and <strong>throw</strong> in Observables.</li>
<li>Implementing a global error handler service to catch unhandled errors.</li>
<li>Using <strong>try...catch</strong> blocks to handle synchronous errors.</li>
<li>Handling HTTP errors by intercepting HTTP requests and responses using <strong>HttpClient</strong> interceptors.</li>
</ul>
<h2 id="30-difference-between-observable-and-observer">30. <strong>Difference Between Observable and Observer:</strong></h2>
<ul>
<li><strong>Observable:</strong> An observable is a data source that emits data over time. It can be subscribed to by observers, and it is used for handling asynchronous data streams. Observables can represent streams of events or data.</li>
<li><strong>Observer:</strong> An observer is an object or function that listens to an observable&#x27;s data emissions. It defines how to react when data is emitted, including what to do on success, error, or completion.</li>
</ul>
<h2 id="31-which-will-be-the-first-to-execute-constructor-or-ngoninit">31. <strong>Which Will Be the First to Execute: Constructor or ngOnInit?</strong></h2>
<ul>
<li>The constructor of a component is executed before <strong>ngOnInit</strong>. The constructor is part of the class&#x27;s instantiation process and is called when an instance of the component is created. <strong>ngOnInit</strong> is a lifecycle hook that Angular calls after initializing the component and its data-bound properties.</li>
</ul>
<h2 id="32-what-is-view-encapsulation">32. <strong>What Is View Encapsulation?</strong></h2>
<ul>
<li>View encapsulation in Angular refers to the way Angular isolates a component&#x27;s styles from the rest of the application. Angular supports three encapsulation modes:</li>
<li><strong>Emulated (default):</strong> Styles are scoped to the component&#x27;s view using shadow DOM emulation. It&#x27;s the default behavior.</li>
<li><strong>None:</strong> Styles are global and affect the entire application.</li>
<li><strong>Native:</strong> Styles are applied using the browser&#x27;s native shadow DOM.</li>
</ul>
<h2 id="33-what-are-scopes-in-angular">33. <strong>What Are Scopes in Angular?</strong></h2>
<ul>
<li>Angular does not use the concept of &quot;scopes&quot; in the same way as AngularJS (version 1.x). Instead, it uses a component-based structure, where each component has its own scope or context. Data binding in Angular is typically done within the component&#x27;s context, and each component defines its own data and behavior.</li>
</ul>
<h2 id="34-how-will-you-handle-http-requests-in-angular-using-httpclientmodule">34. <strong>How Will You Handle HTTP Requests in Angular (Using HttpClientModule)?</strong></h2>
<ul>
<li>To handle HTTP requests in Angular, you can use the <strong>HttpClientModule</strong> to make GET, POST, PUT, and DELETE requests to a server. The typical steps include:</li>
<li>Importing <strong>HttpClientModule</strong> in the app&#x27;s module.</li>
<li>Injecting the <strong>HttpClient</strong> service into components or services.</li>
<li>Using the <strong>HttpClient</strong> service to make requests to APIs or servers.</li>
<li>Handling responses and errors using Observables and error handling techniques.</li>
</ul>
<p>You can also create services to encapsulate the HTTP request logic and reuse it across the application.</p>
<h2 id="35-what-is-single-page-application-in-angular">35. what is single page application in angular ?</h2>
<p>A Single Page Application (SPA) in Angular is a web application that uses the Angular framework to create a single, dynamically updating web page. Angular is a popular JavaScript framework for building SPAs, and it provides a set of tools and features to simplify the development of such applications. In an Angular SPA:</p>
<ul>
<li><strong>Component-Based Structure:</strong> Angular organizes an application into components. Each component represents a specific part of the user interface and can have its own logic, templates, and styles. These components can be loaded dynamically and updated as needed, which is a key feature of SPAs.</li>
<li><strong>Routing:</strong> Angular provides a powerful routing system that allows you to define routes and map them to specific components. This enables the application to respond to changes in the URL (e.g., different pages or views) without actually navigating to new web pages. The router loads the appropriate component for the requested route, making it a crucial part of creating SPAs.</li>
<li><strong>Data Binding:</strong> Angular supports two-way data binding, which means that changes in the application&#x27;s data are automatically reflected in the user interface, and vice versa. This real-time data synchronization enhances the interactivity of SPAs.</li>
<li><strong>Dependency Injection:</strong> Angular&#x27;s dependency injection system simplifies managing dependencies and services, making it easier to share data and functionality between different parts of your application.</li>
<li><strong>Ajax Requests:</strong> Angular facilitates making asynchronous requests to a server or an API, allowing the application to fetch and display data without requiring a full page reload.</li>
<li><strong>Template System:</strong> Angular uses templates to define the structure and layout of the application&#x27;s UI. Templates are written in a combination of HTML and Angular-specific syntax, which makes it easy to bind data and create dynamic views.</li>
<li><strong>Directives:</strong> Angular provides directives that extend HTML with additional functionality. For instance, you can use ngFor to iterate over a list and generate multiple elements dynamically, or use ngIf to conditionally show or hide elements.</li>
<li><strong>Services:</strong> Angular services are used to encapsulate and share business logic, data, and functionality across different parts of the application.</li>
</ul>
<p>   Angular&#x27;s design principles and features make it well-suited for creating complex SPAs, and it has a strong ecosystem of libraries and tools to enhance the development process. However, building SPAs with Angular can be more complex than simpler solutions due to the framework&#x27;s extensive capabilities.</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = angularInterviewQuestionsContentData;
}
