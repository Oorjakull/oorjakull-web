import Stripe from "stripe";

/**
 * Returns a Stripe SDK instance configured for either:
 *  - stripe-mock (when STRIPE_API_BASE is set, e.g. http://localhost:12111)
 *  - real Stripe API (when STRIPE_API_BASE is empty; uses STRIPE_SECRET_KEY)
 *
 * stripe-mock accepts any key, so we fall back to a placeholder when none is set.
 * See: https://github.com/stripe/stripe-mock
 */
export function getStripeClient(): Stripe {
    const apiBase = process.env.STRIPE_API_BASE?.trim();
    const key = process.env.STRIPE_SECRET_KEY?.trim() || "sk_test_mock";

    if (apiBase) {
        const url = new URL(apiBase);
        const isHttps = url.protocol === "https:";
        const port = url.port ? parseInt(url.port, 10) : isHttps ? 443 : 80;

        // No apiVersion override — SDK uses its pinned latest, which stripe-mock supports.
        return new Stripe(key, {
            host: url.hostname,
            port,
            protocol: isHttps ? "https" : "http",
        });
    }

    return new Stripe(key);
}

export function isUsingMock(): boolean {
    return Boolean(process.env.STRIPE_API_BASE?.trim());
}
