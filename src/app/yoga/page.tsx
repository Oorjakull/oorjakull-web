import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, User, Star, BookOpen, Dumbbell, Heart, Baby, Briefcase, Users, Leaf } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Yoga Classes — Hatha, Ashtanga, Vinyasa, Yin & More",
    description: "Explore 7 yoga styles at OorjaKull — Beginner Foundations, Hatha, Ashtanga Vinyasa, Yin, Strength & Core, and advanced poses. Private 1:1, group, prenatal, corporate and therapeutic sessions.",
    alternates: { canonical: "https://www.oorjakull.com/yoga" },
    openGraph: {
        title: "Yoga Classes at OorjaKull — All Styles, All Levels",
        description: "From beginner foundations to advanced Ashtanga — 7 yoga styles, expert Acharyas and AI-enhanced sessions.",
        url: "https://www.oorjakull.com/yoga",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

// ── Data ──────────────────────────────────────────────────────────
const YOGA_STYLES = [
    {
        title: "Beginner Foundations",
        description: "Start your yoga journey with confidence. Learn alignment, breathwork and the foundational poses that underpin all styles.",
        tag: "Foundation",
        icon: "🌱",
        gradient: "from-emerald-500/20 to-primary/10",
        color: "text-primary",
    },
    {
        title: "Hatha Yoga",
        description: "Classical posture sequences held with steady breath — building strength, flexibility and inner stillness simultaneously.",
        tag: "Classical",
        icon: "☀️",
        gradient: "from-amber-400/20 to-secondary/10",
        color: "text-secondary",
    },
    {
        title: "Ashtanga Vinyasa",
        description: "A dynamic, sequenced practice linking breath to movement. Builds heat, discipline and transformative body awareness.",
        tag: "Dynamic",
        icon: "🔥",
        gradient: "from-orange-500/20 to-accent/10",
        color: "text-accent",
    },
    {
        title: "Vinyasa Flow",
        description: "Creative, music-guided flows that celebrate movement. Each class is unique — expect variety, challenge and joy.",
        tag: "Creative",
        icon: "🌊",
        gradient: "from-sky-400/15 to-primary/10",
        color: "text-primary",
    },
    {
        title: "Yin Yoga",
        description: "Deep, meditative holds targeting connective tissue. Cultivate patience, release stored tension, restore energy.",
        tag: "Restorative",
        icon: "🌙",
        gradient: "from-violet-400/15 to-accent/10",
        color: "text-accent",
    },
    {
        title: "Strength & Core",
        description: "Yoga fused with functional strength training — build a resilient, injury-resistant body without sacrificing softness.",
        tag: "Strength",
        icon: "💪",
        gradient: "from-rose-400/15 to-secondary/10",
        color: "text-secondary",
    },
    {
        title: "Skilled Poses",
        description: "Advanced asana mastery — handstands, drop-backs, arm balances. Progressive coaching in a safe, encouraging environment.",
        tag: "Advanced",
        icon: "🤸",
        gradient: "from-fuchsia-400/15 to-primary/10",
        color: "text-primary",
    },
];

const SCHEDULE_ITEMS = [
    { icon: User, label: "1:1 Private Sessions", desc: "Fully personalised — your pace, your goals", tag: "Private", tagColor: "bg-primary/15 text-primary", charge: "From ₹2,000/session" },
    { icon: Users, label: "Group Classes", desc: "Community practice in small batches of max 12", tag: "Group", tagColor: "bg-secondary/15 text-secondary", charge: "From ₹500/class" },
    { icon: Heart, label: "Prenatal Yoga", desc: "Safe, nurturing movement for expecting mothers", tag: "Specialist", tagColor: "bg-rose-400/15 text-rose-700", charge: "From ₹1,200/session" },
    { icon: Baby, label: "Postnatal Recovery", desc: "Gentle restoration and core rebuilding post-birth", tag: "Specialist", tagColor: "bg-pink-400/15 text-pink-700", charge: "From ₹1,200/session" },
    { icon: Briefcase, label: "Corporate Wellness", desc: "On-site or virtual yoga for teams and offices", tag: "Corporate", tagColor: "bg-sky-400/15 text-sky-700", charge: "Custom pricing" },
    { icon: Dumbbell, label: "Athletes & Sports Yoga", desc: "Mobility, recovery and injury prevention for athletes", tag: "Sport", tagColor: "bg-orange-400/15 text-orange-700", charge: "From ₹1,500/session" },
    { icon: Leaf, label: "Seniors Yoga", desc: "Chair-assisted and gentle movement for all ages", tag: "Inclusive", tagColor: "bg-green-400/15 text-green-700", charge: "From ₹600/class" },
    { icon: Star, label: "Kids Yoga", desc: "Playful, story-based yoga for ages 5–14", tag: "Kids", tagColor: "bg-violet-400/15 text-violet-700", charge: "From ₹500/class" },
    { icon: Heart, label: "Back Pain Yoga", desc: "Therapeutic sequences to decompress the spine and relieve chronic back pain", tag: "Therapeutic", tagColor: "bg-amber-400/15 text-amber-700", charge: "From ₹1,500/session" },
    { icon: BookOpen, label: "Yoga for Spondylitis", desc: "Gentle, evidence-based poses to ease cervical and ankylosing spondylitis", tag: "Therapeutic", tagColor: "bg-amber-400/15 text-amber-700", charge: "From ₹1,500/session" },
    { icon: Leaf, label: "Yoga for Knee Pain", desc: "Strengthen and stabilise the knee joint — reduce inflammation and improve mobility", tag: "Therapeutic", tagColor: "bg-teal-400/15 text-teal-700", charge: "From ₹1,500/session" },
    { icon: Dumbbell, label: "Yoga for Sciatica", desc: "Targeted stretches and breath-work to relieve sciatic nerve compression and pain", tag: "Therapeutic", tagColor: "bg-teal-400/15 text-teal-700", charge: "From ₹1,500/session" },
];


const INSTRUCTORS = [
    {
        name: "Acharya Priya Nair",
        photo: "🧘‍♀️",
        style: "Hatha & Yin",
        bio: "With 18 years of dedicated practice under Mysore lineage teachers, Priya weaves anatomy, philosophy and breathwork into every class.",
        certifications: ["E-RYT 500 (Yoga Alliance)", "Yin Yoga (YACEP)", "Ayurvedic Lifestyle Counsellor"],
        signature: ["Morning Hatha Flow", "Yin for Deep Release", "Pranayama Intensive"],
        gradient: "from-primary/15 to-emerald-800/10",
    },
    {
        name: "Guru Rohan Mehta",
        photo: "🧘‍♂️",
        style: "Ashtanga & Strength",
        bio: "Rohan trained for 8 years in Mysore with Sharath Jois. His classes are precise, energising and grounded in the original lineage.",
        certifications: ["E-RYT 500 Ashtanga", "NSCA Strength Coach", "Sports Yoga Specialist"],
        signature: ["Mysore Ashtanga", "Strength & Core", "Athlete Recovery"],
        gradient: "from-secondary/15 to-amber-900/10",
    },
    {
        name: "Shanti Krishnaswamy",
        photo: "🪷",
        style: "Vinyasa & Prenatal",
        bio: "A perinatal yoga specialist and Vinyasa artist, Shanti's classes feel like elegant choreography — uplifting yet deeply therapeutic.",
        certifications: ["E-RYT 200 Vinyasa", "Prenatal & Postnatal RPYT", "Mindfulness Teacher (MBSR)"],
        signature: ["Vinyasa Flow", "Prenatal Journey", "Mindful Movement"],
        gradient: "from-accent/15 to-rose-900/10",
    },
];

// ── Page ──────────────────────────────────────────────────────────
export default function YogaPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />

            <main className="flex-1">

                {/* ══════════════════════════════════════════════
                    1. HERO BANNER
                ══════════════════════════════════════════════ */}
                <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-background">
                    {/* Ambient glows */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/18 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[130px] translate-y-1/4 -translate-x-1/4" />
                        <div className="absolute inset-0 dot-pattern opacity-25" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 md:px-8 pt-32 pb-20 text-center flex flex-col items-center gap-7">
                        {/* Eyebrow */}
                        <span className="inline-flex items-center gap-2 text-sm font-semibold bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full">
                            🪷 OorjaKull Yoga Studio
                        </span>

                        {/* Primary headline */}
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif font-light text-foreground leading-[1.08] max-w-4xl">
                            Every Body Deserves{" "}
                            <span className="text-primary italic">the Gift of Yoga</span>
                        </h1>

                        {/* Yoga overview statement */}
                        <p className="text-foreground/65 text-xl font-light leading-relaxed max-w-2xl">
                            From your very first breath to your most advanced asana — our yoga programs
                            meet you exactly where you are and guide you towards where you want to be.
                            Rooted in tradition. Alive for today.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                href="#styles"
                                className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                            >
                                Explore Styles
                            </Link>
                        </div>

                        {/* Quick trust row */}
                        <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-foreground/8 w-full max-w-xl">
                            {["7 Active Styles", "3 Expert Instructors", "Small Batch Promise"].map((item) => (
                                <span key={item} className="text-xs text-foreground/45 uppercase tracking-widest font-medium">{item}</span>
                            ))}
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30">
                        <p className="text-xs uppercase tracking-[0.3em]">Scroll</p>
                        <div className="w-px h-10 bg-gradient-to-b from-foreground/30 to-transparent" />
                    </div>
                </section>


                {/* ══════════════════════════════════════════════
                    2. YOGA STYLES CARD GRID
                ══════════════════════════════════════════════ */}
                <section id="styles" className="py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-14">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">What We Teach</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Yoga Styles</h2>
                            <p className="text-foreground/55 mt-4 max-w-xl mx-auto font-light leading-relaxed">
                                Seven distinct approaches — from your first class to mastery. Find your practice.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {YOGA_STYLES.map((style) => (
                                <div
                                    key={style.title}
                                    className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
                                >
                                    {/* Colour header */}
                                    <div className={`h-28 bg-gradient-to-br ${style.gradient} flex items-center justify-center text-5xl relative`}>
                                        <span className="group-hover:scale-110 transition-transform duration-300">{style.icon}</span>
                                        <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/80 ${style.color}`}>
                                            {style.tag}
                                        </span>
                                    </div>

                                    <div className="p-5 flex flex-col flex-1 gap-3">
                                        <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                                            {style.title}
                                        </h3>
                                        <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                                            {style.description}
                                        </p>
                                        <Link
                                            href="/book-trial"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-1 hover:gap-2.5 transition-all"
                                        >
                                            Learn More <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* ══════════════════════════════════════════════
                    3. SCHEDULE SECTION
                ══════════════════════════════════════════════ */}
                <section className="py-24 bg-muted/50">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-14">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">Schedule & Booking</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Find Your Session</h2>
                            <p className="text-foreground/55 mt-4 max-w-xl mx-auto font-light leading-relaxed">
                                From private 1:1 coaching to specialist programs — every format links directly to our registration page.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                            {SCHEDULE_ITEMS.map(({ icon: Icon, label, desc, tag, tagColor, charge }) => (
                                <Link
                                    key={label}
                                    href="/book-trial"
                                    className="group flex flex-col gap-4 bg-card rounded-2xl border border-muted p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColor}`}>{tag}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors leading-snug">
                                            {label}
                                        </h3>
                                        <p className="text-sm text-foreground/55 mt-1.5 leading-relaxed">{desc}</p>
                                        <p className="text-xs text-secondary font-semibold mt-2">{charge}</p>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-auto">
                                        Register <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Master CTA row */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book-trial"
                                className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                            >
                                Book Your First Class
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-foreground/20 text-foreground/70 font-medium hover:border-primary/60 hover:text-primary transition-all"
                            >
                                <Calendar className="w-4 h-4" />
                                Talk to an Instructor
                            </Link>
                        </div>
                    </div>
                </section>


                {/* ══════════════════════════════════════════════
                    4. INSTRUCTOR SECTION
                ══════════════════════════════════════════════ */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-14">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">Your Guides</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Meet the Instructors</h2>
                            <p className="text-foreground/55 mt-4 max-w-xl mx-auto font-light leading-relaxed">
                                Each Acharya brings a unique lineage, depth of training and genuine passion for the tradition.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            {INSTRUCTORS.map((instr, idx) => (
                                <div
                                    key={instr.name}
                                    className={`group flex flex-col md:flex-row gap-0 bg-card rounded-3xl border border-muted overflow-hidden hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/6 transition-all duration-400 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Photo panel — Left (or Right on alt rows) */}
                                    <div className={`md:w-72 lg:w-80 shrink-0 bg-gradient-to-br ${instr.gradient} flex flex-col items-center justify-center gap-4 py-12 px-8 relative overflow-hidden`}>
                                        {/* Background orbs */}
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/8 rounded-full blur-2xl" />
                                        {/* Avatar */}
                                        <div className="relative z-10 w-32 h-32 rounded-full bg-white/25 border-2 border-white/30 flex items-center justify-center text-6xl shadow-xl">
                                            {instr.photo}
                                        </div>
                                        <div className="relative z-10 text-center">
                                            <h3 className="text-xl font-serif font-semibold text-foreground">{instr.name}</h3>
                                            <p className="text-sm text-primary font-semibold mt-1 uppercase tracking-wider">{instr.style}</p>
                                        </div>
                                    </div>

                                    {/* Content panel */}
                                    <div className="flex-1 p-8 lg:p-10 flex flex-col gap-6">
                                        {/* Bio */}
                                        <p className="text-foreground/70 text-base leading-relaxed max-w-xl">
                                            {instr.bio}
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Certifications */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <BookOpen className="w-4 h-4 text-primary/60" />
                                                    <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.2em]">Certifications</h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {instr.certifications.map((cert) => (
                                                        <li key={cert} className="text-sm text-foreground/65 flex items-start gap-2">
                                                            <span className="text-primary mt-1 shrink-0">·</span>
                                                            {cert}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Signature classes */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Star className="w-4 h-4 text-secondary/60" />
                                                    <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.2em]">Signature Classes</h4>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {instr.signature.map((cls) => (
                                                        <span
                                                            key={cls}
                                                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary"
                                                        >
                                                            {cls}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Book CTA */}
                                        <div className="mt-auto pt-2">
                                            <Link
                                                href="/book-trial"
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                                            >
                                                Book with {instr.name.split(" ")[1]} <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

