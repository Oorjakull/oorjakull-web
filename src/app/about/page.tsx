import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Heart, Globe, Award, BookOpen, ArrowRight, Check } from "lucide-react";

export const metadata = {
    title: "About OorjaKull | Our Story, Mission & Philosophy",
    description: "Learn about OorjaKull — India's premier yoga teacher training school rooted in authentic tradition, dedicated to producing world-class yoga educators.",
};

const VALUES = [
    { icon: "🕉️", title: "Authenticity First", desc: "We honour the lineage of Yoga, prioritizing correct form, philosophy, and ethics over trends and shortcuts." },
    { icon: "🌱", title: "Empowerment", desc: "We don't just teach students — we create leaders. Our 'Train the Trainer' programs produce teachers who lead with confidence and integrity." },
    { icon: "🤝", title: "Community", desc: "A supportive global network of wellness professionals united by a shared commitment to authentic practice and service." },
    { icon: "🔬", title: "Rigor", desc: "Small batches, deep focus, high standards. We believe the depth of learning determines the quality of teaching." },
    { icon: "🌍", title: "Global Reach", desc: "Connecting Indian heritage with wellness seekers worldwide — in Australia, Canada, USA, UK, and across Asia." },
    { icon: "✨", title: "Transformation", desc: "Every program is structured as a journey inward. Graduates emerge not just as teachers, but as changed human beings." },
];

const TIMELINE = [
    { year: "2009", event: "OorjaKull founded by a group of dedicated Acharyas from the Mysore and Rishikesh traditions." },
    { year: "2013", event: "First international teacher training cohort — graduates now teaching across 8 countries." },
    { year: "2016", event: "Yoga Alliance affiliation achieved. Programs recognized globally for quality and depth." },
    { year: "2020", event: "Online programs launched, making authentic training accessible beyond physical geography." },
    { year: "2024", event: "50+ graduates certified. OorjaKull alumni leading studios, retreats and corporate wellness programs worldwide." },
];

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* ── Hero ── */}
                <section className="relative min-h-[60vh] flex items-center bg-background overflow-hidden pt-36 pb-24">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[160px] -translate-y-1/4 translate-x-1/4" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] translate-y-1/4" />
                        <div className="absolute inset-0 dot-pattern opacity-25" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8 py-24 text-center">
                        <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                            Our Story
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground leading-[1.1] mb-6">
                            Rooted in Tradition,<br />
                            <span className="text-primary italic">Built for the Future</span>
                        </h1>
                        <p className="text-foreground/55 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            OorjaKull is dedicated to preserving the authentic essence of Yoga
                            while empowering the next generation of world-class instructors.
                        </p>
                    </div>
                </section>

                {/* ── Mission Split ── */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Visual side */}
                            <div className="relative">
                                <div className="h-[420px] rounded-3xl bg-[#fdf5e4] border border-secondary/20 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,131,42,0.12)_0%,_transparent_70%)]" />
                                    <div className="relative h-52 w-52">
                                        <Image src="/logo_21.png" alt="OorjaKull" fill className="object-contain opacity-95" />
                                    </div>
                                </div>
                                {/* Floating quote */}
                                <div className="absolute -bottom-5 -right-3 bg-primary text-white rounded-2xl p-5 max-w-[220px] shadow-xl">
                                    <p className="text-sm font-light leading-relaxed italic">
                                        "Teaching is the highest form of learning."
                                    </p>
                                </div>
                                <div className="absolute -top-5 -left-5 w-28 h-28 dot-pattern rounded-2xl opacity-30" />
                            </div>

                            {/* Content side */}
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                        Our Mission
                                    </p>
                                    <h2 className="text-4xl font-serif font-medium text-foreground mb-5 leading-tight">
                                        More Than Just Asanas
                                    </h2>
                                    <p className="text-muted-foreground text-lg font-light leading-relaxed mb-4">
                                        In a world flooded with fitness apps and diluted content, the true depth of
                                        Yoga — its philosophy, breathwork, and transformative power — often gets lost.
                                    </p>
                                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                                        At OorjaKull, we are bridging this gap. Our mission is to identify, train,
                                        and certify passionate practitioners, turning them into beacons of health and
                                        wellness who carry this ancient wisdom forward with integrity.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 pt-2">
                                    {["Yoga Alliance certified 200H & 300H programs",
                                        "Maximum 15 students per batch for deep mentorship",
                                        "Taught by Acharyas with 20+ years of active practice",
                                        "Graduates teaching in 8+ countries worldwide"
                                    ].map(item => (
                                        <div key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                                            <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                                            </span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Core Values ── */}
                <section className="py-24 bg-muted">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center max-w-xl mx-auto mb-16">
                            <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                What We Stand For
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                                Our Core Values
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {VALUES.map((v) => (
                                <div key={v.title} className="group p-7 rounded-2xl border border-muted bg-card hover:border-secondary/30 hover:shadow-md transition-all duration-300">
                                    <div className="text-4xl mb-5">{v.icon}</div>
                                    <h3 className="text-lg font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {v.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Timeline (disabled) ──
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                        <div className="text-center mb-16">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                Our Journey
                            </p>
                            <h2 className="text-4xl font-serif font-medium text-foreground">
                                15 Years of Legacy
                            </h2>
                        </div>
                        <div className="relative">
                            <div className="absolute left-6 top-0 bottom-0 w-px bg-muted" />
                            <div className="space-y-10">
                                {TIMELINE.map((item, idx) => (
                                    <div key={item.year} className="flex gap-8 relative">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/20 z-10">
                                            {item.year.slice(2)}
                                        </div>
                                        <div className="pt-2 pb-8">
                                            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-1">{item.year}</p>
                                            <p className="text-foreground/80 leading-relaxed">{item.event}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                ── */}

                {/* ── CTA ── */}
                <section className="py-24 bg-background text-center relative overflow-hidden">
                    <div className="absolute inset-0 dot-pattern opacity-20" />
                    <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-secondary/15 rounded-full blur-[100px]" />
                    <div className="relative container mx-auto px-4 md:px-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-5">
                            Ready to Join the Movement?
                        </h2>
                        <p className="text-foreground/55 text-lg max-w-xl mx-auto mb-10">
                            Whether you want to deepen your practice or lead others, your journey starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/register" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all">
                                Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-foreground/20 text-foreground/70 hover:border-primary hover:text-primary transition-all">
                                Browse Courses
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
