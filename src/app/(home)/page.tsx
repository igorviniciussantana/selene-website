import Hero from '@/components/Home Page/Hero Section/Hero'
import Image from 'next/image'
import type { Metadata } from 'next'
import Info from '@/components/Home Page/Info Section/Info'
import Speak from '@/components/Home Page/Speak Section/Speak'


export const metadata: Metadata = {
  title: 'Página Inicial - Selene Tecnologia',
  description: 'Página Inicial Selene',
  icons: './icon.svg',
  category: 'Tecnologia',
  creator: 'Selene',
  keywords: ['tecnologia', 'desenvolvimento web', 'desenvolvimento']
  
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
