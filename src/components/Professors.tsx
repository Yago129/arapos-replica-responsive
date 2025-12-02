import { Button } from "@/components/ui/button";

const professors = [
  {
    name: "Prof. Marcia Manoel Reus",
    role: "Coordenadora",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Prof. Raquel Eleine Wolpe",
    role: "Coordenadora",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Prof. Gessian Kelly Walter",
    role: "Professora",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Prof. Juliana Zorzella",
    role: "Coordenadora",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Prof. Fernando Tassinari",
    role: "Professor",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face"
  }
];

const Professors = () => {
  return (
    <section id="docentes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
          Grandes nomes no Instituto ARA
        </h2>

        {/* Professors Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {professors.map((professor, index) => (
            <div 
              key={professor.name}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-border group-hover:ring-primary transition-all duration-300">
                <img 
                  src={professor.image} 
                  alt={professor.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-foreground font-medium text-sm">{professor.name}</h3>
              <p className="text-muted-foreground text-xs">{professor.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Conheça nosso Corpo Docente
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Professors;
