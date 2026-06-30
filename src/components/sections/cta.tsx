import { Download, Star } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { StoreButtons } from "@/components/ui/store-buttons";
import { ctaContent } from "@/config/site";
import { cn } from "@/lib/cn";

export function Cta() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-background pb-8 pt-4 md:pb-16 md:pt-8"
    >
      <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[2fr_3fr] lg:gap-0">
        <div className="relative w-full px-3 sm:px-4 lg:min-h-[520px] lg:pl-[max(0.75rem,calc((100vw-80rem)/2+0.75rem))] lg:pr-4">
          <div
            className={cn(
              "relative mx-auto w-full max-w-[min(100%,340px)] sm:max-w-[420px] lg:max-w-none",
              "aspect-[4/5] sm:aspect-[885/748]",
              "lg:absolute lg:inset-y-0 lg:left-[max(0.75rem,calc((100vw-80rem)/2+0.75rem))] lg:right-auto lg:mx-0 lg:ml-6 lg:aspect-auto lg:h-full lg:w-[calc(100%-1.5rem)]",
            )}
          >
            <Image
              src="/images/cta/ctaimg.png"
              alt="Economic revolution — Nepal as a world leader"
              fill
              className="object-contain object-center lg:object-left"
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 480px"
            />
          </div>
        </div>

        <div className="space-y-4 px-3 sm:space-y-6 sm:px-4 lg:ml-6 lg:pl-4 lg:pr-[max(0.75rem,calc((100vw-80rem)/2+0.75rem))]">
          <h2 className="text-balance border-0 bg-transparent font-display text-[clamp(1.25rem,5vw,3.125rem)] font-normal leading-[1.15] text-white shadow-none">
            {ctaContent.headline}
          </h2>

          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {ctaContent.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-1.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-[#00ff00] text-[#00ff00] sm:h-7 sm:w-7 md:h-8 md:w-8"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span className="text-sm text-white sm:text-base md:text-lg">
              ({ctaContent.rating})
            </span>
          </div>

          <StoreButtons
            size="large"
            className={cn(
              "w-full flex-col items-stretch gap-3",
              "max-lg:[&>a]:min-h-[56px] max-lg:[&>a]:min-w-0 max-lg:[&>a]:w-full",
              "sm:flex-row sm:flex-wrap sm:justify-start sm:[&>a]:w-auto sm:[&>a]:min-w-[180px]",
              "lg:w-auto lg:flex-row lg:gap-6",
            )}
          />
        </div>
      </div>

      <Container className="mt-8 max-w-[min(92%,90rem)] px-3 sm:mt-10 sm:px-4 md:mt-16">
        <div
          className={cn(
            "flex flex-col gap-5 rounded-2xl px-4 py-5 sm:gap-6 sm:rounded-2xl sm:px-6 sm:py-6 md:px-8 md:py-8",
            "lg:flex-row lg:items-center lg:justify-between",
            "bg-[linear-gradient(90deg,rgba(65,106,255,0.19)_0%,rgba(0,44,204,0.38)_100%)]",
            "shadow-[0_0_40px_rgba(65,106,255,0.15),inset_0_4px_5.8px_rgba(0,0,0,0.25),inset_0_2px_14px_rgba(255,255,255,0.15)]",
            "backdrop-blur-[56px]",
          )}
        >
          <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary sm:h-14 sm:w-14",
                "shadow-[inset_0_5px_10.5px_rgba(255,255,255,0.25)]",
              )}
            >
              <Download className="h-6 w-6 text-white sm:h-7 sm:w-7" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-base leading-snug text-white sm:text-lg md:text-xl">
                {ctaContent.bar.subtitle}
              </p>
              <p className="text-balance text-base font-semibold leading-snug text-white sm:text-lg md:text-xl lg:text-2xl">
                {ctaContent.bar.title}
              </p>
            </div>
          </div>

          <StoreButtons
            size="default"
            className={cn(
              "w-full shrink-0 lg:hidden",
              "[&>a]:min-h-[48px] [&>a]:min-w-0 [&>a]:flex-1",
            )}
          />
          <StoreButtons className="hidden shrink-0 lg:flex lg:justify-end" />
        </div>
      </Container>
    </section>
  );
}
