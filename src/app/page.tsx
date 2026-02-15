import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramHighlights from "@/components/ProgramHighlights";
import BlogPreview from "@/components/BlogPreview";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Reveal width="100%">
          <Hero />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <ProgramHighlights />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <Instructors />
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <BlogPreview />
        </Reveal>

        {/* CTA Section */}
        <Reveal width="100%" delay={0.3}>
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Ready to Begin Your Journey?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/90 text-lg">
                Join the next batch of OorjaKull teacher training and transform your life.
              </p>
              <button className="bg-background text-foreground px-8 py-3 rounded-full font-bold shadow-lg hover:bg-secondary hover:text-white transition-all">
                Download Brochure
              </button>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
