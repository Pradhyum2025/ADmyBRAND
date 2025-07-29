import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Amplify Your Marketing with AI',
  description: 'ADmyBRAND AI Suite provides intelligent tools to automate campaigns, generate content, and deliver unparalleled ROI.',
  keywords: 'AI marketing, campaign automation, content generation, ROI optimization, digital marketing',
  authors: [{ name: 'ADmyBRAND' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
} 