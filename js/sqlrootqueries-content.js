// Sql Root Queries - Content Data
const sqlrootqueriesContentData = `<h1 id="mysql-user-management-privileges-cheat-sheet">MySQL User Management &amp; Privileges Cheat Sheet</h1>
<hr>
<details open>
<summary><strong>1. Show Existing Databases and Users</strong></summary>
<pre><code class="language-sql">
-- Show all databases on the MySQL server
SHOW DATABASES;

-- Show all users and their host info
SELECT user, host FROM mysql.user;
</code></pre>
<p>Use these commands to get an overview of your MySQL environment.</p>
</details>
<hr>
<details>
<summary><strong>2. Create a New User</strong></summary>
<pre><code class="language-sql">
CREATE USER &#x27;username&#x27;@&#x27;host&#x27; IDENTIFIED BY &#x27;password&#x27;;
</code></pre>
<ul>
<li><code>&#x27;username&#x27;</code> — the MySQL user to create.</li>
<li><code>&#x27;host&#x27;</code> — from which IP or hostname the user is allowed to connect. Use <code>%</code> for any host, or specific IP like <code>&#x27;192.168.1.100&#x27;</code>.</li>
<li><code>&#x27;password&#x27;</code> — password for the user.</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code class="language-sql">
CREATE USER &#x27;sarath&#x27;@&#x27;192.168.137.1&#x27; IDENTIFIED BY &#x27;sarath69kumar&#x27;;
</code></pre>
<p>This creates user <code>sarath</code> allowed to connect only from <code>192.168.137.1</code>.</p>
</details>
<hr>
<details>
<summary><strong>3. Grant Privileges</strong></summary>
<pre><code class="language-sql">
GRANT ALL PRIVILEGES ON database_name.* TO &#x27;username&#x27;@&#x27;host&#x27;;
</code></pre>
<ul>
<li>Grants all privileges on a specific database.</li>
<li>Use <code>*.*</code> to grant on all databases (be cautious).</li>
</ul>
<p><strong>Examples:</strong></p>
<pre><code class="language-sql">
-- Grant all privileges on all DBs
GRANT ALL PRIVILEGES ON *.* TO &#x27;sarath&#x27;@&#x27;192.168.137.1&#x27;;

-- Grant all privileges on specific DB
GRANT ALL PRIVILEGES ON simple_DB.* TO &#x27;sarath&#x27;@&#x27;LAPTOP-PIF99MN2&#x27;;
</code></pre>
<p>After granting privileges, always run:</p>
<pre><code class="language-sql">
FLUSH PRIVILEGES;
</code></pre>
<p>to reload privilege tables.</p>
</details>
<hr>
<details>
<summary><strong>4. Show User Grants</strong></summary>
<pre><code class="language-sql">
SHOW GRANTS FOR &#x27;username&#x27;@&#x27;host&#x27;;
</code></pre>
<p>Use this to verify what privileges a user has.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-sql">
SHOW GRANTS FOR &#x27;sarath&#x27;@&#x27;192.168.137.1&#x27;;
</code></pre>
</details>
<hr>
<details>
<summary><strong>5. Drop/Delete a User</strong></summary>
<pre><code class="language-sql">
DROP USER &#x27;username&#x27;@&#x27;host&#x27;;
</code></pre>
<p><strong>Example:</strong></p>
<pre><code class="language-sql">
DROP USER &#x27;sarath&#x27;@&#x27;LAPTOP-PIF99MN2&#x27;;
</code></pre>
<p>Deletes the user completely.</p>
</details>
<hr>
<details>
<summary><strong>6. Update User Host</strong></summary>
<p>MySQL doesn&#x27;t allow updating host in <code>CREATE USER</code>, so to change a host you can:</p>
<ul>
<li>Drop the existing user and recreate with new host, <strong>OR</strong></li>
<li>Update the <code>mysql.user</code> table manually (advanced and risky, requires <code>FLUSH PRIVILEGES</code>):</li>
</ul>
<pre><code class="language-sql">
UPDATE mysql.user 
SET Host = &#x27;LAPTOP-PIF99MN2&#x27; 
WHERE Host = &#x27;192.168.137.1&#x27; AND User = &#x27;sarath&#x27;;
FLUSH PRIVILEGES;
</code></pre>
<p><strong>Note:</strong> This is not the recommended way; dropping and recreating users is safer.</p>
</details>
<hr>
<details>
<summary><strong>7. Commit and Reload Privileges</strong></summary>
<ul>
<li>MySQL auto-commits DDL commands like <code>CREATE USER</code> and <code>GRANT</code>.</li>
<li>You do <strong>not</strong> need to explicitly run <code>COMMIT;</code> for these commands.</li>
<li>Use <code>FLUSH PRIVILEGES;</code> to reload grant tables <strong>only if</strong> you manually modify <code>mysql.user</code> table.</li>
</ul>
<hr>
<p><strong>Example:</strong></p>
<pre><code class="language-sql">
FLUSH PRIVILEGES;
</code></pre>
</details>
<hr>
<details>
<summary><strong>8. Login Using Created User</strong></summary>
<p>To login as a created user:</p>
<pre><code class="language-bash">
mysql -u sarath -p -h 192.168.137.1
</code></pre>
<p>You will be prompted for the password.</p>
<hr>
<p>Alternatively, in SQL client:</p>
<pre><code class="language-sql">
-- Login not done inside MySQL shell, but via client or terminal
-- No SQL command: use CLI or connection strings with these credentials.
</code></pre>
</details>
<hr>
<h3 id="summary-example-workflow-to-create-and-grant-user-privileges">Summary example workflow to create and grant user privileges:</h3>
<pre><code class="language-sql">
CREATE USER &#x27;sarath&#x27;@&#x27;192.168.137.1&#x27; IDENTIFIED BY &#x27;sarath69kumar&#x27;;
GRANT ALL PRIVILEGES ON simple_web_app.* TO &#x27;sarath&#x27;@&#x27;192.168.137.1&#x27;;
FLUSH PRIVILEGES;
SHOW GRANTS FOR &#x27;sarath&#x27;@&#x27;192.168.137.1&#x27;;
</code></pre>
<hr>
<p>If you want, I can help create a full example with scripts or detailed steps to setup MySQL users securely!</p>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = sqlrootqueriesContentData;
}
