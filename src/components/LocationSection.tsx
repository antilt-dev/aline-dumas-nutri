import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="section-padding bg-accent" id="localizacao">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Localização e Contato
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            className="flex flex-col justify-center gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-foreground">
              Atendimento presencial no coração de Maringá
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground">Av. Tiradentes, Maringá - PR</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground">Seg a Sex, 08h às 18h</p>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg border border-border h-72 lg:h-80"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Localização do consultório"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58548.89519858!2d-51.97!3d-23.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd73c7e3b7f0d%3A0x6e33d0a396d7a5c3!2sMaring%C3%A1%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
