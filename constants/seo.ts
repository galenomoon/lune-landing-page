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
