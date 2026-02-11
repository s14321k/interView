// Sql Root Queries - Table of Contents Data
const sqlrootqueriesTocData = `<a href="#mysql-user-management-privileges-cheat-sheet" class="toc-item toc-level-{item["level"]}" style="padding-left: 0px" data-target="mysql-user-management-privileges-cheat-sheet">MySQL User Management &amp; Privileges Cheat Sheet</a>
<a href="#summary-example-workflow-to-create-and-grant-user-privileges" class="toc-item toc-level-{item["level"]}" style="padding-left: 40px" data-target="summary-example-workflow-to-create-and-grant-user-privileges">Summary example workflow to create and grant user privileges:</a>`;

if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = sqlrootqueriesTocData;
}
