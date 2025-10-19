import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const PersonalSummary = () => {
  const highlights = [
    {
      icon: Target,
      title: "Disciplina",
      description: "Formada através do esporte e aplicada estrategicamente nos negócios"
    },
    {
      icon: Users,
      title: "Liderança",
      description: "Espírito natural de liderança com foco em resultados mensuráveis"
    },
    {
      icon: TrendingUp,
      title: "Dados & IA",
      description: "Paixão por transformar dados em insights que geram impacto real"
    },
    {
      icon: Zap,
      title: "Visão de Futuro",
      description: "Orientada por valores sólidos e inovação contínua"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-elegant text-center mb-12">
            Sobre Mim
          </h2>

          <Card className="p-8 mb-12 bg-gradient-card shadow-elegant border-0">
            <p className="text-lg leading-relaxed text-foreground/90 text-center">
              Profissional moldada pela disciplina rigorosa do esporte, onde aprendi que resultados 
              excepcionais vêm da consistência e determinação. Essa base sólida alimenta meu espírito 
              de liderança natural, aplicado estrategicamente no ambiente corporativo. Meu perfil 
              analítico encontra sua expressão na paixão por dados e tecnologia, especialmente na 
              aplicação prática de inteligência artificial para revolucionar análises de crédito. 
              Uma trajetória de evolução de carreira acelerada e consistente, sempre orientada por 
              inovação e resultados mensuráveis.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 border-border/50"
                >
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-elegant mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSummary;