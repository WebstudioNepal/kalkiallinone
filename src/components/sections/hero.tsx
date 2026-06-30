import { StoreButtons } from "@/components/ui/store-buttons";
import { heroContent } from "@/config/site";
import { HeroFeatureBar } from "@/components/sections/hero-feature-bar";
import { cn } from "@/lib/cn";

/**
 * Desktop positions derived from Figma frame 1440×1251 (node 624:2790).
 * Mobile uses flex column flow; md+ uses percentage-based absolute layout.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-x-hidden bg-background max-md:overflow-y-visible md:overflow-visible"
    >
      <div
        className={cn(
          "relative w-full",
          "max-md:aspect-auto max-md:min-h-0 max-md:px-4 max-md:pb-16",
          "md:overflow-visible",
          "aspect-[1440/1251] min-h-[640px] pb-6 md:pb-10",
          "bg-[url('/images/hero-bg-img.png')] bg-[length:100%_100%] bg-position-[center_top] bg-no-repeat",
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,23,106,0)_59.43%)]"
          aria-hidden
        />

        <div
          className={cn(
            "relative z-10 flex w-full flex-col items-center gap-4 max-md:min-h-[520px] max-md:pt-32 max-md:pb-2",
            "md:pointer-events-none md:absolute md:inset-0 md:block md:min-h-0 md:gap-5 md:pt-0 md:pb-0",
          )}
        >
          <h1
            className={cn(
              "pointer-events-auto w-full max-w-lg text-center",
              "font-display text-[clamp(1.75rem,4.3vw,3.875rem)] leading-[1.15] text-white",
              "md:absolute md:left-1/2 md:max-w-none md:-translate-x-1/2",
              "md:top-[18.86%] md:w-[57.36%]",
            )}
          >
            {heroContent.headline}
          </h1>

          <p
            className={cn(
              "pointer-events-auto w-full max-w-lg text-center",
              "text-[clamp(0.875rem,1.1vw,1rem)] leading-snug text-muted-foreground",
              "md:absolute md:left-1/2 md:max-w-none md:-translate-x-1/2 md:leading-6",
              "md:top-[31.89%] md:w-[68.68%]",
            )}
          >
            {heroContent.description}
          </p>

          <div
            id="download"
            className={cn(
              "pointer-events-auto w-full max-md:-mt-1 max-md:max-w-full",
              "md:absolute md:left-1/2 md:max-w-none md:-translate-x-1/2",
              "md:top-[39.33%] md:w-[29.58%]",
            )}
          >
            <StoreButtons
              size="xs"
              className={cn(
                "grid w-full grid-cols-3 items-center gap-0 md:hidden",
                "[&>a]:min-w-0 [&>a]:w-full [&>a]:max-w-full [&>a]:flex-none [&>a]:basis-auto",
                "[&>a:first-child]:col-start-1 [&>a:first-child]:justify-self-start",
                "[&>a:last-child]:col-start-3 [&>a:last-child]:translate-x-2 [&>a:last-child]:justify-self-end",
              )}
            />
            <StoreButtons
              size="large"
              className="hidden gap-6 md:flex"
            />
          </div>

          <div
            className={cn(
              "pointer-events-auto relative z-20 hidden w-full",
              "md:absolute md:left-1/2 md:block md:-translate-x-1/2",
              "md:bottom-[-11%] md:w-[90.56%]",
            )}
          >
            <HeroFeatureBar />
          </div>
        </div>
      </div>

      <div className="relative z-20 -mt-28 px-4 pb-8 sm:-mt-36 md:hidden">
        <HeroFeatureBar />
      </div>

      <div
        className="pointer-events-none hidden w-full md:block"
        style={{ height: "calc(max(640px, 100vw * 1251 / 1440) * 0.11)" }}
        aria-hidden
      />
    </section>
  );
}
