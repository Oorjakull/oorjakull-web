import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `https://www.oorjakull.com/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.oorjakull.com/blog/${post.slug}`,
            type: "article",
            publishedTime: post.date,
            images: [{ url: "/og-image.png", width: 1200, height: 630 }],
        },
    };
}

/* Simple markdown-ish renderer: ## headings, **bold**, paragraphs */
function renderContent(content: string) {
    return content.split("\n\n").map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("### ")) {
            return (
                <h3 key={i} className="text-xl font-serif font-semibold text-foreground mt-10 mb-4">
                    {trimmed.slice(4)}
                </h3>
            );
        }
        if (trimmed.startsWith("## ")) {
            return (
                <h2 key={i} className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">
                    {trimmed.slice(3)}
                </h2>
            );
        }

        // List items
        if (trimmed.startsWith("- ")) {
            const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
            return (
                <ul key={i} className="space-y-2 my-4 ml-1">
                    {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-foreground/70 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2.5 shrink-0" />
                            <span dangerouslySetInnerHTML={{
                                __html: item
                                    .slice(2)
                                    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>'),
                            }} />
                        </li>
                    ))}
                </ul>
            );
        }

        // Regular paragraph with bold support
        return (
            <p
                key={i}
                className="text-foreground/70 leading-[1.85] mb-1"
                dangerouslySetInnerHTML={{
                    __html: trimmed.replace(
                        /\*\*(.+?)\*\*/g,
                        '<strong class="text-foreground font-semibold">$1</strong>'
                    ),
                }}
            />
        );
    });
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { "@type": "Organization", name: "OorjaKull" },
        publisher: {
            "@type": "Organization",
            name: "OorjaKull",
            logo: { "@type": "ImageObject", url: "https://www.oorjakull.com/icon_nobg-removebg-preview.png" },
        },
        mainEntityOfPage: `https://www.oorjakull.com/blog/${post.slug}`,
    };

    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">
                {/* Article JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
                />

                {/* Hero */}
                <section className="relative bg-background pt-32 pb-16 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-secondary/8 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 dot-pattern opacity-15" />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-3xl">
                        {/* Back link */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors mb-8"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Back to Wellness
                        </Link>

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-foreground/50">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs">
                                <Tag className="w-3 h-3" />
                                {post.tag}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                {new Date(post.date).toLocaleDateString("en-IN", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readingTime}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground leading-[1.12] mb-6">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-lg text-foreground/60 font-light leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>
                </section>

                {/* Article body */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                        <div className="prose-custom">{renderContent(post.content)}</div>

                        {/* CTA at bottom */}
                        <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row gap-4 items-start">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" />
                                More Articles
                            </Link>
                            <Link
                                href="/book-trial"
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Book a Trial Session
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
