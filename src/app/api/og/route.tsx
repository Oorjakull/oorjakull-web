import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        // Fetch dynamic parameters
        const title = searchParams.get('title') || "Discover Intelligent Wellness";
        const tag = searchParams.get('tag') || "OORJAKULL PLATFORM";
        const subtitle = searchParams.get('subtitle') || "Ancient tradition powered by modern AI tracking. Practice smarter.";

        // Basic font sizes depending on length
        const titleSize = title.length > 50 ? 64 : 84;

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f5eedd', // Background (warm parchment)
                        fontFamily: 'Inter, "Segoe UI", sans-serif',
                        position: 'relative',
                        padding: '80px',
                    }}
                >
                    {/* Ambient Glows */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-20%',
                            right: '-10%',
                            width: '800px',
                            height: '800px',
                            background: '#2d6a4f',
                            opacity: 0.12,
                            borderRadius: '50%',
                            filter: 'blur(100px)',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-20%',
                            left: '-10%',
                            width: '800px',
                            height: '800px',
                            background: '#b8832a',
                            opacity: 0.1,
                            borderRadius: '50%',
                            filter: 'blur(100px)',
                        }}
                    />

                    {/* Logo/Header Space */}
                    <div
                        style={{
                            display: 'flex',
                            position: 'absolute',
                            top: 60,
                            left: 80,
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                color: '#2d6a4f',
                                fontSize: 32,
                                fontWeight: 800,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            OorjaKull
                        </div>
                    </div>

                    {/* Content Section */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            width: '100%',
                            maxWidth: '1000px',
                            gap: '24px',
                            marginTop: '40px'
                        }}
                    >
                        {tag && (
                            <div
                                style={{
                                    fontSize: 24,
                                    fontWeight: 700,
                                    color: '#b8832a', // Secondary Gold
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.25em',
                                    padding: '8px 24px',
                                    border: '2px solid rgba(184, 131, 42, 0.3)',
                                    borderRadius: '100px',
                                    backgroundColor: 'rgba(184, 131, 42, 0.05)',
                                    display: 'flex',
                                }}
                            >
                                {tag}
                            </div>
                        )}

                        <h1
                            style={{
                                fontSize: titleSize,
                                fontWeight: 400,
                                color: '#2c1f0e',
                                lineHeight: 1.1,
                                margin: 0,
                            }}
                        >
                            {title}
                        </h1>

                        {subtitle && (
                            <p
                                style={{
                                    fontSize: 32,
                                    fontWeight: 300,
                                    color: '#7a6248',
                                    lineHeight: 1.4,
                                    margin: 0,
                                    maxWidth: '85%',
                                }}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Footer decoration */}
                    <div style={{
                        position: 'absolute',
                        bottom: 60,
                        left: 80,
                        display: 'flex',
                        fontSize: 24,
                        color: '#4e9d78',
                        fontWeight: 500,
                        letterSpacing: '0.05em'
                    }}>
                        oorjakull.com
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.error(`OG Generation Error: ${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
