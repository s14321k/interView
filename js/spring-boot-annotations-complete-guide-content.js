// Spring Boot Annotations Complete Guide - Content Data
const springBootAnnotationsCompleteGuideContentData = `<h1 id="spring-boot-annotations-complete-reference-guide">Spring Boot Annotations - Complete Reference Guide</h1>
<p>A comprehensive guide covering all Spring Boot annotations with detailed explanations and examples.</p>
<hr>
<h2 id="core-spring-boot-annotations">📦 Core Spring Boot Annotations</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><code>@SpringBootApplication</code></td>
<td>Main entry point - combines <code>@Configuration</code>, <code>@EnableAutoConfiguration</code>, <code>@ComponentScan</code></td>
</tr>
<tr>
<td><code>@Configuration</code></td>
<td>Marks a class as a source of bean definitions</td>
</tr>
<tr>
<td><code>@EnableAutoConfiguration</code></td>
<td>Enables Spring Boot&#x27;s auto-configuration based on classpath dependencies</td>
</tr>
<tr>
<td><code>@ComponentScan</code></td>
<td>Configures component scanning directives - tells Spring where to look for components</td>
</tr>
</tbody></table>
<hr>
<h2 id="what-is-a-spring-bean">🌱 What is a Spring Bean?</h2>
<p>A <strong>Spring Bean</strong> is an object that is instantiated, assembled, and otherwise managed by a Spring IoC container. These are the fundamental building blocks of any Spring application. Instead of creating objects yourself (e.g., <code>new MyService()</code>), you delegate this responsibility to the Spring framework.</p>
<hr>
<h2 id="dependency-injection-di">🧩 Dependency Injection (DI)</h2>
<p><strong>Dependency Injection</strong> is a design pattern where an object receives other objects that it depends on (its dependencies) rather than creating them itself.</p>
<h3 id="without-di">Without DI:</h3>
<pre><code class="language-java">
public class MyService {
    private final MyRepository repository = new MyRepository(); // Hard-coded dependency
}
</code></pre>
<h3 id="with-di">With DI:</h3>
<pre><code class="language-java">
@Service
public class MyService {
    private final MyRepository repository;

    public MyService(MyRepository repository) {
        this.repository = repository;
    }
}
</code></pre>
<h3 id="benefits-of-di">Benefits of DI:</h3>
<ul>
<li><strong>Loose Coupling:</strong> Components are not tightly bound to each other</li>
<li><strong>Easier Testing:</strong> You can easily inject mock objects in tests</li>
<li><strong>Flexibility &amp; Maintainability:</strong> Easy to swap implementations of a dependency</li>
</ul>
<hr>
<h2 id="stereotype-annotations">🏷️ Stereotype Annotations</h2>
<p>Stereotype annotations mark classes as Spring components and are specializations of the generic <code>@Component</code> annotation.</p>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Component</code></td>
<td>Generic stereotype for any Spring-managed component</td>
</tr>
<tr>
<td><code>@Service</code></td>
<td>Service layer classes (business logic)</td>
</tr>
<tr>
<td><code>@Repository</code></td>
<td>Persistence layer classes (data access) - enables exception translation</td>
</tr>
<tr>
<td><code>@Controller</code></td>
<td>Spring MVC controllers</td>
</tr>
<tr>
<td><code>@RestController</code></td>
<td>RESTful controllers in Spring MVC (<code>@Controller</code> + <code>@ResponseBody</code>)</td>
</tr>
<tr>
<td><code>@Configuration</code></td>
<td>Classes that define other beans</td>
</tr>
</tbody></table>
<h3 id="example">Example:</h3>
<pre><code class="language-java">
@Service
public class UserServiceImpl implements UserService {
    // Business logic
}
</code></pre>
<hr>
<h2 id="types-of-dependency-injection">💉 Types of Dependency Injection</h2>
<h3 id="1-constructor-injection-recommended">1. Constructor Injection (Recommended ✅)</h3>
<p><strong>Pros:</strong></p>
<ul>
<li>Ensures required dependencies are set</li>
<li>Promotes immutability</li>
<li>Dependencies are explicit</li>
<li>Easier testing</li>
<li>Works well with Spring Boot autowiring (since Spring 4.3+, <code>@Autowired</code> is optional if only one constructor)</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li>Can lead to large constructors if too many dependencies (design smell)</li>
</ul>
<pre><code class="language-java">
@Service
public class OrderService {
    private final PaymentService paymentService;

    @Autowired // Optional in Spring since 4.3 if there&#x27;s only one constructor
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    public void placeOrder() {
        paymentService.pay(100.0);
    }
}
</code></pre>
<h3 id="2-setter-injection">2. Setter Injection</h3>
<p><strong>Pros:</strong></p>
<ul>
<li>Good for optional dependencies</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li>Can lead to partially configured objects</li>
</ul>
<pre><code class="language-java">
@Service
public class MyService {
    private MyRepository repository;

    @Autowired
    public void setRepository(MyRepository repository) {
        this.repository = repository;
    }
}
</code></pre>
<h3 id="3-field-injection-generally-discouraged">3. Field Injection (Generally Discouraged ❌)</h3>
<p><strong>Pros:</strong></p>
<ul>
<li>Very concise</li>
<li>Easy for beginners</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li><strong>Hidden dependencies</strong> - can&#x27;t see from constructor what this class needs</li>
<li><strong>Harder to test</strong> - can&#x27;t easily mock dependencies without reflection</li>
<li>Breaks <strong>immutability</strong> - dependencies can be <code>null</code> if something goes wrong</li>
<li>Doesn&#x27;t allow creating required dependencies outside of Spring context</li>
</ul>
<pre><code class="language-java">
@Service
public class OrderService {
    @Autowired
    private PaymentService paymentService;  // field injection

    public void placeOrder() {
        paymentService.pay(100.0);
    }
}
</code></pre>
<p><strong>Best Practice:</strong> Use <strong>constructor injection</strong> (recommended by Spring team)</p>
<hr>
<h2 id="bean-definition-annotations">🔧 Bean Definition Annotations</h2>
<h3 id="1-using-bean-methods">1. Using <code>@Bean</code> Methods</h3>
<p>You can explicitly declare a bean in a <code>@Configuration</code> class. Useful for third-party libraries where you cannot annotate the class directly.</p>
<pre><code class="language-java">
@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
</code></pre>
<h3 id="2-other-important-bean-annotations">2. Other Important Bean Annotations</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Bean</code></td>
<td>Declares a method as a Spring bean definition</td>
</tr>
<tr>
<td><code>@Primary</code></td>
<td>Marks bean as default choice when multiple beans of same type exist</td>
</tr>
<tr>
<td><code>@Qualifier(&quot;beanName&quot;)</code></td>
<td>Specifies which bean to inject by name when used with <code>@Autowired</code></td>
</tr>
<tr>
<td><code>@Lazy</code></td>
<td>Delays bean initialization until first requested</td>
</tr>
<tr>
<td><code>@Value(&quot;${property.key}&quot;)</code></td>
<td>Injects values from property files, environment variables, or SpEL</td>
</tr>
<tr>
<td><code>@Required</code></td>
<td>(Legacy) Indicates dependency must be injected</td>
</tr>
<tr>
<td><code>@Inject</code></td>
<td>Java-standard alternative to <code>@Autowired</code> (JSR-330) - injects by type</td>
</tr>
<tr>
<td><code>@Resource</code></td>
<td>Java-standard (JSR-250) - injects by name first, then by type</td>
</tr>
<tr>
<td><code>@Scope(&quot;scopeName&quot;)</code></td>
<td>Sets the scope of a bean</td>
</tr>
<tr>
<td><code>@DependsOn</code></td>
<td>Specifies bean must be initialized before current bean</td>
</tr>
<tr>
<td><code>@Order</code></td>
<td>Defines sort order when multiple beans collected into list</td>
</tr>
</tbody></table>
<hr>
<h2 id="resolving-ambiguous-dependencies">🤔 Resolving Ambiguous Dependencies</h2>
<p>When multiple beans of the same type exist, Spring will throw an exception. You can resolve this using:</p>
<h3 id="1-qualifier">1. <code>@Qualifier</code></h3>
<p>Specifies which bean to inject by name.</p>
<pre><code class="language-java">
@Service
public class MyService {
    private final PaymentService paymentService;

    public MyService(@Qualifier(&quot;creditCardPaymentService&quot;) PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}

@Service(&quot;creditCardPaymentService&quot;)
public class CreditCardPaymentService implements PaymentService {}

@Service(&quot;payPalPaymentService&quot;)
public class PayPalPaymentService implements PaymentService {}
</code></pre>
<h3 id="2-primary">2. <code>@Primary</code></h3>
<p>Marks one bean as the default choice.</p>
<pre><code class="language-java">
@Primary
@Service
public class CreditCardPaymentService implements PaymentService {}

@Service
public class PayPalPaymentService implements PaymentService {}
</code></pre>
<h3 id="summary-multiple-beans-resolution">Summary: Multiple Beans Resolution</h3>
<ul>
<li><code>@Autowired</code> / <code>@Inject</code> → ❌ ambiguity error</li>
<li><code>@Qualifier</code> → ✅ explicit choice</li>
<li><code>@Primary</code> → ✅ default choice</li>
<li><code>@Resource</code> → ✅ works if name matches</li>
</ul>
<hr>
<h2 id="bean-scopes">🔄 Bean Scopes</h2>
<p>The scope of a bean defines its lifecycle and visibility.</p>
<table>
<thead><tr>
<th>Scope</th>
<th>Description</th>
<th>Use Case</th>
</tr></thead><tbody>
<tr>
<td><code>singleton</code></td>
<td>(Default) Only one instance per container</td>
<td>Stateless services, repositories, configuration classes</td>
</tr>
<tr>
<td><code>prototype</code></td>
<td>New instance every time requested</td>
<td>Stateful beans where each user/thread needs own instance (e.g., shopping cart)</td>
</tr>
<tr>
<td><code>request</code></td>
<td>(Web only) New instance per HTTP request</td>
<td>Request-specific data (e.g., user authentication)</td>
</tr>
<tr>
<td><code>session</code></td>
<td>(Web only) New instance per HTTP session</td>
<td>User-specific data across multiple requests (e.g., user profile)</td>
</tr>
<tr>
<td><code>application</code></td>
<td>(Web only) Single instance per ServletContext lifecycle</td>
<td>Application-wide shared data (e.g., app config, cache)</td>
</tr>
<tr>
<td><code>global-session</code></td>
<td>(Portlet only) Single instance for global HTTP session</td>
<td>Portlet-based web applications</td>
</tr>
</tbody></table>
<h3 id="example">Example:</h3>
<pre><code class="language-java">
@Component
@Scope(&quot;prototype&quot;)
public class MyPrototypeBean {
    // New instance created each time
}
</code></pre>
<p><strong>⚠️ Warning:</strong> Avoid storing shared, mutable state in singleton beans to prevent thread-safety issues.</p>
<hr>
<h2 id="bean-lifecycle">🌱 Bean Lifecycle</h2>
<p>The bean lifecycle describes how a Spring bean is created, managed, and destroyed.</p>
<h3 id="lifecycle-phases">Lifecycle Phases:</h3>
<ul>
<li><strong>Instantiation</strong> - Spring container creates bean instance</li>
<li><strong>Populating Properties</strong> - Dependencies injected via setter/constructor</li>
<li><strong>Bean Name Awareness</strong> - <code>setBeanName()</code> called if implements <code>BeanNameAware</code></li>
<li><strong>Bean Factory Awareness</strong> - <code>setBeanFactory()</code> called if implements <code>BeanFactoryAware</code></li>
<li><strong>Application Context Awareness</strong> - <code>setApplicationContext()</code> called if implements <code>ApplicationContextAware</code></li>
<li><strong>Pre-initialization</strong> - <code>postProcessBeforeInitialization()</code> of <code>BeanPostProcessor</code> called</li>
<li><strong>Initialization:</strong></li>
<li><code>@PostConstruct</code> annotated method called</li>
<li><code>afterPropertiesSet()</code> called if implements <code>InitializingBean</code></li>
<li>Custom <code>init-method</code> invoked</li>
<li><strong>Post-initialization</strong> - <code>postProcessAfterInitialization()</code> of <code>BeanPostProcessor</code> called</li>
<li><strong>Bean is Ready</strong> - Bean ready for use</li>
<li><strong>Destruction:</strong></li>
<li><code>@PreDestroy</code> annotated method called</li>
<li><code>destroy()</code> called if implements <code>DisposableBean</code></li>
<li>Custom <code>destroy-method</code> invoked</li>
</ul>
<h3 id="lifecycle-callback-annotations">Lifecycle Callback Annotations</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>When Called</th>
</tr></thead><tbody>
<tr>
<td><code>@PostConstruct</code></td>
<td>After bean creation and dependency injection</td>
</tr>
<tr>
<td><code>@PreDestroy</code></td>
<td>Before bean removal from container</td>
</tr>
</tbody></table>
<pre><code class="language-java">
@Component
public class MyBean {

    @PostConstruct
    public void initialize() {
        System.out.println(&quot;MyBean has been initialized.&quot;);
    }

    @PreDestroy
    public void cleanup() {
        System.out.println(&quot;MyBean is about to be destroyed.&quot;);
    }
}
</code></pre>
<hr>
<h2 id="circular-dependency-cyclic-dependency">🚨 Circular Dependency (Cyclic Dependency)</h2>
<p>A <strong>cyclic dependency</strong> happens when two or more beans depend on each other in a loop.</p>
<h3 id="example-of-the-problem">Example of the Problem:</h3>
<pre><code class="language-java">
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
</code></pre>
<p><strong>Result:</strong> <code>BeanCurrentlyInCreationException</code> - infinite loop</p>
<h3 id="causes">Causes:</h3>
<ul>
<li>Bad design / tight coupling</li>
<li>Constructor injection with circular references</li>
<li>Mutual <code>@Autowired</code> fields without clear direction</li>
</ul>
<h3 id="solutions">Solutions:</h3>
<p><strong>1. Refactor Dependencies (Best ✅)</strong></p>
<p>Extract shared logic into a third class:</p>
<pre><code class="language-java">
@Service
public class CommonService {
    // shared logic
}
</code></pre>
<p><strong>2. Use <code>@Lazy</code> (Workaround)</strong></p>
<p>Defers creation until needed:</p>
<pre><code class="language-java">
@Service
public class AService {
    private final BService bService;

    public AService(@Lazy BService bService) {
        this.bService = bService;
    }
}
</code></pre>
<p><strong>3. Use Setter Injection</strong></p>
<p>Makes dependencies optional and set after construction.</p>
<p><strong>4. Allow Circular References (Not Recommended)</strong></p>
<pre><code class="language-properties">
# application.properties
spring.main.allow-circular-references=true
</code></pre>
<p><strong>Key Takeaway:</strong> Cyclic dependency usually indicates poor architecture. Preferred fix is to refactor.</p>
<hr>
<h2 id="web-annotations">🌐 Web Annotations</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@RequestMapping</code></td>
<td>Maps HTTP requests to handler methods (path, HTTP method, headers, params)</td>
</tr>
<tr>
<td><code>@GetMapping</code></td>
<td>Shortcut for <code>@RequestMapping(method = RequestMethod.GET)</code></td>
</tr>
<tr>
<td><code>@PostMapping</code></td>
<td>Shortcut for POST requests</td>
</tr>
<tr>
<td><code>@PutMapping</code></td>
<td>Shortcut for PUT requests</td>
</tr>
<tr>
<td><code>@DeleteMapping</code></td>
<td>Shortcut for DELETE requests</td>
</tr>
<tr>
<td><code>@PatchMapping</code></td>
<td>Shortcut for PATCH requests</td>
</tr>
<tr>
<td><code>@PathVariable</code></td>
<td>Binds method parameter to URI template variable</td>
</tr>
<tr>
<td><code>@RequestParam</code></td>
<td>Binds method parameter to web request parameter (query string)</td>
</tr>
<tr>
<td><code>@RequestBody</code></td>
<td>Binds HTTP request body to Java object</td>
</tr>
<tr>
<td><code>@ResponseBody</code></td>
<td>Serializes return value directly to HTTP response body</td>
</tr>
<tr>
<td><code>@ModelAttribute</code></td>
<td>Binds method parameter/return value to named model attribute</td>
</tr>
<tr>
<td><code>@CrossOrigin</code></td>
<td>Enables Cross-Origin Resource Sharing (CORS)</td>
</tr>
<tr>
<td><code>@SessionAttributes</code></td>
<td>Stores model attributes in HTTP session between requests</td>
</tr>
</tbody></table>
<h3 id="example">Example:</h3>
<pre><code class="language-java">
@RestController
@RequestMapping(&quot;/api/users&quot;)
public class UserController {

    @GetMapping(&quot;/{id}&quot;)
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping
    public List&lt;User&gt; searchUsers(@RequestParam String name) {
        return userService.findByName(name);
    }
}
</code></pre>
<hr>
<h2 id="jpa-data-access-annotations">💾 JPA &amp; Data Access Annotations</h2>
<h3 id="entity-mapping">Entity Mapping</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Entity</code></td>
<td>Marks Java class as JPA entity (represents database table)</td>
</tr>
<tr>
<td><code>@Table</code></td>
<td>Specifies table details (name, schema, unique constraints)</td>
</tr>
<tr>
<td><code>@Id</code></td>
<td>Declares primary key field</td>
</tr>
<tr>
<td><code>@GeneratedValue</code></td>
<td>Configures primary key generation strategy</td>
</tr>
<tr>
<td><code>@SequenceGenerator</code></td>
<td>Defines primary key generator using database sequence</td>
</tr>
<tr>
<td><code>@Column</code></td>
<td>Specifies column mapping (name, length, nullable)</td>
</tr>
<tr>
<td><code>@Transient</code></td>
<td>Marks field to be ignored by persistence provider</td>
</tr>
<tr>
<td><code>@Enumerated</code></td>
<td>Specifies how Enum type is persisted (string or integer)</td>
</tr>
<tr>
<td><code>@Lob</code></td>
<td>Indicates property should be persisted as Large Object (CLOB/BLOB)</td>
</tr>
</tbody></table>
<h3 id="relationships">Relationships</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Relationship Type</th>
</tr></thead><tbody>
<tr>
<td><code>@OneToOne</code></td>
<td>One-to-one relationship</td>
</tr>
<tr>
<td><code>@ManyToOne</code></td>
<td>Many-to-one relationship</td>
</tr>
<tr>
<td><code>@OneToMany</code></td>
<td>One-to-many relationship</td>
</tr>
<tr>
<td><code>@ManyToMany</code></td>
<td>Many-to-many relationship</td>
</tr>
<tr>
<td><code>@JoinColumn</code></td>
<td>Specifies foreign key column</td>
</tr>
</tbody></table>
<h3 id="query-transaction">Query &amp; Transaction</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Query</code></td>
<td>Defines custom queries using JPQL or native SQL</td>
</tr>
<tr>
<td><code>@Modifying</code></td>
<td>Indicates query modifies database (UPDATE/DELETE)</td>
</tr>
<tr>
<td><code>@Transactional</code></td>
<td>Declares method/class should execute within database transaction</td>
</tr>
<tr>
<td><code>@NamedQuery</code></td>
<td>Defines static, named query referenced by name</td>
</tr>
</tbody></table>
<h3 id="advanced-jpa">Advanced JPA</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@DynamicInsert</code></td>
<td>(Hibernate) Optimizes INSERT by including only non-null fields</td>
</tr>
<tr>
<td><code>@DynamicUpdate</code></td>
<td>(Hibernate) Optimizes UPDATE by including only modified fields</td>
</tr>
<tr>
<td><code>@Embedded</code></td>
<td>Embeds one class within another entity</td>
</tr>
<tr>
<td><code>@EmbeddedId</code></td>
<td>Marks embedded composite primary key</td>
</tr>
<tr>
<td><code>@Embeddable</code></td>
<td>Marks class as embeddable</td>
</tr>
<tr>
<td><code>@MappedSuperclass</code></td>
<td>Designates class whose mapping info applies to inheriting entities</td>
</tr>
<tr>
<td><code>@EntityListeners</code></td>
<td>Registers listener classes for entity lifecycle events</td>
</tr>
<tr>
<td><code>@EntityGraph</code></td>
<td>Defines graph of associations to fetch eagerly (solves N+1 problem)</td>
</tr>
<tr>
<td><code>@Version</code></td>
<td>Used for optimistic locking to prevent concurrent modifications</td>
</tr>
</tbody></table>
<h3 id="repository-configuration">Repository &amp; Configuration</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@EnableJpaRepositories</code></td>
<td>Enables Spring Data JPA repositories</td>
</tr>
<tr>
<td><code>@EntityScan</code></td>
<td>Scans for entity classes</td>
</tr>
<tr>
<td><code>@PersistenceContext</code></td>
<td>Injects EntityManager instance</td>
</tr>
</tbody></table>
<h3 id="lifecycle-callbacks">Lifecycle Callbacks</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
<th>When Executed</th>
</tr></thead><tbody>
<tr>
<td><code>@PrePersist</code></td>
<td>Callback before entity first saved</td>
<td>Before INSERT</td>
</tr>
<tr>
<td><code>@PostPersist</code></td>
<td>Callback after entity saved</td>
<td>After INSERT</td>
</tr>
<tr>
<td><code>@PreUpdate</code></td>
<td>Callback before entity updated</td>
<td>Before UPDATE</td>
</tr>
<tr>
<td><code>@PostUpdate</code></td>
<td>Callback after entity updated</td>
<td>After UPDATE</td>
</tr>
<tr>
<td><code>@PreRemove</code></td>
<td>Callback before entity removed</td>
<td>Before DELETE</td>
</tr>
<tr>
<td><code>@PostRemove</code></td>
<td>Callback after entity removed</td>
<td>After DELETE</td>
</tr>
<tr>
<td><code>@PostLoad</code></td>
<td>Callback after entity loaded</td>
<td>After SELECT</td>
</tr>
</tbody></table>
<h3 id="example">Example:</h3>
<pre><code class="language-java">
@Entity
@Table(name = &quot;users&quot;)
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
        System.out.println(&quot;User saved with ID: &quot; + id);
    }
}
</code></pre>
<hr>
<h2 id="jpa-auditing-annotations">📝 JPA Auditing Annotations</h2>
<p>Spring Data JPA provides powerful auditing capabilities to automatically track creation and modification details.</p>
<h3 id="how-to-enable-auditing">How to Enable Auditing:</h3>
<ul>
<li>Add <code>@EnableJpaAuditing</code> to main application class</li>
<li>Add <code>@EntityListeners(AuditingEntityListener.class)</code> to entity</li>
</ul>
<h3 id="core-auditing-annotations">Core Auditing Annotations:</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
<th>When Set</th>
</tr></thead><tbody>
<tr>
<td><code>@CreatedDate</code></td>
<td>Stores creation timestamp</td>
<td>On INSERT</td>
</tr>
<tr>
<td><code>@CreatedBy</code></td>
<td>Stores user who created entity</td>
<td>On INSERT</td>
</tr>
<tr>
<td><code>@LastModifiedDate</code></td>
<td>Stores last modification timestamp</td>
<td>On UPDATE</td>
</tr>
<tr>
<td><code>@LastModifiedBy</code></td>
<td>Stores user who last modified entity</td>
<td>On UPDATE</td>
</tr>
</tbody></table>
<h3 id="example-implementation">Example Implementation:</h3>
<pre><code class="language-java">
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
</code></pre>
<h3 id="implement-auditoraware">Implement AuditorAware:</h3>
<pre><code class="language-java">
@Configuration
public class JpaAuditConfig {

    @Bean
    public AuditorAware&lt;String&gt; auditorProvider() {
        return () -&gt; Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                             .map(Authentication::getName);
    }
}
</code></pre>
<h3 id="enable-in-main-application">Enable in Main Application:</h3>
<pre><code class="language-java">
@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = &quot;auditorProvider&quot;)
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
</code></pre>
<hr>
<h2 id="mongodb-annotations">📊 MongoDB Annotations</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Document</code></td>
<td>Maps Java class to MongoDB collection</td>
</tr>
<tr>
<td><code>@EnableMongoAuditing</code></td>
<td>Enables auditing features for MongoDB</td>
</tr>
<tr>
<td><code>@LastModifiedDate</code></td>
<td>Sets last modified timestamp automatically</td>
</tr>
</tbody></table>
<hr>
<h2 id="lombok-entity-model-helpers">🔨 Lombok &amp; Entity Model Helpers</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Data</code></td>
<td>Combines getter/setter/toString/equals/hashCode</td>
</tr>
<tr>
<td><code>@Builder</code></td>
<td>Implements builder pattern</td>
</tr>
<tr>
<td><code>@NoArgsConstructor</code></td>
<td>Generates no-args constructor</td>
</tr>
<tr>
<td><code>@AllArgsConstructor</code></td>
<td>Generates constructor with all fields</td>
</tr>
<tr>
<td><code>@Singular</code></td>
<td>Creates singular methods for collections in builder</td>
</tr>
<tr>
<td><code>@Getter</code></td>
<td>Generates getters</td>
</tr>
<tr>
<td><code>@Setter</code></td>
<td>Generates setters</td>
</tr>
</tbody></table>
<hr>
<h2 id="caching-annotations">⚡ Caching Annotations</h2>
<p>Spring&#x27;s caching abstraction provides powerful way to improve performance by caching expensive operations.</p>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
<th>How It Works</th>
</tr></thead><tbody>
<tr>
<td><code>@Cacheable</code></td>
<td>Caches method result</td>
<td>Checks cache first; if found, returns cached value without executing method</td>
</tr>
<tr>
<td><code>@CachePut</code></td>
<td>Forces method execution and updates cache</td>
<td>Always executes method and updates cache with result</td>
</tr>
<tr>
<td><code>@CacheEvict</code></td>
<td>Removes entry from cache</td>
<td>Removes cache entry (useful for DELETE/UPDATE operations)</td>
</tr>
<tr>
<td><code>@Caching</code></td>
<td>Groups multiple caching annotations</td>
<td>Allows applying multiple cache operations on single method</td>
</tr>
</tbody></table>
<h3 id="enable-caching">Enable Caching:</h3>
<pre><code class="language-java">
@SpringBootApplication
@EnableCaching
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
</code></pre>
<h3 id="cacheable-parameters">@Cacheable Parameters:</h3>
<table>
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><code>value</code> / <code>cacheNames</code></td>
<td>Name of cache(s) to use</td>
</tr>
<tr>
<td><code>key</code></td>
<td>SpEL expression for custom cache key (default: method parameters)</td>
</tr>
<tr>
<td><code>keyGenerator</code></td>
<td>Custom KeyGenerator bean name</td>
</tr>
<tr>
<td><code>cacheManager</code></td>
<td>Specific CacheManager bean to use</td>
</tr>
<tr>
<td><code>cacheResolver</code></td>
<td>Custom CacheResolver bean</td>
</tr>
<tr>
<td><code>condition</code></td>
<td>SpEL expression - result cached only if true</td>
</tr>
<tr>
<td><code>unless</code></td>
<td>SpEL expression - prevents caching if true (checked after execution)</td>
</tr>
<tr>
<td><code>sync</code></td>
<td>If true, ensures only one thread builds cache value for specific key</td>
</tr>
</tbody></table>
<h3 id="examples">Examples:</h3>
<p><strong>1. Basic Caching:</strong></p>
<pre><code class="language-java">
@Cacheable(value = &quot;products&quot;)
public Product getProduct(String id) {
    return productRepository.findById(id).orElse(null);
}
</code></pre>
<p><strong>2. Custom Key:</strong></p>
<pre><code class="language-java">
@Cacheable(value = &quot;users&quot;, key = &quot;#user.id&quot;, condition = &quot;#user.active&quot;)
public User findUser(User user) {
    return userRepository.findById(user.getId()).orElse(null);
}
</code></pre>
<p><strong>3. Prevent Null Caching:</strong></p>
<pre><code class="language-java">
@Cacheable(value = &quot;inventory&quot;, key = &quot;#sku&quot;, unless = &quot;#result == null&quot;)
public Inventory fetchInventory(String sku) {
    return inventoryService.getInventory(sku);
}
</code></pre>
<p><strong>4. Synchronized Caching:</strong></p>
<pre><code class="language-java">
@Cacheable(value = &quot;pricing&quot;, key = &quot;#itemId&quot;, sync = true)
public Price calculatePrice(String itemId) {
    return pricingEngine.calculate(itemId);
}
</code></pre>
<h3 id="cacheevict-parameters">@CacheEvict Parameters:</h3>
<table>
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><code>value</code> / <code>cacheNames</code></td>
<td>Name of cache(s) to evict from</td>
</tr>
<tr>
<td><code>key</code></td>
<td>SpEL expression for specific entry to evict</td>
</tr>
<tr>
<td><code>allEntries</code></td>
<td>If true, removes all entries from cache (default: false)</td>
</tr>
<tr>
<td><code>beforeInvocation</code></td>
<td>If true, eviction happens before method call (default: false)</td>
</tr>
<tr>
<td><code>condition</code></td>
<td>SpEL expression - eviction occurs only if true</td>
</tr>
</tbody></table>
<p><strong>Examples:</strong></p>
<pre><code class="language-java">
// Evict single entry
@CacheEvict(value = &quot;products&quot;, key = &quot;#productId&quot;)
public void deleteProduct(String productId) {
    productRepository.deleteById(productId);
}

// Evict all entries
@CacheEvict(value = &quot;products&quot;, allEntries = true)
public void refreshAllProducts() {
    // Reload products logic
}

// Scheduled eviction
@CacheEvict(value = &quot;reports&quot;, allEntries = true)
@Scheduled(fixedRateString = &quot;900000&quot;) // Every 15 minutes
public void clearReportsCache() {
    log.info(&quot;Clearing reports cache&quot;);
}
</code></pre>
<h3 id="cacheput-parameters">@CachePut Parameters:</h3>
<table>
<thead><tr>
<th>Parameter</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><code>value</code> / <code>cacheNames</code></td>
<td>Name of cache(s) to update</td>
</tr>
<tr>
<td><code>key</code></td>
<td>SpEL expression for cache key</td>
</tr>
<tr>
<td><code>condition</code></td>
<td>SpEL expression - cache updated only if true</td>
</tr>
<tr>
<td><code>unless</code></td>
<td>SpEL expression - prevents cache update if true</td>
</tr>
</tbody></table>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
@CachePut(value = &quot;products&quot;, key = &quot;#product.id&quot;)
public Product updateProduct(Product product) {
    return productRepository.save(product);
}
</code></pre>
<h3 id="caching-grouping-annotations">@Caching - Grouping Annotations:</h3>
<pre><code class="language-java">
@Caching(
    evict = {
        @CacheEvict(value = &quot;products&quot;, key = &quot;#product.id&quot;),
        @CacheEvict(value = &quot;productSummaries&quot;, allEntries = true)
    },
    put = {
        @CachePut(value = &quot;products&quot;, key = &quot;#product.id&quot;)
    }
)
public Product updateProduct(Product product) {
    return productRepository.save(product);
}
</code></pre>
<h3 id="custom-key-generator">Custom Key Generator:</h3>
<pre><code class="language-java">
@Component(&quot;customKeyGenerator&quot;)
public class CustomKeyGenerator implements KeyGenerator {

    @Override
    public Object generate(Object target, Method method, Object... params) {
        StringBuilder key = new StringBuilder();
        key.append(target.getClass().getSimpleName());
        key.append(&quot;.&quot;);
        key.append(method.getName());
        for (Object param : params) {
            key.append(&quot;.&quot;);
            key.append(param.toString());
        }
        return key.toString();
    }
}

// Usage
@Cacheable(value = &quot;products&quot;, keyGenerator = &quot;customKeyGenerator&quot;)
public Product findProduct(String productId, String storeId) {
    // ...
}
</code></pre>
<h3 id="cache-configuration">Cache Configuration:</h3>
<p><strong>Caffeine:</strong></p>
<pre><code class="language-yaml">
# application.yml
spring:
  cache:
    cache-names:
      - products
      - customer-details
    caffeine:
      spec: &gt;
        initialCapacity=10,
        maximumSize=500,
        expireAfterAccess=600s
</code></pre>
<p><strong>Redis:</strong></p>
<pre><code class="language-yaml">
# application.yml
spring:
  cache:
    type: redis
  redis:
    host: localhost
    port: 6379
    time-to-live: 600000 # 10 minutes
</code></pre>
<hr>
<h2 id="security-annotations">🔐 Security Annotations</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@EnableWebSecurity</code></td>
<td>Enables Spring Security&#x27;s web security support</td>
</tr>
<tr>
<td><code>@EnableGlobalMethodSecurity</code></td>
<td>Enables method-level security with annotations</td>
</tr>
<tr>
<td><code>@PreAuthorize</code></td>
<td>Secures methods with SpEL expressions before execution</td>
</tr>
<tr>
<td><code>@PostAuthorize</code></td>
<td>Secures methods with SpEL expressions after execution</td>
</tr>
<tr>
<td><code>@Secured</code></td>
<td>JSR-250 annotation to secure methods based on roles</td>
</tr>
<tr>
<td><code>@RolesAllowed</code></td>
<td>JSR-250 annotation for role-based security</td>
</tr>
<tr>
<td><code>@AuthenticationPrincipal</code></td>
<td>Injects current authenticated user into controller method</td>
</tr>
<tr>
<td><code>@EnableWebFluxSecurity</code></td>
<td>Enables security for reactive web applications (WebFlux)</td>
</tr>
</tbody></table>
<h3 id="examples">Examples:</h3>
<pre><code class="language-java">
@Service
public class AdminService {

    @PreAuthorize(&quot;hasRole(&#x27;ADMIN&#x27;)&quot;)
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @PreAuthorize(&quot;hasAuthority(&#x27;WRITE_PRIVILEGE&#x27;)&quot;)
    public void updateUser(User user) {
        userRepository.save(user);
    }

    @Secured(&quot;ROLE_USER&quot;)
    public User getProfile() {
        return getCurrentUser();
    }
}
</code></pre>
<hr>
<h2 id="testing-annotations">🧪 Testing Annotations</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@SpringBootTest</code></td>
<td>Full integration test - loads complete application context</td>
</tr>
<tr>
<td><code>@WebMvcTest</code></td>
<td>Test slice for web layer only - auto-configures Spring MVC infrastructure</td>
</tr>
<tr>
<td><code>@DataJpaTest</code></td>
<td>Test slice for persistence layer - configures in-memory database</td>
</tr>
<tr>
<td><code>@MockBean</code></td>
<td>Adds Mockito mock to ApplicationContext - replaces existing bean</td>
</tr>
<tr>
<td><code>@SpyBean</code></td>
<td>Adds Mockito spy to ApplicationContext - wraps real instance</td>
</tr>
<tr>
<td><code>@AutoConfigureMockMvc</code></td>
<td>Auto-configures MockMvc for server-side Spring MVC testing</td>
</tr>
<tr>
<td><code>@TestPropertySource</code></td>
<td>Loads properties file or defines inline properties for tests</td>
</tr>
<tr>
<td><code>@Sql</code></td>
<td>Executes SQL scripts before or after test method</td>
</tr>
<tr>
<td><code>@ActiveProfiles(&quot;test&quot;)</code></td>
<td>Activates specific profile for test</td>
</tr>
</tbody></table>
<h3 id="examples">Examples:</h3>
<pre><code class="language-java">
@SpringBootTest
@ActiveProfiles(&quot;test&quot;)
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
        mockMvc.perform(get(&quot;/api/users/1&quot;))
               .andExpect(status().isOk());
    }
}

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void testSaveUser() {
        User user = new User(&quot;John&quot;);
        userRepository.save(user);
        assertNotNull(user.getId());
    }
}
</code></pre>
<hr>
<h2 id="configuration-property-binding">⚙️ Configuration &amp; Property Binding</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@ConfigurationProperties(prefix=&quot;app&quot;)</code></td>
<td>Binds external properties to POJO</td>
</tr>
<tr>
<td><code>@Value(&quot;${app.name}&quot;)</code></td>
<td>Injects property values or SpEL expressions</td>
</tr>
<tr>
<td><code>@PropertySource(&quot;classpath:custom.properties&quot;)</code></td>
<td>Loads external property file</td>
</tr>
<tr>
<td><code>@Import</code></td>
<td>Imports other configuration classes</td>
</tr>
<tr>
<td><code>@EnableConfigurationProperties</code></td>
<td>Enables @ConfigurationProperties beans</td>
</tr>
</tbody></table>
<h3 id="examples">Examples:</h3>
<p><strong>Property Binding:</strong></p>
<pre><code class="language-java">
@Configuration
@ConfigurationProperties(prefix = &quot;app&quot;)
public class AppConfig {
    private String name;
    private int timeout;
    private List&lt;String&gt; servers;

    // Getters and setters
}
</code></pre>
<pre><code class="language-yaml">
# application.yml
app:
  name: MyApp
  timeout: 5000
  servers:
    - server1.com
    - server2.com
</code></pre>
<p><strong>@Value Usage:</strong></p>
<pre><code class="language-java">
@Component
public class MyComponent {

    @Value(&quot;${app.name}&quot;)
    private String appName;

    @Value(&quot;${app.timeout:3000}&quot;) // Default value: 3000
    private int timeout;

    @Value(&quot;#{systemProperties[&#x27;user.name&#x27;]}&quot;) // SpEL
    private String userName;
}
</code></pre>
<hr>
<h2 id="conditional-bean-registration">🎯 Conditional Bean Registration</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Conditional</code></td>
<td>Generic conditional configuration based on custom Condition</td>
</tr>
<tr>
<td><code>@Profile(&quot;dev&quot;)</code></td>
<td>Conditionally loads beans by active profile</td>
</tr>
<tr>
<td><code>@ConditionalOnBean</code></td>
<td>Matches when specified bean exists</td>
</tr>
<tr>
<td><code>@ConditionalOnMissingBean</code></td>
<td>Matches when specified bean does NOT exist</td>
</tr>
<tr>
<td><code>@ConditionalOnClass</code></td>
<td>Matches when specified class is on classpath</td>
</tr>
<tr>
<td><code>@ConditionalOnMissingClass</code></td>
<td>Matches when specified class is NOT on classpath</td>
</tr>
<tr>
<td><code>@ConditionalOnProperty</code></td>
<td>Matches based on property value</td>
</tr>
<tr>
<td><code>@ConditionalOnResource</code></td>
<td>Matches when specified resource exists</td>
</tr>
<tr>
<td><code>@ConditionalOnWebApplication</code></td>
<td>Matches when application is a web application</td>
</tr>
<tr>
<td><code>@ConditionalOnNotWebApplication</code></td>
<td>Matches when application is NOT a web application</td>
</tr>
<tr>
<td><code>@ConditionalOnJava</code></td>
<td>Matches based on Java version</td>
</tr>
<tr>
<td><code>@ConditionalOnExpression</code></td>
<td>Matches based on SpEL expression</td>
</tr>
</tbody></table>
<h3 id="examples">Examples:</h3>
<pre><code class="language-java">
@Configuration
public class ConditionalConfig {

    @Bean
    @ConditionalOnProperty(name = &quot;feature.enabled&quot;, havingValue = &quot;true&quot;)
    public FeatureService featureService() {
        return new FeatureService();
    }

    @Bean
    @ConditionalOnMissingBean(DataSource.class)
    public DataSource defaultDataSource() {
        return new EmbeddedDatabaseBuilder().build();
    }

    @Bean
    @ConditionalOnClass(name = &quot;org.springframework.security.core.Authentication&quot;)
    public SecurityService securityService() {
        return new SecurityService();
    }
}
</code></pre>
<hr>
<h2 id="profiles">🎭 Profiles</h2>
<p>Spring Boot Profiles allow different configurations for different environments (dev, test, prod).</p>
<h3 id="defining-profile-specific-beans">Defining Profile-Specific Beans:</h3>
<pre><code class="language-java">
@Configuration
public class DatabaseConfig {

    @Bean
    @Profile(&quot;dev&quot;)
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }

    @Bean
    @Profile(&quot;prod&quot;)
    public DataSource prodDataSource() {
        return DataSourceBuilder.create()
            .url(&quot;jdbc:postgresql://prod-db:5432/mydatabase&quot;)
            .username(&quot;user&quot;)
            .password(&quot;secret&quot;)
            .build();
    }
}
</code></pre>
<h3 id="profile-specific-properties-files">Profile-Specific Properties Files:</h3>
<ul>
<li><code>application.properties</code> - Default properties</li>
<li><code>application-dev.properties</code> - Dev environment</li>
<li><code>application-prod.properties</code> - Production environment</li>
</ul>
<pre><code class="language-properties">
# application-dev.properties
server.port=9090
logging.level.com.example=DEBUG
</code></pre>
<pre><code class="language-properties">
# application-prod.properties
server.port=8080
logging.level.com.example=INFO
</code></pre>
<h3 id="activating-profiles">Activating Profiles:</h3>
<p><strong>In application.properties:</strong></p>
<pre><code class="language-properties">
spring.profiles.active=dev
</code></pre>
<p><strong>Command line:</strong></p>
<pre><code class="language-bash">
java -jar app.jar --spring.profiles.active=prod
</code></pre>
<p><strong>In tests:</strong></p>
<pre><code class="language-java">
@SpringBootTest
@ActiveProfiles(&quot;test&quot;)
class MyServiceTest {
    // Tests
}
</code></pre>
<h3 id="profile-groups-spring-boot-24">Profile Groups (Spring Boot 2.4+):</h3>
<pre><code class="language-yaml">
# application.yml
spring:
  profiles:
    group:
      &quot;production&quot;:
        - &quot;prod-db&quot;
        - &quot;prod-api&quot;
        - &quot;prod-metrics&quot;
</code></pre>
<h3 id="the-default-profile">The <code>default</code> Profile:</h3>
<p>If no profile is activated, Spring Boot uses the <code>default</code> profile.</p>
<hr>
<h2 id="scheduling-asynchronous-annotations">⏰ Scheduling &amp; Asynchronous Annotations</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@EnableScheduling</code></td>
<td>Enables scheduled task support</td>
</tr>
<tr>
<td><code>@Scheduled</code></td>
<td>Schedules method execution at fixed intervals or cron expressions</td>
</tr>
<tr>
<td><code>@EnableAsync</code></td>
<td>Enables asynchronous method execution</td>
</tr>
<tr>
<td><code>@Async</code></td>
<td>Executes method asynchronously in separate thread</td>
</tr>
</tbody></table>
<h3 id="examples">Examples:</h3>
<pre><code class="language-java">
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
        System.out.println(&quot;Current time: &quot; + LocalDateTime.now());
    }

    // Fixed delay: waits 5 seconds after previous execution completes
    @Scheduled(fixedDelay = 5000)
    public void processWithDelay() {
        System.out.println(&quot;Processing...&quot;);
    }

    // Cron expression: runs every day at 2 AM
    @Scheduled(cron = &quot;0 0 2 * * ?&quot;)
    public void performDailyTask() {
        System.out.println(&quot;Daily task executed&quot;);
    }

    // Initial delay: waits 10 seconds before first execution
    @Scheduled(initialDelay = 10000, fixedRate = 5000)
    public void taskWithInitialDelay() {
        System.out.println(&quot;Task with initial delay&quot;);
    }
}

@Service
public class AsyncService {

    @Async
    public CompletableFuture&lt;String&gt; processAsync() {
        // Long-running task
        return CompletableFuture.completedFuture(&quot;Result&quot;);
    }

    @Async
    public void sendEmail(String recipient) {
        // Send email asynchronously
    }
}
</code></pre>
<hr>
<h2 id="aop-aspect-oriented-programming-annotations">🎨 AOP (Aspect-Oriented Programming) Annotations</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@Aspect</code></td>
<td>Marks class as aspect</td>
</tr>
<tr>
<td><code>@Before</code></td>
<td>Advice that executes before method execution</td>
</tr>
<tr>
<td><code>@After</code></td>
<td>Advice that executes after method execution (regardless of outcome)</td>
</tr>
<tr>
<td><code>@AfterReturning</code></td>
<td>Advice that executes after successful method return</td>
</tr>
<tr>
<td><code>@AfterThrowing</code></td>
<td>Advice that executes after method throws exception</td>
</tr>
<tr>
<td><code>@Around</code></td>
<td>Advice that wraps method execution</td>
</tr>
<tr>
<td><code>@Pointcut</code></td>
<td>Defines reusable pointcut expression</td>
</tr>
<tr>
<td><code>@EnableAspectJAutoProxy</code></td>
<td>Enables AspectJ auto-proxy support</td>
</tr>
</tbody></table>
<h3 id="example">Example:</h3>
<pre><code class="language-java">
@Aspect
@Component
public class LoggingAspect {

    @Pointcut(&quot;execution(* com.example.service.*.*(..))&quot;)
    public void serviceMethods() {}

    @Before(&quot;serviceMethods()&quot;)
    public void logBefore(JoinPoint joinPoint) {
        System.out.println(&quot;Executing: &quot; + joinPoint.getSignature().getName());
    }

    @Around(&quot;serviceMethods()&quot;)
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = joinPoint.proceed();
        long end = System.currentTimeMillis();
        System.out.println(&quot;Execution time: &quot; + (end - start) + &quot;ms&quot;);
        return result;
    }

    @AfterThrowing(pointcut = &quot;serviceMethods()&quot;, throwing = &quot;error&quot;)
    public void logAfterThrowing(JoinPoint joinPoint, Throwable error) {
        System.out.println(&quot;Exception in: &quot; + joinPoint.getSignature().getName());
        System.out.println(&quot;Exception: &quot; + error.getMessage());
    }
}
</code></pre>
<hr>
<h2 id="event-handling-annotations">📡 Event Handling Annotations</h2>
<table>
<thead><tr>
<th>Annotation</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>@EventListener</code></td>
<td>Handles application events</td>
</tr>
<tr>
<td><code>@TransactionalEventListener</code></td>
<td>Handles events tied to transaction phases</td>
</tr>
</tbody></table>
<h3 id="example">Example:</h3>
<pre><code class="language-java">
@Component
public class UserEventListener {

    @EventListener
    public void handleUserCreated(UserCreatedEvent event) {
        System.out.println(&quot;User created: &quot; + event.getUser().getName());
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
</code></pre>
<hr>
<h2 id="common-errors">🚫 Common Errors</h2>
<table>
<thead><tr>
<th>Exception</th>
<th>Cause</th>
<th>Solution</th>
</tr></thead><tbody>
<tr>
<td><code>NoSuchBeanDefinitionException</code></td>
<td>Spring can&#x27;t find a bean</td>
<td>Check component scan, bean name, missing @Component/@Service, or if using <code>new</code> instead of DI</td>
</tr>
<tr>
<td><code>BeanCurrentlyInCreationException</code></td>
<td>Circular dependency</td>
<td>Refactor design, use @Lazy, or setter injection</td>
</tr>
<tr>
<td><code>NoUniqueBeanDefinitionException</code></td>
<td>Multiple beans of same type</td>
<td>Use @Primary or @Qualifier</td>
</tr>
<tr>
<td><code>BeanCreationException</code></td>
<td>Error during bean creation</td>
<td>Check constructor arguments, dependencies, configuration</td>
</tr>
</tbody></table>
<hr>
<h2 id="complete-example-rest-api-with-all-concepts">📋 Complete Example: REST API with All Concepts</h2>
<pre><code class="language-java">
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
@Table(name = &quot;products&quot;)
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
        System.out.println(&quot;About to save: &quot; + name);
    }

    // Getters and setters
}

// Repository
@Repository
public interface ProductRepository extends JpaRepository&lt;Product, Long&gt; {

    @Query(&quot;SELECT p FROM Product p WHERE p.price &gt; :minPrice&quot;)
    List&lt;Product&gt; findExpensiveProducts(@Param(&quot;minPrice&quot;) BigDecimal minPrice);

    @Modifying
    @Query(&quot;UPDATE Product p SET p.price = p.price * 1.1 WHERE p.price &lt; :threshold&quot;)
    int increasePrices(@Param(&quot;threshold&quot;) BigDecimal threshold);
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

    @Cacheable(value = &quot;products&quot;, key = &quot;#id&quot;, unless = &quot;#result == null&quot;)
    @Transactional(readOnly = true)
    public Product findById(Long id) {
        return repository.findById(id)
            .orElseThrow(() -&gt; new NotFoundException(&quot;Product not found&quot;));
    }

    @CachePut(value = &quot;products&quot;, key = &quot;#result.id&quot;)
    public Product save(Product product) {
        Product saved = repository.save(product);
        eventPublisher.publishEvent(new ProductCreatedEvent(saved));
        return saved;
    }

    @CacheEvict(value = &quot;products&quot;, key = &quot;#id&quot;)
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @CacheEvict(value = &quot;products&quot;, allEntries = true)
    @Scheduled(cron = &quot;0 0 2 * * ?&quot;) // Every day at 2 AM
    public void clearCache() {
        System.out.println(&quot;Cache cleared&quot;);
    }

    @Async
    public CompletableFuture&lt;List&lt;Product&gt;&gt; findExpensiveAsync(BigDecimal minPrice) {
        List&lt;Product&gt; products = repository.findExpensiveProducts(minPrice);
        return CompletableFuture.completedFuture(products);
    }
}

// Controller
@RestController
@RequestMapping(&quot;/api/products&quot;)
@CrossOrigin(origins = &quot;http://localhost:3000&quot;)
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping(&quot;/{id}&quot;)
    public ResponseEntity&lt;Product&gt; getProduct(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    @PreAuthorize(&quot;hasRole(&#x27;ADMIN&#x27;)&quot;)
    public ResponseEntity&lt;Product&gt; createProduct(@Valid @RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(service.save(product));
    }

    @DeleteMapping(&quot;/{id}&quot;)
    @PreAuthorize(&quot;hasRole(&#x27;ADMIN&#x27;)&quot;)
    public ResponseEntity&lt;Void&gt; deleteProduct(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity&lt;List&lt;Product&gt;&gt; searchProducts(
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
        System.out.println(&quot;Product created: &quot; + event.getProduct().getName());
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
    @Profile(&quot;dev&quot;)
    public DataSource devDataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }

    @Bean
    @Profile(&quot;prod&quot;)
    public DataSource prodDataSource() {
        return DataSourceBuilder.create()
            .url(&quot;${spring.datasource.url}&quot;)
            .username(&quot;${spring.datasource.username}&quot;)
            .password(&quot;${spring.datasource.password}&quot;)
            .build();
    }
}

// Test
@SpringBootTest
@ActiveProfiles(&quot;test&quot;)
class ProductServiceTest {

    @Autowired
    private ProductService service;

    @MockBean
    private ProductRepository repository;

    @Test
    void testFindById() {
        Product product = new Product();
        product.setId(1L);
        product.setName(&quot;Test Product&quot;);

        when(repository.findById(1L)).thenReturn(Optional.of(product));

        Product found = service.findById(1L);

        assertNotNull(found);
        assertEquals(&quot;Test Product&quot;, found.getName());
    }
}
</code></pre>
<hr>
<h2 id="best-practices-summary">💡 Best Practices Summary</h2>
<ul>
<li>✅ <strong>Use constructor injection</strong> over field injection</li>
<li>✅ <strong>Keep @Service classes stateless</strong> for thread safety</li>
<li>✅ <strong>Use @Transactional at service layer</strong>, not repository</li>
<li>✅ <strong>Prefer @RestController</strong> over @Controller + @ResponseBody for APIs</li>
<li>✅ <strong>Use specific test slices</strong> (@WebMvcTest, @DataJpaTest) over @SpringBootTest when possible</li>
<li>✅ <strong>Use profiles</strong> for environment-specific configuration</li>
<li>✅ <strong>Leverage caching</strong> for expensive read operations</li>
<li>✅ <strong>Use @Async</strong> for long-running tasks that don&#x27;t need immediate response</li>
<li>✅ <strong>Implement proper exception handling</strong> with @ControllerAdvice</li>
<li>❌ <strong>Avoid circular dependencies</strong> - refactor if they occur</li>
<li>❌ <strong>Don&#x27;t use @Autowired on fields</strong> in production code</li>
<li>❌ <strong>Don&#x27;t put business logic in controllers</strong> - keep them thin</li>
<li>❌ <strong>Don&#x27;t ignore transaction boundaries</strong> - understand propagation</li>
</ul>
<hr>
<h2 id="spring-vs-spring-boot">🌱 Spring vs Spring Boot</h2>
<table>
<thead><tr>
<th>Feature</th>
<th>Spring Framework</th>
<th>Spring Boot</th>
</tr></thead><tbody>
<tr>
<td><strong>Primary Goal</strong></td>
<td>Flexible, comprehensive framework</td>
<td>Simplify development of production-ready apps</td>
</tr>
<tr>
<td><strong>Configuration</strong></td>
<td>Explicit manual configuration (XML/Java)</td>
<td>Convention over configuration with auto-configuration</td>
</tr>
<tr>
<td><strong>Boilerplate Code</strong></td>
<td>Significant boilerplate required</td>
<td>Minimal boilerplate</td>
</tr>
<tr>
<td><strong>Embedded Server</strong></td>
<td>Manual setup required (Tomcat, etc.)</td>
<td>Includes embedded servers out-of-box</td>
</tr>
<tr>
<td><strong>Dependency Management</strong></td>
<td>Manual dependency management</td>
<td>Simplified via &quot;starters&quot;</td>
</tr>
<tr>
<td><strong>Ease of Use</strong></td>
<td>Steeper learning curve</td>
<td>Easy to learn and quick start</td>
</tr>
</tbody></table>
<p><strong>Summary:</strong> Spring gives tools and flexibility to build from ground up. Spring Boot provides pre-configured, production-ready starting point.</p>
<hr>
<h2 id="quick-reference-card">🎯 Quick Reference Card</h2>
<h3 id="bean-definition">Bean Definition</h3>
<pre><code class="language-java">
@Component / @Service / @Repository / @Controller / @RestController
@Configuration + @Bean
</code></pre>
<h3 id="dependency-injection">Dependency Injection</h3>
<pre><code class="language-java">
Constructor: public MyService(Dependency dep) {}
Setter: @Autowired public void setDep(Dependency dep) {}
Field: @Autowired private Dependency dep; // Discouraged
</code></pre>
<h3 id="scopes">Scopes</h3>
<pre><code class="language-java">
@Scope(&quot;singleton&quot;) // Default
@Scope(&quot;prototype&quot;)
@Scope(&quot;request&quot;) / @Scope(&quot;session&quot;) / @Scope(&quot;application&quot;)
</code></pre>
<h3 id="lifecycle">Lifecycle</h3>
<pre><code class="language-java">
@PostConstruct - after creation
@PreDestroy - before destruction
</code></pre>
<h3 id="web">Web</h3>
<pre><code class="language-java">
@GetMapping / @PostMapping / @PutMapping / @DeleteMapping
@PathVariable / @RequestParam / @RequestBody
</code></pre>
<h3 id="jpa">JPA</h3>
<pre><code class="language-java">
@Entity / @Table / @Id / @GeneratedValue / @Column
@OneToOne / @OneToMany / @ManyToOne / @ManyToMany
@Query / @Modifying / @Transactional
</code></pre>
<h3 id="caching">Caching</h3>
<pre><code class="language-java">
@EnableCaching
@Cacheable / @CachePut / @CacheEvict
</code></pre>
<h3 id="testing">Testing</h3>
<pre><code class="language-java">
@SpringBootTest / @WebMvcTest / @DataJpaTest
@MockBean / @SpyBean
@ActiveProfiles(&quot;test&quot;)
</code></pre>
<h3 id="security">Security</h3>
<pre><code class="language-java">
@EnableWebSecurity
@PreAuthorize / @Secured
</code></pre>
<hr>
<p><strong>Note:</strong> This is a comprehensive reference. For latest documentation, visit <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/">Spring Framework Documentation</a>.</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = springBootAnnotationsCompleteGuideContentData;
}
