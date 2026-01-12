import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { influencerVideos, InfluencerVideo } from "@/data/influencerVideos";

const VideoCard = ({ 
  video, 
  index, 
  onPlay 
}: { 
  video: InfluencerVideo; 
  index: number;
  onPlay: (video: InfluencerVideo) => void;
}) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onPlay(video)}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-current ml-0.5" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {video.channel}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {video.year}
          </Badge>
        </div>
        <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
      </div>
    </motion.div>
  );
};

const InfluencerVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<InfluencerVideo | null>(null);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
            <Youtube className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Cobertura de Influenciadores
            </h2>
            <p className="text-muted-foreground">
              Veja o que os criadores de conteúdo falaram sobre a Expo3DBR
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {influencerVideos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              onPlay={setSelectedVideo}
            />
          ))}
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            <DialogHeader className="p-4 pb-0">
              <DialogTitle className="text-lg line-clamp-1">
                {selectedVideo?.title}
              </DialogTitle>
              <p className="text-sm text-muted-foreground">{selectedVideo?.channel}</p>
            </DialogHeader>
            <div className="aspect-video w-full">
              {selectedVideo && (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default InfluencerVideos;
