import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mic, Users, Award, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SpeakerSubmissionForm from "@/components/palestrante/SpeakerSubmissionForm";
import speakerImage from "@/assets/speaker-image.jpg";

const benefits = [
  {
    icon: Mic,
    title: "Visibilidade no Setor",
    description: "Amplie sua presença como referência em manufatura aditiva"
  },
  {
    icon: Users,
    title: "Networking Qualificado",
    description: "Conecte-se com líderes e decisores do mercado"
  },
  {
    icon: Award,
    title: "Reconhecimento",
    description: "Seja reconhecido como especialista na área"
  },
  {
    icon: Star,
    title: "Acesso VIP",
    description: "Participe com acesso exclusivo ao evento"
  }
];

const Palestrante = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Call for Speakers
            </h1>
          </motion.div>

          {/* Conteúdo Principal */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Compartilhe sua visão e esteja no maior evento de manufatura aditiva do Brasil.
              </h2>
              
              <p className="text-muted-foreground text-lg">
                Especialistas da área, pesquisadores, líderes são convidados a submeter propostas de palestra para a Expo3DBr.
              </p>
              
              <p className="text-muted-foreground">
                Estamos em busca de contribuições que tragam conhecimento prático, reflexões estratégicas ou inovações que possam inspirar o ecossistema de manufatura aditiva, cultura maker e impressão 3D no Brasil.
              </p>
              
              <p className="text-muted-foreground">
                Esta é uma oportunidade única para profissionais e especialistas ampliar sua presença no setor, fortalecer conexões e participarem ativamente das discussões que irão influenciar o setor no país.
              </p>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground border-0 mt-4">
                    <Send className="w-5 h-5 mr-2" />
                    ENVIAR PROPOSTA DE PALESTRA
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl w-[95vw] sm:w-full">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl">Palestrante Expo3DBr 2026</DialogTitle>
                  </DialogHeader>
                  <SpeakerSubmissionForm onSuccess={() => setIsDialogOpen(false)} />
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img
                src={speakerImage}
                alt="Palestrante na Expo3DBr"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground"
          >
            Por que palestrar na Expo3DBr?
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Palestrante;
