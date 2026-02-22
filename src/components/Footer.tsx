import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Youtube, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark-bg text-white/70">
            {/* Main footer content */}
            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-5 max-w-sm">
                        <div>
                            <h3 className="text-2xl font-serif font-semibold text-white tracking-tight">
                                OorjaKull
                            </h3>
                            <p className="text-sm text-primary-light mt-1 font-medium uppercase tracking-widest">
                                School of Yoga
                            </p>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed">
                            Empowering the next generation of yoga teachers with the depth of
                            ancient wisdom and the clarity of modern pedagogy. From the heart of India.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3 pt-2">
                            {[
                                { icon: Instagram, label: "Instagram", href: "#" },
                                { icon: Facebook, label: "Facebook", href: "#" },
                                { icon: Youtube, label: "YouTube", href: "#" },
                                { icon: Mail, label: "Email", href: "/contact" },
                            ].map(({ icon: Icon, label, href }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Programs */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold text-white/30 uppercase tracking-[0.25em]">Programs</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                ["200H Teacher Training", "/courses"],
                                ["300H Advanced YTT", "/courses"],
                                ["Weekend Intensives", "/courses"],
                                ["Online Learning", "/courses"],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-white/50 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {label}
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-semibold text-white/30 uppercase tracking-[0.25em]">Navigate</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                ["About OorjaKull", "/about"],
                                ["Our Acharyas", "/about"],
                                ["Insights Blog", "/blog"],
                                ["Contact Us", "/contact"],
                                ["Apply Now", "/register"],
                            ].map(([label, href]) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-white/50 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                                    >
                                        {label}
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
                    <p>© {new Date().getFullYear()} OorjaKull School of Yoga. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white/50 transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
