// Graphql Quarkus Guide - Content Data
const graphqlQuarkusGuideContentData = `<h1 id="graphql-in-quarkus-complete-guide">GraphQL in Quarkus: Complete Guide</h1>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#basic-part">Basic Part</a></li>
<li><a href="#intermediate-part">Intermediate Part</a></li>
<li><a href="#advanced-part">Advanced Part</a></li>
</ul>
<hr>
<h2 id="basic-part">Basic Part</h2>
<h3 id="what-is-quarkus">What is Quarkus?</h3>
<p>Quarkus is a Kubernetes-native Java framework tailored for GraalVM and OpenJDK HotSpot. It&#x27;s designed for building cloud-native applications with extremely fast startup times and low memory footprint.</p>
<p><strong>Key Features:</strong></p>
<ul>
<li>Supersonic Subatomic Java (fast startup, low memory)</li>
<li>Developer Joy (live reload, unified configuration)</li>
<li>Container-first design</li>
<li>Native compilation support (GraalVM)</li>
<li>Reactive and imperative programming models</li>
</ul>
<h3 id="graphql-in-quarkus">GraphQL in Quarkus</h3>
<p>Quarkus provides first-class support for GraphQL through SmallRye GraphQL, an implementation of the Eclipse MicroProfile GraphQL specification.</p>
<pre><code class="language-">
┌─────────────────────────────────────────────────┐
│         Quarkus GraphQL Stack                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌───────────────────────────────┐              │
│  │    Your Application Code      │              │
│  └───────────────┬───────────────┘              │
│                  │                              │
│  ┌───────────────▼───────────────┐              │
│  │  MicroProfile GraphQL API     │              │
│  └───────────────┬───────────────┘              │
│                  │                              │
│  ┌───────────────▼───────────────┐              │
│  │    SmallRye GraphQL           │              │
│  └───────────────┬───────────────┘              │
│                  │                              │
│  ┌───────────────▼───────────────┐              │
│  │      GraphQL Java             │              │
│  └───────────────────────────────┘              │
│                                                 │
└─────────────────────────────────────────────────┘
</code></pre>
<h3 id="setting-up-graphql-in-quarkus">Setting Up GraphQL in Quarkus</h3>
<h4 id="maven-dependencies">Maven Dependencies</h4>
<p><strong>pom.xml:</strong></p>
<pre><code class="language-xml">
&lt;dependencies&gt;
    &lt;!-- SmallRye GraphQL --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-smallrye-graphql&lt;/artifactId&gt;
    &lt;/dependency&gt;
    
    &lt;!-- Optional: GraphQL UI --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;io.quarkus&lt;/groupId&gt;
        &lt;artifactId&gt;quarkus-smallrye-graphql-ui&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre>
<h4 id="gradle-dependencies">Gradle Dependencies</h4>
<p><strong>build.gradle:</strong></p>
<pre><code class="language-gradle">
dependencies {
    implementation &#x27;io.quarkus:quarkus-smallrye-graphql&#x27;
    implementation &#x27;io.quarkus:quarkus-smallrye-graphql-ui&#x27;
}
</code></pre>
<h3 id="basic-configuration">Basic Configuration</h3>
<p><strong>application.properties:</strong></p>
<pre><code class="language-properties">
# GraphQL endpoint path (default: /graphql)
quarkus.smallrye-graphql.root-path=/graphql

# Enable GraphQL UI (default: true in dev mode)
quarkus.smallrye-graphql.ui.enable=true
quarkus.smallrye-graphql.ui.root-path=/graphql-ui

# CORS configuration
quarkus.http.cors=true
quarkus.http.cors.origins=http://localhost:3000

# GraphQL specific settings
quarkus.smallrye-graphql.print-data-fetcher-exception=true
quarkus.smallrye-graphql.error-extension-fields=exception,classification
</code></pre>
<h3 id="creating-your-first-graphql-api">Creating Your First GraphQL API</h3>
<h4 id="1-define-a-model">1. Define a Model</h4>
<pre><code class="language-java">
package org.acme.model;

public class Book {
    private Long id;
    private String title;
    private String author;
    private Integer pages;
    private Double price;
    
    // Constructors
    public Book() {}
    
    public Book(Long id, String title, String author, Integer pages, Double price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.price = price;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    
    public Integer getPages() { return pages; }
    public void setPages(Integer pages) { this.pages = pages; }
    
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
}
</code></pre>
<h4 id="2-create-graphql-api-resource">2. Create GraphQL API Resource</h4>
<pre><code class="language-java">
package org.acme.graphql;

import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;
import org.eclipse.microprofile.graphql.Mutation;
import org.eclipse.microprofile.graphql.Name;
import org.acme.model.Book;

import jakarta.enterprise.context.ApplicationScoped;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@GraphQLApi
@ApplicationScoped
public class BookResource {
    
    private List&lt;Book&gt; books = new ArrayList&lt;&gt;();
    private AtomicLong idCounter = new AtomicLong(0);
    
    public BookResource() {
        // Initialize with sample data
        books.add(new Book(idCounter.incrementAndGet(), 
            &quot;Effective Java&quot;, &quot;Joshua Bloch&quot;, 416, 45.99));
        books.add(new Book(idCounter.incrementAndGet(), 
            &quot;Clean Code&quot;, &quot;Robert Martin&quot;, 464, 42.99));
    }
    
    @Query(&quot;allBooks&quot;)
    public List&lt;Book&gt; getAllBooks() {
        return books;
    }
    
    @Query
    public Book bookById(@Name(&quot;id&quot;) Long id) {
        return books.stream()
            .filter(book -&gt; book.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
    
    @Mutation
    public Book addBook(@Name(&quot;title&quot;) String title,
                        @Name(&quot;author&quot;) String author,
                        @Name(&quot;pages&quot;) Integer pages,
                        @Name(&quot;price&quot;) Double price) {
        Book book = new Book(idCounter.incrementAndGet(), title, author, pages, price);
        books.add(book);
        return book;
    }
    
    @Mutation
    public Boolean deleteBook(@Name(&quot;id&quot;) Long id) {
        return books.removeIf(book -&gt; book.getId().equals(id));
    }
}
</code></pre>
<h3 id="generated-graphql-schema">Generated GraphQL Schema</h3>
<p>The above code automatically generates this schema:</p>
<pre><code class="language-graphql">
type Book {
  id: BigInteger!
  title: String!
  author: String!
  pages: Int
  price: Float
}

type Query {
  allBooks: [Book!]
  bookById(id: BigInteger!): Book
}

type Mutation {
  addBook(title: String!, author: String!, pages: Int, price: Float): Book!
  deleteBook(id: BigInteger!): Boolean!
}
</code></pre>
<h3 id="testing-your-api">Testing Your API</h3>
<h4 id="using-graphql-ui">Using GraphQL UI</h4>
<p>Access the GraphQL UI at: <code>http://localhost:8080/graphql-ui</code></p>
<p><strong>Query Example:</strong></p>
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
<p><strong>Mutation Example:</strong></p>
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
  }
}
</code></pre>
<h4 id="using-curl">Using cURL</h4>
<pre><code class="language-bash">
# Query
curl -X POST http://localhost:8080/graphql \
  -H &quot;Content-Type: application/json&quot; \
  -d &#x27;{&quot;query&quot;: &quot;{ allBooks { id title author } }&quot;}&#x27;

# Mutation
curl -X POST http://localhost:8080/graphql \
  -H &quot;Content-Type: application/json&quot; \
  -d &#x27;{&quot;query&quot;: &quot;mutation { addBook(title: \&quot;Test Book\&quot;, author: \&quot;Test Author\&quot;, pages: 100, price: 29.99) { id title } }&quot;}&#x27;
</code></pre>
<h3 id="request-flow-in-quarkus">Request Flow in Quarkus</h3>
<pre><code class="language-">
┌──────────────────────────────────────────────────┐
│        GraphQL Request Flow in Quarkus          │
└──────────────────────────────────────────────────┘

Client
  │
  │ POST /graphql
  │ { &quot;query&quot;: &quot;...&quot; }
  │
  ▼
┌─────────────────┐
│  Quarkus HTTP   │
│    Handler      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   SmallRye      │
│   GraphQL       │
│   Extension     │
└────────┬────────┘
         │
         ├──► Parse Query
         │
         ├──► Validate Schema
         │
         ├──► Execute
         │
         ▼
┌─────────────────┐
│   @GraphQLApi   │
│    Methods      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Business      │
│     Logic       │
└────────┬────────┘
         │
         ▼
    Response
</code></pre>
<h3 id="microprofile-graphql-annotations">MicroProfile GraphQL Annotations</h3>
<pre><code class="language-java">
import org.eclipse.microprofile.graphql.*;

// Mark a class as GraphQL API
@GraphQLApi

// Define a query operation
@Query
@Query(&quot;customName&quot;)

// Define a mutation operation
@Mutation
@Mutation(&quot;customName&quot;)

// Name a parameter
@Name(&quot;paramName&quot;)

// Add description
@Description(&quot;This is a book&quot;)

// Mark field as non-null
@NonNull

// Provide default value
@DefaultValue(&quot;10&quot;)

// Ignore field in GraphQL
@Ignore

// Format dates
@DateFormat(&quot;yyyy-MM-dd&quot;)

// Format numbers
@NumberFormat(&quot;000.00&quot;)
</code></pre>
<hr>
<h2 id="intermediate-part">Intermediate Part</h2>
<h3 id="complex-type-relationships">Complex Type Relationships</h3>
<h4 id="one-to-many-relationship">One-to-Many Relationship</h4>
<pre><code class="language-java">
// Author.java
package org.acme.model;

import java.util.List;

public class Author {
    private Long id;
    private String name;
    private String email;
    private List&lt;Book&gt; books;
    
    // Constructors, getters, setters
    public Author() {}
    
    public Author(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    // Getters and setters...
}

// Book.java (updated)
public class Book {
    private Long id;
    private String title;
    private Long authorId;
    private Integer pages;
    private Double price;
    
    // Getters and setters...
}
</code></pre>
<pre><code class="language-java">
// AuthorResource.java
@GraphQLApi
@ApplicationScoped
public class AuthorResource {
    
    @Inject
    BookService bookService;
    
    private List&lt;Author&gt; authors = new ArrayList&lt;&gt;();
    
    @Query
    public List&lt;Author&gt; allAuthors() {
        return authors;
    }
    
    @Query
    public Author authorById(@Name(&quot;id&quot;) Long id) {
        return authors.stream()
            .filter(a -&gt; a.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
    
    // Field resolver for books
    public List&lt;Book&gt; books(@Source Author author) {
        return bookService.getBooksByAuthorId(author.getId());
    }
}
</code></pre>
<p><strong>Generated Schema:</strong></p>
<pre><code class="language-graphql">
type Author {
  id: BigInteger!
  name: String!
  email: String!
  books: [Book!]
}

type Book {
  id: BigInteger!
  title: String!
  authorId: BigInteger!
  pages: Int
  price: Float
}
</code></pre>
<h3 id="input-types">Input Types</h3>
<pre><code class="language-java">
package org.acme.input;

import org.eclipse.microprofile.graphql.Input;
import org.eclipse.microprofile.graphql.Name;

@Input(&quot;BookInput&quot;)
public class BookInput {
    @Name(&quot;title&quot;)
    private String title;
    
    @Name(&quot;authorId&quot;)
    private Long authorId;
    
    @Name(&quot;pages&quot;)
    private Integer pages;
    
    @Name(&quot;price&quot;)
    private Double price;
    
    // Constructors, getters, setters
    public BookInput() {}
    
    // Getters and setters...
}
</code></pre>
<pre><code class="language-java">
@GraphQLApi
public class BookResource {
    
    @Mutation
    public Book createBook(@Name(&quot;input&quot;) BookInput input) {
        Book book = new Book();
        book.setId(idCounter.incrementAndGet());
        book.setTitle(input.getTitle());
        book.setAuthorId(input.getAuthorId());
        book.setPages(input.getPages());
        book.setPrice(input.getPrice());
        books.add(book);
        return book;
    }
}
</code></pre>
<p><strong>Usage:</strong></p>
<pre><code class="language-graphql">
mutation {
  createBook(input: {
    title: &quot;New Book&quot;
    authorId: 1
    pages: 300
    price: 39.99
  }) {
    id
    title
  }
}
</code></pre>
<h3 id="interfaces-and-unions">Interfaces and Unions</h3>
<h4 id="interface-example">Interface Example</h4>
<pre><code class="language-java">
// Node.java
package org.acme.model;

import org.eclipse.microprofile.graphql.Interface;

@Interface
public interface Node {
    Long getId();
    String getCreatedAt();
}

// Book.java (implements Node)
public class Book implements Node {
    private Long id;
    private String title;
    private String createdAt;
    
    @Override
    public Long getId() { return id; }
    
    @Override
    public String getCreatedAt() { return createdAt; }
    
    // Other fields and methods...
}

// Author.java (implements Node)
public class Author implements Node {
    private Long id;
    private String name;
    private String createdAt;
    
    @Override
    public Long getId() { return id; }
    
    @Override
    public String getCreatedAt() { return createdAt; }
    
    // Other fields and methods...
}
</code></pre>
<h4 id="union-example">Union Example</h4>
<pre><code class="language-java">
package org.acme.model;

import org.eclipse.microprofile.graphql.Union;

@Union
public interface SearchResult {
    // Marker interface for union types
}

// Book implements SearchResult
public class Book implements SearchResult {
    // Fields...
}

// Author implements SearchResult
public class Author implements SearchResult {
    // Fields...
}
</code></pre>
<pre><code class="language-java">
@GraphQLApi
public class SearchResource {
    
    @Inject
    BookService bookService;
    
    @Inject
    AuthorService authorService;
    
    @Query
    public List&lt;SearchResult&gt; search(@Name(&quot;query&quot;) String query) {
        List&lt;SearchResult&gt; results = new ArrayList&lt;&gt;();
        results.addAll(bookService.searchBooks(query));
        results.addAll(authorService.searchAuthors(query));
        return results;
    }
}
</code></pre>
<p><strong>Query with fragments:</strong></p>
<pre><code class="language-graphql">
query {
  search(query: &quot;Java&quot;) {
    ... on Book {
      id
      title
      price
    }
    ... on Author {
      id
      name
      email
    }
  }
}
</code></pre>
<h3 id="error-handling">Error Handling</h3>
<h4 id="custom-exceptions">Custom Exceptions</h4>
<pre><code class="language-java">
package org.acme.exception;

import org.eclipse.microprofile.graphql.GraphQLException;

public class BookNotFoundException extends GraphQLException {
    public BookNotFoundException(Long id) {
        super(&quot;Book with id &quot; + id + &quot; not found&quot;, 
              GraphQLException.ExceptionType.DataFetchingException);
    }
}

public class InvalidInputException extends GraphQLException {
    public InvalidInputException(String message) {
        super(message, GraphQLException.ExceptionType.ValidationException);
    }
}
</code></pre>
<pre><code class="language-java">
@GraphQLApi
public class BookResource {
    
    @Query
    public Book bookById(@Name(&quot;id&quot;) Long id) {
        return books.stream()
            .filter(book -&gt; book.getId().equals(id))
            .findFirst()
            .orElseThrow(() -&gt; new BookNotFoundException(id));
    }
    
    @Mutation
    public Book addBook(@Name(&quot;input&quot;) BookInput input) {
        if (input.getTitle() == null || input.getTitle().isEmpty()) {
            throw new InvalidInputException(&quot;Title cannot be empty&quot;);
        }
        
        if (input.getPrice() != null &amp;&amp; input.getPrice() &lt; 0) {
            throw new InvalidInputException(&quot;Price cannot be negative&quot;);
        }
        
        // Create book...
    }
}
</code></pre>
<h4 id="error-response-format">Error Response Format</h4>
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
      &quot;locations&quot;: [{&quot;line&quot;: 2, &quot;column&quot;: 3}]
    }
  ],
  &quot;data&quot;: {
    &quot;bookById&quot;: null
  }
}
</code></pre>
<h3 id="data-fetching-with-panache">Data Fetching with Panache</h3>
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
<h3 id="pagination">Pagination</h3>
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
<h3 id="authentication-and-security">Authentication and Security</h3>
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
<h3 id="dataloader-pattern-batch-loading">DataLoader Pattern (Batch Loading)</h3>
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
<h3 id="subscriptions-websocket">Subscriptions (WebSocket)</h3>
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
const subscription = `
  subscription {
    bookCreated {
      id
      title
      author
      price
    }
  }
`;

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
