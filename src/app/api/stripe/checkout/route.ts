import { NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";

/**
 * POST /api/stripe/checkout
 * Creates and confirms a PaymentIntent in one shot.
 *
 * Modes (controlled by env vars):
 *  1. STRIPE_SIMULATE=true  — Returns a canned success response immediately,
 *     no Stripe SDK call at all. Use this on Vercel preview/staging when you
 *     don't have a real Stripe key configured.
 *  2. STRIPE_API_BASE set   — Routes SDK calls to stripe-mock running locally
 *     (docker run --rm -p 12111:12111 stripe/stripe-mock:latest).
 *  3. STRIPE_SECRET_KEY set — Uses real Stripe test/live API.
 *
 * Body: { tierId, amount, currency?, description?, credits?, metadata? }
 */
export async function POST(req: Request) {
    try {
        const {
            tierId,
            amount,
            currency = "usd",
            description,
            credits,
            metadata = {},
        } = await req.json();

        if (!tierId || typeof amount !== "number" || amount <= 0) {
            return NextResponse.json(
                { error: "Invalid request: tierId and positive amount required." },
                { status: 400 }
            );
        }

        // ── Simulation mode: no Stripe backend needed ─────────────
        if (process.env.STRIPE_SIMULATE === "true") {
            const fakeId = `pi_sim_${tierId}_${Date.now()}`;
            return NextResponse.json({
                success: true,
                simulated: true,
                paymentId: fakeId,
                status: "succeeded",
                amount: Math.round(amount * 100),
                currency: currency.toLowerCase(),
            });
        }

        // ── stripe-mock or real Stripe ────────────────────────────
        const stripe = getStripeClient();

        const pi = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency: currency.toLowerCase(),
            description: description || `OorjaKull · ${tierId}`,
            payment_method: "pm_card_visa",
            confirm: true,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never",
            },
            metadata: {
                tierId,
                product: "OorjaKull AI Subscription",
                ...(typeof credits === "number" ? { credits: String(credits) } : {}),
                ...metadata,
            },
        });

        if (pi.status !== "succeeded") {
            return NextResponse.json(
                { error: `Payment not completed (status: ${pi.status})`, paymentId: pi.id },
                { status: 402 }
            );
        }

        return NextResponse.json({
            success: true,
            simulated: false,
            paymentId: pi.id,
            status: pi.status,
            amount: pi.amount,
            currency: pi.currency,
        });
    } catch (err) {
        console.error("Stripe checkout error:", err);
        return NextResponse.json(
            { error: err instanceof Error ? err.message : "Stripe checkout failed." },
            { status: 500 }
        );
    }
}
