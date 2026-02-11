#!/usr/bin/env python3
"""
Batch Markdown to HTML Converter
Automatically converts all markdown files in a directory to interactive HTML pages
"""

import os
import sys
import re
import html as html_module

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
        if line.startswith('<!--'):
            continue
        
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
                toc_items.append({'level': level, 'title': title, 'id': header_id})
            continue
        
        if line.strip() in ['---', '***', '___']:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
            html_parts.append('<hr>')
            continue
        
        list_match = re.match(r'^(\s*)([-*+]|\d+\.)\s+(.+)$', line)
        if list_match:
            if not in_list:
                html_parts.append('<ul>')
                in_list = True
            content_text = list_match.group(3)
            content_text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', content_text)
            content_text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', content_text)
            content_text = re.sub(r'`(.+?)`', r'<code>\1</code>', content_text)
            html_parts.append(f'<li>{content_text}</li>')
            continue
        else:
            if in_list:
                html_parts.append('</ul>')
                in_list = False
        
        if line.startswith('>'):
            html_parts.append(f'<blockquote>{html_module.escape(line[1:].strip())}</blockquote>')
            continue
        
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
    
    toc_html_parts = []
    for item in toc_items:
        indent = (item['level'] - 1) * 20
        toc_html_parts.append(
            f'<a href="#{item["id"]}" class="toc-item toc-level-{item["level"]}" '
            f'style="padding-left: {indent}px" data-target="{item["id"]}">'
            f'{html_module.escape(item["title"])}</a>'
        )
    
    return '\n'.join(html_parts), '\n'.join(toc_html_parts), len(toc_items)

def create_page_files(page_name, page_title, description, icon, content_html, toc_html, output_dir):
    """Create all files for a new page"""
    var_name = ''.join(word.capitalize() for word in page_name.split('-'))
    var_name = var_name[0].lower() + var_name[1:]
    
    toc_js = f'''// {page_title} - Table of Contents Data
const {var_name}TocData = `{toc_html}`;

if (document.getElementById('toc')) {{
    document.getElementById('toc').innerHTML = {var_name}TocData;
}}
'''
    
    content_js = f'''// {page_title} - Content Data
const {var_name}ContentData = `{content_html}`;

if (document.getElementById('content')) {{
    document.getElementById('content').innerHTML = {var_name}ContentData;
}}
'''
    
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
            <div class="toc" id="toc"></div>
        </nav>

        <main class="content">
            <div class="content-header">
                <h1>{page_title}</h1>
                <p>{description}</p>
            </div>
            
            <div id="content"></div>
        </main>
    </div>

    <button class="scroll-top" id="scrollTop">↑</button>

    <script src="../js/{page_name}-toc.js"></script>
    <script src="../js/{page_name}-content.js"></script>
    <script src="../js/main.js"></script>
</body>
</html>
'''
    
    js_dir = os.path.join(output_dir, 'js')
    pages_dir = os.path.join(output_dir, 'pages')
    
    with open(os.path.join(js_dir, f'{page_name}-toc.js'), 'w', encoding='utf-8') as f:
        f.write(toc_js)
    
    with open(os.path.join(js_dir, f'{page_name}-content.js'), 'w', encoding='utf-8') as f:
        f.write(content_js)
    
    with open(os.path.join(pages_dir, f'{page_name}.html'), 'w', encoding='utf-8') as f:
        f.write(html_page)
    
    return {
        'page_name': page_name,
        'page_title': page_title,
        'description': description,
        'icon': icon,
        'toc_size': len(toc_js),
        'content_size': len(content_js)
    }

# Configuration for different page types
PAGE_CONFIGS = {
    'java': {
        'icon': '☕',
        'title': 'Java Basics',
        'description': 'Comprehensive guide to Java fundamentals, OOP, collections, and advanced concepts'
    },
    'spring': {
        'icon': '🍃',
        'title': 'Spring Boot',
        'description': 'Master Spring Boot, Spring MVC, Spring Data, and microservices architecture'
    },
    'javascript': {
        'icon': '⚡',
        'title': 'JavaScript Modern',
        'description': 'ES6+, async programming, React, Node.js, and modern web development practices'
    },
    'python': {
        'icon': '🐍',
        'title': 'Python Essentials',
        'description': 'Python fundamentals, data structures, libraries, and best practices for development'
    },
    'database': {
        'icon': '🗄️',
        'title': 'Database Design',
        'description': 'SQL, NoSQL, database optimization, indexing strategies, and data modeling'
    },
    'system': {
        'icon': '🏗️',
        'title': 'System Design',
        'description': 'Scalability, microservices, design patterns, and architecture best practices'
    }
}

def detect_page_type(filename):
    """Detect page type from filename"""
    filename_lower = filename.lower()
    for key in PAGE_CONFIGS:
        if key in filename_lower:
            return key
    return None

def main():
    """Batch convert all markdown files"""
    print("╔════════════════════════════════════════════╗")
    print("║  Batch Markdown to HTML Converter          ║")
    print("╚════════════════════════════════════════════╝\n")
    
    if len(sys.argv) < 2:
        print("Usage: python batch-converter.py <markdown_directory>")
        print("Example: python batch-converter.py /path/to/markdown/files")
        sys.exit(1)
    
    md_dir = sys.argv[1]
    output_dir = '/mnt/user-data/outputs/project'
    
    if not os.path.exists(md_dir):
        print(f"❌ Directory not found: {md_dir}")
        sys.exit(1)
    
    # Find all markdown files
    md_files = [f for f in os.listdir(md_dir) if f.endswith('.md')]
    
    if not md_files:
        print(f"❌ No markdown files found in {md_dir}")
        sys.exit(1)
    
    print(f"Found {len(md_files)} markdown file(s):\n")
    
    results = []
    
    for md_file in md_files:
        filepath = os.path.join(md_dir, md_file)
        print(f"Processing: {md_file}")
        
        # Detect page type
        page_type = detect_page_type(md_file)
        
        if page_type:
            config = PAGE_CONFIGS[page_type]
            page_name = md_file.replace('.md', '').lower().replace(' ', '-')
            page_name = re.sub(r'[^a-z0-9-]', '', page_name)
            
            # Read and convert
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            content_html, toc_html, toc_count = convert_markdown_to_html(content)
            
            # Create files
            result = create_page_files(
                page_name,
                config['title'],
                config['description'],
                config['icon'],
                content_html,
                toc_html,
                output_dir
            )
            
            result['toc_count'] = toc_count
            result['filename'] = md_file
            results.append(result)
            
            print(f"  ✅ Generated {toc_count} TOC items")
        else:
            print(f"  ⚠️  Skipped (unknown type)")
        
        print()
    
    # Print summary
    print("╔════════════════════════════════════════════╗")
    print("║           Conversion Summary               ║")
    print("╚════════════════════════════════════════════╝\n")
    
    for r in results:
        print(f"{r['icon']} {r['page_title']}")
        print(f"   File: {r['filename']}")
        print(f"   TOC Items: {r['toc_count']}")
        print(f"   Page: pages/{r['page_name']}.html")
        print(f"   Data: js/{r['page_name']}-toc.js ({r['toc_size']} bytes)")
        print(f"         js/{r['page_name']}-content.js ({r['content_size']} bytes)")
        print()
    
    print(f"✅ Successfully converted {len(results)} page(s)!")
    print("\n📝 Next step: Update index.html to activate the new cards")

if __name__ == '__main__':
    main()
