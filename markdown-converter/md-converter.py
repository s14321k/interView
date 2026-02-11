#!/usr/bin/env python3
"""
Universal Markdown to Interactive HTML Converter
Converts markdown files to the Learning Hub format with separated JS files
"""

import re
import html as html_module
import sys
import os

def create_id(title):
    """Create URL-friendly ID from title"""
    header_id = re.sub(r'[^\w\s-]', '', title.lower())
    header_id = re.sub(r'[\s_]+', '-', header_id)
    return header_id

def convert_markdown_to_html(markdown_content):
    """Convert markdown content to HTML with TOC"""
    lines = markdown_content.split('\n')
    
    html_parts = []
    toc_items = []
    in_code_block = False
    code_lang = ''
    in_list = False
    in_table = False
    
    for i, line in enumerate(lines):
        # Skip TOC comments
        if line.startswith('<!--'):
            continue

        # // ...existing code...
        if list_match:
            if not in_list:
                html_parts.append('<ul>')
                in_list = True
            content_text = list_match.group(3)
-            # Process inline formatting
-            content_text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', content_text)
-            content_text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', content_text)
-            content_text = re.sub(r'`(.+?)`', r'<code>\1</code>', content_text)
+            # Process inline formatting
+            content_text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', content_text)
+            content_text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', content_text)
+            content_text = re.sub(r'`(.+?)`', r'<code>\1</code>', content_text)
+            # Images: ![alt](url)
+            content_text = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', r'<img src="\2" alt="\1">', content_text)
+            # Links: [text](url)
+            content_text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', content_text)
            html_parts.append(f'<li>{content_text}</li>')
            continue
        else:
        if in_list:
            html_parts.append('</ul>')
            in_list = False
        @@
-        if line.strip() and not line.startswith('#'):
-            text = line
-            text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
-            text = re.sub(r'\*([^*]+?)\*', r'<em>\1</em>', text)
-            text = re.sub(r'`(.+?)`', r'<code>\1</code>', text)
-            html_parts.append(f'<p>{text}</p>')
+        if line.strip() and not line.startswith('#'):
+            text = line
+            # Inline formatting
+            text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
+            text = re.sub(r'\*([^*]+?)\*', r'<em>\1</em>', text)
+            text = re.sub(r'`(.+?)`', r'<code>\1</code>', text)
+            # Images
+            text = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', r'<img src="\2" alt="\1">', text)
+            # Links
+            text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', text)
+            html_parts.append(f'<p>{text}</p>')
        # // ...existing code...



# Handle code blocks
        if line.startswith('```'):
            if not in_code_block:
                in_code_block = True
                code_lang = line[3:].strip()
                html_parts.append(f'<pre><code class="language-{code_lang}">')
            else:
                in_code_block = False
                html_parts.append('</code></pre>')
            continue
        
        if in_code_block:
            html_parts.append(html_module.escape(line))
            continue
        
        # Handle headers
        header_match = re.match(r'^(#{1,6})\s+(.+)$', line)
        if header_match:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            
            level = len(header_match.group(1))
            title = header_match.group(2).strip()
            header_id = create_id(title)
            
            html_parts.append(f'<h{level} id="{header_id}">{html_module.escape(title)}</h{level}>')
            
            if level <= 3:
                toc_items.append({
                    'level': level,
                    'title': title,
                    'id': header_id
                })
            continue
        
        # Handle horizontal rules
        if line.strip() in ['---', '***', '___']:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            html_parts.append('<hr>')
            continue
        
        # Handle lists
        list_match = re.match(r'^(\s*)([-*+]|\d+\.)\s+(.+)$', line)
        if list_match:
            if not in_list:
                html_parts.append('<ul>')
                in_list = True
            content_text = list_match.group(3)
            # Process inline formatting
            content_text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', content_text)
            content_text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', content_text)
            content_text = re.sub(r'`(.+?)`', r'<code>\1</code>', content_text)
            html_parts.append(f'<li>{content_text}</li>')
            continue
        else:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
        
        # Handle blockquotes
        if line.startswith('>'):
            html_parts.append(f'<blockquote>{html_module.escape(line[1:].strip())}</blockquote>')
            continue
        
        # Handle tables
        if '|' in line and len(line.strip()) > 2:
            cells = [cell.strip() for cell in line.split('|')]
            cells = [c for c in cells if c]
            
            if cells and not all(c in ['-', ':', ' '] or set(c) <= set('-: ') for c in cells):
                if not in_table:
                    html_parts.append('<table>')
                    in_table = True
                    if i + 1 < len(lines) and set(lines[i+1].replace('|', '').replace(' ', '')) <= set('-:'):
                        html_parts.append('<thead><tr>')
                        for cell in cells:
                            html_parts.append(f'<th>{html_module.escape(cell)}</th>')
                        html_parts.append('</tr></thead><tbody>')
                    else:
                        html_parts.append('<tr>')
                        for cell in cells:
                            html_parts.append(f'<td>{html_module.escape(cell)}</td>')
                        html_parts.append('</tr>')
                else:
                    html_parts.append('<tr>')
                    for cell in cells:
                        html_parts.append(f'<td>{html_module.escape(cell)}</td>')
                    html_parts.append('</tr>')
                continue
            elif in_table and all(c in ['-', ':', ' ', '|'] for c in line):
                continue
        else:
            if in_table:
                html_parts.append('</tbody></table>')
                in_table = False
        
        # Regular paragraphs
        if line.strip() and not line.startswith('#'):
            text = line
            text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
            text = re.sub(r'\*([^*]+?)\*', r'<em>\1</em>', text)
            text = re.sub(r'`(.+?)`', r'<code>\1</code>', text)
            html_parts.append(f'<p>{text}</p>')
    
    if in_list:
        html_parts.append('</ul>')
    if in_table:
        html_parts.append('</tbody></table>')
    
    # Generate TOC HTML
    toc_html_parts = []
    for item in toc_items:
        indent = (item['level'] - 1) * 20
        toc_html_parts.append(
            f'<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" '
            f'style="padding-left: {indent}px" data-target="{item["id"]}">'
            f'{html_module.escape(item["title"])}</a>'
        )
    
    content_html = '\n'.join(html_parts)
    toc_html = '\n'.join(toc_html_parts)
    
    return content_html, toc_html, len(toc_items)

def create_page_files(page_name, page_title, description, content_html, toc_html, output_dir):
    """Create all files for a new page"""
    
    # Create variable name (camelCase)
    var_name = ''.join(word.capitalize() for word in page_name.split('-'))
    var_name = var_name[0].lower() + var_name[1:]
    
    # Create TOC JavaScript
    toc_js = f'''// {page_title} - Table of Contents Data
const {var_name}TocData = `{toc_html}`;

// Insert TOC into page
if (document.getElementById('toc')) {{
    document.getElementById('toc').innerHTML = {var_name}TocData;
}}
'''
    
    # Create Content JavaScript
    content_js = f'''// {page_title} - Content Data
const {var_name}ContentData = `{content_html}`;

// Insert content into page
if (document.getElementById('content')) {{
    document.getElementById('content').innerHTML = {var_name}ContentData;
}}
'''
    
    # Create HTML page
    html_page = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{page_title} - Interactive Guide</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Playfair+Display:wght@700;900&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <button class="menu-toggle" id="menuToggle">☰</button>
    
    <div class="container">
        <nav class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h1>{page_title}</h1>
                <p>Interactive Guide</p>
                <a href="../index.html" class="home-button">
                    <span>🏠</span>
                    <span>Home</span>
                </a>
            </div>
            <div class="toc" id="toc">
                <!-- TOC will be loaded from {page_name}-toc.js -->
            </div>
        </nav>

        <main class="content">
            <div class="content-header">
                <h1>{page_title}</h1>
                <p>{description}</p>
            </div>
            
            <div id="content">
                <!-- Content will be loaded from {page_name}-content.js -->
            </div>
        </main>
    </div>

    <button class="scroll-top" id="scrollTop">↑</button>

    <!-- Load page data using the combined safe loader -->
    <script src="../js/safe-loader.js" data-page="{page_name}" data-load="toc,content"></script>
    
    <!-- Load main JavaScript for interactions -->
    <script src="../js/main.js"></script>
</body>
</html>
'''
    
    # Write files
    js_dir = os.path.join(output_dir, 'js')
    pages_dir = os.path.join(output_dir, 'pages')
    
    os.makedirs(js_dir, exist_ok=True)
    os.makedirs(pages_dir, exist_ok=True)
    
    with open(os.path.join(js_dir, f'{page_name}-toc.js'), 'w', encoding='utf-8') as f:
        f.write(toc_js)
    
    with open(os.path.join(js_dir, f'{page_name}-content.js'), 'w', encoding='utf-8') as f:
        f.write(content_js)
    
    with open(os.path.join(pages_dir, f'{page_name}.html'), 'w', encoding='utf-8') as f:
        f.write(html_page)
    
    return {
        'toc_size': len(toc_js),
        'content_size': len(content_js),
        'html_size': len(html_page)
    }

def main():
    """Main conversion function"""
    if len(sys.argv) < 4:
        print("Usage: python converter.py <markdown_file> <page-name> <Page Title> <description>")
        print("Example: python converter.py SpringBoot.md spring-boot 'Spring Boot' 'Spring Boot guide'")
        sys.exit(1)
    
    markdown_file = sys.argv[1]
    page_name = sys.argv[2]
    page_title = sys.argv[3]
    description = sys.argv[4] if len(sys.argv) > 4 else f"Comprehensive guide to {page_title}"
    
    # Read markdown file
    with open(markdown_file, 'r', encoding='utf-8') as f:
        markdown_content = f.read()
    
    # Convert to HTML
    print(f"Converting {markdown_file}...")
    content_html, toc_html, toc_count = convert_markdown_to_html(markdown_content)
    
    print(f"Generated {toc_count} TOC items")
    print(f"Content length: {len(content_html)} characters")
    
    # Create page files
    output_dir = '/mnt/user-data/outputs/project'
    sizes = create_page_files(page_name, page_title, description, content_html, toc_html, output_dir)
    
    print(f"\n✅ Successfully created:")
    print(f"   - pages/{page_name}.html ({sizes['html_size']} bytes)")
    print(f"   - js/{page_name}-toc.js ({sizes['toc_size']} bytes)")
    print(f"   - js/{page_name}-content.js ({sizes['content_size']} bytes)")
    print(f"\n📝 Next steps:")
    print(f"   1. Update index.html to activate the card for '{page_title}'")
    print(f"   2. Test the page by opening index.html in a browser")

if __name__ == '__main__':
    main()
