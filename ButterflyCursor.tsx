"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

export default function ButterflyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const flapRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFinePointer(mq.matches);
  }, []);

  useEffect(() => {
    if (!isFinePointer || prefersReducedMotion) return;

    let frame = 0;
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(${flapRef.current}deg)`;
      }
    };

    const animateWings = () => {
      flapRef.current = flapRef.current === 0 ? 6 : 0;
      frame = window.setTimeout(animateWings, 260);
    };
    animateWings();

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.clearTimeout(frame);
    };
  }, [isFinePointer, prefersReducedMotion]);

  if (!isFinePointer || prefersReducedMotion) return null;

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 100 100">
        <path d="M50 50 C 30 10, 5 20, 15 45 C 22 60, 40 55, 50 50 Z" fill="#1B2A6B" />
        <path d="M50 50 C 70 10, 95 20, 85 45 C 78 60, 60 55, 50 50 Z" fill="#0ABAB5" />
        <path d="M50 50 C 35 75, 15 80, 22 60 C 28 52, 42 52, 50 50 Z" fill="#1B2A6B" opacity={0.85} />
        <path d="M50 50 C 65 75, 85 80, 78 60 C 72 52, 58 52, 50 50 Z" fill="#0ABAB5" opacity={0.85} />
        <line x1="50" y1="42" x2="50" y2="62" stroke="#0D1533" strokeWidth="2" />
      </svg>
    </div>
  );
}
