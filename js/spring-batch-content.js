// Spring Batch - Content Data
const springBatchContentData = `<h1 id="spring-batch">Spring Batch</h1>
<p><code>JobLauncher</code> Interface &amp;rarr; .run() &amp;rarr; <code>Job</code> &amp;rarr; <code>Step</code>(Combination of <code>ItemReader</code> <em>Source</em>, <code>ItemProcessor</code>, <code>ItemWriter</code> <em>Destination</em>) </p>
<p>Job can have multiple steps and and steps can have multiple ItemReader, Processor and Writer.</p>
<p>------------ &amp;darr; ------------</p>
<p><code>JobRepository</code> (Helps to maitain state of job wherther succeeded or failed)</p>
<h2 id="enablebatchprocessing">@EnableBatchProcessing</h2>
<ul>
<li>Default configuration will be JobRepository, JobRegistory and JobLauncher</li>
</ul>
<h2 id="stepscope">@StepScope</h2>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = springBatchContentData;
}
