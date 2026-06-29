import { Footer } from "@/components/layout/footer";
import { Cta } from "@/components/sections/cta";
import { FoodDelivery } from "@/components/sections/food-delivery";
import { FreeCheckup } from "@/components/sections/free-checkup";
import { Hero } from "@/components/sections/hero";
import { RideBooking } from "@/components/sections/ride-booking";

export default function Home() {
  return (
    <>
      <Hero />
      <FoodDelivery />
      <RideBooking />
      <FreeCheckup />
      <main className="flex-1">
        <section id="about" className="sr-only" aria-label="About" />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
