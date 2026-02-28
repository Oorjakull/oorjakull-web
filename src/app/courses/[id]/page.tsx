import { getProgramById, getPrograms } from "@/lib/cms";
import { notFound } from "next/navigation";
import { Clock, BarChart2, CheckCircle2, Calendar, BookOpen, ArrowLeft, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import Link from "next/link";

export async function generateStaticParams() {
    const programs = await getPrograms();
    return programs.map((program) => ({ id: program.id }));
}

const LEVEL_COLORS: Record<string, string> = {
    "Beginner": "bg-emerald-100 text-emerald-700",
    "Intermediate": "bg-amber-100 text-amber-700",
    "Advanced": "bg-rose-100 text-rose-700",
    "All Levels": "bg-sky-100 text-sky-700",
};

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const program = await getProgramById(id);

    if (!program) notFound();

    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* ── Hero ── */}
                <section className="relative bg-background pt-36 pb-16 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-secondary/20 rounded-full blur-[160px] translate-x-1/4 -translate-y-1/4" />
                        <div className="absolute inset-0 dot-pattern opacity-25" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8">
                        {/* Breadcrumb */}
                        <Link href="/courses" className="inline-flex items-center gap-2 text-foreground/45 hover:text-primary text-sm mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to all courses
                        </Link>

                        <div className="max-w-3xl">
                            {/* Level badge */}
                            <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-5 ${LEVEL_COLORS[program.level] || LEVEL_COLORS["All Levels"]}`}>
                                {program.level}
                            </span>

                            <h1 className="text-4xl md:text-6xl font-serif font-light text-foreground mb-5 leading-tight">
                                {program.title}
                            </h1>
                            <p className="text-foreground/55 text-lg font-light leading-relaxed max-w-2xl mb-8">
                                {program.description}
                            </p>

                            {/* Meta chips */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-foreground/70 text-sm border border-muted bg-card">
                                    <Clock className="w-4 h-4 text-primary" />
                                    {program.duration}
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-foreground/70 text-sm border border-muted bg-card">
                                    <Shield className="w-4 h-4 text-primary" />
                                    Yoga Alliance Certified
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-foreground/70 text-sm border border-muted bg-card">
                                    <BarChart2 className="w-4 h-4 text-primary" />
                                    Max 15 Students
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Curriculum Breakdown ── */}
                {program.curriculumBreakdown && (
                    <section className="py-20 bg-background">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <BookOpen className="w-4 h-4 text-primary" />
                                </div>
                                <h2 className="text-2xl font-serif font-medium text-foreground">Curriculum Breakdown</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {program.curriculumBreakdown.map((item, idx) => (
                                    <div key={idx} className="bg-card border border-muted rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all group">
                                        <p className="text-4xl font-serif font-bold text-primary mb-1 group-hover:scale-105 transition-transform inline-block">
                                            {item.hours}
                                            <span className="text-base font-normal text-muted-foreground ml-1">hrs</span>
                                        </p>
                                        <p className="text-sm text-foreground/80 font-medium mt-1">{item.topic}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Weekly Schedule ── */}
                {program.weeklySchedule && (
                    <section className="py-20 bg-muted/20">
                        <div className="container mx-auto px-4 md:px-8">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Calendar className="w-4 h-4 text-primary" />
                                </div>
                                <h2 className="text-2xl font-serif font-medium text-foreground">Weekly Timetable</h2>
                            </div>
                            <div className="space-y-5 max-w-4xl">
                                {program.weeklySchedule.map((week, idx) => (
                                    <div key={idx} className="bg-card border border-muted rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
                                        <div className="flex items-center gap-4 px-6 py-4 bg-primary/5 border-b border-muted">
                                            <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
                                                {idx + 1}
                                            </span>
                                            <div>
                                                <p className="text-xs text-primary font-semibold uppercase tracking-widest">{week.week}</p>
                                                <h3 className="text-base font-serif font-semibold text-foreground">{week.theme}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {week.focus.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Registration Section ── */}
                <section className="py-20 bg-background relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute left-0 bottom-0 w-[400px] h-[300px] bg-secondary/15 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 dot-pattern opacity-20" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
                            {/* Left info */}
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                        Secure Your Spot
                                    </p>
                                    <h2 className="text-4xl font-serif font-light text-foreground mb-4 leading-tight">
                                        Ready to Begin Your Journey?
                                    </h2>
                                    <p className="text-foreground/55 leading-relaxed">
                                        Groups are small to ensure personalized attention and deep mentorship. Apply now for the June 2026 batch.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {[
                                        "Limited seats — maximum 15 students per batch",
                                        "Early bird discounts available",
                                        "Lifetime access to course materials",
                                        "Ongoing alumni mentorship included",
                                    ].map(item => (
                                        <div key={item} className="flex items-start gap-3 text-sm text-foreground/70">
                                            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center">
                                                <CheckCircle2 className="w-3 h-3 text-primary" />
                                            </span>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {/* Certification badge */}
                                <div className="bg-card border border-secondary/20 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                                    <Shield className="w-8 h-8 text-primary shrink-0" />
                                    <div>
                                        <p className="text-foreground font-semibold text-sm">Yoga Alliance Certified</p>
                                        <p className="text-muted-foreground text-xs mt-0.5">200H RYT upon successful completion</p>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <RegistrationForm courseTitle={program.title} />
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
