import { Apple, Play } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function Cta() {
  return (
    <Section className="bg-secondary py-16 text-secondary-foreground md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Download {siteConfig.name} today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-secondary-foreground/80">
            Join thousands in your community. Available on iOS and Android — get
            started in minutes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="#"
              variant="primary"
              size="lg"
              className="min-w-[200px] bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              aria-label="Download on the App Store"
            >
              <Apple className="h-5 w-5" aria-hidden />
              App Store
            </ButtonLink>
            <ButtonLink
              href="#"
              variant="outline"
              size="lg"
              className="min-w-[200px] border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              aria-label="Get it on Google Play"
            >
              <Play className="h-5 w-5" aria-hidden />
              Google Play
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
