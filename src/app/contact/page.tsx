import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { MapPin, Phone, Mail, ShoppingBag, HelpCircle, Star, MessageSquare, ArrowRight, Package } from "lucide-react";

export const metadata = {
    title: "Business | OorjaKull — Shop, Support & Partnerships",
    description: "OorjaKull Business hub — shop yoga merchandise, get beginner FAQs answered, find class recommendations and reach our support team.",
};

const CONTACT_ITEMS = [
    { icon: MapPin, title: "Our Studio", lines: ["123 Yoga Street, Serenity Nagar", "Rishikesh, Uttarakhand 249201"] },
    { icon: Phone, title: "Phone", lines: ["+91 98765 43210", "Mon–Sat, 9am – 6pm IST"] },
    { icon: Mail, title: "Email", lines: ["namaste@oorjakull.com"] },
];

const SHOP_ITEMS = [
    { emoji: "🧘", title: "Yoga Mats & Props", description: "Eco-friendly cork and natural rubber mats, blocks, straps and bolsters sourced for authentic practice.", tag: "Equipment", tagColor: "bg-primary/15 text-primary", gradient: "from-primary/15 to-emerald-900/10", badge: "Coming Soon" },
    { emoji: "💎", title: "Crystals & Sacred Objects", description: "Hand-selected crystals, malas and singing bowls to support your meditation and breathwork practice.", tag: "Wellness", tagColor: "bg-violet-400/15 text-violet-700", gradient: "from-violet-400/15 to-indigo-900/10", badge: "Coming Soon" },
    { emoji: "📓", title: "Journals & Guides", description: "OorjaKull practice journals, yoga philosophy study guides and daily intention notebooks.", tag: "Stationery", tagColor: "bg-secondary/15 text-secondary", gradient: "from-secondary/15 to-amber-900/10", badge: "Coming Soon" },
    { emoji: "🌿", title: "Wellness Essentials", description: "Ayurvedic oils, herbal teas, skincare and daily ritual kits curated to complement your yoga lifestyle.", tag: "Ayurveda", tagColor: "bg-green-400/15 text-green-700", gradient: "from-green-400/15 to-teal-900/10", badge: "Coming Soon" },
];

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
                            Shop wellness essentials, get your questions answered and find the perfect class recommendation — we&apos;re here to guide you.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════
                    SHOP & MERCHANDISE
                ══════════════════════ */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2">
                                <ShoppingBag className="w-3.5 h-3.5" /> Shop
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">Shop & Merchandise</h2>
                            <p className="text-foreground/55 mt-3 max-w-lg mx-auto font-light leading-relaxed">
                                Carefully curated products to complement and elevate your daily practice.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {SHOP_ITEMS.map((item) => (
                                <div key={item.title} className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/25 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300">
                                    <div className={`h-36 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                                        <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/75 ${item.tagColor}`}>{item.tag}</span>
                                        {item.badge && (
                                            <span className="absolute bottom-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-foreground/8 text-foreground/50 border border-foreground/15">
                                                <Package className="w-2.5 h-2.5 inline mr-1" />{item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-5 flex flex-col flex-1 gap-2">
                                        <h3 className="font-serif font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                                        <p className="text-xs text-foreground/55 leading-relaxed flex-1">{item.description}</p>
                                        <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/40 mt-2 cursor-not-allowed" disabled>
                                            Notify Me <ArrowRight className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                            {/* Contact Info */}
                            <div className="flex flex-col gap-8">
                                <div>
                                    <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                                        <MessageSquare className="w-3.5 h-3.5" /> Contact
                                    </p>
                                    <h2 className="text-3xl font-serif font-medium text-foreground mb-2">Contact Information</h2>
                                    <p className="text-foreground/55 text-sm leading-relaxed">Reach out to us for program enquiries, partnership proposals or general questions.</p>
                                </div>
                                <div className="flex flex-col gap-5">
                                    {CONTACT_ITEMS.map(({ icon: Icon, title, lines }) => (
                                        <div key={title} className="flex items-start gap-4 group">
                                            <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">{title}</p>
                                                {lines.map((l) => <p key={l} className="text-foreground/75 text-sm">{l}</p>)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Support Form */}
                            <div className="bg-card rounded-2xl border border-muted p-8">
                                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Support Form</h3>
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
