import Blog from "@/components/Blog/Blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Selene Tecnologia",
  description: "Página Inicial Selene",
  icons: "/icon.svg",
};

export default function BlogPage() {
  return (
  <div>
    <Blog />
  </div>
  );
}
