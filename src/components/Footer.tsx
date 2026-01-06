import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <img src={logo} alt="EXPO 3D BR" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              A plataforma completa para organizar eventos, vender ingressos e conectar pessoas.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Explorar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Todos os Eventos</Link></li>
              <li><Link to="/?categoria=shows" className="hover:text-primary transition-colors">Shows</Link></li>
              <li><Link to="/?categoria=festas" className="hover:text-primary transition-colors">Festas</Link></li>
              <li><Link to="/?categoria=conferencias" className="hover:text-primary transition-colors">Conferências</Link></li>
            </ul>
          </div>

          {/* Para Organizadores */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Organizadores</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/criar-evento" className="hover:text-primary transition-colors">Criar Evento</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/check-in" className="hover:text-primary transition-colors">Check-in</Link></li>
              <li><Link to="/relatorios" className="hover:text-primary transition-colors">Relatórios</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/ajuda" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Fale Conosco</Link></li>
              <li><Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 EXPO 3D BR. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
