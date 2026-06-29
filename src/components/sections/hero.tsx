import { StoreButtons } from "@/components/ui/store-buttons";
import { heroContent } from "@/config/site";
import { HeroFeatureBar } from "@/components/sections/hero-feature-bar";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/cn";

/**
 * Positions derived from Figma frame 1440×1251 (node 624:2790).
 * Values are percentages so they scale with the hero canvas.
 */
const layout = {
  headline: { top: "18.86%", width: "57.36%" },
  description: { top: "31.89%", width: "68.68%" },
  storeButtons: { top: "39.33%", width: "29.58%" },
  featureBar: { bottom: "-18.5%", width: "90.56%" },
} as const;

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-visible bg-background">
      <div
        className={cn(
          "relative w-full overflow-visible",
          "aspect-[1440/1251] min-h-[640px] pb-6 md:pb-10",
          "bg-[url('/images/hero-bg-img.png')] bg-[length:100%_100%] bg-position-[center_top] bg-no-repeat",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,23,106,0)_59.43%)]"
          aria-hidden
        />

        <Header />

        <div className="pointer-events-none absolute inset-0 z-10">
          <h1
            className={cn(
              "pointer-events-auto absolute left-1/2 -translate-x-1/2 text-center",
              "font-display text-[clamp(1.75rem,4.3vw,3.875rem)] leading-[1.15] text-white",
            )}
            style={{ top: layout.headline.top, width: layout.headline.width }}
          >
            {heroContent.headline}
          </h1>

          <p
            className={cn(
              "pointer-events-auto absolute left-1/2 -translate-x-1/2 text-center",
              "text-[clamp(0.875rem,1.1vw,1rem)] leading-6 text-muted-foreground",
            )}
            style={{ top: layout.description.top, width: layout.description.width }}
          >
            {heroContent.description}
          </p>

          <div
            id="download"
            className="pointer-events-auto absolute left-1/2 -translate-x-1/2"
            style={{ top: layout.storeButtons.top, width: layout.storeButtons.width }}
          >
            <StoreButtons size="large" className="gap-6" />
          </div>

          <div
            className="pointer-events-auto absolute left-1/2 z-20 -translate-x-1/2"
            style={{ bottom: layout.featureBar.bottom, width: layout.featureBar.width }}
          >
            <HeroFeatureBar />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none w-full"
        style={{ height: "calc(max(640px, 100vw * 1251 / 1440) * 0.185)" }}
        aria-hidden
      />
    </section>
  );
}
