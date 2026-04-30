# SEO Fixes + Location Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir erros críticos de SEO local (cidade errada, endereço incompleto) e adicionar seção "Onde Estamos" com mapa do Google Maps.

**Architecture:** Três camadas de mudança independentes — (1) dados estruturados JSON-LD em `constants/seo.ts`, (2) metadata do Next.js em `app/layout.tsx`, (3) novo componente de seção em `components/sections/section-location.tsx` adicionado à página em `app/page.tsx`.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, React Icons

---

## File Map

| Ação | Arquivo | O que muda |
|------|---------|-----------|
| Modify | `constants/seo.ts` | Corrige cidade, adiciona endereço completo, geo coords, hasMap |
| Modify | `app/layout.tsx` | Corrige keywords, geo.placename, adiciona geo.position e ICBM |
| Create | `components/sections/section-location.tsx` | Nova seção com mapa embed e endereço |
| Modify | `app/page.tsx` | Adiciona `<SectionLocation>` entre FAQ e SectionFinal |

---

## Task 1: Corrigir structured data em `constants/seo.ts`

**Files:**
- Modify: `constants/seo.ts`

- [ ] **Step 1: Substituir o conteúdo de `constants/seo.ts`**

```typescript
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: "Lune Escola de Dança",
  description:
    "Transforme sua paixão em ritmo! Escola de dança com aulas de Ballet, Hip Hop, Jazz-Funk e K-pop para todas as idades. Do iniciante ao avançado, com estrutura completa e método de ensino comprovado.",
  url: "https://www.luneescoladedanca.com",
  logo: "https://www.luneescoladedanca.com/logo-horizontal-purple.svg",
  image: "https://www.luneescoladedanca.com/og-image.png",
  hasMap: "https://maps.app.goo.gl/DzUc6XpBfq7AATscA",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Santa Maria, 229",
    addressLocality: "Jundiaí",
    addressRegion: "SP",
    postalCode: "13218-060",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.1864,
    longitude: -46.8964,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-95397-9723",
    contactType: "Customer Service",
    availableLanguage: "Portuguese",
    areaServed: "BR",
  },
  sameAs: [
    "https://www.instagram.com/lunedanca",
    "https://www.facebook.com/61581629487856",
  ],
  offers: {
    "@type": "Offer",
    description: "Aulas de dança para todas as idades e níveis",
    category: "Dance Classes",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Modalidades de Dança",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Ballet",
          description:
            "Aprimore sua postura, ganhe graciosidade e fortaleça o corpo com a técnica que é a base de todas as danças.",
          courseMode: "Presencial",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Hip Hop",
          description:
            "Domine o freestyle e a musicalidade. Aumente sua resistência física e confiança com movimentos poderosos e urbanos.",
          courseMode: "Presencial",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Jazz-Funk",
          description:
            "Liberte sua atitude! Movimentos intensos e cheios de personalidade que elevam sua coordenação e expressão corporal.",
          courseMode: "Presencial",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "K-pop",
          description:
            "Aprenda as coreografias virais dos seus MVs favoritos. Melhore sua memória e dance com a energia e o ritmo da cultura pop coreana.",
          courseMode: "Presencial",
        },
      },
    ],
  },
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lune Escola de Dança",
  url: "https://www.luneescoladedanca.com",
  logo: "https://www.luneescoladedanca.com/logo-horizontal-purple.svg",
  description:
    "Escola de dança especializada em aulas de Ballet, Hip Hop, Jazz-Funk e K-pop para todas as idades em Jundiaí, SP.",
  sameAs: [
    "https://www.instagram.com/lunedanca",
    "https://www.facebook.com/61581629487856",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-11-95397-9723",
    contactType: "Customer Service",
    availableLanguage: "Portuguese",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Santa Maria, 229",
    addressLocality: "Jundiaí",
    addressRegion: "SP",
    postalCode: "13218-060",
    addressCountry: "BR",
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add constants/seo.ts
git commit -m "fix(seo): correct address to Jundiaí and add geo coordinates"
```

---

## Task 2: Corrigir metadata em `app/layout.tsx`

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Substituir o bloco `keywords` — adicionar termos de Jundiaí**

Localizar o array `keywords` (linha ~37) e substituir por:

```typescript
  keywords: [
    "escola de dança",
    "aulas de dança",
    "ballet",
    "hip hop",
    "jazz funk",
    "k-pop",
    "dança urbana",
    "dança clássica",
    "aulas de dança para iniciantes",
    "aulas de dança para todas as idades",
    "escola de dança Jundiaí",
    "aulas de dança Jundiaí",
    "dança Jundiaí",
    "escola de dança Ponte São João",
    "curso de dança Jundiaí",
    "estúdio de dança Jundiaí",
    "aprender dança Jundiaí",
    "dança contemporânea",
    "aprender dança",
    "estúdio de dança",
    "Lune",
    "Lune Escola de Dança",
    "transforme sua paixão em ritmo",
  ],
```

- [ ] **Step 2: Substituir o bloco `other` — corrigir cidade e adicionar coordenadas**

Localizar o objeto `other` (linha ~107) e substituir por:

```typescript
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Jundiaí",
    "geo.position": "-23.1864;-46.8964",
    "ICBM": "-23.1864, -46.8964",
    "format-detection": "telephone=yes",
  },
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "fix(seo): update metadata to Jundiaí with geo coordinates"
```

---

## Task 3: Criar componente `section-location.tsx`

**Files:**
- Create: `components/sections/section-location.tsx`

- [ ] **Step 1: Criar o arquivo com o componente**

```typescript
import AnimateIn from "@/components/animate-in";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=R.+Santa+Maria,+229,+Ponte+São+João,+Jundiaí,+SP,+13218-060,+Brazil&output=embed&hl=pt-BR";

const MAPS_URL = "https://maps.app.goo.gl/DzUc6XpBfq7AATscA";

export default function SectionLocation() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <AnimateIn delay={0}>
          <h2 className="text-6xl md:text-8xl text-center md:text-start">
            ONDE <span className="font-bold">ESTAMOS</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="w-full rounded-2xl overflow-hidden border-2 border-primary/10">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Lune Escola de Dança"
            />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="flex items-start gap-3 text-center sm:text-start">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-xl" />
              <p className="text-lg md:text-xl">
                R. Santa Maria, 229 — Ponte São João
                <br />
                <span className="opacity-70">Jundiaí – SP, 13218-060</span>
              </p>
            </div>

            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button className="max-w-fit">Como chegar →</Button>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/section-location.tsx
git commit -m "feat: add SectionLocation component with Google Maps embed"
```

---

## Task 4: Adicionar seção à página em `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Importar `SectionLocation`**

Adicionar ao bloco de imports no topo do arquivo:

```typescript
import SectionLocation from "@/components/sections/section-location";
```

- [ ] **Step 2: Inserir seção entre FAQ e SectionFinal**

Substituir:

```tsx
        <Separator color="primary" words={words}/>
        <section id="section-final" aria-label="Entre em contato">
          <SectionFinal />
        </section>
```

Por:

```tsx
        <Separator color="secondary" words={words}/>
        <section id="section-location" aria-label="Localização da escola">
          <SectionLocation />
        </section>
        <Separator color="primary" words={words}/>
        <section id="section-final" aria-label="Entre em contato">
          <SectionFinal />
        </section>
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add location section to homepage between FAQ and CTA"
```

---

## Task 5: Verificação visual

- [ ] **Step 1: Rodar o servidor de desenvolvimento**

```bash
npm run dev
```

- [ ] **Step 2: Verificar no browser (http://localhost:3000)**

Checklist:
- Seção "ONDE ESTAMOS" aparece entre FAQ e CTA de WhatsApp
- Mapa do Google Maps renderiza corretamente
- Botão "Como chegar →" abre o link do Maps
- Endereço está exibido corretamente
- Animações de entrada funcionam no scroll

- [ ] **Step 3: Validar structured data**

Abrir http://localhost:3000 e inspecionar o HTML — verificar que os `<script type="application/ld+json">` contém `"addressLocality": "Jundiaí"` e o campo `geo`.

Ou usar o validador: https://validator.schema.org/

- [ ] **Step 4: Commit final**

```bash
git add -A
git commit -m "chore: verify SEO and location section implementation"
```
