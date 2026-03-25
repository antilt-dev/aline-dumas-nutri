import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle } from "lucide-react";

const IMCCalculator = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<{ imc: number; categoria: string } | null>(null);

  const calcular = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    if (!p || !a || a <= 0) return;
    const imc = p / (a * a);
    let categoria = "";
    if (imc < 18.5) categoria = "Abaixo do peso";
    else if (imc < 25) categoria = "Peso normal";
    else if (imc < 30) categoria = "Sobrepeso";
    else categoria = "Obesidade";
    setResultado({ imc: parseFloat(imc.toFixed(1)), categoria });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-md">
        <motion.div
          className="bg-card rounded-2xl p-8 border border-border shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground">Calculadora de IMC</h3>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Peso (kg)</label>
              <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Ex: 70"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Altura (cm)</label>
              <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Ex: 165"
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <button
            onClick={calcular}
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-medium py-3 rounded-lg transition-colors duration-200"
          >
            Calcular IMC
          </button>

          {resultado && (
            <motion.div
              className="mt-6 text-center p-4 bg-accent rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-3xl font-bold font-heading text-foreground">{resultado.imc}</p>
              <p className="text-sm text-muted-foreground mt-1">{resultado.categoria}</p>
              <a
                href="https://wa.me/5544991475583"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Agendar avaliação completa
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default IMCCalculator;
