import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-muted bg-muted/30 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-serif font-bold text-foreground">OorjaKull</h3>
                        <p className="text-sm text-muted-foreground">
                            Empowering the next generation of yoga teachers with ancient wisdom and modern techniques.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Programs</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary">200H Teacher Training</Link></li>
                            <li><Link href="#" className="hover:text-primary">300H Advanced Training</Link></li>
                            <li><Link href="#" className="hover:text-primary">Weekend Workshops</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary">Our Instructors</Link></li>
                            <li><Link href="#" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary">Instagram</Link></li>
                            <li><Link href="#" className="hover:text-primary">Facebook</Link></li>
                            <li><Link href="#" className="hover:text-primary">YouTube</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-muted pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} OorjaKull. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
