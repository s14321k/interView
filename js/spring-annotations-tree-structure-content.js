// Spring Annotations Tree Structure - Content Data
const springAnnotationsTreeStructureContentData = `<h1 id="spring-boot-annotations-tree-structure">Spring Boot Annotations - Tree Structure</h1>
<p>A quick reference tree structure of all Spring Boot annotations with simple definitions.</p>
<hr>
<h2 id="core-spring-boot">📦 Core Spring Boot</h2>
<pre><code class="language-">
@SpringBootApplication          - Main entry point (combines @Configuration, @EnableAutoConfiguration, @ComponentScan)
@Configuration                  - Marks class as bean definition source
@EnableAutoConfiguration        - Enables Spring Boot auto-configuration
@ComponentScan                  - Tells Spring where to find components
</code></pre>
<hr>
<h2 id="stereotype-annotations-component-scanning">🏷️ Stereotype Annotations (Component Scanning)</h2>
<pre><code class="language-">
@Component                      - Generic Spring-managed component
@Service                        - Business logic layer component
@Repository                     - Data access layer component (enables exception translation)
@Controller                     - Spring MVC controller
@RestController                 - REST API controller (@Controller + @ResponseBody)
</code></pre>
<hr>
<h2 id="dependency-injection">💉 Dependency Injection</h2>
<pre><code class="language-">
@Autowired                      - Auto-injects dependency by type
@Inject                         - JSR-330 alternative to @Autowired (injects by type)
@Resource                       - JSR-250 alternative (injects by name first, then type)
@Qualifier(&quot;name&quot;)              - Specifies which bean to inject by name
@Primary                        - Marks bean as default choice when multiple exist
@Lazy                           - Delays bean initialization until first use
@DependsOn                      - Specifies bean initialization order
@Order                          - Defines sort order for beans in collections
</code></pre>
<hr>
<h2 id="bean-configuration">🔧 Bean Configuration</h2>
<pre><code class="language-">
@Bean                           - Declares method as bean definition
@Scope(&quot;singleton&quot;)             - One instance per container (default)
@Scope(&quot;prototype&quot;)             - New instance every time
@Scope(&quot;request&quot;)               - New instance per HTTP request (web only)
@Scope(&quot;session&quot;)               - New instance per HTTP session (web only)
@Scope(&quot;application&quot;)           - One instance per ServletContext (web only)
</code></pre>
<hr>
<h2 id="bean-lifecycle">🌱 Bean Lifecycle</h2>
<pre><code class="language-">
@PostConstruct                  - Executes after bean creation and DI
@PreDestroy                     - Executes before bean destruction
</code></pre>
<hr>
<h2 id="web-rest-annotations">🌐 Web / REST Annotations</h2>
<pre><code class="language-">
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
</code></pre>
<hr>
<h2 id="jpa-database-entity-mapping">💾 JPA / Database - Entity Mapping</h2>
<pre><code class="language-">
@Entity                         - Marks class as JPA entity (database table)
@Table(name=&quot;...&quot;)              - Specifies table name and details
@Id                             - Marks field as primary key
@GeneratedValue                 - Auto-generates primary key value
@SequenceGenerator              - Defines sequence-based key generator
@Column                         - Maps field to database column
@Transient                      - Excludes field from database persistence
@Enumerated                     - Specifies how Enum is persisted
@Lob                            - Marks field as Large Object (CLOB/BLOB)
@Temporal                       - Specifies temporal type (DATE, TIME, TIMESTAMP)
@Formula                        - SQL formula for computed field
</code></pre>
<hr>
<h2 id="jpa-relationships">💾 JPA - Relationships</h2>
<pre><code class="language-">
@OneToOne                       - Defines one-to-one relationship
@OneToMany                      - Defines one-to-many relationship
@ManyToOne                      - Defines many-to-one relationship
@ManyToMany                     - Defines many-to-many relationship
@JoinColumn                     - Specifies foreign key column
@JoinTable                      - Specifies join table for many-to-many
@MapsId                         - Maps relationship to primary key
</code></pre>
<hr>
<h2 id="jpa-queries-transactions">💾 JPA - Queries &amp; Transactions</h2>
<pre><code class="language-">
@Query                          - Defines custom JPQL or native SQL query
@Modifying                      - Marks query as data-modifying (UPDATE/DELETE)
@Transactional                  - Executes method within database transaction
@NamedQuery                     - Defines static named query
@NamedQueries                   - Container for multiple @NamedQuery
@Param                          - Names parameter in query method
</code></pre>
<hr>
<h2 id="jpa-advanced-features">💾 JPA - Advanced Features</h2>
<pre><code class="language-">
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
</code></pre>
<hr>
<h2 id="jpa-lifecycle-callbacks">💾 JPA - Lifecycle Callbacks</h2>
<pre><code class="language-">
@PrePersist                     - Before entity is saved (INSERT)
@PostPersist                    - After entity is saved (INSERT)
@PreUpdate                      - Before entity is updated (UPDATE)
@PostUpdate                     - After entity is updated (UPDATE)
@PreRemove                      - Before entity is removed (DELETE)
@PostRemove                     - After entity is removed (DELETE)
@PostLoad                       - After entity is loaded (SELECT)
</code></pre>
<hr>
<h2 id="jpa-auditing">📝 JPA Auditing</h2>
<pre><code class="language-">
@EnableJpaAuditing              - Enables JPA auditing support
@CreatedDate                    - Auto-sets creation timestamp
@CreatedBy                      - Auto-sets creator user
@LastModifiedDate               - Auto-sets last modification timestamp
@LastModifiedBy                 - Auto-sets last modifier user
@EntityListeners(AuditingEntityListener.class) - Enables auditing for entity
</code></pre>
<hr>
<h2 id="spring-data-jpa-repository">💾 Spring Data JPA Repository</h2>
<pre><code class="language-">
@EnableJpaRepositories          - Enables Spring Data JPA repositories
@Repository                     - Marks interface as Spring Data repository
@NoRepositoryBean               - Prevents repository interface from being instantiated
@RepositoryDefinition           - Custom repository base interface
</code></pre>
<hr>
<h2 id="mongodb">💾 MongoDB</h2>
<pre><code class="language-">
@Document                       - Maps class to MongoDB collection
@EnableMongoAuditing            - Enables auditing for MongoDB
@Field                          - Maps field to MongoDB document field
@DBRef                          - References another document
@Indexed                        - Creates index on field
@CompoundIndex                  - Creates compound index
@TextIndexed                    - Creates text index for full-text search
</code></pre>
<hr>
<h2 id="other-data-access">💾 Other Data Access</h2>
<pre><code class="language-">
@PersistenceContext             - Injects EntityManager
@PersistenceUnit                - Injects EntityManagerFactory
@EnableJpaRepositories          - Enables JPA repositories
@EntityScan                     - Scans for entity classes
</code></pre>
<hr>
<h2 id="caching">⚡ Caching</h2>
<pre><code class="language-">
@EnableCaching                  - Enables Spring caching support
@Cacheable                      - Caches method result (read from cache)
@CachePut                       - Updates cache with method result
@CacheEvict                     - Removes entry from cache
@Caching                        - Groups multiple cache annotations
@CacheConfig                    - Class-level cache configuration
</code></pre>
<hr>
<h2 id="security">🔐 Security</h2>
<pre><code class="language-">
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
</code></pre>
<hr>
<h2 id="testing">🧪 Testing</h2>
<pre><code class="language-">
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
</code></pre>
<hr>
<h2 id="configuration-properties">⚙️ Configuration &amp; Properties</h2>
<pre><code class="language-">
@Value                          - Injects property value or SpEL expression
@ConfigurationProperties        - Binds external properties to POJO
@PropertySource                 - Loads external property file
@PropertySources                - Container for multiple @PropertySource
@EnableConfigurationProperties  - Enables @ConfigurationProperties beans
@Import                         - Imports additional configuration classes
@ImportResource                 - Imports XML configuration
@ComponentScan                  - Scans for components in packages
@EnableAutoConfiguration        - Enables auto-configuration
</code></pre>
<hr>
<h2 id="conditional-configuration">🎯 Conditional Configuration</h2>
<pre><code class="language-">
@Conditional                    - Generic condition for bean registration
@Profile                        - Loads bean for specific profile
@ConditionalOnBean              - Condition: bean exists
@ConditionalOnMissingBean       - Condition: bean doesn&#x27;t exist
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
</code></pre>
<hr>
<h2 id="scheduling-async">⏰ Scheduling &amp; Async</h2>
<pre><code class="language-">
@EnableScheduling               - Enables scheduled task support
@Scheduled                      - Schedules method execution (cron, fixed rate, etc.)
@EnableAsync                    - Enables async method execution
@Async                          - Executes method asynchronously
@Schedules                      - Container for multiple @Scheduled
</code></pre>
<hr>
<h2 id="aop-aspect-oriented-programming">🎨 AOP (Aspect-Oriented Programming)</h2>
<pre><code class="language-">
@Aspect                         - Marks class as aspect
@EnableAspectJAutoProxy         - Enables AspectJ auto-proxy support
@Before                         - Advice before method execution
@After                          - Advice after method execution (always)
@AfterReturning                 - Advice after successful method return
@AfterThrowing                  - Advice after method throws exception
@Around                         - Advice wrapping method execution
@Pointcut                       - Defines reusable pointcut expression
@DeclareParents                 - Introduces new interface to existing class
</code></pre>
<hr>
<h2 id="event-handling">📡 Event Handling</h2>
<pre><code class="language-">
@EventListener                  - Handles application events
@TransactionalEventListener     - Handles events tied to transaction phases
@Async                          - Makes event listener asynchronous
</code></pre>
<hr>
<h2 id="lombok-code-generation">🔨 Lombok (Code Generation)</h2>
<pre><code class="language-">
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
@With                           - Generates &quot;wither&quot; methods for immutable objects
@Slf4j                          - Creates SLF4J logger field
@Log                            - Creates java.util.logging logger field
@Log4j                          - Creates Log4j logger field
@Log4j2                         - Creates Log4j2 logger field
@CommonsLog                     - Creates Apache Commons logger field
@Cleanup                        - Ensures resource is cleaned up
@SneakyThrows                   - Throws checked exceptions without declaring
</code></pre>
<hr>
<h2 id="validation-jsr-303jsr-380">📊 Validation (JSR-303/JSR-380)</h2>
<pre><code class="language-">
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
</code></pre>
<hr>
<h2 id="websocket">🌐 WebSocket</h2>
<pre><code class="language-">
@EnableWebSocketMessageBroker   - Enables WebSocket message handling
@MessageMapping                 - Maps messages to handler methods
@SubscribeMapping               - Handles subscription requests
@SendTo                         - Sends method return to destination
@SendToUser                     - Sends message to specific user
</code></pre>
<hr>
<h2 id="messaging-jms-amqp-kafka">📨 Messaging (JMS, AMQP, Kafka)</h2>
<pre><code class="language-">
@EnableJms                      - Enables JMS support
@JmsListener                    - Marks method as JMS message listener
@SendTo                         - Sends response to JMS destination
@EnableRabbit                   - Enables RabbitMQ support
@RabbitListener                 - Marks method as RabbitMQ message listener
@EnableKafka                    - Enables Kafka support
@KafkaListener                  - Marks method as Kafka message listener
</code></pre>
<hr>
<h2 id="retry-circuit-breaker">🔄 Retry &amp; Circuit Breaker</h2>
<pre><code class="language-">
@EnableRetry                    - Enables retry support
@Retryable                      - Marks method for retry on failure
@Recover                        - Fallback method for failed retries
@Backoff                        - Configures retry backoff policy
@CircuitBreaker                 - Implements circuit breaker pattern
</code></pre>
<hr>
<h2 id="actuator-monitoring">📊 Actuator &amp; Monitoring</h2>
<pre><code class="language-">
@Endpoint                       - Creates custom actuator endpoint
@ReadOperation                  - HTTP GET operation for endpoint
@WriteOperation                 - HTTP POST operation for endpoint
@DeleteOperation                - HTTP DELETE operation for endpoint
@Timed                          - Records timing metrics (Micrometer)
@Counted                        - Records counter metrics
</code></pre>
<hr>
<h2 id="spring-boot-configuration">🔧 Spring Boot Configuration</h2>
<pre><code class="language-">
@SpringBootApplication          - Main application annotation
@EnableAutoConfiguration        - Enables auto-configuration
@SpringBootConfiguration        - Indicates Spring Boot configuration class
@ConfigurationPropertiesScan    - Scans for @ConfigurationProperties
@ConstructorBinding             - Binds configuration via constructor
@DefaultValue                   - Sets default value for configuration property
@DeprecatedConfigurationProperty - Marks configuration property as deprecated
</code></pre>
<hr>
<h2 id="spring-cloud">🌍 Spring Cloud</h2>
<pre><code class="language-">
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
</code></pre>
<hr>
<h2 id="miscellaneous">🧩 Miscellaneous</h2>
<pre><code class="language-">
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
</code></pre>
<hr>
<h2 id="quick-lookup-by-category">📋 Quick Lookup by Category</h2>
<h3 id="most-commonly-used">🎯 Most Commonly Used</h3>
<pre><code class="language-">
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
</code></pre>
<h3 id="production-must-haves">🔥 Production Must-Haves</h3>
<pre><code class="language-">
@EnableCaching
@Cacheable / @CachePut / @CacheEvict
@Async
@Scheduled
@Transactional
@PreAuthorize
@Valid / @Validated
@ControllerAdvice
</code></pre>
<h3 id="testing-essentials">🧪 Testing Essentials</h3>
<pre><code class="language-">
@SpringBootTest
@WebMvcTest / @DataJpaTest
@MockBean / @SpyBean
@ActiveProfiles
@TestConfiguration
</code></pre>
<h3 id="performance-optimization">⚡ Performance Optimization</h3>
<pre><code class="language-">
@Cacheable
@Async
@Lazy
@Transactional(readOnly = true)
@EntityGraph
</code></pre>
<hr>
<p><strong>Total Categories:</strong> 20+  </p>
<p><strong>Total Annotations:</strong> 200+</p>
<hr>
<p>💡 <strong>Tip:</strong> Use Ctrl+F to quickly find specific annotations!</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = springAnnotationsTreeStructureContentData;
}
