import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import AuraCursor from "@/components/AuraCursor";
import SmoothScroll from "@/components/SmoothScroll";
import ViewportBlur from "@/components/ViewportBlur";
import MadhuChatbot from "@/components/MadhuChatbot";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://www.oorjakull.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OorjaKull — India's First AI Yoga Platform",
    template: "%s | OorjaKull",
  },
  description:
    "OorjaKull combines ancient yoga wisdom with AI-powered pose detection, adaptive breathwork and the Madhu AI companion. Explore classes and personalised wellness.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "OorjaKull",
    title: "OorjaKull — India's First AI Yoga Platform",
    description:
      "AI-powered yoga, real-time pose detection, adaptive breathwork and personalised wellness. Ancient wisdom, modern intelligence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OorjaKull AI Yoga Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OorjaKull — India's First AI Yoga Platform",
    description:
      "AI-powered yoga, real-time pose detection and adaptive breathwork.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

/* Organization JSON-LD for rich results */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OorjaKull",
  url: SITE_URL,
  logo: `${SITE_URL}/icon_nobg-removebg-preview.png`,
  description:
    "India's first AI-powered yoga platform — real-time pose guidance, adaptive breathwork, and personalised wellness.",
  sameAs: [
    "https://www.instagram.com/oorjakull",
    "https://www.youtube.com/@oorjakull",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@oorjakull.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PELZLEQXNB"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-PELZLEQXNB');`}
        </Script>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased font-sans`}
      >
          <ViewportBlur />
          <SmoothScroll>
            <AuraCursor />
            {children}
          </SmoothScroll>
          <MadhuChatbot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
