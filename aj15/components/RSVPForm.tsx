"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, CheckCircle2, User, Phone, Users, UtensilsCrossed, MessageSquareHeart } from "lucide-react";
import { formatPhone } from "@/lib/utils";

interface RSVPFormData {
  name: string;
  phone: string;
  guestsCount: string;
  guestsNames: string;
  dietaryRestrictions: string;
  message: string;
}

export default function RSVPForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RSVPFormData>({
    defaultValues: {
      name: "",
      phone: "",
      guestsCount: "0",
      guestsNames: "",
      dietaryRestrictions: "",
      message: "",
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const guestsCount = Number(watch("guestsCount") ?? 0);

  const onSubmit = async (data: RSVPFormData) => {
    // -----------------------------------------------------------------------
    // PONTO DE INTEGRAÇÃO FUTURA — envio da confirmação de presença.
    // Escolha UMA das opções abaixo e substitua o bloco de simulação.
    //
    // OPÇÃO 1 — Google Sheets (via Google Apps Script Web App):
    //   await fetch("https://script.google.com/macros/s/SEU_SCRIPT_ID/exec", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    //
    // OPÇÃO 2 — Firebase (Firestore):
    //   import { addDoc, collection } from "firebase/firestore";
    //   import { db } from "@/lib/firebase"; // configure este arquivo
    //   await addDoc(collection(db, "rsvps"), data);
    //
    // OPÇÃO 3 — Supabase:
    //   import { supabase } from "@/lib/supabase"; // configure este arquivo
    //   await supabase.from("rsvps").insert([data]);
    // -----------------------------------------------------------------------

   const response = await fetch(
  "https://script.google.com/macros/s/AKfycbyQvxUKgDWklrUrxjG9ofqj8GAw7NNsUy2TNwov4EmmNwfF6YhilTNIOBQQqpbNF7M/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(data),
  }
);

if (!response.ok) {
  throw new Error("Erro ao enviar confirmação");
} // simulação de envio

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel mx-auto flex max-w-lg flex-col items-center rounded-3xl px-8 py-14 text-center shadow-soft"
        role="status"
      >
        <CheckCircle2 className="h-14 w-14 text-tiffany-500" aria-hidden="true" />
        <h3 className="mt-6 font-display text-3xl text-royal-800">
          Presença confirmada!
        </h3>
        <p className="mt-3 font-body text-royal-700/80">
          Muito obrigada por fazer parte dessa noite especial. Nos vemos em
          breve!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 font-body text-sm uppercase tracking-widest text-tiffany-600 underline underline-offset-4"
        >
          Enviar outra confirmação
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="glass-panel mx-auto max-w-2xl rounded-3xl px-6 py-10 shadow-soft sm:px-10 sm:py-14"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 flex items-center gap-2 font-body text-sm text-royal-800">
            <User className="h-4 w-4 text-tiffany-600" aria-hidden="true" />
            Nome completo
          </label>
          <input
            id="name"
            type="text"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name", { required: "Por favor, informe seu nome." })}
            className="w-full rounded-xl border border-silver-300 bg-white px-4 py-3 font-body text-royal-900 outline-none transition-colors focus:border-tiffany-500"
            placeholder="Seu nome completo"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 flex items-center gap-2 font-body text-sm text-royal-800">
            <Phone className="h-4 w-4 text-tiffany-600" aria-hidden="true" />
            Telefone
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone", {
              required: "Informe um telefone para contato.",
              minLength: { value: 14, message: "Telefone incompleto." },
            })}
            onChange={(e) => setValue("phone", formatPhone(e.target.value))}
            className="w-full rounded-xl border border-silver-300 bg-white px-4 py-3 font-body text-royal-900 outline-none transition-colors focus:border-tiffany-500"
            placeholder="(00) 00000-0000"
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="guestsCount" className="mb-2 flex items-center gap-2 font-body text-sm text-royal-800">
            <Users className="h-4 w-4 text-tiffany-600" aria-hidden="true" />
            Acompanhantes
          </label>
          <select
            id="guestsCount"
            {...register("guestsCount")}
            className="w-full rounded-xl border border-silver-300 bg-white px-4 py-3 font-body text-royal-900 outline-none transition-colors focus:border-tiffany-500"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        {guestsCount > 0 && (
          <div className="sm:col-span-2">
            <label htmlFor="guestsNames" className="mb-2 flex items-center gap-2 font-body text-sm text-royal-800">
              <Users className="h-4 w-4 text-tiffany-600" aria-hidden="true" />
              Nome dos acompanhantes
            </label>
            <input
              id="guestsNames"
              type="text"
              aria-invalid={!!errors.guestsNames}
              aria-describedby={errors.guestsNames ? "guestsNames-error" : undefined}
              {...register("guestsNames", {
                required: guestsCount > 0 ? "Informe o nome dos acompanhantes." : false,
              })}
              className="w-full rounded-xl border border-silver-300 bg-white px-4 py-3 font-body text-royal-900 outline-none transition-colors focus:border-tiffany-500"
              placeholder="Ex: Maria Silva, João Souza"
            />
            {errors.guestsNames && (
              <p id="guestsNames-error" role="alert" className="mt-1.5 text-xs text-red-600">
                {errors.guestsNames.message}
              </p>
            )}
          </div>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="dietaryRestrictions" className="mb-2 flex items-center gap-2 font-body text-sm text-royal-800">
            <UtensilsCrossed className="h-4 w-4 text-tiffany-600" aria-hidden="true" />
            Restrições alimentares
          </label>
          <input
            id="dietaryRestrictions"
            type="text"
            {...register("dietaryRestrictions")}
            className="w-full rounded-xl border border-silver-300 bg-white px-4 py-3 font-body text-royal-900 outline-none transition-colors focus:border-tiffany-500"
            placeholder="Opcional — ex: vegetariano, sem glúten..."
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 flex items-center gap-2 font-body text-sm text-royal-800">
            <MessageSquareHeart className="h-4 w-4 text-tiffany-600" aria-hidden="true" />
            Mensagem para Ana Júlia
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="w-full resize-none rounded-xl border border-silver-300 bg-white px-4 py-3 font-body text-royal-900 outline-none transition-colors focus:border-tiffany-500"
            placeholder="Deixe uma mensagem carinhosa..."
          />
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-tiffany-500 px-8 py-4 font-body text-sm uppercase tracking-widest text-white shadow-glow transition-colors hover:bg-tiffany-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Confirmar
          </>
        )}
      </motion.button>
    </form>
  );
}
