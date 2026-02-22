"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/blog', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* ─── EXPANDED FULL-WIDTH NAV (when scrolled) ─── */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
            >
                <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-muted">
                    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                            <div className="relative h-10 w-10 transition-transform group-hover:scale-105">
                                <Image
                                    src="/icon_nobg-removebg-preview.png"
                                    alt="OorjaKull"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-lg font-serif font-bold text-foreground tracking-tight">
                                OorjaKull
                            </span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {NAV_LINKS.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative group"
                                >
                                    {label}
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden md:block">
                            <Link
                                href="/register"
                                className="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all"
                            >
                                Apply Now
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile drawer */}
                {isOpen && (
                    <div className="md:hidden bg-white border-b border-muted shadow-xl flex flex-col divide-y divide-muted">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-base font-medium px-6 py-4 hover:text-primary hover:bg-muted/30 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="p-4">
                            <Link
                                href="/register"
                                className="block text-center px-6 py-3 rounded-full text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* ─── FLOATING PILL NAV (when at top) ─── */}
            <div
                className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${scrolled
                    ? 'opacity-0 -translate-y-8 pointer-events-none scale-95'
                    : 'opacity-100 translate-y-0 pointer-events-auto scale-100'
                    }`}
            >
                {/* Desktop pill */}
                <div className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                    {/* Logo mark inside pill */}
                    <Link href="/" className="flex items-center gap-2 px-3 py-1.5 mr-1 group">
                        <div className="relative h-7 w-7 transition-transform group-hover:scale-105">
                            <Image
                                src="/icon_nobg-removebg-preview.png"
                                alt="OorjaKull"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-sm font-serif font-bold text-white/90 tracking-tight">
                            OorjaKull
                        </span>
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-5 bg-white/20 mx-1" />

                    {/* Nav links inside pill */}
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/15 transition-all"
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Divider */}
                    <div className="w-px h-5 bg-white/20 mx-1" />

                    {/* CTA inside pill */}
                    <Link
                        href="/register"
                        className="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all"
                    >
                        Apply Now
                    </Link>
                </div>

                {/* Mobile pill (compact, just logo + hamburger) */}
                <div className="flex md:hidden items-center gap-3 px-3 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-7 w-7">
                            <Image
                                src="/icon_nobg-removebg-preview.png"
                                alt="OorjaKull"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm font-serif font-bold text-white/90">OorjaKull</span>
                    </Link>
                    <button
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile pill dropdown */}
                {isOpen && (
                    <div className="md:hidden mt-2 rounded-2xl bg-dark-bg/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col divide-y divide-white/8">
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-base font-medium px-6 py-4 text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <div className="p-4">
                            <Link
                                href="/register"
                                className="block text-center px-6 py-3 rounded-full text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
