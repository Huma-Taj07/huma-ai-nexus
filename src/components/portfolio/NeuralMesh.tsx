import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Node = {
  x: number;
  y: number;
  z: number;
  pulse: number;
  speed: number;
};

export function NeuralMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let time = 0;

    const nodes: Node[] = Array.from({ length: 42 }, (_, i) => {
      const angle = (i / 42) * Math.PI * 2;
      const radius = 0.25 + Math.random() * 0.35;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: (Math.random() - 0.5) * 0.6,
        pulse: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.6,
      };
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (node: Node, rotY: number, rotX: number) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      let x = node.x * cosY - node.z * sinY;
      let z = node.x * sinY + node.z * cosY;
      let y = node.y * cosX - z * sinX;
      z = node.y * sinX + z * cosX;

      const scale = 1 / (2.2 - z);
      return {
        sx: width / 2 + x * width * scale * 0.9,
        sy: height / 2 + y * height * scale * 0.9,
        scale,
        z,
      };
    };

    const draw = () => {
      if (!reduceMotion) time += 0.006;
      ctx.clearRect(0, 0, width, height);

      const rotY = reduceMotion ? 0.4 : time * 0.35;
      const rotX = reduceMotion ? 0.2 : time * 0.22;

      const projected = nodes.map((n) => ({
        node: n,
        ...project(n, rotY, rotX),
      }));

      projected.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.hypot(dx, dy);
          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.25 * ((a.scale + b.scale) / 2);
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            const grad = ctx.createLinearGradient(a.sx, a.sy, b.sx, b.sy);
            grad.addColorStop(0, `rgba(124, 58, 237, ${alpha})`);
            grad.addColorStop(1, `rgba(168, 85, 247, ${alpha * 0.6})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (const p of projected) {
        const pulse = reduceMotion
          ? 1
          : 1 + Math.sin(time * p.node.speed * 3 + p.node.pulse) * 0.15;
        const r = 2.5 * p.scale * pulse;
        const glow = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 4);
        glow.addColorStop(0, `rgba(168, 85, 247, ${0.5 * p.scale})`);
        glow.addColorStop(1, "rgba(124, 58, 237, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.7 * p.scale})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [reduceMotion]);

  return (
    <div className="relative aspect-square w-full max-w-xl lg:max-w-none">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-[15%] rounded-full bg-primary/5 blur-3xl" />
      <canvas
        ref={canvasRef}
        aria-hidden
        className="relative h-full w-full"
      />
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.06] bg-gradient-to-t from-[#050816]/40 to-transparent" />
    </div>
  );
}
