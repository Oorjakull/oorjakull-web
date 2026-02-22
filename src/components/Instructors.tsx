import { getInstructors } from "@/lib/cms";
import Image from "next/image";

export default async function Instructors() {
    const instructors = await getInstructors();

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                        Your Guides
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
                        Meet the Acharyas
                    </h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                        Learn from practitioners who have spent decades embodying and
                        teaching the full spectrum of yoga — from asana to samadhi.
                    </p>
                </div>

                {/* Instructor cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {instructors.map((instructor) => (
                        <div
                            key={instructor.id}
                            className="group bg-card border border-muted rounded-3xl p-8 flex flex-col sm:flex-row gap-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Avatar */}
                            <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center text-5xl self-center sm:self-start">
                                {/* If a real photo exists, show Image, otherwise emoji */}
                                <span>🧘</span>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
                            </div>

                            {/* Content */}
                            <div>
                                <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">
                                    {instructor.role}
                                </p>
                                <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                                    {instructor.name}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {instructor.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
