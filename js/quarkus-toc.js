// Quarkus - Table of Contents Data
const quarkusTocData = `<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="big-picture-quarkus-curated-optimized-stack">Big picture: Quarkus = curated, optimized stack</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="arc-quarkus-cdi-implementation">ARC — Quarkus’ CDI implementation</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-arc-is-used-for">What ARC is used for</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-makes-arc-special">What makes ARC special</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="resteasy-jax-rs-implementation">RESTEasy — JAX-RS implementation</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-resteasy-does">What RESTEasy does</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="resteasy-jackson-json-binding">RESTEasy Jackson — JSON binding</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="what-it-handles">What it handles</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="how-these-pieces-work-together-request-flow">How these pieces work together (request flow)</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="others-youll-commonly-see-with-these">“Others” you’ll commonly see with these</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="vertx">Vert.x</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="smallrye">SmallRye</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="hibernate-orm-panache">Hibernate ORM / Panache</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="narayana">Narayana</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="key-quarkus-philosophy-difference-vs-spring-java-ee">Key Quarkus philosophy difference (vs Spring / Java EE)</a>
<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="when-you-choose-what">When you choose what</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = quarkusTocData;
}
