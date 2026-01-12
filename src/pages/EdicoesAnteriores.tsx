import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditionCard from "@/components/edicoes/EditionCard";
import TimelineTrajetoria from "@/components/edicoes/TimelineTrajetoria";
import { editions, eventos, encontros } from "@/data/editions";
import { Calendar, MapPin, Users } from "lucide-react";

const EdicoesAnteriores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6"
          >
            <Calendar className="w-4 h-4" />
            <span>{editions.length} edições realizadas</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Edições Anteriores
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Registros oficiais das maiores feiras de Manufatura Aditiva do Brasil
          </motion.p>
        </div>
      </section>

      {/* Timeline Trajetória Impressa */}
      <TimelineTrajetoria />

      {/* Edições Principais */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossas Edições
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada edição da Expo3DBR reúne o melhor da comunidade de impressão 3D brasileira
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {editions.map((edition, index) => (
              <EditionCard key={edition.slug} edition={edition} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Eventos que Participamos */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Eventos que Participamos
              </h2>
              <p className="text-muted-foreground">
                Levando a Expo3DBR para todo o Brasil
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventos.map((evento, index) => (
              <EditionCard 
                key={evento.slug} 
                edition={evento} 
                index={index}
                variant="secondary"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Encontros */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Encontros da Comunidade
              </h2>
              <p className="text-muted-foreground">
                Onde tudo começou
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {encontros.map((encontro, index) => (
              <EditionCard 
                key={encontro.slug} 
                edition={encontro} 
                index={index}
                variant="secondary"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EdicoesAnteriores;
