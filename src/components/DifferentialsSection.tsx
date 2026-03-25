import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Sem dietas de gaveta",
  "Acesso a receitas exclusivas",
  "Suporte direto com a Nutri",
  "Plano alimentar via aplicativo",
  "Acompanhamento humanizado",
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-background" id="diferenciais">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Diferenciais
        </motion.h2>

        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 bg-card rounded-xl px-6 py-4 border border-border"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
