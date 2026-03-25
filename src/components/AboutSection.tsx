import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import aboutImg from "@/assets/aline-about.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-accent" id="sobre">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="Aline Dumas atendendo paciente"
              loading="lazy"
              width={800}
              height={800}
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Sobre mim
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sou a Aline Dumas, nutricionista apaixonada pelo poder transformador da alimentação. Há mais de 14 anos ajudo pessoas a construírem uma relação saudável e prazerosa com a comida.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Minha missão é mostrar que comer saudável pode ser prazeroso. Nada de dietas malucas ou restrições absurdas — aqui a gente trabalha junto, no seu ritmo, respeitando sua rotina e seus gostos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cada plano que eu crio é único, pensado especialmente para você. Porque cada corpo é diferente, e cada história merece atenção individual.
            </p>
            <a
              href="https://instagram.com/alinedumas.nutri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
              Me acompanhe no Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
