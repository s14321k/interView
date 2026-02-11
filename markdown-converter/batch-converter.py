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
    # Remove markdown links/images but preserve visible text: [text](url) -> text, ![alt](url) -> alt
    cleaned = re.sub(r'!\[([^\]]*)\]\([^\)]+\)', r'\1', title)
    cleaned = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', cleaned)
    header_id = re.sub(r'[^\w\s-]', '', cleaned.lower())
    header_id = re.sub(r'[\s_]+', '-', header_id)
    # Collapse multiple dashes and strip leading/trailing dashes
    header_id = re.sub(r'-{2,}', '-', header_id)
    header_id = header_id.strip('-')
    return header_id


def process_inline(text: str) -> str:
    """Safely process inline Markdown in `text` to HTML.

    Steps:
    - Extract inline code spans and replace with placeholders.
    - Escape remaining text to avoid XSS.
    - Replace images and links (escaping captured groups).
    - Replace bold (**) then emphasis (* or _).
    - Restore code placeholders (escaped inside <code>).
    """
    # 1) Extract code spans and replace with placeholders
    code_placeholders = {}
    def _code_repl(m):
        idx = len(code_placeholders)
        # Use a placeholder that does not contain '*' or '_' to avoid matching emphasis regexes
        key = f"[[[CODE{idx}]]]"
        # store escaped content
        code_placeholders[key] = html_module.escape(m.group(1))
        return key

    text_with_placeholders = re.sub(r'`([^`]+?)`', _code_repl, text)

    # 2) Escape what's left to prevent HTML injection
    escaped = html_module.escape(text_with_placeholders)

    # 3) Images: ![alt](url)
    def _img_repl(m):
        # m.group(1) and m.group(2) are from the escaped string, so group(1) is already escaped
        alt = m.group(1)
        src = html_module.escape(m.group(2))
        return f'<img src="{src}" alt="{alt}">'
    escaped = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', _img_repl, escaped)

    # 4) Links: [text](url)
    def _link_repl(m):
        # m.group(1) is already escaped (from html.escape above), avoid double-escaping
        text_inner = m.group(1)
        href = html_module.escape(m.group(2))
        return f'<a href="{href}">{text_inner}</a>'
    escaped = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', _link_repl, escaped)

    # 5) Bold **text** then italics *text* and _text_
    escaped = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', escaped)
    # handle underscore italics as well
    escaped = re.sub(r'_(.+?)_', r'<em>\1</em>', escaped)
    # handle single asterisk italics (avoid matching bold which is already replaced)
    escaped = re.sub(r'(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)', r'<em>\1</em>', escaped)

    # 6) Restore code placeholders
    for key, value in code_placeholders.items():
        escaped = escaped.replace(key, f'<code>{value}</code>')

    return escaped

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

        # After handling code fence open/close, if we're inside a code block
        # treat the current line as literal content (escaped) and continue.
        if in_code_block:
            html_parts.append(html_module.escape(line))
            continue

        # Emit raw HTML tag lines as-is so HTML blocks like <details> render correctly
        if re.match(r'^\s*<\s*/?\s*[a-zA-Z0-9\-]+', line):
            # append line without escaping so tags like <details>, <summary>, </details> stay functional
            html_parts.append(line)
            continue

        header_match = re.match(r'^(#{1,6})\s+(.+)$', line)
        if header_match:
            if in_list:
                html_parts.append('</ul>')
                in_list = False

            level = len(header_match.group(1))
            title = header_match.group(2).strip()
            header_id = create_id(title)
            # Render the header title with inline processing (so links/emphasis show correctly)
            rendered_title = process_inline(title)
            html_parts.append(f'<h{level} id="{header_id}">{rendered_title}</h{level}>')

            # For TOC, prepare a label without link markup and process inline markdown (so `code` becomes <code>)
            toc_label = re.sub(r'!\[([^\]]*)\]\([^\)]+\)', r'\1', title)
            toc_label = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', toc_label)
            toc_label_html = process_inline(toc_label)
            if level <= 3:
                toc_items.append({'level': level, 'title': toc_label_html, 'id': header_id})
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
            # Safely process inline markdown in list items
            content_text = process_inline(content_text)
            html_parts.append(f'<li>{content_text}</li>')
            continue
        else:
            if in_list:
                html_parts.append('</ul>')
                in_list = False

        if line.startswith('>'):
            # Process inline markdown inside blockquotes as well
            bq = line[1:].strip()
            html_parts.append(f'<blockquote>{process_inline(bq)}</blockquote>')
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
                            html_parts.append(f'<th>{process_inline(cell)}</th>')
                        html_parts.append('</tr></thead><tbody>')
                    else:
                        html_parts.append('<tr>')
                        for cell in cells:
                            html_parts.append(f'<td>{process_inline(cell)}</td>')
                        html_parts.append('</tr>')
                else:
                    html_parts.append('<tr>')
                    for cell in cells:
                        html_parts.append(f'<td>{process_inline(cell)}</td>')
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
            # Safely process inline markdown for paragraphs
            text = process_inline(text)
            html_parts.append(f'<p>{text}</p>')

    if in_list:
        html_parts.append('</ul>')
    if in_table:
        html_parts.append('</tbody></table>')

    toc_html_parts = []
    for item in toc_items:
        indent = (item['level'] - 1) * 20
        toc_html_parts.append(
            f'<a href="#{item["id"]}" class="toc-item toc-level-{{item["level"]}}" '
            f'style="padding-left: {indent}px" data-target="{item["id"]}">'  # noqa: E501
            f'{item["title"]}</a>'
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

    <!-- Use the combined safe loader to inject TOC and Content safely -->
    <script src="../js/safe-loader.js" data-page="{page_name}" data-load="toc,content"></script>
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

# New helper: build a card HTML snippet
def create_card_html(page_name, config):
    """Return the HTML snippet for a card to insert into index.html"""
    href = f'pages/{page_name}.html'
    icon = config.get('icon', '')
    title = config.get('title', page_name)
    description = config.get('description', '')
    card = (
        f'            <a href="{href}" class="card">\n'
        f'                <div class="card-icon">{icon}</div>\n'
        f'                <h2>{title}</h2>\n'
        f'                <p>{description}</p>\n'
        f'                <span class="card-status available">Available</span>\n'
        f'            </a>\n'
    )
    return card

# New helper: insert card(s) into index.html, skipping duplicates
def update_index_file(index_path, page_name, config):
    """Insert a card for page_name into index.html if not already present."""
    if not os.path.exists(index_path):
        print(f'⚠️  index.html not found at {index_path}, skipping index update')
        return False

    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    href = f'pages/{page_name}.html'
    card_html = create_card_html(page_name, config)

    # If card already exists, replace it to keep content in sync
    if href in content:
        pattern = re.compile(
            rf'(<a\s+href="{re.escape(href)}"\s+class="card"[^>]*>.*?</a>)',
            re.DOTALL
        )
        if pattern.search(content):
            new_content = pattern.sub(card_html.rstrip(), content, count=1)
            with open(index_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        return False

    # Try to insert into the cards-grid div (match the correct closing div)
    start = content.find('<div class="cards-grid">')
    if start != -1:
        start_tag_end = content.find('>', start)
        if start_tag_end != -1:
            depth = 1
            tail = content[start_tag_end + 1:]
            for match in re.finditer(r'</div>|<div\b[^>]*>', tail, flags=re.IGNORECASE):
                if match.group(0).startswith('</div'):
                    depth -= 1
                else:
                    depth += 1
                if depth == 0:
                    insert_pos = start_tag_end + 1 + match.start()
                    new_content = (
                            content[:insert_pos]
                            + '\n'
                            + card_html
                            + content[insert_pos:]
                    )
                    with open(index_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    return True

    # Fallback: try to insert before footer (common structure in index.html)
    footer_pattern = re.compile(r'(</div>\s*<footer)', re.DOTALL)
    m2 = footer_pattern.search(content)
    if m2:
        insert_pos = m2.start(1)
        new_content = content[:insert_pos] + '\n' + card_html + '\n' + content[insert_pos:]
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True

    # Last fallback: insert before </body>
    if '</body>' in content:
        new_content = content.replace('</body>', card_html + '\n</body>')
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True

    # If all else fails, append to file
    with open(index_path, 'a', encoding='utf-8') as f:
        f.write('\n' + card_html)
    return True


def regenerate_index_cards(index_path, card_configs):
    """Completely regenerate the cards section in index.html"""
    if not os.path.exists(index_path):
        print(f"⚠️  Index file not found: {index_path}")
        return False

    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generate all card HTML
    cards_html = []
    for config in sorted(card_configs, key=lambda x: x['title']):
        card = f'''
            <a href="pages/{config['page_name']}.html" class="card">
                <div class="card-icon">{config['icon']}</div>
                <h2>{config['title']}</h2>
                <p>{config['description']}</p>
                <span class="card-status available">Available</span>
            </a>'''
        cards_html.append(card)

    all_cards = '\n'.join(cards_html)

    # Find the cards-grid div and replace its content
    # Pattern to match: <div class="cards-grid"> ... </div> (before footer)
    pattern = re.compile(
        r'(<div\s+class="cards-grid">)(.*?)(</div>\s*<footer)',
        re.DOTALL
    )

    match = pattern.search(content)
    if match:
        # Replace the content between cards-grid opening and its closing
        new_content = (
                content[:match.start(2)] +
                all_cards + '\n' +
                content[match.start(3):]
        )

        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True

    print("⚠️  Could not find cards-grid section in index.html")
    return False

# Configuration for different page types
PAGE_CONFIGS = {
    'java': {
        'icon': '☕',
        'title': 'Java Basics',
        'description': 'Comprehensive guide to Java fundamentals, OOP, collections, and advanced concepts'
    },
    'spring': {
        'icon': '🍃',
        'title': 'Spring',
        'description': 'Guide to Spring framework topics and patterns'
    },
    'batch': {
        'icon': '🔄',
        'title': 'Spring Batch',
        'description': 'Enterprise batch processing with Spring Batch framework'
    },
    'javascript': {
        'icon': '⚡',
        'title': 'JavaScript',
        'description': 'ES6+, async programming, and modern web development'
    },
    'js': {
        'icon': '⚡',
        'title': 'JavaScript',
        'description': 'JavaScript programming guide and best practices'
    },
    'react': {
        'icon': '⚛️',
        'title': 'React',
        'description': 'React library for building user interfaces'
    },
    'python': {
        'icon': '🐍',
        'title': 'Python Essentials',
        'description': 'Python fundamentals, data structures, libraries, and best practices'
    },
    'database': {
        'icon': '🗄️',
        'title': 'Database Design',
        'description': 'SQL, NoSQL, database optimization, and data modeling'
    },
    'sql': {
        'icon': '🗄️',
        'title': 'SQL',
        'description': 'SQL queries, database design, and optimization'
    },
    'quarkus': {
        'icon': '🔷',
        'title': 'Quarkus',
        'description': 'Kubernetes-native Java framework for cloud applications'
    },
    'api': {
        'icon': '🔌',
        'title': 'API',
        'description': 'API design, development, and best practices'
    },
    'system': {
        'icon': '🏗️',
        'title': 'System Design',
        'description': 'Scalability, microservices, and architecture best practices'
    },
    'default': {
        'icon': '📘',
        'title': 'Guide',
        'description': 'Programming guide and documentation'
    }
}

def detect_page_type(filename):
    """Detect page type from filename with priority for more specific matches."""
    filename_lower = filename.lower()
    # Priority order: more specific matches first
    priority = [
        'batch',
        'quarkus',
        'spring',
        'react',
        'java',
        'javascript',
        'python',
        'database',
        'sql',
        'api',
        'system',
        'js'
    ]
    for key in priority:
        if key in filename_lower:
            return key
    # Always return 'default' so no file is skipped
    return 'default'


def title_from_filename(filename):
    """Create a human-friendly title from a filename."""
    base = os.path.splitext(filename)[0]
    base = re.sub(r'[_-]+', ' ', base).strip()
    return base.title()


def main():
    """Batch convert all markdown files"""
    print("╔════════════════════════════════════════════╗")
    print("║  Batch Markdown to HTML Converter          ║")
    print("║  with Dynamic Index Generation             ║")
    print("╚════════════════════════════════════════════╝\n")

    if len(sys.argv) < 2:
        print("Usage: python batch-converter.py <markdown_directory> [output_directory]")
        print("Example: python batch-converter.py /path/to/markdown/files")
        print("         python batch-converter.py md2 ../project")
        sys.exit(1)

    md_dir = sys.argv[1]

    # Use provided output directory or auto-detect
    if len(sys.argv) >= 3:
        output_dir = sys.argv[2]
    else:
        # Try to find project directory relative to script location
        script_dir = os.path.dirname(os.path.abspath(__file__))
        output_dir = os.path.join(script_dir, '..')

    # Ensure output directory exists
    if not os.path.exists(output_dir):
        print(f"⚠️  Creating output directory: {output_dir}")
        os.makedirs(output_dir, exist_ok=True)

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
    card_configs = []

    # Path to index.html in the project output dir (default: output_dir/index.html)
    index_html_path = os.path.join(output_dir, 'index.html')

    for md_file in md_files:
        filepath = os.path.join(md_dir, md_file)
        print(f"Processing: {md_file}")

        # Detect page type (now always returns a value, never None)
        page_type = detect_page_type(md_file)

        config = dict(PAGE_CONFIGS[page_type])
        page_name = md_file.replace('.md', '').lower().replace(' ', '-')
        page_name = re.sub(r'[^a-z0-9-]', '', page_name)
        dynamic_title = title_from_filename(md_file)
        config['title'] = dynamic_title
        config['description'] = f'Guide to {dynamic_title}.'
        config['page_name'] = page_name

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
        card_configs.append(config)

        print(f"  ✅ Generated {toc_count} TOC items")
        print()

    # Regenerate index.html cards section
    if card_configs:
        print("Regenerating index.html cards section...")
        if regenerate_index_cards(index_html_path, card_configs):
            print(f"  ✅ index.html cards section regenerated with {len(card_configs)} cards\n")
        else:
            print(f"  ⚠️  Could not regenerate index.html cards section\n")

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
    print("✅ Index.html cards section updated dynamically!")

if __name__ == '__main__':
    main()