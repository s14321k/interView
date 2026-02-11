// Quarkus Annotations Complete Guide - Content Data
const quarkusAnnotationsCompleteGuideContentData = `<h1 id="complete-quarkus-annotations-guide">🚀 Complete Quarkus Annotations Guide</h1>
<blockquote><strong>A comprehensive, beginner-friendly reference to Quarkus annotations</strong></blockquote>
<hr>
<h2 id="big-picture-1-minute-mental-model">🧠 Big Picture (1-Minute Mental Model)</h2>
<p><strong>Quarkus = Modern Java + Annotations for Framework Magic</strong></p>
<p>Annotations tell Quarkus how to:</p>
<ul>
<li>🌐 Expose REST APIs</li>
<li>💉 Manage dependencies (DI)</li>
<li>💾 Handle database operations</li>
<li>⚙️ Configure runtime behavior</li>
<li>🔒 Secure endpoints</li>
<li>🚄 Optimize for native compilation</li>
<li>📨 Process messages</li>
<li>🛡️ Build resilient systems</li>
</ul>
<hr>
<h2 id="complete-quarkus-annotations-tree">🌳 Complete Quarkus Annotations Tree</h2>
<pre><code class="language-">
Quarkus Annotations
│
├── Core &amp; CDI (Dependency Injection)
│   ├── @ApplicationScoped
│   ├── @Singleton
│   ├── @Dependent
│   ├── @RequestScoped
│   ├── @SessionScoped
│   ├── @Inject
│   ├── @Produces
│   ├── @Named
│   ├── @Alternative
│   ├── @Default
│   ├── @Qualifier
│   └── @Disposes
│
├── REST / Web (JAX-RS &amp; RESTEasy)
│   ├── @Path
│   ├── @GET / @POST / @PUT / @DELETE / @PATCH / @HEAD / @OPTIONS
│   ├── @Produces
│   ├── @Consumes
│   ├── @PathParam
│   ├── @QueryParam
│   ├── @HeaderParam
│   ├── @FormParam
│   ├── @CookieParam
│   ├── @MatrixParam
│   ├── @BeanParam
│   ├── @Context
│   ├── @DefaultValue
│   └── @Encoded
│
├── RESTEasy Reactive (Non-Blocking)
│   ├── @RestPath
│   ├── @RestQuery
│   ├── @RestHeader
│   ├── @RestForm
│   ├── @RestCookie
│   ├── @RestMatrix
│   ├── @Blocking
│   ├── @NonBlocking
│   └── @WithFormRead
│
├── Persistence (JPA/Hibernate)
│   ├── @Entity
│   ├── @Table
│   ├── @Id
│   ├── @GeneratedValue
│   ├── @Column
│   ├── @Transient
│   ├── @Temporal
│   ├── @Enumerated
│   ├── @Lob
│   ├── @Version
│   ├── @OneToOne
│   ├── @OneToMany
│   ├── @ManyToOne
│   ├── @ManyToMany
│   ├── @JoinColumn
│   ├── @JoinTable
│   ├── @Fetch
│   ├── @NamedQuery
│   ├── @NamedQueries
│   └── @EntityListeners
│
├── Panache (Simplified Persistence)
│   ├── @PanacheEntity
│   ├── @PanacheEntityBase
│   ├── @MappedSuperclass
│   ├── @Embeddable
│   └── @Embedded
│
├── Transactions
│   ├── @Transactional
│   ├── @TransactionScoped
│   └── @Transactional.TxType (REQUIRED, REQUIRES_NEW, etc.)
│
├── Configuration
│   ├── @ConfigProperty
│   ├── @ConfigMapping
│   ├── @ConfigPrefix
│   ├── @WithName
│   ├── @WithDefault
│   ├── @WithConverter
│   └── @WithUnnamedKey
│
├── Profiles &amp; Build
│   ├── @IfBuildProfile
│   ├── @UnlessBuildProfile
│   ├── @IfBuildProperty
│   └── @UnlessBuildProperty
│
├── Lifecycle
│   ├── @PostConstruct
│   ├── @PreDestroy
│   ├── @Observes StartupEvent
│   ├── @Observes ShutdownEvent
│   └── @Startup
│
├── Security
│   ├── @RolesAllowed
│   ├── @PermitAll
│   ├── @DenyAll
│   ├── @Authenticated
│   ├── @SecurityIdentity
│   └── @Claim (JWT)
│
├── Scheduling
│   ├── @Scheduled
│   ├── @Scheduled(cron = &quot;...&quot;)
│   ├── @Scheduled(every = &quot;10s&quot;)
│   └── @Scheduled(delayed = &quot;5s&quot;)
│
├── Messaging (Reactive Messaging)
│   ├── @Incoming
│   ├── @Outgoing
│   ├── @Channel
│   ├── @Acknowledgment
│   ├── @Broadcast
│   ├── @Merge
│   └── @OnOverflow
│
├── Events (CDI Events)
│   ├── @Observes
│   ├── @ObservesAsync
│   ├── @Priority
│   └── Event&lt;T&gt;.fire()
│
├── Fault Tolerance (MicroProfile)
│   ├── @Retry
│   ├── @Timeout
│   ├── @Fallback
│   ├── @CircuitBreaker
│   ├── @Bulkhead
│   └── @Asynchronous
│
├── Validation (Bean Validation)
│   ├── @Valid
│   ├── @NotNull
│   ├── @NotBlank
│   ├── @NotEmpty
│   ├── @Size
│   ├── @Min / @Max
│   ├── @DecimalMin / @DecimalMax
│   ├── @Email
│   ├── @Pattern
│   ├── @Past / @Future
│   ├── @PastOrPresent / @FutureOrPresent
│   └── @Digits
│
├── REST Client (MicroProfile REST Client)
│   ├── @RegisterRestClient
│   ├── @RestClient (injection)
│   ├── @ClientHeaderParam
│   ├── @ClientQueryParam
│   └── @RegisterProvider
│
├── Health Checks
│   ├── @Liveness
│   ├── @Readiness
│   └── @Health (deprecated)
│
├── Metrics (MicroProfile Metrics)
│   ├── @Timed
│   ├── @Counted
│   ├── @Gauge
│   ├── @Metered
│   └── @ConcurrentGauge
│
├── OpenAPI / Swagger
│   ├── @Operation
│   ├── @APIResponse
│   ├── @APIResponses
│   ├── @Parameter
│   ├── @RequestBody
│   ├── @Schema
│   ├── @Tag
│   ├── @SecurityScheme
│   └── @SecurityRequirement
│
├── Native / Build-Time
│   ├── @RegisterForReflection
│   ├── @BuildStep
│   ├── @Recorder
│   ├── @Record
│   ├── @ConfigRoot
│   └── @ConfigItem
│
├── Cache
│   ├── @CacheResult
│   ├── @CacheInvalidate
│   ├── @CacheInvalidateAll
│   └── @CacheKey
│
├── Testing
│   ├── @QuarkusTest
│   ├── @QuarkusIntegrationTest
│   ├── @TestProfile
│   ├── @QuarkusTestResource
│   ├── @TestTransaction
│   ├── @InjectMock
│   ├── @InjectSpy
│   ├── @MockitoConfig
│   └── @TestHTTPResource
│
├── WebSockets
│   ├── @OnOpen
│   ├── @OnClose
│   ├── @OnError
│   ├── @OnMessage
│   └── @ServerEndpoint
│
├── gRPC
│   ├── @GrpcService
│   ├── @GrpcClient
│   └── @RegisterForReflection (for gRPC classes)
│
├── Observability (OpenTelemetry)
│   ├── @WithSpan
│   ├── @SpanAttribute
│   └── @Traced (deprecated)
│
└── Reactive (Mutiny)
    ├── Uni&lt;T&gt;
    ├── Multi&lt;T&gt;
    └── @ReactiveTransactional
</code></pre>
<hr>
<h2 id="detailed-breakdown">📚 Detailed Breakdown</h2>
<h3 id="1-core-cdi-dependency-injection">🔹 1. Core &amp; CDI (Dependency Injection)</h3>
<p><strong>Purpose:</strong> Manage object lifecycle and dependencies automatically.</p>
<pre><code class="language-java">
@ApplicationScoped
public class UserService {

    @Inject
    UserRepository repo;
    
    @Inject
    @Named(&quot;special&quot;)
    SpecialProcessor processor;
    
    @Produces
    @Named(&quot;defaultConfig&quot;)
    public Config createConfig() {
        return new Config();
    }
}
</code></pre>
<table>
<thead><tr>
<th>Annotation</th>
<th>Scope</th>
<th>Lifecycle</th>
</tr></thead><tbody>
<tr>
<td><code>@ApplicationScoped</code></td>
<td>Application-wide</td>
<td>Single instance for entire app</td>
</tr>
<tr>
<td><code>@Singleton</code></td>
<td>Application-wide</td>
<td>Eager singleton (thread-safe)</td>
</tr>
<tr>
<td><code>@Dependent</code></td>
<td>Caller</td>
<td>New instance per injection</td>
</tr>
<tr>
<td><code>@RequestScoped</code></td>
<td>HTTP Request</td>
<td>One per request</td>
</tr>
<tr>
<td><code>@SessionScoped</code></td>
<td>HTTP Session</td>
<td>One per session</td>
</tr>
<tr>
<td><code>@Inject</code></td>
<td>N/A</td>
<td>Inject dependency</td>
</tr>
<tr>
<td><code>@Produces</code></td>
<td>N/A</td>
<td>Factory method for beans</td>
</tr>
<tr>
<td><code>@Named</code></td>
<td>N/A</td>
<td>Bean identifier</td>
</tr>
<tr>
<td><code>@Qualifier</code></td>
<td>N/A</td>
<td>Custom qualifier</td>
</tr>
<tr>
<td><code>@Alternative</code></td>
<td>N/A</td>
<td>Alternative implementation</td>
</tr>
</tbody></table>
<hr>
<h3 id="2-rest-web-jax-rs">🔹 2. REST / Web (JAX-RS)</h3>
<p><strong>Purpose:</strong> Expose HTTP endpoints and handle web requests.</p>
<pre><code class="language-java">
@Path(&quot;/api/users&quot;)
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @GET
    @Path(&quot;/{id}&quot;)
    public User getUser(
        @PathParam(&quot;id&quot;) Long id,
        @QueryParam(&quot;includeOrders&quot;) @DefaultValue(&quot;false&quot;) boolean includeOrders,
        @HeaderParam(&quot;Authorization&quot;) String authToken
    ) {
        return userService.findById(id, includeOrders);
    }
    
    @POST
    public Response createUser(@Valid User user) {
        return Response.status(201).entity(user).build();
    }
    
    @DELETE
    @Path(&quot;/{id}&quot;)
    public void deleteUser(@PathParam(&quot;id&quot;) Long id) {
        userService.delete(id);
    }
}
</code></pre>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Path</code></td>
<td>URL path mapping</td>
</tr>
<tr>
<td><code>@GET/@POST/@PUT/@DELETE/@PATCH</code></td>
<td>HTTP methods</td>
</tr>
<tr>
<td><code>@Produces</code></td>
<td>Response content type</td>
</tr>
<tr>
<td><code>@Consumes</code></td>
<td>Request content type</td>
</tr>
<tr>
<td><code>@PathParam</code></td>
<td>Extract from URL path</td>
</tr>
<tr>
<td><code>@QueryParam</code></td>
<td>Extract from query string</td>
</tr>
<tr>
<td><code>@HeaderParam</code></td>
<td>Extract from HTTP headers</td>
</tr>
<tr>
<td><code>@FormParam</code></td>
<td>Extract from form data</td>
</tr>
<tr>
<td><code>@CookieParam</code></td>
<td>Extract from cookies</td>
</tr>
<tr>
<td><code>@BeanParam</code></td>
<td>Group multiple params</td>
</tr>
<tr>
<td><code>@Context</code></td>
<td>Inject request context</td>
</tr>
<tr>
<td><code>@DefaultValue</code></td>
<td>Default parameter value</td>
</tr>
</tbody></table>
<hr>
<h3 id="3-resteasy-reactive-non-blocking">🔹 3. RESTEasy Reactive (Non-Blocking)</h3>
<p><strong>Purpose:</strong> High-performance, non-blocking REST endpoints.</p>
<pre><code class="language-java">
@Path(&quot;/reactive&quot;)
public class ReactiveResource {

    @GET
    @Path(&quot;/users/{id}&quot;)
    public Uni&lt;User&gt; getUser(@RestPath Long id) {
        return userService.findByIdAsync(id);
    }
    
    @POST
    @Blocking  // Force blocking thread
    public User createUser(User user) {
        return userService.save(user);
    }
}
</code></pre>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@RestPath</code></td>
<td>Reactive path param</td>
</tr>
<tr>
<td><code>@RestQuery</code></td>
<td>Reactive query param</td>
</tr>
<tr>
<td><code>@RestHeader</code></td>
<td>Reactive header param</td>
</tr>
<tr>
<td><code>@Blocking</code></td>
<td>Execute on worker thread</td>
</tr>
<tr>
<td><code>@NonBlocking</code></td>
<td>Execute on event loop</td>
</tr>
</tbody></table>
<hr>
<h3 id="4-persistence-jpahibernate">🔹 4. Persistence (JPA/Hibernate)</h3>
<p><strong>Purpose:</strong> Map Java objects to database tables.</p>
<pre><code class="language-java">
@Entity
@Table(name = &quot;users&quot;)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @OneToMany(mappedBy = &quot;user&quot;, cascade = CascadeType.ALL)
    private List&lt;Order&gt; orders;
    
    @ManyToOne
    @JoinColumn(name = &quot;company_id&quot;)
    private Company company;
    
    @Version
    private Long version;  // Optimistic locking
}
</code></pre>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Entity</code></td>
<td>JPA entity</td>
</tr>
<tr>
<td><code>@Table</code></td>
<td>Table configuration</td>
</tr>
<tr>
<td><code>@Id</code></td>
<td>Primary key</td>
</tr>
<tr>
<td><code>@GeneratedValue</code></td>
<td>Auto-generate ID</td>
</tr>
<tr>
<td><code>@Column</code></td>
<td>Column properties</td>
</tr>
<tr>
<td><code>@OneToOne</code></td>
<td>1:1 relationship</td>
</tr>
<tr>
<td><code>@OneToMany</code></td>
<td>1:N relationship</td>
</tr>
<tr>
<td><code>@ManyToOne</code></td>
<td>N:1 relationship</td>
</tr>
<tr>
<td><code>@ManyToMany</code></td>
<td>N:N relationship</td>
</tr>
<tr>
<td><code>@JoinColumn</code></td>
<td>Foreign key column</td>
</tr>
<tr>
<td><code>@Version</code></td>
<td>Optimistic locking</td>
</tr>
</tbody></table>
<hr>
<h3 id="5-panache-simplified-persistence">🔹 5. Panache (Simplified Persistence)</h3>
<p><strong>Purpose:</strong> Simplify JPA with active record pattern.</p>
<pre><code class="language-java">
@Entity
public class User extends PanacheEntity {
    public String name;
    public String email;
    
    public static User findByEmail(String email) {
        return find(&quot;email&quot;, email).firstResult();
    }
}

// Usage
User.listAll();
User.findById(1L);
user.persist();
</code></pre>
<hr>
<h3 id="6-transactions">🔹 6. Transactions</h3>
<p><strong>Purpose:</strong> Manage database transactions.</p>
<pre><code class="language-java">
@ApplicationScoped
public class OrderService {

    @Transactional
    public void createOrder(Order order) {
        order.persist();
    }
    
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void audit(String action) {
        auditLog.persist();
    }
}
</code></pre>
<table>
<thead><tr>
<th>TxType</th>
<th>Behavior</th>
</tr></thead><tbody>
<tr>
<td><code>REQUIRED</code></td>
<td>Join existing or create new</td>
</tr>
<tr>
<td><code>REQUIRES_NEW</code></td>
<td>Always create new</td>
</tr>
<tr>
<td><code>MANDATORY</code></td>
<td>Must have existing</td>
</tr>
<tr>
<td><code>SUPPORTS</code></td>
<td>Join if exists</td>
</tr>
<tr>
<td><code>NOT_SUPPORTED</code></td>
<td>Suspend if exists</td>
</tr>
<tr>
<td><code>NEVER</code></td>
<td>Throw if exists</td>
</tr>
</tbody></table>
<hr>
<h3 id="7-configuration">🔹 7. Configuration</h3>
<p><strong>Purpose:</strong> Inject configuration values.</p>
<pre><code class="language-java">
@ApplicationScoped
public class AppConfig {

    @ConfigProperty(name = &quot;app.name&quot;)
    String appName;
    
    @ConfigProperty(name = &quot;app.timeout&quot;, defaultValue = &quot;30&quot;)
    int timeout;
}

// Type-safe config
@ConfigMapping(prefix = &quot;database&quot;)
public interface DatabaseConfig {
    String host();
    int port();
    String username();
}
</code></pre>
<hr>
<h3 id="8-profiles-build">🔹 8. Profiles &amp; Build</h3>
<p><strong>Purpose:</strong> Environment-specific configuration.</p>
<pre><code class="language-java">
@ApplicationScoped
@IfBuildProfile(&quot;dev&quot;)
public class DevDataLoader {
    // Only active in dev profile
}

@ApplicationScoped
@UnlessBuildProfile(&quot;prod&quot;)
public class TestHelper {
    // Active in all except prod
}
</code></pre>
<hr>
<h3 id="9-security">🔹 9. Security</h3>
<p><strong>Purpose:</strong> Secure endpoints and control access.</p>
<pre><code class="language-java">
@Path(&quot;/admin&quot;)
public class AdminResource {

    @GET
    @RolesAllowed(&quot;admin&quot;)
    public List&lt;User&gt; getAllUsers() {
        return User.listAll();
    }
    
    @POST
    @RolesAllowed({&quot;admin&quot;, &quot;manager&quot;})
    public void createUser(User user) {
        user.persist();
    }
    
    @GET
    @Path(&quot;/public&quot;)
    @PermitAll
    public String publicEndpoint() {
        return &quot;Open to all&quot;;
    }
}
</code></pre>
<hr>
<h3 id="10-scheduling">🔹 10. Scheduling</h3>
<p><strong>Purpose:</strong> Execute tasks on a schedule.</p>
<pre><code class="language-java">
@ApplicationScoped
public class ScheduledTasks {

    @Scheduled(every = &quot;10s&quot;)
    void everyTenSeconds() {
        System.out.println(&quot;Running every 10 seconds&quot;);
    }
    
    @Scheduled(cron = &quot;0 0 * * * ?&quot;)  // Every hour
    void hourly() {
        System.out.println(&quot;Running hourly&quot;);
    }
    
    @Scheduled(delay = 5, delayUnit = TimeUnit.SECONDS)
    void delayed() {
        System.out.println(&quot;Running 5s after previous execution&quot;);
    }
}
</code></pre>
<hr>
<h3 id="11-messaging-kafkaamqp">🔹 11. Messaging (Kafka/AMQP)</h3>
<p><strong>Purpose:</strong> Build event-driven microservices.</p>
<pre><code class="language-java">
@ApplicationScoped
public class OrderProcessor {

    @Incoming(&quot;orders&quot;)
    @Outgoing(&quot;processed-orders&quot;)
    public Order process(Order order) {
        // Process and forward
        return processOrder(order);
    }
    
    @Incoming(&quot;notifications&quot;)
    @Acknowledgment(Acknowledgment.Strategy.POST_PROCESSING)
    public CompletionStage&lt;Void&gt; notify(String message) {
        return sendNotification(message);
    }
}
</code></pre>
<hr>
<h3 id="12-fault-tolerance">🔹 12. Fault Tolerance</h3>
<p><strong>Purpose:</strong> Build resilient systems.</p>
<pre><code class="language-java">
@ApplicationScoped
public class ExternalService {

    @Retry(maxRetries = 3, delay = 1000)
    @Timeout(2000)
    @Fallback(fallbackMethod = &quot;fallbackMethod&quot;)
    public String callExternalAPI() {
        return restClient.getData();
    }
    
    public String fallbackMethod() {
        return &quot;Fallback response&quot;;
    }
    
    @CircuitBreaker(
        requestVolumeThreshold = 4,
        failureRatio = 0.75,
        delay = 5000
    )
    public String unreliableService() {
        return externalCall();
    }
}
</code></pre>
<hr>
<h3 id="13-validation">🔹 13. Validation</h3>
<p><strong>Purpose:</strong> Validate input data.</p>
<pre><code class="language-java">
@Entity
public class User extends PanacheEntity {

    @NotBlank(message = &quot;Name is required&quot;)
    @Size(min = 2, max = 50)
    public String name;
    
    @NotNull
    @Email
    public String email;
    
    @Min(18)
    @Max(120)
    public int age;
    
    @Pattern(regexp = &quot;^\\+?[0-9]{10,15}$&quot;)
    public String phone;
}

@Path(&quot;/users&quot;)
public class UserResource {
    
    @POST
    public Response create(@Valid User user) {
        user.persist();
        return Response.ok(user).build();
    }
}
</code></pre>
<hr>
<h3 id="14-rest-client">🔹 14. REST Client</h3>
<p><strong>Purpose:</strong> Call external REST APIs.</p>
<pre><code class="language-java">
@RegisterRestClient(configKey = &quot;github-api&quot;)
@Path(&quot;/users&quot;)
public interface GitHubService {

    @GET
    @Path(&quot;/{username}&quot;)
    User getUser(@PathParam(&quot;username&quot;) String username);
    
    @GET
    @Path(&quot;/{username}/repos&quot;)
    List&lt;Repository&gt; getRepositories(@PathParam(&quot;username&quot;) String username);
}

// Usage
@ApplicationScoped
public class MyService {

    @Inject
    @RestClient
    GitHubService gitHubService;
    
    public User fetchUser(String username) {
        return gitHubService.getUser(username);
    }
}
</code></pre>
<hr>
<h3 id="15-health-checks">🔹 15. Health Checks</h3>
<p><strong>Purpose:</strong> Monitor application health.</p>
<pre><code class="language-java">
@Liveness
@ApplicationScoped
public class LivenessCheck implements HealthCheck {
    
    @Override
    public HealthCheckResponse call() {
        return HealthCheckResponse.up(&quot;Application is live&quot;);
    }
}

@Readiness
@ApplicationScoped
public class ReadinessCheck implements HealthCheck {
    
    @Inject
    DataSource dataSource;
    
    @Override
    public HealthCheckResponse call() {
        try {
            dataSource.getConnection().close();
            return HealthCheckResponse.up(&quot;Database is ready&quot;);
        } catch (Exception e) {
            return HealthCheckResponse.down(&quot;Database is down&quot;);
        }
    }
}
</code></pre>
<hr>
<h3 id="16-metrics">🔹 16. Metrics</h3>
<p><strong>Purpose:</strong> Monitor application performance.</p>
<pre><code class="language-java">
@ApplicationScoped
public class OrderService {

    @Timed(name = &quot;orderProcessingTime&quot;)
    @Counted(name = &quot;totalOrders&quot;)
    public void processOrder(Order order) {
        // Process order
    }
    
    @Gauge(name = &quot;activeOrders&quot;, unit = MetricUnits.NONE)
    public long getActiveOrders() {
        return Order.count(&quot;status&quot;, &quot;ACTIVE&quot;);
    }
}
</code></pre>
<hr>
<h3 id="17-openapi-swagger">🔹 17. OpenAPI / Swagger</h3>
<p><strong>Purpose:</strong> Generate API documentation.</p>
<pre><code class="language-java">
@Path(&quot;/api/products&quot;)
@Tag(name = &quot;Products&quot;, description = &quot;Product management endpoints&quot;)
public class ProductResource {

    @GET
    @Operation(summary = &quot;Get all products&quot;, description = &quot;Retrieve a list of all products&quot;)
    @APIResponse(responseCode = &quot;200&quot;, description = &quot;Success&quot;)
    @APIResponse(responseCode = &quot;500&quot;, description = &quot;Server error&quot;)
    public List&lt;Product&gt; getAll() {
        return Product.listAll();
    }
    
    @POST
    @Operation(summary = &quot;Create product&quot;)
    public Response create(
        @RequestBody(description = &quot;Product to create&quot;, required = true)
        @Valid Product product
    ) {
        product.persist();
        return Response.status(201).entity(product).build();
    }
}
</code></pre>
<hr>
<h3 id="18-native-build-time">🔹 18. Native / Build-Time</h3>
<p><strong>Purpose:</strong> Optimize for GraalVM native compilation.</p>
<pre><code class="language-java">
@RegisterForReflection
public class ReflectionDTO {
    // Class accessible via reflection in native mode
}

@RegisterForReflection(targets = {SomeClass.class, AnotherClass.class})
public class MyConfig {
}
</code></pre>
<hr>
<h3 id="19-cache">🔹 19. Cache</h3>
<p><strong>Purpose:</strong> Cache method results.</p>
<pre><code class="language-java">
@ApplicationScoped
public class ProductService {

    @CacheResult(cacheName = &quot;product-cache&quot;)
    public Product findById(@CacheKey Long id) {
        return Product.findById(id);
    }
    
    @CacheInvalidate(cacheName = &quot;product-cache&quot;)
    public void update(@CacheKey Long id, Product product) {
        // Update logic
    }
    
    @CacheInvalidateAll(cacheName = &quot;product-cache&quot;)
    public void clearCache() {
        // Cache cleared automatically
    }
}
</code></pre>
<hr>
<h3 id="20-testing">🔹 20. Testing</h3>
<p><strong>Purpose:</strong> Test Quarkus applications.</p>
<pre><code class="language-java">
@QuarkusTest
@TestProfile(DevTestProfile.class)
public class UserResourceTest {

    @Inject
    UserService userService;
    
    @InjectMock
    ExternalService externalService;
    
    @Test
    @TestTransaction
    public void testCreateUser() {
        User user = new User();
        user.name = &quot;John&quot;;
        userService.create(user);
        
        assertNotNull(user.id);
    }
    
    @Test
    public void testGetUser() {
        given()
            .when().get(&quot;/api/users/1&quot;)
            .then()
            .statusCode(200);
    }
}
</code></pre>
<hr>
<h2 id="mental-model-think-in-layers">🧩 Mental Model: Think in Layers</h2>
<pre><code class="language-">
┌─────────────────────────────────────┐
│   API Layer                         │
│   → REST annotations                │
│   → Security                        │
│   → Validation                      │
└─────────────────────────────────────┘
                ↓
┌─────────────────────────────────────┐
│   Service Layer                     │
│   → CDI (DI)                       │
│   → Fault Tolerance                │
│   → Caching                        │
└─────────────────────────────────────┘
                ↓
┌─────────────────────────────────────┐
│   Data Layer                        │
│   → JPA / Panache                  │
│   → Transactions                   │
└─────────────────────────────────────┘
                ↓
┌─────────────────────────────────────┐
│   Infrastructure Layer              │
│   → Configuration                  │
│   → Messaging                      │
│   → Scheduling                     │
│   → Health &amp; Metrics               │
└─────────────────────────────────────┘
                ↓
┌─────────────────────────────────────┐
│   Build &amp; Runtime                   │
│   → Native optimization            │
│   → Profile management             │
└─────────────────────────────────────┘
</code></pre>
<hr>
<h2 id="quick-decision-tree">🎯 Quick Decision Tree</h2>
<p><strong>Need to...</strong></p>
<ul>
<li>✅ <strong>Expose API?</strong> → <code>@Path</code>, <code>@GET/POST/etc</code></li>
<li>✅ <strong>Inject dependency?</strong> → <code>@Inject</code>, <code>@ApplicationScoped</code></li>
<li>✅ <strong>Save to DB?</strong> → <code>@Entity</code>, <code>@Transactional</code></li>
<li>✅ <strong>Call external API?</strong> → <code>@RegisterRestClient</code>, <code>@RestClient</code></li>
<li>✅ <strong>Validate input?</strong> → <code>@Valid</code>, <code>@NotNull</code>, <code>@Size</code></li>
<li>✅ <strong>Secure endpoint?</strong> → <code>@RolesAllowed</code>, <code>@PermitAll</code></li>
<li>✅ <strong>Handle failures?</strong> → <code>@Retry</code>, <code>@Fallback</code>, <code>@CircuitBreaker</code></li>
<li>✅ <strong>Process messages?</strong> → <code>@Incoming</code>, <code>@Outgoing</code></li>
<li>✅ <strong>Schedule tasks?</strong> → <code>@Scheduled</code></li>
<li>✅ <strong>Read config?</strong> → <code>@ConfigProperty</code></li>
<li>✅ <strong>Test?</strong> → <code>@QuarkusTest</code>, <code>@InjectMock</code></li>
</ul>
<hr>
<h2 id="quarkus-vs-spring-boot-annotations">📊 Quarkus vs Spring Boot Annotations</h2>
<table>
<thead><tr>
<th>Quarkus</th>
<th>Spring Boot</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@ApplicationScoped</code></td>
<td><code>@Component</code></td>
<td>Bean scope</td>
</tr>
<tr>
<td><code>@Inject</code></td>
<td><code>@Autowired</code></td>
<td>Dependency injection</td>
</tr>
<tr>
<td><code>@Path</code></td>
<td><code>@RequestMapping</code></td>
<td>REST endpoint</td>
</tr>
<tr>
<td><code>@GET</code></td>
<td><code>@GetMapping</code></td>
<td>HTTP GET</td>
</tr>
<tr>
<td><code>@ConfigProperty</code></td>
<td><code>@Value</code></td>
<td>Config injection</td>
</tr>
<tr>
<td><code>@Transactional</code></td>
<td><code>@Transactional</code></td>
<td>Transaction</td>
</tr>
<tr>
<td><code>@Scheduled</code></td>
<td><code>@Scheduled</code></td>
<td>Task scheduling</td>
</tr>
<tr>
<td><code>@RegisterRestClient</code></td>
<td><code>@FeignClient</code></td>
<td>REST client</td>
</tr>
</tbody></table>
<hr>
<h2 id="pro-tips">🚀 Pro Tips</h2>
<ul>
<li><strong>Start Simple</strong>: Begin with <code>@Path</code>, <code>@GET</code>, <code>@Inject</code>, <code>@Entity</code></li>
<li><strong>Add Resilience</strong>: Use <code>@Retry</code>, <code>@Timeout</code> for production</li>
<li><strong>Validate Everything</strong>: Always use <code>@Valid</code> on inputs</li>
<li><strong>Think Reactive</strong>: Use <code>Uni&lt;T&gt;</code> for async operations</li>
<li><strong>Cache Wisely</strong>: <code>@CacheResult</code> for expensive operations</li>
<li><strong>Test Thoroughly</strong>: <code>@QuarkusTest</code> + <code>@InjectMock</code></li>
<li><strong>Monitor</strong>: Add <code>@Timed</code>, <code>@Counted</code> for metrics</li>
<li><strong>Document</strong>: Use OpenAPI annotations</li>
<li><strong>Secure</strong>: Never forget <code>@RolesAllowed</code></li>
<li><strong>Native-Ready</strong>: Use <code>@RegisterForReflection</code> when needed</li>
</ul>
<hr>
<h2 id="essential-extension-annotation-mapping">📦 Essential Extension → Annotation Mapping</h2>
<table>
<thead><tr>
<th>Extension</th>
<th>Key Annotations</th>
</tr></thead><tbody>
<tr>
<td><code>quarkus-rest</code></td>
<td><code>@Path</code>, <code>@GET</code>, <code>@POST</code></td>
</tr>
<tr>
<td><code>quarkus-hibernate-orm-panache</code></td>
<td><code>@Entity</code>, <code>PanacheEntity</code></td>
</tr>
<tr>
<td><code>quarkus-rest-client</code></td>
<td><code>@RegisterRestClient</code></td>
</tr>
<tr>
<td><code>quarkus-smallrye-fault-tolerance</code></td>
<td><code>@Retry</code>, <code>@Fallback</code></td>
</tr>
<tr>
<td><code>quarkus-scheduler</code></td>
<td><code>@Scheduled</code></td>
</tr>
<tr>
<td><code>quarkus-smallrye-health</code></td>
<td><code>@Liveness</code>, <code>@Readiness</code></td>
</tr>
<tr>
<td><code>quarkus-smallrye-metrics</code></td>
<td><code>@Timed</code>, <code>@Counted</code></td>
</tr>
<tr>
<td><code>quarkus-security</code></td>
<td><code>@RolesAllowed</code></td>
</tr>
<tr>
<td><code>quarkus-smallrye-reactive-messaging</code></td>
<td><code>@Incoming</code>, <code>@Outgoing</code></td>
</tr>
<tr>
<td><code>quarkus-cache</code></td>
<td><code>@CacheResult</code></td>
</tr>
</tbody></table>
<hr>
<h2 id="learning-path">🎓 Learning Path</h2>
<ul>
<li><strong>Week 1</strong>: Core DI + REST (<code>@Inject</code>, <code>@Path</code>, <code>@GET</code>)</li>
<li><strong>Week 2</strong>: Persistence (<code>@Entity</code>, <code>@Transactional</code>, Panache)</li>
<li><strong>Week 3</strong>: Configuration + Security (<code>@ConfigProperty</code>, <code>@RolesAllowed</code>)</li>
<li><strong>Week 4</strong>: Fault Tolerance + Messaging (<code>@Retry</code>, <code>@Incoming</code>)</li>
<li><strong>Week 5</strong>: Advanced (Reactive, Native, Metrics)</li>
</ul>
<hr>
<p><strong>Remember:</strong> Quarkus annotations are your framework&#x27;s API. Master them, and you master Quarkus! 🚀</p>
<hr>
<p><em>For latest updates, check: https://quarkus.io/guides/</em></p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = quarkusAnnotationsCompleteGuideContentData;
}
