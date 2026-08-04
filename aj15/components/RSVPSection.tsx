"use client";

import { motion } from "framer-motion";
import RSVPForm from "./RSVPForm";

export default function RSVPSection() {
  return (
    <section id="confirmar" className="relative bg-royal-gradient py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divider-ornate text-center font-body text-xs uppercase tracking-widest2 text-tiffany-300"
        >
          Confirmação
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center font-display text-4xl text-white sm:text-5xl"
        >
          Confirme sua presença
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-md text-center font-body text-base text-silver-200/90"
        >
          Sua presença tornará essa noite ainda mais especial. Confirme até
          15 dias antes do evento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14"
        >
          <RSVPForm />
        </motion.div>
      </div>
    </section>
  );
}
