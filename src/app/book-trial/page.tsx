import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Shield, Users, Clock, Star } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Trial Session — 200H Yoga Teacher Training",
    description: "Apply for OorjaKull's AI-enhanced 200H Yoga Alliance certified Teacher Training. Limited seats, AI-powered practice with Madhu, and lifetime alumni community.",
    alternates: { canonical: "https://www.oorjakull.com/book-trial" },
    openGraph: {
        title: "Book a Trial — OorjaKull 200H Teacher Training",
        description: "Apply for India's first AI-enhanced 200H Yoga Teacher Training. Limited seats for the next batch.",
        url: "https://www.oorjakull.com/book-trial",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

const PERKS = [
    { icon: Shield, title: "Yoga Alliance 200H RYT", desc: "Internationally recognised certification upon completion." },
    { icon: Users, title: "Intimate Batches", desc: "Maximum 15 students for deep, personalised mentorship." },
    { icon: Clock, title: "Flexible Timings", desc: "Designed for dedicated practitioners — morning and evening options." },
    { icon: Star, title: "Lifetime Community", desc: "Join the OorjaKull alumni network and ongoing learning ecosystem." },
];

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* Full-page dark registration layout */}
                <section className="relative min-h-screen flex items-center overflow-hidden py-24 pt-32 bg-background">
                    {/* Warm parchment background */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[160px] translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 dot-pattern opacity-25" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 md:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

                            {/* Left: Info */}
                            <div className="flex flex-col gap-8">
                                <div>
                                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                                        June 2026 Batch
                                    </p>
                                    <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-5 leading-tight">
                                        Begin Your Teaching Journey
                                    </h1>
                                    <p className="text-foreground/55 text-lg font-light leading-relaxed">
                                        Apply for the{" "}
                                        <span className="text-primary font-medium">200-Hour Ashtanga Yoga Teacher Training</span>.
                                        Seats are limited — join a community committed to authentic practice.
                                    </p>
                                </div>

                                {/* Perks */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {PERKS.map(({ icon: Icon, title, desc }) => (
                                        <div key={title} className="bg-card border border-muted rounded-2xl p-5 flex flex-col gap-3 hover:border-secondary/30 transition-all">
                                            <Icon className="w-6 h-6 text-primary" />
                                            <div>
                                                <p className="text-foreground font-semibold text-sm">{title}</p>
                                                <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Testimonial mini */}
                                <div className="border-l-2 border-primary pl-5">
                                    <p className="text-white/60 text-sm italic leading-relaxed">
                                        "The most transformative experience of my life. I came as a practitioner and left as a teacher, a philosopher, and a changed human being."
                                    </p>
                                    <p className="text-primary-light text-xs font-semibold mt-3 uppercase tracking-widest">— Keerthana N., 2023 Graduate</p>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <div>
                                <RegistrationForm courseTitle="200H Ashtanga Yoga Teacher Training" />
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
