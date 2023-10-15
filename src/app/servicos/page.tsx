import Products from "@/components/Products Page/Products/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços e Produtos - Selene Tecnologia",
  description:
    "Conheça os serviços e produtos oferecidos pela Selene Tecnologia para melhor atender seu negócio",
  icons: "/icon.svg",
};

export default function ProductsPage() {
  return (
    <main>
      <Products />
    </main>
  );
}
