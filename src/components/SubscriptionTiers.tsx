"use client";

import { useState } from "react";
import { Check, Sparkles, Zap, Crown, Loader2, CheckCircle2 } from "lucide-react";

// Razorpay loads via <Script> tag in the page; declare on window
declare global {
    interface Window {
        Razorpay: new (options: Record<string, unknown>) => { open: () => void };
    }
}

type BillingCycle = "monthly" | "yearly";

type Tier = {
    id: string;
    name: string;
    tagline: string;
    icon: typeof Sparkles;
    monthly: number; // INR per month
    yearly: number;  // INR per year (effective)
    credits: string;
    creditsNote: string;
    highlight?: boolean;
    features: string[];
    cta: string;
};

const TIERS: Tier[] = [
    {
        id: "free",
        name: "Seeker",
        tagline: "Start your AI yoga journey",
        icon: Sparkles,
        monthly: 0,
        yearly: 0,
        credits: "20 AI Credits",
        creditsNote: "1 credit per pose · ~2 short flows",
        features: [
            "20 AI pose-detection credits",
            "Access to 8 yoga style libraries",
            "Basic real-time form feedback",
            "Community discussion access",
            "Email support",
        ],
        cta: "Start Free",
    },
    {
        id: "practitioner",
        name: "Practitioner",
        tagline: "For your daily practice",
        icon: Zap,
        monthly: 499,
        yearly: 4790, // ~₹399/mo, 20% off
        credits: "600 AI Credits / month",
        creditsNote: "Roughly 20–25 full sessions",
        highlight: true,
        features: [
            "600 AI pose-detection credits monthly",
            "Adaptive breathwork (Pranayama AI)",
            "Personalised flow generation",
            "Posture history & progress tracking",
            "Offline session downloads",
            "Priority email support",
        ],
        cta: "Choose Practitioner",
    },
    {
        id: "devotee",
        name: "Devotee",
        tagline: "Unlimited, uncompromised",
        icon: Crown,
        monthly: 999,
        yearly: 9590, // ~₹799/mo, 20% off
        credits: "Unlimited AI Credits",
        creditsNote: "No per-pose limits, ever",
        features: [
            "Unlimited AI pose detection",
            "Generative meditation & Yoga Nidra",
            "1:1 monthly Acharya consult (virtual)",
            "Family sharing — up to 4 members",
            "Early access to new features",
            "Priority chat support",
        ],
        cta: "Go Unlimited",
    },
];

type Status = "idle" | "loading" | "success" | "error";

export default function SubscriptionTiers() {
    const [cycle, setCycle] = useState<BillingCycle>("monthly");
    const [pendingTier, setPendingTier] = useState<string | null>(null);
    const [status, setStatus] = useState<Status>("idle");
    const [statusMsg, setStatusMsg] = useState<string>("");
    const [successTier, setSuccessTier] = useState<Tier | null>(null);

    const priceFor = (tier: Tier) =>
        cycle === "monthly" ? tier.monthly : Math.round(tier.yearly / 12);

    const billingAmount = (tier: Tier) =>
        cycle === "monthly" ? tier.monthly : tier.yearly;

    const handleSelect = async (tier: Tier) => {
        setStatus("idle");
        setStatusMsg("");

        // Free tier — no payment, just acknowledge
        if (tier.monthly === 0) {
            setSuccessTier(tier);
            setStatus("success");
            setStatusMsg("You're on the free Seeker plan. Open the AI app to start.");
            return;
        }

        setPendingTier(tier.id);
        setStatus("loading");

        try {
            const amount = billingAmount(tier);

            // 1. Create order on the server
            const orderRes = await fetch("/api/razorpay/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tierId: tier.id, amount }),
            });

            if (!orderRes.ok) {
                const err = await orderRes.json().catch(() => ({}));
                throw new Error(err.error || "Could not create order.");
            }

            const { orderId, amount: orderAmount, currency, keyId } = await orderRes.json();

            // 2. Open Razorpay Checkout
            if (typeof window === "undefined" || !window.Razorpay) {
                throw new Error("Razorpay SDK not loaded. Refresh and try again.");
            }

            const rzp = new window.Razorpay({
                key: keyId,
                amount: orderAmount,
                currency,
                name: "OorjaKull",
                description: `${tier.name} — ${cycle === "monthly" ? "Monthly" : "Annual"} subscription`,
                order_id: orderId,
                theme: { color: "#1f5f4a" }, // matches primary
                prefill: {
                    name: "Test User",
                    email: "test@oorjakull.com",
                    contact: "9999999999",
                },
                notes: { tierId: tier.id, cycle },
                handler: async (response: {
                    razorpay_order_id: string;
                    razorpay_payment_id: string;
                    razorpay_signature: string;
                }) => {
                    // 3. Verify on server
                    try {
                        const verifyRes = await fetch("/api/razorpay/verify", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ ...response, tierId: tier.id }),
                        });
                        const data = await verifyRes.json();
                        if (data.verified) {
                            setSuccessTier(tier);
                            setStatus("success");
                            setStatusMsg(`Payment verified · ${data.paymentId}`);
                        } else {
                            setStatus("error");
                            setStatusMsg(data.error || "Verification failed.");
                        }
                    } catch {
                        setStatus("error");
                        setStatusMsg("Could not verify payment.");
                    } finally {
                        setPendingTier(null);
                    }
                },
                modal: {
                    ondismiss: () => {
                        setPendingTier(null);
                        setStatus("idle");
                    },
                },
            });

            rzp.open();
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Something went wrong.";
            setStatus("error");
            setStatusMsg(msg);
            setPendingTier(null);
        }
    };

    if (status === "success" && successTier) {
        return (
            <div className="max-w-xl mx-auto bg-card border border-primary/20 rounded-3xl p-10 text-center shadow-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-serif font-medium text-foreground mb-3">
                    Welcome to {successTier.name}
                </h3>
                <p className="text-foreground/65 leading-relaxed mb-2">{statusMsg}</p>
                <p className="text-sm text-muted-foreground">
                    {successTier.credits} · {successTier.creditsNote}
                </p>
                <button
                    onClick={() => {
                        setStatus("idle");
                        setSuccessTier(null);
                        setStatusMsg("");
                    }}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                    View plans again
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-12">
            {/* Billing toggle */}
            <div className="inline-flex items-center gap-1 bg-card border border-muted rounded-full p-1 shadow-sm">
                <button
                    onClick={() => setCycle("monthly")}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                        cycle === "monthly"
                            ? "bg-primary text-white shadow-md"
                            : "text-foreground/60 hover:text-foreground"
                    }`}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setCycle("yearly")}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                        cycle === "yearly"
                            ? "bg-primary text-white shadow-md"
                            : "text-foreground/60 hover:text-foreground"
                    }`}
                >
                    Yearly
                    <span className="ml-2 text-[10px] font-bold uppercase tracking-wider bg-secondary/20 text-secondary px-2 py-0.5 rounded-full">
                        Save 20%
                    </span>
                </button>
            </div>

            {/* Tiers grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {TIERS.map((tier) => {
                    const Icon = tier.icon;
                    const price = priceFor(tier);
                    const isPending = pendingTier === tier.id;

                    return (
                        <div
                            key={tier.id}
                            className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                                tier.highlight
                                    ? "bg-card border-2 border-primary shadow-2xl shadow-primary/10 md:scale-[1.03]"
                                    : "bg-card border border-muted hover:border-primary/30 hover:shadow-lg"
                            }`}
                        >
                            {tier.highlight && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                    Most Popular
                                </span>
                            )}

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-2">
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                        tier.highlight
                                            ? "bg-primary/15 text-primary"
                                            : "bg-muted text-foreground/60"
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold text-foreground">
                                    {tier.name}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>

                            {/* Price */}
                            <div className="mb-2">
                                {tier.monthly === 0 ? (
                                    <span className="text-5xl font-serif font-light text-foreground">Free</span>
                                ) : (
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="text-5xl font-serif font-light text-foreground">
                                            ₹{price.toLocaleString("en-IN")}
                                        </span>
                                        <span className="text-sm text-muted-foreground">/month</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground h-4 mb-6">
                                {tier.monthly > 0 && cycle === "yearly"
                                    ? `Billed ₹${tier.yearly.toLocaleString("en-IN")} annually`
                                    : tier.monthly > 0
                                        ? "Billed monthly · cancel anytime"
                                        : "No card required"}
                            </p>

                            {/* Credits highlight */}
                            <div
                                className={`rounded-2xl p-4 mb-6 ${
                                    tier.highlight
                                        ? "bg-primary/8 border border-primary/15"
                                        : "bg-muted/50 border border-muted"
                                }`}
                            >
                                <p className="text-sm font-semibold text-foreground">{tier.credits}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{tier.creditsNote}</p>
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-3 mb-8 flex-1">
                                {tier.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed">
                                        <Check
                                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                                                tier.highlight ? "text-primary" : "text-foreground/40"
                                            }`}
                                        />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button
                                onClick={() => handleSelect(tier)}
                                disabled={isPending}
                                className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                                    tier.highlight
                                        ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                                        : "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10"
                                } disabled:opacity-60 disabled:cursor-not-allowed`}
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                                    </>
                                ) : (
                                    tier.cta
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Inline error */}
            {status === "error" && (
                <div className="max-w-md text-center text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-5 py-3">
                    {statusMsg}
                </div>
            )}

            {/* Test mode notice */}
            <div className="text-center max-w-2xl">
                <p className="text-xs text-muted-foreground/80 leading-relaxed">
                    🔒 <strong>Test mode</strong> · Use card{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded font-mono">4111 1111 1111 1111</code>{" "}
                    with any future expiry and any 3-digit CVV. No real charges.
                </p>
            </div>
        </div>
    );
}
