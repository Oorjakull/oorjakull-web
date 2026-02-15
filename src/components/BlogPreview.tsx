import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Ancient Science of Breath",
        excerpt: "Discover how Pranayama influences your nervous system and mental clarity.",
        date: "Feb 10, 2026",
        image: "/placeholder-yoga-1.jpg",
        slug: "ancient-science-breath"
    },
    {
        id: 2,
        title: "Building a career as a Yoga Trainer",
        excerpt: "Why the world needs authentic teachers more than ever in the age of digital wellness.",
        date: "Feb 05, 2026",
        image: "/placeholder-yoga-2.jpg",
        slug: "career-yoga-trainer"
    },
    {
        id: 3,
        title: "Integrating AI with Traditional Asanas",
        excerpt: "How OorjaKull is pioneering the future of personalized posture correction.",
        date: "Jan 28, 2026",
        image: "/placeholder-yoga-3.jpg",
        slug: "ai-traditional-asanas"
    }
];

export default function BlogPreview() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-colmd:flex-row justify-between items-center mb-12 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tighter text-foreground font-serif sm:text-4xl">
                            Latest Insights
                        </h2>
                        <p className="text-muted-foreground mt-2 max-w-xl">
                            Wisdom from our master teachers and wellness experts.
                        </p>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        View All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <Link href={`/blog`} key={post.id} className="group cursor-pointer">
                            <article className="bg-background rounded-2xl overflow-hidden shadow-sm border border-muted transition-all hover:shadow-md h-full flex flex-col">
                                <div className="relative h-48 w-full bg-muted">
                                    {/* Placeholder for blog image - using a div with gradient for now if image fails */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-muted-foreground/50">
                                        <span className="text-4xl">📝</span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <span className="text-sm font-semibold text-primary flex items-center gap-1 mt-auto">
                                        Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold">
                        View All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
