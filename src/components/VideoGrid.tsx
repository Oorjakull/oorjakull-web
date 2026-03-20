"use client";

import { useState } from "react";
import { Play, Clock, Youtube } from "lucide-react";
import Reveal, { StaggerReveal, StaggerItem } from "@/components/Reveal";

const SESSIONS = [
    {
        id: "v7AYKMP6rOE",
        title: "Morning Pranayama Flow",
        description: "A gentle 20-minute breathwork session to energise your morning and centre the mind before the day begins.",
        duration: "20 min",
        level: "All Levels",
        tag: "Pranayama",
    },
    {
        id: "Eml2xnoLpYE",
        title: "Sun Salutation Mastery",
        description: "Break down each vinyasa with anatomical precision — perfect for teachers wanting to cue Surya Namaskar with confidence.",
        duration: "35 min",
        level: "Beginner",
        tag: "Asana",
    },
    {
        id: "sTANio_2E0Q",
        title: "Yoga Nidra for Deep Rest",
        description: "A profound 30-minute guided body-scan to release muscular tension, still the nervous system and restore inner calm.",
        duration: "30 min",
        level: "All Levels",
        tag: "Meditation",
    },
    {
        id: "4pKly2JojMw",
        title: "Foundational Ayurvedic Breath",
        description: "Explore Nadi Shodhana and Bhramari — two ancient balancing techniques taught step by step for everyday practice.",
        duration: "25 min",
        level: "Beginner",
        tag: "Pranayama",
    },
];

const TAG_COLORS: Record<string, string> = {
    Pranayama: "bg-primary/15 text-primary",
    Asana: "bg-secondary/15 text-secondary",
    Meditation: "bg-accent/15 text-accent",
};

function VideoCard({ session }: { session: typeof SESSIONS[number] }) {
    const [hovered, setHovered] = useState(false);
    const [playing, setPlaying] = useState(false);
    const thumb = `https://img.youtube.com/vi/${session.id}/maxresdefault.jpg`;

    return (
        <div
            className="group relative rounded-2xl overflow-hidden border border-muted shadow-lg hover:shadow-2xl hover:shadow-foreground/10 transition-all duration-500 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setPlaying(true)}
        >
            {playing ? (
                /* ── Embedded player ── */
                <div className="aspect-video w-full">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${session.id}?autoplay=1&rel=0`}
                        title={session.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            ) : (
                /* ── Thumbnail + hover overlay ── */
                <div className="relative aspect-video w-full bg-muted">
                    {/* Thumbnail */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={thumb}
                        alt={session.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            // fallback gradient if thumbnail fails
                            (e.target as HTMLImageElement).style.display = "none";
                        }}
                    />

                    {/* Fallback gradient (always rendered underneath) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-muted to-secondary/20 -z-10" />

                    {/* Always-visible bottom scrim with title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent">
                        <div className="flex items-center justify-between">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[session.tag] || 'bg-muted text-foreground/70'} backdrop-blur-sm`}>
                                {session.tag}
                            </span>
                            <div className="flex items-center gap-1 text-white/80 text-xs">
                                <Clock className="w-3 h-3" />
                                {session.duration}
                            </div>
                        </div>
                        <h3 className="text-white font-serif font-medium text-lg mt-2 leading-snug">
                            {session.title}
                        </h3>
                    </div>

                    {/* Hover overlay: description slides up */}
                    <div
                        className={`absolute inset-0 bg-foreground/88 backdrop-blur-sm flex flex-col justify-center items-center gap-4 px-6 text-center transition-all duration-400 ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                    >
                        {/* Play button */}
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
                        </div>
                        <p className="text-white/85 text-sm leading-relaxed max-w-xs">
                            {session.description}
                        </p>
                        <span className="text-xs text-white/50 uppercase tracking-widest">{session.level}</span>
                    </div>
                </div>
            )}
        </div>
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
                                Free Sessions
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                                Choose Your Style
                            </h2>
                            <p className="text-foreground/55 mt-3 max-w-lg text-base font-light leading-relaxed">
                                Taste the OorjaKull approach before you commit. Four carefully chosen free classes — hit play and begin.
                            </p>
                        </div>
                        <a
                            href="https://www.youtube.com/@oorjakull"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
                        >
                            <Youtube className="w-4 h-4" />
                            All Sessions on YouTube
                        </a>
                    </div>
                </Reveal>

                {/* 2×2 Video Grid */}
                <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.12}>
                    {SESSIONS.map((session) => (
                        <StaggerItem key={session.id}>
                            <VideoCard session={session} />
                        </StaggerItem>
                    ))}
                </StaggerReveal>

                {/* Ethical Credit */}
                <Reveal width="100%" delay={0.4} className="mt-12 pt-8 border-t border-muted text-center">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/30 font-medium">
                        Credits to the YouTube channel owners for providing these sessions and ensuring ethical yoga practices.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
