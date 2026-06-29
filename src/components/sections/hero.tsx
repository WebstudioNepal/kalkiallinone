import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <Section id="home" className="pt-12 md:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                {siteConfig.tagline}
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Your community, connected in one place
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                {siteConfig.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#download" size="lg">
                Download App
              </ButtonLink>
              <ButtonLink href="#features" variant="outline" size="lg">
                Learn More
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden />
            <Image
              src="/images/hero-placeholder.svg"
              alt="Kalkisena mobile app preview"
              width={600}
              height={500}
              priority
              className="relative w-full rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
