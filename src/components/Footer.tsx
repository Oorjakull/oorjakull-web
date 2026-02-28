"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Instagram, Facebook, Youtube, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <footer className="relative bg-muted text-foreground/70">
            {/* ── Gradient fade bridge ── */}
            <div
                className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, #f5eedd 0%, #e8dccc 100%)" }}
            />

            {/* ── Main grid ── */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand — spans 2 cols on large screens */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 shrink-0">
                                <Image src="/logo_21.png" alt="OorjaKull" fill className="object-contain" />
                            </div>
                            <div>
                                <h3 className="text-lg font-serif font-semibold text-foreground tracking-tight">OorjaKull</h3>
                                <p className="text-xs text-primary font-medium uppercase tracking-widest">School of Yoga</p>
                            </div>
                        </div>
                        <p className="text-sm text-foreground/55 leading-relaxed max-w-xs">
                            Empowering the next generation of yoga teachers with the depth of ancient wisdom and the clarity of modern pedagogy. From the heart of India.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3 pt-1">
                            {[
                                { icon: Instagram, label: "Instagram", href: "#" },
                                { icon: Facebook, label: "Facebook", href: "#" },
                                { icon: Youtube, label: "YouTube", href: "#" },
                                { icon: Mail, label: "Email", href: "/contact" },
                            ].map(({ icon: Icon, label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/45 hover:border-primary hover:text-primary hover:bg-primary/8 transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.25em]">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                ["Breath & Beyond", "/about"],
                                ["Goals", "/courses"],
                                ["Purposeful Living", "/blog"],
                                ["Business", "/contact"],
                                ["Apply Now", "/register"],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <Link href={href} className="text-foreground/55 hover:text-primary transition-colors inline-flex items-center gap-1 group">
                                        {label}
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.25em]">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3 text-foreground/55">
                                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary/60" />
                                <span className="leading-relaxed">
                                    OorjaKull Ashram,<br />
                                    Mysore – 570 002,<br />
                                    Karnataka, India
                                </span>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="flex gap-3 text-foreground/55 hover:text-primary transition-colors">
                                    <Phone className="w-4 h-4 shrink-0 mt-0.5 text-primary/60" />
                                    <span>+91 98765 43210</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@oorjakull.com" className="flex gap-3 text-foreground/55 hover:text-primary transition-colors">
                                    <Mail className="w-4 h-4 shrink-0 mt-0.5 text-primary/60" />
                                    <span>hello@oorjakull.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold text-foreground/40 uppercase tracking-[0.25em]">Newsletter</h4>
                        <p className="text-sm text-foreground/55 leading-relaxed">
                            Teachings, class schedules and wellness insights — delivered gently to your inbox.
                        </p>
                        {subscribed ? (
                            <div className="text-sm text-primary font-medium flex items-center gap-2">
                                ✓ You're on the list. Namaste 🙏
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className="flex-1 min-w-0 text-sm px-3 py-2 rounded-lg bg-background/60 border border-foreground/15 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="shrink-0 w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
                                    aria-label="Subscribe"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Copyright bar ── */}
            <div className="relative mx-8 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-2" />
            <div className="relative z-10 container mx-auto px-4 md:px-8 pb-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/30">
                <p>© {new Date().getFullYear()} OorjaKull School of Yoga. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-foreground/60 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-foreground/60 transition-colors">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
}
