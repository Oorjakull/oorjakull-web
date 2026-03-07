"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    /** Width of the wrapper element */
    width?: "fit-content" | "100%";
    /** Delay before the animation starts (seconds) */
    delay?: number;
    /** How far down the element starts (px). Default 28 */
    yOffset?: number;
    /** Starting blur amount (px). Default 10 */
    blur?: number;
    /** Duration of the animation (seconds). Default 0.65 */
    duration?: number;
    /** Extra className on the wrapper */
    className?: string;
}

export default function Reveal({
    children,
    width = "100%",
    delay = 0,
    yOffset = 28,
    blur = 10,
    duration = 0.65,
    className = "",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                initial={{ opacity: 0, y: yOffset, filter: `blur(${blur}px)` }}
                animate={
                    isInView
                        ? { opacity: 1, y: 0, filter: "blur(0px)" }
                        : { opacity: 0, y: yOffset, filter: `blur(${blur}px)` }
                }
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

// ─── Stagger container + item for card grids ─────────────────────────────────

interface StaggerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerReveal({ children, className = "", staggerDelay = 0.1 }: StaggerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: staggerDelay } },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = "",
    yOffset = 24,
    blur = 8,
}: {
    children: React.ReactNode;
    className?: string;
    yOffset?: number;
    blur?: number;
}) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: yOffset, filter: `blur(${blur}px)` },
                visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
