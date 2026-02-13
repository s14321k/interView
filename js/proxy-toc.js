// Proxy - Table of Contents Data
const proxyTocData = `<a href="#configuring-apache-httpclient-proxy-in-quarkus" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="configuring-apache-httpclient-proxy-in-quarkus">Configuring Apache HttpClient Proxy in Quarkus</a>
<a href="#problem-statement" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="problem-statement">Problem Statement</a>
<a href="#important-clarification" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="important-clarification">Important Clarification</a>
<a href="#how-to-find-the-proxy-host" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="how-to-find-the-proxy-host">How to Find the Proxy Host</a>
<a href="#1-check-postman-settings-fastest-method" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-check-postman-settings-fastest-method">1. Check Postman Settings (Fastest Method)</a>
<a href="#2-check-operating-system-proxy-settings" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-check-operating-system-proxy-settings">2. Check Operating System Proxy Settings</a>
<a href="#windows" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="windows">Windows</a>
<a href="#mac-linux" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="mac-linux">Mac / Linux</a>
<a href="#3-ask-network-devops-team" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-ask-network-devops-team">3. Ask Network / DevOps Team</a>
<a href="#4-verify-using-curl" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-verify-using-curl">4. Verify Using curl</a>
<a href="#configuring-proxy-in-apache-httpclient" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="configuring-proxy-in-apache-httpclient">Configuring Proxy in Apache HttpClient</a>
<a href="#basic-proxy-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="basic-proxy-configuration">Basic Proxy Configuration</a>
<a href="#proxy-with-authentication" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="proxy-with-authentication">Proxy With Authentication</a>
<a href="#alternative-configure-proxy-via-jvm-properties-recommended" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="alternative-configure-proxy-via-jvm-properties-recommended">Alternative: Configure Proxy via JVM Properties (Recommended)</a>
<a href="#common-mistake" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="common-mistake">Common Mistake</a>
<a href="#if-issue-persists" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="if-issue-persists">If Issue Persists</a>
<a href="#summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="summary">Summary</a>
<a href="#1-what-is-ssl" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="1-what-is-ssl">1️⃣ What is SSL?</a>
<a href="#2-what-is-tls" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="2-what-is-tls">2️⃣ What is TLS?</a>
<a href="#3-what-is-an-ssltls-handshake" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="3-what-is-an-ssltls-handshake">3️⃣ What is an SSL/TLS Handshake?</a>
<a href="#simplified-flow" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="simplified-flow">Simplified Flow</a>
<a href="#4-why-is-this-important-for-your-api" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="4-why-is-this-important-for-your-api">4️⃣ Why Is This Important For Your API?</a>
<a href="#5-what-is-a-certificate" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="5-what-is-a-certificate">5️⃣ What is a Certificate?</a>
<a href="#6-what-is-a-truststore" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="6-what-is-a-truststore">6️⃣ What is a Truststore?</a>
<a href="#7-common-corporate-problem-very-important" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="7-common-corporate-problem-very-important">7️⃣ Common Corporate Problem (Very Important)</a>
<a href="#8-how-to-configure-ssltls-in-java-quarkus" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="8-how-to-configure-ssltls-in-java-quarkus">8️⃣ How To Configure SSL/TLS in Java / Quarkus</a>
<a href="#option-1-proper-fix-recommended" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="option-1-proper-fix-recommended">✅ Option 1 — Proper Fix (Recommended)</a>
<a href="#step-1-get-certificate" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-1-get-certificate">Step 1: Get certificate</a>
<a href="#step-2-import-into-java" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-2-import-into-java">Step 2: Import into Java</a>
<a href="#option-2-custom-truststore" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="option-2-custom-truststore">✅ Option 2 — Custom Truststore</a>
<a href="#option-3-disable-ssl-validation-testing-only" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="option-3-disable-ssl-validation-testing-only">⚠️ Option 3 — Disable SSL Validation (Testing Only)</a>
<a href="#9-forcing-tls-version-if-needed" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="9-forcing-tls-version-if-needed">9️⃣ Forcing TLS Version (If Needed)</a>
<a href="#enable-ssl-debug-very-useful" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="enable-ssl-debug-very-useful">🔟 Enable SSL Debug (Very Useful)</a>
<a href="#summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="summary">Summary</a>
<a href="#why-you-need-it" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="why-you-need-it">Why You Need It</a>
<a href="#in-your-case" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="in-your-case">In Your Case</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = proxyTocData;
}
