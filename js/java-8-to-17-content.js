// Java Basics - Content Data
const java8To17ContentData = `<ul>
<li><a href="#java-8-streams-vs-collections">Java 8 Streams vs Collections</a></li>
<li><a href="#-stream-api-overview">🌊 Stream API Overview</a></li>
<li><a href="#stream-api">Stream API</a></li>
<li><a href="#-key-differences">⚖️ Key Differences</a></li>
<li><a href="#-example-comparison">💡 Example Comparison</a></li>
<li><a href="#-stream-operations-intermediate-vs-terminal">🧱 Stream Operations: Intermediate vs Terminal</a></li>
<li><a href="#-intermediate-operations">🔁 Intermediate Operations</a></li>
<li><a href="#-terminal-operations">✅ Terminal Operations</a></li>
<li><a href="#-summary">🧩 Summary</a></li>
<li><a href="#-forkjoinpool-stream--parallelstream--summary">⚙️ <strong>ForkJoinPool, Stream &amp;amp; ParallelStream — Summary</strong></a></li>
<li><a href="#-1-forkjoinpool-overview">🧩 <strong>1️⃣ ForkJoinPool Overview</strong></a></li>
<li><a href="#-example">🔸 Example:</a></li>
<li><a href="#-2-forkjoinpool-vs-threads-vs-executorservice">⚔️ <strong>2️⃣ ForkJoinPool vs Threads vs ExecutorService</strong></a></li>
<li><a href="#-3-still-used-in-java-21">⚡ <strong>3️⃣ Still Used in Java 21?</strong></a></li>
<li><a href="#-4-stream-internals">🧠 <strong>4️⃣ Stream Internals</strong></a></li>
<li><a href="#-5-parallel-stream--how-it-works">⚡ <strong>5️⃣ Parallel Stream — How It Works</strong></a></li>
<li><a href="#-6-stream-vs-parallelstream">🔍 <strong>6️⃣ Stream vs ParallelStream</strong></a></li>
<li><a href="#-7-when-to-use-parallel-streams">⚖️ <strong>7️⃣ When to Use Parallel Streams</strong></a></li>
<li><a href="#-in-short">✅ <strong>In Short</strong></a></li>
<li><a href="#-collectors-from-javautilstream">📦 <em>_CODE</em>PLACEHOLDER<em>0</em><em> from </em><em>CODE</em>PLACEHOLDER<em>1</em>_</a></li>
<li><a href="#-common-collector-methods">🔧 Common Collector Methods</a></li>
<li><a href="#-joining-strings">🔗 Joining Strings</a></li>
<li><a href="#-counting--summarizing">🔢 Counting &amp;amp; Summarizing</a></li>
<li><a href="#-grouping--partitioning">🧮 Grouping &amp;amp; Partitioning</a></li>
<li><a href="#-reducing">➕ Reducing</a></li>
<li><a href="#-post-processing">🛠️ Post-processing</a></li>
<li><a href="#-min--max">🔝 Min / Max</a></li>
<li><a href="#-java-features-from-8-to-21-lts">📘 Java Features from 8 to 21 (LTS)</a></li>
<li><a href="#-java-8-2014">☕ Java 8 (2014)</a></li>
<li><a href="#-java-9-2017">☕ Java 9 (2017)</a></li>
<li><a href="#-java-10-2018">☕ Java 10 (2018)</a></li>
<li><a href="#-java-11-2018--lts">☕ Java 11 (2018) – LTS</a></li>
<li><a href="#-java-12-2019">☕ Java 12 (2019)</a></li>
<li><a href="#-java-1314-20192020">☕ Java 13–14 (2019–2020)</a></li>
<li><a href="#-java-1516-20202021">☕ Java 15–16 (2020–2021)</a></li>
<li><a href="#-java-17-2021--lts">☕ Java 17 (2021) – LTS</a></li>
<li><a href="#-java-1920-20222023">☕ Java 19–20 (2022–2023)</a></li>
<li><a href="#-java-21-2023--lts">☕ Java 21 (2023) – LTS</a></li>
<li><a href="#-summary-table">✅ Summary Table</a></li>
<li><a href="#java8">Java 8</a></li>
<li><a href="#1-lambda-expressions--streamapi">1. Lambda Expressions &amp;amp; Stream API</a></li>
<li><a href="#stream-basics">Stream Basics</a></li>
<li><a href="#2-method-references">2. Method References</a></li>
<li><a href="#3-default--static-methods-in-interfaces">3. Default &amp;amp; Static Methods in Interfaces</a></li>
<li><a href="#4-type-annotations--repeating-annotations">4. Type Annotations &amp;amp; Repeating Annotations</a></li>
<li><a href="#5-method-parameter-reflection">5. Method Parameter Reflection</a></li>
<li><a href="#6-optional-datetime-and-completablefuture">6. Optional, Date‑Time, and CompletableFuture</a></li>
<li><a href="#7-javautilfunction-package">7. <em>_CODE</em>PLACEHOLDER<em>0</em>_ Package</a></li>
<li><a href="#8-collections--comparator-improvements">8. Collections &amp;amp; Comparator Improvements</a></li>
<li><a href="#9-primitive-streams--spliterator">9. Primitive Streams &amp;amp; Spliterator</a></li>
<li><a href="#java-8-key-features">Java 8 Key Features</a></li>
<li><a href="#safevarargs-in-java">@SafeVarargs in Java</a></li>
<li><a href="#what-is-safevarargs">What is <em>_CODE</em>PLACEHOLDER<em>0</em>_?</a></li>
<li><a href="#why-use-safevarargs">Why use <em>_CODE</em>PLACEHOLDER<em>0</em>_?</a></li>
<li><a href="#example-without-safevarargs-generates-warning">Example without <em>_CODE</em>PLACEHOLDER<em>0</em>_ (generates warning)</a></li>
<li><a href="#example-with-safevarargs-no-warning">Example with <em>_CODE</em>PLACEHOLDER<em>0</em>_ (no warning)</a></li>
<li><a href="#important-notes">Important Notes</a></li>
<li><a href="#when-to-use">When to use?</a></li>
<li><a href="#java-8">Java 8</a></li>
<li><a href="#1-lambda-expressions">1. Lambda Expressions</a></li>
<li><a href="#2-functional-interfaces">2. Functional Interfaces</a></li>
<li><a href="#3-streams-api">3. Streams API</a></li>
<li><a href="#4-optional-class">4. Optional Class</a></li>
<li><a href="#java-optional-cheat-sheet"><strong>Java Optional Cheat Sheet</strong></a></li>
<li><a href="#example-using-multiple-methods"><strong>Example Using Multiple Methods</strong></a></li>
<li><a href="#how-to-read-it"><strong>How to Read It</strong></a></li>
<li><a href="#5-default-and-static-methods-in-interfaces">5. Default and Static Methods in Interfaces</a></li>
<li><a href="#6-date-and-time-api-javatime">6. Date and Time API (<em>_CODE</em>PLACEHOLDER<em>0</em>_)</a></li>
<li><a href="#7-method-references">7. Method References</a></li>
<li><a href="#8-repeatable-annotations">8. Repeatable Annotations</a></li>
<li><a href="#9-type-annotations">9. Type Annotations</a></li>
<li><a href="#10-nashorn-javascript-engine">10. Nashorn JavaScript Engine</a></li>
<li><a href="#java-9">Java 9</a></li>
<li><a href="#1-module-system-project-jigsaw">1. Module System (Project Jigsaw)</a></li>
<li><a href="#2-jshell-repl">2. JShell (REPL)</a></li>
<li><a href="#3-private-methods-in-interfaces">3. Private Methods in Interfaces</a></li>
<li><a href="#4-collection-factory-methods">4. Collection Factory Methods</a></li>
<li><a href="#5-stream-api-improvements">5. Stream API Improvements</a></li>
<li><a href="#6-optional-enhancements">6. Optional Enhancements</a></li>
<li><a href="#7-process-api-updates">7. Process API Updates</a></li>
<li><a href="#java-10">Java 10</a></li>
<li><a href="#1-local-variable-type-inference-var">1. Local-Variable Type Inference (<em>_CODE</em>PLACEHOLDER<em>0</em>_)</a></li>
<li><a href="#2-application-class-data-sharing-appcds">2. Application Class-Data Sharing (AppCDS)</a></li>
<li><a href="#3-parallel-full-gc-for-g1">3. Parallel Full GC for G1</a></li>
<li><a href="#4-thread-local-handshakes">4. Thread-Local Handshakes</a></li>
<li><a href="#5-root-certificates-in-jdk">5. Root Certificates in JDK</a></li>
<li><a href="#java-11">Java 11</a></li>
<li><a href="#1-http-client-api-standardized">1. HTTP Client API (Standardized)</a></li>
<li><a href="#2-local-variable-syntax-for-lambda-parameters">2. Local-Variable Syntax for Lambda Parameters</a></li>
<li><a href="#3-new-string-methods">3. New String Methods</a></li>
<li><a href="#4-collection-toarrayintfunction">4. Collection toArray(IntFunction)</a></li>
<li><a href="#5-file-methods-readstring-writestring">5. File Methods (<em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em>_)</a></li>
<li><a href="#6-running-java-files-directly">6. Running Java Files Directly</a></li>
<li><a href="#7-other-notable-features">7. Other Notable Features</a></li>
<li><a href="#java-12">Java 12</a></li>
<li><a href="#1-switch-expressions-preview">1. Switch Expressions (Preview)</a></li>
<li><a href="#2-new-jvm-constants-api">2. New JVM Constants API</a></li>
<li><a href="#3-shenandoah--abortable-mixed-gc-improvements">3. Shenandoah &amp;amp; Abortable Mixed GC Improvements</a></li>
<li><a href="#4-compact-number-formatting">4. Compact Number Formatting</a></li>
<li><a href="#5-additional-features">5. Additional Features</a></li>
<li><a href="#java-13">Java 13</a></li>
<li><a href="#1-text-blocks-preview">1. Text Blocks (Preview)</a></li>
<li><a href="#2-switch-expressions-enhancements">2. Switch Expressions Enhancements</a></li>
<li><a href="#3-reimplement-the-legacy-socket-api">3. Reimplement the Legacy Socket API</a></li>
<li><a href="#4-other-minor-features">4. Other Minor Features</a></li>
<li><a href="#java-14">Java 14</a></li>
<li><a href="#1-records-preview">1. Records (Preview)</a></li>
<li><a href="#2-pattern-matching-for-instanceof-preview">2. Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_ (Preview)</a></li>
<li><a href="#3-helpful-nullpointerexceptions">3. Helpful NullPointerExceptions</a></li>
<li><a href="#4-switch-expressions-second-preview">4. Switch Expressions (Second Preview)</a></li>
<li><a href="#5-records-pattern-matching-and-nvm-support-for-jfr">5. Records, Pattern Matching, and NVM-support for JFR</a></li>
<li><a href="#java-15">Java 15</a></li>
<li><a href="#1-sealed-classes-preview">1. Sealed Classes (Preview)</a></li>
<li><a href="#2-hidden-classes">2. Hidden Classes</a></li>
<li><a href="#3-text-blocks-standardized">3. Text Blocks (Standardized)</a></li>
<li><a href="#4-records-second-preview">4. Records (Second Preview)</a></li>
<li><a href="#5-pattern-matching-for-instanceof-second-preview">5. Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_ (Second Preview)</a></li>
<li><a href="#6-other-notable-features">6. Other Notable Features</a></li>
<li><a href="#java-16">Java 16</a></li>
<li><a href="#1-records-standardized">1. Records (Standardized)</a></li>
<li><a href="#2-pattern-matching-for-instanceof-standardized">2. Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_ (Standardized)</a></li>
<li><a href="#3-sealed-classes-second-preview">3. Sealed Classes (Second Preview)</a></li>
<li><a href="#4-vector-api-incubator">4. Vector API (Incubator)</a></li>
<li><a href="#5-foreign-linker-api-incubator">5. Foreign Linker API (Incubator)</a></li>
<li><a href="#6-other-features">6. Other Features</a></li>
<li><a href="#java-17">Java 17</a></li>
<li><a href="#1-sealed-classes-standardized">1. Sealed Classes (Standardized)</a></li>
<li><a href="#2-pattern-matching-for-switch-preview">2. Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_ (Preview)</a></li>
<li><a href="#3-strong-encapsulation-of-jdk-internals">3. Strong Encapsulation of JDK Internals</a></li>
<li><a href="#4-new-macos-rendering-pipeline">4. New macOS Rendering Pipeline</a></li>
<li><a href="#5-foreign-function--memory-api-incubator">5. Foreign Function &amp;amp; Memory API (Incubator)</a></li>
<li><a href="#6-other-notable-features-1">6. Other Notable Features</a></li>
<li><a href="#java-18">Java 18</a></li>
<li><a href="#1-simple-web-server">1. Simple Web Server</a></li>
<li><a href="#2-utf-8-by-default">2. UTF-8 by Default</a></li>
<li><a href="#3-vector-api-second-incubator">3. Vector API (Second Incubator)</a></li>
<li><a href="#4-code-snippets-in-java-api-documentation">4. Code Snippets in Java API Documentation</a></li>
<li><a href="#5-other-notable-features">5. Other Notable Features</a></li>
<li><a href="#java-19">Java 19</a></li>
<li><a href="#1-virtual-threads-preview">1. Virtual Threads (Preview)</a></li>
<li><a href="#2-record-patterns-preview">2. Record Patterns (Preview)</a></li>
<li><a href="#3-pattern-matching-for-switch-second-preview">3. Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_ (Second Preview)</a></li>
<li><a href="#4-foreign-function--memory-api-second-incubator">4. Foreign Function &amp;amp; Memory API (Second Incubator)</a></li>
<li><a href="#5-other-notable-features-1">5. Other Notable Features</a></li>
<li><a href="#java-20">Java 20</a></li>
<li><a href="#1-virtual-threads-second-preview">1. Virtual Threads (Second Preview)</a></li>
<li><a href="#2-record-patterns-second-preview">2. Record Patterns (Second Preview)</a></li>
<li><a href="#3-pattern-matching-for-switch-third-preview">3. Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_ (Third Preview)</a></li>
<li><a href="#4-scoped-values-incubator">4. Scoped Values (Incubator)</a></li>
<li><a href="#5-foreign-function--memory-api-third-incubator">5. Foreign Function &amp;amp; Memory API (Third Incubator)</a></li>
<li><a href="#6-other-notable-features-2">6. Other Notable Features</a></li>
<li><a href="#java-21">Java 21</a></li>
<li><a href="#1-virtual-threads-standardized">1. Virtual Threads (Standardized)</a></li>
<li><a href="#2-pattern-matching-for-switch-standardized">2. Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_ (Standardized)</a></li>
<li><a href="#3-sequenced-collections">3. Sequenced Collections</a></li>
<li><a href="#4-string-templates-preview">4. String Templates (Preview)</a></li>
<li><a href="#5-record-patterns-third-preview">5. Record Patterns (Third Preview)</a></li>
<li><a href="#6-structured-concurrency-incubator">6. Structured Concurrency (Incubator)</a></li>
<li><a href="#7-foreign-function--memory-api-fourth-incubator">7. Foreign Function &amp;amp; Memory API (Fourth Incubator)</a></li>
</ul>
<h1 id="java-8-streams-vs-collections">[Java 8 Streams vs Collections](https://www.java2novice.com/java_interview_questions/java-8-streams-vs-collection-framework/)</h1>
<p>📺 <a href="https://youtu.be/lyl2Y5rwfx4?si=WiTKZxZDzVDnEVFV">Video Explanation</a></p>
<hr>
<h2 id="stream-api-overview">🌊 Stream API Overview</h2>
<p>In Java, <strong>Collections</strong> and <strong>Streams</strong> serve different purposes:</p>
<table>
<thead><tr>
<th>Collections</th>
<th>Streams</th>
</tr></thead><tbody>
<tr>
<td>**Purpose**: Store and manage groups of objects like `List`, `Set`, `Map`, etc.</td>
<td>**Purpose**: Process data in a functional and declarative manner using filter, map, reduce, etc.</td>
</tr>
<tr>
<td>**Data Storage**: In-memory storage with CRUD operations.</td>
<td>**Data Processing**: Pipeline-based processing; does not store data.</td>
</tr>
<tr>
<td>**Mutability**: Collections can be modified.</td>
<td>**Immutability**: Streams are immutable; operations return new streams.</td>
</tr>
<tr>
<td>**Iteration**: External iteration (e.g., `for-each`).</td>
<td>**Iteration**: Internal iteration handled by the stream API.</td>
</tr>
<tr>
<td>**Performance**: Varies with collection type (e.g., `ArrayList` vs `LinkedList`).</td>
<td>**Performance**: Efficient, especially with parallel streams.</td>
</tr>
<tr>
<td>**Thread Safety**: Some are thread-safe (`Vector`, `Hashtable`), others are not.</td>
<td>**Thread Safety**: Streams are not thread-safe unless explicitly handled.</td>
</tr>
</tbody></table>
<h2 id="stream-api">[Stream API](https://www.tutorialspoint.com/java8/java8_streams.htm)</h2>
<ul>
<li>Using collections framework in Java, a developer has to use loops and make repeated checks. Another concern is efficiency; as multi-core processors are available at ease, a Java developer has to write parallel code processing that can be pretty error-prone.</li>
</ul>
<ul>
<li>To resolve such issues, Java 8 introduced the concept of stream that lets the developer to proccess data declaratively and leverage multicore architecture without the need to write any specific code for it.</li>
</ul>
<ul>
<li><strong>forEach()</strong> - to iterate each element of the stream.</li>
</ul>
<pre><code class="language-java">
Random random = new Random();
random.ints().limit(10).forEach(System.out::println);
</code></pre>
<ul>
<li><strong>map()</strong> - used to map each element to its corresponding result.</li>
</ul>
<pre><code class="language-java">
List&lt;Integer&gt; numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
//get list of unique squares
List&lt;Integer&gt; squaresList = numbers.stream().map( i -&gt; i*i).distinct().collect(Collectors.toList());
</code></pre>
<ul>
<li><strong>filter()</strong> - used to eliminate elements based on a criteria.</li>
</ul>
<pre><code class="language-java">
List&lt;String&gt;strings = Arrays.asList(&quot;abc&quot;, &quot;&quot;, &quot;bc&quot;, &quot;efg&quot;, &quot;abcd&quot;,&quot;&quot;, &quot;jkl&quot;);
//get count of empty string
int count = strings.stream().filter(string -&gt; string.isEmpty()).count();
</code></pre>
<ul>
<li><strong>sorted()</strong> - Used to sort the stream</li>
</ul>
<pre><code class="language-java">
Random random = new Random();
random.ints().limit(10).sorted().forEach(System.out::println);
</code></pre>
<hr>
<h2 id="key-differences">⚖️ Key Differences</h2>
<ul>
<li><strong>Collections</strong> are for <strong>storing</strong> and <strong>manipulating</strong> data.</li>
<li><strong>Streams</strong> are for <strong>processing</strong> data.</li>
<li>Streams are <strong>lazy</strong>, <strong>stateless</strong>, and <strong>functional</strong>.</li>
<li>Collections are <strong>eager</strong>, <strong>stateful</strong>, and <strong>imperative</strong>.</li>
<li>Streams support easy <strong>parallelism</strong> (<em>_CODE</em>PLACEHOLDER<em>0</em>_).</li>
</ul>
<hr>
<h2 id="example-comparison">💡 Example Comparison</h2>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;📚 Collections Example&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
List&lt;String&gt; names = new ArrayList&lt;&gt;();
names.add(&quot;Alice&quot;);
names.add(&quot;Bob&quot;);
names.add(&quot;Charlie&quot;);

for (String name : names) {
    System.out.println(name);
}
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details open&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;🚀 flatMap &amp; mapMultiStreams Example&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
List&lt;String&gt; names = Arrays.asList(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);

names.stream()
     .filter(name -&gt; name.startsWith(&quot;A&quot;))
     .map(String::toUpperCase)
     .forEach(System.out::println);  // Outputs: ALICE
</code></pre>
<p>Let’s talk <strong>Java Streams</strong>—specifically <strong><em>_CODE</em>PLACEHOLDER<em>0</em><em></strong>, <strong></em><em>CODE</em>PLACEHOLDER<em>1</em><em></strong>, and the newer <strong></em><em>CODE</em>PLACEHOLDER<em>2</em>_</strong>—what they do, when they’re efficient, and how to use them correctly.</p>
<hr>
<h2 id="1-flatmap-in-streams">1. `flatMap` in streams</h2>
<h3 id="what-flatmap-does">What `flatMap` does</h3>
<p><em>_CODE</em>PLACEHOLDER<em>0</em>_ is used when <strong>one element produces zero, one, or many elements</strong>, and you want a <strong>single flattened stream</strong>.</p>
<p>Think:</p>
<blockquote><em>map → one-to-one</em></blockquote>
<blockquote><em>flatMap → one-to-many (then flatten)</em></blockquote>
<h3 id="example-flattening-collections">Example: flattening collections</h3>
<pre><code class="language-java">
List&lt;List&lt;String&gt;&gt; lists = List.of(
    List.of(&quot;a&quot;, &quot;b&quot;),
    List.of(&quot;c&quot;, &quot;d&quot;)
);

List&lt;String&gt; result =
    lists.stream()
         .flatMap(List::stream)
         .toList();
</code></pre>
<p><strong>Result</strong></p>
<pre><code class="language-">
[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]
</code></pre>
<p>Without <em>_CODE</em>PLACEHOLDER<em>0</em><em>, you’d get a </em><em>CODE</em>PLACEHOLDER<em>1</em>_, which is almost never what you want.</p>
<hr>
<h2 id="2-flatmap-vs-streamconcat">2. `flatMap` vs `Stream.concat`</h2>
<h3 id="streamconcat">`Stream.concat`</h3>
<p><em>_CODE</em>PLACEHOLDER<em>0</em>_ <strong>only merges two streams</strong>.</p>
<pre><code class="language-java">
Stream&lt;String&gt; s1 = Stream.of(&quot;a&quot;, &quot;b&quot;);
Stream&lt;String&gt; s2 = Stream.of(&quot;c&quot;, &quot;d&quot;);

Stream&lt;String&gt; merged = Stream.concat(s1, s2);
</code></pre>
<h3 id="why-flatmap-is-usually-better">Why `flatMap` is usually better</h3>
<h4 id="1-scalability">1️⃣ Scalability</h4>
<p>If you have <em>many</em> streams:</p>
<pre><code class="language-java">
Stream.concat(
    Stream.concat(s1, s2),
    Stream.concat(s3, s4)
);
</code></pre>
<p>This becomes:</p>
<ul>
<li>Ugly</li>
<li>Hard to maintain</li>
<li>Deeply nested</li>
</ul>
<p>With <em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<pre><code class="language-java">
Stream.of(s1, s2, s3, s4)
      .flatMap(Function.identity());
</code></pre>
<p>Much cleaner.</p>
<hr>
<h4 id="2-laziness-performance">2️⃣ Laziness &amp; performance</h4>
<p><em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<ul>
<li>Creates a <strong>chain of concatenated streams</strong></li>
<li>Each concat adds another layer of traversal</li>
</ul>
<p><em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<ul>
<li>Uses <strong>a single pipeline</strong></li>
<li>Avoids nesting iterators</li>
<li>Plays better with optimizations and parallel streams</li>
</ul>
<p>📌 <strong>Efficiency note</strong></p>
<p><em>_CODE</em>PLACEHOLDER<em>0</em>_ isn’t <em>magically faster</em> for two streams—but for <strong>dynamic or large numbers of streams</strong>, it’s:</p>
<ul>
<li>More memory-friendly</li>
<li>Easier for the JVM to optimize</li>
<li>Cleaner for parallel execution</li>
</ul>
<hr>
<h4 id="3-expressiveness">3️⃣ Expressiveness</h4>
<p>If your data <em>naturally maps to multiple outputs</em>, <em>_CODE</em>PLACEHOLDER<em>0</em>_ expresses intent better.</p>
<p>Example: split words into letters</p>
<pre><code class="language-java">
Stream.of(&quot;hello&quot;, &quot;world&quot;)
      .flatMap(word -&gt; word.chars().mapToObj(c -&gt; (char) c))
      .forEach(System.out::println);
</code></pre>
<hr>
<h2 id="3-mapmulti-java-16">3. `mapMulti` (Java 16+)</h2>
<h3 id="what-is-mapmulti">What is `mapMulti`?</h3>
<p><em>_CODE</em>PLACEHOLDER<em>0</em><em> is a <strong>more efficient alternative to </em><em>CODE</em>PLACEHOLDER<em>1</em>_</strong> when:</p>
<ul>
<li>You don’t need to create intermediate streams</li>
<li>You want fine-grained control over output</li>
</ul>
<p>Signature:</p>
<pre><code class="language-java">
&lt;R&gt; Stream&lt;R&gt; mapMulti(BiConsumer&lt;T, Consumer&lt;R&gt;&gt; mapper)
</code></pre>
<p>Instead of returning a stream, you <strong>push values directly</strong> to the downstream consumer.</p>
<hr>
<h3 id="why-mapmulti-can-be-more-efficient">Why `mapMulti` can be more efficient</h3>
<p><em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<ul>
<li>Allocates a new <em>_CODE</em>PLACEHOLDER<em>0</em>_ per element</li>
<li>Adds overhead (objects, lambdas)</li>
</ul>
<p><em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<ul>
<li>No intermediate streams</li>
<li>Less allocation</li>
<li>Better for hot paths and large data sets</li>
</ul>
<hr>
<h3 id="example-replacing-flatmap">Example: replacing `flatMap`</h3>
<h4 id="using-flatmap">Using `flatMap`</h4>
<pre><code class="language-java">
Stream.of(1, 2, 3)
      .flatMap(n -&gt; Stream.of(n, n * 2))
      .forEach(System.out::println);
</code></pre>
<h4 id="using-mapmulti">Using `mapMulti`</h4>
<pre><code class="language-java">
Stream.of(1, 2, 3)
      .mapMulti((n, consumer) -&gt; {
          consumer.accept(n);
          consumer.accept(n * 2);
      })
      .forEach(System.out::println);
</code></pre>
<p>Same output, less overhead.</p>
<hr>
<h3 id="example-filtering-mapping-in-one-step">Example: filtering + mapping in one step</h3>
<p>With <em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<pre><code class="language-java">
stream.flatMap(n -&gt; n &gt; 0 ? Stream.of(n) : Stream.empty());
</code></pre>
<p>With <em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<pre><code class="language-java">
stream.mapMulti((n, consumer) -&gt; {
    if (n &gt; 0) {
        consumer.accept(n);
    }
});
</code></pre>
<p>Cleaner and faster.</p>
<hr>
<h2 id="4-when-to-use-what">4. When to use what</h2>
<h3 id="use-flatmap-when">✅ Use `flatMap` when:</h3>
<ul>
<li>You’re transforming elements into streams</li>
<li>Readability matters more than micro-optimizations</li>
<li>You’re working with collections, optionals, or I/O streams</li>
</ul>
<h3 id="use-streamconcat-when">⚠️ Use `Stream.concat` when:</h3>
<ul>
<li>You only have <strong>two streams</strong></li>
<li>Simplicity matters more than extensibility</li>
</ul>
<h3 id="use-mapmulti-when">🚀 Use `mapMulti` when:</h3>
<ul>
<li>Performance matters</li>
<li>You want to avoid creating many temporary streams</li>
<li>You need conditional or multiple outputs per element</li>
</ul>
<hr>
<table>
<thead><tr>
<th>Method</th>
<th>Best for</th>
<th>Notes</th>
</tr></thead><tbody>
<tr>
<td>`flatMap`</td>
<td>One-to-many transformations</td>
<td>Clean, expressive</td>
</tr>
<tr>
<td>`Stream.concat`</td>
<td>Merging two streams</td>
<td>Doesn’t scale well</td>
</tr>
<tr>
<td>`mapMulti`</td>
<td>High-performance flattening</td>
<td>Java 16+, fewer allocations</td>
</tr>
</tbody></table>
<p>If you want, I can also show:</p>
<ul>
<li>Benchmarks (<em>_CODE</em>PLACEHOLDER<em>0</em><em> vs </em><em>CODE</em>PLACEHOLDER<em>1</em>_)</li>
<li>Real-world examples (JSON parsing, graph traversal)</li>
<li>Parallel stream behavior</li>
</ul>
<p>Nice, this is where streams get <em>interesting</em>. I’ll break this into <strong>three clean sections</strong> and keep it practical, not hand-wavy.</p>
<hr>
<h1 id="1-benchmarks-flatmap-vs-mapmulti">1. Benchmarks: `flatMap` vs `mapMulti`</h1>
<h2 id="what-were-actually-benchmarking">What we’re actually benchmarking</h2>
<p>Key difference is <strong>allocation &amp; indirection</strong>.</p>
<h3 id="flatmap">`flatMap`</h3>
<ul>
<li>Creates <strong>one Stream per input element</strong></li>
<li>Each stream has:</li>
</ul>
<ul>
<li>a Spliterator</li>
<li>lambdas</li>
<li>bookkeeping</li>
<li>More GC pressure</li>
</ul>
<h3 id="mapmulti">`mapMulti`</h3>
<ul>
<li><strong>No intermediate streams</strong></li>
<li>Pushes values directly downstream</li>
<li>Fewer objects, tighter loops</li>
</ul>
<hr>
<h2 id="microbenchmark-style-example">Microbenchmark-style example</h2>
<h3 id="flatmap-version">flatMap version</h3>
<pre><code class="language-java">
IntStream.range(0, 1_000_000)
    .boxed()
    .flatMap(n -&gt; Stream.of(n, n + 1))
    .count();
</code></pre>
<h3 id="mapmulti-version">mapMulti version</h3>
<pre><code class="language-java">
IntStream.range(0, 1_000_000)
    .boxed()
    .mapMulti((n, out) -&gt; {
        out.accept(n);
        out.accept(n + 1);
    })
    .count();
</code></pre>
<hr>
<h2 id="typical-benchmark-results-jmh-style-indicative">Typical benchmark results (JMH-style, indicative)</h2>
<table>
<thead><tr>
<th>Operation</th>
<th>flatMap</th>
<th>mapMulti</th>
</tr></thead><tbody>
<tr>
<td>Throughput</td>
<td>baseline</td>
<td>**~1.3x – 2x faster**</td>
</tr>
<tr>
<td>Allocations</td>
<td>high</td>
<td>**near zero**</td>
</tr>
<tr>
<td>GC pressure</td>
<td>noticeable</td>
<td>**minimal**</td>
</tr>
</tbody></table>
<p>📌 <strong>Important</strong></p>
<p>You’ll mostly see benefits when:</p>
<ul>
<li>Large streams</li>
<li>Hot code paths</li>
<li>Each element produces <em>few</em> outputs</li>
</ul>
<p>If each element explodes into thousands of outputs, the difference shrinks.</p>
<hr>
<h2 id="rule-of-thumb">Rule of thumb</h2>
<blockquote><em>_CODE</em>PLACEHOLDER<em>0</em>_ ≈ <em>flatMap without the stream tax</em></blockquote>
<hr>
<h1 id="2-real-world-examples">2. Real-world examples</h1>
<h2 id="a-json-parsing-common-realistic">A. JSON parsing (common &amp; realistic)</h2>
<p>Imagine JSON like:</p>
<pre><code class="language-json">
[
  { &quot;id&quot;: 1, &quot;tags&quot;: [&quot;java&quot;, &quot;streams&quot;] },
  { &quot;id&quot;: 2, &quot;tags&quot;: [&quot;performance&quot;] }
]
</code></pre>
<h3 id="using-flatmap">Using `flatMap`</h3>
<pre><code class="language-java">
records.stream()
    .flatMap(record -&gt; record.getTags().stream())
    .distinct()
    .toList();
</code></pre>
<h3 id="using-mapmulti">Using `mapMulti`</h3>
<pre><code class="language-java">
records.stream()
    .mapMulti((record, out) -&gt; {
        for (String tag : record.getTags()) {
            out.accept(tag);
        }
    })
    .distinct()
    .toList();
</code></pre>
<h3 id="why-mapmulti-shines-here">Why `mapMulti` shines here</h3>
<ul>
<li>Tags are already in memory</li>
<li>No need to allocate <em>_CODE</em>PLACEHOLDER<em>0</em>_ for every record</li>
<li>This pattern is <em>very</em> common in JSON → object → stream pipelines</li>
</ul>
<hr>
<h2 id="b-graph-traversal-edges-neighbors">B. Graph traversal (edges → neighbors)</h2>
<p>Say:</p>
<pre><code class="language-java">
class Node {
    List&lt;Node&gt; neighbors();
}
</code></pre>
<h3 id="flatmap-dfs-style-expansion">flatMap DFS-style expansion</h3>
<pre><code class="language-java">
nodes.stream()
     .flatMap(n -&gt; n.neighbors().stream())
     .distinct()
     .toList();
</code></pre>
<h3 id="mapmulti-version">mapMulti version</h3>
<pre><code class="language-java">
nodes.stream()
     .mapMulti((node, out) -&gt; {
         for (Node neighbor : node.neighbors()) {
             out.accept(neighbor);
         }
     })
     .distinct()
     .toList();
</code></pre>
<h3 id="why-this-matters-in-graphs">Why this matters in graphs</h3>
<ul>
<li>Graphs are often <strong>wide</strong></li>
<li>flatMap creates <em>one stream per node</em></li>
<li>mapMulti stays flat and cache-friendly</li>
</ul>
<p>This is noticeable in:</p>
<ul>
<li>recommendation engines</li>
<li>dependency graphs</li>
<li>call graphs</li>
<li>social networks</li>
</ul>
<hr>
<h2 id="c-filtering-expanding-in-one-pass">C. Filtering + expanding in one pass</h2>
<h3 id="flatmap-awkward">flatMap (awkward)</h3>
<pre><code class="language-java">
stream.flatMap(n -&gt;
    n &gt; 0 ? Stream.of(n, n * 2) : Stream.empty()
);
</code></pre>
<h3 id="mapmulti-natural">mapMulti (natural)</h3>
<pre><code class="language-java">
stream.mapMulti((n, out) -&gt; {
    if (n &gt; 0) {
        out.accept(n);
        out.accept(n * 2);
    }
});
</code></pre>
<p>This is one of <em>_CODE</em>PLACEHOLDER<em>0</em>_’s <em>killer features</em>.</p>
<hr>
<h1 id="3-parallel-stream-behavior">3. Parallel stream behavior</h1>
<p>This is subtle and important.</p>
<hr>
<h2 id="flatmap-parallel-streams">flatMap + parallel streams</h2>
<pre><code class="language-java">
stream.parallel()
      .flatMap(x -&gt; expensive(x).stream())
      .forEach(...);
</code></pre>
<h3 id="what-happens">What happens</h3>
<ul>
<li>Each thread:</li>
</ul>
<ul>
<li>Creates substreams</li>
<li>Pulls elements via nested spliterators</li>
<li>Can:</li>
</ul>
<ul>
<li>Increase contention</li>
<li>Reduce work-stealing efficiency</li>
<li>Hurt scalability</li>
</ul>
<p>flatMap <strong>works</strong>, but parallelism is not optimal.</p>
<hr>
<h2 id="mapmulti-parallel-streams">mapMulti + parallel streams</h2>
<pre><code class="language-java">
stream.parallel()
      .mapMulti((x, out) -&gt; {
          for (var y : expensive(x)) {
              out.accept(y);
          }
      })
      .forEach(...);
</code></pre>
<h3 id="why-this-scales-better">Why this scales better</h3>
<ul>
<li>No nested streams</li>
<li>No chained spliterators</li>
<li>Each thread:</li>
</ul>
<ul>
<li>Pulls input</li>
<li>Emits output directly</li>
</ul>
<p>This leads to:</p>
<ul>
<li>Better chunking</li>
<li>Less synchronization</li>
<li>More predictable performance</li>
</ul>
<p>📌 Especially important when:</p>
<ul>
<li>Using <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li>Running on high-core machines</li>
<li>Doing CPU-heavy transformations</li>
</ul>
<hr>
<h2 id="parallel-safety-rules">Parallel safety rules</h2>
<p><em>_CODE</em>PLACEHOLDER<em>0</em>_ <strong>is safe in parallel streams IF</strong>:</p>
<ul>
<li>You do not mutate shared state</li>
<li>You only call <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
</ul>
<p>This is exactly the same rule as <em>_CODE</em>PLACEHOLDER<em>0</em><em> / </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</p>
<hr>
<h1 id="final-guidance-practical">Final guidance (practical)</h1>
<h3 id="choose-like-this">Choose like this:</h3>
<ul>
<li><strong>Default</strong> → <em>_CODE</em>PLACEHOLDER<em>0</em>_ (clarity)</li>
<li><strong>Performance-sensitive paths</strong> → <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li><strong>Two streams only</strong> → <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li><strong>Parallel + high volume</strong> → strongly prefer <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
</ul>
<p>If you want next:</p>
<ul>
<li>JMH benchmark template</li>
<li>Migration tips (flatMap → mapMulti safely)</li>
<li>Common pitfalls &amp; anti-patterns</li>
</ul>
<p>Just tell me where you want to go next 🚀</p>
<p>&lt;/details&gt;</p>
<hr>
<h2 id="stream-operations-intermediate-vs-terminal">🧱 Stream Operations: Intermediate vs Terminal</h2>
<p>Stream operations are divided into:</p>
<ul>
<li><strong>Intermediate operations</strong> (lazy, return a stream)</li>
<li><strong>Terminal operations</strong> (eager, return a result)</li>
</ul>
<hr>
<h3 id="intermediate-operations">🔁 Intermediate Operations</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Intermediate Operations&lt;/strong&gt;&lt;/summary&gt;</p>
<table>
<thead><tr>
<th>Method</th>
<th>Description</th>
<th>Example</th>
</tr></thead><tbody>
<tr>
<td>`filter(Predicate&lt;T&gt;)`</td>
<td>Filters elements by condition.</td>
<td>`stream.filter(x -&gt; x &gt; 5)`</td>
</tr>
<tr>
<td>`map(Function&lt;T, R&gt;)`</td>
<td>Transforms elements.</td>
<td>`stream.map(x -&gt; x * 2)`</td>
</tr>
<tr>
<td>`flatMap(Function&lt;T, Stream&lt;R&gt;&gt;)`</td>
<td>Flattens nested streams.</td>
<td>`stream.flatMap(x -&gt; Stream.of(x, x * 2))`</td>
</tr>
<tr>
<td>`distinct()`</td>
<td>Removes duplicates.</td>
<td>`stream.distinct()`</td>
</tr>
<tr>
<td>`sorted()`</td>
<td>Sorts elements.</td>
<td>`stream.sorted()`</td>
</tr>
<tr>
<td>`peek(Consumer&lt;T&gt;)`</td>
<td>Performs action for debugging.</td>
<td>`stream.peek(System.out::println)`</td>
</tr>
<tr>
<td>`limit(long)`</td>
<td>Truncates stream size.</td>
<td>`stream.limit(5)`</td>
</tr>
<tr>
<td>`skip(long)`</td>
<td>Skips first n elements.</td>
<td>`stream.skip(3)`</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="terminal-operations">✅ Terminal Operations</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Terminal Operations&lt;/strong&gt;&lt;/summary&gt;</p>
<table>
<thead><tr>
<th>Method</th>
<th>Description</th>
<th>Example</th>
</tr></thead><tbody>
<tr>
<td>`forEach(Consumer&lt;T&gt;)`</td>
<td>Performs action on each element.</td>
<td>`stream.forEach(System.out::println)`</td>
</tr>
<tr>
<td>`toArray()`</td>
<td>Converts stream to array.</td>
<td>`Object[] arr = stream.toArray()`</td>
</tr>
<tr>
<td>`reduce(BinaryOperator&lt;T&gt;)`</td>
<td>Reduces elements to single value.</td>
<td>`stream.reduce((a, b) -&gt; a + b)`</td>
</tr>
<tr>
<td>`collect(Collector&lt;T, A, R&gt;)`</td>
<td>Collects results into container.</td>
<td>`stream.collect(Collectors.toList())`</td>
</tr>
<tr>
<td>`min(Comparator&lt;T&gt;)` / `max(...)`</td>
<td>Finds min/max elements.</td>
<td>`stream.min(Comparator.naturalOrder())`</td>
</tr>
<tr>
<td>`count()`</td>
<td>Counts number of elements.</td>
<td>`stream.count()`</td>
</tr>
<tr>
<td>`anyMatch(...)` / `allMatch(...)` / `noneMatch(...)`</td>
<td>Matches based on conditions.</td>
<td>`stream.anyMatch(x -&gt; x &gt; 10)`</td>
</tr>
<tr>
<td>`findFirst()` / `findAny()`</td>
<td>Finds first/any element.</td>
<td>`stream.findFirst()`</td>
</tr>
<tr>
<td>`iterator()` / `spliterator()`</td>
<td>Provides stream iterator.</td>
<td>`stream.iterator()`</td>
</tr>
<tr>
<td>`isParallel()` / `parallel()` / `sequential()` / `unordered()`</td>
<td>Stream configuration.</td>
<td>`stream.parallel()`</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<hr>
<h4 id="summary">🧩 Summary</h4>
<table>
<thead><tr>
<th>Feature</th>
<th>Collections</th>
<th>Streams</th>
</tr></thead><tbody>
<tr>
<td>Data Handling</td>
<td>Stores data</td>
<td>Processes data</td>
</tr>
<tr>
<td>Mutability</td>
<td>Mutable</td>
<td>Immutable</td>
</tr>
<tr>
<td>Evaluation</td>
<td>Eager</td>
<td>Lazy</td>
</tr>
<tr>
<td>Iteration</td>
<td>External</td>
<td>Internal</td>
</tr>
<tr>
<td>Use Case</td>
<td>CRUD operations</td>
<td>Data transformation</td>
</tr>
<tr>
<td>Parallelism</td>
<td>Manual</td>
<td>Easy with `parallelStream()`</td>
</tr>
</tbody></table>
<hr>
<h1 id="forkjoinpool-stream-parallelstream-summary">⚙️ **ForkJoinPool, Stream &amp; ParallelStream — Summary**</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;<strong>ForkJoinPool</strong> and <strong>Stream / ParallelStream (internal working)</strong> — all key points kept intact 👇&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-forkjoinpool-overview">🧩 **1️⃣ ForkJoinPool Overview**</h2>
<ul>
<li>Introduced in <strong>Java 7</strong> for <strong>parallel, divide-and-conquer</strong> tasks.</li>
<li>Uses <strong>work-stealing algorithm</strong> — idle threads “steal” tasks from others.</li>
<li>Backbone for <strong>parallel streams</strong> and <strong>CompletableFuture</strong>.</li>
</ul>
<h3 id="example">🔸 Example:</h3>
<pre><code class="language-java">
ForkJoinPool pool = new ForkJoinPool();
pool.invoke(new RecursiveTaskExample());
</code></pre>
<hr>
<h2 id="2-forkjoinpool-vs-threads-vs-executorservice">⚔️ **2️⃣ ForkJoinPool vs Threads vs ExecutorService**</h2>
<table>
<thead><tr>
<th>Feature</th>
<th>Thread</th>
<th>ExecutorService</th>
<th>ForkJoinPool</th>
</tr></thead><tbody>
<tr>
<td>Creation</td>
<td>Manual (`new Thread`)</td>
<td>Managed pool</td>
<td>Specialized pool</td>
</tr>
<tr>
<td>Work Model</td>
<td>1 task/thread</td>
<td>Queued tasks</td>
<td>Split–merge recursive tasks</td>
</tr>
<tr>
<td>Best For</td>
<td>Simple async jobs</td>
<td>Batch tasks</td>
<td>CPU-bound parallel compute</td>
</tr>
<tr>
<td>Example</td>
<td>`new Thread()`</td>
<td>`Executors.newFixedThreadPool(5)`</td>
<td>`new ForkJoinPool()`</td>
</tr>
</tbody></table>
<hr>
<h3 id="3-still-used-in-java-21">⚡ **3️⃣ Still Used in Java 21?**</h3>
<p>✅ <strong>Yes</strong> — powers:</p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li>Some structured concurrency APIs</li>
</ul>
<p>But now we also have <strong>Virtual Threads</strong> (Java 21) for <strong>I/O-bound</strong> concurrency.</p>
<table>
<thead><tr>
<th>Feature</th>
<th>ForkJoinPool</th>
<th>Virtual Threads</th>
</tr></thead><tbody>
<tr>
<td>Model</td>
<td>Work-stealing</td>
<td>Lightweight threads</td>
</tr>
<tr>
<td>Best For</td>
<td>CPU-bound parallel compute</td>
<td>Massive I/O concurrency</td>
</tr>
<tr>
<td>Threads</td>
<td>Few (≈ CPU cores)</td>
<td>Thousands possible</td>
</tr>
</tbody></table>
<hr>
<h3 id="4-stream-internals">🧠 **4️⃣ Stream Internals**</h3>
<p>A <strong>Stream</strong> is a <strong>lazy pipeline</strong> of operations:</p>
<pre><code class="language-">
Source → Intermediate Ops → Terminal Op
</code></pre>
<ul>
<li><strong>Source:</strong> collection, array, I/O</li>
<li><strong>Intermediate:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em>_, etc. (lazy)</li>
<li><strong>Terminal:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em>_ → triggers execution</li>
</ul>
<p>Each element flows through all ops in order once a terminal op runs.</p>
<p>Internally uses:</p>
<ul>
<li><strong>Spliterator</strong> → splits data</li>
<li><strong>PipelineHelper / Sink</strong> → chains ops</li>
<li><strong>StreamOpFlags</strong> → manage properties (ORDERED, DISTINCT, etc.)</li>
</ul>
<hr>
<h3 id="5-parallel-stream-how-it-works">⚡ **5️⃣ Parallel Stream — How It Works**</h3>
<p>When you call <em>_CODE</em>PLACEHOLDER<em>0</em>_:</p>
<ul>
<li><strong>Spliterator</strong> divides source into chunks.</li>
<li>Tasks submitted to <strong>ForkJoinPool.commonPool()</strong>.</li>
<li>Threads process chunks in parallel.</li>
<li>Results are merged (joined).</li>
</ul>
<pre><code class="language-">
Source → Split → Threads → Join → Output
</code></pre>
<hr>
<h3 id="6-stream-vs-parallelstream">🔍 **6️⃣ Stream vs ParallelStream**</h3>
<table>
<thead><tr>
<th>Feature</th>
<th>`stream()`</th>
<th>`parallelStream()`</th>
</tr></thead><tbody>
<tr>
<td>Execution</td>
<td>Single thread</td>
<td>Multi-thread (ForkJoinPool)</td>
</tr>
<tr>
<td>Thread Pool</td>
<td>Main thread</td>
<td>`ForkJoinPool.commonPool()`</td>
</tr>
<tr>
<td>Ordering</td>
<td>Maintained</td>
<td>May reorder</td>
</tr>
<tr>
<td>Performance</td>
<td>Small / simple</td>
<td>Large, CPU-bound</td>
</tr>
<tr>
<td>Best For</td>
<td>Small data</td>
<td>Large data, heavy CPU tasks</td>
</tr>
</tbody></table>
<hr>
<h3 id="7-when-to-use-parallel-streams">⚖️ **7️⃣ When to Use Parallel Streams**</h3>
<p>✅ Use when:</p>
<ul>
<li>Data is large</li>
<li>CPU-bound (no I/O)</li>
<li>No shared mutable state</li>
</ul>
<p>❌ Avoid when:</p>
<ul>
<li>Task is I/O-bound</li>
<li>Order must be preserved</li>
<li>Shared state causes race conditions</li>
</ul>
<hr>
<h4 id="in-short">✅ **In Short**</h4>
<table>
<thead><tr>
<th>Concept</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td>**ForkJoinPool**</td>
<td>Core parallel engine (split + join tasks)</td>
</tr>
<tr>
<td>**Stream**</td>
<td>Sequential lazy pipeline</td>
</tr>
<tr>
<td>**ParallelStream**</td>
<td>Same pipeline, but split across ForkJoinPool threads</td>
</tr>
<tr>
<td>**Spliterator**</td>
<td>Splits source data</td>
</tr>
<tr>
<td>**Still used in Java 21?**</td>
<td>✅ Yes — for parallel compute (CPU tasks)</td>
</tr>
<tr>
<td>**Virtual Threads**</td>
<td>🚀 New in Java 21 — for I/O-bound concurrency</td>
</tr>
</tbody></table>
<hr>
<blockquote>🧠 <strong>Summary Tip:</strong></blockquote>
<blockquote><strong>Stream</strong> → sequential (main thread)</blockquote>
<blockquote><strong>ParallelStream</strong> → multi-threaded using <strong>ForkJoinPool</strong></blockquote>
<blockquote><strong>Virtual Threads</strong> → many lightweight threads for I/O.</blockquote>
<p>&lt;/details&gt;</p>
<hr>
<h2 id="collectors-from-javautilstream">📦 `Collectors` from `java.util.stream`</h2>
<p>The <em>_CODE</em>PLACEHOLDER<em>0</em>_ class provides static utility methods for collecting and transforming elements in a Java Stream.</p>
<hr>
<h3 id="common-collector-methods">🔧 Common Collector Methods</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;1. &lt;code&gt;toList()&lt;/code&gt;&lt;/strong&gt; — Collect to List&lt;/summary&gt;</p>
<pre><code class="language-java">
List&lt;String&gt; list = stream.collect(Collectors.toList());
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;2. &lt;code&gt;toSet()&lt;/code&gt;&lt;/strong&gt; — Collect to Set&lt;/summary&gt;</p>
<pre><code class="language-java">
Set&lt;String&gt; set = stream.collect(Collectors.toSet());
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;3. &lt;code&gt;toMap()&lt;/code&gt;&lt;/strong&gt; — Collect to Map&lt;/summary&gt;</p>
<pre><code class="language-java">
Map&lt;Integer, String&gt; map = stream.collect(Collectors.toMap(String::length, Function.identity()));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;4. &lt;code&gt;toCollection()&lt;/code&gt;&lt;/strong&gt; — Custom Collection Type&lt;/summary&gt;</p>
<pre><code class="language-java">
Collection&lt;String&gt; collection = stream.collect(Collectors.toCollection(ArrayList::new));
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="joining-strings">🔗 Joining Strings</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;5. &lt;code&gt;joining()&lt;/code&gt;&lt;/strong&gt; — Concatenate Elements&lt;/summary&gt;</p>
<pre><code class="language-java">
String result = stream.collect(Collectors.joining());
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;6. &lt;code&gt;joining(CharSequence delimiter)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
String result = stream.collect(Collectors.joining(&quot;, &quot;));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;7. &lt;code&gt;joining(delimiter, prefix, suffix)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
String result = stream.collect(Collectors.joining(&quot;, &quot;, &quot;[&quot;, &quot;]&quot;));
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="counting-summarizing">🔢 Counting &amp; Summarizing</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;8. &lt;code&gt;counting()&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
long count = stream.collect(Collectors.counting());
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;9. &lt;code&gt;summarizingInt()&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
IntSummaryStatistics stats = stream.collect(Collectors.summarizingInt(String::length));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;10. &lt;code&gt;summarizingDouble()&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
DoubleSummaryStatistics stats = stream.collect(Collectors.summarizingDouble(String::length));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;11. &lt;code&gt;summarizingLong()&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
LongSummaryStatistics stats = stream.collect(Collectors.summarizingLong(String::length));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;12. &lt;code&gt;averagingInt()&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
double avg = stream.collect(Collectors.averagingInt(String::length));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;13. &lt;code&gt;averagingDouble()&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
double avg = stream.collect(Collectors.averagingDouble(String::length));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;14. &lt;code&gt;averagingLong()&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
double avg = stream.collect(Collectors.averagingLong(String::length));
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="grouping-partitioning">🧮 Grouping &amp; Partitioning</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;15. &lt;code&gt;groupingBy(classifier)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
Map&lt;Integer, List&lt;String&gt;&gt; grouped = stream.collect(Collectors.groupingBy(String::length));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;16. &lt;code&gt;groupingBy(classifier, downstream)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
Map&lt;Integer, Set&lt;String&gt;&gt; grouped = stream.collect(Collectors.groupingBy(String::length, Collectors.toSet()));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;17. &lt;code&gt;partitioningBy(predicate)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
Map&lt;Boolean, List&lt;String&gt;&gt; result = stream.collect(Collectors.partitioningBy(s -&gt; s.length() &gt; 3));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;18. &lt;code&gt;partitioningBy(predicate, downstream)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
Map&lt;Boolean, Set&lt;String&gt;&gt; result = stream.collect(Collectors.partitioningBy(s -&gt; s.length() &gt; 3, Collectors.toSet()));
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="reducing">➕ Reducing</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;19. &lt;code&gt;reducing(BinaryOperator)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
Optional&lt;String&gt; result = stream.collect(Collectors.reducing(String::concat));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;20. &lt;code&gt;reducing(identity, BinaryOperator)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
String result = stream.collect(Collectors.reducing(&quot;&quot;, String::concat));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;21. &lt;code&gt;reducing(identity, mapper, BinaryOperator)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
Integer sum = stream.collect(Collectors.reducing(0, String::length, Integer::sum));
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="post-processing">🛠️ Post-processing</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;22. &lt;code&gt;collectingAndThen(downstream, finisher)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
List&lt;String&gt; immutable = stream.collect(Collectors.collectingAndThen(Collectors.toList(), Collections::unmodifiableList));
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="min-max">🔝 Min / Max</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;23. &lt;code&gt;maxBy(comparator)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
Optional&lt;String&gt; max = stream.collect(Collectors.maxBy(Comparator.naturalOrder()));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;24. &lt;code&gt;minBy(comparator)&lt;/code&gt;&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
Optional&lt;String&gt; min = stream.collect(Collectors.minBy(Comparator.naturalOrder()));
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-features-from-8-to-21-lts">📘 Java Features from 8 to 21 (LTS)</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Java Features from 8 to 21 (LTS) with Examples&lt;/strong&gt;&lt;/summary&gt;</p>
<blockquote>🔗 References: <a href="https://reflectoring.io/java-release-notes/">Reflectoring</a> | <a href="https://pretius.com/blog/java-17-features/">Pretius</a></blockquote>
<hr>
<h3 id="java-8-2014">☕ Java 8 (2014)</h3>
<ul>
<li>✅ <strong>Lambda Expressions</strong></li>
<pre><code class="language-java">
List&lt;String&gt; names = List.of(&quot;A&quot;, &quot;B&quot;, &quot;C&quot;);
names.forEach(n -&gt; System.out.println(n));
</code></pre>
</ul>
<ul>
<li>✅ <strong>Stream API</strong></li>
</ul>
<pre><code class="language-java">
int sum = IntStream.range(1, 5).sum(); // 10
</code></pre>
<ul>
<li>✅ <strong>New Date-Time API</strong></li>
</ul>
<pre><code class="language-java">
LocalDate today = LocalDate.now();
</code></pre>
<hr>
<h3 id="java-9-2017">☕ Java 9 (2017)</h3>
<ul>
<li>✅ <strong>Factory Methods</strong></li>
</ul>
<pre><code class="language-java">
List&lt;String&gt; list = List.of(&quot;A&quot;, &quot;B&quot;);
Set&lt;Integer&gt; set = Set.of(1, 2, 3);
</code></pre>
<ul>
<li>✅ <strong>Modules</strong></li>
</ul>
<pre><code class="language-java">
module com.example.myapp { requires java.sql; }
</code></pre>
<ul>
<li>✅ <strong>JShell</strong></li>
</ul>
<pre><code class="language-shell">
jshell&gt; 1 + 2
$1 ==&gt; 3
</code></pre>
<hr>
<h3 id="java-10-2018">☕ Java 10 (2018)</h3>
<ul>
<li>✅ <strong><em>_CODE</em>PLACEHOLDER<em>0</em>_ keyword</strong></li>
</ul>
<pre><code class="language-java">
var msg = &quot;Hello&quot;; // type inferred as String
</code></pre>
<hr>
<h3 id="java-11-2018-lts">☕ Java 11 (2018) – LTS</h3>
<ul>
<li>✅ <strong>New String methods</strong></li>
</ul>
<pre><code class="language-java">
&quot;  hi &quot;.strip();     // &quot;hi&quot;
&quot;java&quot;.repeat(3);    // &quot;javajavajava&quot;
</code></pre>
<ul>
<li>✅ <strong>HTTP Client</strong></li>
</ul>
<pre><code class="language-java">
HttpClient client = HttpClient.newHttpClient();
HttpRequest req = HttpRequest.newBuilder(URI.create(&quot;https://example.com&quot;)).build();
</code></pre>
<hr>
<h3 id="java-12-2019">☕ Java 12 (2019)</h3>
<ul>
<li>🧪 <strong>Switch Expressions (Preview)</strong></li>
</ul>
<pre><code class="language-java">
int numLetters = switch (day) {
    case MONDAY, FRIDAY -&gt; 6;
    default -&gt; 7;
};
</code></pre>
<hr>
<h3 id="java-1314-20192020">☕ Java 13–14 (2019–2020)</h3>
<ul>
<li>✅ <strong>Text Blocks</strong></li>
</ul>
<pre><code class="language-java">
String json = &quot;&quot;&quot;
              {
                 &quot;name&quot;: &quot;Alice&quot;,
                 &quot;age&quot;: 30
              }
              &quot;&quot;&quot;;
</code></pre>
<ul>
<li>🧪 <strong>Records (Preview in 14)</strong></li>
</ul>
<pre><code class="language-java">
record Point(int x, int y) {}
</code></pre>
<hr>
<h3 id="java-1516-20202021">☕ Java 15–16 (2020–2021)</h3>
<ul>
<li>✅ <strong>Records Finalized (16)</strong></li>
</ul>
<pre><code class="language-java">
record Person(String name, int age) {}
</code></pre>
<ul>
<li>✅ <strong>Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_</strong></li>
</ul>
<pre><code class="language-java">
if (obj instanceof String s) {
    System.out.println(s.toUpperCase());
}
</code></pre>
<hr>
<h3 id="java-17-2021-lts">☕ Java 17 (2021) – LTS</h3>
<ul>
<li>✅ <strong>Sealed Classes</strong></li>
</ul>
<pre><code class="language-java">
sealed interface Shape permits Circle, Square {}
final class Circle implements Shape {}
final class Square implements Shape {}
</code></pre>
<ul>
<li>🧪 <strong>Pattern Matching for <em>_CODE</em>PLACEHOLDER<em>0</em>_</strong></li>
</ul>
<pre><code class="language-java">
String formatted = switch (obj) {
    case Integer i -&gt; &quot;int: &quot; + i;
    case String s -&gt; &quot;str: &quot; + s;
    default -&gt; obj.toString();
};
</code></pre>
<hr>
<h3 id="java-1920-20222023">☕ Java 19–20 (2022–2023)</h3>
<ul>
<li>🧪 <strong>Virtual Threads (Preview)</strong></li>
</ul>
<pre><code class="language-java">
Thread.startVirtualThread(() -&gt; System.out.println(&quot;Hello!&quot;));
</code></pre>
<ul>
<li>🧪 <strong>Record Patterns</strong></li>
</ul>
<pre><code class="language-java">
record Point(int x, int y) {}
if (p instanceof Point(int x, int y)) {
    System.out.println(x + &quot;, &quot; + y);
}
</code></pre>
<hr>
<h3 id="java-21-2023-lts">☕ Java 21 (2023) – LTS</h3>
<ul>
<li>✅ <strong>Virtual Threads (Finalized)</strong></li>
</ul>
<pre><code class="language-java">
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -&gt; System.out.println(Thread.currentThread()));
}
</code></pre>
<ul>
<li>✅ <strong>Sequenced Collections</strong></li>
</ul>
<pre><code class="language-java">
SequencedCollection&lt;String&gt; sc = new ArrayList&lt;&gt;();
sc.addFirst(&quot;A&quot;);
sc.addLast(&quot;B&quot;);
</code></pre>
<ul>
<li>✅ <strong>String Templates (Preview)</strong></li>
</ul>
<pre><code class="language-java">
String name = &quot;Alice&quot;;
String msg = STR.&quot;Hello, \{name}!&quot;;
</code></pre>
<hr>
<h3 id="summary-table">✅ Summary Table</h3>
<pre><code class="language-mermaid">

timeline
    title Java Features (8 → 21 LTS)
    section Java 8 (2014) – LTS
      Lambda Expressions, Stream API, Date-Time API : Java 8
    section Java 9 (2017)
      Modules (Project Jigsaw), JShell, Factory Methods : Java 9
    section Java 10 (2018)
      var keyword, GC Abstraction : Java 10
    section Java 11 (2018) – LTS
      HTTP Client, String Methods, Removed Java EE : Java 11
    section Java 12–14 (2019–2020)
      Switch Expressions, Text Blocks, Records (preview), Helpful NPEs : Java 12-14
    section Java 15–16 (2020–2021)
      Text Blocks Final, Records Final, Sealed Classes (preview), Pattern Matching : Java 15-16
    section Java 17 (2021) – LTS
      Sealed Classes, Pattern Matching for switch (preview), Foreign API (incubator) : Java 17
    section Java 18–20 (2022–2023)
      Virtual Threads (preview), Structured Concurrency, Record Patterns : Java 18-20
    section Java 21 (2023) – LTS
      Virtual Threads Final, Sequenced Collections, Record Patterns, String Templates : Java 21
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h2 id="java-8">[Java 8](https://www.tutorialspoint.com/java8/index.htm)</h2>
<ul>
<li><a href="#1-lambda-expressions--stream-api">Lambda Expressions &amp;amp; Stream API</a></li>
<li><a href="#2-method-references">Method References</a></li>
<li><a href="#3-default--static-methods-in-interfaces">Default &amp;amp; Static Methods in Interfaces</a></li>
<li><a href="#4-type-annotations--repeating-annotations">Type Annotations &amp;amp; Repeating Annotations</a></li>
<li><a href="#5-method-parameter-reflection">Method Parameter Reflection</a></li>
<li><a href="#6-optional-date-time-and-completablefuture">Optional, Date‑Time, and CompletableFuture</a></li>
<li><a href="#7-javautilfunction-package">java.util.function Package</a></li>
<li><a href="#8-collections--comparator-improvements">Collections &amp;amp; Comparator Improvements</a></li>
<li><a href="#9-primitive‑streams--spliterator">Primitive Streams &amp;amp; Spliterator</a></li>
</ul>
<hr>
<h3 id="1-lambda-expressions-stream-api">1. Lambda Expressions &amp; Stream API</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ Why Lambdas?&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><strong>Conciseness</strong>: Replace one‑method anonymous classes with compact expressions</li>
<li><strong>Functional Style</strong>: Ideal for use with Streams, Predicates, Functions</li>
<li><strong>Readability</strong>: Focus on “what” rather than “how”</li>
</ul>
<pre><code class="language-java">
// pre‑Java 8
Runnable r1 = new Runnable() {
  public void run() { System.out.println(&quot;Hi&quot;); }
};

// Java 8 lambda
Runnable r2 = () -&gt; System.out.println(&quot;Hi&quot;);
</code></pre>
<h4 id="stream-basics">Stream Basics</h4>
<pre><code class="language-java">
List&lt;Car&gt; cheapCars =
  cars.stream()
      .filter(c -&gt; c.getKm() &lt; 50_000)
      .map(Car::getModel)
      .distinct()
      .collect(Collectors.toList());
</code></pre>
<ul>
<li><strong>Intermediate ops</strong> (<em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em><em>, </em><em>CODE</em>PLACEHOLDER<em>3</em>_, etc.) are <em>lazy</em></li>
<li><strong>Terminal ops</strong> (<em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em><em>, </em><em>CODE</em>PLACEHOLDER<em>3</em>_, etc.) trigger execution</li>
<li><strong>Parallel streams</strong>: <em>_CODE</em>PLACEHOLDER<em>0</em>_ for multi‑core processing</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="2-method-references">2. Method References</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ Shortcut to Lambdas&lt;/strong&gt;&lt;/summary&gt;</p>
<table>
<thead><tr>
<th>Syntax</th>
<th>Example</th>
</tr></thead><tbody>
<tr>
<td>`Class::staticMethod`</td>
<td>`Stream.of(&quot;a&quot;,&quot;b&quot;).forEach(System.out::println);`</td>
</tr>
<tr>
<td>`instance::instanceMethod`</td>
<td>`list.sort(String::compareToIgnoreCase);`</td>
</tr>
<tr>
<td>`Class::instanceMethod`</td>
<td>`Stream.of(&quot;a&quot;,&quot;b&quot;).map(String::toUpperCase)`</td>
</tr>
<tr>
<td>`Class::new`</td>
<td>`Supplier&lt;List&lt;String&gt;&gt; s = ArrayList::new;`</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="3-default-static-methods-in-interfaces">3. Default &amp; Static Methods in Interfaces</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ Add behavior without breaking impls&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
public interface MyService {
  void execute();

  // new in Java 8:
  default void log(String msg) {
    System.out.println(&quot;LOG: &quot; + msg);
  }
  static void helper() { … }
}
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="4-type-annotations-repeating-annotations">4. Type Annotations &amp; Repeating Annotations</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ Stronger, repeatable metadata&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><strong>Type annotations</strong>: <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li><strong>Repeatable annotations</strong>:</li>
</ul>
<p>  ```java</p>
<p>  @Review(&quot;alice&quot;)  </p>
<p>  @Review(&quot;bob&quot;)</p>
<p>  class MyClass { … }</p>
<p>  ```</p>
<p>  becomes…</p>
<p>  ```java</p>
<p>  @Reviews({ @Review(&quot;alice&quot;), @Review(&quot;bob&quot;) })</p>
<p>  class MyClass { … }</p>
<p>  ```</p>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="5-method-parameter-reflection">5. Method Parameter Reflection</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ <em>_CODE</em>PLACEHOLDER<em>0</em><em> flag in </em><em>CODE</em>PLACEHOLDER<em>1</em>_&lt;/strong&gt;&lt;/summary&gt;</p>
<pre><code class="language-java">
public void foo(int x, String y) { … }
// at runtime:
Method m = MyClass.class.getMethod(&quot;foo&quot;, int.class, String.class);
for (Parameter p : m.getParameters()) {
  System.out.println(p.getName());  // &quot;x&quot;, &quot;y&quot; instead of &quot;arg0&quot;, &quot;arg1&quot;
}
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="6-optional-datetime-and-completablefuture">6. Optional, Date‑Time, and CompletableFuture</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ Null‑safe, modern APIs&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><strong>Optional</strong>:</li>
</ul>
<p>  ```java</p>
<p>  Optional&lt;String&gt; o = Optional.ofNullable(maybeNull);</p>
<p>  o.ifPresent(System.out::println);</p>
<p>  ```</p>
<ul>
<li><strong>Date &amp; Time API</strong> (<em>_CODE</em>PLACEHOLDER<em>0</em>_):</li>
</ul>
<p>  ```java</p>
<p>  LocalDate today = LocalDate.now();</p>
<p>  LocalDate oneMonth = today.plusMonths(1);</p>
<p>  ```</p>
<ul>
<li><strong>CompletableFuture</strong>: Async, composable computations</li>
</ul>
<p>  ```java</p>
<p>  CompletableFuture</p>
<p>    .supplyAsync(() -&gt; fetchData())</p>
<p>    .thenApply(Data::process)</p>
<p>    .thenAccept(System.out::println);</p>
<p>  ```</p>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="7-javautilfunction-package">7. `java.util.function` Package</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ Core functional interfaces&lt;/strong&gt;&lt;/summary&gt;</p>
<table>
<thead><tr>
<th>Interface</th>
<th>Signature</th>
</tr></thead><tbody>
<tr>
<td>`Predicate&lt;T&gt;`</td>
<td>`T → boolean`</td>
</tr>
<tr>
<td>`Function&lt;T,R&gt;`</td>
<td>`T → R`</td>
</tr>
<tr>
<td>`Consumer&lt;T&gt;`</td>
<td>`T → void`</td>
</tr>
<tr>
<td>`Supplier&lt;T&gt;`</td>
<td>`() → T`</td>
</tr>
<tr>
<td>`BiFunction&lt;T,U,R&gt;`</td>
<td>`(T,U) → R`</td>
</tr>
<tr>
<td>`UnaryOperator&lt;T&gt;`</td>
<td>`T → T`</td>
</tr>
<tr>
<td>`BinaryOperator&lt;T&gt;`</td>
<td>`(T,T) → T`</td>
</tr>
</tbody></table>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="8-collections-comparator-improvements">8. Collections &amp; Comparator Improvements</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ New methods &amp; utilities&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><strong>Collection defaults</strong>:</li>
</ul>
<p>  ```java</p>
<p>  list.removeIf(x -&gt; x.isObsolete());</p>
<p>  list.replaceAll(String::trim);</p>
<p>  list.forEach(System.out::println);</p>
<p>  ```</p>
<ul>
<li><strong>Factory methods</strong>: <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em>_</li>
<li><strong>Comparator enhancements</strong>:</li>
</ul>
<p>  ```java</p>
<p>  Comparator&lt;Person&gt; cmp = </p>
<p>    Comparator.comparing(Person::getAge)</p>
<p>              .thenComparing(Person::getName)</p>
<p>              .reversed();</p>
<p>  ```</p>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="9-primitive-streams-spliterator">9. Primitive Streams &amp; Spliterator</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;▶ Specialized streams for perf &amp; parallelism&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li><strong>Primitive streams</strong>: <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em>_</li>
<li><strong>Range ops</strong>: <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
<li><strong>Spliterator</strong>:</li>
</ul>
<ul>
<li>Efficient, parallel‑friendly iteration</li>
<li>Obtained via <em>_CODE</em>PLACEHOLDER<em>0</em>_</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h3 id="java-8-key-features">Java 8 Key Features</h3>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;1. Method Reference&lt;/strong&gt; &lt;a href=&quot;https://www.javatpoint.com/java-8-method-reference&quot;&gt;(Learn more)&lt;/a&gt;&lt;/summary&gt;</p>
<p>A method reference allows you to refer to methods directly using <em>_CODE</em>PLACEHOLDER<em>0</em>_. Four types:</p>
<ul>
<li>Static method reference</li>
<li>Instance method on an object</li>
<li>Instance method on a class type</li>
<li>Constructor reference</li>
</ul>
<p><strong>Without Method Reference</strong></p>
<pre><code class="language-java">
List&lt;String&gt; result = cars.stream().map(car -&gt; car.toString()).collect(Collectors.toList());
</code></pre>
<p><strong>With Method Reference</strong></p>
<pre><code class="language-java">
List&lt;String&gt; result = cars.stream().map(Car::toString).collect(Collectors.toList());
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;2. Default Methods in Interfaces&lt;/strong&gt;&lt;/summary&gt;</p>
<p>Default methods let you add new methods to interfaces without breaking implementations.</p>
<pre><code class="language-java">
public interface Logging {
    void log(String message);

    default void log(String message, Date date) {
        System.out.println(date.toString() + &quot;: &quot; + message);
    }
}
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;3. Type Annotations&lt;/strong&gt;&lt;/summary&gt;</p>
<p>Allows annotations on almost every use of a type: generics, casts, throws, etc.</p>
<pre><code class="language-java">
@NotNull String name = args[0];
List&lt;@Email String&gt; emails;
List&lt;String&gt; request = new @NotEmpty ArrayList&lt;&gt;();
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;4. Double Colon Operator (::)&lt;/strong&gt;&lt;/summary&gt;</p>
<p>Method reference operator that acts like a shortcut for lambda expressions.</p>
<pre><code class="language-java">
&lt;ClassName&gt;::&lt;methodName&gt;
</code></pre>
<p>It improves code readability and avoids boilerplate.</p>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;5. Optional API&lt;/strong&gt;&lt;/summary&gt;</p>
<p>Avoid <em>_CODE</em>PLACEHOLDER<em>0</em><em> by using </em><em>CODE</em>PLACEHOLDER<em>1</em>_, a container for possibly-null values.</p>
<pre><code class="language-java">
Optional&lt;String&gt; name = Optional.ofNullable(getName());
name.ifPresent(val -&gt; System.out.println(&quot;Hello &quot; + val));
</code></pre>
<p>Use methods like <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em><em>, </em><em>CODE</em>PLACEHOLDER<em>3</em><em>, </em><em>CODE</em>PLACEHOLDER<em>4</em>_, etc.</p>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;6. New Date and Time API&lt;/strong&gt; &lt;a href=&quot;https://www.geeksforgeeks.org/new-date-time-api-java8/&quot;&gt;(Learn more)&lt;/a&gt;&lt;/summary&gt;</p>
<ul>
<li>Immutable and thread-safe</li>
<li>Fluent API for manipulating date and time</li>
</ul>
<pre><code class="language-java">
LocalDate today = LocalDate.now();
LocalDate tomorrow = today.plusDays(1);
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;7. StringJoiner Utility&lt;/strong&gt; &lt;a href=&quot;https://www.javatpoint.com/java-stringjoiner&quot;&gt;(Learn more)&lt;/a&gt;&lt;/summary&gt;</p>
<p>Allows joining strings with delimiters, prefixes, and suffixes.</p>
<pre><code class="language-java">
StringJoiner joiner = new StringJoiner(&quot;, &quot;, &quot;[&quot;, &quot;]&quot;);
joiner.add(&quot;A&quot;).add(&quot;B&quot;).add(&quot;C&quot;);
System.out.println(joiner.toString()); // [A, B, C]
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;8. Record Class &amp; Sealed Classes (Introduced Later)&lt;/strong&gt;&lt;/summary&gt;</p>
<ul>
<li>Record: concise syntax for immutable data classes</li>
<li>Sealed classes: restrict which classes can extend them (added in Java 15+)</li>
</ul>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;9. Functional Interface Rules&lt;/strong&gt;&lt;/summary&gt;</p>
<p>Functional interfaces have only one abstract method. Can be extended if no new abstract methods are added.</p>
<pre><code class="language-java">
@FunctionalInterface
interface A { void methodA(); }

@FunctionalInterface
interface B extends A { }
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;10. Collections Improvements&lt;/strong&gt;&lt;/summary&gt;</p>
<p><strong>Stream API Enhancements</strong></p>
<pre><code class="language-java">
myList.stream().filter(s -&gt; s.startsWith(&quot;a&quot;)).forEach(System.out::println);
</code></pre>
<p><strong>Default Collection Methods</strong>: <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em><em>, </em><em>CODE</em>PLACEHOLDER<em>3</em><em>, </em><em>CODE</em>PLACEHOLDER<em>4</em>_</p>
<p><strong>Map Enhancements</strong></p>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em><em>, </em><em>CODE</em>PLACEHOLDER<em>3</em><em>, </em><em>CODE</em>PLACEHOLDER<em>4</em><em>, </em><em>CODE</em>PLACEHOLDER<em>5</em>_</li>
</ul>
<p><strong>Concurrent Collections</strong></p>
<pre><code class="language-java">
map.forEach((k, v) -&gt; System.out.println(k + &quot;=&quot; + v));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;11. Collectors Utility&lt;/strong&gt;&lt;/summary&gt;</p>
<p>Useful for reduction operations.</p>
<pre><code class="language-java">
List&lt;String&gt; list = stream.collect(Collectors.toList());
Map&lt;Boolean, List&lt;String&gt;&gt; partitioned = stream.collect(Collectors.partitioningBy(s -&gt; s.length() &gt; 3));
</code></pre>
<p>&lt;/details&gt;</p>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;12. Stream Operations: map() vs flatMap()&lt;/strong&gt;&lt;/summary&gt;</p>
<p><strong>map()</strong>: one-to-one transformation.</p>
<pre><code class="language-java">
List&lt;Integer&gt; lengths = words.stream().map(String::length).collect(Collectors.toList());
</code></pre>
<p><strong>flatMap()</strong>: one-to-many transformation.</p>
<pre><code class="language-java">
List&lt;Integer&gt; flatList = listOfLists.stream().flatMap(List::stream).collect(Collectors.toList());
</code></pre>
<p>&lt;/details&gt;</p>
<h1 id="safevarargs-in-java">@SafeVarargs in Java</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;@SafeVarargs in Java — Explanation &amp; Example&lt;/strong&gt;&lt;/summary&gt;</p>
<hr>
<h2 id="what-is-safevarargs">What is `@SafeVarargs`?</h2>
<ul>
<li>Suppresses unchecked warnings related to <strong>generic varargs</strong>.</li>
<li>Indicates the method/constructor <strong>does not perform unsafe operations</strong> on varargs.</li>
<li>Can be applied only to:</li>
</ul>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ methods</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ methods</li>
<li>constructors</li>
</ul>
<hr>
<h2 id="why-use-safevarargs">Why use `@SafeVarargs`?</h2>
<ul>
<li>Java varargs use arrays internally, and generics + arrays are unsafe by nature.</li>
<li>Using generic varargs causes compiler <strong>unchecked warnings</strong>.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ tells the compiler <strong>&quot;this is safe, don’t warn me.&quot;</strong></li>
</ul>
<hr>
<h2 id="example-without-safevarargs-generates-warning">Example without `@SafeVarargs` (generates warning)</h2>
<pre><code class="language-java">
public class Example {
    public static &lt;T&gt; void printAll(T... items) {
        for (T item : items) {
            System.out.println(item);
        }
    }

    public static void main(String[] args) {
        printAll(&quot;Hello&quot;, &quot;World&quot;); // Warning about unchecked generic array creation
    }
}
</code></pre>
<hr>
<h2 id="example-with-safevarargs-no-warning">Example with `@SafeVarargs` (no warning)</h2>
<pre><code class="language-java">
public class Example {
    @SafeVarargs
    public static &lt;T&gt; void printAll(T... items) {
        for (T item : items) {
            System.out.println(item);
        }
    }

    public static void main(String[] args) {
        printAll(&quot;Hello&quot;, &quot;World&quot;); // No warning now
    }
}
</code></pre>
<hr>
<h2 id="important-notes">Important Notes</h2>
<ul>
<li><strong>Cannot</strong> annotate non-final instance methods.</li>
<li>Use only when method <strong>does not perform unsafe operations</strong> on varargs.</li>
<li>Helps <strong>document intent</strong> and keeps builds warning-free.</li>
</ul>
<hr>
<h2 id="when-to-use">When to use?</h2>
<ul>
<li>Static or final utility methods with generic varargs.</li>
<li>When sure the varargs usage is safe.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<p> <strong>Java 8 through Java 21</strong>:</p>
<table>
<thead><tr>
<th>Java Version</th>
<th>Key Features Introduced</th>
</tr></thead><tbody>
<tr>
<td>**Java 8 (2014)**</td>
<td>- Lambda Expressions&lt;br&gt;- Functional Interfaces&lt;br&gt;- Streams API&lt;br&gt;- Optional Class&lt;br&gt;- Default and Static Methods in Interfaces&lt;br&gt;- Date and Time API (java.time)&lt;br&gt;- Nashorn JavaScript Engine&lt;br&gt;- Method References&lt;br&gt;- Repeatable Annotations&lt;br&gt;- Type Annotations</td>
</tr>
<tr>
<td>**Java 9 (2017)**</td>
<td>- Module System (Project Jigsaw)&lt;br&gt;- JShell (REPL)&lt;br&gt;- Private Methods in Interfaces&lt;br&gt;- Collection Factory Methods (List.of, Set.of, Map.of)&lt;br&gt;- Stream API Improvements (takeWhile, dropWhile, iterate)&lt;br&gt;- Optional enhancements (ifPresentOrElse, stream)&lt;br&gt;- Process API Updates</td>
</tr>
<tr>
<td>**Java 10 (2018)**</td>
<td>- Local-Variable Type Inference (`var`)&lt;br&gt;- Application Class-Data Sharing&lt;br&gt;- Parallel Full GC for G1&lt;br&gt;- Thread-Local Handshakes&lt;br&gt;- Root Certificates in JDK</td>
</tr>
<tr>
<td>**Java 11 (2018)**</td>
<td>- HTTP Client API (Standardized)&lt;br&gt;- Local-Variable Syntax for Lambda Parameters&lt;br&gt;- String Methods (`isBlank`, `lines`, `strip`, `repeat`)&lt;br&gt;- Collection toArray(IntFunction)&lt;br&gt;- File Methods (`readString`, `writeString`)&lt;br&gt;- Running Java Files with `java &lt;file&gt;.java`</td>
</tr>
<tr>
<td>**Java 12 (2019)**</td>
<td>- Switch Expressions (preview)&lt;br&gt;- New JVM Constants API&lt;br&gt;- Shenandoah &amp; Abortable Mixed GC improvements&lt;br&gt;- Compact Number Formatting</td>
</tr>
<tr>
<td>**Java 13 (2019)**</td>
<td>- Text Blocks (preview)&lt;br&gt;- Switch Expressions Enhancements&lt;br&gt;- Reimplement the Legacy Socket API</td>
</tr>
<tr>
<td>**Java 14 (2020)**</td>
<td>- Records (preview)&lt;br&gt;- Pattern Matching for `instanceof` (preview)&lt;br&gt;- NVM-support for JFR&lt;br&gt;- Helpful NullPointerExceptions</td>
</tr>
<tr>
<td>**Java 15 (2020)**</td>
<td>- Sealed Classes (preview)&lt;br&gt;- Hidden Classes&lt;br&gt;- Text Blocks (standardized)&lt;br&gt;- Records (second preview)&lt;br&gt;- Pattern Matching for `instanceof` (second preview)</td>
</tr>
<tr>
<td>**Java 16 (2021)**</td>
<td>- Records (standardized)&lt;br&gt;- Pattern Matching for `instanceof` (standardized)&lt;br&gt;- Sealed Classes (second preview)&lt;br&gt;- Vector API (incubator)&lt;br&gt;- Foreign Linker API (incubator)</td>
</tr>
<tr>
<td>**Java 17 (2021, LTS)**</td>
<td>- Sealed Classes (standardized)&lt;br&gt;- Pattern Matching for switch (preview)&lt;br&gt;- Strong Encapsulation of JDK Internals&lt;br&gt;- New macOS rendering pipeline&lt;br&gt;- Foreign Function &amp; Memory API (incubator)</td>
</tr>
<tr>
<td>**Java 18 (2022)**</td>
<td>- Simple Web Server&lt;br&gt;- UTF-8 by default&lt;br&gt;- Vector API (second incubator)&lt;br&gt;- Code Snippets in Java API Documentation</td>
</tr>
<tr>
<td>**Java 19 (2022)**</td>
<td>- Virtual Threads (preview)&lt;br&gt;- Record Patterns (preview)&lt;br&gt;- Pattern Matching for switch (second preview)&lt;br&gt;- Foreign Function &amp; Memory API (second incubator)</td>
</tr>
<tr>
<td>**Java 20 (2023)**</td>
<td>- Scoped Values (incubator)&lt;br&gt;- Record Patterns (second preview)&lt;br&gt;- Pattern Matching for switch (third preview)&lt;br&gt;- Virtual Threads (second preview)&lt;br&gt;- Foreign Function &amp; Memory API (third incubator)</td>
</tr>
<tr>
<td>**Java 21 (2023, LTS)**</td>
<td>- Virtual Threads (standardized)&lt;br&gt;- Sequenced Collections&lt;br&gt;- String Templates (preview)&lt;br&gt;- Pattern Matching for switch (standardized)&lt;br&gt;- Record Patterns (third preview)&lt;br&gt;- Structured Concurrency (incubator)&lt;br&gt;- Foreign Function &amp; Memory API (fourth incubator)</td>
</tr>
</tbody></table>
<hr>
<p>Perfect! Let’s start with <strong>Java 8</strong>. I’ll organize it in the expandable <em>_CODE</em>PLACEHOLDER<em>0</em>_ format for clarity.</p>
<hr>
<h1 id="java-8">Java 8</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 8&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-lambda-expressions">1. Lambda Expressions</h2>
<p><strong>Description:</strong> Lambda expressions provide a clear and concise way to represent a single method interface using an expression.</p>
<p><strong>Syntax:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em><em> or </em><em>CODE</em>PLACEHOLDER<em>1</em>_</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
List&lt;String&gt; names = Arrays.asList(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);
names.forEach(name -&gt; System.out.println(name));
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Reduces boilerplate code for implementing interfaces.</li>
<li>Works with Functional Interfaces (interfaces with a single abstract method).</li>
</ul>
<hr>
<h2 id="2-functional-interfaces">2. Functional Interfaces</h2>
<p><strong>Description:</strong> Interfaces with a single abstract method. Lambda expressions can be used to implement them.</p>
<p><strong>Common Examples:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em><em>, </em><em>CODE</em>PLACEHOLDER<em>3</em><em>, </em><em>CODE</em>PLACEHOLDER<em>4</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

Greeting greeting = name -&gt; System.out.println(&quot;Hello, &quot; + name);
greeting.sayHello(&quot;Alice&quot;);
</code></pre>
<hr>
<h2 id="3-streams-api">3. Streams API</h2>
<p><strong>Description:</strong> Provides a functional approach to process sequences of elements (like collections) efficiently.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
List&lt;Integer&gt; numbers = Arrays.asList(1, 2, 3, 4, 5);
List&lt;Integer&gt; squared = numbers.stream()
                               .map(n -&gt; n * n)
                               .collect(Collectors.toList());
System.out.println(squared); // [1, 4, 9, 16, 25]
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Supports operations like <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em><em>, </em><em>CODE</em>PLACEHOLDER<em>3</em><em>, </em><em>CODE</em>PLACEHOLDER<em>4</em>_.</li>
</ul>
<hr>
<h2 id="4-optional-class">4. Optional Class</h2>
<p><strong>Description:</strong> A container that may or may not contain a value to avoid <em>_CODE</em>PLACEHOLDER<em>0</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Optional&lt;String&gt; optional = Optional.of(&quot;Hello&quot;);
optional.ifPresent(System.out::println); // Prints &quot;Hello&quot;
</code></pre>
<hr>
<h2 id="java-optional-cheat-sheet">**Java Optional Cheat Sheet**</h2>
<table>
<thead><tr>
<th>Method</th>
<th>Description</th>
<th>Example</th>
</tr></thead><tbody>
<tr>
<td>`of(T value)`</td>
<td>Returns an Optional with a **non-null** value; throws NPE if null</td>
<td>`Optional&lt;String&gt; opt = Optional.of(&quot;Hello&quot;);`</td>
</tr>
<tr>
<td>`ofNullable(T value)`</td>
<td>Returns Optional containing value if non-null, else empty</td>
<td>`Optional&lt;String&gt; opt = Optional.ofNullable(possibleNull);`</td>
</tr>
<tr>
<td>`empty()`</td>
<td>Returns an empty Optional</td>
<td>`Optional&lt;String&gt; opt = Optional.empty();`</td>
</tr>
<tr>
<td>`isPresent()`</td>
<td>Checks if a value is present</td>
<td>`if(opt.isPresent()) { ... }`</td>
</tr>
<tr>
<td>`isEmpty()`</td>
<td>Checks if Optional is empty (Java 11+)</td>
<td>`if(opt.isEmpty()) { ... }`</td>
</tr>
<tr>
<td>`ifPresent(Consumer&lt;? super T&gt; action)`</td>
<td>Executes action if value is present</td>
<td>`opt.ifPresent(System.out::println);`</td>
</tr>
<tr>
<td>`ifPresentOrElse(Consumer&lt;? super T&gt; action, Runnable emptyAction)`</td>
<td>Executes action if present, else emptyAction (Java 9+)</td>
<td>`opt.ifPresentOrElse(System.out::println, () -&gt; System.out.println(&quot;No value&quot;));`</td>
</tr>
<tr>
<td>`get()`</td>
<td>Returns value if present, else throws `NoSuchElementException`</td>
<td>`String s = opt.get();`</td>
</tr>
<tr>
<td>`orElse(T other)`</td>
<td>Returns value if present, else `other`</td>
<td>`String s = opt.orElse(&quot;Default&quot;);`</td>
</tr>
<tr>
<td>`orElseGet(Supplier&lt;? extends T&gt; supplier)`</td>
<td>Returns value if present, else invokes supplier</td>
<td>`String s = opt.orElseGet(() -&gt; &quot;Generated&quot;);`</td>
</tr>
<tr>
<td>`orElseThrow()`</td>
<td>Returns value if present, else throws `NoSuchElementException`</td>
<td>`String s = opt.orElseThrow();`</td>
</tr>
<tr>
<td>`orElseThrow(Supplier&lt;? extends X&gt; exceptionSupplier)`</td>
<td>Returns value if present, else throws custom exception</td>
<td>`String s = opt.orElseThrow(() -&gt; new RuntimeException(&quot;Missing&quot;));`</td>
</tr>
<tr>
<td>`map(Function&lt;? super T,? extends U&gt; mapper)`</td>
<td>Transforms value if present and wraps in Optional</td>
<td>`Optional&lt;Integer&gt; len = opt.map(String::length);`</td>
</tr>
<tr>
<td>`flatMap(Function&lt;? super T, Optional&lt;U&gt;&gt; mapper)`</td>
<td>Transforms value and avoids nested Optional</td>
<td>`Optional&lt;Integer&gt; len = opt.flatMap(s -&gt; Optional.of(s.length()));`</td>
</tr>
<tr>
<td>`filter(Predicate&lt;? super T&gt; predicate)`</td>
<td>Returns Optional if value matches predicate, else empty</td>
<td>`opt.filter(s -&gt; s.length() &gt; 3);`</td>
</tr>
<tr>
<td>`stream()`</td>
<td>Converts Optional to Stream (Java 9+)</td>
<td>`opt.stream().forEach(System.out::println);`</td>
</tr>
</tbody></table>
<hr>
<h3 id="example-using-multiple-methods">**Example Using Multiple Methods**</h3>
<pre><code class="language-java">
Optional&lt;String&gt; optional = Optional.ofNullable(&quot;Java&quot;);

optional
    .filter(s -&gt; s.length() &gt; 3)          // keeps &quot;Java&quot;
    .map(String::toUpperCase)             // transforms to &quot;JAVA&quot;
    .ifPresentOrElse(
        System.out::println, 
        () -&gt; System.out.println(&quot;No value&quot;)
    );

String result = optional
    .map(String::toLowerCase)
    .orElse(&quot;default&quot;);                    // returns &quot;java&quot;
</code></pre>
<p>✅ <strong>Key Notes:</strong></p>
<ul>
<li>Use <em>_CODE</em>PLACEHOLDER<em>0</em><em> for transformations, </em><em>CODE</em>PLACEHOLDER<em>1</em>_ to avoid nested Optionals.</li>
<li>Prefer <em>_CODE</em>PLACEHOLDER<em>0</em>_ for <strong>expensive default computations</strong>.</li>
<li>Use <em>_CODE</em>PLACEHOLDER<em>0</em><em> instead of manually checking </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ is great for functional pipelines.</li>
</ul>
<hr>
<pre><code class="language-">
       Optional&lt;T&gt;
       ┌─────────┐
       │ present?│
       └─────┬───┘
          yes│        no
             ▼
         ┌──────────┐
         │ map/     │  &lt;-- Transform value if present
         │ flatMap  │
         └─────┬────┘
               │
        ┌──────▼─────┐
        │ filter     │  &lt;-- Keep value if predicate true
        └──────┬─────┘
               │
          ┌────▼────┐
          │ ifPresent │ &lt;-- Execute action if value exists
          └────┬────┘
               │
         ┌─────▼─────┐
         │ orElse    │ &lt;-- Return default if empty
         │ orElseGet │
         │ orElseThrow│
         └───────────┘
</code></pre>
<h3 id="how-to-read-it">**How to Read It**</h3>
<ul>
<li>Start with an <em>_CODE</em>PLACEHOLDER<em>0</em>_.</li>
<li>Check if value is <strong>present</strong>.</li>
<li>If yes:</li>
</ul>
<ul>
<li>Transform with <em>_CODE</em>PLACEHOLDER<em>0</em><em>/</em><em>CODE</em>PLACEHOLDER<em>1</em>_.</li>
<li>Filter with <em>_CODE</em>PLACEHOLDER<em>0</em>_.</li>
<li>Use <em>_CODE</em>PLACEHOLDER<em>0</em>_ or continue chaining.</li>
<li>If value is absent, handle with:</li>
</ul>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> / </em><em>CODE</em>PLACEHOLDER<em>1</em><em> / </em><em>CODE</em>PLACEHOLDER<em>2</em>_.</li>
</ul>
<hr>
<h2 id="5-default-and-static-methods-in-interfaces">5. Default and Static Methods in Interfaces</h2>
<p><strong>Description:</strong> Interfaces can have method implementations.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
interface Vehicle {
    default void start() {
        System.out.println(&quot;Vehicle started&quot;);
    }

    static void info() {
        System.out.println(&quot;Vehicles are means of transport&quot;);
    }
}

class Car implements Vehicle {}

Car car = new Car();
car.start();       // Vehicle started
Vehicle.info();    // Vehicles are means of transport
</code></pre>
<hr>
<h2 id="6-date-and-time-api-javatime">6. Date and Time API (`java.time`)</h2>
<p><strong>Description:</strong> Modern API to handle date and time instead of <em>_CODE</em>PLACEHOLDER<em>0</em><em> and </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, Month.JANUARY, 1);
Period age = Period.between(birthday, today);
System.out.println(&quot;Age: &quot; + age.getYears());
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Classes: <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em><em>, </em><em>CODE</em>PLACEHOLDER<em>3</em><em>, </em><em>CODE</em>PLACEHOLDER<em>4</em><em>, </em><em>CODE</em>PLACEHOLDER<em>5</em>_.</li>
</ul>
<hr>
<h2 id="7-method-references">7. Method References</h2>
<p><strong>Description:</strong> A shorthand for calling a method using <em>_CODE</em>PLACEHOLDER<em>0</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
List&lt;String&gt; names = Arrays.asList(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);
names.forEach(System.out::println); // same as lambda
</code></pre>
<hr>
<h2 id="8-repeatable-annotations">8. Repeatable Annotations</h2>
<p><strong>Description:</strong> Annotations that can be applied multiple times on the same element.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
@Repeatable(Schedules.class)
@interface Schedule {
    String day();
}

@interface Schedules {
    Schedule[] value();
}

@Schedule(day=&quot;Monday&quot;)
@Schedule(day=&quot;Tuesday&quot;)
class Work {}
</code></pre>
<hr>
<h2 id="9-type-annotations">9. Type Annotations</h2>
<p><strong>Description:</strong> Can be used wherever types are used (useful with tools like Checker Framework).</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
@NonNull String name;
</code></pre>
<hr>
<h2 id="10-nashorn-javascript-engine">10. Nashorn JavaScript Engine</h2>
<p><strong>Description:</strong> Java 8 included a lightweight JavaScript engine to execute JS code from Java.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
ScriptEngine engine = new ScriptEngineManager().getEngineByName(&quot;nashorn&quot;);
engine.eval(&quot;print(&#x27;Hello from JavaScript&#x27;)&quot;);
</code></pre>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-9">Java 9</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 9&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-module-system-project-jigsaw">1. Module System (Project Jigsaw)</h2>
<p><strong>Description:</strong> Java 9 introduced modules to improve modularity and encapsulation. A module groups packages and defines dependencies.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
// module-info.java
module my.module {
    requires java.sql;
    exports com.example.myapp;
}
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Helps in better packaging and reducing classpath issues.</li>
<li>Allows strong encapsulation of code.</li>
</ul>
<hr>
<h2 id="2-jshell-repl">2. JShell (REPL)</h2>
<p><strong>Description:</strong> JShell is a Read-Eval-Print Loop for executing Java code interactively. Useful for learning, testing, and prototyping.</p>
<p><strong>Example Usage:</strong></p>
<pre><code class="language-bash">
$ jshell
jshell&gt; int a = 10;
jshell&gt; a * 2
$2 ==&gt; 20
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>No need to write full class or main method for quick testing.</li>
</ul>
<hr>
<h2 id="3-private-methods-in-interfaces">3. Private Methods in Interfaces</h2>
<p><strong>Description:</strong> Interfaces can have private methods to avoid code duplication in default methods.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
interface Vehicle {
    default void start() {
        log(&quot;Vehicle started&quot;);
    }
    
    private void log(String message) {
        System.out.println(message);
    }
}

class Car implements Vehicle {}
new Car().start(); // Vehicle started
</code></pre>
<hr>
<h2 id="4-collection-factory-methods">4. Collection Factory Methods</h2>
<p><strong>Description:</strong> Provides convenient static factory methods for collections like <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, and </em><em>CODE</em>PLACEHOLDER<em>2</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
List&lt;String&gt; list = List.of(&quot;A&quot;, &quot;B&quot;, &quot;C&quot;);
Set&lt;Integer&gt; set = Set.of(1, 2, 3);
Map&lt;String, Integer&gt; map = Map.of(&quot;Alice&quot;, 1, &quot;Bob&quot;, 2);
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Collections created are immutable.</li>
</ul>
<hr>
<h2 id="5-stream-api-improvements">5. Stream API Improvements</h2>
<p><strong>Description:</strong> New methods for streams to make operations easier.</p>
<p><strong>Examples:</strong></p>
<pre><code class="language-java">
List&lt;Integer&gt; numbers = List.of(1, 2, 3, 4, 5);

// takeWhile
numbers.stream().takeWhile(n -&gt; n &lt; 4).forEach(System.out::println); // 1 2 3

// dropWhile
numbers.stream().dropWhile(n -&gt; n &lt; 4).forEach(System.out::println); // 4 5

// iterate with predicate
Stream.iterate(1, n -&gt; n &lt; 10, n -&gt; n * 2).forEach(System.out::println); // 1 2 4 8
</code></pre>
<hr>
<h2 id="6-optional-enhancements">6. Optional Enhancements</h2>
<p><strong>Description:</strong> Added <em>_CODE</em>PLACEHOLDER<em>0</em><em> and </em><em>CODE</em>PLACEHOLDER<em>1</em>_ methods.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Optional&lt;String&gt; optional = Optional.of(&quot;Hello&quot;);

// ifPresentOrElse
optional.ifPresentOrElse(System.out::println, () -&gt; System.out.println(&quot;Empty&quot;));

// stream
optional.stream().forEach(System.out::println);
</code></pre>
<hr>
<h2 id="7-process-api-updates">7. Process API Updates</h2>
<p><strong>Description:</strong> New API to handle and control OS processes more easily.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
ProcessHandle processHandle = ProcessHandle.current();
System.out.println(&quot;PID: &quot; + processHandle.pid());
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Can get process info, children processes, and manage processes efficiently.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-10">Java 10</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 10&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-local-variable-type-inference-var">1. Local-Variable Type Inference (`var`)</h2>
<p><strong>Description:</strong> Allows the compiler to infer the type of a local variable, reducing boilerplate code.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
var name = &quot;Alice&quot;;  // inferred as String
var numbers = List.of(1, 2, 3); // inferred as List&lt;Integer&gt;

System.out.println(name);    // Alice
System.out.println(numbers); // [1, 2, 3]
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Only works for local variables, not for method parameters or fields.</li>
<li>Improves readability without losing type safety.</li>
</ul>
<hr>
<h2 id="2-application-class-data-sharing-appcds">2. Application Class-Data Sharing (AppCDS)</h2>
<p><strong>Description:</strong> Enhances JVM startup performance by sharing common class metadata between multiple Java processes.</p>
<p><strong>Usage Example:</strong></p>
<pre><code class="language-bash">
# Dump shared classes
java -Xshare:dump -classpath myApp.jar

# Run using shared classes
java -Xshare:on -cp myApp.jar MyApp
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Reduces startup time and memory footprint for large applications.</li>
</ul>
<hr>
<h2 id="3-parallel-full-gc-for-g1">3. Parallel Full GC for G1</h2>
<p><strong>Description:</strong> G1 Garbage Collector now performs full GC in parallel, improving pause times.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-bash">
java -XX:+UseG1GC -jar MyApp.jar
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Enhances performance in memory-intensive applications.</li>
</ul>
<hr>
<h2 id="4-thread-local-handshakes">4. Thread-Local Handshakes</h2>
<p><strong>Description:</strong> Allows the JVM to perform thread-local operations without stopping all threads.</p>
<p><strong>Example:</strong></p>
<ul>
<li>Internal JVM improvement; not visible directly in code, but improves performance of JVM tooling and GC.</li>
</ul>
<hr>
<h2 id="5-root-certificates-in-jdk">5. Root Certificates in JDK</h2>
<p><strong>Description:</strong> JDK now includes a set of default root certificates for secure connections.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
URL url = new URL(&quot;https://example.com&quot;);
HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
conn.connect();
System.out.println(conn.getResponseCode());
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Simplifies SSL/TLS usage without requiring external certificate imports.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-11">Java 11</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 11&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-http-client-api-standardized">1. HTTP Client API (Standardized)</h2>
<p><strong>Description:</strong> Provides a modern, easy-to-use API for HTTP requests and responses. Supports synchronous and asynchronous calls.</p>
<p><strong>Example (Synchronous):</strong></p>
<pre><code class="language-java">
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create(&quot;https://jsonplaceholder.typicode.com/todos/1&quot;))
    .build();

HttpResponse&lt;String&gt; response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
</code></pre>
<p><strong>Example (Asynchronous):</strong></p>
<pre><code class="language-java">
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
      .thenAccept(System.out::println);
</code></pre>
<hr>
<h2 id="2-local-variable-syntax-for-lambda-parameters">2. Local-Variable Syntax for Lambda Parameters</h2>
<p><strong>Description:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em>_ can now be used in lambda parameters, enabling annotations and type inference.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
BiFunction&lt;Integer, Integer, Integer&gt; sum = (var a, var b) -&gt; a + b;
System.out.println(sum.apply(5, 10)); // 15
</code></pre>
<hr>
<h2 id="3-new-string-methods">3. New String Methods</h2>
<p><strong>Description:</strong> Several utility methods added to <em>_CODE</em>PLACEHOLDER<em>0</em>_ class.</p>
<p><strong>Examples:</strong></p>
<pre><code class="language-java">
String str = &quot;  Hello World  &quot;;

System.out.println(str.isBlank()); // false
System.out.println(str.strip());   // &quot;Hello World&quot;
System.out.println(str.lines().count()); // 1
System.out.println(&quot;Hi!&quot;.repeat(3)); // Hi!Hi!Hi!
</code></pre>
<hr>
<h2 id="4-collection-toarrayintfunction">4. Collection toArray(IntFunction)</h2>
<p><strong>Description:</strong> New way to convert collections to arrays.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
List&lt;String&gt; names = List.of(&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;);
String[] arr = names.toArray(String[]::new);
System.out.println(Arrays.toString(arr)); // [Alice, Bob, Charlie]
</code></pre>
<hr>
<h2 id="5-file-methods-readstring-writestring">5. File Methods (`readString`, `writeString`)</h2>
<p><strong>Description:</strong> Simplifies reading and writing files with strings.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Path filePath = Path.of(&quot;example.txt&quot;);

// Write to file
Files.writeString(filePath, &quot;Hello Java 11!&quot;);

// Read from file
String content = Files.readString(filePath);
System.out.println(content); // Hello Java 11!
</code></pre>
<hr>
<h2 id="6-running-java-files-directly">6. Running Java Files Directly</h2>
<p><strong>Description:</strong> Run a single Java file without compiling it manually.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-bash">
java HelloWorld.java
</code></pre>
<p><strong>HelloWorld.java:</strong></p>
<pre><code class="language-java">
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println(&quot;Hello from Java 11!&quot;);
    }
}
</code></pre>
<hr>
<h2 id="7-other-notable-features">7. Other Notable Features</h2>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ can be used for lambda parameters.</li>
<li>Improved <em>_CODE</em>PLACEHOLDER<em>0</em>_ API for better functional programming support.</li>
<li>Removal of deprecated APIs like <em>_CODE</em>PLACEHOLDER<em>0</em><em> and </em><em>CODE</em>PLACEHOLDER<em>1</em>_ modules.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-12">Java 12</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 12&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-switch-expressions-preview">1. Switch Expressions (Preview)</h2>
<p><strong>Description:</strong> <em>_CODE</em>PLACEHOLDER<em>0</em><em> can now return a value and use a more concise syntax with </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
int day = 3;
String dayName = switch (day) {
    case 1 -&gt; &quot;Monday&quot;;
    case 2 -&gt; &quot;Tuesday&quot;;
    case 3 -&gt; &quot;Wednesday&quot;;
    case 4 -&gt; &quot;Thursday&quot;;
    case 5 -&gt; &quot;Friday&quot;;
    default -&gt; &quot;Weekend&quot;;
};
System.out.println(dayName); // Wednesday
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Can use multiple labels: <em>_CODE</em>PLACEHOLDER<em>0</em>_.</li>
<li>Reduces boilerplate and allows using <em>_CODE</em>PLACEHOLDER<em>0</em>_ for complex expressions.</li>
</ul>
<hr>
<h2 id="2-new-jvm-constants-api">2. New JVM Constants API</h2>
<p><strong>Description:</strong> Provides an API to model class-file constants, improving JVM tooling.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
// Internal usage, mostly for framework developers
// Example: Lookup constants in classes dynamically
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Useful for libraries that need to inspect or generate class files.</li>
</ul>
<hr>
<h2 id="3-shenandoah-abortable-mixed-gc-improvements">3. Shenandoah &amp; Abortable Mixed GC Improvements</h2>
<p><strong>Description:</strong> Enhancements to Garbage Collectors (G1 &amp; Shenandoah) for lower pause times.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-bash">
java -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -jar MyApp.jar
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Improves performance for large heaps.</li>
</ul>
<hr>
<h2 id="4-compact-number-formatting">4. Compact Number Formatting</h2>
<p><strong>Description:</strong> Provides a simple way to format numbers in compact forms like <em>_CODE</em>PLACEHOLDER<em>0</em><em> or </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
NumberFormat nf = NumberFormat.getCompactNumberInstance(
        Locale.US, NumberFormat.Style.SHORT);
System.out.println(nf.format(1234));    // 1.2K
System.out.println(nf.format(1234567)); // 1.2M
</code></pre>
<hr>
<h2 id="5-additional-features">5. Additional Features</h2>
<ul>
<li><strong>JVM Improvements:</strong> Better startup and GC performance.</li>
<li><strong>Strings &amp; Collections:</strong> Minor enhancements for internal APIs.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-13">Java 13</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 13&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-text-blocks-preview">1. Text Blocks (Preview)</h2>
<p><strong>Description:</strong> Multi-line string literals using triple quotes (<em>_CODE</em>PLACEHOLDER<em>0</em>_) for easier readability.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
String html = &quot;&quot;&quot;
    &lt;html&gt;
        &lt;body&gt;
            &lt;h1&gt;Hello, Java 13!&lt;/h1&gt;
        &lt;/body&gt;
    &lt;/html&gt;
    &quot;&quot;&quot;;
System.out.println(html);
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Preserves formatting and reduces the need for <em>_CODE</em>PLACEHOLDER<em>0</em>_ or string concatenation.</li>
<li>Useful for SQL queries, JSON, XML, HTML, or other multi-line strings.</li>
</ul>
<hr>
<h2 id="2-switch-expressions-enhancements">2. Switch Expressions Enhancements</h2>
<p><strong>Description:</strong> Continued improvements from Java 12 preview.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
String result = switch (2) {
    case 1 -&gt; &quot;One&quot;;
    case 2 -&gt; &quot;Two&quot;;
    default -&gt; &quot;Other&quot;;
};
System.out.println(result); // Two
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Simplifies code, reduces <em>_CODE</em>PLACEHOLDER<em>0</em>_ statements.</li>
<li>Can be used both as statements and expressions.</li>
</ul>
<hr>
<h2 id="3-reimplement-the-legacy-socket-api">3. Reimplement the Legacy Socket API</h2>
<p><strong>Description:</strong> The <em>_CODE</em>PLACEHOLDER<em>0</em><em> and </em><em>CODE</em>PLACEHOLDER<em>1</em>_ APIs were reimplemented for better maintainability.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
try (ServerSocket serverSocket = new ServerSocket(8080)) {
    Socket client = serverSocket.accept();
    System.out.println(&quot;Client connected: &quot; + client.getInetAddress());
}
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>No visible API change, mostly internal improvements for performance and reliability.</li>
</ul>
<hr>
<h2 id="4-other-minor-features">4. Other Minor Features</h2>
<ul>
<li>JVM: Improved memory allocation and performance.</li>
<li>Deprecation of some internal APIs.</li>
<li>Flight Recorder: Continuous improvements for monitoring and diagnostics.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-14">Java 14</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 14&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-records-preview">1. Records (Preview)</h2>
<p><strong>Description:</strong> Records are a compact way to declare classes that are primarily used to store data. They automatically generate <em>_CODE</em>PLACEHOLDER<em>0</em><em>, </em><em>CODE</em>PLACEHOLDER<em>1</em><em>, </em><em>CODE</em>PLACEHOLDER<em>2</em>_, and getters.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
record Person(String name, int age) {}

Person p = new Person(&quot;Alice&quot;, 25);
System.out.println(p.name()); // Alice
System.out.println(p.age());  // 25
System.out.println(p);        // Person[name=Alice, age=25]
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Ideal for DTOs, immutable data carriers.</li>
<li>Can implement interfaces but cannot extend other classes.</li>
</ul>
<hr>
<h2 id="2-pattern-matching-for-instanceof-preview">2. Pattern Matching for `instanceof` (Preview)</h2>
<p><strong>Description:</strong> Simplifies type casting with <em>_CODE</em>PLACEHOLDER<em>0</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Object obj = &quot;Hello Java 14&quot;;

if (obj instanceof String s) {
    System.out.println(s.toUpperCase()); // HELLO JAVA 14
}
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Reduces boilerplate casting code.</li>
<li>Enhances readability and safety.</li>
</ul>
<hr>
<h2 id="3-helpful-nullpointerexceptions">3. Helpful NullPointerExceptions</h2>
<p><strong>Description:</strong> JVM provides detailed NPE messages to identify the exact variable causing the exception.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
String text = null;
System.out.println(text.toUpperCase());
</code></pre>
<p><strong>Output:</strong></p>
<pre><code class="language-">
java.lang.NullPointerException: Cannot invoke &quot;String.toUpperCase()&quot; because &quot;text&quot; is null
</code></pre>
<hr>
<h2 id="4-switch-expressions-second-preview">4. Switch Expressions (Second Preview)</h2>
<p><strong>Description:</strong> Further improvements and refinements from previous previews.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
String day = &quot;MONDAY&quot;;
String type = switch (day) {
    case &quot;MONDAY&quot;, &quot;FRIDAY&quot; -&gt; &quot;Start/End of Week&quot;;
    case &quot;TUESDAY&quot;, &quot;WEDNESDAY&quot;, &quot;THURSDAY&quot; -&gt; &quot;Midweek&quot;;
    default -&gt; &quot;Weekend&quot;;
};
System.out.println(type); // Start/End of Week
</code></pre>
<hr>
<h2 id="5-records-pattern-matching-and-nvm-support-for-jfr">5. Records, Pattern Matching, and NVM-support for JFR</h2>
<p><strong>Other Features:</strong></p>
<ul>
<li>Non-Volatile Memory (NVM) support for Java Flight Recorder.</li>
<li>NUMA-aware memory allocation for better performance on large memory systems.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-15">Java 15</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 15&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-sealed-classes-preview">1. Sealed Classes (Preview)</h2>
<p><strong>Description:</strong> Sealed classes restrict which classes can extend or implement them. Useful for controlling inheritance.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
sealed interface Shape permits Circle, Rectangle {}

final class Circle implements Shape {}
final class Rectangle implements Shape {}
// class Triangle implements Shape {} // Not allowed
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Ensures controlled hierarchy.</li>
<li>Works with interfaces and abstract classes.</li>
</ul>
<hr>
<h2 id="2-hidden-classes">2. Hidden Classes</h2>
<p><strong>Description:</strong> JVM can define classes that are not discoverable by other classes. Useful for frameworks and dynamic code generation.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
// Mostly used by frameworks like Hibernate or Spring
// No direct API for standard applications
</code></pre>
<hr>
<h2 id="3-text-blocks-standardized">3. Text Blocks (Standardized)</h2>
<p><strong>Description:</strong> Multi-line string literals are now permanent in Java.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
String json = &quot;&quot;&quot;
    {
        &quot;name&quot;: &quot;Alice&quot;,
        &quot;age&quot;: 25
    }
    &quot;&quot;&quot;;
System.out.println(json);
</code></pre>
<hr>
<h2 id="4-records-second-preview">4. Records (Second Preview)</h2>
<p><strong>Description:</strong> Continued improvements for data-centric classes. Same syntax as Java 14.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
record Point(int x, int y) {}

Point p = new Point(10, 20);
System.out.println(p); // Point[x=10, y=20]
</code></pre>
<hr>
<h2 id="5-pattern-matching-for-instanceof-second-preview">5. Pattern Matching for `instanceof` (Second Preview)</h2>
<p><strong>Description:</strong> Enhanced type checking and casting, same as Java 14 but with refinements.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Object obj = &quot;Hello Java 15&quot;;
if (obj instanceof String s) {
    System.out.println(s.toLowerCase()); // hello java 15
}
</code></pre>
<hr>
<h2 id="6-other-notable-features">6. Other Notable Features</h2>
<ul>
<li>ZGC (Z Garbage Collector) improvements.</li>
<li>Foreign-Memory Access API (incubator) to interact with memory outside the JVM safely.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-16">Java 16</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 16&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-records-standardized">1. Records (Standardized)</h2>
<p><strong>Description:</strong> Records are now a permanent feature for creating immutable data classes.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
record Person(String name, int age) {}

Person p = new Person(&quot;Alice&quot;, 30);
System.out.println(p.name()); // Alice
System.out.println(p.age());  // 30
System.out.println(p);        // Person[name=Alice, age=30]
</code></pre>
<hr>
<h2 id="2-pattern-matching-for-instanceof-standardized">2. Pattern Matching for `instanceof` (Standardized)</h2>
<p><strong>Description:</strong> Simplifies type checking and casting.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Object obj = &quot;Java 16&quot;;

if (obj instanceof String s) {
    System.out.println(s.toUpperCase()); // JAVA 16
}
</code></pre>
<hr>
<h2 id="3-sealed-classes-second-preview">3. Sealed Classes (Second Preview)</h2>
<p><strong>Description:</strong> Restricts which classes can extend or implement a class or interface.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
sealed interface Shape permits Circle, Rectangle {}

final class Circle implements Shape {}
final class Rectangle implements Shape {}
</code></pre>
<hr>
<h2 id="4-vector-api-incubator">4. Vector API (Incubator)</h2>
<p><strong>Description:</strong> Provides a way to write vector computations for performance optimization on modern CPUs.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
// Simple illustration using FloatVector API
// Vector API is mostly used in high-performance numeric computing
</code></pre>
<hr>
<h2 id="5-foreign-linker-api-incubator">5. Foreign Linker API (Incubator)</h2>
<p><strong>Description:</strong> Simplifies calling native code (C libraries) from Java safely.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
// Example: calling a C function from Java
// Uses the java.foreign package (incubator)
</code></pre>
<hr>
<h2 id="6-other-features">6. Other Features</h2>
<ul>
<li><em>_CODE</em>PLACEHOLDER<em>0</em><em> method on Streams: </em><em>CODE</em>PLACEHOLDER<em>1</em><em> → </em><em>CODE</em>PLACEHOLDER<em>2</em>_</li>
<li>Unix-Domain Socket Channels: Simplifies IPC in Java.</li>
<li>JEP 376: ZGC improvements and performance enhancements.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-17">Java 17</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 17 (LTS)&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-sealed-classes-standardized">1. Sealed Classes (Standardized)</h2>
<p><strong>Description:</strong> Controls which classes can extend or implement a class/interface.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
sealed interface Shape permits Circle, Rectangle {}

final class Circle implements Shape {}
final class Rectangle implements Shape {}
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Helps enforce a fixed hierarchy.</li>
<li>Works with interfaces and abstract classes.</li>
</ul>
<hr>
<h2 id="2-pattern-matching-for-switch-preview">2. Pattern Matching for `switch` (Preview)</h2>
<p><strong>Description:</strong> Switch statements can now handle patterns, reducing boilerplate and improving readability.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Object obj = 42;
String result = switch (obj) {
    case Integer i -&gt; &quot;Integer: &quot; + i;
    case String s -&gt; &quot;String: &quot; + s;
    default -&gt; &quot;Unknown type&quot;;
};
System.out.println(result); // Integer: 42
</code></pre>
<hr>
<h2 id="3-strong-encapsulation-of-jdk-internals">3. Strong Encapsulation of JDK Internals</h2>
<p><strong>Description:</strong> Internal APIs (like <em>_CODE</em>PLACEHOLDER<em>0</em>_) are strongly encapsulated to improve security and maintainability.</p>
<p><strong>Notes:</strong></p>
<ul>
<li>Encourages developers to use standard APIs or incubator APIs.</li>
</ul>
<hr>
<h2 id="4-new-macos-rendering-pipeline">4. New macOS Rendering Pipeline</h2>
<p><strong>Description:</strong> Modernized rendering pipeline using Apple Metal framework instead of deprecated OpenGL.</p>
<p><strong>Notes:</strong></p>
<ul>
<li>Improves graphics performance on macOS.</li>
</ul>
<hr>
<h2 id="5-foreign-function-memory-api-incubator">5. Foreign Function &amp; Memory API (Incubator)</h2>
<p><strong>Description:</strong> Allows Java programs to interact with native code and memory safely.</p>
<p><strong>Example (Illustration):</strong></p>
<pre><code class="language-java">
// Example: calling a C library or allocating off-heap memory safely
// Uses java.foreign API (incubator)
</code></pre>
<hr>
<h2 id="6-other-notable-features">6. Other Notable Features</h2>
<ul>
<li>Deprecation of Applet API.</li>
<li><em>_CODE</em>PLACEHOLDER<em>0</em>_ interface and implementations for more flexible random number generation.</li>
<li>JEP 356: Enhanced Pseudo-Random Number Generators.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-18">Java 18</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 18&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-simple-web-server">1. Simple Web Server</h2>
<p><strong>Description:</strong> Lightweight HTTP server for prototyping, testing, and development purposes.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-bash">
# Start a simple web server on port 8080 serving current directory
$ java -m jdk.httpserver
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Ideal for quick file sharing or local testing.</li>
<li>Supports basic GET requests; not for production use.</li>
</ul>
<hr>
<h2 id="2-utf-8-by-default">2. UTF-8 by Default</h2>
<p><strong>Description:</strong> UTF-8 is now the default charset for standard Java APIs like <em>_CODE</em>PLACEHOLDER<em>0</em><em> and </em><em>CODE</em>PLACEHOLDER<em>1</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
String content = Files.readString(Path.of(&quot;example.txt&quot;)); 
System.out.println(content);
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Eliminates platform-dependent charset issues.</li>
</ul>
<hr>
<h2 id="3-vector-api-second-incubator">3. Vector API (Second Incubator)</h2>
<p><strong>Description:</strong> Enhancements to the vector API for better performance on SIMD hardware instructions.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
// Illustration: performing vectorized operations
// Actual use: numerical computing and performance-sensitive applications
</code></pre>
<hr>
<h2 id="4-code-snippets-in-java-api-documentation">4. Code Snippets in Java API Documentation</h2>
<p><strong>Description:</strong> API docs now support including example code snippets to improve readability.</p>
<p><strong>Example in Javadoc:</strong></p>
<pre><code class="language-java">
/**
 * Adds two numbers.
 * &lt;pre&gt;{@code
 * int result = Calculator.add(2, 3);
 * System.out.println(result); // 5
 * }&lt;/pre&gt;
 */
public int add(int a, int b) {
    return a + b;
}
</code></pre>
<hr>
<h2 id="5-other-notable-features">5. Other Notable Features</h2>
<ul>
<li>Minor JVM improvements for startup and performance.</li>
<li>Continued incubation of foreign function and memory APIs.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-19">Java 19</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 19&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-virtual-threads-preview">1. Virtual Threads (Preview)</h2>
<p><strong>Description:</strong> Lightweight threads managed by the JVM, allowing millions of concurrent threads efficiently.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Runnable task = () -&gt; System.out.println(&quot;Running in virtual thread&quot;);
Thread.startVirtualThread(task);
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Greatly improves scalability for concurrent applications.</li>
<li>Compatible with existing thread APIs.</li>
</ul>
<hr>
<h2 id="2-record-patterns-preview">2. Record Patterns (Preview)</h2>
<p><strong>Description:</strong> Allows destructuring of records directly in patterns for easier data extraction.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
record Point(int x, int y) {}

Point p = new Point(3, 4);
if (p instanceof Point(int x, int y)) {
    System.out.println(&quot;X: &quot; + x + &quot;, Y: &quot; + y); // X: 3, Y: 4
}
</code></pre>
<hr>
<h2 id="3-pattern-matching-for-switch-second-preview">3. Pattern Matching for `switch` (Second Preview)</h2>
<p><strong>Description:</strong> Further refinement of pattern matching in switch expressions.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Object obj = 42;
String result = switch (obj) {
    case Integer i -&gt; &quot;Integer: &quot; + i;
    case String s  -&gt; &quot;String: &quot; + s;
    default -&gt; &quot;Unknown&quot;;
};
System.out.println(result); // Integer: 42
</code></pre>
<hr>
<h2 id="4-foreign-function-memory-api-second-incubator">4. Foreign Function &amp; Memory API (Second Incubator)</h2>
<p><strong>Description:</strong> Improved API to interact with native memory and libraries safely.</p>
<p><strong>Example (Illustration):</strong></p>
<pre><code class="language-java">
// Example: calling C functions or allocating off-heap memory
// Uses java.foreign API (incubator)
</code></pre>
<hr>
<h2 id="5-other-notable-features">5. Other Notable Features</h2>
<ul>
<li>Minor JVM performance and GC improvements.</li>
<li>Continued incubation of vector and foreign memory APIs.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-20">Java 20</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 20&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-virtual-threads-second-preview">1. Virtual Threads (Second Preview)</h2>
<p><strong>Description:</strong> Improved virtual threads for high-concurrency applications.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Runnable task = () -&gt; System.out.println(&quot;Running in virtual thread&quot;);
Thread vThread = Thread.startVirtualThread(task);
vThread.join();
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Allows lightweight threads that are cheaper than platform threads.</li>
<li>Works seamlessly with existing concurrency APIs.</li>
</ul>
<hr>
<h2 id="2-record-patterns-second-preview">2. Record Patterns (Second Preview)</h2>
<p><strong>Description:</strong> Enhanced record destructuring in patterns for easier and readable code.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
record Point(int x, int y) {}

Point p = new Point(10, 20);
if (p instanceof Point(int x, int y)) {
    System.out.println(&quot;X: &quot; + x + &quot;, Y: &quot; + y); // X: 10, Y: 20
}
</code></pre>
<hr>
<h2 id="3-pattern-matching-for-switch-third-preview">3. Pattern Matching for `switch` (Third Preview)</h2>
<p><strong>Description:</strong> Further refinements for pattern matching in <em>_CODE</em>PLACEHOLDER<em>0</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Object obj = &quot;Hello Java 20&quot;;
String result = switch (obj) {
    case Integer i -&gt; &quot;Integer: &quot; + i;
    case String s  -&gt; &quot;String: &quot; + s;
    default -&gt; &quot;Unknown&quot;;
};
System.out.println(result); // String: Hello Java 20
</code></pre>
<hr>
<h2 id="4-scoped-values-incubator">4. Scoped Values (Incubator)</h2>
<p><strong>Description:</strong> Provides a way to share immutable data across threads safely without using <em>_CODE</em>PLACEHOLDER<em>0</em>_.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
ScopedValue&lt;String&gt; user = ScopedValue.newInstance();

Runnable task = () -&gt; System.out.println(&quot;User: &quot; + user.get());
ScopedValue.where(user, &quot;Alice&quot;).run(task); // User: Alice
</code></pre>
<hr>
<h2 id="5-foreign-function-memory-api-third-incubator">5. Foreign Function &amp; Memory API (Third Incubator)</h2>
<p><strong>Description:</strong> Continued improvements for interacting with native code safely.</p>
<p><strong>Example (Illustration):</strong></p>
<pre><code class="language-java">
// Example: safely calling C functions or accessing off-heap memory
</code></pre>
<hr>
<h2 id="6-other-notable-features">6. Other Notable Features</h2>
<ul>
<li>Minor performance and GC improvements.</li>
<li>Continued evolution of incubator APIs like Vector API and Foreign Memory API.</li>
</ul>
<p>&lt;/details&gt;</p>
<hr>
<h1 id="java-21">Java 21</h1>
<p>&lt;details&gt;</p>
<p>&lt;summary&gt;&lt;strong&gt;Features Introduced in Java 21 (LTS)&lt;/strong&gt;&lt;/summary&gt;</p>
<h2 id="1-virtual-threads-standardized">1. Virtual Threads (Standardized)</h2>
<p><strong>Description:</strong> Lightweight threads for high-concurrency applications are now fully supported.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Runnable task = () -&gt; System.out.println(&quot;Running in virtual thread&quot;);
Thread vThread = Thread.startVirtualThread(task);
vThread.join();
</code></pre>
<p><strong>Notes:</strong></p>
<ul>
<li>Millions of concurrent threads are possible without heavy resource usage.</li>
<li>Seamlessly integrates with existing concurrency APIs.</li>
</ul>
<hr>
<h2 id="2-pattern-matching-for-switch-standardized">2. Pattern Matching for `switch` (Standardized)</h2>
<p><strong>Description:</strong> Allows type-safe pattern matching in <em>_CODE</em>PLACEHOLDER<em>0</em>_ expressions.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
Object obj = 42;
String result = switch (obj) {
    case Integer i -&gt; &quot;Integer: &quot; + i;
    case String s  -&gt; &quot;String: &quot; + s;
    default -&gt; &quot;Unknown&quot;;
};
System.out.println(result); // Integer: 42
</code></pre>
<hr>
<h2 id="3-sequenced-collections">3. Sequenced Collections</h2>
<p><strong>Description:</strong> New collection types guarantee a defined encounter order.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
List&lt;Integer&gt; numbers = List.of(3, 1, 4, 2);
Set&lt;Integer&gt; sequencedSet = Set.of(3, 1, 4, 2); // iteration order is maintained
System.out.println(sequencedSet);
</code></pre>
<hr>
<h2 id="4-string-templates-preview">4. String Templates (Preview)</h2>
<p><strong>Description:</strong> Simplifies string interpolation and formatting.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
String name = &quot;Alice&quot;;
int age = 30;
String message = STR.&quot;My name is \{name} and I am \{age} years old.&quot;;
System.out.println(message); // My name is Alice and I am 30 years old.
</code></pre>
<hr>
<h2 id="5-record-patterns-third-preview">5. Record Patterns (Third Preview)</h2>
<p><strong>Description:</strong> Enhanced destructuring for records, making data access concise and readable.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
record Point(int x, int y) {}
Point p = new Point(5, 10);

if (p instanceof Point(int x, int y)) {
    System.out.println(&quot;X: &quot; + x + &quot;, Y: &quot; + y); // X: 5, Y: 10
}
</code></pre>
<hr>
<h2 id="6-structured-concurrency-incubator">6. Structured Concurrency (Incubator)</h2>
<p><strong>Description:</strong> Simplifies management of multiple concurrent tasks as a single unit.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-java">
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future&lt;String&gt; f1 = scope.fork(() -&gt; &quot;Task 1&quot;);
    Future&lt;String&gt; f2 = scope.fork(() -&gt; &quot;Task 2&quot;);
    scope.join(); // waits for all
    System.out.println(f1.resultNow() + &quot;, &quot; + f2.resultNow()); // Task 1, Task 2
}
</code></pre>
<hr>
<h2 id="7-foreign-function-memory-api-fourth-incubator">7. Foreign Function &amp; Memory API (Fourth Incubator)</h2>
<p><strong>Description:</strong> Continued enhancements for safely interacting with native code.</p>
<p><strong>Example (Illustration):</strong></p>
<pre><code class="language-java">
// Allocating off-heap memory or calling native C functions
</code></pre>
<p>&lt;/details&gt;</p>
<hr>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = java8To17ContentData;
}
