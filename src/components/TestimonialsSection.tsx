import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Tinha medo de comer e a Aline me libertou. Perdi 8kg sem sofrer. Ela mudou minha relação com a comida completamente!",
    name: "Mariana S.",
  },
  {
    text: "Melhor investimento que fiz na minha saúde. Em 3 meses consegui resultados que anos de dieta não me deram.",
    name: "Camila R.",
  },
  {
    text: "Atendimento incrível! A Aline é super atenciosa e o plano alimentar se encaixa perfeitamente na minha rotina.",
    name: "Fernanda L.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 justify-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-secondary" id="depoimentos">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O que minhas pacientes dizem
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-sm text-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
            >
              <Stars />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mt-5 mb-6 font-heading italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-medium text-muted-foreground">— {testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;