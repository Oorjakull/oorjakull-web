'use server'

import db from '@/lib/db'

// Registration Action
export async function submitRegistration(prevState: any, formData: FormData) {
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const course = formData.get('course') as string

    if (!fullName || !email || !phone) {
        return {
            message: 'Please fill in all required fields.',
            success: false
        }
    }

    try {
        await db.registration.create({
            data: {
                fullName,
                email,
                phone,
                course: course || "General Inquiry"
            }
        })

        return {
            message: 'Registration successful! We will contact you shortly.',
            success: true
        }
    } catch (e) {
        console.error('Registration Error:', e)
        return {
            message: 'Something went wrong. Please try again.',
            success: false
        }
    }
}

// Contact Action
export async function submitContact(prevState: any, formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    if (!name || !email || !message) {
        return {
            message: 'Please fill in all required fields.',
            success: false
        }
    }

    try {
        await db.contactSubmission.create({
            data: {
                name,
                email,
                message
            }
        })

        return {
            message: 'Message sent! We will get back to you soon.',
            success: true
        }
    } catch (e) {
        console.error('Contact Error:', e)
        return {
            message: 'Failed to send message. Please try again.',
            success: false
        }
    }
}
