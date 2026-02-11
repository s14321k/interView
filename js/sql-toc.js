// Sql - Table of Contents Data
const sqlTocData = `<a href="#sql-interview-prep" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="sql-interview-prep">📘 SQL Interview Prep</a>
<a href="#query-to-get-max-or-nth-max-salary" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="query-to-get-max-or-nth-max-salary">❓ Query to Get Max or Nth Max Salary</a>
<a href="#queries" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="queries">🔍 Queries</a>
<a href="#example-table-employee" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-table-employee">Example table: <code>employee</code></a>
<a href="#sql-query" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="sql-query">SQL Query</a>
<a href="#what-this-does" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-this-does">✅ What this does:</a>
<a href="#output-for-your-sample-data" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="output-for-your-sample-data">Output (for your sample data):</a>
<a href="#what-is-a-view" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-is-a-view">📄 What is a View?</a>
<a href="#syntax" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="syntax">🛠️ Syntax</a>
<a href="#predicates-expressions-that-evaluate-to-true-false-unknown" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="predicates-expressions-that-evaluate-to-true-false-unknown">📌 Predicates = Expressions that evaluate to TRUE / FALSE / UNKNOWN</a>
<a href="#what-are-constraints" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-are-constraints">✅ What Are Constraints?</a>
<a href="#examples" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="examples">🔍 Examples</a>
<a href="#types-of-joins" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="types-of-joins">📌 Types of Joins</a>
<a href="#types-of-functions" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="types-of-functions">Types of Functions</a>
<a href="#what-is-indexing" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-is-indexing">🔍 What is Indexing?</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example</a>
<a href="#definitions" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="definitions">📌 Definitions</a>
<a href="#primary-key-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="primary-key-example">✅ Primary Key Example</a>
<a href="#foreign-key-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="foreign-key-example">🔗 Foreign Key Example</a>
<a href="#differences" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="differences">🔄 Differences</a>
<a href="#what-is-a-stored-procedure" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-is-a-stored-procedure">📘 What is a Stored Procedure?</a>
<a href="#benefits" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="benefits">✅ Benefits</a>
<a href="#example-input-parameter" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-input-parameter">🔨 Example: Input Parameter</a>
<a href="#example-output-parameter" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-output-parameter">📤 Example: Output Parameter</a>
<a href="#sql-query" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="sql-query">📌 SQL Query</a>
<a href="#what-is-a-referential-constraint" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-is-a-referential-constraint">📘 What Is a Referential Constraint?</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">🔗 Example</a>
<a href="#composite-key" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="composite-key">🧩 Composite Key</a>
<a href="#foreign-key" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="foreign-key">🔗 Foreign Key</a>
<a href="#summary-table" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary-table">🧠 Summary Table</a>
<a href="#what-is-normalization" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-is-normalization">✅ What Is Normalization?</a>
<a href="#normal-forms-overview" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="normal-forms-overview">🔢 Normal Forms Overview</a>
<a href="#example-1nf-to-5nf-progression" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-1nf-to-5nf-progression">📊 Example: 1NF to 5NF Progression</a>
<a href="#benefits-of-normalization" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="benefits-of-normalization">✅ Benefits of Normalization</a>
<a href="#key-techniques" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-techniques">💡 Key Techniques</a>
<a href="#purpose" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="purpose">🧠 Purpose</a>
<a href="#key-differences" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="key-differences">🧬 Key Differences</a>
<a href="#primary-key-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="primary-key-example">✅ Primary Key Example</a>
<a href="#unique-key-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="unique-key-example">🔁 Unique Key Example</a>
<a href="#summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary">📌 Summary</a>
<a href="#why-check-for-duplicate-emails" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="why-check-for-duplicate-emails">📧 Why Check for Duplicate Emails?</a>
<a href="#table-structure" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="table-structure">🧾 Table Structure</a>
<a href="#query-to-identify-duplicates-by-email" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="query-to-identify-duplicates-by-email">🧠 Query to Identify Duplicates by Email</a>
<a href="#fetch-all-duplicate-rows" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="fetch-all-duplicate-rows">📥 Fetch All Duplicate Rows</a>
<a href="#sample-output" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="sample-output">🧪 Sample Output</a>
<a href="#use-case" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="use-case">✅ Use Case</a>
<a href="#1-using-group-by-recommended" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-using-group-by-recommended">✅ 1. Using <code>GROUP BY</code> (Recommended)</a>
<a href="#2-using-conditional-aggregation-pivot-style" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-using-conditional-aggregation-pivot-style">✅ 2. Using Conditional Aggregation (Pivot Style)</a>
<a href="#invalid-version-for-comparison" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="invalid-version-for-comparison">❌ Invalid Version (for comparison)</a>
<a href="#summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary">🧠 Summary</a>
<a href="#top-ways-to-improve-database-performance" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="top-ways-to-improve-database-performance">Top Ways to Improve Database Performance</a>
<a href="#1-indexing" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-indexing">1. Indexing</a>
<a href="#2-materialized-views" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-materialized-views">2. Materialized Views</a>
<a href="#3-vertical-scaling" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-vertical-scaling">3. Vertical Scaling</a>
<a href="#4-denormalization" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-denormalization">4. Denormalization</a>
<a href="#5-database-caching" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-database-caching">5. Database Caching</a>
<a href="#6-replication" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="6-replication">6. Replication</a>
<a href="#7-sharding" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="7-sharding">7. Sharding</a>
<a href="#8-partitioning" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="8-partitioning">8. Partitioning</a>
<a href="#9-query-optimization" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="9-query-optimization">9. Query Optimization</a>
<a href="#10-use-of-appropriate-data-types" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="10-use-of-appropriate-data-types">10. Use of Appropriate Data Types</a>
<a href="#11-limiting-indexes" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="11-limiting-indexes">11. Limiting Indexes</a>
<a href="#12-archiving-old-data" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="12-archiving-old-data">12. Archiving Old Data</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = sqlTocData;
}
