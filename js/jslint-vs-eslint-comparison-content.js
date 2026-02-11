// Jslint Vs Eslint Comparison - Content Data
const jslintVsEslintComparisonContentData = `<h1 id="jslint-vs-eslint-a-comprehensive-comparison">JSLint vs ESLint: A Comprehensive Comparison</h1>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#basic-part">Basic Part</a></li>
<li><a href="#intermediate-part">Intermediate Part</a></li>
<li><a href="#advanced-part">Advanced Part</a></li>
</ul>
<hr>
<h2 id="basic-part">Basic Part</h2>
<h3 id="what-are-linters">What are Linters?</h3>
<p>Linters are static code analysis tools that examine your JavaScript code for potential errors, bugs, stylistic issues, and suspicious constructs without actually running the code.</p>
<h3 id="jslint-overview">JSLint Overview</h3>
<p><strong>Created by:</strong> Douglas Crockford (2002)</p>
<p><strong>Philosophy:</strong> Opinionated, strict, minimal configuration</p>
<p><strong>Key Characteristics:</strong></p>
<ul>
<li>Very strict and opinionated about code style</li>
<li>Minimal to no configuration options</li>
<li>&quot;The Good Parts&quot; philosophy</li>
<li>Fast and simple</li>
<li>Zero dependencies</li>
</ul>
<p><strong>Example JSLint Rules:</strong></p>
<pre><code class="language-javascript">
// JSLint enforces strict equality
if (x == 5) { }      // ❌ Error: Use === instead
if (x === 5) { }     // ✅ Correct

// JSLint requires variable declarations at top
function example() {
    var x = 1;
    console.log(x);
    var y = 2;       // ❌ Error: Move to top
}
</code></pre>
<h3 id="eslint-overview">ESLint Overview</h3>
<p><strong>Created by:</strong> Nicholas C. Zakas (2013)</p>
<p><strong>Philosophy:</strong> Highly configurable, community-driven, extensible</p>
<p><strong>Key Characteristics:</strong></p>
<ul>
<li>Completely configurable rules</li>
<li>Supports custom rules and plugins</li>
<li>Modern JavaScript support (ES6+)</li>
<li>Widely adopted by the industry</li>
<li>Auto-fixing capabilities</li>
</ul>
<p><strong>Example ESLint Configuration:</strong></p>
<pre><code class="language-json">
{
  &quot;rules&quot;: {
    &quot;semi&quot;: [&quot;error&quot;, &quot;always&quot;],
    &quot;quotes&quot;: [&quot;error&quot;, &quot;single&quot;],
    &quot;no-unused-vars&quot;: &quot;warn&quot;
  }
}
</code></pre>
<h3 id="quick-comparison-table">Quick Comparison Table</h3>
<table>
<thead><tr>
<th>Feature</th>
<th>JSLint</th>
<th>ESLint</th>
</tr></thead><tbody>
<tr>
<td>Configuration</td>
<td>Minimal</td>
<td>Extensive</td>
</tr>
<tr>
<td>Extensibility</td>
<td>Limited</td>
<td>Highly extensible</td>
</tr>
<tr>
<td>Auto-fix</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Plugin Support</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>Community</td>
<td>Small</td>
<td>Large</td>
</tr>
<tr>
<td>Learning Curve</td>
<td>Low</td>
<td>Medium</td>
</tr>
<tr>
<td>Modern JS Support</td>
<td>Limited</td>
<td>Excellent</td>
</tr>
</tbody></table>
<h3 id="basic-installation">Basic Installation</h3>
<p><strong>JSLint:</strong></p>
<pre><code class="language-bash">
npm install jslint
</code></pre>
<p><strong>ESLint:</strong></p>
<pre><code class="language-bash">
npm install eslint --save-dev
npx eslint --init
</code></pre>
<h3 id="simple-usage-flow">Simple Usage Flow</h3>
<pre><code class="language-">
┌─────────────────┐
│  Write JS Code  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Run Linter    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐      ┌──────────────┐
│  Errors Found?  │─Yes─&gt;│ Fix Errors   │
└────────┬────────┘      └──────┬───────┘
         │No                     │
         │                       │
         │&lt;──────────────────────┘
         ▼
┌─────────────────┐
│  Code Ready!    │
└─────────────────┘
</code></pre>
<hr>
<h2 id="intermediate-part">Intermediate Part</h2>
<h3 id="configuration-deep-dive">Configuration Deep Dive</h3>
<h4 id="jslint-configuration">JSLint Configuration</h4>
<p>JSLint uses a directive-based configuration within your JavaScript files:</p>
<pre><code class="language-javascript">
/*jslint browser: true, devel: true, maxlen: 100 */
/*global myGlobal, anotherGlobal */

// Your code here
</code></pre>
<p><strong>Common JSLint Directives:</strong></p>
<ul>
<li><code>browser: true</code> - Assumes browser environment</li>
<li><code>node: true</code> - Assumes Node.js environment</li>
<li><code>devel: true</code> - Allows console, alert, etc.</li>
<li><code>maxlen: 80</code> - Maximum line length</li>
<li><code>white: true</code> - Tolerates messy whitespace</li>
</ul>
<p><strong>Limitations:</strong></p>
<ul>
<li>No external configuration files</li>
<li>Cannot disable specific rules</li>
<li>All or nothing approach</li>
</ul>
<h4 id="eslint-configuration">ESLint Configuration</h4>
<p>ESLint supports multiple configuration formats:</p>
<p><strong>1. .eslintrc.json:</strong></p>
<pre><code class="language-json">
{
  &quot;env&quot;: {
    &quot;browser&quot;: true,
    &quot;es2021&quot;: true,
    &quot;node&quot;: true
  },
  &quot;extends&quot;: [
    &quot;eslint:recommended&quot;,
    &quot;plugin:react/recommended&quot;
  ],
  &quot;parserOptions&quot;: {
    &quot;ecmaVersion&quot;: 12,
    &quot;sourceType&quot;: &quot;module&quot;,
    &quot;ecmaFeatures&quot;: {
      &quot;jsx&quot;: true
    }
  },
  &quot;rules&quot;: {
    &quot;indent&quot;: [&quot;error&quot;, 2],
    &quot;quotes&quot;: [&quot;error&quot;, &quot;single&quot;],
    &quot;semi&quot;: [&quot;error&quot;, &quot;always&quot;],
    &quot;no-console&quot;: &quot;warn&quot;
  }
}
</code></pre>
<p><strong>2. .eslintrc.js (Dynamic Configuration):</strong></p>
<pre><code class="language-javascript">
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: &#x27;eslint:recommended&#x27;,
  rules: {
    &#x27;no-console&#x27;: process.env.NODE_ENV === &#x27;production&#x27; ? &#x27;error&#x27; : &#x27;warn&#x27;
  }
};
</code></pre>
<p><strong>3. package.json:</strong></p>
<pre><code class="language-json">
{
  &quot;eslintConfig&quot;: {
    &quot;extends&quot;: &quot;eslint:recommended&quot;,
    &quot;rules&quot;: {
      &quot;semi&quot;: [&quot;error&quot;, &quot;always&quot;]
    }
  }
}
</code></pre>
<h3 id="rule-severity-levels">Rule Severity Levels</h3>
<p>ESLint has three severity levels:</p>
<pre><code class="language-">
┌─────────────────────────────────────────┐
│           ESLint Severity               │
├─────────────────────────────────────────┤
│  &quot;off&quot; or 0     →  Rule disabled        │
│  &quot;warn&quot; or 1    →  Warning (exit 0)     │
│  &quot;error&quot; or 2   →  Error (exit 1)       │
└─────────────────────────────────────────┘
</code></pre>
<h3 id="plugin-system-eslint">Plugin System (ESLint)</h3>
<p>ESLint&#x27;s plugin architecture allows for extensibility:</p>
<pre><code class="language-">
┌──────────────────────────────────────────────┐
│              ESLint Core                     │
└───────────────────┬──────────────────────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
┌───────────────┐       ┌───────────────┐
│   Plugins     │       │   Parsers     │
├───────────────┤       ├───────────────┤
│ - React       │       │ - Babel       │
│ - Vue         │       │ - TypeScript  │
│ - Angular     │       │ - Flow        │
│ - Node        │       └───────────────┘
│ - Import      │
│ - A11y        │
└───────────────┘
        │
        ▼
┌───────────────┐
│ Custom Rules  │
└───────────────┘
</code></pre>
<p><strong>Example Plugin Usage:</strong></p>
<pre><code class="language-bash">
npm install eslint-plugin-react --save-dev
</code></pre>
<pre><code class="language-json">
{
  &quot;plugins&quot;: [&quot;react&quot;],
  &quot;rules&quot;: {
    &quot;react/jsx-uses-react&quot;: &quot;error&quot;,
    &quot;react/jsx-uses-vars&quot;: &quot;error&quot;
  }
}
</code></pre>
<h3 id="auto-fixing-capabilities">Auto-fixing Capabilities</h3>
<p>ESLint can automatically fix many issues:</p>
<pre><code class="language-bash">
# Check for issues
eslint file.js

# Fix automatically fixable issues
eslint file.js --fix
</code></pre>
<p><strong>Auto-fixable vs Manual:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────┐
│         ESLint Rules                    │
├─────────────────────────────────────────┤
│                                         │
│  ┌──────────────┐   ┌───────────────┐  │
│  │ Auto-fixable │   │ Manual Only   │  │
│  ├──────────────┤   ├───────────────┤  │
│  │ - Quotes     │   │ - Complexity  │  │
│  │ - Semicolons │   │ - Logic bugs  │  │
│  │ - Spacing    │   │ - Undefined   │  │
│  │ - Indentation│   │   variables   │  │
│  └──────────────┘   └───────────────┘  │
│                                         │
└─────────────────────────────────────────┘
</code></pre>
<h3 id="shareable-configurations">Shareable Configurations</h3>
<p>ESLint supports shareable configs for consistency:</p>
<p><strong>Popular Configs:</strong></p>
<ul>
<li><code>eslint:recommended</code> - ESLint&#x27;s recommended rules</li>
<li><code>airbnb</code> - Airbnb&#x27;s style guide</li>
<li><code>standard</code> - JavaScript Standard Style</li>
<li><code>google</code> - Google&#x27;s style guide</li>
</ul>
<pre><code class="language-bash">
npm install eslint-config-airbnb --save-dev
</code></pre>
<pre><code class="language-json">
{
  &quot;extends&quot;: [&quot;airbnb&quot;, &quot;airbnb/hooks&quot;]
}
</code></pre>
<h3 id="integration-with-build-tools">Integration with Build Tools</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────┐
│         Development Workflow                │
└────────────────┬────────────────────────────┘
                 │
    ┌────────────┼────────────┐
    │            │            │
    ▼            ▼            ▼
┌────────┐  ┌────────┐  ┌─────────┐
│ Webpack│  │  Vite  │  │  Gulp   │
└───┬────┘  └───┬────┘  └────┬────┘
    │           │            │
    └───────────┼────────────┘
                │
                ▼
        ┌───────────────┐
        │    ESLint     │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │   Report      │
        │   Errors      │
        └───────────────┘
</code></pre>
<p><strong>Webpack Integration:</strong></p>
<pre><code class="language-javascript">
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [&#x27;babel-loader&#x27;, &#x27;eslint-loader&#x27;]
      }
    ]
  }
};
</code></pre>
<hr>
<h2 id="advanced-part">Advanced Part</h2>
<h3 id="custom-rule-development-eslint">Custom Rule Development (ESLint)</h3>
<p>ESLint allows you to create custom rules using AST (Abstract Syntax Tree) manipulation:</p>
<p><strong>Rule Structure:</strong></p>
<pre><code class="language-javascript">
module.exports = {
  meta: {
    type: &#x27;suggestion&#x27;,
    docs: {
      description: &#x27;Disallow console statements&#x27;,
      category: &#x27;Best Practices&#x27;
    },
    fixable: &#x27;code&#x27;,
    schema: []
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.object?.name === &#x27;console&#x27;) {
          context.report({
            node,
            message: &#x27;Unexpected console statement&#x27;,
            fix(fixer) {
              return fixer.remove(node);
            }
          });
        }
      }
    };
  }
};
</code></pre>
<h3 id="ast-traversal-flow">AST Traversal Flow</h3>
<pre><code class="language-">
┌──────────────────────────────────────────────────┐
│           JavaScript Source Code                 │
└─────────────────┬────────────────────────────────┘
                  │
                  ▼
         ┌────────────────┐
         │     Parser     │
         │  (Espree/Babel)│
         └────────┬───────┘
                  │
                  ▼
         ┌────────────────┐
         │      AST       │
         │   (Tree Repr)  │
         └────────┬───────┘
                  │
        ┌─────────┴──────────┐
        │                    │
        ▼                    ▼
┌───────────────┐    ┌──────────────┐
│   Program     │    │   Visitors   │
│   ├─ Body    │◄───│   - Enter    │
│   │  ├─ Fn   │    │   - Exit     │
│   │  └─ Var  │    └──────────────┘
│   └─ ...     │
└───────────────┘
        │
        ▼
┌───────────────┐
│ Rule Checks   │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│  Report Issues│
└───────────────┘
</code></pre>
<h3 id="performance-optimization">Performance Optimization</h3>
<h4 id="jslint-performance">JSLint Performance</h4>
<ul>
<li>Single-pass analysis</li>
<li>No plugin overhead</li>
<li>Minimal memory footprint</li>
<li>Fast but less comprehensive</li>
</ul>
<h4 id="eslint-performance-strategies">ESLint Performance Strategies</h4>
<p><strong>1. Caching:</strong></p>
<pre><code class="language-bash">
eslint --cache --cache-location .eslintcache file.js
</code></pre>
<p><strong>2. Parallel Processing:</strong></p>
<pre><code class="language-bash">
npm install eslint-parallel --save-dev
</code></pre>
<p><strong>3. Selective Linting:</strong></p>
<pre><code class="language-json">
{
  &quot;ignorePatterns&quot;: [
    &quot;dist/&quot;,
    &quot;build/&quot;,
    &quot;node_modules/&quot;,
    &quot;*.min.js&quot;
  ]
}
</code></pre>
<p><strong>4. Rule Performance:</strong></p>
<pre><code class="language-">
┌─────────────────────────────────────────┐
│      Rule Performance Impact            │
├─────────────────────────────────────────┤
│  Fast Rules:                            │
│  - quotes, semi, comma-dangle           │
│                                         │
│  Medium Rules:                          │
│  - no-unused-vars, prefer-const         │
│                                         │
│  Slow Rules:                            │
│  - complexity, max-lines                │
│  - import/* (requires file I/O)         │
└─────────────────────────────────────────┘
</code></pre>
<h3 id="type-aware-linting">Type-Aware Linting</h3>
<p>ESLint with TypeScript:</p>
<pre><code class="language-bash">
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin
</code></pre>
<pre><code class="language-javascript">
module.exports = {
  parser: &#x27;@typescript-eslint/parser&#x27;,
  parserOptions: {
    project: &#x27;./tsconfig.json&#x27;,
    tsconfigRootDir: __dirname,
    sourceType: &#x27;module&#x27;
  },
  plugins: [&#x27;@typescript-eslint&#x27;],
  extends: [
    &#x27;eslint:recommended&#x27;,
    &#x27;plugin:@typescript-eslint/recommended&#x27;,
    &#x27;plugin:@typescript-eslint/recommended-requiring-type-checking&#x27;
  ],
  rules: {
    &#x27;@typescript-eslint/no-floating-promises&#x27;: &#x27;error&#x27;,
    &#x27;@typescript-eslint/no-misused-promises&#x27;: &#x27;error&#x27;
  }
};
</code></pre>
<h3 id="monorepo-configuration-strategy">Monorepo Configuration Strategy</h3>
<pre><code class="language-">
project/
├── .eslintrc.js (root config)
├── packages/
│   ├── frontend/
│   │   └── .eslintrc.js (extends root, adds React)
│   ├── backend/
│   │   └── .eslintrc.js (extends root, adds Node)
│   └── shared/
│       └── .eslintrc.js (extends root)
</code></pre>
<p><strong>Root Configuration:</strong></p>
<pre><code class="language-javascript">
module.exports = {
  root: true, // Prevents ESLint from searching parent directories
  env: {
    es2021: true
  },
  extends: &#x27;eslint:recommended&#x27;,
  rules: {
    &#x27;no-console&#x27;: &#x27;warn&#x27;
  }
};
</code></pre>
<p><strong>Frontend Override:</strong></p>
<pre><code class="language-javascript">
module.exports = {
  extends: [&#x27;../../.eslintrc.js&#x27;, &#x27;plugin:react/recommended&#x27;],
  env: {
    browser: true
  },
  rules: {
    &#x27;no-console&#x27;: &#x27;error&#x27; // Stricter in frontend
  }
};
</code></pre>
<h3 id="migration-strategy-jslint-to-eslint">Migration Strategy: JSLint to ESLint</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────┐
│         Migration Process                   │
└────────────────┬────────────────────────────┘
                 │
                 ▼
        ┌────────────────┐
        │  1. Audit Code │
        │  - Run JSLint  │
        │  - Note issues │
        └────────┬───────┘
                 │
                 ▼
        ┌────────────────┐
        │ 2. Install     │
        │    ESLint      │
        └────────┬───────┘
                 │
                 ▼
        ┌────────────────┐
        │ 3. Create Base │
        │    Config      │
        └────────┬───────┘
                 │
                 ▼
        ┌────────────────┐
        │ 4. Map Rules   │
        │  JSLint→ESLint │
        └────────┬───────┘
                 │
                 ▼
        ┌────────────────┐
        │ 5. Fix Issues  │
        │  Incrementally │
        └────────┬───────┘
                 │
                 ▼
        ┌────────────────┐
        │ 6. Enforce in  │
        │    CI/CD       │
        └────────────────┘
</code></pre>
<h3 id="cicd-integration">CI/CD Integration</h3>
<p><strong>GitHub Actions Example:</strong></p>
<pre><code class="language-yaml">
name: Lint

on: [push, pull_request]

jobs:
  eslint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm ci
      - name: Run ESLint
        run: npm run lint
      - name: Annotate Code
        if: failure()
        uses: reviewdog/action-eslint@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          reporter: github-pr-review
</code></pre>
<h3 id="advanced-rule-configuration-patterns">Advanced Rule Configuration Patterns</h3>
<p><strong>1. Function Complexity Control:</strong></p>
<pre><code class="language-javascript">
module.exports = {
  rules: {
    &#x27;complexity&#x27;: [&#x27;error&#x27;, { max: 10 }],
    &#x27;max-depth&#x27;: [&#x27;error&#x27;, 4],
    &#x27;max-nested-callbacks&#x27;: [&#x27;error&#x27;, 3],
    &#x27;max-params&#x27;: [&#x27;error&#x27;, 4],
    &#x27;max-statements&#x27;: [&#x27;error&#x27;, 15]
  }
};
</code></pre>
<p><strong>2. Code Quality Metrics:</strong></p>
<pre><code class="language-javascript">
module.exports = {
  rules: {
    &#x27;max-lines&#x27;: [&#x27;error&#x27;, {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],
    &#x27;max-lines-per-function&#x27;: [&#x27;error&#x27;, {
      max: 50,
      skipBlankLines: true,
      skipComments: true
    }]
  }
};
</code></pre>
<p><strong>3. Security-Focused Configuration:</strong></p>
<pre><code class="language-bash">
npm install eslint-plugin-security --save-dev
</code></pre>
<pre><code class="language-javascript">
module.exports = {
  plugins: [&#x27;security&#x27;],
  extends: [&#x27;plugin:security/recommended&#x27;],
  rules: {
    &#x27;security/detect-object-injection&#x27;: &#x27;warn&#x27;,
    &#x27;security/detect-non-literal-regexp&#x27;: &#x27;error&#x27;,
    &#x27;security/detect-unsafe-regex&#x27;: &#x27;error&#x27;
  }
};
</code></pre>
<h3 id="ecosystem-comparison">Ecosystem Comparison</h3>
<pre><code class="language-">
┌─────────────────────────────────────────────────────┐
│              Linting Ecosystem 2025                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  JSLint          ESLint          Alternative Tools │
│    │               │                    │          │
│    │               ├── Plugins          ├── Biome  │
│    │               │   - React          │   (Rust) │
│    │               │   - Vue            │          │
│    │               │   - TypeScript     ├── Oxc    │
│    │               │   - A11y           │   (Rust) │
│    │               │                    │          │
│    │               ├── Parsers          ├── Quick  │
│    │               │   - Espree         │   Lint   │
│    │               │   - Babel          │          │
│    │               │   - TypeScript     │          │
│    │               │                    │          │
│    ▼               ▼                    ▼          │
│  Legacy      Industry Standard      Emerging       │
│                                                     │
└─────────────────────────────────────────────────────┘
</code></pre>
<h3 id="best-practices-summary">Best Practices Summary</h3>
<p><strong>For JSLint:</strong></p>
<ul>
<li>Use for small, personal projects</li>
<li>When you want zero configuration</li>
<li>Learning JavaScript fundamentals</li>
<li>Legacy codebases already using it</li>
</ul>
<p><strong>For ESLint:</strong></p>
<ul>
<li>Team projects requiring consistency</li>
<li>Modern JavaScript/TypeScript projects</li>
<li>Need for custom rules</li>
<li>Integration with frameworks (React, Vue, Angular)</li>
<li>CI/CD pipeline integration</li>
<li>Auto-fixing capabilities needed</li>
</ul>
<h3 id="performance-benchmarks">Performance Benchmarks</h3>
<pre><code class="language-">
File Size: 1000 lines of JavaScript
Environment: Modern laptop, Node.js 18

┌────────────────────────────────────┐
│      Linting Speed                 │
├────────────────────────────────────┤
│  JSLint:    ~50ms                  │
│  ▓▓▓                               │
│                                    │
│  ESLint:    ~150ms (no cache)      │
│  ▓▓▓▓▓▓▓▓▓                         │
│                                    │
│  ESLint:    ~80ms (with cache)     │
│  ▓▓▓▓▓                             │
│                                    │
│  Biome:     ~30ms                  │
│  ▓▓                                │
└────────────────────────────────────┘
</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p><strong>Choose JSLint if:</strong></p>
<ul>
<li>You want Crockford&#x27;s opinionated style</li>
<li>Minimal setup is priority</li>
<li>Learning JavaScript basics</li>
<li>Very small projects</li>
</ul>
<p><strong>Choose ESLint if:</strong></p>
<ul>
<li>Working in a team</li>
<li>Need customization</li>
<li>Modern JavaScript features</li>
<li>Framework integration required</li>
<li>Industry-standard tooling preferred</li>
</ul>
<p>ESLint has become the de facto standard for JavaScript linting due to its flexibility, extensive plugin ecosystem, and strong community support. While JSLint remains a valid tool for its simplicity, ESLint&#x27;s adaptability makes it the better choice for most modern development scenarios.</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = jslintVsEslintComparisonContentData;
}
