import { NextResponse } from "next/server";
import Razorpay from "razorpay";

/**
 * POST /api/razorpay/order
 * Creates a Razorpay order for a subscription tier purchase OR a PAYG credit top-up.
 *
 * Body: {
 *   tierId: string,        // e.g. "practitioner" or "payg"
 *   amount: number,        // in major units (₹). Converted to paise here.
 *   currency?: string,     // defaults to INR
 *   credits?: number,      // optional — for PAYG top-ups
 *   label?: string,        // optional — human-readable product name for receipt
 * }
 */
export async function POST(req: Request) {
    try {
        const { tierId, amount, currency = "INR", credits, label } = await req.json();

        if (!tierId || typeof amount !== "number" || amount <= 0) {
            return NextResponse.json(
                { error: "Invalid request: tierId and positive amount required." },
                { status: 400 }
            );
        }

        const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        if (!keyId || !keySecret) {
            return NextResponse.json(
                { error: "Razorpay keys not configured on server." },
                { status: 500 }
            );
        }

        const razorpay = new Razorpay({
            key_id: keyId,
            key_secret: keySecret,
        });

        const order = await razorpay.orders.create({
            amount: Math.round(amount * 100), // → paise
            currency,
            receipt: `ok_${tierId}_${Date.now()}`.slice(0, 40),
            notes: {
                tierId,
                product: label || "OorjaKull AI Subscription",
                ...(typeof credits === "number" ? { credits: String(credits) } : {}),
            },
        });

        return NextResponse.json({
            orderId: order.id,
            amount: order.amount,
            currency: order.currency,
            keyId,
        });
    } catch (err) {
        console.error("Razorpay order error:", err);
        return NextResponse.json(
            { error: "Failed to create order. Please try again." },
            { status: 500 }
        );
    }
}
