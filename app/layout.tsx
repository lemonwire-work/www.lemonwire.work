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
  description: 'The decentralized, end-to-end encrypted Google Workspace alternative. Email, Chat, Calendars, Wiki, and more - all powered by Nostr.',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
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
