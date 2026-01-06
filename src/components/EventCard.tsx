import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  city: string;
  category: string;
  price: number;
  availableTickets: number;
  totalTickets: number;
}

interface EventCardProps {
  event: Event;
  index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
    });
  };

  const formatPrice = (price: number) => {
    if (price === 0) return "Gratuito";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const isSoldOut = event.availableTickets === 0;
  const isLowStock = event.availableTickets > 0 && event.availableTickets <= 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link to={`/evento/${event.id}`}>
        <div className="group glass-card rounded-xl overflow-hidden hover-lift cursor-pointer">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <Badge className="absolute top-3 left-3 gradient-primary text-primary-foreground border-0">
              {event.category}
            </Badge>

            {/* Date Badge */}
            <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-center">
              <span className="text-xs font-bold text-primary block uppercase">
                {formatDate(event.date).split(" ")[1]}
              </span>
              <span className="text-lg font-bold text-foreground leading-none">
                {formatDate(event.date).split(" ")[0]}
              </span>
            </div>

            {/* Stock Status */}
            {isSoldOut && (
              <div className="absolute bottom-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                Esgotado
              </div>
            )}
            {isLowStock && (
              <div className="absolute bottom-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
                Últimos ingressos!
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
              {event.title}
            </h3>

            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-1">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span>{event.time}</span>
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{event.city}</span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <Users className="h-3.5 w-3.5" />
                <span>{event.availableTickets} disponíveis</span>
              </div>
              <span className="font-bold text-lg gradient-text">
                {formatPrice(event.price)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
