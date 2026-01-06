import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TicketCard, { TicketType } from "./TicketCard";

// Mock data - will be replaced with database data
const ticketTypes: TicketType[] = [
  {
    id: "unico",
    name: "Ingresso Único",
    description: "Acesso completo à feira de exposições durante todos os dias do evento.",
    features: [
      "Acesso à área de exposições",
      "Visitação aos estandes",
      "Material do evento",
    ],
    prices: [
      { lot: 1, price: 50, available: true },
      { lot: 2, price: 70, available: true },
      { lot: 3, price: 90, available: true },
    ],
  },
  {
    id: "trilha",
    name: "Ingresso + Trilha",
    description: "Feira + acesso às trilhas de conhecimento com workshops práticos.",
    features: [
      "Tudo do Ingresso Único",
      "Workshops hands-on",
      "Trilhas temáticas",
      "Certificado de participação",
    ],
    prices: [
      { lot: 1, price: 150, available: true },
      { lot: 2, price: 200, available: true },
      { lot: 3, price: 250, available: true },
    ],
    highlight: true,
  },
  {
    id: "congresso",
    name: "Ingresso + Congresso",
    description: "Feira + palestras exclusivas do congresso de manufatura aditiva.",
    features: [
      "Tudo do Ingresso Único",
      "Palestras do congresso",
      "Networking VIP",
      "Certificado de participação",
    ],
    prices: [
      { lot: 1, price: 180, available: true },
      { lot: 2, price: 230, available: true },
      { lot: 3, price: 280, available: true },
    ],
  },
  {
    id: "completo",
    name: "Ingresso Completo",
    description: "Acesso total: feira, trilhas de conhecimento e congresso.",
    features: [
      "Acesso à área de exposições",
      "Workshops hands-on",
      "Trilhas temáticas",
      "Palestras do congresso",
      "Networking VIP",
      "Kit exclusivo",
      "Certificado premium",
    ],
    prices: [
      { lot: 1, price: 280, available: true },
      { lot: 2, price: 350, available: true },
      { lot: 3, price: 420, available: true },
    ],
  },
];

const TicketsSection = () => {
  const navigate = useNavigate();

  const handleSelectTicket = (ticketId: string) => {
    navigate(`/checkout?ticket=${ticketId}`);
  };

  return (
    <section id="ingressos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Escolha seu </span>
            <span className="gradient-text">Ingresso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Garanta sua participação na EXPO 3D BR. Aproveite os preços promocionais do 
            primeiro lote!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-start">
          {ticketTypes.map((ticket, index) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              index={index}
              onSelect={handleSelectTicket}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
