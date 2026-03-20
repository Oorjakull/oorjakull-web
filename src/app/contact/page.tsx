import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HelpCircle, Star, MessageSquare, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Business | OorjaKull — Support & Partnerships",
    description: "OorjaKull Business hub — get beginner FAQs answered, find class recommendations and reach our support team.",
};





const FAQS = [
    { q: "I'm a complete beginner — where should I start?", a: "Start with our Beginner Foundations classes on the Yoga page. They run twice a week and require no prior experience — just comfortable clothing and an open mind." },
    { q: "When does the next batch start?", a: "Our next 200H YTT batch commences June 2026. Applications are open now — seats are limited to 15 students per batch." },
    { q: "Do you offer online programs?", a: "Yes! We offer a hybrid format for most modules. Theory, philosophy and pranayama can be completed remotely via live Zoom sessions." },
    { q: "Is prior yoga experience required for TTC?", a: "A minimum of 1 year of consistent personal practice is recommended for the 200H program. For therapeutic programs, no prior experience is needed." },
    { q: "Can I pay in installments?", a: "Yes, we offer flexible installment plans for all certification programs. Reach out to us to discuss a payment schedule that works for you." },
];

const CLASS_RECOMMENDATIONS = [
    { emoji: "🌱", title: "For Beginners", suggestion: "Start with Beginner Foundations → Morning Reset → Group Hatha classes", link: "/yoga" },
    { emoji: "🔥", title: "For Weight Loss", suggestion: "Ashtanga Vinyasa → 12-Week Weight Loss Program → Corporate Wellness", link: "/courses" },
    { emoji: "🌙", title: "For Stress Relief", suggestion: "Yoga Nidra → Breathwork for Anxiety → 21-Day Stress Relief Program", link: "/courses" },
    { emoji: "💪", title: "For Athletes", suggestion: "Strength & Core → Athletes & Sports Yoga → Yoga for Knee Pain", link: "/yoga" },
    { emoji: "🌸", title: "For Women's Health", suggestion: "Prenatal Yoga → PCOD/PCOS Program → Menopause Yoga", link: "/courses" },
    { emoji: "🦴", title: "For Pain Management", suggestion: "Back Pain → Yoga for Sciatica → Yoga for Spondylitis classes", link: "/yoga" },
];

export default function BusinessPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* ── Hero ── */}
                <section className="relative bg-background pt-36 pb-24 flex items-center overflow-hidden min-h-[45vh]">
                    <div className="absolute inset-0">
                        <div className="absolute right-0 top-0 w-[500px] h-[400px] bg-secondary/15 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute left-0 bottom-0 w-[350px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 dot-pattern opacity-20" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                        <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">Business Hub</p>
                        <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-5">Let&apos;s Start a Conversation</h1>
                        <p className="text-foreground/55 text-lg font-light max-w-xl mx-auto leading-relaxed">
                            Find the perfect class recommendation, get your questions answered and reach our support team — we&apos;re here to guide you.
                        </p>
                    </div>
                </section>


                {/* ══════════════════════
                    CLASS RECOMMENDATIONS
                ══════════════════════ */}
                <section className="py-20 bg-muted/40">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2">
                                <Star className="w-3.5 h-3.5" /> Guidance
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Class Recommendations</h2>
                            <p className="text-foreground/55 mt-3 max-w-lg mx-auto font-light leading-relaxed">
                                Not sure where to start? Find the path that fits your goal.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {CLASS_RECOMMENDATIONS.map((rec) => (
                                <Link key={rec.title} href={rec.link} className="group flex flex-col gap-4 bg-card rounded-2xl border border-muted p-6 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/8 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{rec.emoji}</span>
                                        <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">{rec.title}</h3>
                                    </div>
                                    <p className="text-sm text-foreground/60 leading-relaxed">{rec.suggestion}</p>
                                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto">
                                        View Classes <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════
                    BEGINNER FAQs
                ══════════════════════ */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                        <div className="text-center mb-12">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2">
                                <HelpCircle className="w-3.5 h-3.5" /> Support
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Beginner FAQs</h2>
                        </div>
                        <div className="flex flex-col divide-y divide-foreground/8">
                            {FAQS.map((faq) => (
                                <details key={faq.q} className="group py-5 cursor-pointer">
                                    <summary className="flex items-center justify-between gap-4 text-base font-semibold text-foreground list-none group-open:text-primary transition-colors">
                                        {faq.q}
                                        <span className="shrink-0 w-6 h-6 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/40 group-open:border-primary/40 group-open:text-primary group-open:rotate-45 transition-all">
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-sm text-foreground/60 leading-relaxed pl-0">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════
                    SUPPORT FORM
                ══════════════════════ */}
                <section className="py-20 bg-muted/40">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center mb-10">
                                <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-2">
                                    <MessageSquare className="w-3.5 h-3.5" /> Support
                                </p>
                                <h2 className="text-4xl font-serif font-medium text-foreground mb-3">Send us a Message</h2>
                                <p className="text-foreground/55 text-sm leading-relaxed max-w-md mx-auto">
                                    Reach out to us for program enquiries, partnership proposals or general questions. We&apos;ll get back to you within 24–48 hours.
                                </p>
                            </div>
                            {/* Support Form */}
                            <div className="bg-card rounded-2xl border border-muted p-8 shadow-sm">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
