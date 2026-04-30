import AnimateIn from "@/components/animate-in";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=R.+Santa+Maria,+229,+Ponte+São+João,+Jundiaí,+SP,+13218-060,+Brazil&output=embed&hl=pt-BR";

const MAPS_URL = "https://maps.app.goo.gl/DzUc6XpBfq7AATscA";

export default function SectionLocation() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <AnimateIn delay={0}>
          <h2 className="text-6xl md:text-8xl text-center md:text-start">
            ONDE <span className="font-bold">ESTAMOS</span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="w-full rounded-2xl overflow-hidden border-2 border-primary/10">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Lune Escola de Dança"
            />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="flex items-start gap-3 text-center sm:text-start">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-xl" />
              <p className="text-lg md:text-xl">
                R. Santa Maria, 229 — Ponte São João
                <br />
                <span className="opacity-70">Jundiaí – SP, 13218-060</span>
              </p>
            </div>

            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Button className="max-w-fit">Como chegar →</Button>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
