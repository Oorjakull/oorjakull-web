"use client";

import Link from "next/link";
import { Clock, Sparkles } from "lucide-react";
import Reveal, { StaggerReveal, StaggerItem } from "@/components/Reveal";

const AI_SEQUENCES = [
    {
        id: "hip-opening-flow",
        title: "Hip Opening Flow",
        description: "A dynamic sequence targeting hip mobility and flexibility with Madhu's real-time alignment feedback.",
        duration: "20 min",
        level: "All Levels",
        tag: "Mobility",
        image: "/hip_opening_flow.png",
    },
    {
        id: "relaxation-recovery",
        title: "Relaxation & Recovery",
        description: "Gentle restorative poses guided by Madhu to aid muscle recovery and calm the nervous system.",
        duration: "25 min",
        level: "All Levels",
        tag: "Restorative",
        image: "/relaxation_recovery_v3.png",
    },
    {
        id: "back-body-strength",
        title: "Back Body Strength",
        description: "Build posterior chain strength through AI-corrected postures for a pain-free, resilient back.",
        duration: "30 min",
        level: "Intermediate",
        tag: "Strength",
        image: "/back_body_strength_v2.png",
    },
    {
        id: "seated-flexibility-flow",
        title: "Seated Flexibility Flow",
        description: "Unlock deep flexibility with seated postures validated by real-time camera tracking.",
        duration: "20 min",
        level: "Beginner",
        tag: "Flexibility",
        image: "/seated_flexibility_flow_v2.png",
    },
];

const TAG_COLORS: Record<string, string> = {
    Mobility: "bg-primary/15 text-primary",
    Restorative: "bg-secondary/15 text-secondary",
    Strength: "bg-accent/15 text-accent",
    Flexibility: "bg-emerald-500/15 text-emerald-600",
};

function SequenceCard({ sequence }: { sequence: typeof AI_SEQUENCES[number] }) {
    return (
        <Link href="/ai" className="group block">
            <div className="relative rounded-2xl overflow-hidden border border-muted shadow-lg hover:shadow-2xl hover:shadow-foreground/10 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={sequence.image}
                        alt={sequence.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                        }}
                    />

                    {/* Fallback gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-muted to-secondary/20 -z-10" />

                    {/* Bottom scrim with title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent">
                        <div className="flex items-center justify-between">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[sequence.tag] || "bg-muted text-foreground/70"} backdrop-blur-sm`}>
                                {sequence.tag}
                            </span>
                            <div className="flex items-center gap-1 text-white/80 text-xs">
                                <Clock className="w-3 h-3" />
                                {sequence.duration}
                            </div>
                        </div>
                        <h3 className="text-white font-serif font-medium text-lg mt-2 leading-snug">
                            {sequence.title}
                        </h3>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/88 backdrop-blur-sm flex flex-col justify-center items-center gap-4 px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-white/85 text-sm leading-relaxed max-w-xs">
                            {sequence.description}
                        </p>
                        <span className="text-xs font-semibold px-4 py-2 rounded-full bg-primary text-white">
                            Start with AI →
                        </span>
                        <span className="text-xs text-white/50 uppercase tracking-widest">{sequence.level}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function VideoGrid() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <Reveal width="100%" delay={0} className="mb-14">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                AI-Guided Sequences
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                                Choose Your Style
                            </h2>
                            <p className="text-foreground/55 mt-3 max-w-lg text-base font-light leading-relaxed">
                                Taste the OorjaKull AI approach. Dive into dynamically generated sequences validated by real-time camera tracking.
                            </p>
                        </div>
                        <Link
                            href="/ai"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
                        >
                            <Sparkles className="w-4 h-4" />
                            Try All in AI App
                        </Link>
                    </div>
                </Reveal>

                {/* 2×2 Sequence Grid */}
                <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.12}>
                    {AI_SEQUENCES.map((sequence) => (
                        <StaggerItem key={sequence.id}>
                            <SequenceCard sequence={sequence} />
                        </StaggerItem>
                    ))}
                </StaggerReveal>
            </div>
        </section>
    );
}
