// Kotlin Guide - Content Data
const kotlinguideContentData = `<h1 id="kotlin-vs-java-complete-guide">Kotlin vs Java: Complete Guide</h1>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#key-differences">Key Differences Between Kotlin and Java</a></li>
<li><a href="#kotlin-basics">Kotlin Basics</a></li>
<li><a href="#essential-features">Essential Kotlin Features</a></li>
<li><a href="#advanced-concepts">Advanced Concepts</a></li>
</ul>
<hr>
<h2 id="key-differences-between-kotlin-and-java">Key Differences Between Kotlin and Java</h2>
<h3 id="1-null-safety">1. <strong>Null Safety</strong></h3>
<p><strong>Java:</strong></p>
<pre><code class="language-java">
String name = null; // NPE waiting to happen
int length = name.length(); // NullPointerException
</code></pre>
<p><strong>Kotlin:</strong></p>
<pre><code class="language-kotlin">
var name: String? = null // Explicit nullable type
val length = name?.length // Safe call, returns null
val length2 = name?.length ?: 0 // Elvis operator, default value
</code></pre>
<h3 id="2-conciseness">2. <strong>Conciseness</strong></h3>
<p><strong>Java:</strong></p>
<pre><code class="language-java">
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}
</code></pre>
<p><strong>Kotlin:</strong></p>
<pre><code class="language-kotlin">
data class Person(var name: String, var age: Int)
// Automatically generates getters, setters, equals(), hashCode(), toString(), copy()
</code></pre>
<h3 id="3-type-inference">3. <strong>Type Inference</strong></h3>
<p><strong>Java:</strong></p>
<pre><code class="language-java">
Map&lt;String, List&lt;Integer&gt;&gt; map = new HashMap&lt;String, List&lt;Integer&gt;&gt;();
</code></pre>
<p><strong>Kotlin:</strong></p>
<pre><code class="language-kotlin">
val map = mutableMapOf&lt;String, List&lt;Int&gt;&gt;() // Type inferred
</code></pre>
<h3 id="4-string-templates">4. <strong>String Templates</strong></h3>
<p><strong>Java:</strong></p>
<pre><code class="language-java">
String message = &quot;Hello, &quot; + name + &quot;! You are &quot; + age + &quot; years old.&quot;;
</code></pre>
<p><strong>Kotlin:</strong></p>
<pre><code class="language-kotlin">
val message = &quot;Hello, $name! You are $age years old.&quot;
val complex = &quot;Next year: ${age + 1}&quot;
</code></pre>
<h3 id="5-function-declaration">5. <strong>Function Declaration</strong></h3>
<p><strong>Java:</strong></p>
<pre><code class="language-java">
public int sum(int a, int b) {
    return a + b;
}
</code></pre>
<p><strong>Kotlin:</strong></p>
<pre><code class="language-kotlin">
fun sum(a: Int, b: Int): Int {
    return a + b
}
// Or single expression
fun sum(a: Int, b: Int) = a + b
</code></pre>
<h3 id="6-smart-casts">6. <strong>Smart Casts</strong></h3>
<p><strong>Java:</strong></p>
<pre><code class="language-java">
if (obj instanceof String) {
    String str = (String) obj; // Manual cast needed
    System.out.println(str.length());
}
</code></pre>
<p><strong>Kotlin:</strong></p>
<pre><code class="language-kotlin">
if (obj is String) {
    println(obj.length) // Automatically cast
}
</code></pre>
<h3 id="7-extension-functions">7. <strong>Extension Functions</strong></h3>
<p><strong>Java:</strong> Not available (need utility classes)</p>
<p><strong>Kotlin:</strong></p>
<pre><code class="language-kotlin">
fun String.addExclamation() = this + &quot;!&quot;
val excited = &quot;Hello&quot;.addExclamation() // &quot;Hello!&quot;
</code></pre>
<hr>
<h2 id="kotlin-basics">Kotlin Basics</h2>
<h3 id="variables-and-constants">Variables and Constants</h3>
<pre><code class="language-kotlin">
// Immutable (read-only) - prefer this
val name = &quot;John&quot;  // Type inferred
val age: Int = 25  // Explicit type

// Mutable
var count = 0
count += 1

// Compile-time constants
const val PI = 3.14159
</code></pre>
<h3 id="basic-types">Basic Types</h3>
<pre><code class="language-kotlin">
// Numbers
val byte: Byte = 127
val short: Short = 32767
val int: Int = 2147483647
val long: Long = 9223372036854775807L
val float: Float = 3.14F
val double: Double = 3.14159

// Characters and Strings
val char: Char = &#x27;A&#x27;
val string: String = &quot;Hello&quot;
val multiline = &quot;&quot;&quot;
    Line 1
    Line 2
    Line 3
&quot;&quot;&quot;.trimIndent()

// Booleans
val isTrue: Boolean = true
</code></pre>
<h3 id="nullable-types">Nullable Types</h3>
<pre><code class="language-kotlin">
var nullable: String? = null
var nonNull: String = &quot;Cannot be null&quot;

// Safe call
val length = nullable?.length

// Elvis operator (default value)
val length2 = nullable?.length ?: 0

// Non-null assertion (use carefully!)
val length3 = nullable!!.length // Throws NPE if null

// Safe cast
val str: String? = obj as? String
</code></pre>
<h3 id="control-flow">Control Flow</h3>
<h4 id="if-expression">If Expression</h4>
<pre><code class="language-kotlin">
val max = if (a &gt; b) a else b

val result = if (condition) {
    println(&quot;True branch&quot;)
    &quot;Success&quot;
} else {
    println(&quot;False branch&quot;)
    &quot;Failure&quot;
}
</code></pre>
<h4 id="when-expression-switch-replacement">When Expression (Switch replacement)</h4>
<pre><code class="language-kotlin">
when (x) {
    1 -&gt; println(&quot;One&quot;)
    2, 3 -&gt; println(&quot;Two or Three&quot;)
    in 4..10 -&gt; println(&quot;Between 4 and 10&quot;)
    is String -&gt; println(&quot;It&#x27;s a string&quot;)
    else -&gt; println(&quot;Something else&quot;)
}

val result = when {
    x &gt; 0 -&gt; &quot;Positive&quot;
    x &lt; 0 -&gt; &quot;Negative&quot;
    else -&gt; &quot;Zero&quot;
}
</code></pre>
<h3 id="loops">Loops</h3>
<pre><code class="language-kotlin">
// For loop
for (i in 1..5) {
    println(i) // 1, 2, 3, 4, 5
}

for (i in 1 until 5) {
    println(i) // 1, 2, 3, 4
}

for (i in 5 downTo 1) {
    println(i) // 5, 4, 3, 2, 1
}

for (i in 0..10 step 2) {
    println(i) // 0, 2, 4, 6, 8, 10
}

// Iterate collections
val list = listOf(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;)
for (item in list) {
    println(item)
}

for ((index, value) in list.withIndex()) {
    println(&quot;$index: $value&quot;)
}

// While loop
while (condition) {
    // code
}

// Do-while loop
do {
    // code
} while (condition)
</code></pre>
<h3 id="functions">Functions</h3>
<pre><code class="language-kotlin">
// Basic function
fun greet(name: String): String {
    return &quot;Hello, $name&quot;
}

// Single expression
fun add(a: Int, b: Int) = a + b

// Default parameters
fun greet(name: String = &quot;Guest&quot;, greeting: String = &quot;Hello&quot;) {
    println(&quot;$greeting, $name!&quot;)
}

// Named arguments
greet(greeting = &quot;Hi&quot;, name = &quot;Alice&quot;)

// Variable arguments
fun sum(vararg numbers: Int): Int {
    return numbers.sum()
}
sum(1, 2, 3, 4, 5)

// Extension function
fun String.reverse(): String {
    return this.reversed()
}
&quot;hello&quot;.reverse() // &quot;olleh&quot;

// Infix function
infix fun Int.times(str: String) = str.repeat(this)
val result = 3 times &quot;Ha&quot; // &quot;HaHaHa&quot;
</code></pre>
<hr>
<h2 id="essential-kotlin-features">Essential Kotlin Features</h2>
<h3 id="1-data-classes">1. Data Classes</h3>
<pre><code class="language-kotlin">
data class User(
    val id: Int,
    val name: String,
    val email: String
)

val user1 = User(1, &quot;Alice&quot;, &quot;alice@example.com&quot;)
val user2 = user1.copy(name = &quot;Bob&quot;) // Copy with modification

// Destructuring
val (id, name, email) = user1
println(&quot;$id, $name, $email&quot;)
</code></pre>
<h3 id="2-collections">2. Collections</h3>
<pre><code class="language-kotlin">
// Immutable (read-only)
val list = listOf(1, 2, 3)
val set = setOf(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;)
val map = mapOf(&quot;key1&quot; to &quot;value1&quot;, &quot;key2&quot; to &quot;value2&quot;)

// Mutable
val mutableList = mutableListOf(1, 2, 3)
mutableList.add(4)

val mutableSet = mutableSetOf(&quot;a&quot;, &quot;b&quot;)
mutableSet.add(&quot;c&quot;)

val mutableMap = mutableMapOf(&quot;a&quot; to 1)
mutableMap[&quot;b&quot;] = 2

// Collection operations
val numbers = listOf(1, 2, 3, 4, 5)
numbers.filter { it &gt; 2 }        // [3, 4, 5]
numbers.map { it * 2 }           // [2, 4, 6, 8, 10]
numbers.any { it &gt; 3 }           // true
numbers.all { it &gt; 0 }           // true
numbers.find { it == 3 }         // 3
numbers.first()                  // 1
numbers.last()                   // 5
numbers.sum()                    // 15
numbers.average()                // 3.0
</code></pre>
<h3 id="3-lambda-expressions">3. Lambda Expressions</h3>
<pre><code class="language-kotlin">
// Basic lambda
val sum = { a: Int, b: Int -&gt; a + b }
println(sum(2, 3)) // 5

// Lambda with single parameter (it)
val doubled = listOf(1, 2, 3).map { it * 2 }

// Lambda as last parameter (trailing lambda)
fun operation(a: Int, b: Int, op: (Int, Int) -&gt; Int): Int {
    return op(a, b)
}
val result = operation(5, 3) { x, y -&gt; x + y }

// Higher-order functions
fun calculate(x: Int, y: Int, operation: (Int, Int) -&gt; Int): Int {
    return operation(x, y)
}
calculate(4, 5) { a, b -&gt; a * b } // 20
</code></pre>
<h3 id="4-classes-and-objects">4. Classes and Objects</h3>
<pre><code class="language-kotlin">
// Primary constructor
class Person(val name: String, var age: Int) {
    // Init block
    init {
        println(&quot;Person created: $name, $age&quot;)
    }
    
    // Secondary constructor
    constructor(name: String) : this(name, 0)
    
    // Methods
    fun greet() = &quot;Hello, I&#x27;m $name&quot;
}

// Inheritance
open class Animal(val name: String) {
    open fun makeSound() {
        println(&quot;Some sound&quot;)
    }
}

class Dog(name: String) : Animal(name) {
    override fun makeSound() {
        println(&quot;Woof!&quot;)
    }
}

// Abstract classes
abstract class Shape {
    abstract fun area(): Double
}

class Circle(val radius: Double) : Shape() {
    override fun area() = Math.PI * radius * radius
}

// Interfaces
interface Clickable {
    fun click()
    fun showOff() = println(&quot;I&#x27;m clickable!&quot;) // Default implementation
}

class Button : Clickable {
    override fun click() = println(&quot;Button clicked&quot;)
}
</code></pre>
<h3 id="5-object-declarations">5. Object Declarations</h3>
<pre><code class="language-kotlin">
// Singleton
object Database {
    fun connect() {
        println(&quot;Connected to database&quot;)
    }
}
Database.connect()

// Companion object (similar to static in Java)
class MyClass {
    companion object {
        const val CONSTANT = &quot;constant value&quot;
        fun create(): MyClass = MyClass()
    }
}
val instance = MyClass.create()

// Object expression (anonymous object)
val clickListener = object : Clickable {
    override fun click() {
        println(&quot;Clicked!&quot;)
    }
}
</code></pre>
<h3 id="6-sealed-classes">6. Sealed Classes</h3>
<pre><code class="language-kotlin">
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val message: String) : Result()
    object Loading : Result()
}

fun handleResult(result: Result) = when (result) {
    is Result.Success -&gt; println(&quot;Data: ${result.data}&quot;)
    is Result.Error -&gt; println(&quot;Error: ${result.message}&quot;)
    Result.Loading -&gt; println(&quot;Loading...&quot;)
}
</code></pre>
<h3 id="7-scope-functions">7. Scope Functions</h3>
<pre><code class="language-kotlin">
// let - null check and transformation
val length = nullableString?.let {
    println(&quot;String: $it&quot;)
    it.length
}

// apply - configure object
val person = Person(&quot;Alice&quot;, 25).apply {
    age = 26
}

// also - additional operations
val numbers = mutableListOf(1, 2, 3).also {
    println(&quot;Original: $it&quot;)
}.apply {
    add(4)
}

// run - execute code block
val result = &quot;hello&quot;.run {
    println(&quot;Length: $length&quot;)
    uppercase()
}

// with - multiple operations on object
with(person) {
    println(name)
    println(age)
}
</code></pre>
<h3 id="8-exception-handling">8. Exception Handling</h3>
<pre><code class="language-kotlin">
try {
    val result = 10 / 0
} catch (e: ArithmeticException) {
    println(&quot;Cannot divide by zero&quot;)
} finally {
    println(&quot;Cleanup&quot;)
}

// Try as expression
val number = try {
    input.toInt()
} catch (e: NumberFormatException) {
    0
}

// throw is an expression
val value = input ?: throw IllegalArgumentException(&quot;Input required&quot;)
</code></pre>
<hr>
<h2 id="advanced-concepts">Advanced Concepts</h2>
<h3 id="1-generics">1. Generics</h3>
<pre><code class="language-kotlin">
// Generic class
class Box&lt;T&gt;(var item: T)

val intBox = Box(42)
val stringBox = Box(&quot;Hello&quot;)

// Generic function
fun &lt;T&gt; singletonList(item: T): List&lt;T&gt; {
    return listOf(item)
}

// Variance
interface Producer&lt;out T&gt; {  // Covariant (out)
    fun produce(): T
}

interface Consumer&lt;in T&gt; {   // Contravariant (in)
    fun consume(item: T)
}
</code></pre>
<h3 id="2-delegation">2. Delegation</h3>
<pre><code class="language-kotlin">
// Class delegation
interface Base {
    fun print()
}

class BaseImpl(val x: Int) : Base {
    override fun print() = println(x)
}

class Derived(b: Base) : Base by b

// Property delegation
class Example {
    var property: String by Delegates.observable(&quot;initial&quot;) { _, old, new -&gt;
        println(&quot;$old -&gt; $new&quot;)
    }
}

// Lazy initialization
val lazyValue: String by lazy {
    println(&quot;Computed!&quot;)
    &quot;Hello&quot;
}
</code></pre>
<h3 id="3-coroutines-basics">3. Coroutines (Basics)</h3>
<pre><code class="language-kotlin">
import kotlinx.coroutines.*

// Launch a coroutine
fun main() = runBlocking {
    launch {
        delay(1000L)
        println(&quot;World!&quot;)
    }
    println(&quot;Hello,&quot;)
}

// Async/await
suspend fun fetchData(): String {
    delay(1000L)
    return &quot;Data&quot;
}

fun main() = runBlocking {
    val data = async { fetchData() }
    println(data.await())
}
</code></pre>
<h3 id="4-inline-functions">4. Inline Functions</h3>
<pre><code class="language-kotlin">
inline fun &lt;T&gt; measureTime(block: () -&gt; T): T {
    val start = System.currentTimeMillis()
    val result = block()
    val end = System.currentTimeMillis()
    println(&quot;Took ${end - start}ms&quot;)
    return result
}

measureTime {
    // Some operation
}
</code></pre>
<hr>
<h2 id="best-practices">Best Practices</h2>
<ul>
<li><strong>Prefer <code>val</code> over <code>var</code></strong> - immutability is safer</li>
<li><strong>Use data classes</strong> for simple data holders</li>
<li><strong>Leverage null safety</strong> - use <code>?</code> and safe calls</li>
<li><strong>Use when instead of if-else chains</strong></li>
<li><strong>Prefer extension functions</strong> over utility classes</li>
<li><strong>Use scope functions</strong> appropriately</li>
<li><strong>Make use of default parameters</strong> instead of overloading</li>
<li><strong>Use sealed classes</strong> for restricted hierarchies</li>
<li><strong>Leverage collection operations</strong> instead of manual loops</li>
<li><strong>Use coroutines</strong> for asynchronous programming</li>
</ul>
<hr>
<h2 id="quick-comparison-table">Quick Comparison Table</h2>
<table>
<thead><tr>
<th>Feature</th>
<th>Java</th>
<th>Kotlin</th>
</tr></thead><tbody>
<tr>
<td>Null Safety</td>
<td>Manual checks</td>
<td>Built-in with <code>?</code></td>
</tr>
<tr>
<td>Boilerplate</td>
<td>High</td>
<td>Low</td>
</tr>
<tr>
<td>Type Inference</td>
<td>Limited</td>
<td>Extensive</td>
</tr>
<tr>
<td>Extension Functions</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Data Classes</td>
<td>Manual</td>
<td>One line</td>
</tr>
<tr>
<td>Coroutines</td>
<td>No</td>
<td>Built-in</td>
</tr>
<tr>
<td>Smart Casts</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Default Parameters</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>String Templates</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Semicolons</td>
<td>Required</td>
<td>Optional</td>
</tr>
<tr>
<td>Primary Constructor</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Singleton</td>
<td>Manual</td>
<td><code>object</code></td>
</tr>
</tbody></table>
<hr>
<h2 id="useful-resources">Useful Resources</h2>
<ul>
<li><a href="https://kotlinlang.org/docs/home.html">Official Kotlin Documentation</a></li>
<li><a href="https://play.kotlinlang.org/koans">Kotlin Koans</a></li>
<li><a href="https://play.kotlinlang.org/">Kotlin Playground</a></li>
<li><a href="https://developer.android.com/kotlin">Android Kotlin Guides</a></li>
</ul>
<hr>
<p><strong>Remember:</strong> Kotlin is 100% interoperable with Java, so you can use Java libraries in Kotlin projects and vice versa!</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = kotlinguideContentData;
}
