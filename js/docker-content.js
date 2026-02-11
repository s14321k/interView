// Docker - Content Data
const dockerContentData = `<h1 id="docker">Docker</h1>
<details>
<summary><strong>Vm vs Containers</strong></summary>
<p><img src="../images/vmVsContainers.png" alt="Container"></p>
<p><img src="../images/Docker/DockerArch.gif" alt="DockerArch"></p>
</details>
<details>
<summary><strong>Docker Architecture</strong></summary>
<p><img src="../images/DockerArchitecture.png" alt="DockerArchitecture"></p>
</details>
<details>
<summary><strong>Container</strong></summary>
<ul>
<li>Container is a small microVM which runs on top of Linux. It has all the dependencies of application code, client libraries.</li>
</ul>
</details>
<details>
<summary><strong>Simple image creation</strong></summary>
<p><strong>Create a container image</strong></p>
<pre><code class="language-bash">
$ docker run -d -p 8800:80 httpd
</code></pre>
<ul>
<li><code>-d</code> - detach and run in background.</li>
<li><code>-p</code> - map host port to container port.</li>
</ul>
<p><strong>Show the web page</strong></p>
<pre><code class="language-bash">
$ curl localhost:8800
</code></pre>
<p><strong>Kill the Container</strong></p>
<pre><code class="language-bash">
$ docker stop &lt;container-id&gt;
</code></pre>
</details>
<details>
<summary><strong>Types of Docker creation</strong></summary>
<ul>
<li><strong>Dockerfile</strong></li>
</ul>
<ul>
<li>A file containing instructions for creating Docker images.</li>
<li>Static, less flexible for complex/custom images or multi-OS/arch/version support.</li>
</ul>
<p><img src="../images/DockerFileCreation.png" alt="DockerFileCreation"></p>
</details>
<hr>
<h1 id="all-docker-commands">All Docker Commands</h1>
<details>
<summary><strong>1. Setup & Info Commands</strong></summary>
<table>
<thead><tr>
<th>Command</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td><code>docker version</code></td>
<td>Check Docker client/server versions</td>
</tr>
<tr>
<td><code>docker info</code></td>
<td>Show system-wide Docker info (containers, images, etc.)</td>
</tr>
<tr>
<td><code>docker system df</code></td>
<td>Show Docker disk usage</td>
</tr>
</tbody></table>
</details>
<details>
<summary><strong>2. Image Management</strong></summary>
<table>
<thead><tr>
<th>Purpose</th>
<th>Command</th>
<th>Notes</th>
</tr></thead><tbody>
<tr>
<td>Pull an image</td>
<td><code>docker pull &lt;image-name&gt;</code></td>
<td>Downloads image from registry</td>
</tr>
<tr>
<td>Pull a specific image</td>
<td><code>docker pull nginx</code></td>
<td>Example</td>
</tr>
<tr>
<td>List images</td>
<td><code>docker images</code></td>
<td>Shows local images</td>
</tr>
<tr>
<td>Inspect an image</td>
<td><code>docker inspect &lt;image-id or name&gt;</code></td>
<td>Image metadata</td>
</tr>
<tr>
<td>Remove an image</td>
<td><code>docker rmi &lt;image-id or name&gt;</code></td>
<td>Image must not be in use</td>
</tr>
<tr>
<td>Remove unused images</td>
<td><code>docker image prune</code></td>
<td>Dangling images only</td>
</tr>
<tr>
<td>Remove all unused images</td>
<td><code>docker image prune -a</code></td>
<td>⚠️ Aggressive cleanup</td>
</tr>
</tbody></table>
</details>
<details>
<summary><strong>3. Container Lifecycle</strong></summary>
<table>
<thead><tr>
<th>Purpose</th>
<th>Command</th>
<th>Notes</th>
</tr></thead><tbody>
<tr>
<td>Run a new container</td>
<td><code>docker run -d -p 8080:80 nginx</code></td>
<td><code>-d</code> detached, <code>-p</code> port, <code>--name</code>, <code>-v</code>, <code>--rm</code></td>
</tr>
<tr>
<td>List running containers</td>
<td><code>docker ps</code></td>
<td>Shows running containers only</td>
</tr>
<tr>
<td>List all containers</td>
<td><code>docker ps -a</code></td>
<td>Running + stopped</td>
</tr>
<tr>
<td>Stop a container</td>
<td><code>docker stop &lt;container-name or id&gt;</code></td>
<td>Graceful stop (SIGTERM)</td>
</tr>
<tr>
<td>Start a stopped container</td>
<td><code>docker start &lt;container-name or id&gt;</code></td>
<td>Reuses existing container</td>
</tr>
<tr>
<td>Restart a container</td>
<td><code>docker restart &lt;container-name or id&gt;</code></td>
<td>Stop + start</td>
</tr>
<tr>
<td>Kill a container</td>
<td><code>docker kill &lt;container-name or id&gt;</code></td>
<td>Immediate stop (SIGKILL)</td>
</tr>
<tr>
<td>Remove a container</td>
<td><code>docker rm &lt;container-name or id&gt;</code></td>
<td>Container must be stopped</td>
</tr>
<tr>
<td>Remove all containers</td>
<td><code>docker rm $(docker ps -a -q)</code></td>
<td>Removes all containers</td>
</tr>
<tr>
<td>Remove stopped containers</td>
<td><code>docker container prune</code></td>
<td>Safe cleanup</td>
</tr>
<tr>
<td>Remove everything</td>
<td><code>docker system prune -a</code></td>
<td>⚠️ Containers, images, networks</td>
</tr>
</tbody></table>
</details>
<details>
<summary><strong>4. Working with Containers</strong></summary>
<table>
<thead><tr>
<th>Purpose</th>
<th>Command</th>
<th>Notes</th>
</tr></thead><tbody>
<tr>
<td>Run a shell in a running container</td>
<td><code>docker exec -it &lt;container-name&gt; bash</code></td>
<td>Use <code>sh</code> if <code>bash</code> isn’t available</td>
</tr>
<tr>
<td>Run a one-time command</td>
<td><code>docker run --rm alpine echo hello</code></td>
<td>Container removed after execution</td>
</tr>
<tr>
<td>View container logs</td>
<td><code>docker logs &lt;container-name&gt;</code></td>
<td>Add <code>-f</code> to follow logs</td>
</tr>
<tr>
<td>Copy files from container</td>
<td><code>docker cp &lt;container&gt;:&lt;path&gt; &lt;local-path&gt;</code></td>
<td>Copies from container to host</td>
</tr>
<tr>
<td>Copy files to container</td>
<td><code>docker cp &lt;local-path&gt; &lt;container&gt;:&lt;path&gt;</code></td>
<td>Copies from host to container</td>
</tr>
<tr>
<td>View running containers</td>
<td><code>docker ps</code></td>
<td>Add <code>-a</code> to see all containers</td>
</tr>
<tr>
<td>Inspect a container</td>
<td><code>docker inspect &lt;container-name&gt;</code></td>
<td>Detailed container metadata</td>
</tr>
<tr>
<td>Restart a container</td>
<td><code>docker restart &lt;container-name&gt;</code></td>
<td>Graceful restart</td>
</tr>
<tr>
<td>Stop a container</td>
<td><code>docker stop &lt;container-name&gt;</code></td>
<td>Sends SIGTERM</td>
</tr>
<tr>
<td>Remove a container</td>
<td><code>docker rm &lt;container-name&gt;</code></td>
<td>Must be stopped first</td>
</tr>
</tbody></table>
</details>
<details>
<summary><strong>5. Docker Volumes (Persistent Storage)</strong></summary>
<table>
<thead><tr>
<th>Purpose</th>
<th>Command</th>
<th>Notes</th>
</tr></thead><tbody>
<tr>
<td>Create a volume</td>
<td><code>docker volume create &lt;name&gt;</code></td>
<td>Managed by Docker</td>
</tr>
<tr>
<td>List volumes</td>
<td><code>docker volume ls</code></td>
<td>Shows all volumes</td>
</tr>
<tr>
<td>Inspect a volume</td>
<td><code>docker volume inspect &lt;name&gt;</code></td>
<td>View mountpoint &amp; usage</td>
</tr>
<tr>
<td>Mount volume in a container</td>
<td><code>docker run -v &lt;volume-name&gt;:/app/data &lt;image&gt;</code></td>
<td>Named volume</td>
</tr>
<tr>
<td>Mount bind volume</td>
<td><code>docker run -v $(pwd):/app &lt;image&gt;</code></td>
<td>Host directory mount</td>
</tr>
<tr>
<td>Remove a volume</td>
<td><code>docker volume rm &lt;name&gt;</code></td>
<td>Volume must not be in use</td>
</tr>
<tr>
<td>Remove unused volumes</td>
<td><code>docker volume prune</code></td>
<td>⚠️ Deletes unused data</td>
</tr>
</tbody></table>
</details>
<details>
<summary><strong>6. Docker Networks</strong></summary>
<table>
<thead><tr>
<th>Purpose</th>
<th>Command</th>
<th>Notes</th>
</tr></thead><tbody>
<tr>
<td>Create a network</td>
<td><code>docker network create &lt;name&gt;</code></td>
<td>Uses default bridge driver</td>
</tr>
<tr>
<td>List networks</td>
<td><code>docker network ls</code></td>
<td>Shows all available networks</td>
</tr>
<tr>
<td>Inspect a network</td>
<td><code>docker network inspect &lt;name&gt;</code></td>
<td>View connected containers &amp; config</td>
</tr>
<tr>
<td>Connect container to network</td>
<td><code>docker network connect &lt;network&gt; &lt;container&gt;</code></td>
<td>Can connect running containers</td>
</tr>
<tr>
<td>Disconnect container from network</td>
<td><code>docker network disconnect &lt;network&gt; &lt;container&gt;</code></td>
<td>Use <code>-f</code> to force</td>
</tr>
<tr>
<td>Remove a network</td>
<td><code>docker network rm &lt;name&gt;</code></td>
<td>Network must not be in use</td>
</tr>
<tr>
<td>Remove unused networks</td>
<td><code>docker network prune</code></td>
<td>Safe if not attached</td>
</tr>
</tbody></table>
</details>
<details>
<summary><strong>7. Cleanup & Maintenance (Docker)</strong></summary>
<h3 id="7-cleanup-maintenance-docker">7. 🧹 Cleanup &amp; Maintenance (Docker)</h3>
<table>
<thead><tr>
<th>Purpose</th>
<th>Command</th>
<th>Notes / Warnings</th>
</tr></thead><tbody>
<tr>
<td><strong>Remove stopped containers</strong></td>
<td><code>docker container prune</code></td>
<td>Safe: running containers unaffected</td>
</tr>
<tr>
<td><strong>Remove unused images</strong></td>
<td><code>docker image prune</code></td>
<td>Removes dangling images only</td>
</tr>
<tr>
<td><strong>Remove unused images (all)</strong></td>
<td><code>docker image prune -a</code></td>
<td>⚠️ Removes unused images, not just dangling</td>
</tr>
<tr>
<td><strong>Remove unused volumes</strong></td>
<td><code>docker volume prune</code></td>
<td>⚠️ Can delete persisted data</td>
</tr>
<tr>
<td><strong>Remove unused networks</strong></td>
<td><code>docker network prune</code></td>
<td>Safe if not attached to containers</td>
</tr>
<tr>
<td><strong>Remove unused containers, images, networks</strong></td>
<td><code>docker system prune</code></td>
<td>Default cleanup</td>
</tr>
<tr>
<td><strong>Aggressive cleanup (everything)</strong></td>
<td><code>docker system prune -a</code></td>
<td>⚠️ Removes all unused images</td>
</tr>
<tr>
<td><strong>Full cleanup incl. volumes</strong></td>
<td><code>docker system prune -a --volumes</code></td>
<td>🚨 Nuclear option — deletes data</td>
</tr>
<tr>
<td><strong>Remove specific container</strong></td>
<td><code>docker rm &lt;container_id&gt;</code></td>
<td>Use <code>-f</code> to force</td>
</tr>
<tr>
<td><strong>Remove specific image</strong></td>
<td><code>docker rmi &lt;image_id&gt;</code></td>
<td>Image must not be in use</td>
</tr>
<tr>
<td><strong>Remove specific volume</strong></td>
<td><code>docker volume rm &lt;volume_name&gt;</code></td>
<td>Data is permanently lost</td>
</tr>
<tr>
<td><strong>Remove everything manually</strong></td>
<td><code>docker rm -f $(docker ps -aq)</code></td>
<td>Stops &amp; removes all containers</td>
</tr>
<tr>
<td><strong>Remove all images manually</strong></td>
<td><code>docker rmi -f $(docker images -aq)</code></td>
<td>After removing containers</td>
</tr>
<tr>
<td><strong>Check disk usage</strong></td>
<td><code>docker system df</code></td>
<td>Great before cleanup</td>
</tr>
</tbody></table>
<hr>
<p>💡 <strong>Tip:</strong></p>
<p>Run <code>docker system df</code> first to see <em>what’s actually eating disk space</em> before going full <code>prune -a --volumes</code>.</p>
</details>
<details>
<summary><strong>8. Docker Compose – Common Commands</strong></summary>
<h3 id="8-docker-compose-common-commands">8. 🐳 Docker Compose – Common Commands</h3>
<table>
<thead><tr>
<th>Purpose</th>
<th>Command</th>
<th>Notes</th>
</tr></thead><tbody>
<tr>
<td><strong>Start all services (detached)</strong></td>
<td><code>docker compose up -d</code></td>
<td>Creates &amp; starts containers</td>
</tr>
<tr>
<td><strong>Start with forced recreation</strong></td>
<td><code>docker compose up -d --force-recreate</code></td>
<td>Recreates containers even if unchanged</td>
</tr>
<tr>
<td><strong>Start a specific service</strong></td>
<td><code>docker compose up -d kafka</code></td>
<td>Starts only the specified service</td>
</tr>
<tr>
<td><strong>Recreate a specific service</strong></td>
<td><code>docker compose up -d --force-recreate kafka</code></td>
<td>Useful after config changes</td>
</tr>
<tr>
<td><strong>Stop all services</strong></td>
<td><code>docker compose down</code></td>
<td>Stops and removes containers</td>
</tr>
<tr>
<td><strong>Stop &amp; remove volumes</strong></td>
<td><code>docker compose down -v</code></td>
<td>⚠️ Deletes named volumes (data loss)</td>
</tr>
<tr>
<td><strong>Stop &amp; remove images</strong></td>
<td><code>docker compose down --rmi all</code></td>
<td>Removes images built by compose</td>
</tr>
<tr>
<td><strong>Build images</strong></td>
<td><code>docker compose build</code></td>
<td>Builds images defined in compose file</td>
</tr>
<tr>
<td><strong>Build without cache</strong></td>
<td><code>docker compose build --no-cache</code></td>
<td>Forces a clean build</td>
</tr>
<tr>
<td><strong>Pull images</strong></td>
<td><code>docker compose pull</code></td>
<td>Fetches latest images from registry</td>
</tr>
<tr>
<td><strong>Pull a specific service</strong></td>
<td><code>docker compose pull kafka</code></td>
<td>Useful for selective updates</td>
</tr>
<tr>
<td><strong>Start existing containers</strong></td>
<td><code>docker compose start</code></td>
<td>Does <strong>not</strong> recreate containers</td>
</tr>
<tr>
<td><strong>Stop running containers</strong></td>
<td><code>docker compose stop</code></td>
<td>Containers remain defined</td>
</tr>
<tr>
<td><strong>Restart services</strong></td>
<td><code>docker compose restart</code></td>
<td>Graceful restart</td>
</tr>
<tr>
<td><strong>View running services</strong></td>
<td><code>docker compose ps</code></td>
<td>Shows container status</td>
</tr>
<tr>
<td><strong>View logs (all services)</strong></td>
<td><code>docker compose logs</code></td>
<td>Aggregated logs</td>
</tr>
<tr>
<td><strong>Follow logs (live)</strong></td>
<td><code>docker compose logs -f</code></td>
<td>Streaming logs</td>
</tr>
<tr>
<td><strong>Logs for one service</strong></td>
<td><code>docker compose logs kafka</code></td>
<td>Scoped logging</td>
</tr>
<tr>
<td><strong>Execute command in container</strong></td>
<td><code>docker compose exec kafka bash</code></td>
<td>Interactive shell</td>
</tr>
<tr>
<td><strong>Run one-off command</strong></td>
<td><code>docker compose run kafka &lt;cmd&gt;</code></td>
<td>Starts a new container</td>
</tr>
<tr>
<td><strong>Validate compose file</strong></td>
<td><code>docker compose config</code></td>
<td>Checks syntax &amp; resolves vars</td>
</tr>
</tbody></table>
</details>
<hr>
<details>
<summary>✅ Bonus: Useful Commands Summary Table</summary>
<table>
<thead><tr>
<th>Task</th>
<th>Command</th>
</tr></thead><tbody>
<tr>
<td>Run a container</td>
<td><code>docker run</code></td>
</tr>
<tr>
<td>List containers</td>
<td><code>docker ps [-a]</code></td>
</tr>
<tr>
<td>Start/stop</td>
<td><code>docker start/stop</code></td>
</tr>
<tr>
<td>Remove</td>
<td><code>docker rm/rmi</code></td>
</tr>
<tr>
<td>Show logs</td>
<td><code>docker logs</code></td>
</tr>
<tr>
<td>Shell into container</td>
<td><code>docker exec -it &lt;name&gt; bash</code></td>
</tr>
<tr>
<td>System cleanup</td>
<td><code>docker system prune</code></td>
</tr>
</tbody></table>
</details>
<hr>
<h1 id="docker-in-spring-boot">Docker in Spring Boot</h1>
<details>
<summary><strong>Dockerfile</strong></summary>
<h3 id="step-1-package-the-spring-boot-application">📦 Step 1: Package the Spring Boot Application</h3>
<pre><code class="language-bash">
./mvnw clean package
# or for Gradle
./gradlew build
</code></pre>
<p>Produces <code>target/your-app.jar</code> or <code>build/libs/your-app.jar</code>.</p>
<hr>
<h3 id="step-2-create-a-dockerfile">🐳 Step 2: Create a Dockerfile</h3>
<pre><code class="language-Dockerfile">
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/your-app.jar app.jar
EXPOSE 8080
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;app.jar&quot;]
</code></pre>
<blockquote>Replace <code>target/your-app.jar</code> with your actual JAR path.</blockquote>
<hr>
<h3 id="step-3-build-the-docker-image">🏗️ Step 3: Build the Docker Image</h3>
<pre><code class="language-bash">
docker build . -t your-dockerhub-username/your-app-name:tag
</code></pre>
<p>Example:</p>
<pre><code class="language-bash">
docker build . -t s14321k/accounts:d1
</code></pre>
<hr>
<h3 id="step-4-test-the-docker-image-locally-optional">▶️ Step 4: Test the Docker Image Locally (Optional)</h3>
<pre><code class="language-bash">
docker run -d -p 8080:8080 s14321k/accounts:d1
docker run -d -p 8081:8080 s14321k/accounts:d1  # Another instance on different host port
</code></pre>
<p>Stop container:</p>
<pre><code class="language-bash">
docker stop &lt;container-id&gt;
</code></pre>
<hr>
<h3 id="step-5-log-in-to-docker-hub">🚀 Step 5: Log in to Docker Hub</h3>
<pre><code class="language-bash">
docker login
</code></pre>
<hr>
<h3 id="step-6-push-the-docker-image">🚀 Step 6: Push the Docker Image</h3>
<pre><code class="language-bash">
docker push your-dockerhub-username/your-app-name:tag
</code></pre>
</details>
<details>
<summary><strong>Build packs instead of Dockerfile</strong></summary>
<ul>
<li><strong>Maven (<code>pom.xml</code>)</strong>:</li>
</ul>
<pre><code class="language-xml">
&lt;image&gt;
  &lt;name&gt;your-dockerhub-username/your-app-name:tag&lt;/name&gt;
&lt;/image&gt;
</code></pre>
<p>Run:</p>
<pre><code class="language-bash">
./mvnw spring-boot:build-image
</code></pre>
<ul>
<li><strong>Gradle (<code>build.gradle</code>)</strong>:</li>
</ul>
<pre><code class="language-gradle">
image {
    name = &quot;your-dockerhub-username/your-app-name:tag&quot;
}
// or
bootBuildImage {
	imageName = &#x27;s14321l/${rootProject.name}:d1&#x27;
}
</code></pre>
<p>Run:</p>
<pre><code class="language-bash">
./gradlew bootBuildImage
</code></pre>
<hr>
<h3 id="optional-automate-with-jib-maven-or-gradle">✅ Optional: Automate with Jib (Maven or Gradle)</h3>
<ul>
<li>Add Jib plugin, configure image name.</li>
</ul>
<ul>
<li><strong>Maven example</strong>:</li>
</ul>
<pre><code class="language-xml">
&lt;plugin&gt;
  &lt;groupId&gt;com.google.cloud.tools&lt;/groupId&gt;
  &lt;artifactId&gt;jib-maven-plugin&lt;/artifactId&gt;
  &lt;version&gt;3.3.1&lt;/version&gt;
  &lt;configuration&gt;
    &lt;to&gt;
      &lt;image&gt;your-dockerhub-username/your-app-name:tag&lt;/image&gt;
    &lt;/to&gt;
  &lt;/configuration&gt;
&lt;/plugin&gt;
</code></pre>
<ul>
<li><strong>Gradle example</strong>:</li>
</ul>
<pre><code class="language-gradle">
plugins {
    id &#x27;com.google.cloud.tools.jib&#x27; version &#x27;3.3.1&#x27;
}
jib {
    from { image = &#x27;openjdk:21-jdk-slim&#x27; }
    to { image = &#x27;your-group/your-image-name:latest&#x27; }
}
</code></pre>
<p>Build commands:</p>
<ul>
<li>Maven:</li>
</ul>
<pre><code class="language-bash">
mvn compile jib:dockerBuild
</code></pre>
<ul>
<li>Gradle:</li>
</ul>
<pre><code class="language-bash">
./gradlew jib
</code></pre>
</details>
<details>
<summary><strong>Sample Spring Boot Project Structure</strong></summary>
<pre><code class="language-">
springboot-docker-app/
├── src/
│   └── main/
│       └── java/
│           └── com/example/demo/
│               └── DemoApplication.java
├── target/
│   └── demo-0.0.1-SNAPSHOT.jar
├── pom.xml
├── Dockerfile
└── .github/
    └── workflows/
        └── docker-image.yml
</code></pre>
<hr>
<h3 id="sample-dockerfile">🐳 Sample Dockerfile</h3>
<pre><code class="language-Dockerfile">
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;app.jar&quot;]
</code></pre>
<hr>
<h3 id="github-actions-workflow-githubworkflowsdocker-imageyml">🚀 GitHub Actions Workflow (<code>.github/workflows/docker-image.yml</code>)</h3>
<pre><code class="language-yaml">
name: Build and Push Docker Image

on:
  push:
    branches: [ &quot;main&quot; ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-java@v3
        with:
          java-version: &#x27;17&#x27;
          distribution: &#x27;temurin&#x27;
      - run: ./mvnw clean package -DskipTests
      - uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: your-dockerhub-username/springboot-docker-app:latest
</code></pre>
<hr>
<h3 id="set-secrets-in-github-repository">🛡️ Set Secrets in GitHub Repository</h3>
<ul>
<li><code>DOCKER_USERNAME</code>: Docker Hub username</li>
<li><code>DOCKER_PASSWORD</code>: Docker Hub password or token</li>
</ul>
<p>Push to <code>main</code> branch builds and pushes image automatically.</p>
</details>
<hr>
<h1 id="docker-composeyml-file">docker-compose.yml file</h1>
<details>
<summary><strong>docker-compose.yml samples</strong></summary>
<pre><code class="language-yaml">
services:
  db:
    container_name: opc-hub
    image: postgres:17
    volumes:
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - &quot;5432:5432&quot;
    environment:
      POSTGRES_USER: your_user
      POSTGRES_PASSWORD: your_password
      POSTGRES_DB: your_database
</code></pre>
<p>ChatGPT sample:</p>
<pre><code class="language-yaml">
version: &#x27;3.8&#x27;

services:
  db:
    image: postgres:17
    container_name: postgres-db
    restart: always
    environment:
      POSTGRES_USER: your_user
      POSTGRES_PASSWORD: your_password
      POSTGRES_DB: your_database
    ports:
      - &quot;5432:5432&quot;
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
</code></pre>
<hr>
<h3 id="run-this-docker-composeyml">Run this docker-compose.yml</h3>
<p>Go to folder with <code>docker-compose.yml</code>:</p>
<pre><code class="language-bash">
docker-compose up
</code></pre>
</details>
<hr>
<h1 id="curl-commands">CURL Commands</h1>
<details>
<summary><strong>Common curl commands for API testing</strong></summary>
<h3 id="1-basic-http-get">1. Basic HTTP GET</h3>
<pre><code class="language-bash">
curl http://localhost:8080
</code></pre>
<h3 id="2-get-with-custom-path">2. GET with custom path</h3>
<pre><code class="language-bash">
curl http://localhost:8080/api/users
</code></pre>
<h3 id="3-get-with-headers-auth">3. GET with headers (Auth)</h3>
<pre><code class="language-bash">
curl -H &quot;Authorization: Bearer &lt;token&gt;&quot; http://localhost:8080/api/users
</code></pre>
<h3 id="4-post-with-json-data">4. POST with JSON data</h3>
<pre><code class="language-bash">
curl -X POST http://localhost:8080/api/users \
     -H &quot;Content-Type: application/json&quot; \
     -d &#x27;{&quot;name&quot;: &quot;John&quot;, &quot;email&quot;: &quot;john@example.com&quot;}&#x27;
</code></pre>
<h3 id="5-put-update">5. PUT (update)</h3>
<pre><code class="language-bash">
curl -X PUT http://localhost:8080/api/users/1 \
     -H &quot;Content-Type: application/json&quot; \
     -d &#x27;{&quot;name&quot;: &quot;Jane&quot;}&#x27;
</code></pre>
<h3 id="6-delete-request">6. DELETE request</h3>
<pre><code class="language-bash">
curl -X DELETE http://localhost:8080/api/users/1
</code></pre>
<h3 id="7-see-full-http-response">7. See full HTTP response</h3>
<pre><code class="language-bash">
curl -i http://localhost:8080/api/users
</code></pre>
<h3 id="8-save-response-to-file">8. Save response to file</h3>
<pre><code class="language-bash">
curl http://localhost:8080/api/data -o output.json
</code></pre>
<h3 id="9-follow-redirects">9. Follow redirects</h3>
<pre><code class="language-bash">
curl -L http://localhost:8080/redirect-me
</code></pre>
<h3 id="10-form-submission-x-www-form-urlencoded">10. Form submission (x-www-form-urlencoded)</h3>
<pre><code class="language-bash">
curl -X POST http://localhost:8080/login \
     -d &quot;username=admin&amp;password=secret&quot;
</code></pre>
<h3 id="11-basic-authentication">11. Basic Authentication</h3>
<pre><code class="language-bash">
curl -u admin:secret http://localhost:8080/secure
</code></pre>
<h3 id="12-send-custom-headers">12. Send custom headers</h3>
<pre><code class="language-bash">
curl -H &quot;X-Request-ID: abc123&quot; http://localhost:8080/api
</code></pre>
<h3 id="13-upload-a-file">13. Upload a file</h3>
<pre><code class="language-bash">
curl -F &quot;file=@/path/to/file.txt&quot; http://localhost:8080/upload
</code></pre>
<h3 id="14-test-docker-container-api">14. Test Docker container API</h3>
<pre><code class="language-bash">
docker run -p 8800:8080 my-spring-app
curl http://localhost:8800/actuator/health
</code></pre>
<hr>
<h3 id="bonus-curl-cheat-sheet-summary">Bonus: Curl Cheat Sheet Summary</h3>
<table>
<thead><tr>
<th>Task</th>
<th>Command</th>
</tr></thead><tbody>
<tr>
<td>Basic GET</td>
<td><code>curl http://localhost:8080</code></td>
</tr>
<tr>
<td>POST JSON</td>
<td><code>curl -X POST -H &quot;Content-Type: application/json&quot; -d &#x27;{&quot;key&quot;:&quot;val&quot;}&#x27; URL</code></td>
</tr>
<tr>
<td>PUT/DELETE</td>
<td><code>curl -X PUT/DELETE URL</code></td>
</tr>
<tr>
<td>Auth Header</td>
<td><code>curl -H &quot;Authorization: Bearer TOKEN&quot; URL</code></td>
</tr>
<tr>
<td>Basic Auth</td>
<td><code>curl -u user:pass URL</code></td>
</tr>
<tr>
<td>Follow Redirect</td>
<td><code>curl -L URL</code></td>
</tr>
<tr>
<td>Save Output</td>
<td><code>curl URL -o file.txt</code></td>
</tr>
<tr>
<td>Show Headers</td>
<td><code>curl -i URL</code></td>
</tr>
</tbody></table>
</details>
<hr>
<h1 id="other-most-used-commands">Other Most Used Commands</h1>
<details>
<summary><strong>Essential tools used alongside Docker & APIs</strong></summary>
<h3 id="1-wget-simpler-alternative-to-curl-downloads">1. wget – simpler alternative to curl (downloads)</h3>
<pre><code class="language-bash">
wget http://localhost:8080/file.zip
</code></pre>
<h3 id="2-httpie-human-friendly-curl-alternative">2. httpie – human-friendly curl alternative</h3>
<pre><code class="language-bash">
http GET http://localhost:8080/api/users
http POST http://localhost:8080/api/users name=John
</code></pre>
<p>Install with:</p>
<pre><code class="language-bash">
pip install httpie
</code></pre>
<h3 id="3-ping-test-hostip-connectivity">3. ping – test host/IP connectivity</h3>
<pre><code class="language-bash">
ping localhost
ping google.com
</code></pre>
<h3 id="4-netstat-ss-check-active-ports">4. netstat / ss – check active ports</h3>
<pre><code class="language-bash">
netstat -tuln
ss -tuln
</code></pre>
<h3 id="5-telnet-nc-netcat-test-port-connectivity">5. telnet / nc (netcat) – test port connectivity</h3>
<pre><code class="language-bash">
telnet localhost 8080
nc -zv localhost 8080
</code></pre>
<h3 id="6-jq-json-viewerparser">6. jq – JSON viewer/parser</h3>
<pre><code class="language-bash">
curl localhost:8080/api | jq
</code></pre>
<p>Install with:</p>
<pre><code class="language-bash">
sudo apt install jq
# or on Mac
brew install jq
</code></pre>
<h3 id="7-docker-logs-debug-container-output">7. docker logs – debug container output</h3>
<pre><code class="language-bash">
docker logs &lt;container-name&gt;
</code></pre>
<h3 id="8-docker-exec-run-commands-inside-container">8. docker exec – run commands inside container</h3>
<pre><code class="language-bash">
docker exec -it &lt;container-name&gt; bash
</code></pre>
<h3 id="9-kubectl-kubernetes-cli">9. kubectl – Kubernetes CLI</h3>
<pre><code class="language-bash">
kubectl get pods
kubectl logs &lt;pod-name&gt;
kubectl exec -it &lt;pod-name&gt; -- bash
</code></pre>
<h3 id="10-lsof-check-which-process-uses-a-port">10. lsof – check which process uses a port</h3>
<pre><code class="language-bash">
lsof -i :8080
</code></pre>
<hr>
<h3 id="summary-table">Summary Table</h3>
<table>
<thead><tr>
<th>Tool</th>
<th>Purpose</th>
</tr></thead><tbody>
<tr>
<td>http (httpie)</td>
<td>Easier curl alternative</td>
</tr>
<tr>
<td>ping, telnet, nc</td>
<td>Connectivity checks</td>
</tr>
<tr>
<td>wget</td>
<td>File downloads</td>
</tr>
<tr>
<td>jq</td>
<td>Pretty print/filter JSON</td>
</tr>
<tr>
<td>netstat, ss, lsof</td>
<td>Port/process checks</td>
</tr>
<tr>
<td>docker logs/exec</td>
<td>Container debugging</td>
</tr>
<tr>
<td>kubectl</td>
<td>Kubernetes management</td>
</tr>
</tbody></table>
</details>
<hr>
<h1 id="docker-trouble-shoots">Docker Trouble shoots</h1>
<hr>
<details>
<summary><strong>Docker Trouble shoots</strong></summary>
<ul>
<li>If <code>docker ps</code> shows error or no response, <strong>make sure Docker Desktop (or Docker daemon) is running</strong>.</li>
</ul>
<ul>
<li>Check Docker service status:</li>
</ul>
<pre><code class="language-bash">
# On Linux
sudo systemctl status docker

# Start Docker if not running
sudo systemctl start docker
</code></pre>
<ul>
<li>Common issues &amp; fixes:</li>
</ul>
<ul>
<li><strong>Docker daemon not running</strong>: Start Docker Desktop or the Docker service.</li>
</ul>
<ul>
<li><strong>Permission denied</strong>: Run docker commands with <code>sudo</code> or add your user to <code>docker</code> group:</li>
</ul>
<p>  ```bash</p>
<p>  sudo usermod -aG docker $USER</p>
<p>  newgrp docker</p>
<p>  ```</p>
<ul>
<li><strong>Port conflicts</strong>: Make sure ports required by your containers or Docker are free.</li>
</ul>
<ul>
<li><strong>Image pull failures</strong>: Check internet connection or Docker Hub credentials.</li>
</ul>
<ul>
<li><strong>Disk space full</strong>: Clean unused Docker objects with</li>
</ul>
<p>  ```bash</p>
<p>  docker system prune -a</p>
<p>  ```</p>
<ul>
<li><strong>Restart Docker Desktop</strong> can fix many transient problems.</li>
</ul>
<ul>
<li>Use logs and verbose flags to diagnose:</li>
</ul>
<pre><code class="language-bash">
docker logs &lt;container-name&gt;
docker info
docker system df
</code></pre>
</details>
<hr>
<h1 id="best-practices-for-reducing-docker-image-size">🚀 Best Practices for Reducing Docker Image Size</h1>
<p>Reducing image size is important because smaller images:</p>
<ul>
<li>⚡ <strong>Build faster</strong> during CI/CD.</li>
<li>🚀 <strong>Deploy faster</strong> to production.</li>
<li>💾 <strong>Consume less storage</strong> in registries and on servers.</li>
<li>🔒 <strong>Reduce attack surface</strong> by having fewer unnecessary packages.</li>
</ul>
<hr>
<details>
<summary><b>1. 🪶 Choose a Minimal Base Image</b></summary>
<p>Instead of using large OS images like <strong>Ubuntu</strong> or <strong>Debian</strong>, use <strong>Alpine</strong> or <strong>Scratch</strong>.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-dockerfile">
# ❌ Bad (large)
FROM ubuntu:20.04  

# ✅ Good (small)
FROM alpine:3.19
</code></pre>
<p>📊 <strong>Why?</strong></p>
<ul>
<li>Alpine: \~5 MB</li>
<li>Ubuntu: \~70–100 MB</li>
</ul>
</details>
<hr>
<details>
<summary><b>2. 🏗️ Use Multi-Stage Builds</b></summary>
<p>Compile your app in one stage, then copy only the required output to a final <strong>lightweight runtime stage</strong>.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-dockerfile">
# Stage 1: Build
FROM golang:1.22 AS builder
WORKDIR /app
COPY .. .
RUN go build -o myapp

# Stage 2: Minimal runtime
FROM alpine:3.19
WORKDIR /app
COPY --from=builder /app/myapp .
CMD [&quot;./myapp&quot;]
</code></pre>
<p>✅ Result: Production image contains only the compiled binary, not build tools or dependencies.</p>
</details>
<hr>
<details>
<summary><b>3. 🧹 Remove Unnecessary Files</b></summary>
<p>Always clear caches and temporary files after installing packages.</p>
<p><strong>Alpine Example:</strong></p>
<pre><code class="language-dockerfile">
RUN apk add --no-cache git \
    &amp;&amp; rm -rf /var/cache/apk/* /tmp/*
</code></pre>
<p><strong>Debian/Ubuntu Example:</strong></p>
<pre><code class="language-dockerfile">
RUN apt-get update &amp;&amp; apt-get install -y git \
    &amp;&amp; rm -rf /var/lib/apt/lists/*
</code></pre>
</details>
<hr>
<details>
<summary><b>4. 🧩 Combine RUN Instructions</b></summary>
<p>Each <code>RUN</code> command creates a new <strong>image layer</strong>. Combine related commands to avoid unnecessary layers.</p>
<p><strong>Bad Example:</strong></p>
<pre><code class="language-dockerfile">
RUN apt-get update
RUN apt-get install -y git
RUN rm -rf /var/lib/apt/lists/*
</code></pre>
<p><strong>Good Example:</strong></p>
<pre><code class="language-dockerfile">
RUN apt-get update &amp;&amp; apt-get install -y git \
    &amp;&amp; rm -rf /var/lib/apt/lists/*
</code></pre>
</details>
<hr>
<details>
<summary><b>5. 🚫 Use .dockerignore</b></summary>
<p>Prevent large, unnecessary files (like <code>.git</code>, <code>node_modules</code>, logs) from being sent to the <strong>Docker build context</strong>.</p>
<p><strong>Example <code>.dockerignore</code>:</strong></p>
<pre><code class="language-">
.git
node_modules
*.log
*.tmp
</code></pre>
<p>📉 <strong>Why?</strong></p>
<p>Smaller build context → faster builds → smaller final images.</p>
</details>
<hr>
<details>
<summary><b>✅ Summary: Docker Image Size Best Practices</b></summary>
<ul>
<li>🪶 Use <strong>small base images</strong> (<code>alpine</code>, <code>slim</code>, <code>scratch</code>).</li>
<li>🏗️ Apply <strong>multi-stage builds</strong>.</li>
<li>🧹 Remove <strong>caches &amp; temp files</strong>.</li>
<li>🚫 Use <strong>.dockerignore</strong> effectively.</li>
<li>🧩 Combine commands into <strong>fewer layers</strong>.</li>
<li>🎯 Avoid copying <strong>unnecessary files</strong>.</li>
</ul>
</details>
<hr>
<h1 id="docker-image-optimization-flow">🔄 Docker Image Optimization Flow</h1>
<details>
<summary><strong>🔄 Docker Image Optimization Flow</strong></summary>
<pre><code class="language-text">
          ┌────────────────────────┐
          │   Start: Build Image   │
          └───────────┬────────────┘
                      │
                      ▼
       ┌──────────────────────────────┐
       │ 1. Choose Minimal Base Image │
       │   (alpine / slim / scratch)  │
       └───────────┬──────────────────┘
                   │
                   ▼
       ┌──────────────────────────────┐
       │ 2. Use Multi-Stage Builds    │
       │   (build → runtime)          │
       └───────────┬──────────────────┘
                   │
                   ▼
       ┌──────────────────────────────┐
       │ 3. Remove Unnecessary Files  │
       │   (caches, tmp, pkg lists)   │
       └───────────┬──────────────────┘
                   │
                   ▼
       ┌──────────────────────────────┐
       │ 4. Combine RUN Instructions  │
       │   (fewer layers)             │
       └───────────┬──────────────────┘
                   │
                   ▼
       ┌──────────────────────────────┐
       │ 5. Use .dockerignore         │
       │   (exclude big/unneeded dirs)│
       └───────────┬──────────────────┘
                   │
                   ▼
       ┌──────────────────────────────┐
       │        Final Runtime         │
       │   ✅ Small, Secure Image     │
       └──────────────────────────────┘
</code></pre>
</details>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = dockerContentData;
}
