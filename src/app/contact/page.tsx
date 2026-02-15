import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Navbar />
            <main className="flex-1 bg-muted/20">
                <section className="py-16 md:py-24 container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-foreground">Get in Touch</h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Have questions about our teacher training programs or retreats? We're here to help you on your yoga journey.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <Reveal width="100%" delay={0.2}>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold font-serif mb-6 text-primary">Contact Information</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Our Studio</h3>
                                                <p className="text-muted-foreground">123 Yoga Street, Serenity Nagar<br />Rishikesh, Uttarakhand 249201</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                                <Phone className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Phone</h3>
                                                <p className="text-muted-foreground">+91 98765 43210</p>
                                                <p className="text-sm text-muted-foreground">(Mon-Fri, 9am - 6pm IST)</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Email</h3>
                                                <p className="text-muted-foreground">namaste@oorjakull.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
                                    <h3 className="font-semibold text-secondary-foreground flex items-center gap-2 mb-2">
                                        <Clock className="h-5 w-5" />
                                        Office Hours
                                    </h3>
                                    <p className="text-muted-foreground">
                                        We are open for inquiries from Monday to Saturday, 9:00 AM to 6:00 PM. Messages received on Sundays will be answered on Monday.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Contact Form */}
                        <Reveal width="100%" delay={0.3}>
                            <ContactForm />
                        </Reveal>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
