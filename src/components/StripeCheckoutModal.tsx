"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Loader2, Lock, X, CreditCard } from "lucide-react";

type Props = {
    open: boolean;
    /** Amount in major units (e.g. dollars). */
    amount: number;
    /** ISO currency code, e.g. "usd" / "eur". */
    currency: string;
    /** Tier ID (e.g. "practitioner", "payg") — sent to server for metadata. */
    tierId: string;
    /** Human-readable line shown in the modal header. */
    productLabel: string;
    /** Optional credit count for PAYG. */
    credits?: number;
    onClose: () => void;
    onSuccess: (paymentId: string) => void;
};

const CURRENCY_SYMBOL: Record<string, string> = {
    usd: "$",
    eur: "€",
    gbp: "£",
    aud: "A$",
    cad: "C$",
};

/**
 * A mock checkout modal for Stripe payments. Card details are collected for
 * realism but are NOT sent to the server — stripe-mock ignores card data and
 * the real Stripe path uses a test PaymentMethod token. This avoids needing
 * Stripe.js / Elements just for the test flow.
 */
export default function StripeCheckoutModal({
    open,
    amount,
    currency,
    tierId,
    productLabel,
    credits,
    onClose,
    onSuccess,
}: Props) {
    const [name, setName] = useState("Test User");
    const [number, setNumber] = useState("4242 4242 4242 4242");
    const [exp, setExp] = useState("12 / 34");
    const [cvc, setCvc] = useState("123");
    const [country, setCountry] = useState("US");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    // Defer portal mount until after hydration (SSR-safe)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock background scroll while open. Compensate for the missing scrollbar
    // width so the page doesn't shift sideways.
    useEffect(() => {
        if (!open) return;
        const prevOverflow = document.body.style.overflow;
        const prevPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }
        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPaddingRight;
        };
    }, [open]);

    // ESC closes
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !loading) onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, loading, onClose]);

    if (!open || !mounted) return null;

    const symbol = CURRENCY_SYMBOL[currency.toLowerCase()] || currency.toUpperCase() + " ";
    const formattedAmount = `${symbol}${amount.toFixed(2)}`;

    // Light client-side formatting (purely cosmetic — server ignores)
    const formatCardNumber = (v: string) =>
        v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    const formatExp = (v: string) => {
        const digits = v.replace(/\D/g, "").slice(0, 4);
        if (digits.length <= 2) return digits;
        return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
    };

    const handlePay = async () => {
        setError(null);
        setLoading(true);
        try {
            const res = await fetch("/api/stripe/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    tierId,
                    amount,
                    currency,
                    description: productLabel,
                    credits,
                }),
            });

            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.error || "Payment failed.");
            }

            onSuccess(data.paymentId);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Payment failed.");
        } finally {
            setLoading(false);
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
                onClick={loading ? undefined : onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md bg-card rounded-3xl shadow-2xl border border-muted overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between p-6 pb-4 border-b border-muted">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-1">
                            OorjaKull · Stripe
                        </p>
                        <h3 className="font-serif text-xl font-medium text-foreground">
                            {productLabel}
                        </h3>
                        <p className="text-2xl font-serif font-light text-foreground mt-2">
                            {formattedAmount}{" "}
                            <span className="text-xs uppercase text-muted-foreground tracking-wider">
                                {currency}
                            </span>
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        disabled={loading}
                        aria-label="Close"
                        className="text-foreground/40 hover:text-foreground transition-colors disabled:opacity-30"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <div className="p-6 flex flex-col gap-4">
                    <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Cardholder name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1.5 w-full bg-background border border-muted rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Card number
                        </label>
                        <div className="relative mt-1.5">
                            <input
                                type="text"
                                inputMode="numeric"
                                value={number}
                                onChange={(e) => setNumber(formatCardNumber(e.target.value))}
                                className="w-full bg-background border border-muted rounded-xl pl-4 pr-11 py-2.5 text-sm text-foreground font-mono tracking-wider focus:border-primary focus:outline-none transition-colors"
                                disabled={loading}
                            />
                            <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                Expiry
                            </label>
                            <input
                                type="text"
                                value={exp}
                                onChange={(e) => setExp(formatExp(e.target.value))}
                                placeholder="MM / YY"
                                className="mt-1.5 w-full bg-background border border-muted rounded-xl px-4 py-2.5 text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                CVC
                            </label>
                            <input
                                type="text"
                                inputMode="numeric"
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                                className="mt-1.5 w-full bg-background border border-muted rounded-xl px-4 py-2.5 text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Country
                        </label>
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="mt-1.5 w-full bg-background border border-muted rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                            disabled={loading}
                        >
                            <option value="US">United States</option>
                            <option value="GB">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="SG">Singapore</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="IN">India</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>

                    {error && (
                        <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                            {error}
                        </div>
                    )}

                    <button
                        onClick={handlePay}
                        disabled={loading}
                        className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm py-3.5 rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                            </>
                        ) : (
                            <>
                                <Lock className="w-3.5 h-3.5" /> Pay {formattedAmount}
                            </>
                        )}
                    </button>

                    <p className="text-[10px] text-center text-muted-foreground/70 mt-1">
                        🔒 Test mode · Powered by Stripe-mock · No real charges
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
}
