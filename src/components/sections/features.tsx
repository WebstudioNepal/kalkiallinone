import { Bell, Layers, Shield, Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { features, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

const iconMap: Record<(typeof features)[number]["icon"], LucideIcon> = {
  layers: Layers,
  bell: Bell,
  shield: Shield,
  sparkles: Sparkles,
};

export function Features() {
  return (
    <Section id="features" muted>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need, built in
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover what makes {siteConfig.name} the all-in-one app for your
            community.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <article
                key={feature.title}
                className={cn(
                  "rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md",
                )}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
