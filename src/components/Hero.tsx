import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Pós-graduação presencial referência em{" "}
            <span className="text-gradient">Saúde e Estética</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
            Professores que são destaque nas principais instituições de Santa Catarina.
          </p>
          <Button variant="hero" size="xl">
            Conheça nossos cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
