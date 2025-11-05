import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  items = [
    {
      id: "faq-1",
      question: "Preciso ter experiência para dançar na Lune?",
      answer:
        "Não! Nossas aulas são pensadas para todos os níveis, do zero até o avançado. A Lune é o espaço certo pra quem sempre quis dançar, mas nunca teve coragem de começar. Aqui você aprende no seu ritmo, com acompanhamento próximo e um ambiente leve, sem julgamentos.",
    },
    {
      id: "faq-2",
      question: "Há limite de idade para participar das aulas?",
      answer:
        "Nenhum! Temos turmas que acolhem desde adolescentes até adultos que querem redescobrir o prazer de se movimentar. Na Lune, a dança é pra quem sente, não pra quem se encaixa num padrão.",
    },
    {
      id: "faq-3",
      question: "Onde a Lune está localizada em Jundiaí?",
      answer:
        "Estamos em uma região central e de fácil acesso, próxima a pontos de ônibus e com estacionamento por perto. Você pode nos visitar e sentir o clima da escola antes mesmo de se matricular.",
    },
    {
      id: "faq-4",
      question: "Como é a estrutura da escola?",
      answer:
        "A Lune tem uma estrutura moderna, pensada pra te inspirar: sala com espelhos e piso apropriado pra dança, som profissional e iluminação ambiente, área de descanso e recepção acolhedora, e equipe que te recebe com sorriso e energia boa. Aqui, você se sente parte de algo maior, uma comunidade que vive a arte todos os dias.",
    },
    {
      id: "faq-5",
      question: "Posso fazer uma aula avulsa antes de decidir?",
      answer:
        "Sim! A gente acredita que a melhor forma de escolher é sentir. Você pode agendar sua aula avulsa agora mesmo, sem compromisso.",
    },
    {
      id: "faq-6",
      question: "Quais estilos de dança a Lune oferece?",
      answer:
        "Do pop ao contemporâneo, passando pelo jazz e o hip hop, cada aula tem uma vibe única. Nosso foco é te ajudar a se expressar e se conectar com o movimento, não apenas decorar passos. Quer dançar sua verdade? Aqui é o lugar.",
    },
    {
      id: "faq-7",
      question: "Como funciona a mensalidade?",
      answer:
        "Oferecemos planos flexíveis, você escolhe o formato que mais combina com sua rotina. O investimento é acessível, e o retorno vai muito além da dança: confiança, energia, bem-estar e autoestima.",
    },
    {
      id: "faq-8",
      question: "Posso participar mesmo se nunca tiver me achado bom dançando?",
      answer:
        "Claro que sim. Na Lune, a dança é sobre liberdade, não perfeição. A gente te guia pra desbloquear seu corpo e sua mente, e cada pequena evolução é celebrada.",
    },
  ],
}: Faq1Props) => {
  return (
    <Accordion type="single" collapsible>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="hover:no-underline cursor-pointer">
            <p className="text-2xl satoshi">
              <span className="font-bold">0{index + 1}.</span>{" "}
              {item.question}
            </p>
          </AccordionTrigger>
          <AccordionContent className="text-xl text-white">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { Faq };
