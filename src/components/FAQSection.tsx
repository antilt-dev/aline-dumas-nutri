import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo dura a consulta?",
    answer: "A primeira consulta dura em torno de 1 hora, onde faço uma avaliação completa. Os retornos duram aproximadamente 30 minutos.",
  },
  {
    question: "Atende convênio?",
    answer: "O atendimento é particular, mas forneço recibo para reembolso junto ao seu plano de saúde.",
  },
  {
    question: "Preciso comprar suplementos caros?",
    answer: "Não! Meu foco é em comida de verdade. Suplementos só são indicados quando realmente necessários e com a melhor relação custo-benefício.",
  },
  {
    question: "O plano é muito restritivo?",
    answer: "De jeito nenhum! Trabalho com flexibilidade e inclusão dos alimentos que você gosta, respeitando seus objetivos.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-accent" id="faq">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Perguntas Frequentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
