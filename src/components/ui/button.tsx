import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:ring-secondary",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted focus-visible:ring-primary",
  ghost: "bg-transparent text-foreground hover:bg-muted focus-visible:ring-primary",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-12 px-8 text-base",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedProps;

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  SharedProps & {
    href: string;
  };

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: SharedProps = {}) {
  return cn(baseStyles, variants[variant], sizes[size], className);
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}
