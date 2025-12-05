import { Button } from "@/components/ui/button";

const News = () => {
  return (
    <section id="novidades" className="py-20 bg-card">
      <div className="container mx-auto px-4 flex justify-center">
        <Button 
          variant="hero" 
          size="xl"
          onClick={() => window.open("https://example.com", "_blank")}
        >
          Acessar Novidades
        </Button>
      </div>
    </section>
  );
};

export default News;
