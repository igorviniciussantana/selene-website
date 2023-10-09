import Process from "@/components/Process Page/Process/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços e Produtos - Selene Tecnologia",
  description: "Página Inicial Selene",
  icons: "./icon.svg",
  
};

export default function ProcessPage() {
  return (
    <main>
      <Process />
    </main>
  );
}
