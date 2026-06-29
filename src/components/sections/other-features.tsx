import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { otherFeatures, otherFeaturesContent } from "@/config/site";
import { cn } from "@/lib/cn";

/** Figma frame 1984080401 — ellipse sizes and tops at 1440×615 */
const ellipses = [
  { size: 970, top: 74 },
  { size: 781, top: 263 },
  { size: 587, top: 457 },
] as const;

type OtherFeatureCardProps = {
  label: string;
  icon: string;
  href: string;
};

function OtherFeatureCard({ label, icon, href }: OtherFeatureCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex min-h-24 items-center justify-between gap-2.5 rounded-lg px-2.5 py-6",
        "bg-[rgba(243,243,243,0.06)] backdrop-blur-[38.15px]",
        "transition-colors hover:bg-[rgba(243,243,243,0.1)]",
      )}
    >
      <span className="flex min-w-0 flex-1 items-center gap-2.5">
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 shrink-0 object-contain"
        />
        <span className="text-base leading-6 text-white">{label}</span>
      </span>
      <ChevronRight className="h-6 w-6 shrink-0 text-white" strokeWidth={2} aria-hidden />
    </a>
  );
}

export function OtherFeatures() {
  return (
    <section
      id="other-features"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#00092A_0%,#002DD0_148.74%)] py-[52px] pb-16 md:min-h-[615px]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {ellipses.map((ellipse) => (
          <div
            key={ellipse.size}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 rounded-full bg-[#004CFF]",
              "blur-[17px]",
              "shadow-[0_-38px_106.1px_rgba(113,113,113,0.25),inset_0_4px_85.7px_69px_#001D61]",
            )}
            style={{
              width: `min(${ellipse.size}px, ${((ellipse.size / 1440) * 100).toFixed(2)}vw)`,
              height: `min(${ellipse.size}px, ${((ellipse.size / 1440) * 100).toFixed(2)}vw)`,
              top: `${((ellipse.top / 615) * 100).toFixed(2)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <header className="px-4 text-center">
          <h2 className="font-display text-[clamp(2rem,4.3vw,3.875rem)] leading-[1.15] text-white">
            {otherFeaturesContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[843px] text-center text-base leading-6 text-white/80">
            {otherFeaturesContent.description}
          </p>
        </header>

        <div className="mx-auto mt-[28px] w-full  px-[max(1rem,calc((100vw-77.3125rem)/2))]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherFeatures.map((feature) => (
              <OtherFeatureCard
                key={feature.label}
                label={feature.label}
                icon={feature.icon}
                href={feature.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
