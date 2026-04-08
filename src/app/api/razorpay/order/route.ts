import { NextResponse } from "next/server";
import Razorpay from "razorpay";

/**
 * POST /api/razorpay/order
 * Creates a Razorpay order for a subscription tier purchase.
 *
 * Body: { tierId: string, amount: number, currency?: string }
 *  - amount is in major units (e.g. 499 means ₹499). We convert to paise here.
 */
export async function POST(req: Request) {
    try {
        const { tierId, amount, currency = "INR" } = await req.json();

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
            receipt: `ok_${tierId}_${Date.now()}`,
            notes: {
                tierId,
                product: "OorjaKull AI Subscription",
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
