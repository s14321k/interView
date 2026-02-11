# Spring Boot Annotations - Complete Reference Guide

A comprehensive guide covering all Spring Boot annotations with detailed explanations and examples.

---

## 📦 Core Spring Boot Annotations

| Annotation | Description |
|------------|-------------|
| `@SpringBootApplication` | Main entry point - combines `@Configuration`, `@EnableAutoConfiguration`, `@ComponentScan` |
| `@Configuration` | Marks a class as a source of bean definitions |
| `@EnableAutoConfiguration` | Enables Spring Boot's auto-configuration based on classpath dependencies |
| `@ComponentScan` | Configures component scanning directives - tells Spring where to look for components |

---

## 🌱 What is a Spring Bean?

A **Spring Bean** is an object that is instantiated, assembled, and otherwise managed by a Spring IoC container. These are the fundamental building blocks of any Spring application. Instead of creating objects yourself (e.g., `new MyService()`), you delegate this responsibility to the Spring framework.

---

## 🧩 Dependency Injection (DI)

**Dependency Injection** is a design pattern where an object receives other objects that it depends on (its dependencies) rather than creating them itself.

### Without DI:
```java
public class MyService {
    private final MyRepository repository = new MyRepository(); // Hard-coded dependency
}
```

### With DI:
```java
@Service
public class MyService {
    private final MyRepository repository;

    public MyService(MyRepository repository) {
        this.repository = repository;
    }
}
```

### Benefits of DI:
- **Loose Coupling:** Components are not tightly bound to each other
- **Easier Testing:** You can easily inject mock objects in tests
- **Flexibility & Maintainability:** Easy to swap implementations of a dependency

---

## 🏷️ Stereotype Annotations

Stereotype annotations mark classes as Spring components and are specializations of the generic `@Component` annotation.

| Annotation | Purpose |
|------------|---------|
| `@Component` | Generic stereotype for any Spring-managed component |
| `@Service` | Service layer classes (business logic) |
| `@Repository` | Persistence layer classes (data access) - enables exception translation |
| `@Controller` | Spring MVC controllers |
| `@RestController` | RESTful controllers in Spring MVC (`@Controller` + `@ResponseBody`) |
| `@Configuration` | Classes that define other beans |

### Example:
```java
@Service
public class UserServiceImpl implements UserService {
    // Business logic
}
```

---

## 💉 Types of Dependency Injection

### 1. Constructor Injection (Recommended ✅)

**Pros:**
- Ensures required dependencies are set
- Promotes immutability
- Dependencies are explicit
- Easier testing
- Works well with Spring Boot autowiring (since Spring 4.3+, `@Autowired` is optional if only one constructor)

**Cons:**
- Can lead to large constructors if too many dependencies (design smell)

```java
@Service
public class OrderService {
    private final PaymentService paymentService;

    @Autowired // Optional in Spring since 4.3 if there's only one constructor
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void placeOrder() {
        paymentService.pay(100.0);
    }
}
```

### 2. Setter Injection

**Pros:**
- Good for optional dependencies

**Cons:**
- Can lead to partially configured objects

```java
@Service
public class MyService {
    private MyRepository repository;

    @Autowired
    public void setRepository(MyRepository repository) {
        this.repository = repository;
    }
}
```

### 3. Field Injection (Generally Discouraged ❌)

**Pros:**
- Very concise
- Easy for beginners

**Cons:**
- **Hidden dependencies** - can't see from constructor what this class needs
- **Harder to test** - can't easily mock dependencies without reflection
- Breaks **immutability** - dependencies can be `null` if something goes wrong
- Doesn't allow creating required dependencies outside of Spring context

```java
@Service
public class OrderService {
    @Autowired
    private PaymentService paymentService;  // field injection

    public void placeOrder() {
        paymentService.pay(100.0);
    }
}
```

**Best Practice:** Use **constructor injection** (recommended by Spring team)

---

## 🔧 Bean Definition Annotations

### 1. Using `@Bean` Methods

You can explicitly declare a bean in a `@Configuration` class. Useful for third-party libraries where you cannot annotate the class directly.

```java
@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

### 2. Other Important Bean Annotations

| Annotation | Purpose |
|------------|---------|
| `@Bean` | Declares a method as a Spring bean definition |
| `@Primary` | Marks bean as default choice when multiple beans of same type exist |
| `@Qualifier("beanName")` | Specifies which bean to inject by name when used with `@Autowired` |
| `@Lazy` | Delays bean initialization until first requested |
| `@Value("${property.key}")` | Injects values from property files, environment variables, or SpEL |
| `@Required` | (Legacy) Indicates dependency must be injected |
| `@Inject` | Java-standard alternative to `@Autowired` (JSR-330) - injects by type |
| `@Resource` | Java-standard (JSR-250) - injects by name first, then by type |
| `@Scope("scopeName")` | Sets the scope of a bean |
| `@DependsOn` | Specifies bean must be initialized before current bean |
| `@Order` | Defines sort order when multiple beans collected into list |

---

## 🤔 Resolving Ambiguous Dependencies

When multiple beans of the same type exist, Spring will throw an exception. You can resolve this using:

### 1. `@Qualifier`
Specifies which bean to inject by name.

```java
@Service
public class MyService {
    private final PaymentService paymentService;

    public MyService(@Qualifier("creditCardPaymentService") PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}

@Service("creditCardPaymentService")
public class CreditCardPaymentService implements PaymentService {}

@Service("payPalPaymentService")
public class PayPalPaymentService implements PaymentService {}
```

### 2. `@Primary`
Marks one bean as the default choice.

```java
@Primary
@Service
public class CreditCardPaymentService implements PaymentService {}

@Service
public class PayPalPaymentService implements PaymentService {}
```

### Summary: Multiple Beans Resolution

- `@Autowired` / `@Inject` → ❌ ambiguity error
- `@Qualifier` → ✅ explicit choice
- `@Primary` → ✅ default choice
- `@Resource` → ✅ works if name matches

---

## 🔄 Bean Scopes

The scope of a bean defines its lifecycle and visibility.

| Scope | Description | Use Case |
|-------|-------------|----------|
| `singleton` | (Default) Only one instance per container | Stateless services, repositories, configuration classes |
| `prototype` | New instance every time requested | Stateful beans where each user/thread needs own instance (e.g., shopping cart) |
| `request` | (Web only) New instance per HTTP request | Request-specific data (e.g., user authentication) |
| `session` | (Web only) New instance per HTTP session | User-specific data across multiple requests (e.g., user profile) |
| `application` | (Web only) Single instance per ServletContext lifecycle | Application-wide shared data (e.g., app config, cache) |
| `global-session` | (Portlet only) Single instance for global HTTP session | Portlet-based web applications |

### Example:
```java
@Component
@Scope("prototype")
public class MyPrototypeBean {
    // New instance created each time
}
```

**⚠️ Warning:** Avoid storing shared, mutable state in singleton beans to prevent thread-safety issues.

---

## 🌱 Bean Lifecycle

The bean lifecycle describes how a Spring bean is created, managed, and destroyed.

### Lifecycle Phases:

1. **Instantiation** - Spring container creates bean instance
2. **Populating Properties** - Dependencies injected via setter/constructor
3. **Bean Name Awareness** - `setBeanName()` called if implements `BeanNameAware`
4. **Bean Factory Awareness** - `setBeanFactory()` called if implements `BeanFactoryAware`
5. **Application Context Awareness** - `setApplicationContext()` called if implements `ApplicationContextAware`
6. **Pre-initialization** - `postProcessBeforeInitialization()` of `BeanPostProcessor` called
7. **Initialization:**
   - `@PostConstruct` annotated method called
   - `afterPropertiesSet()` called if implements `InitializingBean`
   - Custom `init-method` invoked
8. **Post-initialization** - `postProcessAfterInitialization()` of `BeanPostProcessor` called
9. **Bean is Ready** - Bean ready for use
10. **Destruction:**
    - `@PreDestroy` annotated method called
    - `destroy()` called if implements `DisposableBean`
    - Custom `destroy-method` invoked

### Lifecycle Callback Annotations

| Annotation | When Called |
|------------|-------------|
| `@PostConstruct` | After bean creation and dependency injection |
| `@PreDestroy` | Before bean removal from container |

```java
@Component
public class MyBean {

    @PostConstruct
    public void initialize() {
        System.out.println("MyBean has been initialized.");
    }

    @PreDestroy
    public void cleanup() {
        System.out.println("MyBean is about to be destroyed.");
    }
}
```

---

## 🚨 Circular Dependency (Cyclic Dependency)

A **cyclic dependency** happens when two or more beans depend on each other in a loop.

### Example of the Problem:
```java
@Service
public class AService {
    private final BService bService;

    public AService(BService bService) {
        this.bService = bService;
    }
}

@Service
public class BService {
    private final AService aService;

    public BService(AService aService) {
        this.aService = aService;
    }
}
```

**Result:** `BeanCurrentlyInCreationException` - infinite loop

### Causes:
1. Bad design / tight coupling
2. Constructor injection with circular references
3. Mutual `@Autowired` fields without clear direction

### Solutions:

**1. Refactor Dependencies (Best ✅)**
Extract shared logic into a third class:
```java
@Service
public class CommonService {
    // shared logic
}
```

**2. Use `@Lazy` (Workaround)**
Defers creation until needed:
```java
@Service
public class AService {
    private final BService bService;

    public AService(@Lazy BService bService) {
        this.bService = bService;
    }
}
```

**3. Use Setter Injection**
Makes dependencies optional and set after construction.

**4. Allow Circular References (Not Recommended)**
```properties
# application.properties
spring.main.allow-circular-references=true
```

**Key Takeaway:** Cyclic dependency usually indicates poor architecture. Preferred fix is to refactor.

---

## 🌐 Web Annotations

| Annotation | Purpose |
|------------|---------|
| `@RequestMapping` | Maps HTTP requests to handler methods (path, HTTP method, headers, params) |
| `@GetMapping` | Shortcut for `@RequestMapping(method = RequestMethod.GET)` |
| `@PostMapping` | Shortcut for POST requests |
| `@PutMapping` | Shortcut for PUT requests |
| `@DeleteMapping` | Shortcut for DELETE requests |
| `@PatchMapping` | Shortcut for PATCH requests |
| `@PathVariable` | Binds method parameter to URI template variable |
| `@RequestParam` | Binds method parameter to web request parameter (query string) |
| `@RequestBody` | Binds HTTP request body to Java object |
| `@ResponseBody` | Serializes return value directly to HTTP response body |
| `@ModelAttribute` | Binds method parameter/return value to named model attribute |
| `@CrossOrigin` | Enables Cross-Origin Resource Sharing (CORS) |
| `@SessionAttributes` | Stores model attributes in HTTP session between requests |

### Example:
```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping
    public List<User> searchUsers(@RequestParam String name) {
        return userService.findByName(name);
    }
}
```

---

## 💾 JPA & Data Access Annotations

### Entity Mapping

| Annotation | Purpose |
|------------|---------|
| `@Entity` | Marks Java class as JPA entity (represents database table) |
| `@Table` | Specifies table details (name, schema, unique constraints) |
| `@Id` | Declares primary key field |
| `@GeneratedValue` | Configures primary key generation strategy |
| `@SequenceGenerator` | Defines primary key generator using database sequence |
| `@Column` | Specifies column mapping (name, length, nullable) |
| `@Transient` | Marks field to be ignored by persistence provider |
| `@Enumerated` | Specifies how Enum type is persisted (string or integer) |
| `@Lob` | Indicates property should be persisted as Large Object (CLOB/BLOB) |

### Relationships

| Annotation | Relationship Type |
|------------|-------------------|
| `@OneToOne` | One-to-one relationship |
| `@ManyToOne` | Many-to-one relationship |
| `@OneToMany` | One-to-many relationship |
| `@ManyToMany` | Many-to-many relationship |
| `@JoinColumn` | Specifies foreign key column |

### Query & Transaction

| Annotation | Purpose |
|------------|---------|
| `@Query` | Defines custom queries using JPQL or native SQL |
| `@Modifying` | Indicates query modifies database (UPDATE/DELETE) |
| `@Transactional` | Declares method/class should execute within database transaction |
| `@NamedQuery` | Defines static, named query referenced by name |

### Advanced JPA

| Annotation | Purpose |
|------------|---------|
| `@DynamicInsert` | (Hibernate) Optimizes INSERT by including only non-null fields |
| `@DynamicUpdate` | (Hibernate) Optimizes UPDATE by including only modified fields |
| `@Embedded` | Embeds one class within another entity |
| `@EmbeddedId` | Marks embedded composite primary key |
| `@Embeddable` | Marks class as embeddable |
| `@MappedSuperclass` | Designates class whose mapping info applies to inheriting entities |
| `@EntityListeners` | Registers listener classes for entity lifecycle events |
| `@EntityGraph` | Defines graph of associations to fetch eagerly (solves N+1 problem) |
| `@Version` | Used for optimistic locking to prevent concurrent modifications |

### Repository & Configuration

| Annotation | Purpose |
|------------|---------|
| `@EnableJpaRepositories` | Enables Spring Data JPA repositories |
| `@EntityScan` | Scans for entity classes |
| `@PersistenceContext` | Injects EntityManager instance |

### Lifecycle Callbacks

| Annotation | Purpose | When Executed |
|------------|---------|---------------|
| `@PrePersist` | Callback before entity first saved | Before INSERT |
| `@PostPersist` | Callback after entity saved | After INSERT |
| `@PreUpdate` | Callback before entity updated | Before UPDATE |
| `@PostUpdate` | Callback after entity updated | After UPDATE |
| `@PreRemove` | Callback before entity removed | Before DELETE |
| `@PostRemove` | Callback after entity removed | After DELETE |
| `@PostLoad` | Callback after entity loaded | After SELECT |

### Example:
```java
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @PrePersist
    public void onPrePersist() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void onPreUpdate() {
        updatedAt = LocalDateTime.now();
    }

    @PostPersist
    public void onPostPersist() {
        System.out.println("User saved with ID: " + id);
    }
}
```

---

## 📝 JPA Auditing Annotations

Spring Data JPA provides powerful auditing capabilities to automatically track creation and modification details.

### How to Enable Auditing:

1. Add `@EnableJpaAuditing` to main application class
2. Add `@EntityListeners(AuditingEntityListener.class)` to entity

### Core Auditing Annotations:

| Annotation | Purpose | When Set |
|------------|---------|----------|
| `@CreatedDate` | Stores creation timestamp | On INSERT |
| `@CreatedBy` | Stores user who created entity | On INSERT |
| `@LastModifiedDate` | Stores last modification timestamp | On UPDATE |
| `@LastModifiedBy` | Stores user who last modified entity | On UPDATE |

### Example Implementation:

```java
@Entity
@EntityListeners(AuditingEntityListener.class)
public class AuditableEntity {

    @Id
    @GeneratedValue
    private Long id;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdDate;

    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime lastModifiedDate;

    @CreatedBy
    @Column(nullable = false, updatable = false)
    private String createdBy;

    @LastModifiedBy
    @Column(nullable = false)
    private String lastModifiedBy;
}
```

### Implement AuditorAware:

```java
@Configuration
public class JpaAuditConfig {

    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                             .map(Authentication::getName);
    }
}
```

### Enable in Main Application:

```java
@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

---

## 📊 MongoDB Annotations

| Annotation | Purpose |
|------------|---------|
| `@Document` | Maps Java class to MongoDB collection |
| `@EnableMongoAuditing` | Enables auditing features for MongoDB |
| `@LastModifiedDate` | Sets last modified timestamp automatically |

---

## 🔨 Lombok & Entity Model Helpers

| Annotation | Purpose |
|------------|---------|
| `@Data` | Combines getter/setter/toString/equals/hashCode |
| `@Builder` | Implements builder pattern |
| `@NoArgsConstructor` | Generates no-args constructor |
| `@AllArgsConstructor` | Generates constructor with all fields |
| `@Singular` | Creates singular methods for collections in builder |
| `@Getter` | Generates getters |
| `@Setter` | Generates setters |

---

## ⚡ Caching Annotations

Spring's caching abstraction provides powerful way to improve performance by caching expensive operations.

| Annotation | Purpose | How It Works |
|------------|---------|--------------|
| `@Cacheable` | Caches method result | Checks cache first; if found, returns cached value without executing method |
| `@CachePut` | Forces method execution and updates cache | Always executes method and updates cache with result |
| `@CacheEvict` | Removes entry from cache | Removes cache entry (useful for DELETE/UPDATE operations) |
| `@Caching` | Groups multiple caching annotations | Allows applying multiple cache operations on single method |

### Enable Caching:

```java
@SpringBootApplication
@EnableCaching
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### @Cacheable Parameters:

| Parameter | Description |
|-----------|-------------|
| `value` / `cacheNames` | Name of cache(s) to use |
| `key` | SpEL expression for custom cache key (default: method parameters) |
| `keyGenerator` | Custom KeyGenerator bean name |
| `cacheManager` | Specific CacheManager bean to use |
| `cacheResolver` | Custom CacheResolver bean |
| `condition` | SpEL expression - result cached only if true |
| `unless` | SpEL expression - prevents caching if true (checked after execution) |
| `sync` | If true, ensures only one thread builds cache value for specific key |

### Examples:

**1. Basic Caching:**
```java
@Cacheable(value = "products")
public Product getProduct(String id) {
    return productRepository.findById(id).orElse(null);
}
```

**2. Custom Key:**
```java
@Cacheable(value = "users", key = "#user.id", condition = "#user.active")
public User findUser(User user) {
    return userRepository.findById(user.getId()).orElse(null);
}
```

**3. Prevent Null Caching:**
```java
@Cacheable(value = "inventory", key = "#sku", unless = "#result == null")
public Inventory fetchInventory(String sku) {
    return inventoryService.getInventory(sku);
}
```

**4. Synchronized Caching:**
```java
@Cacheable(value = "pricing", key = "#itemId", sync = true)
public Price calculatePrice(String itemId) {
    return pricingEngine.calculate(itemId);
}
```

### @CacheEvict Parameters:

| Parameter | Description |
|-----------|-------------|
| `value` / `cacheNames` | Name of cache(s) to evict from |
| `key` | SpEL expression for specific entry to evict |
| `allEntries` | If true, removes all entries from cache (default: false) |
| `beforeInvocation` | If true, eviction happens before method call (default: false) |
| `condition` | SpEL expression - eviction occurs only if true |

**Examples:**

```java
// Evict single entry
@CacheEvict(value = "products", key = "#productId")
public void deleteProduct(String productId) {
    productRepository.deleteById(productId);
}

// Evict all entries
@CacheEvict(value = "products", allEntries = true)
public void refreshAllProducts() {
    // Reload products logic
}

// Scheduled eviction
@CacheEvict(value = "reports", allEntries = true)
@Scheduled(fixedRateString = "900000") // Every 15 minutes
public void clearReportsCache() {
    log.info("Clearing reports cache");
}
```

### @CachePut Parameters:

| Parameter | Description |
|-----------|-------------|
| `value` / `cacheNames` | Name of cache(s) to update |
| `key` | SpEL expression for cache key |
| `condition` | SpEL expression - cache updated only if true |
| `unless` | SpEL expression - prevents cache update if true |

**Example:**

```java
@CachePut(value = "products", key = "#product.id")
public Product updateProduct(Product product) {
    return productRepository.save(product);
}
```

### @Caching - Grouping Annotations:

```java
@Caching(
    evict = {
        @CacheEvict(value = "products", key = "#product.id"),
        @CacheEvict(value = "productSummaries", allEntries = true)
    },
    put = {
        @CachePut(value = "products", key = "#product.id")
    }
)
public Product updateProduct(Product product) {
    return productRepository.save(product);
}
```

### Custom Key Generator:

```java
@Component("customKeyGenerator")
public class CustomKeyGenerator implements KeyGenerator {

    @Override
    public Object generate(Object target, Method method, Object... params) {
        StringBuilder key = new StringBuilder();
        key.append(target.getClass().getSimpleName());
        key.append(".");
        key.append(method.getName());
        for (Object param : params) {
            key.append(".");
            key.append(param.toString());
        }
        return key.toString();
    }
}

// Usage
@Cacheable(value = "products", keyGenerator = "customKeyGenerator")
public Product findProduct(String productId, String storeId) {
    // ...
}
```

### Cache Configuration:

**Caffeine:**
```yaml
# application.yml
spring:
  cache:
    cache-names:
      - products
      - customer-details
    caffeine:
      spec: >
        initialCapacity=10,
        maximumSize=500,
        expireAfterAccess=600s
```

**Redis:**
```yaml
# application.yml
spring:
  cache:
    type: redis
  redis:
    host: localhost
    port: 6379
    time-to-live: 600000 # 10 minutes
```

---

## 🔐 Security Annotations

| Annotation | Purpose |
|------------|---------|
| `@EnableWebSecurity` | Enables Spring Security's web security support |
| `@EnableGlobalMethodSecurity` | Enables method-level security with annotations |
| `@PreAuthorize` | Secures methods with SpEL expressions before execution |
| `@PostAuthorize` | Secures methods with SpEL expressions after execution |
| `@Secured` | JSR-250 annotation to secure methods based on roles |
| `@RolesAllowed` | JSR-250 annotation for role-based security |
| `@AuthenticationPrincipal` | Injects current authenticated user into controller method |
| `@EnableWebFluxSecurity` | Enables security for reactive web applications (WebFlux) |

### Examples:

```java
@Service
public class AdminService {

    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @PreAuthorize("hasAuthority('WRITE_PRIVILEGE')")
    public void updateUser(User user) {
        userRepository.save(user);
    }

    @Secured("ROLE_USER")
    public User getProfile() {
        return getCurrentUser();
    }
}
```

---

## 🧪 Testing Annotations

| Annotation | Purpose |
|------------|---------|
| `@SpringBootTest` | Full integration test - loads complete application context |
| `@WebMvcTest` | Test slice for web layer only - auto-configures Spring MVC infrastructure |
| `@DataJpaTest` | Test slice for persistence layer - configures in-memory database |
| `@MockBean` | Adds Mockito mock to ApplicationContext - replaces existing bean |
| `@SpyBean` | Adds Mockito spy to ApplicationContext - wraps real instance |
| `@AutoConfigureMockMvc` | Auto-configures MockMvc for server-side Spring MVC testing |
| `@TestPropertySource` | Loads properties file or defines inline properties for tests |
| `@Sql` | Executes SQL scripts before or after test method |
| `@ActiveProfiles("test")` | Activates specific profile for test |

### Examples:

```java
@SpringBootTest
@ActiveProfiles("test")
class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @Test
    void testFindUser() {
        // Test logic
    }
}

@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void testGetUser() throws Exception {
        mockMvc.perform(get("/api/users/1"))
               .andExpect(status().isOk());
    }
}

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void testSaveUser() {
        User user = new User("John");
        userRepository.save(user);
        assertNotNull(user.getId());
    }
}
```

---

## ⚙️ Configuration & Property Binding

| Annotation | Purpose |
|------------|---------|
| `@ConfigurationProperties(prefix="app")` | Binds external properties to POJO |
| `@Value("${app.name}")` | Injects property values or SpEL expressions |
| `@PropertySource("classpath:custom.properties")` | Loads external property file |
| `@Import` | Imports other configuration classes |
| `@EnableConfigurationProperties` | Enables @ConfigurationProperties beans |

### Examples:

**Property Binding:**
```java
@Configuration
@ConfigurationProperties(prefix = "app")
public class AppConfig {
    private String name;
    private int timeout;
    private List<String> servers;

    // Getters and setters
}
```

```yaml
# application.yml
app:
  name: MyApp
  timeout: 5000
  servers:
    - server1.com
    - server2.com
```

**@Value Usage:**
```java
@Component
public class MyComponent {

    @Value("${app.name}")
    private String appName;

    @Value("${app.timeout:3000}") // Default value: 3000
    private int timeout;

    @Value("#{systemProperties['user.name']}") // SpEL
    private String userName;
}
```

---

## 🎯 Conditional Bean Registration

| Annotation | Purpose |
|------------|---------|
| `@Conditional` | Generic conditional configuration based on custom Condition |
| `@Profile("dev")` | Conditionally loads beans by active profile |
| `@ConditionalOnBean` | Matches when specified bean exists |
| `@ConditionalOnMissingBean` | Matches when specified bean does NOT exist |
| `@ConditionalOnClass` | Matches when specified class is on classpath |
| `@ConditionalOnMissingClass` | Matches when specified class is NOT on classpath |
| `@ConditionalOnProperty` | Matches based on property value |
| `@ConditionalOnResource` | Matches when specified resource exists |
| `@ConditionalOnWebApplication` | Matches when application is a web application |
| `@ConditionalOnNotWebApplication` | Matches when application is NOT a web application |
| `@ConditionalOnJava` | Matches based on Java version |
| `@ConditionalOnExpression` | Matches based on SpEL expression |

### Examples:

```java
@Configuration
public class ConditionalConfig {

    @Bean
    @ConditionalOnProperty(name = "feature.enabled", havingValue = "true")
    public FeatureService featureService() {
        return new FeatureService();
    }

    @Bean
    @ConditionalOnMissingBean(DataSource.class)
    public DataSource defaultDataSource() {
        return new EmbeddedDatabaseBuilder().build();
    }

    @Bean
    @ConditionalOnClass(name = "org.springframework.security.core.Authentication")
    public SecurityService securityService() {
        return new SecurityService();
    }
}
```

---

## 🎭 Profiles

Spring Boot Profiles allow different configurations for different environments (dev, test, prod).

### Defining Profile-Specific Beans:

```java
@Configuration
public class DatabaseConfig {

    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }

    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        return DataSourceBuilder.create()
            .url("jdbc:postgresql://prod-db:5432/mydatabase")
            .username("user")
            .password("secret")
            .build();
    }
}
```

### Profile-Specific Properties Files:

- `application.properties` - Default properties
- `application-dev.properties` - Dev environment
- `application-prod.properties` - Production environment

```properties
# application-dev.properties
server.port=9090
logging.level.com.example=DEBUG
```

```properties
# application-prod.properties
server.port=8080
logging.level.com.example=INFO
```

### Activating Profiles:

**In application.properties:**
```properties
spring.profiles.active=dev
```

**Command line:**
```bash
java -jar app.jar --spring.profiles.active=prod
```

**In tests:**
```java
@SpringBootTest
@ActiveProfiles("test")
class MyServiceTest {
    // Tests
}
```

### Profile Groups (Spring Boot 2.4+):

```yaml
# application.yml
spring:
  profiles:
    group:
      "production":
        - "prod-db"
        - "prod-api"
        - "prod-metrics"
```

### The `default` Profile:

If no profile is activated, Spring Boot uses the `default` profile.

---

## ⏰ Scheduling & Asynchronous Annotations

| Annotation | Purpose |
|------------|---------|
| `@EnableScheduling` | Enables scheduled task support |
| `@Scheduled` | Schedules method execution at fixed intervals or cron expressions |
| `@EnableAsync` | Enables asynchronous method execution |
| `@Async` | Executes method asynchronously in separate thread |

### Examples:

```java
@Configuration
@EnableScheduling
@EnableAsync
public class AsyncConfig {
    // Configuration
}

@Service
public class ScheduledTasks {

    // Fixed rate: runs every 5 seconds
    @Scheduled(fixedRate = 5000)
    public void reportCurrentTime() {
        System.out.println("Current time: " + LocalDateTime.now());
    }

    // Fixed delay: waits 5 seconds after previous execution completes
    @Scheduled(fixedDelay = 5000)
    public void processWithDelay() {
        System.out.println("Processing...");
    }

    // Cron expression: runs every day at 2 AM
    @Scheduled(cron = "0 0 2 * * ?")
    public void performDailyTask() {
        System.out.println("Daily task executed");
    }

    // Initial delay: waits 10 seconds before first execution
    @Scheduled(initialDelay = 10000, fixedRate = 5000)
    public void taskWithInitialDelay() {
        System.out.println("Task with initial delay");
    }
}

@Service
public class AsyncService {

    @Async
    public CompletableFuture<String> processAsync() {
        // Long-running task
        return CompletableFuture.completedFuture("Result");
    }

    @Async
    public void sendEmail(String recipient) {
        // Send email asynchronously
    }
}
```

---

## 🎨 AOP (Aspect-Oriented Programming) Annotations

| Annotation | Purpose |
|------------|---------|
| `@Aspect` | Marks class as aspect |
| `@Before` | Advice that executes before method execution |
| `@After` | Advice that executes after method execution (regardless of outcome) |
| `@AfterReturning` | Advice that executes after successful method return |
| `@AfterThrowing` | Advice that executes after method throws exception |
| `@Around` | Advice that wraps method execution |
| `@Pointcut` | Defines reusable pointcut expression |
| `@EnableAspectJAutoProxy` | Enables AspectJ auto-proxy support |

### Example:

```java
@Aspect
@Component
public class LoggingAspect {

    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceMethods() {}

    @Before("serviceMethods()")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Executing: " + joinPoint.getSignature().getName());
    }

    @Around("serviceMethods()")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = joinPoint.proceed();
        long end = System.currentTimeMillis();
        System.out.println("Execution time: " + (end - start) + "ms");
        return result;
    }

    @AfterThrowing(pointcut = "serviceMethods()", throwing = "error")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable error) {
        System.out.println("Exception in: " + joinPoint.getSignature().getName());
        System.out.println("Exception: " + error.getMessage());
    }
}
```

---

## 📡 Event Handling Annotations

| Annotation | Purpose |
|------------|---------|
| `@EventListener` | Handles application events |
| `@TransactionalEventListener` | Handles events tied to transaction phases |

### Example:

```java
@Component
public class UserEventListener {

    @EventListener
    public void handleUserCreated(UserCreatedEvent event) {
        System.out.println("User created: " + event.getUser().getName());
    }

    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void handleAfterCommit(UserCreatedEvent event) {
        // Send welcome email after transaction commits
        emailService.sendWelcomeEmail(event.getUser());
    }
}

// Custom event
public class UserCreatedEvent {
    private final User user;

    public UserCreatedEvent(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }
}

// Publishing event
@Service
public class UserService {

    @Autowired
    private ApplicationEventPublisher eventPublisher;

    public User createUser(User user) {
        User savedUser = userRepository.save(user);
        eventPublisher.publishEvent(new UserCreatedEvent(savedUser));
        return savedUser;
    }
}
```

---

## 🚫 Common Errors

| Exception | Cause | Solution |
|-----------|-------|----------|
| `NoSuchBeanDefinitionException` | Spring can't find a bean | Check component scan, bean name, missing @Component/@Service, or if using `new` instead of DI |
| `BeanCurrentlyInCreationException` | Circular dependency | Refactor design, use @Lazy, or setter injection |
| `NoUniqueBeanDefinitionException` | Multiple beans of same type | Use @Primary or @Qualifier |
| `BeanCreationException` | Error during bean creation | Check constructor arguments, dependencies, configuration |

---

## 📋 Complete Example: REST API with All Concepts

```java
// Main Application
@SpringBootApplication
@EnableCaching
@EnableScheduling
@EnableJpaAuditing
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// Entity
@Entity
@Table(name = "products")
@EntityListeners(AuditingEntityListener.class)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Version
    private Long version;

    @PrePersist
    public void prePersist() {
        System.out.println("About to save: " + name);
    }

    // Getters and setters
}

// Repository
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.price > :minPrice")
    List<Product> findExpensiveProducts(@Param("minPrice") BigDecimal minPrice);

    @Modifying
    @Query("UPDATE Product p SET p.price = p.price * 1.1 WHERE p.price < :threshold")
    int increasePrices(@Param("threshold") BigDecimal threshold);
}

// Service
@Service
@Transactional
public class ProductService {

    private final ProductRepository repository;
    private final ApplicationEventPublisher eventPublisher;

    public ProductService(ProductRepository repository,
                         ApplicationEventPublisher eventPublisher) {
        this.repository = repository;
        this.eventPublisher = eventPublisher;
    }

    @Cacheable(value = "products", key = "#id", unless = "#result == null")
    @Transactional(readOnly = true)
    public Product findById(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new NotFoundException("Product not found"));
    }

    @CachePut(value = "products", key = "#result.id")
    public Product save(Product product) {
        Product saved = repository.save(product);
        eventPublisher.publishEvent(new ProductCreatedEvent(saved));
        return saved;
    }

    @CacheEvict(value = "products", key = "#id")
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @CacheEvict(value = "products", allEntries = true)
    @Scheduled(cron = "0 0 2 * * ?") // Every day at 2 AM
    public void clearCache() {
        System.out.println("Cache cleared");
    }

    @Async
    public CompletableFuture<List<Product>> findExpensiveAsync(BigDecimal minPrice) {
        List<Product> products = repository.findExpensiveProducts(minPrice);
        return CompletableFuture.completedFuture(products);
    }
}

// Controller
@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(service.save(product));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Product>> searchProducts(
            @RequestParam(required = false) BigDecimal minPrice) {
        // Search logic
        return ResponseEntity.ok(Collections.emptyList());
    }
}

// Event Listener
@Component
public class ProductEventListener {

    @EventListener
    @Async
    public void handleProductCreated(ProductCreatedEvent event) {
        System.out.println("Product created: " + event.getProduct().getName());
        // Send notification, update cache, etc.
    }
}

// Configuration
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }

    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        return DataSourceBuilder.create()
            .url("${spring.datasource.url}")
            .username("${spring.datasource.username}")
            .password("${spring.datasource.password}")
            .build();
    }
}

// Test
@SpringBootTest
@ActiveProfiles("test")
class ProductServiceTest {

    @Autowired
    private ProductService service;

    @MockBean
    private ProductRepository repository;

    @Test
    void testFindById() {
        Product product = new Product();
        product.setId(1L);
        product.setName("Test Product");

        when(repository.findById(1L)).thenReturn(Optional.of(product));

        Product found = service.findById(1L);

        assertNotNull(found);
        assertEquals("Test Product", found.getName());
    }
}
```

---

## 💡 Best Practices Summary

1. ✅ **Use constructor injection** over field injection
2. ✅ **Keep @Service classes stateless** for thread safety
3. ✅ **Use @Transactional at service layer**, not repository
4. ✅ **Prefer @RestController** over @Controller + @ResponseBody for APIs
5. ✅ **Use specific test slices** (@WebMvcTest, @DataJpaTest) over @SpringBootTest when possible
6. ✅ **Use profiles** for environment-specific configuration
7. ✅ **Leverage caching** for expensive read operations
8. ✅ **Use @Async** for long-running tasks that don't need immediate response
9. ✅ **Implement proper exception handling** with @ControllerAdvice
10. ❌ **Avoid circular dependencies** - refactor if they occur
11. ❌ **Don't use @Autowired on fields** in production code
12. ❌ **Don't put business logic in controllers** - keep them thin
13. ❌ **Don't ignore transaction boundaries** - understand propagation

---

## 🌱 Spring vs Spring Boot

| Feature | Spring Framework | Spring Boot |
|---------|------------------|-------------|
| **Primary Goal** | Flexible, comprehensive framework | Simplify development of production-ready apps |
| **Configuration** | Explicit manual configuration (XML/Java) | Convention over configuration with auto-configuration |
| **Boilerplate Code** | Significant boilerplate required | Minimal boilerplate |
| **Embedded Server** | Manual setup required (Tomcat, etc.) | Includes embedded servers out-of-box |
| **Dependency Management** | Manual dependency management | Simplified via "starters" |
| **Ease of Use** | Steeper learning curve | Easy to learn and quick start |

**Summary:** Spring gives tools and flexibility to build from ground up. Spring Boot provides pre-configured, production-ready starting point.

---

## 🎯 Quick Reference Card

### Bean Definition
```java
@Component / @Service / @Repository / @Controller / @RestController
@Configuration + @Bean
```

### Dependency Injection
```java
Constructor: public MyService(Dependency dep) {}
Setter: @Autowired public void setDep(Dependency dep) {}
Field: @Autowired private Dependency dep; // Discouraged
```

### Scopes
```java
@Scope("singleton") // Default
@Scope("prototype")
@Scope("request") / @Scope("session") / @Scope("application")
```

### Lifecycle
```java
@PostConstruct - after creation
@PreDestroy - before destruction
```

### Web
```java
@GetMapping / @PostMapping / @PutMapping / @DeleteMapping
@PathVariable / @RequestParam / @RequestBody
```

### JPA
```java
@Entity / @Table / @Id / @GeneratedValue / @Column
@OneToOne / @OneToMany / @ManyToOne / @ManyToMany
@Query / @Modifying / @Transactional
```

### Caching
```java
@EnableCaching
@Cacheable / @CachePut / @CacheEvict
```

### Testing
```java
@SpringBootTest / @WebMvcTest / @DataJpaTest
@MockBean / @SpyBean
@ActiveProfiles("test")
```

### Security
```java
@EnableWebSecurity
@PreAuthorize / @Secured
```

---

**Note:** This is a comprehensive reference. For latest documentation, visit [Spring Framework Documentation](https://docs.spring.io/spring-framework/docs/current/reference/html/).
