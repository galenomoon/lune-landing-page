"use client";

//components
import AnimateIn, { AnimateImage } from "../animate-in";
import { Faq } from "../faq";

//images
import logoIcon from "@/assets/logo-icon-yellow.svg";

export default function SectionFAQ() {
  return (
    <section className="w-full min-h-dvh h-fit items-center bg-primary text-primary-foreground py-10 relative flex overflow-hidden">
      <section className="max-w-7xl mx-auto m-6 w-full flex flex-col gap-10 relative px-6 md:px-0">
        <header className="flex justify-between items-center w-full">
          <AnimateIn delay={0}>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter md:leading-21 uppercase text-secondary">
              DÚVIDAS <br />
              FREQUENTES
            </h2>
          </AnimateIn>
          <AnimateImage
            delay={0.3}
            src={logoIcon}
            alt="Lune Escola de Dança - Perguntas Frequentes sobre aulas de dança"
            className="hidden md:block"
            width={200}
            height={200}
          />
        </header>
        <Faq />
      </section>
    </section>
  );
}
