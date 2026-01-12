import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import PhotoLightbox from "./PhotoLightbox";
import ImageWithFallback from "@/components/shared/ImageWithFallback";
import type { GalleryImage } from "@/data/editions";

interface PhotoGalleryProps {
  images: GalleryImage[];
  initialCount?: number;
}

const PhotoGallery = ({ images, initialCount = 24 }: PhotoGalleryProps) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const handleLoadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + 24, images.length));
  }, [images.length]);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Galeria de Fotos
        </h2>
        <span className="text-muted-foreground">
          {visibleImages.length} de {images.length} fotos
        </span>
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {visibleImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <div className="relative overflow-hidden rounded-xl">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-12"
        >
          <Button
            onClick={handleLoadMore}
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10"
          >
            <ChevronDown className="w-5 h-5 mr-2" />
            Carregar mais fotos
            <span className="ml-2 text-muted-foreground">
              ({images.length - visibleCount} restantes)
            </span>
          </Button>
        </motion.div>
      )}

      {/* Lightbox */}
      <PhotoLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
};

export default PhotoGallery;
