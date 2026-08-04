"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { eventConfig } from "@/config/event";
import { scrollToId } from "@/lib/utils";

const LINKS = [
  { id: "historia", label: "História" },
  { id: "evento", label: "Evento" },
  { id: "cronograma", label: "Cronograma" },
  { id: "traje", label: "Dress Code" },
  { id: "presentes", label: "Presentes" },
  { id: "confirmar", label: "RSVP" },
  { id: "galeria", label: "Galeria" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel py-3 shadow-soft"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6"
        aria-label="Navegação principal"
      >
        <button
          onClick={() => handleNav("topo")}
          className={`font-display text-2xl tracking-widest transition-colors ${
            scrolled ? "text-royal-700" : "text-white"
          }`}
          aria-label="Ir para o início"
        >
          {eventConfig.debutante.monogram}
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-tiffany-500 ${
                  scrolled ? "text-royal-800" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`lg:hidden ${scrolled ? "text-royal-700" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass-panel mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-4 lg:hidden"
        >
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="block w-full rounded-lg px-4 py-3 text-left font-body text-sm uppercase tracking-wider text-royal-800 hover:bg-tiffany-50"
              >
                {link.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
