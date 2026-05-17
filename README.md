# Ebram Samuel — Portfolio (React + Vite + Tailwind + SCSS)

## Tech Stack
- **Vite** (latest) — lightning-fast dev server & build
- **React 18** — component-based UI
- **Tailwind CSS v3** — utility-first styling
- **Sass/SCSS** — custom variables, animations, component styles

## Project Structure
```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── assets/
    │   └── profile.jpg
    ├── styles/
    │   └── main.scss
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx        ← E-Commerce hover popup
        ├── Education.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features
- 🌙 Dark / Light theme toggle (persisted in localStorage)
- 🎯 Smooth scroll navigation
- ✨ Scroll-reveal animations
- 📋 Click-to-copy email & phone
- 🛒 E-Commerce project card with hover popup showing GitHub links
- 📱 Responsive design (mobile hamburger menu)
- 🎨 Noise texture overlay for depth
- 🌈 Gradient accent on hero name
- 🖼️ Floating profile photo with decorative rings
