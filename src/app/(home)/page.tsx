import Hero from '@/components/Hero Section/Hero'
import Image from 'next/image'

import type { Metadata } from 'next'
import Info from '@/components/Info Section/Info'
import Speak from '@/components/Speak Section/Speak'
export const metadata: Metadata = {
  title: 'Página Inicial - Selene Tecnologia',
  description: 'Página Inicial Selene',
  icons: './icon.svg'
}


export default function Home() {
  return (
    <main>
    <Hero />
    <Info />
    <Speak />
    </main>
  )
}
