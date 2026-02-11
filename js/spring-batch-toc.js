// Spring Batch - Table of Contents Data
const springBatchTocData = `<a href="#spring-batch" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="spring-batch">Spring Batch</a>
<a href="#enablebatchprocessing" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="enablebatchprocessing">@EnableBatchProcessing</a>
<a href="#stepscope" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="stepscope">@StepScope</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = springBatchTocData;
}
