# Spring Boot Annotations - Tree Structure

A quick reference tree structure of all Spring Boot annotations with simple definitions.

---

## 📦 Core Spring Boot
```
@SpringBootApplication          - Main entry point (combines @Configuration, @EnableAutoConfiguration, @ComponentScan)
@Configuration                  - Marks class as bean definition source
@EnableAutoConfiguration        - Enables Spring Boot auto-configuration
@ComponentScan                  - Tells Spring where to find components
```

---

## 🏷️ Stereotype Annotations (Component Scanning)
```
@Component                      - Generic Spring-managed component
@Service                        - Business logic layer component
@Repository                     - Data access layer component (enables exception translation)
@Controller                     - Spring MVC controller
@RestController                 - REST API controller (@Controller + @ResponseBody)
```

---

## 💉 Dependency Injection
```
@Autowired                      - Auto-injects dependency by type
@Inject                         - JSR-330 alternative to @Autowired (injects by type)
@Resource                       - JSR-250 alternative (injects by name first, then type)
@Qualifier("name")              - Specifies which bean to inject by name
@Primary                        - Marks bean as default choice when multiple exist
@Lazy                           - Delays bean initialization until first use
@DependsOn                      - Specifies bean initialization order
@Order                          - Defines sort order for beans in collections
```

---

## 🔧 Bean Configuration
```
@Bean                           - Declares method as bean definition
@Scope("singleton")             - One instance per container (default)
@Scope("prototype")             - New instance every time
@Scope("request")               - New instance per HTTP request (web only)
@Scope("session")               - New instance per HTTP session (web only)
@Scope("application")           - One instance per ServletContext (web only)
```

---

## 🌱 Bean Lifecycle
```
@PostConstruct                  - Executes after bean creation and DI
@PreDestroy                     - Executes before bean destruction
```

---

## 🌐 Web / REST Annotations
```
@RequestMapping                 - Maps HTTP requests to handler methods
@GetMapping                     - Shortcut for GET requests
@PostMapping                    - Shortcut for POST requests
@PutMapping                     - Shortcut for PUT requests
@DeleteMapping                  - Shortcut for DELETE requests
@PatchMapping                   - Shortcut for PATCH requests
@PathVariable                   - Extracts value from URL path
@RequestParam                   - Extracts query parameter from URL
@RequestBody                    - Binds HTTP request body to object
@ResponseBody                   - Serializes return value to HTTP response
@ModelAttribute                 - Binds method parameter to model attribute
@CrossOrigin                    - Enables CORS for method/class
@SessionAttributes              - Stores model attributes in HTTP session
@ResponseStatus                 - Sets HTTP status code for method
@ExceptionHandler               - Handles exceptions in controller
@ControllerAdvice               - Global exception handler across controllers
@RestControllerAdvice           - @ControllerAdvice + @ResponseBody for REST
```

---

## 💾 JPA / Database - Entity Mapping
```
@Entity                         - Marks class as JPA entity (database table)
@Table(name="...")              - Specifies table name and details
@Id                             - Marks field as primary key
@GeneratedValue                 - Auto-generates primary key value
@SequenceGenerator              - Defines sequence-based key generator
@Column                         - Maps field to database column
@Transient                      - Excludes field from database persistence
@Enumerated                     - Specifies how Enum is persisted
@Lob                            - Marks field as Large Object (CLOB/BLOB)
@Temporal                       - Specifies temporal type (DATE, TIME, TIMESTAMP)
@Formula                        - SQL formula for computed field
```

---

## 💾 JPA - Relationships
```
@OneToOne                       - Defines one-to-one relationship
@OneToMany                      - Defines one-to-many relationship
@ManyToOne                      - Defines many-to-one relationship
@ManyToMany                     - Defines many-to-many relationship
@JoinColumn                     - Specifies foreign key column
@JoinTable                      - Specifies join table for many-to-many
@MapsId                         - Maps relationship to primary key
```

---

## 💾 JPA - Queries & Transactions
```
@Query                          - Defines custom JPQL or native SQL query
@Modifying                      - Marks query as data-modifying (UPDATE/DELETE)
@Transactional                  - Executes method within database transaction
@NamedQuery                     - Defines static named query
@NamedQueries                   - Container for multiple @NamedQuery
@Param                          - Names parameter in query method
```

---

## 💾 JPA - Advanced Features
```
@Embedded                       - Embeds object within entity
@Embeddable                     - Marks class as embeddable
@EmbeddedId                     - Marks embedded composite primary key
@MappedSuperclass               - Base class for entities (not a table itself)
@EntityListeners                - Registers lifecycle event listeners
@EntityGraph                    - Defines fetch strategy to avoid N+1 queries
@Version                        - Enables optimistic locking
@DynamicInsert                  - Hibernate: includes only non-null fields in INSERT
@DynamicUpdate                  - Hibernate: includes only modified fields in UPDATE
@Inheritance                    - Defines inheritance strategy
@DiscriminatorColumn            - Specifies discriminator column for inheritance
@DiscriminatorValue             - Sets discriminator value for subclass
```

---

## 💾 JPA - Lifecycle Callbacks
```
@PrePersist                     - Before entity is saved (INSERT)
@PostPersist                    - After entity is saved (INSERT)
@PreUpdate                      - Before entity is updated (UPDATE)
@PostUpdate                     - After entity is updated (UPDATE)
@PreRemove                      - Before entity is removed (DELETE)
@PostRemove                     - After entity is removed (DELETE)
@PostLoad                       - After entity is loaded (SELECT)
```

---

## 📝 JPA Auditing
```
@EnableJpaAuditing              - Enables JPA auditing support
@CreatedDate                    - Auto-sets creation timestamp
@CreatedBy                      - Auto-sets creator user
@LastModifiedDate               - Auto-sets last modification timestamp
@LastModifiedBy                 - Auto-sets last modifier user
@EntityListeners(AuditingEntityListener.class) - Enables auditing for entity
```

---

## 💾 Spring Data JPA Repository
```
@EnableJpaRepositories          - Enables Spring Data JPA repositories
@Repository                     - Marks interface as Spring Data repository
@NoRepositoryBean               - Prevents repository interface from being instantiated
@RepositoryDefinition           - Custom repository base interface
```

---

## 💾 MongoDB
```
@Document                       - Maps class to MongoDB collection
@EnableMongoAuditing            - Enables auditing for MongoDB
@Field                          - Maps field to MongoDB document field
@DBRef                          - References another document
@Indexed                        - Creates index on field
@CompoundIndex                  - Creates compound index
@TextIndexed                    - Creates text index for full-text search
```

---

## 💾 Other Data Access
```
@PersistenceContext             - Injects EntityManager
@PersistenceUnit                - Injects EntityManagerFactory
@EnableJpaRepositories          - Enables JPA repositories
@EntityScan                     - Scans for entity classes
```

---

## ⚡ Caching
```
@EnableCaching                  - Enables Spring caching support
@Cacheable                      - Caches method result (read from cache)
@CachePut                       - Updates cache with method result
@CacheEvict                     - Removes entry from cache
@Caching                        - Groups multiple cache annotations
@CacheConfig                    - Class-level cache configuration
```

---

## 🔐 Security
```
@EnableWebSecurity              - Enables Spring Security
@EnableGlobalMethodSecurity     - Enables method-level security
@PreAuthorize                   - Checks authorization before method execution
@PostAuthorize                  - Checks authorization after method execution
@Secured                        - Secures method by role (JSR-250)
@RolesAllowed                   - Role-based security (JSR-250)
@AuthenticationPrincipal        - Injects current authenticated user
@EnableWebFluxSecurity          - Enables security for reactive applications
@WithMockUser                   - Mocks user for testing
@WithUserDetails                - Loads UserDetails for testing
```

---

## 🧪 Testing
```
@SpringBootTest                 - Full integration test (loads complete context)
@WebMvcTest                     - Tests web layer only
@DataJpaTest                    - Tests JPA repositories only
@RestClientTest                 - Tests REST clients
@JsonTest                       - Tests JSON serialization/deserialization
@WebFluxTest                    - Tests WebFlux controllers
@MockBean                       - Adds mock to application context
@SpyBean                        - Adds spy to application context
@AutoConfigureMockMvc           - Auto-configures MockMvc
@TestPropertySource             - Loads test properties
@Sql                            - Executes SQL scripts for tests
@ActiveProfiles                 - Activates specific profile for test
@TestConfiguration              - Provides additional test configuration
@DirtiesContext                 - Marks context as dirty (to be rebuilt)
@Rollback                       - Rolls back transaction after test
@Commit                         - Commits transaction after test
@BeforeTransaction              - Executes before transaction starts
@AfterTransaction               - Executes after transaction completes
```

---

## ⚙️ Configuration & Properties
```
@Value                          - Injects property value or SpEL expression
@ConfigurationProperties        - Binds external properties to POJO
@PropertySource                 - Loads external property file
@PropertySources                - Container for multiple @PropertySource
@EnableConfigurationProperties  - Enables @ConfigurationProperties beans
@Import                         - Imports additional configuration classes
@ImportResource                 - Imports XML configuration
@ComponentScan                  - Scans for components in packages
@EnableAutoConfiguration        - Enables auto-configuration
```

---

## 🎯 Conditional Configuration
```
@Conditional                    - Generic condition for bean registration
@Profile                        - Loads bean for specific profile
@ConditionalOnBean              - Condition: bean exists
@ConditionalOnMissingBean       - Condition: bean doesn't exist
@ConditionalOnClass             - Condition: class is on classpath
@ConditionalOnMissingClass      - Condition: class is not on classpath
@ConditionalOnProperty          - Condition: property has specific value
@ConditionalOnResource          - Condition: resource exists
@ConditionalOnWebApplication    - Condition: is web application
@ConditionalOnNotWebApplication - Condition: is not web application
@ConditionalOnJava              - Condition: specific Java version
@ConditionalOnExpression        - Condition: SpEL expression evaluates to true
@ConditionalOnCloudPlatform     - Condition: specific cloud platform detected
@ConditionalOnSingleCandidate   - Condition: single candidate bean exists
```

---

## ⏰ Scheduling & Async
```
@EnableScheduling               - Enables scheduled task support
@Scheduled                      - Schedules method execution (cron, fixed rate, etc.)
@EnableAsync                    - Enables async method execution
@Async                          - Executes method asynchronously
@Schedules                      - Container for multiple @Scheduled
```

---

## 🎨 AOP (Aspect-Oriented Programming)
```
@Aspect                         - Marks class as aspect
@EnableAspectJAutoProxy         - Enables AspectJ auto-proxy support
@Before                         - Advice before method execution
@After                          - Advice after method execution (always)
@AfterReturning                 - Advice after successful method return
@AfterThrowing                  - Advice after method throws exception
@Around                         - Advice wrapping method execution
@Pointcut                       - Defines reusable pointcut expression
@DeclareParents                 - Introduces new interface to existing class
```

---

## 📡 Event Handling
```
@EventListener                  - Handles application events
@TransactionalEventListener     - Handles events tied to transaction phases
@Async                          - Makes event listener asynchronous
```

---

## 🔨 Lombok (Code Generation)
```
@Data                           - Generates getters, setters, toString, equals, hashCode
@Getter                         - Generates getter methods
@Setter                         - Generates setter methods
@ToString                       - Generates toString method
@EqualsAndHashCode              - Generates equals and hashCode methods
@NoArgsConstructor              - Generates no-args constructor
@AllArgsConstructor             - Generates constructor with all fields
@RequiredArgsConstructor        - Generates constructor for final/required fields
@Builder                        - Implements builder pattern
@Singular                       - Creates singular methods for collections in builder
@Value                          - Immutable variant of @Data (final fields, no setters)
@With                           - Generates "wither" methods for immutable objects
@Slf4j                          - Creates SLF4J logger field
@Log                            - Creates java.util.logging logger field
@Log4j                          - Creates Log4j logger field
@Log4j2                         - Creates Log4j2 logger field
@CommonsLog                     - Creates Apache Commons logger field
@Cleanup                        - Ensures resource is cleaned up
@SneakyThrows                   - Throws checked exceptions without declaring
```

---

## 📊 Validation (JSR-303/JSR-380)
```
@Valid                          - Triggers validation on object
@Validated                      - Enables validation with groups
@NotNull                        - Field cannot be null
@NotEmpty                       - Collection/String cannot be empty
@NotBlank                       - String cannot be blank (not null, not empty, not whitespace)
@Size(min, max)                 - Validates size of string/collection
@Min(value)                     - Minimum numeric value
@Max(value)                     - Maximum numeric value
@DecimalMin(value)              - Minimum decimal value
@DecimalMax(value)              - Maximum decimal value
@Digits(integer, fraction)      - Validates number of digits
@Past                           - Date must be in the past
@PastOrPresent                  - Date must be past or present
@Future                         - Date must be in the future
@FutureOrPresent                - Date must be future or present
@Pattern(regexp)                - String must match regex pattern
@Email                          - String must be valid email
@Positive                       - Number must be positive
@PositiveOrZero                 - Number must be positive or zero
@Negative                       - Number must be negative
@NegativeOrZero                 - Number must be negative or zero
@AssertTrue                     - Boolean field must be true
@AssertFalse                    - Boolean field must be false
```

---

## 🌐 WebSocket
```
@EnableWebSocketMessageBroker   - Enables WebSocket message handling
@MessageMapping                 - Maps messages to handler methods
@SubscribeMapping               - Handles subscription requests
@SendTo                         - Sends method return to destination
@SendToUser                     - Sends message to specific user
```

---

## 📨 Messaging (JMS, AMQP, Kafka)
```
@EnableJms                      - Enables JMS support
@JmsListener                    - Marks method as JMS message listener
@SendTo                         - Sends response to JMS destination
@EnableRabbit                   - Enables RabbitMQ support
@RabbitListener                 - Marks method as RabbitMQ message listener
@EnableKafka                    - Enables Kafka support
@KafkaListener                  - Marks method as Kafka message listener
```

---

## 🔄 Retry & Circuit Breaker
```
@EnableRetry                    - Enables retry support
@Retryable                      - Marks method for retry on failure
@Recover                        - Fallback method for failed retries
@Backoff                        - Configures retry backoff policy
@CircuitBreaker                 - Implements circuit breaker pattern
```

---

## 📊 Actuator & Monitoring
```
@Endpoint                       - Creates custom actuator endpoint
@ReadOperation                  - HTTP GET operation for endpoint
@WriteOperation                 - HTTP POST operation for endpoint
@DeleteOperation                - HTTP DELETE operation for endpoint
@Timed                          - Records timing metrics (Micrometer)
@Counted                        - Records counter metrics
```

---

## 🔧 Spring Boot Configuration
```
@SpringBootApplication          - Main application annotation
@EnableAutoConfiguration        - Enables auto-configuration
@SpringBootConfiguration        - Indicates Spring Boot configuration class
@ConfigurationPropertiesScan    - Scans for @ConfigurationProperties
@ConstructorBinding             - Binds configuration via constructor
@DefaultValue                   - Sets default value for configuration property
@DeprecatedConfigurationProperty - Marks configuration property as deprecated
```

---

## 🌍 Spring Cloud
```
@EnableDiscoveryClient          - Enables service discovery
@EnableEurekaClient             - Enables Eureka client
@EnableEurekaServer             - Enables Eureka server
@EnableConfigServer             - Enables Config server
@EnableFeignClients             - Enables Feign declarative REST clients
@FeignClient                    - Declares Feign client interface
@EnableCircuitBreaker           - Enables circuit breaker support
@HystrixCommand                 - Wraps method with Hystrix circuit breaker
@LoadBalanced                   - Enables client-side load balancing
@EnableZuulProxy                - Enables Zuul API gateway
@RibbonClient                   - Configures Ribbon client
```

---

## 🧩 Miscellaneous
```
@JsonIgnore                     - Ignores field in JSON serialization
@JsonProperty                   - Renames field in JSON
@JsonFormat                     - Formats date/number in JSON
@JsonInclude                    - Controls inclusion in JSON
@JsonIgnoreProperties           - Ignores specific properties
@JsonCreator                    - Marks constructor/factory for deserialization
@SuppressWarnings               - Suppresses compiler warnings
@Override                       - Indicates method overrides superclass method
@Deprecated                     - Marks element as deprecated
@FunctionalInterface            - Marks interface as functional (single abstract method)
@SafeVarargs                    - Suppresses varargs warnings
```

---

## 📋 Quick Lookup by Category

### 🎯 Most Commonly Used
```
@SpringBootApplication
@RestController
@Service
@Repository
@Autowired
@GetMapping / @PostMapping
@PathVariable / @RequestParam / @RequestBody
@Entity / @Table / @Id
@Transactional
@Value
@ConfigurationProperties
```

### 🔥 Production Must-Haves
```
@EnableCaching
@Cacheable / @CachePut / @CacheEvict
@Async
@Scheduled
@Transactional
@PreAuthorize
@Valid / @Validated
@ControllerAdvice
```

### 🧪 Testing Essentials
```
@SpringBootTest
@WebMvcTest / @DataJpaTest
@MockBean / @SpyBean
@ActiveProfiles
@TestConfiguration
```

### ⚡ Performance Optimization
```
@Cacheable
@Async
@Lazy
@Transactional(readOnly = true)
@EntityGraph
```

---

**Total Categories:** 20+  
**Total Annotations:** 200+

---

💡 **Tip:** Use Ctrl+F to quickly find specific annotations!
