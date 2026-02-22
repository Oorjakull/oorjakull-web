'use client'

import { useActionState } from 'react'
import { submitContact } from '@/app/actions'
import { Send, CheckCircle2 } from 'lucide-react'

const initialState = {
    message: "",
    success: false
}

const inputClass = "w-full px-4 py-3 rounded-xl border border-muted bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all placeholder:text-muted-foreground/50";

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContact, initialState)

    if (state.success) {
        return (
            <div className="bg-primary/5 border border-primary/20 text-foreground p-10 rounded-2xl text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3">Message Received!</h3>
                <p className="text-muted-foreground leading-relaxed">{state.message}</p>
                <p className="text-sm text-muted-foreground mt-3">We'll get back to you within 24 hours.</p>
            </div>
        )
    }

    return (
        <form action={formAction} className="flex flex-col gap-5 bg-card p-8 rounded-2xl shadow-sm border border-muted">
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClass}
                        placeholder="Jane Doe"
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClass}
                        placeholder="jane@example.com"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">
                    Subject
                </label>
                <select id="subject" name="subject" className={inputClass}>
                    <option value="">Select a topic...</option>
                    <option>200H Teacher Training</option>
                    <option>300H Advanced Training</option>
                    <option>Weekend Workshops</option>
                    <option>Other Inquiry</option>
                </select>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about yourself and how we can help..."
                />
            </div>

            {state.message && !state.success && (
                <div className="text-red-500 text-sm bg-red-50 border border-red-200 p-3 rounded-lg">
                    {state.message}
                </div>
            )}

            <button
                type="submit"
                id="contact-submit-btn"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:bg-muted disabled:cursor-not-allowed transition-all"
            >
                {isPending ? (
                    <>
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    )
}
