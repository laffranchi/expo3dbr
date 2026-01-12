import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, Trophy, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ExhibitorSubmissionForm from "@/components/expositor/ExhibitorSubmissionForm";
import expositorImage from "@/assets/expositor-image.jpg";

const benefits = [
  {
    icon: Building2,
    title: "Para Expositores",
    description:
      "Mostre seus produtos e serviços para milhares de visitantes qualificados do setor de manufatura aditiva.",
  },
  {
    icon: Handshake,
    title: "Para Patrocinadores",
    description:
      "Associe sua marca ao maior evento de impressão 3D do Brasil e ganhe visibilidade junto aos principais players do mercado.",
  },
  {
    icon: Trophy,
    title: "Para Cases",
    description:
      "Compartilhe sua história de sucesso e inspire outros profissionais com sua experiência em manufatura aditiva.",
  },
  {
    icon: Users,
    title: "Networking Premium",
    description:
      "Conecte-se diretamente com decisores, inovadores e entusiastas que movem o mercado de impressão 3D.",
  },
];

const Expositor = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Seja Expositor, Case ou Patrocinador
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Faça negócios no maior evento de manufatura aditiva do Brasil
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Preencha os dados que em breve nossa equipe entrará em contato
                  para apresentar os benefícios de participar da{" "}
                  <span className="text-primary font-semibold">
                    Expo3DBr 2026
                  </span>
                  .
                </p>
                <p>
                  A Expo3DBr reúne profissionais, empresas e entusiastas do
                  ecossistema de impressão 3D e manufatura aditiva.
                </p>
                <p>
                  Seja como <strong>expositor</strong> mostrando seus produtos e
                  serviços, <strong>patrocinador</strong> apoiando o evento, ou{" "}
                  <strong>case</strong> compartilhando sua história de sucesso —
                  esta é sua oportunidade de se conectar com o mercado.
                </p>
              </div>

              <Button
                size="lg"
                onClick={() => setIsDialogOpen(true)}
                className="w-full sm:w-auto text-lg px-8 py-6"
              >
                QUERO PARTICIPAR
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={expositorImage}
                  alt="Expo3DBr - Feira de Manufatura Aditiva"
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12"
          >
            Benefícios de Participar
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para fazer parte?
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato e descubra como a Expo3DBr pode impulsionar seu
              negócio.
            </p>
            <Button
              size="lg"
              onClick={() => setIsDialogOpen(true)}
              className="w-full sm:w-auto text-lg px-8 py-6"
            >
              QUERO PARTICIPAR
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Submission Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl w-[95vw] sm:w-full">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">
              Formulário de Interesse
            </DialogTitle>
            <DialogDescription>
              Preencha os dados abaixo para receber informações sobre como
              participar da Expo3DBr 2026.
            </DialogDescription>
          </DialogHeader>
          <ExhibitorSubmissionForm onSuccess={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Expositor;
