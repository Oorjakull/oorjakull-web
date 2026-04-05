# OorjaKull — India's First AI Yoga Platform

> Ancient wisdom, modern intelligence. AI-powered yoga, real-time pose guidance, adaptive breathwork, and personalised wellness — powered by Madhu, your AI yoga companion.

---

## Overview

OorjaKull is a Next.js marketing and content platform for India's first AI-driven yoga experience. The Madhu AI companion app is a separate backend proxied at `/ai` — login and user accounts are handled there, not in this repo.

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion + Lenis smooth scroll |
| Database | PostgreSQL (Vercel Postgres) + Prisma ORM |
| Deployment | Vercel |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local`:

```env
DATABASE_URL=        # Vercel Postgres pooled connection
DIRECT_URL=          # Vercel Postgres direct connection
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & API routes
│   ├── page.tsx            # Homepage (Hero + AI Sequences + Blog preview)
│   ├── yoga/               # Yoga classes, styles & instructors
│   ├── about/              # Breathwork & meditation (Breath & Beyond)
│   ├── blog/               # Wellness articles + paginated listing
│   ├── courses/            # 11-course catalog + detail pages
│   ├── contact/            # Contact form & FAQs
│   ├── book-trial/         # Trial session registration
│   ├── register/           # 200H YTT application
│   ├── actions.ts          # Server Actions: submitRegistration, submitContact
│   └── api/og/             # Dynamic OG image generation (Edge runtime)
├── components/
│   ├── Hero.tsx            # Crossfade hero slideshow (responsive per breakpoint)
│   ├── Navbar.tsx          # Mega-menu navigation (desktop pill + mobile drawer)
│   ├── Footer.tsx          # Footer with social links
│   ├── MadhuChatbot.tsx    # Floating AI companion button (links to /ai)
│   ├── VideoGrid.tsx       # AI sequence cards grid
│   ├── BlogPreview.tsx     # 2-post homepage blog preview
│   └── ...
├── data/                   # Static content (blog post metadata)
└── lib/                    # Prisma client, blog utilities, CMS mock
```

---

## Branches & Workflow

| Branch | Purpose |
|---|---|
| `dev` | Active development — work here |
| `main` | Production — auto-deployed to Vercel |

All work goes to `dev`. When ready to ship, merge/push to `main`.

---

## Database

Prisma + Vercel Postgres. Two models relevant to this site:

| Model | Purpose |
|---|---|
| `Registration` | Course & trial sign-up leads |
| `ContactSubmission` | Contact form inquiries |

```bash
npx prisma studio        # Browse data locally
npx prisma migrate dev   # Run migrations in dev
```

---

## AI App (`/ai`)

The Madhu AI companion is proxied from an external Vercel backend via `next.config.ts` rewrites. It is **not** part of this repo. All authentication and user account management live there.

---

## Deployment

Pushes to `main` trigger automatic Vercel deployments. Environment variables are managed in the Vercel dashboard.

For detailed architecture, component patterns, and change history — see [DEV_REFERENCE.md](DEV_REFERENCE.md).
