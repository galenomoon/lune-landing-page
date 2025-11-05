"use client";

//components
import AnimateIn, { AnimateImage } from "../animate-in";

//images
import logoIcon from "@/assets/logo-ballerina-purple.svg";
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "@/utils/openWhatsApp";

export default function SectionFinal() {
  return (
    <section className="w-full min-h-dvh items-center relative flex overflow-hidden">
      <section className="max-w-7xl mx-auto m-6 w-full min-h-dvh items-center flex relative">
        <article className="flex flex-col h-fit max-w-2xl gap-3 relative">
          <AnimateIn delay={0}>
            <h2 className="text-8xl">
              AINDA COM <br />
              <span className="font-bold">DÚVIDAS?</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.7}>
            <p className="text-2xl mb-5">
              Nossa equipe está pronta para te ajudar.{" "}
              <span className="font-bold">Fale conosco pelo whatsapp</span> e
              descubra como podemos te ajudar a transformar sua vida através da
              dança.
            </p>
            <Button
              onClick={() => openWhatsApp()}
              className="bg-[#50B820] text-white text-[18px] gap-2 px-6! max-w-fit py-2 h-fit w-fit"
            >
              <FaWhatsapp className="size-5" />
              <p className="font-bold uppercase">
                Iniciar conversa
              </p>
            </Button>
          </AnimateIn>
        </article>
      </section>
      <AnimateImage
        delay={0.9}
        src={logoIcon}
        alt="Lune Escola de Dança - Entre em contato conosco e transforme sua paixão em ritmo"
        width={1000}
        height={1000}
        className="absolute -right-44 bottom-0 h-auto max-h-[60dvh] md:max-h-[110dvh] object-contain z-0"
      />
    </section>
  );
}
