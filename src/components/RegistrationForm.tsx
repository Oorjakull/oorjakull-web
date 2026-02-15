'use client'

import { useActionState } from 'react'
import { submitRegistration } from '@/app/actions'
import { cn } from '@/lib/utils'

const initialState = {
    message: "",
    success: false
}

export default function RegistrationForm({ courseTitle }: { courseTitle?: string }) {
    const [state, formAction, isPending] = useActionState(submitRegistration, initialState)

    if (state.success) {
        return (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-xl font-bold mb-2 font-serif">Namaste! 🙏</h3>
                <p className="mb-4">{state.message}</p>
                <p className="text-sm">Our team will reach out to you within 24 hours.</p>
            </div>
        )
    }

    return (
        <form action={formAction} className="space-y-6 bg-card p-8 rounded-xl shadow-lg border border-muted/50">
            <h3 className="text-2xl font-bold font-serif mb-6 text-center">Register Interest</h3>
            <div className="space-y-4">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                        placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>

                {/* Hidden Course Field - Uses prop if available, otherwise default */}
                <input
                    type="hidden"
                    name="course"
                    value={courseTitle || "General Inquiry / Other"}
                />
            </div>

            {state.message && !state.success && (
                <div className="text-red-500 text-sm font-medium bg-red-50 p-2 rounded">
                    {state.message}
                </div>
            )}

            <button
                type="submit"
                disabled={isPending}
                className={cn(
                    "w-full py-3 px-6 rounded-full font-bold text-white transition-all shadow-md flex items-center justify-center",
                    isPending
                        ? "bg-muted cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90 hover:scale-[1.02]"
                )}
            >
                {isPending ? (
                    <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                        Processing...
                    </span>
                ) : (
                    "Complete Registration"
                )}
            </button>

            <p className="text-xs text-muted-foreground text-center mt-4">
                By registering, you agree to our Terms & Conditions.
            </p>
        </form>
    )
}
