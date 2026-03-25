import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Tinha medo de comer e a Aline me libertou. Perdi 8kg sem sofrer. Ela mudou minha relação com a comida completamente!",
    name: "Mariana S.",
    featured: true,
  },
  {
    text: "Melhor investimento que fiz na minha saúde. Em 3 meses consegui resultados que anos de dieta não me deram.",
    name: "Camila R.",
    featured: false,
  },
  {
    text: "Atendimento incrível! A Aline é super atenciosa e o plano alimentar se encaixa perfeitamente na minha rotina.",
    name: "Fernanda L.",
    featured: false,
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background" id="depoimentos">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O que minhas pacientes dizem
        </motion.h2>

        {/* Featured */}
        <motion.div
          className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Stars />
          <p className="text-lg md:text-xl text-foreground leading-relaxed mt-4 mb-6 font-heading italic">
            "{testimonials[0].text}"
          </p>
          <p className="font-medium text-foreground">— {testimonials[0].name}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Stars />
              <p className="text-foreground leading-relaxed mt-3 mb-4 italic">"{t.text}"</p>
              <p className="font-medium text-sm text-muted-foreground">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
