"use client";

import FeedbackCarousel from "../feedback-carousel";

export default function SectionFeedbacks() {
  return (
    <section className="w-full min-h-dvh items-center relative flex overflow-hidden">
      <section className="max-w-7xl mx-auto m-6 w-full items-center justify-center flex flex-col gap-10 relative">
        <article className="flex flex-col gap-3 relative">
          <h2 className="text-9xl font-bold tracking-tighter text-center">
            VEJA OS RELATOS DOS <br />
            NOSSOS ALUNOS
          </h2>
          <p className="text-3xl text-center">
            Alunos que <span className="font-bold">nunca tinham dançado</span>{" "}
            na vida hoje <br />
            podem <span className="font-bold">viver a arte</span> na veia em
            cima do palco!
          </p>
        </article>
        <FeedbackCarousel />
      </section>
    </section>
  );
}
