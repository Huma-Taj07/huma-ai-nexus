import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ecosystemNodes } from "@/content/cinematic";

export function Ecosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0, 1, 0.8]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      if (!reduceMotion) t += 0.008;
      ctx.clearRect(0, 0, w, h);

      const nodes = ecosystemNodes.map((n) => ({
        ...n,
        px: (n.x / 100) * w,
        py: (n.y / 100) * h,
        pulse: n.id === "core" ? 1 + Math.sin(t * 2) * 0.08 : 1,
      }));

      const core = nodes.find((n) => n.id === "core")!;

      for (const node of nodes) {
        if (node.id === "core") continue;
        const pulse = reduceMotion ? 1 : 1 + Math.sin(t * 1.5 + node.x) * 0.04;
        ctx.beginPath();
        ctx.moveTo(core.px, core.py);
        ctx.lineTo(
          node.px + Math.sin(t + node.x) * 8 * pulse,
          node.py + Math.cos(t + node.y) * 8 * pulse,
        );
        const g = ctx.createLinearGradient(core.px, core.py, node.px, node.py);
        g.addColorStop(0, "rgba(0,212,255,0.25)");
        g.addColorStop(1, "rgba(139,92,246,0.15)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (const node of nodes) {
        const isCore = node.id === "core";
        const r = (isCore ? 28 : 16) * node.pulse;
        const px = isCore ? node.px : node.px + (reduceMotion ? 0 : Math.sin(t + node.x) * 10);
        const py = isCore ? node.py : node.py + (reduceMotion ? 0 : Math.cos(t + node.y) * 10);

        if (isCore) {
          const glow = ctx.createRadialGradient(px, py, 0, px, py, r * 2);
          glow.addColorStop(0, "rgba(0,212,255,0.2)");
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, r * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(px, py, r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = isCore ? "#00d4ff" : "#8b5cf6";
        ctx.fill();

        ctx.font = "500 11px Inter, sans-serif";
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, px, py + r * 0.35 + 18);
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] px-6 py-32">
      <motion.div style={{ opacity: reduceMotion ? 1 : opacity }} className="mx-auto max-w-5xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/35">
          The Ecosystem
        </p>
        <h2 className="text-display mt-6 text-[clamp(2.5rem,8vw,5rem)] font-medium tracking-[-0.03em] text-white">
          Intelligence, interconnected.
        </h2>
        <p className="mt-6 max-w-xl text-base text-white/45">
          Vision, language, data, backend, deployment — one living system. Not a skill list. A
          architecture of mind.
        </p>

        <div className="relative mt-16 aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02]">
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
        </div>
      </motion.div>
    </section>
  );
}
