// Graphql Quarkus Guide - Content Data
const graphqlQuarkusGuideContentData = `<h1 id="graphql-in-quarkus-complete-beginner-to-advanced-guide">GraphQL in Quarkus: Complete Beginner to Advanced Guide</h1>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#basic-part">Basic Part</a></li>
<li><a href="#intermediate-part">Intermediate Part</a></li>
<li><a href="#advanced-part">Advanced Part</a></li>
</ul>
<hr>
<h2 id="basic-part">Basic Part</h2>
<h3 id="what-is-quarkus">What is Quarkus?</h3>
<p><strong>Simple Explanation:</strong></p>
<p>Imagine you&#x27;re building a web application (like a bookstore website). Traditionally, Java applications take a long time to start (20-30 seconds) and use a lot of computer memory (500MB-1GB). Quarkus is a modern Java framework that changes this completely.</p>
<p><strong>Think of it like this:</strong></p>
<ul>
<li><strong>Traditional Java App</strong>: Like starting a big diesel truck - takes time to warm up, uses lots of fuel</li>
<li><strong>Quarkus App</strong>: Like starting an electric car - instant start, very efficient</li>
</ul>
<p><strong>Key Benefits for Beginners:</strong></p>
<ul>
<li><strong>Super Fast Startup</strong> - Your application starts in less than 1 second (instead of 20-30 seconds)</li>
<li><strong>Low Memory Usage</strong> - Uses only 50-100MB of RAM (instead of 500MB-1GB)</li>
<li><strong>Live Reload</strong> - Change your code and see results immediately without restarting</li>
<li><strong>Easy to Learn</strong> - Uses familiar Java concepts you already know</li>
<li><strong>Cloud-Ready</strong> - Perfect for modern cloud deployments (AWS, Google Cloud, etc.)</li>
</ul>
<p><strong>Real-World Analogy:</strong></p>
<p>If you&#x27;re building a food delivery app:</p>
<ul>
<li><strong>Traditional Java</strong>: Opening a full restaurant - expensive, slow to set up</li>
<li><strong>Quarkus</strong>: Running a food truck - quick to start, efficient, can serve customers immediately</li>
</ul>
<p><strong>Why It Matters:</strong></p>
<ul>
<li><strong>For Development</strong>: You save time because your app restarts instantly when you make changes</li>
<li><strong>For Production</strong>: You save money because it uses less server resources</li>
<li><strong>For Users</strong>: Your app responds faster and handles more requests</li>
</ul>
<h3 id="what-is-graphql">What is GraphQL?</h3>
<p><strong>Simple Explanation:</strong></p>
<p>GraphQL is a way for your frontend (website or mobile app) to ask your backend (server) for exactly the data it needs - nothing more, nothing less.</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Imagine you&#x27;re at a restaurant:</p>
<p><strong>Traditional REST API (Old Way):</strong></p>
<ul>
<li>You: &quot;I want the lunch combo&quot;</li>
<li>Waiter brings: Burger, fries, drink, salad, dessert</li>
<li>You: &quot;But I only wanted the burger and fries...&quot;</li>
<li>Problem: You got too much (over-fetching)</li>
</ul>
<p>Or:</p>
<ul>
<li>You: &quot;I want a burger&quot;</li>
<li>Waiter: &quot;Okay!&quot; (brings burger)</li>
<li>You: &quot;Now I want fries&quot;</li>
<li>Waiter: &quot;Okay!&quot; (brings fries)</li>
<li>You: &quot;Now I want a drink&quot;</li>
<li>Problem: Too many trips (multiple requests)</li>
</ul>
<p><strong>GraphQL (New Way):</strong></p>
<ul>
<li>You: &quot;I want a burger and fries, no drink, no salad&quot;</li>
<li>Waiter brings: Exactly burger and fries</li>
<li>Result: You get exactly what you want in one trip!</li>
</ul>
<p><strong>Visual Example:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────────────┐
│           How GraphQL is Different                      │
└─────────────────────────────────────────────────────────┘

REST API - Getting User Info:
  
  Request 1: GET /users/123
  Response: { id, name, email, age, address, phone, ... }
            ↑ You get EVERYTHING, even if you only need name
  
  Request 2: GET /users/123/posts
  Response: [ {post1}, {post2}, {post3} ]
  
  Request 3: GET /posts/1/comments
  Response: [ {comment1}, {comment2} ]
  
  Total: 3 separate HTTP requests ❌

─────────────────────────────────────────────────────────

GraphQL - Getting User Info:
  
  Single Request: POST /graphql
  {
    user(id: 123) {
      name              ← Only ask for what you need!
      posts {
        title
        comments {
          text
        }
      }
    }
  }
  
  Response: All data you need in one response ✅
  Total: 1 HTTP request
</code></pre>
<p><strong>Why GraphQL is Better (Especially for Mobile Apps):</strong></p>
<ul>
<li><strong>Saves Data</strong> - Mobile users don&#x27;t download unnecessary data</li>
<li><strong>Faster</strong> - One request instead of many</li>
<li><strong>Flexible</strong> - Different screens can ask for different data</li>
<li><strong>Easy to Understand</strong> - You see exactly what data you&#x27;re getting</li>
</ul>
<p><strong>Simple Example:</strong></p>
<p>Let&#x27;s say you&#x27;re building a book store app:</p>
<pre><code class="language-">
What you WANT to show on screen:
- Book title
- Author name
- Price

What you DON&#x27;T need:
- Book description (not shown on list page)
- ISBN number
- Publication date
- Number of pages
- Reviews
</code></pre>
<p>With GraphQL, you ask for ONLY what you need:</p>
<pre><code class="language-graphql">
{
  books {
    title
    author
    price
  }
}
</code></pre>
<p>With REST, you&#x27;d get ALL the book data even if you don&#x27;t use it!</p>
<h3 id="how-graphql-works-in-quarkus">How GraphQL Works in Quarkus</h3>
<p><strong>Simple Explanation:</strong></p>
<p>Quarkus makes it super easy to build GraphQL APIs. Instead of writing lots of configuration, you just write simple Java classes with special annotations (markers), and Quarkus automatically creates the GraphQL API for you.</p>
<p><strong>The Stack (What&#x27;s Working Behind the Scenes):</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Quarkus GraphQL Stack                   │
│         (How Everything Fits Together)          │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌───────────────────────────────┐              │
│  │  Your Java Code               │              │
│  │  (Just write simple classes)  │              │
│  └───────────────┬───────────────┘              │
│                  │                              │
│                  ↓                              │
│  ┌───────────────────────────────┐              │
│  │  MicroProfile GraphQL          │              │
│  │  (Java standard for GraphQL)   │              │
│  └───────────────┬───────────────┘              │
│                  │                              │
│                  ↓                              │
│  ┌───────────────────────────────┐              │
│  │  SmallRye GraphQL              │              │
│  │  (Does the heavy lifting)      │              │
│  └───────────────┬───────────────┘              │
│                  │                              │
│                  ↓                              │
│  ┌───────────────────────────────┐              │
│  │  GraphQL Java Engine           │              │
│  │  (Processes GraphQL queries)   │              │
│  └───────────────────────────────┘              │
│                                                 │
└─────────────────────────────────────────────────┘

You only need to worry about the TOP layer!
Everything else is handled automatically.
</code></pre>
<p><strong>What This Means for You:</strong></p>
<ul>
<li>You don&#x27;t need to learn GraphQL syntax deeply</li>
<li>You just write normal Java code</li>
<li>Quarkus converts it to GraphQL automatically</li>
<li>You get a working GraphQL API with very little code</li>
</ul>
<h3 id="setting-up-graphql-in-quarkus-step-by-step-for-beginners">Setting Up GraphQL in Quarkus (Step-by-Step for Beginners)</h3>
<p><strong>What We&#x27;re Doing:</strong></p>
<p>We need to tell Quarkus that we want to use GraphQL. We do this by adding &quot;dependencies&quot; - think of these as ingredients for a recipe.</p>
<p><strong>Understanding Dependencies:</strong></p>
<p>When you cook, you need ingredients. When you code, you need dependencies (libraries of pre-written code).</p>
<h4 id="step-1-add-dependencies">Step 1: Add Dependencies</h4>
<p><strong>If you&#x27;re using Maven</strong> (build tool - like a recipe manager):</p>
<p>Add this to your <code>pom.xml</code> file:</p>
<pre><code class="language-xml">
&lt;dependencies&gt;
    &lt;!-- This is the main GraphQL library --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-smallrye-graphql&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- This gives you a nice web interface to test your GraphQL API --&gt;
    &lt;!-- Like having a test kitchen for your code! --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-smallrye-graphql-ui&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre>
<p><strong>What each dependency does:</strong></p>
<ul>
<li><code>quarkus-smallrye-graphql</code> - The core GraphQL engine (Required)</li>
<li>This is like getting the stove and oven for your kitchen</li>
</ul>
<ul>
<li><code>quarkus-smallrye-graphql-ui</code> - A web interface to test your API (Optional but very helpful)</li>
<li>This is like having a food tasting area where you can try your dishes</li>
</ul>
<p><strong>If you&#x27;re using Gradle</strong> (another build tool):</p>
<p>Add this to your <code>build.gradle</code> file:</p>
<pre><code class="language-gradle">
dependencies {
    implementation &#x27;io.quarkus:quarkus-smallrye-graphql&#x27;
    implementation &#x27;io.quarkus:quarkus-smallrye-graphql-ui&#x27;
}
</code></pre>
<p>Same dependencies, just different syntax!</p>
<h3 id="basic-configuration-setting-up-your-api">Basic Configuration (Setting Up Your API)</h3>
<p><strong>What is Configuration?</strong></p>
<p>Configuration is like setting up the rules for your app - where should it run, what features should be enabled, etc.</p>
<p><strong>Where to configure:</strong></p>
<p>Create or edit a file called <code>application.properties</code> in your project&#x27;s <code>src/main/resources</code> folder.</p>
<p><strong>Understanding Each Setting:</strong></p>
<pre><code class="language-properties">
# ═══════════════════════════════════════════════════════
# GRAPHQL ENDPOINT CONFIGURATION
# ═══════════════════════════════════════════════════════

# Where your GraphQL API will be available
# Default is /graphql - you can change this to anything you want
# Example: If this is /graphql, you&#x27;ll access it at http://localhost:8080/graphql
quarkus.smallrye-graphql.root-path=/graphql

# ═══════════════════════════════════════════════════════
# GRAPHQL UI (Testing Interface)
# ═══════════════════════════════════════════════════════

# Should the testing UI be enabled?
# true = yes, false = no
# In development (dev mode), it&#x27;s automatically enabled
quarkus.smallrye-graphql.ui.enable=true

# Where the testing UI will be available
# You&#x27;ll access it at http://localhost:8080/graphql-ui
quarkus.smallrye-graphql.ui.root-path=/graphql-ui

# ═══════════════════════════════════════════════════════
# CORS (Cross-Origin Resource Sharing)
# ═══════════════════════════════════════════════════════

# CORS allows your frontend (running on different port) to talk to your backend
# Example: Your React app runs on port 3000, your Quarkus app on port 8080
quarkus.http.cors=true

# Which websites can access your API
# http://localhost:3000 is common for React/Vue/Angular development
quarkus.http.cors.origins=http://localhost:3000

# ═══════════════════════════════════════════════════════
# ERROR HANDLING
# ═══════════════════════════════════════════════════════

# Should errors show detailed exception info?
# true = helpful for development (you see what went wrong)
# false = better for production (don&#x27;t expose internal errors to users)
quarkus.smallrye-graphql.print-data-fetcher-exception=true

# What information to include in error responses
# exception = shows which Java class caused the error
# classification = shows what type of error it was
quarkus.smallrye-graphql.error-extension-fields=exception,classification
</code></pre>
<p><strong>Real-World Example:</strong></p>
<p>Imagine you&#x27;re setting up a store:</p>
<ul>
<li><code>root-path</code> = The address of your store (123 Main Street)</li>
<li><code>ui.enable</code> = Should you have a showroom? (Yes for testing)</li>
<li><code>cors.origins</code> = Which delivery services can pick up orders (your frontend apps)</li>
<li><code>print-data-fetcher-exception</code> = Should employees see detailed error logs? (Yes during setup, maybe not when open to public)</li>
</ul>
<p><strong>What You&#x27;ll See:</strong></p>
<p>After configuration, you can:</p>
<ul>
<li>Send GraphQL queries to: <code>http://localhost:8080/graphql</code></li>
<li>Test your API visually at: <code>http://localhost:8080/graphql-ui</code></li>
</ul>
<h3 id="creating-your-first-graphql-api-complete-walkthrough">Creating Your First GraphQL API (Complete Walkthrough)</h3>
<p><strong>What We&#x27;re Building:</strong></p>
<p>A simple bookstore API where you can:</p>
<ul>
<li>Get a list of all books</li>
<li>Get a specific book by its ID</li>
<li>Add a new book</li>
<li>Delete a book</li>
</ul>
<p><strong>Think of it like this:</strong></p>
<p>We&#x27;re building a library system where:</p>
<ul>
<li>Books are stored in memory (like index cards)</li>
<li>We can view, add, and remove books</li>
<li>Everything is accessible through GraphQL</li>
</ul>
<hr>
<h4 id="step-1-create-a-book-model-what-is-a-book">Step 1: Create a Book Model (What is a Book?)</h4>
<p><strong>What is a Model?</strong></p>
<p>A model is like a blueprint or template. It defines what a &quot;Book&quot; looks like in our system.</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Think of a library card catalog. Each card has:</p>
<ul>
<li>ID number</li>
<li>Book title</li>
<li>Author name</li>
<li>Number of pages</li>
<li>Price</li>
</ul>
<p>That&#x27;s exactly what we&#x27;re creating in code!</p>
<pre><code class="language-java">
package org.acme.model;  // This is like the folder where we keep this file

// This is our Book blueprint
public class Book {
    // Properties (characteristics of a book)
    // Think of these as the fields on a library card
    
    private Long id;           // Unique number for each book (like a barcode)
    private String title;      // The book&#x27;s name
    private String author;     // Who wrote it
    private Integer pages;     // How many pages
    private Double price;      // How much it costs
    
    // ═══════════════════════════════════════════════════
    // CONSTRUCTORS (Different ways to create a book)
    // ═══════════════════════════════════════════════════
    
    // Empty constructor - creates a blank book
    // Like getting a blank library card
    public Book() {}
    
    // Full constructor - creates a book with all information
    // Like filling out a complete library card
    public Book(Long id, String title, String author, Integer pages, Double price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.price = price;
    }
    
    // ═══════════════════════════════════════════════════
    // GETTERS (How to read information)
    // ═══════════════════════════════════════════════════
    // These methods let other parts of your code READ the book&#x27;s information
    
    public Long getId() { 
        return id;  // Returns the book&#x27;s ID
    }
    
    public String getTitle() { 
        return title;  // Returns the book&#x27;s title
    }
    
    public String getAuthor() { 
        return author;  // Returns the author&#x27;s name
    }
    
    public Integer getPages() { 
        return pages;  // Returns number of pages
    }
    
    public Double getPrice() { 
        return price;  // Returns the price
    }
    
    // ═══════════════════════════════════════════════════
    // SETTERS (How to change information)
    // ═══════════════════════════════════════════════════
    // These methods let other parts of your code CHANGE the book&#x27;s information
    
    public void setId(Long id) { 
        this.id = id;  // Changes the book&#x27;s ID
    }
    
    public void setTitle(String title) { 
        this.title = title;  // Changes the book&#x27;s title
    }
    
    public void setAuthor(String author) { 
        this.author = author;  // Changes the author
    }
    
    public void setPages(Integer pages) { 
        this.pages = pages;  // Changes number of pages
    }
    
    public void setPrice(Double price) { 
        this.price = price;  // Changes the price
    }
}
</code></pre>
<p><strong>Why Do We Need Getters and Setters?</strong></p>
<ul>
<li><strong>Getters</strong>: Like asking &quot;What&#x27;s the book&#x27;s title?&quot;</li>
<li><strong>Setters</strong>: Like saying &quot;Change the book&#x27;s title to &#x27;New Title&#x27;&quot;</li>
<li>This is a Java best practice for controlling access to data</li>
</ul>
<hr>
<h4 id="step-2-create-the-graphql-api-resource">Step 2: Create the GraphQL API Resource</h4>
<p><strong>What is a Resource?</strong></p>
<p>A Resource is where you define what operations people can do with your data. It&#x27;s like the librarian who handles all the requests.</p>
<p><strong>Operations We&#x27;ll Create:</strong></p>
<ul>
<li><strong>Query</strong> - Reading data (like asking &quot;What books do you have?&quot;)</li>
<li><strong>Mutation</strong> - Changing data (like saying &quot;Add this new book&quot; or &quot;Remove that book&quot;)</li>
</ul>
<pre><code class="language-java">
package org.acme.graphql;

// These are the imports - bringing in tools we need
import org.eclipse.microprofile.graphql.GraphQLApi;   // Marks this as a GraphQL API
import org.eclipse.microprofile.graphql.Query;        // For reading data
import org.eclipse.microprofile.graphql.Mutation;     // For changing data
import org.eclipse.microprofile.graphql.Name;         // For naming parameters
import org.acme.model.Book;                           // Our Book model from above

import jakarta.enterprise.context.ApplicationScoped;  // Makes this a singleton
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

// ═══════════════════════════════════════════════════════
// @GraphQLApi - This tells Quarkus: &quot;This is a GraphQL API!&quot;
// @ApplicationScoped - This means only ONE instance exists (singleton pattern)
// ═══════════════════════════════════════════════════════
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    // ═══════════════════════════════════════════════════
    // STORAGE (Where we keep our books)
    // ═══════════════════════════════════════════════════
    
    // This list holds all our books in memory
    // Think of it as a bookshelf
    private List&lt;Book&gt; books = new ArrayList&lt;&gt;();
    
    // This counter generates unique IDs for new books
    // Like a ticket dispenser at a deli counter
    private AtomicLong idCounter = new AtomicLong(0);
    
    // ═══════════════════════════════════════════════════
    // CONSTRUCTOR (Runs when the class is created)
    // ═══════════════════════════════════════════════════
    public BookResource() {
        // Let&#x27;s add some sample books so we have data to start with
        // Like stocking a library with initial books
        
        books.add(new Book(
            idCounter.incrementAndGet(),  // ID: 1
            &quot;Effective Java&quot;,              // Title
            &quot;Joshua Bloch&quot;,                // Author
            416,                           // Pages
            45.99                          // Price
        ));
        
        books.add(new Book(
            idCounter.incrementAndGet(),  // ID: 2
            &quot;Clean Code&quot;,
            &quot;Robert Martin&quot;,
            464,
            42.99
        ));
    }
    
    // ═══════════════════════════════════════════════════
    // QUERIES (Reading Data)
    // ═══════════════════════════════════════════════════
    
    // @Query tells GraphQL: &quot;This is a query - it READS data&quot;
    // The name in quotes is what users will type in their GraphQL query
    @Query(&quot;allBooks&quot;)
    public List&lt;Book&gt; getAllBooks() {
        // Simply return all books in our list
        // Like asking the librarian: &quot;Show me all books&quot;
        return books;
    }
    
    // This query finds ONE specific book by its ID
    @Query
    public Book bookById(@Name(&quot;id&quot;) Long id) {
        // @Name(&quot;id&quot;) means the parameter will be called &quot;id&quot; in GraphQL
        
        // Search through all books to find one with matching ID
        // Like asking: &quot;Find me the book with barcode 12345&quot;
        return books.stream()                    // Go through each book
            .filter(book -&gt; book.getId().equals(id))  // Find the one with matching ID
            .findFirst()                         // Get the first match
            .orElse(null);                       // Return null if not found
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATIONS (Changing Data)
    // ═══════════════════════════════════════════════════
    
    // @Mutation tells GraphQL: &quot;This CHANGES data&quot;
    @Mutation
    public Book addBook(@Name(&quot;title&quot;) String title,
                        @Name(&quot;author&quot;) String author,
                        @Name(&quot;pages&quot;) Integer pages,
                        @Name(&quot;price&quot;) Double price) {
        
        // Create a new book with the provided information
        Book book = new Book(
            idCounter.incrementAndGet(),  // Generate new unique ID
            title,
            author,
            pages,
            price
        );
        
        // Add the book to our list
        books.add(book);
        
        // Return the created book so the user knows it worked
        return book;
    }
    
    // This mutation deletes a book
    @Mutation
    public Boolean deleteBook(@Name(&quot;id&quot;) Long id) {
        // Try to remove the book with the given ID
        // Returns true if removed, false if not found
        return books.removeIf(book -&gt; book.getId().equals(id));
    }
}
</code></pre>
<p><strong>What Just Happened?</strong></p>
<p>We created a complete GraphQL API! Here&#x27;s what each part does:</p>
<ul>
<li><strong>Storage</strong>: We store books in a simple list (in real apps, this would be a database)</li>
<li><strong>ID Counter</strong>: Automatically generates unique IDs for new books</li>
<li><strong>getAllBooks()</strong>: Returns all books (like viewing the entire library catalog)</li>
<li><strong>bookById()</strong>: Finds one specific book (like looking up a book by its barcode)</li>
<li><strong>addBook()</strong>: Creates a new book (like the librarian adding a new book to the collection)</li>
<li><strong>deleteBook()</strong>: Removes a book (like removing a book from the library)</li>
</ul>
<p><strong>Key Concepts:</strong></p>
<ul>
<li><code>@Query</code> = Operations that READ data (don&#x27;t change anything)</li>
<li><code>@Mutation</code> = Operations that WRITE/CHANGE data (add, update, delete)</li>
<li><code>@Name</code> = Gives a parameter a specific name in GraphQL</li>
</ul>
<hr>
<h4 id="step-3-understanding-the-generated-graphql-schema">Step 3: Understanding the Generated GraphQL Schema</h4>
<p><strong>What is a Schema?</strong></p>
<p>A schema is like a menu at a restaurant - it shows what&#x27;s available and how to order it.</p>
<p><strong>The Magic Part:</strong></p>
<p>You don&#x27;t write the schema! Quarkus looks at your Java code and automatically creates the GraphQL schema for you.</p>
<p><strong>The Generated Schema:</strong></p>
<p>Based on our Java code above, Quarkus automatically creates this:</p>
<pre><code class="language-graphql">
# ═══════════════════════════════════════════════════
# TYPE DEFINITIONS (What data looks like)
# ═══════════════════════════════════════════════════

# This describes what a Book object looks like
type Book {
  id: BigInteger!      # ! means &quot;required&quot; - every book MUST have an ID
  title: String!       # Every book MUST have a title
  author: String!      # Every book MUST have an author
  pages: Int           # Pages is optional (no !)
  price: Float         # Price is optional (no !)
}

# ═══════════════════════════════════════════════════
# QUERY OPERATIONS (Reading data - doesn&#x27;t change anything)
# ═══════════════════════════════════════════════════

type Query {
  # Get all books - returns a list of Book objects
  # [Book!]! means: &quot;A list of books, never null, and books in list are never null&quot;
  allBooks: [Book!]
  
  # Get one book by ID - might return null if book doesn&#x27;t exist
  bookById(id: BigInteger!): Book
}

# ═══════════════════════════════════════════════════
# MUTATION OPERATIONS (Changing data - creates, updates, deletes)
# ═══════════════════════════════════════════════════

type Mutation {
  # Add a new book - returns the created book
  addBook(
    title: String!,      # Required
    author: String!,     # Required
    pages: Int,          # Optional
    price: Float         # Optional
  ): Book!
  
  # Delete a book - returns true if deleted, false if not found
  deleteBook(id: BigInteger!): Boolean!
}
</code></pre>
<p><strong>Understanding the Symbols:</strong></p>
<ul>
<li><code>!</code> = Required (must provide this)</li>
<li>No <code>!</code> = Optional (can skip this)</li>
<li><code>[Book!]!</code> = A list that&#x27;s never null, containing books that are never null</li>
<li><code>Book</code> = Might return null (book might not exist)</li>
</ul>
<p><strong>How Java Types Convert to GraphQL Types:</strong></p>
<pre><code class="language-">
Java Type          →    GraphQL Type
─────────────────────────────────────
Long               →    BigInteger
String             →    String
Integer            →    Int
Double             →    Float
Boolean            →    Boolean
List&lt;Book&gt;         →    [Book]
</code></pre>
<p><strong>Real-World Example:</strong></p>
<p>Imagine a restaurant menu:</p>
<pre><code class="language-">
Menu (Schema):
─────────────
APPETIZERS (Queries - just looking):
- View all dishes
- View dish by ID

ORDERS (Mutations - making changes):
- Order a dish
- Cancel an order
</code></pre>
<hr>
<h3 id="testing-your-graphql-api-multiple-ways">Testing Your GraphQL API (Multiple Ways)</h3>
<p>Now that we&#x27;ve built our API, let&#x27;s test it! There are several ways to do this.</p>
<hr>
<h4 id="method-1-using-graphql-ui-easiest-for-beginners">Method 1: Using GraphQL UI (Easiest for Beginners)</h4>
<p><strong>What is GraphQL UI?</strong></p>
<p>It&#x27;s a visual, interactive playground where you can test your API without writing code. Think of it like a test kitchen where you can try out your recipes.</p>
<p><strong>Step-by-Step:</strong></p>
<ul>
<li><strong>Start your Quarkus application</strong></li>
<pre><code class="language-bash">
# In your terminal, run:
./mvnw quarkus:dev

# Or if using Gradle:
./gradlew quarkusDev
</code></pre>
</ul>
<ul>
<li><strong>Open your web browser</strong></li>
<li>Go to: <code>http://localhost:8080/graphql-ui</code></li>
<li>You&#x27;ll see a nice interface with:</li>
<li>Left side: Where you type queries</li>
<li>Right side: Where you see results</li>
<li>Middle: A &quot;Play&quot; button to run your query</li>
</ul>
<ul>
<li><strong>Try Your First Query</strong> (Get all books)</li>
</ul>
<p>   Type this in the left panel:</p>
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
<p>   Click the Play button ▶️</p>
<p>   <strong>What you&#x27;ll see:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;allBooks&quot;: [
      {
        &quot;id&quot;: 1,
        &quot;title&quot;: &quot;Effective Java&quot;,
        &quot;author&quot;: &quot;Joshua Bloch&quot;,
        &quot;price&quot;: 45.99
      },
      {
        &quot;id&quot;: 2,
        &quot;title&quot;: &quot;Clean Code&quot;,
        &quot;author&quot;: &quot;Robert Martin&quot;,
        &quot;price&quot;: 42.99
      }
    ]
  }
}
</code></pre>
<p>   <strong>What just happened?</strong></p>
<ul>
<li>You asked for all books</li>
<li>You specified you want: id, title, author, and price</li>
<li>GraphQL returned exactly those fields!</li>
</ul>
<ul>
<li><strong>Try Getting One Specific Book</strong></li>
</ul>
<pre><code class="language-graphql">
query {
  bookById(id: 1) {
    title
    author
  }
}
</code></pre>
<p>   <strong>Result:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;bookById&quot;: {
      &quot;title&quot;: &quot;Effective Java&quot;,
      &quot;author&quot;: &quot;Joshua Bloch&quot;
    }
  }
}
</code></pre>
<p>   <strong>Notice:</strong> We only asked for title and author, so we only got those!</p>
<ul>
<li><strong>Try Adding a New Book</strong> (Mutation)</li>
</ul>
<pre><code class="language-graphql">
mutation {
  addBook(
    title: &quot;Domain-Driven Design&quot;
    author: &quot;Eric Evans&quot;
    pages: 560
    price: 55.99
  ) {
    id
    title
    author
  }
}
</code></pre>
<p>   <strong>Result:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;addBook&quot;: {
      &quot;id&quot;: 3,
      &quot;title&quot;: &quot;Domain-Driven Design&quot;,
      &quot;author&quot;: &quot;Eric Evans&quot;
    }
  }
}
</code></pre>
<p>   <strong>What happened?</strong></p>
<ul>
<li>You created a new book</li>
<li>It was assigned ID: 3 (automatically)</li>
<li>The new book was added to the list</li>
</ul>
<ul>
<li><strong>Try Deleting a Book</strong></li>
</ul>
<pre><code class="language-graphql">
mutation {
  deleteBook(id: 2)
}
</code></pre>
<p>   <strong>Result:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;deleteBook&quot;: true
  }
}
</code></pre>
<p>   <code>true</code> means it was successfully deleted!</p>
<hr>
<h4 id="method-2-using-curl-command-line">Method 2: Using cURL (Command Line)</h4>
<p><strong>What is cURL?</strong></p>
<p>A command-line tool to send HTTP requests. Good for automated testing or scripts.</p>
<p><strong>Getting All Books:</strong></p>
<pre><code class="language-bash">
curl -X POST http://localhost:8080/graphql \
  -H &quot;Content-Type: application/json&quot; \
  -d &#x27;{&quot;query&quot;: &quot;{ allBooks { id title author } }&quot;}&#x27;
</code></pre>
<p><strong>What each part means:</strong></p>
<ul>
<li><code>curl</code> = The command</li>
<li><code>-X POST</code> = We&#x27;re sending a POST request</li>
<li><code>http://localhost:8080/graphql</code> = Where to send it</li>
<li><code>-H &quot;Content-Type: application/json&quot;</code> = We&#x27;re sending JSON</li>
<li><code>-d &#x27;...&#x27;</code> = The data we&#x27;re sending (our GraphQL query)</li>
</ul>
<p><strong>Adding a Book:</strong></p>
<pre><code class="language-bash">
curl -X POST http://localhost:8080/graphql \
  -H &quot;Content-Type: application/json&quot; \
  -d &#x27;{
    &quot;query&quot;: &quot;mutation { addBook(title: \&quot;Test Book\&quot;, author: \&quot;Test Author\&quot;, pages: 100, price: 29.99) { id title } }&quot;
  }&#x27;
</code></pre>
<p><strong>Note:</strong> In cURL, you need to escape quotes with <code>\&quot;</code></p>
<hr>
<h4 id="method-3-using-postman-gui-tool">Method 3: Using Postman (GUI Tool)</h4>
<p><strong>What is Postman?</strong></p>
<p>A popular application for testing APIs with a nice graphical interface.</p>
<p><strong>Steps:</strong></p>
<ul>
<li>Open Postman</li>
<li>Create a new POST request</li>
<li>URL: <code>http://localhost:8080/graphql</code></li>
<li>Headers: Add <code>Content-Type: application/json</code></li>
<li>Body (raw, JSON):</li>
<pre><code class="language-json">
{
  &quot;query&quot;: &quot;{ allBooks { id title author price } }&quot;
}
</code></pre>
<li>Click Send</li>
</ul>
<hr>
<h3 id="understanding-the-requestresponse-flow">Understanding the Request/Response Flow</h3>
<p>Here&#x27;s what happens when you send a query:</p>
<pre><code class="language-">
┌──────────────────────────────────────────────────┐
│     GraphQL Request Flow in Quarkus             │
└──────────────────────────────────────────────────┘

Your Browser/Client
  │
  │ 1. Send GraphQL Query
  │    POST /graphql
  │    {
  │      &quot;query&quot;: &quot;{ allBooks { title } }&quot;
  │    }
  │
  ▼
┌─────────────────────┐
│  Quarkus HTTP       │
│  Handler            │ ← Receives the HTTP request
└─────────┬───────────┘
          │
          │ 2. Extract the query string
          │
          ▼
┌─────────────────────┐
│  SmallRye GraphQL   │
│  Engine             │ ← Parses the GraphQL query
└─────────┬───────────┘
          │
          │ 3. Validate query against schema
          │    - Is &quot;allBooks&quot; a valid query?
          │    - Is &quot;title&quot; a valid field?
          │
          ▼
┌─────────────────────┐
│  Find Resolver      │ ← Looks for @Query method
│  (Your Java Code)   │    named &quot;allBooks&quot;
└─────────┬───────────┘
          │
          │ 4. Execute getAllBooks() method
          │
          ▼
┌─────────────────────┐
│  Your Method Runs   │
│  getAllBooks() {    │
│    return books;    │ ← Returns list of books
│  }                  │
└─────────┬───────────┘
          │
          │ 5. Filter results
          │    (Only return fields requested: &quot;title&quot;)
          │
          ▼
┌─────────────────────┐
│  Format as JSON     │
│  {                  │
│    &quot;data&quot;: {        │
│      &quot;allBooks&quot;: [  │
│        {            │
│          &quot;title&quot;:   │
│          &quot;Book1&quot;    │
│        }            │
│      ]              │
│    }                │
│  }                  │
└─────────┬───────────┘
          │
          │ 6. Send response back
          │
          ▼
    Your Browser/Client
</code></pre>
<p><strong>Key Points:</strong></p>
<ul>
<li><strong>Client sends a query</strong> - Asks for specific data</li>
<li><strong>Quarkus receives it</strong> - HTTP layer handles the request</li>
<li><strong>GraphQL engine parses</strong> - Understands what you&#x27;re asking for</li>
<li><strong>Validates</strong> - Checks if your query is valid</li>
<li><strong>Executes your code</strong> - Calls your @Query or @Mutation method</li>
<li><strong>Filters results</strong> - Only returns fields you asked for</li>
<li><strong>Sends response</strong> - Returns formatted JSON</li>
</ul>
<p>This all happens in milliseconds!</p>
<hr>
<h3 id="understanding-graphql-annotations-the-special-markers">Understanding GraphQL Annotations (The Special Markers)</h3>
<p><strong>What are Annotations?</strong></p>
<p>Annotations are special markers in Java that start with <code>@</code>. They give instructions to the framework about how to handle your code. Think of them as sticky notes that say &quot;Hey Quarkus, treat this in a special way!&quot;</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Imagine you&#x27;re writing a cookbook:</p>
<ul>
<li><code>@Recipe</code> - Marks something as a recipe</li>
<li><code>@Ingredient</code> - Marks something as an ingredient</li>
<li><code>@Step</code> - Marks something as a cooking step</li>
</ul>
<p>In GraphQL/Quarkus, we use similar markers!</p>
<hr>
<h4 id="complete-guide-to-graphql-annotations">Complete Guide to GraphQL Annotations</h4>
<pre><code class="language-java">
import org.eclipse.microprofile.graphql.*;

// ═══════════════════════════════════════════════════════
// CLASS-LEVEL ANNOTATIONS
// ═══════════════════════════════════════════════════════

@GraphQLApi
// WHAT IT DOES: Tells Quarkus &quot;This class contains GraphQL operations&quot;
// WHERE TO USE: On your main GraphQL resource class
// EXAMPLE:
@GraphQLApi
public class BookResource {
  // Your queries and mutations go here
}

// ═══════════════════════════════════════════════════════
// METHOD-LEVEL ANNOTATIONS (For Operations)
// ═══════════════════════════════════════════════════════

@Query
// WHAT IT DOES: Marks a method as a GraphQL query (reads data)
// WHEN TO USE: When you want to GET/READ data without changing anything
// EXAMPLE:
@Query
public List&lt;Book&gt; getAllBooks() {
  return books;
}

@Query(&quot;customName&quot;)
// SAME AS ABOVE but gives it a custom name in GraphQL
// The method name is &quot;getAllBooks&quot; but in GraphQL it&#x27;s &quot;customName&quot;
@Query(&quot;allBooks&quot;)
public List&lt;Book&gt; getAllBooks() {
  return books;
}

@Mutation
// WHAT IT DOES: Marks a method as a GraphQL mutation (changes data)
// WHEN TO USE: When you want to CREATE, UPDATE, or DELETE data
// EXAMPLE:
@Mutation
public Book addBook(String title, String author) {
  // Creates a new book
}

@Mutation(&quot;customMutationName&quot;)
// SAME AS ABOVE but with custom name
@Mutation(&quot;createBook&quot;)
public Book addBook(String title, String author) {
  // In GraphQL, this will be called &quot;createBook&quot; not &quot;addBook&quot;
}

// ═══════════════════════════════════════════════════════
// PARAMETER ANNOTATIONS
// ═══════════════════════════════════════════════════════

@Name(&quot;parameterName&quot;)
// WHAT IT DOES: Gives a parameter a specific name in GraphQL
// WHY USE IT: Java parameter names might not survive compilation
// EXAMPLE:
public Book bookById(@Name(&quot;id&quot;) Long bookId) {
  // In GraphQL: bookById(id: 1)
  // In Java: parameter is called &quot;bookId&quot;
}

@DefaultValue(&quot;10&quot;)
// WHAT IT DOES: Provides a default value if user doesn&#x27;t provide one
// EXAMPLE:
public List&lt;Book&gt; books(
  @Name(&quot;limit&quot;) @DefaultValue(&quot;10&quot;) Integer limit
) {
  // If user doesn&#x27;t specify limit, it defaults to 10
}

// ═══════════════════════════════════════════════════════
// FIELD ANNOTATIONS
// ═══════════════════════════════════════════════════════

@Description(&quot;A book in our library system&quot;)
// WHAT IT DOES: Adds documentation to your GraphQL schema
// EXAMPLE:
@Description(&quot;A book in our library system&quot;)
public class Book {
  
  @Description(&quot;The unique identifier for the book&quot;)
  private Long id;
  
  @Description(&quot;The title of the book&quot;)
  private String title;
}

@NonNull
// WHAT IT DOES: Marks a field as required (cannot be null)
// In GraphQL schema, adds the &quot;!&quot; symbol
// EXAMPLE:
public class Book {
  @NonNull
  private String title;  // In GraphQL: title: String!
  
  private String subtitle;  // In GraphQL: subtitle: String (optional)
}

@Ignore
// WHAT IT DOES: Excludes a field from GraphQL schema
// WHEN TO USE: When you have internal fields users shouldn&#x27;t see
// EXAMPLE:
public class Book {
  private Long id;
  private String title;
  
  @Ignore
  private String internalProcessingFlag;  // Not visible in GraphQL
}

@DateFormat(&quot;yyyy-MM-dd&quot;)
// WHAT IT DOES: Specifies how dates should be formatted
// EXAMPLE:
public class Book {
  @DateFormat(&quot;yyyy-MM-dd&quot;)
  private LocalDate publishedDate;
  // Will appear as &quot;2024-01-15&quot; in GraphQL
}

@NumberFormat(&quot;000.00&quot;)
// WHAT IT DOES: Specifies how numbers should be formatted
// EXAMPLE:
public class Book {
  @NumberFormat(&quot;000.00&quot;)
  private Double price;
  // Will appear as &quot;045.99&quot; instead of &quot;45.99&quot;
}
</code></pre>
<hr>
<h4 id="complete-example-using-multiple-annotations">Complete Example Using Multiple Annotations</h4>
<pre><code class="language-java">
import org.eclipse.microprofile.graphql.*;
import jakarta.enterprise.context.ApplicationScoped;
import java.time.LocalDate;

@GraphQLApi
@ApplicationScoped
@Description(&quot;Main API for managing books in the library&quot;)
public class BookResource {
    
    private List&lt;Book&gt; books = new ArrayList&lt;&gt;();
    
    // ═══════════════════════════════════════════════════
    // QUERY with description and custom name
    // ═══════════════════════════════════════════════════
    @Query(&quot;allBooks&quot;)
    @Description(&quot;Retrieves all books from the library&quot;)
    public List&lt;Book&gt; getAllBooks(
        @Name(&quot;limit&quot;) 
        @DefaultValue(&quot;100&quot;) 
        @Description(&quot;Maximum number of books to return&quot;)
        Integer limit,
        
        @Name(&quot;offset&quot;) 
        @DefaultValue(&quot;0&quot;)
        @Description(&quot;Number of books to skip&quot;)
        Integer offset
    ) {
        return books.stream()
            .skip(offset)
            .limit(limit)
            .collect(Collectors.toList());
    }
    
    // ═══════════════════════════════════════════════════
    // QUERY with NonNull parameter
    // ═══════════════════════════════════════════════════
    @Query
    @Description(&quot;Find a specific book by its unique identifier&quot;)
    public Book bookById(
        @Name(&quot;id&quot;) 
        @NonNull 
        @Description(&quot;The unique ID of the book&quot;)
        Long id
    ) {
        return books.stream()
            .filter(b -&gt; b.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATION with multiple annotations
    // ═══════════════════════════════════════════════════
    @Mutation
    @Description(&quot;Adds a new book to the library&quot;)
    public Book addBook(
        @Name(&quot;title&quot;) 
        @NonNull 
        @Description(&quot;The title of the book&quot;)
        String title,
        
        @Name(&quot;author&quot;) 
        @NonNull 
        @Description(&quot;The author of the book&quot;)
        String author,
        
        @Name(&quot;pages&quot;) 
        @Description(&quot;Number of pages in the book&quot;)
        Integer pages,
        
        @Name(&quot;price&quot;) 
        @Description(&quot;Price of the book in USD&quot;)
        Double price,
        
        @Name(&quot;publishedDate&quot;)
        @Description(&quot;When the book was published&quot;)
        LocalDate publishedDate
    ) {
        Book book = new Book();
        book.setId(generateId());
        book.setTitle(title);
        book.setAuthor(author);
        book.setPages(pages);
        book.setPrice(price);
        book.setPublishedDate(publishedDate);
        
        books.add(book);
        return book;
    }
}
</code></pre>
<p><strong>What the Generated GraphQL Schema Looks Like:</strong></p>
<pre><code class="language-graphql">
&quot;&quot;&quot;
Main API for managing books in the library
&quot;&quot;&quot;
type Query {
  &quot;&quot;&quot;
  Retrieves all books from the library
  &quot;&quot;&quot;
  allBooks(
    &quot;&quot;&quot;
    Maximum number of books to return
    &quot;&quot;&quot;
    limit: Int = 100
    
    &quot;&quot;&quot;
    Number of books to skip
    &quot;&quot;&quot;
    offset: Int = 0
  ): [Book!]
  
  &quot;&quot;&quot;
  Find a specific book by its unique identifier
  &quot;&quot;&quot;
  bookById(
    &quot;&quot;&quot;
    The unique ID of the book
    &quot;&quot;&quot;
    id: BigInteger!
  ): Book
}

type Mutation {
  &quot;&quot;&quot;
  Adds a new book to the library
  &quot;&quot;&quot;
  addBook(
    &quot;&quot;&quot;
    The title of the book
    &quot;&quot;&quot;
    title: String!
    
    &quot;&quot;&quot;
    The author of the book
    &quot;&quot;&quot;
    author: String!
    
    &quot;&quot;&quot;
    Number of pages in the book
    &quot;&quot;&quot;
    pages: Int
    
    &quot;&quot;&quot;
    Price of the book in USD
    &quot;&quot;&quot;
    price: Float
    
    &quot;&quot;&quot;
    When the book was published
    &quot;&quot;&quot;
    publishedDate: Date
  ): Book!
}
</code></pre>
<p><strong>Benefits of Using Annotations:</strong></p>
<ul>
<li><strong>Self-Documenting</strong> - Your API documentation is in your code</li>
<li><strong>Type Safety</strong> - Compiler checks your code</li>
<li><strong>Less Boilerplate</strong> - No need to write schema files separately</li>
<li><strong>Maintenance</strong> - Change code once, schema updates automatically</li>
</ul>
<hr>
<h3 id="quick-reference-table">Quick Reference Table</h3>
<table>
<thead><tr>
<th>Annotation</th>
<th>Use On</th>
<th>Purpose</th>
<th>Example</th>
</tr></thead><tbody>
<tr>
<td><code>@GraphQLApi</code></td>
<td>Class</td>
<td>Mark as GraphQL API</td>
<td><code>@GraphQLApi public class BookResource</code></td>
</tr>
<tr>
<td><code>@Query</code></td>
<td>Method</td>
<td>Read data</td>
<td><code>@Query public List&lt;Book&gt; getBooks()</code></td>
</tr>
<tr>
<td><code>@Mutation</code></td>
<td>Method</td>
<td>Change data</td>
<td><code>@Mutation public Book addBook()</code></td>
</tr>
<tr>
<td><code>@Name</code></td>
<td>Parameter</td>
<td>Name a parameter</td>
<td><code>@Name(&quot;id&quot;) Long bookId</code></td>
</tr>
<tr>
<td><code>@Description</code></td>
<td>Any</td>
<td>Add documentation</td>
<td><code>@Description(&quot;A book&quot;)</code></td>
</tr>
<tr>
<td><code>@NonNull</code></td>
<td>Field/Parameter</td>
<td>Make required</td>
<td><code>@NonNull String title</code></td>
</tr>
<tr>
<td><code>@DefaultValue</code></td>
<td>Parameter</td>
<td>Set default</td>
<td><code>@DefaultValue(&quot;10&quot;) Integer limit</code></td>
</tr>
<tr>
<td><code>@Ignore</code></td>
<td>Field</td>
<td>Exclude from schema</td>
<td><code>@Ignore private String internal</code></td>
</tr>
<tr>
<td><code>@DateFormat</code></td>
<td>Field</td>
<td>Format dates</td>
<td><code>@DateFormat(&quot;yyyy-MM-dd&quot;)</code></td>
</tr>
<tr>
<td><code>@NumberFormat</code></td>
<td>Field</td>
<td>Format numbers</td>
<td><code>@NumberFormat(&quot;00.00&quot;)</code></td>
</tr>
</tbody></table>
<p>This covers all the basic annotations you need to build GraphQL APIs in Quarkus!</p>
<hr>
<h2 id="intermediate-part">Intermediate Part</h2>
<p><strong>What You&#x27;ll Learn in This Section:</strong></p>
<p>Now that you understand the basics, we&#x27;ll explore more realistic scenarios:</p>
<ul>
<li>How to connect related data (like authors and their books)</li>
<li>Working with real databases instead of in-memory lists</li>
<li>Handling large datasets with pagination</li>
<li>Adding security to protect your API</li>
<li>Dealing with errors gracefully</li>
</ul>
<p><strong>Real-World Context:</strong></p>
<p>The basic part taught you to build a simple bookstore. The intermediate part teaches you to build a <em>real</em> bookstore with:</p>
<ul>
<li>Multiple related tables (authors, books, reviews)</li>
<li>Actual database storage</li>
<li>User authentication</li>
<li>Professional error handling</li>
</ul>
<p>Think of it as moving from a lemonade stand to a real store!</p>
<hr>
<h3 id="understanding-data-relationships-how-things-connect">Understanding Data Relationships (How Things Connect)</h3>
<p><strong>What Are Relationships?</strong></p>
<p>In the real world, data is connected. For example:</p>
<ul>
<li>An <strong>Author</strong> writes many <strong>Books</strong></li>
<li>A <strong>Book</strong> has one <strong>Author</strong></li>
<li>A <strong>Book</strong> has many <strong>Reviews</strong></li>
<li>A <strong>Review</strong> is written by one <strong>User</strong></li>
</ul>
<p>This is called &quot;relationships&quot; - how different pieces of data relate to each other.</p>
<p><strong>Visual Example:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Real-World Relationships                │
└─────────────────────────────────────────────────┘

Author &quot;J.K. Rowling&quot;
    │
    ├──── Book &quot;Harry Potter 1&quot;
    │         │
    │         ├── Review by User &quot;Alice&quot;
    │         ├── Review by User &quot;Bob&quot;
    │         └── Review by User &quot;Charlie&quot;
    │
    ├──── Book &quot;Harry Potter 2&quot;
    │         │
    │         └── Review by User &quot;Alice&quot;
    │
    └──── Book &quot;Harry Potter 3&quot;
              └── Review by User &quot;Bob&quot;

One author → Many books
One book → Many reviews
One review → One user
</code></pre>
<hr>
<h3 id="one-to-many-relationship-beginners-guide">One-to-Many Relationship (Beginner&#x27;s Guide)</h3>
<p><strong>What is One-to-Many?</strong></p>
<ul>
<li><strong>One</strong> author has <strong>many</strong> books</li>
<li><strong>One</strong> book has <strong>many</strong> reviews</li>
<li><strong>One</strong> customer has <strong>many</strong> orders</li>
</ul>
<p><strong>Real-World Analogy:</strong></p>
<p>Think of a family tree:</p>
<ul>
<li>One parent → Many children</li>
<li>One teacher → Many students</li>
<li>One company → Many employees</li>
</ul>
<p>Let&#x27;s build an Author-to-Books relationship!</p>
<h4 id="step-1-create-the-author-model">Step 1: Create the Author Model</h4>
<p><strong>What We&#x27;re Building:</strong></p>
<p>An Author who can have multiple books. Each author has:</p>
<ul>
<li>An ID (unique identifier)</li>
<li>A name</li>
<li>An email</li>
<li>A list of books they&#x27;ve written</li>
</ul>
<pre><code class="language-java">
package org.acme.model;

import java.util.List;
import java.util.ArrayList;

public class Author {
    // ═══════════════════════════════════════════════════
    // BASIC INFORMATION
    // ═══════════════════════════════════════════════════
    private Long id;           // Unique ID for this author
    private String name;       // Author&#x27;s full name
    private String email;      // Author&#x27;s email address
    
    // ═══════════════════════════════════════════════════
    // RELATIONSHIP
    // ═══════════════════════════════════════════════════
    // This list will hold ALL books written by this author
    // This is the &quot;many&quot; in &quot;one-to-many&quot;
    private List&lt;Book&gt; books;
    
    // ═══════════════════════════════════════════════════
    // CONSTRUCTORS
    // ═══════════════════════════════════════════════════
    
    // Empty constructor - creates blank author
    public Author() {
        this.books = new ArrayList&lt;&gt;();  // Initialize empty book list
    }
    
    // Constructor with basic info
    public Author(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.books = new ArrayList&lt;&gt;();  // Initialize empty book list
    }
    
    // ═══════════════════════════════════════════════════
    // GETTERS AND SETTERS
    // ═══════════════════════════════════════════════════
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public List&lt;Book&gt; getBooks() { return books; }
    public void setBooks(List&lt;Book&gt; books) { this.books = books; }
    
    // ═══════════════════════════════════════════════════
    // HELPER METHODS
    // ═══════════════════════════════════════════════════
    
    // Add a single book to this author
    public void addBook(Book book) {
        this.books.add(book);
        book.setAuthorId(this.id);  // Connect book back to author
    }
}
</code></pre>
<h4 id="step-2-update-the-book-model">Step 2: Update the Book Model</h4>
<p><strong>What Changed:</strong></p>
<p>Books now need to remember which author wrote them. We add an <code>authorId</code> field.</p>
<pre><code class="language-java">
package org.acme.model;

public class Book {
    private Long id;
    private String title;
    private Integer pages;
    private Double price;
    
    // ═══════════════════════════════════════════════════
    // NEW FIELD - Links this book to an author
    // ═══════════════════════════════════════════════════
    private Long authorId;  // Which author wrote this book?
    
    // Constructors
    public Book() {}
    
    public Book(Long id, String title, Long authorId, Integer pages, Double price) {
        this.id = id;
        this.title = title;
        this.authorId = authorId;
        this.pages = pages;
        this.price = price;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public Long getAuthorId() { return authorId; }
    public void setAuthorId(Long authorId) { this.authorId = authorId; }
    
    public Integer getPages() { return pages; }
    public void setPages(Integer pages) { this.pages = pages; }
    
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
}
</code></pre>
<h4 id="step-3-create-a-book-service">Step 3: Create a Book Service</h4>
<p><strong>What is a Service?</strong></p>
<p>A service is a helper class that handles specific tasks. In this case, it manages book-related operations.</p>
<p><strong>Why Use a Service?</strong></p>
<ul>
<li><strong>Separation of Concerns</strong>: GraphQL resource focuses on handling requests, service focuses on business logic</li>
<li><strong>Reusability</strong>: Multiple parts of your app can use the same service</li>
<li><strong>Testability</strong>: Easier to test business logic separately</li>
</ul>
<pre><code class="language-java">
package org.acme.service;

import org.acme.model.Book;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped  // Only one instance exists
public class BookService {
    
    // In-memory storage (in real apps, this would be a database)
    private List&lt;Book&gt; books = new ArrayList&lt;&gt;();
    
    /**
     * Get all books written by a specific author
     * 
     * @param authorId The ID of the author
     * @return List of books by that author
     */
    public List&lt;Book&gt; getBooksByAuthorId(Long authorId) {
        return books.stream()
            .filter(book -&gt; book.getAuthorId().equals(authorId))
            .collect(Collectors.toList());
    }
    
    /**
     * Get all books in the system
     */
    public List&lt;Book&gt; getAllBooks() {
        return books;
    }
    
    /**
     * Add a new book
     */
    public Book addBook(Book book) {
        books.add(book);
        return book;
    }
    
    /**
     * Count how many books an author has written
     */
    public int countBooksByAuthor(Long authorId) {
        return (int) books.stream()
            .filter(book -&gt; book.getAuthorId().equals(authorId))
            .count();
    }
}
</code></pre>
<h4 id="step-4-create-the-author-graphql-resource">Step 4: Create the Author GraphQL Resource</h4>
<p><strong>The Magic Part - Field Resolvers:</strong></p>
<p>This is where GraphQL really shines. We can define HOW to get an author&#x27;s books.</p>
<pre><code class="language-java">
package org.acme.graphql;

import org.eclipse.microprofile.graphql.*;
import org.acme.model.Author;
import org.acme.model.Book;
import org.acme.service.BookService;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.ArrayList;
import java.util.List;

@GraphQLApi
@ApplicationScoped
public class AuthorResource {
    
    // ═══════════════════════════════════════════════════
    // INJECT DEPENDENCIES
    // ═══════════════════════════════════════════════════
    // @Inject tells Quarkus: &quot;Please give me an instance of BookService&quot;
    // This is called Dependency Injection
    @Inject
    BookService bookService;
    
    // In-memory storage for authors
    private List&lt;Author&gt; authors = new ArrayList&lt;&gt;();
    private Long nextId = 1L;
    
    // ═══════════════════════════════════════════════════
    // QUERIES
    // ═══════════════════════════════════════════════════
    
    @Query(&quot;allAuthors&quot;)
    @Description(&quot;Get all authors in the system&quot;)
    public List&lt;Author&gt; getAllAuthors() {
        return authors;
    }
    
    @Query
    @Description(&quot;Find an author by their unique ID&quot;)
    public Author authorById(@Name(&quot;id&quot;) Long id) {
        return authors.stream()
            .filter(author -&gt; author.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
    
    // ═══════════════════════════════════════════════════
    // FIELD RESOLVER - THE MAGIC HAPPENS HERE!
    // ═══════════════════════════════════════════════════
    
    /**
     * This is called a &quot;Field Resolver&quot;
     * 
     * @Source means: &quot;This method provides data for a field on the Author type&quot;
     * 
     * When someone queries:
     *   query {
     *     allAuthors {
     *       name
     *       books { title }  ← This triggers the books() method!
     *     }
     *   }
     * 
     * GraphQL will:
     * 1. Call getAllAuthors() to get all authors
     * 2. For EACH author, call books(author) to get their books
     * 3. Combine the results
     */
    @Description(&quot;Get all books written by this author&quot;)
    public List&lt;Book&gt; books(@Source Author author) {
        // @Source Author author means:
        // &quot;Give me the current author we&#x27;re processing&quot;
        
        // Use the BookService to find all books by this author
        return bookService.getBooksByAuthorId(author.getId());
    }
    
    /**
     * Another field resolver - computed field
     * This field doesn&#x27;t exist in the Author model,
     * but we can calculate it on-the-fly!
     */
    @Description(&quot;Count of books written by this author&quot;)
    public Integer bookCount(@Source Author author) {
        return bookService.countBooksByAuthor(author.getId());
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATIONS
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Description(&quot;Add a new author to the system&quot;)
    public Author createAuthor(
        @Name(&quot;name&quot;) String name,
        @Name(&quot;email&quot;) String email
    ) {
        Author author = new Author(nextId++, name, email);
        authors.add(author);
        return author;
    }
}
</code></pre>
<h4 id="understanding-the-generated-graphql-schema">Understanding the Generated GraphQL Schema</h4>
<p><strong>What Gets Generated:</strong></p>
<pre><code class="language-graphql">
type Author {
  id: BigInteger!
  name: String!
  email: String!
  
  # These fields come from the field resolvers!
  books: [Book!]!        # From books(@Source Author author) method
  bookCount: Int!         # From bookCount(@Source Author author) method
}

type Book {
  id: BigInteger!
  title: String!
  authorId: BigInteger!
  pages: Int
  price: Float
}

type Query {
  allAuthors: [Author!]!
  authorById(id: BigInteger!): Author
}

type Mutation {
  createAuthor(name: String!, email: String!): Author!
}
</code></pre>
<h4 id="how-to-use-this-in-practice">How to Use This in Practice</h4>
<p><strong>Example 1: Get all authors with their books</strong></p>
<pre><code class="language-graphql">
query {
  allAuthors {
    id
    name
    email
    books {
      id
      title
      price
    }
    bookCount
  }
}
</code></pre>
<p><strong>What Happens Behind the Scenes:</strong></p>
<pre><code class="language-">
Step 1: GraphQL calls getAllAuthors()
        Returns: [Author1, Author2, Author3]

Step 2: For Author1, GraphQL calls books(Author1)
        Returns: [Book1, Book2]

Step 3: For Author1, GraphQL calls bookCount(Author1)
        Returns: 2

Step 4: Repeat for Author2 and Author3

Step 5: Combine all results into one response
</code></pre>
<p><strong>Response:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;allAuthors&quot;: [
      {
        &quot;id&quot;: 1,
        &quot;name&quot;: &quot;Joshua Bloch&quot;,
        &quot;email&quot;: &quot;joshua@example.com&quot;,
        &quot;books&quot;: [
          {
            &quot;id&quot;: 1,
            &quot;title&quot;: &quot;Effective Java&quot;,
            &quot;price&quot;: 45.99
          },
          {
            &quot;id&quot;: 3,
            &quot;title&quot;: &quot;Java Puzzlers&quot;,
            &quot;price&quot;: 39.99
          }
        ],
        &quot;bookCount&quot;: 2
      },
      {
        &quot;id&quot;: 2,
        &quot;name&quot;: &quot;Robert Martin&quot;,
        &quot;email&quot;: &quot;robert@example.com&quot;,
        &quot;books&quot;: [
          {
            &quot;id&quot;: 2,
            &quot;title&quot;: &quot;Clean Code&quot;,
            &quot;price&quot;: 42.99
          }
        ],
        &quot;bookCount&quot;: 1
      }
    ]
  }
}
</code></pre>
<p><strong>Example 2: Get just author names and book count</strong></p>
<pre><code class="language-graphql">
query {
  allAuthors {
    name
    bookCount
  }
}
</code></pre>
<p><strong>The Beauty of GraphQL:</strong></p>
<p>Even though we CAN get books, we don&#x27;t have to! The <code>books()</code> method is only called if you ask for books in your query.</p>
<pre><code class="language-">
If you ask for:        GraphQL calls:
─────────────────────────────────────
{ name }               getAllAuthors() only
{ name, bookCount }    getAllAuthors() + bookCount()
{ name, books }        getAllAuthors() + books()
</code></pre>
<p>This saves processing time and database queries!</p>
<hr>
<h3 id="understanding-source-the-field-resolver-pattern">Understanding @Source (The Field Resolver Pattern)</h3>
<p><strong>What is @Source?</strong></p>
<p><code>@Source</code> is special annotation that tells GraphQL: &quot;This method provides data for a field on a parent object&quot;</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Imagine you&#x27;re at a restaurant:</p>
<ul>
<li><strong>Parent Object</strong> = Your main dish (Author)</li>
<li><strong>Field Resolver</strong> = Side dishes you can add (books, bookCount)</li>
<li><strong>@Source</strong> = The waiter asking &quot;Which main dish is this side for?&quot;</li>
</ul>
<p><strong>The Pattern:</strong></p>
<pre><code class="language-java">
// Parent type
public class Author {
  private Long id;
  private String name;
  // Note: No &#x27;books&#x27; field here!
}

// Field resolver adds virtual fields
public List&lt;Book&gt; books(@Source Author author) {
  // &#x27;author&#x27; is the parent object
  // We can access all its properties
  return findBooksByAuthorId(author.getId());
}
</code></pre>
<p><strong>Why This is Powerful:</strong></p>
<ul>
<li><strong>Lazy Loading</strong>: Books are only fetched if requested</li>
<li><strong>Computed Fields</strong>: Can calculate fields that don&#x27;t exist in the model</li>
<li><strong>Clean Separation</strong>: Business logic separate from data models</li>
<li><strong>Flexibility</strong>: Easy to add new fields without changing the model</li>
</ul>
<p><strong>More Examples:</strong></p>
<pre><code class="language-java">
@GraphQLApi
public class AuthorResource {
    
    // Virtual field 1: Full name
    public String fullName(@Source Author author) {
        return author.getFirstName() + &quot; &quot; + author.getLastName();
    }
    
    // Virtual field 2: Recent books (last 5)
    public List&lt;Book&gt; recentBooks(@Source Author author) {
        return bookService.getRecentBooksByAuthor(author.getId(), 5);
    }
    
    // Virtual field 3: Is bestselling author?
    public Boolean isBestselling(@Source Author author) {
        return bookService.hasBookWithSalesOver(author.getId(), 1000000);
    }
    
    // Virtual field 4: Average book rating
    public Double averageRating(@Source Author author) {
        List&lt;Book&gt; books = bookService.getBooksByAuthorId(author.getId());
        return books.stream()
            .mapToDouble(Book::getRating)
            .average()
            .orElse(0.0);
    }
}
</code></pre>
<p>These all become queryable fields in GraphQL!</p>
<hr>
<h3 id="input-types-grouping-related-data">Input Types (Grouping Related Data)</h3>
<p><strong>What Are Input Types?</strong></p>
<p>When creating or updating complex data, instead of passing many individual parameters, we group them into an &quot;Input Type&quot; - like filling out a form.</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Imagine registering for a website:</p>
<p><strong>Bad Way (Many individual fields):</strong></p>
<pre><code class="language-">
createUser(
  firstName: &quot;John&quot;
  lastName: &quot;Doe&quot;
  email: &quot;john@example.com&quot;
  street: &quot;123 Main St&quot;
  city: &quot;Boston&quot;
  state: &quot;MA&quot;
  zipCode: &quot;02101&quot;
  country: &quot;USA&quot;
)
</code></pre>
<p>This is messy with 8 parameters!</p>
<p><strong>Good Way (Grouped input):</strong></p>
<pre><code class="language-">
createUser(input: {
  name: {
    first: &quot;John&quot;
    last: &quot;Doe&quot;
  }
  email: &quot;john@example.com&quot;
  address: {
    street: &quot;123 Main St&quot;
    city: &quot;Boston&quot;
    state: &quot;MA&quot;
    zipCode: &quot;02101&quot;
    country: &quot;USA&quot;
  }
})
</code></pre>
<p>Much cleaner and organized!</p>
<h4 id="step-1-create-the-input-class">Step 1: Create the Input Class</h4>
<p><strong>What We&#x27;re Building:</strong></p>
<p>An input type for creating books with all necessary information grouped together.</p>
<pre><code class="language-java">
package org.acme.input;

import org.eclipse.microprofile.graphql.Input;
import org.eclipse.microprofile.graphql.Name;
import org.eclipse.microprofile.graphql.Description;

// ═══════════════════════════════════════════════════════
// @Input tells GraphQL: &quot;This is an input type&quot;
// Input types are ONLY used for passing data TO mutations
// They cannot be returned FROM queries
// ═══════════════════════════════════════════════════════

@Input(&quot;BookInput&quot;)  // Name it will have in GraphQL schema
@Description(&quot;Input data for creating or updating a book&quot;)
public class BookInput {
    
    @Name(&quot;title&quot;)
    @Description(&quot;The title of the book&quot;)
    private String title;
    
    @Name(&quot;authorId&quot;)
    @Description(&quot;ID of the author who wrote this book&quot;)
    private Long authorId;
    
    @Name(&quot;pages&quot;)
    @Description(&quot;Number of pages in the book&quot;)
    private Integer pages;
    
    @Name(&quot;price&quot;)
    @Description(&quot;Price of the book in USD&quot;)
    private Double price;
    
    @Name(&quot;isbn&quot;)
    @Description(&quot;International Standard Book Number&quot;)
    private String isbn;
    
    // ═══════════════════════════════════════════════════
    // CONSTRUCTORS
    // ═══════════════════════════════════════════════════
    
    // Empty constructor - required for GraphQL
    public BookInput() {}
    
    // Full constructor - for convenience in tests
    public BookInput(String title, Long authorId, Integer pages, Double price, String isbn) {
        this.title = title;
        this.authorId = authorId;
        this.pages = pages;
        this.price = price;
        this.isbn = isbn;
    }
    
    // ═══════════════════════════════════════════════════
    // GETTERS AND SETTERS
    // ═══════════════════════════════════════════════════
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public Long getAuthorId() { return authorId; }
    public void setAuthorId(Long authorId) { this.authorId = authorId; }
    
    public Integer getPages() { return pages; }
    public void setPages(Integer pages) { this.pages = pages; }
    
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
}
</code></pre>
<h4 id="step-2-create-a-nested-input-type-advanced">Step 2: Create a Nested Input Type (Advanced)</h4>
<p><strong>What if we want to create a book AND its author in one mutation?</strong></p>
<p>We can nest input types!</p>
<pre><code class="language-java">
package org.acme.input;

import org.eclipse.microprofile.graphql.Input;
import org.eclipse.microprofile.graphql.Description;

@Input(&quot;AuthorInput&quot;)
@Description(&quot;Input data for creating an author&quot;)
public class AuthorInput {
    
    @Description(&quot;Author&#x27;s full name&quot;)
    private String name;
    
    @Description(&quot;Author&#x27;s email address&quot;)
    private String email;
    
    @Description(&quot;Author&#x27;s biography&quot;)
    private String bio;
    
    // Constructors, getters, setters
    public AuthorInput() {}
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }
}
</code></pre>
<pre><code class="language-java">
package org.acme.input;

import org.eclipse.microprofile.graphql.Input;
import org.eclipse.microprofile.graphql.Description;

@Input(&quot;BookWithAuthorInput&quot;)
@Description(&quot;Input for creating a book with a new author&quot;)
public class BookWithAuthorInput {
    
    @Description(&quot;Book information&quot;)
    private BookInput book;
    
    @Description(&quot;Author information&quot;)
    private AuthorInput author;
    
    // Constructors, getters, setters
    public BookWithAuthorInput() {}
    
    public BookInput getBook() { return book; }
    public void setBook(BookInput book) { this.book = book; }
    
    public AuthorInput getAuthor() { return author; }
    public void setAuthor(AuthorInput author) { this.author = author; }
}
</code></pre>
<h4 id="step-3-use-input-types-in-mutations">Step 3: Use Input Types in Mutations</h4>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    @Inject
    BookService bookService;
    
    @Inject
    AuthorService authorService;
    
    // ═══════════════════════════════════════════════════
    // SIMPLE MUTATION - Single input parameter
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Description(&quot;Create a new book&quot;)
    public Book createBook(@Name(&quot;input&quot;) BookInput input) {
        // Validate input
        if (input.getTitle() == null || input.getTitle().isEmpty()) {
            throw new IllegalArgumentException(&quot;Title is required&quot;);
        }
        
        // Create book from input
        Book book = new Book();
        book.setId(generateId());
        book.setTitle(input.getTitle());
        book.setAuthorId(input.getAuthorId());
        book.setPages(input.getPages());
        book.setPrice(input.getPrice());
        book.setIsbn(input.getIsbn());
        
        // Save and return
        return bookService.save(book);
    }
    
    // ═══════════════════════════════════════════════════
    // UPDATE MUTATION - Only update provided fields
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Description(&quot;Update an existing book&quot;)
    public Book updateBook(
        @Name(&quot;id&quot;) Long id,
        @Name(&quot;input&quot;) BookInput input
    ) {
        // Find existing book
        Book book = bookService.findById(id);
        if (book == null) {
            throw new IllegalArgumentException(&quot;Book not found: &quot; + id);
        }
        
        // Update only fields that were provided
        if (input.getTitle() != null) {
            book.setTitle(input.getTitle());
        }
        if (input.getPages() != null) {
            book.setPages(input.getPages());
        }
        if (input.getPrice() != null) {
            book.setPrice(input.getPrice());
        }
        if (input.getIsbn() != null) {
            book.setIsbn(input.getIsbn());
        }
        
        return bookService.update(book);
    }
    
    // ═══════════════════════════════════════════════════
    // NESTED MUTATION - Create book with new author
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Description(&quot;Create a book and its author together&quot;)
    public Book createBookWithAuthor(@Name(&quot;input&quot;) BookWithAuthorInput input) {
        // First, create the author
        Author author = new Author();
        author.setId(generateAuthorId());
        author.setName(input.getAuthor().getName());
        author.setEmail(input.getAuthor().getEmail());
        author.setBio(input.getAuthor().getBio());
        
        Author savedAuthor = authorService.save(author);
        
        // Then, create the book
        Book book = new Book();
        book.setId(generateBookId());
        book.setTitle(input.getBook().getTitle());
        book.setAuthorId(savedAuthor.getId());  // Link to new author
        book.setPages(input.getBook().getPages());
        book.setPrice(input.getBook().getPrice());
        book.setIsbn(input.getBook().getIsbn());
        
        return bookService.save(book);
    }
}
</code></pre>
<h4 id="generated-graphql-schema">Generated GraphQL Schema</h4>
<pre><code class="language-graphql">
# ═══════════════════════════════════════════════════
# INPUT TYPES (for mutations only)
# ═══════════════════════════════════════════════════

&quot;&quot;&quot;
Input data for creating or updating a book
&quot;&quot;&quot;
input BookInput {
  &quot;&quot;&quot;
  The title of the book
  &quot;&quot;&quot;
  title: String
  
  &quot;&quot;&quot;
  ID of the author who wrote this book
  &quot;&quot;&quot;
  authorId: BigInteger
  
  &quot;&quot;&quot;
  Number of pages in the book
  &quot;&quot;&quot;
  pages: Int
  
  &quot;&quot;&quot;
  Price of the book in USD
  &quot;&quot;&quot;
  price: Float
  
  &quot;&quot;&quot;
  International Standard Book Number
  &quot;&quot;&quot;
  isbn: String
}

&quot;&quot;&quot;
Input data for creating an author
&quot;&quot;&quot;
input AuthorInput {
  &quot;&quot;&quot;
  Author&#x27;s full name
  &quot;&quot;&quot;
  name: String
  
  &quot;&quot;&quot;
  Author&#x27;s email address
  &quot;&quot;&quot;
  email: String
  
  &quot;&quot;&quot;
  Author&#x27;s biography
  &quot;&quot;&quot;
  bio: String
}

&quot;&quot;&quot;
Input for creating a book with a new author
&quot;&quot;&quot;
input BookWithAuthorInput {
  &quot;&quot;&quot;
  Book information
  &quot;&quot;&quot;
  book: BookInput
  
  &quot;&quot;&quot;
  Author information
  &quot;&quot;&quot;
  author: AuthorInput
}

# ═══════════════════════════════════════════════════
# MUTATIONS using input types
# ═══════════════════════════════════════════════════

type Mutation {
  &quot;&quot;&quot;
  Create a new book
  &quot;&quot;&quot;
  createBook(input: BookInput): Book!
  
  &quot;&quot;&quot;
  Update an existing book
  &quot;&quot;&quot;
  updateBook(id: BigInteger!, input: BookInput): Book!
  
  &quot;&quot;&quot;
  Create a book and its author together
  &quot;&quot;&quot;
  createBookWithAuthor(input: BookWithAuthorInput): Book!
}
</code></pre>
<h4 id="how-to-use-input-types">How to Use Input Types</h4>
<p><strong>Example 1: Create a simple book</strong></p>
<pre><code class="language-graphql">
mutation {
  createBook(input: {
    title: &quot;GraphQL in Action&quot;
    authorId: 1
    pages: 350
    price: 49.99
    isbn: &quot;978-1617295683&quot;
  }) {
    id
    title
    author {
      name
    }
  }
}
</code></pre>
<p><strong>Example 2: Update only some fields</strong></p>
<pre><code class="language-graphql">
mutation {
  updateBook(
    id: 5
    input: {
      price: 39.99    # Only update price
      # Other fields remain unchanged
    }
  ) {
    id
    title
    price
  }
}
</code></pre>
<p><strong>Example 3: Create book with new author (nested)</strong></p>
<pre><code class="language-graphql">
mutation {
  createBookWithAuthor(input: {
    book: {
      title: &quot;New Book&quot;
      pages: 400
      price: 55.00
    }
    author: {
      name: &quot;New Author&quot;
      email: &quot;author@example.com&quot;
      bio: &quot;A great new writer&quot;
    }
  }) {
    id
    title
    author {
      id
      name
      email
    }
  }
}
</code></pre>
<p><strong>Benefits of Input Types:</strong></p>
<ul>
<li><strong>Organization</strong>: Related fields grouped together</li>
<li><strong>Reusability</strong>: Same input type can be used in multiple mutations</li>
<li><strong>Type Safety</strong>: GraphQL validates the structure</li>
<li><strong>Clarity</strong>: Clear what data is needed</li>
<li><strong>Flexibility</strong>: Easy to add new fields without breaking existing code</li>
<li><strong>Documentation</strong>: Self-documenting with descriptions</li>
</ul>
<p><strong>When to Use Input Types:</strong></p>
<p>✅ <strong>Use input types when:</strong></p>
<ul>
<li>Creating or updating complex objects</li>
<li>Multiple related fields</li>
<li>Same data structure used in multiple mutations</li>
<li>Want to group optional fields</li>
</ul>
<p>❌ <strong>Don&#x27;t need input types when:</strong></p>
<ul>
<li>Simple operations with 1-2 parameters</li>
<li>Single primitive value (just pass it directly)</li>
<li>Example: <code>deleteBook(id: 5)</code> - no need for input type</li>
</ul>
<hr>
<h3 id="interfaces-and-unions-advanced-type-relationships">Interfaces and Unions (Advanced Type Relationships)</h3>
<p><strong>What Are These?</strong></p>
<p>Sometimes different types of objects share common fields, or you need to return different types from the same query. That&#x27;s where interfaces and unions come in.</p>
<hr>
<h4 id="interfaces-shared-fields-across-types">Interfaces: Shared Fields Across Types</h4>
<p><strong>What is an Interface?</strong></p>
<p>An interface is like a contract that says &quot;All types implementing this interface MUST have these fields.&quot;</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Think about vehicles:</p>
<ul>
<li><strong>Interface</strong>: Vehicle (all vehicles have: id, manufacturer, year)</li>
<li><strong>Implementations</strong>: Car, Truck, Motorcycle (each has additional specific fields)</li>
</ul>
<p>All vehicles share common properties, but each type has unique ones too.</p>
<p><strong>GraphQL Example:</strong></p>
<pre><code class="language-java">
package org.acme.model;

import org.eclipse.microprofile.graphql.Interface;
import org.eclipse.microprofile.graphql.Description;

// ═══════════════════════════════════════════════════════
// INTERFACE - Defines common fields
// ═══════════════════════════════════════════════════════

@Interface
@Description(&quot;Common fields for all database entities&quot;)
public interface Node {
    // Every Node MUST have these fields
    Long getId();
    String getCreatedAt();
    String getUpdatedAt();
}
</code></pre>
<p><strong>Implementing the Interface:</strong></p>
<pre><code class="language-java">
package org.acme.model;

import java.time.LocalDateTime;

// ═══════════════════════════════════════════════════════
// Book implements Node
// So Book MUST have: id, createdAt, updatedAt
// ═══════════════════════════════════════════════════════

public class Book implements Node {
    // From Node interface (required)
    private Long id;
    private String createdAt;
    private String updatedAt;
    
    // Book-specific fields
    private String title;
    private String isbn;
    private Double price;
    
    // Interface methods (required)
    @Override
    public Long getId() { return id; }
    
    @Override
    public String getCreatedAt() { return createdAt; }
    
    @Override
    public String getUpdatedAt() { return updatedAt; }
    
    // Book-specific getters/setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    
    // Setters for Node fields
    public void setId(Long id) { this.id = id; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }
    public void setUpdatedAt(String updatedAt) { this.updatedAt = updatedAt; }
}
</code></pre>
<pre><code class="language-java">
package org.acme.model;

// ═══════════════════════════════════════════════════════
// Author also implements Node
// ═══════════════════════════════════════════════════════

public class Author implements Node {
    // From Node interface (required)
    private Long id;
    private String createdAt;
    private String updatedAt;
    
    // Author-specific fields
    private String name;
    private String email;
    private String bio;
    
    // Interface methods (required)
    @Override
    public Long getId() { return id; }
    
    @Override
    public String getCreatedAt() { return createdAt; }
    
    @Override
    public String getUpdatedAt() { return updatedAt; }
    
    // Author-specific getters/setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }
    
    // Setters for Node fields
    public void setId(Long id) { this.id = id; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }
    public void setUpdatedAt(String updatedAt) { this.updatedAt = updatedAt; }
}
</code></pre>
<p><strong>Using the Interface:</strong></p>
<pre><code class="language-java">
@GraphQLApi
public class NodeResource {
    
    @Inject
    BookService bookService;
    
    @Inject
    AuthorService authorService;
    
    /**
     * Generic query that can return ANY type implementing Node
     * This is powerful - one query for multiple types!
     */
    @Query
    @Description(&quot;Get any entity by its ID&quot;)
    public Node node(@Name(&quot;id&quot;) Long id, @Name(&quot;type&quot;) String type) {
        // Based on type, return different implementations
        switch (type.toUpperCase()) {
            case &quot;BOOK&quot;:
                return bookService.findById(id);
            case &quot;AUTHOR&quot;:
                return authorService.findById(id);
            default:
                throw new IllegalArgumentException(&quot;Unknown type: &quot; + type);
        }
    }
}
</code></pre>
<p><strong>Generated GraphQL Schema:</strong></p>
<pre><code class="language-graphql">
&quot;&quot;&quot;
Common fields for all database entities
&quot;&quot;&quot;
interface Node {
  id: BigInteger!
  createdAt: String!
  updatedAt: String!
}

type Book implements Node {
  id: BigInteger!
  createdAt: String!
  updatedAt: String!
  title: String!
  isbn: String
  price: Float
}

type Author implements Node {
  id: BigInteger!
  createdAt: String!
  updatedAt: String!
  name: String!
  email: String!
  bio: String
}

type Query {
  &quot;&quot;&quot;
  Get any entity by its ID
  &quot;&quot;&quot;
  node(id: BigInteger!, type: String!): Node
}
</code></pre>
<p><strong>How to Query:</strong></p>
<pre><code class="language-graphql">
query {
  node(id: 1, type: &quot;BOOK&quot;) {
    id
    createdAt
    updatedAt
    
    # Use fragments to get type-specific fields
    ... on Book {
      title
      isbn
      price
    }
    
    ... on Author {
      name
      email
    }
  }
}
</code></pre>
<p><strong>What are fragments?</strong></p>
<p><code>... on Book</code> is called an &quot;inline fragment&quot;. It means: &quot;If this Node is actually a Book, also give me these Book-specific fields.&quot;</p>
<hr>
<h4 id="unions-multiple-possible-types">Unions: Multiple Possible Types</h4>
<p><strong>What is a Union?</strong></p>
<p>A union represents a value that could be one of several different types. Unlike interfaces, union types don&#x27;t share common fields.</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Search results on Amazon:</p>
<ul>
<li>You search for &quot;apple&quot;</li>
<li>Results could be: Books, Electronics, Food, or Clothing</li>
<li>Each result type is completely different</li>
<li>But they all appear in the same search results list</li>
</ul>
<p><strong>GraphQL Example:</strong></p>
<pre><code class="language-java">
package org.acme.model;

import org.eclipse.microprofile.graphql.Union;
import org.eclipse.microprofile.graphql.Description;

// ═══════════════════════════════════════════════════════
// UNION - Marker interface
// Types implementing this can be returned together
// ═══════════════════════════════════════════════════════

@Union
@Description(&quot;Result from a search query - could be book, author, or review&quot;)
public interface SearchResult {
    // This is just a marker - no methods required
}
</code></pre>
<p><strong>Implement the Union:</strong></p>
<pre><code class="language-java">
// Book.java
public class Book implements SearchResult {
    private Long id;
    private String title;
    private String isbn;
    // ... other fields
}

// Author.java
public class Author implements SearchResult {
    private Long id;
    private String name;
    private String email;
    // ... other fields
}

// Review.java
public class Review implements SearchResult {
    private Long id;
    private String text;
    private Integer rating;
    private Long bookId;
    private Long userId;
    // ... other fields
}
</code></pre>
<p><strong>Use the Union:</strong></p>
<pre><code class="language-java">
@GraphQLApi
public class SearchResource {
    
    @Inject
    BookService bookService;
    
    @Inject
    AuthorService authorService;
    
    @Inject
    ReviewService reviewService;
    
    /**
     * Search across multiple types!
     * Returns a mix of Books, Authors, and Reviews
     */
    @Query
    @Description(&quot;Search across books, authors, and reviews&quot;)
    public List&lt;SearchResult&gt; search(@Name(&quot;query&quot;) String query) {
        List&lt;SearchResult&gt; results = new ArrayList&lt;&gt;();
        
        // Search books
        List&lt;Book&gt; books = bookService.searchBooks(query);
        results.addAll(books);
        
        // Search authors
        List&lt;Author&gt; authors = authorService.searchAuthors(query);
        results.addAll(authors);
        
        // Search reviews
        List&lt;Review&gt; reviews = reviewService.searchReviews(query);
        results.addAll(reviews);
        
        return results;
    }
    
    /**
     * Filtered search - only certain types
     */
    @Query
    @Description(&quot;Search with type filter&quot;)
    public List&lt;SearchResult&gt; searchByType(
        @Name(&quot;query&quot;) String query,
        @Name(&quot;types&quot;) List&lt;String&gt; types
    ) {
        List&lt;SearchResult&gt; results = new ArrayList&lt;&gt;();
        
        if (types.contains(&quot;BOOK&quot;)) {
            results.addAll(bookService.searchBooks(query));
        }
        if (types.contains(&quot;AUTHOR&quot;)) {
            results.addAll(authorService.searchAuthors(query));
        }
        if (types.contains(&quot;REVIEW&quot;)) {
            results.addAll(reviewService.searchReviews(query));
        }
        
        return results;
    }
}
</code></pre>
<p><strong>Generated Schema:</strong></p>
<pre><code class="language-graphql">
&quot;&quot;&quot;
Result from a search query - could be book, author, or review
&quot;&quot;&quot;
union SearchResult = Book | Author | Review

type Query {
  &quot;&quot;&quot;
  Search across books, authors, and reviews
  &quot;&quot;&quot;
  search(query: String!): [SearchResult!]!
  
  &quot;&quot;&quot;
  Search with type filter
  &quot;&quot;&quot;
  searchByType(query: String!, types: [String!]!): [SearchResult!]!
}
</code></pre>
<p><strong>How to Query Unions:</strong></p>
<pre><code class="language-graphql">
query {
  search(query: &quot;java&quot;) {
    # Use __typename to know what type each result is
    __typename
    
    # Then use fragments to get type-specific fields
    ... on Book {
      id
      title
      isbn
      price
    }
    
    ... on Author {
      id
      name
      email
    }
    
    ... on Review {
      id
      text
      rating
    }
  }
}
</code></pre>
<p><strong>Response:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;search&quot;: [
      {
        &quot;__typename&quot;: &quot;Book&quot;,
        &quot;id&quot;: 1,
        &quot;title&quot;: &quot;Effective Java&quot;,
        &quot;isbn&quot;: &quot;978-0134685991&quot;,
        &quot;price&quot;: 45.99
      },
      {
        &quot;__typename&quot;: &quot;Author&quot;,
        &quot;id&quot;: 5,
        &quot;name&quot;: &quot;James Gosling&quot;,
        &quot;email&quot;: &quot;james@example.com&quot;
      },
      {
        &quot;__typename&quot;: &quot;Review&quot;,
        &quot;id&quot;: 42,
        &quot;text&quot;: &quot;Great book about Java!&quot;,
        &quot;rating&quot;: 5
      },
      {
        &quot;__typename&quot;: &quot;Book&quot;,
        &quot;id&quot;: 2,
        &quot;title&quot;: &quot;Java Concurrency&quot;,
        &quot;isbn&quot;: &quot;978-0321349606&quot;,
        &quot;price&quot;: 52.99
      }
    ]
  }
}
</code></pre>
<hr>
<h3 id="comparison-interface-vs-union">Comparison: Interface vs Union</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Interface vs Union                      │
├─────────────────────────────────────────────────┤
│                                                 │
│  INTERFACE:                                     │
│  ✓ Types MUST share common fields              │
│  ✓ Use when types are related                  │
│  ✓ Can query common fields directly            │
│  ✓ Example: All vehicles have wheels           │
│                                                 │
│  UNION:                                         │
│  ✓ Types can be completely different           │
│  ✓ Use when types are unrelated                │
│  ✓ Must use fragments for all fields           │
│  ✓ Example: Search results (mixed types)       │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p><strong>When to Use Each:</strong></p>
<p><strong>Use Interface when:</strong></p>
<ul>
<li>Types share common fields (id, createdAt, etc.)</li>
<li>Types are related conceptually</li>
<li>You want to query common fields without fragments</li>
<li>Example: Different types of users (Admin, Regular, Guest)</li>
</ul>
<p><strong>Use Union when:</strong></p>
<ul>
<li>Types are completely different</li>
<li>No common fields except maybe id</li>
<li>Representing mixed results</li>
<li>Example: Search results, activity feeds, notifications</li>
</ul>
<p><strong>Example - Activity Feed (Union):</strong></p>
<pre><code class="language-java">
@Union
public interface Activity {
    // Could be: NewBookActivity, NewAuthorActivity, NewReviewActivity
}

@Query
public List&lt;Activity&gt; recentActivity() {
    // Returns mix of different activity types
}
</code></pre>
<p><strong>Example - User Types (Interface):</strong></p>
<pre><code class="language-java">
@Interface
public interface User {
    Long getId();
    String getEmail();
    String getRole();
}

// Admin, RegularUser, GuestUser all implement User
</code></pre>
<hr>
<h3 id="error-handling-dealing-with-problems-gracefully">Error Handling (Dealing with Problems Gracefully)</h3>
<p><strong>Why Error Handling Matters:</strong></p>
<p>Things go wrong in applications:</p>
<ul>
<li>User enters invalid data</li>
<li>Database is down</li>
<li>Book doesn&#x27;t exist</li>
<li>User doesn&#x27;t have permission</li>
</ul>
<p>Good error handling tells users WHAT went wrong and HOW to fix it.</p>
<p><strong>Bad Error Handling:</strong></p>
<pre><code class="language-">
Error: Something went wrong
</code></pre>
<p>User thinks: &quot;What? What went wrong? What do I do now?&quot;</p>
<p><strong>Good Error Handling:</strong></p>
<pre><code class="language-">
Error: Book with ID 999 not found
Suggestion: Please check the book ID and try again
</code></pre>
<p>User thinks: &quot;Ah, I used the wrong ID. Let me fix that.&quot;</p>
<hr>
<h4 id="approach-1-custom-exceptions-recommended-for-simple-cases">Approach 1: Custom Exceptions (Recommended for Simple Cases)</h4>
<p><strong>What Are Custom Exceptions?</strong></p>
<p>You create your own error types that are specific to your application.</p>
<p><strong>Creating Custom Exceptions:</strong></p>
<pre><code class="language-java">
package org.acme.exception;

import org.eclipse.microprofile.graphql.GraphQLException;

// ═══════════════════════════════════════════════════════
// Exception for when a book is not found
// ═══════════════════════════════════════════════════════

public class BookNotFoundException extends GraphQLException {
    
    /**
     * Constructor that creates a nice error message
     * 
     * @param id The ID of the book that wasn&#x27;t found
     */
    public BookNotFoundException(Long id) {
        super(
            &quot;Book with id &quot; + id + &quot; not found&quot;,  // Error message
            GraphQLException.ExceptionType.DataFetchingException  // Error category
        );
    }
    
    /**
     * Constructor with custom message
     */
    public BookNotFoundException(String message) {
        super(message, GraphQLException.ExceptionType.DataFetchingException);
    }
}
</code></pre>
<pre><code class="language-java">
package org.acme.exception;

import org.eclipse.microprofile.graphql.GraphQLException;

// ═══════════════════════════════════════════════════════
// Exception for invalid input
// ═══════════════════════════════════════════════════════

public class InvalidInputException extends GraphQLException {
    
    public InvalidInputException(String message) {
        super(
            message,
            GraphQLException.ExceptionType.ValidationException  // Different category
        );
    }
    
    /**
     * Constructor for field-specific errors
     */
    public InvalidInputException(String fieldName, String reason) {
        super(
            &quot;Invalid value for field &#x27;&quot; + fieldName + &quot;&#x27;: &quot; + reason,
            GraphQLException.ExceptionType.ValidationException
        );
    }
}
</code></pre>
<pre><code class="language-java">
package org.acme.exception;

import org.eclipse.microprofile.graphql.GraphQLException;

// ═══════════════════════════════════════════════════════
// Exception for authorization errors
// ═══════════════════════════════════════════════════════

public class UnauthorizedException extends GraphQLException {
    
    public UnauthorizedException(String message) {
        super(
            message,
            GraphQLException.ExceptionType.ExecutionAborted
        );
    }
    
    public UnauthorizedException() {
        super(
            &quot;You are not authorized to perform this action&quot;,
            GraphQLException.ExceptionType.ExecutionAborted
        );
    }
}
</code></pre>
<p><strong>Understanding Exception Types:</strong></p>
<pre><code class="language-">
GraphQL Exception Types (Categories):
─────────────────────────────────────────────────────
DataFetchingException     → Problem getting data
                            (database error, not found, etc.)

ValidationException       → Invalid input from user
                            (wrong format, missing field, etc.)

ExecutionAborted         → Operation stopped
                            (no permission, rate limit, etc.)
</code></pre>
<p><strong>Using Custom Exceptions:</strong></p>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    @Inject
    BookService bookService;
    
    // ═══════════════════════════════════════════════════
    // QUERY with error handling
    // ═══════════════════════════════════════════════════
    
    @Query
    @Description(&quot;Find a book by its ID&quot;)
    public Book bookById(@Name(&quot;id&quot;) Long id) {
        // Validate input
        if (id == null || id &lt;= 0) {
            throw new InvalidInputException(&quot;id&quot;, &quot;must be a positive number&quot;);
        }
        
        // Try to find the book
        Book book = bookService.findById(id);
        
        // If not found, throw exception
        if (book == null) {
            throw new BookNotFoundException(id);
        }
        
        return book;
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATION with multiple validations
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Description(&quot;Add a new book&quot;)
    public Book addBook(@Name(&quot;input&quot;) BookInput input) {
        
        // Validation 1: Check title
        if (input.getTitle() == null || input.getTitle().trim().isEmpty()) {
            throw new InvalidInputException(&quot;title&quot;, &quot;cannot be empty&quot;);
        }
        
        // Validation 2: Check title length
        if (input.getTitle().length() &gt; 200) {
            throw new InvalidInputException(&quot;title&quot;, &quot;cannot exceed 200 characters&quot;);
        }
        
        // Validation 3: Check price
        if (input.getPrice() != null &amp;&amp; input.getPrice() &lt; 0) {
            throw new InvalidInputException(&quot;price&quot;, &quot;cannot be negative&quot;);
        }
        
        // Validation 4: Check pages
        if (input.getPages() != null &amp;&amp; input.getPages() &lt;= 0) {
            throw new InvalidInputException(&quot;pages&quot;, &quot;must be a positive number&quot;);
        }
        
        // Validation 5: Check if author exists
        if (input.getAuthorId() != null) {
            Author author = authorService.findById(input.getAuthorId());
            if (author == null) {
                throw new InvalidInputException(
                    &quot;authorId&quot;, 
                    &quot;author with id &quot; + input.getAuthorId() + &quot; does not exist&quot;
                );
            }
        }
        
        // All validations passed - create the book
        Book book = new Book();
        book.setId(generateId());
        book.setTitle(input.getTitle());
        book.setAuthorId(input.getAuthorId());
        book.setPages(input.getPages());
        book.setPrice(input.getPrice());
        
        return bookService.save(book);
    }
    
    // ═══════════════════════════════════════════════════
    // DELETE with authorization check
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Description(&quot;Delete a book (admin only)&quot;)
    public Boolean deleteBook(
        @Name(&quot;id&quot;) Long id,
        @Context SecurityContext securityContext
    ) {
        // Check if user is authenticated
        if (securityContext.getUser() == null) {
            throw new UnauthorizedException(&quot;You must be logged in to delete books&quot;);
        }
        
        // Check if user is admin
        if (!securityContext.getUser().isAdmin()) {
            throw new UnauthorizedException(&quot;Only administrators can delete books&quot;);
        }
        
        // Check if book exists
        Book book = bookService.findById(id);
        if (book == null) {
            throw new BookNotFoundException(id);
        }
        
        // Delete the book
        return bookService.delete(id);
    }
}
</code></pre>
<p><strong>What Users See (Error Response):</strong></p>
<p>When an error occurs, GraphQL returns this format:</p>
<pre><code class="language-json">
{
  &quot;errors&quot;: [
    {
      &quot;message&quot;: &quot;Book with id 999 not found&quot;,
      &quot;extensions&quot;: {
        &quot;exception&quot;: &quot;org.acme.exception.BookNotFoundException&quot;,
        &quot;classification&quot;: &quot;DataFetchingException&quot;
      },
      &quot;path&quot;: [&quot;bookById&quot;],
      &quot;locations&quot;: [
        {
          &quot;line&quot;: 2,
          &quot;column&quot;: 3
        }
      ]
    }
  ],
  &quot;data&quot;: {
    &quot;bookById&quot;: null
  }
}
</code></pre>
<p><strong>Understanding the Error Response:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Error Response Structure                │
├─────────────────────────────────────────────────┤
│                                                 │
│  message          → What went wrong             │
│                     (user-friendly)             │
│                                                 │
│  extensions       → Additional info             │
│    exception      → Which Java class threw it   │
│    classification → Error category              │
│                                                 │
│  path             → Which field caused the error│
│                                                 │
│  locations        → Where in the query          │
│                     (line and column)           │
│                                                 │
│  data             → Partial data if available   │
│                     (null if complete failure)  │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<hr>
<h4 id="approach-2-error-payload-pattern-recommended-for-production">Approach 2: Error Payload Pattern (Recommended for Production)</h4>
<p><strong>What is Error Payload?</strong></p>
<p>Instead of throwing exceptions, you return a structured response that includes both the result AND any errors. This is more GraphQL-friendly.</p>
<p><strong>Benefits:</strong></p>
<ul>
<li>Partial success possible (some operations succeed, some fail)</li>
<li>Better for batch operations</li>
<li>Client can handle errors programmatically</li>
<li>More information can be included</li>
</ul>
<p><strong>Creating Error Types:</strong></p>
<pre><code class="language-java">
package org.acme.model;

import org.eclipse.microprofile.graphql.Description;

// ═══════════════════════════════════════════════════════
// Generic error type
// ═══════════════════════════════════════════════════════

@Description(&quot;An error that occurred during an operation&quot;)
public class UserError {
    
    @Description(&quot;The field that caused the error&quot;)
    private String field;
    
    @Description(&quot;Human-readable error message&quot;)
    private String message;
    
    @Description(&quot;Error code for programmatic handling&quot;)
    private String code;
    
    // Constructors
    public UserError() {}
    
    public UserError(String field, String message) {
        this.field = field;
        this.message = message;
    }
    
    public UserError(String field, String message, String code) {
        this.field = field;
        this.message = message;
        this.code = code;
    }
    
    // Getters and setters
    public String getField() { return field; }
    public void setField(String field) { this.field = field; }
    
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
}
</code></pre>
<pre><code class="language-java">
package org.acme.model;

import java.util.ArrayList;
import java.util.List;
import org.eclipse.microprofile.graphql.Description;

// ═══════════════════════════════════════════════════════
// Payload for create/update operations
// ═══════════════════════════════════════════════════════

@Description(&quot;Result of creating a book&quot;)
public class CreateBookPayload {
    
    @Description(&quot;The created book (null if failed)&quot;)
    private Book book;
    
    @Description(&quot;List of errors (empty if successful)&quot;)
    private List&lt;UserError&gt; errors;
    
    @Description(&quot;Whether the operation succeeded&quot;)
    private Boolean success;
    
    // Constructor
    public CreateBookPayload() {
        this.errors = new ArrayList&lt;&gt;();
        this.success = false;
    }
    
    // Success constructor
    public static CreateBookPayload success(Book book) {
        CreateBookPayload payload = new CreateBookPayload();
        payload.book = book;
        payload.success = true;
        return payload;
    }
    
    // Failure constructor
    public static CreateBookPayload failure(List&lt;UserError&gt; errors) {
        CreateBookPayload payload = new CreateBookPayload();
        payload.errors = errors;
        payload.success = false;
        return payload;
    }
    
    // Add single error
    public void addError(String field, String message) {
        this.errors.add(new UserError(field, message));
    }
    
    public void addError(String field, String message, String code) {
        this.errors.add(new UserError(field, message, code));
    }
    
    // Getters and setters
    public Book getBook() { return book; }
    public void setBook(Book book) { this.book = book; }
    
    public List&lt;UserError&gt; getErrors() { return errors; }
    public void setErrors(List&lt;UserError&gt; errors) { this.errors = errors; }
    
    public Boolean getSuccess() { return success; }
    public void setSuccess(Boolean success) { this.success = success; }
}
</code></pre>
<p><strong>Using the Error Payload:</strong></p>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    @Inject
    BookService bookService;
    
    @Inject
    AuthorService authorService;
    
    /**
     * Create book with proper error handling
     * Returns payload with either book or errors
     */
    @Mutation
    @Description(&quot;Create a new book with validation&quot;)
    public CreateBookPayload createBook(@Name(&quot;input&quot;) BookInput input) {
        
        // Create payload to collect errors
        CreateBookPayload payload = new CreateBookPayload();
        
        // ═══════════════════════════════════════════════
        // VALIDATION - Collect all errors
        // ═══════════════════════════════════════════════
        
        // Validate title
        if (input.getTitle() == null || input.getTitle().trim().isEmpty()) {
            payload.addError(&quot;title&quot;, &quot;Title is required&quot;, &quot;REQUIRED_FIELD&quot;);
        } else if (input.getTitle().length() &gt; 200) {
            payload.addError(&quot;title&quot;, &quot;Title cannot exceed 200 characters&quot;, &quot;MAX_LENGTH&quot;);
        }
        
        // Validate author
        if (input.getAuthorId() == null) {
            payload.addError(&quot;authorId&quot;, &quot;Author is required&quot;, &quot;REQUIRED_FIELD&quot;);
        } else {
            Author author = authorService.findById(input.getAuthorId());
            if (author == null) {
                payload.addError(
                    &quot;authorId&quot;, 
                    &quot;Author with id &quot; + input.getAuthorId() + &quot; does not exist&quot;,
                    &quot;NOT_FOUND&quot;
                );
            }
        }
        
        // Validate price
        if (input.getPrice() != null &amp;&amp; input.getPrice() &lt; 0) {
            payload.addError(&quot;price&quot;, &quot;Price cannot be negative&quot;, &quot;INVALID_VALUE&quot;);
        }
        
        // Validate pages
        if (input.getPages() != null &amp;&amp; input.getPages() &lt;= 0) {
            payload.addError(&quot;pages&quot;, &quot;Pages must be a positive number&quot;, &quot;INVALID_VALUE&quot;);
        }
        
        // ═══════════════════════════════════════════════
        // If there are errors, return them
        // ═══════════════════════════════════════════════
        
        if (!payload.getErrors().isEmpty()) {
            return payload;
        }
        
        // ═══════════════════════════════════════════════
        // No errors - create the book
        // ═══════════════════════════════════════════════
        
        try {
            Book book = new Book();
            book.setId(generateId());
            book.setTitle(input.getTitle());
            book.setAuthorId(input.getAuthorId());
            book.setPages(input.getPages());
            book.setPrice(input.getPrice());
            
            Book savedBook = bookService.save(book);
            
            return CreateBookPayload.success(savedBook);
            
        } catch (Exception e) {
            // Handle unexpected errors
            payload.addError(null, &quot;An unexpected error occurred: &quot; + e.getMessage(), &quot;INTERNAL_ERROR&quot;);
            return payload;
        }
    }
}
</code></pre>
<p><strong>Generated Schema:</strong></p>
<pre><code class="language-graphql">
&quot;&quot;&quot;
An error that occurred during an operation
&quot;&quot;&quot;
type UserError {
  &quot;&quot;&quot;
  The field that caused the error
  &quot;&quot;&quot;
  field: String
  
  &quot;&quot;&quot;
  Human-readable error message
  &quot;&quot;&quot;
  message: String!
  
  &quot;&quot;&quot;
  Error code for programmatic handling
  &quot;&quot;&quot;
  code: String
}

&quot;&quot;&quot;
Result of creating a book
&quot;&quot;&quot;
type CreateBookPayload {
  &quot;&quot;&quot;
  The created book (null if failed)
  &quot;&quot;&quot;
  book: Book
  
  &quot;&quot;&quot;
  List of errors (empty if successful)
  &quot;&quot;&quot;
  errors: [UserError!]!
  
  &quot;&quot;&quot;
  Whether the operation succeeded
  &quot;&quot;&quot;
  success: Boolean!
}

type Mutation {
  &quot;&quot;&quot;
  Create a new book with validation
  &quot;&quot;&quot;
  createBook(input: BookInput): CreateBookPayload!
}
</code></pre>
<p><strong>How to Use (Client-Side):</strong></p>
<pre><code class="language-graphql">
mutation {
  createBook(input: {
    title: &quot;&quot;
    authorId: 999
    price: -10
  }) {
    success
    book {
      id
      title
    }
    errors {
      field
      message
      code
    }
  }
}
</code></pre>
<p><strong>Response (With Errors):</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;createBook&quot;: {
      &quot;success&quot;: false,
      &quot;book&quot;: null,
      &quot;errors&quot;: [
        {
          &quot;field&quot;: &quot;title&quot;,
          &quot;message&quot;: &quot;Title is required&quot;,
          &quot;code&quot;: &quot;REQUIRED_FIELD&quot;
        },
        {
          &quot;field&quot;: &quot;authorId&quot;,
          &quot;message&quot;: &quot;Author with id 999 does not exist&quot;,
          &quot;code&quot;: &quot;NOT_FOUND&quot;
        },
        {
          &quot;field&quot;: &quot;price&quot;,
          &quot;message&quot;: &quot;Price cannot be negative&quot;,
          &quot;code&quot;: &quot;INVALID_VALUE&quot;
        }
      ]
    }
  }
}
</code></pre>
<p><strong>Response (Success):</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;createBook&quot;: {
      &quot;success&quot;: true,
      &quot;book&quot;: {
        &quot;id&quot;: 42,
        &quot;title&quot;: &quot;Great Book&quot;
      },
      &quot;errors&quot;: []
    }
  }
}
</code></pre>
<hr>
<h3 id="error-handling-best-practices">Error Handling Best Practices</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│      Error Handling Best Practices             │
├─────────────────────────────────────────────────┤
│                                                 │
│  ✓ Be Specific                                  │
│    ❌ &quot;Invalid input&quot;                           │
│    ✅ &quot;Email must be valid format&quot;              │
│                                                 │
│  ✓ Include Field Name                          │
│    ❌ &quot;Value is required&quot;                       │
│    ✅ &quot;Field &#x27;title&#x27; is required&quot;               │
│                                                 │
│  ✓ Provide Error Codes                         │
│    Allows clients to handle errors differently │
│    Example: REQUIRED_FIELD, NOT_FOUND, etc.    │
│                                                 │
│  ✓ Return All Errors at Once                   │
│    Don&#x27;t stop at first error                   │
│    User can fix all issues in one go           │
│                                                 │
│  ✓ Don&#x27;t Expose Sensitive Info                 │
│    ❌ &quot;SQLException: Table books...&quot;           │
│    ✅ &quot;Unable to save book. Please try again&quot;  │
│                                                 │
│  ✓ Log Errors Properly                         │
│    Users see friendly message                  │
│    Developers see full stack trace in logs     │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p><strong>When to Use Each Approach:</strong></p>
<p><strong>Use Exceptions when:</strong></p>
<ul>
<li>Fatal errors (database down, etc.)</li>
<li>Authentication failures</li>
<li>Single operation queries</li>
<li>Simple CRUD operations</li>
</ul>
<p><strong>Use Error Payload when:</strong></p>
<ul>
<li>Form validation</li>
<li>Batch operations</li>
<li>Complex business rules</li>
<li>Need to return partial success</li>
<li>Want better client-side error handling</li>
</ul>
<hr>
<h3 id="working-with-real-databases-panache-introduction">Working with Real Databases (Panache Introduction)</h3>
<p><strong>What We&#x27;ve Done So Far:</strong></p>
<p>We&#x27;ve been storing data in memory (Lists). When you restart the app, all data is lost.</p>
<p><strong>What We Need:</strong></p>
<p>A real database that persists data permanently!</p>
<p><strong>What is Panache?</strong></p>
<p>Panache is Quarkus&#x27;s way of making database work super easy. It&#x27;s like a simplified version of Hibernate (Java&#x27;s most popular database framework).</p>
<p><strong>Real-World Analogy:</strong></p>
<ul>
<li><strong>Traditional Hibernate</strong>: Like learning to drive a manual transmission car - powerful but complex</li>
<li><strong>Panache</strong>: Like driving an automatic - much easier, does the complex stuff for you</li>
</ul>
<p><strong>What Panache Does:</strong></p>
<ul>
<li>Connects to databases (PostgreSQL, MySQL, etc.)</li>
<li>Converts Java objects to database tables automatically</li>
<li>Provides simple methods to save, find, update, delete data</li>
<li>No need to write SQL queries!</li>
</ul>
<hr>
<h4 id="step-1-add-panache-dependencies">Step 1: Add Panache Dependencies</h4>
<p><strong>Add to your pom.xml:</strong></p>
<pre><code class="language-xml">
&lt;dependencies&gt;
    &lt;!-- Panache (makes database work easy) --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-hibernate-orm-panache&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- PostgreSQL Driver (to connect to PostgreSQL database) --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-jdbc-postgresql&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- You can also use MySQL, MariaDB, H2, etc. --&gt;
    &lt;!-- For MySQL: quarkus-jdbc-mysql --&gt;
    &lt;!-- For H2 (testing): quarkus-jdbc-h2 --&gt;
&lt;/dependencies&gt;
</code></pre>
<p><strong>What Each Dependency Does:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Database Dependencies                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  quarkus-hibernate-orm-panache                  │
│  → The Panache framework                        │
│  → Makes database operations simple             │
│                                                 │
│  quarkus-jdbc-postgresql                        │
│  → Driver to talk to PostgreSQL                 │
│  → Like installing a printer driver             │
│    so your computer can talk to a printer       │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<hr>
<h4 id="step-2-configure-database-connection">Step 2: Configure Database Connection</h4>
<p><strong>Add to application.properties:</strong></p>
<pre><code class="language-properties">
# ═══════════════════════════════════════════════════════
# DATABASE CONNECTION
# ═══════════════════════════════════════════════════════

# What type of database? (postgresql, mysql, h2, etc.)
quarkus.datasource.db-kind=postgresql

# Where is the database?
# Format: jdbc:postgresql://HOST:PORT/DATABASE_NAME
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/bookdb

# Database login credentials
quarkus.datasource.username=postgres
quarkus.datasource.password=postgres

# ═══════════════════════════════════════════════════════
# HIBERNATE SETTINGS
# ═══════════════════════════════════════════════════════

# What should Hibernate do with the database on startup?
# Options:
#   drop-and-create → Delete everything and recreate (DEV ONLY!)
#   update         → Update schema, keep data (CAREFUL!)
#   none           → Don&#x27;t touch the database (PRODUCTION)
quarkus.hibernate-orm.database.generation=drop-and-create

# Show SQL queries in console (helpful for learning)
quarkus.hibernate-orm.log.sql=true

# Format SQL nicely in logs
quarkus.hibernate-orm.log.format-sql=true
</code></pre>
<p><strong>⚠️ IMPORTANT WARNING:</strong></p>
<pre><code class="language-">
drop-and-create = DELETES ALL DATA ON STARTUP!
Only use this in development/learning!
For production, use &quot;none&quot;
</code></pre>
<p><strong>Understanding the Connection URL:</strong></p>
<pre><code class="language-">
jdbc:postgresql://localhost:5432/bookdb
│    │             │         │    │
│    │             │         │    └─ Database name
│    │             │         └────── Port (5432 is PostgreSQL default)
│    │             └──────────────── Host (localhost = your computer)
│    └────────────────────────────── Database type
└─────────────────────────────────── JDBC protocol
</code></pre>
<hr>
<h4 id="step-3-create-entity-classes-database-tables">Step 3: Create Entity Classes (Database Tables)</h4>
<p><strong>What is an Entity?</strong></p>
<p>An entity is a Java class that represents a database table. Each instance of the class is a row in the table.</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Think of a spreadsheet:</p>
<ul>
<li><strong>Entity Class</strong> = The column headers (what fields exist)</li>
<li><strong>Entity Instance</strong> = A row of data</li>
<li><strong>Database Table</strong> = The entire spreadsheet</li>
</ul>
<p><strong>Creating a Book Entity:</strong></p>
<pre><code class="language-java">
package org.acme.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;
import java.time.LocalDateTime;

// ═══════════════════════════════════════════════════════
// @Entity tells Hibernate: &quot;This is a database table&quot;
// PanacheEntity gives us free methods like persist(), delete(), etc.
// ═══════════════════════════════════════════════════════

@Entity  // This is a database table
@Table(name = &quot;books&quot;)  // Table will be named &quot;books&quot; in database
public class BookEntity extends PanacheEntity {
    
    // ═══════════════════════════════════════════════════
    // IMPORTANT: PanacheEntity already gives us an &quot;id&quot; field!
    // We don&#x27;t need to create it
    // ═══════════════════════════════════════════════════
    
    // ═══════════════════════════════════════════════════
    // FIELDS (Table Columns)
    // ═══════════════════════════════════════════════════
    
    // @Column is optional, but lets us configure the column
    @Column(nullable = false, length = 200)  // NOT NULL, max 200 chars
    public String title;
    
    @Column(length = 20)
    public String isbn;
    
    public Integer pages;
    
    public Double price;
    
    @Column(name = &quot;created_at&quot;)  // Column name in database
    public LocalDateTime createdAt;
    
    @Column(name = &quot;updated_at&quot;)
    public LocalDateTime updatedAt;
    
    // ═══════════════════════════════════════════════════
    // RELATIONSHIP - Many books to one author
    // ═══════════════════════════════════════════════════
    
    @ManyToOne  // Many books can have one author
    @JoinColumn(name = &quot;author_id&quot;)  // Foreign key column name
    public AuthorEntity author;
    
    // ═══════════════════════════════════════════════════
    // LIFECYCLE CALLBACKS
    // These run automatically at certain times
    // ═══════════════════════════════════════════════════
    
    @PrePersist  // Runs BEFORE saving to database for first time
    public void prePersist() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate  // Runs BEFORE updating in database
    public void preUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
</code></pre>
<p><strong>What Gets Created in the Database:</strong></p>
<pre><code class="language-sql">
-- Panache automatically creates this table:
CREATE TABLE books (
    id BIGSERIAL PRIMARY KEY,        -- Auto-generated by PanacheEntity
    title VARCHAR(200) NOT NULL,
    isbn VARCHAR(20),
    pages INTEGER,
    price DOUBLE PRECISION,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    author_id BIGINT,                -- Foreign key to authors table
    FOREIGN KEY (author_id) REFERENCES authors(id)
);
</code></pre>
<p><strong>Creating an Author Entity:</strong></p>
<pre><code class="language-java">
package org.acme.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = &quot;authors&quot;)
public class AuthorEntity extends PanacheEntity {
    
    @Column(nullable = false, length = 100)
    public String name;
    
    @Column(unique = true, nullable = false)  // Email must be unique
    public String email;
    
    @Column(length = 1000)
    public String bio;
    
    public LocalDateTime createdAt;
    public LocalDateTime updatedAt;
    
    // ═══════════════════════════════════════════════════
    // RELATIONSHIP - One author has many books
    // ═══════════════════════════════════════════════════
    
    @OneToMany(mappedBy = &quot;author&quot;)  // &quot;author&quot; is the field name in BookEntity
    public List&lt;BookEntity&gt; books;
    
    @PrePersist
    public void prePersist() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    public void preUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
</code></pre>
<p><strong>Understanding Relationships:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Database Relationships                  │
├─────────────────────────────────────────────────┤
│                                                 │
│  @ManyToOne                                     │
│  → Many Books belong to One Author              │
│  → BookEntity has &quot;author&quot; field                │
│  → Creates foreign key in books table           │
│                                                 │
│  @OneToMany                                     │
│  → One Author has Many Books                    │
│  → AuthorEntity has &quot;books&quot; list                │
│  → Does NOT create column (just for querying)  │
│  → mappedBy = &quot;author&quot; means &quot;the other side&quot;   │
│                                                 │
│  @JoinColumn                                    │
│  → Specifies the foreign key column name        │
│  → In this case: &quot;author_id&quot;                    │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<hr>
<h4 id="step-4-using-panaches-built-in-methods">Step 4: Using Panache&#x27;s Built-in Methods</h4>
<p><strong>The Magic of PanacheEntity:</strong></p>
<p>By extending PanacheEntity, your entity gets FREE methods:</p>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    // ═══════════════════════════════════════════════════
    // QUERY - Get all books
    // ═══════════════════════════════════════════════════
    
    @Query(&quot;allBooks&quot;)
    @Transactional  // Required for database operations
    @Description(&quot;Get all books from database&quot;)
    public List&lt;BookEntity&gt; getAllBooks() {
        // listAll() is provided by PanacheEntity - no code needed!
        return BookEntity.listAll();
    }
    
    // ═══════════════════════════════════════════════════
    // QUERY - Get one book by ID
    // ═══════════════════════════════════════════════════
    
    @Query
    @Transactional
    @Description(&quot;Find book by ID&quot;)
    public BookEntity bookById(@Name(&quot;id&quot;) Long id) {
        // findById() is also provided by PanacheEntity
        BookEntity book = BookEntity.findById(id);
        
        if (book == null) {
            throw new BookNotFoundException(id);
        }
        
        return book;
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATION - Create a book
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Transactional  // VERY IMPORTANT for writes!
    @Description(&quot;Add a new book to database&quot;)
    public BookEntity createBook(@Name(&quot;input&quot;) BookInput input) {
        // Create new entity
        BookEntity book = new BookEntity();
        book.title = input.getTitle();
        book.isbn = input.getIsbn();
        book.pages = input.getPages();
        book.price = input.getPrice();
        
        // Find and set author
        if (input.getAuthorId() != null) {
            book.author = AuthorEntity.findById(input.getAuthorId());
        }
        
        // persist() saves to database
        // This is provided by PanacheEntity
        book.persist();
        
        return book;
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATION - Update a book
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Transactional
    @Description(&quot;Update an existing book&quot;)
    public BookEntity updateBook(
        @Name(&quot;id&quot;) Long id,
        @Name(&quot;input&quot;) BookInput input
    ) {
        // Find existing book
        BookEntity book = BookEntity.findById(id);
        
        if (book == null) {
            throw new BookNotFoundException(id);
        }
        
        // Update fields
        if (input.getTitle() != null) {
            book.title = input.getTitle();
        }
        if (input.getPages() != null) {
            book.pages = input.getPages();
        }
        if (input.getPrice() != null) {
            book.price = input.getPrice();
        }
        
        // No need to call persist() for updates!
        // Hibernate automatically detects changes
        
        return book;
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATION - Delete a book
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Transactional
    @Description(&quot;Delete a book from database&quot;)
    public Boolean deleteBook(@Name(&quot;id&quot;) Long id) {
        // deleteById() returns true if deleted, false if not found
        // This is provided by PanacheEntity
        return BookEntity.deleteById(id);
    }
}
</code></pre>
<p><strong>Understanding @Transactional:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         What is @Transactional?                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  A transaction is like a safety net:            │
│                                                 │
│  1. Start transaction                           │
│  2. Make database changes                       │
│  3. If everything works → COMMIT (save)         │
│  4. If error occurs → ROLLBACK (undo)           │
│                                                 │
│  Example:                                       │
│  - Transfer money from Account A to Account B   │
│  - Deduct from A                                │
│  - Add to B                                     │
│  - If adding to B fails, rollback deduction!    │
│  - Both operations succeed or both fail         │
│                                                 │
│  Required for ALL database write operations!    │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<hr>
<h4 id="step-5-repository-pattern-professional-approach">Step 5: Repository Pattern (Professional Approach)</h4>
<p><strong>What is a Repository?</strong></p>
<p>A repository is a class dedicated to database operations. It separates database logic from GraphQL logic.</p>
<p><strong>Why Use Repositories?</strong></p>
<ul>
<li><strong>Cleaner Code</strong>: GraphQL resource doesn&#x27;t worry about database details</li>
<li><strong>Reusability</strong>: Same repository used by multiple resources</li>
<li><strong>Testability</strong>: Easy to test database operations separately</li>
<li><strong>Maintainability</strong>: All database queries in one place</li>
</ul>
<p><strong>Creating a Book Repository:</strong></p>
<pre><code class="language-java">
package org.acme.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.entity.BookEntity;
import java.util.List;

// ═══════════════════════════════════════════════════════
// PanacheRepository provides common database methods
// We add custom methods specific to books
// ═══════════════════════════════════════════════════════

@ApplicationScoped  // One instance for the whole application
public class BookRepository implements PanacheRepository&lt;BookEntity&gt; {
    
    /**
     * Find books by title (partial match, case-insensitive)
     * 
     * @param title Search term
     * @return List of matching books
     */
    public List&lt;BookEntity&gt; findByTitle(String title) {
        // LOWER() makes search case-insensitive
        // LIKE with % allows partial matching
        return list(&quot;LOWER(title) LIKE LOWER(?1)&quot;, &quot;%&quot; + title + &quot;%&quot;);
    }
    
    /**
     * Find all books by a specific author
     * 
     * @param authorId The author&#x27;s ID
     * @return List of books by that author
     */
    public List&lt;BookEntity&gt; findByAuthorId(Long authorId) {
        // Query using the relationship
        return list(&quot;author.id&quot;, authorId);
    }
    
    /**
     * Find books in a price range
     * 
     * @param minPrice Minimum price
     * @param maxPrice Maximum price
     * @return List of books in that price range
     */
    public List&lt;BookEntity&gt; findByPriceRange(Double minPrice, Double maxPrice) {
        return list(&quot;price &gt;= ?1 AND price &lt;= ?2&quot;, minPrice, maxPrice);
    }
    
    /**
     * Find books with specific attributes
     * 
     * @param minPages Minimum number of pages
     * @return List of books
     */
    public List&lt;BookEntity&gt; findByMinPages(Integer minPages) {
        return list(&quot;pages &gt;= ?1&quot;, minPages);
    }
    
    /**
     * Count books by author
     * 
     * @param authorId The author&#x27;s ID
     * @return Number of books
     */
    public long countByAuthorId(Long authorId) {
        return count(&quot;author.id&quot;, authorId);
    }
    
    /**
     * Find books ordered by price
     * 
     * @param ascending True for lowest first, false for highest first
     * @return List of books ordered by price
     */
    public List&lt;BookEntity&gt; findAllOrderedByPrice(boolean ascending) {
        String order = ascending ? &quot;price ASC&quot; : &quot;price DESC&quot;;
        return list(&quot;ORDER BY &quot; + order);
    }
    
    /**
     * Find recent books
     * 
     * @param limit How many to return
     * @return Most recently created books
     */
    public List&lt;BookEntity&gt; findRecent(int limit) {
        return find(&quot;ORDER BY createdAt DESC&quot;)
            .page(0, limit)
            .list();
    }
}
</code></pre>
<p><strong>Using the Repository:</strong></p>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    // Inject the repository
    @Inject
    BookRepository bookRepository;
    
    @Query(&quot;searchBooks&quot;)
    @Transactional
    @Description(&quot;Search for books by title&quot;)
    public List&lt;BookEntity&gt; searchBooks(@Name(&quot;title&quot;) String title) {
        return bookRepository.findByTitle(title);
    }
    
    @Query(&quot;booksByPriceRange&quot;)
    @Transactional
    @Description(&quot;Find books in a price range&quot;)
    public List&lt;BookEntity&gt; booksByPriceRange(
        @Name(&quot;minPrice&quot;) Double minPrice,
        @Name(&quot;maxPrice&quot;) Double maxPrice
    ) {
        return bookRepository.findByPriceRange(minPrice, maxPrice);
    }
    
    @Query(&quot;recentBooks&quot;)
    @Transactional
    @Description(&quot;Get most recently added books&quot;)
    public List&lt;BookEntity&gt; recentBooks(
        @Name(&quot;limit&quot;) @DefaultValue(&quot;10&quot;) Integer limit
    ) {
        return bookRepository.findRecent(limit);
    }
}
</code></pre>
<p><strong>Panache Query Methods Reference:</strong></p>
<pre><code class="language-java">
// ═══════════════════════════════════════════════════════
// FINDING DATA
// ═══════════════════════════════════════════════════════

// Get all
BookEntity.listAll()

// Find by ID
BookEntity.findById(1L)

// Find with query
BookEntity.list(&quot;title&quot;, &quot;Effective Java&quot;)
BookEntity.list(&quot;price &gt; ?1&quot;, 40.0)
BookEntity.list(&quot;title LIKE ?1&quot;, &quot;%Java%&quot;)

// Find first match
BookEntity.find(&quot;title&quot;, &quot;Clean Code&quot;).firstResult()

// ═══════════════════════════════════════════════════════
// COUNTING
// ═══════════════════════════════════════════════════════

// Count all
BookEntity.count()

// Count with condition
BookEntity.count(&quot;price &gt; ?1&quot;, 50.0)

// ═══════════════════════════════════════════════════════
// SAVING
// ═══════════════════════════════════════════════════════

// Save single entity
book.persist()

// Save multiple entities
BookEntity.persist(book1, book2, book3)

// ═══════════════════════════════════════════════════════
// DELETING
// ═══════════════════════════════════════════════════════

// Delete by ID
BookEntity.deleteById(1L)

// Delete entity
book.delete()

// Delete with condition
BookEntity.delete(&quot;price &lt; ?1&quot;, 10.0)

// Delete all
BookEntity.deleteAll()

// ═══════════════════════════════════════════════════════
// PAGINATION
// ═══════════════════════════════════════════════════════

// Get page of results
BookEntity.findAll()
    .page(0, 10)  // Page 0, 10 items per page
    .list()

// ═══════════════════════════════════════════════════════
// SORTING
// ═══════════════════════════════════════════════════════

// Order by field
BookEntity.listAll(Sort.by(&quot;title&quot;))
BookEntity.listAll(Sort.by(&quot;price&quot;).descending())
</code></pre>
<p>This gives you a complete, production-ready database setup with Panache!</p>
<h4 id="setup-panache">Setup Panache</h4>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-hibernate-orm-panache&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-jdbc-postgresql&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-properties">
# Database configuration
quarkus.datasource.db-kind=postgresql
quarkus.datasource.username=postgres
quarkus.datasource.password=postgres
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/bookdb

# Hibernate
quarkus.hibernate-orm.database.generation=drop-and-create
quarkus.hibernate-orm.log.sql=true
</code></pre>
<h4 id="entity-with-panache">Entity with Panache</h4>
<pre><code class="language-java">
package org.acme.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class BookEntity extends PanacheEntity {
    public String title;
    public Integer pages;
    public Double price;
    
    @ManyToOne
    public AuthorEntity author;
    
    // Panache provides id, persist(), delete(), findAll(), etc.
}

@Entity
public class AuthorEntity extends PanacheEntity {
    public String name;
    public String email;
    
    @OneToMany(mappedBy = &quot;author&quot;)
    public List&lt;BookEntity&gt; books;
}
</code></pre>
<h4 id="repository-pattern">Repository Pattern</h4>
<pre><code class="language-java">
package org.acme.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.entity.BookEntity;

@ApplicationScoped
public class BookRepository implements PanacheRepository&lt;BookEntity&gt; {
    
    public List&lt;BookEntity&gt; findByTitle(String title) {
        return list(&quot;LOWER(title) LIKE LOWER(?1)&quot;, &quot;%&quot; + title + &quot;%&quot;);
    }
    
    public List&lt;BookEntity&gt; findByAuthorId(Long authorId) {
        return list(&quot;author.id&quot;, authorId);
    }
    
    public List&lt;BookEntity&gt; findByPriceRange(Double min, Double max) {
        return list(&quot;price &gt;= ?1 AND price &lt;= ?2&quot;, min, max);
    }
}
</code></pre>
<h4 id="graphql-with-panache">GraphQL with Panache</h4>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    @Inject
    BookRepository bookRepository;
    
    @Query
    @Transactional
    public List&lt;BookEntity&gt; allBooks() {
        return bookRepository.listAll();
    }
    
    @Query
    @Transactional
    public BookEntity bookById(@Name(&quot;id&quot;) Long id) {
        BookEntity book = bookRepository.findById(id);
        if (book == null) {
            throw new BookNotFoundException(id);
        }
        return book;
    }
    
    @Mutation
    @Transactional
    public BookEntity createBook(@Name(&quot;input&quot;) BookInput input) {
        BookEntity book = new BookEntity();
        book.title = input.getTitle();
        book.pages = input.getPages();
        book.price = input.getPrice();
        
        // Set author
        book.author = AuthorEntity.findById(input.getAuthorId());
        
        book.persist();
        return book;
    }
    
    @Mutation
    @Transactional
    public Boolean deleteBook(@Name(&quot;id&quot;) Long id) {
        return bookRepository.deleteById(id);
    }
}
</code></pre>
<hr>
<h3 id="pagination-handling-large-datasets">Pagination (Handling Large Datasets)</h3>
<p><strong>What is Pagination?</strong></p>
<p>When you have thousands or millions of records, you can&#x27;t send them all at once. Pagination splits data into manageable chunks (pages).</p>
<p><strong>Real-World Analogy:</strong></p>
<p>Think of Google search results:</p>
<ul>
<li>You search for &quot;cats&quot;</li>
<li>Google doesn&#x27;t show all 10 billion results at once</li>
<li>It shows 10 results per page</li>
<li>You click &quot;Next&quot; to see more</li>
</ul>
<p><strong>Why Pagination Matters:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Without Pagination                      │
├─────────────────────────────────────────────────┤
│                                                 │
│  Database: 1,000,000 books                      │
│  User requests all books                        │
│                                                 │
│  Problems:                                      │
│  ❌ Takes forever to load                       │
│  ❌ Uses tons of memory                         │
│  ❌ Might crash the server                      │
│  ❌ Terrible user experience                    │
│                                                 │
├─────────────────────────────────────────────────┤
│         With Pagination                         │
├─────────────────────────────────────────────────┤
│                                                 │
│  Database: 1,000,000 books                      │
│  User requests 20 books at a time               │
│                                                 │
│  Benefits:                                      │
│  ✅ Loads instantly                             │
│  ✅ Uses minimal memory                         │
│  ✅ Server stays healthy                        │
│  ✅ Great user experience                       │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p>There are TWO main pagination approaches: Offset-Based and Cursor-Based.</p>
<hr>
<h4 id="approach-1-offset-based-pagination-simple-but-limited">Approach 1: Offset-Based Pagination (Simple but Limited)</h4>
<p><strong>How it Works:</strong></p>
<p>Like page numbers in a book:</p>
<ul>
<li>Page 1: Items 1-10</li>
<li>Page 2: Items 11-20</li>
<li>Page 3: Items 21-30</li>
</ul>
<p><strong>Concepts:</strong></p>
<ul>
<li><strong>Limit</strong>: How many items per page (e.g., 10)</li>
<li><strong>Offset</strong>: How many items to skip (e.g., skip 20 to get page 3)</li>
</ul>
<p><strong>Visual Example:</strong></p>
<pre><code class="language-">
All Books: [B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12, ...]

Page 1 (limit=5, offset=0):
[B1, B2, B3, B4, B5]
 ↑ Start here, get 5

Page 2 (limit=5, offset=5):
Skip [B1, B2, B3, B4, B5], then get next 5
[B6, B7, B8, B9, B10]

Page 3 (limit=5, offset=10):
Skip [B1...B10], then get next 5
[B11, B12, B13, B14, B15]
</code></pre>
<p><strong>Step 1: Create Connection Type</strong></p>
<pre><code class="language-java">
package org.acme.model;

import java.util.List;
import org.eclipse.microprofile.graphql.Description;

/**
 * Wrapper for paginated book results
 * Contains the data plus pagination metadata
 */
@Description(&quot;Paginated list of books&quot;)
public class BookConnection {
    
    @Description(&quot;The books for this page&quot;)
    private List&lt;BookEntity&gt; books;
    
    @Description(&quot;Total number of books in database&quot;)
    private Integer totalCount;
    
    @Description(&quot;Are there more books after this page?&quot;)
    private Boolean hasMore;
    
    @Description(&quot;Current page number (starting from 0)&quot;)
    private Integer currentPage;
    
    @Description(&quot;Number of items per page&quot;)
    private Integer pageSize;
    
    // Constructors
    public BookConnection() {}
    
    public BookConnection(List&lt;BookEntity&gt; books, Integer totalCount, 
                         Boolean hasMore, Integer currentPage, Integer pageSize) {
        this.books = books;
        this.totalCount = totalCount;
        this.hasMore = hasMore;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
    }
    
    // Getters and Setters
    public List&lt;BookEntity&gt; getBooks() { return books; }
    public void setBooks(List&lt;BookEntity&gt; books) { this.books = books; }
    
    public Integer getTotalCount() { return totalCount; }
    public void setTotalCount(Integer totalCount) { this.totalCount = totalCount; }
    
    public Boolean getHasMore() { return hasMore; }
    public void setHasMore(Boolean hasMore) { this.hasMore = hasMore; }
    
    public Integer getCurrentPage() { return currentPage; }
    public void setCurrentPage(Integer currentPage) { this.currentPage = currentPage; }
    
    public Integer getPageSize() { return pageSize; }
    public void setPageSize(Integer pageSize) { this.pageSize = pageSize; }
    
    /**
     * Calculate total number of pages
     */
    public Integer getTotalPages() {
        if (totalCount == null || pageSize == null || pageSize == 0) {
            return 0;
        }
        return (int) Math.ceil((double) totalCount / pageSize);
    }
}
</code></pre>
<p><strong>Step 2: Implement in GraphQL Resource</strong></p>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    @Inject
    BookRepository bookRepository;
    
    /**
     * Get paginated books
     * 
     * @param limit How many books per page (default: 10, max: 100)
     * @param offset How many books to skip (default: 0)
     * @return Paginated book results
     */
    @Query(&quot;books&quot;)
    @Transactional
    @Description(&quot;Get paginated list of books&quot;)
    public BookConnection getBooks(
        @Name(&quot;limit&quot;) 
        @DefaultValue(&quot;10&quot;) 
        @Description(&quot;Number of books per page (max 100)&quot;)
        Integer limit,
        
        @Name(&quot;offset&quot;) 
        @DefaultValue(&quot;0&quot;)
        @Description(&quot;Number of books to skip&quot;)
        Integer offset
    ) {
        // ═══════════════════════════════════════════════
        // VALIDATION
        // ═══════════════════════════════════════════════
        
        // Prevent requesting too many items at once
        if (limit &gt; 100) {
            limit = 100;
        }
        
        // Prevent negative values
        if (limit &lt; 1) {
            limit = 10;
        }
        if (offset &lt; 0) {
            offset = 0;
        }
        
        // ═══════════════════════════════════════════════
        // FETCH DATA
        // ═══════════════════════════════════════════════
        
        // Get total count (for metadata)
        long totalCount = bookRepository.count();
        
        // Get the actual books for this page
        List&lt;BookEntity&gt; books = bookRepository.findAll()
            .page(offset / limit, limit)  // Panache pagination
            .list();
        
        // Calculate if there are more pages
        boolean hasMore = (offset + limit) &lt; totalCount;
        
        // Calculate current page number
        int currentPage = offset / limit;
        
        // ═══════════════════════════════════════════════
        // RETURN RESULTS
        // ═══════════════════════════════════════════════
        
        return new BookConnection(
            books,
            (int) totalCount,
            hasMore,
            currentPage,
            limit
        );
    }
}
</code></pre>
<p><strong>Step 3: Query with Offset Pagination</strong></p>
<pre><code class="language-graphql">
# Get first page (10 books)
query {
  books(limit: 10, offset: 0) {
    books {
      id
      title
      price
    }
    totalCount
    hasMore
    currentPage
    pageSize
    totalPages
  }
}
</code></pre>
<p><strong>Response:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;books&quot;: {
      &quot;books&quot;: [
        {&quot;id&quot;: 1, &quot;title&quot;: &quot;Book 1&quot;, &quot;price&quot;: 29.99},
        {&quot;id&quot;: 2, &quot;title&quot;: &quot;Book 2&quot;, &quot;price&quot;: 39.99},
        {&quot;id&quot;: 3, &quot;title&quot;: &quot;Book 3&quot;, &quot;price&quot;: 19.99},
        // ... 7 more books
      ],
      &quot;totalCount&quot;: 1247,
      &quot;hasMore&quot;: true,
      &quot;currentPage&quot;: 0,
      &quot;pageSize&quot;: 10,
      &quot;totalPages&quot;: 125
    }
  }
}
</code></pre>
<p><strong>Get Second Page:</strong></p>
<pre><code class="language-graphql">
query {
  books(limit: 10, offset: 10) {  # Skip first 10, get next 10
    books {
      id
      title
    }
    currentPage  # Will be 1
    hasMore      # Still true (more pages after this)
  }
}
</code></pre>
<p><strong>Pros and Cons of Offset Pagination:</strong></p>
<pre><code class="language-">
✅ PROS:
- Simple to understand (like book pages)
- Easy to implement
- Can jump to any page (page 1, 5, 50, etc.)
- Shows total count and page numbers

❌ CONS:
- Performance degrades with large offsets
  (offset 1,000,000 is slow - database must skip all those rows)
- Can have inconsistent results if data changes
  (if items are added/deleted between page loads)
- Not suitable for infinite scroll
</code></pre>
<hr>
<h4 id="approach-2-cursor-based-pagination-professional-scalable">Approach 2: Cursor-Based Pagination (Professional, Scalable)</h4>
<p><strong>How it Works:</strong></p>
<p>Like a bookmark in a book:</p>
<ul>
<li>Instead of page numbers, you use a &quot;cursor&quot; (bookmark)</li>
<li>Cursor points to the last item you saw</li>
<li>Next page starts after that cursor</li>
</ul>
<p><strong>Real-World Analogy:</strong></p>
<p>Think of your social media feed:</p>
<ul>
<li>You scroll down</li>
<li>See 20 posts</li>
<li>App remembers the last post you saw (cursor)</li>
<li>Loads 20 more posts AFTER that one</li>
<li>No page numbers, just &quot;load more&quot;</li>
</ul>
<p><strong>Why Cursor-Based is Better for Large Data:</strong></p>
<pre><code class="language-">
Offset-Based (SLOW for large offsets):
&quot;Give me page 1000&quot;
→ Database must skip 999,000 rows
→ Very slow! ❌

Cursor-Based (FAST):
&quot;Give me 20 items after cursor XYZ&quot;
→ Database finds cursor position
→ Gets next 20 items
→ Fast! ✅
</code></pre>
<p><strong>Step 1: Create Cursor Types</strong></p>
<pre><code class="language-java">
package org.acme.model;

import org.eclipse.microprofile.graphql.Description;

/**
 * Information about pagination state
 * Like metadata about where we are in the list
 */
@Description(&quot;Information about the current page&quot;)
public class PageInfo {
    
    @Description(&quot;Are there more items after this page?&quot;)
    private Boolean hasNextPage;
    
    @Description(&quot;Are there items before this page?&quot;)
    private Boolean hasPreviousPage;
    
    @Description(&quot;Cursor of the first item in this page&quot;)
    private String startCursor;
    
    @Description(&quot;Cursor of the last item in this page&quot;)
    private String endCursor;
    
    // Constructors
    public PageInfo() {}
    
    public PageInfo(Boolean hasNextPage, Boolean hasPreviousPage, 
                    String startCursor, String endCursor) {
        this.hasNextPage = hasNextPage;
        this.hasPreviousPage = hasPreviousPage;
        this.startCursor = startCursor;
        this.endCursor = endCursor;
    }
    
    // Getters and Setters
    public Boolean getHasNextPage() { return hasNextPage; }
    public void setHasNextPage(Boolean hasNextPage) { this.hasNextPage = hasNextPage; }
    
    public Boolean getHasPreviousPage() { return hasPreviousPage; }
    public void setHasPreviousPage(Boolean hasPreviousPage) { 
        this.hasPreviousPage = hasPreviousPage; 
    }
    
    public String getStartCursor() { return startCursor; }
    public void setStartCursor(String startCursor) { this.startCursor = startCursor; }
    
    public String getEndCursor() { return endCursor; }
    public void setEndCursor(String endCursor) { this.endCursor = endCursor; }
}
</code></pre>
<pre><code class="language-java">
package org.acme.model;

import org.eclipse.microprofile.graphql.Description;

/**
 * An edge in the connection
 * Wraps each item with its cursor
 */
@Description(&quot;A book with its cursor (bookmark)&quot;)
public class BookEdge {
    
    @Description(&quot;The actual book&quot;)
    private BookEntity node;
    
    @Description(&quot;The cursor (bookmark) for this book&quot;)
    private String cursor;
    
    // Constructors
    public BookEdge() {}
    
    public BookEdge(BookEntity node, String cursor) {
        this.node = node;
        this.cursor = cursor;
    }
    
    // Getters and Setters
    public BookEntity getNode() { return node; }
    public void setNode(BookEntity node) { this.node = node; }
    
    public String getCursor() { return cursor; }
    public void setCursor(String cursor) { this.cursor = cursor; }
}
</code></pre>
<pre><code class="language-java">
package org.acme.model;

import java.util.List;
import org.eclipse.microprofile.graphql.Description;

/**
 * The complete cursor-based connection
 * This is the Relay specification standard
 */
@Description(&quot;Cursor-based paginated list of books&quot;)
public class BookCursorConnection {
    
    @Description(&quot;List of books with their cursors&quot;)
    private List&lt;BookEdge&gt; edges;
    
    @Description(&quot;Pagination metadata&quot;)
    private PageInfo pageInfo;
    
    @Description(&quot;Total number of books&quot;)
    private Integer totalCount;
    
    // Constructors
    public BookCursorConnection() {}
    
    public BookCursorConnection(List&lt;BookEdge&gt; edges, PageInfo pageInfo, Integer totalCount) {
        this.edges = edges;
        this.pageInfo = pageInfo;
        this.totalCount = totalCount;
    }
    
    // Getters and Setters
    public List&lt;BookEdge&gt; getEdges() { return edges; }
    public void setEdges(List&lt;BookEdge&gt; edges) { this.edges = edges; }
    
    public PageInfo getPageInfo() { return pageInfo; }
    public void setPageInfo(PageInfo pageInfo) { this.pageInfo = pageInfo; }
    
    public Integer getTotalCount() { return totalCount; }
    public void setTotalCount(Integer totalCount) { this.totalCount = totalCount; }
}
</code></pre>
<p><strong>Step 2: Implement Cursor Pagination</strong></p>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    @Inject
    BookRepository bookRepository;
    
    /**
     * Get books with cursor-based pagination
     * 
     * @param first How many books to get
     * @param after Cursor to start after
     * @return Cursor-based paginated results
     */
    @Query(&quot;booksCursor&quot;)
    @Transactional
    @Description(&quot;Get books with cursor-based pagination&quot;)
    public BookCursorConnection getBooksCursor(
        @Name(&quot;first&quot;) 
        @DefaultValue(&quot;10&quot;)
        @Description(&quot;Number of books to fetch&quot;)
        Integer first,
        
        @Name(&quot;after&quot;) 
        @Description(&quot;Cursor to start after (for next page)&quot;)
        String after
    ) {
        // ═══════════════════════════════════════════════
        // VALIDATION
        // ═══════════════════════════════════════════════
        
        if (first &gt; 100) {
            first = 100;  // Limit max items
        }
        if (first &lt; 1) {
            first = 10;
        }
        
        // ═══════════════════════════════════════════════
        // DECODE CURSOR
        // ═══════════════════════════════════════════════
        
        Long afterId = 0L;
        if (after != null &amp;&amp; !after.isEmpty()) {
            try {
                // Cursor is base64-encoded ID
                // Example: &quot;Y3Vyc29yOjEyMw==&quot; → &quot;123&quot;
                String decoded = new String(
                    java.util.Base64.getDecoder().decode(after)
                );
                afterId = Long.parseLong(decoded.replace(&quot;cursor:&quot;, &quot;&quot;));
            } catch (Exception e) {
                throw new InvalidInputException(&quot;Invalid cursor format&quot;);
            }
        }
        
        // ═══════════════════════════════════════════════
        // FETCH DATA (get one extra to check if there&#x27;s more)
        // ═══════════════════════════════════════════════
        
        List&lt;BookEntity&gt; books = bookRepository.find(
            &quot;id &gt; ?1 ORDER BY id ASC&quot;, 
            afterId
        )
        .page(0, first + 1)  // Get one extra
        .list();
        
        // Check if there&#x27;s a next page
        boolean hasNextPage = books.size() &gt; first;
        
        // Remove the extra item if present
        List&lt;BookEntity&gt; actualBooks = hasNextPage 
            ? books.subList(0, first)
            : books;
        
        // ═══════════════════════════════════════════════
        // CREATE EDGES (wrap each book with its cursor)
        // ═══════════════════════════════════════════════
        
        List&lt;BookEdge&gt; edges = actualBooks.stream()
            .map(book -&gt; {
                // Create cursor for this book
                String cursor = encodeCursor(book.id);
                return new BookEdge(book, cursor);
            })
            .collect(Collectors.toList());
        
        // ═══════════════════════════════════════════════
        // CREATE PAGE INFO
        // ═══════════════════════════════════════════════
        
        PageInfo pageInfo = new PageInfo(
            hasNextPage,
            after != null &amp;&amp; !after.isEmpty(),  // hasPreviousPage
            edges.isEmpty() ? null : edges.get(0).getCursor(),  // startCursor
            edges.isEmpty() ? null : edges.get(edges.size() - 1).getCursor()  // endCursor
        );
        
        // ═══════════════════════════════════════════════
        // RETURN CONNECTION
        // ═══════════════════════════════════════════════
        
        int totalCount = (int) bookRepository.count();
        
        return new BookCursorConnection(edges, pageInfo, totalCount);
    }
    
    /**
     * Helper method to encode cursor
     */
    private String encodeCursor(Long id) {
        String cursorString = &quot;cursor:&quot; + id;
        return java.util.Base64.getEncoder()
            .encodeToString(cursorString.getBytes());
    }
}
</code></pre>
<p><strong>Step 3: Query with Cursor Pagination</strong></p>
<p><strong>First Page (no cursor):</strong></p>
<pre><code class="language-graphql">
query {
  booksCursor(first: 5) {
    edges {
      cursor
      node {
        id
        title
        price
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
</code></pre>
<p><strong>Response:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;booksCursor&quot;: {
      &quot;edges&quot;: [
        {
          &quot;cursor&quot;: &quot;Y3Vyc29yOjE=&quot;,
          &quot;node&quot;: {&quot;id&quot;: 1, &quot;title&quot;: &quot;Book 1&quot;, &quot;price&quot;: 29.99}
        },
        {
          &quot;cursor&quot;: &quot;Y3Vyc29yOjI=&quot;,
          &quot;node&quot;: {&quot;id&quot;: 2, &quot;title&quot;: &quot;Book 2&quot;, &quot;price&quot;: 39.99}
        },
        {
          &quot;cursor&quot;: &quot;Y3Vyc29yOjM=&quot;,
          &quot;node&quot;: {&quot;id&quot;: 3, &quot;title&quot;: &quot;Book 3&quot;, &quot;price&quot;: 19.99}
        },
        {
          &quot;cursor&quot;: &quot;Y3Vyc29yOjQ=&quot;,
          &quot;node&quot;: {&quot;id&quot;: 4, &quot;title&quot;: &quot;Book 4&quot;, &quot;price&quot;: 49.99}
        },
        {
          &quot;cursor&quot;: &quot;Y3Vyc29yOjU=&quot;,
          &quot;node&quot;: {&quot;id&quot;: 5, &quot;title&quot;: &quot;Book 5&quot;, &quot;price&quot;: 24.99}
        }
      ],
      &quot;pageInfo&quot;: {
        &quot;hasNextPage&quot;: true,
        &quot;hasPreviousPage&quot;: false,
        &quot;startCursor&quot;: &quot;Y3Vyc29yOjE=&quot;,
        &quot;endCursor&quot;: &quot;Y3Vyc29yOjU=&quot;
      },
      &quot;totalCount&quot;: 1247
    }
  }
}
</code></pre>
<p><strong>Next Page (use endCursor from previous page):</strong></p>
<pre><code class="language-graphql">
query {
  booksCursor(first: 5, after: &quot;Y3Vyc29yOjU=&quot;) {
    edges {
      cursor
      node {
        id
        title
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
</code></pre>
<p><strong>Visual Flow:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│      Cursor-Based Pagination Flow               │
└─────────────────────────────────────────────────┘

Request 1: first=5, after=null
Books: [1, 2, 3, 4, 5, 6] (fetch 6 to check hasNext)
Return: [1, 2, 3, 4, 5]
endCursor: &quot;Y3Vyc29yOjU=&quot; (cursor for book 5)
hasNextPage: true

Request 2: first=5, after=&quot;Y3Vyc29yOjU=&quot;
Books: [6, 7, 8, 9, 10, 11]
Return: [6, 7, 8, 9, 10]
endCursor: &quot;Y3Vyc29yOjEw=&quot; (cursor for book 10)
hasNextPage: true

Request 3: first=5, after=&quot;Y3Vyc29yOjEw=&quot;
Books: [11, 12, 13, 14, 15, 16]
Return: [11, 12, 13, 14, 15]
...continues until no more data
</code></pre>
<hr>
<h3 id="choosing-the-right-pagination-strategy">Choosing the Right Pagination Strategy</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│      When to Use Each Pagination Type          │
├─────────────────────────────────────────────────┤
│                                                 │
│  OFFSET-BASED:                                  │
│  ✅ Use when:                                   │
│     - Need page numbers (1, 2, 3...)           │
│     - Users jump between pages                  │
│     - Small to medium datasets (&lt;100k rows)    │
│     - Admin panels, dashboards                  │
│     - Simple table views                        │
│                                                 │
│  ❌ Avoid when:                                 │
│     - Very large datasets (millions of rows)   │
│     - Infinite scroll UI                        │
│     - Real-time data (frequent changes)        │
│                                                 │
│  ─────────────────────────────────────────────  │
│                                                 │
│  CURSOR-BASED:                                  │
│  ✅ Use when:                                   │
│     - Large datasets (millions of rows)        │
│     - Infinite scroll (social media feeds)     │
│     - Real-time data                            │
│     - Mobile apps                               │
│     - Performance is critical                   │
│                                                 │
│  ❌ Avoid when:                                 │
│     - Need page numbers                         │
│     - Need to jump to random pages              │
│     - Simple admin interfaces                   │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p><strong>Performance Comparison:</strong></p>
<pre><code class="language-">
Dataset: 1,000,000 books

Offset-Based:
Page 1 (offset=0):      ~10ms   ✅ Fast
Page 100 (offset=990):  ~50ms   ⚠️ Getting slower
Page 10000 (offset=99990): ~500ms  ❌ Very slow!

Cursor-Based:
Page 1:    ~10ms  ✅ Fast
Page 100:  ~10ms  ✅ Fast
Page 10000: ~10ms  ✅ Still fast!
</code></pre>
<p>Both pagination strategies are now fully explained and ready to use!</p>
<h4 id="offset-based-pagination">Offset-Based Pagination</h4>
<pre><code class="language-java">
package org.acme.model;

import java.util.List;

public class BookConnection {
    private List&lt;Book&gt; books;
    private Integer totalCount;
    private Boolean hasMore;
    
    // Constructors, getters, setters
}
</code></pre>
<pre><code class="language-java">
@GraphQLApi
public class BookResource {
    
    @Query
    @Transactional
    public BookConnection books(
            @Name(&quot;limit&quot;) @DefaultValue(&quot;10&quot;) Integer limit,
            @Name(&quot;offset&quot;) @DefaultValue(&quot;0&quot;) Integer offset) {
        
        List&lt;BookEntity&gt; books = bookRepository.findAll()
            .page(offset / limit, limit)
            .list();
        
        long totalCount = bookRepository.count();
        boolean hasMore = offset + limit &lt; totalCount;
        
        return new BookConnection(books, (int) totalCount, hasMore);
    }
}
</code></pre>
<h4 id="cursor-based-pagination">Cursor-Based Pagination</h4>
<pre><code class="language-java">
public class PageInfo {
    private Boolean hasNextPage;
    private Boolean hasPreviousPage;
    private String startCursor;
    private String endCursor;
    
    // Constructors, getters, setters
}

public class BookEdge {
    private Book node;
    private String cursor;
    
    // Constructors, getters, setters
}

public class BookConnection {
    private List&lt;BookEdge&gt; edges;
    private PageInfo pageInfo;
    private Integer totalCount;
    
    // Constructors, getters, setters
}
</code></pre>
<pre><code class="language-java">
@Query
@Transactional
public BookConnection books(
        @Name(&quot;first&quot;) Integer first,
        @Name(&quot;after&quot;) String after) {
    
    int limit = first != null ? first : 10;
    Long afterId = after != null ? Long.parseLong(after) : 0L;
    
    List&lt;BookEntity&gt; books = bookRepository.find(
        &quot;id &gt; ?1 ORDER BY id&quot;, afterId)
        .page(0, limit + 1)
        .list();
    
    boolean hasNextPage = books.size() &gt; limit;
    List&lt;BookEntity&gt; nodes = hasNextPage 
        ? books.subList(0, limit) 
        : books;
    
    List&lt;BookEdge&gt; edges = nodes.stream()
        .map(book -&gt; new BookEdge(book, book.id.toString()))
        .collect(Collectors.toList());
    
    PageInfo pageInfo = new PageInfo(
        hasNextPage,
        after != null,
        edges.isEmpty() ? null : edges.get(0).getCursor(),
        edges.isEmpty() ? null : edges.get(edges.size() - 1).getCursor()
    );
    
    return new BookConnection(edges, pageInfo, (int) bookRepository.count());
}
</code></pre>
<hr>
<h3 id="authentication-and-authorization-securing-your-api">Authentication and Authorization (Securing Your API)</h3>
<p><strong>What&#x27;s the Difference?</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│   Authentication vs Authorization              │
├─────────────────────────────────────────────────┤
│                                                 │
│  AUTHENTICATION (Who are you?)                  │
│  → Proving your identity                        │
│  → Like showing ID at airport security          │
│  → Example: Login with username/password        │
│                                                 │
│  AUTHORIZATION (What can you do?)               │
│  → Checking permissions                         │
│  → Like checking if your ticket is first class  │
│  → Example: Only admins can delete books        │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p><strong>Real-World Example:</strong></p>
<ul>
<li><strong>Authentication</strong>: You log in to Netflix with your email/password</li>
<li><strong>Authorization</strong>: Your &quot;Basic&quot; plan can&#x27;t watch in 4K (only Premium can)</li>
</ul>
<hr>
<h4 id="setting-up-jwt-authentication">Setting Up JWT Authentication</h4>
<p><strong>What is JWT?</strong></p>
<p>JWT (JSON Web Token) is like a digital passport that proves who you are.</p>
<p><strong>How JWT Works:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│            JWT Authentication Flow              │
└─────────────────────────────────────────────────┘

Step 1: User Logs In
  Client → Server: &quot;username: john, password: secret123&quot;
  
Step 2: Server Verifies
  Server checks: ✅ Credentials valid
  
Step 3: Server Creates JWT Token
  Server creates: &quot;eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...&quot;
  This token contains:
    - User ID
    - Username
    - Roles (admin, user, etc.)
    - Expiration time
  
Step 4: Client Receives Token
  Client saves token (usually in memory or secure storage)
  
Step 5: Client Uses Token for All Requests
  Every request includes:
  Header: &quot;Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...&quot;
  
Step 6: Server Validates Token
  Server checks: ✅ Token valid, user is authenticated!
</code></pre>
<p><strong>Step 1: Add JWT Dependency</strong></p>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-smallrye-jwt&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>
<p><strong>Step 2: Configure JWT</strong></p>
<pre><code class="language-properties">
# ═══════════════════════════════════════════════════════
# JWT CONFIGURATION
# ═══════════════════════════════════════════════════════

# Where is the public key to verify tokens?
# This file should contain your public key
mp.jwt.verify.publickey.location=META-INF/resources/publicKey.pem

# Who issued the token? (must match token&#x27;s &quot;issuer&quot; field)
mp.jwt.verify.issuer=https://your-app.com

# Enable JWT processing
quarkus.smallrye-jwt.enabled=true

# Where to look for the token in the request
# Default is &quot;Authorization: Bearer &lt;token&gt;&quot;
# You usually don&#x27;t need to change this
</code></pre>
<p><strong>Step 3: Generate Keys (One-Time Setup)</strong></p>
<p>You need a public/private key pair. Run these commands:</p>
<pre><code class="language-bash">
# Generate private key
openssl genrsa -out privateKey.pem 2048

# Generate public key from private key
openssl rsa -in privateKey.pem -pubout -out publicKey.pem
</code></pre>
<p>Place <code>publicKey.pem</code> in <code>src/main/resources/META-INF/resources/</code></p>
<p><strong>Step 4: Create a User Model</strong></p>
<pre><code class="language-java">
package org.acme.security;

import java.util.Set;

/**
 * Represents a user in the system
 */
public class User {
    private String userId;
    private String username;
    private String email;
    private Set&lt;String&gt; roles;  // &quot;admin&quot;, &quot;user&quot;, &quot;editor&quot;, etc.
    
    // Constructors
    public User() {}
    
    public User(String userId, String username, String email, Set&lt;String&gt; roles) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }
    
    // Getters and Setters
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public Set&lt;String&gt; getRoles() { return roles; }
    public void setRoles(Set&lt;String&gt; roles) { this.roles = roles; }
    
    // Helper methods
    public boolean isAdmin() {
        return roles != null &amp;&amp; roles.contains(&quot;admin&quot;);
    }
    
    public boolean hasRole(String role) {
        return roles != null &amp;&amp; roles.contains(role);
    }
}
</code></pre>
<p><strong>Step 5: Using JWT in GraphQL</strong></p>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class SecureBookResource {
    
    @Inject
    BookRepository bookRepository;
    
    // ═══════════════════════════════════════════════════
    // Inject the JWT token
    // This gives us access to the authenticated user&#x27;s info
    // ═══════════════════════════════════════════════════
    @Inject
    JsonWebToken jwt;
    
    // ═══════════════════════════════════════════════════
    // QUERY - Only authenticated users can access
    // ═══════════════════════════════════════════════════
    
    @Query(&quot;myBooks&quot;)
    @Transactional
    @RolesAllowed(&quot;user&quot;)  // Must have &quot;user&quot; role
    @Description(&quot;Get books owned by the current user&quot;)
    public List&lt;BookEntity&gt; getMyBooks() {
        // Get the current user&#x27;s ID from the JWT token
        String userId = jwt.getSubject();
        
        // Get the username from JWT claims
        String username = jwt.getName();
        
        System.out.println(&quot;User &quot; + username + &quot; is fetching their books&quot;);
        
        // Find books belonging to this user
        return bookRepository.findByUserId(userId);
    }
    
    // ═══════════════════════════════════════════════════
    // QUERY - Only admins can access
    // ═══════════════════════════════════════════════════
    
    @Query(&quot;allBooksAdmin&quot;)
    @Transactional
    @RolesAllowed(&quot;admin&quot;)  // Must have &quot;admin&quot; role
    @Description(&quot;Get all books (admin only)&quot;)
    public List&lt;BookEntity&gt; getAllBooksAdmin() {
        // Check if user is really an admin
        if (!jwt.getGroups().contains(&quot;admin&quot;)) {
            throw new ForbiddenException(&quot;Only administrators can access all books&quot;);
        }
        
        return bookRepository.listAll();
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATION - Admin only
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Transactional
    @RolesAllowed(&quot;admin&quot;)
    @Description(&quot;Delete a book (admin only)&quot;)
    public Boolean deleteBook(@Name(&quot;id&quot;) Long id) {
        // Log who performed the action
        String adminName = jwt.getName();
        System.out.println(&quot;Admin &quot; + adminName + &quot; is deleting book &quot; + id);
        
        BookEntity book = BookEntity.findById(id);
        if (book == null) {
            throw new BookNotFoundException(id);
        }
        
        return BookEntity.deleteById(id);
    }
    
    // ═══════════════════════════════════════════════════
    // MUTATION - User can only delete their own books
    // ═══════════════════════════════════════════════════
    
    @Mutation
    @Transactional
    @RolesAllowed(&quot;user&quot;)
    @Description(&quot;Delete your own book&quot;)
    public Boolean deleteMyBook(@Name(&quot;id&quot;) Long id) {
        String userId = jwt.getSubject();
        
        BookEntity book = BookEntity.findById(id);
        if (book == null) {
            throw new BookNotFoundException(id);
        }
        
        // Check if this book belongs to the current user
        if (!book.userId.equals(userId)) {
            throw new ForbiddenException(&quot;You can only delete your own books&quot;);
        }
        
        return book.delete();
    }
}
</code></pre>
<p><strong>Understanding @RolesAllowed:</strong></p>
<pre><code class="language-java">
// ═══════════════════════════════════════════════════════
// ROLE-BASED ACCESS CONTROL
// ═══════════════════════════════════════════════════════

// Anyone can access (no annotation)
@Query
public List&lt;Book&gt; publicBooks() { ... }

// Must be logged in (any role)
@RolesAllowed({&quot;user&quot;, &quot;admin&quot;, &quot;editor&quot;})
@Query
public List&lt;Book&gt; authenticatedBooks() { ... }

// Only admins
@RolesAllowed(&quot;admin&quot;)
@Mutation
public Boolean deleteBook() { ... }

// Multiple roles allowed
@RolesAllowed({&quot;admin&quot;, &quot;editor&quot;})
@Mutation
public Book updateBook() { ... }
</code></pre>
<p><strong>Step 6: Extracting JWT Information</strong></p>
<pre><code class="language-java">
@GraphQLApi
public class UserResource {
    
    @Inject
    JsonWebToken jwt;
    
    @Query(&quot;currentUser&quot;)
    @RolesAllowed(&quot;user&quot;)
    @Description(&quot;Get information about the current logged-in user&quot;)
    public User getCurrentUser() {
        // Create User object from JWT
        User user = new User();
        
        // Get user ID (subject claim)
        user.setUserId(jwt.getSubject());
        
        // Get username (name claim)
        user.setUsername(jwt.getName());
        
        // Get email (custom claim)
        user.setEmail(jwt.getClaim(&quot;email&quot;));
        
        // Get roles (groups claim)
        user.setRoles(jwt.getGroups());
        
        return user;
    }
    
    @Query(&quot;isAdmin&quot;)
    @RolesAllowed(&quot;user&quot;)
    @Description(&quot;Check if current user is an admin&quot;)
    public Boolean isAdmin() {
        return jwt.getGroups().contains(&quot;admin&quot;);
    }
}
</code></pre>
<hr>
<h4 id="custom-security-context-alternative-approach">Custom Security Context (Alternative Approach)</h4>
<p><strong>When to Use:</strong></p>
<p>If you want more control over authentication/authorization logic.</p>
<p><strong>Step 1: Create Security Context</strong></p>
<pre><code class="language-java">
package org.acme.security;

import io.quarkus.security.identity.SecurityIdentity;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;

/**
 * Custom security context for easier access to user info
 * RequestScoped means a new instance for each request
 */
@RequestScoped
public class GraphQLSecurityContext {
    
    @Inject
    SecurityIdentity identity;
    
    /**
     * Check if user is authenticated
     */
    public boolean isAuthenticated() {
        return !identity.isAnonymous();
    }
    
    /**
     * Get current user&#x27;s ID
     */
    public String getUserId() {
        if (!isAuthenticated()) {
            return null;
        }
        return identity.getPrincipal().getName();
    }
    
    /**
     * Get current user&#x27;s username
     */
    public String getUsername() {
        if (!isAuthenticated()) {
            return null;
        }
        return identity.getPrincipal().getName();
    }
    
    /**
     * Check if user has a specific role
     */
    public boolean hasRole(String role) {
        return identity.hasRole(role);
    }
    
    /**
     * Check if user is an admin
     */
    public boolean isAdmin() {
        return hasRole(&quot;admin&quot;);
    }
    
    /**
     * Get all user&#x27;s roles
     */
    public Set&lt;String&gt; getRoles() {
        return identity.getRoles();
    }
    
    /**
     * Require authentication (throw exception if not logged in)
     */
    public void requireAuthentication() {
        if (!isAuthenticated()) {
            throw new UnauthorizedException(&quot;You must be logged in&quot;);
        }
    }
    
    /**
     * Require specific role (throw exception if not authorized)
     */
    public void requireRole(String role) {
        requireAuthentication();
        
        if (!hasRole(role)) {
            throw new ForbiddenException(
                &quot;You need &#x27;&quot; + role + &quot;&#x27; role to perform this action&quot;
            );
        }
    }
}
</code></pre>
<p><strong>Step 2: Use Custom Security Context</strong></p>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    @Inject
    GraphQLSecurityContext securityContext;
    
    @Inject
    BookRepository bookRepository;
    
    /**
     * Public query - anyone can access
     */
    @Query(&quot;publicBooks&quot;)
    @Transactional
    @Description(&quot;Get public books (no authentication required)&quot;)
    public List&lt;BookEntity&gt; getPublicBooks() {
        // No security check needed
        return bookRepository.findPublicBooks();
    }
    
    /**
     * Protected query - requires authentication
     */
    @Query(&quot;myBooks&quot;)
    @Transactional
    @Description(&quot;Get your books (authentication required)&quot;)
    public List&lt;BookEntity&gt; getMyBooks() {
        // Require user to be logged in
        securityContext.requireAuthentication();
        
        String userId = securityContext.getUserId();
        return bookRepository.findByUserId(userId);
    }
    
    /**
     * Admin query - requires admin role
     */
    @Query(&quot;allBooks&quot;)
    @Transactional
    @Description(&quot;Get all books (admin only)&quot;)
    public List&lt;BookEntity&gt; getAllBooks() {
        // Require admin role
        securityContext.requireRole(&quot;admin&quot;);
        
        // Log who accessed this
        String admin = securityContext.getUsername();
        System.out.println(&quot;Admin &quot; + admin + &quot; accessed all books&quot;);
        
        return bookRepository.listAll();
    }
    
    /**
     * Flexible authorization
     */
    @Query(&quot;books&quot;)
    @Transactional
    @Description(&quot;Get books based on user&#x27;s role&quot;)
    public List&lt;BookEntity&gt; getBooks() {
        if (securityContext.isAdmin()) {
            // Admins see all books
            return bookRepository.listAll();
        } else if (securityContext.isAuthenticated()) {
            // Regular users see only their books
            String userId = securityContext.getUserId();
            return bookRepository.findByUserId(userId);
        } else {
            // Anonymous users see only public books
            return bookRepository.findPublicBooks();
        }
    }
    
    /**
     * Mutation with ownership check
     */
    @Mutation
    @Transactional
    @Description(&quot;Update a book&quot;)
    public BookEntity updateBook(
        @Name(&quot;id&quot;) Long id,
        @Name(&quot;input&quot;) BookInput input
    ) {
        // Must be logged in
        securityContext.requireAuthentication();
        
        BookEntity book = BookEntity.findById(id);
        if (book == null) {
            throw new BookNotFoundException(id);
        }
        
        // Check if user owns this book OR is an admin
        String currentUserId = securityContext.getUserId();
        boolean isOwner = book.userId.equals(currentUserId);
        boolean isAdmin = securityContext.isAdmin();
        
        if (!isOwner &amp;&amp; !isAdmin) {
            throw new ForbiddenException(
                &quot;You can only update your own books&quot;
            );
        }
        
        // Update the book
        if (input.getTitle() != null) {
            book.title = input.getTitle();
        }
        // ... update other fields
        
        return book;
    }
}
</code></pre>
<hr>
<h3 id="field-level-security">Field-Level Security</h3>
<p><strong>What is Field-Level Security?</strong></p>
<p>Sometimes you want to hide certain fields based on who&#x27;s asking.</p>
<p><strong>Example:</strong></p>
<ul>
<li>Regular users can see book title and price</li>
<li>Only owners can see sales statistics</li>
<li>Only admins can see internal notes</li>
</ul>
<p><strong>Implementation:</strong></p>
<pre><code class="language-java">
@GraphQLApi
public class BookResource {
    
    @Inject
    GraphQLSecurityContext securityContext;
    
    @Query(&quot;book&quot;)
    @Transactional
    public BookEntity getBook(@Name(&quot;id&quot;) Long id) {
        return BookEntity.findById(id);
    }
    
    /**
     * Field resolver with security
     * This field is only visible to the book owner or admins
     */
    @Description(&quot;Sales statistics (owner/admin only)&quot;)
    public SalesStats salesStats(@Source BookEntity book) {
        // Check if user can see this field
        if (!securityContext.isAuthenticated()) {
            return null;  // Hide for anonymous users
        }
        
        String userId = securityContext.getUserId();
        boolean isOwner = book.userId.equals(userId);
        boolean isAdmin = securityContext.isAdmin();
        
        if (!isOwner &amp;&amp; !isAdmin) {
            return null;  // Hide for non-owners
        }
        
        // User is authorized - return the data
        return salesStatsService.getStats(book.id);
    }
    
    /**
     * Another protected field
     */
    @Description(&quot;Internal notes (admin only)&quot;)
    public String internalNotes(@Source BookEntity book) {
        // Only admins can see internal notes
        if (!securityContext.isAdmin()) {
            return null;
        }
        
        return book.internalNotes;
    }
}
</code></pre>
<p><strong>Query Result Based on Role:</strong></p>
<pre><code class="language-graphql">
query {
  book(id: 1) {
    title
    price
    salesStats {    # Only owner/admin sees this
      totalSales
      revenue
    }
    internalNotes   # Only admin sees this
  }
}
</code></pre>
<p><strong>Response for Regular User:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;book&quot;: {
      &quot;title&quot;: &quot;Great Book&quot;,
      &quot;price&quot;: 29.99,
      &quot;salesStats&quot;: null,
      &quot;internalNotes&quot;: null
    }
  }
}
</code></pre>
<p><strong>Response for Owner/Admin:</strong></p>
<pre><code class="language-json">
{
  &quot;data&quot;: {
    &quot;book&quot;: {
      &quot;title&quot;: &quot;Great Book&quot;,
      &quot;price&quot;: 29.99,
      &quot;salesStats&quot;: {
        &quot;totalSales&quot;: 1250,
        &quot;revenue&quot;: 37487.50
      },
      &quot;internalNotes&quot;: &quot;Priority promotion next month&quot;
    }
  }
}
</code></pre>
<hr>
<h3 id="security-best-practices">Security Best Practices</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Security Best Practices                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ✅ Always validate on the server               │
│     Never trust client-side validation          │
│                                                 │
│  ✅ Use HTTPS in production                     │
│     Tokens can be stolen over HTTP              │
│                                                 │
│  ✅ Set token expiration                        │
│     Don&#x27;t create tokens that last forever       │
│                                                 │
│  ✅ Check ownership for resources               │
│     Users should only access their own data     │
│                                                 │
│  ✅ Log security events                         │
│     Track who did what and when                 │
│                                                 │
│  ✅ Rate limit authentication attempts          │
│     Prevent brute-force attacks                 │
│                                                 │
│  ✅ Use role-based access control               │
│     Don&#x27;t hardcode user IDs                     │
│                                                 │
│  ✅ Sanitize all inputs                         │
│     Prevent injection attacks                   │
│                                                 │
│  ✅ Hide sensitive error messages               │
│     Don&#x27;t expose internal details to users      │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p>This covers authentication and authorization comprehensively for beginners!</p>
<h4 id="jwt-authentication">JWT Authentication</h4>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-smallrye-jwt&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-properties">
# JWT Configuration
mp.jwt.verify.publickey.location=META-INF/resources/publicKey.pem
mp.jwt.verify.issuer=https://example.com
quarkus.smallrye-jwt.enabled=true
</code></pre>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class SecureBookResource {
    
    @Inject
    JsonWebToken jwt;
    
    @Query
    @RolesAllowed(&quot;user&quot;)
    public List&lt;Book&gt; myBooks() {
        String userId = jwt.getSubject();
        return bookRepository.findByUserId(userId);
    }
    
    @Mutation
    @RolesAllowed(&quot;admin&quot;)
    public Book createBook(@Name(&quot;input&quot;) BookInput input) {
        // Only admins can create books
        return bookService.createBook(input);
    }
}
</code></pre>
<h4 id="custom-security-context">Custom Security Context</h4>
<pre><code class="language-java">
package org.acme.security;

import io.quarkus.security.identity.SecurityIdentity;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;

@RequestScoped
public class GraphQLSecurityContext {
    
    @Inject
    SecurityIdentity identity;
    
    public boolean isAuthenticated() {
        return !identity.isAnonymous();
    }
    
    public boolean hasRole(String role) {
        return identity.hasRole(role);
    }
    
    public String getUserId() {
        return identity.getPrincipal().getName();
    }
}
</code></pre>
<pre><code class="language-java">
@GraphQLApi
public class BookResource {
    
    @Inject
    GraphQLSecurityContext securityContext;
    
    @Query
    public List&lt;Book&gt; books() {
        if (!securityContext.isAuthenticated()) {
            throw new UnauthorizedException(&quot;Authentication required&quot;);
        }
        
        if (securityContext.hasRole(&quot;admin&quot;)) {
            return bookRepository.listAll();
        } else {
            String userId = securityContext.getUserId();
            return bookRepository.findByUserId(userId);
        }
    }
}
</code></pre>
<h3 id="sourcedatafetcher-pattern">Source/DataFetcher Pattern</h3>
<pre><code class="language-java">
@GraphQLApi
public class AuthorResource {
    
    @Inject
    BookRepository bookRepository;
    
    @Inject
    StatisticsService statisticsService;
    
    @Query
    public List&lt;Author&gt; authors() {
        return authorRepository.listAll();
    }
    
    // Field resolver - called for each Author
    public List&lt;Book&gt; books(@Source Author author) {
        return bookRepository.findByAuthorId(author.getId());
    }
    
    // Computed field
    public Integer totalBooks(@Source Author author) {
        return bookRepository.countByAuthorId(author.getId());
    }
    
    // Async field resolver
    public CompletionStage&lt;Statistics&gt; statistics(@Source Author author) {
        return statisticsService.getAuthorStatistics(author.getId());
    }
}
</code></pre>
<p><strong>Generated Schema:</strong></p>
<pre><code class="language-graphql">
type Author {
  id: BigInteger!
  name: String!
  email: String!
  books: [Book!]!
  totalBooks: Int!
  statistics: Statistics!
}
</code></pre>
<h3 id="reactive-graphql">Reactive GraphQL</h3>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-hibernate-reactive-panache&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-reactive-pg-client&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-java">
package org.acme.entity;

import io.quarkus.hibernate.reactive.panache.PanacheEntity;
import io.smallrye.mutiny.Uni;
import jakarta.persistence.Entity;

@Entity
public class BookEntity extends PanacheEntity {
    public String title;
    public Integer pages;
    
    public static Uni&lt;List&lt;BookEntity&gt;&gt; findByTitle(String title) {
        return list(&quot;LOWER(title) LIKE LOWER(?1)&quot;, &quot;%&quot; + title + &quot;%&quot;);
    }
}
</code></pre>
<pre><code class="language-java">
@GraphQLApi
@ApplicationScoped
public class ReactiveBookResource {
    
    @Query
    public Uni&lt;List&lt;BookEntity&gt;&gt; allBooks() {
        return BookEntity.listAll();
    }
    
    @Query
    public Uni&lt;BookEntity&gt; bookById(@Name(&quot;id&quot;) Long id) {
        return BookEntity.&lt;BookEntity&gt;findById(id)
            .onItem().ifNull().failWith(new BookNotFoundException(id));
    }
    
    @Mutation
    public Uni&lt;BookEntity&gt; createBook(@Name(&quot;input&quot;) BookInput input) {
        BookEntity book = new BookEntity();
        book.title = input.getTitle();
        book.pages = input.getPages();
        
        return book.persist();
    }
    
    @Mutation
    public Uni&lt;Boolean&gt; deleteBook(@Name(&quot;id&quot;) Long id) {
        return BookEntity.deleteById(id);
    }
}
</code></pre>
<hr>
<h2 id="advanced-part">Advanced Part</h2>
<p><strong>What You&#x27;ll Learn in This Section:</strong></p>
<p>Now we&#x27;re moving into professional, production-grade topics:</p>
<ul>
<li>Solving performance problems (N+1 queries)</li>
<li>Real-time updates with WebSockets</li>
<li>Building distributed systems with Federation</li>
<li>Optimizing for speed and scale</li>
<li>Testing strategies</li>
<li>Deploying to production</li>
</ul>
<p><strong>Who Should Read This:</strong></p>
<ul>
<li>You&#x27;ve mastered the Basic and Intermediate parts</li>
<li>You&#x27;re building a production application</li>
<li>You need to handle high traffic</li>
<li>You want to optimize performance</li>
<li>You&#x27;re working on a team with multiple services</li>
</ul>
<p><strong>Real-World Context:</strong></p>
<p>This section takes your hobby project and makes it enterprise-ready. Think of it as upgrading from a food truck to a restaurant chain!</p>
<hr>
<h3 id="the-n1-problem-and-dataloader-solution">The N+1 Problem and DataLoader Solution</h3>
<p><strong>What is the N+1 Problem?</strong></p>
<p>One of the most common performance issues in GraphQL. Let&#x27;s understand it with a story.</p>
<p><strong>The Problem (Illustrated):</strong></p>
<p>Imagine you run a bookstore and a customer asks:</p>
<blockquote>&quot;Show me all authors and their books&quot;</blockquote>
<p><strong>Bad Approach (N+1 Queries):</strong></p>
<pre><code class="language-">
Step 1: Get all authors (1 query)
  Database: SELECT * FROM authors
  Result: [Author1, Author2, Author3]

Step 2: For EACH author, get their books (N queries)
  Database: SELECT * FROM books WHERE author_id = 1
  Database: SELECT * FROM books WHERE author_id = 2
  Database: SELECT * FROM books WHERE author_id = 3

Total: 1 + 3 = 4 database queries
</code></pre>
<p><strong>Why This is Bad:</strong></p>
<ul>
<li>3 authors = 4 queries</li>
<li>100 authors = 101 queries</li>
<li>10,000 authors = 10,001 queries! 😱</li>
</ul>
<p>Each database query takes time. This adds up FAST!</p>
<p><strong>Visual Representation:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│           The N+1 Problem                       │
└─────────────────────────────────────────────────┘

GraphQL Query:
{
  authors {           ← Query 1: Get all authors
    name
    books {           ← Query 2, 3, 4, 5... one per author!
      title
    }
  }
}

Without DataLoader:
  Query 1: SELECT * FROM authors
  Query 2: SELECT * FROM books WHERE author_id = 1
  Query 3: SELECT * FROM books WHERE author_id = 2
  Query 4: SELECT * FROM books WHERE author_id = 3
  Query 5: SELECT * FROM books WHERE author_id = 4
  ... and so on

  Total: 1 + N queries (where N = number of authors)
  For 100 authors: 101 queries 😱
  Time: ~2 seconds

With DataLoader:
  Query 1: SELECT * FROM authors
  Query 2: SELECT * FROM books WHERE author_id IN (1,2,3,4...)
  
  Total: 2 queries ✅
  Time: ~50ms ⚡
</code></pre>
<hr>
<h4 id="understanding-dataloader">Understanding DataLoader</h4>
<p><strong>What is DataLoader?</strong></p>
<p>DataLoader is a tool that batches multiple requests into one. Instead of asking for data one item at a time, it collects all requests and asks for everything at once.</p>
<p><strong>Real-World Analogy:</strong></p>
<p><strong>Without DataLoader:</strong></p>
<pre><code class="language-">
You: &quot;Get me the book for author 1&quot;
Database: *fetches book for author 1*
You: &quot;Get me the book for author 2&quot;
Database: *fetches book for author 2*
You: &quot;Get me the book for author 3&quot;
Database: *fetches book for author 3*
</code></pre>
<p>Each request is separate - very slow!</p>
<p><strong>With DataLoader:</strong></p>
<pre><code class="language-">
You: &quot;Get me the book for author 1&quot;
You: &quot;Get me the book for author 2&quot;
You: &quot;Get me the book for author 3&quot;
DataLoader: *waits a tiny moment*
DataLoader: &quot;Database, get me books for authors 1, 2, and 3 all at once&quot;
Database: *fetches all books in one query*
</code></pre>
<p>One batch request - super fast!</p>
<hr>
<h4 id="implementing-dataloader-in-quarkus">Implementing DataLoader in Quarkus</h4>
<p><strong>Step 1: Add DataLoader Dependency</strong></p>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;com.graphql-java&lt;/groupId&gt;
    &lt;artifactId&gt;java-dataloader&lt;/artifactId&gt;
    &lt;version&gt;3.2.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre>
<p><strong>Step 2: Create a DataLoader Registry Producer</strong></p>
<pre><code class="language-java">
package org.acme.dataloader;

import org.dataloader.DataLoader;
import org.dataloader.DataLoaderRegistry;
import org.acme.entity.AuthorEntity;
import org.acme.repository.AuthorRepository;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

/**
 * This class creates and configures DataLoaders
 * 
 * Think of it as a factory that builds specialized data fetchers
 */
@ApplicationScoped
public class DataLoaderRegistryProducer {
    
    @Inject
    AuthorRepository authorRepository;
    
    /**
     * Creates a registry of all DataLoaders
     * 
     * @return Registry containing all configured DataLoaders
     */
    public DataLoaderRegistry createDataLoaderRegistry() {
        DataLoaderRegistry registry = new DataLoaderRegistry();
        
        // ═══════════════════════════════════════════════════
        // Create Author DataLoader
        // ═══════════════════════════════════════════════════
        
        /**
         * The batch function - this is where the magic happens!
         * 
         * Instead of being called once per author ID,
         * it&#x27;s called ONCE with ALL author IDs collected
         */
        DataLoader&lt;Long, AuthorEntity&gt; authorLoader = DataLoader.newDataLoader(
            authorIds -&gt; CompletableFuture.supplyAsync(() -&gt; {
                
                System.out.println(&quot;🔥 Batching &quot; + authorIds.size() + &quot; author requests into ONE query!&quot;);
                
                // Fetch all authors in ONE database query
                List&lt;AuthorEntity&gt; authors = authorRepository.findByIds(authorIds);
                
                // Return authors in the SAME ORDER as the requested IDs
                // This is VERY important!
                return authorIds.stream()
                    .map(id -&gt; authors.stream()
                        .filter(author -&gt; author.id.equals(id))
                        .findFirst()
                        .orElse(null))
                    .collect(Collectors.toList());
            })
        );
        
        // Register the loader with a name
        registry.register(&quot;author&quot;, authorLoader);
        
        // You can create more DataLoaders here
        // registry.register(&quot;book&quot;, bookLoader);
        // registry.register(&quot;review&quot;, reviewLoader);
        
        return registry;
    }
}
</code></pre>
<p><strong>Step 3: Update Repository to Support Batch Loading</strong></p>
<pre><code class="language-java">
package org.acme.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.entity.AuthorEntity;
import java.util.List;

@ApplicationScoped
public class AuthorRepository implements PanacheRepository&lt;AuthorEntity&gt; {
    
    /**
     * Find multiple authors by their IDs in ONE query
     * This is what DataLoader will call
     * 
     * @param ids List of author IDs to fetch
     * @return List of authors
     */
    public List&lt;AuthorEntity&gt; findByIds(List&lt;Long&gt; ids) {
        // IN clause gets all matching records in one query
        return list(&quot;id IN ?1&quot;, ids);
    }
}
</code></pre>
<p><strong>Step 4: Use DataLoader in GraphQL Resource</strong></p>
<pre><code class="language-java">
package org.acme.graphql;

import org.eclipse.microprofile.graphql.*;
import org.acme.entity.BookEntity;
import org.acme.entity.AuthorEntity;
import org.acme.dataloader.DataLoaderRegistryProducer;
import org.dataloader.DataLoader;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import io.smallrye.graphql.api.Context;
import java.util.concurrent.CompletableFuture;

@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    @Inject
    DataLoaderRegistryProducer dataLoaderProducer;
    
    // ═══════════════════════════════════════════════════
    // Inject GraphQL context - gives access to DataLoaders
    // ═══════════════════════════════════════════════════
    @Inject
    Context context;
    
    @Query(&quot;books&quot;)
    @Transactional
    @Description(&quot;Get all books&quot;)
    public List&lt;BookEntity&gt; getBooks() {
        return BookEntity.listAll();
    }
    
    /**
     * Field resolver for author
     * 
     * WITHOUT DataLoader:
     *   - Called once per book
     *   - Makes one database query per book
     *   - 100 books = 100 queries
     * 
     * WITH DataLoader:
     *   - Called once per book
     *   - DataLoader batches all requests
     *   - 100 books = 1 query!
     */
    @Description(&quot;The author who wrote this book&quot;)
    public CompletableFuture&lt;AuthorEntity&gt; author(@Source BookEntity book) {
        
        // Get the DataLoader from context
        DataLoader&lt;Long, AuthorEntity&gt; authorLoader = 
            context.getDataLoader(&quot;author&quot;);
        
        // Load the author (this gets batched automatically!)
        // Instead of querying immediately, DataLoader waits and batches
        return authorLoader.load(book.authorId);
    }
}
</code></pre>
<p><strong>Step 5: Configure DataLoader in Application</strong></p>
<pre><code class="language-java">
package org.acme.config;

import org.acme.dataloader.DataLoaderRegistryProducer;
import org.dataloader.DataLoaderRegistry;
import io.smallrye.graphql.execution.context.SmallRyeContext;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;

/**
 * Sets up DataLoader for each GraphQL request
 */
@ApplicationScoped
public class GraphQLConfig {
    
    @Inject
    DataLoaderRegistryProducer dataLoaderProducer;
    
    /**
     * Called before each GraphQL request
     * Creates a fresh DataLoader registry
     */
    public void setupDataLoader(@Observes SmallRyeContext context) {
        DataLoaderRegistry registry = dataLoaderProducer.createDataLoaderRegistry();
        context.setDataLoaderRegistry(registry);
    }
}
</code></pre>
<hr>
<h4 id="how-dataloader-works-behind-the-scenes">How DataLoader Works (Behind the Scenes)</h4>
<p><strong>The Batching Process:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│        DataLoader Execution Timeline            │
└─────────────────────────────────────────────────┘

Time 0ms:
  GraphQL receives query for 100 books with authors

Time 1ms:
  GraphQL starts resolving books field
  Books query runs: SELECT * FROM books
  Returns: [Book1, Book2, Book3, ... Book100]

Time 2ms:
  GraphQL starts resolving author for Book1
  Code calls: authorLoader.load(1)
  DataLoader: &quot;I&#x27;ll wait a bit, maybe more requests coming...&quot;

Time 3ms:
  GraphQL resolving author for Book2
  Code calls: authorLoader.load(2)
  DataLoader: &quot;Adding to batch...&quot;

Time 4ms:
  GraphQL resolving author for Book3
  Code calls: authorLoader.load(3)
  DataLoader: &quot;Adding to batch...&quot;

... continues for all 100 books ...

Time 15ms:
  All book.author fields have been requested
  DataLoader: &quot;OK, got all 100 requests, time to fetch!&quot;
  
Time 16ms:
  DataLoader executes ONE query:
  SELECT * FROM authors WHERE id IN (1,2,3,...,100)
  
Time 20ms:
  Database returns all 100 authors
  DataLoader distributes results to each waiting request
  
Time 21ms:
  All author fields resolved!
  GraphQL returns complete response

Total Time: ~21ms ✅
Without DataLoader: ~2000ms (100 separate queries)
</code></pre>
<p><strong>Key Concepts:</strong></p>
<ul>
<li><strong>Batching Window</strong>: DataLoader waits a tiny moment (1-2ms) to collect requests</li>
<li><strong>Single Query</strong>: All collected IDs are fetched in one database query</li>
<li><strong>Order Preservation</strong>: Results must be returned in same order as requested IDs</li>
<li><strong>Per-Request</strong>: Each GraphQL request gets its own DataLoader (no cache between requests)</li>
</ul>
<hr>
<h4 id="advanced-dataloader-features">Advanced DataLoader Features</h4>
<p><strong>Feature 1: Caching</strong></p>
<p>DataLoader can cache results within a single request:</p>
<pre><code class="language-java">
DataLoader&lt;Long, AuthorEntity&gt; authorLoader = DataLoader.newDataLoader(
    batchFunction,
    DataLoaderOptions.newOptions()
        .setCachingEnabled(true)  // Enable caching
);
</code></pre>
<p><strong>When This Helps:</strong></p>
<pre><code class="language-graphql">
query {
  book1: book(id: 1) {
    author { name }  # Loads author 5
  }
  book2: book(id: 2) {
    author { name }  # Also author 5 - uses cache! No 2nd query
  }
}
</code></pre>
<p><strong>Feature 2: Custom Cache Key</strong></p>
<pre><code class="language-java">
DataLoader&lt;Long, AuthorEntity&gt; authorLoader = DataLoader.newDataLoader(
    batchFunction,
    DataLoaderOptions.newOptions()
        .setCacheKeyFunction(id -&gt; &quot;author:&quot; + id)
);
</code></pre>
<p><strong>Feature 3: Max Batch Size</strong></p>
<p>Prevent batches from getting too large:</p>
<pre><code class="language-java">
DataLoader&lt;Long, AuthorEntity&gt; authorLoader = DataLoader.newDataLoader(
    batchFunction,
    DataLoaderOptions.newOptions()
        .setMaxBatchSize(100)  // Max 100 IDs per batch
);
</code></pre>
<p>If you request 250 authors, it will make 3 batches:</p>
<ul>
<li>Batch 1: IDs 1-100</li>
<li>Batch 2: IDs 101-200</li>
<li>Batch 3: IDs 201-250</li>
</ul>
<hr>
<h4 id="creating-a-reusable-dataloader-class">Creating a Reusable DataLoader Class</h4>
<p>For better organization:</p>
<pre><code class="language-java">
package org.acme.dataloader;

import org.dataloader.DataLoader;
import org.dataloader.DataLoaderOptions;
import org.acme.entity.AuthorEntity;
import org.acme.repository.AuthorRepository;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

/**
 * Dedicated class for Author DataLoader
 * Encapsulates all batching logic
 */
public class AuthorDataLoader {
    
    private final AuthorRepository authorRepository;
    private final DataLoader&lt;Long, AuthorEntity&gt; loader;
    
    public AuthorDataLoader(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
        
        // Create the DataLoader with options
        this.loader = DataLoader.newDataLoader(
            this::batchLoad,
            DataLoaderOptions.newOptions()
                .setCachingEnabled(true)
                .setMaxBatchSize(100)
                .setBatchLoaderContextProvider(() -&gt; &quot;AuthorLoader&quot;)
        );
    }
    
    /**
     * The batch loading function
     * Called when DataLoader decides to execute
     */
    private CompletableFuture&lt;List&lt;AuthorEntity&gt;&gt; batchLoad(List&lt;Long&gt; authorIds) {
        return CompletableFuture.supplyAsync(() -&gt; {
            
            System.out.println(&quot;📦 Batching &quot; + authorIds.size() + &quot; author requests&quot;);
            
            // Fetch from database
            List&lt;AuthorEntity&gt; authors = authorRepository.findByIds(authorIds);
            
            // CRITICAL: Return in same order as requested IDs
            return authorIds.stream()
                .map(id -&gt; authors.stream()
                    .filter(a -&gt; a.id.equals(id))
                    .findFirst()
                    .orElse(null))
                .collect(Collectors.toList());
        });
    }
    
    /**
     * Load a single author (will be batched)
     */
    public CompletableFuture&lt;AuthorEntity&gt; load(Long id) {
        return loader.load(id);
    }
    
    /**
     * Load multiple authors (will be batched)
     */
    public CompletableFuture&lt;List&lt;AuthorEntity&gt;&gt; loadMany(List&lt;Long&gt; ids) {
        return loader.loadMany(ids);
    }
    
    /**
     * Clear the cache for a specific author
     */
    public void clear(Long id) {
        loader.clear(id);
    }
    
    /**
     * Clear all cached authors
     */
    public void clearAll() {
        loader.clearAll();
    }
}
</code></pre>
<hr>
<h4 id="performance-comparison">Performance Comparison</h4>
<p><strong>Scenario: Fetch 100 books with their authors</strong></p>
<pre><code class="language-">
WITHOUT DataLoader:
┌─────────────────────────────────────┐
│ Query 1: Get 100 books              │  10ms
│ Query 2: Get author for book 1      │  10ms
│ Query 3: Get author for book 2      │  10ms
│ Query 4: Get author for book 3      │  10ms
│ ... 97 more queries ...             │  970ms
│ Query 101: Get author for book 100  │  10ms
├─────────────────────────────────────┤
│ Total: 101 queries                  │
│ Total Time: ~1010ms                 │
└─────────────────────────────────────┘

WITH DataLoader:
┌─────────────────────────────────────┐
│ Query 1: Get 100 books              │  10ms
│ Query 2: Get all 100 authors (IN)   │  15ms
├─────────────────────────────────────┤
│ Total: 2 queries                    │
│ Total Time: ~25ms                   │
│ Speed Improvement: 40x faster! ⚡    │
└─────────────────────────────────────┘
</code></pre>
<p><strong>When DataLoader Makes the Biggest Difference:</strong></p>
<pre><code class="language-">
✅ Use DataLoader when:
- Fetching related data (authors for books, users for posts)
- Working with nested GraphQL queries
- Large lists with relationships
- Mobile apps (network latency matters)

⚠️ May not need DataLoader when:
- Simple queries without relationships
- Already using database JOINs
- Very small datasets (&lt;10 items)
</code></pre>
<p>DataLoader is essential for production GraphQL APIs - it can turn a slow, unusable API into a fast, responsive one!</p>
<pre><code class="language-java">
package org.acme.dataloader;

import io.smallrye.graphql.api.Context;
import org.dataloader.DataLoader;
import org.dataloader.DataLoaderRegistry;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@ApplicationScoped
public class DataLoaderRegistryProducer {
    
    @Inject
    AuthorRepository authorRepository;
    
    public DataLoaderRegistry createDataLoaderRegistry() {
        DataLoaderRegistry registry = new DataLoaderRegistry();
        
        // Author DataLoader
        DataLoader&lt;Long, Author&gt; authorLoader = DataLoader.newDataLoader(
            authorIds -&gt; CompletableFuture.supplyAsync(() -&gt; {
                List&lt;Author&gt; authors = authorRepository.findByIds(authorIds);
                return authorIds.stream()
                    .map(id -&gt; authors.stream()
                        .filter(a -&gt; a.getId().equals(id))
                        .findFirst()
                        .orElse(null))
                    .collect(Collectors.toList());
            })
        );
        
        registry.register(&quot;author&quot;, authorLoader);
        return registry;
    }
}
</code></pre>
<pre><code class="language-java">
@GraphQLApi
public class BookResource {
    
    @Inject
    Context context;
    
    @Query
    public List&lt;Book&gt; books() {
        return bookRepository.listAll();
    }
    
    // This will batch load authors
    public CompletableFuture&lt;Author&gt; author(@Source Book book) {
        DataLoader&lt;Long, Author&gt; authorLoader = 
            context.getDataLoader(&quot;author&quot;);
        return authorLoader.load(book.getAuthorId());
    }
}
</code></pre>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         DataLoader Batching Flow                │
└─────────────────────────────────────────────────┘

Without DataLoader:
  books { author { name } }
  
  → Get Books [1, 2, 3]
  → Get Author for Book 1  (Query 1)
  → Get Author for Book 2  (Query 2)
  → Get Author for Book 3  (Query 3)
  
  Total: 4 queries (N+1 problem)

With DataLoader:
  books { author { name } }
  
  → Get Books [1, 2, 3]
  → Batch: Get Authors [1, 2, 3]  (Single Query)
  
  Total: 2 queries ⚡
</code></pre>
<h3 id="custom-scalars">Custom Scalars</h3>
<pre><code class="language-java">
package org.acme.scalar;

import graphql.language.StringValue;
import graphql.schema.*;
import org.eclipse.microprofile.graphql.Description;

@Description(&quot;Custom scalar for email addresses&quot;)
public class EmailScalar implements Coercing&lt;String, String&gt; {
    
    private static final String EMAIL_REGEX = 
        &quot;^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$&quot;;
    
    @Override
    public String serialize(Object dataFetcherResult) {
        return dataFetcherResult.toString();
    }
    
    @Override
    public String parseValue(Object input) {
        String email = input.toString();
        if (!email.matches(EMAIL_REGEX)) {
            throw new CoercingParseValueException(&quot;Invalid email format&quot;);
        }
        return email;
    }
    
    @Override
    public String parseLiteral(Object input) {
        if (input instanceof StringValue) {
            String email = ((StringValue) input).getValue();
            if (!email.matches(EMAIL_REGEX)) {
                throw new CoercingParseLiteralException(&quot;Invalid email format&quot;);
            }
            return email;
        }
        throw new CoercingParseLiteralException(&quot;Expected string value&quot;);
    }
}
</code></pre>
<p><strong>Register Scalar:</strong></p>
<pre><code class="language-properties">
quarkus.smallrye-graphql.scalar.Email=org.acme.scalar.EmailScalar
</code></pre>
<p><strong>Usage:</strong></p>
<pre><code class="language-java">
public class Author {
    private Long id;
    private String name;
    
    @Type(EmailScalar.class)
    private String email;
}
</code></pre>
<h3 id="subscriptions-real-time-updates-with-websockets">Subscriptions (Real-Time Updates with WebSockets)</h3>
<p><strong>What are Subscriptions?</strong></p>
<p>Subscriptions allow your client to receive real-time updates from the server when data changes. Instead of repeatedly asking &quot;Any updates?&quot;, the server pushes updates to you automatically.</p>
<p><strong>Real-World Analogy:</strong></p>
<p><strong>Traditional Queries (Polling):</strong></p>
<pre><code class="language-">
You: &quot;Are we there yet?&quot;
Parent: &quot;No&quot;
*2 minutes later*
You: &quot;Are we there yet?&quot;
Parent: &quot;No&quot;
*2 minutes later*
You: &quot;Are we there yet?&quot;
Parent: &quot;Yes!&quot;
</code></pre>
<p><strong>Subscriptions (Push Notifications):</strong></p>
<pre><code class="language-">
You: &quot;Let me know when we arrive&quot;
Parent: &quot;OK&quot;
*You do something else*
*Car arrives*
Parent: &quot;We&#x27;re here!&quot;
</code></pre>
<p><strong>Use Cases for Subscriptions:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│      When to Use Subscriptions                  │
├─────────────────────────────────────────────────┤
│                                                 │
│  Perfect For:                                   │
│  ✅ Chat applications                           │
│  ✅ Live notifications                          │
│  ✅ Real-time dashboards                        │
│  ✅ Collaborative editing                       │
│  ✅ Stock tickers                               │
│  ✅ Live sports scores                          │
│  ✅ Online game state                           │
│  ✅ IoT device updates                          │
│                                                 │
│  Not Good For:                                  │
│  ❌ Rarely changing data                        │
│  ❌ Historical data queries                     │
│  ❌ One-time data fetches                       │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<p>For detailed implementation and advanced subscription patterns, please refer to the full GraphQL documentation. Subscriptions use WebSockets to maintain persistent connections between client and server.</p>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-websockets&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-properties">
# WebSocket configuration
quarkus.http.cors.methods=GET,POST,PUT,DELETE,OPTIONS
quarkus.http.cors.headers=accept,authorization,content-type,x-requested-with
quarkus.http.cors.access-control-allow-credentials=true
</code></pre>
<pre><code class="language-java">
package org.acme.subscription;

import io.smallrye.mutiny.Multi;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Mutation;
import org.eclipse.microprofile.graphql.Name;
import org.eclipse.microprofile.graphql.Subscription;

import jakarta.enterprise.context.ApplicationScoped;
import io.smallrye.mutiny.operators.multi.processors.BroadcastProcessor;

@GraphQLApi
@ApplicationScoped
public class BookSubscription {
    
    private final BroadcastProcessor&lt;Book&gt; bookCreatedBroadcaster = 
        BroadcastProcessor.create();
    
    @Subscription
    public Multi&lt;Book&gt; bookCreated() {
        return bookCreatedBroadcaster;
    }
    
    @Mutation
    public Book createBook(@Name(&quot;input&quot;) BookInput input) {
        Book book = new Book();
        // Create book logic...
        
        // Broadcast to subscribers
        bookCreatedBroadcaster.onNext(book);
        
        return book;
    }
}
</code></pre>
<p><strong>Advanced Subscription with Filters:</strong></p>
<pre><code class="language-java">
@Subscription
public Multi&lt;Book&gt; booksByAuthor(@Name(&quot;authorId&quot;) Long authorId) {
    return bookCreatedBroadcaster
        .filter(book -&gt; book.getAuthorId().equals(authorId));
}

@Subscription
public Multi&lt;Book&gt; expensiveBooks(@Name(&quot;minPrice&quot;) Double minPrice) {
    return bookCreatedBroadcaster
        .filter(book -&gt; book.getPrice() &gt;= minPrice);
}
</code></pre>
<p><strong>Client Subscription (JavaScript):</strong></p>
<pre><code class="language-javascript">
const subscription = &#96;
  subscription {
    bookCreated {
      id
      title
      author
      price
    }
  }
&#96;;

const client = new SubscriptionClient(&#x27;ws://localhost:8080/graphql&#x27;, {
  reconnect: true
});

client.request({ query: subscription }).subscribe({
  next(data) {
    console.log(&#x27;New book:&#x27;, data.bookCreated);
  }
});
</code></pre>
<h3 id="federation-support">Federation Support</h3>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;com.apollographql.federation&lt;/groupId&gt;
    &lt;artifactId&gt;federation-graphql-java-support&lt;/artifactId&gt;
    &lt;version&gt;2.0.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-java">
package org.acme.federation;

import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;

@GraphQLApi
public class BookFederationResource {
    
    @Query
    @Description(&quot;Get book by ID for federation&quot;)
    public Book _entities(@Name(&quot;representations&quot;) List&lt;Map&lt;String, Object&gt;&gt; representations) {
        // Handle federated queries
        for (Map&lt;String, Object&gt; rep : representations) {
            if (&quot;Book&quot;.equals(rep.get(&quot;__typename&quot;))) {
                Long id = Long.valueOf(rep.get(&quot;id&quot;).toString());
                return bookRepository.findById(id);
            }
        }
        return null;
    }
}
</code></pre>
<h3 id="performance-optimization">Performance Optimization</h3>
<h4 id="query-complexity-limiting">Query Complexity Limiting</h4>
<pre><code class="language-java">
package org.acme.complexity;

import graphql.analysis.MaxQueryComplexityInstrumentation;
import graphql.analysis.MaxQueryDepthInstrumentation;
import io.quarkus.runtime.Startup;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Produces;

@ApplicationScoped
public class GraphQLInstrumentationConfig {
    
    @Produces
    @Startup
    public MaxQueryComplexityInstrumentation maxComplexity() {
        return new MaxQueryComplexityInstrumentation(100);
    }
    
    @Produces
    @Startup
    public MaxQueryDepthInstrumentation maxDepth() {
        return new MaxQueryDepthInstrumentation(10);
    }
}
</code></pre>
<h4 id="field-level-caching">Field-Level Caching</h4>
<pre><code class="language-java">
package org.acme.cache;

import io.quarkus.cache.CacheResult;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;

@GraphQLApi
public class CachedBookResource {
    
    @Query
    @CacheResult(cacheName = &quot;books&quot;)
    public List&lt;Book&gt; allBooks() {
        // This result will be cached
        return bookRepository.listAll();
    }
    
    @Query
    @CacheResult(cacheName = &quot;book-by-id&quot;)
    public Book bookById(@Name(&quot;id&quot;) Long id) {
        return bookRepository.findById(id);
    }
}
</code></pre>
<pre><code class="language-properties">
# Cache configuration
quarkus.cache.caffeine.books.maximum-size=1000
quarkus.cache.caffeine.books.expire-after-write=10M

quarkus.cache.caffeine.book-by-id.maximum-size=500
quarkus.cache.caffeine.book-by-id.expire-after-write=5M
</code></pre>
<h4 id="query-result-caching">Query Result Caching</h4>
<pre><code class="language-java">
@GraphQLApi
public class BookResource {
    
    @Query
    @CacheControl(maxAge = 3600) // Cache for 1 hour
    public List&lt;Book&gt; popularBooks() {
        return bookRepository.findPopular();
    }
    
    @Query
    @CacheControl(maxAge = 300) // Cache for 5 minutes
    public Book bookById(@Name(&quot;id&quot;) Long id) {
        return bookRepository.findById(id);
    }
}
</code></pre>
<h3 id="testing-graphql-apis">Testing GraphQL APIs</h3>
<h4 id="rest-assured-testing">REST Assured Testing</h4>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-junit5&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.rest-assured&lt;/groupId&gt;
    &lt;artifactId&gt;rest-assured&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-java">
package org.acme.test;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;

@QuarkusTest
public class BookResourceTest {
    
    @Test
    public void testGetAllBooks() {
        String query = &quot;&quot;&quot;
            {
                allBooks {
                    id
                    title
                    author
                }
            }
        &quot;&quot;&quot;;
        
        given()
            .contentType(&quot;application/json&quot;)
            .body(&quot;&quot;&quot;
                {&quot;query&quot;: &quot;%s&quot;}
            &quot;&quot;&quot;.formatted(query.replace(&quot;\n&quot;, &quot; &quot;)))
        .when()
            .post(&quot;/graphql&quot;)
        .then()
            .statusCode(200)
            .body(&quot;data.allBooks&quot;, notNullValue())
            .body(&quot;data.allBooks.size()&quot;, is(2));
    }
    
    @Test
    public void testCreateBook() {
        String mutation = &quot;&quot;&quot;
            mutation {
                createBook(input: {
                    title: &quot;Test Book&quot;
                    authorId: 1
                    pages: 200
                    price: 29.99
                }) {
                    id
                    title
                }
            }
        &quot;&quot;&quot;;
        
        given()
            .contentType(&quot;application/json&quot;)
            .body(&quot;&quot;&quot;
                {&quot;query&quot;: &quot;%s&quot;}
            &quot;&quot;&quot;.formatted(mutation.replace(&quot;\n&quot;, &quot; &quot;)))
        .when()
            .post(&quot;/graphql&quot;)
        .then()
            .statusCode(200)
            .body(&quot;data.createBook.id&quot;, notNullValue())
            .body(&quot;data.createBook.title&quot;, is(&quot;Test Book&quot;));
    }
    
    @Test
    public void testBookNotFound() {
        String query = &quot;&quot;&quot;
            {
                bookById(id: 999) {
                    id
                    title
                }
            }
        &quot;&quot;&quot;;
        
        given()
            .contentType(&quot;application/json&quot;)
            .body(&quot;&quot;&quot;
                {&quot;query&quot;: &quot;%s&quot;}
            &quot;&quot;&quot;.formatted(query.replace(&quot;\n&quot;, &quot; &quot;)))
        .when()
            .post(&quot;/graphql&quot;)
        .then()
            .statusCode(200)
            .body(&quot;errors&quot;, notNullValue())
            .body(&quot;errors[0].message&quot;, is(&quot;Book with id 999 not found&quot;));
    }
}
</code></pre>
<h4 id="integration-testing-with-testcontainers">Integration Testing with TestContainers</h4>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;org.testcontainers&lt;/groupId&gt;
    &lt;artifactId&gt;postgresql&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-java">
package org.acme.test;

import io.quarkus.test.common.QuarkusTestResource;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
import org.testcontainers.containers.PostgreSQLContainer;

@QuarkusTest
@QuarkusTestResource(DatabaseResource.class)
public class BookIntegrationTest {
    
    @Test
    public void testFullWorkflow() {
        // Test complete GraphQL workflow
    }
}

class DatabaseResource implements QuarkusTestResourceLifecycleManager {
    
    private PostgreSQLContainer&lt;?&gt; postgres;
    
    @Override
    public Map&lt;String, String&gt; start() {
        postgres = new PostgreSQLContainer&lt;&gt;(&quot;postgres:14&quot;)
            .withDatabaseName(&quot;testdb&quot;)
            .withUsername(&quot;test&quot;)
            .withPassword(&quot;test&quot;);
        postgres.start();
        
        return Map.of(
            &quot;quarkus.datasource.jdbc.url&quot;, postgres.getJdbcUrl(),
            &quot;quarkus.datasource.username&quot;, postgres.getUsername(),
            &quot;quarkus.datasource.password&quot;, postgres.getPassword()
        );
    }
    
    @Override
    public void stop() {
        if (postgres != null) {
            postgres.stop();
        }
    }
}
</code></pre>
<h3 id="native-compilation">Native Compilation</h3>
<pre><code class="language-properties">
# Native build configuration
quarkus.native.additional-build-args=\
    --initialize-at-run-time=graphql.schema.idl.SchemaParser,\
    --initialize-at-build-time=graphql.Scalars

# Resources to include
quarkus.native.resources.includes=META-INF/resources/**,\
    META-INF/services/**

# Reflection configuration (automatic with Quarkus)
</code></pre>
<p><strong>Build Native Image:</strong></p>
<pre><code class="language-bash">
# Maven
./mvnw package -Pnative

# Gradle
./gradlew build -Dquarkus.package.type=native

# With container build
./mvnw package -Pnative -Dquarkus.native.container-build=true
</code></pre>
<h3 id="monitoring-and-metrics">Monitoring and Metrics</h3>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-micrometer-registry-prometheus&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-smallrye-health&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-properties">
# Metrics configuration
quarkus.micrometer.enabled=true
quarkus.micrometer.binder.graphql.enabled=true
quarkus.micrometer.export.prometheus.path=/metrics

# Health checks
quarkus.smallrye-health.root-path=/health
</code></pre>
<p><strong>Custom Metrics:</strong></p>
<pre><code class="language-java">
package org.acme.metrics;

import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import jakarta.inject.Inject;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;

@GraphQLApi
public class MetricBookResource {
    
    @Inject
    MeterRegistry registry;
    
    @Query
    public List&lt;Book&gt; allBooks() {
        Timer.Sample sample = Timer.start(registry);
        
        try {
            List&lt;Book&gt; books = bookRepository.listAll();
            
            registry.counter(&quot;graphql.query.books.count&quot;).increment();
            registry.gauge(&quot;graphql.books.total&quot;, books.size());
            
            return books;
        } finally {
            sample.stop(registry.timer(&quot;graphql.query.books.duration&quot;));
        }
    }
}
</code></pre>
<p><strong>Health Check:</strong></p>
<pre><code class="language-java">
package org.acme.health;

import org.eclipse.microprofile.health.HealthCheck;
import org.eclipse.microprofile.health.HealthCheckResponse;
import org.eclipse.microprofile.health.Readiness;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

@Readiness
@ApplicationScoped
public class DatabaseHealthCheck implements HealthCheck {
    
    @Inject
    BookRepository bookRepository;
    
    @Override
    public HealthCheckResponse call() {
        try {
            bookRepository.count();
            return HealthCheckResponse.up(&quot;Database connection healthy&quot;);
        } catch (Exception e) {
            return HealthCheckResponse.down(&quot;Database connection failed&quot;);
        }
    }
}
</code></pre>
<h3 id="openapi-integration">OpenAPI Integration</h3>
<pre><code class="language-xml">
&lt;dependency&gt;
    &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
    &lt;artifactId&gt;quarkus-smallrye-openapi&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre>
<pre><code class="language-properties">
# OpenAPI configuration
quarkus.smallrye-openapi.path=/openapi
quarkus.swagger-ui.always-include=true
quarkus.swagger-ui.path=/swagger-ui
</code></pre>
<h3 id="production-architecture">Production Architecture</h3>
<pre><code class="language-">
┌──────────────────────────────────────────────────────┐
│      Quarkus GraphQL Production Stack                │
└──────────────────────────────────────────────────────┘

                    ┌─────────────┐
                    │   Clients   │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │     CDN     │
                    │  (Static)   │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │Load Balancer│
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼─────┐      ┌─────▼────┐      ┌─────▼────┐
   │ Quarkus  │      │ Quarkus  │      │ Quarkus  │
   │ Instance │      │ Instance │      │ Instance │
   │  (Pod)   │      │  (Pod)   │      │  (Pod)   │
   └────┬─────┘      └─────┬────┘      └─────┬────┘
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    ┌──────▼──────┐
                    │    Redis    │
                    │   (Cache)   │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼─────┐      ┌─────▼────┐      ┌─────▼────┐
   │PostgreSQL│      │ Kafka    │      │  S3      │
   │  (Main)  │      │(Events)  │      │(Storage) │
   └──────────┘      └──────────┘      └──────────┘
        │                  │
        │                  │
   ┌────▼─────┐      ┌─────▼────┐
   │Prometheus│      │  Jaeger  │
   │(Metrics) │      │ (Tracing)│
   └──────────┘      └──────────┘
</code></pre>
<h3 id="best-practices">Best Practices</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│     Quarkus GraphQL Best Practices              │
├─────────────────────────────────────────────────┤
│                                                 │
│  Schema Design:                                 │
│  ✓ Use @Name for clear field naming            │
│  ✓ Add @Description to all types/fields        │
│  ✓ Use Input types for mutations                │
│  ✓ Leverage interfaces for shared fields       │
│  ✓ Keep mutations granular and specific        │
│                                                 │
│  Performance:                                   │
│  ✓ Implement DataLoader for batch loading      │
│  ✓ Use @CacheResult for expensive queries      │
│  ✓ Enable query complexity limits              │
│  ✓ Use reactive types (Uni/Multi) when needed  │
│  ✓ Optimize database queries with Panache      │
│                                                 │
│  Security:                                      │
│  ✓ Use @RolesAllowed for authorization         │
│  ✓ Validate all inputs                         │
│  ✓ Implement rate limiting                     │
│  ✓ Use JWT for authentication                  │
│  ✓ Enable CORS properly                        │
│                                                 │
│  Error Handling:                                │
│  ✓ Use GraphQLException for custom errors      │
│  ✓ Provide meaningful error messages           │
│  ✓ Include error extensions                    │
│  ✓ Log errors for monitoring                   │
│                                                 │
│  Testing:                                       │
│  ✓ Write unit tests for resolvers              │
│  ✓ Integration tests with REST Assured         │
│  ✓ Use TestContainers for DB tests             │
│  ✓ Test error scenarios                        │
│                                                 │
│  Native Compilation:                            │
│  ✓ Test in native mode early                   │
│  ✓ Register reflection hints if needed         │
│  ✓ Use container builds for consistency        │
│                                                 │
│  Monitoring:                                    │
│  ✓ Enable Micrometer metrics                   │
│  ✓ Implement health checks                     │
│  ✓ Use distributed tracing                     │
│  ✓ Monitor query performance                   │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<h3 id="deployment">Deployment</h3>
<h4 id="kubernetes-deployment">Kubernetes Deployment</h4>
<pre><code class="language-yaml">
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: quarkus-graphql
spec:
  replicas: 3
  selector:
    matchLabels:
      app: quarkus-graphql
  template:
    metadata:
      labels:
        app: quarkus-graphql
    spec:
      containers:
      - name: quarkus-graphql
        image: quarkus-graphql:1.0.0
        ports:
        - containerPort: 8080
        env:
        - name: QUARKUS_DATASOURCE_JDBC_URL
          value: jdbc:postgresql://postgres:5432/bookdb
        resources:
          requests:
            memory: &quot;128Mi&quot;
            cpu: &quot;100m&quot;
          limits:
            memory: &quot;512Mi&quot;
            cpu: &quot;500m&quot;
        livenessProbe:
          httpGet:
            path: /health/live
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: quarkus-graphql
spec:
  selector:
    app: quarkus-graphql
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer
</code></pre>
<h4 id="docker-build">Docker Build</h4>
<pre><code class="language-dockerfile">
# Dockerfile (JVM mode)
FROM registry.access.redhat.com/ubi8/openjdk-17:1.14

ENV JAVA_OPTS=&quot;-Dquarkus.http.host=0.0.0.0&quot;

COPY --chown=185 target/quarkus-app/lib/ /deployments/lib/
COPY --chown=185 target/quarkus-app/*.jar /deployments/
COPY --chown=185 target/quarkus-app/app/ /deployments/app/
COPY --chown=185 target/quarkus-app/quarkus/ /deployments/quarkus/

EXPOSE 8080
USER 185

ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/deployments/quarkus-run.jar&quot;]
</code></pre>
<pre><code class="language-dockerfile">
# Dockerfile.native (Native mode)
FROM quay.io/quarkus/ubi-quarkus-native-image:22.3-java17 AS build
COPY --chown=quarkus:quarkus . /code
USER quarkus
WORKDIR /code
RUN ./mvnw package -Pnative

FROM quay.io/quarkus/quarkus-micro-image:2.0
COPY --from=build /code/target/*-runner /application
EXPOSE 8080
USER 1001
CMD [&quot;./application&quot;, &quot;-Dquarkus.http.host=0.0.0.0&quot;]
</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>GraphQL in Quarkus provides:</p>
<ul>
<li><strong>Developer Experience</strong> - Annotation-based, auto-generated schema, hot reload</li>
<li><strong>Performance</strong> - Fast startup, low memory, native compilation support</li>
<li><strong>Cloud-Native</strong> - Kubernetes-ready, reactive support, observability</li>
<li><strong>Production-Ready</strong> - Security, caching, monitoring, testing support</li>
<li><strong>Standards-Based</strong> - MicroProfile GraphQL, familiar Java patterns</li>
</ul>
<p><strong>Key Advantages:</strong></p>
<ul>
<li>Supersonic startup times (&lt; 1 second)</li>
<li>Minimal memory footprint (&lt; 100MB)</li>
<li>Native compilation for containers</li>
<li>Excellent developer experience</li>
<li>Full GraphQL feature support</li>
</ul>
<p>Quarkus makes GraphQL development in Java modern, efficient, and enjoyable while maintaining production-grade quality and performance.</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = graphqlQuarkusGuideContentData;
}
