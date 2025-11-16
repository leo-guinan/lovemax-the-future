import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Love Max the Future',
  description: 'The first asset that rewards humans for creating better futures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

