"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

/**
 * PageTransition
 * Uses `usePathname()` as the React key so the wrapper fully remounts
 * on every route change, triggering the CSS page-enter animation.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div key={pathname} className="page-transition">
            {children}
        </div>
    );
}
