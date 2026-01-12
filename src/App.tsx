import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedAdminRoute from "@/components/admin/ProtectedAdminRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import MyTickets from "./pages/MyTickets";
import EdicoesAnteriores from "./pages/EdicoesAnteriores";
import EdicaoDetalhe from "./pages/EdicaoDetalhe";
import Palestrante from "./pages/Palestrante";
import Expositor from "./pages/Expositor";
import Influencer from "./pages/Influencer";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/Dashboard";
import EventsManagement from "./pages/admin/EventsManagement";
import SpeakersManagement from "./pages/admin/SpeakersManagement";
import ExhibitorsManagement from "./pages/admin/ExhibitorsManagement";
import CasesManagement from "./pages/admin/CasesManagement";
import InfluencersManagement from "./pages/admin/InfluencersManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/meus-ingressos" element={<MyTickets />} />
            <Route path="/edicoes-anteriores" element={<EdicoesAnteriores />} />
            <Route path="/edicoes/:slug" element={<EdicaoDetalhe />} />
            <Route path="/palestrante" element={<Palestrante />} />
            <Route path="/expositor" element={<Expositor />} />
            <Route path="/influencer" element={<Influencer />} />
            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
            <Route path="/admin/eventos" element={<ProtectedAdminRoute><EventsManagement /></ProtectedAdminRoute>} />
            <Route path="/admin/palestrantes" element={<ProtectedAdminRoute><SpeakersManagement /></ProtectedAdminRoute>} />
            <Route path="/admin/expositores" element={<ProtectedAdminRoute><ExhibitorsManagement /></ProtectedAdminRoute>} />
            <Route path="/admin/cases" element={<ProtectedAdminRoute><CasesManagement /></ProtectedAdminRoute>} />
            <Route path="/admin/influencers" element={<ProtectedAdminRoute><InfluencersManagement /></ProtectedAdminRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
