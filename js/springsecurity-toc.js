// Springsecurity - Table of Contents Data
const springsecurityTocData = `<a href="#default-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="default-configuration">Default configuration</a>
<a href="#1-adfs-active-directory-federation-services" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-adfs-active-directory-federation-services"><strong>1. ADFS (Active Directory Federation Services)</strong></a>
<a href="#2-oauth-oauth-10-oauth-20" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-oauth-oauth-10-oauth-20"><strong>2. OAuth (OAuth 1.0 &amp; OAuth 2.0)</strong></a>
<a href="#3-oauth-20-modern-version-of-oauth" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-oauth-20-modern-version-of-oauth"><strong>3. OAuth 2.0 (Modern Version of OAuth)</strong></a>
<a href="#4-jwt-json-web-token" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-jwt-json-web-token"><strong>4. JWT (JSON Web Token)</strong></a>
<a href="#how-they-relate" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="how-they-relate"><strong>How They Relate</strong></a>
<a href="#quick-cheat-sheet" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="quick-cheat-sheet"><strong>Quick Cheat Sheet</strong></a>
<a href="#𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧-𝐢𝐧-𝐑𝐄𝐒𝐓-𝐀𝐏𝐈𝐬" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧-𝐢𝐧-𝐑𝐄𝐒𝐓-𝐀𝐏𝐈𝐬">🔐 𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐑𝐄𝐒𝐓 𝐀𝐏𝐈𝐬</a>
<a href="#summary-table" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary-table">🧩 Summary Table</a>
<a href="#what-is-sso" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="what-is-sso">🔑 What is SSO?</a>
<a href="#integration-with-spring-security-oauth2-or-keycloak" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="integration-with-spring-security-oauth2-or-keycloak">🔗 Integration with Spring Security OAuth2 or Keycloak</a>
<a href="#spring-method-security-reference" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="spring-method-security-reference">📚 Spring Method Security Reference</a>
<a href="#secure-communication-between-microservices-in-spring-boot" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="secure-communication-between-microservices-in-spring-boot">🔐 Secure Communication Between Microservices in Spring Boot</a>
<a href="#testing-secure-microservices-with-postman" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="testing-secure-microservices-with-postman">🧪 Testing Secure Microservices with Postman</a>
<a href="#1-oauth20-jwt-flow-in-spring-boot" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="1-oauth20-jwt-flow-in-spring-boot"><strong>1. OAuth2.0 + JWT Flow in Spring Boot</strong></a>
<a href="#2-adfs-spring-boot-flow-oauth20-or-saml" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="2-adfs-spring-boot-flow-oauth20-or-saml"><strong>2. ADFS + Spring Boot Flow (OAuth2.0 or SAML)</strong></a>
<a href="#3-key-differences-oauth20jwt-vs-adfs" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="3-key-differences-oauth20jwt-vs-adfs"><strong>3. Key Differences (OAuth2.0+JWT vs ADFS)</strong></a>
<a href="#how-spring-security-works-here" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="how-spring-security-works-here">🔹 <strong>How Spring Security Works Here</strong></a>
<a href="#jwt-and-spring-security-are-they-the-same" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="jwt-and-spring-security-are-they-the-same">🔹 <strong>JWT and Spring Security – Are They the Same?</strong></a>
<a href="#what-should-you-choose-for-a-new-application" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="what-should-you-choose-for-a-new-application">🔹 <strong>What Should You Choose for a New Application?</strong></a>
<a href="#concrete-example-new-spring-boot-app" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="concrete-example-new-spring-boot-app">🔹 <strong>Concrete Example: New Spring Boot App</strong></a>
<a href="#final-recommendation" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="final-recommendation">🔹 <strong>Final Recommendation</strong></a>
<a href="#1-spring-boot-with-keycloakauth0-oidc-jwt" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="1-spring-boot-with-keycloakauth0-oidc-jwt">🔹 <strong>1. Spring Boot with Keycloak/Auth0 (OIDC + JWT)</strong></a>
<a href="#pomxml-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="pomxml-dependencies"><code>pom.xml</code> dependencies</a>
<a href="#applicationyml" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="applicationyml"><code>application.yml</code></a>
<a href="#security-config-if-you-need-role-based-rules" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="security-config-if-you-need-role-based-rules">Security Config (if you need role-based rules)</a>
<a href="#2-spring-boot-with-adfs-enterprise-oidcoauth2" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="2-spring-boot-with-adfs-enterprise-oidcoauth2">🔹 <strong>2. Spring Boot with ADFS (Enterprise OIDC/OAuth2)</strong></a>
<a href="#pomxml-dependencies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="pomxml-dependencies"><code>pom.xml</code> dependencies</a>
<a href="#applicationyml" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="applicationyml"><code>application.yml</code></a>
<a href="#security-config" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="security-config">Security Config</a>
<a href="#which-one-should-you-pick" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="which-one-should-you-pick">🔹 <strong>Which One Should You Pick?</strong></a>
<a href="#spring-boot-security-auth-flows-all-possibilities" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="spring-boot-security-auth-flows-all-possibilities">🔹 <strong>Spring Boot Security Auth Flows (All Possibilities)</strong></a>
<a href="#detailed-oauth2-oidc-jwt-flow-angular-spring-boot" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="detailed-oauth2-oidc-jwt-flow-angular-spring-boot">🔹 <strong>Detailed OAuth2 + OIDC + JWT Flow (Angular + Spring Boot)</strong></a>
<a href="#tokens-in-play" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="tokens-in-play">🔹 <strong>Tokens in Play</strong></a>
<a href="#spring-boot-config" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="spring-boot-config">🔹 <strong>Spring Boot Config</strong></a>
<a href="#what-is-ldap" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="what-is-ldap">🔹 <strong>What is LDAP?</strong></a>
<a href="#ldap-structure" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="ldap-structure">🔹 <strong>LDAP Structure</strong></a>
<a href="#where-ldap-is-used" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="where-ldap-is-used">🔹 <strong>Where LDAP is Used</strong></a>
<a href="#ldap-in-your-spring-boot-oauth2-jwt-flow" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="ldap-in-your-spring-boot-oauth2-jwt-flow">🔹 <strong>LDAP in Your Spring Boot + OAuth2 + JWT Flow</strong></a>
<a href="#example-keycloak-ldap" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="example-keycloak-ldap">🔹 <strong>Example: Keycloak + LDAP</strong></a>
<a href="#spring-boot-direct-ldap-authentication-without-oauth2" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="spring-boot-direct-ldap-authentication-without-oauth2">🔹 <strong>Spring Boot Direct LDAP Authentication (without OAuth2)</strong></a>
<a href="#best-practice-for-your-new-app" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="best-practice-for-your-new-app">🔹 <strong>Best Practice for Your New App</strong></a>
<a href="#ldap-vs-adfs-core-difference" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="ldap-vs-adfs-core-difference">🔹 <strong>LDAP vs ADFS: Core Difference</strong></a>
<a href="#when-to-choose-ldap-direct-integration" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="when-to-choose-ldap-direct-integration">🔹 <strong>When to Choose LDAP (Direct Integration)</strong></a>
<a href="#when-to-choose-adfs-or-any-idp-keycloak-auth0-okta-azure-ad" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="when-to-choose-adfs-or-any-idp-keycloak-auth0-okta-azure-ad">🔹 <strong>When to Choose ADFS (or any IdP: Keycloak, Auth0, Okta, Azure AD)</strong></a>
<a href="#ascii-flow-comparison" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="ascii-flow-comparison">🔹 <strong>ASCII Flow Comparison</strong></a>
<a href="#direct-ldap-legacy-style" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="direct-ldap-legacy-style"><strong>Direct LDAP (Legacy Style)</strong></a>
<a href="#adfs-modern-style-recommended" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="adfs-modern-style-recommended"><strong>ADFS (Modern Style, Recommended)</strong></a>
<a href="#recommendation-for-your-case-new-angular-spring-boot-app" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="recommendation-for-your-case-new-angular-spring-boot-app">🔹 <strong>Recommendation for Your Case (New Angular + Spring Boot App)</strong></a>
<a href="#jwt-json-web-token" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="jwt-json-web-token">🔹 <strong>JWT (JSON Web Token)</strong></a>
<a href="#oauth20" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="oauth20">🔹 <strong>OAuth2.0</strong></a>
<a href="#how-they-work-together" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="how-they-work-together">🔹 <strong>How They Work Together</strong></a>
<a href="#analogy" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="analogy">🔹 <strong>Analogy</strong></a>
<a href="#quick-answer" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="quick-answer">🔹 <strong>Quick Answer</strong></a>
<a href="#complete-flow-angular-spring-boot-oauth20-oidc-jwt-ldap" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="complete-flow-angular-spring-boot-oauth20-oidc-jwt-ldap">🔹 <strong>Complete Flow: Angular + Spring Boot + OAuth2.0 + OIDC + JWT + LDAP</strong></a>
<a href="#roles-of-each-piece" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="roles-of-each-piece">🔹 <strong>Roles of Each Piece</strong></a>
<a href="#decoded-jwt-example-access-token" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="decoded-jwt-example-access-token">🔹 <strong>Decoded JWT Example (Access Token)</strong></a>
<a href="#cookies-in-spring-boot" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="cookies-in-spring-boot">🍪 Cookies in Spring Boot</a>
<a href="#11-authentication-cookies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="11-authentication-cookies">1.1 Authentication Cookies</a>
<a href="#12-csrf-protection-cookies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="12-csrf-protection-cookies">1.2 CSRF Protection Cookies</a>
<a href="#13-user-preference-custom-cookies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="13-user-preference-custom-cookies">1.3 User Preference / Custom Cookies</a>
<a href="#21-using-responsecookie" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="21-using-responsecookie">2.1 Using <code>ResponseCookie</code></a>
<a href="#22-using-httpservletresponse" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="22-using-httpservletresponse">2.2 Using <code>HttpServletResponse</code></a>
<a href="#23-javascript-only-if-not-httponly" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="23-javascript-only-if-not-httponly">2.3 JavaScript (only if not HttpOnly)</a>
<a href="#cors-and-cor" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="cors-and-cor">🌐 CORS and COR</a>
<a href="#does-cors-affect-cookies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="does-cors-affect-cookies">Does CORS affect cookies?</a>
<a href="#spring-boot-cors-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="spring-boot-cors-example">Spring Boot CORS Example</a>
<a href="#javascript-frontend" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="javascript-frontend">JavaScript (Frontend)</a>
<a href="#spring-boot-backend" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="spring-boot-backend">Spring Boot (Backend)</a>
<a href="#when-cors-is-needed" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="when-cors-is-needed">When CORS is needed</a>
<a href="#cookies-in-spring-boot-extended" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="cookies-in-spring-boot-extended">🍪 Cookies in Spring Boot (Extended)</a>
<a href="#61-authentication-authorization" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="61-authentication-authorization">6.1 Authentication &amp; Authorization</a>
<a href="#62-csrf-protection" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="62-csrf-protection">6.2 CSRF Protection</a>
<a href="#63-tracking-and-personalization" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="63-tracking-and-personalization">6.3 Tracking and Personalization</a>
<a href="#64-shopping-carts-e-commerce" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="64-shopping-carts-e-commerce">6.4 Shopping Carts / E-commerce</a>
<a href="#65-rate-limiting-security" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="65-rate-limiting-security">6.5 Rate Limiting &amp; Security</a>
<a href="#66-sso-single-sign-on" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="66-sso-single-sign-on">6.6 SSO (Single Sign-On)</a>
<a href="#67-cookie-lifetime-strategies" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="67-cookie-lifetime-strategies">6.7 Cookie Lifetime Strategies</a>
<a href="#cors-and-cor-extended" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="cors-and-cor-extended">🌐 CORS and COR (Extended)</a>
<a href="#71-frontend-backend-separation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="71-frontend-backend-separation">7.1 Frontend-Backend Separation</a>
<a href="#72-mobile-desktop-clients" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="72-mobile-desktop-clients">7.2 Mobile &amp; Desktop Clients</a>
<a href="#73-third-party-integrations" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="73-third-party-integrations">7.3 Third-Party Integrations</a>
<a href="#74-microservices-api-gateway" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="74-microservices-api-gateway">7.4 Microservices / API Gateway</a>
<a href="#75-security-considerations" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="75-security-considerations">7.5 Security Considerations</a>
<a href="#76-debugging-cors-issues" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="76-debugging-cors-issues">7.6 Debugging CORS Issues</a>
<a href="#77-cors-cookies-in-real-use-case" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="77-cors-cookies-in-real-use-case">7.7 CORS + Cookies in Real Use Case</a>
<a href="#final-enriched-takeaways" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="final-enriched-takeaways">🚀 Final Enriched Takeaways</a>
<a href="#spring-boot-application-example-cookies-cors" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="spring-boot-application-example-cookies-cors">🏗️ Spring Boot Application Example (Cookies + CORS)</a>
<a href="#1-cors-configuration-backend-allowing-cookies" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-cors-configuration-backend-allowing-cookies">1️⃣ CORS Configuration (Backend Allowing Cookies)</a>
<a href="#2-controller-handling-cookies" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-controller-handling-cookies">2️⃣ Controller Handling Cookies</a>
<a href="#3-user-preferences-theme-language-cookie" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-user-preferences-theme-language-cookie">3️⃣ User Preferences (Theme / Language Cookie)</a>
<a href="#4-frontend-react-angular-vue-fetch-example" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-frontend-react-angular-vue-fetch-example">4️⃣ Frontend (React / Angular / Vue) Fetch Example</a>
<a href="#how-this-application-uses-cookies-cors-together" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="how-this-application-uses-cookies-cors-together">🔑 How This Application Uses Cookies + CORS Together</a>
<a href="#spring-boot-spring-security-with-jwt-csrf" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="spring-boot-spring-security-with-jwt-csrf">🛡️ Spring Boot + Spring Security with JWT + CSRF</a>
<a href="#1-security-configuration" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-security-configuration">1️⃣ Security Configuration</a>
<a href="#2-jwt-authentication-filter" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-jwt-authentication-filter">2️⃣ JWT Authentication Filter</a>
<a href="#3-jwt-service" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-jwt-service">3️⃣ JWT Service</a>
<a href="#4-auth-controller-login-refresh-logout" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-auth-controller-login-refresh-logout">4️⃣ Auth Controller (Login + Refresh + Logout)</a>
<a href="#5-csrf-handling" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-csrf-handling">5️⃣ CSRF Handling</a>
<a href="#how-it-all-works-together" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="how-it-all-works-together">🔑 How It All Works Together</a>
<a href="#explanation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="explanation">🔑 Explanation:</a>
<a href="#whats-new-here" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="whats-new-here">🔑 What’s New Here</a>
<a href="#1-central-idea" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-central-idea"><strong>1️⃣ Central Idea</strong></a>
<a href="#2-how-jwt-works-across-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-how-jwt-works-across-microservices"><strong>2️⃣ How JWT Works Across Microservices</strong></a>
<a href="#step-1-authentication" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-1-authentication">🔹 Step 1: Authentication</a>
<a href="#step-2-client-sends-jwt" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-2-client-sends-jwt">🔹 Step 2: Client Sends JWT</a>
<a href="#step-3-api-gateway-verification" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-3-api-gateway-verification">🔹 Step 3: API Gateway Verification</a>
<a href="#step-4-downstream-service-communication" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-4-downstream-service-communication">🔹 Step 4: Downstream Service Communication</a>
<a href="#step-5-optional-service-to-service-security" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-5-optional-service-to-service-security">🔹 Step 5: Optional Service-to-Service Security</a>
<a href="#3-best-practices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-best-practices"><strong>3️⃣ Best Practices</strong></a>
<a href="#4-architecture-overview" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-architecture-overview"><strong>4️⃣ Architecture Overview</strong></a>
<a href="#tldr" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tldr">✅ <strong>TL;DR</strong></a>
<a href="#1-two-scenarios" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-two-scenarios"><strong>1️⃣ Two Scenarios</strong></a>
<a href="#scenario-1-propagate-user-authentication-jwt" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="scenario-1-propagate-user-authentication-jwt"><strong>Scenario 1: Propagate User Authentication (JWT)</strong></a>
<a href="#scenario-2-internal-service-to-service-call-service-credentials" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="scenario-2-internal-service-to-service-call-service-credentials"><strong>Scenario 2: Internal Service-to-Service Call (Service Credentials)</strong></a>
<a href="#2-best-practices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-best-practices"><strong>2️⃣ Best Practices</strong></a>
<a href="#3-typical-patterns-in-microservices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-typical-patterns-in-microservices"><strong>3️⃣ Typical Patterns in Microservices</strong></a>
<a href="#tldr" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="tldr">✅ TL;DR</a>
<a href="#explanation" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="explanation"><strong>Explanation</strong></a>
<a href="#1-generate-jwt-in-auth-service" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="1-generate-jwt-in-auth-service"><strong>1️⃣ Generate JWT in Auth Service</strong></a>
<a href="#2-validate-jwt-in-service-a" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="2-validate-jwt-in-service-a"><strong>2️⃣ Validate JWT in Service A</strong></a>
<a href="#security-filter" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="security-filter"><strong>Security Filter</strong></a>
<a href="#register-filter" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="register-filter"><strong>Register Filter</strong></a>
<a href="#3-propagate-jwt-to-service-b" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="3-propagate-jwt-to-service-b"><strong>3️⃣ Propagate JWT to Service B</strong></a>
<a href="#using-resttemplate" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="using-resttemplate"><strong>Using RestTemplate</strong></a>
<a href="#using-webclient-reactive" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="using-webclient-reactive"><strong>Using WebClient (Reactive)</strong></a>
<a href="#4-service-b-validates-the-jwt" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="4-service-b-validates-the-jwt"><strong>4️⃣ Service B validates the JWT</strong></a>
<a href="#5-summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="5-summary"><strong>5️⃣ Summary</strong></a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = springsecurityTocData;
}
