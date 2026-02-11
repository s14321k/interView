// Hibernate - Table of Contents Data
const hibernateTocData = `<a href="#hibernate-concepts-explained" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="hibernate-concepts-explained">Hibernate Concepts Explained</a>
<a href="#what-is-it" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-is-it">What is it?</a>
<a href="#why-use" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="why-use">Why use?</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example:</a>
<a href="#example-preparedstatement" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-preparedstatement">Example PreparedStatement:</a>
<a href="#example-stored-procedure-call" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-stored-procedure-call">Example Stored Procedure call:</a>
<a href="#example" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example">Example:</a>
<a href="#example-get" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-get">Example <code>get()</code>:</a>
<a href="#example-load" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-load">Example <code>load()</code>:</a>
<a href="#choose-hibernate-if" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="choose-hibernate-if">Choose Hibernate if:</a>
<a href="#choose-jpa-if" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="choose-jpa-if">Choose JPA if:</a>
<a href="#benefits" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="benefits">Benefits:</a>
<a href="#popular-pools" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="popular-pools">Popular pools:</a>
<a href="#example-spring-boot-config" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="example-spring-boot-config">Example Spring Boot config:</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = hibernateTocData;
}
