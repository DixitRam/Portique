import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
    try {
        return new ImageResponse(
            <div
                style={{
                    background:
                        'radial-gradient(circle at top left, #d7e5f7 0%, #4b89dc 30%, transparent 70%),' +
                        'radial-gradient(circle at bottom right, #d7e5f7 0%, #4b89dc 30%, transparent 70%)',
                    backgroundColor: '#4b89dc',
                    width: '100%',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '1rem',
                }}
            >
                <h1
                    style={{
                        fontSize: '4rem',
                        fontWeight: 800,
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        marginBottom: '0.5rem',
                    }}
                >
                    Portique
                </h1>
                <p
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: 'white',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    Portfolio Builder
                </p>
            </div>,
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