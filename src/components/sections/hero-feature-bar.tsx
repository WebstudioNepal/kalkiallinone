import Image from "next/image";
import { heroContent, heroFeatures } from "@/config/site";
import { cn } from "@/lib/cn";

export function HeroFeatureBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-6 rounded-2xl px-6 py-4 md:gap-9 md:px-8 md:py-9",
        "bg-[linear-gradient(90deg,rgba(65,106,255,0.19)_0%,rgba(0,44,204,0.38)_100%)]",
        "shadow-[inset_0_4px_5.8px_rgba(0,0,0,0.25),inset_0_2px_14px_rgba(255,255,255,0.15)]",
        "backdrop-blur-[56px]",
        className,
      )}
    >
      <h2 className="font-display text-center text-[clamp(1.5rem,3.5vw,3.125rem)] leading-[1.15] text-white md:leading-[57px]">
        {heroContent.featureBarTitle}
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {heroFeatures.map((feature) => (
          <article
            key={feature.title}
            className="flex h-[50px] items-center gap-2 rounded-lg bg-[rgba(248,250,255,0.08)] py-4 pl-3 pr-2 sm:h-[102px] sm:gap-2"
          >

            <Image
              src={feature.icon}
              alt=""
              width={24}
              height={24}
              className="h-10 w-10 object-contain"
            />
            <div className="min-w-0">
              <p className="text-base leading-[27px] text-white sm:text-lg">{feature.title}</p>
              <p className="text-xs leading-[18px] text-white">{feature.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
