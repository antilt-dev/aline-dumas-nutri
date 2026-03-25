import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import logoBg from "@/assets/aline-logo-bg.png";

const AboutSection = () => {
  return (
    <section className="relative section-padding overflow-hidden" id="sobre">
      {/* Background logo image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: `url(${logoBg})` }}
      />
      <div className="absolute inset-0 bg-secondary/90 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Sobre mim
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sou a Aline Dumas, nutricionista apaixonada pelo poder transformador da alimentação. Minha abordagem é baseada em empatia e ciência, com especialização em Fisiologia Humana, Nutrição Clínica e Nutrição Funcional.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Acredito que comer bem deve ser um prazer, não uma punição. Cada plano que crio é único — pensado para a sua rotina, seus gostos e seus objetivos.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Minha missão é te ajudar a construir uma relação saudável e duradoura com a comida, sem restrições extremas e com resultados reais.
          </p>
          <a
            href="https://www.instagram.com/alinedumasnutri/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-rose text-foreground hover:bg-rose hover:text-primary-foreground font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <Instagram className="w-5 h-5" />
            Me acompanhe no Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
