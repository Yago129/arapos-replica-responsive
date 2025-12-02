import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Inscrição", href: "/inscricao" },
    { label: "Novidades", href: "/novidades" },
    { label: "Corpo Docente", href: "/docentes" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg className="w-10 h-10 text-primary" viewBox="0 0 40 40" fill="currentColor">
                <rect x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <text x="20" y="27" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">IB</text>
              </svg>
              <div className="ml-2">
                <span className="text-foreground font-serif text-2xl font-bold tracking-wider">IBEM</span>
                <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Instituto de Pós-Graduação</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors text-sm font-medium ${
                  location.pathname === item.href 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" size="lg" asChild>
              <Link to="/inscricao">Inscreva-se Agora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors text-sm font-medium ${
                    location.pathname === item.href 
                      ? "text-primary" 
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" className="mt-2" asChild>
                <Link to="/inscricao">Inscreva-se Agora</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;