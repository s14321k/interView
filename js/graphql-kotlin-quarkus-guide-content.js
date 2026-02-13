// Graphql Kotlin Quarkus Guide - Content Data
const graphqlKotlinQuarkusGuideContentData = `<h1 id="graphql-with-kotlin-in-quarkus-complete-beginner-to-advanced-guide">GraphQL with Kotlin in Quarkus: Complete Beginner to Advanced Guide</h1>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#basic-part">Basic Part</a></li>
<li><a href="#intermediate-part">Intermediate Part</a></li>
<li><a href="#advanced-part">Advanced Part</a></li>
</ul>
<hr>
<h2 id="basic-part">Basic Part</h2>
<h3 id="what-is-kotlin">What is Kotlin?</h3>
<p><strong>Simple Explanation:</strong></p>
<p>Kotlin is a modern programming language that runs on the Java Virtual Machine (JVM). Think of it as Java&#x27;s younger, cooler sibling - it can do everything Java does, but with less code and more elegance.</p>
<p><strong>Real-World Analogy:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Java vs Kotlin                          │
├─────────────────────────────────────────────────┤
│                                                 │
│  JAVA:                                          │
│  Like writing a formal business letter         │
│  - Very verbose                                 │
│  - Lots of ceremony                             │
│  - Clear but wordy                              │
│                                                 │
│  KOTLIN:                                        │
│  Like sending a text message                    │
│  - Concise and clear                            │
│  - Gets to the point                            │
│  - Still professional                           │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p><strong>Code Comparison:</strong></p>
<pre><code class="language-kotlin">
// JAVA - Creating a simple data class
public class Book {
    private Long id;
    private String title;
    private String author;
    
    public Book(Long id, String title, String author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    
    @Override
    public boolean equals(Object o) { /* ... */ }
    
    @Override
    public int hashCode() { /* ... */ }
}

// KOTLIN - Same thing in ONE line!
data class Book(val id: Long, val title: String, val author: String)
</code></pre>
<p>That&#x27;s right - 30+ lines of Java becomes 1 line in Kotlin! 🎉</p>
<p><strong>Why Kotlin is Great for Beginners:</strong></p>
<ul>
<li><strong>Less Boilerplate</strong> - Write less code to do the same thing</li>
<li><strong>Null Safety</strong> - Prevents most null pointer errors (the #1 Java bug)</li>
<li><strong>Modern Features</strong> - Coroutines, extension functions, smart casts</li>
<li><strong>100% Java Compatible</strong> - Use any Java library</li>
<li><strong>Easy to Learn</strong> - If you know Java, you can learn Kotlin in days</li>
</ul>
<p><strong>Real-World Benefits:</strong></p>
<pre><code class="language-">
Traditional Java Project:
  10,000 lines of code
  500 null pointer checks
  200 getter/setter methods
  100 equals/hashCode methods

Same Project in Kotlin:
  4,000 lines of code
  50 null checks (compiler handles most)
  0 getter/setter methods (automatic)
  0 equals/hashCode (data classes handle it)

Result: 60% less code! ✨
</code></pre>
<hr>
<h3 id="why-kotlin-quarkus-graphql">Why Kotlin + Quarkus + GraphQL?</h3>
<p><strong>The Dream Team:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│      The Perfect Technology Stack               │
└─────────────────────────────────────────────────┘

KOTLIN
  ↓ Modern, concise language
  ↓ Null safety built-in
  ↓ Coroutines for async
  
QUARKUS
  ↓ Supersonic startup
  ↓ Tiny memory footprint
  ↓ Native compilation
  
GRAPHQL
  ↓ Flexible data fetching
  ↓ Type-safe API
  ↓ Perfect for mobile/web
  
RESULT: 🚀
  - Fast to develop
  - Fast to deploy
  - Fast to run
  - Easy to maintain
</code></pre>
<p><strong>Real-World Analogy:</strong></p>
<p>Building a racing car:</p>
<ul>
<li><strong>Kotlin</strong> = Lightweight materials (less weight, more speed)</li>
<li><strong>Quarkus</strong> = Turbocharged engine (fast startup, efficient)</li>
<li><strong>GraphQL</strong> = Precision steering (exact control)</li>
</ul>
<hr>
<h3 id="setting-up-kotlin-with-quarkus-graphql">Setting Up Kotlin with Quarkus GraphQL</h3>
<h4 id="step-1-create-a-quarkus-kotlin-project">Step 1: Create a Quarkus Kotlin Project</h4>
<p><strong>Using Quarkus CLI:</strong></p>
<pre><code class="language-bash">
# Create a new Quarkus project with Kotlin
quarkus create app \
  org.acme:graphql-kotlin \
  --extension=kotlin,smallrye-graphql,hibernate-orm-panache-kotlin,jdbc-postgresql
</code></pre>
<p><strong>Or using Maven:</strong></p>
<pre><code class="language-bash">
mvn io.quarkus:quarkus-maven-plugin:3.6.0:create \
  -DprojectGroupId=org.acme \
  -DprojectArtifactId=graphql-kotlin \
  -Dextensions=&quot;kotlin,smallrye-graphql,hibernate-orm-panache-kotlin,jdbc-postgresql&quot;
</code></pre>
<p><strong>What Each Extension Does:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Quarkus Extensions Explained            │
├─────────────────────────────────────────────────┤
│                                                 │
│  kotlin                                         │
│  → Adds Kotlin language support                │
│  → Like installing Kotlin &quot;drivers&quot;             │
│                                                 │
│  smallrye-graphql                               │
│  → GraphQL server implementation                │
│  → The core GraphQL engine                      │
│                                                 │
│  hibernate-orm-panache-kotlin                   │
│  → Database access made easy (Kotlin version)   │
│  → Like a super-smart database assistant        │
│                                                 │
│  jdbc-postgresql                                │
│  → PostgreSQL database driver                   │
│  → Lets you talk to PostgreSQL database         │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<h4 id="step-2-add-dependencies-manual-setup">Step 2: Add Dependencies (Manual Setup)</h4>
<p>If you&#x27;re setting up manually, add these to your <code>pom.xml</code>:</p>
<pre><code class="language-xml">
&lt;properties&gt;
    &lt;!-- Kotlin version --&gt;
    &lt;kotlin.version&gt;1.9.21&lt;/kotlin.version&gt;
&lt;/properties&gt;

&lt;dependencies&gt;
    &lt;!-- Kotlin Standard Library --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.jetbrains.kotlin&lt;/groupId&gt;
        &lt;artifactId&gt;kotlin-stdlib-jdk8&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- GraphQL for Quarkus --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-smallrye-graphql&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- GraphQL UI (testing interface) --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-smallrye-graphql-ui&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- Panache for Kotlin (easy database) --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-hibernate-orm-panache-kotlin&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- PostgreSQL Driver --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-jdbc-postgresql&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- Jackson for Kotlin (JSON support) --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.fasterxml.jackson.module&lt;/groupId&gt;
        &lt;artifactId&gt;jackson-module-kotlin&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;

&lt;build&gt;
    &lt;sourceDirectory&gt;src/main/kotlin&lt;/sourceDirectory&gt;
    &lt;testSourceDirectory&gt;src/test/kotlin&lt;/testSourceDirectory&gt;
    
    &lt;plugins&gt;
        &lt;!-- Kotlin Maven Plugin --&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;org.jetbrains.kotlin&lt;/groupId&gt;
            &lt;artifactId&gt;kotlin-maven-plugin&lt;/artifactId&gt;
            &lt;version&gt;${kotlin.version}&lt;/version&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;id&gt;compile&lt;/id&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;compile&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
                &lt;execution&gt;
                    &lt;id&gt;test-compile&lt;/id&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;test-compile&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
            &lt;configuration&gt;
                &lt;jvmTarget&gt;17&lt;/jvmTarget&gt;
            &lt;/configuration&gt;
        &lt;/plugin&gt;
        
        &lt;!-- Quarkus Maven Plugin --&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
            &lt;artifactId&gt;quarkus-maven-plugin&lt;/artifactId&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;
</code></pre>
<p><strong>Understanding the Dependencies:</strong></p>
<ul>
<li><strong>kotlin-stdlib-jdk8</strong> - Core Kotlin features</li>
<li><strong>jackson-module-kotlin</strong> - Helps convert Kotlin objects to/from JSON</li>
<li><strong>panache-kotlin</strong> - Kotlin-friendly database layer</li>
</ul>
<h4 id="step-3-configure-your-application">Step 3: Configure Your Application</h4>
<p>Create/edit <code>src/main/resources/application.properties</code>:</p>
<pre><code class="language-properties">
# ═══════════════════════════════════════════════════════
# GRAPHQL CONFIGURATION
# ═══════════════════════════════════════════════════════

# Where your GraphQL API will be available
quarkus.smallrye-graphql.root-path=/graphql

# Enable the GraphQL UI for testing
quarkus.smallrye-graphql.ui.enable=true
quarkus.smallrye-graphql.ui.root-path=/graphql-ui

# Show detailed errors (development only!)
quarkus.smallrye-graphql.print-data-fetcher-exception=true
quarkus.smallrye-graphql.error-extension-fields=exception,classification

# ═══════════════════════════════════════════════════════
# CORS (Allow frontend to connect)
# ═══════════════════════════════════════════════════════

quarkus.http.cors=true
quarkus.http.cors.origins=http://localhost:3000

# ═══════════════════════════════════════════════════════
# DATABASE CONFIGURATION
# ═══════════════════════════════════════════════════════

# Database type
quarkus.datasource.db-kind=postgresql

# Connection URL
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/bookdb

# Credentials
quarkus.datasource.username=postgres
quarkus.datasource.password=postgres

# What to do with database on startup
# drop-and-create = DELETE everything and recreate (DEV ONLY!)
# update = Update schema, keep data
# none = Don&#x27;t touch the database (PRODUCTION)
quarkus.hibernate-orm.database.generation=drop-and-create

# Show SQL queries in console (helpful for learning)
quarkus.hibernate-orm.log.sql=true
</code></pre>
<hr>
<h3 id="creating-your-first-graphql-api-in-kotlin">Creating Your First GraphQL API in Kotlin</h3>
<p><strong>What We&#x27;re Building:</strong></p>
<p>A simple bookstore API where you can:</p>
<ul>
<li>Get all books</li>
<li>Get a book by ID</li>
<li>Add a new book</li>
<li>Delete a book</li>
</ul>
<p>Let&#x27;s build it step by step!</p>
<hr>
<h4 id="step-1-create-a-book-data-class">Step 1: Create a Book Data Class</h4>
<p><strong>What is a Data Class?</strong></p>
<p>In Kotlin, a <code>data class</code> automatically generates:</p>
<ul>
<li>Getters and setters</li>
<li><code>equals()</code> and <code>hashCode()</code> methods</li>
<li><code>toString()</code> method</li>
<li><code>copy()</code> method</li>
</ul>
<p>All for FREE! No boilerplate code needed.</p>
<pre><code class="language-kotlin">
package org.acme.model

/**
 * Represents a book in our bookstore
 * 
 * &#x27;data class&#x27; is Kotlin magic that creates:
 * - All getters/setters automatically
 * - equals() and hashCode()
 * - toString() that shows all fields
 * - copy() to create modified copies
 */
data class Book(
    // val = immutable (can&#x27;t change after creation)
    // Like &#x27;final&#x27; in Java
    val id: Long,
    
    val title: String,
    
    val author: String,
    
    // These are nullable (can be null)
    // The &#x27;?&#x27; means &quot;this might be null&quot;
    val pages: Int? = null,
    
    val price: Double? = null
)
</code></pre>
<p><strong>Kotlin vs Java Comparison:</strong></p>
<pre><code class="language-kotlin">
// KOTLIN (1 line!)
data class Book(val id: Long, val title: String)

// Automatically gets:
val book = Book(1, &quot;Kotlin in Action&quot;)
println(book.id)        // Getter (automatic)
println(book.title)     // Getter (automatic)
println(book)           // Book(id=1, title=Kotlin in Action)
val copy = book.copy(title = &quot;New Title&quot;)  // Create modified copy
</code></pre>
<pre><code class="language-java">
// JAVA (20+ lines)
public class Book {
    private final Long id;
    private final String title;
    
    public Book(Long id, String title) {
        this.id = id;
        this.title = title;
    }
    
    public Long getId() { return id; }
    public String getTitle() { return title; }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return Objects.equals(id, book.id) &amp;&amp; 
               Objects.equals(title, book.title);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id, title);
    }
    
    @Override
    public String toString() {
        return &quot;Book{id=&quot; + id + &quot;, title=&#x27;&quot; + title + &quot;&#x27;}&quot;;
    }
}
</code></pre>
<p><strong>Understanding Kotlin&#x27;s Null Safety:</strong></p>
<pre><code class="language-kotlin">
// ═══════════════════════════════════════════════════════
// NULLABLE vs NON-NULLABLE
// ═══════════════════════════════════════════════════════

// Non-nullable (no &#x27;?&#x27;) - MUST have a value
val title: String = &quot;Clean Code&quot;
// title = null  // ❌ Compiler error!

// Nullable (with &#x27;?&#x27;) - Can be null
val subtitle: String? = null  // ✅ OK
val subtitle2: String? = &quot;A Guide&quot;  // ✅ Also OK

// Using nullable values safely
val length = subtitle?.length  // Safe call - returns null if subtitle is null
val lengthOrZero = subtitle?.length ?: 0  // Elvis operator - default value

// Force unwrap (dangerous! Only if you&#x27;re 100% sure)
val forced = subtitle!!.length  // !! = &quot;I guarantee this is not null&quot;
</code></pre>
<hr>
<h4 id="step-2-create-the-graphql-resource">Step 2: Create the GraphQL Resource</h4>
<p><strong>What is a Resource?</strong></p>
<p>A resource is a class that handles GraphQL queries and mutations. It&#x27;s like a waiter in a restaurant - it takes orders (queries) and delivers food (data).</p>
<pre><code class="language-kotlin">
package org.acme.graphql

import org.eclipse.microprofile.graphql.GraphQLApi
import org.eclipse.microprofile.graphql.Query
import org.eclipse.microprofile.graphql.Mutation
import org.eclipse.microprofile.graphql.Name
import org.eclipse.microprofile.graphql.Description
import org.acme.model.Book
import jakarta.enterprise.context.ApplicationScoped
import java.util.concurrent.atomic.AtomicLong

/**
 * GraphQL API for managing books
 * 
 * @GraphQLApi - Tells Quarkus &quot;this is a GraphQL API!&quot;
 * @ApplicationScoped - Only one instance exists (singleton)
 */
@GraphQLApi
@ApplicationScoped
class BookResource {
    
    // ═══════════════════════════════════════════════════
    // STORAGE (In-memory for now, database later)
    // ═══════════════════════════════════════════════════
    
    // Mutable list to store books
    // &#x27;mutableListOf&#x27; = ArrayList in Kotlin
    private val books = mutableListOf&lt;Book&gt;()
    
    // Counter for generating unique IDs
    private val idCounter = AtomicLong(0)
    
    // ═══════════════════════════════════════════════════
    // INITIALIZATION BLOCK
    // Runs when the class is created
    // ═══════════════════════════════════════════════════
    
    init {
        // Add some sample books
        // Kotlin&#x27;s concise syntax!
        books.add(
            Book(
                id = idCounter.incrementAndGet(),
                title = &quot;Kotlin in Action&quot;,
                author = &quot;Dmitry Jemerov&quot;,
                pages = 360,
                price = 44.99
            )
        )
        
        books.add(
            Book(
                id = idCounter.incrementAndGet(),
                title = &quot;Effective Kotlin&quot;,
                author = &quot;Marcin Moskala&quot;,
                pages = 414,
                price = 39.99
            )
        )
    }
    
    // ═══════════════════════════════════════════════════
    // QUERIES (Reading data - doesn&#x27;t change anything)
    // ═══════════════════════════════════════════════════
    
    /**
     * Get all books
     * 
     * @Query - Marks this as a GraphQL query
     * @Description - Shows up in GraphQL schema documentation
     * 
     * Return type: List&lt;Book&gt; - Kotlin knows this is non-nullable list
     */
    @Query(&quot;allBooks&quot;)
    @Description(&quot;Get all books in the bookstore&quot;)
    fun getAllBooks(): List&lt;Book&gt; {
        // Simply return the list - Kotlin infers the return type!
        return books
    }
    
    /**
     * Get a specific book by ID
     * 
     * @Name - Names the parameter in GraphQL
     * 
     * Return type: Book? - The &#x27;?&#x27; means might return null if not found
     */
    @Query
    @Description(&quot;Find a book by its unique ID&quot;)
    fun bookById(@Name(&quot;id&quot;) id: Long): Book? {
        // Kotlin&#x27;s &#x27;find&#x27; is like Java&#x27;s stream().filter().findFirst()
        // But much more concise!
        return books.find { it.id == id }
        
        // &#x27;it&#x27; is a special Kotlin keyword
        // In a lambda with one parameter, &#x27;it&#x27; refers to that parameter
        // This is equivalent to: books.find { book -&gt; book.id == id }
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATIONS (Changing data - creates, updates, deletes)
    // ═══════════════════════════════════════════════════
    
    /**
     * Add a new book
     * 
     * @Mutation - Marks this as a GraphQL mutation
     * 
     * Kotlin features used:
     * - Named parameters for clarity
     * - Default values (pages and price are optional)
     * - Smart return type inference
     */
    @Mutation
    @Description(&quot;Add a new book to the bookstore&quot;)
    fun addBook(
        @Name(&quot;title&quot;) title: String,
        @Name(&quot;author&quot;) author: String,
        @Name(&quot;pages&quot;) pages: Int? = null,  // Optional parameter with default null
        @Name(&quot;price&quot;) price: Double? = null
    ): Book {
        // Create new book
        val book = Book(
            id = idCounter.incrementAndGet(),
            title = title,
            author = author,
            pages = pages,
            price = price
        )
        
        // Add to list
        books.add(book)
        
        // Return the created book
        return book
    }
    
    /**
     * Delete a book by ID
     * 
     * Returns true if deleted, false if not found
     */
    @Mutation
    @Description(&quot;Delete a book from the bookstore&quot;)
    fun deleteBook(@Name(&quot;id&quot;) id: Long): Boolean {
        // removeIf is a Kotlin extension function
        // Returns true if any element was removed
        return books.removeIf { it.id == id }
    }
    
    // ═══════════════════════════════════════════════════
    // BONUS: Kotlin-specific features
    // ═══════════════════════════════════════════════════
    
    /**
     * Search books by title (case-insensitive)
     * 
     * Demonstrates Kotlin&#x27;s powerful collection functions
     */
    @Query
    @Description(&quot;Search for books by title&quot;)
    fun searchBooks(@Name(&quot;query&quot;) query: String): List&lt;Book&gt; {
        return books.filter { book -&gt;
            // &#x27;contains&#x27; with ignoreCase parameter
            book.title.contains(query, ignoreCase = true)
        }
    }
    
    /**
     * Get books in a price range
     * 
     * Shows null-safe operators
     */
    @Query
    @Description(&quot;Find books within a price range&quot;)
    fun booksByPriceRange(
        @Name(&quot;minPrice&quot;) minPrice: Double,
        @Name(&quot;maxPrice&quot;) maxPrice: Double
    ): List&lt;Book&gt; {
        return books.filter { book -&gt;
            // Elvis operator (?:) provides default value if null
            val bookPrice = book.price ?: 0.0
            bookPrice &gt;= minPrice &amp;&amp; bookPrice &lt;= maxPrice
        }
    }
}
</code></pre>
<p><strong>Understanding Kotlin Features Used:</strong></p>
<pre><code class="language-kotlin">
// ═══════════════════════════════════════════════════════
// KOTLIN FEATURES EXPLAINED
// ═══════════════════════════════════════════════════════

// 1. TYPE INFERENCE
// Kotlin can figure out types automatically
val name = &quot;John&quot;  // Kotlin knows it&#x27;s String
val age = 25      // Kotlin knows it&#x27;s Int
val price = 29.99 // Kotlin knows it&#x27;s Double

// 2. NAMED PARAMETERS
// Makes function calls super clear
val book = Book(
    id = 1,
    title = &quot;Kotlin Guide&quot;,
    author = &quot;John Doe&quot;,
    pages = 200,
    price = 35.00
)

// 3. DEFAULT PARAMETERS
// No need for method overloading!
fun createBook(
    title: String,
    author: String,
    pages: Int = 100  // Default value
) { }

createBook(&quot;Title&quot;, &quot;Author&quot;)          // Uses default pages = 100
createBook(&quot;Title&quot;, &quot;Author&quot;, 200)     // Overrides pages

// 4. LAMBDA EXPRESSIONS
// Super concise anonymous functions
books.filter { it.price &gt; 30.0 }
books.map { it.title }
books.find { it.id == 5 }

// 5. ELVIS OPERATOR (?:)
// Provide default value for nulls
val price = book.price ?: 0.0
// If book.price is null, use 0.0

// 6. SAFE CALL OPERATOR (?.)
// Only call if not null
val length = book.subtitle?.length
// If subtitle is null, length is null (doesn&#x27;t crash!)

// 7. WHEN EXPRESSION
// Like switch but more powerful
val category = when (book.pages) {
    in 0..100 -&gt; &quot;Short&quot;
    in 101..300 -&gt; &quot;Medium&quot;
    else -&gt; &quot;Long&quot;
}
</code></pre>
<hr>
<h4 id="step-3-generated-graphql-schema">Step 3: Generated GraphQL Schema</h4>
<p><strong>The Magic:</strong></p>
<p>From our Kotlin code, Quarkus automatically generates this GraphQL schema:</p>
<pre><code class="language-graphql">
# ═══════════════════════════════════════════════════
# TYPES (What data looks like)
# ═══════════════════════════════════════════════════

&quot;&quot;&quot;
Represents a book in our bookstore
&quot;&quot;&quot;
type Book {
  id: BigInteger!
  title: String!
  author: String!
  pages: Int
  price: Float
}

# ═══════════════════════════════════════════════════
# QUERIES (Reading data)
# ═══════════════════════════════════════════════════

type Query {
  &quot;&quot;&quot;
  Get all books in the bookstore
  &quot;&quot;&quot;
  allBooks: [Book!]!
  
  &quot;&quot;&quot;
  Find a book by its unique ID
  &quot;&quot;&quot;
  bookById(id: BigInteger!): Book
  
  &quot;&quot;&quot;
  Search for books by title
  &quot;&quot;&quot;
  searchBooks(query: String!): [Book!]!
  
  &quot;&quot;&quot;
  Find books within a price range
  &quot;&quot;&quot;
  booksByPriceRange(minPrice: Float!, maxPrice: Float!): [Book!]!
}

# ═══════════════════════════════════════════════════
# MUTATIONS (Changing data)
# ═══════════════════════════════════════════════════

type Mutation {
  &quot;&quot;&quot;
  Add a new book to the bookstore
  &quot;&quot;&quot;
  addBook(
    title: String!
    author: String!
    pages: Int
    price: Float
  ): Book!
  
  &quot;&quot;&quot;
  Delete a book from the bookstore
  &quot;&quot;&quot;
  deleteBook(id: BigInteger!): Boolean!
}
</code></pre>
<p><strong>How Kotlin Types Map to GraphQL:</strong></p>
<pre><code class="language-">
Kotlin Type          →    GraphQL Type
─────────────────────────────────────────
String               →    String
Int                  →    Int
Long                 →    BigInteger
Double               →    Float
Float                →    Float
Boolean              →    Boolean
List&lt;Book&gt;           →    [Book]
Book?                →    Book (nullable)
Book                 →    Book! (non-null)
</code></pre>
<hr>
<h4 id="step-4-running-and-testing">Step 4: Running and Testing</h4>
<p><strong>Start Your Application:</strong></p>
<pre><code class="language-bash">
# Development mode (with hot reload)
./mvnw quarkus:dev

# Or if using Gradle
./gradlew quarkusDev
</code></pre>
<p><strong>What you&#x27;ll see:</strong></p>
<pre><code class="language-">
__  ____  __  _____   ___  __ ____  ______ 
 --/ __ \/ / / / _ | / _ \/ //_/ / / / __/ 
 -/ /_/ / /_/ / __ |/ , _/ ,&lt; / /_/ /\ \   
--\___\_\____/_/ |_/_/|_/_/|_|\____/___/   

INFO  [io.quarkus] Quarkus 3.6.0 started in 1.234s
INFO  [io.quarkus] Profile dev activated. Live Coding activated.
INFO  [io.quarkus] Installed features: [cdi, kotlin, smallrye-graphql]
</code></pre>
<p><strong>Access GraphQL UI:</strong></p>
<p>Open your browser: <code>http://localhost:8080/graphql-ui</code></p>
<p><strong>Try Your First Query:</strong></p>
<pre><code class="language-graphql">
query {
  allBooks {
    id
    title
    author
    price
  }
}
</code></pre>
<p><strong>Response:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;allBooks&quot;: [
      {
        &quot;id&quot;: 1,
        &quot;title&quot;: &quot;Kotlin in Action&quot;,
        &quot;author&quot;: &quot;Dmitry Jemerov&quot;,
        &quot;price&quot;: 44.99
      },
      {
        &quot;id&quot;: 2,
        &quot;title&quot;: &quot;Effective Kotlin&quot;,
        &quot;author&quot;: &quot;Marcin Moskala&quot;,
        &quot;price&quot;: 39.99
      }
    ]
  }
}
</code></pre>
<p><strong>Try Adding a Book:</strong></p>
<pre><code class="language-graphql">
mutation {
  addBook(
    title: &quot;Kotlin Coroutines&quot;
    author: &quot;Marcin Moskala&quot;
    pages: 250
    price: 42.50
  ) {
    id
    title
  }
}
</code></pre>
<p><strong>Response:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;addBook&quot;: {
      &quot;id&quot;: 3,
      &quot;title&quot;: &quot;Kotlin Coroutines&quot;
    }
  }
}
</code></pre>
<p>Congratulations! You&#x27;ve built your first GraphQL API with Kotlin and Quarkus! 🎉</p>
<hr>
<h3 id="kotlin-specific-graphql-features">Kotlin-Specific GraphQL Features</h3>
<p><strong>Feature 1: Extension Functions</strong></p>
<p>Kotlin lets you add methods to existing classes:</p>
<pre><code class="language-kotlin">
// Extension function on Book class
fun Book.isExpensive(): Boolean {
    return (price ?: 0.0) &gt; 50.0
}

// Use it in GraphQL
@GraphQLApi
class BookResource {
    
    @Query
    fun expensiveBooks(): List&lt;Book&gt; {
        return books.filter { it.isExpensive() }
    }
}
</code></pre>
<p><strong>Feature 2: Sealed Classes for Unions</strong></p>
<p>Perfect for GraphQL union types:</p>
<pre><code class="language-kotlin">
// Sealed class = restricted class hierarchy
sealed class SearchResult {
    data class BookResult(val book: Book) : SearchResult()
    data class AuthorResult(val author: Author) : SearchResult()
}

@GraphQLApi
class SearchResource {
    
    @Query
    fun search(query: String): List&lt;SearchResult&gt; {
        // Return mix of books and authors
        val results = mutableListOf&lt;SearchResult&gt;()
        
        // Add matching books
        books.filter { it.title.contains(query) }
            .forEach { results.add(SearchResult.BookResult(it)) }
        
        // Add matching authors
        authors.filter { it.name.contains(query) }
            .forEach { results.add(SearchResult.AuthorResult(it)) }
        
        return results
    }
}
</code></pre>
<p><strong>Feature 3: Coroutines for Async</strong></p>
<p>Kotlin coroutines make async programming easy:</p>
<pre><code class="language-kotlin">
@GraphQLApi
class BookResource {
    
    // suspend function = can pause and resume
    @Query
    suspend fun fetchRemoteBook(isbn: String): Book {
        // Simulate API call
        delay(1000)  // Non-blocking delay
        return externalApi.getBook(isbn)
    }
}
</code></pre>
<p>This covers the basics! Ready to move to intermediate topics?</p>
<hr>
<h2 id="intermediate-part">Intermediate Part</h2>
<p><strong>What You&#x27;ll Learn:</strong></p>
<ul>
<li>Working with databases using Panache Kotlin</li>
<li>Relationships between entities</li>
<li>Input types with Kotlin data classes</li>
<li>Null safety in GraphQL</li>
<li>Kotlin coroutines for async operations</li>
<li>Error handling the Kotlin way</li>
</ul>
<hr>
<h3 id="database-integration-with-panache-kotlin">Database Integration with Panache Kotlin</h3>
<p><strong>What is Panache Kotlin?</strong></p>
<p>Panache Kotlin is the Kotlin-optimized version of Panache. It uses Kotlin&#x27;s features like:</p>
<ul>
<li>Extension functions</li>
<li>Companion objects</li>
<li>Null safety</li>
<li>Coroutines support</li>
</ul>
<p><strong>Why Panache Kotlin vs Regular Panache:</strong></p>
<pre><code class="language-kotlin">
// REGULAR JAVA PANACHE
@Entity
public class Book extends PanacheEntity {
    public String title;
    
    public static Book findByTitle(String title) {
        return find(&quot;title&quot;, title).firstResult();
    }
}

// KOTLIN PANACHE
@Entity
class Book : PanacheEntity() {
    lateinit var title: String
    
    companion object : PanacheCompanion&lt;Book&gt; {
        fun findByTitle(title: String) = find(&quot;title&quot;, title).firstResult()
    }
}
</code></pre>
<hr>
<h4 id="step-1-create-kotlin-entity">Step 1: Create Kotlin Entity</h4>
<pre><code class="language-kotlin">
package org.acme.entity

import io.quarkus.hibernate.orm.panache.kotlin.PanacheEntity
import jakarta.persistence.*
import java.time.LocalDateTime

/**
 * Book entity with Panache Kotlin
 * 
 * Key Kotlin features:
 * - lateinit var = will be initialized later (by Hibernate)
 * - var = mutable property
 * - val = immutable property
 */
@Entity
@Table(name = &quot;books&quot;)
class BookEntity : PanacheEntity() {
    
    // ═══════════════════════════════════════════════════
    // PROPERTIES
    // No need for private fields + getters/setters!
    // ═══════════════════════════════════════════════════
    
    // lateinit = &quot;I promise to initialize this before using it&quot;
    // Used for properties that can&#x27;t be initialized in constructor
    @Column(nullable = false, length = 200)
    lateinit var title: String
    
    @Column(length = 20)
    var isbn: String? = null  // Nullable
    
    var pages: Int? = null
    
    var price: Double? = null
    
    @Column(name = &quot;created_at&quot;)
    var createdAt: LocalDateTime? = null
    
    @Column(name = &quot;updated_at&quot;)
    var updatedAt: LocalDateTime? = null
    
    // ═══════════════════════════════════════════════════
    // RELATIONSHIP
    // ═══════════════════════════════════════════════════
    
    @ManyToOne
    @JoinColumn(name = &quot;author_id&quot;)
    var author: AuthorEntity? = null
    
    // ═══════════════════════════════════════════════════
    // LIFECYCLE CALLBACKS
    // ═══════════════════════════════════════════════════
    
    @PrePersist
    fun prePersist() {
        createdAt = LocalDateTime.now()
        updatedAt = LocalDateTime.now()
    }
    
    @PreUpdate
    fun preUpdate() {
        updatedAt = LocalDateTime.now()
    }
    
    // ═══════════════════════════════════════════════════
    // COMPANION OBJECT - Static methods in Kotlin
    // This is where Panache magic happens!
    // ═══════════════════════════════════════════════════
    
    companion object : PanacheCompanion&lt;BookEntity&gt; {
        
        /**
         * Find books by title (case-insensitive)
         */
        fun findByTitle(title: String): List&lt;BookEntity&gt; {
            return list(&quot;LOWER(title) LIKE LOWER(?1)&quot;, &quot;%$title%&quot;)
        }
        
        /**
         * Find books by author
         */
        fun findByAuthor(authorId: Long): List&lt;BookEntity&gt; {
            return list(&quot;author.id&quot;, authorId)
        }
        
        /**
         * Find books in price range
         */
        fun findByPriceRange(min: Double, max: Double): List&lt;BookEntity&gt; {
            return list(&quot;price &gt;= ?1 AND price &lt;= ?2&quot;, min, max)
        }
        
        /**
         * Count books by author
         */
        fun countByAuthor(authorId: Long): Long {
            return count(&quot;author.id&quot;, authorId)
        }
    }
}
</code></pre>
<p><strong>Understanding Panache Companion:</strong></p>
<pre><code class="language-kotlin">
companion object : PanacheCompanion&lt;BookEntity&gt; {
    // This companion object inherits ALL Panache methods:
    
    // Finding
    fun findAll(): List&lt;BookEntity&gt;
    fun findById(id: Long): BookEntity?
    fun find(query: String, vararg params: Any): PanacheQuery&lt;BookEntity&gt;
    
    // Counting
    fun count(): Long
    fun count(query: String, vararg params: Any): Long
    
    // Deleting
    fun deleteById(id: Long): Boolean
    fun delete(query: String, vararg params: Any): Long
    
    // Streaming
    fun stream(query: String, vararg params: Any): Stream&lt;BookEntity&gt;
    
    // And you can add your own custom methods!
}
</code></pre>
<hr>
<h4 id="step-2-graphql-resource-with-database">Step 2: GraphQL Resource with Database</h4>
<pre><code class="language-kotlin">
package org.acme.graphql

import org.eclipse.microprofile.graphql.*
import org.acme.entity.BookEntity
import org.acme.input.BookInput
import jakarta.enterprise.context.ApplicationScoped
import jakarta.transaction.Transactional

@GraphQLApi
@ApplicationScoped
class BookResource {
    
    // ═══════════════════════════════════════════════════
    // QUERIES
    // ═══════════════════════════════════════════════════
    
    /**
     * Get all books
     * 
     * @Transactional = Database transaction
     * Kotlin infers return type automatically
     */
    @Query(&quot;allBooks&quot;)
    @Transactional
    @Description(&quot;Get all books from database&quot;)
    fun getAllBooks(): List&lt;BookEntity&gt; {
        // Panache method - super simple!
        return BookEntity.listAll()
    }
    
    /**
     * Get book by ID
     * 
     * Returns nullable type (Book?)
     */
    @Query
    @Transactional
    @Description(&quot;Find a book by ID&quot;)
    fun bookById(@Name(&quot;id&quot;) id: Long): BookEntity? {
        return BookEntity.findById(id)
            ?: throw BookNotFoundException(&quot;Book with id $id not found&quot;)
    }
    
    /**
     * Search books by title
     * 
     * Using custom companion method
     */
    @Query
    @Transactional
    @Description(&quot;Search books by title&quot;)
    fun searchBooks(@Name(&quot;query&quot;) query: String): List&lt;BookEntity&gt; {
        return BookEntity.findByTitle(query)
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATIONS
    // ═══════════════════════════════════════════════════
    
    /**
     * Create a book
     * 
     * Using Kotlin&#x27;s apply {} scope function
     */
    @Mutation
    @Transactional
    @Description(&quot;Create a new book&quot;)
    fun createBook(@Name(&quot;input&quot;) input: BookInput): BookEntity {
        // Kotlin&#x27;s &#x27;apply&#x27; lets us configure object inline
        return BookEntity().apply {
            title = input.title
            isbn = input.isbn
            pages = input.pages
            price = input.price
            persist()  // Save to database
        }
    }
    
    /**
     * Update a book
     * 
     * Using Kotlin&#x27;s also {} and let {}
     */
    @Mutation
    @Transactional
    @Description(&quot;Update an existing book&quot;)
    fun updateBook(
        @Name(&quot;id&quot;) id: Long,
        @Name(&quot;input&quot;) input: BookInput
    ): BookEntity {
        // Find the book
        val book = BookEntity.findById(id) 
            ?: throw BookNotFoundException(&quot;Book not found&quot;)
        
        // Update fields using Kotlin&#x27;s apply
        return book.apply {
            input.title?.let { title = it }
            input.isbn?.let { isbn = it }
            input.pages?.let { pages = it }
            input.price?.let { price = it }
        }
    }
    
    /**
     * Delete a book
     */
    @Mutation
    @Transactional
    @Description(&quot;Delete a book&quot;)
    fun deleteBook(@Name(&quot;id&quot;) id: Long): Boolean {
        return BookEntity.deleteById(id)
    }
}
</code></pre>
<p><strong>Understanding Kotlin Scope Functions:</strong></p>
<pre><code class="language-kotlin">
// ═══════════════════════════════════════════════════════
// KOTLIN SCOPE FUNCTIONS
// ═══════════════════════════════════════════════════════

// 1. apply {} - Configure and return object
val book = BookEntity().apply {
    title = &quot;Kotlin Guide&quot;  // &#x27;this&#x27; is the BookEntity
    isbn = &quot;123&quot;
    price = 39.99
}
// Returns: the BookEntity

// 2. let {} - Transform object
val titleLength = book.title?.let { it.length }
// If title is not null, returns its length
// Otherwise returns null

// 3. also {} - Perform action and return object
val book = BookEntity().also {
    println(&quot;Creating book: ${it.title}&quot;)
}
// Returns: the BookEntity

// 4. run {} - Execute block and return result
val message = book.run {
    &quot;$title costs $$price&quot;
}
// Returns: the String

// 5. with {} - Like run but not an extension
val message = with(book) {
    &quot;$title costs $$price&quot;
}
</code></pre>
<hr>
<h3 id="input-types-with-kotlin-data-classes">Input Types with Kotlin Data Classes</h3>
<p><strong>Perfect Match:</strong></p>
<p>Kotlin data classes are PERFECT for GraphQL input types!</p>
<pre><code class="language-kotlin">
package org.acme.input

import org.eclipse.microprofile.graphql.Input
import org.eclipse.microprofile.graphql.Description

/**
 * Input for creating/updating books
 * 
 * All fields nullable = all optional
 * Client can provide any combination
 */
@Input(&quot;BookInput&quot;)
@Description(&quot;Input data for book operations&quot;)
data class BookInput(
    @field:Description(&quot;Book title&quot;)
    val title: String? = null,
    
    @field:Description(&quot;ISBN number&quot;)
    val isbn: String? = null,
    
    @field:Description(&quot;Number of pages&quot;)
    val pages: Int? = null,
    
    @field:Description(&quot;Price in USD&quot;)
    val price: Double? = null,
    
    @field:Description(&quot;Author ID&quot;)
    val authorId: Long? = null
)
</code></pre>
<p><strong>Why This Is Great:</strong></p>
<pre><code class="language-kotlin">
// You get ALL of this for FREE:
val input1 = BookInput(title = &quot;Book 1&quot;)  // Only title
val input2 = BookInput(title = &quot;Book 2&quot;, price = 29.99)  // Title and price
val input3 = input1.copy(price = 39.99)  // Copy with modification
</code></pre>
<p><strong>Using in Mutations:</strong></p>
<pre><code class="language-kotlin">
@Mutation
@Transactional
fun createBook(input: BookInput): BookEntity {
    // Validate required fields
    val title = input.title 
        ?: throw IllegalArgumentException(&quot;Title is required&quot;)
    
    return BookEntity().apply {
        this.title = title
        this.isbn = input.isbn
        this.pages = input.pages
        this.price = input.price
        persist()
    }
}
</code></pre>
<hr>
<h3 id="null-safety-in-graphql-with-kotlin">Null Safety in GraphQL with Kotlin</h3>
<p><strong>Kotlin&#x27;s null safety is PERFECT for GraphQL:</strong></p>
<pre><code class="language-kotlin">
// ═══════════════════════════════════════════════════════
// NON-NULLABLE in GraphQL
// ═══════════════════════════════════════════════════════

// Kotlin: String (no ?)
// GraphQL: String!
@Query
fun bookTitle(): String {
    return &quot;Kotlin Guide&quot;  // MUST return a value
}

// ═══════════════════════════════════════════════════════
// NULLABLE in GraphQL
// ═══════════════════════════════════════════════════════

// Kotlin: String? (with ?)
// GraphQL: String
@Query
fun bookSubtitle(): String? {
    return null  // OK to return null
}

// ═══════════════════════════════════════════════════════
// LIST TYPES
// ═══════════════════════════════════════════════════════

// Kotlin: List&lt;Book&gt;
// GraphQL: [Book!]!
@Query
fun allBooks(): List&lt;Book&gt; {
    return listOf()  // Empty list is fine
}

// Kotlin: List&lt;Book&gt;?
// GraphQL: [Book!]
@Query
fun maybeBooks(): List&lt;Book&gt;? {
    return null  // Can return null instead of list
}

// Kotlin: List&lt;Book?&gt;
// GraphQL: [Book]!
@Query
fun booksWithNulls(): List&lt;Book?&gt; {
    return listOf(book1, null, book2)  // List can contain nulls
}
</code></pre>
<p><strong>Safe Null Handling:</strong></p>
<pre><code class="language-kotlin">
@GraphQLApi
class BookResource {
    
    @Query
    fun bookByIsbn(isbn: String): BookEntity? {
        return BookEntity.find(&quot;isbn&quot;, isbn).firstResult()
    }
    
    // Field resolver with null safety
    fun author(@Source book: BookEntity): AuthorEntity? {
        // Safe navigation - returns null if book.author is null
        return book.author?.let { AuthorEntity.findById(it.id) }
    }
    
    // Provide default value
    fun displayPrice(@Source book: BookEntity): String {
        // Elvis operator provides default
        val price = book.price ?: 0.0
        return &quot;$$price&quot;
    }
}
</code></pre>
<hr>
<h3 id="kotlin-coroutines-with-graphql">Kotlin Coroutines with GraphQL</h3>
<p><strong>What are Coroutines?</strong></p>
<p>Coroutines let you write asynchronous code that looks synchronous. No callback hell!</p>
<p><strong>Example: Fetching from External API</strong></p>
<pre><code class="language-kotlin">
package org.acme.graphql

import kotlinx.coroutines.delay
import org.eclipse.microprofile.graphql.*
import jakarta.enterprise.context.ApplicationScoped

@GraphQLApi
@ApplicationScoped
class ExternalBookResource {
    
    /**
     * Suspend function = can pause and resume
     * Perfect for async operations!
     */
    @Query
    @Description(&quot;Fetch book from external API&quot;)
    suspend fun fetchExternalBook(
        @Name(&quot;isbn&quot;) isbn: String
    ): ExternalBook {
        // Simulate API call delay (non-blocking!)
        delay(1000)
        
        // Fetch from API
        return callExternalApi(isbn)
    }
    
    /**
     * Fetch multiple books in parallel
     */
    @Query
    suspend fun fetchMultipleBooks(
        @Name(&quot;isbns&quot;) isbns: List&lt;String&gt;
    ): List&lt;ExternalBook&gt; {
        // Launch parallel coroutines
        return coroutineScope {
            isbns.map { isbn -&gt;
                async { fetchExternalBook(isbn) }
            }.awaitAll()
        }
    }
}
</code></pre>
<p><strong>Benefits:</strong></p>
<pre><code class="language-kotlin">
// WITHOUT COROUTINES (Callback Hell):
fetchBook1(isbn1) { book1 -&gt;
    fetchBook2(isbn2) { book2 -&gt;
        fetchBook3(isbn3) { book3 -&gt;
            // Finally have all books
            combine(book1, book2, book3)
        }
    }
}

// WITH COROUTINES (Clean!):
suspend fun fetchAllBooks() {
    val book1 = fetchBook(isbn1)  // Looks synchronous
    val book2 = fetchBook(isbn2)  // But doesn&#x27;t block!
    val book3 = fetchBook(isbn3)  
    combine(book1, book2, book3)
}
</code></pre>
<hr>
<h2 id="advanced-part">Advanced Part</h2>
<p><strong>What You&#x27;ll Learn:</strong></p>
<ul>
<li>Kotlin-specific performance optimizations</li>
<li>Advanced type system features</li>
<li>Kotlin DSL for GraphQL</li>
<li>Testing with Kotlin</li>
<li>Production deployment</li>
<li>Best practices</li>
</ul>
<hr>
<h3 id="kotlin-collections-and-graphql">Kotlin Collections and GraphQL</h3>
<p><strong>Kotlin&#x27;s powerful collection functions work GREAT with GraphQL:</strong></p>
<pre><code class="language-kotlin">
@GraphQLApi
class AdvancedBookResource {
    
    /**
     * Group books by author
     */
    @Query
    @Transactional
    fun booksByAuthor(): Map&lt;String, List&lt;BookEntity&gt;&gt; {
        return BookEntity.listAll()
            .groupBy { it.author?.name ?: &quot;Unknown&quot; }
    }
    
    /**
     * Get top rated books
     */
    @Query
    @Transactional
    fun topBooks(@Name(&quot;limit&quot;) limit: Int = 10): List&lt;BookEntity&gt; {
        return BookEntity.listAll()
            .sortedByDescending { it.rating }
            .take(limit)
    }
    
    /**
     * Get price statistics
     */
    @Query
    @Transactional
    fun priceStats(): PriceStats {
        val prices = BookEntity.listAll()
            .mapNotNull { it.price }
        
        return PriceStats(
            min = prices.minOrNull() ?: 0.0,
            max = prices.maxOrNull() ?: 0.0,
            average = prices.average(),
            median = prices.sorted()[prices.size / 2]
        )
    }
    
    /**
     * Partition books by price
     */
    @Query
    @Transactional
    fun partitionBooks(@Name(&quot;threshold&quot;) threshold: Double): PartitionedBooks {
        val (expensive, affordable) = BookEntity.listAll()
            .partition { (it.price ?: 0.0) &gt; threshold }
        
        return PartitionedBooks(
            expensive = expensive,
            affordable = affordable
        )
    }
}
</code></pre>
<hr>
<h3 id="sealed-classes-for-type-safe-results">Sealed Classes for Type-Safe Results</h3>
<p><strong>Perfect for Result/Error handling:</strong></p>
<pre><code class="language-kotlin">
/**
 * Sealed class for operation results
 * Compiler ensures you handle all cases!
 */
sealed class BookResult {
    data class Success(val book: BookEntity) : BookResult()
    data class NotFound(val id: Long) : BookResult()
    data class ValidationError(val errors: List&lt;String&gt;) : BookResult()
}

@GraphQLApi
class BookResource {
    
    @Mutation
    @Transactional
    fun createBookSafe(input: BookInput): BookResult {
        // Validate
        val errors = mutableListOf&lt;String&gt;()
        
        if (input.title.isNullOrBlank()) {
            errors.add(&quot;Title is required&quot;)
        }
        if (input.price != null &amp;&amp; input.price &lt; 0) {
            errors.add(&quot;Price cannot be negative&quot;)
        }
        
        if (errors.isNotEmpty()) {
            return BookResult.ValidationError(errors)
        }
        
        // Create book
        val book = BookEntity().apply {
            title = input.title!!
            price = input.price
            persist()
        }
        
        return BookResult.Success(book)
    }
}
</code></pre>
<p><strong>Client Usage:</strong></p>
<pre><code class="language-graphql">
mutation {
  createBookSafe(input: {
    title: &quot;&quot;
    price: -10
  }) {
    ... on Success {
      book { id title }
    }
    ... on ValidationError {
      errors
    }
  }
}
</code></pre>
<hr>
<h3 id="extension-functions-for-field-resolvers">Extension Functions for Field Resolvers</h3>
<pre><code class="language-kotlin">
/**
 * Extension functions add methods to classes
 * Perfect for computed GraphQL fields!
 */

// Extension on BookEntity
fun BookEntity.isNew(): Boolean {
    val oneMonthAgo = LocalDateTime.now().minusMonths(1)
    return (createdAt ?: LocalDateTime.MIN) &gt; oneMonthAgo
}

fun BookEntity.discountPrice(percentage: Double): Double {
    val originalPrice = price ?: 0.0
    return originalPrice * (1 - percentage / 100)
}

fun BookEntity.priceCategory(): String = when {
    (price ?: 0.0) &lt; 20 -&gt; &quot;Budget&quot;
    (price ?: 0.0) &lt; 50 -&gt; &quot;Standard&quot;
    else -&gt; &quot;Premium&quot;
}

// Use in GraphQL
@GraphQLApi
class BookResource {
    
    // These become queryable fields!
    fun isNew(@Source book: BookEntity) = book.isNew()
    
    fun discountPrice(
        @Source book: BookEntity,
        @Name(&quot;percentage&quot;) percentage: Double
    ) = book.discountPrice(percentage)
    
    fun priceCategory(@Source book: BookEntity) = book.priceCategory()
}
</code></pre>
<p><strong>Generated Schema:</strong></p>
<pre><code class="language-graphql">
type Book {
  id: BigInteger!
  title: String!
  price: Float
  
  # Computed fields from extensions
  isNew: Boolean!
  discountPrice(percentage: Float!): Float!
  priceCategory: String!
}
</code></pre>
<hr>
<h3 id="inline-classes-for-type-safety">Inline Classes for Type Safety</h3>
<pre><code class="language-kotlin">
/**
 * Inline classes = zero runtime overhead type safety
 * Perfect for IDs, emails, etc.
 */
@JvmInline
value class BookId(val value: Long)

@JvmInline
value class ISBN(val value: String) {
    init {
        require(value.matches(Regex(&quot;\\d{3}-\\d{10}&quot;))) {
            &quot;Invalid ISBN format&quot;
        }
    }
}

// Use in GraphQL
@GraphQLApi
class TypeSafeBookResource {
    
    @Query
    @Transactional
    fun bookById(@Name(&quot;id&quot;) id: BookId): BookEntity? {
        return BookEntity.findById(id.value)
    }
    
    @Query
    @Transactional
    fun bookByIsbn(@Name(&quot;isbn&quot;) isbn: ISBN): BookEntity? {
        return BookEntity.find(&quot;isbn&quot;, isbn.value).firstResult()
    }
}
</code></pre>
<hr>
<h3 id="testing-with-kotlin">Testing with Kotlin</h3>
<pre><code class="language-kotlin">
package org.acme.test

import io.quarkus.test.junit.QuarkusTest
import io.restassured.RestAssured.given
import org.junit.jupiter.api.Test
import org.hamcrest.CoreMatchers.*

@QuarkusTest
class BookResourceTest {
    
    /**
     * Test getting all books
     * Kotlin&#x27;s string templates make queries readable!
     */
    @Test
    fun `should get all books`() {
        val query = &quot;&quot;&quot;
            {
                allBooks {
                    id
                    title
                    author
                }
            }
        &quot;&quot;&quot;.trimIndent()
        
        given()
            .contentType(&quot;application/json&quot;)
            .body(&quot;&quot;&quot;{&quot;query&quot;: &quot;$query&quot;}&quot;&quot;&quot;)
        .`when`()
            .post(&quot;/graphql&quot;)
        .then()
            .statusCode(200)
            .body(&quot;data.allBooks&quot;, notNullValue())
    }
    
    /**
     * Test creating a book
     * Using Kotlin multiline strings
     */
    @Test
    fun `should create a book`() {
        val mutation = &quot;&quot;&quot;
            mutation {
                createBook(input: {
                    title: &quot;Kotlin Test Book&quot;
                    author: &quot;Test Author&quot;
                    price: 29.99
                }) {
                    id
                    title
                }
            }
        &quot;&quot;&quot;.trimIndent()
        
        given()
            .contentType(&quot;application/json&quot;)
            .body(&quot;&quot;&quot;{&quot;query&quot;: &quot;${mutation.replace(&quot;\n&quot;, &quot; &quot;)}&quot;}&quot;&quot;&quot;)
        .`when`()
            .post(&quot;/graphql&quot;)
        .then()
            .statusCode(200)
            .body(&quot;data.createBook.title&quot;, equalTo(&quot;Kotlin Test Book&quot;))
    }
    
    /**
     * Test with parameterized query
     */
    @Test
    fun `should find book by id`() {
        val query = &quot;&quot;&quot;
            query FindBook(${&quot;$&quot;}id: BigInteger!) {
                bookById(id: ${&quot;$&quot;}id) {
                    id
                    title
                }
            }
        &quot;&quot;&quot;.trimIndent()
        
        val variables = mapOf(&quot;id&quot; to 1)
        
        given()
            .contentType(&quot;application/json&quot;)
            .body(&quot;&quot;&quot;
                {
                    &quot;query&quot;: &quot;${query.replace(&quot;\n&quot;, &quot; &quot;)}&quot;,
                    &quot;variables&quot;: ${variables}
                }
            &quot;&quot;&quot;.trimIndent())
        .`when`()
            .post(&quot;/graphql&quot;)
        .then()
            .statusCode(200)
    }
}
</code></pre>
<hr>
<h3 id="best-practices-for-kotlin-graphql">Best Practices for Kotlin + GraphQL</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│     Kotlin GraphQL Best Practices              │
├─────────────────────────────────────────────────┤
│                                                 │
│  ✅ Use Data Classes                           │
│     - For models and inputs                     │
│     - Automatic equals/hashCode                 │
│                                                 │
│  ✅ Leverage Null Safety                       │
│     - Use ? for optional fields                 │
│     - Avoid !! (force unwrap)                   │
│                                                 │
│  ✅ Use Companion Objects                      │
│     - For Panache queries                       │
│     - For factory methods                       │
│                                                 │
│  ✅ Extension Functions                        │
│     - For computed fields                       │
│     - Keep entities clean                       │
│                                                 │
│  ✅ Sealed Classes                             │
│     - For result types                          │
│     - For union types                           │
│                                                 │
│  ✅ Coroutines for Async                       │
│     - Use suspend functions                     │
│     - Avoid blocking calls                      │
│                                                 │
│  ✅ Scope Functions                            │
│     - apply for object config                   │
│     - let for null safety                       │
│                                                 │
│  ✅ Collection Functions                       │
│     - filter, map, groupBy                      │
│     - More readable than loops                  │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<hr>
<h3 id="kotlin-dsl-for-graphql-advanced">Kotlin DSL for GraphQL (Advanced)</h3>
<p><strong>Create your own GraphQL DSL:</strong></p>
<pre><code class="language-kotlin">
/**
 * Custom DSL for building GraphQL queries
 */
class GraphQLQueryBuilder {
    private val fields = mutableListOf&lt;String&gt;()
    
    fun field(name: String) {
        fields.add(name)
    }
    
    fun build(): String {
        return fields.joinToString(&quot;\n&quot;)
    }
}

fun graphql(block: GraphQLQueryBuilder.() -&gt; Unit): String {
    return GraphQLQueryBuilder().apply(block).build()
}

// Usage
val query = graphql {
    field(&quot;id&quot;)
    field(&quot;title&quot;)
    field(&quot;author&quot;)
}
</code></pre>
<hr>
<h3 id="performance-tips">Performance Tips</h3>
<pre><code class="language-kotlin">
/**
 * Lazy initialization for expensive operations
 */
@GraphQLApi
class OptimizedBookResource {
    
    // Only created when needed
    private val expensiveResource by lazy {
        ExpensiveResourceFactory.create()
    }
    
    /**
     * Use sequences for large datasets
     * (lazy evaluation)
     */
    @Query
    @Transactional
    fun processLargeDataset(): List&lt;ProcessedBook&gt; {
        return BookEntity.stream()  // Stream from DB
            .asSequence()  // Convert to Kotlin sequence
            .filter { it.price != null }
            .map { processBook(it) }
            .take(100)
            .toList()
    }
}
</code></pre>
<hr>
<h3 id="deployment">Deployment</h3>
<p><strong>Build Native Image:</strong></p>
<pre><code class="language-bash">
# Build native executable
./mvnw package -Pnative

# Run the native image
./target/graphql-kotlin-1.0.0-runner

# Starts in ~0.016s! 🚀
# Uses ~20MB memory! 💾
</code></pre>
<p><strong>Docker Image:</strong></p>
<pre><code class="language-dockerfile">
FROM quay.io/quarkus/ubi-quarkus-native-image:22.3-java17 AS build
COPY --chown=quarkus:quarkus . /code
USER quarkus
WORKDIR /code
RUN ./mvnw package -Pnative

FROM quay.io/quarkus/quarkus-micro-image:2.0
COPY --from=build /code/target/*-runner /application
EXPOSE 8080
CMD [&quot;./application&quot;]
</code></pre>
<hr>
<h2 id="conclusion">Conclusion</h2>
<p><strong>Why Kotlin + Quarkus + GraphQL is Amazing:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         The Perfect Combo                       │
├─────────────────────────────────────────────────┤
│                                                 │
│  KOTLIN brings:                                 │
│  ✨ 60% less code than Java                    │
│  ✨ Built-in null safety                       │
│  ✨ Coroutines for async                       │
│  ✨ Modern language features                   │
│                                                 │
│  QUARKUS brings:                                │
│  ⚡ &lt;1 second startup                           │
│  ⚡ &lt;100MB memory usage                         │
│  ⚡ Native compilation                          │
│  ⚡ Live reload                                 │
│                                                 │
│  GRAPHQL brings:                                │
│  🎯 Exact data fetching                        │
│  🎯 Strong typing                              │
│  🎯 Single endpoint                            │
│  🎯 Auto-documentation                         │
│                                                 │
│  TOGETHER = 🚀                                  │
│  - Fast development                             │
│  - High performance                             │
│  - Low resource usage                           │
│  - Great developer experience                   │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p><strong>Real-World Impact:</strong></p>
<pre><code class="language-">
Startup Time:
  Spring Boot Java: 20-30 seconds
  Quarkus Kotlin:   0.8 seconds
  Native Quarkus:   0.016 seconds ⚡

Memory Usage:
  Spring Boot Java: 500-800MB
  Quarkus Kotlin:   100-150MB
  Native Quarkus:   20-30MB 💾

Code:
  Java Project:     10,000 lines
  Kotlin Project:   4,000 lines ✨

Developer Happiness:
  Before: 😐
  After:  😃🚀
</code></pre>
<p><strong>You&#x27;re Ready!</strong></p>
<p>You now know how to build production-ready GraphQL APIs with Kotlin and Quarkus. Go build something amazing! 🎉</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = graphqlKotlinQuarkusGuideContentData;
}
