import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, CreditCard, Calendar, MapPin, Ticket, Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Ticket types data - same as TicketsSection
const ticketTypesData = [
  {
    id: "unico",
    name: "Ingresso Único",
    description: "Acesso completo à feira de exposições durante todos os dias do evento.",
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
    prices: [
      { lot: 1, price: 150, available: true },
      { lot: 2, price: 200, available: true },
      { lot: 3, price: 250, available: true },
    ],
  },
  {
    id: "congresso",
    name: "Ingresso + Congresso",
    description: "Feira + palestras exclusivas do congresso de manufatura aditiva.",
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
    prices: [
      { lot: 1, price: 280, available: true },
      { lot: 2, price: 350, available: true },
      { lot: 3, price: 420, available: true },
    ],
  },
];

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const ticketId = searchParams.get("ticket") || "unico";

  const ticket = ticketTypesData.find((t) => t.id === ticketId) || ticketTypesData[0];
  const currentLot = ticket.prices.find((p) => p.available) || ticket.prices[0];

  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const totalPrice = currentLot.price * quantity;
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
              Seus ingressos para a <strong>EXPO 3D BR</strong> foram enviados para{" "}
              <strong>{formData.email}</strong>
            </p>

            <Card className="glass-card mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">Tipo de Ingresso</span>
                  <span className="font-medium">{ticket.name}</span>
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
                  Voltar ao Início
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
            to="/#ingressos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar aos ingressos
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
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-1">EXPO 3D BR</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Feira de Manufatura Aditiva
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4" />
                      Data a definir
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      Local a definir
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Ticket Type */}
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Tipo de Ingresso</p>
                    <p className="font-semibold">{ticket.name}</p>
                    <p className="text-xs text-muted-foreground">{ticket.description}</p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Quantidade</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                        disabled={quantity >= 10}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        {quantity}x {ticket.name}
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
