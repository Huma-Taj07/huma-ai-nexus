import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/content/portfolio";
import { cn } from "@/lib/utils";

function QuoteGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function FiveStars({ className }: { className?: string }) {
  return (
    <div className={cn("flex shrink-0 gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="size-4 text-amber-400 drop-shadow-sm" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function NetworkAccent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 140" fill="none" aria-hidden>
      <circle cx="20" cy="30" r="3" className="fill-primary/35" />
      <circle cx="55" cy="18" r="2.5" className="fill-primary/25" />
      <circle cx="88" cy="42" r="3" className="fill-primary/30" />
      <circle cx="38" cy="72" r="2.5" className="fill-neon/25" />
      <circle cx="72" cy="95" r="3" className="fill-primary/28" />
      <path d="M20 30 L55 18 L88 42 M55 18 L38 72 M88 42 L72 95" className="stroke-primary/25" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function avatarSrc(seed: string) {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}&backgroundColor=e9d5ff`;
}

function TestimonialCard({
  t,
  className,
}: {
  t: (typeof testimonials)[number];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative shrink-0 rounded-2xl border border-violet-200/80 bg-white px-6 py-6 shadow-[0_16px_44px_-20px_rgba(91,33,182,0.28)]",
        "w-[min(22rem,calc(100vw-2.5rem))] sm:w-88",
        className,
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <QuoteGlyph className="size-9 text-primary/90" />
        <FiveStars />
      </div>
      <p className="text-[15px] leading-relaxed text-zinc-600">{t.quote}</p>
      <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
        <img
          src={avatarSrc(t.avatarSeed)}
          alt=""
          width={48}
          height={48}
          className="size-12 shrink-0 rounded-full border-2 border-white object-cover shadow-md ring-2 ring-violet-100"
          loading="lazy"
          decoding="async"
        />
        <div className="min-w-0">
          <div className="font-semibold text-zinc-900">{t.name}</div>
          <div className="truncate text-sm text-primary">
            {t.role}, {t.org}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();
  const loop = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 overflow-hidden border-y border-violet-100/80 bg-linear-to-b from-white via-violet-50/25 to-violet-50/35 py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(139, 92, 246, 0.07) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      <div className="portfolio-container relative">
        <NetworkAccent className="pointer-events-none absolute -left-2 top-0 hidden h-36 w-28 opacity-40 md:block lg:left-0 lg:opacity-50" />
        <NetworkAccent className="pointer-events-none absolute -right-2 top-0 hidden h-36 w-28 scale-x-[-1] opacity-40 md:block lg:right-0 lg:opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-primary shadow-sm shadow-primary/10">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.65)]" aria-hidden />
            Testimonials
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.35rem]">
            What People Say About{" "}
            <span className="bg-linear-to-r from-primary via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Working With Me
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-[17px]">
            Here&apos;s what clients and collaborators have to say about their experience working with me.
          </p>
        </motion.div>
      </div>

      {reduceMotion ? (
        <div className="portfolio-container relative mt-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={`${t.name}-${t.org}`} t={t} className="w-full max-w-none" />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative mt-10 max-w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-white to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-white to-transparent sm:w-20" />

          <div className="group/marquee overflow-hidden py-3">
            <div className="flex w-max gap-6 animate-testimonial-marquee hover:paused">
              {loop.map((t, i) => (
                <TestimonialCard key={`${t.name}-${t.org}-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
