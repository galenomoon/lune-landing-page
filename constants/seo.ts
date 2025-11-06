export const structuredData = {
  "@context": "https://schema.org",
  "@type": "DanceSchool",
  name: "Lune Escola de Dança",
  description:
    "Transforme sua paixão em ritmo! Escola de dança com aulas de Ballet, Hip Hop, Jazz-Funk e K-pop para todas as idades. Do iniciante ao avançado, com estrutura completa e método de ensino comprovado.",
  url: "https://www.luneescoladedanca.com",
  logo: "https://www.luneescoladedanca.com/logo-horizontal-purple.svg",
  image: "https://www.luneescoladedanca.com/og-image.png",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "SP",
    addressLocality: "São Paulo",
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
    "Escola de dança especializada em aulas de Ballet, Hip Hop, Jazz-Funk e K-pop para todas as idades.",
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
};

