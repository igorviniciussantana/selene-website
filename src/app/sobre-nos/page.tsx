


import AboutUs from "@/components/About Us Page/AboutUs";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nós - Selene Tecnologia',
  description: 'Conheça mais sobre nossa história e os valores da nossa empresa.',
  icons: '/icon.svg',
  category: 'Tecnologia',
  creator: 'Selene',
  keywords: ['tecnologia', 'desenvolvimento web', 'desenvolvimento']
  
}

export default function AboutUsPage() {
  return (
    <div>
     <AboutUs />
    </div>
  );
}
