# OorjaKull — Developer Reference

> Internal reference for development. Updated as the codebase evolves.
> **Last updated**: 2026-04-04

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
│   ├── layout.tsx              # Root layout: fonts, GA4, JSON-LD, global providers
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
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post renderer (markdown)
│   ├── book-trial/page.tsx     # Trial registration form
│   ├── register/page.tsx       # 200H YTT application
│   ├── login/page.tsx          # Unified login + signup
│   ├── contact/page.tsx        # Contact form + FAQs
│   └── api/
│       ├── auth/register/route.ts   # POST: create user account
│       └── og/route.tsx             # GET: dynamic OG image (Edge runtime)
├── components/
│   ├── Navbar.tsx              # Mega-menu, auth state, responsive
│   ├── Footer.tsx              # Brand, links, social
│   ├── Hero.tsx                # Rotating phrase hero with CTAs
│   ├── VideoGrid.tsx           # 4 YouTube free sessions
│   ├── BlogPreview.tsx         # 3-card blog preview
│   ├── RegistrationForm.tsx    # Course lead form
│   ├── ContactForm.tsx         # Contact form
│   ├── Providers.tsx           # NextAuth SessionProvider
│   ├── AuraCursor.tsx          # Custom cursor with aura glow
│   ├── SmoothScroll.tsx        # Lenis smooth scroll wrapper
│   ├── PageTransition.tsx      # Framer Motion page animation
│   ├── Reveal.tsx              # Scroll-triggered fade-in
│   └── ViewportBlur.tsx        # Edge blur effect
├── lib/
│   ├── prisma.ts               # Prisma singleton (dev cache)
│   ├── db.ts                   # Alternative Prisma singleton
│   ├── blog.ts                 # BlogPost type + 5 hardcoded posts + helpers
│   ├── cms.ts                  # Program/Testimonial/Instructor mock data
│   └── utils.ts                # cn() = clsx + tailwind-merge
└── data/
    └── blogPosts.ts            # Blog metadata array (3 posts, for preview cards)
```

---

## Database Schema (Prisma)

```prisma
model User {
  id        String   @id @default(uuid())
  name      String?
  email     String   @unique
  password  String   // bcrypt hashed, factor 12
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

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
- **Preview metadata**: `src/data/blogPosts.ts` — (3 posts, used on homepage cards)
- **Adding a post**: Add to both files; `getAllBlogSlugs()` drives static generation

### Courses
- **Catalog grid**: hardcoded array in `src/app/courses/page.tsx`
- **Detail data (CMS mock)**: `src/lib/cms.ts` — `getProgram(id)` with 100ms simulated delay
- **Adding a course**: Add to `courses/page.tsx` array, add a matching entry in `cms.ts`

### Yoga Classes / Instructors / Breathwork
- Hardcoded directly in their respective page files (`yoga/page.tsx`, `about/page.tsx`)

---

## Routing & Proxies

**`next.config.ts` rewrites:**
```
/ai/*   →  https://oorjakull-six.vercel.app/ai/*       (AI companion backend)
/api/*  →  https://oorjakull-backend.vercel.app/api/*  (General backend API)
```
> Note: The `/api/auth` and `/api/og` routes are local — they are NOT proxied because the rewrite pattern `/api/*` in Next.js rewrites applies only to paths not matched by local API routes (Next.js local routes take precedence).

---

## Authentication Flow

1. **Signup**: `POST /api/auth/register` → creates `User` in DB → auto-login via NextAuth
2. **Login**: NextAuth credentials provider → verifies bcrypt hash → creates session
3. **Session**: JWT-based, managed by NextAuth
4. **UI state**: `useSession()` from `next-auth/react` (wrapped in `Providers.tsx`)
5. **Protected routes**: Add `getServerSession()` checks in page/layout server components as needed

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
2. Add preview metadata to `src/data/blogPosts.ts` (for homepage cards)
3. No deployment config needed — `generateStaticParams` uses `getAllBlogSlugs()`

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

- **Two Prisma singleton files** exist: `src/lib/prisma.ts` and `src/lib/db.ts`. Both serve the same purpose. `db.ts` is used in `actions.ts`; `prisma.ts` may be legacy. Consolidate to one if refactoring.
- **Blog data is split** across `src/lib/blog.ts` (full content, 5 posts) and `src/data/blogPosts.ts` (preview metadata, 3 posts). They are not in sync — keep this in mind when adding posts.
- **CMS is mocked** in `src/lib/cms.ts` — no real CMS integration yet. All course content is static.
- **AI companion (Madhu)** functionality lives in the external backend at `oorjakull-six.vercel.app` — proxied via Next.js rewrites, not in this repo.

---

## Change Log

| Date | Change |
|---|---|
| 2026-04-04 | Initial reference document created from full codebase audit |

---

*This file is maintained by the development AI assistant. Update whenever significant changes are made to architecture, data sources, or conventions.*
