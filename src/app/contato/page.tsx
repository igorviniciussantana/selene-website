import type { Metadata } from "next";
import Contact from "@/components/Contact Page/Contact";

export const metadata: Metadata = {
  title: "Contato - Selene Tecnologia",
  description: "Entre em contato com a Slene Tecnologia",
  icons: "/icon.svg",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
