"use client";

import { motion } from "framer-motion";
import { Shirt, Palette, Ban } from "lucide-react";
import Image from "next/image";
import { eventConfig } from "@/config/event";

const ICONS = [Palette, Ban, Shirt];

export default function DressCode() {
  return (
    <section id="traje" className="relative bg-ivory py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divider-ornate text-center font-body text-xs uppercase tracking-widest2 text-tiffany-600"
        >
          Traje
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center font-display text-4xl text-royal-800 sm:text-5xl"
        >
          {eventConfig.dressCode.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center font-body text-base leading-relaxed text-royal-700/90"
        >
          {eventConfig.dressCode.description}
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-3 gap-4">
            {eventConfig.dressCode.suggestions.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col items-center rounded-2xl border border-silver-200 bg-white px-3 py-8 text-center shadow-soft"
                >
                  <Icon className="h-7 w-7 text-tiffany-600" aria-hidden="true" />
                  <span className="mt-4 font-body text-[11px] uppercase tracking-widest text-royal-600">
                    {item.label}
                  </span>
                  <span className="mt-2 font-display text-base text-royal-800">
                    {item.detail}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {eventConfig.dressCode.images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative overflow-hidden rounded-2xl shadow-soft ${
                  i === 0 ? "translate-y-6" : ""
                }`}
              >
                <Image
                  src={src}
                  alt="Inspiração de traje esporte fino em tons de azul e prata"
                  width={500}
                  height={650}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
