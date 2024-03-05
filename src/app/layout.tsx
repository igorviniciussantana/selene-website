"use client"
import "@/styles/globals.scss";
import { Space_Grotesk } from "next/font/google";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import AOS from 'aos';
import { useEffect } from 'react'
import 'aos/dist/aos.css';

const space_grtsk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 800
    });
  }, []);
  return (
    <html lang="pt-br">
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N9QNK29V');</script>
<!-- End Google Tag Manager -->
</head>
      <body className={space_grtsk.className}>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9QNK29V"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
