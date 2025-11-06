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
  return (
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
  );
}
