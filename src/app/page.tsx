import { Footer } from "@/components/layout/footer";
import { Cta } from "@/components/sections/cta";
import { FoodDelivery } from "@/components/sections/food-delivery";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FoodDelivery />
      <main className="flex-1">
        <section id="about" className="sr-only" aria-label="About" />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
