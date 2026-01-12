import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Camera, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import type { Edition } from "@/data/editions";

interface EditionCardProps {
  edition: Edition;
  index: number;
  variant?: 'primary' | 'secondary';
}

const EditionCard = ({ edition, index, variant = 'primary' }: EditionCardProps) => {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl ${
        isPrimary ? 'bg-card' : 'bg-muted/50'
      } border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <ImageWithFallback
          src={edition.coverImage}
          alt={edition.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Badge */}
        {isPrimary && (
          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground backdrop-blur-sm">
            {edition.year}
          </Badge>
        )}
        
        {/* Photo count */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white/90 text-sm bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Camera className="w-4 h-4" />
          <span>{edition.images.length} fotos</span>
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-4 left-4 right-16">
          <h3 className={`font-bold text-white ${isPrimary ? 'text-xl md:text-2xl' : 'text-lg'}`}>
            {edition.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Meta info */}
        <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
          {edition.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{edition.location}</span>
            </div>
          )}
          {edition.date && (
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{edition.date}</span>
            </div>
          )}
        </div>
        
        {edition.subtitle && (
          <p className="text-primary italic mb-4">{edition.subtitle}</p>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <Button asChild className="flex-1 gradient-primary text-white border-0">
            <Link to={`/edicoes/${edition.slug}`}>
              <Camera className="w-4 h-4 mr-2" />
              Ver Fotos
            </Link>
          </Button>
          
          {edition.aftermovieUrl && (
            <Button variant="outline" asChild className="border-primary/30 hover:bg-primary/10">
              <a href={edition.aftermovieUrl} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-2" />
                Aftermovie
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default EditionCard;
