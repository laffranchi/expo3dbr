import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Edition } from "@/data/editions";

interface EditionHeroProps {
  edition: Edition;
}

const EditionHero = ({ edition }: EditionHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={edition.coverImage}
          alt={edition.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      </div>

      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Button
          asChild
          variant="ghost"
          className="text-white hover:bg-white/10 backdrop-blur-sm bg-black/20"
        >
          <Link to="/edicoes-anteriores">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Edições
          </Link>
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-12 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {edition.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-medium text-lg mb-2"
            >
              {edition.subtitle}
            </motion.p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {edition.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-white/80 text-lg">
            {edition.location && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span>{edition.location}</span>
              </motion.div>
            )}
            
            {edition.date && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <span>{edition.date}</span>
              </motion.div>
            )}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-4 text-white/60"
          >
            {edition.images.length} fotos nesta galeria
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default EditionHero;
