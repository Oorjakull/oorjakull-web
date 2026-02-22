import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata = {
    title: "Contact OorjaKull | Get In Touch",
    description: "Reach out to OorjaKull for inquiries about our yoga teacher training programs. We're here to guide your journey.",
};

const CONTACT_ITEMS = [
    {
        icon: MapPin,
        title: "Our Studio",
        lines: ["123 Yoga Street, Serenity Nagar", "Rishikesh, Uttarakhand 249201"],
    },
    {
        icon: Phone,
        title: "Phone",
        lines: ["+91 98765 43210", "Mon–Sat, 9am – 6pm IST"],
    },
    {
        icon: Mail,
        title: "Email",
        lines: ["namaste@oorjakull.com"],
    },
];

const FAQS = [
    { q: "When does the next batch start?", a: "Our next 200H batch commences June 2026. Applications are open now — seats are limited." },
    { q: "Do you offer online programs?", a: "Yes! We offer a hybrid format for most modules. Theory and philosophy can be completed remotely." },
    { q: "Is prior yoga experience required?", a: "A minimum of 1 year of consistent personal practice is recommended for the 200H program." },
];

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* ── Hero ── */}
                <section className="relative bg-dark-bg pt-36 pb-24 flex items-center overflow-hidden min-h-[45vh]">
                    <div className="absolute inset-0">
                        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute inset-0 dot-pattern opacity-15" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                        <p className="text-primary-light text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                            Reach Out
                        </p>
                        <h1 className="text-5xl md:text-6xl font-serif font-light text-white mb-5">
                            Let's Start a Conversation
                        </h1>
                        <p className="text-white/50 text-lg max-w-xl mx-auto font-light">
                            Have questions about our programs? We're here to guide you every step of the way.
                        </p>
                    </div>
                </section>

                {/* ── Contact Grid ── */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                            {/* Left: Info + FAQs */}
                            <div className="flex flex-col gap-10">
                                {/* Contact Items */}
                                <div>
                                    <h2 className="text-2xl font-serif font-medium text-foreground mb-7">
                                        Contact Information
                                    </h2>
                                    <div className="flex flex-col gap-5">
                                        {CONTACT_ITEMS.map(({ icon: Icon, title, lines }) => (
                                            <div key={title} className="flex items-start gap-4 group">
                                                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">{title}</p>
                                                    {lines.map(l => <p key={l} className="text-foreground/80 text-sm">{l}</p>)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Office Hours card */}
                                <div className="rounded-2xl bg-dark-surface p-6 border border-white/8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Clock className="w-5 h-5 text-primary-light" />
                                        <h3 className="text-white font-semibold">Office Hours</h3>
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        Monday – Saturday: 9:00 AM to 6:00 PM IST<br />
                                        Sunday: Closed (messages answered Monday)
                                    </p>
                                </div>

                                {/* FAQs */}
                                <div>
                                    <h3 className="text-xl font-serif font-medium text-foreground mb-5 flex items-center gap-2">
                                        <MessageCircle className="w-5 h-5 text-primary" />
                                        Quick Answers
                                    </h3>
                                    <div className="space-y-4">
                                        {FAQS.map(({ q, a }) => (
                                            <div key={q} className="bg-card border border-muted rounded-xl p-5 hover:border-primary/30 transition-colors">
                                                <p className="font-semibold text-foreground text-sm mb-2">{q}</p>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <div>
                                <h2 className="text-2xl font-serif font-medium text-foreground mb-7">
                                    Send Us a Message
                                </h2>
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
