import { getPrograms } from "@/lib/cms";
import Link from "next/link";
import { Clock, BarChart2, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Training Programs | OorjaKull Yoga Teacher Training",
    description: "Explore OorjaKull's certified yoga teacher training programs — 200H, 300H, and weekend intensives. Small batches, experienced Acharyas, Yoga Alliance certified.",
};

const LEVEL_COLORS: Record<string, string> = {
    "Beginner": "bg-emerald-100 text-emerald-700",
    "Intermediate": "bg-amber-100 text-amber-700",
    "Advanced": "bg-rose-100 text-rose-700",
    "All Levels": "bg-sky-100 text-sky-700",
};

const STYLE_ICONS: Record<string, string> = {
    ashtanga: "🔥", vinyasa: "🌊", hatha: "☀️",
    yin: "🌙", pranayama: "💨", meditation: "🧘", default: "🕉️",
};
function getIcon(title: string) {
    const l = title.toLowerCase();
    for (const k of Object.keys(STYLE_ICONS)) if (l.includes(k)) return STYLE_ICONS[k];
    return STYLE_ICONS.default;
}

export default async function CoursesPage() {
    const programs = await getPrograms();

    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* ── Hero ── */}
                <section className="relative bg-background pt-36 pb-24 flex items-center overflow-hidden min-h-[50vh]">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-secondary/20 rounded-full blur-[160px] -translate-y-1/4" />
                        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 dot-pattern opacity-25" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                        <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                            Certification Programs
                        </p>
                        <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-5">
                            Choose Your Path
                        </h1>
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            From foundational 200H certifications to advanced specializations —
                            every program is designed to transform you from the inside out.
                        </p>

                        {/* Quick info row */}
                        <div className="flex flex-wrap justify-center gap-6 mt-10">
                            {[
                                { label: "Yoga Alliance Certified", icon: "🏅" },
                                { label: "Max 15 Students", icon: "👥" },
                                { label: "20+ Years Legacy", icon: "🌿" },
                            ].map(({ label, icon }) => (
                                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-foreground/8 border border-foreground/12 text-foreground/70">
                                    {icon} {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Programs Grid ── */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {programs.map((program) => (
                                <article
                                    key={program.id}
                                    className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
                                >
                                    {/* Accent strip */}
                                    <div className="h-1.5 bg-gradient-to-r from-primary to-secondary" />

                                    <div className="p-7 flex flex-col flex-1 gap-5">
                                        <div className="flex items-start justify-between">
                                            <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                                {getIcon(program.title)}
                                            </div>
                                            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${LEVEL_COLORS[program.level] || LEVEL_COLORS["All Levels"]}`}>
                                                {program.level}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <h2 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                                {program.title}
                                            </h2>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                {program.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-5 text-xs text-muted-foreground border-t border-muted pt-4">
                                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {program.duration}</span>
                                            <span className="flex items-center gap-1.5"><BarChart2 className="w-3.5 h-3.5" /> {program.level}</span>
                                        </div>

                                        <ul className="space-y-2">
                                            {program.features.slice(0, 3).map((f, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                                                    <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-primary/12 flex items-center justify-center">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    </span>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href={`/courses/${program.id}`}
                                            className="group/btn mt-auto flex items-center justify-between px-5 py-3.5 rounded-xl bg-primary/5 hover:bg-primary text-primary hover:text-white text-sm font-semibold border border-primary/20 hover:border-primary transition-all"
                                        >
                                            <span>View Curriculum</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-20 bg-background text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/15 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    <div className="relative container mx-auto px-4 md:px-8">
                        <h2 className="text-4xl font-serif font-light text-foreground mb-4">
                            Not sure which program is right for you?
                        </h2>
                        <p className="text-foreground/55 text-lg mb-8 max-w-xl mx-auto">
                            Talk to one of our Acharyas — we'll help you find the path that aligns with your journey.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all">
                            Speak with an Acharya <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
