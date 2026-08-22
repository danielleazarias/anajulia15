"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { eventConfig } from "@/config/event";

export default function Gallery() {
  const images = eventConfig.gallery;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, [images.length]);

  // Troca automática da foto a cada 6 segundos
  useEffect(() => {
    if (isPaused || lightboxOpen || images.length <= 1) return;

    const interval = setInterval(() => {
      showNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, lightboxOpen, images.length, showNext]);

  // Teclado no lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, showPrev, showNext]);

  if (!images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* TÍTULO */}
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-center font-body text-sm leading-relaxed text-royal-700/70"
        >
          Algumas memórias que fazem parte dessa história tão especial.
        </motion.p>

        {/* CARROSSEL PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[520px] sm:h-[620px] lg:h-[680px]">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) showNext();
                    if (info.offset.x > 70) showPrev();
                  }}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    priority={currentIndex === 0}
                    className="object-contain p-3 sm:p-5"
                    sizes="(max-width: 768px) 100vw, 1100px"
                  />
                </motion.div>
              </AnimatePresence>

              {/* SOMBRA SUAVE */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal-900/25 via-transparent to-transparent" />

              {/* BOTÃO AMPLIAR */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label="Ampliar imagem"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-royal-800 shadow-md backdrop-blur transition hover:bg-white sm:right-6 sm:top-6"
              >
                <Maximize2 className="h-5 w-5" />
              </button>

              {/* SETA ESQUERDA */}
              <button
                type="button"
                onClick={showPrev}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-royal-800 shadow-md backdrop-blur transition hover:bg-white sm:left-6 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* SETA DIREITA */}
              <button
                type="button"
                onClick={showNext}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-royal-800 shadow-md backdrop-blur transition hover:bg-white sm:right-6 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* CONTADOR */}
              <div className="absolute bottom-4 right-4 rounded-full bg-royal-900/60 px-3 py-1.5 font-body text-xs text-white backdrop-blur sm:bottom-6 sm:right-6">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          {/* BOLINHAS */}
          <div className="mt-5 flex justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para imagem ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-7 bg-tiffany-500"
                    : "w-2 bg-silver-300 hover:bg-tiffany-300"
                }`}
              />
            ))}
          </div>

          {/* MINIATURAS */}
          <div className="mt-7 overflow-x-auto pb-2">
            <div className="mx-auto flex w-max gap-3 px-1">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Selecionar ${image.alt}`}
                  className={`relative h-20 w-20 flex-none overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-24 sm:w-24 ${
                    currentIndex === index
                      ? "scale-105 border-tiffany-500 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center font-body text-xs text-royal-700/55 sm:hidden">
            Deslize para o lado para ver mais fotos
          </p>
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-royal-950/95 px-4"
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da galeria"
          >
            {/* FECHAR */}
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Fechar visualização"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X className="h-7 w-7" />
            </button>

            {/* ANTERIOR */}
            <button
              type="button"
              onClick={showPrev}
              aria-label="Imagem anterior"
              className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                className="relative h-[75vh] w-full max-w-5xl"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain"
                  sizes="95vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* PRÓXIMA */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Próxima imagem"
              className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-6 rounded-full bg-white/10 px-4 py-2 font-body text-xs text-white/80 backdrop-blur">
              {currentIndex + 1} de {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
