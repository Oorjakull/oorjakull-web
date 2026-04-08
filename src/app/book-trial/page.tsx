import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { Sparkles, Users, Clock, Star } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Try a Free AI Session — OorjaKull",
    description: "Book your free AI-guided yoga session with Madhu. Experience real-time pose detection, adaptive breathwork and personalised guidance — no experience needed.",
    alternates: { canonical: "https://www.oorjakull.com/book-trial" },
    openGraph: {
        title: "Try a Free AI Session — OorjaKull",
        description: "Experience India's first AI yoga companion, Madhu. Real-time pose feedback, adaptive breathwork and personalised flows — free to try.",
        url: "https://www.oorjakull.com/book-trial",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

const PERKS = [
    { icon: Sparkles, title: "Madhu AI Companion", desc: "Real-time pose detection and personalised feedback in your first session." },
    { icon: Users, title: "All Levels Welcome", desc: "Complete beginners to experienced practitioners — Madhu adapts to you." },
    { icon: Clock, title: "Start in Minutes", desc: "No equipment, no experience needed. Just show up on your mat." },
    { icon: Star, title: "Fully Personalised", desc: "Every session is unique — built around your goals and energy level." },
];

export default function BookTrialPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                <section className="relative min-h-screen flex items-center overflow-hidden py-24 pt-32 bg-background">
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
                                        Free to Try
                                    </p>
                                    <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-5 leading-tight">
                                        Your First AI Yoga Session — Free
                                    </h1>
                                    <p className="text-foreground/55 text-lg font-light leading-relaxed">
                                        Meet{" "}
                                        <span className="text-primary font-medium">Madhu, your AI yoga companion</span>.
                                        Real-time pose feedback, adaptive breathwork and a session built just for you — no experience needed.
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

                                {/* Quote */}
                                <div className="border-l-2 border-primary pl-5">
                                    <p className="text-foreground/60 text-sm italic leading-relaxed">
                                        "Madhu completely changed how I practice. The real-time pose corrections feel like having a personal Acharya in my living room."
                                    </p>
                                    <p className="text-primary text-xs font-semibold mt-3 uppercase tracking-widest">— Priya S., AI Platform User</p>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <div>
                                <RegistrationForm courseTitle="Free AI Trial Session" />
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
