import { motion } from "framer-motion";
import { Check, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface TicketType {
  id: string;
  name: string;
  description: string;
  features: string[];
  prices: {
    lot: number;
    price: number;
    available: boolean;
  }[];
  highlight?: boolean;
}

interface TicketCardProps {
  ticket: TicketType;
  index: number;
  onSelect: (ticketId: string) => void;
}

const TicketCard = ({ ticket, index, onSelect }: TicketCardProps) => {
  // Find the current active lot (first available)
  const currentLot = ticket.prices.find((p) => p.available) || ticket.prices[0];
  const currentLotIndex = ticket.prices.findIndex((p) => p.available);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-6 md:p-8 ${
        ticket.highlight
          ? "gradient-primary text-primary-foreground shadow-2xl scale-105"
          : "glass-card"
      }`}
    >
      {ticket.highlight && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1">
          Mais Popular
        </Badge>
      )}

      <div className="flex items-center gap-3 mb-4">
        <div
          className={`p-2 rounded-lg ${
            ticket.highlight ? "bg-white/20" : "gradient-primary"
          }`}
        >
          <Ticket
            className={`h-6 w-6 ${
              ticket.highlight ? "text-primary-foreground" : "text-primary-foreground"
            }`}
          />
        </div>
        <h3 className="text-xl font-bold">{ticket.name}</h3>
      </div>

      <p
        className={`mb-6 ${
          ticket.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}
      >
        {ticket.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {ticket.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check
              className={`h-5 w-5 ${
                ticket.highlight ? "text-secondary" : "text-primary"
              }`}
            />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Lot Indicator */}
      <div className="flex gap-2 mb-4">
        {ticket.prices.map((lot, i) => (
          <div
            key={lot.lot}
            className={`flex-1 h-2 rounded-full ${
              i < currentLotIndex
                ? "bg-muted-foreground/30"
                : i === currentLotIndex
                ? ticket.highlight
                  ? "bg-secondary"
                  : "gradient-primary"
                : ticket.highlight
                ? "bg-white/20"
                : "bg-muted"
            }`}
          />
        ))}
      </div>
      <p
        className={`text-xs mb-4 ${
          ticket.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {currentLotIndex + 1}º Lote • {ticket.prices.length - currentLotIndex} lote(s) restante(s)
      </p>

      {/* Price */}
      <div className="mb-6">
        <span
          className={`text-4xl font-bold ${
            ticket.highlight ? "" : "gradient-text"
          }`}
        >
          {formatPrice(currentLot.price)}
        </span>
      </div>

      <Button
        onClick={() => onSelect(ticket.id)}
        className={`w-full py-6 text-lg font-semibold rounded-xl ${
          ticket.highlight
            ? "bg-white text-primary hover:bg-white/90"
            : "gradient-primary text-primary-foreground"
        }`}
      >
        Selecionar
      </Button>
    </motion.div>
  );
};

export default TicketCard;
