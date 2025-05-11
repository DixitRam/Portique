import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
    try {
        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
                        {/* Background */}
                        <rect width="1200" height="630" fill="#f8fafc" />

                        {/* Gradient background blobs */}
                        <defs>
                            <radialGradient id="blob1Gradient" cx="0.3" cy="0.3" r="0.7">
                                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                                <stop offset="100%" stopColor="rgba(37, 99, 235, 0.2)" />
                            </radialGradient>

                            <radialGradient id="blob2Gradient" cx="0.7" cy="0.7" r="0.7">
                                <stop offset="0%" stopColor="rgba(29, 78, 216, 0.5)" />
                                <stop offset="100%" stopColor="rgba(30, 64, 175, 0.2)" />
                            </radialGradient>

                            <radialGradient id="blob3Gradient" cx="0.5" cy="0.5" r="0.7">
                                <stop offset="0%" stopColor="rgba(96, 165, 250, 0.4)" />
                                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
                            </radialGradient>

                            <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
                            </filter>

                            <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                            </filter>

                            <filter id="blur3" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
                            </filter>

                            <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#121826" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>

                            <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#1d4ed8" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>

                            <linearGradient id="portiqueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#1d4ed8" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>

                            <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                            </filter>
                        </defs>

                        {/* Blobs */}
                        <circle cx="250" cy="200" r="300" fill="url(#blob1Gradient)" filter="url(#blur1)" />
                        <circle cx="950" cy="450" r="250" fill="url(#blob2Gradient)" filter="url(#blur2)" />
                        <circle cx="600" cy="350" r="200" fill="url(#blob3Gradient)" filter="url(#blur3)" />

                        {/* Content container */}
                        <rect x="150" y="160" width="900" height="350" rx="16" fill="rgba(255, 255, 255, 0.7)" />

                        {/* Portique centered in card */}
                        <text x="600" y="230" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="800" fill="url(#portiqueGradient)" textAnchor="middle">Portique</text>

                        {/* Main title */}
                        <text x="600" y="310" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="800" fill="url(#titleGradient)" textAnchor="middle">Discover Creative</text>
                        <text x="600" y="390" fontFamily="Arial, sans-serif" fontSize="64" fontWeight="800" fill="url(#highlightGradient)" textAnchor="middle">Portfolio Templates</text>

                        {/* Subtitle */}
                        <text x="600" y="450" fontFamily="Arial, sans-serif" fontSize="22" fill="#4b5563" textAnchor="middle">Showcase your work with beautifully crafted templates</text>
                        <text x="600" y="480" fontFamily="Arial, sans-serif" fontSize="22" fill="#4b5563" textAnchor="middle">designed for the modern creative professional.</text>

                        {/* Decorative elements */}
                        <circle cx="200" cy="250" r="6" fill="#3b82f6" filter="url(#glow)" />
                        <circle cx="1000" cy="400" r="8" fill="#1d4ed8" filter="url(#glow)" />
                        <circle cx="900" cy="250" r="5" fill="#60a5fa" filter="url(#glow)" />
                        <circle cx="300" cy="500" r="7" fill="#3b82f6" filter="url(#glow)" />
                        <circle cx="700" cy="200" r="4" fill="#1d4ed8" filter="url(#glow)" />
                    </svg>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        )
    
        } catch (e: unknown) {
                if (e instanceof Error) {
                            console.log(e.message)
                                    } else {
                                                console.log('Unknown error', e)
                                                        }
                                                                return new Response(`Failed to generate the image`, {
                                                                            status: 500,
                                                                                    })
                                                                                        }
                                                                                    }