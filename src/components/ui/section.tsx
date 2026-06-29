import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  muted?: boolean;
};

export function Section({
  className,
  children,
  muted = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        muted && "bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
