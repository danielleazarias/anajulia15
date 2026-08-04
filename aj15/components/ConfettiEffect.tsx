"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

/**
 * Dispara confetes nas cores do tema (azul royal, tiffany e prata) quando
 * renderizado. Utilizado pela seção de Contagem Regressiva assim que a data
 * do evento é alcançada.
 */
export default function ConfettiEffect({ active }: { active: boolean }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!active || prefersReducedMotion) return;

    const colors = ["#1B2A6B", "#0ABAB5", "#C7CDDB", "#FFFFFF"];
    const duration = 4000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, [active, prefersReducedMotion]);

  return null;
}
