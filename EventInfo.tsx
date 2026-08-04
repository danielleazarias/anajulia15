"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { eventConfig } from "@/config/event";

const cards = [
  { icon: Calendar, label: "Data", value: eventConfig.location.date },
  { icon: Clock, label: "Horário", value: eventConfig.location.time },
  { icon: MapPin, label: "Local", value: eventConfig.location.venueName },
  { icon: Navigation, label: "Endereço", value: eventConfig.location.address },
];

export default function EventInfo() {
  return (
    <section id="evento" className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="divider-ornate text-center font-body text-xs uppercase tracking-widest2 text-tiffany-600"
        >
          Detalhes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-center font-display text-4xl text-royal-800 sm:text-5xl"
        >
          O grande dia
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center rounded-2xl border border-silver-200 bg-ivory px-6 py-10 text-center shadow-soft transition-shadow hover:shadow-glow"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-royal-gradient text-white transition-transform group-hover:scale-110">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-5 font-body text-xs uppercase tracking-widest text-tiffany-600">
                {card.label}
              </span>
              <span className="mt-2 font-display text-xl text-royal-800">
                {card.value}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-3xl border border-silver-200 shadow-soft"
        >
          <iframe
            title="Mapa do local do evento"
            src={eventConfig.location.mapEmbedUrl}
            className="h-80 w-full grayscale-[15%] sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mt-8 flex justify-center">
          <a
            href={eventConfig.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-royal-700 px-8 py-3.5 font-body text-sm uppercase tracking-widest text-white shadow-soft transition-transform hover:scale-105 hover:bg-royal-800"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            {eventConfig.location.howToArriveLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
