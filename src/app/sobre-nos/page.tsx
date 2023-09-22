import type { Metadata } from "next";
import AboutUs from "@/components/About Us Page/About Us/AboutUs";

export const metadata: Metadata = {
  title: "Sobre Nós - Selene Tecnologia",
  description: "Página Inicial Selene",
  icons: "./icon.svg",
};

export default function About() {
  return (
    <main>
      <AboutUs />
    </main>
  );
}
