import { motion } from "framer-motion";
import { Apple, Dumbbell, Users } from "lucide-react";

const services = [
  {
    icon: Apple,
    title: "Emagrecimento Definitivo",
    description: "Plano personalizado para perda de peso saudável e sustentável, sem efeito sanfona.",
  },
  {
    icon: Dumbbell,
    title: "Nutrição Esportiva",
    description: "Performance e recuperação otimizadas com alimentação estratégica para atletas.",
  },
  {
    icon: Users,
    title: "Reeducação Alimentar para Famílias",
    description: "Toda a família comendo melhor, com praticidade e sabor no dia a dia.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-accent" id="servicos">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Especialidades
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border text-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
