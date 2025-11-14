"use client";

//components
import AnimateIn, { AnimateImage } from "../animate-in";

//images
import logoIcon from "@/assets/logo-icon-purple.svg";
// import { Button } from "../ui/button";
// import { FaWhatsapp } from "react-icons/fa";
// import { openWhatsApp } from "@/utils/openWhatsApp";

export default function SectionHeader() {
  return (
    <section className="w-full h-[90dvh] items-center relative flex overflow-hidden">
      <section className="max-w-7xl mx-auto m-6 w-full md:text-start text-center min-h-dvh items-center flex relative">
        <article className="flex flex-col h-fit max-w-2xl gap-3 relative">
          <AnimateIn delay={0}>
            <h1 className="text-6xl md:text-8xl">
              TRANSFORME SUA <br />
              <span className="font-bold">PAIXÃO EM RITMO</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.7}>
            <p className="text-lg md:text-2xl mb-5">
              Turmas para{` `}
              <span className="font-bold">todas as idades</span>, do iniciante
              ao avançado. Conte com{` `}
              <span className="font-bold">estrutura completa</span>
              {` `}e método de ensino comprovado.
            </p>
            {/* <Button
              onClick={() => openWhatsApp()}
              className="bg-[#50B820] text-white md:text-[18px] gap-2 md:px-6! py-2 h-fit w-fit md:w-fit"
            >
              <FaWhatsapp className="size-5" />
              <p className="font-bold uppercase">fale conosco pelo whatsapp</p>
            </Button> */}
          </AnimateIn>
        </article>
      </section>
      <AnimateImage
        delay={0.9}
        src={logoIcon}
        alt="Lune Escola de Dança - Logo oficial da escola de dança especializada em Ballet, Hip Hop, Jazz-Funk e K-pop"
        width={1000}
        height={1000}
        className="md:visible invisible absolute -right-44 -bottom-24 h-auto max-h-[60dvh] md:max-h-[110dvh] object-contain z-0"
      />
    </section>
  );
}
