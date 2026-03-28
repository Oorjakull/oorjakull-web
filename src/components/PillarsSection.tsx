"use client";

import Reveal, { StaggerReveal, StaggerItem } from "@/components/Reveal";

const PILLARS = [
    {
        emoji: "🤖",
        title: "AI Pose Intelligence",
        description: "Real-time camera-based pose detection powered by Madhu — millisecond feedback on alignment, depth, and transitions rooted in Asana Science.",
    },
    {
        emoji: "🌬️",
        title: "Adaptive Breathwork",
        description: "AI-guided Pranayama protocols — Nadi Shodhana, Kapalbhati, NSDR and 4-7-8 — paced dynamically to your nervous system state.",
    },
    {
        emoji: "🧘",
        title: "Generative Meditation",
        description: "Madhu adapts your meditation session in real time: Dharana, Dhyana and guided body-scan sequences that respond to your practice history.",
    },
    {
        emoji: "📖",
        title: "Yoga Philosophy",
        description: "Study the Yoga Sutras, Upanishads and the full eight-limbed path of Ashtanga — the timeless foundation that no AI replaces.",
    },
    {
        emoji: "🌿",
        title: "Personalised Wellness",
        description: "Dosha-aware daily rituals and lifestyle guidance, surfaced intelligently by Madhu based on your active session data.",
    },
    {
        emoji: "🎓",
        title: "Train the Trainer",
        description: "Become a certified yoga teacher equipped to teach both in-person and AI-assisted classes — sequencing, ethics, cueing and community.",
    },
];

export default function PillarsSection() {
    return (
        <section className="py-24 bg-card">
            <div className="container mx-auto px-4 md:px-8">
                <Reveal width="100%" delay={0} className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                        What You&apos;ll Experience
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
                        Six Pillars of AI-Enhanced Yoga
                    </h2>
                    <p className="text-muted-foreground text-lg font-light">
                        Ancient wisdom amplified by modern intelligence — built for practitioners and future teachers alike.
                    </p>
                </Reveal>

                <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
                    {PILLARS.map((pillar) => (
                        <StaggerItem key={pillar.title}>
                            <div className="group relative p-7 rounded-2xl border border-muted bg-background hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/8 transition-all duration-300 cursor-default">
                                {/* Subtle warm hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <div className="text-4xl mb-5">{pillar.emoji}</div>
                                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerReveal>
            </div>
        </section>
    );
}
