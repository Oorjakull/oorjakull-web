"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Eye, EyeOff, ArrowRight, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
    const router = useRouter();
    const [mode, setMode] = useState<"login" | "signup">("login");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            if (mode === "signup") {
                const res = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, password }),
                });

                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.message || "Failed to register account.");
                }

                // Auto-login after successful registration
                const signInRes = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (signInRes?.error) {
                    throw new Error("Registration successful, but automatic login failed. Please sign in manually.");
                }

                router.push("/");
                router.refresh();
            } else {
                // Login Flow
                const res = await signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                });

                if (res?.error) {
                    throw new Error("Invalid email or password.");
                }

                router.push("/");
                router.refresh();
            }
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col font-sans bg-background">
            <Navbar />

            <main className="flex-1 flex items-center justify-center py-24 px-4 relative overflow-hidden">

                {/* Background glows */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/3" />
                    <div className="absolute inset-0 dot-pattern opacity-15" />
                </div>

                {/* Card */}
                <div className="relative z-10 w-full max-w-md">
                    <div className="bg-card border border-muted rounded-3xl shadow-2xl shadow-primary/6 p-8 md:p-10 flex flex-col gap-8">

                        {/* Brand mark */}
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="relative h-14 w-14">
                                <Image
                                    src="/icon_nobg-removebg-preview.png"
                                    alt="OorjaKull"
                                    fill
                                    sizes="56px"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div>
                                <h1 className="text-2xl font-serif font-semibold text-foreground">
                                    {mode === "login" ? "Welcome Back" : "Join OorjaKull"}
                                </h1>
                                <p className="text-sm text-foreground/50 mt-1">
                                    {mode === "login"
                                        ? "Sign in to continue your practice"
                                        : "Create your account and begin your journey"}
                                </p>
                            </div>
                        </div>

                        {/* Mode toggle tabs */}
                        <div className="flex bg-muted/60 rounded-full p-1">
                            {(["login", "signup"] as const).map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setMode(m)}
                                    className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${mode === m
                                        ? "bg-primary text-white shadow-md shadow-primary/20"
                                        : "text-foreground/55 hover:text-foreground"
                                        }`}
                                >
                                    {m === "login" ? "Sign In" : "Sign Up"}
                                </button>
                            ))}
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                            {error && (
                                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm mb-2 text-center">
                                    {error}
                                </div>
                            )}

                            {mode === "signup" && (
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder="Your full name"
                                        className="px-4 py-3 rounded-xl border border-foreground/15 bg-background text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                </div>
                            )}

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="your@email.com"
                                    className="px-4 py-3 rounded-xl border border-foreground/15 bg-background text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 pr-11 rounded-xl border border-foreground/15 bg-background text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/60 transition-colors"
                                        aria-label="Toggle password visibility"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {mode === "login" && (
                                <div className="flex justify-end">
                                    <Link href="#" className="text-xs text-primary hover:text-primary/80 transition-colors font-medium">
                                        Forgot password?
                                    </Link>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group mt-2 w-full py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Processing..." : mode === "login" ? "Sign In" : "Create Account"}
                                {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-px bg-foreground/10" />
                            <span className="text-xs text-foreground/35">or</span>
                            <div className="flex-1 h-px bg-foreground/10" />
                        </div>

                        {/* Apply CTA */}
                        <div className="text-center flex flex-col gap-3">
                            <p className="text-xs text-foreground/45">New to OorjaKull? Not sure where to start?</p>
                            <Link
                                href="/book-trial"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-foreground/65 text-sm font-medium hover:border-primary/50 hover:text-primary transition-all"
                            >
                                <Wind className="w-3.5 h-3.5" />
                                Apply for a Program Instead
                            </Link>
                        </div>
                    </div>

                    {/* Fine print */}
                    <p className="text-center text-xs text-foreground/30 mt-6 leading-relaxed">
                        By continuing you agree to OorjaKull&apos;s{" "}
                        <Link href="#" className="underline hover:text-foreground/50">Terms & Conditions</Link>{" "}
                        and{" "}
                        <Link href="#" className="underline hover:text-foreground/50">Privacy Policy</Link>.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

