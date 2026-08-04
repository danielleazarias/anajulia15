"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { eventConfig } from "@/config/event";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Carregando"
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-royal-gradient"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <motion.svg
              width="72"
              height="72"
              viewBox="0 0 100 100"
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.g
                animate={{ rotate: [0, -8, 0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                style={{ originX: "50%", originY: "50%" }}
              >
                <path
                  d="M50 50 C 30 10, 5 20, 15 45 C 22 60, 40 55, 50 50 Z"
                  fill="#0ABAB5"
                  opacity={0.9}
                />
                <path
                  d="M50 50 C 70 10, 95 20, 85 45 C 78 60, 60 55, 50 50 Z"
                  fill="#C7CDDB"
                  opacity={0.9}
                />
                <path
                  d="M50 50 C 35 75, 15 80, 22 60 C 28 52, 42 52, 50 50 Z"
                  fill="#0ABAB5"
                  opacity={0.7}
                />
                <path
                  d="M50 50 C 65 75, 85 80, 78 60 C 72 52, 58 52, 50 50 Z"
                  fill="#C7CDDB"
                  opacity={0.7}
                />
                <line x1="50" y1="42" x2="50" y2="62" stroke="#0D1533" strokeWidth="2" />
              </motion.g>
            </motion.svg>
            <p className="font-display text-3xl tracking-wide text-white">
              {eventConfig.debutante.monogram}
            </p>
            <p className="mt-2 font-body text-xs uppercase tracking-widest2 text-silver-300">
              {eventConfig.debutante.firstName}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
