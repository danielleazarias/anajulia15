"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { eventConfig } from "@/config/event";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const images = eventConfig.gallery;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section id="galeria" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divider-ornate text-center font-body text-xs uppercase tracking-widest2 text-tiffany-600"
        >
          Momentos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center font-display text-4xl text-royal-800 sm:text-5xl"
        >
          Galeria
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {images.map((image, i) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              aria-label={`Ampliar imagem: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-royal-900/0 transition-colors duration-500 group-hover:bg-royal-900/20" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-royal-900/95 px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização de imagem ampliada"
          >
            <button
              onClick={close}
              aria-label="Fechar visualização"
              className="absolute right-5 top-5 text-white/80 transition-colors hover:text-tiffany-400"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={showPrev}
              aria-label="Imagem anterior"
              className="absolute left-3 text-white/80 transition-colors hover:text-tiffany-400 sm:left-6"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[80vh] w-full max-w-3xl"
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                width={1200}
                height={1200}
                className="mx-auto max-h-[80vh] w-auto rounded-xl object-contain"
              />
            </motion.div>

            <button
              onClick={showNext}
              aria-label="Próxima imagem"
              className="absolute right-3 text-white/80 transition-colors hover:text-tiffany-400 sm:right-6"
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
