"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HERO_PHRASES = [
    "AI-Powered Yoga",
    "Precision Posture Tracking",
    "Adaptive Practice",
    "Meet Madhu, Your AI Guide",
];

const HERO_IMAGES = [
    "/Yoga_Surya_Namaskara_9_My2gSC.webp",
    "/ai_hero_overlay_v2.png",
];

export default function Hero() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhraseIndex((i) => (i + 1) % HERO_PHRASES.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((i) => (i + 1) % HERO_IMAGES.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ═══════════════════════════════════════════════════════════
                Full-viewport hero — image background + text overlay
            ═══════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

                {/* ── Background images — crossfade slideshow ── */}
                {HERO_IMAGES.map((src, i) => (
                    <Image
                        key={src}
                        src={src}
                        alt="Yoga practitioner"
                        fill
                        className="object-cover object-center md:object-[30%_25%] transition-opacity duration-[1500ms] ease-in-out"
                        style={{ opacity: imageIndex === i ? 1 : 0 }}
                        priority={i === 0}
                        sizes="100vw"
                    />
                ))}

                {/* ── Overlay: balanced — image visible but text always legible ── */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55 z-[1]" />

                {/* ── Soft ambient glows on top of overlay ── */}
                <div className="absolute inset-0 z-[2] pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] -translate-y-1/3 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[140px] translate-y-1/4 -translate-x-1/4" />
                </div>

                {/* ── Centre-aligned content ── */}
                <div className="container relative z-10 mx-auto px-4 md:px-8 pt-32 pb-24 flex flex-col items-center text-center gap-8">

                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/15 text-white/85 text-center">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-secondary shrink-0" />
                        <span>OorjaKull Yoga · Powered by AI · Now Live</span>
                    </div>

                    {/* Primary Headline */}
                    <div className="space-y-3 max-w-4xl">
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif font-light text-white leading-[1.08] [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                            Transform Your Life with{" "}
                            <br />
                            <span className="text-[#c8e6c9] italic inline-grid items-center justify-items-center translate-y-[-0.05em]" aria-hidden="true">
                                {HERO_PHRASES.map((phrase, idx) => (
                                    <motion.span
                                        key={phrase}
                                        initial={false}
                                        animate={{
                                            opacity: phraseIndex === idx ? 1 : 0,
                                            filter: phraseIndex === idx ? "blur(0px)" : "blur(8px)",
                                            y: phraseIndex === idx ? 0 : 5,
                                        }}
                                        transition={{ duration: 1.4, ease: "easeInOut" }}
                                        className="col-start-1 row-start-1"
                                        style={{ pointerEvents: phraseIndex === idx ? "auto" : "none" }}
                                    >
                                        {phrase}
                                    </motion.span>
                                ))}
                            </span>
                            {/* Static keyword text visible to crawlers, visually hidden */}
                            <span className="sr-only">AI-Powered Yoga, Precision Posture Tracking, and Personalised Wellness</span>
                        </h1>
                    </div>

                    {/* Subheading */}
                    <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
                        Join India's first AI-driven wellness platform — ancient tradition powered by modern AI tracking. Transform your practice with real-time feedback and generative sessions.
                    </p>

                    {/* CTA row */}
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 pt-4">
                        {/* <Link
                            href="/ai"
                            className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-white text-primary font-bold text-base hover:bg-white/90 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 ring-4 ring-white/10"
                        >
                            <Sparkles className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400 group-hover:rotate-12 transition-all" />
                            Try Madhu — Free
                        </Link> */}
                        <Link
                            href="/yoga"
                            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary/90 text-white font-semibold text-base hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 backdrop-blur-sm"
                        >
                            Start Your Journey with AI
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
