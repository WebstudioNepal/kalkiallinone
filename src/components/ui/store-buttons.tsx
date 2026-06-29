import { Icon } from "@iconify/react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

type StoreButtonsProps = {
  className?: string;
  size?: "xs" | "small" | "default" | "large";
};

export function StoreButtons({ className, size = "default" }: StoreButtonsProps) {
  const isLarge = size === "large";
  const isSmall = size === "small";
  const isXs = size === "xs";

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-center",
        isXs ? "gap-1.5" : isSmall ? "gap-3" : "gap-6",
        className,
      )}
    >
      <Link
        href={siteConfig.links.googlePlay}
        className={cn(
          "inline-flex items-center gap-2.5 rounded-lg border border-transparent px-4 py-3 text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.25)] transition-opacity hover:opacity-90",
          "bg-white/16",
          isLarge && "min-h-[68px] min-w-[201px] px-6",
          isSmall && "min-h-10 min-w-0 flex-1 basis-[calc(50%-0.25rem)] gap-1.5 rounded-md px-2 py-2 sm:px-3",
          isXs && "min-h-8 min-w-0 flex-1 basis-[calc(50%-0.1875rem)] gap-1 rounded-md px-1.5 py-1.5",
          !isLarge && !isSmall && !isXs && "min-h-12",
        )}
      >
        <Icon
          icon="logos:google-play-icon"
          className={cn(
            "shrink-0",
            isLarge ? "h-11 w-10" : isXs ? "h-5 w-[18px]" : isSmall ? "h-7 w-6" : "h-9 w-8",
          )}
          aria-hidden
        />
        <span className="flex flex-col items-start leading-none">
          <span
            className={cn(
              "text-white/90",
              isXs ? "text-[7px]" : isSmall ? "text-[8px]" : "text-[10px]",
            )}
          >
            GET IT ON
          </span>
          <span
            className={cn(
              "font-medium",
              isLarge ? "text-lg" : isXs ? "text-xs" : isSmall ? "text-sm" : "text-base",
            )}
          >
            Google Play
          </span>
        </span>
      </Link>

      <Link
        href={siteConfig.links.appStore}
        className={cn(
          "inline-flex items-center gap-2.5 rounded-md border border-transparent bg-black px-4 py-3 text-white shadow-[inset_0_5px_10.5px_rgba(255,255,255,0.25)] transition-opacity hover:opacity-90",
          isLarge && "min-h-[68px] min-w-[201px] rounded-md px-6",
          isSmall && "min-h-10 min-w-0 flex-1 basis-[calc(50%-0.25rem)] gap-1.5 rounded-md px-2 py-2 sm:px-3",
          isXs && "min-h-8 min-w-0 flex-1 basis-[calc(50%-0.1875rem)] gap-1 rounded-md px-1.5 py-1.5",
          !isLarge && !isSmall && !isXs && "min-h-12",
        )}
      >
        <AppleIcon
          className={cn(
            "shrink-0",
            isLarge ? "h-11 w-11" : isXs ? "h-5 w-5" : isSmall ? "h-7 w-7" : "h-9 w-9",
          )}
        />
        <span className="flex flex-col items-start leading-none">
          <span
            className={cn(
              "text-white/90",
              isXs ? "text-[7px]" : isSmall ? "text-[8px]" : "text-[10px]",
            )}
          >
            Download on the
          </span>
          <span
            className={cn(
              "font-medium",
              isLarge ? "text-lg" : isXs ? "text-xs" : isSmall ? "text-sm" : "text-base",
            )}
          >
            Apple Store
          </span>
        </span>
      </Link>
    </div>
  );
}
