import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OorjaKull — India's First AI Yoga Platform | 200H Teacher Training",
  description:
    "OorjaKull combines AI-powered pose detection, adaptive breathwork and the Madhu AI companion with certified 200H Yoga Alliance teacher training. Classes, courses and personalised wellness — from the heart of India.",
  alternates: { canonical: "https://www.oorjakull.com" },
  openGraph: {
    title: "OorjaKull — India's First AI Yoga Platform",
    description:
      "Real-time AI pose tracking, adaptive breathwork, certified 200H teacher training. Ancient wisdom, modern intelligence.",
    url: "https://www.oorjakull.com",
    images: [{ url: "/api/og?title=AI%20Yoga%20%26%20Teacher%20Training&subtitle=Real-time%20pose%20tracking%20and%20certified%20guidance.&tag=OORJAKULL%20STUDIO", width: 1200, height: 630 }],
  },
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
