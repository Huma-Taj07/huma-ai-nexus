import { writingNotes } from "@/content/portfolio";
import { FadeIn } from "./shared/FadeIn";

export function Writing() {
  return (
    <section id="writing" className="section-space border-t border-border bg-white">
      <div className="container-lab">
        <FadeIn>
          <p className="label-caps">Writing</p>
          <h2 className="headline-lg mt-4 max-w-2xl">Lab notes and technical writing.</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Research reflections and engineering notes on building intelligent systems.
          </p>
        </FadeIn>

        <div className="mt-16 divide-y divide-border">
          {writingNotes.map((note, i) => (
            <FadeIn key={note.title} delay={i * 0.05}>
              <article className="grid gap-4 py-10 sm:grid-cols-[200px_1fr] sm:gap-12">
                <div>
                  <p className="label-caps">{note.category}</p>
                  <p className="mt-2 font-mono text-[13px] text-muted-foreground">{note.date}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-[-0.02em]">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {note.excerpt}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
