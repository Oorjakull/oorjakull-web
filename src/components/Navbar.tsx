"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { href: '/yoga', label: 'Yoga' },
    { href: '/about', label: 'Breath & Beyond' },
    { href: '/courses', label: 'Goals' },
    { href: '/blog', label: 'Purposeful Living' },
    { href: '/contact', label: 'Business' },
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
            {/*
             * Outer shell: ALWAYS fixed top-0 / left-0 / right-0 — never moves.
             * Only padding changes (top / horizontal) so there is zero position
             * recalculation, eliminating the jitter.
             *
             * Inner pill/bar: animates only max-width, border-radius and background
             * — all GPU-compositable — for a perfectly smooth morph.
             */}

            {/* ── Desktop ── */}
            <div
                className={`
                    hidden md:flex justify-center
                    fixed top-0 left-0 right-0 z-50
                    transition-all duration-500 ease-in-out
                    ${scrolled ? 'pt-0 px-0' : 'pt-5 px-6'}
                `}
            >
                <div
                    className={`
                        w-full flex items-center justify-between
                        transition-all duration-500 ease-in-out
                        ${scrolled
                            /* ── Full-width bar ── */
                            ? 'max-w-none rounded-none px-8 py-3.5 bg-background/96 backdrop-blur-md border-b border-foreground/6 shadow-sm'
                            /* ── Centred pill ── */
                            : 'max-w-fit rounded-full px-2 py-2 bg-foreground/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/25'
                        }
                    `}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group shrink-0">
                        <div className={`relative transition-all duration-500 group-hover:scale-105 ${scrolled ? 'h-9 w-9' : 'h-7 w-7'}`}>
                            <Image
                                src="/icon_nobg-removebg-preview.png"
                                alt="OorjaKull"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Show brand name only in scrolled bar, keep pill compact */}
                        <span className={`font-serif font-bold tracking-tight transition-all duration-500 ${scrolled ? 'text-base text-foreground inline' : 'hidden'}`}>
                            OorjaKull
                        </span>
                    </Link>

                    {/* Pill divider — fades out when scrolled */}
                    <div className={`w-px h-5 bg-white/20 mx-2 shrink-0 transition-all duration-300 ${scrolled ? 'opacity-0 w-0 mx-0' : 'opacity-100'}`} />

                    {/* Nav links */}
                    <div className={`flex items-center transition-all duration-500 ${scrolled ? 'gap-8' : 'gap-0.5'}`}>
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`
                                    whitespace-nowrap font-medium transition-all duration-300 relative group
                                    ${scrolled
                                        ? 'text-sm text-foreground/70 hover:text-primary py-1 px-1'
                                        : 'text-[13px] text-white/85 hover:text-white hover:bg-white/12 px-3 py-2 rounded-full'
                                    }
                                `}
                            >
                                {label}
                                {scrolled && (
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Pill divider — fades out when scrolled */}
                    <div className={`w-px h-5 bg-white/20 mx-2 shrink-0 transition-all duration-300 ${scrolled ? 'opacity-0 w-0 mx-0' : 'opacity-100'}`} />

                    {/* CTA */}
                    <Link
                        href="/register"
                        className="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all shrink-0"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>

            {/* ── Mobile ── */}
            <div
                className={`
                    flex md:hidden justify-center
                    fixed top-0 left-0 right-0 z-50
                    transition-all duration-500 ease-in-out
                    ${scrolled ? 'pt-0 px-0' : 'pt-5 px-4'}
                `}
            >
                <div
                    className={`
                        w-full flex items-center justify-between
                        transition-all duration-500 ease-in-out
                        ${scrolled
                            ? 'max-w-none rounded-none px-5 py-3 bg-background/96 backdrop-blur-md border-b border-foreground/6 shadow-sm'
                            : 'max-w-xs rounded-full px-3 py-2.5 bg-foreground/80 backdrop-blur-md border border-white/10 shadow-2xl'
                        }
                    `}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <div className={`relative transition-all duration-500 ${scrolled ? 'h-8 w-8' : 'h-7 w-7'}`}>
                            <Image
                                src="/icon_nobg-removebg-preview.png"
                                alt="OorjaKull"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className={`font-serif font-bold text-sm transition-all duration-500 ${scrolled ? 'text-foreground' : 'text-white/90'}`}>
                            OorjaKull
                        </span>
                    </Link>
                    <button
                        className={`p-1.5 rounded-full transition-all ${scrolled ? 'text-foreground hover:bg-muted' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile dropdown */}
                {isOpen && (
                    <div className={`
                        absolute top-full mt-2 left-4 right-4
                        rounded-2xl bg-card/97 backdrop-blur-xl border border-muted shadow-2xl
                        overflow-hidden flex flex-col divide-y divide-foreground/8
                        ${scrolled ? 'mt-0' : 'mt-2'}
                    `}>
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-base font-medium px-6 py-4 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
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
