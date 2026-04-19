import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lemonwire - Nostr-Powered E2EE Workspace',
  description: 'The decentralized, end-to-end encrypted Google Workspace alternative. Unlimited users, E2EE messaging, self-sovereign identity - one flat $45k lifetime cost.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: 'Lemonwire - Nostr-Powered E2EE Workspace',
    description: 'The decentralized, end-to-end encrypted Google Workspace alternative. Unlimited users, E2EE messaging, self-sovereign identity - one flat $45k lifetime cost.',
    url: 'https://lemonwire.work',
    siteName: 'Lemonwire',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lemonwire - The decentralized, E2EE Google Workspace alternative',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lemonwire - Nostr-Powered E2EE Workspace',
    description: 'The decentralized, end-to-end encrypted Google Workspace alternative. Unlimited users, E2EE messaging, self-sovereign identity - one flat $45k lifetime cost.',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
