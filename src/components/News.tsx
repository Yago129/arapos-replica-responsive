import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <section id="novidades" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
          Novidades e conteúdos exclusivos
        </h2>

        <div className="flex justify-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open("https://example.com", "_blank")}
          >
            Acessar Novidades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
