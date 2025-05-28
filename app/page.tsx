import Image from "next/image";
import Hero from "./components/Hero";
import RootLayout from "./layout";
import Products from "./components/Products";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Contact />
    </main>
  );
}
