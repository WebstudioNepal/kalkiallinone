"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "absolute left-1/2 z-50 w-[69.72%] max-w-[1004px] -translate-x-1/2",
        "top-[3.28%]",
      )}
    >
      <div
        className={cn(
          "flex h-[48px] items-center justify-between gap-3 rounded-2xl px-4 md:h-[72px] md:px-5",
          "bg-[linear-gradient(90deg,rgba(144,168,255,0.08)_0%,rgba(0,44,204,0.08)_100%)]",
          "shadow-[inset_0_4px_5.8px_rgba(0,0,0,0.25),inset_0_2px_14px_rgba(255,255,255,0.15)]",
          "backdrop-blur-[56px]",
        )}
      >
        <Link
          href="#home"
          className="relative block h-[36px] w-[120px] shrink-0 md:h-[52px] md:w-[184px]"
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
          className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2.5 text-sm text-white transition-colors hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#download"
            className={cn(
              "inline-flex h-12 items-center gap-2.5 rounded-lg px-4 text-base font-medium text-white",
              "bg-primary shadow-[inset_0_5px_10.5px_rgba(255,255,255,0.25)]",
              "transition-opacity hover:opacity-90",
            )}
          >
            <Download className="h-6 w-6 shrink-0" aria-hidden />
            Download Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "mt-2 overflow-hidden rounded-2xl lg:hidden",
          "bg-[linear-gradient(90deg,rgba(144,168,255,0.12)_0%,rgba(0,44,204,0.12)_100%)]",
          "shadow-[inset_0_4px_5.8px_rgba(0,0,0,0.25),inset_0_2px_14px_rgba(255,255,255,0.15)]",
          "backdrop-blur-[56px]",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
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
            onClick={() => setMobileOpen(false)}
          >
            <Download className="h-5 w-5" aria-hidden />
            Download Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
