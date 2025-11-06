"use client";

import feedbacks from "@/constants/feedback";
//components
import AnimateIn from "../animate-in";
import FeedbackCarousel, { FeedbackItem } from "../feedback-carousel";

export default function SectionFeedbacks() {
  return (
    <section className="w-full min-h-dvh items-center relative flex overflow-hidden">
      <section className="max-w-7xl mx-auto m-6 w-full items-center justify-center flex flex-col gap-10 relative">
        <article className="flex flex-col gap-3 relative">
          <AnimateIn delay={0}>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-center">
              VEJA OS RELATOS DOS <br />
              NOSSOS ALUNOS
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-xl md:text-3xl text-center">
              Alunos que <span className="font-bold">nunca tinham dançado</span>{" "}
              na vida hoje <br className="md:block hidden" />
              podem <span className="font-bold">viver a arte</span> na veia em
              cima do palco!
            </p>
          </AnimateIn>
        </article>
        <AnimateIn delay={0.6}>
          <FeedbackCarousel />
        </AnimateIn>
        <AnimateIn delay={0.9}>
          <section className="flex flex-col gap-4 md:hidden px-6">
            {feedbacks.map((feedback, index) => (
              <FeedbackItem key={index} feedback={feedback} />
            ))}
          </section>
        </AnimateIn>
      </section>
    </section>
  );
}
