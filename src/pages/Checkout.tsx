import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, CreditCard, Calendar, MapPin, Ticket, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mockEvents } from "@/data/mockEvents";

const Checkout = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const quantity = parseInt(searchParams.get("qty") || "1");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const totalPrice = event.price * quantity;
  const serviceFee = totalPrice * 0.1;
  const finalTotal = totalPrice + serviceFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setIsComplete(true);

    toast({
      title: "Compra realizada com sucesso!",
      description: "Você receberá os ingressos no seu email.",
    });
  };

  if (isComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Compra Confirmada!</h1>
            <p className="text-muted-foreground mb-8">
              Seus ingressos para <strong>{event.title}</strong> foram enviados para{" "}
              <strong>{formData.email}</strong>
            </p>

            <Card className="glass-card mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Evento</span>
                  <span className="font-medium">{event.title}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Quantidade</span>
                  <span className="font-medium">{quantity} ingresso(s)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total pago</span>
                  <span className="font-bold text-lg gradient-text">
                    {formatPrice(finalTotal)}
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3">
              <Link to="/meus-ingressos">
                <Button className="w-full gradient-primary text-primary-foreground">
                  <Ticket className="h-4 w-4 mr-2" />
                  Ver Meus Ingressos
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Continuar Explorando
                </Button>
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to={`/evento/${id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar ao evento
          </Link>

          <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit}>
                <Card className="glass-card mb-6">
                  <CardHeader>
                    <CardTitle>Dados do Comprador</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cpf">CPF</Label>
                        <Input
                          id="cpf"
                          value={formData.cpf}
                          onChange={(e) =>
                            setFormData({ ...formData, cpf: e.target.value })
                          }
                          required
                          placeholder="000.000.000-00"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                          placeholder="(00) 00000-0000"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Pagamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      O pagamento será processado via Stripe de forma segura.
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        Integração com Stripe será habilitada em breve.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full mt-6 h-12 gradient-primary text-primary-foreground font-bold text-lg"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processando..." : `Pagar ${formatPrice(finalTotal)}`}
                    </Button>
                  </CardContent>
                </Card>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-card sticky top-24">
                <CardHeader>
                  <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Event Info */}
                  <div className="flex gap-4 mb-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold line-clamp-2">{event.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {event.city}
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        {quantity}x Ingresso
                      </span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Taxa de serviço</span>
                      <span>{formatPrice(serviceFee)}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl gradient-text">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
