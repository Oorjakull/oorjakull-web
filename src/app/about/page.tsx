import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Heart, Users, Globe, Award, Sparkles, BookOpen } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 bg-primary/5 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5 pointer-events-none"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <Reveal width="100%">
                            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-foreground">
                                Rooted in Tradition,<br />Built for the Future
                            </h1>
                        </Reveal>
                        <Reveal width="100%" delay={0.2}>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                OorjaKull is a global ecosystem dedicated to preserving the authentic essence of Yoga while empowering the next generation of world-class instructors.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Our Story / Mission */}
                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">
                                    More Than Just Asanas
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    In a world flooded with fitness apps and diluted content, the true depth of Yoga—its philosophy, breathwork, and transformative power—often gets lost.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    At OorjaKull, we are bridging this gap. We believe that **teaching** is the highest form of learning. Our mission is to identify, train, and certify passionate practitioners, turning them into beacons of health and wellness who can carry this ancient wisdom forward with integrity.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="bg-muted/30 p-8 rounded-2xl border border-primary/10 relative">
                                <div className="absolute -top-6 -right-6 text-primary/10">
                                    <Sparkles size={120} />
                                </div>
                                <h3 className="text-2xl font-bold font-serif mb-6">Our Philosophy</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Authenticity First", text: "We honor the lineage of Yoga, prioritizing correct form and philosophy over trends." },
                                        { title: "Empowerment", text: "We don't just teach students; we create leaders through our 'Train the Trainer' programs." },
                                        { title: "Community", text: "Building a supportive global network of wellness professionals." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="bg-background p-2 rounded-full h-fit shadow-sm text-primary mt-1">
                                                <Heart className="h-5 w-5 fill-current" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground">{item.title}</h4>
                                                <p className="text-muted-foreground text-sm">{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Core Values / What We Do */}
                <section className="py-24 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <Reveal width="100%">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-foreground">Why OorjaKull?</h2>
                                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                    We are defining a new standard in Yoga education.
                                </p>
                            </div>
                        </Reveal>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "World-Class Training",
                                    desc: "Rigorous certification programs designed to produce confident, knowledgeable teachers.",
                                    icon: BookOpen
                                },
                                {
                                    title: "Global Reach",
                                    desc: "Connecting Indian heritage with global wellness seekers in Australia, Canada, USA, and beyond.",
                                    icon: Globe
                                },
                                {
                                    title: "Quality Assurance",
                                    desc: "A vetted ecosystem where every instructor represents the highest standards of practice.",
                                    icon: Award
                                }
                            ].map((item, index) => (
                                <Reveal key={index} delay={index * 0.2}>
                                    <div className="bg-background p-8 rounded-2xl shadow-sm border border-muted hover:shadow-md transition-all h-full text-center group">
                                        <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary-foreground group-hover:scale-110 transition-transform">
                                            <item.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 text-center container mx-auto px-4">
                    <Reveal width="100%">
                        <h2 className="text-3xl font-bold font-serif mb-6">Join the Movement</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                            Whether you want to deepen your practice or lead others, your journey starts here.
                        </p>
                        <a href="/register" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                            Become a Trainer
                        </a>
                    </Reveal>
                </section>

            </main>
            <Footer />
        </div>
    );
}
