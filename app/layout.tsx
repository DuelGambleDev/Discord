import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Assicurati che questo file esista e contenga i tuoi stili globali

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DuelGamble Discord Invite',
  description: 'Join our vibrant Discord community at DuelGamble',
  // Add any additional metadata here if needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
