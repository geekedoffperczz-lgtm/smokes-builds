# AGENTS.md

Project architecture and conventions for AI agents working on this codebase.

## Project Overview

Personal portfolio site built with TanStack Start, deployed on Netlify. Cosmic night-sky aesthetic with animated stars, glassmorphism cards, and Netlify Image CDN.

## Directory Structure

```
src/
  components/
    StarryBackground.tsx   # Fixed-position stars, moon, shooting stars (pure CSS animations)
    Navigation.tsx         # Top nav bar with mobile hamburger menu
    ui/                    # Radix UI primitives (badge, card, checkbox, hover-card, separator)
  routes/
    __root.tsx             # Root shell: renders StarryBackground + Navigation + children
    index.tsx              # Hero landing page
    about.tsx              # About, skills grid, timeline
    projects.tsx           # Project cards from content collections
    gallery.tsx            # Filterable image gallery with lightbox (Netlify Image CDN)
    contact.tsx            # Netlify Forms + social links
    resume.tsx             # Jobs + education from content collections
    blog/$slug.tsx         # Blog post detail
  styles.css               # Global styles, CSS animations (.star, .moon, .shooting-star, .glass-card)
  lib/
    utils.ts               # cn() helper
content/
  jobs/                    # Work experience markdown with frontmatter
  education/               # Education markdown
  blog/                    # Blog posts
  projects/                # Project showcase markdown
content-collections.ts     # Zod schemas for all content types
netlify.toml               # Build config + remote_images allowlist for Netlify Image CDN
```

## Key Architecture Decisions

### Starry Background
`StarryBackground.tsx` renders purely as fixed-position DOM elements styled via CSS classes in `styles.css`. Stars use `--duration` and `--delay` CSS custom properties for varied animation timing. Shooting stars use `--shoot-duration` and `--shoot-delay`. This is rendered once in `__root.tsx` and sits behind all content via `z-index: 0`.

### Netlify Image CDN Usage
Images are served via `/.netlify/images?url=...&w=...&h=...&fit=cover&q=...`. For the gallery, Picsum Photos URLs are used and are allowlisted in `netlify.toml` under `[images] remote_images`. The helper function `netlifyImage(picsumId, w, h, q?)` in `gallery.tsx` builds these URLs. The headshot is a local `/public/headshot-on-white.jpg` referenced as a relative path.

### Content Collections
All content is markdown files with Zod-validated frontmatter. Use `allJobs`, `allEducations`, `allBlogs`, `allProjects` imports from `content-collections`. Schemas are in `content-collections.ts`.

### Styling Conventions
- **Dark theme**: background `#030712`, text `slate-200/400`, accent `indigo-400`/`violet-300`
- **Glass cards**: `.glass-card` class (backdrop-blur, semi-transparent bg, indigo border)
- **Gradient text**: `.gradient-text` (indigo → violet → cyan)
- **Buttons**: `.btn-primary` (filled indigo gradient), `.btn-secondary` (outlined)
- **Skill pills**: `.skill-tag` (subtle indigo tint)
- Never use `text-gray-*` or `bg-white` — use `slate-*` equivalents on dark backgrounds

### Routing
File-based. `api.*.ts` files are server routes. `__root.tsx` is the shell. The `/about` and `/gallery` routes were added as part of the initial portfolio build — add new routes as `.tsx` files under `src/routes/`.

## Environment Variables

For AI features: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, or `OLLAMA_BASE_URL`.

## Development Commands

```bash
npm run dev          # Vite dev server on :3000
netlify dev          # Netlify CLI with Image CDN + Forms emulation on :8888
npm run build        # Production build to dist/client
```
