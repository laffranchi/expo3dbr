import { motion } from "framer-motion";
import { Printer, Users, Lightbulb, Building2 } from "lucide-react";

const features = [
  {
    icon: Printer,
    title: "Tecnologia de Ponta",
    description:
      "Conheça as mais recentes inovações em impressão 3D, materiais e processos de manufatura aditiva.",
  },
  {
    icon: Users,
    title: "Networking",
    description:
      "Conecte-se com profissionais, empresários e entusiastas do setor de manufatura aditiva.",
  },
  {
    icon: Lightbulb,
    title: "Conhecimento",
    description:
      "Palestras, workshops e trilhas de conhecimento com os maiores especialistas do mercado.",
  },
  {
    icon: Building2,
    title: "Expositores",
    description:
      "Os principais fabricantes e distribuidores de equipamentos e insumos do Brasil.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">O que é a </span>
            <span className="gradient-text">EXPO 3D BR</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O maior evento de manufatura aditiva do Brasil, reunindo tecnologia, 
            inovação e networking em um só lugar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-lift text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary mb-4">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
