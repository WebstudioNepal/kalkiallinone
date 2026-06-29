export const siteConfig = {
  name: "Kalkisena",
  tagline: "Kalki All-in-One",
  description:
    "The all-in-one app for community, service, and spiritual connection. Download Kalkisena and stay connected.",
  url: "https://kalkisena.app",
  links: {
    figma:
      "https://www.figma.com/design/dIYMGqDxYfX40E3JGM8gMt/New-Kalki?node-id=459-3096",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Support", href: "#contact" },
] as const;

export const features = [
  {
    title: "All-in-One Platform",
    description:
      "Access community updates, events, and services from a single unified app experience.",
    icon: "layers" as const,
  },
  {
    title: "Stay Connected",
    description:
      "Receive timely notifications and stay in touch with your community wherever you are.",
    icon: "bell" as const,
  },
  {
    title: "Secure & Trusted",
    description:
      "Built with privacy and security at the core, so your data stays protected.",
    icon: "shield" as const,
  },
  {
    title: "Easy to Use",
    description:
      "A clean, intuitive interface designed for everyone — simple to navigate from day one.",
    icon: "sparkles" as const,
  },
] as const;
