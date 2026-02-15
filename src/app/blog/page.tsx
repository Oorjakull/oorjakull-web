import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";

// Placeholder Blog Data
const BLOG_POSTS = [
    {
        id: 1,
        title: "The Ancient Science of Breath",
        excerpt: "Discover how Pranayama influences your nervous system, reduces stress, and enhances mental clarity. We dive deep into the physiological benefits of controlled breathing.",
        date: "Feb 10, 2026",
        author: "Dr. Anjali Sharma",
        category: "Pranayama"
    },
    {
        id: 2,
        title: "Building a Career as a Yoga Trainer",
        excerpt: "Why the world needs authentic teachers more than ever in the age of digital wellness. Learn about the opportunities and challenges in the modern yoga industry.",
        date: "Feb 05, 2026",
        author: "Vikram Singh",
        category: "Career"
    },
    {
        id: 3,
        title: "Integrating AI with Traditional Asanas",
        excerpt: "How OorjaKull is pioneering the future of personalized posture correction without losing the human touch. A look at our hybrid teaching model.",
        date: "Jan 28, 2026",
        author: "Tech Team",
        category: "Technology"
    },
    {
        id: 4,
        title: "The Role of Diet in Yoga Practice",
        excerpt: "Sattvic food for a sattvic mind. Understanding the connection between what we eat and how we practice.",
        date: "Jan 20, 2026",
        author: "Dr. Anjali Sharma",
        category: "Nutrition"
    },
    {
        id: 5,
        title: "Mindfulness for Busy Professionals",
        excerpt: "Simple techniques to incorporate yoga and mindfulness into a hectic corporate schedule.",
        date: "Jan 15, 2026",
        author: "Sarah Jenkins",
        category: "Lifestyle"
    },
    {
        id: 6,
        title: "Understanding the Yoga Sutras",
        excerpt: "Decoding the ancient wisdom of Patanjali for the modern practitioner.",
        date: "Jan 10, 2026",
        author: "Vikram Singh",
        category: "Philosophy"
    }
];

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans bg-background">
            <Navbar />
            <main className="flex-1">
                {/* Header */}
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4 text-center">
                        <Reveal width="100%">
                            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-foreground">
                                Wisdom & Insights
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Explore articles on yoga philosophy, teaching methodologies, and the intersection of tradition and technology.
                            </p>
                        </Reveal>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, index) => (
                            <Reveal key={post.id} delay={index * 0.1}>
                                <article className="flex flex-col h-full bg-card border border-muted rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
                                    <div className="h-48 bg-muted relative overflow-hidden">
                                        {/* Image Placeholder */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-500">
                                            🧘‍♀️
                                        </div>
                                        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground uppercase tracking-wider">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                            <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                        </div>
                                        <h2 className="text-xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <Link href="#" className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all">
                                            Read Article <ArrowRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
