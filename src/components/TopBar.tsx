import { Instagram, Youtube, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="text-primary-foreground hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.53v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.88-2.89c.28 0 .54.04.79.11v-2.6a5.5 5.5 0 0 0-.79-.06 5.42 5.42 0 1 0 5.42 5.42V8.79a7.35 7.35 0 0 0 4.3 1.38V7.65a4.85 4.85 0 0 1-.53.04z"/>
            </svg>
          </a>
          <a href="#" className="text-primary-foreground hover:opacity-80 transition-opacity">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="text-primary-foreground hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
          <a href="#" className="text-primary-foreground hover:opacity-80 transition-opacity">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-primary-foreground hover:opacity-80 transition-opacity">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
        <a href="#inscricao" className="text-primary-foreground text-sm font-semibold hover:opacity-80 transition-opacity uppercase tracking-wide">
          Garanta sua vaga, clique aqui
        </a>
      </div>
    </div>
  );
};

export default TopBar;
