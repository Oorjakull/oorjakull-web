"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MadhuChatbot() {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Tooltip */}
            <AnimatePresence>
                {tooltipVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-card border border-muted rounded-2xl shadow-xl px-4 py-3 max-w-[200px] text-right pointer-events-none"
                    >
                        <p className="text-sm font-semibold text-foreground leading-snug">Madhu</p>
                        <p className="text-xs text-foreground/55 mt-0.5 leading-relaxed">
                            Your AI Yoga Companion. Ask me anything!
                        </p>
                        {/* Tail */}
                        <div className="absolute -bottom-2 right-5 w-3 h-3 bg-card border-r border-b border-muted rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Button */}
            <Link
                href="https://ai.oorjakull.com"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
                onFocus={() => setTooltipVisible(true)}
                onBlur={() => setTooltipVisible(false)}
                aria-label="Chat with Madhu — your AI Yoga Companion"
                className="relative w-14 h-14 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 flex items-center justify-center hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" />
                <Sparkles className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
        </div>
    );
}

export function MadhuChatbotDismissible() {
    const [dismissed, setDismissed] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    if (dismissed) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Dismiss button */}
            <button
                onClick={() => setDismissed(true)}
                className="w-5 h-5 rounded-full bg-foreground/20 text-foreground/60 hover:bg-foreground/30 flex items-center justify-center transition-all"
                aria-label="Dismiss chatbot"
            >
                <X className="w-3 h-3" />
            </button>

            {/* Tooltip */}
            <AnimatePresence>
                {tooltipVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-card border border-muted rounded-2xl shadow-xl px-4 py-3 max-w-[200px] text-right pointer-events-none"
                    >
                        <p className="text-sm font-semibold text-foreground leading-snug">Madhu</p>
                        <p className="text-xs text-foreground/55 mt-0.5 leading-relaxed">
                            Your AI Yoga Companion. Ask me anything!
                        </p>
                        <div className="absolute -bottom-2 right-5 w-3 h-3 bg-card border-r border-b border-muted rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            <Link
                href="https://ai.oorjakull.com"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
                aria-label="Chat with Madhu — your AI Yoga Companion"
                className="relative w-14 h-14 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 flex items-center justify-center hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
                <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" />
                <Sparkles className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
        </div>
    );
}
