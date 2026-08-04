"use client";

import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function calculate(targetDate: string): CountdownValue {
  const diff = new Date(targetDate).getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isComplete: false };
}

/**
 * Hook de contagem regressiva. Atualiza a cada segundo e é seguro para SSR:
 * retorna um valor neutro no primeiro render do servidor e sincroniza no
 * cliente via useEffect, evitando erros de hidratação.
 */
export function useCountdown(targetDate: string): CountdownValue {
  const [value, setValue] = useState<CountdownValue>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setValue(calculate(targetDate));
    const interval = setInterval(() => {
      setValue(calculate(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: false };
  }

  return value;
}
