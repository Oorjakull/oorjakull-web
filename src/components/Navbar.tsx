"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, LogOut, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

// ─── Mega-menu data ────────────────────────────────────────────────────────
type MegaColumn = {
    heading: string;
    description?: string;
    links: { label: string; href: string }[];
};

type NavItem = {
    href: string;
    label: string;
    mega?: MegaColumn[];
};

const NAV_LINKS: NavItem[] = [
    {
        href: "/yoga",
        label: "Yoga",
        mega: [
            {
                heading: "CLASSES",
                description: "Find the perfect yoga style to match your mood.",
                links: [
                    { label: "All Yoga Classes", href: "/yoga#styles" },
                    { label: "Beginner Foundations", href: "/yoga#styles" },
                    { label: "Hatha", href: "/yoga#styles" },
                    { label: "Ashtanga", href: "/yoga#styles" },
                    { label: "Vinyasa", href: "/yoga#styles" },
                    { label: "Yin", href: "/yoga#styles" },
                    { label: "Strength & Core", href: "/yoga#styles" },
                    { label: "Skilled Poses", href: "/yoga#styles" },
                ],
            },
            {
                heading: "SCHEDULE",
                description: "Book a session that fits your life.",
                links: [
                    { label: "1:1 Private Sessions", href: "/yoga#schedule" },
                    { label: "Group Classes", href: "/yoga#schedule" },
                    { label: "Prenatal Yoga", href: "/yoga#schedule" },
                    { label: "Postnatal Yoga", href: "/yoga#schedule" },
                    { label: "Corporate Wellness", href: "/yoga#schedule" },
                    { label: "Yoga for Athletes", href: "/yoga#schedule" },
                    { label: "Seniors Yoga", href: "/yoga#schedule" },
                    { label: "Kids Yoga", href: "/yoga#schedule" },
                ],
            },
            {
                heading: "INSTRUCTORS",
                description: "Meet the Acharyas who guide your journey.",
                links: [
                    { label: "All Instructors", href: "/yoga#instructors" },
                    { label: "Back Pain Specialists", href: "/yoga#schedule" },
                    { label: "Knee & Joint Care", href: "/yoga#schedule" },
                    { label: "Therapeutic Yoga", href: "/yoga#schedule" },
                ],
            },
        ],
    },
    {
        href: "/about",
        label: "Breathwork",
        mega: [
            {
                heading: "PROGRAMS",
                description: "Ancient breath sciences for modern life.",
                links: [
                    { label: "Yoga Nidra", href: "/about#programs" },
                    { label: "Pranayama", href: "/about#programs" },
                    { label: "Breathwork for Anxiety", href: "/about#programs" },
                    { label: "Morning Reset", href: "/about#programs" },
                    { label: "Bedtime Breath", href: "/about#programs" },
                ],
            },
            {
                heading: "MEDITATION",
                description: "Structured courses for deep inner work.",
                links: [
                    { label: "Sound Meditation", href: "/about#meditation" },
                    { label: "Meditation for Stress Relief", href: "/about#programs" },
                    { label: "Structured Courses", href: "/about#meditation" },
                    { label: "Guided Series", href: "/about#meditation" },
                ],
            },
        ],
    },
    {
        href: "/courses",
        label: "Programs",
        mega: [
            {
                heading: "CERTIFICATIONS",
                description: "Internationally recognised training programs.",
                links: [
                    { label: "200-Hour YTT", href: "/courses" },
                    { label: "300-Hour YTT", href: "/courses" },
                ],
            },
            {
                heading: "WELLNESS PROGRAMS",
                description: "12-week and short-form transformation goals.",
                links: [
                    { label: "Weight Loss — 12 Weeks", href: "/courses" },
                    { label: "PCOD / PCOS Yoga", href: "/courses" },
                    { label: "Holistic Weight Gain", href: "/courses" },
                    { label: "Stress Relief — 21 Days", href: "/courses" },
                    { label: "Better Sleep — 4 Weeks", href: "/courses" },
                    { label: "Menopause Yoga", href: "/courses" },
                ],
            },
            {
                heading: "THERAPEUTIC",
                description: "Targeted programs for pain & recovery.",
                links: [
                    { label: "Yoga for Sciatica", href: "/courses" },
                    { label: "Lower Back Pain", href: "/courses" },
                    { label: "Yoga for IBS", href: "/courses" },
                ],
            },
        ],
    },
    {
        href: "/blog",
        label: "Wellness",
        mega: [
            {
                heading: "WISDOM",
                description: "Philosophy, alignment & daily rituals.",
                links: [
                    { label: "Pose Library & Alignment", href: "/blog" },
                    { label: "Yoga Philosophy", href: "/blog" },
                    { label: "Daily Nutrition & Rituals", href: "/blog" },
                ],
            },
            {
                heading: "COMMUNITY",
                description: "Stories, challenges & transformation.",
                links: [
                    { label: "Member Q&A", href: "/blog" },
                    { label: "Monthly Challenges", href: "/blog" },
                    { label: "Transformation Stories", href: "/blog" },
                ],
            },
        ],
    },
    {
        href: "/contact",
        label: "Contact",
        mega: [
            {
                heading: "PARTNERSHIPS",
                description: "Collaborate with OorjaKull.",
                links: [
                    { label: "Corporate Wellness", href: "/contact" },
                    { label: "Studio Partnerships", href: "/contact" },
                    { label: "Brand Collaborations", href: "/contact" },
                ],
            },
            {
                heading: "SUPPORT",
                description: "We're here to help.",
                links: [
                    { label: "Contact Us", href: "/contact#support" },
                    { label: "Beginner FAQs", href: "/contact#faq" },
                    { label: "Class Recommendations", href: "/contact#recommend" },
                ],
            },
        ],
    },
];

const LOGIN_LINK = { href: "/login", label: "Login" };

// ─── MegaMenu Panel ───────────────────────────────────────────────────────
function MegaMenu({ columns, onClose }: { columns: MegaColumn[]; onClose: () => void }) {
    return (
        <div
            className="absolute top-full left-0 right-0 z-40 bg-white border-t-2 border-primary border-b border-b-foreground/10 shadow-xl shadow-black/12 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseLeave={onClose}
        >
            <div className="container mx-auto px-8 py-10">
                <div className={`grid gap-12 ${columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                    {columns.map((col) => (
                        <div key={col.heading}>
                            <div className="mb-3">
                                <p className="text-xs font-extrabold tracking-[0.25em] text-foreground mb-1.5">{col.heading}</p>
                                {col.description && (
                                    <p className="text-xs text-foreground/55 leading-snug max-w-[220px]">{col.description}</p>
                                )}
                            </div>
                            <div className="w-full h-px bg-foreground/15 mb-4" />
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="text-sm font-normal text-foreground/75 hover:text-primary hover:translate-x-0.5 inline-block transition-all duration-150"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─── Component ────────────────────────────────────────────────────────────
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session, status } = useSession();
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);

    // Close profile dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const userInitial = session?.user?.name?.[0]?.toUpperCase() ?? session?.user?.email?.[0]?.toUpperCase() ?? "U";
    const userName = session?.user?.name ?? "Member";
    const userEmail = session?.user?.email ?? "";

    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mega-menu on outside click
    useEffect(() => {
        const handler = () => setActiveMenu(null);
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    const openMenu = (label: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveMenu(label);
    };

    const scheduleClose = () => {
        closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
    };

    const cancelClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
    };

    const activeItem = NAV_LINKS.find((n) => n.label === activeMenu);

    return (
        <>
            {/* ── Desktop ── */}
            <div
                className={`
                    hidden md:block
                    fixed top-0 left-0 right-0 z-50
                    transition-all duration-500 ease-in-out
                `}
            >
                {/* Bar / Pill */}
                <div
                    className={`
                        flex justify-center
                        transition-all duration-500 ease-in-out
                        ${scrolled ? "pt-0 px-0" : "pt-5 px-6"}
                    `}
                >
                    <div
                        className={`
                            w-full flex items-center justify-between
                            transition-all duration-500 ease-in-out
                            ${scrolled
                                ? "max-w-none rounded-none px-8 py-3.5 bg-background/96 backdrop-blur-md border-b border-foreground/6 shadow-sm"
                                : "max-w-fit rounded-full px-2 py-2 bg-foreground/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/25"
                            }
                        `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group shrink-0" onClick={() => setActiveMenu(null)}>
                            <div className={`relative transition-all duration-500 group-hover:scale-105 ${scrolled ? "h-9 w-9" : "h-7 w-7"}`}>
                                <Image
                                    src="/icon_nobg-removebg-preview.png"
                                    alt="OorjaKull"
                                    fill
                                    sizes="40px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className={`font-serif font-bold tracking-tight transition-all duration-500 ${scrolled ? "text-base text-foreground inline" : "hidden"}`}>
                                OorjaKull
                            </span>
                        </Link>

                        {/* Pill divider */}
                        <div className={`w-px h-5 bg-white/20 mx-2 shrink-0 transition-all duration-300 ${scrolled ? "opacity-0 w-0 mx-0" : "opacity-100"}`} />

                        {/* Nav links with mega-menu triggers */}
                        <div className={`flex items-center transition-all duration-500 ${scrolled ? "gap-6" : "gap-0.5"}`}>
                            {NAV_LINKS.map(({ href, label, mega }) => {
                                const isActive = activeMenu === label;
                                return (
                                    <div
                                        key={href}
                                        className="relative"
                                        onMouseEnter={() => mega ? openMenu(label) : undefined}
                                        onMouseLeave={mega ? scheduleClose : undefined}
                                    >
                                        <Link
                                            href={href}
                                            onClick={() => setActiveMenu(null)}
                                            className={`
                                                inline-flex items-center gap-1 whitespace-nowrap font-medium transition-all duration-300 relative group
                                                ${scrolled
                                                    ? `text-sm py-1 px-1 ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`
                                                    : `text-[13px] ${isActive ? "text-white bg-white/18" : "text-white/85 hover:text-white hover:bg-white/12"} px-3 py-2 rounded-full`
                                                }
                                            `}
                                        >
                                            {label}
                                            {mega && (
                                                <ChevronDown
                                                    className={`w-3 h-3 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                                                />
                                            )}
                                            {scrolled && (
                                                <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                                            )}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Pill divider */}
                        <div className={`w-px h-5 bg-white/20 mx-2 shrink-0 transition-all duration-300 ${scrolled ? "opacity-0 w-0 mx-0" : "opacity-100"}`} />

                        {/* Login + Book Trial / Profile */}
                        <div className="flex items-center gap-2 shrink-0">
                            {status === "loading" ? (
                                <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse" />
                            ) : session ? (
                                /* ── Logged in: Avatar + Dropdown ── */
                                <div className="relative" ref={profileRef}>
                                    <button
                                        onClick={() => setProfileOpen(!profileOpen)}
                                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                                            scrolled
                                                ? "bg-primary text-white hover:bg-primary/85 ring-2 ring-primary/20"
                                                : "bg-white/15 text-white hover:bg-white/25 border border-white/25"
                                        }`}
                                        aria-label="Profile menu"
                                    >
                                        {userInitial}
                                    </button>

                                    {profileOpen && (
                                        <div className="absolute right-0 top-12 w-56 bg-card rounded-2xl border border-muted shadow-2xl shadow-black/15 z-50 overflow-hidden">
                                            {/* User info */}
                                            <div className="px-4 py-3.5 border-b border-muted">
                                                <p className="text-sm font-semibold text-foreground truncate">{userName}</p>
                                                <p className="text-xs text-foreground/45 truncate mt-0.5">{userEmail}</p>
                                            </div>
                                            {/* Menu items */}
                                            <div className="py-1">
                                                <Link
                                                    href="/dashboard"
                                                    onClick={() => setProfileOpen(false)}
                                                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                                                >
                                                    <User className="w-4 h-4" />
                                                    My Dashboard
                                                </Link>
                                            </div>
                                            <div className="border-t border-muted py-1">
                                                <button
                                                    onClick={() => { setProfileOpen(false); signOut({ callbackUrl: "/" }); }}
                                                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-500/5 transition-colors"
                                                >
                                                    <LogOut className="w-4 h-4" />
                                                    Sign Out
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /* ── Logged out: Login + Book Trial ── */
                                <Link
                                    href={LOGIN_LINK.href}
                                    onClick={() => setActiveMenu(null)}
                                    className={`whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                                        scrolled
                                            ? "text-foreground/70 hover:text-primary px-3 py-1.5 rounded-full border border-foreground/15 hover:border-primary/40"
                                            : "text-white/80 hover:text-white px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/12"
                                    }`}
                                >
                                    Login
                                </Link>
                            )}
                            {!session && (
                                <Link
                                    href="/book-trial"
                                    onClick={() => setActiveMenu(null)}
                                    className="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all whitespace-nowrap"
                                >
                                    Book for Trial Session
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mega-menu panel — rendered in the fixed desktop wrapper so it stays below the bar */}
                {activeItem?.mega && (
                    <div
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                        onClick={(e) => e.stopPropagation()}
                        className={scrolled ? "" : "pt-5 px-6"}
                    >
                        <MegaMenu
                            columns={activeItem.mega}
                            onClose={() => setActiveMenu(null)}
                        />
                    </div>
                )}
            </div>

            {/* ── Mobile ── */}
            <div
                className={`
                    flex md:hidden justify-center
                    fixed top-0 left-0 right-0 z-50
                    transition-all duration-500 ease-in-out
                    ${scrolled ? "pt-0 px-0" : "pt-5 px-4"}
                `}
            >
                <div
                    className={`
                        w-full flex items-center justify-between
                        transition-all duration-500 ease-in-out
                        ${scrolled
                            ? "max-w-none rounded-none px-5 py-3 bg-background/96 backdrop-blur-md border-b border-foreground/6 shadow-sm"
                            : "max-w-xs rounded-full px-3 py-2.5 bg-foreground/80 backdrop-blur-md border border-white/10 shadow-2xl"
                        }
                    `}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <div className={`relative transition-all duration-500 ${scrolled ? "h-8 w-8" : "h-7 w-7"}`}>
                            <Image
                                src="/icon_nobg-removebg-preview.png"
                                alt="OorjaKull"
                                fill
                                sizes="40px"
                                className="object-contain"
                            />
                        </div>
                        <span className={`font-serif font-bold text-sm transition-all duration-500 ${scrolled ? "text-foreground" : "text-white/90"}`}>
                            OorjaKull
                        </span>
                    </Link>
                    <button
                        className={`p-1.5 rounded-full transition-all ${scrolled ? "text-foreground hover:bg-muted" : "bg-white/10 hover:bg-white/20 text-white"}`}
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
                        max-h-[80vh] overflow-y-auto
                        ${scrolled ? "mt-0" : "mt-2"}
                    `}>
                        {NAV_LINKS.map(({ href, label, mega }) => (
                            <div key={href}>
                                {mega ? (
                                    <>
                                    <div className="flex items-center text-base font-medium text-foreground/80 hover:bg-primary/5 transition-colors group">
                                        <Link
                                            href={href}
                                            className="flex-1 px-6 py-4"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {label}
                                        </Link>
                                        <button
                                            className="px-6 py-4"
                                            onClick={() => setExpandedMobile(expandedMobile === label ? null : label)}
                                        >
                                            <ChevronDown className={`w-4 h-4 transition-transform group-hover:text-primary ${expandedMobile === label ? "rotate-180" : ""}`} />
                                        </button>
                                    </div>
                                        {expandedMobile === label && (
                                            <div className="px-6 pb-4 space-y-5 bg-primary/2">
                                                {mega.map((col) => (
                                                    <div key={col.heading}>
                                                        <p className="text-[10px] font-bold tracking-[0.2em] text-foreground/50 mb-2">{col.heading}</p>
                                                        <ul className="space-y-2">
                                                            {col.links.map((link) => (
                                                                <li key={link.label}>
                                                                    <Link
                                                                        href={link.href}
                                                                        className="text-sm text-foreground/70 hover:text-primary"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        {link.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={href}
                                        className="block text-base font-medium px-6 py-4 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        {session ? (
                            <>
                                <div className="px-6 py-3.5 border-t border-muted/60 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                                        {userInitial}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-foreground truncate">{userName}</p>
                                        <p className="text-xs text-foreground/45 truncate">{userEmail}</p>
                                    </div>
                                </div>
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2 text-base font-medium px-6 py-3.5 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <User className="w-4 h-4" /> My Dashboard
                                </Link>
                                <button
                                    onClick={() => { setIsOpen(false); signOut({ callbackUrl: "/" }); }}
                                    className="flex w-full items-center gap-2 text-base font-medium px-6 py-3.5 text-red-500 hover:bg-red-500/5 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" /> Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={LOGIN_LINK.href}
                                    className="block text-base font-medium px-6 py-4 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Login
                                </Link>
                                <div className="p-4">
                                    <Link
                                        href="/book-trial"
                                        className="block text-center px-6 py-3 rounded-full text-base font-semibold bg-primary text-white hover:bg-primary/90 transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Book for Trial Session
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
