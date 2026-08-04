"use client";

import { motion } from "framer-motion";
import { eventConfig } from "@/config/event";

export default function Story() {
  return (
    <section id="historia" className="relative overflow-hidden bg-ivory py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divider-ornate text-center font-body text-xs uppercase tracking-widest2 text-tiffany-600"
        >
          {eventConfig.story.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center font-display text-4xl text-royal-800 sm:text-5xl"
        >
          {eventConfig.story.title}
        </motion.h2>

        <div className="mx-auto mt-10 max-w-2xl space-y-5">
          {eventConfig.story.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center font-body text-base leading-relaxed text-royal-700/90 sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-3xl">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-tiffany-300 to-transparent md:block"
            aria-hidden="true"
          />
          <ol className="space-y-12 md:space-y-16">
            {eventConfig.story.timeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex flex-col items-center gap-2 md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    } text-center`}
                  >
                    <span className="font-body text-xs uppercase tracking-widest text-tiffany-600">
                      {item.year}
                    </span>
                    <h3 className="mt-1 font-display text-2xl text-royal-800">
                      {item.label}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-royal-700/80">
                      {item.text}
                    </p>
                  </div>

                  <div className="relative hidden h-4 w-4 shrink-0 rounded-full border-2 border-tiffany-500 bg-white shadow-glow md:block" />

                  <div className="hidden w-full md:block md:w-1/2" />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
