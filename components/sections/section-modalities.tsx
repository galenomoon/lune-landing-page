"use client";

//components
import AnimateIn, { AnimateImage } from "../animate-in";

//images
import imageBallet from "@/assets/person-ballet.png";
import imageHipHop from "@/assets/person-hiphop.png";
import imageJazzFunk from "@/assets/person-contemp.png";
import imageKPop from "@/assets/person-kpop.png";
import { openWhatsApp } from "@/utils/openWhatsApp";

export default function SectionModalities() {
  const modalities = [
    {
      title: "Ballet",
      color: "bg-[#E560FF]",
      description:
        "Aprimore sua postura, ganhe graciosidade e fortaleça o corpo com a técnica que é a base de todas as danças.",
      image: imageBallet,
    },
    {
      title: "Hip Hop",
      color: "bg-[#DB32FD]",
      description:
        "Domine o freestyle e a musicalidade. Aumente sua resistência física e confiança com movimentos poderosos e urbanos.",
      image: imageHipHop,
    },
    {
      title: "Jazz-Funk",
      color: "bg-[#BD14DF]",
      description:
        "Liberte sua atitude! Movimentos intensos e cheios de personalidade que elevam sua coordenação e expressão corporal.",
      image: imageJazzFunk,
    },
    {
      title: "K-pop",
      color: "bg-[#9F00C1]",
      description:
        "Aprenda as coreografias virais dos seus MVs favoritos. Melhore sua memória e dance com a energia e o ritmo da cultura pop coreana.",
      image: imageKPop,
    },
  ];
  return (
    <section className="w-full h-[85dvh] bg-primary text-white relative grid grid-cols-4 overflow-hidden">
      {modalities.map((modality, index) => (
        <button
          onClick={() =>
            openWhatsApp(
              `Olá, vim pelo site e gostaria de saber mais sobre as aulas de dança. Estou interessado em ${modality.title}.`
            )
          }
          key={modality.title}
          className={`flex flex-1 flex-col overflow-hidden gap-3 relative w-full group h-full grow hover:text-primary ${modality.color} cursor-pointer hover:bg-secondary transition-all duration-300`}
        >
          <AnimateIn delay={index * 0.2} className="z-20">
            <h3 className="text-5xl uppercase font-bold tracking-tighter text-center mt-18">
              {modality.title}
            </h3>
            <p className="text-xl text-center px-4">{modality.description}</p>
          </AnimateIn>

          <AnimateImage
            src={modality.image}
            alt={modality.title}
            className="scale-150 object-cover pt-[100px] z-10 group-hover:scale-160 transition-all duration-300"
            width={1000}
            height={1000}
          />
        </button>
      ))}
    </section>
  );
}
