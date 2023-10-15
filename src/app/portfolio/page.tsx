import Portfolio from "@/components/Portfolio/Portfolio";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Selene Tecnologia",
  description: "Página Inicial Selene",
  icons: "/icon.svg",
};

export default function PortfolioPage() {
  return (
  <div>
    <Portfolio />
  </div>
  );
}
