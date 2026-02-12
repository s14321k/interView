// Kotlin Vs Type Script - Content Data
const kotlinvstypescriptContentData = `<h1 id="kotlin-vs-typescript-complete-comparison-basics-to-advanced">Kotlin vs TypeScript — Complete Comparison (Basics to Advanced)</h1>
<hr>
<h1 id="1-overview">1. Overview</h1>
<table>
<thead><tr>
<th>Feature</th>
<th>Kotlin</th>
<th>TypeScript</th>
</tr></thead><tbody>
<tr>
<td>Type</td>
<td>Statically typed</td>
<td>Statically typed (compiled to JS)</td>
</tr>
<tr>
<td>Platform</td>
<td>JVM, Android, Native, JS</td>
<td>Browser, Node.js</td>
</tr>
<tr>
<td>Null Safety</td>
<td>Built-in</td>
<td>With strict mode</td>
</tr>
<tr>
<td>OOP Support</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Functional Support</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody></table>
<hr>
<h1 id="2-variables-types">2. Variables &amp; Types</h1>
<h2 id="variable-declaration">Variable Declaration</h2>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
val name: String = &quot;John&quot;   // immutable
var age: Int = 25            // mutable
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
const name: string = &quot;John&quot;;  // immutable
let age: number = 25;          // mutable
</code></pre>
<hr>
<h1 id="3-type-inference">3. Type Inference</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
val name = &quot;John&quot;  // inferred as String
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
const name = &quot;John&quot;  // inferred as string
</code></pre>
<hr>
<h1 id="4-null-safety">4. Null Safety</h1>
<h2 id="nullable-types">Nullable Types</h2>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
val name: String? = null
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
let name: string | null = null;
</code></pre>
<hr>
<h2 id="safe-call-operator">Safe Call Operator</h2>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
user?.name
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
user?.name
</code></pre>
<hr>
<h2 id="null-fallback">Null Fallback</h2>
<h3 id="kotlin-elvis-operator">Kotlin (Elvis Operator)</h3>
<pre><code class="language-kotlin">
val result = value ?: &quot;default&quot;
</code></pre>
<h3 id="typescript-nullish-coalescing">TypeScript (Nullish Coalescing)</h3>
<pre><code class="language-ts">
const result = value ?? &quot;default&quot;;
</code></pre>
<hr>
<h1 id="5-optional-properties">5. Optional Properties</h1>
<h3 id="kotlin">Kotlin</h3>
<p>No direct equivalent. Use nullable:</p>
<pre><code class="language-kotlin">
val name: String?
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
interface User {
  name?: string;  // optional
}
</code></pre>
<hr>
<h1 id="6-functions">6. Functions</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
fun greet(name: String): String {
    return &quot;Hello $name&quot;
}
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
function greet(name: string): string {
  return &#96;Hello ${name}&#96;;
}
</code></pre>
<hr>
<h1 id="7-default-parameters">7. Default Parameters</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
fun greet(name: String = &quot;Guest&quot;)
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
function greet(name: string = &quot;Guest&quot;) {}
</code></pre>
<hr>
<h1 id="8-lambda-arrow-functions">8. Lambda / Arrow Functions</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
val sum = { a: Int, b: Int -&gt; a + b }
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
const sum = (a: number, b: number) =&gt; a + b;
</code></pre>
<hr>
<h1 id="9-classes">9. Classes</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
class User(val name: String, var age: Int)
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
class User {
  constructor(public name: string, public age: number) {}
}
</code></pre>
<hr>
<h1 id="10-data-classes-vs-interfaces">10. Data Classes vs Interfaces</h1>
<h3 id="kotlin-data-class">Kotlin (Data Class)</h3>
<pre><code class="language-kotlin">
data class User(val name: String, val age: Int)
</code></pre>
<h3 id="typescript-interface">TypeScript (Interface)</h3>
<pre><code class="language-ts">
interface User {
  name: string;
  age: number;
}
</code></pre>
<hr>
<h1 id="11-generics">11. Generics</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
class Box&lt;T&gt;(val value: T)
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
class Box&lt;T&gt; {
  constructor(public value: T) {}
}
</code></pre>
<hr>
<h1 id="12-extension-functions">12. Extension Functions</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
fun String.greet() = &quot;Hello $this&quot;
</code></pre>
<h3 id="typescript">TypeScript</h3>
<p>Not directly supported (can extend prototype manually).</p>
<hr>
<h1 id="13-enums">13. Enums</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
enum class Color { RED, GREEN }
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
enum Color { RED, GREEN }
</code></pre>
<hr>
<h1 id="14-sealed-classes-vs-union-types">14. Sealed Classes vs Union Types</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
sealed class Result
data class Success(val data: String): Result()
object Error: Result()
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
type Result =
  | { type: &quot;success&quot;; data: string }
  | { type: &quot;error&quot; };
</code></pre>
<hr>
<h1 id="15-coroutines-vs-asyncawait">15. Coroutines vs Async/Await</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
suspend fun fetchData()
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
async function fetchData() {}
</code></pre>
<hr>
<h1 id="16-collections">16. Collections</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
val list = listOf(1,2,3)
list.map { it * 2 }
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
const list = [1,2,3];
list.map(x =&gt; x * 2);
</code></pre>
<hr>
<h1 id="17-type-casting">17. Type Casting</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
val str = value as String
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
const str = value as string;
</code></pre>
<hr>
<h1 id="18-non-null-assertion">18. Non-null Assertion</h1>
<h3 id="kotlin">Kotlin</h3>
<pre><code class="language-kotlin">
val name = value!!
</code></pre>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
const name = value!;
</code></pre>
<hr>
<h1 id="19-access-modifiers">19. Access Modifiers</h1>
<table>
<thead><tr>
<th>Kotlin</th>
<th>TypeScript</th>
</tr></thead><tbody>
<tr>
<td>public</td>
<td>public</td>
</tr>
<tr>
<td>private</td>
<td>private</td>
</tr>
<tr>
<td>protected</td>
<td>protected</td>
</tr>
<tr>
<td>internal</td>
<td>Not available</td>
</tr>
</tbody></table>
<hr>
<h1 id="20-modules">20. Modules</h1>
<h3 id="kotlin">Kotlin</h3>
<p>Uses packages</p>
<h3 id="typescript">TypeScript</h3>
<pre><code class="language-ts">
export class User {}
import { User } from &quot;./User&quot;;
</code></pre>
<hr>
<h1 id="21-advanced-type-features">21. Advanced Type Features</h1>
<table>
<thead><tr>
<th>Feature</th>
<th>Kotlin</th>
<th>TypeScript</th>
</tr></thead><tbody>
<tr>
<td>Type Aliases</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Union Types</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Intersection Types</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Higher-order Functions</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>Inline Functions</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Reified Generics</td>
<td>Yes</td>
<td>No</td>
</tr>
<tr>
<td>Decorators</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Multiplatform</td>
<td>Yes</td>
<td>No</td>
</tr>
</tbody></table>
<hr>
<h1 id="22-when-to-use">22. When to Use</h1>
<h3 id="kotlin">Kotlin</h3>
<ul>
<li>Android development</li>
<li>Backend (Spring, Ktor)</li>
<li>Multiplatform mobile</li>
</ul>
<h3 id="typescript">TypeScript</h3>
<ul>
<li>Frontend (React, Angular, Vue)</li>
<li>Node.js backend</li>
<li>Full-stack web apps</li>
</ul>
<hr>
<h1 id="final-summary">Final Summary</h1>
<p>Kotlin is a powerful general-purpose language focused on JVM and mobile development with strong null safety and modern features.</p>
<p>TypeScript enhances JavaScript with strong typing and advanced type system features designed for large-scale web applications.</p>
<p>Both are modern, expressive, and support OOP + Functional programming paradigms.</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = kotlinvstypescriptContentData;
}
