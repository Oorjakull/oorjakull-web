export interface Program {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    features: string[];
    curriculumBreakdown?: { topic: string; hours: number }[];
    weeklySchedule?: { week: string; theme: string; focus: string[] }[];
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    avatarUrl?: string;
}

export interface Instructor {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl?: string;
}

const programs: Program[] = [];

const testimonials: Testimonial[] = [
    {
        id: "t1",
        name: "Priya Sharma",
        role: "RYT 200 Graduate",
        content: "OorjaKull transformed my understanding of yoga. The teachers are incredibly knowledgeable and supportive.",
    },
    {
        id: "t2",
        name: "David Miller",
        role: "RYT 500 Graduate",
        content: "The advanced training was exactly what I needed to take my teaching to the next level. Highly recommended!",
    },
    {
        id: "t3",
        name: "Ananya Gupta",
        role: "Prenatal Yoga Teacher",
        content: "The specialized prenatal course gave me the confidence to teach pregnant women safely and effectively.",
    },
];

const instructors: Instructor[] = [
    {
        id: "i1",
        name: "Acharya Vimal",
        role: "Lead Trainer",
        bio: "Over 20 years of experience in Hatha and Ashtanga Yoga. Disciple of B.K.S. Iyengar lineage.",
    },
    {
        id: "i2",
        name: "Dr. Sarah Jenkins",
        role: "Anatomy Expert",
        bio: "Physiotherapist and Yoga Therapist bridging the gap between modern science and ancient wisdom.",
    }
];

// Mock API functions
export async function getPrograms(): Promise<Program[]> {
    // Simulate network delay
    return new Promise((resolve) => setTimeout(() => resolve(programs), 100));
}

export async function getProgramById(id: string): Promise<Program | undefined> {
    return new Promise((resolve) => setTimeout(() => resolve(programs.find(p => p.id === id)), 100));
}

export async function getTestimonials(): Promise<Testimonial[]> {
    return new Promise((resolve) => setTimeout(() => resolve(testimonials), 100));
}

export async function getInstructors(): Promise<Instructor[]> {
    return new Promise((resolve) => setTimeout(() => resolve(instructors), 100));
}
