# Sergio Michelotti — Portfolio

Personal portfolio site showcasing backend engineering work, projects, and experience — built as a fast, animated, single-page site with a focus on clean typography and editorial motion design.

---

## Demo

- **Production:** [sergiomichelotti.vercel.app](https://sergiomichelotti.vercel.app)
- **Repository:** [github.com/Pastelato/portfolio](https://github.com/Pastelato/portfolio)

---

## Features

- Single-page layout with smooth section navigation (Hero, Services, Experience, Case Studies, Contact)
- Scroll-aware sticky navbar with hide/reveal behavior
- Editorial-style scroll and stagger animations across all sections
- Fully typed content model for projects, services, and experience — easy to update without touching UI code
- Self-hosted variable fonts (no external font requests)
- Optimized, responsive images via `next/image`
- Downloadable CV
- Accessible motion (respects `prefers-reduced-motion`)

---

## Tech Stack

**Frontend**

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) (strict mode)

**UI & Animation**

- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Fontsource](https://fontsource.org/) — self-hosted fonts (JetBrains Mono, Inter, Syne)

**Tooling**

- [ESLint 9](https://eslint.org/) (flat config)
- npm
- Turbopack

**Deployment**

- [Vercel](https://vercel.com/)

---

## Architecture

The project uses the **Next.js App Router**, relying entirely on file-based routing, layouts, and the built-in Metadata API — there is no custom backend, API layer, or database, since the site is
a static, content-driven landing page.

The codebase is organized by concern rather than by feature, which keeps a single-page site simple to navigate:

- **`components/`** — one component per visual section of the page (presentation only)
- **`data/`** — page content (projects, services, experience) as typed arrays, decoupled from markup so content can be updated without touching JSX
- **`types/`** — shared TypeScript interfaces consumed by both `data/` and `components/`
- **`lib/`** — shared utilities, including a single set of Framer Motion animation variants reused across sections for a consistent motion language

This structure was chosen deliberately over a feature-based or CMS-driven setup: the site has no dynamic data sources, so the priority is keeping content edits fast and UI code declarative.

---

## Project Structure

src/
├── app/ # Root layout, page composition, global styles
├── components/ # Section components (Navbar, Hero, Offering, Experience, CaseStudy, Contact, Footer, ...)
├── data/ # Typed content: projects, services, experience
├── lib/ # Shared animation variants
└── types/ # Shared TypeScript interfaces
public/
├── images/ # Site imagery and illustrations
└── cv.pdf # Downloadable CV

---

## Installation

```bash
npm install
npm run dev

The app will be available at http://localhost:3000.

---
Available Scripts

┌───────────────┬──────────────────────────────────┐
│    Script     │           Description            │
├───────────────┼──────────────────────────────────┤
│ npm run dev   │ Starts the development server    │
├───────────────┼──────────────────────────────────┤
│ npm run build │ Builds the app for production    │
├───────────────┼──────────────────────────────────┤
│ npm start     │ Runs the production build        │
├───────────────┼──────────────────────────────────┤
│ npm run lint  │ Runs ESLint against the codebase │
└───────────────┴──────────────────────────────────┘

---
Environment Variables

None required. The project has no external APIs, secrets, or runtime configuration.

---
Deployment

The project is deployed on Vercel with zero additional configuration:

1. Push to the main branch.
2. Vercel automatically detects the Next.js project, builds it, and deploys it.

No custom build scripts, environment variables, or infrastructure setup are required.

---
Quality

- TypeScript strict mode enabled across the codebase
- ESLint 9 with Next.js recommended and Core Web Vitals rule sets
- Fully typed content and component props
- Consistent, reusable animation primitives instead of ad-hoc motion code per component
- Accessible by default (semantic HTML, reduced-motion support)

▎ Automated testing and CI are not yet part of the project — see Roadmap (#roadmap).

---
Roadmap

- [ ] Unit and integration tests
- [ ] CI/CD pipeline
- [ ] Analytics integration
- [ ] Internationalization (i18n)
- [ ] Blog / content section
- [ ] Headless CMS for project and experience data


- [ ] Unit and integration tests
- [ ] CI/CD pipeline
- [ ] Analytics integration
- [ ] Internationalization (i18n)
- [ ] Blog / content section
- [ ] Headless CMS for project and experience data

---
Author

Sergio Michelotti
Backend Engineer specialized in Java, Spring Boot, and cloud technologies.

- LinkedIn: linkedin.com/in/sergio-michelotti-9b3b22146 (https://www.linkedin.com/in/sergio-michelotti-9b3b22146)
- GitHub: https://github.com/Pastelato
- Portfolio: https://sergiomichelotti.vercel.app
- Email: sergiomichelottic@gmail.com

---
License

MIT
```
