import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sonora - Premium Music Streaming',
  description: 'Experience music like never before with AI-powered recommendations, 3D visualizations, and immersive audio streaming.',
  keywords: 'music, streaming, AI, 3D, audio, playlists, songs',
  authors: [{ name: 'Sonora Team' }],
  openGraph: {
    title: 'Sonora - Premium Music Streaming',
    description: 'Experience music like never before with AI-powered recommendations, 3D visualizations, and immersive audio streaming.',
    images: ['https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=630'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}