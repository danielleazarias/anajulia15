"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Check, ExternalLink } from "lucide-react";
import { eventConfig } from "@/config/event";

export default function GiftList() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

const handleClick = async (id: string, url: string, e: React.MouseEvent) => {
  if (id === "pix") {
    e.preventDefault();

    const pixKey = "15124424613";

    try {
      await navigator.clipboard.writeText(pixKey);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = pixKey;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  }
};

  return (
    <section id="presentes" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divider-ornate text-center font-body text-xs uppercase tracking-widest2 text-tiffany-600"
        >
          Carinho
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center font-display text-4xl text-royal-800 sm:text-5xl"
        >
          Lista de Presentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-xl text-center font-body text-base text-royal-700/80"
        >
          Sua presença é o maior presente. Caso deseje me presentear, deixo
          aqui algumas opções com carinho.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventConfig.gifts.map((gift, i) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center rounded-2xl border border-silver-200 bg-ivory px-6 py-10 text-center shadow-soft transition-shadow hover:shadow-glow"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tiffany-shine text-white">
                <Gift className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-royal-800">
                {gift.name}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-royal-700/80">
                {gift.description}
              </p>
              <a
                href={gift.url}
                target={gift.url.startsWith("http") ? "_blank" : undefined}
                rel={gift.url.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(e) => handleClick(gift.id, gift.url, e)}
                className="mt-6 flex items-center gap-2 rounded-full bg-royal-700 px-6 py-2.5 font-body text-xs uppercase tracking-widest text-white transition-colors hover:bg-royal-800"
              >
                {copiedId === gift.id ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    Copiado!
                  </>
                ) : (
                  <>
                    {gift.ctaLabel}
                    {gift.url.startsWith("http") && (
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
