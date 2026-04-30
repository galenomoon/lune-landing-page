# Melhorias de Conversão e SEO — Lune Escola de Dança

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar 6 melhorias de conversão e SEO selecionadas na auditoria: CTA no hero, FAQPage schema, estrelas + Review schema nos depoimentos, CTA após depoimentos, hierarquia de headings correta, e OG Image.

**Architecture:** Mudanças independentes em 6 arquivos. Nenhuma depende da outra — podem ser implementadas em qualquer ordem.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, next/og (ImageResponse)

---

## File Map

| Ação | Arquivo | O que muda |
|------|---------|-----------|
| Modify | `components/sections/section-header.tsx` | Reabilitar CTA WhatsApp comentado |
| Modify | `constants/seo.ts` | Adicionar FAQPage schema + Review schema |
| Modify | `components/structured-data.tsx` | Renderizar os novos schemas |
| Modify | `components/feedback-carousel.tsx` | Adicionar 5 estrelas visuais no FeedbackItem |
| Modify | `components/sections/section-feedbacks.tsx` | Adicionar CTA após carousel |
| Modify | `components/sections/section-modalities.tsx` | Corrigir h3 → h2 |
| Create | `app/opengraph-image.tsx` | OG Image via next/og ImageResponse |

---

## Task 1: Reabilitar CTA no Hero

**Files:**
- Modify: `components/sections/section-header.tsx`

- [ ] **Step 1: Ler o arquivo atual**

```bash
cat components/sections/section-header.tsx
```

- [ ] **Step 2: Descomentar e atualizar o bloco CTA**

Localizar o bloco comentado (linhas ~31-37) e substituir:

```tsx
{/* <Button
  onClick={() => openWhatsApp()}
  className="bg-[#50B820] text-white md:text-[18px] gap-2 md:px-6! py-2 h-fit w-fit md:w-fit"
>
  <FaWhatsapp className="size-5" />
  <p className="font-bold uppercase">fale conosco pelo whatsapp</p>
</Button> */}
```

Por (descomentado e com mensagem de aula avulsa):

```tsx
<Button
  onClick={() => openWhatsApp("Olá! Vi o site e gostaria de agendar uma aula avulsa.")}
  className="bg-[#50B820] text-white text-[18px] gap-2 px-6 py-2 h-fit w-fit"
>
  <FaWhatsapp className="size-5" />
  <p className="font-bold uppercase">Agendar aula avulsa</p>
</Button>
```

Também descomentar os imports no topo (Button, FaWhatsapp, openWhatsApp) se ainda estiverem comentados.

- [ ] **Step 3: Verificar que o arquivo compila**

```bash
cd /Users/guilhermegaleno/Desktop/claude/landing-pages/lune-landing-page && npx tsc --noEmit 2>&1 | head -20
```

Expected: sem erros de tipo.

- [ ] **Step 4: Commit**

```bash
git add components/sections/section-header.tsx
git commit -m "feat: reabilitar CTA de aula avulsa no hero"
```

---

## Task 2: FAQPage Schema e Review Schema

**Files:**
- Modify: `constants/seo.ts`
- Modify: `components/structured-data.tsx`

- [ ] **Step 1: Adicionar `faqPageStructuredData` ao final de `constants/seo.ts`**

Adicionar após o export `organizationStructuredData`:

```typescript
export const faqPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Preciso ter experiência para dançar na Lune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não! Nossas aulas são pensadas para todos os níveis, do zero até o avançado. A Lune é o espaço certo pra quem sempre quis dançar, mas nunca teve coragem de começar. Aqui você aprende no seu ritmo, com acompanhamento próximo e um ambiente leve, sem julgamentos.",
      },
    },
    {
      "@type": "Question",
      name: "Há limite de idade para participar das aulas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nenhum! Temos turmas que acolhem desde adolescentes até adultos que querem redescobrir o prazer de se movimentar. Na Lune, a dança é pra quem sente, não pra quem se encaixa num padrão.",
      },
    },
    {
      "@type": "Question",
      name: "Onde a Lune está localizada em Jundiaí?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos na R. Santa Maria, 229, Ponte São João, Jundiaí – SP, 13218-060. Uma região central e de fácil acesso, próxima a pontos de ônibus e com estacionamento por perto.",
      },
    },
    {
      "@type": "Question",
      name: "Como é a estrutura da escola?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Lune tem uma estrutura moderna: sala com espelhos e piso apropriado pra dança, som profissional e iluminação ambiente, área de descanso e recepção acolhedora. Aqui, você se sente parte de uma comunidade que vive a arte todos os dias.",
      },
    },
    {
      "@type": "Question",
      name: "Posso fazer uma aula avulsa antes de decidir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Você pode agendar sua aula avulsa agora mesmo, sem compromisso. Entre em contato pelo WhatsApp para verificar disponibilidade.",
      },
    },
    {
      "@type": "Question",
      name: "Quais estilos de dança a Lune oferece?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferecemos Ballet, Hip Hop, Jazz-Funk e K-pop. Do pop ao contemporâneo, cada aula tem uma vibe única. Nosso foco é te ajudar a se expressar e se conectar com o movimento.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a mensalidade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oferecemos planos flexíveis, você escolhe o formato que mais combina com sua rotina. O investimento é acessível, e o retorno vai muito além da dança: confiança, energia, bem-estar e autoestima.",
      },
    },
    {
      "@type": "Question",
      name: "Posso participar mesmo se nunca me achei bom dançando?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claro que sim. Na Lune, a dança é sobre liberdade, não perfeição. A gente te guia pra desbloquear seu corpo e sua mente, e cada pequena evolução é celebrada.",
      },
    },
  ],
};

export const reviewsStructuredData = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: "Lune Escola de Dança",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "4",
    bestRating: "5",
    worstRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ana Clara Martins" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Eu sempre fui muito tímida e travada. Depois de 3 meses no Jazz-Funk, não só perdi o medo de me apresentar, como me sinto muito mais confiante nas reuniões de trabalho. A Lune me ajudou a me 'soltar' de um jeito que a academia nunca conseguiu.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Larissa Oliveira" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Eu comecei no Ballet sem saber o que era um plié. Hoje, consigo fazer sequências completas na barra e já sinto minha postura completamente diferente. O método da Lune realmente funciona para quem está começando do zero.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marina Santos" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "O K-pop virou minha válvula de escape. Eu chego estressado do trabalho, mas depois da aula, sinto que liberei toda a tensão. É a minha terapia semanal.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Bianca Souza" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Eu era a 'rainha da preguiça' e sempre desistia da academia. No Hip-Hop da Lune, a energia da turma é contagiante! Ganhei resistência e fiz amigos incríveis.",
    },
  ],
};
```

- [ ] **Step 2: Atualizar `components/structured-data.tsx` para incluir os novos schemas**

Substituir o conteúdo atual por:

```typescript
import {
  structuredData,
  organizationStructuredData,
  faqPageStructuredData,
  reviewsStructuredData,
} from "@/constants/seo";

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsStructuredData) }}
      />
    </>
  );
}
```

- [ ] **Step 3: Verificar tipos**

```bash
cd /Users/guilhermegaleno/Desktop/claude/landing-pages/lune-landing-page && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 4: Commit**

```bash
git add constants/seo.ts components/structured-data.tsx
git commit -m "feat(seo): add FAQPage and Review structured data schemas"
```

---

## Task 3: Estrelas visuais nos depoimentos

**Files:**
- Modify: `components/feedback-carousel.tsx`

- [ ] **Step 1: Ler o arquivo atual**

```bash
cat components/feedback-carousel.tsx
```

- [ ] **Step 2: Adicionar bloco de 5 estrelas no `FeedbackItem`**

Dentro de `FeedbackItem`, localizar o bloco `<article>` com nome e modalidade e adicionar as estrelas logo abaixo:

```tsx
// Antes (linhas ~54-59):
<article className="flex flex-col">
  <p className="text-lg font-semibold leading-5">{feedback.name}</p>
  <p className="text-sm text-gray-500 italic font-medium">
    Aluna de {feedback.modalidade}
  </p>
</article>

// Depois:
<article className="flex flex-col gap-0.5">
  <p className="text-lg font-semibold leading-5">{feedback.name}</p>
  <p className="text-sm text-gray-500 italic font-medium">
    Aluna de {feedback.modalidade}
  </p>
  <div className="flex gap-0.5 mt-0.5" aria-label="Avaliação 5 de 5 estrelas">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-sm">★</span>
    ))}
  </div>
</article>
```

- [ ] **Step 3: Commit**

```bash
git add components/feedback-carousel.tsx
git commit -m "feat: add 5-star rating to feedback cards"
```

---

## Task 4: CTA após seção de depoimentos

**Files:**
- Modify: `components/sections/section-feedbacks.tsx`

- [ ] **Step 1: Ler o arquivo atual**

```bash
cat components/sections/section-feedbacks.tsx
```

- [ ] **Step 2: Adicionar CTA após os feedbacks**

Localizar o fechamento da `<section>` interna (após a lista mobile de feedbacks) e adicionar antes do `</section>` externo:

```tsx
// Após a section mobile de feedbacks (linha ~35), antes do </section> do max-w-7xl:
<AnimateIn delay={0.8}>
  <div className="flex flex-col items-center gap-3 text-center">
    <p className="text-xl md:text-2xl">
      Pronto para <span className="font-bold">escrever o seu relato</span>?
    </p>
    <Button
      onClick={() => openWhatsApp("Olá! Vi os depoimentos no site e quero agendar uma aula avulsa.")}
      className="bg-[#50B820] text-white text-[18px] gap-2 px-6 py-2 h-fit w-fit"
    >
      <FaWhatsapp className="size-5" />
      <p className="font-bold uppercase">Quero fazer aula também</p>
    </Button>
  </div>
</AnimateIn>
```

Adicionar imports no topo do arquivo se ainda não existirem:

```tsx
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "@/utils/openWhatsApp";
```

- [ ] **Step 3: Commit**

```bash
git add components/sections/section-feedbacks.tsx
git commit -m "feat: add conversion CTA after testimonials section"
```

---

## Task 5: Corrigir hierarquia de headings

**Files:**
- Modify: `components/sections/section-modalities.tsx`

- [ ] **Step 1: Ler o arquivo**

```bash
cat components/sections/section-modalities.tsx
```

- [ ] **Step 2: Mudar `<h3>` para `<h2>` nos títulos das modalidades**

Localizar (linha ~55):
```tsx
<h3 className="text-5xl uppercase font-bold tracking-tighter text-center md:mt-18 mt-10">
  {modality.title}
</h3>
```

Substituir por:
```tsx
<h2 className="text-5xl uppercase font-bold tracking-tighter text-center md:mt-18 mt-10">
  {modality.title}
</h2>
```

- [ ] **Step 3: Commit**

```bash
git add components/sections/section-modalities.tsx
git commit -m "fix(seo): correct heading hierarchy h3 → h2 in modalities section"
```

---

## Task 6: OG Image via next/og

**Files:**
- Create: `app/opengraph-image.tsx`

- [ ] **Step 1: Criar `app/opengraph-image.tsx`**

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lune Escola de Dança — Transforme sua paixão em ritmo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#BD14DF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px 80px",
          gap: "16px",
        }}
      >
        {/* Decorative top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#FFD400",
          }}
        />

        {/* School name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#FFD400",
            letterSpacing: "-4px",
            lineHeight: 1,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          LUNE
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: "#ffffff",
            letterSpacing: "2px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Escola de Dança
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#FFD400",
            borderRadius: "2px",
            margin: "8px 0",
            display: "flex",
          }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.3,
            maxWidth: "800px",
            display: "flex",
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          Transforme sua paixão em ritmo
        </div>

        {/* Modalities */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "16px",
          }}
        >
          {["Ballet", "Hip Hop", "Jazz-Funk", "K-pop"].map((m) => (
            <div
              key={m}
              style={{
                background: "rgba(255,212,0,0.15)",
                border: "2px solid #FFD400",
                color: "#FFD400",
                padding: "8px 20px",
                borderRadius: "100px",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "1px",
                display: "flex",
              }}
            >
              {m}
            </div>
          ))}
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "22px",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "2px",
            display: "flex",
          }}
        >
          📍 Jundiaí, SP • luneescoladedanca.com
        </div>

        {/* Decorative bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#FFD400",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
```

- [ ] **Step 2: Verificar que o Next.js reconhece o arquivo**

```bash
cd /Users/guilhermegaleno/Desktop/claude/landing-pages/lune-landing-page && npx tsc --noEmit 2>&1 | head -20
```

- [ ] **Step 3: Remover referência estática antiga do metadata (se existir)**

Em `app/layout.tsx`, verificar se existe `openGraph.images[0].url: "/og-image.png"`. Se sim, pode deixar — o Next.js vai usar `app/opengraph-image.tsx` automaticamente e sobrescrever para a rota raiz.

- [ ] **Step 4: Commit**

```bash
git add app/opengraph-image.tsx
git commit -m "feat: add dynamic OG image via next/og ImageResponse"
```
