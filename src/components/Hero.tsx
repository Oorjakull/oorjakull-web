"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

const HERO_PHRASES = [
    "the Art of Teaching Yoga",
    "Inner Balance & Strength",
    "a Legacy of Wisdom",
    "Your Path as a Teacher",
];

export default function Hero() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        const currentPhrase = HERO_PHRASES[phraseIndex];
        if (!isDeleting && displayed === currentPhrase) {
            timerRef.current = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && displayed === "") {
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % HERO_PHRASES.length);
        } else {
            const speed = isDeleting ? 40 : 70;
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
        <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                {/* Deep green gradient orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
                <div className="absolute inset-0 dot-pattern opacity-20" />

                {/* Decorative Lines */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="flex flex-col gap-8">
                        {/* Badge */}
                        <div className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-medium glass text-white/90">
                            <span className="flex h-2 w-2 rounded-full bg-primary-light animate-pulse-slow" />
                            New Batch Starts June 2026
                        </div>

                        {/* Headline with Typewriter */}
                        <div>
                            <p className="text-white/50 text-sm font-medium uppercase tracking-[0.3em] mb-3">
                                Train the Trainer Program
                            </p>
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-light text-white leading-[1.1]">
                                Master{" "}
                                <span className="block mt-1 text-primary-light min-h-[1.3em]">
                                    {displayed}
                                    <span className="animate-pulse-slow text-secondary">|</span>
                                </span>
                            </h1>
                        </div>

                        {/* Subtext */}
                        <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg">
                            Join India's premier yoga teacher training program. 200-hour YTT
                            certified by experienced Acharyas blending ancient wisdom with
                            modern pedagogy.
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-8 py-4 border-t border-white/10">
                            {[
                                { value: "200+", label: "Hours of Training" },
                                { value: "50+", label: "Graduates" },
                                { value: "15+", label: "Years Legacy" },
                            ].map(({ value, label }) => (
                                <div key={label} className="flex flex-col">
                                    <span className="text-3xl font-serif font-semibold text-primary-light">
                                        {value}
                                    </span>
                                    <span className="text-xs text-white/50 uppercase tracking-wider mt-0.5">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                            <Link
                                href="/courses"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all"
                            >
                                Explore Courses
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white/80 font-medium text-base border border-white/20 hover:border-white/50 hover:text-white transition-all"
                            >
                                <Play className="w-4 h-4" />
                                Our Story
                            </Link>
                        </div>
                    </div>

                    {/* Right: Floating Logo / Visual */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[480px]">
                            {/* Main image card */}
                            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark-bg flex items-center justify-center">
                                    <div className="relative h-72 w-72 animate-float">
                                        <Image
                                            src="/logo_21.png"
                                            alt="OorjaKull"
                                            fill
                                            className="object-contain opacity-95"
                                            priority
                                        />
                                    </div>
                                </div>
                                {/* Glow overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -left-6 top-1/4 glass rounded-2xl p-4 text-white shadow-xl">
                                <p className="text-xs text-white/60 uppercase tracking-wide">Next Batch</p>
                                <p className="text-lg font-serif font-semibold mt-0.5">June 2026</p>
                                <p className="text-xs text-primary-light mt-1">Limited seats</p>
                            </div>

                            <div className="absolute -right-6 bottom-1/4 glass rounded-2xl p-4 text-white shadow-xl">
                                <p className="text-xs text-white/60 uppercase tracking-wide">Certification</p>
                                <p className="text-sm font-semibold mt-0.5">Yoga Alliance</p>
                                <p className="text-xs text-white/60 mt-1">200H RYT</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
                    <p className="text-xs uppercase tracking-[0.3em]">Scroll</p>
                    <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
                </div>
            </div>
        </section>
    );
}
