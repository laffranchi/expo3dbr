import { motion } from "framer-motion";
import { 
  Users, Mic, Users2, Trophy, Zap, MapPin, 
  Sparkles, Heart, Camera, Wrench 
} from "lucide-react";
import type { Highlight } from "@/data/editions";

interface EditionHighlightsProps {
  highlights: Highlight[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Mic,
  Users2,
  Trophy,
  Zap,
  MapPin,
  Sparkles,
  Heart,
  Camera,
  Wrench,
};

const EditionHighlights = ({ highlights }: EditionHighlightsProps) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-8"
        >
          Destaques desta Edição
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon] || Users;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EditionHighlights;
