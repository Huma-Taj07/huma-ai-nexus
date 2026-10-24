import { experiences } from "@/content/portfolio";
import { FadeIn } from "./shared/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="section-space border-t border-border">
      <div className="container-lab">
        <FadeIn>
          <p className="label-caps">Experience</p>
          <h2 className="headline-lg mt-4 max-w-2xl">Research and engineering in practice.</h2>
        </FadeIn>

        <div className="mt-20">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.org} delay={i * 0.05}>
              <article className="grid gap-8 border-t border-border py-12 lg:grid-cols-[280px_1fr] lg:gap-16">
                <div>
                  <p className="font-mono text-[13px] text-muted-foreground">{exp.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.02em]">
                    {exp.org}
                  </h3>
                  <p className="mt-1 text-[15px] text-foreground">{exp.role}</p>
                  <p className="mt-2 text-[13px] text-muted-foreground">{exp.location}</p>
                </div>

                <div>
                  <p className="label-caps mb-6">Key Contributions</p>
                  <ul className="space-y-4">
                    {exp.contributions.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 text-[15px] leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
