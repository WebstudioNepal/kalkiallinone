import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="about" className="sr-only" aria-label="About" />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
