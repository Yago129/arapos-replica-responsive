import { Award, RefreshCw, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Reconhecido pelo MEC",
    description: "O Instituto ARA possui reconhecimento pelo MEC, o que traz garantia de qualidade e eficiência nos cursos ministrados."
  },
  {
    icon: RefreshCw,
    title: "Atualização Constante",
    description: "Mantenha-se sempre atualizado com o que há de mais novo no mercado, os cursos ARA são o diferencial no seu currículo."
  },
  {
    icon: Clock,
    title: "Otimização de Tempo",
    description: "Cursos com horários flexíveis e jornadas diferenciadas, para que você possa otimizar seu tempo enquanto se capacita."
  }
];

const WhyDifferent = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title and Description */}
          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Por que somos diferente das outras instituições?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aprofunde seus conhecimentos e impulsione sua carreira nesse campo em constante evolução. 
              Nossos cursos oferecem uma abordagem abrangente, combinando teoria e prática para capacitá-lo(a) 
              com habilidades avançadas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Aqui você tem acesso a professores altamente qualificados, laboratórios modernos e uma estrutura 
              de aprendizado envolvente. Nossos programas são projetados para atender às demandas do mercado de 
              estética, abrangendo tópicos como técnicas avançadas de tratamentos faciais e corporais, terapias 
              inovadoras, gestão de clínicas estéticas e ética profissional.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
