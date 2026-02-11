 ============================================
 TEMPLATE TOC JavaScript File
 ============================================
 File name [page-name]-toc.js
 Example spring-framework-toc.js
 ============================================

 [PAGE NAME] - Table of Contents Data
const [pageName]TocData = `
a href=#section-1 class=toc-item toc-level-1 data-target=section-1Section 1a
a href=#section-1-1 class=toc-item toc-level-2 style=padding-left 20px data-target=section-1-1Subsection 1.1a
a href=#section-1-2 class=toc-item toc-level-2 style=padding-left 20px data-target=section-1-2Subsection 1.2a
a href=#section-2 class=toc-item toc-level-1 data-target=section-2Section 2a
`;

 Insert TOC into page
if (document.getElementById('toc')) {
    document.getElementById('toc').innerHTML = [pageName]TocData;
}

 ============================================
 NOTES
 ============================================
 1. Replace [pageName] with camelCase name (e.g., springFramework)
 2. Level 1 headers class=toc-item toc-level-1
 3. Level 2 headers class=toc-item toc-level-2 style=padding-left 20px
 4. Level 3 headers class=toc-item toc-level-3 style=padding-left 40px
 5. Each level adds 20px padding
 6. data-target must match the id of the heading in content
 ============================================



 ============================================
 TEMPLATE Content JavaScript File
 ============================================
 File name [page-name]-content.js
 Example spring-framework-content.js
 ============================================

 [PAGE NAME] - Content Data
const [pageName]ContentData = `
h1 id=section-1Section 1h1
pYour content here...p

h2 id=section-1-1Subsection 1.1h2
pMore content...p

h2 id=section-1-2Subsection 1.2h2
pMore content...p

h1 id=section-2Section 2h1
pYour content here...p

h3 id=code-exampleCode Exampleh3
precode class=language-java
public class Example {
    public static void main(String[] args) {
        System.out.println(Hello World!);
    }
}
codepre

table
    thead
        tr
            thColumn 1th
            thColumn 2th
        tr
    thead
    tbody
        tr
            tdData 1td
            tdData 2td
        tr
    tbody
table
`;

 Insert content into page
if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = [pageName]ContentData;
}

 ============================================
 NOTES
 ============================================
 1. Replace [pageName] with camelCase name (e.g., springFramework)
 2. Each heading must have a unique id attribute
 3. TOC data-target values must match heading ids
 4. Use template literals (backticks) for multi-line content
 5. Supported HTML elements
    - h1 to h6 (headings)
    - p (paragraphs)
    - ul, ol, li (lists)
    - precode (code blocks)
    - table, thead, tbody, tr, th, td (tables)
    - blockquote (quotes)
    - strong, em, code (inline formatting)
    - hr (horizontal rule)
 ============================================