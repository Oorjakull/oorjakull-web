"use client";

import Link from "next/link";

import { ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {

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
                                <Image src="/logo_21.png" alt="OorjaKull" fill sizes="120px" className="object-contain" />

                            </div>
                            <div>
                                <h3 className="text-lg font-serif font-semibold text-foreground tracking-tight">OorjaKull</h3>
                                <p className="text-xs text-primary font-medium uppercase tracking-widest">School of Yoga</p>
                            </div>
                        </div>
                        <p className="text-sm text-foreground/55 leading-relaxed max-w-xs">
                            India&apos;s first AI-powered yoga platform — real-time pose guidance, adaptive breathwork, and generative wellness sessions. Ancient wisdom, modern intelligence.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3 pt-1">
                            {[
                                { icon: Instagram, label: "Instagram", href: "#" },
                                { icon: Facebook, label: "Facebook", href: "#" },
                                { icon: Youtube, label: "YouTube", href: "#" },
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
                                ["Breath & Beyond", "/ai"],
                                ["Program", "/ai"],
                                ["Try a Free AI Session", "/ai"],
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


                </div>
            </div>

            {/* ── Copyright bar ── */}
            <div className="relative mx-8 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-2" />
            <div className="relative z-10 container mx-auto px-4 md:px-8 pb-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/30">
                <p>© {new Date().getFullYear()} OorjaKull School of Yoga. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-foreground/60 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-foreground/60 transition-colors">Terms & Conditions</Link>
                    <Link href="/login" className="hover:text-foreground/60 transition-colors">Login</Link>
                </div>
            </div>
        </footer>
    );
}
