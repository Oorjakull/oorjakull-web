import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Target, CheckCircle2, Sparkles } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Wellness Programs & Yoga Teacher Training — 200H, 300H YTT",
    description: "Certified 200H & 300H Yoga Teacher Training, 12-week PCOD yoga, weight loss, sciatica, IBS and stress relief programs. AI-guided and Yoga Alliance certified at OorjaKull.",
    alternates: { canonical: "https://www.oorjakull.com/courses" },
    openGraph: {
        title: "Yoga Programs & Teacher Training at OorjaKull",
        description: "200H & 300H YTT, therapeutic yoga, AI-guided wellness programs. Certified by Yoga Alliance.",
        url: "https://www.oorjakull.com/courses",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

const GOALS = [
    {
        emoji: "🏅",
        title: "200-Hour Teacher Training",
        description: "The foundational certification that launches yoga careers. Deep dive into asana, pranayama, philosophy and teaching methodology — Yoga Alliance certified.",
        duration: "200H YTT",
        durationColor: "bg-primary/15 text-primary",
        tag: "Certification",
        tagColor: "bg-emerald-400/15 text-emerald-700",
        gradient: "from-primary/18 to-emerald-900/10",
        curriculum: ["Asana & Alignment (60H)", "Pranayama & Breathwork (20H)", "Yoga Philosophy & Sutras (30H)", "Anatomy & Physiology (20H)", "Teaching Methodology (40H)", "Practicum & Observation (30H)"],
    },
    {
        emoji: "🌟",
        title: "300-Hour Advanced TTC",
        description: "For certified teachers ready to deepen their practice. Advanced asana, specialisations, business of yoga and mentorship with senior Acharyas.",
        duration: "300H YTT",
        durationColor: "bg-secondary/15 text-secondary",
        tag: "Advanced",
        tagColor: "bg-amber-400/15 text-amber-700",
        gradient: "from-secondary/18 to-amber-900/10",
        curriculum: ["Advanced Asana & Adjustments (80H)", "Yoga Nidra & Meditation (40H)", "Specialisation elective (60H)", "Mentorship & Clinic hours (60H)", "Business of Yoga (30H)", "Research & Thesis (30H)"],
    },
    {
        emoji: "⚖️",
        title: "12-Week Weight Loss",
        description: "A structured 12-week program combining dynamic asana, breathwork and Ayurvedic nutrition principles for sustainable, holistic weight management.",
        duration: "12 Weeks",
        durationColor: "bg-orange-400/15 text-orange-700",
        tag: "Wellness",
        tagColor: "bg-orange-400/15 text-orange-700",
        gradient: "from-orange-400/15 to-rose-900/10",
        curriculum: ["Daily dynamic yoga sequences", "Pranayama for metabolism", "Ayurvedic meal planning", "Weekly progress check-ins", "Mindful eating practices", "Sleep & stress optimisation"],
    },
    {
        emoji: "🌸",
        title: "12-Week PCOD/PCOS Program",
        description: "Hormone-balancing yoga and lifestyle practices specifically designed for women managing PCOD/PCOS — reduce symptoms, regulate cycles and restore energy.",
        duration: "12 Weeks",
        durationColor: "bg-rose-400/15 text-rose-700",
        tag: "Women's Health",
        tagColor: "bg-rose-400/15 text-rose-700",
        gradient: "from-rose-400/15 to-pink-900/10",
        curriculum: ["Hormone-balancing asana", "Yin & restorative practices", "Pranayama for endocrine health", "Diet & lifestyle coaching", "Stress reduction techniques", "Community support group"],
    },
    {
        emoji: "🌱",
        title: "12-Week Holistic Weight Gain",
        description: "Gentle, nourishing yoga combined with Ayurvedic nutrition guidance for those seeking healthy, sustainable weight gain and improved vitality.",
        duration: "12 Weeks",
        durationColor: "bg-green-400/15 text-green-700",
        tag: "Wellness",
        tagColor: "bg-green-400/15 text-green-700",
        gradient: "from-green-400/15 to-emerald-900/10",
        curriculum: ["Strength-building asana", "Restorative & Yin practice", "Sattvic nutrition planning", "Digestive health focus", "Rest & recovery protocols", "Bi-weekly consultations"],
    },
    {
        emoji: "🧘",
        title: "21-Day Stress Relief",
        description: "A focused 21-day immersion using yoga nidra, pranayama and mindfulness to reset the nervous system and dissolve chronic stress patterns.",
        duration: "21 Days",
        durationColor: "bg-violet-400/15 text-violet-700",
        tag: "Mental Wellness",
        tagColor: "bg-violet-400/15 text-violet-700",
        gradient: "from-violet-400/15 to-indigo-900/10",
        curriculum: ["Daily 30-min yoga nidra", "Nerve-calming pranayama", "Guided body scan meditation", "Journalling & reflection", "Sleep hygiene protocol", "Breathwork for anxiety"],
    },
    {
        emoji: "⚡",
        title: "Yoga for Sciatica Pain",
        description: "Targeted asana and breathwork to relieve sciatic nerve compression, restore spinal health and prevent recurrence — guided by certified therapeutic yoga specialists.",
        duration: "Ongoing",
        durationColor: "bg-sky-400/15 text-sky-700",
        tag: "Therapeutic",
        tagColor: "bg-sky-400/15 text-sky-700",
        gradient: "from-sky-400/15 to-blue-900/10",
        curriculum: ["Piriformis & hip flexor release", "Spinal decompression poses", "Nerve glide techniques", "Core stability training", "Posture correction", "Home practice programme"],
    },
    {
        emoji: "🦴",
        title: "Yoga for Lower Back Pain",
        description: "Evidence-based yoga therapy for chronic lower back pain — strengthening, mobilising and stabilising the lumbar region safely and effectively.",
        duration: "Ongoing",
        durationColor: "bg-teal-400/15 text-teal-700",
        tag: "Therapeutic",
        tagColor: "bg-teal-400/15 text-teal-700",
        gradient: "from-teal-400/15 to-green-900/10",
        curriculum: ["Lumbar stabilisation asanas", "Psoas & glute activation", "Forward bend modifications", "Spinal twist therapy", "Core & erector strengthening", "Daily movement routine"],
    },
    {
        emoji: "🌙",
        title: "Yoga for Better Sleep",
        description: "A restorative yoga and breathwork program to address insomnia, shallow sleep and irregular sleep cycles using clinically-informed yoga techniques.",
        duration: "4 Weeks",
        durationColor: "bg-indigo-400/15 text-indigo-700",
        tag: "Wellness",
        tagColor: "bg-indigo-400/15 text-indigo-700",
        gradient: "from-indigo-400/15 to-violet-900/10",
        curriculum: ["Bedtime yin & restorative", "Yoga nidra for sleep induction", "Pranayama (Bhramari, 4-7-8)", "Screen & light detox protocol", "Evening ritual design", "Sleep tracking & coaching"],
    },
    {
        emoji: "🌺",
        title: "Menopause Yoga",
        description: "Specially designed yoga practices to ease hot flashes, mood swings, joint pain and fatigue during peri and post-menopause — with compassionate, expert guidance.",
        duration: "8 Weeks",
        durationColor: "bg-fuchsia-400/15 text-fuchsia-700",
        tag: "Women's Health",
        tagColor: "bg-fuchsia-400/15 text-fuchsia-700",
        gradient: "from-fuchsia-400/15 to-rose-900/10",
        curriculum: ["Cooling pranayama practices", "Hormone-supportive asana", "Bone density strengthening", "Stress & cortisol regulation", "Restorative deep rest", "Nutrition & lifestyle guidance"],
    },
    {
        emoji: "🌿",
        title: "Yoga for IBS",
        description: "Gentle, gut-friendly yoga practices and breathing techniques to soothe the nervous system, improve digestion and reduce IBS flare-ups naturally.",
        duration: "6 Weeks",
        durationColor: "bg-lime-400/15 text-lime-700",
        tag: "Therapeutic",
        tagColor: "bg-lime-400/15 text-lime-700",
        gradient: "from-lime-400/15 to-green-900/10",
        curriculum: ["Abdominal massage asana", "Apana Vayu breathwork", "Parasympathetic activation", "Gut-brain axis practices", "Anti-inflammatory diet tips", "Stress-digestion connection"],
    },
];

export default function GoalsPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* ── Hero ── */}
                <section className="relative bg-background pt-36 pb-24 flex items-center overflow-hidden min-h-[52vh]">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-secondary/18 rounded-full blur-[160px] -translate-y-1/4" />
                        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 dot-pattern opacity-20" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
                            <Target className="w-3.5 h-3.5" />
                            Goals — OorjaKull
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-5 leading-[1.08]">
                            Choose Your Goal.<br />
                            <span className="text-primary italic">Commit to Your Transformation.</span>
                        </h1>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            From internationally certified teacher training to targeted therapeutic programs — every path here is designed to meet you where you are and carry you further.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            {["Yoga Alliance Certified", "Expert Acharyas", "Online & In-Person"].map((b) => (
                                <span key={b} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-foreground/6 border border-foreground/10 text-foreground/65">
                                    <Sparkles className="w-3 h-3 text-secondary" />{b}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Goals Grid ── */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {GOALS.map((goal) => (
                                <div
                                    key={goal.title}
                                    className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
                                >
                                    {/* Header */}
                                    <div className={`relative h-32 bg-gradient-to-br ${goal.gradient} flex items-center justify-center overflow-hidden`}>
                                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300 select-none">{goal.emoji}</span>
                                        <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/75 backdrop-blur-sm ${goal.tagColor}`}>
                                            {goal.tag}
                                        </span>
                                        <span className={`absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${goal.durationColor}`}>
                                            <Clock className="w-3 h-3 inline mr-1" />{goal.duration}
                                        </span>
                                    </div>

                                    {/* Body */}
                                    <div className="p-6 flex flex-col flex-1 gap-4">
                                        <div>
                                            <h3 className="font-serif font-semibold text-xl text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                                                {goal.title}
                                            </h3>
                                            <p className="text-sm text-foreground/60 leading-relaxed">{goal.description}</p>
                                        </div>

                                        {/* Curriculum */}
                                        <div className="border-t border-muted pt-4">
                                            <p className="text-xs font-semibold text-foreground/35 uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3 h-3 text-primary/50" />Curriculum Includes
                                            </p>
                                            <ul className="grid grid-cols-2 gap-1.5">
                                                {goal.curriculum.map((item) => (
                                                    <li key={item} className="text-xs text-foreground/55 flex items-start gap-1.5">
                                                        <span className="w-1 h-1 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex gap-3 pt-1 mt-auto">
                                            <Link
                                                href="/book-trial"
                                                className="flex-1 text-center py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                                            >
                                                Book for Trial Session
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="flex-1 text-center py-2.5 rounded-full border border-foreground/20 text-foreground/65 text-sm font-medium hover:border-primary/50 hover:text-primary transition-all"
                                            >
                                                View Curriculum
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
