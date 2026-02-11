// Git - Table of Contents Data
const gitTocData = `<a href="#git-github-qa-and-commands" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="git-github-qa-and-commands">Git &amp; GitHub Q\&amp;A and Commands</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = gitTocData;
}
