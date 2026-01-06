import { motion } from "framer-motion";
import { Calendar, MapPin, Printer } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToTickets = () => {
    const ticketsSection = document.getElementById("ingressos");
    ticketsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="EXPO 3D BR"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="h-40 md:h-56 lg:h-64 w-auto mx-auto mb-8"
          />

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Printer className="h-4 w-4" />
            Feira de Manufatura Aditiva
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">A maior feira de</span>
            <br />
            <span className="gradient-text">Manufatura Aditiva</span>
            <br />
            <span className="text-foreground">do Brasil</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conecte-se com os principais players do mercado, descubra as últimas tecnologias 
            em impressão 3D e participe de experiências únicas no universo da manufatura aditiva.
          </p>

          {/* Event Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card px-6 py-4 rounded-xl flex items-center gap-3"
            >
              <Calendar className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Data</p>
                <p className="font-semibold text-foreground">Em breve</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card px-6 py-4 rounded-xl flex items-center gap-3"
            >
              <MapPin className="h-6 w-6 text-secondary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Local</p>
                <p className="font-semibold text-foreground">A definir</p>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={scrollToTickets}
              className="gradient-primary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              Garantir Ingresso
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
