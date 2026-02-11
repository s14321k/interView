# Learning Hub - Interactive Programming Guides

A modern, interactive documentation hub with beautiful UI and smooth navigation.

## 📁 Project Structure

```
project/
├── index.html              # Main landing page with navigation cards
├── css/
│   ├── index.css          # Styles for the landing page
│   └── styles.css         # Shared styles for content pages
├── js/
│   └── main.js            # Shared JavaScript for navigation and interactions
└── pages/
    ├── java-basics.html   # Java programming guide
    └── [future pages]     # Additional guides will be added here
```

## 🚀 Features

### Landing Page (index.html)
- Beautiful animated card layout
- Visual status indicators (Available/Coming Soon)
- Responsive design for all devices
- Smooth animations and hover effects

### Content Pages
- **Fixed sidebar** with table of contents (353+ navigation items for Java Basics)
- **Smooth scrolling** when clicking TOC links
- **Active section highlighting** - automatically highlights current section while scrolling
- **Home button** - quick navigation back to landing page
- **Scroll-to-top button** - appears after scrolling down
- **Mobile responsive** - collapsible sidebar on smaller screens
- **Beautiful dark theme** with gradient backgrounds
- **Syntax highlighting** for code blocks
- **Styled tables** for data presentation

## 🎨 Design Features

- **Typography**: Playfair Display (headings) + Work Sans (body)
- **Color Scheme**: Dark theme with pink/coral accents
- **Animations**: Fade-in effects, smooth transitions, hover states
- **Layout**: Fixed sidebar + scrollable content area
- **Icons**: Emoji-based icons for visual appeal

## 📱 Responsive Design

- **Desktop**: Full sidebar + wide content area
- **Tablet**: Narrower sidebar, adjusted padding
- **Mobile**: Collapsible sidebar with hamburger menu

## 🔧 How to Add New Pages

1. Create a new HTML file in the `pages/` folder
2. Use the same structure as `java-basics.html`
3. Link CSS: `<link rel="stylesheet" href="../css/styles.css">`
4. Link JS: `<script src="../js/main.js"></script>`
5. Add home button: `<a href="../index.html" class="home-button">...</a>`
6. Update `index.html` to add a new card linking to your page

## 📝 Current Available Pages

1. **Java Basics** (`pages/java-basics.html`)
   - Java fundamentals
   - OOP concepts
   - Collections and data structures
   - Multithreading
   - Java 8+ features
   - Interview questions

## 🎯 Coming Soon

- Spring Framework
- JavaScript Modern (ES6+, React, Node.js)
- Python Essentials
- Database Design (SQL & NoSQL)
- System Design & Architecture

## 💡 Usage

1. Open `index.html` in a web browser
2. Click on any available card to navigate to that guide
3. Use the sidebar to jump to specific sections
4. Click the home button (🏠) to return to the main page

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- All modern browsers with ES6+ support

## 📄 License

This is a learning resource project. Feel free to use and customize for your educational needs.
