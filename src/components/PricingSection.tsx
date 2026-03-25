import { motion } from "framer-motion";
import { Clock, Flame } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="section-padding bg-background" id="precos">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          className="bg-card rounded-2xl p-8 md:p-12 text-center shadow-xl shadow-primary/5 border border-border relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-hover to-primary" />

          <span className="inline-flex items-center gap-2 bg-primary/10 text-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Flame className="w-4 h-4 text-primary" />
            Programa de Emagrecimento 2026
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Invista na sua transformação
          </h2>

          <div className="my-8">
            <p className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              12x de R$ 97<span className="text-lg font-normal text-muted-foreground">,00</span>
            </p>
            <p className="text-muted-foreground mt-2">ou à vista com <strong className="text-foreground">10% de desconto</strong></p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-primary-hover font-medium mb-8">
            <Clock className="w-4 h-4" />
            Apenas 5 vagas disponíveis para novos pacientes este mês
          </div>

          <a
            href="https://wa.me/5544991475583"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-lg px-8 py-4 rounded-lg transition-colors duration-200 w-full justify-center max-w-sm"
          >
            Quero Garantir Minha Vaga
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
