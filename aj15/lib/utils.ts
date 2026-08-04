export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Retorna true se a data-alvo já foi atingida.
 */
export function isPast(targetDate: string): boolean {
  return new Date(targetDate).getTime() - Date.now() <= 0;
}

/**
 * Formata um número de telefone brasileiro simples enquanto o usuário digita.
 * Ex: 11987654321 -> (11) 98765-4321
 */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
