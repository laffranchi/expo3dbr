import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Ticket, User, ChevronDown, LogOut, Loader2, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useAdminCheck } from "@/hooks/useAdminCheck";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, signOut } = useAuth();
  const { isAdmin } = useAdminCheck();
  const navigate = useNavigate();
  const { toast } = useToast();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Quero ser Palestrante", href: "/palestrante" },
    { name: "Quero Expor, Patrocinar ou Ser Case", href: "/expositor" },
  ];

  const participarLinks = [
    { name: "Influencer/Imprensa", href: "/influencer" },
  ];

  const extraLinks = [
    { name: "Edições Anteriores", href: "/edicoes-anteriores" },
    { name: "Blog", href: "/blog" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Logout realizado",
      description: "Até logo!",
    });
    navigate("/");
    setIsMenuOpen(false);
  };

  const getUserDisplayName = () => {
    if (!user) return "";
    return user.user_metadata?.full_name || user.email?.split("@")[0] || "Usuário";
  };

  return (
    <header className="sticky top-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="EXPO 3D BR" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Quero Participar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                Quero Participar
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-background border">
                {participarLinks.map((link) =>
                  link.href.startsWith("#") ? (
                    <DropdownMenuItem
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="cursor-pointer"
                    >
                      {link.name}
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem key={link.name} asChild>
                      <Link to={link.href}>{link.name}</Link>
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {extraLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/meus-ingressos">
              <Button variant="ghost" size="sm" className="gap-2">
                <Ticket className="h-4 w-4" />
                Meus Ingressos
              </Button>
            </Link>
            
            {loading ? (
              <Button variant="outline" size="sm" disabled>
                <Loader2 className="h-4 w-4 animate-spin" />
              </Button>
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    {getUserDisplayName()}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background border">
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link to="/meus-ingressos" className="flex items-center gap-2">
                      <Ticket className="h-4 w-4" />
                      Meus Ingressos
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 text-destructive">
                    <LogOut className="h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  Entrar
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) =>
                  link.href.startsWith("#") ? (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                
                {/* Quero Participar Section */}
                <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                  Quero Participar
                </div>
                {participarLinks.map((link) =>
                  link.href.startsWith("#") ? (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left px-6 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="px-6 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}

                <hr className="my-2 border-border" />

                {extraLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <hr className="my-2 border-border" />
                <Link
                  to="/meus-ingressos"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Ticket className="h-4 w-4" />
                  Meus Ingressos
                </Link>
                
                {loading ? (
                  <div className="flex items-center gap-2 px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Carregando...
                  </div>
                ) : user ? (
                  <>
                    <div className="flex items-center gap-2 px-4 py-3 text-foreground">
                      <User className="h-4 w-4" />
                      {getUserDisplayName()}
                    </div>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="flex items-center gap-2 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg text-destructive hover:bg-muted transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    Entrar
                  </Link>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
