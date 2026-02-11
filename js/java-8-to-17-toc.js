// Java Basics - Table of Contents Data
const java8To17TocData = `<a href="#java-8-streams-vs-collections" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-8-streams-vs-collections">[Java 8 Streams vs Collections](https://www.java2novice.com/java_interview_questions/java-8-streams-vs-collection-framework/)</a>
<a href="#stream-api-overview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="stream-api-overview">🌊 Stream API Overview</a>
<a href="#stream-api" class="toc-item toc-level-2" style="padding-left: 20px" data-target="stream-api">[Stream API](https://www.tutorialspoint.com/java8/java8_streams.htm)</a>
<a href="#key-differences" class="toc-item toc-level-2" style="padding-left: 20px" data-target="key-differences">⚖️ Key Differences</a>
<a href="#example-comparison" class="toc-item toc-level-2" style="padding-left: 20px" data-target="example-comparison">💡 Example Comparison</a>
<a href="#1-flatmap-in-streams" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-flatmap-in-streams">1. `flatMap` in streams</a>
<a href="#what-flatmap-does" class="toc-item toc-level-3" style="padding-left: 40px" data-target="what-flatmap-does">What `flatMap` does</a>
<a href="#example-flattening-collections" class="toc-item toc-level-3" style="padding-left: 40px" data-target="example-flattening-collections">Example: flattening collections</a>
<a href="#2-flatmap-vs-streamconcat" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-flatmap-vs-streamconcat">2. `flatMap` vs `Stream.concat`</a>
<a href="#streamconcat" class="toc-item toc-level-3" style="padding-left: 40px" data-target="streamconcat">`Stream.concat`</a>
<a href="#why-flatmap-is-usually-better" class="toc-item toc-level-3" style="padding-left: 40px" data-target="why-flatmap-is-usually-better">Why `flatMap` is usually better</a>
<a href="#3-mapmulti-java-16" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-mapmulti-java-16">3. `mapMulti` (Java 16+)</a>
<a href="#what-is-mapmulti" class="toc-item toc-level-3" style="padding-left: 40px" data-target="what-is-mapmulti">What is `mapMulti`?</a>
<a href="#why-mapmulti-can-be-more-efficient" class="toc-item toc-level-3" style="padding-left: 40px" data-target="why-mapmulti-can-be-more-efficient">Why `mapMulti` can be more efficient</a>
<a href="#example-replacing-flatmap" class="toc-item toc-level-3" style="padding-left: 40px" data-target="example-replacing-flatmap">Example: replacing `flatMap`</a>
<a href="#example-filtering-mapping-in-one-step" class="toc-item toc-level-3" style="padding-left: 40px" data-target="example-filtering-mapping-in-one-step">Example: filtering + mapping in one step</a>
<a href="#4-when-to-use-what" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-when-to-use-what">4. When to use what</a>
<a href="#use-flatmap-when" class="toc-item toc-level-3" style="padding-left: 40px" data-target="use-flatmap-when">✅ Use `flatMap` when:</a>
<a href="#use-streamconcat-when" class="toc-item toc-level-3" style="padding-left: 40px" data-target="use-streamconcat-when">⚠️ Use `Stream.concat` when:</a>
<a href="#use-mapmulti-when" class="toc-item toc-level-3" style="padding-left: 40px" data-target="use-mapmulti-when">🚀 Use `mapMulti` when:</a>
<a href="#1-benchmarks-flatmap-vs-mapmulti" class="toc-item toc-level-1" style="padding-left: 0px" data-target="1-benchmarks-flatmap-vs-mapmulti">1. Benchmarks: `flatMap` vs `mapMulti`</a>
<a href="#what-were-actually-benchmarking" class="toc-item toc-level-2" style="padding-left: 20px" data-target="what-were-actually-benchmarking">What we’re actually benchmarking</a>
<a href="#flatmap" class="toc-item toc-level-3" style="padding-left: 40px" data-target="flatmap">`flatMap`</a>
<a href="#mapmulti" class="toc-item toc-level-3" style="padding-left: 40px" data-target="mapmulti">`mapMulti`</a>
<a href="#microbenchmark-style-example" class="toc-item toc-level-2" style="padding-left: 20px" data-target="microbenchmark-style-example">Microbenchmark-style example</a>
<a href="#flatmap-version" class="toc-item toc-level-3" style="padding-left: 40px" data-target="flatmap-version">flatMap version</a>
<a href="#mapmulti-version" class="toc-item toc-level-3" style="padding-left: 40px" data-target="mapmulti-version">mapMulti version</a>
<a href="#typical-benchmark-results-jmh-style-indicative" class="toc-item toc-level-2" style="padding-left: 20px" data-target="typical-benchmark-results-jmh-style-indicative">Typical benchmark results (JMH-style, indicative)</a>
<a href="#rule-of-thumb" class="toc-item toc-level-2" style="padding-left: 20px" data-target="rule-of-thumb">Rule of thumb</a>
<a href="#2-real-world-examples" class="toc-item toc-level-1" style="padding-left: 0px" data-target="2-real-world-examples">2. Real-world examples</a>
<a href="#a-json-parsing-common-realistic" class="toc-item toc-level-2" style="padding-left: 20px" data-target="a-json-parsing-common-realistic">A. JSON parsing (common &amp; realistic)</a>
<a href="#using-flatmap" class="toc-item toc-level-3" style="padding-left: 40px" data-target="using-flatmap">Using `flatMap`</a>
<a href="#using-mapmulti" class="toc-item toc-level-3" style="padding-left: 40px" data-target="using-mapmulti">Using `mapMulti`</a>
<a href="#why-mapmulti-shines-here" class="toc-item toc-level-3" style="padding-left: 40px" data-target="why-mapmulti-shines-here">Why `mapMulti` shines here</a>
<a href="#b-graph-traversal-edges-neighbors" class="toc-item toc-level-2" style="padding-left: 20px" data-target="b-graph-traversal-edges-neighbors">B. Graph traversal (edges → neighbors)</a>
<a href="#flatmap-dfs-style-expansion" class="toc-item toc-level-3" style="padding-left: 40px" data-target="flatmap-dfs-style-expansion">flatMap DFS-style expansion</a>
<a href="#mapmulti-version" class="toc-item toc-level-3" style="padding-left: 40px" data-target="mapmulti-version">mapMulti version</a>
<a href="#why-this-matters-in-graphs" class="toc-item toc-level-3" style="padding-left: 40px" data-target="why-this-matters-in-graphs">Why this matters in graphs</a>
<a href="#c-filtering-expanding-in-one-pass" class="toc-item toc-level-2" style="padding-left: 20px" data-target="c-filtering-expanding-in-one-pass">C. Filtering + expanding in one pass</a>
<a href="#flatmap-awkward" class="toc-item toc-level-3" style="padding-left: 40px" data-target="flatmap-awkward">flatMap (awkward)</a>
<a href="#mapmulti-natural" class="toc-item toc-level-3" style="padding-left: 40px" data-target="mapmulti-natural">mapMulti (natural)</a>
<a href="#3-parallel-stream-behavior" class="toc-item toc-level-1" style="padding-left: 0px" data-target="3-parallel-stream-behavior">3. Parallel stream behavior</a>
<a href="#flatmap-parallel-streams" class="toc-item toc-level-2" style="padding-left: 20px" data-target="flatmap-parallel-streams">flatMap + parallel streams</a>
<a href="#what-happens" class="toc-item toc-level-3" style="padding-left: 40px" data-target="what-happens">What happens</a>
<a href="#mapmulti-parallel-streams" class="toc-item toc-level-2" style="padding-left: 20px" data-target="mapmulti-parallel-streams">mapMulti + parallel streams</a>
<a href="#why-this-scales-better" class="toc-item toc-level-3" style="padding-left: 40px" data-target="why-this-scales-better">Why this scales better</a>
<a href="#parallel-safety-rules" class="toc-item toc-level-2" style="padding-left: 20px" data-target="parallel-safety-rules">Parallel safety rules</a>
<a href="#final-guidance-practical" class="toc-item toc-level-1" style="padding-left: 0px" data-target="final-guidance-practical">Final guidance (practical)</a>
<a href="#choose-like-this" class="toc-item toc-level-3" style="padding-left: 40px" data-target="choose-like-this">Choose like this:</a>
<a href="#stream-operations-intermediate-vs-terminal" class="toc-item toc-level-2" style="padding-left: 20px" data-target="stream-operations-intermediate-vs-terminal">🧱 Stream Operations: Intermediate vs Terminal</a>
<a href="#intermediate-operations" class="toc-item toc-level-3" style="padding-left: 40px" data-target="intermediate-operations">🔁 Intermediate Operations</a>
<a href="#terminal-operations" class="toc-item toc-level-3" style="padding-left: 40px" data-target="terminal-operations">✅ Terminal Operations</a>
<a href="#forkjoinpool-stream-parallelstream-summary" class="toc-item toc-level-1" style="padding-left: 0px" data-target="forkjoinpool-stream-parallelstream-summary">⚙️ **ForkJoinPool, Stream &amp; ParallelStream — Summary**</a>
<a href="#1-forkjoinpool-overview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-forkjoinpool-overview">🧩 **1️⃣ ForkJoinPool Overview**</a>
<a href="#example" class="toc-item toc-level-3" style="padding-left: 40px" data-target="example">🔸 Example:</a>
<a href="#2-forkjoinpool-vs-threads-vs-executorservice" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-forkjoinpool-vs-threads-vs-executorservice">⚔️ **2️⃣ ForkJoinPool vs Threads vs ExecutorService**</a>
<a href="#3-still-used-in-java-21" class="toc-item toc-level-3" style="padding-left: 40px" data-target="3-still-used-in-java-21">⚡ **3️⃣ Still Used in Java 21?**</a>
<a href="#4-stream-internals" class="toc-item toc-level-3" style="padding-left: 40px" data-target="4-stream-internals">🧠 **4️⃣ Stream Internals**</a>
<a href="#5-parallel-stream-how-it-works" class="toc-item toc-level-3" style="padding-left: 40px" data-target="5-parallel-stream-how-it-works">⚡ **5️⃣ Parallel Stream — How It Works**</a>
<a href="#6-stream-vs-parallelstream" class="toc-item toc-level-3" style="padding-left: 40px" data-target="6-stream-vs-parallelstream">🔍 **6️⃣ Stream vs ParallelStream**</a>
<a href="#7-when-to-use-parallel-streams" class="toc-item toc-level-3" style="padding-left: 40px" data-target="7-when-to-use-parallel-streams">⚖️ **7️⃣ When to Use Parallel Streams**</a>
<a href="#collectors-from-javautilstream" class="toc-item toc-level-2" style="padding-left: 20px" data-target="collectors-from-javautilstream">📦 `Collectors` from `java.util.stream`</a>
<a href="#common-collector-methods" class="toc-item toc-level-3" style="padding-left: 40px" data-target="common-collector-methods">🔧 Common Collector Methods</a>
<a href="#joining-strings" class="toc-item toc-level-3" style="padding-left: 40px" data-target="joining-strings">🔗 Joining Strings</a>
<a href="#counting-summarizing" class="toc-item toc-level-3" style="padding-left: 40px" data-target="counting-summarizing">🔢 Counting &amp; Summarizing</a>
<a href="#grouping-partitioning" class="toc-item toc-level-3" style="padding-left: 40px" data-target="grouping-partitioning">🧮 Grouping &amp; Partitioning</a>
<a href="#reducing" class="toc-item toc-level-3" style="padding-left: 40px" data-target="reducing">➕ Reducing</a>
<a href="#post-processing" class="toc-item toc-level-3" style="padding-left: 40px" data-target="post-processing">🛠️ Post-processing</a>
<a href="#min-max" class="toc-item toc-level-3" style="padding-left: 40px" data-target="min-max">🔝 Min / Max</a>
<a href="#java-features-from-8-to-21-lts" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-features-from-8-to-21-lts">📘 Java Features from 8 to 21 (LTS)</a>
<a href="#java-8-2014" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-8-2014">☕ Java 8 (2014)</a>
<a href="#java-9-2017" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-9-2017">☕ Java 9 (2017)</a>
<a href="#java-10-2018" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-10-2018">☕ Java 10 (2018)</a>
<a href="#java-11-2018-lts" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-11-2018-lts">☕ Java 11 (2018) – LTS</a>
<a href="#java-12-2019" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-12-2019">☕ Java 12 (2019)</a>
<a href="#java-1314-20192020" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-1314-20192020">☕ Java 13–14 (2019–2020)</a>
<a href="#java-1516-20202021" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-1516-20202021">☕ Java 15–16 (2020–2021)</a>
<a href="#java-17-2021-lts" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-17-2021-lts">☕ Java 17 (2021) – LTS</a>
<a href="#java-1920-20222023" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-1920-20222023">☕ Java 19–20 (2022–2023)</a>
<a href="#java-21-2023-lts" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-21-2023-lts">☕ Java 21 (2023) – LTS</a>
<a href="#summary-table" class="toc-item toc-level-3" style="padding-left: 40px" data-target="summary-table">✅ Summary Table</a>
<a href="#java-8" class="toc-item toc-level-2" style="padding-left: 20px" data-target="java-8">[Java 8](https://www.tutorialspoint.com/java8/index.htm)</a>
<a href="#1-lambda-expressions-stream-api" class="toc-item toc-level-3" style="padding-left: 40px" data-target="1-lambda-expressions-stream-api">1. Lambda Expressions &amp; Stream API</a>
<a href="#2-method-references" class="toc-item toc-level-3" style="padding-left: 40px" data-target="2-method-references">2. Method References</a>
<a href="#3-default-static-methods-in-interfaces" class="toc-item toc-level-3" style="padding-left: 40px" data-target="3-default-static-methods-in-interfaces">3. Default &amp; Static Methods in Interfaces</a>
<a href="#4-type-annotations-repeating-annotations" class="toc-item toc-level-3" style="padding-left: 40px" data-target="4-type-annotations-repeating-annotations">4. Type Annotations &amp; Repeating Annotations</a>
<a href="#5-method-parameter-reflection" class="toc-item toc-level-3" style="padding-left: 40px" data-target="5-method-parameter-reflection">5. Method Parameter Reflection</a>
<a href="#6-optional-datetime-and-completablefuture" class="toc-item toc-level-3" style="padding-left: 40px" data-target="6-optional-datetime-and-completablefuture">6. Optional, Date‑Time, and CompletableFuture</a>
<a href="#7-javautilfunction-package" class="toc-item toc-level-3" style="padding-left: 40px" data-target="7-javautilfunction-package">7. `java.util.function` Package</a>
<a href="#8-collections-comparator-improvements" class="toc-item toc-level-3" style="padding-left: 40px" data-target="8-collections-comparator-improvements">8. Collections &amp; Comparator Improvements</a>
<a href="#9-primitive-streams-spliterator" class="toc-item toc-level-3" style="padding-left: 40px" data-target="9-primitive-streams-spliterator">9. Primitive Streams &amp; Spliterator</a>
<a href="#java-8-key-features" class="toc-item toc-level-3" style="padding-left: 40px" data-target="java-8-key-features">Java 8 Key Features</a>
<a href="#safevarargs-in-java" class="toc-item toc-level-1" style="padding-left: 0px" data-target="safevarargs-in-java">@SafeVarargs in Java</a>
<a href="#what-is-safevarargs" class="toc-item toc-level-2" style="padding-left: 20px" data-target="what-is-safevarargs">What is `@SafeVarargs`?</a>
<a href="#why-use-safevarargs" class="toc-item toc-level-2" style="padding-left: 20px" data-target="why-use-safevarargs">Why use `@SafeVarargs`?</a>
<a href="#example-without-safevarargs-generates-warning" class="toc-item toc-level-2" style="padding-left: 20px" data-target="example-without-safevarargs-generates-warning">Example without `@SafeVarargs` (generates warning)</a>
<a href="#example-with-safevarargs-no-warning" class="toc-item toc-level-2" style="padding-left: 20px" data-target="example-with-safevarargs-no-warning">Example with `@SafeVarargs` (no warning)</a>
<a href="#important-notes" class="toc-item toc-level-2" style="padding-left: 20px" data-target="important-notes">Important Notes</a>
<a href="#when-to-use" class="toc-item toc-level-2" style="padding-left: 20px" data-target="when-to-use">When to use?</a>
<a href="#java-8" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-8">Java 8</a>
<a href="#1-lambda-expressions" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-lambda-expressions">1. Lambda Expressions</a>
<a href="#2-functional-interfaces" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-functional-interfaces">2. Functional Interfaces</a>
<a href="#3-streams-api" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-streams-api">3. Streams API</a>
<a href="#4-optional-class" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-optional-class">4. Optional Class</a>
<a href="#java-optional-cheat-sheet" class="toc-item toc-level-2" style="padding-left: 20px" data-target="java-optional-cheat-sheet">**Java Optional Cheat Sheet**</a>
<a href="#example-using-multiple-methods" class="toc-item toc-level-3" style="padding-left: 40px" data-target="example-using-multiple-methods">**Example Using Multiple Methods**</a>
<a href="#how-to-read-it" class="toc-item toc-level-3" style="padding-left: 40px" data-target="how-to-read-it">**How to Read It**</a>
<a href="#5-default-and-static-methods-in-interfaces" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-default-and-static-methods-in-interfaces">5. Default and Static Methods in Interfaces</a>
<a href="#6-date-and-time-api-javatime" class="toc-item toc-level-2" style="padding-left: 20px" data-target="6-date-and-time-api-javatime">6. Date and Time API (`java.time`)</a>
<a href="#7-method-references" class="toc-item toc-level-2" style="padding-left: 20px" data-target="7-method-references">7. Method References</a>
<a href="#8-repeatable-annotations" class="toc-item toc-level-2" style="padding-left: 20px" data-target="8-repeatable-annotations">8. Repeatable Annotations</a>
<a href="#9-type-annotations" class="toc-item toc-level-2" style="padding-left: 20px" data-target="9-type-annotations">9. Type Annotations</a>
<a href="#10-nashorn-javascript-engine" class="toc-item toc-level-2" style="padding-left: 20px" data-target="10-nashorn-javascript-engine">10. Nashorn JavaScript Engine</a>
<a href="#java-9" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-9">Java 9</a>
<a href="#1-module-system-project-jigsaw" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-module-system-project-jigsaw">1. Module System (Project Jigsaw)</a>
<a href="#2-jshell-repl" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-jshell-repl">2. JShell (REPL)</a>
<a href="#3-private-methods-in-interfaces" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-private-methods-in-interfaces">3. Private Methods in Interfaces</a>
<a href="#4-collection-factory-methods" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-collection-factory-methods">4. Collection Factory Methods</a>
<a href="#5-stream-api-improvements" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-stream-api-improvements">5. Stream API Improvements</a>
<a href="#6-optional-enhancements" class="toc-item toc-level-2" style="padding-left: 20px" data-target="6-optional-enhancements">6. Optional Enhancements</a>
<a href="#7-process-api-updates" class="toc-item toc-level-2" style="padding-left: 20px" data-target="7-process-api-updates">7. Process API Updates</a>
<a href="#java-10" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-10">Java 10</a>
<a href="#1-local-variable-type-inference-var" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-local-variable-type-inference-var">1. Local-Variable Type Inference (`var`)</a>
<a href="#2-application-class-data-sharing-appcds" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-application-class-data-sharing-appcds">2. Application Class-Data Sharing (AppCDS)</a>
<a href="#3-parallel-full-gc-for-g1" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-parallel-full-gc-for-g1">3. Parallel Full GC for G1</a>
<a href="#4-thread-local-handshakes" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-thread-local-handshakes">4. Thread-Local Handshakes</a>
<a href="#5-root-certificates-in-jdk" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-root-certificates-in-jdk">5. Root Certificates in JDK</a>
<a href="#java-11" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-11">Java 11</a>
<a href="#1-http-client-api-standardized" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-http-client-api-standardized">1. HTTP Client API (Standardized)</a>
<a href="#2-local-variable-syntax-for-lambda-parameters" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-local-variable-syntax-for-lambda-parameters">2. Local-Variable Syntax for Lambda Parameters</a>
<a href="#3-new-string-methods" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-new-string-methods">3. New String Methods</a>
<a href="#4-collection-toarrayintfunction" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-collection-toarrayintfunction">4. Collection toArray(IntFunction)</a>
<a href="#5-file-methods-readstring-writestring" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-file-methods-readstring-writestring">5. File Methods (`readString`, `writeString`)</a>
<a href="#6-running-java-files-directly" class="toc-item toc-level-2" style="padding-left: 20px" data-target="6-running-java-files-directly">6. Running Java Files Directly</a>
<a href="#7-other-notable-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="7-other-notable-features">7. Other Notable Features</a>
<a href="#java-12" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-12">Java 12</a>
<a href="#1-switch-expressions-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-switch-expressions-preview">1. Switch Expressions (Preview)</a>
<a href="#2-new-jvm-constants-api" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-new-jvm-constants-api">2. New JVM Constants API</a>
<a href="#3-shenandoah-abortable-mixed-gc-improvements" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-shenandoah-abortable-mixed-gc-improvements">3. Shenandoah &amp; Abortable Mixed GC Improvements</a>
<a href="#4-compact-number-formatting" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-compact-number-formatting">4. Compact Number Formatting</a>
<a href="#5-additional-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-additional-features">5. Additional Features</a>
<a href="#java-13" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-13">Java 13</a>
<a href="#1-text-blocks-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-text-blocks-preview">1. Text Blocks (Preview)</a>
<a href="#2-switch-expressions-enhancements" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-switch-expressions-enhancements">2. Switch Expressions Enhancements</a>
<a href="#3-reimplement-the-legacy-socket-api" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-reimplement-the-legacy-socket-api">3. Reimplement the Legacy Socket API</a>
<a href="#4-other-minor-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-other-minor-features">4. Other Minor Features</a>
<a href="#java-14" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-14">Java 14</a>
<a href="#1-records-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-records-preview">1. Records (Preview)</a>
<a href="#2-pattern-matching-for-instanceof-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-pattern-matching-for-instanceof-preview">2. Pattern Matching for `instanceof` (Preview)</a>
<a href="#3-helpful-nullpointerexceptions" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-helpful-nullpointerexceptions">3. Helpful NullPointerExceptions</a>
<a href="#4-switch-expressions-second-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-switch-expressions-second-preview">4. Switch Expressions (Second Preview)</a>
<a href="#5-records-pattern-matching-and-nvm-support-for-jfr" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-records-pattern-matching-and-nvm-support-for-jfr">5. Records, Pattern Matching, and NVM-support for JFR</a>
<a href="#java-15" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-15">Java 15</a>
<a href="#1-sealed-classes-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-sealed-classes-preview">1. Sealed Classes (Preview)</a>
<a href="#2-hidden-classes" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-hidden-classes">2. Hidden Classes</a>
<a href="#3-text-blocks-standardized" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-text-blocks-standardized">3. Text Blocks (Standardized)</a>
<a href="#4-records-second-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-records-second-preview">4. Records (Second Preview)</a>
<a href="#5-pattern-matching-for-instanceof-second-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-pattern-matching-for-instanceof-second-preview">5. Pattern Matching for `instanceof` (Second Preview)</a>
<a href="#6-other-notable-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="6-other-notable-features">6. Other Notable Features</a>
<a href="#java-16" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-16">Java 16</a>
<a href="#1-records-standardized" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-records-standardized">1. Records (Standardized)</a>
<a href="#2-pattern-matching-for-instanceof-standardized" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-pattern-matching-for-instanceof-standardized">2. Pattern Matching for `instanceof` (Standardized)</a>
<a href="#3-sealed-classes-second-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-sealed-classes-second-preview">3. Sealed Classes (Second Preview)</a>
<a href="#4-vector-api-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-vector-api-incubator">4. Vector API (Incubator)</a>
<a href="#5-foreign-linker-api-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-foreign-linker-api-incubator">5. Foreign Linker API (Incubator)</a>
<a href="#6-other-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="6-other-features">6. Other Features</a>
<a href="#java-17" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-17">Java 17</a>
<a href="#1-sealed-classes-standardized" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-sealed-classes-standardized">1. Sealed Classes (Standardized)</a>
<a href="#2-pattern-matching-for-switch-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-pattern-matching-for-switch-preview">2. Pattern Matching for `switch` (Preview)</a>
<a href="#3-strong-encapsulation-of-jdk-internals" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-strong-encapsulation-of-jdk-internals">3. Strong Encapsulation of JDK Internals</a>
<a href="#4-new-macos-rendering-pipeline" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-new-macos-rendering-pipeline">4. New macOS Rendering Pipeline</a>
<a href="#5-foreign-function-memory-api-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-foreign-function-memory-api-incubator">5. Foreign Function &amp; Memory API (Incubator)</a>
<a href="#6-other-notable-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="6-other-notable-features">6. Other Notable Features</a>
<a href="#java-18" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-18">Java 18</a>
<a href="#1-simple-web-server" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-simple-web-server">1. Simple Web Server</a>
<a href="#2-utf-8-by-default" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-utf-8-by-default">2. UTF-8 by Default</a>
<a href="#3-vector-api-second-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-vector-api-second-incubator">3. Vector API (Second Incubator)</a>
<a href="#4-code-snippets-in-java-api-documentation" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-code-snippets-in-java-api-documentation">4. Code Snippets in Java API Documentation</a>
<a href="#5-other-notable-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-other-notable-features">5. Other Notable Features</a>
<a href="#java-19" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-19">Java 19</a>
<a href="#1-virtual-threads-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-virtual-threads-preview">1. Virtual Threads (Preview)</a>
<a href="#2-record-patterns-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-record-patterns-preview">2. Record Patterns (Preview)</a>
<a href="#3-pattern-matching-for-switch-second-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-pattern-matching-for-switch-second-preview">3. Pattern Matching for `switch` (Second Preview)</a>
<a href="#4-foreign-function-memory-api-second-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-foreign-function-memory-api-second-incubator">4. Foreign Function &amp; Memory API (Second Incubator)</a>
<a href="#5-other-notable-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-other-notable-features">5. Other Notable Features</a>
<a href="#java-20" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-20">Java 20</a>
<a href="#1-virtual-threads-second-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-virtual-threads-second-preview">1. Virtual Threads (Second Preview)</a>
<a href="#2-record-patterns-second-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-record-patterns-second-preview">2. Record Patterns (Second Preview)</a>
<a href="#3-pattern-matching-for-switch-third-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-pattern-matching-for-switch-third-preview">3. Pattern Matching for `switch` (Third Preview)</a>
<a href="#4-scoped-values-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-scoped-values-incubator">4. Scoped Values (Incubator)</a>
<a href="#5-foreign-function-memory-api-third-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-foreign-function-memory-api-third-incubator">5. Foreign Function &amp; Memory API (Third Incubator)</a>
<a href="#6-other-notable-features" class="toc-item toc-level-2" style="padding-left: 20px" data-target="6-other-notable-features">6. Other Notable Features</a>
<a href="#java-21" class="toc-item toc-level-1" style="padding-left: 0px" data-target="java-21">Java 21</a>
<a href="#1-virtual-threads-standardized" class="toc-item toc-level-2" style="padding-left: 20px" data-target="1-virtual-threads-standardized">1. Virtual Threads (Standardized)</a>
<a href="#2-pattern-matching-for-switch-standardized" class="toc-item toc-level-2" style="padding-left: 20px" data-target="2-pattern-matching-for-switch-standardized">2. Pattern Matching for `switch` (Standardized)</a>
<a href="#3-sequenced-collections" class="toc-item toc-level-2" style="padding-left: 20px" data-target="3-sequenced-collections">3. Sequenced Collections</a>
<a href="#4-string-templates-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="4-string-templates-preview">4. String Templates (Preview)</a>
<a href="#5-record-patterns-third-preview" class="toc-item toc-level-2" style="padding-left: 20px" data-target="5-record-patterns-third-preview">5. Record Patterns (Third Preview)</a>
<a href="#6-structured-concurrency-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="6-structured-concurrency-incubator">6. Structured Concurrency (Incubator)</a>
<a href="#7-foreign-function-memory-api-fourth-incubator" class="toc-item toc-level-2" style="padding-left: 20px" data-target="7-foreign-function-memory-api-fourth-incubator">7. Foreign Function &amp; Memory API (Fourth Incubator)</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = java8To17TocData;
}
