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
    subtitle: "Os meus 15 anos",
    ctaPrimary: "Confirmar Presença",
    ctaSecondary: "Ver Local",
    backgroundImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop",
  },

  // ---------------------------------------------------------------------------
  // DATA E HORA DO EVENTO
  // Formato ISO 8601 — altere apenas os números abaixo.
  // ---------------------------------------------------------------------------
  countdown: {
    // 12 de setembro de 2026, às 19h30 (horário de Brasília, -03:00)
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
    time: "19h30",
    venueName: "Espaço Jardim Imperial",
    address: "Rua das Orquídeas, 450 — Centro, Varginha - MG, 37002-000",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.0!2d-45.4306!3d-21.5533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMzJzExLjkiUyA0NcKwMjUnNTAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1690000000000",
    mapUrl: "https://maps.google.com/?q=Rua+das+Orquídeas,450,Varginha,MG",
    howToArriveLabel: "Como chegar",
  },

  // ---------------------------------------------------------------------------
  // CRONOGRAMA DO EVENTO
  // ---------------------------------------------------------------------------
  schedule: [
    {
      time: "19h30",
      title: "Recepção",
      description: "Chegada dos convidados com boas-vindas e welcome drink.",
    },
    {
      time: "20h00",
      title: "Cerimônia",
      description: "Entrada da debutante e homenagem especial da família.",
    },
    {
      time: "20h45",
      title: "Jantar",
      description: "Jantar completo servido harmonizado com o clima da noite.",
    },
    {
      time: "22h00",
      title: "Valsa",
      description: "A tradicional valsa de 15 anos ao lado do pai e amigos.",
    },
    {
      time: "22h30",
      title: "Balada",
      description: "Pista de dança liberada com DJ ao vivo até o fim da festa.",
    },
    {
      time: "01h00",
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
      "Para viver essa noite com toda a elegância que ela merece, sugerimos tons de azul, prata e branco — inspirados no voo das borboletas. Evite branco total (reservado à debutante) e jeans.",
    suggestions: [
      { label: "Tons sugeridos", detail: "Azul royal, azul tiffany, prata e branco" },
      { label: "Evitar", detail: "Branco total e jeans" },
      { label: "Trajes", detail: "Vestido longo ou midi / Terno ou blazer" },
    ],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  // ---------------------------------------------------------------------------
  // LISTA DE PRESENTES
  // Adicione, remova ou edite itens livremente nesta lista.
  // ---------------------------------------------------------------------------
  gifts: [
    {
      id: "amazon",
      name: "Lista Amazon",
      description: "Confira minha lista de desejos selecionada com carinho.",
      url: "https://www.amazon.com.br/",
      ctaLabel: "Ver lista",
    },
    {
      id: "magalu",
      name: "Magazine Luiza",
      description: "Outra opção de lista de presentes com entrega facilitada.",
      url: "https://www.magazineluiza.com.br/",
      ctaLabel: "Ver lista",
    },
    {
      id: "outro",
      name: "Outra Loja",
      description: "Lista adicional em loja parceira do evento.",
      url: "https://www.example.com/",
      ctaLabel: "Ver lista",
    },
    {
      id: "pix",
      name: "PIX",
      description: "Chave PIX: (35) 90000-0000 — Ana Júlia",
      url: "#",
      ctaLabel: "Copiar chave",
    },
    {
      id: "dinheiro",
      name: "Presente em Dinheiro",
      description: "Haverá uma urna especial disponível durante a festa.",
      url: "#",
      ctaLabel: "Saiba mais",
    },
  ] as GiftOption[],

  // ---------------------------------------------------------------------------
  // GALERIA (imagens placeholder — substitua pelos arquivos reais em /public/images)
  // ---------------------------------------------------------------------------
  gallery: [
    { id: "g1", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop", alt: "Momento especial 1" },
    { id: "g2", src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop", alt: "Momento especial 2" },
    { id: "g3", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", alt: "Momento especial 3" },
    { id: "g4", src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop", alt: "Momento especial 4" },
    { id: "g5", src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop", alt: "Momento especial 5" },
    { id: "g6", src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop", alt: "Momento especial 6" },
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
