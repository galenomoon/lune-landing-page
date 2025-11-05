import React from "react";
import Image from "next/image";

//images
import logoIcon from "@/assets/logo-icon-yellow.svg";

//components
import { Faq } from "../faq";

export default function SectionFAQ() {
  return (
    <section className="w-full min-h-dvh h-fit items-center bg-primary text-primary-foreground py-10 relative flex overflow-hidden">
      <section className="max-w-7xl mx-auto m-6 w-full flex flex-col gap-10 relative">
        <header className="flex justify-between items-center w-full">
          <h2 className="text-8xl font-bold tracking-tighter leading-21 uppercase text-secondary">
            DÚVIDAS <br />
            FREQUENTES
          </h2>
          <Image src={logoIcon} alt="FAQ" width={200} height={200} />
        </header>
        <Faq />
      </section>
    </section>
  );
}
