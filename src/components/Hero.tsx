"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const HERO_PHRASES = [
    "Conscious Yoga",
    "Breath & Beyond",
    "Purposeful Living",
    "Ancient Wisdom",
];

const MARQUEE_ITEMS = [
    "Your daily space for yoga, mindfulness, and complete well-being",
    "Welcome to a wellness journey designed for real life",
    "Transform body, calm mind, elevate energy",
    "Rooted in tradition · Alive for today",
    "Your daily space for yoga, mindfulness, and complete well-being",
    "Welcome to a wellness journey designed for real life",
    "Transform body, calm mind, elevate energy",
    "Rooted in tradition · Alive for today",
];

export default function Hero() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        const currentPhrase = HERO_PHRASES[phraseIndex];
        if (!isDeleting && displayed === currentPhrase) {
            timerRef.current = setTimeout(() => setIsDeleting(true), 2400);
        } else if (isDeleting && displayed === "") {
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % HERO_PHRASES.length);
        } else {
            const speed = isDeleting ? 38 : 68;
            timerRef.current = setTimeout(() => {
                setDisplayed(isDeleting
                    ? currentPhrase.slice(0, displayed.length - 1)
                    : currentPhrase.slice(0, displayed.length + 1)
                );
            }, speed);
        }
        return () => clearTimeout(timerRef.current);
    }, [displayed, isDeleting, phraseIndex]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

            {/* ── Ambient background glows ── */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-secondary/18 rounded-full blur-[160px] -translate-y-1/3 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] translate-y-1/4 -translate-x-1/4" />
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 dot-pattern opacity-25" />
                {/* Subtle warm horizon line */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/12 to-transparent" />
            </div>

            {/* ── Centre-aligned content ── */}
            <div className="container relative z-10 mx-auto px-4 md:px-8 pt-32 pb-24 flex flex-col items-center text-center gap-8">

                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-secondary/10 border border-secondary/20 text-foreground/75">
                    <Sparkles className="w-3.5 h-3.5 text-secondary" />
                    Yoga Teacher Training · June 2026 Batch Open
                </div>

                {/* Primary Headline */}
                <div className="space-y-3 max-w-4xl">
                    <p className="text-foreground/45 text-sm font-medium uppercase tracking-[0.35em]">
                        OorjaKull School of Yoga
                    </p>
                    <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif font-light text-foreground leading-[1.08]">
                        Transform Your Life with{" "}
                        <br />
                        <span className="text-primary italic min-h-[1.2em] inline-block">
                            {displayed}
                            <span className="animate-pulse text-secondary/70 not-italic">|</span>
                        </span>
                    </h1>
                </div>

                {/* Subheading — 1–2 lines */}
                <p className="text-foreground/65 text-xl font-light leading-relaxed max-w-2xl">
                    Transform your practice into a calling. Join India's most intentional yoga
                    teacher training — rooted in tradition, alive in the modern world.
                </p>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    {/* Primary CTA → Yoga / About page */}
                    <Link
                        href="/about"
                        className="group inline-flex items-center justify-center gap-2.5 px-10 py-4.5 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                    >
                        Start Your Journey
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Secondary CTA → Programs */}
                    <Link
                        href="/courses"
                        className="inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-full border border-foreground/20 text-foreground/70 font-medium text-base hover:border-primary/60 hover:text-primary transition-all duration-300"
                    >
                        Explore Programs
                    </Link>
                </div>

                {/* ── Animated marquee taglines ── */}
                <div className="w-full max-w-2xl overflow-hidden border-y border-foreground/8 py-3 my-1">
                    <div className="flex gap-12 animate-marquee whitespace-nowrap">
                        {MARQUEE_ITEMS.map((item, i) => (
                            <span key={i} className="text-xs text-foreground/40 uppercase tracking-[0.2em] font-medium shrink-0">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 pt-4 border-t border-foreground/8 w-full max-w-lg">
                    {[
                        { value: "200H", label: "Training" },
                        { value: "50+", label: "Graduates" },
                        { value: "98%", label: "Satisfaction" },
                    ].map(({ value, label }) => (
                        <div key={label} className="flex flex-col items-center">
                            <span className="text-2xl font-serif font-semibold text-primary">{value}</span>
                            <span className="text-xs text-foreground/45 uppercase tracking-wider mt-0.5">{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30">
                <p className="text-xs uppercase tracking-[0.3em]">Scroll</p>
                <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent" />
            </div>
        </section>
    );
}
