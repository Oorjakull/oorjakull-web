"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";

const POSTS_PER_PAGE = 3;

export default function BlogCardsClient() {
    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);
    const pagePosts = BLOG_POSTS.slice(page * POSTS_PER_PAGE, (page + 1) * POSTS_PER_PAGE);

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

    const gridClass =
        pagePosts.length === 1
            ? "grid grid-cols-1 max-w-sm"
            : pagePosts.length === 2
            ? "grid grid-cols-1 sm:grid-cols-2 max-w-2xl"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl";

    return (
        <div className="flex flex-col items-center gap-10">
            {/* Cards */}
            <div className={`${gridClass} mx-auto gap-6 w-full`}>
                {pagePosts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group cursor-pointer block"
                    >
                        <article className="bg-card border border-muted rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                            {post.image ? (
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute top-4 left-4 text-xs font-semibold bg-white/90 text-primary px-3 py-1 rounded-full">
                                        {post.tag}
                                    </span>
                                </div>
                            ) : (
                                <div className={`aspect-[4/3] bg-gradient-to-br ${post.color} flex items-center justify-center text-6xl relative`}>
                                    <span className="group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>
                                    <span className="absolute top-4 left-4 text-xs font-semibold bg-white/90 text-primary px-3 py-1 rounded-full">
                                        {post.tag}
                                    </span>
                                </div>
                            )}

                            <div className="p-6 flex-1 flex flex-col gap-3">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <a
                                        href={`https://instagram.com/${post.instagramId.replace("@", "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-xs text-foreground/40 hover:text-rose-500 transition-colors z-10 relative"
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                        {post.instagramId}
                                    </a>
                                </div>
                                <h3 className="text-lg font-serif font-semibold group-hover:text-primary transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-2">
                                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
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

                    {/* Dot indicators */}
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
