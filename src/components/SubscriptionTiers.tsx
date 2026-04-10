"use client";

import { useState } from "react";
import {
    Check,
    Sparkles,
    Zap,
    Crown,
    Loader2,
    CheckCircle2,
    Coins,
    Languages,
} from "lucide-react";
import StripeCheckoutModal from "./StripeCheckoutModal";

// Razorpay loads via <Script> tag in the page; declare on window
declare global {
    interface Window {
        Razorpay: new (options: Record<string, unknown>) => { open: () => void };
    }
}

type Region = "in" | "global";
type BillingCycle = "monthly" | "yearly";

type Tier = {
    id: string;
    name: string;
    tagline: string;
    icon: typeof Sparkles;
    /** INR pricing for India region */
    monthly: number;
    yearly: number;
    /** USD pricing for global region */
    monthlyUsd: number;
    yearlyUsd: number;
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
        monthlyUsd: 0,
        yearlyUsd: 0,
        credits: "20 AI Credits",
        creditsNote: "Try ~20 English poses or ~10 in your language",
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
        yearly: 4790, // ~₹399/mo
        monthlyUsd: 7.99,
        yearlyUsd: 76.90, // ~$6.41/mo
        credits: "600 AI Credits / month",
        creditsNote: "~600 English poses or ~300 in Indic languages",
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
        yearly: 9590,
        monthlyUsd: 14.99,
        yearlyUsd: 143.90,
        credits: "Unlimited AI Credits",
        creditsNote: "Any language, any pose — no limits",
        features: [
            "Unlimited AI pose detection",
            "All Indic & international languages",
            "Generative meditation & Yoga Nidra",
            "1:1 monthly Acharya consult (virtual)",
            "Family sharing — up to 4 members",
            "Priority chat support",
        ],
        cta: "Go Unlimited",
    },
];

// ── Pay-as-you-go config ────────────────────────────────────
const PAYG_RATE: Record<Region, number> = { in: 1, global: 0.10 };
const PAYG_MIN = 10;
const PAYG_MAX = 1000;
const PAYG_PRESETS = [10, 25, 50, 100];

// ── Currency helpers ────────────────────────────────────────
const fmtPrice = (n: number, region: Region): string =>
    region === "in"
        ? `₹${n.toLocaleString("en-IN")}`
        : `$${n.toFixed(2)}`;

const currencyCode = (region: Region) => (region === "in" ? "INR" : "USD");

// ── Types ─────────────────────────────────────────────────────
type Status = "idle" | "loading" | "success" | "error";

type SuccessState = {
    headline: string;
    detail: string;
    sub: string;
};

type StripeModalState = {
    open: boolean;
    tierId: string;
    productLabel: string;
    amount: number;
    credits?: number;
    onSuccess: (paymentId: string) => SuccessState;
} | null;

export default function SubscriptionTiers() {
    const [region, setRegion] = useState<Region>("in");
    const [cycle, setCycle] = useState<BillingCycle>("monthly");
    const [paygCredits, setPaygCredits] = useState<number>(50);
    const [pendingId, setPendingId] = useState<string | null>(null);
    const [status, setStatus] = useState<Status>("idle");
    const [statusMsg, setStatusMsg] = useState<string>("");
    const [success, setSuccess] = useState<SuccessState | null>(null);
    const [stripeModal, setStripeModal] = useState<StripeModalState>(null);

    // ── Pricing helpers ───────────────────────────────────────
    const monthlyPriceFor = (tier: Tier) =>
        region === "in"
            ? cycle === "monthly"
                ? tier.monthly
                : Math.round(tier.yearly / 12)
            : cycle === "monthly"
                ? tier.monthlyUsd
                : +(tier.yearlyUsd / 12).toFixed(2);

    const billingTotalFor = (tier: Tier) =>
        region === "in"
            ? cycle === "monthly"
                ? tier.monthly
                : tier.yearly
            : cycle === "monthly"
                ? tier.monthlyUsd
                : tier.yearlyUsd;

    // ── Razorpay flow (India) ─────────────────────────────────
    const processRazorpay = async (req: {
        id: string;
        amount: number;
        label: string;
        description: string;
        notes: Record<string, string | number>;
        onSuccess: (paymentId: string) => SuccessState;
    }) => {
        setStatus("loading");
        setStatusMsg("");
        setPendingId(req.id);

        try {
            const orderRes = await fetch("/api/razorpay/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tierId: req.id,
                    amount: req.amount,
                    label: req.label,
                    credits: req.notes.credits,
                }),
            });

            if (!orderRes.ok) {
                const err = await orderRes.json().catch(() => ({}));
                throw new Error(err.error || "Could not create order.");
            }

            const { orderId, amount: orderAmount, currency, keyId } = await orderRes.json();

            if (typeof window === "undefined" || !window.Razorpay) {
                throw new Error("Razorpay SDK not loaded. Refresh and try again.");
            }

            const rzp = new window.Razorpay({
                key: keyId,
                amount: orderAmount,
                currency,
                name: "OorjaKull",
                description: req.description,
                order_id: orderId,
                theme: { color: "#1f5f4a" },
                prefill: {
                    name: "Test User",
                    email: "test@oorjakull.com",
                    contact: "9999999999",
                },
                notes: req.notes,
                handler: async (response: {
                    razorpay_order_id: string;
                    razorpay_payment_id: string;
                    razorpay_signature: string;
                }) => {
                    try {
                        const verifyRes = await fetch("/api/razorpay/verify", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ ...response, tierId: req.id }),
                        });
                        const data = await verifyRes.json();
                        if (data.verified) {
                            setSuccess(req.onSuccess(data.paymentId));
                            setStatus("success");
                        } else {
                            setStatus("error");
                            setStatusMsg(data.error || "Verification failed.");
                        }
                    } catch {
                        setStatus("error");
                        setStatusMsg("Could not verify payment.");
                    } finally {
                        setPendingId(null);
                    }
                },
                modal: {
                    ondismiss: () => {
                        setPendingId(null);
                        setStatus("idle");
                    },
                },
            });

            rzp.open();
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Something went wrong.";
            setStatus("error");
            setStatusMsg(msg);
            setPendingId(null);
        }
    };

    // ── Stripe flow (Global) ──────────────────────────────────
    const openStripeModal = (modal: NonNullable<StripeModalState>) => {
        setStatusMsg("");
        setStatus("idle");
        setStripeModal(modal);
    };

    const handleStripeSuccess = (paymentId: string) => {
        if (!stripeModal) return;
        setSuccess(stripeModal.onSuccess(paymentId));
        setStatus("success");
        setStripeModal(null);
    };

    // ── Tier purchase handler ─────────────────────────────────
    const handleTierSelect = (tier: Tier) => {
        // Free tier — instant success
        if (tier.monthly === 0) {
            setSuccess({
                headline: `Welcome to ${tier.name}`,
                detail: "You're on the free plan. Open the AI app to redeem your 20 credits.",
                sub: `${tier.credits} · ${tier.creditsNote}`,
            });
            setStatus("success");
            return;
        }

        const amount = billingTotalFor(tier);
        const cycleLabel = cycle === "monthly" ? "Monthly" : "Annual";
        const productLabel = `${tier.name} — ${cycleLabel}`;

        const onSuccess = (paymentId: string): SuccessState => ({
            headline: `Welcome to ${tier.name}`,
            detail: `Payment verified · ${paymentId}`,
            sub: `${tier.credits} · ${tier.creditsNote}`,
        });

        if (region === "in") {
            processRazorpay({
                id: tier.id,
                amount,
                label: `OorjaKull ${tier.name}`,
                description: `${tier.name} — ${cycleLabel} subscription`,
                notes: { tierId: tier.id, cycle },
                onSuccess,
            });
        } else {
            openStripeModal({
                open: true,
                tierId: tier.id,
                productLabel,
                amount,
                onSuccess,
            });
        }
    };

    // ── PAYG purchase handler ─────────────────────────────────
    const handlePaygPurchase = () => {
        const credits = clampPayg(paygCredits);
        const amount = +(credits * PAYG_RATE[region]).toFixed(2);

        const onSuccess = (paymentId: string): SuccessState => ({
            headline: `${credits} credits added`,
            detail: `Payment verified · ${paymentId}`,
            sub: `Use them anytime — credits never expire on Pay-as-you-go.`,
        });

        if (region === "in") {
            processRazorpay({
                id: `payg-${credits}`,
                amount,
                label: `${credits} AI Credits`,
                description: `${credits} AI Credits top-up`,
                notes: { tierId: "payg", credits },
                onSuccess,
            });
        } else {
            openStripeModal({
                open: true,
                tierId: `payg-${credits}`,
                productLabel: `${credits} AI Credits Top-up`,
                amount,
                credits,
                onSuccess,
            });
        }
    };

    // ── Success screen ────────────────────────────────────────
    if (status === "success" && success) {
        return (
            <div className="max-w-xl mx-auto bg-card border border-primary/20 rounded-3xl p-10 text-center shadow-xl">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-serif font-medium text-foreground mb-3">
                    {success.headline}
                </h3>
                <p className="text-foreground/65 leading-relaxed mb-2">{success.detail}</p>
                <p className="text-sm text-muted-foreground">{success.sub}</p>
                <button
                    onClick={() => {
                        setStatus("idle");
                        setSuccess(null);
                        setStatusMsg("");
                    }}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                    View plans again
                </button>
            </div>
        );
    }

    const paygCreditsClamped = clampPayg(paygCredits);
    const paygTotal = +(paygCreditsClamped * PAYG_RATE[region]).toFixed(2);
    const isPaygPending = pendingId?.startsWith("payg-") ?? false;
    const gatewayLabel = region === "in" ? "Razorpay" : "Stripe";

    return (
        <div className="flex flex-col items-center gap-12">
            {/* Region + Billing toggles */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                {/* Region */}
                <div className="inline-flex items-center gap-1 bg-card border border-muted rounded-full p-1 shadow-sm">
                    <button
                        onClick={() => setRegion("in")}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                            region === "in"
                                ? "bg-foreground text-background shadow-md"
                                : "text-foreground/60 hover:text-foreground"
                        }`}
                    >
                        <span aria-hidden>🇮🇳</span> India
                    </button>
                    <button
                        onClick={() => setRegion("global")}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                            region === "global"
                                ? "bg-foreground text-background shadow-md"
                                : "text-foreground/60 hover:text-foreground"
                        }`}
                    >
                        <span aria-hidden>🌍</span> Global
                    </button>
                </div>

                {/* Billing cycle */}
                <div className="inline-flex items-center gap-1 bg-card border border-muted rounded-full p-1 shadow-sm">
                    <button
                        onClick={() => setCycle("monthly")}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                            cycle === "monthly"
                                ? "bg-primary text-white shadow-md"
                                : "text-foreground/60 hover:text-foreground"
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setCycle("yearly")}
                        className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
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
            </div>

            {/* Gateway hint */}
            <p className="text-xs text-muted-foreground -mt-8">
                Paying via <strong className="text-foreground/80">{gatewayLabel}</strong>
                {region === "in"
                    ? " · Cards, UPI, Netbanking, Wallets"
                    : " · International cards across 180+ countries"}
            </p>

            {/* Tiers grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {TIERS.map((tier) => {
                    const Icon = tier.icon;
                    const monthlyPrice = monthlyPriceFor(tier);
                    const billingTotal = billingTotalFor(tier);
                    const isFree = tier.monthly === 0;
                    const isPending = pendingId === tier.id;

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
                                {isFree ? (
                                    <span className="text-5xl font-serif font-light text-foreground">Free</span>
                                ) : (
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="text-5xl font-serif font-light text-foreground">
                                            {fmtPrice(monthlyPrice, region)}
                                        </span>
                                        <span className="text-sm text-muted-foreground">/month</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground h-4 mb-6">
                                {!isFree && cycle === "yearly"
                                    ? `Billed ${fmtPrice(billingTotal, region)} ${currencyCode(region)} annually`
                                    : !isFree
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
                                onClick={() => handleTierSelect(tier)}
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

            {/* ── Pay-as-you-go card ─────────────────────────────────── */}
            <div className="w-full max-w-4xl">
                <div className="relative bg-gradient-to-br from-secondary/8 via-card to-primary/5 border border-secondary/20 rounded-3xl p-8 md:p-10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />

                    <div className="relative grid md:grid-cols-2 gap-8 md:gap-10 items-center">
                        {/* Left — copy */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Coins className="w-4 h-4 text-secondary" />
                                <p className="text-secondary text-xs font-bold uppercase tracking-[0.25em]">
                                    Pay as you go
                                </p>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-3 leading-tight">
                                Just need a few sessions?
                            </h3>
                            <p className="text-foreground/65 text-sm leading-relaxed mb-4">
                                Top up AI credits whenever you want. No subscription, no commitment.
                                Credits never expire.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Languages className="w-3.5 h-3.5" />
                                <span>1 credit · English pose &nbsp;·&nbsp; 2 credits · Indic / Intl</span>
                            </div>
                        </div>

                        {/* Right — credit picker */}
                        <div className="bg-card/80 backdrop-blur border border-muted rounded-2xl p-6">
                            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                How many credits?
                            </label>

                            <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                {PAYG_PRESETS.map((n) => {
                                    const active = paygCredits === n;
                                    return (
                                        <button
                                            key={n}
                                            type="button"
                                            onClick={() => setPaygCredits(n)}
                                            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                                                active
                                                    ? "bg-primary text-white border-primary"
                                                    : "bg-transparent border-foreground/15 text-foreground/70 hover:border-primary/40 hover:text-primary"
                                            }`}
                                        >
                                            {n}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="flex items-center gap-3 border border-muted rounded-xl px-4 py-2.5 bg-background">
                                <input
                                    type="number"
                                    min={PAYG_MIN}
                                    max={PAYG_MAX}
                                    value={paygCredits}
                                    onChange={(e) => {
                                        const v = parseInt(e.target.value, 10);
                                        setPaygCredits(Number.isNaN(v) ? PAYG_MIN : v);
                                    }}
                                    onBlur={() => setPaygCredits((v) => clampPayg(v))}
                                    className="flex-1 bg-transparent text-foreground font-semibold text-lg focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                                    credits
                                </span>
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-1.5">
                                Min {PAYG_MIN} · Max {PAYG_MAX} credits
                            </p>

                            <div className="mt-5 pt-5 border-t border-muted flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs text-muted-foreground">Total</p>
                                    <p className="text-2xl font-serif font-medium text-foreground">
                                        {fmtPrice(paygTotal, region)}
                                    </p>
                                </div>
                                <button
                                    onClick={handlePaygPurchase}
                                    disabled={isPaygPending}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isPaygPending ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" /> Processing
                                        </>
                                    ) : (
                                        <>Buy credits</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline error */}
            {status === "error" && (
                <div className="max-w-md text-center text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-5 py-3">
                    {statusMsg}
                </div>
            )}

            {/* Test mode notice */}
            <div className="text-center max-w-2xl">
                {region === "in" ? (
                    <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        🔒 <strong>Razorpay test mode</strong> · Use card{" "}
                        <code className="bg-muted px-1.5 py-0.5 rounded font-mono">5267 3181 8797 5449</code>{" "}
                        with any future expiry and any 3-digit CVV. No real charges.
                    </p>
                ) : (
                    <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        🔒 <strong>Stripe test mode</strong> · Card details prefilled with{" "}
                        <code className="bg-muted px-1.5 py-0.5 rounded font-mono">4242 4242 4242 4242</code>.
                        Powered by stripe-mock — no real charges.
                    </p>
                )}
            </div>

            {/* Stripe modal */}
            {stripeModal && (
                <StripeCheckoutModal
                    open={stripeModal.open}
                    amount={stripeModal.amount}
                    currency={currencyCode(region).toLowerCase()}
                    tierId={stripeModal.tierId}
                    productLabel={stripeModal.productLabel}
                    credits={stripeModal.credits}
                    onClose={() => setStripeModal(null)}
                    onSuccess={handleStripeSuccess}
                />
            )}
        </div>
    );
}

function clampPayg(n: number): number {
    if (Number.isNaN(n)) return PAYG_MIN;
    return Math.max(PAYG_MIN, Math.min(PAYG_MAX, Math.round(n)));
}
