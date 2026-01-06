import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Share2,
  Heart,
  ChevronLeft,
  Minus,
  Plus,
  Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockEvents } from "@/data/mockEvents";

const EventDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Evento não encontrado</h1>
            <Link to="/">
              <Button>Voltar para a página inicial</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatPrice = (price: number) => {
    if (price === 0) return "Gratuito";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const totalPrice = event.price * quantity;
  const isSoldOut = event.availableTickets === 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[50vh]">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          {/* Back Button */}
          <Link
            to="/"
            className="absolute top-4 left-4 glass-card rounded-full p-2 hover:bg-background/90 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </Link>

          {/* Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="glass-card rounded-full"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart
                className={`h-5 w-5 ${isFavorite ? "fill-destructive text-destructive" : ""}`}
              />
            </Button>
            <Button variant="ghost" size="icon" className="glass-card rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <Card className="glass-card">
                <CardContent className="p-6 md:p-8">
                  <Badge className="gradient-primary text-primary-foreground border-0 mb-4">
                    {event.category}
                  </Badge>

                  <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    {event.title}
                  </h1>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Data</p>
                        <p className="font-medium text-foreground capitalize">
                          {formatDate(event.date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Horário</p>
                        <p className="font-medium text-foreground">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Local</p>
                        <p className="font-medium text-foreground">
                          {event.location}, {event.city}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Capacidade</p>
                        <p className="font-medium text-foreground">
                          {event.availableTickets} de {event.totalTickets} disponíveis
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Description */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">Sobre o evento</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Purchase Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-1">A partir de</p>
                    <p className="text-4xl font-bold gradient-text">
                      {formatPrice(event.price)}
                    </p>
                  </div>

                  <Separator className="my-4" />

                  {!isSoldOut ? (
                    <>
                      {/* Quantity Selector */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-medium">Quantidade</span>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            disabled={quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-bold">{quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              setQuantity(Math.min(event.availableTickets, quantity + 1))
                            }
                            disabled={quantity >= event.availableTickets}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-muted-foreground">Total</span>
                        <span className="text-2xl font-bold">{formatPrice(totalPrice)}</span>
                      </div>

                      {/* Purchase Button */}
                      <Link to={`/checkout/${event.id}?qty=${quantity}`}>
                        <Button className="w-full h-12 gradient-primary text-primary-foreground font-bold text-lg">
                          <Ticket className="h-5 w-5 mr-2" />
                          Comprar Ingressos
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <Badge variant="destructive" className="text-lg px-6 py-2">
                        Esgotado
                      </Badge>
                      <p className="text-muted-foreground mt-4 text-sm">
                        Este evento está com todos os ingressos vendidos.
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Pagamento seguro via Stripe
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-16" />
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
