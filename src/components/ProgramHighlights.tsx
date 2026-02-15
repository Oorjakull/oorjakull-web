import { getPrograms } from "@/lib/cms";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle2, Clock, BarChart } from "lucide-react";

export default async function ProgramHighlights() {
    const programs = await getPrograms();

    return (
        <section className="py-20 bg-background" id="programs">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter text-foreground font-serif sm:text-4xl md:text-5xl">
                        Our Training Programs
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Select the path that resonates with your journey. From foundational courses to advanced specializations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="flex flex-col rounded-xl border border-muted bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/50 group"
                        >
                            <div className="p-6 flex-1 space-y-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    {/* Icon placeholder based on generic type */}
                                    <span className="text-2xl">🕉️</span>
                                </div>

                                <h3 className="text-2xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">
                                    {program.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {program.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{program.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <BarChart className="w-4 h-4" />
                                    <span>{program.level}</span>
                                </div>

                                <div className="border-t border-muted pt-4 mt-4">
                                    <ul className="space-y-2">
                                        {program.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                                {feature}
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
                                    View Curriculum
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
