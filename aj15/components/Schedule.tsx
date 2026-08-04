"use client";

import { motion } from "framer-motion";
import { eventConfig } from "@/config/event";

export default function Schedule() {
  return (
    <section id="cronograma" className="relative bg-royal-gradient py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divider-ornate text-center font-body text-xs uppercase tracking-widest2 text-tiffany-300"
        >
          Programação
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center font-display text-4xl text-white sm:text-5xl"
        >
          Cronograma da noite
        </motion.h2>

        <ol className="relative mt-16 border-l border-tiffany-400/30 pl-8 sm:pl-10">
          {eventConfig.schedule.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative mb-12 last:mb-0"
            >
              <span
                className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-tiffany-500 shadow-glow sm:-left-[49px]"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="font-body text-xs uppercase tracking-widest text-tiffany-300">
                {item.time}
              </span>
              <h3 className="mt-1 font-display text-2xl text-white">
                {item.title}
              </h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-silver-200/90">
                {item.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
