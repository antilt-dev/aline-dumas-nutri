import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/aline-hero.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
              Sua jornada para uma vida mais saudável começa aqui.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Nutricionista em Maringá · Consultorias personalizadas, sem dietas restritivas.
            </p>
            <a
              href="https://wa.me/5544991475583"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-lg px-8 py-4 rounded-lg transition-opacity duration-200 hover:opacity-90 shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={heroImg}
              alt="Aline Dumas, nutricionista em Maringá"
              width={800}
              height={1024}
              className="rounded-2xl shadow-2xl shadow-primary/10 w-full max-w-md mx-auto object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-left-6 bg-background rounded-xl px-5 py-3 shadow-lg border border-border flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">5.0 no Google</p>
                <p className="text-xs text-muted-foreground">71 avaliações</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;