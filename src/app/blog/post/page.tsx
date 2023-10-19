import { Metadata } from "next";
import Post from "@/components/Blog/Post";

export const metadata: Metadata = {
  title: "Blog | Selene Tecnologia",
  description: "Página Inicial Selene",
  icons: "/icon.svg",
};


export default function PostPage() {

  return (
    <Post />
  );
}
