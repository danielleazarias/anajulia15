// =============================================================================
// ARQUIVO CENTRAL DE CONFIGURAÇÃO DO EVENTO
// -----------------------------------------------------------------------------
// Este é o ÚNICO arquivo que você precisa editar para personalizar o site.
// Altere os valores abaixo (nomes, datas, textos, links, endereços) e o site
// inteiro será atualizado automaticamente, pois todos os componentes leem
// as informações a partir daqui.
// =============================================================================

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

export interface GiftOption {
  id: string;
  name: string;
  description: string;
  url: string;
  ctaLabel: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export const eventConfig = {
  // ---------------------------------------------------------------------------
  // IDENTIDADE
  // ---------------------------------------------------------------------------
  debutante: {
    firstName: "Ana Júlia",
    fullName: "Ana Júlia",
    monogram: "AJ",
  },

  site: {
    title: "Ana Júlia | Meus 15 Anos",
    description:
      "Celebre comigo essa noite de transformação, liberdade e novos sonhos. Confira todos os detalhes da minha festa de 15 anos.",
    url: "https://ana-julia-15-anos.vercel.app",
    locale: "pt_BR",
    themeColor: "#1B2A6B",
  },

  hero: {
    title: "Os sonhos criam asas",
    subtitle: "Meus 15 anos",
    ctaPrimary: "Confirmar Presença",
    ctaSecondary: "Ver Local",
    backgroundImage:
      "/images/WhatsApp Image 2026-08-09 at 08.37.32.jpeg",
  },

  // ---------------------------------------------------------------------------
  // DATA E HORA DO EVENTO
  // Formato ISO 8601 — altere apenas os números abaixo.
  // ---------------------------------------------------------------------------
  countdown: {
    // 12 de setembro de 2026, às 20h30 (horário de Brasília, -03:00)
    targetDate: "2026-09-12T19:30:00-03:00",
    reachedMessage: "A grande noite chegou!",
  },

  // ---------------------------------------------------------------------------
  // HISTÓRIA / MENSAGEM DA DEBUTANTE
  // ---------------------------------------------------------------------------
  story: {
    eyebrow: "Uma nova etapa",
    title: "Cada borboleta representa uma transformação",
    paragraphs: [
      "Cada borboleta representa transformação, liberdade e novos sonhos.",
      "Celebrar meus quinze anos é comemorar uma nova etapa da minha vida, marcada pelo crescimento, pelos aprendizados e pela alegria de compartilhar esse momento com as pessoas que fazem parte da minha história.",
      "Espero você para viver comigo uma noite inesquecível.",
    ],
    timeline: [
      {
        year: "Infância",
        label: "A lagarta",
        text: "Os primeiros passos, os primeiros sonhos e uma vida inteira para descobrir.",
      },
      {
        year: "Adolescência",
        label: "O casulo",
        text: "Anos de aprendizado, crescimento e transformação silenciosa.",
      },
      {
        year: "15 anos",
        label: "O voo",
        text: "O momento de abrir as asas e viver uma noite inesquecível ao lado de quem amo.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // LOCAL E ENDEREÇO
  // ---------------------------------------------------------------------------
  location: {
    date: "12 de Setembro de 2026",
    time: "20h30",
    venueName: "Fly Eventos",
    address: "Avenida Francisco Gonçalves Valim, 730 — Rezende, Varginha - MG, 37062-200",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Avenida+Francisco+Goncalves+Valim,+730,+Varginha,+MG&output=embed",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Avenida+Francisco+Goncalves+Valim,+730,+Varginha,+MG",
    howToArriveLabel: "Como chegar",
  },

  // ---------------------------------------------------------------------------
  // CRONOGRAMA DO EVENTO
  // ---------------------------------------------------------------------------
  schedule: [
    {
      time: "20h30",
      title: "Recepção",
      description: "Chegada dos convidados com boas-vindas e welcome drink.",
    },
    {
      time: "22h00",
      title: "Cerimônia",
      description: "Entrada da debutante e homenagem especial da família.",
    },
    {
      time: "22h45",
      title: "Jantar",
      description: "Jantar completo servido harmonizado com o clima da noite.",
    },
    {
      time: "00h00",
      title: "Valsa",
      description: "A tradicional valsa de 15 anos.",
    },
    {
      time: "00h30",
      title: "Balada",
      description: "Pista de dança liberada com DJ ao vivo até o fim da festa.",
    },
    {
      time: "04h00",
      title: "Encerramento",
      description: "Última dança e despedida com muito carinho.",
    },
  ] as ScheduleItem[],

  // ---------------------------------------------------------------------------
  // DRESS CODE
  // ---------------------------------------------------------------------------
  dressCode: {
  title: "Traje Esporte Fino",
  description:
    "Uma noite especial merece uma produção à altura. Escolha um look elegante, confortável e que tenha a sua personalidade.",
  suggestions: [
    { label: "Para elas", detail: "Vestido, conjunto ou outra produção em estilo esporte fino" },
    { label: "Para eles", detail: "Camisa social, blazer ou traje em estilo esporte fino" },
    { label: "Importante", detail: "Evite trajes muito casuais, como bermuda e chinelo" },
    ],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1200&auto=format&fit=crop",
    ],
  },

// ---------------------------------------------------------------------------
// LISTA DE PRESENTES
// Presentes simbólicos com pagamento via Mercado Pago.
// ---------------------------------------------------------------------------
gifts: [

  {
    id: "sorvete",
    name: "🍦 Sorvetinho com as amigas",
    description: "Um momento gostoso com as amigas para aproveitar e criar boas memórias. — R$ 50,00",
    url: "https://mpago.la/2ZBZHot",
    ctaLabel: "Presentear",
  },
  {
    id: "cinema",
    name: "🍿 Cinema + pipoca",
    description: "Uma sessão de cinema com direito a pipoca e muita diversão. — R$ 75,00",
    url: "https://mpago.la/2Fk1AWh",
    ctaLabel: "Presentear",
  },
  {
    id: "pizza",
    name: "🍕 Noite da pizza",
    description: "Uma noite deliciosa para curtir com quem ela ama. — R$ 100,00",
    url: "https://mpago.la/2MomBvi",
    ctaLabel: "Presentear",
  },
  {
    id: "beleza",
    name: "💅 Dia de beleza",
    description: "Um dia especial para se cuidar, relaxar e ficar ainda mais linda. — R$ 220,00",
    url: "https://mpago.la/1jiquKq",
    ctaLabel: "Presentear",
  },
  {
    id: "look",
    name: "👗 Look novo",
    description: "Uma ajudinha para escolher aquele look que é a cara da Juju. — R$ 330,00",
    url: "https://mpago.la/24xoMu7",
    ctaLabel: "Presentear",
  },
  {
    id: "ilhabela",
    name: "🏖️ Cota viagem para Ilhabela",
    description: "Uma contribuição para viver dias incríveis e colecionar novas memórias. — R$ 350,00",
    url: "https://mpago.la/2AmDpdC",
    ctaLabel: "Presentear",
  },
  {
    id: "mala",
    name: "🧳 Mala pronta para a próxima viagem",
    description: "Uma ajudinha para preparar as malas para a próxima aventura. — R$ 450,00",
    url: "https://mpago.la/2Py8Awh",
    ctaLabel: "Presentear",
  },
  {
    id: "viagem-sonhos",
    name: "✈️ Cota viagem dos sonhos",
    description: "Para ajudar a transformar novos destinos em histórias inesquecíveis. — R$ 550,00",
    url: "https://mpago.la/2MjXVYj",
    ctaLabel: "Presentear",
  },
  {
    id: "shopping",
    name: "🛍️ Dia de princesa no shopping",
    description: "Um dia para passear, escolher algumas coisinhas e aproveitar muito. — R$ 600,00",
    url: "https://mpago.la/2FZk4dK",
    ctaLabel: "Presentear",
  },
  {
    id: "passagem",
    name: "✈️ Ajuda para a próxima passagem aérea",
    description: "Uma contribuição especial para levar a Juju à próxima aventura. — R$ 1.000,00",
    url: "https://mpago.la/177mcBn",
    ctaLabel: "Presentear",
  },
  {
    id: "valor-livre",
    name: "💙 Escolha o valor do seu presente",
    description: "Prefere escolher outro valor? Fique à vontade para presentear como quiser.",
    url: "https://link.mercadopago.com.br/juju15anos",
    ctaLabel: "Escolher valor",
  },
  {
    id: "pix",
    name: "💠 Prefere presentear via PIX?",
    description: "Chave PIX: 151.244.246-13 — Ana Júlia",
    url: "#",
    ctaLabel: "Copiar chave PIX",
  },
] as GiftOption[],

  // ---------------------------------------------------------------------------
  // GALERIA (imagens placeholder — substitua pelos arquivos reais em /public/images)
  // ---------------------------------------------------------------------------
 gallery: [

  {
    id: "g3",
    src: "/images/WhatsApp Image 2026-08-09 at 08.33.31.jpeg",
    alt: "Ana Júlia",
  },
  {
    id: "g4",
    src: "/images/WhatsApp Image 2026-08-09 at 08.37.32.jpeg",
    alt: "Ana Júlia",
  },
] as GalleryImage[],

  // ---------------------------------------------------------------------------
  // CONTATO E REDES SOCIAIS
  // ---------------------------------------------------------------------------
  contact: {
    phone: "+55 35 90000-0000",
    whatsapp: "5535900000000",
    instagram: {
      handle: "@anajulia15anos",
      url: "https://instagram.com/anajulia15anos",
    },
  },

  socials: [
    { id: "instagram", label: "Instagram", url: "https://instagram.com/anajulia15anos" },
    { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/5535900000000" },
  ] as SocialLink[],

  footer: {
    message: "Obrigada por fazer parte da minha história. Com carinho, Ana Júlia.",
  },
};

export type EventConfig = typeof eventConfig;
