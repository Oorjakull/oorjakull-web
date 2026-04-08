import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OorjaKull — India's First AI Yoga Platform",
  description:
    "OorjaKull combines AI-powered pose detection, adaptive breathwork and the Madhu AI companion. Classes, courses and personalised wellness — from the heart of India.",
  alternates: { canonical: "https://www.oorjakull.com" },
  openGraph: {
    title: "OorjaKull — India's First AI Yoga Platform",
    description:
      "Real-time AI pose tracking, adaptive breathwork and personalised wellness. Ancient wisdom, modern intelligence.",
    url: "https://www.oorjakull.com",
    images: [{ url: "/api/og?title=AI%20Yoga%20Platform&subtitle=Real-time%20pose%20tracking%20and%20adaptive%20breathwork.&tag=OORJAKULL%20STUDIO", width: 1200, height: 630 }],
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
