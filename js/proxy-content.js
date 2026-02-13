// Proxy - Content Data
const proxyContentData = `<h1 id="configuring-proxy-in-java">Configuring proxy in java</h1>
<pre><code class="language-md">
# Configuring Apache HttpClient Proxy in Quarkus

## Problem Statement

An API works successfully in Postman using Basic Authentication, but when calling the same API using Apache HttpClient in a Quarkus application, the request fails with:

</code></pre>
<p>host closed</p>
<pre><code class="language-`">

In most corporate environments, this issue is caused by a **missing proxy configuration** in the Java application.

---

# Important Clarification

You **cannot discover the proxy by calling the API**.

The proxy is part of your **network infrastructure**, not part of the API server.

The `HttpHost` used in:

</code></pre>
<p>.setProxy(new HttpHost(...))</p>
<pre><code class="language-`">

must be your **corporate proxy server**, NOT the API hostname.

---

# How to Find the Proxy Host

## 1. Check Postman Settings (Fastest Method)

1. Open Postman
2. Go to **Settings → Proxy**
3. Check:

    * &quot;Use System Proxy&quot;
    * Any manually configured proxy

Example:

</code></pre>
<p>proxy.company.com:8080</p>
<pre><code class="language-">

Use this in your code:

</code></pre>
<p>HttpHost proxy = new HttpHost(&quot;proxy.company.com&quot;, 8080);</p>
<pre><code class="language-">

---

## 2. Check Operating System Proxy Settings

### Windows

Open Command Prompt:

</code></pre>
<p>netsh winhttp show proxy</p>
<pre><code class="language-">

Or check:

</code></pre>
<p>Internet Options → Connections → LAN Settings</p>
<pre><code class="language-">

---

### Mac / Linux

Run:

</code></pre>
<p>echo $http_proxy</p>
<p>echo $https_proxy</p>
<pre><code class="language-">

Or:

</code></pre>
<table>
<tr>
<td>env</td>
<td>grep -i proxy</td>
</tr>
<pre><code class="language-">

Example output:

</code></pre>
</tbody></table>
<p>http_proxy=http://proxy.company.com:8080</p>
<pre><code class="language-">

This gives:

* Host: `proxy.company.com`
* Port: `8080`

---

## 3. Ask Network / DevOps Team

In corporate environments, outbound traffic may require a proxy such as:

* Zscaler
* Bluecoat
* Squid
* Corporate Gateway

Ask for:

* Proxy host
* Proxy port
* Whether proxy authentication is required

---

## 4. Verify Using curl

From the machine running Quarkus:

Test without proxy:

</code></pre>
<p>curl https://api.example.com</p>
<pre><code class="language-">

If it fails, try:

</code></pre>
<p>curl -x proxy.company.com:8080 https://api.example.com</p>
<pre><code class="language-">

If this works → proxy is required.

---

# Configuring Proxy in Apache HttpClient

## Basic Proxy Configuration

</code></pre>
<p>HttpHost proxy = new HttpHost(&quot;proxy.company.com&quot;, 8080);</p>
<p>RequestConfig config = RequestConfig.custom()</p>
<p>        .setProxy(proxy)</p>
<p>        .build();</p>
<p>CloseableHttpClient client = HttpClients.custom()</p>
<p>        .setDefaultRequestConfig(config)</p>
<p>        .build();</p>
<pre><code class="language-">

---

## Proxy With Authentication

</code></pre>
<p>CredentialsProvider credsProvider = new BasicCredentialsProvider();</p>
<p>credsProvider.setCredentials(</p>
<p>        new AuthScope(&quot;proxy.company.com&quot;, 8080),</p>
<p>        new UsernamePasswordCredentials(&quot;proxyUser&quot;, &quot;proxyPass&quot;)</p>
<p>);</p>
<p>CloseableHttpClient client = HttpClients.custom()</p>
<p>        .setProxy(new HttpHost(&quot;proxy.company.com&quot;, 8080))</p>
<p>        .setDefaultCredentialsProvider(credsProvider)</p>
<p>        .build();</p>
<pre><code class="language-">

---

# Alternative: Configure Proxy via JVM Properties (Recommended)

Instead of hardcoding the proxy in code, configure it using JVM arguments:

</code></pre>
<p>-Dhttp.proxyHost=proxy.company.com</p>
<p>-Dhttp.proxyPort=8080</p>
<p>-Dhttps.proxyHost=proxy.company.com</p>
<p>-Dhttps.proxyPort=8080</p>
<pre><code class="language-">

This allows environment-specific configuration without code changes.

---

# Common Mistake

Incorrect:

</code></pre>
<p>new HttpHost(&quot;api.example.com&quot;, 443)  // ❌ This is NOT a proxy</p>
<pre><code class="language-">

Correct:

</code></pre>
<p>new HttpHost(&quot;proxy.company.com&quot;, 8080)  // ✅ This is the proxy server</p>
<pre><code class="language-">

---

# If Issue Persists

Enable SSL debugging:

</code></pre>
<p>-Djavax.net.debug=ssl,handshake</p>
<pre><code class="language-">

Enable Apache HttpClient debug logging:

</code></pre>
<p>quarkus.log.category.&quot;org.apache.http&quot;.level=DEBUG</p>
<pre><code class="language-">

---

# Summary

If:

* API works in Postman
* Fails in Quarkus with `host closed`

Then the most common causes are:

* Missing proxy configuration
* Proxy authentication required
* SSL trust issue (corporate certificate)

The proxy must be obtained from:

* Postman settings
* OS proxy settings
* Environment variables
* Network team
* curl testing

You cannot discover it from the API itself.

---

# 1️⃣ What is SSL?

**SSL (Secure Sockets Layer)** is an old encryption protocol used to secure communication between:

* Client (browser / app)
* Server (API / website)

It encrypts:

* Data
* Credentials
* Tokens
* Request/response body

⚠️ SSL is deprecated.

Modern systems use **TLS** instead.

---

# 2️⃣ What is TLS?

**TLS (Transport Layer Security)** is the modern, secure version of SSL.

When you see:

</code></pre>
<p>https://api.example.com</p>
<pre><code class="language-">

That means:

&gt; HTTP over TLS

TLS ensures:

* 🔒 Data encryption
* 🔐 Server identity verification
* 🛡 Protection from man-in-the-middle attacks

---

# 3️⃣ What is an SSL/TLS Handshake?

A **handshake** is the process where client and server:

1. Agree on encryption algorithm
2. Exchange keys
3. Verify server certificate
4. Establish secure session

### Simplified Flow

</code></pre>
<p>Client → Hello (I support TLS 1.3, these ciphers)</p>
<p>Server → Hello (We’ll use TLS 1.3 + this cipher)</p>
<p>Server → Sends certificate</p>
<p>Client → Verifies certificate</p>
<p>Client → Generates session key</p>
<p>Secure encrypted communication begins</p>
<pre><code class="language-">

If something fails here → you get:

* `SSLHandshakeException`
* `PKIX path building failed`
* `host closed`
* `Connection reset`

---

# 4️⃣ Why Is This Important For Your API?

When you call:

</code></pre>
<p>https://api.example.com</p>
<pre><code class="language-">

Java must:

* Trust the server certificate
* Support the TLS version
* Complete handshake successfully

If:

* Certificate not trusted
* Corporate proxy intercepting SSL
* TLS version mismatch
* Expired certificate

→ handshake fails
→ connection closes
→ you see `host closed`

---

# 5️⃣ What is a Certificate?

A certificate proves:

&gt; &quot;I am api.example.com&quot;

It contains:

* Public key
* Issuer (CA)
* Expiry date
* Signature

Java validates the certificate against its **truststore**.

---

# 6️⃣ What is a Truststore?

A truststore is a file containing trusted Certificate Authorities (CAs).

Default Java truststore:

</code></pre>
<p>$JAVA_HOME/lib/security/cacerts</p>
<pre><code class="language-">

If your server uses a certificate signed by:

* Public CA (DigiCert, GlobalSign, etc.) → usually works
* Internal corporate CA → Java may not trust it

---

# 7️⃣ Common Corporate Problem (Very Important)

In corporate networks:

</code></pre>
<p>Client → Corporate Proxy → Internet API</p>
<pre><code class="language-">

The proxy may:

* Decrypt HTTPS
* Inspect traffic
* Re-encrypt using company certificate

Java sees:

</code></pre>
<p>Certificate signed by Corporate CA</p>
<pre><code class="language-">

If Corporate CA is NOT in Java truststore:

→ handshake fails
→ host closed

Postman works because:

* It trusts OS certificates
* It auto-imports system CA

Java does NOT.

---

# 8️⃣ How To Configure SSL/TLS in Java / Quarkus

## ✅ Option 1 — Proper Fix (Recommended)

Import corporate certificate into JVM truststore.

### Step 1: Get certificate

Ask IT or export from browser.

### Step 2: Import into Java

</code></pre>
<p>keytool -import \</p>
<p>-alias corp-root \</p>
<p>-file corp-root.crt \</p>
<p>-keystore $JAVA_HOME/lib/security/cacerts</p>
<pre><code class="language-">

Default password:

</code></pre>
<p>changeit</p>
<pre><code class="language-">

Restart app.

---

## ✅ Option 2 — Custom Truststore

Create your own truststore:

</code></pre>
<p>keytool -import -alias corp-root \</p>
<p>-file corp-root.crt \</p>
<p>-keystore my-truststore.jks</p>
<pre><code class="language-">

Then run app:

</code></pre>
<p>-Djavax.net.ssl.trustStore=my-truststore.jks</p>
<p>-Djavax.net.ssl.trustStorePassword=yourPassword</p>
<pre><code class="language-">

---

## ⚠️ Option 3 — Disable SSL Validation (Testing Only)

Do NOT use in production.

</code></pre>
<p>SSLContext sslContext = SSLContexts.custom()</p>
<p>        .loadTrustMaterial(null, (chain, authType) -&gt; true)</p>
<p>        .build();</p>
<p>CloseableHttpClient client = HttpClients.custom()</p>
<p>        .setSSLContext(sslContext)</p>
<p>        .setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)</p>
<p>        .build();</p>
<pre><code class="language-">

If this fixes your issue → certificate trust problem confirmed.

---

# 9️⃣ Forcing TLS Version (If Needed)

Sometimes server only supports TLS 1.2.

Force it:

</code></pre>
<p>-Dhttps.protocols=TLSv1.2</p>
<pre><code class="language-">

Or in code:

</code></pre>
<p>SSLContext sslContext = SSLContexts.custom()</p>
<p>        .setProtocol(&quot;TLSv1.2&quot;)</p>
<p>        .build();</p>
<pre><code class="language-">

---

# 🔟 Enable SSL Debug (Very Useful)

Run app with:

</code></pre>
<p>-Djavax.net.debug=ssl,handshake</p>
<pre><code class="language-">

This prints:

* Certificate chain
* TLS version used
* Handshake failures
* Trust validation errors

---

# Summary

| Term        | Meaning                                  |
| ----------- | ---------------------------------------- |
| SSL         | Old encryption protocol (deprecated)     |
| TLS         | Modern secure encryption protocol        |
| Handshake   | Process of negotiating secure connection |
| Certificate | Server identity proof                    |
| Truststore  | Java’s list of trusted CAs               |

---

# Why You Need It

Without SSL/TLS:

* Passwords sent in plain text
* Data can be intercepted
* API is insecure

With SSL/TLS:

* Data encrypted
* Server identity verified
* Secure communication

---

# In Your Case

Since:

* Postman works
* HttpClient gives `host closed`
* Proxy suspected

Most likely:

* Corporate SSL inspection
* Java does not trust corporate CA
* Handshake fails silently

---
`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = proxyContentData;
}
