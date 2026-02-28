import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export const metadata = {
  title: "OorjaKull | Yoga Teacher Training — Transform Your Practice",
  description: "Join OorjaKull's 200H Yoga Alliance certified Teacher Training. Learn from Acharyas with 20+ years experience. Small batches, holistic curriculum, lifelong community.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* 1. Full-width centred hero */}
        <Hero />

        {/* 2. Free sessions video grid */}
        <VideoGrid />

        {/* 3. Blog preview — 3 cards */}
        <BlogPreview />
      </main>

      {/* 4. Footer — quick links, contact, social, newsletter */}
      <Footer />
    </div>
  );
}
