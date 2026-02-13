// Es6 - Content Data
const es6ContentData = `<h1 id="react-es6-quick-setup-core-concepts">🚀 React + ES6 Quick Setup &amp; Core Concepts</h1>
<h2 id="prerequisite">🧩 Prerequisite</h2>
<p>Make sure <strong>Node.js</strong> is installed on your system.</p>
<hr>
<h2 id="create-a-react-app">⚙️ Create a React App</h2>
<h3 id="step-1-create-and-enter-your-react-project"><strong>Step 1:</strong> Create and enter your React project</h3>
<pre><code class="language-bash">
npx create-react-app React-app
cd React-app
</code></pre>
<hr>
<h2 id="start-the-server">🖥️ Start the Server</h2>
<h3 id="type-1-using-live-server-vs-code-extension"><strong>Type 1: Using Live Server (VS Code Extension)</strong></h3>
<ul>
<li>Install <strong>Live Server</strong> by <em>Ritwick Dey</em> from the VS Code Marketplace.</li>
<li>Open your <code>index.html</code>, right-click, and select <strong>&quot;Start Live Server&quot;</strong>.</li>
</ul>
<h3 id="type-2-using-reacts-built-in-server"><strong>Type 2: Using React’s built-in server</strong></h3>
<pre><code class="language-bash">
cd ./projectname/
npm start
</code></pre>
<hr>
<h2 id="working-with-classes">📚 Working with Classes</h2>
<p>File structure example:</p>
<pre><code class="language-">
/src
  ├── person.js
  ├── teacher.js
  └── index.js
</code></pre>
<hr>
<h3 id="personjs">🧱 <code>person.js</code></h3>
<pre><code class="language-js">
// person.js

export class Person {
  constructor(pname) {
    this.pname = pname;
  }

  walk() {
    console.log(&quot;Person Walk&quot;);
  }

  talk = () =&gt; {
    console.log(&quot;Lambda arrow function&quot;);
  };
}
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li><code>constructor(pname)</code> initializes a new instance with the property <code>pname</code>.</li>
<li><code>walk()</code> is a regular method.</li>
<li><code>talk</code> is an <strong>arrow function property</strong> — it binds <code>this</code> to the current instance automatically.</li>
</ul>
<hr>
<h3 id="teacherjs">🧱 <code>teacher.js</code></h3>
<pre><code class="language-js">
// teacher.js

import { Person } from &#x27;./person.js&#x27;;

export class Teacher extends Person {
  constructor(name, degree) {
    super(name); // Calls the parent (Person) constructor
    this.degree = degree;
  }

  teach() {
    console.log(&quot;Teacher Teach&quot;);

    const classPerson = new Person(&quot;Sarathkumar&quot;); // Creating a new Person instance

    classPerson.walk(); // Output: &quot;Person Walk&quot;
    classPerson.talk(); // Output: &quot;Lambda arrow function&quot;

    let classPer = classPerson.walk; // Stores the function reference
    console.log(classPer); // Logs the walk function definition
  }
}
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li><code>extends</code> allows <code>Teacher</code> to inherit from <code>Person</code>.</li>
<li><code>super(name)</code> invokes the parent class constructor.</li>
<li>Demonstrates object creation and method calls.</li>
</ul>
<hr>
<h3 id="indexjs">🧱 <code>index.js</code></h3>
<pre><code class="language-js">
// index.js

import { Teacher } from &quot;./teacher.js&quot;;

const teacher1 = new Teacher(&quot;Sarath&quot;, &quot;BCA&quot;);
teacher1.teach();

console.log(document);
document.getElementById(&quot;divId&quot;).innerHTML = &quot;Written in JS&quot;;

// Object Example
let person = {
  name: &quot;Sarath&quot;,
  walk: function () {
    console.log(this); // refers to the person object
  },
  talk() {
    console.log(&quot;talk&quot;);
  },
  balk: () =&gt; {
    console.log(&quot;balk&quot;);
  },
};

// Dot Notation
person.name = &quot;Sarath Kumar&quot;;

// Bracket Notation
person[&quot;name&quot;] = &quot;Sarathkumar&quot;;

// Calling methods
person.walk(); // logs person object
person.talk(); // &quot;talk&quot;
person.balk(); // &quot;balk&quot;
</code></pre>
<hr>
<h2 id="topics-covered">🧠 Topics Covered</h2>
<ul>
<li>Object</li>
<li>Dot notation</li>
<li>Bracket notation</li>
<li>Without binding</li>
<li>With binding</li>
<li>Predicate function</li>
<li>Arrow functions</li>
<li><code>Array.map()</code> &amp; Template Literals `<code> </code>${}<code> </code>`</li>
<li>Object Destructuring &amp; Nested Destructuring</li>
<li>Spread Operator (<code>...</code>) – adds old array into new array</li>
<li>Rest Operator (<code>...</code>) – allows multiple arguments in functions</li>
<li>Array Destructuring <code>[]</code></li>
<li>Object Destructuring <code>{}</code></li>
</ul>
<hr>
<p><strong>✅ Key Takeaway</strong></p>
<p>Understanding <strong>classes</strong>, <strong><code>this</code> context</strong>, <strong>arrow functions</strong>, and <strong>destructuring</strong> helps you write cleaner, modern ES6+ JavaScript — especially in React environments.</p>
<hr>
<p>🧩 <strong>Tip:</strong></p>
<p>Always use <code>let</code> and <code>const</code> appropriately to avoid scope and hoisting issues.</p>
<p>Your code becomes predictable, safe, and easier to debug.</p>
<hr>
<hr>
<h2 id="without-binding-vs-with-binding">🧩 Without Binding vs With Binding</h2>
<p>In JavaScript, functions are <strong>first-class objects</strong>, meaning they can be assigned to variables, passed around, and called independently.  </p>
<p>However, when you detach a method from its object, the <code>this</code> reference is lost — unless you <strong>bind</strong> it.</p>
<pre><code class="language-js">
// Without binding
const walk1 = person.walk; // functions are objects in JS
walk1(); // global call — &#x27;this&#x27; will be undefined or the global object
console.log(walk1);

document.getElementById(&quot;person1&quot;).innerHTML =
  &quot;Person without binding &quot; + walk1;

// With binding
const walk2 = person.walk.bind(person);
walk2(); // correctly binds &#x27;this&#x27; to the person object
console.log(walk2);

document.getElementById(&quot;person2&quot;).innerHTML =
  &quot;Person with binding &quot; + walk2;
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li><code>walk1()</code> is called without the <code>person</code> context, so <code>this</code> loses its binding.</li>
<li><code>.bind(person)</code> creates a new function where <code>this</code> always refers to <code>person</code>.</li>
<li>Binding is especially useful when passing methods as callbacks.</li>
</ul>
<hr>
<h2 id="predicate-functions">🧮 Predicate Functions</h2>
<p>Predicate functions are <strong>simple functions that return a value</strong> based on computation or condition.  </p>
<p>They help make code modular and readable.</p>
<pre><code class="language-js">
// Predicate function
const square1 = function (number) {
  return number * number;
};

document.getElementById(&quot;squr1&quot;).innerHTML =
  &quot;Square through predicate function: &quot; + square1(2);
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li><code>square1</code> is a standard function expression.</li>
<li>It explicitly returns a computed value.</li>
</ul>
<hr>
<h2 id="arrow-functions-es6">⚡ Arrow Functions (ES6)</h2>
<p>Arrow functions provide a <strong>concise syntax</strong> and <strong>lexical <code>this</code> binding</strong>, which means they do not redefine <code>this</code> inside their body.</p>
<pre><code class="language-js">
// Using arrow function
const square2 = (number) =&gt; number * number;
console.log(&quot;square2 ::: &quot; + square2(2));

// Multi-line arrow function with explicit return
const square3 = (number) =&gt; {
  let addNum = number * number;
  addNum = number + addNum;
  return addNum;
};
console.log(&quot;square3 ::: &quot; + square3(3));

document.getElementById(&quot;squr2&quot;).innerHTML =
  &quot;Square through Arrow function: &quot; + square2(3);
</code></pre>
<p><strong>Key Notes:</strong></p>
<ul>
<li>Arrow functions can use <strong>implicit return</strong> for single-line expressions.</li>
<li>Great for short, functional operations like in <code>.map()</code>, <code>.filter()</code>, and <code>.reduce()</code>.</li>
<li>They do <strong>not</strong> have their own <code>this</code>, which makes them ideal for callbacks and inner functions.</li>
</ul>
<hr>
<p>🧩 <strong>Tip:</strong>  </p>
<p>Use <code>bind()</code> when you need to preserve <code>this</code> in a callback.  </p>
<p>Use <strong>arrow functions</strong> when you want lexical <code>this</code> behavior automatically.</p>
<hr>
<p>Excellent continuation 👏 — you’re documenting your ES6 learning beautifully.</p>
<p>Here’s your next section, formatted as part of your <strong><code>react-es6-basics.md</code></strong> (or similar) Markdown file — with clean code blocks, clear headings, and concise explanations.  </p>
<p>You can directly append this to your existing <code>.md</code> file.</p>
<hr>
<h2 id="predicate-functions-with-arrayfilter">🔍 Predicate Functions with <code>Array.filter()</code></h2>
<p>Predicate functions return <strong>true or false</strong> based on a condition.  </p>
<p>They’re commonly used with methods like <code>.filter()</code> to extract elements matching specific criteria.</p>
<pre><code class="language-js">
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// Using Predicate Function
// A predicate function takes one value and returns true/false
const activeJobs1 = jobs.filter(function (job) {
  return job.isActive;
});

// JSON.stringify converts objects to strings for display
document.getElementById(&quot;actJobs1&quot;).innerHTML =
  &quot;Active jobs (predicate function): &quot; + JSON.stringify(activeJobs1);

// Using Arrow Function
const activeJobs2 = jobs.filter((job) =&gt; job.isActive);
document.getElementById(&quot;actJobs2&quot;).innerHTML =
  &quot;Active jobs (arrow function): &quot; + JSON.stringify(activeJobs2);
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li><code>.filter()</code> returns a <strong>new array</strong> containing only elements where the condition is <code>true</code>.</li>
<li>Predicate functions are ideal for filtering data collections.</li>
<li>Arrow functions make them concise and readable.</li>
</ul>
<hr>
<h2 id="arraymap-and-template-literals">🎨 <code>Array.map()</code> and Template Literals</h2>
<p><code>.map()</code> creates a <strong>new array</strong> by applying a function to each element in the original array.  </p>
<p>Template literals (backticks `<code> </code> ``) make string concatenation clean and expressive.</p>
<pre><code class="language-js">
const colors = [&quot;red&quot;, &quot;blue&quot;, &quot;white&quot;];

const funcItems = colors.map(function (color) {
  return &quot;&lt;li&gt;&quot; + color + &quot;&lt;/li&gt;&quot;;
});

const arrowItems = colors.map((color) =&gt; &#96;&lt;li&gt;${color}&lt;/li&gt;&#96;); // Template literal syntax
console.log(arrowItems + &quot;\n&quot; + funcItems);
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li>Both <code>map()</code> versions return an array of <code>&lt;li&gt;</code> elements.</li>
<li>Template literals allow you to embed variables directly:</li>
<pre><code class="language-js">
&#96;&lt;li&gt;${color}&lt;/li&gt;&#96;
</code></pre>
<li>Easier to read and maintain than traditional string concatenation.</li>
</ul>
<hr>
<h2 id="object-destructuring-nested-destructuring">🧩 Object Destructuring &amp; Nested Destructuring</h2>
<p>Destructuring lets you <strong>unpack values</strong> from arrays or objects into separate variables.  </p>
<p>It’s one of the most powerful ES6 features for writing clean, declarative code.</p>
<pre><code class="language-js">
const address = {
  street: &quot;Dabai&quot;,
  city: &quot;Dubai&quot;,
  country: &quot;Kabai&quot;,
};

// Basic Object Destructuring
let { street, city, country } = address;

console.log(street);  // Dabai
console.log(city);    // Dubai
console.log(country); // Kabai

// Assigning to New Variable Names + Default Values
let { street: st, city: ct, country: cn, place: pc = &quot;Tvk&quot; } = address;
// If &#x27;place&#x27; doesn&#x27;t exist in the object, default &quot;Tvk&quot; is used

console.log(st); // Dabai
console.log(ct); // Dubai
console.log(cn); // Kabai
console.log(pc); // Tvk

// Using Destructuring in Function Parameters
function objDesCall({ street, city }) {
  console.log(&#96;The name is ${street} and the city is ${city}&#96;);
}

objDesCall(address);
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li><code>{ street, city, country }</code> extracts properties directly.</li>
<li><code>{ street: st }</code> renames variables while destructuring.</li>
<li>Default values can be assigned (<code>place: pc = &quot;Tvk&quot;</code>).</li>
<li>Functions can destructure arguments for cleaner parameter handling.</li>
</ul>
<hr>
<p>🧩 <strong>Tip:</strong>  </p>
<p>Combine destructuring with arrow functions for ultra-clean code, e.g.:</p>
<pre><code class="language-js">
const printCity = ({ city }) =&gt; console.log(city);
printCity(address);
</code></pre>
<hr>
<p>✅ <strong>Next Up:</strong>  </p>
<p>We can continue with:</p>
<ul>
<li>Spread Operator (<code>...</code>)</li>
<li>Rest Operator (<code>...</code>)</li>
<li>Array Destructuring <code>[]</code></li>
<li>Object Destructuring <code>{}</code> (nested examples)</li>
</ul>
<p>Perfect 👏 — you’re almost done with the <strong>core ES6 concepts</strong>!</p>
<p>Here’s your next section formatted as a continuation of your <code>.md</code> file — fully cleaned up, properly explained, and syntax-highlighted.</p>
<p>You can safely append this to the end of your existing <strong><code>react-es6-basics.md</code></strong> document.</p>
<hr>
<h2 id="array-destructuring">🧮 Array Destructuring <code>[]</code></h2>
<p>Destructuring is a <strong>simplified way to extract multiple values</strong> from an array into separate variables.  </p>
<p>It makes your code cleaner and eliminates repetitive indexing.</p>
<pre><code class="language-js">
// Array Destructuring
const arrNumbs = [1, 2, 3];

// Extracting specific values (skipping the middle element)
const [num1, , num3] = arrNumbs;

console.log(num1, num3); // Output: 1 3
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li>The commas <code>, ,</code> let you skip unwanted elements.</li>
<li>The array’s structure defines how values are assigned.</li>
<li>Equivalent to:</li>
</ul>
<pre><code class="language-js">
const num1 = arrNumbs[0];
const num3 = arrNumbs[2];
</code></pre>
<hr>
<h2 id="spread-operator">🌊 Spread Operator (<code>...</code>)</h2>
<p>The <strong>spread operator</strong> (<code>...</code>) expands iterable elements (like arrays or objects) into individual elements.</p>
<p>It’s useful for <strong>copying</strong>, <strong>combining</strong>, or <strong>spreading</strong> values across new arrays or function arguments.</p>
<pre><code class="language-js">
const firstArr = [1, 2, 3];
console.log(&quot;Type of:&quot;, typeof firstArr); // object

const secndArr = [4, 5, 6];

const arrConcatOP = (arry1, arry2) =&gt; {
  // Using concat()
  const combined1 = arry1.concat(arry2);
  console.log(&quot;Concatenated:&quot;, combined1);

  // Using spread operator
  const combined2 = [...arry1, &quot;a&quot;, ...arry2];
  console.log(&quot;Spread Combined:&quot;, combined2);
};

arrConcatOP(firstArr, secndArr);
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li><code>concat()</code> merges arrays traditionally.</li>
<li><code>[...arry1, &quot;a&quot;, ...arry2]</code> uses the spread operator to:</li>
</ul>
<ul>
<li>Copy elements from <code>arry1</code></li>
<li>Add <code>&quot;a&quot;</code></li>
<li>Then spread elements from <code>arry2</code></li>
<li>Easier and more readable than <code>concat()</code>.</li>
</ul>
<hr>
<h2 id="rest-operator">✋ Rest Operator (<code>...</code>)</h2>
<p>The <strong>rest operator</strong> looks identical to the spread operator but does the opposite —</p>
<p>it <strong>collects multiple arguments</strong> into a single array.</p>
<pre><code class="language-js">
// Rest Operator Example
const filter = (...args) =&gt; {
  return args.filter((element) =&gt; element === 1);
};

console.log(filter(1, 2, 3, 4)); // Output: [1]
</code></pre>
<p><strong>Explanation:</strong></p>
<ul>
<li><code>(...args)</code> collects all arguments into an array.</li>
<li>You can then perform array operations like <code>.filter()</code>, <code>.map()</code>, etc.</li>
<li>Handy when you don’t know how many parameters will be passed to a function.</li>
</ul>
<hr>
<h3 id="spread-vs-rest-the-difference">⚖️ <strong>Spread vs Rest — The Difference</strong></h3>
<table>
<thead><tr>
<th>Operator</th>
<th>Purpose</th>
<th>Example</th>
</tr></thead><tbody>
<tr>
<td><strong>Spread (<code>...</code>)</strong></td>
<td>Expands elements</td>
<td><code>const newArr = [...oldArr, 4, 5];</code></td>
</tr>
<tr>
<td><strong>Rest (<code>...</code>)</strong></td>
<td>Collects elements</td>
<td><code>function sum(...nums) {}</code></td>
</tr>
</tbody></table>
<p><strong>Mnemonic:</strong></p>
<blockquote>Spread <em>spreads out</em> values → used when <strong>expanding</strong>.</blockquote>
<blockquote>Rest <em>gathers up</em> values → used when <strong>collecting</strong>.</blockquote>
<hr>
<p>🧩 <strong>Tip:</strong></p>
<p>Use <strong>destructuring</strong> with <strong>rest</strong> for even cleaner code:</p>
<pre><code class="language-js">
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
</code></pre>
<hr>
<p>✅ <strong>Now your file covers:</strong></p>
<ul>
<li>Object creation and binding</li>
<li>Predicate and arrow functions</li>
<li>Template literals</li>
<li>Object and array destructuring</li>
<li>Spread and rest operators</li>
</ul>
<hr>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = es6ContentData;
}
