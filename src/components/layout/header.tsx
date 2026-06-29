"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/cn";

const navBarStyles = cn(
  "bg-[linear-gradient(90deg,rgba(144,168,255,0.08)_0%,rgba(0,44,204,0.08)_100%)]",
  "shadow-[inset_0_4px_5.8px_rgba(0,0,0,0.25),inset_0_2px_14px_rgba(255,255,255,0.15)]",
  "backdrop-blur-[56px]",
);

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heroNavVisible, setHeroNavVisible] = useState(true);

  const closeMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMenu = useCallback(() => setMobileOpen((open) => !open), []);

  useEffect(() => {
    const foodDelivery = document.getElementById("food-delivery");
    if (!foodDelivery) return;

    const updateVisibility = () => {
      const { top } = foodDelivery.getBoundingClientRect();
      const inHero = top > 24;

      setHeroNavVisible(inHero);
      if (!inHero) setMobileOpen(false);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen, closeMenu]);

  return (
    <header
      className={cn(
        "fixed z-50 transition-[transform,opacity,visibility] duration-300 ease-out",
        heroNavVisible
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-[120%] opacity-0 pointer-events-none",
        "max-md:inset-x-3 max-md:top-5 max-md:w-auto",
        "md:left-1/2 md:w-[90%] md:max-w-[1004px] md:-translate-x-1/2 md:top-5",
        "lg:w-[76%] lg:max-w-[1080px]",
      )}
    >
      <div
        className={cn(
          "relative flex h-14 items-center justify-between gap-3 rounded-2xl px-4",
          "md:h-[72px] md:px-5 lg:h-[84px] lg:px-7",
          navBarStyles,
        )}
      >
        <Link
          href="#home"
          className="relative z-10 block h-12 w-[150px] shrink-0 sm:h-[52px] sm:w-[165px] md:h-14 md:w-[196px] lg:h-16 lg:w-[218px]"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.png"
            alt="Kalkisena"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-lg px-4 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-4">
          <Link
            href="#download"
            className={cn(
              "hidden lg:inline-flex h-12 items-center gap-2.5 rounded-lg px-4 text-base font-medium text-white",
              "bg-primary shadow-[inset_0_5px_10.5px_rgba(255,255,255,0.25)]",
              "transition-opacity hover:opacity-90",
            )}
          >
            <Download className="h-6 w-6 shrink-0" aria-hidden />
            Download Now
          </Link>

          <button
            id={mobileOpen ? "closeMenu" : "openMenu"}
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          />

          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className={cn(
              "absolute top-[calc(100%+0.5rem)] right-0 left-0 z-50 flex flex-col gap-1 rounded-2xl p-4 lg:hidden",
              navBarStyles,
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base text-white transition-colors hover:bg-white/10"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#download"
              className={cn(
                "mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-white",
                "bg-primary shadow-[inset_0_5px_10.5px_rgba(255,255,255,0.25)]",
              )}
              onClick={closeMenu}
            >
              <Download className="h-5 w-5 shrink-0" aria-hidden />
              Download Now
            </Link>
          </nav>
        </>
      ) : null}
    </header>
  );
}
