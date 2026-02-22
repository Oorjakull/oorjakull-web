import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, ArrowRight, User, Tag } from "lucide-react";

export const metadata = {
    title: "Insights & Articles | OorjaKull Blog",
    description: "Explore articles on yoga philosophy, pranayama, teaching methodology, and the modern wellness journey from OorjaKull's master teachers.",
};

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Ancient Science of Breath",
        excerpt: "Discover how Pranayama influences your nervous system, reduces stress, and enhances mental and pranic clarity. A deep dive into the physiological and energetic benefits of controlled breathing.",
        date: "Feb 10, 2026",
        author: "Dr. Anjali Sharma",
        category: "Pranayama",
        emoji: "🌬️",
        color: "from-emerald-900/40 to-teal-900/20",
        featured: true,
    },
    {
        id: 2,
        title: "Building a Career as a Yoga Teacher",
        excerpt: "Why the world needs authentic teachers more than ever in the age of digital wellness. Learn about the opportunities, challenges, and how to build a sustainable practice.",
        date: "Feb 05, 2026",
        author: "Vikram Singh",
        category: "Career",
        emoji: "🎓",
        color: "from-amber-900/40 to-yellow-900/20",
        featured: false,
    },
    {
        id: 3,
        title: "Integrating AI with Traditional Asanas",
        excerpt: "How OorjaKull is pioneering personalized posture correction without losing the human touch — a look at our hybrid teaching model and what it means for the future of yoga.",
        date: "Jan 28, 2026",
        author: "Tech Team",
        category: "Innovation",
        emoji: "🤖",
        color: "from-violet-900/40 to-indigo-900/20",
        featured: false,
    },
    {
        id: 4,
        title: "The Role of Diet in Yoga Practice",
        excerpt: "Sattvic food for a sattvic mind. Understanding the deep connection between what we eat and how we practice — through the lens of Ayurveda and classical yoga texts.",
        date: "Jan 20, 2026",
        author: "Dr. Anjali Sharma",
        category: "Ayurveda",
        emoji: "🌿",
        color: "from-green-900/40 to-lime-900/20",
        featured: false,
    },
    {
        id: 5,
        title: "Mindfulness for Busy Professionals",
        excerpt: "Simple, evidence-based techniques to incorporate yoga and mindfulness into a demanding corporate schedule without overhauling your entire life.",
        date: "Jan 15, 2026",
        author: "Sarah Jenkins",
        category: "Lifestyle",
        emoji: "🧘",
        color: "from-sky-900/40 to-blue-900/20",
        featured: false,
    },
    {
        id: 6,
        title: "Understanding the Yoga Sutras",
        excerpt: "Decoding the timeless wisdom of Patanjali for the modern practitioner — from Chitta Vritti Nirodha to Samadhi, how these aphorisms remain deeply relevant today.",
        date: "Jan 10, 2026",
        author: "Vikram Singh",
        category: "Philosophy",
        emoji: "📖",
        color: "from-rose-900/40 to-red-900/20",
        featured: false,
    },
];

const CATEGORY_COLORS: Record<string, string> = {
    "Pranayama": "bg-emerald-100 text-emerald-700",
    "Career": "bg-amber-100 text-amber-700",
    "Innovation": "bg-violet-100 text-violet-700",
    "Ayurveda": "bg-green-100 text-green-700",
    "Lifestyle": "bg-sky-100 text-sky-700",
    "Philosophy": "bg-rose-100 text-rose-700",
};

export default function BlogPage() {
    const [featured, ...rest] = BLOG_POSTS;

    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1">

                {/* ── Hero ── */}
                <section className="relative bg-dark-bg pt-36 pb-24 flex items-center overflow-hidden min-h-[45vh]">
                    <div className="absolute inset-0">
                        <div className="absolute left-0 bottom-0 w-[500px] h-[300px] bg-secondary/10 rounded-full blur-[100px]" />
                        <div className="absolute inset-0 dot-pattern opacity-15" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                        <p className="text-primary-light text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                            Wisdom & Insights
                        </p>
                        <h1 className="text-5xl md:text-6xl font-serif font-light text-white mb-5">
                            From the Mat & Beyond
                        </h1>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Explore yoga philosophy, teaching methodologies, breathwork science,
                            and the intersection of ancient tradition with modern living.
                        </p>
                    </div>
                </section>

                {/* ── Featured Article ── */}
                <section className="py-16 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <p className="text-xs font-semibold text-primary uppercase tracking-[0.3em] mb-6">Featured</p>
                        <Link href="#" className="group block">
                            <article className={`rounded-3xl overflow-hidden bg-gradient-to-br ${featured.color} bg-dark-surface border border-white/10 hover:border-primary/40 transition-all`}>
                                <div className="grid md:grid-cols-2 items-center">
                                    <div className="flex items-center justify-center h-[280px] text-8xl">
                                        <span className="group-hover:scale-110 transition-transform duration-300">{featured.emoji}</span>
                                    </div>
                                    <div className="p-10">
                                        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${CATEGORY_COLORS[featured.category] || "bg-primary/10 text-primary"}`}>
                                            {featured.category}
                                        </span>
                                        <h2 className="text-3xl font-serif font-semibold text-white mt-4 mb-4 group-hover:text-primary-light transition-colors leading-snug">
                                            {featured.title}
                                        </h2>
                                        <p className="text-white/60 leading-relaxed mb-6 text-sm">
                                            {featured.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-xs text-white/40">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{featured.date}</span>
                                                <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{featured.author}</span>
                                            </div>
                                            <span className="text-sm font-semibold text-primary-light flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </div>
                </section>

                {/* ── Blog Grid ── */}
                <section className="pb-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <p className="text-xs font-semibold text-primary uppercase tracking-[0.3em] mb-8">All Articles</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rest.map((post) => (
                                <Link key={post.id} href="#" className="group">
                                    <article className="flex flex-col h-full bg-card border border-muted rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                        <div className={`h-48 bg-gradient-to-br ${post.color} bg-dark-surface flex items-center justify-center text-6xl relative`}>
                                            <span className="group-hover:scale-110 transition-transform duration-300">{post.emoji}</span>
                                            <div className="absolute top-4 left-4">
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category] || "bg-primary/10 text-primary"}`}>
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col gap-3">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                                                <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                                            </div>
                                            <h2 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                                                {post.title}
                                            </h2>
                                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-2 group-hover:gap-2.5 transition-all">
                                                Read Article <ArrowRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
