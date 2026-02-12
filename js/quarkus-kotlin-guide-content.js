// Quarkus Kotlin Guide - Content Data
const quarkusKotlinGuideContentData = `<h1 id="quarkus-with-kotlin-complete-guide">Quarkus with Kotlin: Complete Guide</h1>
<p><strong>From Beginner to Advanced</strong></p>
<hr>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#beginner-level">Beginner Level</a></li>
<li><a href="#intermediate-level">Intermediate Level</a></li>
<li><a href="#advanced-level">Advanced Level</a></li>
</ul>
<hr>
<h1 id="beginner-level">Beginner Level</h1>
<h2 id="1-project-setup">1. Project Setup</h2>
<h3 id="creating-a-new-quarkus-kotlin-project">Creating a New Quarkus + Kotlin Project</h3>
<pre><code class="language-bash">
# Using Quarkus CLI
quarkus create app com.example:my-app \
    --extension=kotlin,resteasy-reactive-jackson \
    --gradle-kotlin-dsl

# Or using Maven
mvn io.quarkus.platform:quarkus-maven-plugin:3.6.0:create \
    -DprojectGroupId=com.example \
    -DprojectArtifactId=my-app \
    -Dextensions=&quot;kotlin,resteasy-reactive-jackson&quot;
</code></pre>
<h3 id="basic-gradle-configuration-buildgradlekts">Basic Gradle Configuration (build.gradle.kts)</h3>
<pre><code class="language-kotlin">
plugins {
    kotlin(&quot;jvm&quot;) version &quot;1.9.21&quot;
    kotlin(&quot;plugin.allopen&quot;) version &quot;1.9.21&quot;
    id(&quot;io.quarkus&quot;)
}

dependencies {
    implementation(enforcedPlatform(&quot;io.quarkus.platform:quarkus-bom:3.6.0&quot;))
    implementation(&quot;io.quarkus:quarkus-kotlin&quot;)
    implementation(&quot;io.quarkus:quarkus-resteasy-reactive-jackson&quot;)
    implementation(&quot;io.quarkus:quarkus-arc&quot;)
    implementation(&quot;org.jetbrains.kotlin:kotlin-stdlib-jdk8&quot;)
    
    testImplementation(&quot;io.quarkus:quarkus-junit5&quot;)
    testImplementation(&quot;io.rest-assured:rest-assured&quot;)
}

allOpen {
    annotation(&quot;javax.ws.rs.Path&quot;)
    annotation(&quot;javax.enterprise.context.ApplicationScoped&quot;)
    annotation(&quot;io.quarkus.test.junit.QuarkusTest&quot;)
}
</code></pre>
<p><strong>Explanation:</strong> The <code>allOpen</code> plugin is crucial for Kotlin with Quarkus. CDI and JAX-RS require classes to be open (non-final), but Kotlin classes are final by default. This plugin automatically makes annotated classes open.</p>
<hr>
<h2 id="2-first-rest-endpoint">2. First REST Endpoint</h2>
<pre><code class="language-kotlin">
package com.example

import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path(&quot;/hello&quot;)
class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    fun hello(): String {
        return &quot;Hello from Quarkus with Kotlin!&quot;
    }
}
</code></pre>
<p><strong>Explanation:</strong> This creates a simple REST endpoint at <code>/hello</code>. The <code>@Path</code> annotation defines the base URL path, <code>@GET</code> specifies the HTTP method, and <code>@Produces</code> indicates the response type.</p>
<p><strong>Running the application:</strong></p>
<pre><code class="language-bash">
./gradlew quarkusDev
# Access at: http://localhost:8080/hello
</code></pre>
<hr>
<h2 id="3-dependency-injection-with-cdi">3. Dependency Injection with CDI</h2>
<pre><code class="language-kotlin">
package com.example

import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class GreetingService {
    
    fun greet(name: String): String {
        return &quot;Hello, $name!&quot;
    }
    
    fun getFormalGreeting(name: String): String {
        return &quot;Good day, $name. Welcome to Quarkus!&quot;
    }
}
</code></pre>
<pre><code class="language-kotlin">
package com.example

import javax.inject.Inject
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.PathParam
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path(&quot;/greet&quot;)
class GreetingResource {

    @Inject
    lateinit var greetingService: GreetingService

    @GET
    @Path(&quot;/{name}&quot;)
    @Produces(MediaType.TEXT_PLAIN)
    fun greet(@PathParam(&quot;name&quot;) name: String): String {
        return greetingService.greet(name)
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@ApplicationScoped</code> makes the service a CDI bean with application-wide lifecycle. <code>@Inject</code> injects the service into the resource. Use <code>lateinit var</code> for injected dependencies in Kotlin.</p>
<hr>
<h2 id="4-configuration">4. Configuration</h2>
<h3 id="applicationproperties">application.properties</h3>
<pre><code class="language-properties">
# Application name
quarkus.application.name=my-kotlin-app

# Custom configuration
greeting.message=Hello from config
greeting.suffix=!

# HTTP port
quarkus.http.port=8080
</code></pre>
<h3 id="reading-configuration-in-kotlin">Reading Configuration in Kotlin</h3>
<pre><code class="language-kotlin">
package com.example

import org.eclipse.microprofile.config.inject.ConfigProperty
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ConfigService {
    
    @ConfigProperty(name = &quot;greeting.message&quot;)
    lateinit var message: String
    
    @ConfigProperty(name = &quot;greeting.suffix&quot;, defaultValue = &quot;.&quot;)
    lateinit var suffix: String
    
    @ConfigProperty(name = &quot;greeting.repeat&quot;, defaultValue = &quot;1&quot;)
    var repeatCount: Int = 1
    
    fun getConfiguredGreeting(name: String): String {
        return message.repeat(repeatCount) + &quot;, $name&quot; + suffix
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@ConfigProperty</code> injects configuration values. Use <code>lateinit var</code> for String properties and regular <code>var</code> with initialization for primitive types. The <code>defaultValue</code> is used if the property is not found.</p>
<hr>
<h2 id="5-data-classes-and-json">5. Data Classes and JSON</h2>
<pre><code class="language-kotlin">
package com.example.model

data class Person(
    val id: Long? = null,
    val name: String,
    val email: String,
    val age: Int
)

data class ApiResponse&lt;T&gt;(
    val success: Boolean,
    val message: String,
    val data: T? = null
)
</code></pre>
<pre><code class="language-kotlin">
package com.example

import com.example.model.Person
import com.example.model.ApiResponse
import javax.ws.rs.*
import javax.ws.rs.core.MediaType

@Path(&quot;/api/persons&quot;)
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class PersonResource {

    private val persons = mutableListOf(
        Person(1, &quot;John Doe&quot;, &quot;john@example.com&quot;, 30),
        Person(2, &quot;Jane Smith&quot;, &quot;jane@example.com&quot;, 25)
    )

    @GET
    fun getAll(): ApiResponse&lt;List&lt;Person&gt;&gt; {
        return ApiResponse(
            success = true,
            message = &quot;Persons retrieved successfully&quot;,
            data = persons
        )
    }

    @GET
    @Path(&quot;/{id}&quot;)
    fun getById(@PathParam(&quot;id&quot;) id: Long): ApiResponse&lt;Person&gt; {
        val person = persons.find { it.id == id }
        return if (person != null) {
            ApiResponse(success = true, message = &quot;Person found&quot;, data = person)
        } else {
            ApiResponse(success = false, message = &quot;Person not found&quot;)
        }
    }

    @POST
    fun create(person: Person): ApiResponse&lt;Person&gt; {
        val newPerson = person.copy(id = persons.size.toLong() + 1)
        persons.add(newPerson)
        return ApiResponse(
            success = true,
            message = &quot;Person created&quot;,
            data = newPerson
        )
    }
}
</code></pre>
<p><strong>Explanation:</strong> Kotlin data classes work seamlessly with Jackson for JSON serialization. Quarkus automatically handles JSON conversion with the <code>resteasy-reactive-jackson</code> extension.</p>
<hr>
<h2 id="6-basic-testing">6. Basic Testing</h2>
<pre><code class="language-kotlin">
package com.example

import io.quarkus.test.junit.QuarkusTest
import io.restassured.RestAssured.given
import org.hamcrest.CoreMatchers.`is`
import org.junit.jupiter.api.Test

@QuarkusTest
class GreetingResourceTest {

    @Test
    fun testHelloEndpoint() {
        given()
            .`when`().get(&quot;/hello&quot;)
            .then()
            .statusCode(200)
            .body(`is`(&quot;Hello from Quarkus with Kotlin!&quot;))
    }

    @Test
    fun testGreetEndpoint() {
        given()
            .`when`().get(&quot;/greet/Alice&quot;)
            .then()
            .statusCode(200)
            .body(`is`(&quot;Hello, Alice!&quot;))
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@QuarkusTest</code> starts the application for integration testing. RestAssured provides a fluent API for testing REST endpoints. Note the backticks around <code>is</code> and <code>when</code> - these are Kotlin keywords.</p>
<hr>
<h1 id="intermediate-level">Intermediate Level</h1>
<h2 id="7-database-integration-with-panache">7. Database Integration with Panache</h2>
<h3 id="adding-dependencies">Adding Dependencies</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-hibernate-orm-panache-kotlin&quot;)
    implementation(&quot;io.quarkus:quarkus-jdbc-postgresql&quot;)
    implementation(&quot;io.quarkus:quarkus-flyway&quot;)
}
</code></pre>
<h3 id="database-configuration">Database Configuration</h3>
<pre><code class="language-properties">
# Database
quarkus.datasource.db-kind=postgresql
quarkus.datasource.username=postgres
quarkus.datasource.password=postgres
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/mydb

# Hibernate
quarkus.hibernate-orm.database.generation=none
quarkus.hibernate-orm.log.sql=true

# Flyway
quarkus.flyway.migrate-at-start=true
</code></pre>
<h3 id="entity-with-panache-kotlin">Entity with Panache Kotlin</h3>
<pre><code class="language-kotlin">
package com.example.entity

import io.quarkus.hibernate.orm.panache.kotlin.PanacheCompanion
import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntity
import javax.persistence.*

@Entity
@Table(name = &quot;products&quot;)
class Product : PanacheEntity() {
    
    companion object: PanacheCompanion&lt;Product&gt; {
        fun findByName(name: String) = find(&quot;name&quot;, name).firstResult()
        
        fun findByCategory(category: String) = list(&quot;category&quot;, category)
        
        fun findExpensiveProducts(minPrice: Double) = 
            list(&quot;price &gt;= ?1&quot;, minPrice)
    }
    
    @Column(nullable = false)
    lateinit var name: String
    
    @Column(length = 1000)
    var description: String? = null
    
    @Column(nullable = false)
    var price: Double = 0.0
    
    @Column(nullable = false)
    lateinit var category: String
    
    var stock: Int = 0
    
    @Column(name = &quot;created_at&quot;)
    var createdAt: java.time.LocalDateTime = java.time.LocalDateTime.now()
}
</code></pre>
<p><strong>Explanation:</strong> Panache Kotlin provides Active Record pattern. <code>PanacheEntity</code> gives automatic <code>id</code> field and common methods. The companion object extends <code>PanacheCompanion</code> to add custom queries.</p>
<h3 id="repository-pattern-alternative">Repository Pattern (Alternative)</h3>
<pre><code class="language-kotlin">
package com.example.repository

import com.example.entity.Product
import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepository
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ProductRepository : PanacheRepository&lt;Product&gt; {
    
    fun findByNameIgnoreCase(name: String): Product? {
        return find(&quot;lower(name) = lower(?1)&quot;, name).firstResult()
    }
    
    fun searchByKeyword(keyword: String): List&lt;Product&gt; {
        return list(&quot;lower(name) like lower(?1) or lower(description) like lower(?1)&quot;, 
                    &quot;%$keyword%&quot;)
    }
    
    fun updateStock(productId: Long, quantity: Int) {
        update(&quot;stock = stock + ?1 where id = ?2&quot;, quantity, productId)
    }
}
</code></pre>
<p><strong>Explanation:</strong> Repository pattern separates data access logic. Useful for complex applications with many queries.</p>
<hr>
<h2 id="8-transactional-services">8. Transactional Services</h2>
<pre><code class="language-kotlin">
package com.example.service

import com.example.entity.Product
import com.example.repository.ProductRepository
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject
import javax.transaction.Transactional

@ApplicationScoped
class ProductService {
    
    @Inject
    lateinit var productRepository: ProductRepository
    
    @Transactional
    fun createProduct(name: String, description: String?, price: Double, 
                     category: String, stock: Int): Product {
        val product = Product().apply {
            this.name = name
            this.description = description
            this.price = price
            this.category = category
            this.stock = stock
        }
        productRepository.persist(product)
        return product
    }
    
    @Transactional
    fun updateProduct(id: Long, name: String?, price: Double?): Product? {
        val product = productRepository.findById(id) ?: return null
        
        name?.let { product.name = it }
        price?.let { product.price = it }
        
        return product
    }
    
    @Transactional
    fun deleteProduct(id: Long): Boolean {
        return productRepository.deleteById(id)
    }
    
    fun findAll(): List&lt;Product&gt; = productRepository.listAll()
    
    fun findById(id: Long): Product? = productRepository.findById(id)
    
    @Transactional
    fun purchaseProduct(productId: Long, quantity: Int): Boolean {
        val product = productRepository.findById(productId) ?: return false
        
        if (product.stock &lt; quantity) {
            throw IllegalStateException(&quot;Insufficient stock&quot;)
        }
        
        product.stock -= quantity
        return true
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@Transactional</code> ensures database operations are atomic. Read-only operations don&#x27;t need transactions. Use Kotlin&#x27;s <code>apply</code> and <code>let</code> for clean object initialization.</p>
<hr>
<h2 id="9-exception-handling">9. Exception Handling</h2>
<pre><code class="language-kotlin">
package com.example.exception

class ResourceNotFoundException(message: String) : RuntimeException(message)

class ValidationException(message: String) : RuntimeException(message)

class InsufficientStockException(message: String) : RuntimeException(message)
</code></pre>
<pre><code class="language-kotlin">
package com.example.exception

import javax.ws.rs.core.Response
import javax.ws.rs.ext.ExceptionMapper
import javax.ws.rs.ext.Provider

data class ErrorResponse(
    val error: String,
    val message: String,
    val timestamp: Long = System.currentTimeMillis()
)

@Provider
class ResourceNotFoundExceptionMapper : ExceptionMapper&lt;ResourceNotFoundException&gt; {
    override fun toResponse(exception: ResourceNotFoundException): Response {
        return Response.status(Response.Status.NOT_FOUND)
            .entity(ErrorResponse(&quot;NOT_FOUND&quot;, exception.message ?: &quot;Resource not found&quot;))
            .build()
    }
}

@Provider
class ValidationExceptionMapper : ExceptionMapper&lt;ValidationException&gt; {
    override fun toResponse(exception: ValidationException): Response {
        return Response.status(Response.Status.BAD_REQUEST)
            .entity(ErrorResponse(&quot;VALIDATION_ERROR&quot;, exception.message ?: &quot;Validation failed&quot;))
            .build()
    }
}

@Provider
class GenericExceptionMapper : ExceptionMapper&lt;Exception&gt; {
    override fun toResponse(exception: Exception): Response {
        return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
            .entity(ErrorResponse(&quot;INTERNAL_ERROR&quot;, &quot;An unexpected error occurred&quot;))
            .build()
    }
}
</code></pre>
<p><strong>Explanation:</strong> Exception mappers convert exceptions to HTTP responses. The <code>@Provider</code> annotation registers them automatically. Create specific mappers for different exception types.</p>
<hr>
<h2 id="10-validation">10. Validation</h2>
<h3 id="adding-dependency">Adding Dependency</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-hibernate-validator&quot;)
}
</code></pre>
<h3 id="dto-with-validation">DTO with Validation</h3>
<pre><code class="language-kotlin">
package com.example.dto

import javax.validation.constraints.*

data class CreateProductRequest(
    @field:NotBlank(message = &quot;Name is required&quot;)
    @field:Size(min = 3, max = 100, message = &quot;Name must be between 3 and 100 characters&quot;)
    val name: String,
    
    @field:Size(max = 1000, message = &quot;Description cannot exceed 1000 characters&quot;)
    val description: String? = null,
    
    @field:NotNull(message = &quot;Price is required&quot;)
    @field:DecimalMin(value = &quot;0.01&quot;, message = &quot;Price must be greater than 0&quot;)
    val price: Double,
    
    @field:NotBlank(message = &quot;Category is required&quot;)
    val category: String,
    
    @field:Min(value = 0, message = &quot;Stock cannot be negative&quot;)
    val stock: Int = 0
)

data class UpdateProductRequest(
    @field:Size(min = 3, max = 100)
    val name: String? = null,
    
    @field:DecimalMin(value = &quot;0.01&quot;)
    val price: Double? = null,
    
    @field:Min(value = 0)
    val stock: Int? = null
)
</code></pre>
<p><strong>Explanation:</strong> Use <code>@field:</code> prefix for validation annotations on data class properties. This applies annotations to the backing field, which validators can access.</p>
<h3 id="validated-resource">Validated Resource</h3>
<pre><code class="language-kotlin">
package com.example

import com.example.dto.CreateProductRequest
import com.example.dto.UpdateProductRequest
import com.example.service.ProductService
import javax.inject.Inject
import javax.validation.Valid
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path(&quot;/api/products&quot;)
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class ProductResource {
    
    @Inject
    lateinit var productService: ProductService
    
    @GET
    fun getAll() = productService.findAll()
    
    @GET
    @Path(&quot;/{id}&quot;)
    fun getById(@PathParam(&quot;id&quot;) id: Long): Response {
        val product = productService.findById(id)
            ?: return Response.status(Response.Status.NOT_FOUND).build()
        return Response.ok(product).build()
    }
    
    @POST
    fun create(@Valid request: CreateProductRequest): Response {
        val product = productService.createProduct(
            name = request.name,
            description = request.description,
            price = request.price,
            category = request.category,
            stock = request.stock
        )
        return Response.status(Response.Status.CREATED).entity(product).build()
    }
    
    @PUT
    @Path(&quot;/{id}&quot;)
    fun update(
        @PathParam(&quot;id&quot;) id: Long,
        @Valid request: UpdateProductRequest
    ): Response {
        val product = productService.updateProduct(id, request.name, request.price)
            ?: return Response.status(Response.Status.NOT_FOUND).build()
        return Response.ok(product).build()
    }
    
    @DELETE
    @Path(&quot;/{id}&quot;)
    fun delete(@PathParam(&quot;id&quot;) id: Long): Response {
        val deleted = productService.deleteProduct(id)
        return if (deleted) {
            Response.noContent().build()
        } else {
            Response.status(Response.Status.NOT_FOUND).build()
        }
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@Valid</code> triggers validation before the method executes. If validation fails, Quarkus returns a 400 Bad Request with validation errors.</p>
<hr>
<h2 id="11-reactive-programming">11. Reactive Programming</h2>
<h3 id="adding-dependencies">Adding Dependencies</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-resteasy-reactive&quot;)
    implementation(&quot;io.quarkus:quarkus-reactive-pg-client&quot;)
    implementation(&quot;io.smallrye.reactive:mutiny-kotlin&quot;)
}
</code></pre>
<h3 id="reactive-repository">Reactive Repository</h3>
<pre><code class="language-kotlin">
package com.example.reactive

import io.smallrye.mutiny.Uni
import io.smallrye.mutiny.Multi
import io.vertx.mutiny.pgclient.PgPool
import io.vertx.mutiny.sqlclient.Row
import io.vertx.mutiny.sqlclient.Tuple
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject

data class Product(
    val id: Long,
    val name: String,
    val price: Double
)

@ApplicationScoped
class ReactiveProductRepository {
    
    @Inject
    lateinit var client: PgPool
    
    fun findAll(): Multi&lt;Product&gt; {
        return client.query(&quot;SELECT id, name, price FROM products&quot;)
            .execute()
            .onItem().transformToMulti { set -&gt; Multi.createFrom().iterable(set) }
            .onItem().transform { row -&gt; row.toProduct() }
    }
    
    fun findById(id: Long): Uni&lt;Product?&gt; {
        return client.preparedQuery(&quot;SELECT id, name, price FROM products WHERE id = $1&quot;)
            .execute(Tuple.of(id))
            .onItem().transform { rowSet -&gt;
                rowSet.iterator().let {
                    if (it.hasNext()) it.next().toProduct() else null
                }
            }
    }
    
    fun save(name: String, price: Double): Uni&lt;Long&gt; {
        return client.preparedQuery(
            &quot;INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id&quot;
        )
            .execute(Tuple.of(name, price))
            .onItem().transform { it.iterator().next().getLong(&quot;id&quot;) }
    }
    
    private fun Row.toProduct() = Product(
        id = getLong(&quot;id&quot;),
        name = getString(&quot;name&quot;),
        price = getDouble(&quot;price&quot;)
    )
}
</code></pre>
<p><strong>Explanation:</strong> Mutiny provides reactive types <code>Uni</code> (0 or 1 item) and <code>Multi</code> (0 to N items). This enables non-blocking I/O for better scalability.</p>
<h3 id="reactive-resource">Reactive Resource</h3>
<pre><code class="language-kotlin">
package com.example.reactive

import io.smallrye.mutiny.Uni
import io.smallrye.mutiny.Multi
import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType

@Path(&quot;/api/reactive/products&quot;)
@Produces(MediaType.APPLICATION_JSON)
class ReactiveProductResource {
    
    @Inject
    lateinit var repository: ReactiveProductRepository
    
    @GET
    fun getAll(): Multi&lt;Product&gt; = repository.findAll()
    
    @GET
    @Path(&quot;/{id}&quot;)
    fun getById(@PathParam(&quot;id&quot;) id: Long): Uni&lt;Product?&gt; = 
        repository.findById(id)
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    fun create(request: CreateProductDto): Uni&lt;Long&gt; =
        repository.save(request.name, request.price)
}

data class CreateProductDto(val name: String, val price: Double)
</code></pre>
<p><strong>Explanation:</strong> Reactive resources return <code>Uni</code> or <code>Multi</code> instead of blocking. Quarkus automatically subscribes and handles the response.</p>
<hr>
<h2 id="12-scheduled-jobs">12. Scheduled Jobs</h2>
<pre><code class="language-kotlin">
package com.example.scheduler

import io.quarkus.scheduler.Scheduled
import org.jboss.logging.Logger
import javax.enterprise.context.ApplicationScoped
import java.time.LocalDateTime

@ApplicationScoped
class ScheduledTasks {
    
    private val log = Logger.getLogger(ScheduledTasks::class.java)
    
    // Run every 10 seconds
    @Scheduled(every = &quot;10s&quot;)
    fun everyTenSeconds() {
        log.info(&quot;Task running every 10 seconds at ${LocalDateTime.now()}&quot;)
    }
    
    // Run with cron expression (every day at 2 AM)
    @Scheduled(cron = &quot;0 0 2 * * ?&quot;)
    fun dailyCleanup() {
        log.info(&quot;Running daily cleanup at ${LocalDateTime.now()}&quot;)
        // Perform cleanup tasks
    }
    
    // Run with initial delay and fixed interval
    @Scheduled(delay = 5, every = &quot;30s&quot;)
    fun delayedTask() {
        log.info(&quot;Task with 5s delay, running every 30s&quot;)
    }
    
    // Conditional scheduling
    @Scheduled(every = &quot;1m&quot;, identity = &quot;report-generator&quot;)
    fun generateReport() {
        if (shouldGenerateReport()) {
            log.info(&quot;Generating report...&quot;)
            // Generate report logic
        }
    }
    
    private fun shouldGenerateReport(): Boolean {
        // Add your condition logic
        return true
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@Scheduled</code> enables periodic task execution. Use <code>every</code> for simple intervals, <code>cron</code> for complex schedules. The <code>identity</code> parameter uniquely identifies the job.</p>
<hr>
<h2 id="13-websockets">13. WebSockets</h2>
<h3 id="adding-dependency">Adding Dependency</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-websockets&quot;)
}
</code></pre>
<h3 id="websocket-endpoint">WebSocket Endpoint</h3>
<pre><code class="language-kotlin">
package com.example.websocket

import javax.enterprise.context.ApplicationScoped
import javax.websocket.*
import javax.websocket.server.ServerEndpoint
import java.util.concurrent.ConcurrentHashMap

@ServerEndpoint(&quot;/chat&quot;)
@ApplicationScoped
class ChatWebSocket {
    
    companion object {
        private val sessions = ConcurrentHashMap&lt;String, Session&gt;()
    }
    
    @OnOpen
    fun onOpen(session: Session) {
        sessions[session.id] = session
        broadcast(&quot;User ${session.id} joined the chat&quot;)
    }
    
    @OnClose
    fun onClose(session: Session) {
        sessions.remove(session.id)
        broadcast(&quot;User ${session.id} left the chat&quot;)
    }
    
    @OnMessage
    fun onMessage(message: String, session: Session) {
        broadcast(&quot;${session.id}: $message&quot;)
    }
    
    @OnError
    fun onError(session: Session, throwable: Throwable) {
        sessions.remove(session.id)
        throwable.printStackTrace()
    }
    
    private fun broadcast(message: String) {
        sessions.values.forEach { session -&gt;
            session.asyncRemote.sendText(message) { result -&gt;
                if (!result.isOK) {
                    println(&quot;Error sending message: ${result.exception}&quot;)
                }
            }
        }
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@ServerEndpoint</code> creates a WebSocket endpoint. Sessions are stored in a thread-safe map. The <code>broadcast</code> method sends messages to all connected clients.</p>
<hr>
<h1 id="advanced-level">Advanced Level</h1>
<h2 id="14-security-with-jwt">14. Security with JWT</h2>
<h3 id="adding-dependencies">Adding Dependencies</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-smallrye-jwt&quot;)
    implementation(&quot;io.quarkus:quarkus-smallrye-jwt-build&quot;)
}
</code></pre>
<h3 id="configuration">Configuration</h3>
<pre><code class="language-properties">
# JWT
mp.jwt.verify.publickey.location=META-INF/resources/publicKey.pem
mp.jwt.verify.issuer=https://example.com/issuer
quarkus.smallrye-jwt.enabled=true

# Token generation (for development)
smallrye.jwt.sign.key.location=META-INF/resources/privateKey.pem
</code></pre>
<h3 id="token-generation-service">Token Generation Service</h3>
<pre><code class="language-kotlin">
package com.example.security

import io.smallrye.jwt.build.Jwt
import org.eclipse.microprofile.jwt.Claims
import javax.enterprise.context.ApplicationScoped
import java.time.Duration

@ApplicationScoped
class TokenService {
    
    fun generateToken(username: String, roles: Set&lt;String&gt;): String {
        return Jwt.issuer(&quot;https://example.com/issuer&quot;)
            .upn(username)
            .groups(roles)
            .claim(Claims.preferred_username.name, username)
            .expiresIn(Duration.ofHours(24))
            .sign()
    }
    
    fun generateRefreshToken(username: String): String {
        return Jwt.issuer(&quot;https://example.com/issuer&quot;)
            .upn(username)
            .claim(&quot;type&quot;, &quot;refresh&quot;)
            .expiresIn(Duration.ofDays(7))
            .sign()
    }
}
</code></pre>
<h3 id="authentication-resource">Authentication Resource</h3>
<pre><code class="language-kotlin">
package com.example.security

import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

data class LoginRequest(
    val username: String,
    val password: String
)

data class TokenResponse(
    val accessToken: String,
    val refreshToken: String,
    val tokenType: String = &quot;Bearer&quot;
)

@Path(&quot;/auth&quot;)
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class AuthResource {
    
    @Inject
    lateinit var tokenService: TokenService
    
    @POST
    @Path(&quot;/login&quot;)
    fun login(request: LoginRequest): Response {
        // In production, validate credentials against database
        if (request.username == &quot;admin&quot; &amp;&amp; request.password == &quot;admin123&quot;) {
            val token = tokenService.generateToken(
                request.username,
                setOf(&quot;User&quot;, &quot;Admin&quot;)
            )
            val refreshToken = tokenService.generateRefreshToken(request.username)
            
            return Response.ok(TokenResponse(token, refreshToken)).build()
        }
        
        return Response.status(Response.Status.UNAUTHORIZED)
            .entity(mapOf(&quot;error&quot; to &quot;Invalid credentials&quot;))
            .build()
    }
}
</code></pre>
<h3 id="secured-resource">Secured Resource</h3>
<pre><code class="language-kotlin">
package com.example.security

import org.eclipse.microprofile.jwt.JsonWebToken
import javax.annotation.security.RolesAllowed
import javax.inject.Inject
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.Context
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.SecurityContext

@Path(&quot;/api/secure&quot;)
@Produces(MediaType.APPLICATION_JSON)
class SecureResource {
    
    @Inject
    lateinit var jwt: JsonWebToken
    
    @GET
    @Path(&quot;/public&quot;)
    fun publicEndpoint(): Map&lt;String, String&gt; {
        return mapOf(&quot;message&quot; to &quot;This is public&quot;)
    }
    
    @GET
    @Path(&quot;/user&quot;)
    @RolesAllowed(&quot;User&quot;)
    fun userEndpoint(): Map&lt;String, Any&gt; {
        return mapOf(
            &quot;message&quot; to &quot;Hello ${jwt.name}&quot;,
            &quot;roles&quot; to jwt.groups
        )
    }
    
    @GET
    @Path(&quot;/admin&quot;)
    @RolesAllowed(&quot;Admin&quot;)
    fun adminEndpoint(@Context securityContext: SecurityContext): Map&lt;String, Any&gt; {
        return mapOf(
            &quot;message&quot; to &quot;Admin access granted&quot;,
            &quot;user&quot; to jwt.name,
            &quot;isSecure&quot; to securityContext.isSecure
        )
    }
}
</code></pre>
<p><strong>Explanation:</strong> JWT tokens contain user info and roles. <code>@RolesAllowed</code> restricts endpoint access. The <code>JsonWebToken</code> object provides access to token claims.</p>
<hr>
<h2 id="15-messaging-with-kafka">15. Messaging with Kafka</h2>
<h3 id="adding-dependencies">Adding Dependencies</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-smallrye-reactive-messaging-kafka&quot;)
}
</code></pre>
<h3 id="configuration">Configuration</h3>
<pre><code class="language-properties">
# Kafka
kafka.bootstrap.servers=localhost:9092

# Outgoing channel
mp.messaging.outgoing.orders.connector=smallrye-kafka
mp.messaging.outgoing.orders.topic=orders
mp.messaging.outgoing.orders.value.serializer=io.quarkus.kafka.client.serialization.ObjectMapperSerializer

# Incoming channel
mp.messaging.incoming.orders.connector=smallrye-kafka
mp.messaging.incoming.orders.topic=orders
mp.messaging.incoming.orders.value.deserializer=io.quarkus.kafka.client.serialization.ObjectMapperDeserializer
mp.messaging.incoming.orders.auto.offset.reset=earliest
</code></pre>
<h3 id="message-models">Message Models</h3>
<pre><code class="language-kotlin">
package com.example.messaging

import java.time.LocalDateTime

data class OrderCreatedEvent(
    val orderId: String,
    val customerId: String,
    val totalAmount: Double,
    val timestamp: LocalDateTime = LocalDateTime.now()
)

data class OrderProcessedEvent(
    val orderId: String,
    val status: String,
    val processedAt: LocalDateTime = LocalDateTime.now()
)
</code></pre>
<h3 id="message-producer">Message Producer</h3>
<pre><code class="language-kotlin">
package com.example.messaging

import io.smallrye.mutiny.Uni
import io.smallrye.reactive.messaging.kafka.Record
import org.eclipse.microprofile.reactive.messaging.Channel
import org.eclipse.microprofile.reactive.messaging.Emitter
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject

@ApplicationScoped
class OrderProducer {
    
    @Inject
    @Channel(&quot;orders&quot;)
    lateinit var orderEmitter: Emitter&lt;Record&lt;String, OrderCreatedEvent&gt;&gt;
    
    fun sendOrderCreated(event: OrderCreatedEvent): Uni&lt;Void&gt; {
        return Uni.createFrom().completionStage(
            orderEmitter.send(Record.of(event.orderId, event))
        )
    }
}
</code></pre>
<h3 id="message-consumer">Message Consumer</h3>
<pre><code class="language-kotlin">
package com.example.messaging

import io.smallrye.reactive.messaging.annotations.Blocking
import org.eclipse.microprofile.reactive.messaging.Incoming
import org.jboss.logging.Logger
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class OrderConsumer {
    
    private val log = Logger.getLogger(OrderConsumer::class.java)
    
    @Incoming(&quot;orders&quot;)
    @Blocking
    fun consumeOrder(event: OrderCreatedEvent) {
        log.info(&quot;Processing order: ${event.orderId}&quot;)
        
        // Business logic here
        processOrder(event)
        
        log.info(&quot;Order processed: ${event.orderId}&quot;)
    }
    
    private fun processOrder(event: OrderCreatedEvent) {
        // Simulate processing
        Thread.sleep(1000)
        // Update database, send notifications, etc.
    }
}
</code></pre>
<p><strong>Explanation:</strong> Reactive Messaging abstracts Kafka operations. <code>@Channel</code> injects an emitter for sending messages. <code>@Incoming</code> consumes messages. Use <code>@Blocking</code> for blocking operations.</p>
<hr>
<h2 id="16-caching">16. Caching</h2>
<h3 id="adding-dependencies">Adding Dependencies</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-cache&quot;)
}
</code></pre>
<h3 id="cached-service">Cached Service</h3>
<pre><code class="language-kotlin">
package com.example.cache

import io.quarkus.cache.CacheInvalidate
import io.quarkus.cache.CacheInvalidateAll
import io.quarkus.cache.CacheResult
import org.jboss.logging.Logger
import javax.enterprise.context.ApplicationScoped

data class Product(val id: Long, val name: String, val price: Double)

@ApplicationScoped
class ProductCacheService {
    
    private val log = Logger.getLogger(ProductCacheService::class.java)
    
    @CacheResult(cacheName = &quot;product-cache&quot;)
    fun getProductById(id: Long): Product? {
        log.info(&quot;Fetching product from database: $id&quot;)
        // Simulate database call
        Thread.sleep(1000)
        return Product(id, &quot;Product $id&quot;, 99.99)
    }
    
    @CacheResult(cacheName = &quot;expensive-products&quot;)
    fun getExpensiveProducts(minPrice: Double): List&lt;Product&gt; {
        log.info(&quot;Fetching expensive products from database&quot;)
        Thread.sleep(2000)
        return listOf(
            Product(1, &quot;Expensive Item 1&quot;, 999.99),
            Product(2, &quot;Expensive Item 2&quot;, 1299.99)
        )
    }
    
    @CacheInvalidate(cacheName = &quot;product-cache&quot;)
    fun updateProduct(id: Long, name: String, price: Double) {
        log.info(&quot;Updating product: $id&quot;)
        // Update database
    }
    
    @CacheInvalidateAll(cacheName = &quot;product-cache&quot;)
    fun clearProductCache() {
        log.info(&quot;Clearing product cache&quot;)
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@CacheResult</code> caches method results by parameters. <code>@CacheInvalidate</code> removes specific cache entries. <code>@CacheInvalidateAll</code> clears entire cache. First call is slow, subsequent calls are instant.</p>
<hr>
<h2 id="17-graphql-api">17. GraphQL API</h2>
<h3 id="adding-dependencies">Adding Dependencies</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-smallrye-graphql&quot;)
}
</code></pre>
<h3 id="graphql-models">GraphQL Models</h3>
<pre><code class="language-kotlin">
package com.example.graphql

data class Book(
    val id: Long,
    val title: String,
    val author: String,
    val isbn: String,
    val publishedYear: Int
)

data class CreateBookInput(
    val title: String,
    val author: String,
    val isbn: String,
    val publishedYear: Int
)
</code></pre>
<h3 id="graphql-resource">GraphQL Resource</h3>
<pre><code class="language-kotlin">
package com.example.graphql

import org.eclipse.microprofile.graphql.*
import javax.enterprise.context.ApplicationScoped

@GraphQLApi
@ApplicationScoped
class BookGraphQLResource {
    
    private val books = mutableListOf(
        Book(1, &quot;Kotlin in Action&quot;, &quot;Dmitry Jemerov&quot;, &quot;978-1617293290&quot;, 2017),
        Book(2, &quot;Effective Kotlin&quot;, &quot;Marcin Moskala&quot;, &quot;978-8395452840&quot;, 2019)
    )
    
    @Query(&quot;allBooks&quot;)
    @Description(&quot;Get all books&quot;)
    fun getAllBooks(): List&lt;Book&gt; = books
    
    @Query(&quot;bookById&quot;)
    @Description(&quot;Get a book by ID&quot;)
    fun getBookById(@Name(&quot;id&quot;) id: Long): Book? {
        return books.find { it.id == id }
    }
    
    @Query(&quot;searchBooks&quot;)
    @Description(&quot;Search books by title or author&quot;)
    fun searchBooks(
        @Name(&quot;query&quot;) query: String
    ): List&lt;Book&gt; {
        return books.filter {
            it.title.contains(query, ignoreCase = true) ||
            it.author.contains(query, ignoreCase = true)
        }
    }
    
    @Mutation(&quot;createBook&quot;)
    @Description(&quot;Create a new book&quot;)
    fun createBook(@Name(&quot;input&quot;) input: CreateBookInput): Book {
        val newBook = Book(
            id = books.size.toLong() + 1,
            title = input.title,
            author = input.author,
            isbn = input.isbn,
            publishedYear = input.publishedYear
        )
        books.add(newBook)
        return newBook
    }
    
    @Mutation(&quot;deleteBook&quot;)
    @Description(&quot;Delete a book by ID&quot;)
    fun deleteBook(@Name(&quot;id&quot;) id: Long): Boolean {
        return books.removeIf { it.id == id }
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@GraphQLApi</code> marks the class as a GraphQL resource. <code>@Query</code> for fetching data, <code>@Mutation</code> for modifications. Access GraphQL UI at <code>/graphql-ui</code>.</p>
<p><strong>Sample Query:</strong></p>
<pre><code class="language-graphql">
query {
  allBooks {
    id
    title
    author
  }
}

mutation {
  createBook(input: {
    title: &quot;New Book&quot;
    author: &quot;John Doe&quot;
    isbn: &quot;123-456&quot;
    publishedYear: 2024
  }) {
    id
    title
  }
}
</code></pre>
<hr>
<h2 id="18-health-checks-and-metrics">18. Health Checks and Metrics</h2>
<h3 id="adding-dependencies">Adding Dependencies</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-smallrye-health&quot;)
    implementation(&quot;io.quarkus:quarkus-micrometer-registry-prometheus&quot;)
}
</code></pre>
<h3 id="custom-health-checks">Custom Health Checks</h3>
<pre><code class="language-kotlin">
package com.example.health

import org.eclipse.microprofile.health.HealthCheck
import org.eclipse.microprofile.health.HealthCheckResponse
import org.eclipse.microprofile.health.Liveness
import org.eclipse.microprofile.health.Readiness
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject
import javax.sql.DataSource

@Liveness
@ApplicationScoped
class LivenessCheck : HealthCheck {
    override fun call(): HealthCheckResponse {
        return HealthCheckResponse.named(&quot;Application Liveness&quot;)
            .up()
            .withData(&quot;time&quot;, System.currentTimeMillis())
            .build()
    }
}

@Readiness
@ApplicationScoped
class ReadinessCheck : HealthCheck {
    
    @Inject
    lateinit var dataSource: DataSource
    
    override fun call(): HealthCheckResponse {
        return try {
            dataSource.connection.use { conn -&gt;
                val isValid = conn.isValid(2)
                HealthCheckResponse.named(&quot;Database Connection&quot;)
                    .state(isValid)
                    .withData(&quot;database&quot;, &quot;PostgreSQL&quot;)
                    .build()
            }
        } catch (e: Exception) {
            HealthCheckResponse.named(&quot;Database Connection&quot;)
                .down()
                .withData(&quot;error&quot;, e.message)
                .build()
        }
    }
}

@ApplicationScoped
class CustomHealthCheck : HealthCheck {
    override fun call(): HealthCheckResponse {
        val isHealthy = checkExternalService()
        
        return HealthCheckResponse.named(&quot;External Service Check&quot;)
            .state(isHealthy)
            .withData(&quot;service&quot;, &quot;payment-gateway&quot;)
            .build()
    }
    
    private fun checkExternalService(): Boolean {
        // Check external service connectivity
        return true
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@Liveness</code> checks if app is running. <code>@Readiness</code> checks if app is ready to serve requests. Access at <code>/q/health/live</code> and <code>/q/health/ready</code>.</p>
<h3 id="custom-metrics">Custom Metrics</h3>
<pre><code class="language-kotlin">
package com.example.metrics

import io.micrometer.core.instrument.MeterRegistry
import io.micrometer.core.instrument.Timer
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject

@ApplicationScoped
class MetricsService {
    
    @Inject
    lateinit var registry: MeterRegistry
    
    fun recordOrderProcessing(orderId: String, durationMs: Long) {
        registry.counter(&quot;orders.processed&quot;, &quot;order_id&quot;, orderId).increment()
        
        Timer.builder(&quot;orders.processing.time&quot;)
            .description(&quot;Time taken to process orders&quot;)
            .tag(&quot;order_id&quot;, orderId)
            .register(registry)
            .record(durationMs, java.util.concurrent.TimeUnit.MILLISECONDS)
    }
    
    fun recordPayment(amount: Double, success: Boolean) {
        registry.counter(
            &quot;payments.total&quot;,
            &quot;status&quot;, if (success) &quot;success&quot; else &quot;failed&quot;
        ).increment()
        
        registry.gauge(
            &quot;payments.amount&quot;,
            listOf(),
            amount
        )
    }
}
</code></pre>
<p><strong>Explanation:</strong> Micrometer provides metrics abstraction. Common metrics: counters, gauges, timers. Access Prometheus metrics at <code>/q/metrics</code>.</p>
<hr>
<h2 id="19-multitenancy">19. Multitenancy</h2>
<pre><code class="language-kotlin">
package com.example.multitenancy

import io.quarkus.arc.Arc
import io.quarkus.hibernate.orm.PersistenceUnitExtension
import io.quarkus.hibernate.orm.runtime.tenant.TenantResolver
import javax.enterprise.context.ApplicationScoped
import javax.ws.rs.core.Context
import javax.ws.rs.core.HttpHeaders

@ApplicationScoped
class CustomTenantResolver : TenantResolver {
    
    @Context
    lateinit var headers: HttpHeaders
    
    override fun getDefaultTenantId(): String = &quot;default&quot;
    
    override fun resolveTenantId(): String {
        val tenantId = headers.getHeaderString(&quot;X-Tenant-ID&quot;)
        return tenantId ?: getDefaultTenantId()
    }
}
</code></pre>
<h3 id="configuration">Configuration</h3>
<pre><code class="language-properties">
# Multitenancy
quarkus.hibernate-orm.multitenant=SCHEMA
quarkus.hibernate-orm.multitenant-schema-datasource=tenant_ds

# Default datasource
quarkus.datasource.db-kind=postgresql
quarkus.datasource.username=postgres
quarkus.datasource.password=postgres
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/multitenantdb
</code></pre>
<h3 id="tenant-aware-service">Tenant-Aware Service</h3>
<pre><code class="language-kotlin">
package com.example.multitenancy

import com.example.entity.Product
import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepository
import javax.enterprise.context.ApplicationScoped
import javax.transaction.Transactional

@ApplicationScoped
class TenantProductRepository : PanacheRepository&lt;Product&gt; {
    
    @Transactional
    fun createForTenant(name: String, price: Double): Product {
        val product = Product().apply {
            this.name = name
            this.price = price
        }
        persist(product)
        return product
    }
    
    fun findAllForTenant(): List&lt;Product&gt; = listAll()
}
</code></pre>
<p><strong>Explanation:</strong> Tenant resolver extracts tenant ID from request headers. Each tenant has isolated data in separate schemas. Hibernate automatically filters queries by tenant.</p>
<hr>
<h2 id="20-custom-extensions">20. Custom Extensions</h2>
<h3 id="extension-processor">Extension Processor</h3>
<pre><code class="language-kotlin">
package com.example.extension

import io.quarkus.arc.deployment.AdditionalBeanBuildItem
import io.quarkus.deployment.annotations.BuildProducer
import io.quarkus.deployment.annotations.BuildStep
import io.quarkus.deployment.builditem.FeatureBuildItem

class CustomExtensionProcessor {
    
    private val FEATURE = &quot;custom-extension&quot;
    
    @BuildStep
    fun feature(): FeatureBuildItem {
        return FeatureBuildItem(FEATURE)
    }
    
    @BuildStep
    fun registerBeans(additionalBeans: BuildProducer&lt;AdditionalBeanBuildItem&gt;) {
        additionalBeans.produce(
            AdditionalBeanBuildItem(CustomService::class.java)
        )
    }
}

@ApplicationScoped
class CustomService {
    fun doSomething() {
        println(&quot;Custom extension service invoked&quot;)
    }
}
</code></pre>
<p><strong>Explanation:</strong> Build steps run at build time to configure the application. Extensions can register beans, configure frameworks, or modify bytecode.</p>
<hr>
<h2 id="21-native-compilation">21. Native Compilation</h2>
<h3 id="configuration-for-native">Configuration for Native</h3>
<pre><code class="language-properties">
# Native build
quarkus.native.container-build=true
quarkus.native.builder-image=quay.io/quarkus/ubi-quarkus-mandrel-builder-image:jdk-21

# Reflection configuration (if needed)
quarkus.native.additional-build-args=\
  --initialize-at-run-time=com.example.RuntimeClass,\
  --initialize-at-build-time=com.example.BuildTimeClass
</code></pre>
<h3 id="reflection-configuration">Reflection Configuration</h3>
<pre><code class="language-kotlin">
package com.example.native_config

import io.quarkus.runtime.annotations.RegisterForReflection

@RegisterForReflection
data class ReflectiveModel(
    val id: Long,
    val name: String
)

@RegisterForReflection(targets = [
    java.time.LocalDateTime::class,
    kotlin.collections.ArrayList::class
])
class ReflectionConfig
</code></pre>
<p><strong>Build Native Image:</strong></p>
<pre><code class="language-bash">
./gradlew build -Dquarkus.package.type=native
</code></pre>
<p><strong>Explanation:</strong> Native compilation with GraalVM creates standalone executables. <code>@RegisterForReflection</code> ensures classes work with reflection in native mode. Build times are longer but startup is instant.</p>
<hr>
<h2 id="22-coroutines-integration">22. Coroutines Integration</h2>
<h3 id="adding-dependencies">Adding Dependencies</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;org.jetbrains.kotlinx:kotlinx-coroutines-core:1.7.3&quot;)
    implementation(&quot;org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:1.7.3&quot;)
}
</code></pre>
<h3 id="coroutine-based-service">Coroutine-Based Service</h3>
<pre><code class="language-kotlin">
package com.example.coroutines

import kotlinx.coroutines.*
import org.jboss.logging.Logger
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class CoroutineService {
    
    private val log = Logger.getLogger(CoroutineService::class.java)
    private val scope = CoroutineScope(Dispatchers.IO + SupervisorJob())
    
    suspend fun fetchDataConcurrently(): Map&lt;String, Any&gt; = coroutineScope {
        val user = async { fetchUser() }
        val orders = async { fetchOrders() }
        val products = async { fetchProducts() }
        
        mapOf(
            &quot;user&quot; to user.await(),
            &quot;orders&quot; to orders.await(),
            &quot;products&quot; to products.await()
        )
    }
    
    private suspend fun fetchUser(): String {
        delay(1000)
        return &quot;User Data&quot;
    }
    
    private suspend fun fetchOrders(): List&lt;String&gt; {
        delay(1500)
        return listOf(&quot;Order1&quot;, &quot;Order2&quot;)
    }
    
    private suspend fun fetchProducts(): List&lt;String&gt; {
        delay(800)
        return listOf(&quot;Product1&quot;, &quot;Product2&quot;)
    }
    
    fun processInBackground(data: String) {
        scope.launch {
            log.info(&quot;Processing started: $data&quot;)
            delay(5000)
            log.info(&quot;Processing completed: $data&quot;)
        }
    }
}
</code></pre>
<h3 id="coroutine-resource">Coroutine Resource</h3>
<pre><code class="language-kotlin">
package com.example.coroutines

import kotlinx.coroutines.runBlocking
import javax.inject.Inject
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path(&quot;/api/coroutines&quot;)
@Produces(MediaType.APPLICATION_JSON)
class CoroutineResource {
    
    @Inject
    lateinit var service: CoroutineService
    
    @GET
    @Path(&quot;/concurrent&quot;)
    fun getConcurrentData(): Map&lt;String, Any&gt; = runBlocking {
        service.fetchDataConcurrently()
    }
}
</code></pre>
<p><strong>Explanation:</strong> Coroutines provide structured concurrency. <code>async</code> runs tasks concurrently, <code>await</code> retrieves results. <code>runBlocking</code> bridges suspend functions with blocking code.</p>
<hr>
<h2 id="23-advanced-testing">23. Advanced Testing</h2>
<h3 id="test-configuration">Test Configuration</h3>
<pre><code class="language-kotlin">
// src/test/resources/application.properties
quarkus.datasource.db-kind=h2
quarkus.datasource.jdbc.url=jdbc:h2:mem:test
quarkus.hibernate-orm.database.generation=drop-and-create
quarkus.hibernate-orm.sql-load-script=test-data.sql
</code></pre>
<h3 id="integration-tests">Integration Tests</h3>
<pre><code class="language-kotlin">
package com.example

import io.quarkus.test.junit.QuarkusTest
import io.quarkus.test.junit.TestProfile
import io.quarkus.test.h2.H2DatabaseTestResource
import io.quarkus.test.common.QuarkusTestResource
import io.restassured.RestAssured.given
import io.restassured.http.ContentType
import org.hamcrest.CoreMatchers.*
import org.junit.jupiter.api.*
import javax.inject.Inject
import javax.transaction.Transactional

@QuarkusTest
@QuarkusTestResource(H2DatabaseTestResource::class)
@TestMethodOrder(MethodOrderer.OrderAnnotation::class)
class ProductResourceTest {
    
    @Inject
    lateinit var productRepository: ProductRepository
    
    @Test
    @Order(1)
    fun testGetAllProducts() {
        given()
            .`when`().get(&quot;/api/products&quot;)
            .then()
            .statusCode(200)
            .body(&quot;$.size()&quot;, greaterThan(0))
    }
    
    @Test
    @Order(2)
    fun testCreateProduct() {
        val product = &quot;&quot;&quot;
            {
                &quot;name&quot;: &quot;Test Product&quot;,
                &quot;description&quot;: &quot;Test Description&quot;,
                &quot;price&quot;: 99.99,
                &quot;category&quot;: &quot;Test&quot;,
                &quot;stock&quot;: 10
            }
        &quot;&quot;&quot;.trimIndent()
        
        given()
            .contentType(ContentType.JSON)
            .body(product)
            .`when`().post(&quot;/api/products&quot;)
            .then()
            .statusCode(201)
            .body(&quot;name&quot;, equalTo(&quot;Test Product&quot;))
            .body(&quot;price&quot;, equalTo(99.99f))
    }
    
    @Test
    @Order(3)
    @Transactional
    fun testWithDatabase() {
        val product = Product().apply {
            name = &quot;Direct DB Product&quot;
            price = 49.99
            category = &quot;Test&quot;
        }
        productRepository.persist(product)
        
        val found = productRepository.findById(product.id!!)
        Assertions.assertNotNull(found)
        Assertions.assertEquals(&quot;Direct DB Product&quot;, found?.name)
    }
}
</code></pre>
<h3 id="mocking">Mocking</h3>
<pre><code class="language-kotlin">
package com.example

import io.quarkus.test.junit.QuarkusTest
import io.quarkus.test.junit.mockito.InjectMock
import org.junit.jupiter.api.Test
import org.mockito.Mockito.*
import javax.inject.Inject

@QuarkusTest
class ServiceMockTest {
    
    @InjectMock
    lateinit var externalService: ExternalService
    
    @Inject
    lateinit var businessService: BusinessService
    
    @Test
    fun testWithMock() {
        `when`(externalService.fetchData())
            .thenReturn(&quot;Mocked Data&quot;)
        
        val result = businessService.processData()
        
        Assertions.assertEquals(&quot;Processed: Mocked Data&quot;, result)
        verify(externalService, times(1)).fetchData()
    }
}
</code></pre>
<p><strong>Explanation:</strong> <code>@QuarkusTest</code> runs full integration tests. <code>@InjectMock</code> replaces beans with mocks. <code>@TestProfile</code> customizes test configuration.</p>
<hr>
<h2 id="24-microservice-patterns">24. Microservice Patterns</h2>
<h3 id="circuit-breaker">Circuit Breaker</h3>
<pre><code class="language-kotlin">
dependencies {
    implementation(&quot;io.quarkus:quarkus-smallrye-fault-tolerance&quot;)
}
</code></pre>
<pre><code class="language-kotlin">
package com.example.resilience

import org.eclipse.microprofile.faulttolerance.*
import org.jboss.logging.Logger
import javax.enterprise.context.ApplicationScoped
import java.time.temporal.ChronoUnit

@ApplicationScoped
class ResilientService {
    
    private val log = Logger.getLogger(ResilientService::class.java)
    
    @CircuitBreaker(
        requestVolumeThreshold = 4,
        failureRatio = 0.5,
        delay = 5000,
        successThreshold = 2
    )
    @Retry(maxRetries = 3, delay = 1000)
    @Timeout(value = 2, unit = ChronoUnit.SECONDS)
    @Fallback(fallbackMethod = &quot;fallbackMethod&quot;)
    fun callExternalService(): String {
        log.info(&quot;Calling external service&quot;)
        
        // Simulate occasional failures
        if (Math.random() &lt; 0.3) {
            throw RuntimeException(&quot;Service unavailable&quot;)
        }
        
        return &quot;External service response&quot;
    }
    
    private fun fallbackMethod(): String {
        log.warn(&quot;Using fallback method&quot;)
        return &quot;Fallback response&quot;
    }
    
    @Bulkhead(value = 5, waitingTaskQueue = 10)
    fun limitedConcurrency(): String {
        Thread.sleep(1000)
        return &quot;Processed&quot;
    }
}
</code></pre>
<p><strong>Explanation:</strong> </p>
<ul>
<li><code>@CircuitBreaker</code> prevents cascading failures</li>
<li><code>@Retry</code> automatically retries failed calls</li>
<li><code>@Timeout</code> limits execution time</li>
<li><code>@Fallback</code> provides alternative response</li>
<li><code>@Bulkhead</code> limits concurrent executions</li>
</ul>
<hr>
<h2 id="25-openapi-and-swagger">25. OpenAPI and Swagger</h2>
<h3 id="configuration">Configuration</h3>
<pre><code class="language-properties">
quarkus.swagger-ui.always-include=true
quarkus.swagger-ui.path=/swagger-ui
</code></pre>
<h3 id="documented-api">Documented API</h3>
<pre><code class="language-kotlin">
package com.example.api

import org.eclipse.microprofile.openapi.annotations.Operation
import org.eclipse.microprofile.openapi.annotations.enums.SchemaType
import org.eclipse.microprofile.openapi.annotations.media.Content
import org.eclipse.microprofile.openapi.annotations.media.Schema
import org.eclipse.microprofile.openapi.annotations.parameters.Parameter
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses
import org.eclipse.microprofile.openapi.annotations.tags.Tag
import javax.ws.rs.*
import javax.ws.rs.core.MediaType

@Path(&quot;/api/documented&quot;)
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = &quot;Product API&quot;, description = &quot;Operations related to products&quot;)
class DocumentedProductResource {
    
    @GET
    @Operation(
        summary = &quot;Get all products&quot;,
        description = &quot;Retrieves a list of all products in the system&quot;
    )
    @APIResponses(
        APIResponse(
            responseCode = &quot;200&quot;,
            description = &quot;Products retrieved successfully&quot;,
            content = [Content(
                mediaType = MediaType.APPLICATION_JSON,
                schema = Schema(type = SchemaType.ARRAY, implementation = Product::class)
            )]
        )
    )
    fun getAllProducts(): List&lt;Product&gt; {
        return emptyList()
    }
    
    @GET
    @Path(&quot;/{id}&quot;)
    @Operation(summary = &quot;Get product by ID&quot;)
    @APIResponses(
        APIResponse(responseCode = &quot;200&quot;, description = &quot;Product found&quot;),
        APIResponse(responseCode = &quot;404&quot;, description = &quot;Product not found&quot;)
    )
    fun getById(
        @Parameter(description = &quot;Product ID&quot;, required = true)
        @PathParam(&quot;id&quot;) id: Long
    ): Product? {
        return null
    }
}
</code></pre>
<p><strong>Explanation:</strong> OpenAPI annotations generate interactive API documentation. Access Swagger UI at <code>/swagger-ui</code>. Provides endpoint testing interface.</p>
<hr>
<h2 id="summary">Summary</h2>
<p>This guide covered:</p>
<h3 id="beginner">Beginner</h3>
<ul>
<li>Project setup and configuration</li>
<li>REST endpoints and dependency injection</li>
<li>Configuration management</li>
<li>Data classes and JSON</li>
<li>Basic testing</li>
</ul>
<h3 id="intermediate">Intermediate</h3>
<ul>
<li>Database with Panache</li>
<li>Transactions and services</li>
<li>Exception handling</li>
<li>Validation</li>
<li>Reactive programming</li>
<li>Scheduled jobs</li>
<li>WebSockets</li>
</ul>
<h3 id="advanced">Advanced</h3>
<ul>
<li>JWT security</li>
<li>Kafka messaging</li>
<li>Caching strategies</li>
<li>GraphQL APIs</li>
<li>Health checks and metrics</li>
<li>Multitenancy</li>
<li>Custom extensions</li>
<li>Native compilation</li>
<li>Coroutines</li>
<li>Advanced testing</li>
<li>Resilience patterns</li>
<li>API documentation</li>
</ul>
<p>Each section builds on previous concepts, providing a comprehensive path from beginner to advanced Quarkus and Kotlin development.</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = quarkusKotlinGuideContentData;
}
