"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Priya Sharma",
        role: "Certified Yoga Teacher, Pune",
        text: "OorjaKull gave me the depth of understanding I was searching for. The philosophy curriculum completely transformed how I relate to the practice — both on and off the mat. I graduated with the confidence to lead my own classes.",
        rating: 5,
        initials: "PS",
        batch: "2024 Graduate",
    },
    {
        name: "Arjun Mehta",
        role: "Wellness Coach, Mumbai",
        text: "The combination of traditional Ashtanga scholarship and modern teaching methodology is what truly sets OorjaKull apart. My Acharyas were extraordinary — deeply knowledgeable and genuinely invested in our growth.",
        rating: 5,
        initials: "AM",
        batch: "2023 Graduate",
    },
    {
        name: "Keerthana Nair",
        role: "Studio Owner, Bengaluru",
        text: "I had tried other programs, but nothing compared to the rigor and heart of OorjaKull. The pranayama and meditation modules opened new dimensions for me. Six months after graduating, I opened my own studio.",
        rating: 5,
        initials: "KN",
        batch: "2023 Graduate",
    },
    {
        name: "Rohan Tiwari",
        role: "Corporate Wellness Trainer",
        text: "What moved me most was how the Acharyas live what they teach. The ethics of a yoga teacher, the seva, the humility — all were modelled beautifully. I left a better human being, not just a better teacher.",
        rating: 5,
        initials: "RT",
        batch: "2025 Graduate",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    const next = () => setCurrent((i) => (i + 1) % TESTIMONIALS.length);

    const t = TESTIMONIALS[current];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                        Student Stories
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                        Words from Our Graduates
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Main testimonial card */}
                    <div className="relative bg-card border border-muted rounded-3xl p-8 md:p-12 shadow-lg">
                        <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/15" />

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {Array.from({ length: t.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                            ))}
                        </div>

                        {/* Quote text */}
                        <blockquote className="text-lg md:text-xl font-serif font-light text-foreground/85 leading-relaxed mb-8">
                            "{t.text}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm shrink-0">
                                {t.initials}
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">{t.name}</p>
                                <p className="text-sm text-muted-foreground">{t.role}</p>
                            </div>
                            <div className="ml-auto">
                                <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                                    {t.batch}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`rounded-full transition-all ${i === current
                                            ? "w-6 h-2 bg-primary"
                                            : "w-2 h-2 bg-muted hover:bg-primary/40"
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrow buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full border border-muted flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
