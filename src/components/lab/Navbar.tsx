import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks } from "@/content/lab";
import { NavSquiggle } from "./shapes";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.getElementById("snap-scroll");
    if (!root) return;

    const onScroll = () => setScrolled(root.scrollTop > 20);
    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { root, threshold: 0.55 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      root.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/40 bg-background/55 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl"
          : "bg-background",
      )}
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-14">
        <nav className="pointer-events-auto relative flex h-28 items-center justify-between">
          <a href="#top" className="relative z-10 flex shrink-0 items-center">
            <img
              src="/logo.png"
              alt="Huma Taj — AI Engineer"
              className="h-32 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </a>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 xl:flex xl:gap-11">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative inline-block pb-2.5 text-[19px] font-extrabold transition-colors hover:text-foreground",
                      isActive ? "text-foreground" : "text-foreground/75",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2">
                        <NavSquiggle />
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="relative z-10 flex items-center gap-5">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden items-center gap-2.5 rounded-full bg-foreground py-2.5 pl-6 pr-2.5 text-[15px] font-extrabold text-background sm:inline-flex"
            >
              Let&apos;s Connect
              <span className="flex size-8 items-center justify-center rounded-full bg-yellow text-foreground">
                <ArrowRight className="size-4 stroke-[2.5]" />
              </span>
            </motion.a>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="p-2 xl:hidden"
            >
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="pointer-events-auto border-t border-border bg-background px-5 py-4 xl:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-bold text-foreground/80"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
