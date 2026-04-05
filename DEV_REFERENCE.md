# OorjaKull — Developer Reference

> Internal reference for development. Updated as the codebase evolves.
> **Last updated**: 2026-04-05

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | 4 |
| Database | PostgreSQL (Vercel Postgres) | — |
| ORM | Prisma | 5.22.0 |
| Auth | NextAuth | 4.24.13 |
| Animation | Framer Motion | 12.34.0 |
| Smooth Scroll | Lenis | 1.3.17 |
| Icons | lucide-react | 0.563.0 |
| Deployment | Vercel | — |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, GA4, JSON-LD, global providers + MadhuChatbot
│   ├── template.tsx            # Page transition wrapper (wraps every route)
│   ├── page.tsx                # Homepage: Hero + VideoGrid + BlogPreview
│   ├── actions.ts              # Server Actions: submitRegistration, submitContact
│   ├── sitemap.ts              # Auto-generated XML sitemap
│   ├── yoga/page.tsx           # Yoga styles, class formats, instructors, booking
│   ├── about/page.tsx          # Breathwork & meditation ("Breath & Beyond")
│   ├── courses/
│   │   ├── page.tsx            # 11-course catalog grid
│   │   └── [id]/page.tsx       # Dynamic course detail page
│   ├── blog/
│   │   ├── page.tsx            # Wellness/blog listing page (uses BlogCardsClient)
│   │   └── [slug]/page.tsx     # Blog post renderer (markdown)
│   ├── book-trial/page.tsx     # Trial registration form
│   ├── register/page.tsx       # 200H YTT application
│   ├── login/page.tsx          # Unified login + signup
│   ├── contact/page.tsx        # Contact form + FAQs
│   └── api/
│       └── og/route.tsx             # GET: dynamic OG image (Edge runtime)
├── components/
│   ├── Navbar.tsx              # Mega-menu, auth state, responsive
│   ├── Footer.tsx              # Brand, links, social
│   ├── Hero.tsx                # Crossfade hero slideshow + rotating phrase + CTAs
│   ├── VideoGrid.tsx           # 4 AI sequence cards (Hip Opening, Relaxation, Back Strength, Seated Flex)
│   ├── BlogPreview.tsx         # 2-card blog preview (homepage), aspect-[4/3] image framing
│   ├── BlogCardsClient.tsx     # Paginated blog cards (Wellness page) — 3/page, keyboard nav, dot indicators
│   ├── MadhuChatbot.tsx        # Floating bottom-right chatbot FAB → /ai
│   ├── RegistrationForm.tsx    # Course lead form
│   ├── ContactForm.tsx         # Contact form
│   ├── AuraCursor.tsx          # Custom cursor with aura glow
│   ├── SmoothScroll.tsx        # Lenis smooth scroll wrapper
│   ├── PageTransition.tsx      # Framer Motion page animation
│   ├── Reveal.tsx              # Scroll-triggered fade-in
│   └── ViewportBlur.tsx        # Edge blur effect
├── lib/
│   ├── prisma.ts               # Prisma singleton (dev cache)
│   ├── db.ts                   # Alternative Prisma singleton (used in actions.ts)
│   ├── blog.ts                 # BlogPost type + 5 hardcoded posts + helpers
│   ├── cms.ts                  # Program/Testimonial/Instructor mock data
│   └── utils.ts                # cn() = clsx + tailwind-merge
└── data/
    └── blogPosts.ts            # Blog preview metadata (2 posts: AI Companion + Breathwork)
```

---

## Database Schema (Prisma)

```prisma
model Registration {
  id        Int      @id @autoincrement()
  fullName  String
  email     String
  phone     String
  course    String   @default("General Inquiry / Other")
  createdAt DateTime @default(now())
}

model ContactSubmission {
  id        Int      @id @autoincrement()
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

**Migrate**: `npx prisma migrate dev --name <migration-name>`
**Generate client**: `npx prisma generate`
**Studio**: `npx prisma studio`

---

## Environment Variables

```env
# Vercel Postgres (pooled, for Prisma)
POSTGRES_PRISMA_URL=postgres://...?pgbouncer=true&connect_timeout=15

# Vercel Postgres (direct, for migrations)
POSTGRES_URL_NON_POOLING=postgres://...

# NextAuth
NEXTAUTH_SECRET=<random-secret>
NEXTAUTH_URL=https://www.oorjakull.com  # or http://localhost:3000 locally
```

---

## API Routes

### `POST /api/auth/register`
Creates a new user account.
- **Validates**: email format, password ≥ 8 chars, no duplicate email
- **Hashes**: password with bcryptjs (factor 12)
- **Returns**: `{ id, name, email, createdAt }` (no password)
- **Errors**: 400 (validation), 409 (duplicate), 500 (server)

### `GET /api/og`
Edge-rendered Open Graph image (1200×630).
- **Query params**: `title`, `tag`, `subtitle`
- **Runtime**: Edge
- **Output**: PNG with parchment background, ambient glows, dynamic typography

---

## Server Actions (`src/app/actions.ts`)

Both use `useFormState`-compatible signatures: `(prevState, formData) => Promise<{message}>`

- **`submitRegistration`** — saves to `Registration` table
  - Fields: `fullName`, `email`, `phone`, `course`
- **`submitContact`** — saves to `ContactSubmission` table
  - Fields: `name`, `email`, `message`

---

## Content Data Sources

### Blog Posts
- **Full content**: `src/lib/blog.ts` — `BLOG_POSTS[]` (5 posts, hardcoded markdown-like body)
- **Preview metadata**: `src/data/blogPosts.ts` — **2 posts** (AI Companion + Adaptive Breathwork), each with an `image` field pointing to `/public/*.png`
- **Homepage**: renders 2 cards via `BlogPreview.tsx` in a 2-column grid
- **Wellness page**: renders paginated cards via `BlogCardsClient.tsx` (3 per page, keyboard nav)
- **Adding a post**: add to `src/lib/blog.ts` AND `src/data/blogPosts.ts`; static generation uses `getAllBlogSlugs()`

### AI Sequences (homepage VideoGrid)
- Defined in `src/components/VideoGrid.tsx` — `AI_SEQUENCES[]` array (4 entries)
- Each has: `id`, `title`, `description`, `duration`, `level`, `tag`, `image` (local `/public/*.png`)
- All cards link to `/ai`
- To update: edit the array directly in `VideoGrid.tsx`

### Courses
- **Catalog grid**: hardcoded array in `src/app/courses/page.tsx`
- **Detail data (CMS mock)**: `src/lib/cms.ts` — `getProgram(id)` with 100ms simulated delay
- **Adding a course**: add to `courses/page.tsx` array, add a matching entry in `cms.ts`

### Yoga Classes / Instructors / Breathwork
- Hardcoded directly in their respective page files (`yoga/page.tsx`, `about/page.tsx`)

---

## Routing & Proxies

**`next.config.ts` rewrites:**
```
/ai/*   →  https://oorjakull-six.vercel.app/ai/*       (AI companion backend)
/api/*  →  https://oorjakull-backend.vercel.app/api/*  (General backend API)
```
> Note: `/api/og` is a local route — Next.js local routes always take precedence over rewrites.

---

## Authentication

Authentication has been **removed from this website**. Login, signup, and session management are handled entirely by the AI app at `/ai` (proxied to the external backend). The `next-auth`, `bcryptjs`, and related code/routes have been deleted. The `User` Prisma model has also been removed. Forms (Registration, ContactSubmission) remain and use Prisma directly.

---

## SEO Implementation

| Feature | Location |
|---|---|
| Root metadata | `src/app/layout.tsx` — `metadata` export |
| Page-level metadata | Each `page.tsx` — `metadata` or `generateMetadata` export |
| OG images | `src/app/api/og/route.tsx` — called via `metadataBase` + `openGraph.images` |
| JSON-LD (Org) | `src/app/layout.tsx` — `<script type="application/ld+json">` |
| JSON-LD (Article) | `src/app/blog/[slug]/page.tsx` |
| Sitemap | `src/app/sitemap.ts` — auto-generated, includes blog slugs |
| Analytics | `src/app/layout.tsx` — GA4 (G-PELZLEQXNB), Vercel Analytics |

**Canonical base URL**: `https://www.oorjakull.com`

---

## Styling Conventions

- **Class merging**: Always use `cn()` from `src/lib/utils.ts` (`clsx` + `tailwind-merge`)
- **Fonts**:
  - Sans: `Inter` — `var(--font-inter)` / `font-sans`
  - Serif: `Cormorant Garamond` — `var(--font-cormorant)` / `font-serif`
- **Color palette**: Earth tones, warm parchment (#f5eedd in OG), emerald accents
- **Gradients**: `from-primary/20 to-emerald-900/20`
- **Border radius**: `2xl`, `3xl` for cards/sections
- **Image framing**: Cards use `aspect-[4/3]` with `object-cover object-center` (not fixed heights)
- **Hero slideshow images**: Each slide in `HERO_IMAGES` has `{ desktop, mobile, desktopPosition, mobilePosition }`. Two `<Image fill>` are rendered per slide — mobile (`md:hidden`) and desktop (`hidden md:block`) — sharing the same opacity-animated wrapper div. `objectPosition` is set via inline style per image for precise subject framing at each breakpoint.
- **Animations**:
  - Scroll reveal: `<Reveal>` component (Framer Motion)
  - Page transitions: `template.tsx` + `PageTransition` component
  - Marquee: CSS `animate-marquee` / `animate-marquee-reverse`
  - Cursor: `AuraCursor` (Framer Motion follow + hover glow)

---

## Common Patterns

### Adding a New Page
1. Create `src/app/<route>/page.tsx`
2. Export `metadata` (or `generateMetadata` for dynamic)
3. Add to `src/app/sitemap.ts`
4. Add nav link in `src/components/Navbar.tsx` if needed

### Adding a New API Route
1. Create `src/app/api/<route>/route.ts`
2. Export named handlers: `GET`, `POST`, etc.
3. Use `import { db } from "@/lib/db"` for database access

### Adding a Blog Post
1. Add full post object to `BLOG_POSTS` array in `src/lib/blog.ts`
2. Add preview entry (with `image` field) to `src/data/blogPosts.ts`
3. Place image in `public/` and reference as `/filename.png`
4. No deployment config needed — `generateStaticParams` uses `getAllBlogSlugs()`

### Form Handling Pattern
```tsx
// In page.tsx
const [state, formAction] = useFormState(submitRegistration, { message: "" });

// In JSX
<form action={formAction}>
  ...
  {state.message && <p>{state.message}</p>}
</form>
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev           # http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint

# Prisma commands
npx prisma generate        # Regenerate client after schema changes
npx prisma migrate dev      # Apply schema changes in development
npx prisma studio           # Open DB GUI at localhost:5555
npx prisma db seed          # Run prisma/seed.ts
```

---

## Known Architecture Notes

- **Two Prisma singleton files** exist: `src/lib/prisma.ts` and `src/lib/db.ts`. Both serve the same purpose. `db.ts` is used in `actions.ts`. Consolidate to one if refactoring.
- **Blog data is split**: `src/lib/blog.ts` (full post content, 5 posts) and `src/data/blogPosts.ts` (preview metadata, currently 2 posts). Keep both in sync when adding posts.
- **CMS is mocked** in `src/lib/cms.ts` — no real CMS integration yet. All course content is static.
- **AI companion (Madhu)** functionality lives in the external backend at `oorjakull-six.vercel.app` — proxied via Next.js rewrites, not in this repo.
- **`pdf_imgs/`** in project root — working reference folder, excluded from git.

---

## Change Log

| Date | Change |
|---|---|
| 2026-04-05 | Removed all login/signup auth — `/login`, `/api/auth/*`, `Providers.tsx`, NextAuth, bcryptjs, `User` model; auth handled by `/ai` app |
| 2026-04-05 | Hero slide 2: portrait image (`hero_portrait_mobile.png`) served on mobile via dual `<Image>` per slide with Tailwind breakpoint visibility |
| 2026-04-05 | Updated DEV_REFERENCE & FEATURES to reflect v1.1 and follow-up commits |
| 2026-04-04 | `BlogCardsClient.tsx` — paginated blog cards (3/page, keyboard nav, dot indicators) on Wellness page |
| 2026-04-04 | Blog card image framing standardised to `aspect-[4/3] object-center` across homepage + Wellness page |
| 2026-04-04 | Hero badge updated; "OorjaKull School of Yoga" sub-tagline removed; relaxation image refreshed |
| 2026-04-04 | VideoGrid card aspect ratio changed from 16:9 to 4:3 with `object-center` |
| 2026-04-04 | Website v1.1 — AI-first redesign: Navbar, Hero slideshow, AI sequence cards, Madhu chatbot FAB, Footer, blog trimmed to 2 posts |

---

*This file is maintained by the development AI assistant. Update whenever significant changes are made to architecture, data sources, or conventions.*
