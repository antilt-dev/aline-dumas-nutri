import { motion } from "framer-motion";
import { ClipboardCheck, Smartphone, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "Passo 1",
    title: "Avaliação e Bioimpedância",
    description: "Conheço você, sua rotina e seus objetivos com uma avaliação completa.",
  },
  {
    icon: Smartphone,
    step: "Passo 2",
    title: "Entrega do Plano via App",
    description: "Seu plano alimentar personalizado na palma da sua mão.",
  },
  {
    icon: MessageCircle,
    step: "Passo 3",
    title: "Suporte diário via WhatsApp",
    description: "Tiro suas dúvidas e te acompanho no dia a dia.",
  },
];

const TimelineSection = () => {
  return (
    <section className="section-padding bg-background" id="como-funciona">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Como Funciona
        </motion.h2>

        <div className="flex flex-col gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="flex gap-5 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-medium text-primary uppercase tracking-wide">{s.step}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
