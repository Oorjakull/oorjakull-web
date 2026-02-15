"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-muted bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="relative h-14 w-14 mr-2">
                        <Image
                            src="/icon_nobg-removebg-preview.png"
                            alt="OorjaKull Icon"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-serif font-bold tracking-tight text-foreground">
                        OorjaKull
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6">
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                        About
                    </Link>
                    <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
                        Courses
                    </Link>
                    <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:block">
                    <Link href="/register" className={cn(
                        "px-4 py-2 rounded-full text-sm font-semibold transition-all",
                        "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg"
                    )}>
                        Join Now
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-muted p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
                    <Link
                        href="/about"
                        className="text-lg font-medium hover:text-primary transition-colors p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/courses"
                        className="text-lg font-medium hover:text-primary transition-colors p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Courses
                    </Link>
                    <Link
                        href="/blog"
                        className="text-lg font-medium hover:text-primary transition-colors p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="text-lg font-medium hover:text-primary transition-colors p-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/register"
                        className="text-lg font-medium hover:text-primary transition-colors p-2 text-primary font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Join Now
                    </Link>
                </div>
            )}
        </nav>
    );
}
