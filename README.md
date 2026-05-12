# Alex Rivera — Portfolio

A personal portfolio site built with **TanStack Start** and deployed on **Netlify**. Features a cosmic night-sky design with animated shooting stars, a glowing moon, and glassmorphism cards.

## Key Features

- **Animated Night Sky** — CSS-animated twinkling stars, shooting stars, and a glowing moon as the persistent background
- **Image Gallery** — Filterable gallery with lightbox, powered by **Netlify Image CDN** for on-the-fly WebP optimization
- **Project Showcase** — Content Collections-backed project cards with optional project images
- **About Page** — Skills grid, experience timeline, and profile photo
- **Contact Form** — Netlify Forms integration with social media links
- **Dark Glassmorphism UI** — `backdrop-filter: blur` cards with indigo/violet accent palette

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19, TanStack Router v1) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (type-safe markdown) |
| Images | Netlify Image CDN |
| Forms | Netlify Forms |
| Deployment | Netlify |
| Language | TypeScript 5.7 (strict) |

## Running Locally

```bash
npm install
npm run dev       # starts on http://localhost:3000
```

For full Netlify features (Image CDN, Forms) locally:

```bash
netlify dev       # starts on http://localhost:8888
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Hero landing page |
| `/about` | About me, skills, experience timeline |
| `/projects` | Project showcase from content collections |
| `/gallery` | Filterable image gallery with lightbox |
| `/contact` | Contact form + social links |
| `/resume` | Full résumé from content collections |
| `/blog/:slug` | Blog post detail |
