# Ana Júlia — 15 Anos 🦋

Site oficial da festa de 15 anos da Ana Júlia. Tema **Borboletas Azuis** —
elegância, transformação, liberdade e sofisticação.

Construído com **Next.js 15 (App Router)**, **React 19**, **TypeScript**,
**Tailwind CSS**, **Framer Motion**, **Lucide React**, **React Hook Form** e
**React Icons**.

---

## ✨ Funcionalidades

- Hero com parallax e borboletas animadas em looping contínuo
- Contagem regressiva em tempo real até o evento
- Seção de história com timeline de transformação
- Cards de informações do evento com mapa incorporado
- Cronograma da noite (Recepção → Encerramento)
- Dress code com fotos ilustrativas
- Lista de presentes (Amazon, Magazine Luiza, PIX, dinheiro, outro)
- Formulário de RSVP validado (nome, telefone, acompanhantes, restrições
  alimentares, mensagem) — pronto para conectar a Google Sheets, Firebase ou
  Supabase
- Galeria com grid responsivo, lightbox, lazy loading e scroll reveal
- Dark mode automático (segue o sistema do visitante)
- Loading screen elegante, cursor personalizado, confete no dia do evento
- SEO completo: metadata, Open Graph, Twitter Cards, sitemap, robots,
  manifest e favicons
- Acessibilidade: ARIA labels, alt em imagens, navegação por teclado, foco
  visível e respeito a `prefers-reduced-motion`

---

## 🗂 Estrutura do projeto

```
app/                 Rotas do Next.js (App Router), layout, SEO, estilos globais
components/          Componentes reutilizáveis de UI
config/event.ts      ⭐ ARQUIVO ÚNICO DE CONFIGURAÇÃO — edite tudo aqui
lib/                 Funções utilitárias
hooks/                Hooks customizados (contagem regressiva, media query)
public/images/       Suas fotos (hero, dress code, galeria)
public/icons/        Favicons e ícones do manifest
public/fonts/        Espaço para fontes locais (opcional)
```

---

## 🚀 Como instalar e executar localmente

Pré-requisitos: [Node.js](https://nodejs.org) 18.18 ou superior.

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev

# 3. Acesse no navegador
http://localhost:3000
```

Para gerar a build de produção localmente:

```bash
npm run build
npm run start
```

---

## ✏️ Como personalizar o site

Praticamente **tudo** é controlado por um único arquivo:

```
config/event.ts
```

| O que alterar | Onde |
|---|---|
| Nome da debutante e monograma | `eventConfig.debutante` |
| Título, subtítulo e imagem da Hero | `eventConfig.hero` |
| **Data e hora do evento** (contagem regressiva) | `eventConfig.countdown.targetDate` |
| Texto da história/mensagem | `eventConfig.story` |
| Local, endereço e mapa | `eventConfig.location` |
| Cronograma da noite | `eventConfig.schedule` |
| Dress code | `eventConfig.dressCode` |
| Lista de presentes e links | `eventConfig.gifts` |
| Fotos da galeria | `eventConfig.gallery` |
| Telefone, WhatsApp e Instagram | `eventConfig.contact` / `eventConfig.socials` |
| Mensagem do rodapé | `eventConfig.footer` |

### Como trocar a data do evento

Abra `config/event.ts` e edite:

```ts
countdown: {
  targetDate: "2026-09-12T19:30:00-03:00", // AAAA-MM-DDTHH:mm:ss-03:00
  reachedMessage: "A grande noite chegou!",
},
```

### Como trocar imagens

1. Coloque seus arquivos em `public/images/` (ex: `hero.jpg`).
2. No `config/event.ts`, troque a URL pelo caminho local:
   ```ts
   backgroundImage: "/images/hero.jpg",
   ```
3. Repita o processo para as imagens de `dressCode.images` e `gallery`.

> Por padrão, o projeto usa imagens de exemplo do Unsplash como placeholder —
> substitua-as por fotos reais antes de publicar.

### Como alterar textos

Todos os textos visíveis (títulos, mensagens, descrições) estão centralizados
em `config/event.ts`. Não é necessário mexer nos componentes.

### Como alterar a lista de presentes

Edite o array `gifts` em `config/event.ts`. Cada item aceita:

```ts
{
  id: "amazon",
  name: "Lista Amazon",
  description: "Confira minha lista de desejos.",
  url: "https://www.amazon.com.br/seu-link",
  ctaLabel: "Ver lista",
}
```

Adicione ou remova quantos itens quiser — os cards são gerados automaticamente.

### Como alterar o local

Edite `eventConfig.location`:

```ts
location: {
  date: "12 de Setembro de 2026",
  time: "19h30",
  venueName: "Espaço Jardim Imperial",
  address: "Rua das Orquídeas, 450 — Centro, Varginha - MG",
  mapEmbedUrl: "...", // código de incorporação do Google Maps
  mapUrl: "...",       // link "como chegar"
}
```

Para obter o `mapEmbedUrl`: no Google Maps, busque o endereço → **Compartilhar**
→ **Incorporar um mapa** → copie a URL do `src` do iframe.

---

## 📬 Integração do formulário RSVP (opcional)

O formulário já está validado e funcional no front-end. Para salvar as
respostas de verdade, abra `components/RSVPForm.tsx` e localize o comentário:

```
PONTO DE INTEGRAÇÃO FUTURA — envio da confirmação de presença.
```

Lá você encontra exemplos prontos para:
- **Google Sheets** (via Google Apps Script Web App)
- **Firebase** (Firestore)
- **Supabase**

Basta descomentar/adaptar a opção escolhida.

---

## ☁️ Como publicar no GitHub

```bash
# Dentro da pasta do projeto
git init
git add .
git commit -m "Site 15 anos Ana Júlia"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

> Crie o repositório vazio primeiro em github.com/new (sem README, sem
> .gitignore — o projeto já inclui o seu).

---

## ▲ Como publicar na Vercel

**Opção 1 — pelo site (recomendado):**

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **Import Git Repository** e selecione o repositório que você
   acabou de subir no GitHub
3. A Vercel detecta automaticamente que é um projeto Next.js — não é
   necessário configurar nada
4. Clique em **Deploy**
5. Em poucos minutos seu site estará no ar em uma URL do tipo
   `seu-projeto.vercel.app`

**Opção 2 — pela CLI:**

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Domínio próprio (opcional)

No painel do projeto na Vercel: **Settings → Domains** → adicione seu domínio
(ex: `anajulia15anos.com.br`) e siga as instruções de DNS exibidas.

---

## 🧪 Comandos disponíveis

| Comando | Descrição |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Inicia o servidor local em modo desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run start` | Roda a build de produção localmente |
| `npm run lint` | Verifica o código com ESLint |

---

Feito com 🦋 para a Ana Júlia.
