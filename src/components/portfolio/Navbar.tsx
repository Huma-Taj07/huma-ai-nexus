import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#lab", label: "Lab" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <div
        className={`glass-strong rounded-full px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${
          scrolled ? "shadow-2xl shadow-core/10" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="relative flex size-3">
            <span className="absolute inset-0 rounded-full bg-plasma animate-ping opacity-60" />
            <span className="relative size-3 rounded-full bg-plasma glow-cyan" />
          </span>
          <span className="font-display font-extrabold tracking-tight text-lg sm:text-xl">
            HTM<span className="text-plasma">.AI</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-plasma transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-plasma text-void font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full hover:scale-105 transition-transform"
        >
          Hire Me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden glass rounded-full p-2"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong mt-2 rounded-2xl p-4 flex flex-col gap-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-plasma py-1"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}