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

const programs: Program[] = [
    {
        id: "ashtanga-ytt-200",
        title: "Ashtanga Yoga Teacher Training (200 Hours)",
        description: "This 200-Hour Ashtanga-based Yoga Teacher Training Course provides a strong foundation in classical Ashtanga Vinyasa Yoga practice, teaching methodology, yoga philosophy, anatomy, pranayama, meditation, and professional teaching practicum.",
        duration: "4 Weeks (Intensive)",
        level: "Beginner / Intermediate",
        features: [
            "Classical Ashtanga Vinyasa Yoga",
            "Teaching Methodology & Practicum",
            "Anatomy, Pranayama & Meditation",
            "Professional Certification"
        ],
        curriculumBreakdown: [
            { topic: "Techniques, Training & Practice (Asana, Pranayama, Meditation)", hours: 100 },
            { topic: "Teaching Methodology & Practicum", hours: 25 },
            { topic: "Anatomy & Physiology", hours: 20 },
            { topic: "Yoga Humanities (Philosophy, Sutras, Lifestyle)", hours: 30 },
            { topic: "Professional Essentials & Ethics", hours: 10 },
            { topic: "Electives / Self Study / Workshops", hours: 15 },
        ],
        weeklySchedule: [
            {
                week: "Week 1",
                theme: "Foundations & Beginner Series (Arogya)",
                focus: [
                    "Introduction to Ashtanga Vinyasa Yoga lineage and discipline",
                    "Daily guided practice: Arogya Series + Surya Namaskar",
                    "Basic alignment, breath coordination, drishti, bandhas",
                    "Yoga Philosophy: Meaning and origin of Yoga",
                    "Anatomy: Skeletal system + safe movement principles",
                    "Chanting: Opening prayer introduction"
                ]
            },
            {
                week: "Week 2",
                theme: "Preparatory Series (Abhyasa) + Teaching Skills",
                focus: [
                    "Daily practice: Abhyasa Series with posture breakdown",
                    "Asana Technique format: benefits, limitations, mistakes",
                    "Teaching methodology: demonstration + verbal cueing",
                    "Yoga Sutras: Introduction to Ashtanga (8 limbs)",
                    "Anatomy: Muscular system + flexibility vs stability",
                    "Pranayama: Basic breath regulation practices"
                ]
            },
            {
                week: "Week 3",
                theme: "Primary Series Integration + Practicum",
                focus: [
                    "Daily practice: Primary Series foundations",
                    "Mysore-style self-practice sessions",
                    "Hands-on adjustments and teaching practicum",
                    "Yoga Humanities: Pancha Koshas + Chakras overview",
                    "Anatomy: Respiratory + nervous system in yoga",
                    "Meditation: Breath awareness + mantra focus"
                ]
            },
            {
                week: "Week 4",
                theme: "Advanced Teaching + Certification Preparation",
                focus: [
                    "Primary Series refinement + sequencing principles",
                    "Mock teaching exams and peer teaching feedback",
                    "Professional ethics, yoga Instructor’s responsibilities",
                    "Yoga Sutras: Selected sutras from Samadhi & Sadhana Pada",
                    "Pranayama: Energizing + calming techniques",
                    "Final integration: self-practice, reflection, graduation"
                ]
            }
        ]
    }
];

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
