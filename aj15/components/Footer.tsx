"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { eventConfig } from "@/config/event";

const ICONS: Record<string, React.ElementType> = {
  instagram: Instagram,
  whatsapp: MessageCircle,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-royal-900 py-16 text-center">
      <div className="mx-auto max-w-2xl px-6">
       <motion.img
  src="/images/monograma-aj-prateado.png"
  alt="Monograma Ana Júlia"
  initial={{ opacity: 0, y: 12, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mx-auto h-auto w-24 object-contain drop-shadow-lg sm:w-28"
/>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-2xl text-white sm:text-3xl"
        >
          {eventConfig.footer.message}
        </motion.p>

        <div className="mt-8 flex justify-center gap-5">
          {eventConfig.socials.map((social) => {
            const Icon = ICONS[social.id] ?? Instagram;
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-tiffany-400/30 text-tiffany-300 transition-colors hover:bg-tiffany-500 hover:text-white"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <p className="mt-10 font-body text-xs uppercase tracking-widest text-silver-500">
          © {year} {eventConfig.debutante.firstName} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
