export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-3xl mb-10 sm:mb-12">
      <div className="inline-flex items-center gap-2 mb-3 rounded-full border border-primary/20 bg-gradient-to-r from-primary/[0.08] to-core/[0.06] px-3 py-1.5 shadow-sm shadow-primary/5">
        <span className="size-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-neon shadow-[0_0_12px_color-mix(in_oklab,var(--palette-indigo)_45%,transparent)]" />
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] bg-gradient-to-r from-primary to-neon bg-clip-text font-semibold text-transparent">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight leading-tight text-balance text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}