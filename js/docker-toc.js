// Docker - Table of Contents Data
const dockerTocData = `<a href="#docker" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="docker">Docker</a>
<a href="#all-docker-commands" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="all-docker-commands">All Docker Commands</a>
<a href="#7-cleanup-maintenance-docker" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="7-cleanup-maintenance-docker">7. 🧹 Cleanup &amp; Maintenance (Docker)</a>
<a href="#8-docker-compose-common-commands" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="8-docker-compose-common-commands">8. 🐳 Docker Compose – Common Commands</a>
<a href="#docker-in-spring-boot" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="docker-in-spring-boot">Docker in Spring Boot</a>
<a href="#step-1-package-the-spring-boot-application" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-1-package-the-spring-boot-application">📦 Step 1: Package the Spring Boot Application</a>
<a href="#step-2-create-a-dockerfile" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-2-create-a-dockerfile">🐳 Step 2: Create a Dockerfile</a>
<a href="#step-3-build-the-docker-image" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-3-build-the-docker-image">🏗️ Step 3: Build the Docker Image</a>
<a href="#step-4-test-the-docker-image-locally-optional" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-4-test-the-docker-image-locally-optional">▶️ Step 4: Test the Docker Image Locally (Optional)</a>
<a href="#step-5-log-in-to-docker-hub" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-5-log-in-to-docker-hub">🚀 Step 5: Log in to Docker Hub</a>
<a href="#step-6-push-the-docker-image" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="step-6-push-the-docker-image">🚀 Step 6: Push the Docker Image</a>
<a href="#optional-automate-with-jib-maven-or-gradle" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="optional-automate-with-jib-maven-or-gradle">✅ Optional: Automate with Jib (Maven or Gradle)</a>
<a href="#sample-dockerfile" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="sample-dockerfile">🐳 Sample Dockerfile</a>
<a href="#github-actions-workflow-githubworkflowsdocker-imageyml" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="github-actions-workflow-githubworkflowsdocker-imageyml">🚀 GitHub Actions Workflow (<code>.github/workflows/docker-image.yml</code>)</a>
<a href="#set-secrets-in-github-repository" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="set-secrets-in-github-repository">🛡️ Set Secrets in GitHub Repository</a>
<a href="#docker-composeyml-file" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="docker-composeyml-file">docker-compose.yml file</a>
<a href="#run-this-docker-composeyml" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="run-this-docker-composeyml">Run this docker-compose.yml</a>
<a href="#curl-commands" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="curl-commands">CURL Commands</a>
<a href="#1-basic-http-get" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-basic-http-get">1. Basic HTTP GET</a>
<a href="#2-get-with-custom-path" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-get-with-custom-path">2. GET with custom path</a>
<a href="#3-get-with-headers-auth" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-get-with-headers-auth">3. GET with headers (Auth)</a>
<a href="#4-post-with-json-data" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-post-with-json-data">4. POST with JSON data</a>
<a href="#5-put-update" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-put-update">5. PUT (update)</a>
<a href="#6-delete-request" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="6-delete-request">6. DELETE request</a>
<a href="#7-see-full-http-response" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="7-see-full-http-response">7. See full HTTP response</a>
<a href="#8-save-response-to-file" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="8-save-response-to-file">8. Save response to file</a>
<a href="#9-follow-redirects" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="9-follow-redirects">9. Follow redirects</a>
<a href="#10-form-submission-x-www-form-urlencoded" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="10-form-submission-x-www-form-urlencoded">10. Form submission (x-www-form-urlencoded)</a>
<a href="#11-basic-authentication" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="11-basic-authentication">11. Basic Authentication</a>
<a href="#12-send-custom-headers" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="12-send-custom-headers">12. Send custom headers</a>
<a href="#13-upload-a-file" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="13-upload-a-file">13. Upload a file</a>
<a href="#14-test-docker-container-api" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="14-test-docker-container-api">14. Test Docker container API</a>
<a href="#bonus-curl-cheat-sheet-summary" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="bonus-curl-cheat-sheet-summary">Bonus: Curl Cheat Sheet Summary</a>
<a href="#other-most-used-commands" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="other-most-used-commands">Other Most Used Commands</a>
<a href="#1-wget-simpler-alternative-to-curl-downloads" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-wget-simpler-alternative-to-curl-downloads">1. wget – simpler alternative to curl (downloads)</a>
<a href="#2-httpie-human-friendly-curl-alternative" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-httpie-human-friendly-curl-alternative">2. httpie – human-friendly curl alternative</a>
<a href="#3-ping-test-hostip-connectivity" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-ping-test-hostip-connectivity">3. ping – test host/IP connectivity</a>
<a href="#4-netstat-ss-check-active-ports" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="4-netstat-ss-check-active-ports">4. netstat / ss – check active ports</a>
<a href="#5-telnet-nc-netcat-test-port-connectivity" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="5-telnet-nc-netcat-test-port-connectivity">5. telnet / nc (netcat) – test port connectivity</a>
<a href="#6-jq-json-viewerparser" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="6-jq-json-viewerparser">6. jq – JSON viewer/parser</a>
<a href="#7-docker-logs-debug-container-output" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="7-docker-logs-debug-container-output">7. docker logs – debug container output</a>
<a href="#8-docker-exec-run-commands-inside-container" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="8-docker-exec-run-commands-inside-container">8. docker exec – run commands inside container</a>
<a href="#9-kubectl-kubernetes-cli" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="9-kubectl-kubernetes-cli">9. kubectl – Kubernetes CLI</a>
<a href="#10-lsof-check-which-process-uses-a-port" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="10-lsof-check-which-process-uses-a-port">10. lsof – check which process uses a port</a>
<a href="#summary-table" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary-table">Summary Table</a>
<a href="#docker-trouble-shoots" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="docker-trouble-shoots">Docker Trouble shoots</a>
<a href="#best-practices-for-reducing-docker-image-size" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="best-practices-for-reducing-docker-image-size">🚀 Best Practices for Reducing Docker Image Size</a>
<a href="#docker-image-optimization-flow" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="docker-image-optimization-flow">🔄 Docker Image Optimization Flow</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = dockerTocData;
}
