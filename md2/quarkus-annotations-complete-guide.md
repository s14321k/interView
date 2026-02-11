# 🚀 Complete Quarkus Annotations Guide

> **A comprehensive, beginner-friendly reference to Quarkus annotations**

---

## 🧠 Big Picture (1-Minute Mental Model)

**Quarkus = Modern Java + Annotations for Framework Magic**

Annotations tell Quarkus how to:
- 🌐 Expose REST APIs
- 💉 Manage dependencies (DI)
- 💾 Handle database operations
- ⚙️ Configure runtime behavior
- 🔒 Secure endpoints
- 🚄 Optimize for native compilation
- 📨 Process messages
- 🛡️ Build resilient systems

---

## 🌳 Complete Quarkus Annotations Tree

```
Quarkus Annotations
│
├── Core & CDI (Dependency Injection)
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
├── REST / Web (JAX-RS & RESTEasy)
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
├── Profiles & Build
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
│   ├── @Scheduled(cron = "...")
│   ├── @Scheduled(every = "10s")
│   └── @Scheduled(delayed = "5s")
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
│   └── Event<T>.fire()
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
    ├── Uni<T>
    ├── Multi<T>
    └── @ReactiveTransactional
```

---

## 📚 Detailed Breakdown

### 🔹 1. Core & CDI (Dependency Injection)

**Purpose:** Manage object lifecycle and dependencies automatically.

```java
@ApplicationScoped
public class UserService {

    @Inject
    UserRepository repo;
    
    @Inject
    @Named("special")
    SpecialProcessor processor;
    
    @Produces
    @Named("defaultConfig")
    public Config createConfig() {
        return new Config();
    }
}
```

| Annotation | Scope | Lifecycle |
|-----------|-------|-----------|
| `@ApplicationScoped` | Application-wide | Single instance for entire app |
| `@Singleton` | Application-wide | Eager singleton (thread-safe) |
| `@Dependent` | Caller | New instance per injection |
| `@RequestScoped` | HTTP Request | One per request |
| `@SessionScoped` | HTTP Session | One per session |
| `@Inject` | N/A | Inject dependency |
| `@Produces` | N/A | Factory method for beans |
| `@Named` | N/A | Bean identifier |
| `@Qualifier` | N/A | Custom qualifier |
| `@Alternative` | N/A | Alternative implementation |

---

### 🔹 2. REST / Web (JAX-RS)

**Purpose:** Expose HTTP endpoints and handle web requests.

```java
@Path("/api/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

    @GET
    @Path("/{id}")
    public User getUser(
        @PathParam("id") Long id,
        @QueryParam("includeOrders") @DefaultValue("false") boolean includeOrders,
        @HeaderParam("Authorization") String authToken
    ) {
        return userService.findById(id, includeOrders);
    }
    
    @POST
    public Response createUser(@Valid User user) {
        return Response.status(201).entity(user).build();
    }
    
    @DELETE
    @Path("/{id}")
    public void deleteUser(@PathParam("id") Long id) {
        userService.delete(id);
    }
}
```

| Annotation | Purpose |
|-----------|---------|
| `@Path` | URL path mapping |
| `@GET/@POST/@PUT/@DELETE/@PATCH` | HTTP methods |
| `@Produces` | Response content type |
| `@Consumes` | Request content type |
| `@PathParam` | Extract from URL path |
| `@QueryParam` | Extract from query string |
| `@HeaderParam` | Extract from HTTP headers |
| `@FormParam` | Extract from form data |
| `@CookieParam` | Extract from cookies |
| `@BeanParam` | Group multiple params |
| `@Context` | Inject request context |
| `@DefaultValue` | Default parameter value |

---

### 🔹 3. RESTEasy Reactive (Non-Blocking)

**Purpose:** High-performance, non-blocking REST endpoints.

```java
@Path("/reactive")
public class ReactiveResource {

    @GET
    @Path("/users/{id}")
    public Uni<User> getUser(@RestPath Long id) {
        return userService.findByIdAsync(id);
    }
    
    @POST
    @Blocking  // Force blocking thread
    public User createUser(User user) {
        return userService.save(user);
    }
}
```

| Annotation | Purpose |
|-----------|---------|
| `@RestPath` | Reactive path param |
| `@RestQuery` | Reactive query param |
| `@RestHeader` | Reactive header param |
| `@Blocking` | Execute on worker thread |
| `@NonBlocking` | Execute on event loop |

---

### 🔹 4. Persistence (JPA/Hibernate)

**Purpose:** Map Java objects to database tables.

```java
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;
    
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
    
    @Version
    private Long version;  // Optimistic locking
}
```

| Annotation | Purpose |
|-----------|---------|
| `@Entity` | JPA entity |
| `@Table` | Table configuration |
| `@Id` | Primary key |
| `@GeneratedValue` | Auto-generate ID |
| `@Column` | Column properties |
| `@OneToOne` | 1:1 relationship |
| `@OneToMany` | 1:N relationship |
| `@ManyToOne` | N:1 relationship |
| `@ManyToMany` | N:N relationship |
| `@JoinColumn` | Foreign key column |
| `@Version` | Optimistic locking |

---

### 🔹 5. Panache (Simplified Persistence)

**Purpose:** Simplify JPA with active record pattern.

```java
@Entity
public class User extends PanacheEntity {
    public String name;
    public String email;
    
    public static User findByEmail(String email) {
        return find("email", email).firstResult();
    }
}

// Usage
User.listAll();
User.findById(1L);
user.persist();
```

---

### 🔹 6. Transactions

**Purpose:** Manage database transactions.

```java
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
```

| TxType | Behavior |
|--------|----------|
| `REQUIRED` | Join existing or create new |
| `REQUIRES_NEW` | Always create new |
| `MANDATORY` | Must have existing |
| `SUPPORTS` | Join if exists |
| `NOT_SUPPORTED` | Suspend if exists |
| `NEVER` | Throw if exists |

---

### 🔹 7. Configuration

**Purpose:** Inject configuration values.

```java
@ApplicationScoped
public class AppConfig {

    @ConfigProperty(name = "app.name")
    String appName;
    
    @ConfigProperty(name = "app.timeout", defaultValue = "30")
    int timeout;
}

// Type-safe config
@ConfigMapping(prefix = "database")
public interface DatabaseConfig {
    String host();
    int port();
    String username();
}
```

---

### 🔹 8. Profiles & Build

**Purpose:** Environment-specific configuration.

```java
@ApplicationScoped
@IfBuildProfile("dev")
public class DevDataLoader {
    // Only active in dev profile
}

@ApplicationScoped
@UnlessBuildProfile("prod")
public class TestHelper {
    // Active in all except prod
}
```

---

### 🔹 9. Security

**Purpose:** Secure endpoints and control access.

```java
@Path("/admin")
public class AdminResource {

    @GET
    @RolesAllowed("admin")
    public List<User> getAllUsers() {
        return User.listAll();
    }
    
    @POST
    @RolesAllowed({"admin", "manager"})
    public void createUser(User user) {
        user.persist();
    }
    
    @GET
    @Path("/public")
    @PermitAll
    public String publicEndpoint() {
        return "Open to all";
    }
}
```

---

### 🔹 10. Scheduling

**Purpose:** Execute tasks on a schedule.

```java
@ApplicationScoped
public class ScheduledTasks {

    @Scheduled(every = "10s")
    void everyTenSeconds() {
        System.out.println("Running every 10 seconds");
    }
    
    @Scheduled(cron = "0 0 * * * ?")  // Every hour
    void hourly() {
        System.out.println("Running hourly");
    }
    
    @Scheduled(delay = 5, delayUnit = TimeUnit.SECONDS)
    void delayed() {
        System.out.println("Running 5s after previous execution");
    }
}
```

---

### 🔹 11. Messaging (Kafka/AMQP)

**Purpose:** Build event-driven microservices.

```java
@ApplicationScoped
public class OrderProcessor {

    @Incoming("orders")
    @Outgoing("processed-orders")
    public Order process(Order order) {
        // Process and forward
        return processOrder(order);
    }
    
    @Incoming("notifications")
    @Acknowledgment(Acknowledgment.Strategy.POST_PROCESSING)
    public CompletionStage<Void> notify(String message) {
        return sendNotification(message);
    }
}
```

---

### 🔹 12. Fault Tolerance

**Purpose:** Build resilient systems.

```java
@ApplicationScoped
public class ExternalService {

    @Retry(maxRetries = 3, delay = 1000)
    @Timeout(2000)
    @Fallback(fallbackMethod = "fallbackMethod")
    public String callExternalAPI() {
        return restClient.getData();
    }
    
    public String fallbackMethod() {
        return "Fallback response";
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
```

---

### 🔹 13. Validation

**Purpose:** Validate input data.

```java
@Entity
public class User extends PanacheEntity {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50)
    public String name;
    
    @NotNull
    @Email
    public String email;
    
    @Min(18)
    @Max(120)
    public int age;
    
    @Pattern(regexp = "^\\+?[0-9]{10,15}$")
    public String phone;
}

@Path("/users")
public class UserResource {
    
    @POST
    public Response create(@Valid User user) {
        user.persist();
        return Response.ok(user).build();
    }
}
```

---

### 🔹 14. REST Client

**Purpose:** Call external REST APIs.

```java
@RegisterRestClient(configKey = "github-api")
@Path("/users")
public interface GitHubService {

    @GET
    @Path("/{username}")
    User getUser(@PathParam("username") String username);
    
    @GET
    @Path("/{username}/repos")
    List<Repository> getRepositories(@PathParam("username") String username);
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
```

---

### 🔹 15. Health Checks

**Purpose:** Monitor application health.

```java
@Liveness
@ApplicationScoped
public class LivenessCheck implements HealthCheck {
    
    @Override
    public HealthCheckResponse call() {
        return HealthCheckResponse.up("Application is live");
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
            return HealthCheckResponse.up("Database is ready");
        } catch (Exception e) {
            return HealthCheckResponse.down("Database is down");
        }
    }
}
```

---

### 🔹 16. Metrics

**Purpose:** Monitor application performance.

```java
@ApplicationScoped
public class OrderService {

    @Timed(name = "orderProcessingTime")
    @Counted(name = "totalOrders")
    public void processOrder(Order order) {
        // Process order
    }
    
    @Gauge(name = "activeOrders", unit = MetricUnits.NONE)
    public long getActiveOrders() {
        return Order.count("status", "ACTIVE");
    }
}
```

---

### 🔹 17. OpenAPI / Swagger

**Purpose:** Generate API documentation.

```java
@Path("/api/products")
@Tag(name = "Products", description = "Product management endpoints")
public class ProductResource {

    @GET
    @Operation(summary = "Get all products", description = "Retrieve a list of all products")
    @APIResponse(responseCode = "200", description = "Success")
    @APIResponse(responseCode = "500", description = "Server error")
    public List<Product> getAll() {
        return Product.listAll();
    }
    
    @POST
    @Operation(summary = "Create product")
    public Response create(
        @RequestBody(description = "Product to create", required = true)
        @Valid Product product
    ) {
        product.persist();
        return Response.status(201).entity(product).build();
    }
}
```

---

### 🔹 18. Native / Build-Time

**Purpose:** Optimize for GraalVM native compilation.

```java
@RegisterForReflection
public class ReflectionDTO {
    // Class accessible via reflection in native mode
}

@RegisterForReflection(targets = {SomeClass.class, AnotherClass.class})
public class MyConfig {
}
```

---

### 🔹 19. Cache

**Purpose:** Cache method results.

```java
@ApplicationScoped
public class ProductService {

    @CacheResult(cacheName = "product-cache")
    public Product findById(@CacheKey Long id) {
        return Product.findById(id);
    }
    
    @CacheInvalidate(cacheName = "product-cache")
    public void update(@CacheKey Long id, Product product) {
        // Update logic
    }
    
    @CacheInvalidateAll(cacheName = "product-cache")
    public void clearCache() {
        // Cache cleared automatically
    }
}
```

---

### 🔹 20. Testing

**Purpose:** Test Quarkus applications.

```java
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
        user.name = "John";
        userService.create(user);
        
        assertNotNull(user.id);
    }
    
    @Test
    public void testGetUser() {
        given()
            .when().get("/api/users/1")
            .then()
            .statusCode(200);
    }
}
```

---

## 🧩 Mental Model: Think in Layers

```
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
│   → Health & Metrics               │
└─────────────────────────────────────┘
                ↓
┌─────────────────────────────────────┐
│   Build & Runtime                   │
│   → Native optimization            │
│   → Profile management             │
└─────────────────────────────────────┘
```

---

## 🎯 Quick Decision Tree

**Need to...**
- ✅ **Expose API?** → `@Path`, `@GET/POST/etc`
- ✅ **Inject dependency?** → `@Inject`, `@ApplicationScoped`
- ✅ **Save to DB?** → `@Entity`, `@Transactional`
- ✅ **Call external API?** → `@RegisterRestClient`, `@RestClient`
- ✅ **Validate input?** → `@Valid`, `@NotNull`, `@Size`
- ✅ **Secure endpoint?** → `@RolesAllowed`, `@PermitAll`
- ✅ **Handle failures?** → `@Retry`, `@Fallback`, `@CircuitBreaker`
- ✅ **Process messages?** → `@Incoming`, `@Outgoing`
- ✅ **Schedule tasks?** → `@Scheduled`
- ✅ **Read config?** → `@ConfigProperty`
- ✅ **Test?** → `@QuarkusTest`, `@InjectMock`

---

## 📊 Quarkus vs Spring Boot Annotations

| Quarkus | Spring Boot | Purpose |
|---------|-------------|---------|
| `@ApplicationScoped` | `@Component` | Bean scope |
| `@Inject` | `@Autowired` | Dependency injection |
| `@Path` | `@RequestMapping` | REST endpoint |
| `@GET` | `@GetMapping` | HTTP GET |
| `@ConfigProperty` | `@Value` | Config injection |
| `@Transactional` | `@Transactional` | Transaction |
| `@Scheduled` | `@Scheduled` | Task scheduling |
| `@RegisterRestClient` | `@FeignClient` | REST client |

---

## 🚀 Pro Tips

1. **Start Simple**: Begin with `@Path`, `@GET`, `@Inject`, `@Entity`
2. **Add Resilience**: Use `@Retry`, `@Timeout` for production
3. **Validate Everything**: Always use `@Valid` on inputs
4. **Think Reactive**: Use `Uni<T>` for async operations
5. **Cache Wisely**: `@CacheResult` for expensive operations
6. **Test Thoroughly**: `@QuarkusTest` + `@InjectMock`
7. **Monitor**: Add `@Timed`, `@Counted` for metrics
8. **Document**: Use OpenAPI annotations
9. **Secure**: Never forget `@RolesAllowed`
10. **Native-Ready**: Use `@RegisterForReflection` when needed

---

## 📦 Essential Extension → Annotation Mapping

| Extension | Key Annotations |
|-----------|----------------|
| `quarkus-rest` | `@Path`, `@GET`, `@POST` |
| `quarkus-hibernate-orm-panache` | `@Entity`, `PanacheEntity` |
| `quarkus-rest-client` | `@RegisterRestClient` |
| `quarkus-smallrye-fault-tolerance` | `@Retry`, `@Fallback` |
| `quarkus-scheduler` | `@Scheduled` |
| `quarkus-smallrye-health` | `@Liveness`, `@Readiness` |
| `quarkus-smallrye-metrics` | `@Timed`, `@Counted` |
| `quarkus-security` | `@RolesAllowed` |
| `quarkus-smallrye-reactive-messaging` | `@Incoming`, `@Outgoing` |
| `quarkus-cache` | `@CacheResult` |

---

## 🎓 Learning Path

1. **Week 1**: Core DI + REST (`@Inject`, `@Path`, `@GET`)
2. **Week 2**: Persistence (`@Entity`, `@Transactional`, Panache)
3. **Week 3**: Configuration + Security (`@ConfigProperty`, `@RolesAllowed`)
4. **Week 4**: Fault Tolerance + Messaging (`@Retry`, `@Incoming`)
5. **Week 5**: Advanced (Reactive, Native, Metrics)

---

**Remember:** Quarkus annotations are your framework's API. Master them, and you master Quarkus! 🚀

---

*For latest updates, check: https://quarkus.io/guides/*
