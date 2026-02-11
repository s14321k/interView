// Kafka - Table of Contents Data
const kafkaTocData = `<a href="#kafka" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="kafka">Kafka</a>
<a href="#kafka-performance-design-choices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="kafka-performance-design-choices">⚡ Kafka Performance Design Choices</a>
<a href="#why-kafka-fast" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="why-kafka-fast">Why Kafka Fast</a>
<a href="#whats-going-on" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="whats-going-on">What’s going on</a>
<a href="#the-3-valid-fixes-pick-one" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="the-3-valid-fixes-pick-one">The 3 valid fixes (pick ONE)</a>
<a href="#1-single-node-local-dev-setup-most-common" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="1-single-node-local-dev-setup-most-common">✅ <strong>1. Single-node / local / dev setup (most common)</strong></a>
<a href="#2-multi-node-cluster-define-initial-controllers" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="2-multi-node-cluster-define-initial-controllers">✅ <strong>2. Multi-node cluster – define initial controllers</strong></a>
<a href="#3-advanced-automation-case" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="3-advanced-automation-case">✅ <strong>3. Advanced / automation case</strong></a>
<a href="#quick-recommendation" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="quick-recommendation">Quick recommendation</a>
<a href="#kafka-cli-kafka-topicssh" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="kafka-cli-kafka-topicssh">Kafka CLI: kafka-topics.sh</a>
<a href="#to-run-in-docker-make-use-of-docker-compose-file-from-below-link" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="to-run-in-docker-make-use-of-docker-compose-file-from-below-link">To run in docker, make use of docker compose file from below link</a>
<a href="#evolution-of-message-queue-architectures" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="evolution-of-message-queue-architectures">📨 Evolution of Message Queue Architectures</a>
<a href="#ibm-mq-rabbitmq-kafka-pulsar" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="ibm-mq-rabbitmq-kafka-pulsar">IBM MQ → RabbitMQ → Kafka → Pulsar</a>
<a href="#summary-comparison" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary-comparison">⚙️ Summary Comparison</a>
<a href="#data-flow-overview" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="data-flow-overview">🔹 Data Flow Overview</a>
<a href="#why-it-matters" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="why-it-matters">🧠 Why It Matters</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = kafkaTocData;
}
