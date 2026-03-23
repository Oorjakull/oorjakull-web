import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        // Basic cybersecurity norms: enforce strong-ish passwords
        if (!email || !email.includes('@')) {
            return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
        }
        if (!password || password.length < 8) {
            return NextResponse.json({ message: "Password must be at least 8 characters long" }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ message: "User with this email already exists" }, { status: 409 });
        }

        // Hash password securely (bcryptjs uses solid default work factors, good for security)
        const hashedPassword = await hash(password, 12);

        // Create user in Vercel Postgres DB via Prisma
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        });

        // Exclude the password explicitly before returning
        const { password: _, ...userWithoutPassword } = user;

        return NextResponse.json(
            { message: "User registered successfully", user: userWithoutPassword },
            { status: 201 }
        );

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
