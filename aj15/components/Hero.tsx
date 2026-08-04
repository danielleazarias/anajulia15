"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { eventConfig } from "@/config/event";
import { scrollToId } from "@/lib/utils";

const BUTTERFLY_PATHS = [
  { top: "18%", left: "12%", size: 34, duration: 20, delay: 0 },
  { top: "62%", left: "80%", size: 26, duration: 24, delay: 2 },
  { top: "30%", left: "78%", size: 20, duration: 18, delay: 1 },
  { top: "75%", left: "20%", size: 30, duration: 22, delay: 3 },
  { top: "45%", left: "50%", size: 18, duration: 26, delay: 1.5 },
];

function Butterfly({
  top,
  left,
  size,
  duration,
  delay,
}: (typeof BUTTERFLY_PATHS)[number]) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className="absolute drop-shadow-[0_4px_10px_rgba(10,186,181,0.35)]"
      style={{ top, left }}
      animate={{
        x: [0, 40, -30, 20, 0],
        y: [0, -30, 10, -20, 0],
        rotate: [0, 6, -4, 3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.g
        animate={{ scaleX: [1, 0.7, 1] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "50%", originY: "50%" }}
      >
        <path d="M50 50 C 30 10, 5 20, 15 45 C 22 60, 40 55, 50 50 Z" fill="#0ABAB5" opacity={0.9} />
        <path d="M50 50 C 70 10, 95 20, 85 45 C 78 60, 60 55, 50 50 Z" fill="#C7CDDB" opacity={0.9} />
      </motion.g>
      <path d="M50 50 C 35 75, 15 80, 22 60 C 28 52, 42 52, 50 50 Z" fill="#0ABAB5" opacity={0.6} />
      <path d="M50 50 C 65 75, 85 80, 78 60 C 72 52, 58 52, 50 50 Z" fill="#C7CDDB" opacity={0.6} />
      <line x1="50" y1="42" x2="50" y2="62" stroke="#0D1533" strokeWidth="1.5" />
    </motion.svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="topo"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="h-[120%] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${eventConfig.hero.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/80 via-royal-800/70 to-royal-900/90" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {BUTTERFLY_PATHS.map((b, i) => (
          <Butterfly key={i} {...b} />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mb-6 font-display text-4xl tracking-widest2 text-tiffany-300 md:text-5xl"
        >
          {eventConfig.debutante.monogram}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.75, duration: 0.9, ease: "easeOut" }}
          className="font-display text-5xl font-medium leading-tight text-white text-shadow-soft sm:text-6xl md:text-7xl"
        >
          {eventConfig.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.05, duration: 0.9 }}
          className="mt-5 font-body text-lg uppercase tracking-[0.4em] text-silver-200 sm:text-xl"
        >
          {eventConfig.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.35, duration: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollToId("confirmar")}
            className="rounded-full bg-tiffany-500 px-8 py-3.5 font-body text-sm uppercase tracking-widest text-white shadow-glow transition-transform hover:scale-105 hover:bg-tiffany-600"
          >
            {eventConfig.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToId("evento")}
            className="flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-3.5 font-body text-sm uppercase tracking-widest text-white transition-colors hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {eventConfig.hero.ctaSecondary}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
