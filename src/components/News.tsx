import { useState } from "react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Uma nova experiência de atualização no Instituto IBEM",
    excerpt: "Instituto IBEM lança iniciativa de workshops gratuitos voltada ao desenvolvimento contínuo e à prática responsável na estética e saúde...",
    date: "8 de nov.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Fisioterapia além do convencional: especializações que abrem portas",
    excerpt: "A fisioterapia conservadora vai muito além das práticas habituais de reabilitação motora. O avanço das pesquisas...",
    date: "3 de nov.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Precisamos falar sobre Estética Íntima. E não, não é sobre vaidade.",
    excerpt: "Você já percebeu como falamos livremente sobre skincare, preenchimento facial e procedimentos estéticos…",
    date: "8 de out.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"
  }
];

const News = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("E-mail cadastrado com sucesso!");
    setEmail("");
  };

  return (
    <section id="novidades" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
          Novidades e conteúdos exclusivos
        </h2>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <article 
              key={item.id}
              className="group cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-muted-foreground text-sm">{item.date}</span>
              <h3 className="font-serif text-xl text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center">
          <p className="text-foreground mb-6">
            Deixe seu e-mail e receba todas nossas atualizações
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" variant="hero" size="lg">
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default News;
