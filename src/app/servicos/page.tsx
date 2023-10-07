import type { Metadata } from "next";
import Products from "@/components/Products Page/Products/Products";
export const metadata: Metadata = {
  title: "Serviços e Produtos - Selene Tecnologia",
  description: "Página Inicial Selene",
  icons: "./icon.svg",
  
};

export default function ProductsPage() {
  return (
    <main>
      <Products />
    </main>
  );
}
