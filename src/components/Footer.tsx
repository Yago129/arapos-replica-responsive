import { Instagram, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-10 h-10 text-primary-foreground" viewBox="0 0 40 40" fill="currentColor">
                <rect x="2" y="2" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                <text x="20" y="27" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">IB</text>
              </svg>
              <div>
                <span className="text-primary-foreground font-serif text-xl font-bold">IBEM</span>
                <span className="block text-[9px] text-primary-foreground/70 tracking-wider uppercase">Instituto de Pós-Graduação</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Referência em pós-graduação presencial em Saúde e Estética.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Sobre o IBEM</a></li>
              <li><a href="#cursos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Cursos</a></li>
              <li><a href="#inscricao" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Inscrição</a></li>
              <li><a href="#novidades" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Novidades</a></li>
              <li><a href="#docentes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Corpo Docente</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 text-primary-foreground flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <Phone className="w-4 h-4 text-primary-foreground" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <Mail className="w-4 h-4 text-primary-foreground" />
                <span>contato@ibem.com.br</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Instituto IBEM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;