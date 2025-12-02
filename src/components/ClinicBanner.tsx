const ClinicBanner = () => {
  return (
    <section id="clinica" className="bg-secondary py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 40 40" fill="currentColor">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 28L20 12L28 28H12Z" fill="currentColor"/>
            </svg>
            <span className="text-foreground font-serif text-lg font-semibold">ARA</span>
            <span className="text-muted-foreground text-xs">Clínica Escola</span>
          </div>
          <p className="text-foreground">
            Conheça a nossa Clínica Escola, acesse o site:{" "}
            <a href="#" className="text-primary hover:underline font-semibold">
              CLIQUE AQUI
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClinicBanner;
