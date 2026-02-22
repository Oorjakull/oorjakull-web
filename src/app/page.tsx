import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import PillarsSection from "@/components/PillarsSection";
import ProgramHighlights from "@/components/ProgramHighlights";
import WhySection from "@/components/WhySection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "OorjaKull | Yoga Teacher Training — Transform Your Practice",
  description: "Join OorjaKull's 200H Yoga Alliance certified Teacher Training. Learn from Acharyas with 20+ years experience. Small batches, holistic curriculum, lifelong community.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* 1. Immersive hero with typewriter */}
        <Hero />

        {/* 2. Stats counter on dark bg */}
        <StatsSection />

        {/* 3. Six pillars of curriculum (dark) */}
        <PillarsSection />

        {/* 4. Programs/Courses cards (light) */}
        <ProgramHighlights />

        {/* 5. Why OorjaKull split section */}
        <WhySection />

        {/* 6. Meet the Acharyas */}
        <Instructors />

        {/* 7. Student testimonials carousel */}
        <Testimonials />

        {/* 8. Blog/Insights preview */}
        <BlogPreview />

        {/* 9. Final bold CTA section */}
        <section className="py-32 bg-dark-bg text-white relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute inset-0 dot-pattern opacity-15" />
          </div>

          <div className="relative container mx-auto px-4 md:px-8 text-center">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Begin Your Journey
            </p>
            <h2 className="text-4xl md:text-6xl font-serif font-light text-white max-w-3xl mx-auto leading-tight mb-6">
              Now is your time to become{" "}
              <span className="text-secondary italic">the teacher</span> you were meant to be.
            </h2>
            <p className="text-white/50 text-lg font-light max-w-xl mx-auto mb-10">
              Applications for the June 2026 batch are open. Seats are limited — join a community committed to authentic practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-primary text-white text-lg font-semibold hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all"
              >
                Apply for June 2026
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full border border-white/20 text-white/80 text-lg font-medium hover:border-white/50 hover:text-white transition-all"
              >
                Talk to Us First
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
