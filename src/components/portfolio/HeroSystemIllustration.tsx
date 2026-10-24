import { motion, useReducedMotion } from "framer-motion";

import { HeroTechOrbit } from "@/components/portfolio/HeroTechOrbit";



/** Light marketing-style screen inside the left laptop bezel. */

function LaptopAiWebsiteScreen({ reduceMotion }: { reduceMotion: boolean }) {

  return (

    <div

      className="box-border flex h-full w-full flex-col gap-1 rounded-[6px] bg-linear-to-b from-white via-white to-violet-50 p-1.5 text-[7px] leading-snug text-zinc-800 ring-1 ring-black/15 sm:text-[8px]"

      style={{ WebkitFontSmoothing: "antialiased" }}

    >

      <div className="flex items-center justify-between gap-1 border-b border-zinc-200 pb-1">

        <span className="font-mono text-[6.5px] font-bold uppercase tracking-wider text-violet-600">Nova AI</span>

        <span className="flex gap-px" aria-hidden>

          {[0.6, 0.45, 0.68].map((o, i) => (

            <span key={String(i)} className="h-[2px] w-2 rounded-full bg-zinc-400" style={{ opacity: o }} />

          ))}

        </span>

      </div>

      <p className="font-mono text-[6px] font-semibold uppercase tracking-wider text-violet-500">Product</p>

      <p className="text-[9px] font-bold leading-snug tracking-tight text-zinc-900">

        Ship <span className="bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">AI features</span> faster.

      </p>

      <div className="mt-px flex gap-1">

        {!reduceMotion ? (

          <motion.span

            className="rounded-md bg-linear-to-br from-violet-600 to-fuchsia-500 px-1.5 py-0.5 font-mono text-[6.5px] font-semibold uppercase text-white shadow-sm"

            animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.03, 1] }}

            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}

          >

            Assistant

          </motion.span>

        ) : (

          <span className="rounded-md bg-linear-to-br from-violet-600 to-fuchsia-500 px-1.5 py-0.5 font-mono text-[6.5px] font-semibold uppercase text-white">

            Assistant

          </span>

        )}

        <span className="truncate rounded-md border border-violet-200/90 bg-violet-500/15 px-1 py-0.5 text-[6.5px] text-violet-900">

          Summarize…

        </span>

      </div>

    </div>

  );

}



/** CRM dashboard mock — higher contrast for small scale. */

function LaptopCrmScreen({ reduceMotion }: { reduceMotion: boolean }) {

  const row =

    "flex items-center justify-between gap-0.5 rounded-md px-1 py-[3px] ring-1 text-[7px] sm:text-[7.5px]";

  return (

    <div

      className="box-border flex h-full w-full flex-col gap-1 rounded-[6px] bg-[#09090b] p-1.5 text-white ring-2 ring-white/35 sm:p-2"

      style={{ WebkitFontSmoothing: "antialiased" }}

    >

      <div className="flex items-center gap-1 border-b border-white/25 pb-1">

        <span className="flex gap-px" aria-hidden>

          <span className="size-[3px] rounded-full bg-emerald-400" />

          <span className="size-[3px] rounded-full bg-white/80" />

        </span>

        <span className="font-mono text-[7px] font-semibold uppercase tracking-wider text-violet-200">CRM</span>

        {!reduceMotion ? (

          <motion.span

            className="ml-auto rounded bg-emerald-500/30 px-[4px] py-px font-mono text-[6.5px] font-semibold uppercase text-emerald-50 ring-1 ring-emerald-300/45"

            animate={{ opacity: [0.7, 1, 0.7] }}

            transition={{ duration: 1.85, repeat: Infinity, ease: "easeInOut" }}

          >

            Synced

          </motion.span>

        ) : (

          <span className="ml-auto rounded bg-emerald-500/30 px-[4px] py-px font-mono text-[6.5px] uppercase text-emerald-50">

            Synced

          </span>

        )}

      </div>

      <div className="grid grid-cols-[8px_minmax(0,1fr)] gap-1">

        <div className="flex flex-col gap-1 rounded-md bg-black/70 py-[3px] ring-1 ring-white/25" aria-hidden>

          {[1, 2, 3].map((i) => (

            <span key={i} className="mx-auto h-[2px] w-1 rounded-full bg-white/65" />

          ))}

        </div>

        <div className="space-y-[3px]">

          <div className={`${row} bg-white/14 ring-white/25`}>

            <span className="min-w-0 truncate font-semibold text-white">Acme</span>

            <span className="shrink-0 rounded bg-violet-500/50 px-[4px] font-mono text-[6px] font-semibold uppercase text-white">

              Open

            </span>

          </div>

          <div className={`${row} bg-white/10 ring-white/18`}>

            <span className="min-w-0 truncate font-medium text-white/95">Nova</span>

            <span className="shrink-0 rounded bg-fuchsia-500/55 px-[4px] font-mono text-[6px] font-semibold uppercase text-white">

              Hot

            </span>

          </div>

          <div className={`${row} bg-white/[0.07] ring-white/12`}>

            <span className="min-w-0 truncate text-white/90">Pulse</span>

            <span className="font-mono text-[6px] font-semibold uppercase text-emerald-200">won</span>

          </div>

        </div>

      </div>

    </div>

  );

}



/**

 * Hero canvas: laptops + hub + drifting icons; tier row below with profile-aligned labels.

 */

export function HeroSystemIllustration({ className }: { className?: string }) {

  const reduceMotion = useReducedMotion() ?? false;

  const hubY = 92;

  /** Laptop bezel width in SVG units; hubs align to midpoint between inner rails. */

  const laptopW = 140;

  const hubR = 42;

  const leftLaptopX = 22;

  /** More space between the two frames + hub visually centered between them */

  const rightLaptopX = 318;

  const leftRail = leftLaptopX + laptopW;

  const rightRail = rightLaptopX;

  const hubCx = (leftRail + rightRail) / 2;

  const lightningAuthorCx = 210;

  const lightningOffsetX = hubCx - lightningAuthorCx;

  /** Laptops translate y + max local bottom (screen 88px + chassis to y=98). */

  const laptopTopY = 42;

  const laptopBottomY = laptopTopY + 98;

  /** Visible separation between laptop bases and the tier tray line below */

  const gapFramesToTray = 28;

  const tray = { x: 10, y: laptopBottomY + gapFramesToTray, w: 460, h: 14, rx: 7 };

  const railY = tray.y + tray.h / 2;

  const gap = 14;

  /** Match horizontal pill `gap`: breathing room above the four labels. */

  const pillY = tray.y + tray.h + gap;

  const pillH = 22;

  const pillRx = 11;

  const pillW = 98;

  const startX = 22;

  const centers = [0, 1, 2, 3].map((i) => startX + pillW / 2 + i * (pillW + gap));



  const pillStyleSide = {

    fill: "rgba(34,18,66,0.96)",

    stroke: "rgba(255,255,255,0.78)",

    strokeWidth: 1.6,

  };

  const pillStyleCenter = {

    fill: "rgba(88,28,135,0.98)",

    stroke: "rgba(255,255,255,0.85)",

    strokeWidth: 1.65,

  };



  return (

    <div

      className={`relative flex min-h-[29rem] w-full flex-col justify-center gap-7 overflow-hidden rounded-[1.75rem] bg-linear-to-br from-[#120822] via-[#2e1b54] to-[#05030c] px-6 py-12 ring-1 ring-inset ring-white/15 sm:min-h-[35rem] sm:gap-8 sm:px-8 sm:py-14 lg:min-h-[40rem] lg:gap-9 lg:py-16 ${className ?? ""}`}

      role="img"

      aria-label="Decorative illustration: laptops showing an AI product site and a CRM dashboard, connected through a hub, with tiers for GenAI web apps, LLM agents, computer vision, and CRM automation; drifting technology badges around the frame."

    >

      <div

        aria-hidden

        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(192,132,252,0.18),transparent_55%)]"

      />

      <div

        aria-hidden

        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_60%,rgba(52,211,153,0.08),transparent_45%)]"

      />

      <HeroTechOrbit reduceMotion={reduceMotion} />

      <div

        aria-hidden

        className="pointer-events-none absolute right-0 top-0 size-[min(100%,320px)] translate-x-1/4 -translate-y-1/4 rounded-full bg-fuchsia-500/20 blur-3xl"

      />

      <div

        aria-hidden

        className="pointer-events-none absolute bottom-0 left-0 size-[min(90%,280px)] -translate-x-1/3 translate-y-1/4 rounded-full bg-violet-500/15 blur-3xl"

      />



      <div className="relative z-10 flex flex-col gap-6 sm:gap-8">

        <p className="text-center font-mono text-sm font-bold uppercase tracking-[0.28em] text-white drop-shadow-sm sm:text-base">

          Connect · orchestrate · generate

        </p>



        <svg viewBox="0 0 480 238" className="relative z-1 h-[232px] w-full sm:h-[268px] lg:h-[298px]" fill="none" xmlns="http://www.w3.org/2000/svg">

          <defs>

            <linearGradient id="hsi-line-d" x1="0%" y1="0%" x2="100%" y2="0%">

              <stop offset="0%" stopColor="#e9d5ff" />

              <stop offset="100%" stopColor="#fbcfe8" />

            </linearGradient>

            <linearGradient id="hsi-core-d" x1="0%" y1="0%" x2="100%" y2="100%">

              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.85" />

              <stop offset="100%" stopColor="#f5d0fe" stopOpacity="0.55" />

            </linearGradient>

          </defs>



          {/* Left laptop */}

          <g transform={`translate(${leftLaptopX},${laptopTopY})`}>

            <rect x="2" y="84" width="136" height="14" rx="4" fill="rgba(14,11,26,0.92)" stroke="rgba(255,255,255,0.42)" strokeWidth="1.5" />

            <rect x="0" y="0" width="140" height="88" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />

            <foreignObject x="9" y="10" width="122" height="68">

              <LaptopAiWebsiteScreen reduceMotion={reduceMotion} />

            </foreignObject>

          </g>



          <path d={`M${leftRail} ${hubY} H${hubCx - hubR}`} stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />

          <path d={`M${hubCx + hubR} ${hubY} H${rightRail}`} stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" />



          {!reduceMotion ? (

            <>

              <motion.path

                d={`M${leftRail + 6} ${hubY} H${hubCx - hubR - 4}`}

                stroke="url(#hsi-line-d)"

                strokeWidth="2.25"

                strokeLinecap="round"

                strokeDasharray="8 14"

                initial={{ strokeDashoffset: 0 }}

                animate={{ strokeDashoffset: -220 }}

                transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}

              />

              <motion.path

                d={`M${hubCx + hubR + 4} ${hubY} H${rightRail - 8}`}

                stroke="url(#hsi-line-d)"

                strokeWidth="2.25"

                strokeLinecap="round"

                strokeDasharray="8 14"

                initial={{ strokeDashoffset: 0 }}

                animate={{ strokeDashoffset: -220 }}

                transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.35 }}

              />

            </>

          ) : (

            <>

              <path d={`M${leftRail + 6} ${hubY} H${hubCx - hubR - 4}`} stroke="url(#hsi-line-d)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

              <path d={`M${hubCx + hubR + 4} ${hubY} H${rightRail - 8}`} stroke="url(#hsi-line-d)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

            </>

          )}



          <g transform={`translate(0 ${hubY - 62})`}>

            <circle cx={hubCx} cy={62} r={42} fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />

            <circle cx={hubCx} cy={62} r={30} stroke="url(#hsi-line-d)" strokeWidth="1.75" opacity="0.5" strokeDasharray="6 10" />

            <g transform={`translate(${lightningOffsetX} 0)`}>

              <path

                d="M217 43h-9l7 31h11l-19 43 8-37h-9l11-37z"

                fill="url(#hsi-core-d)"

                stroke="url(#hsi-line-d)"

                strokeWidth="1.5"

                strokeLinejoin="round"

              />

            </g>

            {!reduceMotion ? (

              <motion.g animate={{ opacity: [0.45, 1, 0.45], scale: [0.94, 1.04, 0.94] }} transition={{ duration: 2.2, repeat: Infinity }}>

                <circle cx={hubCx} cy={62} r={4} fill="#f472b6" opacity="0.8" />

              </motion.g>

            ) : (

              <circle cx={hubCx} cy={62} r={4} fill="#f472b6" opacity="0.55" />

            )}

          </g>



          {/* Right laptop */}

          <g transform={`translate(${rightLaptopX},${laptopTopY})`}>

            <rect x="2" y="84" width="136" height="14" rx="4" fill="rgba(14,11,26,0.92)" stroke="rgba(255,255,255,0.42)" strokeWidth="1.5" />

            <rect x="0" y="0" width="140" height="88" rx="12" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />

            <foreignObject x="9" y="10" width="122" height="68">

              <LaptopCrmScreen reduceMotion={reduceMotion} />

            </foreignObject>

          </g>



          {/* Tier tray + spaced pills */}

          <rect

            x={tray.x}

            y={tray.y}

            width={tray.w}

            height={tray.h}

            rx={tray.rx}

            fill="rgba(255,255,255,0.14)"

            stroke="rgba(255,255,255,0.45)"

            strokeWidth={1.5}

          />

          <path

            d={`M${tray.x + 18} ${railY}h${tray.w - 36}`}

            stroke="#f5d0fe"

            strokeWidth="2.5"

            strokeLinecap="round"

            opacity="0.88"

          />



          {[0, 1, 2, 3].map((i) => (

            <rect

              key={i}

              x={startX + i * (pillW + gap)}

              y={pillY}

              width={pillW}

              height={pillH}

              rx={pillRx}

              fill={i === 1 || i === 2 ? pillStyleCenter.fill : pillStyleSide.fill}

              stroke={i === 1 || i === 2 ? pillStyleCenter.stroke : pillStyleSide.stroke}

              strokeWidth={i === 1 || i === 2 ? pillStyleCenter.strokeWidth : pillStyleSide.strokeWidth}

            />

          ))}



          <text x={centers[0]} y={pillY + 16} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" style={{ fontFamily: "var(--font-sans)" }}>

            GenAI apps

          </text>

          <text x={centers[1]} y={pillY + 16} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" style={{ fontFamily: "var(--font-sans)" }}>

            LLM Agents

          </text>

          <text x={centers[2]} y={pillY + 16} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" style={{ fontFamily: "var(--font-sans)" }}>

            Vision · CV

          </text>

          <text x={centers[3]} y={pillY + 16} textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" style={{ fontFamily: "var(--font-sans)" }}>

            CRM automation

          </text>

        </svg>

      </div>

    </div>

  );

}

