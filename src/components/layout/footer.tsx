import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { footerLinks, navLinks, siteConfig } from "@/config/site";

const socialLinks = [
  { label: "Website", href: "#", icon: Globe },
  { label: "Share", href: "#", icon: Share2 },
  { label: "Contact", href: "#contact", icon: Mail },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-secondary text-secondary-foreground">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <p className="font-display text-2xl font-semibold">{siteConfig.name}</p>
            <p className="max-w-sm text-sm text-secondary-foreground/80">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Legal
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/20 pt-8 sm:flex-row">
          <p className="text-sm text-secondary-foreground/70">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
