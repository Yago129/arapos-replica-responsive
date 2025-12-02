import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Stethoscope, Sparkles, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const courseCategories = [
  {
    id: "saude",
    label: "Saúde",
    icon: Stethoscope,
    courses: [
      { name: "Fisioterapia Avançada", duration: "18 meses", description: "Especialização em técnicas avançadas de fisioterapia" },
      { name: "Enfermagem em Urgência", duration: "12 meses", description: "Capacitação para atendimento em emergências" },
      { name: "Nutrição Clínica", duration: "15 meses", description: "Especialização em nutrição hospitalar e clínica" },
    ]
  },
  {
    id: "estetica",
    label: "Estética",
    icon: Sparkles,
    courses: [
      { name: "Estética Facial Avançada", duration: "12 meses", description: "Técnicas modernas em estética facial" },
      { name: "Harmonização Orofacial", duration: "18 meses", description: "Especialização em HOF para dentistas" },
      { name: "Estética Corporal", duration: "15 meses", description: "Procedimentos estéticos corporais" },
    ]
  },
  {
    id: "gestao",
    label: "Gestão",
    icon: Brain,
    courses: [
      { name: "Gestão em Saúde", duration: "12 meses", description: "Administração de clínicas e hospitais" },
      { name: "MBA em Saúde", duration: "18 meses", description: "Gestão estratégica na área da saúde" },
    ]
  },
  {
    id: "odontologia",
    label: "Odontologia",
    icon: GraduationCap,
    courses: [
      { name: "Implantodontia", duration: "24 meses", description: "Especialização em implantes dentários" },
      { name: "Ortodontia", duration: "24 meses", description: "Correção de problemas dentofaciais" },
      { name: "Endodontia", duration: "18 meses", description: "Tratamento de canal e procedimentos relacionados" },
    ]
  },
];

const Courses = () => {
  return (
    <section id="cursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Nossos Cursos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa grade completa de cursos de pós-graduação nas áreas de saúde e estética
          </p>
        </div>

        <Tabs defaultValue="saude" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
            {courseCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full border border-border data-[state=active]:border-primary transition-all"
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {courseCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.courses.map((course, index) => (
                  <div
                    key={course.name}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="font-serif text-xl text-foreground mb-2">{course.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{course.duration}</p>
                    <p className="text-muted-foreground text-sm">{course.description}</p>
                    <Link 
                      to="/inscricao" 
                      className="inline-block mt-4 text-primary hover:underline text-sm font-medium"
                    >
                      Inscreva-se →
                    </Link>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Courses;