import { Check } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { rideBookingContent } from "@/config/site";
import { cn } from "@/lib/cn";

export function RideBooking() {
  return (
    <section
      id="ride-booking"
      className={cn(
        "relative w-full overflow-hidden bg-background pb-8 pt-4 md:pb-16 md:pt-8",
        "max-lg:pb-0",
        "backdrop-blur-[100px]",
        "shadow-[inset_0_2px_44.3px_#FFFFFF26,inset_0_4px_5.8px_#00000040]",
      )}
    >
      <div className="grid items-center gap-10 max-lg:gap-6 lg:grid-cols-2 lg:gap-0">
        <div className="relative order-2 w-full max-lg:-mb-2 lg:order-1 lg:min-h-[520px]">
          <div className="relative aspect-[885/748] w-full max-lg:aspect-[885/500] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
            <div className="absolute top-0 left-1/2 z-0 aspect-[785/360] w-[82%] -translate-x-[calc(50%+20px)] translate-y-8 max-lg:translate-y-4">
              <Image
                src="/images/ride-booking/img-bg.png"
                alt=""
                fill
                className="object-cover object-top opacity-70 brightness-125 contrast-110"
                aria-hidden
              />
            </div>

            <Image
              src="/images/ride-booking/ridebookingimg.png"
              alt="Sports car for ride booking"
              fill
              className="relative z-10 origin-bottom object-contain object-bottom max-lg:translate-y-10 max-lg:scale-[1.15] lg:origin-bottom-left lg:scale-[1.28] lg:translate-x-[8px] lg:translate-y-12 lg:object-left-bottom"
            />
          </div>
        </div>

        <div className="order-1 space-y-6 px-3 sm:px-4 lg:order-2 lg:pl-10 lg:pr-[max(0.75rem,calc((100vw-80rem)/2+0.75rem))]">
          <div className="inline-flex items-center gap-2.5">
            <Image
              src="/images/ride-booking/icon.png"
              alt=""
              width={20}
              height={20}
              className="h-10 w-10 object-contain"
            />
            <span className="text-base font-medium text-white">
              {rideBookingContent.badge}
            </span>
          </div>

          <h2 className="whitespace-nowrap border-0 bg-transparent font-display text-[clamp(1.25rem,3.5vw,3.125rem)] font-normal leading-[1.15] text-white shadow-none">
            {rideBookingContent.headline}
          </h2>

          <p className="max-w-xl text-base leading-6 text-muted-foreground">
            {rideBookingContent.description}
          </p>

          <ul className="space-y-4">
            {rideBookingContent.bullets.map((bullet) => (
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
            href={rideBookingContent.cta.href}
            size="lg"
            className="shadow-[inset_0_5px_10.5px_rgba(255,255,255,0.25)]"
          >
            {rideBookingContent.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
