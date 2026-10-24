import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  opacity?: number;
};

export function NeuralNetwork({ className, opacity = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let t = 0;

    const nodes = Array.from({ length: 36 }, (_, i) => {
      const a = (i / 36) * Math.PI * 2;
      const r = 0.2 + Math.random() * 0.35;
      return {
        x: Math.cos(a) * r,
        y: Math.sin(a) * r,
        z: (Math.random() - 0.5) * 0.5,
        phase: Math.random() * Math.PI * 2,
      };
    });

    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (n: (typeof nodes)[0], ry: number, rx: number) => {
      let x = n.x * Math.cos(ry) - n.z * Math.sin(ry);
      let z = n.x * Math.sin(ry) + n.z * Math.cos(ry);
      let y = n.y * Math.cos(rx) - z * Math.sin(rx);
      z = n.y * Math.sin(rx) + z * Math.cos(rx);
      const s = 1 / (2.1 - z);
      return { sx: w / 2 + x * w * s * 0.85, sy: h / 2 + y * h * s * 0.85, s, z };
    };

    const draw = () => {
      if (!reduceMotion) t += 0.004;
      ctx.clearRect(0, 0, w, h);
      const ry = reduceMotion ? 0.3 : t * 0.4;
      const rx = reduceMotion ? 0.15 : t * 0.25;

      const proj = nodes.map((n) => ({ n, ...project(n, ry, rx) }));
      proj.sort((a, b) => a.z - b.z);

      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const a = proj[i];
          const b = proj[j];
          const d = Math.hypot(a.sx - b.sx, a.sy - b.sy);
          if (d < 100) {
            const alpha = (1 - d / 100) * 0.2 * ((a.s + b.s) / 2);
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            const g = ctx.createLinearGradient(a.sx, a.sy, b.sx, b.sy);
            g.addColorStop(0, `rgba(0,212,255,${alpha})`);
            g.addColorStop(1, `rgba(139,92,246,${alpha * 0.7})`);
            ctx.strokeStyle = g;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (const p of proj) {
        const pulse = reduceMotion ? 1 : 1 + Math.sin(t * 3 + p.n.phase) * 0.12;
        const r = 2 * p.s * pulse;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.5 * p.s})`;
        ctx.fill();
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
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ opacity }}
    />
  );
}
