// Quarkus - Content Data
const quarkusContentData = `<p>Gotcha — you’re basically asking <em>how Quarkus uses ARC, RESTEasy, RESTEasy Jackson, and friends</em>, and how they fit together. Let’s zoom out first, then drill down.</p>
<hr>
<h2 id="big-picture-quarkus-curated-optimized-stack">Big picture: Quarkus = curated, optimized stack</h2>
<p>Quarkus isn’t “just” a framework — it’s an <strong>opinionated platform</strong> that wires together best-of-breed Java specs and libraries, then aggressively optimizes them for:</p>
<ul>
<li>fast startup ⚡</li>
<li>low memory</li>
<li>GraalVM native images</li>
<li>build-time processing</li>
</ul>
<p>So instead of you gluing CDI + JAX-RS + Jackson manually, Quarkus does that <em>at build time</em>.</p>
<hr>
<h2 id="arc-quarkus-cdi-implementation">ARC — Quarkus’ CDI implementation</h2>
<p><strong>ARC = Quarkus’ CDI container</strong></p>
<ul>
<li>Implements <strong>CDI Lite</strong> (Jakarta CDI 4 style)</li>
<li>Built specifically for Quarkus</li>
<li>Replaces heavyweight CDI implementations like Weld</li>
</ul>
<h3 id="what-arc-is-used-for">What ARC is used for</h3>
<ul>
<li>Dependency injection (<code>@Inject</code>)</li>
<li>Scopes (<code>@ApplicationScoped</code>, <code>@RequestScoped</code>, etc.)</li>
<li>Interceptors (<code>@Transactional</code>, custom interceptors)</li>
<li>Lifecycle callbacks (<code>@PostConstruct</code>, <code>@PreDestroy</code>)</li>
<li>Producer methods and fields</li>
</ul>
<h3 id="what-makes-arc-special">What makes ARC special</h3>
<ul>
<li><strong>Build-time bean discovery</strong></li>
<li>No runtime classpath scanning</li>
<li>Aggressive unused-bean removal</li>
<li>Tight integration with extensions</li>
</ul>
<p>Example:</p>
<pre><code class="language-java">
@ApplicationScoped
public class GreetingService {
    public String hello() {
        return &quot;Hello&quot;;
    }
}
</code></pre>
<p>ARC:</p>
<ul>
<li>finds this at build time</li>
<li>generates bytecode</li>
<li>wires it directly into injection points</li>
</ul>
<hr>
<h2 id="resteasy-jax-rs-implementation">RESTEasy — JAX-RS implementation</h2>
<p><strong>RESTEasy = Quarkus’ JAX-RS engine</strong></p>
<p>Depending on your Quarkus version:</p>
<ul>
<li><strong>RESTEasy Classic</strong> (older, servlet-based)</li>
<li><strong>RESTEasy Reactive</strong> (modern, non-blocking, default now)</li>
</ul>
<h3 id="what-resteasy-does">What RESTEasy does</h3>
<ul>
<li>Exposes HTTP endpoints (<code>@Path</code>, <code>@GET</code>, <code>@POST</code>)</li>
<li>Handles request routing</li>
<li>Manages request/response lifecycle</li>
<li>Integrates with ARC for injection</li>
</ul>
<p>Example:</p>
<pre><code class="language-java">
@Path(&quot;/hello&quot;)
public class HelloResource {

    @Inject
    GreetingService service;

    @GET
    public String hello() {
        return service.hello();
    }
}
</code></pre>
<p>Here:</p>
<ul>
<li>RESTEasy instantiates the resource</li>
<li>ARC injects <code>GreetingService</code></li>
<li>No reflection-heavy runtime magic</li>
</ul>
<hr>
<h2 id="resteasy-jackson-json-binding">RESTEasy Jackson — JSON binding</h2>
<p><strong>RESTEasy Jackson = JSON ↔ Java bridge</strong></p>
<p>It integrates:</p>
<ul>
<li>JAX-RS (RESTEasy)</li>
<li>Jackson (<code>ObjectMapper</code>)</li>
<li>Quarkus configuration</li>
</ul>
<h3 id="what-it-handles">What it handles</h3>
<ul>
<li>Serializing Java objects → JSON</li>
<li>Deserializing JSON → Java objects</li>
<li>Content negotiation (<code>@Produces</code>, <code>@Consumes</code>)</li>
</ul>
<p>Example:</p>
<pre><code class="language-java">
@GET
@Produces(MediaType.APPLICATION_JSON)
public Person getPerson() {
    return new Person(&quot;Alice&quot;, 30);
}
</code></pre>
<p>Behind the scenes:</p>
<ul>
<li>RESTEasy selects Jackson as the message body reader/writer</li>
<li>Quarkus configures a shared <code>ObjectMapper</code></li>
<li>Reflection metadata is pre-registered at build time (native-friendly)</li>
</ul>
<hr>
<h2 id="how-these-pieces-work-together-request-flow">How these pieces work together (request flow)</h2>
<p>Let’s trace one HTTP request:</p>
<ul>
<li><strong>HTTP request arrives</strong></li>
</ul>
<ul>
<li>Handled by Vert.x (Quarkus’ HTTP layer)</li>
</ul>
<ul>
<li><strong>RESTEasy kicks in</strong></li>
</ul>
<ul>
<li>Matches URL → resource method</li>
<li>Creates or reuses resource instance</li>
</ul>
<ul>
<li><strong>ARC injects dependencies</strong></li>
</ul>
<ul>
<li>Beans resolved at build time</li>
<li>No dynamic classpath scanning</li>
</ul>
<ul>
<li><strong>Business logic executes</strong></li>
</ul>
<ul>
<li>Your code runs</li>
</ul>
<ul>
<li><strong>RESTEasy + Jackson serialize response</strong></li>
</ul>
<ul>
<li>Java object → JSON</li>
<li>Uses Quarkus-managed <code>ObjectMapper</code></li>
</ul>
<ul>
<li><strong>Response returned</strong></li>
</ul>
<ul>
<li>Sent back via Vert.x</li>
</ul>
<hr>
<h2 id="others-youll-commonly-see-with-these">“Others” you’ll commonly see with these</h2>
<h3 id="vertx">Vert.x</h3>
<ul>
<li>Underlying HTTP server</li>
<li>Event loop, non-blocking I/O</li>
<li>Especially important for RESTEasy Reactive</li>
</ul>
<h3 id="smallrye">SmallRye</h3>
<p>MicroProfile implementations used by Quarkus:</p>
<ul>
<li>Config</li>
<li>Health</li>
<li>Metrics</li>
<li>OpenAPI</li>
<li>JWT</li>
</ul>
<h3 id="hibernate-orm-panache">Hibernate ORM / Panache</h3>
<ul>
<li>JPA integration</li>
<li>Panache adds Quarkus-style APIs</li>
<li>Integrated with ARC and transactions</li>
</ul>
<h3 id="narayana">Narayana</h3>
<ul>
<li>JTA transaction manager</li>
<li>Used for <code>@Transactional</code></li>
</ul>
<hr>
<h2 id="key-quarkus-philosophy-difference-vs-spring-java-ee">Key Quarkus philosophy difference (vs Spring / Java EE)</h2>
<table>
<thead><tr>
<th>Traditional Java</th>
<th>Quarkus</th>
</tr></thead><tbody>
<tr>
<td>Runtime scanning</td>
<td>Build-time processing</td>
</tr>
<tr>
<td>Reflection-heavy</td>
<td>Generated bytecode</td>
</tr>
<tr>
<td>Big containers</td>
<td>Lean runtime</td>
</tr>
<tr>
<td>Slow startup</td>
<td>Fast startup</td>
</tr>
</tbody></table>
<p>ARC + RESTEasy + Jackson are <strong>not independent</strong> in Quarkus — they’re <em>co-designed</em> via extensions.</p>
<hr>
<h2 id="when-you-choose-what">When you choose what</h2>
<ul>
<li><strong>ARC</strong> → always on (DI backbone)</li>
<li><strong>RESTEasy Reactive</strong> → default for REST APIs</li>
<li><strong>RESTEasy Jackson</strong> → JSON APIs</li>
<li><strong>JSON-B instead of Jackson</strong> → if you prefer spec-first</li>
</ul>
<hr>
<p>If you want, I can:</p>
<ul>
<li>compare RESTEasy Classic vs Reactive</li>
<li>explain how Quarkus extensions wire into ARC</li>
<li>show native-image implications</li>
<li>map this to Spring Boot equivalents</li>
</ul>
<p>Just tell me where you want to zoom in 🔍</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = quarkusContentData;
}
