// Js - Content Data
const jsContentData = `<h2 id="the-truth-about-var-let-and-const-same-family-very-different-personalities">💡 The Truth About <code>var</code>, <code>let</code>, and <code>const</code> — Same Family, Very Different Personalities</h2>
<p>We all write them casually.</p>
<p>We all assume they’re <em>just variables</em>.</p>
<p>But dig deeper, and you’ll realize — <code>var</code>, <code>let</code>, and <code>const</code> are like three classmates who <em>look alike but think very differently</em>. 😅</p>
<hr>
<h3 id="key-differences">🔍 Key Differences</h3>
<h4 id="1-scope"><strong>1. Scope</strong></h4>
<ul>
<li><strong><code>var</code> → Function-scoped</strong></li>
</ul>
<p>  The old-school student who ignores classroom boundaries.</p>
<ul>
<li><strong><code>let</code> → Block-scoped</strong></li>
</ul>
<p>  Disciplined. Respects <code>{ }</code> and stays within its lane.</p>
<ul>
<li><strong><code>const</code> → Block-scoped</strong></li>
</ul>
<p>  Same scope rules as <code>let</code>, but adds a “no reassignment” rule.</p>
<hr>
<h4 id="2-re-declaration"><strong>2. Re-declaration</strong></h4>
<ul>
<li><strong><code>var</code> → Can be re-declared</strong> in the same scope. (Total chaos allowed 🙃)</li>
<li><strong><code>let</code> → Cannot be re-declared</strong> in the same scope.</li>
<li><strong><code>const</code> → Cannot be re-declared</strong> either.</li>
</ul>
<hr>
<h4 id="3-re-assignment"><strong>3. Re-assignment</strong></h4>
<ul>
<li><strong><code>var</code> → You can reassign freely.</strong></li>
<li><strong><code>let</code> → You can reassign, but not re-declare.</strong></li>
<li><strong><code>const</code> → Cannot be reassigned.</strong></li>
</ul>
<p>  (However, if it’s an <em>object</em> or <em>array</em>, the contents <em>can</em> still be modified — the binding itself is constant, not the data inside.)</p>
<hr>
<h4 id="4-hoisting"><strong>4. Hoisting</strong></h4>
<ul>
<li><strong><code>var</code> → Hoisted and initialized as <code>undefined</code>.</strong></li>
<li><strong><code>let</code> → Hoisted but trapped in the <em>Temporal Dead Zone</em> until declared.</strong></li>
<li><strong><code>const</code> → Same as <code>let</code>, but must be initialized at the time of declaration.</strong></li>
</ul>
<hr>
<h3 id="the-wow-moment">🧠 The “Wow” Moment</h3>
<p>When I tested them with <strong>loops + asynchronous code (<code>setTimeout</code>)</strong>,</p>
<p>the results blew my mind 🤯.</p>
<p>That’s when it clicked:</p>
<p>Choosing between <code>var</code>, <code>let</code>, and <code>const</code> isn’t just syntax —</p>
<p>it completely changes how your program <em>thinks</em> and behaves.</p>
<hr>
<h3 id="the-takeaway">⚠️ The Takeaway</h3>
<p>Never underestimate the “small” things in JavaScript.</p>
<p>That single choice between <code>var</code>, <code>let</code>, and <code>const</code> can mean the difference between:</p>
<p>✅ predictable, clean output</p>
<p>❌ or hours of mysterious debugging</p>
<hr>
<h3 id="final-thought">🙌 Final Thought</h3>
<p>To every beginner (and even pros who occasionally slip) —</p>
<p>recheck your declarations.</p>
<p>Sometimes, the bug isn’t in your logic… it’s in your <code>var</code>, <code>let</code>, or <code>const</code>.</p>
<p>Grateful to <strong>Code For India Foundation</strong> for encouraging curiosity-driven learning 💻✨</p>
<hr>
<p>Perfect 👍 — here’s a <strong>well-structured and formatted</strong> version of your content ready for a file named <strong><code>js.md</code></strong>.</p>
<p>It’s clean, professional, and Markdown-friendly, complete with headings, bullet points, and code-like formatting for clarity.</p>
<hr>
<h1 id="javascript-single-or-multi-threaded">🧠 JavaScript — Single or Multi-Threaded?</h1>
<p>Many beginners get confused about whether <strong>JavaScript</strong> is <strong>single-threaded</strong> or <strong>multi-threaded</strong>.  </p>
<p>Let’s clear that up 👇</p>
<hr>
<h2 id="javascript-is-single-threaded">⚡ JavaScript is Single-Threaded</h2>
<p>JavaScript has <strong>one call stack</strong>, meaning it can <strong>execute only one task at a time</strong>.</p>
<p>✅ It processes code <strong>line by line</strong>, in order.  </p>
<p>✅ That’s why we call JavaScript a <strong>synchronous, single-threaded language</strong>.</p>
<pre><code class="language-txt">
Call Stack → Executes one function at a time
</code></pre>
<hr>
<h2 id="but-then-how-does-it-handle-async-tasks">🕑 But Then... How Does It Handle Async Tasks?</h2>
<p>Things like:</p>
<ul>
<li><code>setTimeout()</code></li>
<li><code>fetch()</code> / API calls</li>
<li>Event listeners (<code>click</code>, <code>keydown</code>, etc.)</li>
</ul>
<p>…don’t block the main thread.</p>
<p>So how does JavaScript manage these without freezing the UI?</p>
<hr>
<h2 id="the-magic-web-apis-event-loop">⚙️ The Magic: Web APIs + Event Loop</h2>
<p>While <strong>JavaScript itself</strong> is single-threaded,</p>
<p>the <strong>browser (or Node.js environment)</strong> provides <strong>asynchronous APIs</strong> that handle tasks in the background.</p>
<p>🧩 Components involved:</p>
<ul>
<li><strong>Call Stack</strong> → runs main JS code</li>
<li><strong>Web APIs</strong> → handle async operations (e.g., timers, network requests)</li>
<li><strong>Callback Queue (or Task Queue)</strong> → holds async callbacks</li>
<li><strong>Event Loop</strong> → constantly checks if the stack is free to run queued callbacks</li>
</ul>
<hr>
<h3 id="simplified-flow">🔁 Simplified Flow</h3>
<pre><code class="language-txt">
JS Call Stack
   ↓
Web API (e.g., setTimeout)
   ↓
Callback Queue
   ↓
Event Loop (pushes back to stack)
</code></pre>
<p>This process allows JavaScript to appear <strong>asynchronous</strong> while still running <strong>on a single thread</strong>.</p>
<hr>
<h2 id="the-truth">✨ The Truth</h2>
<blockquote>🧩 <strong>JavaScript Engine</strong> → Single-threaded</blockquote>
<blockquote>🧩 <strong>Environment (Browser / Node.js)</strong> → Multi-threaded support for async features</blockquote>
<p>Together, they create the illusion of concurrency.</p>
<hr>
<p>💡 <strong>Key Takeaway</strong></p>
<p>Even though <strong>JavaScript runs on one thread</strong>,</p>
<p>its <strong>environment</strong> provides background workers to handle async operations,</p>
<p>making your code <strong>non-blocking and efficient</strong>.</p>
<pre><code class="language-txt">
JavaScript = Single-threaded language  
Browser / Node.js = Provides multi-threaded async support
</code></pre>
<hr>
<p>✅ <strong>In short:</strong></p>
<blockquote>JavaScript executes one thing at a time —</blockquote>
<blockquote>but thanks to the <strong>Event Loop</strong>, it <em>feels</em> like multitasking.</blockquote>
<hr>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = jsContentData;
}
