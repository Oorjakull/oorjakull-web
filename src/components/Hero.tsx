import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32 xl:py-48">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-secondary/10 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            New Batch Starts Next Month
                        </div>

                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-serif text-foreground">
                            Master the Art of <span className="text-primary">Teaching Yoga</span>
                        </h1>

                        <p className="max-w-[600px] text-muted-foreground md:text-xl font-light leading-relaxed">
                            Join OorjaKull's premier "Train the Trainer" program. Elevate your practice, deepen your knowledge, and become a certified yoga instructor with our holistic approach.
                        </p>

                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                href="/courses"
                                className={cn(
                                    "inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                )}
                            >
                                Explore Our Courses
                            </Link>
                        </div>


                    </div>

                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-2xl bg-muted/20 shadow-xl">
                            {/* Hero Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-background">
                                <Image
                                    src="/logo_21.png"
                                    alt="OorjaKull Logo"
                                    fill
                                    className="object-contain opacity-90"
                                    priority
                                />
                            </div>
                            {/* Overlay Content Card */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
