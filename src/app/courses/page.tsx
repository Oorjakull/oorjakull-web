import { getPrograms } from "@/lib/cms";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Clock, BarChart, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function CoursesPage() {
    const programs = await getPrograms();

    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1 bg-background">
                <section className="bg-muted/30 py-16 md:py-24 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold font-serif text-foreground mb-4">Our Training Programs</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Discover courses designed to deepen your practice and empower your teaching journey.
                        </p>
                    </div>
                </section>

                <section className="py-16 container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program) => (
                            <div
                                key={program.id}
                                className="flex flex-col rounded-xl border border-muted bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50 group overflow-hidden"
                            >
                                <div className="h-48 bg-muted w-full relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl bg-gradient-to-br from-secondary/20 to-primary/20">
                                        🧘
                                    </div>
                                </div>
                                <div className="p-6 flex-1 space-y-4">
                                    <h3 className="text-2xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                                        {program.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                        {program.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{program.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BarChart className="w-4 h-4" />
                                            <span>{program.level}</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-muted pt-4 mt-4">
                                        <ul className="space-y-2">
                                            {program.features.slice(0, 3).map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                                                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                                                    <span className="truncate">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-6 pt-0 mt-auto">
                                    <Link
                                        href={`/courses/${program.id}`}
                                        className={cn(
                                            "inline-flex w-full items-center justify-center rounded-lg border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors",
                                            "hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        )}
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
