import { Instagram, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 40 40" fill="currentColor">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 28L20 12L28 28H12Z" fill="currentColor"/>
              </svg>
              <div>
                <span className="text-foreground font-serif text-xl font-bold">ARA</span>
                <span className="block text-[9px] text-muted-foreground tracking-wider uppercase">Instituto de Pós-Graduação</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Referência em pós-graduação presencial em Saúde e Estética em Santa Catarina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sobre o ARA</a></li>
              <li><a href="#docentes" className="text-muted-foreground hover:text-primary transition-colors text-sm">Corpo Docente</a></li>
              <li><a href="#cursos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cursos</a></li>
              <li><a href="#novidades" className="text-muted-foreground hover:text-primary transition-colors text-sm">Novidades</a></li>
              <li><a href="#clinica" className="text-muted-foreground hover:text-primary transition-colors text-sm">Clínica Escola</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Florianópolis, Santa Catarina</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>(48) 99832-8116</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@araposgraduacao.com.br</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Instituto ARA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
