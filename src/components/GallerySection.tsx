import { motion } from "framer-motion";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import clinic from "@/assets/clinic.jpg";
import lifestyle from "@/assets/lifestyle.jpg";

const images = [
  { src: food1, alt: "Prato saudável e colorido" },
  { src: food2, alt: "Smoothie bowl nutritivo" },
  { src: clinic, alt: "Consultório de nutrição" },
  { src: lifestyle, alt: "Estilo de vida saudável" },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-background" id="galeria">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Galeria
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
