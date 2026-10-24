import { caseStudies } from "@/content/portfolio";
import { FadeIn } from "./shared/FadeIn";

export function Projects() {
  return (
    <section id="projects" className="section-space bg-white">
      <div className="container-lab">
        <FadeIn>
          <p className="label-caps">Selected Work</p>
          <h2 className="headline-lg mt-4 max-w-2xl">Case studies in applied AI.</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Systems researched, engineered, and deployed — from clinical computer vision
            to enterprise conversational AI.
          </p>
        </FadeIn>

        <div className="mt-24 space-y-32 sm:mt-28 sm:space-y-36">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.number} delay={i * 0.03}>
              <article>
                <div className="mb-10 flex items-baseline gap-6 border-b border-border pb-8">
                  <span className="font-mono text-sm text-primary">Project {study.number}</span>
                  <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium tracking-[-0.02em]">
                    {study.title}
                  </h3>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                  <div>
                    <p className="label-caps mb-4">Challenge</p>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="label-caps mb-4">Solution</p>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="label-caps mb-4">Technology</p>
                    <p className="text-[15px] leading-relaxed text-foreground">
                      {study.technology}
                    </p>
                  </div>
                  <div>
                    <p className="label-caps mb-4">Impact</p>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      {study.impact}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
