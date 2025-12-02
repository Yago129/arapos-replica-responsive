import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const courses = [
  "Fisioterapia Avançada",
  "Enfermagem em Urgência",
  "Nutrição Clínica",
  "Estética Facial Avançada",
  "Harmonização Orofacial",
  "Estética Corporal",
  "Gestão em Saúde",
  "MBA em Saúde",
  "Implantodontia",
  "Ortodontia",
  "Endodontia",
];

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Inscrição enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", phone: "", course: "" });
  };

  return (
    <section id="inscricao" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-4">
              Faça sua Inscrição
            </h2>
            <p className="text-primary-foreground/80">
              Preencha o formulário abaixo e garanta sua vaga em nossos cursos de pós-graduação
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Celular
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="course" className="text-foreground font-medium">
                  Curso Desejado
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => setFormData({ ...formData, course: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecione um curso" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Enviar Inscrição
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;