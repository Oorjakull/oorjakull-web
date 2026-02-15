import { getProgramById, getPrograms } from "@/lib/cms";
import { notFound } from "next/navigation";
import { Clock, BarChart, CheckCircle2, Calendar, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

// This is required for static site generation with dynamic routes
export async function generateStaticParams() {
    const programs = await getPrograms();
    return programs.map((program) => ({
        id: program.id,
    }));
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const program = await getProgramById(id);

    if (!program) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">
                {/* Header Section */}
                <section className="bg-muted/30 py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                                {program.level}
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-serif text-foreground mb-6">
                                {program.title}
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                {program.description}
                            </p>

                            <div className="flex flex-wrap gap-6 mt-8">
                                <div className="flex items-center gap-2 text-foreground/80">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <span className="font-medium">{program.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-foreground/80">
                                    <BarChart className="w-5 h-5 text-primary" />
                                    <span>Certification Included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum Distribution */}
                {program.curriculumBreakdown && (
                    <section className="py-16 bg-background">
                        <div className="container mx-auto px-4 md:px-6">
                            <h2 className="text-2xl font-bold font-serif mb-8 flex items-center gap-3">
                                <BookOpen className="w-6 h-6 text-primary" />
                                Curriculum Breakdown
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {program.curriculumBreakdown.map((item, idx) => (
                                    <div key={idx} className="p-6 rounded-xl border border-muted bg-card hover:border-primary/30 transition-colors">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            {item.hours}<span className="text-base font-normal text-muted-foreground ml-1">hrs</span>
                                        </div>
                                        <h3 className="font-medium text-foreground">{item.topic}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Weekly Schedule */}
                {program.weeklySchedule && (
                    <section className="py-16 bg-muted/20">
                        <div className="container mx-auto px-4 md:px-6">
                            <h2 className="text-2xl font-bold font-serif mb-12 flex items-center gap-3">
                                <Calendar className="w-6 h-6 text-primary" />
                                Weekly Timetable
                            </h2>

                            <div className="space-y-8 max-w-4xl">
                                {program.weeklySchedule.map((week, idx) => (
                                    <div key={idx} className="bg-background rounded-2xl p-6 md:p-8 shadow-sm border border-muted">
                                        <div className="mb-4">
                                            <span className="text-sm font-bold tracking-wider text-primary uppercase">{week.week}</span>
                                            <h3 className="text-xl font-bold text-foreground mt-1">{week.theme}</h3>
                                        </div>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                                            {week.focus.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-1" />
                                                    <span className="text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                {/* Registration Section */}
                <section className="py-16 md:py-24 bg-primary/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold font-serif mb-6 text-foreground">
                                    Ready to Begin Your Journey?
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Secure your spot in the upcoming batch. Our groups are small to ensuring personalized attention and mentorship.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span>Limited seats available per batch</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span>Early bird discounts available</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span>Lifetime access to course materials</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <RegistrationForm courseTitle={program.title} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
