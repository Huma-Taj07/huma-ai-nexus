/**
 * Animated background — particles + neural grid + gradient orbs.
 * Pure CSS/React for SSR safety.
 */
export function Background() {
  const particles = Array.from({ length: 24 });
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 fusion-bg" />
      <div className="absolute inset-0 neural-grid opacity-60" />
      <div className="absolute -top-40 left-1/4 size-[500px] bg-core/20 rounded-full blur-[120px] animate-pulse-core" />
      <div className="absolute top-1/3 -right-40 size-[600px] bg-plasma/15 rounded-full blur-[140px] animate-pulse-core" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 size-[500px] bg-neon/15 rounded-full blur-[120px] animate-pulse-core" style={{ animationDelay: "5s" }} />

      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute size-1 rounded-full bg-plasma/60 animate-float"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 7) * 0.8}s`,
            animationDuration: `${6 + (i % 5)}s`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}