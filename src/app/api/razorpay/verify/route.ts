import { NextResponse } from "next/server";
import crypto from "crypto";

/**
 * POST /api/razorpay/verify
 * Verifies a Razorpay payment signature after checkout success.
 *
 * Body: {
 *   razorpay_order_id, razorpay_payment_id, razorpay_signature, tierId
 * }
 *
 * The signature is HMAC-SHA256(order_id + "|" + payment_id, key_secret).
 * Comparison is done with timingSafeEqual to prevent timing attacks.
 */
export async function POST(req: Request) {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            tierId,
        } = await req.json();

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return NextResponse.json(
                { verified: false, error: "Missing payment fields." },
                { status: 400 }
            );
        }

        const secret = process.env.RAZORPAY_KEY_SECRET;
        if (!secret) {
            return NextResponse.json(
                { verified: false, error: "Server misconfigured." },
                { status: 500 }
            );
        }

        const expectedSignature = crypto
            .createHmac("sha256", secret)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        const expectedBuf = Buffer.from(expectedSignature, "utf8");
        const actualBuf = Buffer.from(razorpay_signature, "utf8");

        const verified =
            expectedBuf.length === actualBuf.length &&
            crypto.timingSafeEqual(expectedBuf, actualBuf);

        if (!verified) {
            return NextResponse.json(
                { verified: false, error: "Signature mismatch." },
                { status: 400 }
            );
        }

        // In a real implementation, persist subscription state here
        // (e.g. update user record, grant credits, send receipt email).
        // This is a mock test page so we just return success.
        return NextResponse.json({
            verified: true,
            tierId,
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
        });
    } catch (err) {
        console.error("Razorpay verify error:", err);
        return NextResponse.json(
            { verified: false, error: "Verification failed." },
            { status: 500 }
        );
    }
}
