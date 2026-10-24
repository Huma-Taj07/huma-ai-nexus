import { researchAreas } from "@/content/portfolio";
import { FadeIn } from "./shared/FadeIn";

export function Research() {
  return (
    <section id="research" className="section-space">
      <div className="container-lab">
        <FadeIn>
          <p className="label-caps">Research Areas</p>
          <h2 className="headline-lg mt-4 max-w-3xl">
            Exploring intelligence across vision, language, and automation.
          </h2>
        </FadeIn>

        <div className="mt-20 space-y-0">
          {researchAreas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 0.04}>
              <article
                className="grid gap-6 border-t border-border py-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-16 lg:grid-cols-[280px_1fr_240px] lg:gap-12"
              >
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-[1.65rem]">
                  {area.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
                <p className="text-[13px] leading-relaxed text-muted-foreground lg:text-right">
                  <span className="label-caps mb-2 block lg:mb-3">Research focus</span>
                  {area.focus}
                </p>
              </article>
            </FadeIn>
          ))}
          <div className="rule" />
        </div>
      </div>
    </section>
  );
}
