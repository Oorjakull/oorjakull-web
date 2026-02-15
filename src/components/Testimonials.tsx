import { getTestimonials } from "@/lib/cms";
import { Quote } from "lucide-react";

export default async function Testimonials() {
    const testimonials = await getTestimonials();

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter text-foreground font-serif sm:text-4xl">
                        Success Stories
                    </h2>
                    <p className="text-muted-foreground mt-4">
                        Hear from our community of certified teachers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="relative rounded-2xl bg-background p-8 shadow-sm">
                            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />

                            <div className="relative z-10">
                                <p className="text-foreground/80 italic mb-6 pt-4">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
