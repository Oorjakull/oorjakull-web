"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const HERO_PHRASES = [
    "AI-Powered Yoga",
    "Precision Posture Tracking",
    "Adaptive Practice",
    "Meet Madhu, Your AI Guide",
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
        <>
            {/* ═══════════════════════════════════════════════════════════
                Full-viewport hero — image background + text overlay
            ═══════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

                {/* ── Background image ── */}
                <Image
                    src="/hero-bg.png"
                    alt="Yoga practitioner"
                    fill
                    className="object-cover object-[30%_25%]"
                    priority
                    sizes="100vw"
                />

                {/* ── Overlay: dark gradient for text legibility ── */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60 z-[1]" />

                {/* ── Soft ambient glows on top of overlay ── */}
                <div className="absolute inset-0 z-[2] pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] -translate-y-1/3 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[140px] translate-y-1/4 -translate-x-1/4" />
                </div>

                {/* ── Centre-aligned content ── */}
                <div className="container relative z-10 mx-auto px-4 md:px-8 pt-32 pb-24 flex flex-col items-center text-center gap-8">

                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/15 text-white/85">
                        <Sparkles className="w-3.5 h-3.5 text-secondary" />
                        OorjaKull AI Platform · Powered by Madhu · Now Live
                    </div>

                    {/* Primary Headline */}
                    <div className="space-y-3 max-w-4xl">
                        <p className="text-white/50 text-sm font-medium uppercase tracking-[0.35em]">
                            OorjaKull School of Yoga
                        </p>
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif font-light text-white leading-[1.08] drop-shadow-lg">
                            Transform Your Life with{" "}
                            <br />
                            <span className="text-[#c8e6c9] italic min-h-[1.2em] inline-block">
                                {displayed}
                                <span className="animate-pulse text-white/40 not-italic">|</span>
                            </span>
                        </h1>
                    </div>

                    {/* Subheading */}
                    <p className="text-white/70 text-xl font-light leading-relaxed max-w-2xl drop-shadow-md">
                        Join India's first AI-driven wellness platform — ancient tradition powered by modern AI tracking. Transform your practice with real-time feedback and generative sessions.
                    </p>

                    {/* CTA row */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link
                            href="/about"
                            className="group inline-flex items-center justify-center gap-2.5 px-10 py-4.5 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                        >
                            Start Your Journey
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-full border border-white/25 text-white/80 font-medium text-base hover:border-white/50 hover:text-white backdrop-blur-sm transition-all duration-300"
                        >
                            Explore Programs
                        </Link>
                    </div>

                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 z-10">
                    <p className="text-xs uppercase tracking-[0.3em]">Scroll</p>
                    <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </div>

                {/* Bottom gradient for seamless transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
            </section>

            {/* ═══════════════════════════════════════════════════════════
                Scrolling taglines — below the hero image
            ═══════════════════════════════════════════════════════════ */}
            <div className="bg-background py-6 space-y-4 overflow-hidden border-b border-foreground/8">
                {/* Row 1 — scrolls left */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-16 animate-marquee whitespace-nowrap">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <span
                                key={`t1-${i}`}
                                className="text-foreground/35 text-sm uppercase tracking-[0.25em] font-medium shrink-0"
                            >
                                Real-time AI pose tracking · Adaptive breathwork · Ancient wisdom, modern intelligence…
                            </span>
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls right */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-16 animate-marquee-reverse whitespace-nowrap">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <span
                                key={`t2-${i}`}
                                className="text-foreground/30 text-sm uppercase tracking-[0.25em] font-light shrink-0"
                            >
                                Meet Madhu · Your AI yoga companion · Practice smarter, not harder…
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
