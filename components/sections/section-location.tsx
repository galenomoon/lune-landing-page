import AnimateIn, { AnimateImage } from "../animate-in";
import { Button } from "../ui/button";

import logoBallerinaYellow from "@/assets/logo-ballerina-yellow.svg";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=R.+Santa+Maria,+229,+Ponte+São+João,+Jundiaí,+SP,+13218-060,+Brazil&output=embed&hl=pt-BR";

const MAPS_URL = "https://maps.app.goo.gl/DzUc6XpBfq7AATscA";

export default function SectionLocation() {
  return (
    <section className="w-full min-h-dvh h-fit items-center bg-primary text-primary-foreground relative flex overflow-hidden">
      <div className="max-w-7xl mx-auto m-6 w-full min-h-dvh py-20 flex flex-col md:flex-row items-center gap-12 relative z-10">

        {/* Left — heading + address */}
        <div className="flex flex-col gap-8 flex-shrink-0 md:w-[42%] text-center md:text-start">
          <AnimateIn delay={0}>
            <h2 className="text-6xl md:text-8xl leading-none uppercase tracking-tighter">
              ONDE<br />
              <span className="font-bold">ESTAMOS</span>
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="flex flex-col gap-1">
              <p className="text-secondary font-bold text-xl md:text-2xl uppercase tracking-wider">
                📍 R. Santa Maria, 229
              </p>
              <p className="text-primary-foreground/70 text-lg md:text-xl">
                Ponte São João — Jundiaí, SP
              </p>
              <p className="text-primary-foreground/50 text-base tracking-widest">
                CEP 13218-060
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.35}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-fit mx-auto md:mx-0">
              <Button
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold uppercase text-base px-8 py-5 h-fit tracking-widest rounded-full transition-transform hover:scale-105 cursor-pointer"
              >
                Como chegar →
              </Button>
            </a>
          </AnimateIn>
        </div>

        {/* Right — map frame */}
        <AnimateIn delay={0.15} className="w-full md:flex-1 relative">
          <div className="relative">
            {/* Offset shadow block */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-secondary/30" />

            {/* Map container */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-secondary">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="440"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Lune Escola de Dança"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground font-bold text-sm px-4 py-2 rounded-full shadow-lg uppercase tracking-widest z-10">
              Jundiaí, SP
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Decorative bailarina */}
      <AnimateImage
        delay={0.9}
        src={logoBallerinaYellow}
        alt=""
        width={600}
        height={600}
        className="hidden md:block absolute -bottom-10 right-0 md:right-[38%] h-auto max-h-[70dvh] object-contain z-0 opacity-10 pointer-events-none"
      />
    </section>
  );
}
