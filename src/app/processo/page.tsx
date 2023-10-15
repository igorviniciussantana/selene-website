import Process from "@/components/Process Page/Process";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Processo de Desenvolvimento | Selene Tecnologia",
  description: "Página Inicial Selene",
  icons: "/icon.svg",
};

export default function ProcessPage() {
  return (
    <div>
      <Process />
    </div>
  );
}
