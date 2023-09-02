import '@/styles/globals.scss'
import { Space_Grotesk } from 'next/font/google'
import Menu from '@/components/Menu/Menu'

const space_grotesk = Space_Grotesk({ subsets: ['latin'] })


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
