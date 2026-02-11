# 🪟 Windows Usage Guide - Markdown Converter

This guide shows you how to use the converter tools on Windows.

## 📂 Setup

1. **Download your project folder**
2. **Make sure Python 3 is installed**
   - Open Command Prompt and type: `python --version`
   - Should show Python 3.x.x
   - If not, download from https://www.python.org/

## 🚀 Quick Start (Using Batch Files)

### Method 1: Convert All Files at Once (Easiest!)

1. Put all your `.md` files in a folder (e.g., `C:\Users\YourName\markdown-files`)

2. Open Command Prompt in the `tools` folder

3. Run:
```cmd
convert-all.bat C:\Users\YourName\markdown-files
```

OR if the folder is nearby:
```cmd
convert-all.bat ..\md2
```

**That's it!** All your markdown files will be converted automatically.

### Method 2: Convert One File at a Time

```cmd
convert.bat "Spring Batch.md" spring-batch "Spring Batch"
```

With description:
```cmd
convert.bat "Spring Batch.md" spring-batch "Spring Batch" "Enterprise batch processing"
```

## 📝 Using Python Directly

If the batch files don't work, use Python directly:

### Convert All Files:
```cmd
python batch-converter.py ..\md2 ..\project
```

### Convert Single File:
```cmd
python md-converter.py "Spring Batch.md" spring-batch "Spring Batch" "Description" ..\project
```

## 🎯 Complete Example Workflow

Let's say you have these markdown files:
- `Spring Batch.md`
- `Microservices.md`
- `JavaScript.md`

**Step 1: Open Command Prompt**
```cmd
cd C:\path\to\project\tools
```

**Step 2: Convert all at once**
```cmd
python batch-converter.py C:\path\to\markdown\files .
```

Or if your markdown files are in a folder called `md2` next to `tools`:
```cmd
python batch-converter.py ..\md2 ..
```

**Step 3: Update index.html**
Open `index.html` in a text editor and update cards from "Coming Soon" to "Available"

**Step 4: Test**
Double-click `index.html` to open in your browser!

## 🔧 Troubleshooting

### Error: "python is not recognized"
**Fix:** Python is not in your PATH
- Reinstall Python and check "Add Python to PATH"
- Or use full path: `C:\Python39\python.exe`

### Error: "FileNotFoundError"
**Fix:** Check your paths
- Use full paths: `C:\Users\YourName\files\markdown.md`
- Or use relative paths: `..\md2\markdown.md`
- Use quotes for paths with spaces: `"C:\My Files\markdown.md"`

### Error: "No such file or directory: '/mnt/...'"
**Fix:** This was the old Linux path - use the updated scripts!
- Re-download the converter files
- Or add second argument for output: `python batch-converter.py input_folder output_folder`

### Files are created but empty
**Fix:** Check markdown file encoding
- Save markdown files as UTF-8
- Use a text editor like Notepad++ or VS Code

## 📊 What Gets Created

After conversion, you'll see:

```
project/
├── js/
│   ├── spring-batch-toc.js      ← NEW!
│   └── spring-batch-content.js  ← NEW!
└── pages/
    └── spring-batch.html        ← NEW!
```

## 💡 Tips for Windows Users

1. **Use quotes** for filenames with spaces:
   ```cmd
   "Spring Batch.md" not Spring Batch.md
   ```

2. **Use backslashes or forward slashes** for paths:
   ```cmd
   ..\md2  or  ../md2  (both work)
   ```

3. **Drag and drop** files into Command Prompt to auto-fill paths

4. **Use Tab completion** - type first few letters and press Tab

5. **Create a shortcut**:
   - Right-click `convert-all.bat`
   - Create shortcut on desktop
   - Drag your markdown folder onto it!

## 🎨 Example Commands

**Basic conversion:**
```cmd
convert-all.bat md2
```

**Single file:**
```cmd
convert.bat "Spring Batch.md" spring-batch "Spring Batch"
```

**Full paths:**
```cmd
python batch-converter.py "C:\Users\bsara\Documents\markdown" "C:\Users\bsara\Documents\project"
```

**Relative paths:**
```cmd
python batch-converter.py ..\md2 ..
```

## 📱 After Conversion

1. Open `..\index.html` in your browser
2. Find your new topic card
3. It should say "Coming Soon"
4. Edit `index.html` in a text editor:
   - Find: `<a href="#" class="card coming-soon">`
   - Change to: `<a href="pages/your-page.html" class="card">`
   - Find: `<span class="card-status coming-soon">Coming Soon</span>`
   - Change to: `<span class="card-status available">Available</span>`
5. Save and refresh your browser!

## 🆘 Still Having Issues?

1. **Check Python version**: `python --version` (need 3.6+)
2. **Check you're in the right folder**: `dir` should show `.py` files
3. **Use absolute paths**: Full `C:\...` paths instead of relative
4. **Check file permissions**: Make sure you can write to the output folder
5. **Look at the error message**: It usually tells you what's wrong!

## ✅ Success Checklist

- [ ] Python 3 is installed
- [ ] You're in the `tools` folder
- [ ] Your markdown files are accessible
- [ ] You have write permissions
- [ ] You're using the correct command syntax
- [ ] Files are being created in `js/` and `pages/`

---

**Need more help?** Check `README.md` in this folder for more detailed documentation!
