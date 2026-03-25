import { motion } from "framer-motion";
import { Award, Heart, Fingerprint } from "lucide-react";

const stats = [
  { icon: Award, value: "+14", label: "anos de experiência" },
  { icon: Heart, value: "+213", label: "vidas transformadas" },
  { icon: Fingerprint, value: "100%", label: "personalizado" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold font-heading text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
