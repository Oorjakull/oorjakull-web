'use client'

import { useActionState } from 'react'
import { submitContact } from '@/app/actions'
import { cn } from '@/lib/utils'

const initialState = {
    message: "",
    success: false
}

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContact, initialState)

    if (state.success) {
        return (
            <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-lg text-center shadow-sm">
                <h3 className="text-xl font-bold mb-2 font-serif">Thank You!</h3>
                <p className="mb-4">{state.message}</p>
                <p className="text-sm">We appreciate you reaching out to OorjaKull.</p>
            </div>
        )
    }

    return (
        <form action={formAction} className="space-y-6 bg-card p-8 rounded-xl shadow-lg border border-muted/50">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                        placeholder="Jane Doe"
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
                        placeholder="jane@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                        placeholder="How can we help you?"
                    />
                </div>
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
                        : "bg-secondary hover:bg-secondary/90 hover:scale-[1.02]"
                )}
            >
                {isPending ? (
                    <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                        Sending...
                    </span>
                ) : (
                    "Send Message"
                )}
            </button>
        </form>
    )
}
