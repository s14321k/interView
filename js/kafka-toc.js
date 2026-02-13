// Kafka - Table of Contents Data
const kafkaTocData = `<a href="#kafka" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="kafka">Kafka</a>
<a href="#kafka-performance-design-choices" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="kafka-performance-design-choices">⚡ Kafka Performance Design Choices</a>
<a href="#why-kafka-fast" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="why-kafka-fast">Why Kafka Fast</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = kafkaTocData;
}
