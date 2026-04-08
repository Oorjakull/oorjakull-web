"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

export type YogaStyle = {
    title: string;
    description: string;
    tag: string;
    image: string;
    objectPosition: string;
};

const ITEMS_PER_PAGE = 3;

export default function YogaStylesClient({ styles }: { styles: YogaStyle[] }) {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(styles.length / ITEMS_PER_PAGE);
    const pageItems = styles.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

    const prev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);
    const next = useCallback(() => setPage((p) => Math.min(totalPages - 1, p + 1)), [totalPages]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [prev, next]);

    // Dynamic grid adapts to actual item count on the current page
    const gridClass =
        pageItems.length === 1
            ? "grid grid-cols-1 max-w-sm"
            : pageItems.length === 2
            ? "grid grid-cols-1 sm:grid-cols-2 max-w-2xl"
            : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl";

    return (
        <div className="flex flex-col items-center gap-10">
            {/* Cards */}
            <div className={`${gridClass} mx-auto gap-5 w-full`}>
                {pageItems.map((style) => (
                    <div
                        key={style.title}
                        className="group flex flex-col bg-card rounded-2xl border border-muted overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300"
                    >
                        {/* Image — landscape crop with per-image objectPosition to frame the pose */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={style.image}
                                alt={style.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                style={{ objectPosition: style.objectPosition }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-primary">
                                {style.tag}
                            </span>
                        </div>

                        <div className="p-5 flex flex-col flex-1 gap-3">
                            <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                                {style.title}
                            </h3>
                            <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                                {style.description}
                            </p>
                            <Link
                                href="/ai"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-1 hover:gap-2.5 transition-all"
                            >
                                Start with AI <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination — only shown if more than one page */}
            {totalPages > 1 && (
                <div className="flex items-center gap-6">
                    <button
                        onClick={prev}
                        disabled={page === 0}
                        aria-label="Previous page"
                        className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/50 hover:border-primary hover:text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                aria-label={`Go to page ${i + 1}`}
                                className={`rounded-full transition-all duration-300 ${
                                    i === page
                                        ? "w-6 h-2 bg-primary"
                                        : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        disabled={page === totalPages - 1}
                        aria-label="Next page"
                        className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/50 hover:border-primary hover:text-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
                    >
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
}
