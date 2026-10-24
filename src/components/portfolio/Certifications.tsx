import { certifications } from "@/content/portfolio";
import { FadeIn } from "./shared/FadeIn";

export function Certifications() {
  return (
    <section className="section-space border-t border-border">
      <div className="container-lab">
        <FadeIn>
          <p className="label-caps">Certifications</p>
          <h2 className="headline-lg mt-4 max-w-xl">Formal training and credentials.</h2>
        </FadeIn>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.title} delay={i * 0.04}>
              <article className="flex h-full flex-col justify-between bg-[#FAF8F5] p-8 sm:p-10">
                <div>
                  <p className="label-caps text-primary">{cert.issuer}</p>
                  <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                    {cert.title}
                  </h3>
                </div>
                <p className="mt-8 font-mono text-[13px] text-muted-foreground">{cert.year}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
