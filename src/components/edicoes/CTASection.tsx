import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ticket, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quer participar da próxima edição?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Junte-se a milhares de entusiastas da impressão 3D e manufatura aditiva.
            A Expo3DBR é o maior evento do segmento no Brasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white border-0">
              <Link to="/#ingressos">
                <Ticket className="w-5 h-5 mr-2" />
                Garantir Ingresso
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <a href="mailto:contato@expo3dbr.com.br">
                <Handshake className="w-5 h-5 mr-2" />
                Quero Expor / Patrocinar
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
