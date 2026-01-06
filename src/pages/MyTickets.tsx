import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ticket, Calendar, MapPin, QrCode, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockEvents } from "@/data/mockEvents";

// Mock purchased tickets
const mockTickets = [
  {
    id: "ticket-1",
    eventId: "1",
    purchaseDate: "2026-01-05",
    quantity: 2,
    status: "valid" as const,
  },
  {
    id: "ticket-2",
    eventId: "3",
    purchaseDate: "2026-01-03",
    quantity: 1,
    status: "valid" as const,
  },
];

const MyTickets = () => {
  const ticketsWithEvents = mockTickets.map((ticket) => ({
    ...ticket,
    event: mockEvents.find((e) => e.id === ticket.eventId)!,
  }));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">Meus Ingressos</h1>
            <p className="text-muted-foreground mb-8">
              Gerencie seus ingressos e acesse seus QR Codes
            </p>

            {ticketsWithEvents.length > 0 ? (
              <div className="space-y-4">
                {ticketsWithEvents.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-card overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          {/* Event Image */}
                          <div className="md:w-48 h-40 md:h-auto relative">
                            <img
                              src={ticket.event.image}
                              alt={ticket.event.title}
                              className="w-full h-full object-cover"
                            />
                            <Badge className="absolute top-3 left-3 gradient-primary text-primary-foreground border-0">
                              {ticket.event.category}
                            </Badge>
                          </div>

                          {/* Ticket Info */}
                          <div className="flex-1 p-6">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                              <div>
                                <h3 className="text-xl font-bold mb-2">
                                  {ticket.event.title}
                                </h3>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(ticket.event.date)} às {ticket.event.time}
                                  </div>
                                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <MapPin className="h-4 w-4" />
                                    {ticket.event.location}, {ticket.event.city}
                                  </div>
                                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <Ticket className="h-4 w-4" />
                                    {ticket.quantity} ingresso(s)
                                  </div>
                                </div>
                              </div>

                              {/* QR Code Preview */}
                              <div className="flex flex-col items-center gap-2">
                                <div className="w-24 h-24 bg-foreground rounded-lg flex items-center justify-center">
                                  <QrCode className="h-16 w-16 text-background" />
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {ticket.status === "valid" ? "Válido" : "Usado"}
                                </Badge>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 mt-4 pt-4 border-t">
                              <Button variant="outline" size="sm">
                                <QrCode className="h-4 w-4 mr-2" />
                                Ver QR Code
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-2" />
                                Baixar PDF
                              </Button>
                              <Link to={`/evento/${ticket.eventId}`}>
                                <Button variant="ghost" size="sm">
                                  Ver Evento
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Ticket className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Você ainda não tem ingressos
                </h2>
                <p className="text-muted-foreground mb-6">
                  Explore eventos incríveis e garanta seu lugar!
                </p>
                <Link to="/">
                  <Button className="gradient-primary text-primary-foreground">
                    Explorar Eventos
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyTickets;
