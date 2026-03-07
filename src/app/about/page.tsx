import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Wind, Moon, Sun, Brain, Volume2, BookOpen, Sparkles, Play } from "lucide-react";

export const metadata = {
    title: "Breath & Beyond | OorjaKull",
    description: "Explore OorjaKull's breathwork and meditation programs — Yoga Nidra, Pranayama, breathwork for anxiety, morning resets, bedtime breath and guided meditation series.",
};

// ── Data ─────────────────────────────────────────────────────────

const PROGRAMS = [
    {
        icon: Moon,
        emoji: "🌙",
        title: "Yoga Nidra",
        description: "Enter the hypnagogic state between waking and sleep. A 30-minute session equates to 3–4 hours of deep rest — healing the nervous system from within.",
        tag: "Rest & Restore",
        tagColor: "bg-violet-400/15 text-violet-700",
        gradient: "from-violet-400/20 to-indigo-900/10",
        duration: "30–40 min",
    },
    {
        icon: Wind,
        emoji: "🌬️",
        title: "Pranayama",
        description: "Ancient breath sciences — Nadi Shodhana, Kapalabhati, Bhramari and more. Regulate your energy, sharpen focus and purify the pranic body.",
        tag: "Breathwork",
        tagColor: "bg-sky-400/15 text-sky-700",
        gradient: "from-sky-400/20 to-blue-900/10",
        duration: "20–45 min",
    },
    {
        icon: Brain,
        emoji: "🌿",
        title: "Breathwork for Anxiety",
        description: "Science-backed breathing techniques to calm the amygdala, lower cortisol and shift the autonomic nervous system from fight-or-flight to rest-and-digest.",
        tag: "Therapeutic",
        tagColor: "bg-green-400/15 text-green-700",
        gradient: "from-green-400/20 to-emerald-900/10",
        duration: "15–25 min",
    },
    {
        icon: Sun,
        emoji: "☀️",
        title: "Morning Reset",
        description: "A 10-minute breath-and-movement ritual to wake the body gently, set an intentional tone for the day and ignite your inner fire before the world rushes in.",
        tag: "Morning",
        tagColor: "bg-amber-400/15 text-amber-700",
        gradient: "from-amber-400/20 to-orange-900/10",
        duration: "10–15 min",
    },
    {
        icon: Moon,
        emoji: "🌛",
        title: "Bedtime Breath",
        description: "Wind-down breathwork designed to quiet mental chatter, release muscular tension and prepare the body for deep, restorative sleep.",
        tag: "Evening",
        tagColor: "bg-indigo-400/15 text-indigo-700",
        gradient: "from-indigo-400/20 to-violet-900/10",
        duration: "10–20 min",
    },
    {
        icon: Sparkles,
        emoji: "✨",
        title: "Meditation for Stress Relief",
        description: "Guided practices — body scan, mindful awareness and loving-kindness — to dissolve accumulated stress and restore a sense of ease and wholeness.",
        tag: "Meditation",
        tagColor: "bg-rose-400/15 text-rose-700",
        gradient: "from-rose-400/20 to-pink-900/10",
        duration: "20–30 min",
    },
];

const MEDITATION_SERIES = [
    {
        icon: Volume2,
        emoji: "🎵",
        title: "Sound Meditation",
        subtitle: "Himalayan Bowls & Binaural Frequencies",
        description: "Journey through carefully curated soundscapes — Himalayan singing bowls, binaural beats and nature-tones that entrain the brain into deep alpha and theta states. No experience needed.",
        features: ["12 guided sessions", "Himalayan bowl recordings", "Delta / Theta brainwave entrainment", "Beginner to advanced tracks"],
        gradient: "from-violet-500/15 via-indigo-500/10 to-primary/8",
        accent: "text-violet-700",
        accentBg: "bg-violet-400/12 border-violet-300/20",
    },
    {
        icon: BookOpen,
        emoji: "📿",
        title: "Structured Meditation Courses",
        subtitle: "8-Week Transformation Programs",
        description: "From foundational mindfulness to advanced Dharana — our structured 8-week programs give you a step-by-step framework. Each week builds on the last, guided by an Acharya with live Q&A support.",
        features: ["8-week progressive curriculum", "Live weekly group sessions", "Personal practice tracker", "Certificate of completion"],
        gradient: "from-secondary/15 via-amber-500/10 to-primary/8",
        accent: "text-secondary",
        accentBg: "bg-secondary/12 border-secondary/20",
    },
];

// ── Page ─────────────────────────────────────────────────────────

export default function BreathBeyondPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />

            <main className="flex-1">

                {/* ══════════════════════════════════════════════
                    1. HERO — calm visual, Breathe Now CTA
                ══════════════════════════════════════════════ */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

                    {/* ── Calm layered background ── */}
                    <div className="absolute inset-0 z-0">
                        {/* Soft concentric glow rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[900px] h-[900px] rounded-full bg-primary/5 animate-[pulse_8s_ease-in-out_infinite]" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[650px] h-[650px] rounded-full bg-secondary/8 animate-[pulse_6s_ease-in-out_infinite_1s]" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[420px] h-[420px] rounded-full bg-primary/8 animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
                        </div>
                        {/* Ambient corner glows */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/12 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
                        {/* Very subtle dot pattern */}
                        <div className="absolute inset-0 dot-pattern opacity-15" />
                    </div>

                    {/* ── Content ── */}
                    <div className="container relative z-10 mx-auto px-4 md:px-8 pt-36 pb-24 flex flex-col items-center text-center gap-8">

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 text-primary text-sm font-semibold px-4 py-2 rounded-full">
                            <Wind className="w-3.5 h-3.5" />
                            Breath & Beyond — OorjaKull
                        </div>

                        {/* Headline */}
                        <div className="space-y-4 max-w-4xl">
                            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif font-light text-foreground leading-[1.06]">
                                Breathe Deep. Restore Balance.{" "}
                                <br className="hidden sm:block" />
                                <span className="text-primary italic">Reclaim Your Energy.</span>
                            </h1>
                        </div>

                        {/* Subtext */}
                        <p className="text-foreground/60 text-xl font-light leading-relaxed max-w-2xl">
                            Ancient breath sciences and modern meditation practices — curated to calm your nervous system, restore your vitality and dissolve the noise of daily life.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                href="#programs"
                                className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                            >
                                <Play className="w-4 h-4 fill-white" />
                                Breathe Now
                            </Link>
                            <Link
                                href="#meditation"
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-foreground/20 text-foreground/70 font-medium text-base hover:border-primary/60 hover:text-primary transition-all duration-300"
                            >
                                Guided Meditation Series
                            </Link>
                        </div>

                        {/* Calm trust row */}
                        <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-foreground/8 w-full max-w-lg">
                            {["6 Programs", "Expert-led", "All Levels Welcome"].map((item) => (
                                <span key={item} className="text-xs text-foreground/40 uppercase tracking-widest font-medium">{item}</span>
                            ))}
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/25">
                        <p className="text-xs uppercase tracking-[0.3em]">Scroll</p>
                        <div className="w-px h-10 bg-gradient-to-b from-foreground/25 to-transparent" />
                    </div>
                </section>


                {/* ══════════════════════════════════════════════
                    2. PROGRAMS GRID
                ══════════════════════════════════════════════ */}
                <section id="programs" className="py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8">

                        <div className="text-center mb-14">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">What We Offer</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Programs</h2>
                            <p className="text-foreground/55 mt-4 max-w-xl mx-auto font-light leading-relaxed">
                                Six carefully designed practices — each one a doorway to deeper calm, clarity and connection with your breath.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {PROGRAMS.map((prog) => {
                                const Icon = prog.icon;
                                return (
                                    <div
                                        key={prog.title}
                                        className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 transition-all duration-400"
                                    >
                                        {/* Colour header */}
                                        <div className={`relative h-32 bg-gradient-to-br ${prog.gradient} flex items-center justify-center overflow-hidden`}>
                                            <span className="text-5xl group-hover:scale-110 transition-transform duration-300 select-none">
                                                {prog.emoji}
                                            </span>
                                            {/* Tag */}
                                            <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${prog.tagColor} bg-white/70 backdrop-blur-sm`}>
                                                {prog.tag}
                                            </span>
                                            {/* Duration */}
                                            <span className="absolute bottom-3 left-3 text-xs text-foreground/50 flex items-center gap-1">
                                                <span className="w-1 h-1 rounded-full bg-foreground/30 inline-block" />
                                                {prog.duration}
                                            </span>
                                        </div>

                                        {/* Body */}
                                        <div className="p-6 flex flex-col flex-1 gap-3">
                                            <h3 className="font-serif font-semibold text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                                                {prog.title}
                                            </h3>
                                            <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                                                {prog.description}
                                            </p>
                                            <Link
                                                href="/register"
                                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-2 hover:gap-2.5 transition-all group/btn"
                                            >
                                                Start Practice
                                                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/* ══════════════════════════════════════════════
                    3. GUIDED MEDITATION SERIES
                ══════════════════════════════════════════════ */}
                <section id="meditation" className="py-24 bg-muted/40">
                    <div className="container mx-auto px-4 md:px-8">

                        <div className="text-center mb-14">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">Go Deeper</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Guided Meditation Series</h2>
                            <p className="text-foreground/55 mt-4 max-w-xl mx-auto font-light leading-relaxed">
                                Two flagship series for those ready to move beyond individual sessions into a sustained, transformative practice.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            {MEDITATION_SERIES.map((series, idx) => {
                                const Icon = series.icon;
                                return (
                                    <div
                                        key={series.title}
                                        className={`group flex flex-col lg:flex-row gap-0 bg-card rounded-3xl border border-muted overflow-hidden hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/6 transition-all duration-400 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                    >
                                        {/* Visual panel */}
                                        <div className={`lg:w-80 shrink-0 bg-gradient-to-br ${series.gradient} flex flex-col items-center justify-center gap-5 py-14 px-10 relative overflow-hidden`}>
                                            <div className="absolute inset-0 dot-pattern opacity-20" />
                                            {/* Pulsing ring behind emoji */}
                                            <div className="relative z-10 flex items-center justify-center">
                                                <div className="absolute w-28 h-28 rounded-full bg-white/15 animate-pulse-slow" />
                                                <div className="relative w-20 h-20 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-5xl shadow-lg">
                                                    {series.emoji}
                                                </div>
                                            </div>
                                            <div className="relative z-10 text-center">
                                                <h3 className="text-xl font-serif font-semibold text-foreground">{series.title}</h3>
                                                <p className={`text-xs font-semibold mt-1.5 uppercase tracking-wider ${series.accent}`}>{series.subtitle}</p>
                                            </div>
                                        </div>

                                        {/* Content panel */}
                                        <div className="flex-1 p-8 lg:p-12 flex flex-col gap-6 justify-center">
                                            <p className="text-foreground/70 text-lg font-light leading-relaxed max-w-xl">
                                                {series.description}
                                            </p>

                                            {/* Features list */}
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {series.features.map((f) => (
                                                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/65">
                                                        <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-primary/15 flex items-center justify-center">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary block" />
                                                        </span>
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Enroll CTA */}
                                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                                <Link
                                                    href="/register"
                                                    className="group/cta inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all w-fit"
                                                >
                                                    Enroll Now
                                                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                                                </Link>
                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-foreground/20 text-foreground/65 font-medium hover:border-primary/50 hover:text-primary transition-all w-fit"
                                                >
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
