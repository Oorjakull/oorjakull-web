export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    tag: string;
    emoji: string;
    color: string;
    readingTime: string;
    content: string; // markdown-style long-form content
};

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "meet-madhu-ai-companion",
        title: "Meet Madhu: Your AI Yoga Companion",
        excerpt:
            "How OorjaKull's AI companion uses real-time camera pose detection to give you personalised feedback — and why it doesn't replace a teacher.",
        date: "2026-03-20",
        tag: "AI Innovation",
        emoji: "🤖",
        color: "from-primary/20 to-emerald-900/20",
        readingTime: "8 min read",
        content: `Yoga has always been a deeply personal practice — passed from teacher to student, breath to breath, generation to generation. But what if technology could amplify that relationship without replacing it?

That's the idea behind Madhu, OorjaKull's AI yoga companion. Madhu is not a replacement for your Acharya. It's a tool designed to give you real-time, camera-based pose feedback when you're practising at home, travelling, or simply can't make it to a studio session.

## How Does Madhu Work?

Madhu uses your device's camera — whether that's a laptop, tablet, or phone — to analyse your body position in real time. Using a lightweight pose-estimation model, it identifies 33 key skeletal landmarks on your body: shoulders, hips, knees, ankles, wrists and spine.

Once your pose is detected, Madhu compares your alignment against a reference model trained on thousands of correctly-performed asanas. If your knee is drifting inward in Virabhadrasana II, or your hips aren't square in Trikonasana, Madhu will gently flag the correction — both visually on screen and through voice guidance.

The entire analysis happens in under 16 milliseconds, meaning the feedback feels instantaneous. There's no lag, no delay — just smooth, responsive guidance as you move through your practice.

## Adaptive Breathwork

Madhu doesn't just track asana. It also guides you through adaptive breathwork protocols. Whether you're practising Nadi Shodhana (alternate nostril breathing), the 4-7-8 technique for sleep, or a NSDR (Non-Sleep Deep Rest) session, Madhu dynamically paces the inhale-hold-exhale cycle based on your session history and comfort level.

Over time, Madhu learns your breath capacity and gently extends your holds and exhales — training your nervous system without you consciously tracking numbers.

## Why Madhu Doesn't Replace a Teacher

This is the most important part. Madhu can catch alignment issues, pace your breath and generate adaptive sequences — but it cannot read the room. It doesn't know you had a bad day. It can't feel the energy of a group class. It won't notice the subtle emotional release that happens in a deep hip opener.

That's why OorjaKull pairs Madhu with certified human Acharyas. The AI handles precision and consistency. The teacher handles presence, intuition and the sacred space of yoga.

## The Technology Stack

For those curious about the technical side: Madhu runs on a WebAssembly-optimised pose detection pipeline. It uses a MoveNet-based model for skeletal tracking, with custom post-processing for yoga-specific joint angles. The breathwork module uses Web Audio API for voice synthesis and timing.

All processing happens on-device — nothing is sent to a server. Your camera feed stays completely private.

## Try It Yourself

Madhu is available now on the OorjaKull AI platform. Whether you're a beginner learning Sun Salutation or an advanced practitioner refining your Bakasana, Madhu adapts to your level and grows with you.

Ancient wisdom, modern intelligence — that's the OorjaKull way.`,
    },
    {
        slug: "adaptive-breathwork-science",
        title: "The Science of Adaptive Breathwork",
        excerpt:
            "Discover how AI-driven protocols like NSDR, 4-7-8 and Anulom Vilom are dynamically paced to your nervous system in real time.",
        date: "2026-03-05",
        tag: "Pranayama",
        emoji: "🌬️",
        color: "from-accent/20 to-rose-900/20",
        readingTime: "9 min read",
        content: `Breathwork is one of the oldest healing modalities in human history. Pranayama — the science of breath control — has been practised in India for thousands of years. But until recently, the pacing of breathwork was always manual: a teacher counts, a student follows.

What if the pacing could adapt in real time to your body's readiness?

## What Is Adaptive Breathwork?

Adaptive breathwork is a concept pioneered at OorjaKull, where the inhale-hold-exhale ratio of a breathing protocol dynamically adjusts based on your session history, comfort level and real-time feedback. Instead of a fixed "4 counts in, 7 counts hold, 8 counts out," the system begins where you left off last time and gently extends your capacity over successive sessions.

## The Protocols We Use

### Nadi Shodhana (Alternate Nostril Breathing)
This classical pranayama technique balances the left and right hemispheres of the brain. In adaptive mode, Madhu tracks your breath rhythm from previous sessions and starts you at your established comfort ratio — say, 4:0:4 — then progressively introduces a hold (4:2:4, then 4:4:4) once your system demonstrates readiness.

### The 4-7-8 Technique
Originally popularised by Dr. Andrew Weil, this technique is clinically shown to activate the parasympathetic nervous system. Adaptive pacing means that beginners might start at 3-5-6 and gradually build to the full 4-7-8 over several sessions.

### Kapalbhati (Skull Shining Breath)
This vigorous exhale-focused pranayama is excellent for building core engagement and clearing the sinuses. The adaptive layer controls the pace — starting slower for beginners, building speed over time, and automatically cueing rest rounds at appropriate intervals.

### NSDR (Non-Sleep Deep Rest)
Inspired by Yoga Nidra and popularised by Dr. Andrew Huberman, NSDR uses guided body scanning and slow exhalation to drive the body into a state of deep rest without actual sleep. OorjaKull's adaptive NSDR sessions use voice pacing that slows over the duration of the session, matching the natural deceleration of your nervous system.

## The Science Behind It

The autonomic nervous system operates on a balance between sympathetic (fight-or-flight) and parasympathetic (rest-and-digest) activation. Controlled exhale-dominant breathing stimulates the vagus nerve, which sends a direct signal to slow the heart rate and lower cortisol.

Adaptive pacing makes this process safer and more effective because it doesn't push beginners beyond their capacity. A hold that's too long for your current ability triggers a stress response — the opposite of what breathwork intends.

## How OorjaKull Implements This

Madhu tracks your breathwork sessions and stores a simple profile: your comfortable inhale, hold and exhale durations for each technique. Each new session begins at your last comfortable level and offers a gentle 5-10% extension. If you've taken a break, Madhu automatically steps back to a lower starting point.

All pacing is delivered through voice guidance — no screen-watching required. You simply close your eyes, breathe, and let the AI pace you.

## Getting Started

Whether you're new to breathwork or an experienced pranayama practitioner, adaptive pacing meets you where you are. Try a free breathwork session on the OorjaKull AI platform — Nadi Shodhana, 4-7-8 and NSDR are all available.

Your breath is the bridge between body and mind. Let AI help you cross it smarter.`,
    },
    {
        slug: "yoga-for-pcod-complete-guide",
        title: "Yoga for PCOD: A Complete 12-Week Guide",
        excerpt:
            "Evidence-based yoga practices and lifestyle changes to manage PCOD/PCOS symptoms — hormone balancing, stress reduction and cycle regulation.",
        date: "2026-02-25",
        tag: "Women's Health",
        emoji: "🌸",
        color: "from-rose-400/20 to-pink-900/20",
        readingTime: "10 min read",
        content: `Polycystic Ovarian Disease (PCOD) affects an estimated 1 in 5 women of reproductive age in India. Symptoms include irregular periods, weight gain, acne, hair thinning and mood swings. While medical treatment is essential, yoga has been shown in multiple clinical studies to significantly reduce PCOD symptoms when practised consistently.

## Why Yoga Works for PCOD

PCOD is fundamentally a hormonal imbalance — elevated androgens, insulin resistance and chronic low-grade inflammation. Yoga addresses all three pathways simultaneously:

- **Cortisol regulation:** Restorative and yin poses activate the parasympathetic nervous system, lowering cortisol — a hormone that worsens insulin resistance
- **Insulin sensitivity:** Dynamic sequences like Surya Namaskar improve glucose uptake in muscle tissue
- **Hormonal axis reset:** Certain inversions and hip openers improve blood flow to the pelvic region, supporting ovarian function

## The 12-Week OorjaKull Protocol

### Weeks 1-4: Foundation & Stress Reduction
The first month focuses entirely on calming the nervous system. Chronic stress is the single biggest aggravator of PCOD. You'll practise:

- **Supported Supta Baddha Konasana** (Reclined Butterfly) — opens the hips and promotes pelvic blood flow
- **Viparita Karani** (Legs Up the Wall) — gentle inversion that calms the adrenal glands
- **Balasana** (Child's Pose) with extended arms — grounds the nervous system
- **Pranayama:** Nadi Shodhana for 10 minutes daily

### Weeks 5-8: Metabolic Activation
Once your nervous system is settled, we introduce more dynamic practices:

- **Surya Namaskar A** — 5-8 rounds to build heat and improve insulin sensitivity
- **Utkatasana** (Chair Pose) holds — activates the large muscle groups, improving glucose metabolism
- **Navasana** (Boat Pose) — core activation, supports pelvic floor tone
- **Ardha Matsyendrasana** (Seated Twist) — stimulates the liver and kidneys

### Weeks 9-12: Hormonal Balance & Maintenance
The final month integrates everything and introduces practices specifically targeting the endocrine system:

- **Sarvangasana** (Shoulder Stand) — stimulates the thyroid gland
- **Setu Bandhasana** (Bridge Pose) — opens the chest, activates the thyroid
- **Bhujangasana** (Cobra) — supports adrenal function
- **Meditation:** 15 minutes daily body scan, focusing on the pelvic and abdominal regions

## Dietary Considerations

While this isn't a nutrition programme, we strongly recommend:
- Reducing refined carbohydrates and sugar
- Including anti-inflammatory spices (turmeric, ginger, cinnamon)
- Eating adequate protein at every meal
- Managing dairy intake — it can worsen androgens in some women

## What Our Students Report

After completing the 12-week programme, our participants consistently report:
- More regular menstrual cycles
- Reduced acne and hair thinning
- Improved mood and energy
- Measurable weight loss (2-5 kg on average)

## Getting Started

OorjaKull's 12-Week PCOD Programme is available both in-person and via AI-guided sessions with Madhu. The AI tracks your practice frequency, session duration and cycle data (when shared voluntarily) to personalise your sequence progression.

Healing takes time, consistency and patience. Start where you are.`,
    },
    {
        slug: "best-yoga-poses-sciatica-relief",
        title: "Best Yoga Poses for Sciatica Pain Relief",
        excerpt:
            "Targeted stretches, nerve glides and strengthening poses to relieve sciatic nerve compression and prevent recurrence.",
        date: "2026-02-18",
        tag: "Therapeutic",
        emoji: "⚡",
        color: "from-sky-400/20 to-blue-900/20",
        readingTime: "8 min read",
        content: `Sciatica — pain that radiates along the sciatic nerve from the lower back down through the hip and leg — affects millions of people worldwide. It's often caused by a herniated disc, bone spur or piriformis syndrome compressing the nerve. While severe cases require medical attention, yoga-based movement therapy is one of the most effective long-term strategies for relief and prevention.

## Understanding Sciatica

The sciatic nerve is the longest nerve in the body, running from the lumbar spine through the buttock and down the back of each leg. When it's compressed or irritated, you feel:

- Sharp, shooting pain in the buttock or back of the leg
- Numbness or tingling in the affected leg
- Difficulty sitting for extended periods
- Pain that worsens with forward bending

## The OorjaKull Sciatica Protocol

Our therapeutic yoga approach focuses on three pillars: **release, strengthen, prevent**.

### Release: Piriformis & Hip Flexor Stretches

The piriformis muscle sits directly over the sciatic nerve. When tight, it compresses the nerve and causes pain. These poses target the piriformis:

- **Supta Kapotasana** (Reclined Pigeon) — the gold standard for piriformis release. Lie on your back, cross the affected ankle over the opposite knee, and gently pull the bottom thigh toward your chest.
- **Ardha Matsyendrasana** (Seated Twist) — a gentle spinal twist that releases the piriformis and gluteal muscles.
- **Supta Padangusthasana** (Reclined Hand-to-Toe) with a strap — stretches the hamstring without aggravating the nerve.

### Strengthen: Core & Spinal Stability

A weak core and unstable lumbar spine contribute to disc-related sciatica. These poses build the support system:

- **Setu Bandhasana** (Bridge Pose) — strengthens the glutes, hamstrings and lower back while decompressing the spine.
- **Plank Variations** — builds deep core stability to protect the lumbar region.
- **Bhujangasana** (Cobra Pose) — gentle spinal extension that can help retract a bulging disc away from the nerve.

### Prevent: Nerve Glides & Mobility

Nerve glides are gentle movements that help the sciatic nerve slide freely through the surrounding tissue:

- **Seated Sciatic Nerve Glide:** Sit on a chair, extend the affected leg, flex the foot and gently bring the chin to chest simultaneously. This mobilises the nerve without stretching it aggressively.
- **Cat-Cow (Marjaryasana-Bitilakasana):** Gentle spinal flexion and extension improves disc hydration and nerve mobility.

## Important Precautions

- **Avoid deep forward folds** if you have a disc herniation — these compress the disc further into the nerve
- **Never push through sharp nerve pain** — dull muscle stretch is fine, shooting nerve pain is a stop signal
- **Warm up first** — cold muscles and nerves are more vulnerable to injury

## AI-Guided Sciatica Sessions

OorjaKull's AI platform includes a dedicated sciatica relief sequence. Madhu monitors your alignment in real-time (especially in poses where knee tracking matters) and adjusts the hold time based on your history.

Many of our students report significant improvement within 4-6 weeks of consistent practice — 3-4 sessions per week of 20-30 minutes each.

Your body has the capacity to heal. Give it the right movement, and the pain will ease.`,
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return BLOG_POSTS.map((p) => p.slug);
}
