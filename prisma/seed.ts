import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // Create a sample registration
    const registration = await prisma.registration.upsert({
        where: { id: 1 },
        update: {},
        create: {
            fullName: 'Test User',
            email: 'test@example.com',
            phone: '1234567890',
            course: 'Test Course',
        },
    })

    console.log('Created test registration:', registration)

    // Create a sample contact submission
    const contact = await prisma.contactSubmission.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Jane Doe',
            email: 'jane@example.com',
            message: 'Hello, this is a test message.',
        },
    })

    console.log('Created test contact:', contact)
    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
