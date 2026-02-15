import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import Reveal from "@/components/Reveal";

export default function RegisterPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1 bg-muted/20">
                <section className="py-16 md:py-24 container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <h1 className="text-4xl font-bold font-serif mb-4 text-foreground">Begin Your Teaching Journey</h1>
                            <p className="text-muted-foreground text-lg">
                                Register for the <span className="text-primary font-semibold">200-Hour Ashtanga Yoga Teacher Training</span>.
                                Fill out the form below to secure your spot.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <div className="max-w-xl mx-auto">
                            <RegistrationForm />
                        </div>
                    </Reveal>
                </section>
            </main>
            <Footer />
        </div>
    );
}
