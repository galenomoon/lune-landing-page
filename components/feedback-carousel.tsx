import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import feedbacks from "@/constants/feedback";

export default function FeedbackCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full hidden md:block"
    >
      <section className="flex items-center justify-end gap-8">
        <CarouselPrevious />
        <CarouselNext />
      </section>
      <CarouselContent>
        {feedbacks.map((feedback, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <FeedbackItem feedback={feedback} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function FeedbackItem({
  feedback,
}: {
  feedback: (typeof feedbacks)[0];
}) {
  return (
    <Card className="bg-white text-black justify-start py-0">
      <CardContent className="flex flex-col h-fit md:min-h-[300px] p-6 gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={feedback.image}
            alt={feedback.name}
            width={48}
            height={48}
            className="rounded-full object-cover size-12 aspect-square"
          />
          <article className="flex flex-col">
            <p className="text-lg font-semibold leading-5">{feedback.name}</p>
            <p className="text-sm text-gray-500 italic font-medium">
              Aluna de {feedback.modalidade}
            </p>
          </article>
        </div>
        <p className="md:text-lg text-base opacity-60">&quot;{feedback.feedback}&quot;</p>
      </CardContent>
    </Card>
  );
}
