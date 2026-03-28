"use client";
import { useRef, useEffect, useState } from "react";
import { StaggerReveal, StaggerItem } from "@/components/Reveal";

type StatItem = { value: number; suffix: string; label: string; };

const STATS: StatItem[] = [
    { value: 2, suffix: "M+", label: "AI Poses Analyzed" },
    { value: 16, suffix: "ms", label: "Analysis Latency" },
    { value: 10, suffix: "k+", label: "Active AI Sessions" },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { start = target; clearInterval(timer); }
            setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [active, target, duration]);
    return count;
}

function StatCard({ item }: { item: StatItem }) {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setActive(true); obs.disconnect(); }
        }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    const count = useCountUp(item.value, active);
    return (
        <div ref={ref} className="flex flex-col items-center text-center group">
            <p className="text-5xl md:text-6xl font-serif font-semibold text-primary transition-transform group-hover:scale-110">
                {count}{item.suffix}
            </p>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mt-2 font-medium">{item.label}</p>
        </div>
    );
}

export default function StatsSection() {
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto px-4 md:px-8">
                <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16" staggerDelay={0.15}>
                    {STATS.map((stat) => (
                        <StaggerItem key={stat.label} yOffset={20} blur={6}>
                            <StatCard item={stat} />
                        </StaggerItem>
                    ))}
                </StaggerReveal>
            </div>
        </section>
    );
}
