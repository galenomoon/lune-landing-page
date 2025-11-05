//components
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SectionFeedbacks from "@/components/sections/section-feedbacks";
import SectionHeader from "@/components/sections/section-header";
import Separator from "@/components/separator";
import SectionModalities from "@/components/sections/section-modalities";
import SectionFAQ from "@/components/sections/section-faq";
import SectionFinal from "@/components/sections/section-final";

export default function Home() {
  const structuredData = {
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

  const organizationStructuredData = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <main className="flex flex-col min-h-dvh h-full bg-secondary text-primary">
        <Navbar />
        <section id="section-header" aria-label="Cabeçalho principal">
          <SectionHeader />
        </section>
        <Separator color="primary" words={["Urbanas", "Clássicas", "Brasileiras", "Internacionais"]}/>
        <section id="section-modalities" aria-label="Modalidades de dança oferecidas">
          <SectionModalities />
        </section>
        <Separator color="secondary" words={["Urbanas", "Clássicas", "Brasileiras", "Internacionais"]}/>
        <section id="section-feedbacks" aria-label="Depoimentos de alunos">
          <SectionFeedbacks />
        </section>
        <Separator color="secondary" words={["Urbanas", "Clássicas", "Brasileiras", "Internacionais"]}/>
        <section id="section-faq" aria-label="Perguntas frequentes">
          <SectionFAQ />
        </section>
        <Separator color="primary" words={["Urbanas", "Clássicas", "Brasileiras", "Internacionais"]}/>
        <section id="section-final" aria-label="Entre em contato">
          <SectionFinal />
        </section>
        <Footer />
      </main>
    </>
  );
}
