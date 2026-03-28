"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const REASONS = [
    "Madhu — your always-on AI yoga companion, tracking every session",
    "Real-time camera-based pose detection with millisecond feedback",
    "Adaptive flows: AI curates Surya Namaskar, Core & Balance and more to your level",
    "Integrated breathwork protocols: NSDR, 4-7-8, Anulom Vilom and Kapalbhati",
    "AI voice guidance synced with each pose — no screen-watching needed",
    "Ancient lineage powered by a modern intelligence layer",
];

export default function WhySection() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual */}
                    <Reveal width="100%" delay={0.1} yOffset={40}>
                        <div className="relative order-2 lg:order-1">
                            <div className="relative h-[480px] rounded-3xl overflow-hidden bg-[#fdf5e4] border border-secondary/20 shadow-xl shadow-secondary/10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,131,42,0.12)_0%,_transparent_70%)]" />
                                <div className="relative h-64 w-64 opacity-95">
                                    <Image src="/logo_21.png" alt="OorjaKull" fill sizes="80px" className="object-contain" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/8 via-transparent to-transparent" />
                            </div>
                            {/* Floating card */}
                            <div className="absolute -bottom-6 -right-4 bg-white border border-muted rounded-2xl shadow-xl p-5 max-w-[200px]">
                                <p className="text-3xl font-serif font-bold text-primary">AI</p>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                                    Madhu &mdash;<br />Your Yoga Guide
                                </p>
                            </div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 dot-pattern rounded-2xl opacity-40" />
                        </div>
                    </Reveal>

                    {/* Right: Content */}
                    <Reveal width="100%" delay={0.2} yOffset={32}>
                        <div className="order-1 lg:order-2 flex flex-col gap-7">
                            <div>
                                <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                    Why OorjaKull AI?
                                </p>
                                <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
                                    Ancient wisdom meets{" "}
                                    <span className="text-primary">Modern Intelligence</span>
                                </h2>
                                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                                    OorjaKull is reimagining yoga for the AI era. Madhu, our intelligent
                                    companion, watches your form in real time, adapts each sequence to
                                    your body, and guides every breath — so tradition truly comes alive.
                                </p>
                            </div>

                            <ul className="space-y-3.5">
                                {REASONS.map((reason) => (
                                    <li key={reason} className="flex items-start gap-3 text-sm text-foreground/80">
                                        <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                                        </span>
                                        {reason}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/about"
                                className="group mt-2 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                            >
                                Explore our AI-powered programs
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}
