import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  shell?: "site" | "hero";
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, children, className, shell = "site" },
  ref,
) {
  const innerShell = shell === "hero" ? "hero-shell" : "container-site";

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "snap-section relative flex min-h-dvh flex-col",
        shell === "hero" ? "overflow-visible" : "overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          innerShell,
          "flex min-h-dvh w-full flex-col justify-center pt-28 pb-8 lg:pb-10",
          shell === "hero" && "overflow-visible",
        )}
      >
        {children}
      </div>
    </section>
  );
});
