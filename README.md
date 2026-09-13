# Ebram Samuel — Portfolio

A modern, animated single-page portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Sass**. Showcases skills, work experience, projects, education, and certifications with a dark/light theme, scroll-reveal animations, and interactive project cards.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Sections Overview](#sections-overview)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Author](#author)
- [License](#license)

---

## Tech Stack

| Category         | Technology                                    |
|-------------------|------------------------------------------------|
| Framework          | [React 18](https://react.dev/)                 |
| Language           | [TypeScript 5](https://www.typescriptlang.org/) |
| Build Tool         | [Vite 5](https://vitejs.dev/)                   |
| Styling            | [Tailwind CSS 3](https://tailwindcss.com/) + [Sass/SCSS](https://sass-lang.com/) |
| CSS Processing     | PostCSS + Autoprefixer                          |
| Package Manager    | npm                                             |

The project uses **strict TypeScript** (`strict: true` in `tsconfig.json`) — every component, data model, and prop type is explicitly typed for safety and better editor autocompletion.

---

## Features

- 🌙 **Dark / Light theme toggle** — persisted across sessions via `localStorage`
- 🎯 **Smooth scroll navigation** — desktop nav links + mobile hamburger menu
- ✨ **Scroll-reveal animations** — sections fade/slide in via `IntersectionObserver`
- 📋 **Click-to-copy** — email and phone number copy to clipboard with visual feedback
- 🖱️ **Interactive project cards** — hover popups reveal GitHub repo links (E-Commerce Platform, HRM System)
- 🏷️ **"NEW" badges** — highlight the most recently added projects
- 📱 **Fully responsive** — adapts from mobile to widescreen layouts
- 🎨 **Noise texture overlay** — subtle grain effect for visual depth
- 🌈 **Gradient accent text** — animated gradient on the hero name
- 🖼️ **Floating profile photo** — decorative rotating rings + floating badge
- 🔠 **Custom fonts** — Clash Display, Cabinet Grotesk, and JetBrains Mono via Fontshare/Google Fonts

---

## Project Structure

```
Portfolio/
├── index.html                  # HTML entry point, font links, root div
├── vite.config.ts              # Vite + React plugin configuration
├── tailwind.config.js          # Tailwind theme, colors, fonts
├── postcss.config.js           # PostCSS plugins (Tailwind, Autoprefixer)
├── tsconfig.json               # TypeScript compiler configuration
├── tsconfig.node.json          # TypeScript config for Vite config file
├── package.json                # Dependencies & npm scripts
├── package-lock.json
├── .gitignore
├── README.md
└── src/
    ├── main.tsx                 # React root render + global style import
    ├── App.tsx                  # Root component, theme state, scroll-reveal observer
    ├── vite-env.d.ts             # Vite/TypeScript ambient type declarations
    ├── assets/
    │   └── profile.jpg           # Profile photo
    ├── styles/
    │   └── main.scss             # Global styles, CSS variables, animations
    └── components/
        ├── Navbar.tsx             # Sticky nav, theme toggle, mobile menu
        ├── Hero.tsx               # Landing section — name, role, CTAs, stats
        ├── About.tsx              # Bio + quick-facts cards
        ├── Skills.tsx             # Technical stack, DevOps tools, Agile, soft skills
        ├── Experience.tsx         # Work history timeline
        ├── Projects.tsx           # Project grid with hover popups
        ├── Education.tsx          # Learning path + languages
        ├── Certifications.tsx     # Credentials with verification links
        ├── Contact.tsx            # Contact info + click-to-copy + CTA
        └── Footer.tsx             # Copyright + location
```

---

## Sections Overview

| # | Section              | Component              | Content |
|---|-----------------------|-------------------------|---------|
| — | Hero                  | `Hero.tsx`               | Name, role tagline, availability badge, CTA buttons, quick stats, profile photo |
| 01 | About                | `About.tsx`              | Short bio + 4 quick-fact cards (Frontend, Backend, Mobile, Cloud) |
| 02 | Skills               | `Skills.tsx`              | Technical stack (Frontend, Backend, Databases, Cloud, Mobile, Tools & APIs), DevOps tools, Agile methodology, soft skills |
| 03 | Experience           | `Experience.tsx`         | Work history timeline (Full Stack Web Developer, Flutter Mobile Developer, Backend Developer — Graduation Project) |
| 04 | Projects             | `Projects.tsx`           | 8 projects across mobile, IoT/web, and full-stack categories |
| 05 | Education            | `Education.tsx`          | Degree, Digilians Program, online courses, and language proficiency |
| 06 | Certifications       | `Certifications.tsx`     | 7 credentials, 4 with verification/view links |
| 07 | Contact              | `Contact.tsx`            | Email, phone, GitHub, LinkedIn — with click-to-copy |
| — | Footer               | `Footer.tsx`              | Copyright + location |

### Featured Projects
1. **Chat App** — Flutter, Firebase, Cubit
2. **Todo List App** — Flutter, SQFlite, Cubit
3. **News App** — Flutter, REST API, Dart
4. **Online Supermarket** — Flutter, Dart
5. **Agriculture Auto-worker Robot** — JavaScript, Firebase, IoT
6. **E-Commerce Platform** — React, Node.js, Express, MongoDB *(hover for GitHub links)*
7. **HRM System (Human Resource Management)** — React, Node.js, Express, MongoDB, JWT, Socket.io *(hover for GitHub link)*
8. **Kemet-Gate** — React, Node.js, Express, MongoDB, REST API

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

### Installation

```bash
# 1. Navigate into the project folder
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Available Scripts

| Command           | Description                                              |
|--------------------|------------------------------------------------------------|
| `npm run dev`       | Starts the Vite dev server with hot module reload          |
| `npm run build`     | Type-checks with `tsc`, then bundles for production into `dist/` |
| `npm run preview`   | Serves the production build locally for a final check      |

---

## Customization Guide

All content lives in plain TypeScript data arrays at the top of each component file — no need to touch JSX/markup to update text.

| Want to change...          | Edit this file                    |
|------------------------------|-------------------------------------|
| Name, tagline, stats          | `src/components/Hero.tsx`           |
| Bio & quick-fact cards        | `src/components/About.tsx`          |
| Skills, tools, soft skills    | `src/components/Skills.tsx`         |
| Work history                  | `src/components/Experience.tsx`     |
| Projects & GitHub links       | `src/components/Projects.tsx`       |
| Education & languages         | `src/components/Education.tsx`      |
| Certifications & links        | `src/components/Certifications.tsx` |
| Email, phone, social links    | `src/components/Contact.tsx`        |
| Colors, fonts, global styles  | `src/styles/main.scss`, `tailwind.config.js` |
| Profile photo                 | Replace `src/assets/profile.jpg`    |

### Theme Colors
CSS custom properties are defined in `src/styles/main.scss` and consumed via Tailwind (`tailwind.config.js`) using variables such as `--bg`, `--surface`, `--card`, `--accent`, `--accent2`, `--accent3`, `--text`, and `--muted` — update these to re-theme the entire site at once.

---

## Deployment

This is a static site after build — it can be deployed anywhere that serves static files.

```bash
npm run build
```

This outputs a production-ready bundle to the `dist/` folder. Common deployment targets:

- **Vercel** — import the repo, framework preset "Vite", zero config needed
- **Netlify** — build command `npm run build`, publish directory `dist`
- **GitHub Pages** — build, then push the `dist/` folder to a `gh-pages` branch (or use an action like `peaceiris/actions-gh-pages`)
- **Any static host** (Cloudflare Pages, Firebase Hosting, S3 + CloudFront, etc.) — upload the contents of `dist/`

---

## Browser Support

Tested on the latest versions of:
- Chrome / Edge (Chromium)
- Firefox
- Safari

Uses modern CSS (custom properties, `backdrop-filter`, CSS Grid) and JavaScript (`IntersectionObserver`, Clipboard API) — an evergreen browser is recommended.

---

## Author

**Ebram Samuel**
Full Stack Web Developer — Cairo, Egypt

- 📧 Email: [ebramsam2001@gmail.com](mailto:ebramsam2001@gmail.com)
- 📞 Phone: (+20) 155-276-9905
- 🐙 GitHub: [github.com/ebramsam2001-ctrl](https://github.com/ebramsam2001-ctrl)
- 💼 LinkedIn: [linkedin.com/in/ebram-samuel](https://www.linkedin.com/in/ebram-samuel-268b07339/)

---

## License

This project is personal portfolio source code. Feel free to reference the structure for your own portfolio, but please do not reuse the personal content (name, photo, bio, project descriptions) as your own.

© 2026 Ebram Samuel
