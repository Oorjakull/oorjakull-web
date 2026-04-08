import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YogaStylesClient from "@/components/YogaStylesClient";

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
        title: "Gentle Morning Flow",
        description: "Ease into your day with calm, grounding sequences. Gentle stretches, conscious breath and soft movement to awaken body and mind.",
        tag: "Gentle",
        image: "/yoga_gentle_morning_flow.png",
        objectPosition: "center 18%",
    },
    {
        title: "Surya Namaskar",
        description: "Master the Sun Salutation — the cornerstone of yoga practice. Build heat, rhythm and full-body coordination through this timeless sequence.",
        tag: "Foundation",
        image: "/yoga_surya_namaskar.png",
        objectPosition: "center 5%",
    },
    {
        title: "Standing Strength Flow",
        description: "Dynamic standing poses that build leg strength, balance and stability. Warrior sequences and transitions that ground and energise.",
        tag: "Strength",
        image: "/yoga_standing_strength_flow.png",
        objectPosition: "42% 25%",
    },
    {
        title: "Core & Balance",
        description: "Targeted core activation and balance training through functional yoga postures. Build a strong, stable foundation from the inside out.",
        tag: "Core",
        image: "/yoga_core_balance.png",
        objectPosition: "center 40%",
    },
    {
        title: "Back Body Strength",
        description: "Strengthen the posterior chain — spine, glutes and hamstrings — through backbends and extension poses. Counteract desk posture and tension.",
        tag: "Strength",
        image: "/yoga_back_body_strength.png",
        objectPosition: "center 45%",
    },
    {
        title: "Hip Opening Flow",
        description: "Deep, sustained hip openers to release stored tension, improve mobility and cultivate emotional ease. Great for runners and desk workers.",
        tag: "Restorative",
        image: "/yoga_hip_opening_flow.png",
        objectPosition: "center 50%",
    },
    {
        title: "Relaxation & Recovery",
        description: "A gentle, restorative practice for rest days and stress relief. Supported poses, long holds and conscious breathing to restore the nervous system.",
        tag: "Restorative",
        image: "/yoga_relaxation_recovery.png",
        objectPosition: "center 45%",
    },
    {
        title: "Seated Flexibility Flow",
        description: "Floor-based sequences targeting hamstrings, hips and spine flexibility. Accessible, focused and deeply effective for long-term mobility.",
        tag: "Flexibility",
        image: "/yoga_seated_flexibility_flow.png",
        objectPosition: "center 35%",
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
                            {["8 Yoga Styles", "AI-Guided Practice", "Small Batch Promise"].map((item) => (
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
                                Eight focused flows — from gentle mornings to deep recovery. Find the practice that fits your day.
                            </p>
                        </div>

                        <YogaStylesClient styles={YOGA_STYLES} />
                    </div>
                </section>



            </main>

            <Footer />
        </div>
    );
}

