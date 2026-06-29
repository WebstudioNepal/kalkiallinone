import { Check } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { freeCheckupContent } from "@/config/site";
import { cn } from "@/lib/cn";

export function FreeCheckup() {
  return (
    <section
      id="free-checkup"
      className="relative w-full overflow-hidden bg-background pb-8 pt-4 md:pb-16 md:pt-8"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
        <div className="space-y-6 px-3 sm:px-4 lg:pl-[max(0.75rem,calc((100vw-80rem)/2+0.75rem))] lg:pr-10">
          <div className="inline-flex items-center gap-2.5">
            <Image
              src="/images/free-checkup/icon.png"
              alt=""
              width={20}
              height={20}
              className="h-10 w-10 object-contain"
            />
            <span className="text-base font-medium text-white">
              {freeCheckupContent.badge}
            </span>
          </div>

          <h2 className="whitespace-nowrap border-0 bg-transparent font-display text-[clamp(1.25rem,3.5vw,3.125rem)] font-normal leading-[1.15] text-white shadow-none">
            {freeCheckupContent.headline}
          </h2>

          <p className="max-w-xl text-base leading-6 text-muted-foreground">
            {freeCheckupContent.description}
          </p>

          <ul className="space-y-4">
            {freeCheckupContent.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary",
                    "shadow-[inset_0_2px_4px_rgba(255,255,255,0.25)]",
                  )}
                >
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden />
                </span>
                <span className="text-sm leading-6 text-white/90">{bullet}</span>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={freeCheckupContent.cta.href}
            size="lg"
            className="shadow-[inset_0_5px_10.5px_rgba(255,255,255,0.25)]"
          >
            {freeCheckupContent.cta.label}
          </ButtonLink>
        </div>

        <div className="relative w-full lg:min-h-[520px]">
          <div className="relative aspect-[885/748] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
            <div className="absolute bottom-0 left-1/2 z-0 aspect-[785/360] w-[100%] -translate-x-1/2">
              <Image
                src="/images/free-checkup/img-bg.png"
                alt=""
                fill
                className="object-cover object-bottom opacity-70 brightness-125 contrast-110"
                aria-hidden
              />
            </div>

            <Image
              src="/images/free-checkup/freecheckupsideimg.png"
              alt="Doctor offering free clinic check-up"
              fill
              className="relative z-10 origin-bottom object-contain object-bottom lg:origin-bottom-right lg:scale-[0.9] lg:-translate-x-[100px] lg:translate-y-0 lg:object-right-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
