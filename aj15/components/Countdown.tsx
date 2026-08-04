"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import { eventConfig } from "@/config/event";
import ConfettiEffect from "./ConfettiEffect";

const UNITS = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
] as const;

export default function Countdown() {
  const countdown = useCountdown(eventConfig.countdown.targetDate);

  return (
    <section className="relative bg-royal-gradient py-24">
      <ConfettiEffect active={countdown.isComplete} />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divider-ornate font-body text-xs uppercase tracking-widest2 text-tiffany-300"
        >
          Contagem regressiva
        </motion.p>

        {countdown.isComplete ? (
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-6 font-display text-4xl text-white sm:text-5xl"
          >
            {eventConfig.countdown.reachedMessage}
          </motion.h2>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {UNITS.map((unit, index) => (
              <motion.div
                key={unit.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-2xl px-4 py-8"
              >
                <motion.span
                  key={countdown[unit.key]}
                  initial={{ opacity: 0.4, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="block font-display text-4xl font-semibold text-white sm:text-5xl"
                  aria-live={unit.key === "seconds" ? "off" : undefined}
                >
                  {String(countdown[unit.key]).padStart(2, "0")}
                </motion.span>
                <span className="mt-2 block font-body text-xs uppercase tracking-widest text-silver-300">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
