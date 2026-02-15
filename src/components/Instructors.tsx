import { getInstructors } from "@/lib/cms";
import Image from "next/image";

export default async function Instructors() {
    const instructors = await getInstructors();

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter text-foreground font-serif sm:text-4xl">
                        Meet Your Mentors
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Learn from experienced practitioners dedicated to preserving the tradition while embracing modern science.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {instructors.map((instructor) => (
                        <div key={instructor.id} className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-muted">
                                {/* Placeholder Image */}
                                <div className="w-full h-full bg-muted flex items-center justify-center text-4xl grayscale">
                                    🧘
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold font-serif text-foreground">{instructor.name}</h3>
                                <p className="text-sm font-medium text-primary uppercase tracking-wide">{instructor.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
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
