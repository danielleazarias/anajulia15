"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

const COLORS = ["#0ABAB5", "#1B2A6B", "#C7CDDB"];

export default function ParticlesBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: `${(i * 9.7) % 100}%`,
      size: 10 + ((i * 7) % 14),
      duration: 16 + ((i * 5) % 12),
      delay: (i % 6) * 1.5,
      opacity: 0.08 + ((i % 4) * 0.03),
      color: COLORS[i % COLORS.length],
    }));
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.svg
          key={p.id}
          width={p.size}
          height={p.size}
          viewBox="0 0 100 100"
          className="absolute"
          style={{ left: p.left, top: "-5%", opacity: p.opacity }}
          initial={{ y: "-10vh" }}
          animate={{ y: "110vh", x: [0, 40, -20, 30, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            d="M50 50 C 30 10, 5 20, 15 45 C 22 60, 40 55, 50 50 Z"
            fill={p.color}
          />
          <path
            d="M50 50 C 70 10, 95 20, 85 45 C 78 60, 60 55, 50 50 Z"
            fill={p.color}
          />
        </motion.svg>
      ))}
    </div>
  );
}
