import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "ARA", href: "#" },
    { label: "Corpo Docente", href: "#docentes" },
    { label: "Cursos", href: "#cursos" },
    { label: "Novidades", href: "#novidades" },
    { label: "Clínica Escola", href: "#clinica" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 28L20 12L28 28H12Z" fill="currentColor"/>
              </svg>
              <div className="ml-2">
                <span className="text-foreground font-serif text-2xl font-bold tracking-wider">ARA</span>
                <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Instituto de Pós-Graduação</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="outline" size="lg">
              HOF e Cirurgias - exclusivo ODONTO
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
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" className="mt-2">
                HOF e Cirurgias - exclusivo ODONTO
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
