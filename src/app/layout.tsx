import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Menu from '@/components/Menu/Menu'

const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Página Inicial - Selene Tecnologia',
  description: 'Página Inicial Selene',
  icons: './icon.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <Menu/>
        {children}</body>
    </html>
  )
}
