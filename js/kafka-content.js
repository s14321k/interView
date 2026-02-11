// Kafka - Content Data
const kafkaContentData = `<h1 id="kafka">Kafka</h1>
<h2 id="kafka-performance-design-choices">⚡ Kafka Performance Design Choices</h2>
<h3 id="why-kafka-fast">Why Kafka Fast</h3>
<p><a href="https://docs.conduktor.io/learn/fundamentals/what-is-apache-kafka">Kafkademy</a></p>
<details>
<summary><strong> Steps to setup kafka </strong></summary> 
<p><a href="https://docs.conduktor.io/learn/getting-started/install-windows">Kafka In windows using wsl2</a></p>
<p><a href="https://www.bilibili.com/video/BV17yNEeWER8?spm<em>id</em>from=333.788.videopod.episodes&amp;amp;lang=en&amp;amp;vd_source=233e6f9069beac6800b5ee1b3d47a6b4&amp;amp;p=22">udemy Video</a></p>
<p><a href="https://docs.conduktor.io/learn/getting-started/install-windows-kraft#installing-wsl2">Steps to follow</a></p>
<ul>
<li>Follow from the above link till the jdk installation. <strong>Note:</strong> Java version 21 will be compatible for new release of kafka.</li>
<li>Change 11 to 21 in the line <code>sudo apt-get update; sudo apt-get install -y java-21-amazon-corretto-jdk</code></li>
<li>Then go to link https://kafka.apache.org/community/downloads/ copy the link from binary download type `Binary download: kafka_2.13-4.1.1.tgz (asc, sha512)</li>
</ul>
<p>  4.1.0` https://dlcdn.apache.org/kafka/4.1.1/kafka_2.13-4.1.1.tgz</p>
<ul>
<li>Paste it in the ubuntu console <code>wget https://dlcdn.apache.org/kafka/4.1.1/kafka_2.13-4.1.1.tgz</code></li>
<li>Once done, at the bottom you will find the name of the file in console. Extract it using this <code>tar xzf kafka_2.13-4.1.1.tgz</code></li>
<li>Then type <code>ls</code> and see. Then <code>pwd</code> and see.</li>
<li>To find all the commands, type <code>ls kafka_2.13-4.1.1/bin/</code></li>
<li>Now try <code>kafka_2.13-4.1.1/bin/kafka-topics.sh</code></li>
<li>now go to the directory, type -&gt; <code>cd kafka_2.13-4.1.1/bin/</code> (Enter) and <code>pwd</code> (Enter), then copy the path shows bellow <code>/home/sarath/kafka_2.13-4.1.1/bin</code></li>
<li>now go back to home directory, <code>cd ../../</code> or <code>cd</code></li>
<li>now type <code>nano .bashrc</code>. This will take in to edit file.</li>
<li>now do this https://docs.conduktor.io/learn/getting-started/install-windows-kraft#setup-the-$path-environment-variable</li>
<li>go to the bottom of the line in the console and paste <code>PATH=&quot;$PATH:/home/sarath/kafka_2.13-4.1.1/bin&quot;</code></li>
<li>Now close the file <code>ctrl + X</code> and save.</li>
<li>Restart the ubuntu by close and open ubuntu and type <code>echo $PATH</code> and at the last line we can see the kafka bin.</li>
<li>Now type <code>kafka-topics.sh</code>. This should run in home page. If doesn&#x27;t run, then it is due to the path mismatch.</li>
<li>Now run kafka in kraft mode - https://docs.conduktor.io/learn/getting-started/install-windows-kraft#start-kafka</li>
<li>now no need to do like this as mentioned in the webpage <code>~/kafka_2.13-2.8.1/bin/kafka-storage.sh random-uuid</code>, just type <code>kafka-storage.sh random-uuid</code></li>
<li>now use the uuid here <code>kafka-storage.sh format -t &lt;uuid&gt; -c ~/kafka_2.13-2.8.1/config/server.properties</code></li>
<li>```</li>
</ul>
<p>    sarath@Sarath6A9Kumar:~$ kafka-storage.sh format -t 53zsuU1wQ<em>6Ldl4SKrh26g -c ~/kafka</em>2.13-4.1.1/config/server.properties</p>
<p>    Because controller.quorum.voters is not set on this controller, you must specify one of the following: --standalone, --initial-controllers, or --no-initial-controllers.</p>
<p>    ```</p>
<details>
<summary><strong> Select which one is needed </strong></summary>
<p>Yep — this is a <strong>KRaft mode</strong> thing, not a bug. Kafka is basically saying: <em>“I don’t know what kind of controller setup you’re using, so tell me.”</em></p>
<h3 id="whats-going-on">What’s going on</h3>
<p>In Kafka <strong>4.x (KRaft mode)</strong>, <code>kafka-storage.sh format</code> needs to know <strong>how controllers are initialized</strong>. Since your <code>server.properties</code> <strong>does not define</strong> <code>controller.quorum.voters</code>, Kafka can’t infer it automatically.</p>
<p>So you must explicitly choose <strong>one</strong> of these options.</p>
<hr>
<h2 id="the-3-valid-fixes-pick-one">The 3 valid fixes (pick ONE)</h2>
<h3 id="1-single-node-local-dev-setup-most-common">✅ <strong>1. Single-node / local / dev setup (most common)</strong></h3>
<p>Use <strong>standalone</strong> mode:</p>
<pre><code class="language-bash">
kafka-storage.sh format \
  -t 53zsuU1wQ_6Ldl4SKrh26g \
  -c ~/kafka_2.13-4.1.1/config/server.properties \
  --standalone
</code></pre>
<p>👉 Use this if:</p>
<ul>
<li>You have <strong>one broker</strong></li>
<li>You’re testing locally</li>
<li>No separate controller nodes</li>
</ul>
<p>This is what most people want.</p>
<hr>
<h3 id="2-multi-node-cluster-define-initial-controllers">✅ <strong>2. Multi-node cluster – define initial controllers</strong></h3>
<p>If this is a real cluster, you must tell Kafka <strong>who the controllers are</strong>:</p>
<pre><code class="language-bash">
kafka-storage.sh format \
  -t 53zsuU1wQ_6Ldl4SKrh26g \
  -c ~/kafka_2.13-4.1.1/config/server.properties \
  --initial-controllers 1@host1:9093,2@host2:9093,3@host3:9093
</code></pre>
<p>👉 Use this if:</p>
<ul>
<li>You’re setting up a <strong>KRaft quorum</strong></li>
<li>Multiple controller nodes exist</li>
<li>IDs and ports must match <code>node.id</code> and controller listeners</li>
</ul>
<hr>
<h3 id="3-advanced-automation-case">✅ <strong>3. Advanced / automation case</strong></h3>
<pre><code class="language-bash">
--no-initial-controllers
</code></pre>
<p>This is rare and usually used by orchestration systems. You can ignore this unless you <em>know</em> you need it.</p>
<hr>
<h2 id="quick-recommendation">Quick recommendation</h2>
<p>If you’re unsure → <strong>use <code>--standalone</code></strong></p>
<p>It’s safe, simple, and correct for 90% of setups.</p>
<hr>
</details>
<ul>
<li>Now open the <code>server.properties</code> from the path <code>/kafka_2.13-4.1.1/config</code> type <code>nano server.properties</code></li>
<li>Add line <code>controller.quorum.voters=1@localhost:9093</code> under <code>controller.quorum.bootstrap.servers=localhost:9093</code> save and run the command again <code>kafka-storage.sh format -t 53zsuU1wQ_6Ldl4SKrh26g -c ~/kafka_2.13-4.1.1/config/server.properties</code></li>
<li>Once format completed, run this cmd to start <code>kafka-server-start.sh ~/kafka_2.13-4.1.1/config/server.properties</code></li>
</ul>
<h2 id="kafka-cli-kafka-topicssh">Kafka CLI: kafka-topics.sh</h2>
<p><a href="https://docs.conduktor.io/learn/cli-tutorials/index">CLI tutorials</a></p>
<p><strong>Kafka Topic Management</strong></p>
<ul>
<li>Create Kafka Topics</li>
<li>List Kafka Topics</li>
<li>Describe Kafka Topics</li>
<li>Increase Partitions in a Kafka Topic</li>
<li>Delete a Kafka Topic</li>
</ul>
<p><strong><em>Kafka Cluster</strong></em></p>
<ul>
<li>logs</li>
<li>purchases</li>
<li>twitter_tweets</li>
<li>trucks_gps</li>
</ul>
<p><a href="https://www.conduktor.io/apache-kafka-for-beginners">Download code from here</a></p>
<h2 id="to-run-in-docker-make-use-of-docker-compose-file-from-below-link">To run in docker, make use of docker compose file from below link</h2>
</details>
<p><img src="../images/Kafka/WhyKafkaFast.jpg" alt="WhyKafkaFast"></p>
<p><img src="../images/Kafka/MessagingQueArchitech.gif" alt="MessagingQueArchitech"></p>
<p><a href="https://www.javainuse.com/spring/spring-boot-apache-kafka-hello-world">Kafka Hello World</a></p>
<h1 id="evolution-of-message-queue-architectures">📨 Evolution of Message Queue Architectures</h1>
<h3 id="ibm-mq-rabbitmq-kafka-pulsar">IBM MQ → RabbitMQ → Kafka → Pulsar</h3>
<hr>
<details>
<summary><strong>🔹 IBM MQ</strong></summary>
<ul>
<li><strong>Introduced:</strong> 1993 (originally called <em>MQSeries</em>).</li>
<li><strong>Renamed:</strong> WebSphere MQ in 2002 → IBM MQ in 2014.</li>
<li><strong>Overview:</strong>  </li>
</ul>
<p>  IBM MQ is one of the earliest enterprise-grade messaging systems, providing <strong>reliable, transactional message delivery</strong> between systems.</p>
<ul>
<li><strong>Key Strengths:</strong></li>
<li>Strong <strong>ACID guarantees</strong></li>
<li>Designed for <strong>banking and financial systems</strong></li>
<li>Robust <strong>message persistence</strong> and <strong>security</strong></li>
<li><strong>Industry Use:</strong> Still widely used in the financial sector, generating over <strong>$1 billion in revenue in 2020</strong>.</li>
</ul>
</details>
<hr>
<details>
<summary><strong>🔹 RabbitMQ</strong></summary>
<ul>
<li><strong>Architecture:</strong> Built on <strong>AMQP (Advanced Message Queuing Protocol)</strong>.</li>
<li><strong>Core Concept:</strong> Messages are sent to an <strong>Exchange</strong>, which routes them to <strong>Queues</strong> based on exchange type and routing keys.</li>
<li><strong>Exchange Types:</strong></li>
<li><strong>Direct:</strong> Message sent to queues with matching routing keys.</li>
<li><strong>Topic:</strong> Message sent to queues with matching patterns.</li>
<li><strong>Fanout:</strong> Message broadcast to all queues bound to the exchange.</li>
<li><strong>Flow:</strong>  </li>
</ul>
<p>  <strong>Producer → Exchange → Queue → Consumer</strong></p>
<ul>
<li><strong>Use Case:</strong>  </li>
</ul>
<p>  Ideal for <strong>task queues</strong>, <strong>message routing</strong>, and <strong>application-level communication</strong>.</p>
</details>
<hr>
<details>
<summary><strong>🔹 Kafka</strong></summary>
<ul>
<li><strong>Created by:</strong> LinkedIn, open-sourced in <strong>2011</strong>.</li>
<li><strong>Nature:</strong> A <strong>distributed event streaming platform</strong> optimized for <strong>high-throughput</strong> and <strong>low-latency</strong> data pipelines.</li>
<li><strong>Architecture Concepts:</strong></li>
<li><strong>Producer, Broker, Topic, Partition, Consumer</strong></li>
<li>Data is stored in an <strong>append-only log</strong> for fault tolerance.</li>
<li><strong>Advantages:</strong></li>
<li>Highly <strong>scalable and durable</strong></li>
<li>Efficient for <strong>real-time data streaming</strong></li>
<li>Simplifies <strong>event-driven architecture</strong></li>
<li><strong>Impact:</strong>  </li>
</ul>
<p>  Kafka’s design replaced many traditional <strong>AMQP-based systems</strong> and became the backbone of <strong>modern data pipelines</strong>.</p>
</details>
<hr>
<details>
<summary><strong>🔹 Pulsar</strong></summary>
<ul>
<li><strong>Developed by:</strong> Yahoo, now an <strong>Apache open-source project</strong>.</li>
<li><strong>Architecture:</strong> Designed as an <strong>all-in-one messaging and streaming platform</strong>.</li>
<li><strong>Key Strengths:</strong></li>
<li><strong>Two-layer architecture:</strong></li>
<li><strong>Serving Layer:</strong> Brokers handle message serving.</li>
<li><strong>Persistent Layer:</strong> BookKeeper manages durable message storage.</li>
<li><strong>Tiered Storage:</strong> Seamless integration with <strong>object storage (e.g., AWS S3)</strong> for long-term retention.</li>
<li><strong>Multi-tenancy &amp; Geo-replication:</strong> Built-in support for multi-region, cloud-native deployments.</li>
<li><strong>Dynamic Scaling:</strong> Easier <strong>partition migration</strong> and cluster elasticity than Kafka.</li>
<li><strong>Positioning:</strong>  </li>
</ul>
<p>  Pulsar combines <strong>message queuing + event streaming</strong> capabilities into one platform.</p>
</details>
<hr>
<h3 id="summary-comparison">⚙️ Summary Comparison</h3>
<table>
<thead><tr>
<th>Feature</th>
<th>IBM MQ</th>
<th>RabbitMQ</th>
<th>Kafka</th>
<th>Pulsar</th>
</tr></thead><tbody>
<tr>
<td><strong>Released</strong></td>
<td>1993</td>
<td>2007</td>
<td>2011</td>
<td>2016</td>
</tr>
<tr>
<td><strong>Type</strong></td>
<td>Enterprise Messaging</td>
<td>Message Broker</td>
<td>Event Streaming</td>
<td>Messaging + Streaming</td>
</tr>
<tr>
<td><strong>Protocol</strong></td>
<td>Proprietary</td>
<td>AMQP</td>
<td>Custom TCP</td>
<td>Custom</td>
</tr>
<tr>
<td><strong>Persistence</strong></td>
<td>Strong</td>
<td>Configurable</td>
<td>Log-based</td>
<td>Tiered (BookKeeper + Object Storage)</td>
</tr>
<tr>
<td><strong>Scalability</strong></td>
<td>Moderate</td>
<td>Moderate</td>
<td>High</td>
<td>Very High</td>
</tr>
<tr>
<td><strong>Ideal Use</strong></td>
<td>Financial systems</td>
<td>Application messaging</td>
<td>Event streaming, analytics</td>
<td>Cloud-native messaging &amp; storage</td>
</tr>
</tbody></table>
<hr>
<p>📘 <strong>In Summary:</strong>  </p>
<p>Message queue architectures have evolved from <strong>enterprise-centric, transactional systems (IBM MQ)</strong> to <strong>lightweight brokers (RabbitMQ)</strong>, then to <strong>distributed streaming systems (Kafka)</strong>, and finally to <strong>cloud-native unified platforms (Pulsar)</strong> — each iteration improving scalability, flexibility, and real-time data processing.</p>
<hr>
<details>
<summary><strong>1️⃣ Sequential I/O</strong></summary>
<p>Kafka’s first performance advantage comes from its reliance on <strong>Sequential I/O</strong>.  </p>
<p>Instead of randomly reading or writing data on disk, Kafka performs <strong>sequential writes</strong>, which are significantly faster and more predictable — allowing it to handle <strong>high-throughput message streams</strong> efficiently.</p>
</details>
<hr>
<details>
<summary><strong>2️⃣ Zero Copy Principle</strong></summary>
<p>The second major design choice behind Kafka’s exceptional performance is the <strong>Zero Copy Principle</strong>, which minimizes unnecessary data transfers between the <strong>application</strong> and <strong>kernel</strong> contexts.</p>
<hr>
<h3 id="data-flow-overview">🔹 Data Flow Overview</h3>
<p>Below is how data is transmitted between the <strong>producer</strong> and <strong>consumer</strong>, illustrating what <em>zero-copy</em> means.</p>
<hr>
<h4 id="step-1-producer-writes-data">🧩 Step 1: Producer Writes Data</h4>
<ul>
<li><strong>1.1 – 1.3:</strong> The producer writes data to disk sequentially.</li>
</ul>
<hr>
<h4 id="step-2-consumer-reads-data-without-zero-copy">❌ Step 2: Consumer Reads Data <em>Without</em> Zero-Copy</h4>
<table>
<thead><tr>
<th>Step</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td>2.1</td>
<td>Data is loaded from disk to OS cache.</td>
</tr>
<tr>
<td>2.2</td>
<td>Data is copied from OS cache to the Kafka application.</td>
</tr>
<tr>
<td>2.3</td>
<td>Kafka application copies the data into the socket buffer.</td>
</tr>
<tr>
<td>2.4</td>
<td>Data is copied from the socket buffer to the network card.</td>
</tr>
<tr>
<td>2.5</td>
<td>The network card sends data out to the consumer.</td>
</tr>
</tbody></table>
<hr>
<h4 id="step-3-consumer-reads-data-with-zero-copy">✅ Step 3: Consumer Reads Data <em>With</em> Zero-Copy</h4>
<table>
<thead><tr>
<th>Step</th>
<th>Description</th>
</tr></thead><tbody>
<tr>
<td>3.1</td>
<td>Data is loaded from disk to OS cache.</td>
</tr>
<tr>
<td>3.2</td>
<td>OS cache directly copies data to the network card via the <strong>sendfile()</strong> command.</td>
</tr>
<tr>
<td>3.3</td>
<td>The network card sends data out to the consumer.</td>
</tr>
</tbody></table>
<hr>
<h3 id="why-it-matters">🧠 Why It Matters</h3>
<p><strong>Zero-copy</strong> is essentially a shortcut that saves multiple redundant data copies between <strong>user space (application context)</strong> and <strong>kernel space</strong>, resulting in:</p>
<ul>
<li>Reduced <strong>CPU overhead</strong></li>
<li>Faster <strong>data transmission</strong></li>
<li>Higher <strong>throughput</strong> and <strong>lower latency</strong></li>
</ul>
</details>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = kafkaContentData;
}
