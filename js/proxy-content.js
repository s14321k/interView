// Proxy - Content Data
const proxyContentData = `<h1 id="configuring-apache-httpclient-proxy-in-quarkus">Configuring Apache HttpClient Proxy in Quarkus</h1>
<h2 id="problem-statement">Problem Statement</h2>
<p>An API works successfully in Postman using Basic Authentication, but when calling the same API using Apache HttpClient in a Quarkus application, the request fails with: <code>host closed</code></p>
<p>In most corporate environments, this issue is caused by a <strong>missing proxy configuration</strong> in the Java application.</p>
<h1 id="important-clarification">Important Clarification</h1>
<p>You <strong>cannot discover the proxy by calling the API</strong>.</p>
<p>The proxy is part of your <strong>network infrastructure</strong>, not part of the API server.</p>
<p>The <code>HttpHost</code> used in:</p>
<pre><code class="language-java">
.setProxy(new HttpHost(...))
</code></pre>
<p>must be your <strong>corporate proxy server</strong>, NOT the API hostname.</p>
<hr>
<h1 id="how-to-find-the-proxy-host">How to Find the Proxy Host</h1>
<h2 id="1-check-postman-settings-fastest-method">1. Check Postman Settings (Fastest Method)</h2>
<ul>
<li>Open Postman</li>
<li>Go to <strong>Settings → Proxy</strong></li>
<li>Check:</li>
</ul>
<ul>
<li>&quot;Use System Proxy&quot;</li>
<li>Any manually configured proxy</li>
</ul>
<p>Example:</p>
<pre><code class="language-">
proxy.company.com:8080
</code></pre>
<p>Use this in your code:</p>
<pre><code class="language-java">
HttpHost proxy = new HttpHost(&quot;proxy.company.com&quot;, 8080);
</code></pre>
<hr>
<h2 id="2-check-operating-system-proxy-settings">2. Check Operating System Proxy Settings</h2>
<h3 id="windows">Windows</h3>
<p>Open Command Prompt:</p>
<pre><code class="language-">
netsh winhttp show proxy
</code></pre>
<p>Or check:</p>
<pre><code class="language-">
Internet Options → Connections → LAN Settings
</code></pre>
<hr>
<h3 id="mac-linux">Mac / Linux</h3>
<p>Run:</p>
<pre><code class="language-">
echo $http_proxy
echo $https_proxy
</code></pre>
<p>Or:</p>
<pre><code class="language-">
env | grep -i proxy
</code></pre>
<p>Example output:</p>
<pre><code class="language-">
http_proxy=http://proxy.company.com:8080
</code></pre>
<p>This gives:</p>
<ul>
<li>Host: <code>proxy.company.com</code></li>
<li>Port: <code>8080</code></li>
</ul>
<hr>
<h2 id="3-ask-network-devops-team">3. Ask Network / DevOps Team</h2>
<p>In corporate environments, outbound traffic may require a proxy such as:</p>
<ul>
<li>Zscaler</li>
<li>Bluecoat</li>
<li>Squid</li>
<li>Corporate Gateway</li>
</ul>
<p>Ask for:</p>
<ul>
<li>Proxy host</li>
<li>Proxy port</li>
<li>Whether proxy authentication is required</li>
</ul>
<hr>
<h2 id="4-verify-using-curl">4. Verify Using curl</h2>
<p>From the machine running Quarkus:</p>
<p>Test without proxy:</p>
<pre><code class="language-">
curl https://api.example.com
</code></pre>
<p>If it fails, try:</p>
<pre><code class="language-">
curl -x proxy.company.com:8080 https://api.example.com
</code></pre>
<p>If this works → proxy is required.</p>
<hr>
<h1 id="configuring-proxy-in-apache-httpclient">Configuring Proxy in Apache HttpClient</h1>
<h2 id="basic-proxy-configuration">Basic Proxy Configuration</h2>
<pre><code class="language-java">
HttpHost proxy = new HttpHost(&quot;proxy.company.com&quot;, 8080);

RequestConfig config = RequestConfig.custom()
        .setProxy(proxy)
        .build();

CloseableHttpClient client = HttpClients.custom()
        .setDefaultRequestConfig(config)
        .build();
</code></pre>
<hr>
<h2 id="proxy-with-authentication">Proxy With Authentication</h2>
<pre><code class="language-java">
CredentialsProvider credsProvider = new BasicCredentialsProvider();
credsProvider.setCredentials(
        new AuthScope(&quot;proxy.company.com&quot;, 8080),
        new UsernamePasswordCredentials(&quot;proxyUser&quot;, &quot;proxyPass&quot;)
);

CloseableHttpClient client = HttpClients.custom()
        .setProxy(new HttpHost(&quot;proxy.company.com&quot;, 8080))
        .setDefaultCredentialsProvider(credsProvider)
        .build();
</code></pre>
<hr>
<h1 id="alternative-configure-proxy-via-jvm-properties-recommended">Alternative: Configure Proxy via JVM Properties (Recommended)</h1>
<p>Instead of hardcoding the proxy in code, configure it using JVM arguments:</p>
<pre><code class="language-">
-Dhttp.proxyHost=proxy.company.com
-Dhttp.proxyPort=8080
-Dhttps.proxyHost=proxy.company.com
-Dhttps.proxyPort=8080
</code></pre>
<p>This allows environment-specific configuration without code changes.</p>
<hr>
<h1 id="common-mistake">Common Mistake</h1>
<p>Incorrect:</p>
<pre><code class="language-java">
new HttpHost(&quot;api.example.com&quot;, 443)  // ❌ This is NOT a proxy
</code></pre>
<p>Correct:</p>
<pre><code class="language-java">
new HttpHost(&quot;proxy.company.com&quot;, 8080)  // ✅ This is the proxy server
</code></pre>
<hr>
<h1 id="if-issue-persists">If Issue Persists</h1>
<p>Enable SSL debugging:</p>
<pre><code class="language-">
-Djavax.net.debug=ssl,handshake
</code></pre>
<p>Enable Apache HttpClient debug logging:</p>
<pre><code class="language-">
quarkus.log.category.&quot;org.apache.http&quot;.level=DEBUG
</code></pre>
<hr>
<h1 id="summary">Summary</h1>
<p>If:</p>
<ul>
<li>API works in Postman</li>
<li>Fails in Quarkus with <code>host closed</code></li>
</ul>
<p>Then the most common causes are:</p>
<ul>
<li>Missing proxy configuration</li>
<li>Proxy authentication required</li>
<li>SSL trust issue (corporate certificate)</li>
</ul>
<p>The proxy must be obtained from:</p>
<ul>
<li>Postman settings</li>
<li>OS proxy settings</li>
<li>Environment variables</li>
<li>Network team</li>
<li>curl testing</li>
</ul>
<p>You cannot discover it from the API itself.</p>
<hr>
<h1 id="1-what-is-ssl">1️⃣ What is SSL?</h1>
<p><strong>SSL (Secure Sockets Layer)</strong> is an old encryption protocol used to secure communication between:</p>
<ul>
<li>Client (browser / app)</li>
<li>Server (API / website)</li>
</ul>
<p>It encrypts:</p>
<ul>
<li>Data</li>
<li>Credentials</li>
<li>Tokens</li>
<li>Request/response body</li>
</ul>
<p>⚠️ SSL is deprecated.</p>
<p>Modern systems use <strong>TLS</strong> instead.</p>
<hr>
<h1 id="2-what-is-tls">2️⃣ What is TLS?</h1>
<p><strong>TLS (Transport Layer Security)</strong> is the modern, secure version of SSL.</p>
<p>When you see:</p>
<pre><code class="language-">
https://api.example.com
</code></pre>
<p>That means:</p>
<blockquote>HTTP over TLS</blockquote>
<p>TLS ensures:</p>
<ul>
<li>🔒 Data encryption</li>
<li>🔐 Server identity verification</li>
<li>🛡 Protection from man-in-the-middle attacks</li>
</ul>
<hr>
<h1 id="3-what-is-an-ssltls-handshake">3️⃣ What is an SSL/TLS Handshake?</h1>
<p>A <strong>handshake</strong> is the process where client and server:</p>
<ul>
<li>Agree on encryption algorithm</li>
<li>Exchange keys</li>
<li>Verify server certificate</li>
<li>Establish secure session</li>
</ul>
<h3 id="simplified-flow">Simplified Flow</h3>
<pre><code class="language-">
Client → Hello (I support TLS 1.3, these ciphers)
Server → Hello (We’ll use TLS 1.3 + this cipher)
Server → Sends certificate
Client → Verifies certificate
Client → Generates session key
Secure encrypted communication begins
</code></pre>
<p>If something fails here → you get:</p>
<ul>
<li><code>SSLHandshakeException</code></li>
<li><code>PKIX path building failed</code></li>
<li><code>host closed</code></li>
<li><code>Connection reset</code></li>
</ul>
<hr>
<h1 id="4-why-is-this-important-for-your-api">4️⃣ Why Is This Important For Your API?</h1>
<p>When you call:</p>
<pre><code class="language-">
https://api.example.com
</code></pre>
<p>Java must:</p>
<ul>
<li>Trust the server certificate</li>
<li>Support the TLS version</li>
<li>Complete handshake successfully</li>
</ul>
<p>If:</p>
<ul>
<li>Certificate not trusted</li>
<li>Corporate proxy intercepting SSL</li>
<li>TLS version mismatch</li>
<li>Expired certificate</li>
</ul>
<p>→ handshake fails</p>
<p>→ connection closes</p>
<p>→ you see <code>host closed</code></p>
<hr>
<h1 id="5-what-is-a-certificate">5️⃣ What is a Certificate?</h1>
<p>A certificate proves:</p>
<blockquote>&quot;I am api.example.com&quot;</blockquote>
<p>It contains:</p>
<ul>
<li>Public key</li>
<li>Issuer (CA)</li>
<li>Expiry date</li>
<li>Signature</li>
</ul>
<p>Java validates the certificate against its <strong>truststore</strong>.</p>
<hr>
<h1 id="6-what-is-a-truststore">6️⃣ What is a Truststore?</h1>
<p>A truststore is a file containing trusted Certificate Authorities (CAs).</p>
<p>Default Java truststore:</p>
<pre><code class="language-">
$JAVA_HOME/lib/security/cacerts
</code></pre>
<p>If your server uses a certificate signed by:</p>
<ul>
<li>Public CA (DigiCert, GlobalSign, etc.) → usually works</li>
<li>Internal corporate CA → Java may not trust it</li>
</ul>
<hr>
<h1 id="7-common-corporate-problem-very-important">7️⃣ Common Corporate Problem (Very Important)</h1>
<p>In corporate networks:</p>
<pre><code class="language-">
Client → Corporate Proxy → Internet API
</code></pre>
<p>The proxy may:</p>
<ul>
<li>Decrypt HTTPS</li>
<li>Inspect traffic</li>
<li>Re-encrypt using company certificate</li>
</ul>
<p>Java sees:</p>
<pre><code class="language-">
Certificate signed by Corporate CA
</code></pre>
<p>If Corporate CA is NOT in Java truststore:</p>
<p>→ handshake fails</p>
<p>→ host closed</p>
<p>Postman works because:</p>
<ul>
<li>It trusts OS certificates</li>
<li>It auto-imports system CA</li>
</ul>
<p>Java does NOT.</p>
<hr>
<h1 id="8-how-to-configure-ssltls-in-java-quarkus">8️⃣ How To Configure SSL/TLS in Java / Quarkus</h1>
<h2 id="option-1-proper-fix-recommended">✅ Option 1 — Proper Fix (Recommended)</h2>
<p>Import corporate certificate into JVM truststore.</p>
<h3 id="step-1-get-certificate">Step 1: Get certificate</h3>
<p>Ask IT or export from browser.</p>
<h3 id="step-2-import-into-java">Step 2: Import into Java</h3>
<pre><code class="language-bash">
keytool -import \
-alias corp-root \
-file corp-root.crt \
-keystore $JAVA_HOME/lib/security/cacerts
</code></pre>
<p>Default password:</p>
<pre><code class="language-">
changeit
</code></pre>
<p>Restart app.</p>
<hr>
<h2 id="option-2-custom-truststore">✅ Option 2 — Custom Truststore</h2>
<p>Create your own truststore:</p>
<pre><code class="language-bash">
keytool -import -alias corp-root \
-file corp-root.crt \
-keystore my-truststore.jks
</code></pre>
<p>Then run app:</p>
<pre><code class="language-bash">
-Djavax.net.ssl.trustStore=my-truststore.jks
-Djavax.net.ssl.trustStorePassword=yourPassword
</code></pre>
<hr>
<h2 id="option-3-disable-ssl-validation-testing-only">⚠️ Option 3 — Disable SSL Validation (Testing Only)</h2>
<p>Do NOT use in production.</p>
<pre><code class="language-java">
SSLContext sslContext = SSLContexts.custom()
        .loadTrustMaterial(null, (chain, authType) -&gt; true)
        .build();

CloseableHttpClient client = HttpClients.custom()
        .setSSLContext(sslContext)
        .setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)
        .build();
</code></pre>
<p>If this fixes your issue → certificate trust problem confirmed.</p>
<hr>
<h1 id="9-forcing-tls-version-if-needed">9️⃣ Forcing TLS Version (If Needed)</h1>
<p>Sometimes server only supports TLS 1.2.</p>
<p>Force it:</p>
<pre><code class="language-bash">
-Dhttps.protocols=TLSv1.2
</code></pre>
<p>Or in code:</p>
<pre><code class="language-java">
SSLContext sslContext = SSLContexts.custom()
        .setProtocol(&quot;TLSv1.2&quot;)
        .build();
</code></pre>
<hr>
<h1 id="enable-ssl-debug-very-useful">🔟 Enable SSL Debug (Very Useful)</h1>
<p>Run app with:</p>
<pre><code class="language-bash">
-Djavax.net.debug=ssl,handshake
</code></pre>
<p>This prints:</p>
<ul>
<li>Certificate chain</li>
<li>TLS version used</li>
<li>Handshake failures</li>
<li>Trust validation errors</li>
</ul>
<hr>
<h1 id="summary">Summary</h1>
<table>
<thead><tr>
<th>Term</th>
<th>Meaning</th>
</tr></thead><tbody>
<tr>
<td>SSL</td>
<td>Old encryption protocol (deprecated)</td>
</tr>
<tr>
<td>TLS</td>
<td>Modern secure encryption protocol</td>
</tr>
<tr>
<td>Handshake</td>
<td>Process of negotiating secure connection</td>
</tr>
<tr>
<td>Certificate</td>
<td>Server identity proof</td>
</tr>
<tr>
<td>Truststore</td>
<td>Java’s list of trusted CAs</td>
</tr>
</tbody></table>
<hr>
<h1 id="why-you-need-it">Why You Need It</h1>
<p>Without SSL/TLS:</p>
<ul>
<li>Passwords sent in plain text</li>
<li>Data can be intercepted</li>
<li>API is insecure</li>
</ul>
<p>With SSL/TLS:</p>
<ul>
<li>Data encrypted</li>
<li>Server identity verified</li>
<li>Secure communication</li>
</ul>
<hr>
<h1 id="in-your-case">In Your Case</h1>
<p>Since:</p>
<ul>
<li>Postman works</li>
<li>HttpClient gives <code>host closed</code></li>
<li>Proxy suspected</li>
</ul>
<p>Most likely:</p>
<ul>
<li>Corporate SSL inspection</li>
<li>Java does not trust corporate CA</li>
<li>Handshake fails silently</li>
</ul>
<hr>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = proxyContentData;
}
