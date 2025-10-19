import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, TrendingUp, Users2 } from "lucide-react";

const ProfessionalJourney = () => {
  const timeline = [
    {
      period: "2023 - Presente",
      title: "Graduação em Ciências Contábeis",
      institution: "USP - Universidade de São Paulo",
      type: "education",
      icon: GraduationCap,
      description: "Formação sólida em ciências contábeis com foco em análise financeira e estruturação de crédito."
    },
    {
      period: "Jan/2025 - Presente",
      title: "Gerente Assistente Comercial",
      institution: "Bradesco",
      type: "work",
      icon: Briefcase,
      description: "Gestão comercial estratégica para empresas do middle market, com foco em análise de balanços, modelagem financeira e otimização de processos.",
      achievements: [
        "Gestão de mais de R$ 45 milhões em propostas de crédito",
        "Atendimento a mais de 200 empresas",
        "Otimização de processos comerciais e operacionais"
      ]
    },
    {
      period: "Jan/2024 - Dez/2024",
      title: "Estagiária Gerência Regional",
      institution: "Bradesco",
      type: "work",
      icon: TrendingUp,
      description: "Apoio à Gerência Regional Ribeirão Preto Leste na gestão de 44 agências, com foco em análise de indicadores estratégicos.",
      achievements: [
        "Desenvolvimento de relatórios estratégicos",
        "Automatização de apresentações executivas",
        "Suporte na evolução dos resultados regionais"
      ]
    }
  ];

  const skills = [
    "Excel Avançado",
    "Comunicação Estratégica", 
    "Análise de Dados",
    "Modelagem Financeira",
    "Estruturação de Crédito",
    "Automação de Processos",
    "Inteligência Artificial",
    "Dashboards Inteligentes"
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-elegant text-center mb-4">
            Trajetória Profissional
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Trajetória de crescimento baseada em resultados e inovação
          </p>

          {/* Timeline */}
          <div className="space-y-12 mb-16">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-professional to-professional-light"></div>
                  )}
                  
                  <Card className="pl-20 pr-8 py-8 hover:shadow-card transition-all duration-300 border-l-4 border-l-professional">
                    {/* Icon */}
                    <div className="absolute left-4 top-8 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center shadow-glow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {item.period}
                        </Badge>
                        <h3 className="text-2xl font-bold text-elegant mb-1">
                          {item.title}
                        </h3>
                        <p className="text-lg text-professional font-semibold">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {item.achievements && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-elegant">Principais Resultados:</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-professional rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Skills Section */}
          <Card className="p-8 bg-gradient-card">
            <h3 className="text-2xl font-bold text-elegant text-center mb-8">
              Competências Técnicas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="px-4 py-2 bg-professional text-white hover:bg-professional-light transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;