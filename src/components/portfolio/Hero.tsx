import { hero } from "@/content/portfolio";
import { FadeIn } from "./shared/FadeIn";

export function Hero() {
  return (
    <section id="top" className="section-space border-b border-border">
      <div className="container-lab">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="label-caps mb-8">Huma Taj AI Lab</p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="headline-xl">{hero.headline}</h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="body-lg mt-8 max-w-2xl">{hero.subheadline}</p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-12 flex flex-wrap gap-4">
                <a href={hero.ctaPrimary.href} className="btn-primary">
                  {hero.ctaPrimary.label}
                </a>
                <a href={hero.ctaSecondary.href} className="btn-outline">
                  {hero.ctaSecondary.label}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-16 text-[13px] text-muted-foreground">
                Research → Engineering → Production
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="lg:justify-self-end">
            <figure className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="border border-border bg-white p-3 sm:p-4">
                <img
                  src="/profile.png"
                  alt="Huma Taj — AI Engineer"
                  width={480}
                  height={600}
                  loading="eager"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 text-[13px] text-muted-foreground">
                Lahore, Pakistan
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
