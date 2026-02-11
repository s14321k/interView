// Hibernate - Content Data
const hibernateContentData = `<h1 id="hibernate-concepts-explained">Hibernate Concepts Explained</h1>
<details open>
<summary><strong>1. Eager vs Lazy Loading</strong></summary>
<h3 id="what-is-it">What is it?</h3>
<ul>
<li><strong>Lazy Loading:</strong> Delay fetching related entities until they are actually accessed.</li>
<li><strong>Eager Loading:</strong> Fetch related entities immediately with the parent entity.</li>
</ul>
<h3 id="why-use">Why use?</h3>
<ul>
<li>Lazy loading improves performance when related data is not always needed.</li>
<li>Eager loading is useful when you always need related entities.</li>
</ul>
<hr>
<table>
<thead><tr>
<th>Feature</th>
<th>Lazy Loading</th>
<th>Eager Loading</th>
</tr></thead><tbody>
<tr>
<td>When data loads</td>
<td>On first access to related entity</td>
<td>Immediately with parent entity</td>
</tr>
<tr>
<td>Default usage</td>
<td><code>@OneToMany</code>, <code>@ManyToMany</code> (lazy by default)</td>
<td><code>@OneToOne</code>, <code>@ManyToOne</code> (eager by default)</td>
</tr>
<tr>
<td>Annotation syntax</td>
<td><code>fetch = FetchType.LAZY</code></td>
<td><code>fetch = FetchType.EAGER</code></td>
</tr>
<tr>
<td>Performance</td>
<td>Faster initial load, but possible N+1 queries</td>
<td>Slower initial load, fewer queries</td>
</tr>
<tr>
<td>Use case</td>
<td>Large collections, optional relations</td>
<td>Small relations always required</td>
</tr>
</tbody></table>
<hr>
<h3 id="example">Example:</h3>
<pre><code class="language-java">
@OneToMany(fetch = FetchType.LAZY)
private Set&lt;Order&gt; orders;
</code></pre>
</details>
<hr>
<details open>
<summary><strong>2. SessionFactory</strong></summary>
<ul>
<li>Responsible for creating Hibernate <code>Session</code> objects.</li>
<li>Thread-safe and heavy-weight, usually one per application/database.</li>
<li>Holds metadata and configuration of ORM mapping.</li>
<li>Use at app startup, keep for the app lifecycle.</li>
<li>Sessions created by SessionFactory are used to perform DB operations (<code>save</code>, <code>update</code>, <code>delete</code>).</li>
</ul>
<hr>
<pre><code class="language-java">
SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
Session session = sessionFactory.openSession();
</code></pre>
</details>
<hr>
<details open>
<summary><strong>3. Data Connection Setup and Configuration</strong></summary>
<ul>
<li>Configure <code>hibernate.cfg.xml</code> or <code>application.properties</code> with DB URL, username, password, dialect.</li>
<li>Example properties for Spring Boot:</li>
</ul>
<pre><code class="language-properties">
spring.datasource.url=jdbc:mysql://localhost:3306/dbname
spring.datasource.username=root
spring.datasource.password=pass
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
</code></pre>
<ul>
<li>Hibernate uses these configs to establish DB connection and manage sessions.</li>
</ul>
</details>
<hr>
<details open>
<summary><strong>4. Stored Procedures vs Prepared Statements</strong></summary>
<table>
<thead><tr>
<th>Feature</th>
<th>PreparedStatement</th>
<th>Stored Procedure</th>
</tr></thead><tbody>
<tr>
<td>Definition</td>
<td>Precompiled parameterized SQL query</td>
<td>Precompiled SQL logic stored in DB</td>
</tr>
<tr>
<td>Use case</td>
<td>Dynamic queries with parameters</td>
<td>Complex operations, multiple queries</td>
</tr>
<tr>
<td>Security</td>
<td>Prevents SQL injection by parameterization</td>
<td>Can enhance security via controlled access</td>
</tr>
<tr>
<td>Performance</td>
<td>Good for repeated queries</td>
<td>Optimized execution in DB engine</td>
</tr>
<tr>
<td>Portability</td>
<td>Portable across DBs</td>
<td>Often DB-specific syntax</td>
</tr>
<tr>
<td>Java usage</td>
<td><code>Connection.prepareStatement(sql)</code></td>
<td><code>Connection.prepareCall(&quot;{CALL proc(?)}&quot;)</code></td>
</tr>
</tbody></table>
<hr>
<h3 id="example-preparedstatement">Example PreparedStatement:</h3>
<pre><code class="language-java">
String sql = &quot;SELECT * FROM users WHERE id = ?&quot;;
PreparedStatement ps = connection.prepareStatement(sql);
ps.setInt(1, 100);
ResultSet rs = ps.executeQuery();
</code></pre>
<h3 id="example-stored-procedure-call">Example Stored Procedure call:</h3>
<pre><code class="language-java">
CallableStatement cs = connection.prepareCall(&quot;{CALL GetUser(?)}&quot;);
cs.setInt(1, 100);
ResultSet rs = cs.executeQuery();
</code></pre>
</details>
<hr>
<details open>
<summary><strong>5. Cascading in Hibernate</strong></summary>
<ul>
<li>Cascading controls how operations on a parent entity propagate to its related child entities.</li>
<li>Useful to keep DB consistent without manual handling of each related entity.</li>
</ul>
<hr>
<table>
<thead><tr>
<th>Cascade Type</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td><code>ALL</code></td>
<td>All operations (<code>persist</code>, <code>merge</code>, <code>remove</code>, etc.) cascade to children</td>
</tr>
<tr>
<td><code>PERSIST</code></td>
<td>Persist operation cascades</td>
</tr>
<tr>
<td><code>MERGE</code></td>
<td>Merge operation cascades</td>
</tr>
<tr>
<td><code>REMOVE</code></td>
<td>Remove (delete) operation cascades</td>
</tr>
<tr>
<td><code>DETACH</code></td>
<td>Detach operation cascades</td>
</tr>
<tr>
<td><code>REPLICATE</code></td>
<td>Replicate operation cascades</td>
</tr>
<tr>
<td><code>SAVE_UPDATE</code></td>
<td>Save or update cascades</td>
</tr>
</tbody></table>
<hr>
<h3 id="example">Example:</h3>
<pre><code class="language-java">
@OneToMany(mappedBy=&quot;customer&quot;, cascade=CascadeType.ALL)
private Set&lt;Order&gt; orders;
</code></pre>
<hr>
<p>Use cascade carefully—deleting a parent can delete all children!</p>
</details>
<hr>
<details open>
<summary><strong>6. Hibernate get() vs load()</strong></summary>
<table>
<thead><tr>
<th>Feature</th>
<th><code>get()</code></th>
<th><code>load()</code></th>
</tr></thead><tbody>
<tr>
<td>Behavior</td>
<td>Immediately hits DB, returns entity or <code>null</code> if not found</td>
<td>Returns proxy, hits DB only on property access</td>
</tr>
<tr>
<td>When to use</td>
<td>When you want to fetch immediately and check if entity exists</td>
<td>When you expect entity exists and want lazy loading</td>
</tr>
<tr>
<td>Exception</td>
<td>Returns <code>null</code> if not found</td>
<td>Throws <code>ObjectNotFoundException</code> if entity missing</td>
</tr>
</tbody></table>
<hr>
<h3 id="example-get">Example <code>get()</code>:</h3>
<pre><code class="language-java">
MyEntity e = session.get(MyEntity.class, id);
if (e == null) { /* not found */ }
</code></pre>
<h3 id="example-load">Example <code>load()</code>:</h3>
<pre><code class="language-java">
MyEntity e = session.load(MyEntity.class, id);
// DB query only happens when e.getName() is called
</code></pre>
</details>
<hr>
<details open>
<summary><strong>7. Hibernate vs JPA</strong></summary>
<table>
<thead><tr>
<th>Criteria</th>
<th>Hibernate</th>
<th>JPA</th>
</tr></thead><tbody>
<tr>
<td>Nature</td>
<td>Full-featured ORM framework</td>
<td>Java specification (standard API)</td>
</tr>
<tr>
<td>Features</td>
<td>Advanced features (multi-tenancy, caching)</td>
<td>Basic ORM features</td>
</tr>
<tr>
<td>Portability</td>
<td>Less portable due to proprietary features</td>
<td>Portable across JPA providers</td>
</tr>
<tr>
<td>Ecosystem</td>
<td>Mature, large community</td>
<td>Part of Java EE ecosystem</td>
</tr>
<tr>
<td>Implementation</td>
<td>Can be used standalone or as JPA provider</td>
<td>Needs a provider like Hibernate, EclipseLink</td>
</tr>
</tbody></table>
<hr>
<h3 id="choose-hibernate-if">Choose Hibernate if:</h3>
<ul>
<li>You want advanced ORM features</li>
<li>Working with legacy Hibernate projects</li>
<li>Need vendor-specific extensions</li>
</ul>
<h3 id="choose-jpa-if">Choose JPA if:</h3>
<ul>
<li>You want standardization and portability</li>
<li>Building Java EE / Jakarta EE apps</li>
<li>Prefer simpler API</li>
</ul>
<hr>
<details open>
<summary>Use Hibernate as JPA provider for best of both worlds.</summary>
<pre><code class="language-java">
// Use Hibernate&#x27;s EntityManager implementation
javax.persistence.EntityManager em = ...
</code></pre>
</details>
</details>
<hr>
<details open>
<summary><strong>8. Connection Pooling in Java</strong></summary>
<ul>
<li>Manages a pool of database connections for reuse.</li>
<li>Improves app response time by avoiding connection creation overhead.</li>
<li>Crucial for high traffic web apps to reduce DB load.</li>
</ul>
<hr>
<h3 id="benefits">Benefits:</h3>
<ul>
<li>Faster connection retrieval</li>
<li>Limits max DB connections to avoid overload</li>
<li>Reuses idle connections</li>
</ul>
<hr>
<h3 id="popular-pools">Popular pools:</h3>
<ul>
<li>HikariCP (default in Spring Boot)</li>
<li>Apache DBCP</li>
<li>C3P0</li>
</ul>
<hr>
<h3 id="example-spring-boot-config">Example Spring Boot config:</h3>
<pre><code class="language-properties">
spring.datasource.hikari.maximum-pool-size=10
</code></pre>
<hr>
<p>Use connection pooling to drastically improve scalability and performance.</p>
</details>
<hr>
<p>If you want, I can generate example codes/snippets or project templates for any of these topics!</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = hibernateContentData;
}
