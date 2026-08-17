# Apple Website Clone

[![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-00D9FF?style=for-the-badge&logo=responsive&logoColor=white)](https://www.w3schools.com/css/css_rwd_intro.asp)
[![No Dependencies](https://img.shields.io/badge/No-Dependencies-4CAF50?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)

A modern, fully responsive replica of the Apple website built with **vanilla HTML, CSS, and JavaScript**. Showcases clean UI/UX design patterns, smooth animations, and interactive product sections for iPhone, iPad, Mac, and Apple Watch.

---

## ✨ Features

- **🎨 Pixel-Perfect UI Design** – Faithful recreation of Apple's minimalist aesthetic
- **📱 Fully Responsive** – Seamless experience across desktop, tablet, and mobile devices
- **⚡ Smooth Animations** – CSS transitions and JavaScript-driven interactions for engaging UX
- **🎯 Interactive Product Sections** – Dedicated pages for iPhone, iPad, Mac, and Apple Watch
- **🖼️ Optimized Media Assets** – High-quality images and icons organized by product category
- **🔧 Vanilla JavaScript** – No dependencies—lightweight and performant frontend

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **HTML** | Semantic HTML5 structure |
| **Styling** | Pure CSS3 with flexbox & grid layouts |
| **Interactivity** | Vanilla JavaScript (ES6+) |
| **No Frameworks** | Zero build tools—works directly in browser |

---

## 📁 Project Structure

```
apple-website-clone/
├── index.html              # Main landing page (homepage)
├── css/
│   ├── style.css          # Global styles
│   ├── responsive.css     # Mobile-first responsive breakpoints
│   └── animations.css     # Keyframe animations and transitions
├── js/
│   ├── main.js            # Core interactivity & DOM manipulation
│   ├── navigation.js      # Header/navigation menu handlers
│   └── scrollEffects.js   # Scroll animations and parallax
├── images/
│   ├── hero/              # Hero section banners
│   ├── products/          # Product-specific imagery
│   └── icons/             # UI icons and badges
├── iphone/
│   ├── index.html         # iPhone product page
│   └── styles.css         # iPhone-specific styling
├── ipad/
│   ├── index.html         # iPad product page
│   └── styles.css         # iPad-specific styling
├── mac/
│   ├── index.html         # Mac product page
│   └── styles.css         # Mac-specific styling
├── watch/
│   ├── index.html         # Apple Watch product page
│   └── styles.css         # Watch-specific styling
├── scripts/
│   └── upload.py          # Python automation script for GitHub integration
└── .claude/               # Claude AI configuration files

```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build tools required

### 1. Clone the Repository

```bash
git clone https://github.com/SanaullahTareen/apple-website-clone.git
cd apple-website-clone
```

### 2. Open in Browser

**Option A: Simple Method**
```bash
# Navigate to project directory and open index.html
open index.html
```

**Option B: Local Server (Recommended)**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using Ruby
ruby -run -ehttpd . -p8000
```

Then visit: `http://localhost:8000`

---

## 📖 Usage

### Navigation
- **Homepage**: Browse all featured products
- **Product Pages**: Click on iPhone, iPad, Mac, or Watch for detailed sections
- **Responsive Design**: Resize browser to see mobile/tablet adaptations
- **Interactive Elements**: Hover effects, smooth scroll animations, and dynamic carousels

### Customization

#### Change Colors & Branding
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary-bg: #ffffff;
  --text-dark: #000000;
  --accent-color: #0071e3;
}
```

#### Add New Product Section
1. Create new folder: `product-name/`
2. Add `index.html` file with product markup
3. Link from navigation in `index.html`

#### Modify Content
All text content is in HTML files—edit directly without build steps.

---

## 🎯 Key Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/index.html` | Main landing with featured products |
| iPhone | `/iphone/index.html` | iPhone models and specs showcase |
| iPad | `/ipad/index.html` | iPad product lineup |
| Mac | `/mac/index.html` | Mac computers and accessories |
| Apple Watch | `/watch/index.html` | Watch models and features |

---

## ⚡ Performance & Optimization

✅ **Lightweight**: No frameworks or dependencies  
✅ **Fast Load**: Minimal CSS/JS—optimized media assets  
✅ **Browser Compatible**: Works on all modern browsers  
✅ **SEO Friendly**: Semantic HTML structure  
✅ **Mobile First**: Progressive enhancement for all screen sizes

---

## 🎨 Design Highlights

- **Minimalist Layout**: Clean spacing and typography inspired by Apple's design language
- **Smooth Transitions**: CSS animations for hover states and scroll effects
- **Color Palette**: Apple's signature white, black, and blue accents
- **Typography**: System fonts for optimal readability
- **Grid System**: Flexbox-based responsive layouts

---

## 🔄 Deployment

### Deploy to GitHub Pages
```bash
git add .
git commit -m "Update website"
git push origin main
```

Then enable GitHub Pages in repo settings (Settings → Pages → Deploy from `main` branch).

Site will be live at: `https://SanaullahTareen.github.io/apple-website-clone`

### Deploy to Netlify / Vercel
1. Connect repository to Netlify/Vercel
2. Set build command: `(leave empty)`
3. Set publish directory: `./`
4. Deploy

---

## 📝 Scripts & Automation

Located in `scripts/` folder:

- **`upload.py`** – Python utility for automated GitHub integration (Git LFS, batch commits)

### Run Upload Script
```bash
python scripts/upload.py
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**—see the [LICENSE](LICENSE) file for details.

**Note**: This is a fan-made project for educational purposes. Apple® is a registered trademark of Apple Inc.

---

## 👨‍💻 Author

**Sanaullah Tareen**

- **GitHub**: [@SanaullahTareen](https://github.com/SanaullahTareen)
- **Hugging Face**: [@SanaullahTareen07](https://huggingface.co/SanaullahTareen07)
- **LinkedIn**: [Sanaullah Tareen](https://www.linkedin.com/in/sanaullah-tareen)
- **Portfolio**: [sanaullahtareen.me](https://sanaullahtareen.me)

---

## 🔗 Resources & Links

- [Apple.com](https://www.apple.com) – Inspiration source
- [MDN Web Docs](https://developer.mozilla.org) – HTML/CSS/JS references
- [CSS Tricks](https://css-tricks.com) – Advanced CSS patterns

---

## ⚙️ Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Mobile Safari | ✅ Full |
| IE 11 | ⚠️ Limited |

---

## 📧 Feedback & Issues

Found a bug or have suggestions? [Open an issue](https://github.com/SanaullahTareen/apple-website-clone/issues) on GitHub.

---

## 🌟 Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

---

**Made with ❤️ using HTML, CSS, and JavaScript**

---

<div align="center">

### 🎯 Crafted by **Sanaullah Tareen** 

<sub>
  
  **Full-Stack Developer** | **AI/ML Engineer** | **Computer Vision Specialist**
  
  *Building production-ready applications with modern web technologies*
  
  [![GitHub](https://img.shields.io/badge/GitHub-@SanaullahTareen-181717?style=flat-square&logo=github)](https://github.com/SanaullahTareen)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Sanaullah%20Tareen-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/sanaullah-tareen)
  [![HuggingFace](https://img.shields.io/badge/HuggingFace-@SanaullahTareen07-FFD21E?style=flat-square&logo=huggingface)](https://huggingface.co/SanaullahTareen07)
  [![Portfolio](https://img.shields.io/badge/Portfolio-sanaullahtareen.me-000000?style=flat-square&logo=web)](https://sanaullahtareen.me)

</sub>

</div>
