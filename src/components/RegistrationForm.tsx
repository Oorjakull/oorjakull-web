'use client'

import { useActionState } from 'react'
import { submitRegistration } from '@/app/actions'
import { CheckCircle2, Loader2 } from 'lucide-react'

const initialState = { message: "", success: false }

const inputClass = "w-full px-4 py-3 rounded-xl border border-muted bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all placeholder:text-foreground/35";

export default function RegistrationForm({ courseTitle }: { courseTitle?: string }) {
    const [state, formAction, isPending] = useActionState(submitRegistration, initialState)

    if (state.success) {
        return (
            <div className="bg-primary/8 border border-primary/25 p-10 rounded-2xl text-center">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground">Namaste! 🙏</h3>
                <p className="text-foreground/70 leading-relaxed mb-2">{state.message}</p>
                <p className="text-sm text-muted-foreground">Our team will reach out within 24 hours.</p>
            </div>
        )
    }

    return (
        <form action={formAction} className="flex flex-col gap-5 bg-card border border-muted p-8 rounded-2xl shadow-sm">
            <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-1">Register Your Interest</h3>
                {courseTitle && (
                    <p className="text-xs text-primary">
                        For: <span className="font-semibold">{courseTitle}</span>
                    </p>
                )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                        Full Name
                    </label>
                    <input type="text" id="fullName" name="fullName" required className={inputClass} placeholder="Jane Doe" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                        Phone
                    </label>
                    <input type="tel" id="phone" name="phone" required className={inputClass} placeholder="+91 98765 43210" />
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    Email Address
                </label>
                <input type="email" id="email" name="email" required className={inputClass} placeholder="jane@example.com" />
            </div>

            <input type="hidden" name="course" value={courseTitle || "General Inquiry"} />

            {state.message && !state.success && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                    {state.message}
                </div>
            )}

            <button
                type="submit"
                id="registration-submit-btn"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
                {isPending ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                ) : (
                    "Submit Application"
                )}
            </button>

            <p className="text-xs text-muted-foreground text-center">
                By applying, you agree to our Terms &amp; Conditions.
            </p>
        </form>
    )
}
