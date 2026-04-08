import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscriptionTiers from "@/components/SubscriptionTiers";
import { Shield, Sparkles, RefreshCw, HeadphonesIcon } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Subscription Plans — OorjaKull AI",
    description: "Choose the OorjaKull AI plan that fits your practice. Free Seeker, Practitioner and Devotee tiers.",
    // Excluded from sitemap and search indexing for now (test page).
    robots: { index: false, follow: false, nocache: true },
};

const FAQS = [
    {
        q: "How do AI Credits work?",
        a: "Each yoga pose detected by Madhu uses 1 credit. A typical 10-pose flow consumes 10 credits. Free users get 20 credits. Practitioners get 600/month, and Devotees get unlimited.",
    },
    {
        q: "Can I switch plans anytime?",
        a: "Yes — you can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades apply at the start of your next billing cycle.",
    },
    {
        q: "Is there a refund policy?",
        a: "We offer a 7-day money-back guarantee on all paid plans. If Madhu isn't right for you, write to us within 7 days for a full refund — no questions asked.",
    },
    {
        q: "What payment methods are supported?",
        a: "We accept all major credit and debit cards, UPI, net banking and popular wallets via Razorpay. All payments are securely processed and PCI-DSS compliant.",
    },
    {
        q: "Do unused credits roll over?",
        a: "Practitioner credits reset every month and don't roll over. Devotee plans are unlimited so this doesn't apply.",
    },
];

const TRUST = [
    { icon: Shield, label: "Secure payments", desc: "256-bit TLS · PCI-DSS via Razorpay" },
    { icon: RefreshCw, label: "Cancel anytime", desc: "No lock-ins · stop in one tap" },
    { icon: Sparkles, label: "7-day money back", desc: "Full refund, no questions" },
    { icon: HeadphonesIcon, label: "Real human support", desc: "Email & chat — not bots" },
];

export default function SubscriptionPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            {/* Razorpay Checkout SDK */}
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
            />

            <Navbar />

            <main className="flex-1">
                {/* ── Hero ── */}
                <section className="relative pt-36 pb-20 bg-background overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[160px] translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
                        <div className="absolute inset-0 dot-pattern opacity-20" />
                    </div>
                    <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                        <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                            Pricing
                        </p>
                        <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground mb-5 leading-tight max-w-3xl mx-auto">
                            Practice without limits.
                            <br />
                            <span className="text-primary italic">Grow at your own pace.</span>
                        </h1>
                        <p className="text-foreground/60 text-lg font-light max-w-xl mx-auto leading-relaxed">
                            Pick the plan that matches how often you practice. Start free,
                            upgrade when you&apos;re ready, cancel anytime.
                        </p>
                    </div>
                </section>

                {/* ── Tiers ── */}
                <section className="pb-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8">
                        <SubscriptionTiers />
                    </div>
                </section>

                {/* ── Trust row ── */}
                <section className="py-16 bg-card border-y border-muted">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            {TRUST.map(({ icon: Icon, label, desc }) => (
                                <div key={label} className="flex flex-col items-center text-center gap-2">
                                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="font-semibold text-foreground text-sm">{label}</p>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── How credits work ── */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                        <div className="text-center mb-12">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                How It Works
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                                AI Credits, simply explained
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    n: "01",
                                    title: "1 credit per pose",
                                    desc: "Every pose Madhu detects and corrects in real time consumes one credit.",
                                },
                                {
                                    n: "02",
                                    title: "Flows = sum of poses",
                                    desc: "A 10-pose Surya Namaskar uses 10 credits. A 20-pose strength flow uses 20.",
                                },
                                {
                                    n: "03",
                                    title: "Refill monthly",
                                    desc: "Paid plans reset on your billing date. Devotee tier never runs out.",
                                },
                            ].map((step) => (
                                <div key={step.n} className="bg-card rounded-2xl border border-muted p-7">
                                    <p className="text-primary text-sm font-bold tracking-widest mb-3">{step.n}</p>
                                    <h3 className="font-serif font-semibold text-foreground text-lg mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-24 bg-card">
                    <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                        <div className="text-center mb-12">
                            <p className="text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-3">
                                Questions
                            </p>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                                Frequently Asked
                            </h2>
                        </div>
                        <div className="flex flex-col divide-y divide-foreground/8">
                            {FAQS.map((faq) => (
                                <details key={faq.q} className="group py-5 cursor-pointer">
                                    <summary className="flex items-center justify-between gap-4 text-base font-semibold text-foreground list-none group-open:text-primary transition-colors">
                                        {faq.q}
                                        <span className="shrink-0 w-6 h-6 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/40 group-open:border-primary/40 group-open:text-primary group-open:rotate-45 transition-all">
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
