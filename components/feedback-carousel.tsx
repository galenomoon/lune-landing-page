import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const feedbacks = [
  {
    name: "Ana Clara Martins",
    image:
      "https://i.pinimg.com/1200x/fd/92/e1/fd92e1d77da393aa9f9e593a6a7adba0.jpg",
    feedback:
      "Eu sempre fui muito tímida e travada. Depois de 3 meses no Jazz-Funk, não só perdi o medo de me apresentar, como me sinto muito mais confiante nas reuniões de trabalho. A Lune me ajudou a me 'soltar' de um jeito que a academia nunca conseguiu.",
    modalidade: "Jazz Funk",
  },
  {
    name: "Larissa Oliveira",
    image:
      "https://i.pinimg.com/736x/63/29/64/6329640569be23e0f9f1a74d19036eb1.jpg",
    feedback:
      "Eu comecei no Ballet sem saber o que era um plié. Hoje, consigo fazer sequências completas na barra e já sinto minha postura completamente diferente. O método da Lune realmente funciona para quem está começando do zero. Saí do nível 0 e já estou no nível I!",
    modalidade: "Ballet",
  },
  {
    name: "Marina Santos",
    image:
      "https://i.pinimg.com/736x/bf/22/0a/bf220a5cc39b3196a774cdbadd96b7e1.jpg",
    feedback:
      "O K-pop virou minha válvula de escape. Eu chego estressado do trabalho, mas depois da aula, sinto que liberei toda a tensão. Além de aprender as coreografias que eu amo, melhorei meu sono e mal tenho tempo de pensar no que me estressa. É a minha terapia semanal.",
    modalidade: "K-pop",
  },
  {
    name: "Bianca Souza",
    image:
      "https://i.pinimg.com/736x/97/83/9e/97839e4db3f90df01d462f157c21be15.jpg",
    feedback:
      "Eu era a 'rainha da preguiça' e sempre desistia da academia. No Hip-Hop da Lune, a energia da turma é contagiante! Ganhei resistência e, mais importante, fiz amigos incríveis. Agora, não é mais uma obrigação, é o melhor momento da minha semana.",
    modalidade: "Hip Hop",
  },
];

export default function FeedbackCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <section className="flex items-center justify-end gap-8">
        <CarouselPrevious />
        <CarouselNext />
      </section>
      <CarouselContent>
        {feedbacks.map((feedback, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="bg-white text-black justify-start py-0">
              <CardContent className="flex flex-col min-h-[300px] p-6 gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={feedback.image}
                    alt={feedback.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover size-12 aspect-square"
                  />
                  <article className="flex flex-col">
                    <p className="text-lg font-semibold leading-5">
                      {feedback.name}
                    </p>
                    <p className="text-sm text-gray-500 italic font-medium">
                      Aluna de {feedback.modalidade}
                    </p>
                  </article>
                </div>
                <p className="text-lg opacity-60">
                  &quot;{feedback.feedback}&quot;
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
