import Hero from '@/components/Hero Section/Hero'
import Image from 'next/image'

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Página Inicial - Selene Tecnologia',
  description: 'Página Inicial Selene',
  icons: './icon.svg'
}


export default function Home() {
  return (
    <main>
    <Hero />
    </main>
  )
}
