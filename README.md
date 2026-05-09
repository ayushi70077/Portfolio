# Ayushi Yadav — Portfolio
Live Demo: https://ayushi-portfolio-70077.vercel.app

A modern, fast, frontend-only portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS (custom violet/emerald/amber theme)
- Framer Motion (animations)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx          # Root layout, header & footer, metadata
  page.tsx            # Home (Hero, About, Skills, Experience, Projects, Education, Contact)
  globals.css         # Tailwind + custom utilities
  skills/page.tsx     # Full skills listing with search & filters
  projects/page.tsx   # Full projects listing with search & filters
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  About.tsx
  SkillsOverview.tsx
  Experience.tsx
  FeaturedProjects.tsx
  Education.tsx
  Contact.tsx
  SectionHeading.tsx
lib/
  data.ts             # Single source of truth: profile, skills, experience, projects
public/
  resume.pdf          # Drop your resume PDF here (header & hero link to /resume.pdf)
```

## Editing your content

All content lives in [lib/data.ts](lib/data.ts):

- `profile` — name, role, taglines, summary, status, highlight stats
- `skillCategories` — grouped skills with proficiency levels
- `experiences` — timeline entries
- `projects` — featured & full project list (used on home and `/projects`)
- `education`, `certifications`

Update those objects and the entire site updates automatically.

## Add your resume

Place your resume file at `public/resume.pdf`. The "Resume" / "Download Resume" buttons link to `/resume.pdf`.

## Update social links

Edit `profile.github`, `profile.linkedin`, and `profile.leetcode` in [lib/data.ts](lib/data.ts).

## Contact form

The contact form is fully frontend-only — it opens the visitor's email client via a `mailto:` link with the message prefilled. No backend or API key required. If you later want a real backend, drop in a single API route.

## Build

```bash
npm run build
npm run start
```

## Deploy

Recommended: **Vercel** (zero config for Next.js).

1. Push this folder to GitHub.
2. Import the repo on https://vercel.com/new.
3. Click Deploy.
