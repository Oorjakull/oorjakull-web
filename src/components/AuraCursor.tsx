"use strict";
"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function AuraCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {/* Outer soft aura — larger, more diffuse, expands on hover */}
                <motion.div
                    animate={{
                        scale: isHovering ? 3.6 : 2.8,
                        opacity: isHovering ? 0.32 : 0.22,
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(45,106,79,0.9) 0%, rgba(45,106,79,0.3) 40%, transparent 70%)",
                        filter: "blur(10px)",
                    }}
                />
                {/* Inner tight aura — the actual cursor position indicator */}
                <motion.div
                    animate={{
                        scale: isHovering ? 1.4 : 1,
                        opacity: isHovering ? 0.60 : 0.50,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(29,74,55,0.85) 0%, rgba(45,106,79,0.4) 55%, transparent 80%)",
                        filter: "blur(3px)",
                    }}
                />
            </motion.div>
        </>
    );
}


