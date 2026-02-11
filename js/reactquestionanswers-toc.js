// Reactquestionanswers - Table of Contents Data
const reactquestionanswersTocData = `<a href="#react-interview-questions-answers" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="react-interview-questions-answers">React Interview Questions &amp; Answers</a>
<a href="#table-of-contents" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="table-of-contents">Table of Contents</a>
<a href="#table-of-contents" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="table-of-contents">Table of Contents</a>
<a href="#core-react" class="toc-item toc-level-{item["level"]}" style="padding-left: 20px" data-target="core-react">Core React</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = reactquestionanswersTocData;
}
