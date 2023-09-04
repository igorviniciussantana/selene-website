"use client"
import "@/styles/globals.scss";
import { Space_Grotesk } from "next/font/google";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import { useEffect } from 'react';

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
