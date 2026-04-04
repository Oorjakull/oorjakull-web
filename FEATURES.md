# OorjaKull — Feature List

> India's first AI-powered yoga platform combining ancient wisdom with modern AI technology.
> **Stack**: Next.js 16 · Tailwind CSS 4 · Prisma ORM · PostgreSQL · NextAuth · Framer Motion

---

## Pages & Navigation

| Route | Description |
|---|---|
| `/` | Homepage with hero, free video sessions, and blog preview |
| `/yoga` | Yoga styles, live class formats, instructor profiles, and booking |
| `/about` | Breathwork & meditation programs ("Breath & Beyond") |
| `/courses` | Full course catalog (11 programs) |
| `/courses/[id]` | Individual course detail with curriculum and weekly schedule |
| `/blog` | Blog listing across multiple content categories |
| `/blog/[slug]` | Individual blog post with structured markdown content |
| `/book-trial` | Free trial class registration form |
| `/register` | 200H YTT application form |
| `/login` | Authentication page (login + signup in one view) |
| `/contact` | Contact form, class recommendations, and FAQ |

### Navigation

- **Mega-menu Navbar** with responsive breakpoints
- Active route highlighting
- Authentication-aware: shows profile dropdown for logged-in users
- Password visibility toggle on auth forms

---

## AI Features

### Madhu — AI Yoga Companion

- Real-time yoga pose detection using 33-point skeletal landmark tracking
- Powered by MoveNet + WebAssembly (runs fully on-device)
- Adaptive breathwork pacing based on individual capacity
- No user data sent to servers — privacy-first design
- Web Audio API integration for guided breathwork sounds
- AI-guided sessions: 100H included in 200H YTT curriculum

---

## Courses & Programs (11 Total)

| Program | Type | Duration |
|---|---|---|
| 200-Hour Yoga Teacher Training | Certification | 200H |
| 300-Hour Advanced TTC | Advanced Certification | 300H |
| 12-Week Weight Loss | Wellness | 12 Weeks |
| 12-Week PCOD/PCOS Program | Therapeutic | 12 Weeks |
| 12-Week Holistic Weight Gain | Wellness | 12 Weeks |
| 21-Day Stress Relief Immersion | Wellness | 21 Days |
| Yoga for Sciatica Pain | Therapeutic | Structured |
| Yoga for Lower Back Pain | Therapeutic | Structured |
| Yoga for Better Sleep | Wellness | Structured |
| Menopause Yoga | Therapeutic | 8 Weeks |
| Yoga for IBS | Therapeutic | 6 Weeks |

Each course includes: curriculum breakdown, weekly schedule, level indicator, and duration.

---

## Yoga Classes

### 7 Yoga Styles
Beginner Foundations · Hatha · Ashtanga Vinyasa · Vinyasa Flow · Yin Yoga · Strength & Core · Skilled Poses (Advanced)

### 13 Booking Formats
1:1 Private · Group Classes · Prenatal · Postnatal Recovery · Corporate Wellness · Athletes & Sports · Seniors · Kids · Back Pain · Spondylitis · Knee Pain · Sciatica

### 3 Expert Instructors
- **Acharya Priya Nair** — Hatha & Yin, E-RYT 500, 18 years experience
- **Guru Rohan Mehta** — Ashtanga & Strength, 8 years Mysore training, NSCA Coach
- **Shanti Krishnaswamy** — Vinyasa & Prenatal, Perinatal specialist, MBSR certified

---

## Breathwork & Meditation (6 Programs)

| Program | Duration | Focus |
|---|---|---|
| Yoga Nidra | 30–40 min | Deep rest & restoration |
| Pranayama | 20–45 min | Nadi Shodhana, Kapalabhati, Bhramari |
| Breathwork for Anxiety | 15–25 min | Amygdala & cortisol regulation |
| Morning Reset | 10–15 min | Energizing morning ritual |
| Bedtime Breath | 10–20 min | Evening wind-down |
| Meditation for Stress Relief | 20–30 min | Body scan, mindfulness, loving-kindness |

### Guided Meditation Series
- **Sound Meditation** — Himalayan bowls + binaural beats, 12 sessions
- **Structured Meditation Courses** — 8-week progressive programs with live Q&A

---

## Blog Content (5 Posts)

| Post | Tag | Read Time |
|---|---|---|
| Meet Madhu: Your AI Yoga Companion | AI Innovation | 8 min |
| Train the Trainer: Teaching Yoga in the AI Era | Career | 7 min |
| The Science of Adaptive Breathwork | Pranayama | 9 min |
| Yoga for PCOD: A Complete 12-Week Guide | Women's Health | 10 min |
| Best Yoga Poses for Sciatica Pain Relief | Therapeutic | 8 min |

---

## Free Content

- **4 Free YouTube Sessions** on homepage: Pranayama, Sun Salutation, Yoga Nidra, Foundational Breath
- Blog articles — publicly accessible, no login required

---

## Authentication & User Accounts

- Email + password authentication via NextAuth v4
- Secure password hashing with bcryptjs (work factor 12)
- Input validation: email format, minimum 8-character password
- Duplicate account prevention
- Session-aware UI (profile dropdown when logged in)
- Register & login in a unified `/login` view

---

## Forms & Lead Capture

| Form | Location | Fields |
|---|---|---|
| Book Free Trial | `/book-trial` | Full name, email, phone, course interest |
| Contact Us | `/contact` | Name, email, subject (dropdown), message |
| 200H YTT Application | `/register` | Full name, email, phone, program |

All form submissions are stored in PostgreSQL and handled via Next.js Server Actions.

---

## SEO & Discoverability

- Dynamic Open Graph image generation (`/api/og`) — 1200×630, edge-rendered
- Structured JSON-LD: Organization schema (homepage) + Article schema (blog posts)
- XML Sitemap auto-generated from routes and blog slugs
- Page-level metadata: title, description, canonical URLs
- Google Analytics 4 (GA4) integration
- Vercel Analytics + Speed Insights

---

## Performance & UX

- Smooth scrolling powered by Lenis
- Framer Motion page transitions and scroll-triggered reveals
- Custom aura cursor effect (`AuraCursor`)
- Viewport edge blur effect (`ViewportBlur`)
- CSS marquee animations
- Image-optimized background assets
- Edge runtime for OG image API route

---

## Infrastructure & Deployment

- **Hosting**: Vercel (production)
- **Database**: PostgreSQL via Vercel Postgres with connection pooling (pgBouncer)
- **ORM**: Prisma 5 with migrations
- **AI Backend proxy**: `/ai/*` → `https://oorjakull-six.vercel.app/ai/*`
- **API proxy**: `/api/*` → `https://oorjakull-backend.vercel.app/api/*`
- TypeScript strict mode throughout

---

## Database Models

| Model | Purpose |
|---|---|
| `User` | Auth accounts (id, name, email, hashed password) |
| `Registration` | Course/trial sign-up leads (name, email, phone, course) |
| `ContactSubmission` | Contact form inquiries (name, email, message) |

---

*Last updated: 2026-04-04*
