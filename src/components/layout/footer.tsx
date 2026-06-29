import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerNavLinks, socialLinks } from "@/config/site";
import { cn } from "@/lib/cn";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className={cn(
        "text-secondary-foreground",
        "rounded-t-[24px] md:rounded-t-[32px]",
        "bg-[radial-gradient(ellipse_80%_120%_at_50%_0%,rgba(0,44,204,0.45)_0%,rgba(0,23,106,0.95)_55%,#000b3d_100%)]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
      )}
    >
      <Container className="max-w-[min(92%,90rem)] px-3 py-8 sm:px-4 sm:py-10 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-10">
          <div className="flex justify-center md:justify-start">
            <Link
              href="#home"
              className="relative block h-14 w-[176px] shrink-0 sm:h-16 sm:w-[200px] md:h-[72px] md:w-[230px] lg:h-24 lg:w-[300px]"
            >
              <Image
                src="/images/logo.png"
                alt="Kalki Sena Drive"
                fill
                className="object-contain object-left"
              />
            </Link>
          </div>

          <nav
            className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-3 sm:gap-y-4 md:flex md:flex-wrap md:items-center md:justify-center md:gap-8 lg:gap-12"
            aria-label="Footer navigation"
          >
            {footerNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-center text-sm font-medium text-white/90 transition-colors hover:text-white sm:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 sm:gap-4 md:items-end">
            <p className="text-center text-xs text-white/70 sm:text-sm md:text-right">
              © {year} Kalki Sena Drive, All rights reserved.
            </p>
            <div className="flex items-center gap-5 sm:gap-6">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full text-white/90 transition-colors",
                    "hover:bg-white/10 hover:text-white",
                    "h-10 w-10 sm:h-11 sm:w-11",
                  )}
                >
                  <Icon icon={icon} className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
