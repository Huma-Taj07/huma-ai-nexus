import { achievements } from "@/content/portfolio";
import { Counter } from "./shared/Counter";
import { FadeIn } from "./shared/FadeIn";

export function Achievements() {
  return (
    <section className="section-space bg-accent-subtle">
      <div className="container-lab">
        <FadeIn>
          <p className="label-caps">Selected Achievements</p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
          {achievements.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.05}>
              <div>
                <p className="font-display text-5xl font-medium tracking-[-0.03em] text-foreground sm:text-6xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-3 text-[14px] text-muted-foreground">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
