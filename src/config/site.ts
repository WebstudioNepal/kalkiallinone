export const siteConfig = {
  name: "Kalkisena",
  tagline: "Kalki All-in-One",
  description:
    "The all-in-one app for community, service, and spiritual connection. Download Kalkisena and stay connected.",
  url: "https://kalkisena.app",
  links: {
    figma:
      "https://www.figma.com/design/dIYMGqDxYfX40E3JGM8gMt/New-Kalki?node-id=624-2790",
    googlePlay: "#download",
    appStore: "#download",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Support", href: "#contact" },
] as const;

export const heroContent = {
  headline: "You need ALL-IN-ONE Solution for your Daily life",
  description:
    "Lorem ipsum dolor sit amet consectetur. Tellus volutpat eget purus aliquam erat diam. Nulla sed egestas facilisis ornare quisque neque. Praesent vel sit id netus molestie tincidunt ut. Egestas felis.",
  featureBarTitle: "One App. Endless Possibilities.",
} as const;

export const heroFeatures = [
  {
    title: "Multi Services",
    subtitle: "All in one platform",
    icon: "/images/icons/multi-service.png",
  },
  {
    title: "Easy to Use",
    subtitle: "Simple & Intuitive",
    icon: "/images/icons/easy-to-use.png",
  },
  {
    title: "Secure & Safe",
    subtitle: "Your Safety our Priority",
    icon: "/images/icons/secure-safe.png",
  },
  {
    title: "24/7 Support",
    subtitle: "We are always here",
    icon: "/images/icons/24-7-support.png",
  },
  {
    title: "Save Time",
    subtitle: "Life made easier",
    icon: "/images/icons/save-time.png",
  },
] as const;

export const foodDeliveryContent = {
  badge: "Food Delivery",
  headline: "Delicious Food, Delivered Fast",
  description:
    "Lorem ipsum dolor sit amet consectetur. Tellus volutpat eget purus aliquam erat diam. Nulla sed egestas facilisis ornare quisque neque. Praesent vel sit id netus molestie tincidunt ut. Egestas felis.",
  bullets: [
    "Lorem ipsum dolor sit amet consectetur. Tellus volutpat eget purus aliquam erat diam.",
    "Nulla sed egestas facilisis ornare quisque neque. Praesent vel sit id netus molestie.",
    "Tincidunt ut egestas felis. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  ],
  cta: { label: "Order Now", href: "#download" },
} as const;

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
