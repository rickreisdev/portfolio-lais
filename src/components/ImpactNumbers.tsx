import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap, Calendar } from "lucide-react";

const ImpactNumbers = () => {
  const metrics = [
    {
      icon: TrendingUp,
      number: "R$ 45Mi",
      label: "Em Propostas de Crédito",
      description: "Volume total de propostas de crédito estruturadas para empresas do middle market"
    },
    {
      icon: Users,
      number: "+200",
      label: "Empresas Atendidas",
      description: "Portfolio diversificado de clientes com análises personalizadas e soluções sob medida"
    },
    {
      icon: Target,
      number: "25+",
      label: "Processos Otimizados",
      description: "Fluxos comerciais e operacionais automatizados com redução significativa de tempo"
    },
    {
      icon: Calendar,
      number: "2 anos",
      label: "Evolução Acelerada",
      description: "De estagiária a Gerente Assistente em trajetória de crescimento excepcional"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Impacto em Números
          </h2>
          <p className="text-xl text-white/90 text-center mb-16">
            Resultados concretos que demonstram excelência e eficiência
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2">
                    {metric.number}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {metric.label}
                  </h3>
                  
                  <p className="text-sm text-white/80 leading-relaxed">
                    {metric.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Performance Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                Crescimento Acelerado
              </h4>
              <p className="text-white/80 text-sm">
                Evolução de carreira rápida baseada em resultados excepcionais
              </p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                Eficiência Operacional
              </h4>
              <p className="text-white/80 text-sm">
                Redução significativa de tempo em processos críticos
              </p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                Inovação Contínua
              </h4>
              <p className="text-white/80 text-sm">
                Implementação de IA e automação em análises de crédito
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;