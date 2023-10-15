import type { Metadata } from "next";
import Contact from "@/components/Contact Page/Contact";

export const metadata: Metadata = {
  title: "Contato - Selene Tecnologia",
  description: "Página Inicial Selene",
  icons: "./icon.svg",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
