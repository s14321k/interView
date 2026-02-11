// Angular - Content Data
const angularContentData = `<h1 id="features-of-angular">Features Of Angular</h1>
<h2 id="template-engine">Template Engine</h2>
<h2 id="data-binding">Data Binding</h2>
<h2 id="forms">Forms</h2>
<h2 id="routing">Routing</h2>
<h2 id="observables">Observables</h2>
<h2 id="pwa-download-as-a-native-app-for-mobdesktop">PWA - Download as a native app for mob/desktop</h2>
<h2 id="tsconfigjson">tsconfig.json</h2>
<ul>
<li>change the &quot;strict&quot;: true mode in tsconfig.json</li>
<li>noImplicitAny in tsconfig.json</li>
<li>sourceMap to debug code</li>
<li>noEmit for not to generate js file</li>
<li>&quot;outDir&quot;: &quot;./dist&quot; to see the generated output</li>
</ul>
<h1 id="typescript-v4-microsoft-google">TypeScript v4 (Microsoft) -&gt; (Google)</h1>
<ul>
<li>Strongly typed programming language</li>
<li>Superset of JavaScript</li>
<li>Compiles to JavaScript</li>
<li>TypeScript comes with its own compiler called TSC.</li>
</ul>
<h2 id="type-safety">Type Safety</h2>
<h2 id="installing-and-creating-first-typescript-program">Installing and creating first typeScript program</h2>
<ul>
<li>Install node - 20.9.0(current)</li>
<li>Create Folder</li>
<li>in terminal -&gt; npm init</li>
<li>Should see package.json in folder</li>
<li>in terminal -&gt; npm i typscript</li>
<li>in terminal -&gt; Use this `<code>tsc --init</code><code> or this </code><code>npx tsc --init</code>`</li>
<li>Create a dataTypes.ts file for practice.</li>
<li>in terminal -&gt; `<code>tsc</code><code> or </code><code>npx tsc</code>`  -&gt;  creates dataTypes.js file.</li>
<li>After writing code in .ts file, in terminal type -&gt; npx tsc -&gt; node dataTypes</li>
</ul>
<h2 id="spa-single-page-application">SPA (Single page application)</h2>
<ul>
<li>SPA does not make requests to server for every URL requests. Like AJAX</li>
</ul>
<h2 id="angular-helps">Angular Helps</h2>
<ul>
<li>Angular has routing functionality.</li>
<li>SSR(Server side rendering) good for SEO(Search engine optimization) which supports SPA.</li>
</ul>
<h2 id="agenda">Agenda</h2>
<h3 id="data-types">DATA types</h3>
<ul>
<li>string</li>
<li>number</li>
<li>boolean</li>
<li>array</li>
<li>enum</li>
<li>tuple</li>
<li>any</li>
<li>void</li>
<li>never</li>
</ul>
<h3 id="different-ways-to-write-functions">Different ways to write functions</h3>
<ul>
<li>Name function</li>
<li>Function expression</li>
<li>Arrow function</li>
</ul>
<h3 id="generic-function">Generic function</h3>
<h3 id="optional-parameters">Optional Parameters</h3>
<h3 id="required-parameters">Required Parameters</h3>
<h3 id="rest-parameters">Rest Parameters</h3>
<h3 id="type-inference">Type Inference</h3>
<p>Type script has the ability to determine the type of data type assigned. Like `<code>let name = &quot;Sarath&quot;</code>`, ts finds this is a string.</p>
<h3 id="union-and-intersection-types">Union and intersection Types</h3>
<h3 id="generics">Generics</h3>
<h3 id="literal-types">Literal types</h3>
<h3 id="decorators-are-annotations-in-angular">Decorators are annotations in angular</h3>
<ul>
<li>Can modify the behavior of class, method at run time.</li>
<li>Used internally by angular.</li>
</ul>
<h1 id="angular">Angular</h1>
<h2 id="install-angular">install Angular</h2>
<h3 id="to-create-empty-and-add-projects">To create empty and add projects</h3>
<ul>
<li>To install angular cli - <code>npm i @angular/cli -g</code></li>
<li>To check the version - <code>ng --version</code> or <code>ng version</code></li>
</ul>
<p>`<code>If face any issue to check the version, then try this.</code>`</p>
<p>Run the bellow commands in shell.</p>
<ul>
<li><strong>Get-ExecutionPolicy</strong> - If the policy is set to &quot;Restricted&quot; or &quot;AllSigned,&quot; you need to change it to allow script execution. </li>
<li><strong>Set-ExecutionPolicy Unrestricted</strong> -Scope CurrentUser - this will change the mode</li>
<li>To revert back use this command - <strong>Set-ExecutionPolicy Unrestricted -Scope CurrentUser</strong></li>
</ul>
<ul>
<li>To create new work space empty - <code>ng new angularProj --createApplicationfalse</code></li>
<li>Install npm  - <code>npm i</code> or <code>npm install</code></li>
<li>install packages - <code>ng g app hotelInventory</code></li>
</ul>
<h3 id="to-create-work-space-with-default-project">To create work space with default project</h3>
<ul>
<li><code>ng new hoteInventory</code></li>
<li>To create under specific version <code>npx @angular/cli@13 new hotelInventoryAngular</code></li>
<li>If karma.conf.js doesn&#x27;t exist, then run this command `<code>ng generate config karma</code>`</li>
<li>`<code>npx browserslist</code>` - To check the browser compatibility</li>
<li>`<code>ng serve -o</code>` - To run the application.</li>
<li>To kill the  process `<code>ctrl + c</code>` to terminate.</li>
<li>`<code>ng build</code><code> to build the app. Now new folder </code>dist<code> will get created. inside that </code>index.html` file is present.</li>
<li><a href="https://angular.io/guide/standalone-migration">No modules.js file?</a></li>
<li>https://angular.io/guide/standalone-components</li>
<li>https://stackoverflow.com/a/76753364</li>
<li>To create a new component- `<code>ng generate Home -standalone --inline-template</code><code> or </code><code>ng generate component compName</code><code> or using short cuts </code><code>ng g c compName</code>`</li>
<li>To change the <code>selector</code> prifix, // To change the app to sar or vice versa, go to angular.json and change the value in prefix</li>
<li>To increase ideal time out <code>npm config set registry https://registry.npmjs.org/ --timeout=60000</code></li>
<li>clear npm cache <code>npm cache clean --force</code></li>
</ul>
<h2 id="binding-syntax">Binding Syntax</h2>
<ul>
<li>There are three ways,</li>
<li>Interpolation syntax - using the variable name assigned inside the component <code>{{ varName }}</code></li>
<li>Property Binding</li>
<li>Event Binding</li>
</ul>
<h2 id="directives">Directives</h2>
<ul>
<li>They are reusable elements and changes the behavior and appearance on DOM</li>
<li>Directive wont be having templates where Components have.</li>
<li>Directives can implement all life cycle hooks</li>
</ul>
<h3 id="types-of-directives">Types of Directives</h3>
<h4 id="built-in-directives">Built in directives</h4>
<ul>
<li>Structural directives</li>
<li>*ngIf - eg in rooms.component.html<a href="../../VisualStudio/TSAngular/hotelInventoryAngular13/src/app/rooms/rooms.component.html">hotelInventoryAngular13</a>  //(..%2F..%2FVisualStudio%2FTSAngular%2FhotelInventoryAngular13)</li>
<li>*ngFor</li>
<li>*ngSwitch</li>
<li>Attribute directives</li>
<li>ngClass</li>
<li>ngStyle</li>
<li>Componet directives</li>
</ul>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = angularContentData;
}
