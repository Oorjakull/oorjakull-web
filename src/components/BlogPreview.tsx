"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Instagram } from "lucide-react";
import Reveal, { StaggerReveal, StaggerItem } from "@/components/Reveal";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Meet Madhu: Your AI Yoga Companion",
        excerpt: "How OorjaKull's AI companion uses real-time camera pose detection to give you personalised feedback — and why it doesn't replace a teacher.",
        date: "Mar 20, 2026",
        tag: "AI Innovation",
        slug: "meet-madhu-ai-companion",
        color: "from-primary/20 to-emerald-900/20",
        emoji: "🤖",
        instagramId: "@oorjakull",
    },
    {
        id: 2,
        title: "Train the Trainer: Teaching in the AI Era",
        excerpt: "Why the world needs certified yoga teachers who understand AI — and how OorjaKull's 200H programme prepares you for hybrid studios.",
        date: "Mar 12, 2026",
        tag: "Career",
        slug: "train-the-trainer-ai-era",
        color: "from-secondary/20 to-amber-900/20",
        emoji: "🎓",
        instagramId: "@oorjakull.school",
    },
    {
        id: 3,
        title: "The Science of Adaptive Breathwork",
        excerpt: "Discover how AI-driven protocols like NSDR, 4-7-8 and Anulom Vilom are dynamically paced to your nervous system in real time.",
        date: "Mar 05, 2026",
        tag: "Pranayama",
        slug: "adaptive-breathwork-science",
        color: "from-accent/20 to-rose-900/20",
        emoji: "🌬️",
        instagramId: "@oorjakull.wellness",
    },
];

export default function BlogPreview() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <Reveal width="100%" delay={0} className="mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                Wisdom &amp; Insights
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                                Latest from the Mat
                            </h2>
                        </div>
                        <Link href="/blog" className="group inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all shrink-0">
                            All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </Reveal>

                {/* Cards */}
                <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.13}>
                    {BLOG_POSTS.map((post) => (
                        <StaggerItem key={post.id}>
                            <div
                                className="group cursor-pointer"
                                onClick={() => window.location.assign("/blog")}
                            >
                                <article className="bg-card border border-muted rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                                    <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center text-6xl relative`}>
                                        <span className="group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>
                                        <span className="absolute top-4 left-4 text-xs font-semibold bg-white/90 text-primary px-3 py-1 rounded-full">
                                            {post.tag}
                                        </span>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col gap-3">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                            <a
                                                href={`https://instagram.com/${post.instagramId.replace('@', '')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-1 text-xs text-foreground/40 hover:text-rose-500 transition-colors"
                                            >
                                                <Instagram className="w-3 h-3" />
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
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerReveal>

            </div>
        </section>
    );
}
