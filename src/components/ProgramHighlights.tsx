import { getPrograms } from "@/lib/cms";
import Link from "next/link";
import { Clock, BarChart2, ArrowRight } from "lucide-react";

const STYLE_ICONS: Record<string, string> = {
    ashtanga: "🔥",
    vinyasa: "🌊",
    hatha: "☀️",
    yin: "🌙",
    pranayama: "💨",
    meditation: "🧘",
    default: "🕉️",
};

function getIcon(title: string): string {
    const lower = title.toLowerCase();
    for (const key of Object.keys(STYLE_ICONS)) {
        if (lower.includes(key)) return STYLE_ICONS[key];
    }
    return STYLE_ICONS.default;
}

const LEVEL_COLORS: Record<string, string> = {
    "Beginner": "bg-emerald-100 text-emerald-700",
    "Intermediate": "bg-amber-100 text-amber-700",
    "Advanced": "bg-rose-100 text-rose-700",
    "All Levels": "bg-sky-100 text-sky-700",
};

export default async function ProgramHighlights() {
    const programs = await getPrograms();

    return (
        <section className="py-24 bg-background" id="programs">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="max-w-2xl mb-16">
                    <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                        Our Programs
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4 leading-tight">
                        Choose Your Path
                    </h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        Whether you're starting your journey or deepening your practice, our
                        certified programs are crafted to transform you from the inside out.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program, idx) => (
                        <article
                            key={program.id}
                            className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
                        >
                            {/* Card Top Accent */}
                            <div className="h-1.5 bg-gradient-to-r from-primary to-secondary" />

                            <div className="p-7 flex flex-col flex-1 gap-5">
                                {/* Icon & Level */}
                                <div className="flex items-start justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                        {getIcon(program.title)}
                                    </div>
                                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${LEVEL_COLORS[program.level] || LEVEL_COLORS["All Levels"]}`}>
                                        {program.level}
                                    </span>
                                </div>

                                {/* Title & Desc */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                        {program.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                        {program.description}
                                    </p>
                                </div>

                                {/* Meta */}
                                <div className="flex items-center gap-5 text-xs text-muted-foreground border-t border-muted pt-4">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" /> {program.duration}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <BarChart2 className="w-3.5 h-3.5" /> {program.level}
                                    </span>
                                </div>

                                {/* Features (first 3) */}
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

                                {/* CTA */}
                                <Link
                                    href={`/courses/${program.id}`}
                                    className="group/btn mt-auto flex items-center justify-between px-5 py-3.5 rounded-xl bg-primary/5 hover:bg-primary text-primary hover:text-white text-sm font-semibold border border-primary/20 hover:border-primary transition-all"
                                >
                                    <span>View Full Curriculum</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 text-center">
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                        Explore All Programs <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
