import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, BookOpen, Leaf, Users, Trophy, Play, Heart } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wellness Insights — Yoga Tips, Ayurveda & AI Wellness Guides",
    description: "OorjaKull's wellness library — yoga pose guides, Ayurvedic nutrition, daily rituals, AI wellness insights and community transformation stories.",
    alternates: { canonical: "https://www.oorjakull.com/blog" },
    openGraph: {
        title: "Wellness Insights & Community at OorjaKull",
        description: "Yoga tips, Ayurvedic nutrition, AI wellness guides and transformation stories from the OorjaKull community.",
        url: "https://www.oorjakull.com/blog",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

// ── Wisdom Section ──────────────────────────────────────────────────────
const WISDOM_CARDS = [
    {
        emoji: "🧘",
        icon: BookOpen,
        title: "Pose Library & Alignment Tips",
        description: "A comprehensive visual library of 200+ asanas — each with step-by-step alignment cues, modifications for all levels and common mistake corrections.",
        tag: "Asana",
        tagColor: "bg-primary/15 text-primary",
        gradient: "from-primary/15 to-emerald-900/10",
        cta: "Browse Library",
    },
    {
        emoji: "📖",
        icon: BookOpen,
        title: "Yoga Philosophy Made Simple",
        description: "The Yoga Sutras, the Bhagavad Gita and the 8 Limbs of Yoga — distilled into accessible, practical wisdom for modern practitioners.",
        tag: "Philosophy",
        tagColor: "bg-secondary/15 text-secondary",
        gradient: "from-secondary/15 to-amber-900/10",
        cta: "Start Reading",
    },
    {
        emoji: "🌿",
        icon: Leaf,
        title: "Daily Nutrition & Rituals",
        description: "Ayurvedic daily routines (Dinacharya) blended with modern nutritional science — simple, sustainable practices to elevate your everyday energy.",
        tag: "Lifestyle",
        tagColor: "bg-green-400/15 text-green-700",
        gradient: "from-green-400/15 to-teal-900/10",
        cta: "Explore Rituals",
    },
];

// ── Nutrition Section ────────────────────────────────────────────────────
const NUTRITION_CARDS = [
    {
        emoji: "🍂",
        title: "Seasonal Eating Guides",
        description: "Eat in harmony with nature's rhythms. Ayurvedic seasonal menus and recipes that balance the doshas and support your yoga practice year-round.",
        tag: "Ayurveda",
        tagColor: "bg-amber-400/15 text-amber-700",
        gradient: "from-amber-400/15 to-orange-900/10",
        videoPlaceholder: true,
    },
    {
        emoji: "✨",
        title: "Detox & Digestion Support",
        description: "Gentle cleanses, herbal recommendations and digestive yoga sequences to reset your gut, boost energy and clear mental fog holistically.",
        tag: "Detox",
        tagColor: "bg-lime-400/15 text-lime-700",
        gradient: "from-lime-400/15 to-green-900/10",
        videoPlaceholder: true,
    },
    {
        emoji: "☀️",
        title: "Energy-Boosting Morning Rituals",
        description: "A science-backed morning stack — breathwork, warm water, oil-pulling, light movement and sun salutations — set the tone for a high-energy day.",
        tag: "Morning",
        tagColor: "bg-orange-400/15 text-orange-700",
        gradient: "from-orange-400/15 to-rose-900/10",
        videoPlaceholder: true,
    },
];

// ── Community Section ────────────────────────────────────────────────────
const COMMUNITY_CARDS = [
    {
        emoji: "💬",
        icon: Users,
        title: "Member Q&A",
        description: "Ask anything — our Acharyas answer member questions every week in a live recorded session. All past Q&As are archived and searchable.",
        tag: "Live Weekly",
        tagColor: "bg-sky-400/15 text-sky-700",
        gradient: "from-sky-400/15 to-blue-900/10",
        action: "Ask a Question",
    },
    {
        emoji: "🏆",
        icon: Trophy,
        title: "Monthly Challenges",
        description: "Join our 30-day yoga, breathwork or meditation challenges. Complete milestones to earn reward points redeemable against sessions and courses.",
        tag: "Reward Points",
        tagColor: "bg-violet-400/15 text-violet-700",
        gradient: "from-violet-400/15 to-indigo-900/10",
        action: "Join Challenge",
    },
    {
        emoji: "🌟",
        icon: Heart,
        title: "Transformation Stories",
        description: "Real experiences from our community — weight loss journeys, injury recovery, PCOD management and personal breakthroughs shared by OorjaKull members.",
        tag: "Community",
        tagColor: "bg-rose-400/15 text-rose-700",
        gradient: "from-rose-400/15 to-pink-900/10",
        action: "Share Your Story",
    },
];

export default function PurposefulLivingPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* ══════════════════════════════
                    HERO
                ══════════════════════════════ */}
                <section className="relative bg-background pt-36 pb-24 flex items-center overflow-hidden min-h-[52vh]">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-secondary/15 rounded-full blur-[150px] -translate-y-1/4 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[130px]" />
                        <div className="absolute inset-0 dot-pattern opacity-18" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                        <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4">Purposeful Living</p>
                        <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-5 leading-[1.08]">
                            Live with Intention.<br />
                            <span className="text-primary italic">Flow with Purpose.</span>
                        </h1>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Wisdom, nutrition science and a living community — your complete guide to a life aligned with health, clarity and meaningful practice.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════
                    1. WISDOM SECTION
                ══════════════════════════════ */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">Knowledge Hub</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Wisdom</h2>
                            <p className="text-foreground/55 mt-3 max-w-lg mx-auto font-light leading-relaxed">
                                Ancient knowledge made accessible — explore our growing library of guides, articles and practice tools.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {WISDOM_CARDS.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div key={card.title} className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300">
                                        <div className={`h-32 bg-gradient-to-br ${card.gradient} flex items-center justify-center relative`}>
                                            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{card.emoji}</span>
                                            <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/75 ${card.tagColor}`}>{card.tag}</span>
                                        </div>
                                        <div className="p-6 flex flex-col flex-1 gap-3">
                                            <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">{card.title}</h3>
                                            <p className="text-sm text-foreground/60 leading-relaxed flex-1">{card.description}</p>
                                            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-2 hover:gap-2.5 transition-all group/btn">
                                                {card.cta} <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    2. NUTRITION SECTION
                ══════════════════════════════ */}
                <section className="py-20 bg-muted/40">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-3">Nourish</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Nutrition</h2>
                            <p className="text-foreground/55 mt-3 max-w-lg mx-auto font-light leading-relaxed">
                                Food as medicine, morning as ritual — practical guides rooted in Ayurveda and modern nutrition science.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {NUTRITION_CARDS.map((card) => (
                                <div key={card.title} className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-secondary/25 hover:shadow-xl hover:shadow-secondary/8 transition-all duration-300">
                                    {/* Video placeholder */}
                                    <div className={`relative h-44 bg-gradient-to-br ${card.gradient} flex items-center justify-center overflow-hidden`}>
                                        <span className="text-5xl">{card.emoji}</span>
                                        {card.videoPlaceholder && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                                <div className="w-12 h-12 rounded-full bg-white/30 border-2 border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/50 transition-colors cursor-pointer">
                                                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                                </div>
                                                <span className="absolute bottom-3 right-3 text-xs text-white/70 bg-black/30 px-2 py-0.5 rounded-full">Video coming soon</span>
                                            </div>
                                        )}
                                        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/75 ${card.tagColor}`}>{card.tag}</span>
                                    </div>
                                    <div className="p-6 flex flex-col gap-3">
                                        <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-secondary transition-colors leading-snug">{card.title}</h3>
                                        <p className="text-sm text-foreground/60 leading-relaxed">{card.description}</p>
                                        <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary mt-1 hover:gap-2.5 transition-all group/btn">
                                            Learn More <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════
                    3. COMMUNITY SECTION
                ══════════════════════════════ */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">Belong</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Community</h2>
                            <p className="text-foreground/55 mt-3 max-w-lg mx-auto font-light leading-relaxed">
                                A living, breathing community of people committed to growth — Q&As, challenges and real transformation stories.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {COMMUNITY_CARDS.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div key={card.title} className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300">
                                        <div className={`h-32 bg-gradient-to-br ${card.gradient} flex items-center justify-center relative`}>
                                            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{card.emoji}</span>
                                            <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/75 ${card.tagColor}`}>{card.tag}</span>
                                        </div>
                                        <div className="p-6 flex flex-col flex-1 gap-3">
                                            <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">{card.title}</h3>
                                            <p className="text-sm text-foreground/60 leading-relaxed flex-1">{card.description}</p>
                                            <Link href="/book-trial" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-2 hover:gap-2.5 transition-all group/btn">
                                                {card.action} <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Join Community CTA */}
                        <div className="text-center mt-14">
                            <div className="inline-flex flex-col items-center gap-5">
                                <p className="text-foreground/55 text-base font-light">Ready to join a community that walks the talk?</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/book-trial" className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/25 transition-all">
                                        Join the Community <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-foreground/20 text-foreground/65 font-medium hover:border-primary/50 hover:text-primary transition-all">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

