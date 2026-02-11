# 🔧 Markdown Converter Tools

This directory contains tools to automatically convert markdown files to interactive HTML pages for the Learning Hub.

## 📁 Available Tools

### 1. `md-converter.py` - Single File Converter
Converts a single markdown file to an interactive HTML page.

**Usage:**
```bash
python3 md-converter.py <markdown_file> <page-name> <Page Title> <description>
```

**Example:**
```bash
python3 md-converter.py SpringBoot.md spring-boot "Spring Boot" "Master Spring Boot framework"
```

**Arguments:**
- `markdown_file`: Path to your .md file
- `page-name`: URL-friendly name (kebab-case, e.g., `spring-boot`)
- `Page Title`: Display title (e.g., `Spring Boot`)
- `description`: Brief description for the page header

**Output:**
- `pages/<page-name>.html`
- `js/<page-name>-toc.js`
- `js/<page-name>-content.js`

---

### 2. `batch-converter.py` - Multiple File Converter
Automatically converts all markdown files in a directory.

**Usage:**
```bash
python3 batch-converter old 1.py <markdown_directory>
```

**Example:**
```bash
python3 batch-converter old 1.py /path/to/markdown/files
```

**Auto-Detection:**
The batch converter automatically detects page types from filenames:
- Files containing `java` → Java Basics (☕)
- Files containing `spring` → Spring Boot (🍃)
- Files containing `javascript` → JavaScript Modern (⚡)
- Files containing `python` → Python Essentials (🐍)
- Files containing `database` → Database Design (🗄️)
- Files containing `system` → System Design (🏗️)

---

## 🚀 Quick Start Guide

### Converting a New Page

**Step 1: Convert the Markdown**
```bash
cd tools
python3 md-converter.py YourFile.md your-page "Your Page Title" "Description here"
```

**Step 2: Update index.html**
Open `../index.html` and find the corresponding card, then:
- Change `class="card coming-soon"` to `class="card"`
- Change `href="#"` to `href="pages/your-page.html"`
- Change status from `coming-soon` to `available`

**Example:**
```html
<!-- Before -->
<a href="#" class="card coming-soon">
    <div class="card-icon">⚡</div>
    <h2>JavaScript Modern</h2>
    <p>ES6+, async programming...</p>
    <span class="card-status coming-soon">Coming Soon</span>
</a>

<!-- After -->
<a href="pages/javascript-modern.html" class="card">
    <div class="card-icon">⚡</div>
    <h2>JavaScript Modern</h2>
    <p>ES6+, async programming...</p>
    <span class="card-status available">Available</span>
</a>
```

**Step 3: Test**
Open `index.html` in your browser and test the new page!

---

## 📝 What Gets Generated

For each markdown file, the converter creates:

### 1. HTML Page (`pages/your-page.html`)
- Fixed sidebar with home button
- Table of contents navigation
- Main content area
- Responsive design

### 2. TOC JavaScript (`js/your-page-toc.js`)
- All navigation links
- Proper indentation for hierarchy
- Auto-generated from markdown headers (# ## ###)

### 3. Content JavaScript (`js/your-page-content.js`)
- Full converted HTML content
- Syntax highlighted code blocks
- Styled tables and lists
- Formatted blockquotes

---

## 🎨 Markdown Features Supported

### Headers
```markdown
# Level 1
## Level 2
### Level 3
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`Inline code`
```

### Lists
```markdown
- Bullet point
- Another point

1. Numbered item
2. Another item
```

### Code Blocks
````markdown
```java
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello!");
    }
}
```
````

Supported languages: java, javascript, python, sql, html, css, bash, json, xml, yaml

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Blockquotes
```markdown
> This is a quote
```

### Horizontal Rules
```markdown
---
```

---

## ⚙️ Advanced Configuration

### Custom Page Types

To add a new page type to batch converter, edit `batch-converter.py`:

```python
PAGE_CONFIGS = {
    'yournew': {
        'icon': '🔥',
        'title': 'Your New Topic',
        'description': 'Description here'
    }
}
```

### Custom Styling

All pages use:
- CSS: `../css/styles.css`
- JavaScript: `../js/main.js`

To customize, edit these files in the project root.

---

## 🐛 Troubleshooting

**Issue: "No module named 'html'"**
- Solution: This is a built-in Python module. Update Python to 3.x

**Issue: Files not created**
- Solution: Check write permissions for `js/` and `pages/` directories

**Issue: TOC not appearing**
- Solution: Ensure markdown has proper headers (# ## ###)

**Issue: Broken links in TOC**
- Solution: Headers must have unique IDs. Avoid special characters.

---

## 📊 Conversion Stats

After conversion, check:
- Number of TOC items generated
- File sizes (toc.js and content.js)
- Whether all code blocks converted correctly

Example output:
```
✅ Successfully created:
   - pages/spring-boot.html (1850 bytes)
   - js/spring-boot-toc.js (19456 bytes)
   - js/spring-boot-content.js (315133 bytes)
```

---

## 💡 Tips

1. **Keep filenames simple**: Use lowercase with hyphens (e.g., `spring-boot.md`)
2. **Use clear headers**: They become your table of contents
3. **Test incrementally**: Convert one file at a time initially
4. **Check the output**: Always verify in a browser after conversion
5. **Backup first**: Keep original markdown files safe

---

## 🆘 Need Help?

1. Check `ADDING-PAGES.md` for manual page creation
2. Review existing pages (`java-basics.html`, `spring-boot.html`)
3. Examine the generated JavaScript files for structure

---

**Happy Converting! 🎉**
