import AnimateIn from "../animate-in";
import { Button } from "../ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=R.+Santa+Maria,+229,+Ponte+São+João,+Jundiaí,+SP,+13218-060,+Brazil&output=embed&hl=pt-BR";

const MAPS_URL = "https://maps.app.goo.gl/DzUc6XpBfq7AATscA";

export default function SectionLocation() {
  return (
    <section className="w-full min-h-dvh h-fit items-center bg-primary text-primary-foreground relative flex overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 w-full py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">

        {/* Left — heading + address */}
        <div className="flex flex-col gap-8 flex-shrink-0 md:w-[42%] text-center md:text-start">
          <AnimateIn delay={0}>
            <h2 className="text-6xl md:text-8xl leading-none uppercase tracking-tighter text-secondary">
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
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-[18px] gap-2 px-6 max-w-fit py-2 h-fit w-fit cursor-pointer">
                <FaMapMarkerAlt className="size-5" />
                <p className="font-bold uppercase">Como chegar</p>
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
                className="h-[280px] md:h-[440px]"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Lune Escola de Dança"
              />
            </div>

            {/* Floating badge — hidden on mobile to avoid clipping */}
            <div className="hidden md:flex absolute -top-4 -right-4 bg-secondary text-secondary-foreground font-bold text-sm px-4 py-2 rounded-full shadow-lg uppercase tracking-widest z-10">
              Jundiaí, SP
            </div>
          </div>
        </AnimateIn>
      </div>

    </section>
  );
}
