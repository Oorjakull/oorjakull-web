/**
 * template.tsx — Next.js App Router
 *
 * Unlike layout.tsx (which persists across navigations),
 * template.tsx creates a FRESH instance on every page change.
 * That guarantees the CSS page-enter animation fires every time.
 */
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="page-transition">
            {children}
        </div>
    );
}
