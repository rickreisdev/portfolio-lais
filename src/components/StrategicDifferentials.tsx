import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Cog, Building } from "lucide-react";

const StrategicDifferentials = () => {
  const differentials = [
    {
      icon: Brain,
      title: "Domínio em IA Generativa",
      description: "Aplicação prática de inteligência artificial generativa para revolucionar análises de crédito, automatizar processos decisórios e extrair insights estratégicos de grandes volumes de dados financeiros.",
      technologies: ["ChatGPT/Claude Integration", "Análise Preditiva", "Machine Learning", "Automação Inteligente"]
    },
    {
      icon: BarChart3,
      title: "Expertise Técnica Avançada",
      description: "Domínio completo de ferramentas analíticas e financeiras essenciais para modelagem, visualização de dados e criação de soluções que geram impacto direto nos resultados.",
      technologies: ["Excel Avançado/VBA", "Power BI", "Modelagem Financeira", "Dashboards Executivos"]
    },
    {
      icon: Cog,
      title: "Automação & Otimização",
      description: "Especialização em identificar, projetar e implementar soluções de automação que eliminam gargalos operacionais, reduzem erros e aumentam exponencialmente a produtividade.",
      technologies: ["Process Automation", "Workflow Design", "RPA Implementation", "Otimização Operacional"]
    },
    {
      icon: Building,
      title: "Aplicação Prática no Crédito",
      description: "Experiência comprovada na aplicação estratégica dessas tecnologias especificamente no setor de crédito, com resultados mensuráveis em análise de risco, aprovação e gestão de portfolio.",
      technologies: ["Análise de Balanços", "Credit Scoring", "Risk Assessment", "Portfolio Management"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-elegant text-center mb-8">
            Diferenciais Estratégicos
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {differentials.map((differential, index) => {
              const IconComponent = differential.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-border/50 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-glow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-elegant mb-3">
                        {differential.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {differential.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {differential.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicDifferentials;